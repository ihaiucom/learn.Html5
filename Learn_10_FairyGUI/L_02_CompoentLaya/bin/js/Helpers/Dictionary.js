var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.dict = {};
    }
    Dictionary.prototype.add = function (key, val) {
        this.dict[key] = val;
    };
    Dictionary.prototype.remove = function (key) {
        this.dict[key] = undefined;
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.dict[key] != undefined;
    };
    Dictionary.prototype.getValue = function (key) {
        return this.dict[key];
    };
    Dictionary.prototype.getValues = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(this.dict[key]);
        }
        return list;
    };
    Dictionary.prototype.getKeys = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(key);
        }
        return list;
    };
    Dictionary.prototype.clear = function () {
        this.dict = {};
    };
    return Dictionary;
}());
//# sourceMappingURL=Dictionary.js.map