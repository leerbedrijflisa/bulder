using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebApi
{
    [Route("subscriptions")]
    public class SubscriptionsController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var subscriptions = await _db.FetchSubscriptions();
            return new ObjectResult(subscriptions);
        }

        [HttpGet("{id}", Name = "subscription")]
        public IActionResult Get(string id)
        {
            return new ObjectResult("");
        }

        private readonly Database _db = new Database();
    }
}
