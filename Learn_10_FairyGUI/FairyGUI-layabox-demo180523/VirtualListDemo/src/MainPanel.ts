class MainPanel {
    private _view: fairygui.GComponent;
    private _list:fairygui.GList;
        
    public constructor() {
        this._view = fairygui.UIPackage.createObject("VirtualList","Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        this._view.getChild("n6").onClick(this,function():void { this._list.addSelection(500, true); });
        this._view.getChild("n7").onClick(this,function():void { this._list.scrollPane.scrollTop(); });
        this._view.getChild("n8").onClick(this,function():void { this._list.scrollPane.scrollBottom(); });
        
        this._list = this._view.getChild("mailList").asList;
        this._list.setVirtual();
        
        this._list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
        this._list.numItems = 1000;
    }
    
    private renderListItem(index:number, obj:fairygui.GObject):void {
        var item:MailItem = <MailItem><any>obj;
        item.setFetched(index % 3 == 0);
        item.setRead(index % 2 == 0);
        item.setTime("5 Nov 2015 16:24:33");
        item.title = index + " Mail title here";
    }
}

