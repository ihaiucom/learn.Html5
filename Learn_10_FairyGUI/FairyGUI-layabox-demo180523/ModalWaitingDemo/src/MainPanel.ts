class MainPanel {
    private _view: fairygui.GComponent;
    private _testWin: TestWin;

    public constructor() {
        this._view = fairygui.UIPackage.createObject("ModalWaiting","Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width,fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);

        this._testWin = new TestWin();
        this._view.getChild("n0").onClick(this, function(): void { this._testWin.show(); });
        
        //这里模拟一个要锁住全屏的等待过程
        fairygui.GRoot.inst.showModalWait();
        Laya.timer.once(3000,this, function(): void {
            fairygui.GRoot.inst.closeModalWait();
        });
    }
}

