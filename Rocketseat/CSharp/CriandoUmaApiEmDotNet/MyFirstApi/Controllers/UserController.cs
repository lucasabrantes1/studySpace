using Microsoft.AspNetCore.Mvc;
using MyFirstApi.Communication.Requests;
using MyFirstApi.Communication.Responses;

namespace MyFirstApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(User),StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(string),StatusCodes.Status400BadRequest)]
    public IActionResult Get([FromHeader]int id,[FromHeader] string? nickname)
    {
        var response = new User
        {   
            Id = 1, 
            Age = 7,
            Name = "Lucas"
        };

        return Ok(response);
    }


    [HttpPost]
    [ProducesResponseType(typeof(ResponseRegisteredUserJson), StatusCodes.Status201Created)]
    public IActionResult Create([FromBody] ResponseRegisteredUserJson request)
    {
        var response = new ResponseRegisteredUserJson
        {
            Id = 1,
            Name = request.Name,
        };
        return Created(string.Empty, response);
    }
}
