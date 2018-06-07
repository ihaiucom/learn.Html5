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
var ScrollPaneHeader = /** @class */ (function (_super) {
    __extends(ScrollPaneHeader, _super);
    function ScrollPaneHeader() {
        return _super.call(this) || this;
    }
    ScrollPaneHeader.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this._c1 = this.getController("c1");
        this.on(fairygui.Events.SIZE_CHANGED, this, this.onSizeChanged);
    };
    ScrollPaneHeader.prototype.onSizeChanged = function (event) {
        if (this._c1.selectedIndex == 2 || this._c1.selectedIndex == 3)
            return;
        if (this.height > this.sourceHeight)
            this._c1.selectedIndex = 1;
        else
            this._c1.selectedIndex = 0;
    };
    Object.defineProperty(ScrollPaneHeader.prototype, "readyToRefresh", {
        get: function () {
            return this._c1.selectedIndex == 1;
        },
        enumerable: true,
        configurable: true
    });
    ScrollPaneHeader.prototype.setRefreshStatus = function (value) {
        this._c1.selectedIndex = value;
    };
    return ScrollPaneHeader;
}(fairygui.GComponent));
//# sourceMappingURL=ScrollPaneHeader.js.map