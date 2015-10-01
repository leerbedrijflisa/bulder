using Microsoft.WindowsAzure.Storage.Table;

namespace Lisa.Bulder.WebApi
{
    public class MessageEntity : TableEntity
    {
        public string Text { get; set; }
        public string Author { get; set; }
    }
}