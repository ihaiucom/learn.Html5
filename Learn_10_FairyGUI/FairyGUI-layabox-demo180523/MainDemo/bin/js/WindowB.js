var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var WindowB = /** @class */ (function (_super) {
    __extends(WindowB, _super);
    function WindowB() {
        return _super.call(this) || this;
    }
    WindowB.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Basic", "WindowB").asCom;
        this.center();
        //弹出窗口的动效已中心为轴心
        this.setPivot(0.5, 0.5);
    };
    WindowB.prototype.doShowAnimation = function () {
        this.setScale(0.1, 0.1);
        laya.utils.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, laya.utils.Ease.quadOut, Handler.create(this, this.onShown));
    };
    WindowB.prototype.doHideAnimation = function () {
        laya.utils.Tween.to(this, { scaleX: 0.1, scaleY: 0.1 }, 300, laya.utils.Ease.quadOut, Handler.create(this, this.hideImmediately));
    };
    WindowB.prototype.onShown = function () {
        this.contentPane.getTransition("t1").play();
    };
    WindowB.prototype.onHide = function () {
        this.contentPane.getTransition("t1").stop();
    };
    return WindowB;
}(fairygui.Window));
//# sourceMappingURL=WindowB.js.map