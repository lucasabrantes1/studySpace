using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers;
[Route("api/[controller]")]
[ApiController]
public abstract class MyFirstApiBaseController : ControllerBase
{
    public string Author { get; set; } = "Lucas Abrantes";


    [HttpGet("heathy")]
    public IActionResult Heathy()
    {
        return Ok("IT`s working");
    }

    protected string GetCustomKey()
    {
        return Request.Headers["MyKey"].ToString();
    }
}
