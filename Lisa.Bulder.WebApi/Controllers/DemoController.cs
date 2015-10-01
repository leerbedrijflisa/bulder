using Microsoft.AspNet.Mvc;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebClient.Controllers
{
    [Route("")]
    public class DemoController : Controller
    {
        public async Task<IActionResult> Get()
        {
            var account = CloudStorageAccount.Parse("UseDevelopmentStorage=true");
            var client = account.CreateCloudTableClient();
            var table = client.GetTableReference("demo");
            await table.CreateIfNotExistsAsync();

            var query = new TableQuery<Person>();
            var segment = await table.ExecuteQuerySegmentedAsync(query, null);
            
            return new ObjectResult(segment.Results);
        }
    }

    public class Person : TableEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}