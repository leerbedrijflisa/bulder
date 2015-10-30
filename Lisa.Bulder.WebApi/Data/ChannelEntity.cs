using Microsoft.WindowsAzure.Storage.Table;

namespace Lisa.Bulder.WebApi
{
    public class ChannelEntity : TableEntity
    {
        public string Administrators { get; set; }
        public string Authors { get; set; }
    }
}