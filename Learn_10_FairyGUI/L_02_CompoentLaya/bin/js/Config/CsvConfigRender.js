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
var configs;
(function (configs) {
    var CsvConfigRender = /** @class */ (function (_super) {
        __extends(CsvConfigRender, _super);
        function CsvConfigRender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 单元格分隔符
            _this.delimiter = "\t";
            // 表头--类型
            _this.headTypes = new Dictionary();
            // 表头--索引
            _this.headKeyEns = new Dictionary();
            // 表头--字段
            _this.headKeyFields = new Dictionary();
            // 表头--中文
            _this.headKeyCns = new Dictionary();
            return _this;
        }
        CsvConfigRender.prototype.reload = function () {
            this.headTypes.clear();
            this.headKeyEns.clear();
            this.headKeyFields.clear();
            this.headKeyCns.clear();
        };
        CsvConfigRender.prototype.parse = function (txt) {
            if (txt == null) {
                console.error(this.path + ": txt=" + txt);
                return;
            }
            var lines = txt.split('\n');
            var line;
            var csv;
            line = lines[0];
            csv = line.split(this.delimiter);
            this.ParseHeadTypes(csv);
            line = lines[1];
            csv = line.split(this.delimiter);
            this.ParseHeadKeyCN(csv);
            line = lines[2];
            csv = line.split(this.delimiter);
            this.ParseHeadKeyEN(csv);
            for (var i = 3; i < lines.length; i++) {
                line = lines[i];
                csv = line.split(this.delimiter);
                this.ParseCsv(csv);
            }
        };
        CsvConfigRender.prototype.ParseHeadTypes = function (csv) {
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headTypes.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseHeadKeyCN = function (csv) {
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    this.headKeyCns.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseHeadKeyEN = function (csv) {
            Laya.Dictionary;
            var key;
            for (var i = 0; i < csv.length; i++) {
                key = csv[i];
                if (!isNullOrEmpty(key)) {
                    key = key.trim();
                    if (this.headKeyEns.hasKey(key)) {
                        console.error(this.path + ": ParseHeadKeyEN \u5DF2\u7ECF\u5B58\u5728key= " + key + ",  i = " + i);
                    }
                    this.headKeyEns.add(key, i);
                    this.headKeyFields.add(i, key);
                }
            }
        };
        CsvConfigRender.prototype.ParseCsv = function (csv) {
        };
        CsvConfigRender.prototype.GetHeadField = function (index) {
            return this.headKeyFields.getValue(index);
        };
        CsvConfigRender.prototype.GetHeadIndex = function (enName) {
            if (this.headKeyEns.hasKey(enName)) {
                return this.headKeyEns.getValue(enName);
            }
            console.error(this.path + ": headKeyEns[" + enName + "] = -1");
            return -1;
        };
        return CsvConfigRender;
    }(configs.BaseConfigRender));
    configs.CsvConfigRender = CsvConfigRender;
})(configs || (configs = {}));
//# sourceMappingURL=CsvConfigRender.js.map