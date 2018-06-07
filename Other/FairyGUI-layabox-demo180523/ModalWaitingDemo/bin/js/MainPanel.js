var MainPanel = (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("ModalWaiting", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._testWin = new TestWin();
        this._view.getChild("n0").onClick(this, function () { this._testWin.show(); });
        //这里模拟一个要锁住全屏的等待过程
        fairygui.GRoot.inst.showModalWait();
        Laya.timer.once(3000, this, function () {
            fairygui.GRoot.inst.closeModalWait();
        });
    }
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map