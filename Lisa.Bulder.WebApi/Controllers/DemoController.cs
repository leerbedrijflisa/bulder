using Microsoft.AspNet.Mvc;

namespace Lisa.Bulder.WebClient.Controllers
{
    [Route("")]
    public class DemoController : Controller
    {
        public IActionResult Get()
        {
            var person = new object[]
            {
                new { FirstName = "Mike", LastName = "Faro" },
                new { FirstName = "Rick", LastName = "Jelier" }
            };
            return new ObjectResult(person);
        }
    }
}