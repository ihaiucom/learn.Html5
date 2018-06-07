
class GlobalWaiting extends fairygui.GComponent {
    private _obj: fairygui.GObject;
    
	public constructor() {
        super();
    }
    
    protected constructFromXML(xml:any):void
    {
        super.constructFromXML(xml);
        
        this._obj = this.getChild("n1");
        this.on(laya.events.Event.DISPLAY,this,this.onAddedToStage);
        this.on(laya.events.Event.UNDISPLAY,this,this.onRemoveFromStage);        
    }
    
    private onAddedToStage():void {
        Laya.timer.frameLoop(2, this, this.onTimer);
    }
    
    private onRemoveFromStage():void {
        Laya.timer.clear(this, this.onTimer);
    }
    
    private onTimer():void {
        var i:number = this._obj.rotation;
        i += 10;
        if(i > 360)
            i = i % 360;
        this._obj.rotation = i;
    }
}
