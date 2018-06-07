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
var WindowA = /** @class */ (function (_super) {
    __extends(WindowA, _super);
    function WindowA() {
        return _super.call(this) || this;
    }
    WindowA.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Basic", "WindowA").asCom;
        this.center();
    };
    WindowA.prototype.onShown = function () {
        var list = this.contentPane.getChild("n6").asList;
        list.removeChildrenToPool();
        for (var i = 0; i < 6; i++) {
            var item = list.addItemFromPool().asButton;
            item.title = "" + i;
            item.icon = fairygui.UIPackage.getItemURL("Demo", "r4");
        }
    };
    return WindowA;
}(fairygui.Window));
//# sourceMappingURL=WindowA.js.map