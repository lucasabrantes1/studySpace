using LanchesMac.Context;
using LanchesMac.Repositories;
using LanchesMac.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LanchesMac;

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {   
            services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddTransient<ILancheRepository, LancheRepository>();
            services.AddTransient<ICategoriaRepository, CategoriaRepository>();
            //Defini um serviço para poder acessar os serviços do httpcontext
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            //versão atualizada net6+
            //builder.Services.AddTransient<ILancheRepository, LancheRepository>();
            //builder.Services.AddTransient<ICategoriaRepository, CategoriaRepository>();
            services.AddControllersWithViews();

            //Registrando os middlewares
            services.AddMemoryCache();
            services.AddSession();

            
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
              app.UseDeveloperExceptionPage();
            }
            else
            {
                // Configuração para ambiente de produção.
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseStaticFiles();
            app.UseRouting();
            /********************* Habilitando o session *************************/
            app.UseSession();
            app.UseAuthorization();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }

