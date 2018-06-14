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
/**
* name
*/
var configs;
(function (configs) {
    var MsgConfigRenderStruct = /** @class */ (function (_super) {
        __extends(MsgConfigRenderStruct, _super);
        function MsgConfigRenderStruct() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.path = "Msg";
            return _this;
        }
        MsgConfigRenderStruct.prototype.ParseCsv = function (csv) {
            var config = new configs.MsgConfig();
            config.id = parseInt(csv[this.GetHeadIndex("id")]);
            config.txt = csv[this.GetHeadIndex("id")];
        };
        return MsgConfigRenderStruct;
    }(configs.CsvConfigRender));
    configs.MsgConfigRenderStruct = MsgConfigRenderStruct;
})(configs || (configs = {}));
//# sourceMappingURL=MsgConfigRenderStruct.js.map