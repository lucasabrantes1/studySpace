namespace MyFirstApi.Entities;


//public sealed class Laptop : Device
public class Laptop : Device
{   

    public override string GetBrand()
    {
        return "Apple";
    }

    public override string Hello()
    {
        return "Lucas";
    }

    public string GetModel()
    {
        var isConnected = IsConnected();
        if (isConnected)
            return "Mackbook";
        return "Unknow";
    }
}
