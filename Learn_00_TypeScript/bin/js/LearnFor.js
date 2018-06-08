var LearnFor = /** @class */ (function () {
    function LearnFor() {
        var _this = this;
        setTimeout(function () {
            _this.Test1();
        }, 500);
    }
    LearnFor.prototype.Test1 = function () {
        var items = [10, 20, 30, 40, 50];
        items.forEach(function (item) {
            log(item);
        });
        items.forEach(function (item, index, array) {
            return log("item=" + item + ", index=" + index + ", array=" + array);
        }, this);
        items.forEach(function (item, index) {
            log("item=" + item + ", index=" + index);
        });
    };
    return LearnFor;
}());
new LearnFor();
//# sourceMappingURL=LearnFor.js.map