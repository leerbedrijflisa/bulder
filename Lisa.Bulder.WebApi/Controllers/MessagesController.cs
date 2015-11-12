using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebApi
{
    [Route("messages")]
    public class MessagesController : Controller
    {
        //get all messages
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var messages = await _db.FetchMessages();
            return new ObjectResult(messages);
        }

        [HttpGet("{id}", Name = "message")]
        public IActionResult Get(string id)
        {
            return new ObjectResult("");
        }

        //create message
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] MessageEntity message)
        {
            var createdMessage = await _db.CreateMessage(message);
            string location = Url.RouteUrl("message", new { id = createdMessage.RowKey }, Request.Scheme);

            return new CreatedResult(location, createdMessage);
        }

        private readonly Database _db = new Database();
    }
}
