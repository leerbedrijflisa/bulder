using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Cors.Core;
using Microsoft.Framework.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace Lisa.Bulder.WebApi
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            });

            var policy = new CorsPolicy();
            policy.Origins.Add("*");
            policy.Methods.Add("*");
            policy.Headers.Add("*");
            services.AddCors(config => config.AddPolicy("allowAll", policy));
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();
            app.UseCors("allowAll");
            app.UseMvc();
        }
    }
}