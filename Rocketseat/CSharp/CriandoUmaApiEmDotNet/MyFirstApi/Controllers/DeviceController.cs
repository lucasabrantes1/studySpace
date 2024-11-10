using Microsoft.AspNetCore.Mvc;
using MyFirstApi.Entities;

namespace MyFirstApi.Controllers;
public class DeviceController : MyFirstApiBaseController
{
    [HttpGet]
    public IActionResult Get()        
    {   
        var key = GetCustomKey();

        return Ok(key);
    }
}
