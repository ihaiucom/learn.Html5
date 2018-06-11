var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GlobalWaiting = (function (_super) {
    __extends(GlobalWaiting, _super);
    function GlobalWaiting() {
        _super.call(this);
    }
    GlobalWaiting.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this._obj = this.getChild("n1");
        this.on(laya.events.Event.DISPLAY, this, this.onAddedToStage);
        this.on(laya.events.Event.UNDISPLAY, this, this.onRemoveFromStage);
    };
    GlobalWaiting.prototype.onAddedToStage = function () {
        Laya.timer.frameLoop(2, this, this.onTimer);
    };
    GlobalWaiting.prototype.onRemoveFromStage = function () {
        Laya.timer.clear(this, this.onTimer);
    };
    GlobalWaiting.prototype.onTimer = function () {
        var i = this._obj.rotation;
        i += 10;
        if (i > 360)
            i = i % 360;
        this._obj.rotation = i;
    };
    return GlobalWaiting;
}(fairygui.GComponent));
//# sourceMappingURL=GlobalWaiting.js.map