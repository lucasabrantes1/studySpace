using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public class MyFirstApiBaseController : ControllerBase
{
    public string Author { get; set; } = "Lucas Abrantes";
}
