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
var MailItem = /** @class */ (function (_super) {
    __extends(MailItem, _super);
    function MailItem() {
        return _super.call(this) || this;
    }
    MailItem.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this._timeText = this.getChild("timeText").asTextField;
        this._readController = this.getController("IsRead");
        this._fetchController = this.getController("c1");
        this._trans = this.getTransition("t0");
    };
    MailItem.prototype.setTime = function (value) {
        this._timeText.text = value;
    };
    MailItem.prototype.setRead = function (value) {
        this._readController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.setFetched = function (value) {
        this._fetchController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.playEffect = function (delay) {
        this.visible = false;
        this._trans.play(null, 1, delay);
    };
    return MailItem;
}(fairygui.GButton));
//# sourceMappingURL=MailItem.js.map