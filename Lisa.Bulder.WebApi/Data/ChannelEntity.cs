using Microsoft.WindowsAzure.Storage.Table;

namespace Lisa.Bulder.WebApi
{
    public class ChannelEntity : TableEntity
    {
        public string Name { get; set; }
    }
}