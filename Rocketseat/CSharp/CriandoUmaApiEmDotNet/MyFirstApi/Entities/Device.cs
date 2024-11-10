namespace MyFirstApi.Entities;

public abstract class Device
{
    protected bool IsConnected() => true;
    public abstract string GetBrand();
    public virtual string Hello()
    {
        return "Hello World"; 
    }

}
