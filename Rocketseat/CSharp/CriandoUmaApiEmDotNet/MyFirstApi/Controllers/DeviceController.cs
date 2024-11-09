using Microsoft.AspNetCore.Mvc;

namespace MyFirstApi.Controllers;
public class DeviceController : MyFirstApiBaseController
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(Author);
    }
}
