using MyFirstApi;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var teste = builder.Configuration.GetValue<int>("MyClass:Number");
//var teste = builder.Configuration.GetSection("MyClass").GetSection("Number").Get<int>();
//var teste = builder.Configuration.GetSection("MyClass").Get<MyClass>();
//var teste = builder.Configuration.GetSection("Object").GetSection("Prop1").Value;
//teste = builder.Configuration.GetSection("Object").GetSection("Prop2").Value;
//teste = builder.Configuration.GetSection("Object").GetSection("PropA").Value;


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
