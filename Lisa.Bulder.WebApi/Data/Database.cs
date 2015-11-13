using Lisa.Bulder.WebApi.Data;
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
            _users = client.GetTableReference("users");
            _channels = client.GetTableReference("channels");
            _subscriptions = client.GetTableReference("subscriptions");
        }

        //Messages
        public async Task<IEnumerable<MessageEntity>> FetchMessages()
        {
            var query = new TableQuery<MessageEntity>();
            var segment = await _messages.ExecuteQuerySegmentedAsync(query, null);
            return segment;
        }

        public async Task<MessageEntity> CreateMessage(MessageEntity message)
        {
            message.PartitionKey = message.PartitionKey;
            message.RowKey = Guid.NewGuid().ToString();
            var operation = TableOperation.Insert(message);
            var result = await _messages.ExecuteAsync(operation);
            return (MessageEntity) result.Result;
        }

        //Channels
        public async Task<IEnumerable<ChannelEntity>> FetchChannels()
        {
            var query = new TableQuery<ChannelEntity>();
            var segment = await _channels.ExecuteQuerySegmentedAsync(query, null);
            return segment;
        }

        public async Task<ChannelEntity> CreateChannel(ChannelEntity channel)
        {
            channel.PartitionKey = channel.PartitionKey;
            channel.RowKey = string.Empty;
            var operation = TableOperation.Insert(channel);
            var result = await _channels.ExecuteAsync(operation);
            return (ChannelEntity)result.Result;
        }

        //Subscriptions
        public async Task<IEnumerable<SubscriptionEntity>> FetchSubscriptions()
        {
            var query = new TableQuery<SubscriptionEntity>();
            var segment = await _subscriptions.ExecuteQuerySegmentedAsync(query, null);
            return segment;
        }

        public async Task<SubscriptionEntity> CreateSubscription(SubscriptionEntity subscription)
        {
            subscription.PartitionKey = subscription.PartitionKey;
            subscription.RowKey = Guid.NewGuid().ToString();
            var operation = TableOperation.Insert(subscription);
            var result = await _subscriptions.ExecuteAsync(operation);
            return (SubscriptionEntity)result.Result;
        }

        //Users
        public async Task<IEnumerable<UserEntity>> FetchUsers()
        {
            var query = new TableQuery<UserEntity>();
            var segment = await _users.ExecuteQuerySegmentedAsync(query, null);
            return segment;
        }

        public async Task<UserEntity> CreateUser(UserEntity user)
        {
            user.PartitionKey = user.PartitionKey;
            user.RowKey = string.Empty;
            var operation = TableOperation.Insert(user);
            var result = await _users.ExecuteAsync(operation);
            return (UserEntity)result.Result;
        }

        

        private CloudTable _messages;
        private CloudTable _channels;
        private CloudTable _subscriptions;
        private CloudTable _users;
    }
}