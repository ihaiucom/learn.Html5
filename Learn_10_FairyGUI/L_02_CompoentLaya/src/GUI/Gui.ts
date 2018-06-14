class Gui
{
    static loadPackage(package: string | GuiPackageConfig)
    {
        if (isString(package))
        {
            Gui.loadPackageByName(package);
        }
        else
        {
            Gui.loadPackageByConfig(package);
        }
    }

    static loadPackageByName(packageName:string)
    {
        
    }


    static loadPackageByConfig(packageConfig:GuiPackageConfig)
    {

    }
}