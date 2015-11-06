using System.Net;
using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;
using Microsoft.Framework.OptionsModel;
using SendGrid;

namespace Lisa.Bulder.WebApi
{
    [Route("channels")]
    public class ChannelsController : Controller
    {
        public ChannelsController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var channels = await _db.FetchChannels();
            return new ObjectResult(channels);
        }

        [HttpGet("{id}", Name = "channel")]
        public IActionResult Get(string id)
        {
            return new ObjectResult("");
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ChannelEntity channel)
        {
            var createdChannel = await _db.CreateChannel(channel);
            string location = Url.RouteUrl("channel", new { id = createdChannel.RowKey }, Request.Scheme);

            return new CreatedResult(location, createdChannel);
        }

        [HttpPost("{emailAdress}", Name = "sendmail")]
        public async Task<IActionResult> SendMail([FromBody] string emailAdress)
        {
            var mail = new SendGridMessage();

            mail.AddTo(emailAdress);

            var credentials = new NetworkCredential(_appSettings.Value.SendGridUsername, _appSettings.Value.SendGridPassword);

            var transportWeb = new Web(credentials);

            await transportWeb.DeliverAsync(mail);

            return new HttpOkResult();
        }

        private readonly Database _db = new Database();
        private readonly IOptions<AppSettings> _appSettings;
    }
}
