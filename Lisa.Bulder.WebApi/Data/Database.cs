using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Lisa.Bulder.WebApi
{
    public class Database
    {
        public Database()
        {
            var account = CloudStorageAccount.Parse("UseDevelopmentStorage=true");
            var client = account.CreateCloudTableClient();
            _messages = client.GetTableReference("messages");
        }

        public async Task<IEnumerable<MessageEntity>> FetchMessages()
        {
            var query = new TableQuery<MessageEntity>();
            var segment = await _messages.ExecuteQuerySegmentedAsync(query, null);
            return segment;
        }

        public async Task<MessageEntity> CreateMessage(MessageEntity message)
        {
            message.PartitionKey = string.Empty;
            message.RowKey = Guid.NewGuid().ToString();
            var operation = TableOperation.Insert(message);
            var result = await _messages.ExecuteAsync(operation);
            return (MessageEntity) result.Result;
        }

        private CloudTable _messages;
    }
}
