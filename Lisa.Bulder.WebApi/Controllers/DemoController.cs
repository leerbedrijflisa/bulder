using Microsoft.AspNet.Mvc;

namespace Lisa.Bulder.WebClient.Controllers
{
    [Route("")]
    public class DemoController : Controller
    {
        public IActionResult Get()
        {
            var person = new { FirstName = "Mike", LastName = "Faro" };
            return new ObjectResult(person);
        }
    }
}
