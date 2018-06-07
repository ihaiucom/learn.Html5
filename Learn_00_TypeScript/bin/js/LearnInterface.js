var LearnInterface = /** @class */ (function () {
    function LearnInterface() {
        var _this = this;
        setTimeout(function () {
            _this.Test2();
        }, 500);
    }
    LearnInterface.prototype.Test2 = function () {
        function printPlayer(player) {
            log("player.name = " + player.name);
        }
        var user = { name: "zf", qq: 593705098 };
        printPlayer(user);
        printPlayer(undefined);
    };
    LearnInterface.prototype.Test1 = function () {
        h1("接口初探");
        function printLabel(labelObj) {
            log("labelObj = " + labelObj + " ");
            log("labelObj.label = " + labelObj.label + " ");
            log("");
        }
        var obj = { size: 10, label: "Size 10 object" };
        printLabel(obj);
    };
    return LearnInterface;
}());
new LearnInterface();
//# sourceMappingURL=LearnInterface.js.map