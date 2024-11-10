using System.Reflection.Metadata.Ecma335;

namespace MyFirstApi.Entities;

public class ClassA : Laptop
{
    public override string Hello()
    {
        return base.Hello();
    }
}
