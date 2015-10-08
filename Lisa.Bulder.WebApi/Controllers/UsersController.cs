using Microsoft.AspNet.Mvc;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebApi
{
    [Route("users")]
    public class UsersController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _db.FetchUsers();
            return new ObjectResult(users);
        }

        [HttpGet("{id}", Name = "user")]
        public IActionResult Get(string id)
        {
            return new ObjectResult("");
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserEntity user)
        {
            var createdUser = await _db.CreateUser(user);
            string location = Url.RouteUrl("user", new { id = createdUser.RowKey }, Request.Scheme);

            return new CreatedResult(location, createdUser);
        }

        private readonly Database _db = new Database();
    }
}
