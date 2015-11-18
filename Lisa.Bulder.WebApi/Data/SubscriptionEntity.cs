using Microsoft.WindowsAzure.Storage.Table;

namespace Lisa.Bulder.WebApi.Data
{
    public class SubscriptionEntity : TableEntity
    {
        public string EmailAddress { get; set; }
        public string TwitterChannel { get; set; }
    }
}
