
class ScrollPaneHeader extends fairygui.GComponent {

    private _c1: fairygui.Controller;

    public constructor() {
        super();
    }

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this._c1 = this.getController("c1");
        this.on(fairygui.Events.SIZE_CHANGED, this, this.onSizeChanged);
    }

    private onSizeChanged(event: laya.events.Event): void {
        if (this._c1.selectedIndex == 2 || this._c1.selectedIndex == 3)
            return;

        if (this.height > this.sourceHeight)
            this._c1.selectedIndex = 1;
        else
            this._c1.selectedIndex = 0;
    }

    public get readyToRefresh(): boolean {
        return this._c1.selectedIndex == 1;
    }

    public setRefreshStatus(value: number): void {
        this._c1.selectedIndex = value;
    }
}
