using Microsoft.WindowsAzure.Storage.Table;

namespace Lisa.Bulder.WebApi
{
    public class UserEntity : TableEntity
    {
        public string Name { get; set; }
    }
}
