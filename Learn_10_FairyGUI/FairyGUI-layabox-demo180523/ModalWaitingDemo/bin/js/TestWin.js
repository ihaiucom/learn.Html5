var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestWin = (function (_super) {
    __extends(TestWin, _super);
    function TestWin() {
        _super.call(this);
    }
    TestWin.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("ModalWaiting", "TestWin").asCom;
        this.contentPane.getChild("n1").onClick(this, this.onClickStart);
    };
    TestWin.prototype.onClickStart = function () {
        //这里模拟一个要锁住当前窗口的过程，在锁定过程中，窗口仍然是可以移动和关闭的
        this.showModalWait();
        Laya.timer.once(3000, this, function () { this.closeModalWait(); });
    };
    return TestWin;
}(fairygui.Window));
//# sourceMappingURL=TestWin.js.map