using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebApi
{
    [Route("channels")]
    public class ChannelsController : Controller
    {
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

        private readonly Database _db = new Database();
    }
}