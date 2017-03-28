using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Energiejournaal.Startup))]
namespace Energiejournaal
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
