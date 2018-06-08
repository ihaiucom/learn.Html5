var LearnMenu = /** @class */ (function () {
    function LearnMenu() {
        var _this = this;
        setTimeout(function () {
            _this.Test6();
        }, 500);
    }
    LearnMenu.prototype.Test6 = function () {
        var x = function (a, c) { return 0; };
        var y = function (b, s) { return 0; };
        y = x; // OK
        x = y; // Error
    };
    LearnMenu.prototype.Test5 = function () {
        var x;
        // y's inferred type is { name: string; location: string; }
        var y = { name: 'Alice', location: 'Seattle' };
        x = y;
    };
    LearnMenu.prototype.Test4 = function () {
        window.onmousedown = function (mouseevent) {
            log(mouseevent.type);
        };
        var BooleanLikeHeterogeneousEnum;
        (function (BooleanLikeHeterogeneousEnum) {
            BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
            BooleanLikeHeterogeneousEnum["Yes"] = "YES";
        })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
        log(BooleanLikeHeterogeneousEnum);
    };
    LearnMenu.prototype.Test3 = function () {
        log(1 /* A */);
        log(2 /* B */);
        log(0 /* Up */);
        log(3 /* Right */);
    };
    LearnMenu.prototype.Test2 = function () {
        // enum DirectionName
        // {
        //     Up = "UP",
        //     Down = "DOWN",
        //     Left = "LEFT",
        //     Right = "RIGHT",
        // }
        // log(DirectionName)
        var FileAccess;
        (function (FileAccess) {
            // constant members
            FileAccess[FileAccess["None"] = 0] = "None";
            FileAccess[FileAccess["Read"] = 2] = "Read";
            FileAccess[FileAccess["Write"] = 4] = "Write";
            FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
            // computed member
            // G = "123".length
        })(FileAccess || (FileAccess = {}));
        log(FileAccess);
    };
    LearnMenu.prototype.Test1 = function () {
        var Direction;
        (function (Direction) {
            Direction[Direction["Up"] = 1] = "Up";
            Direction[Direction["Down"] = 2] = "Down";
            Direction[Direction["Left"] = 3] = "Left";
            Direction[Direction["Right"] = 4] = "Right";
        })(Direction || (Direction = {}));
        log(Direction);
        var MenuId;
        (function (MenuId) {
            MenuId[MenuId["Main"] = 0] = "Main";
            MenuId[MenuId["Login"] = 1] = "Login";
            MenuId[MenuId["Hero"] = 2] = "Hero";
            MenuId[MenuId["War"] = 30] = "War";
            MenuId[MenuId["WarOver"] = 31] = "WarOver";
        })(MenuId || (MenuId = {}));
        log(MenuId);
        function OpenMenu(menuId) {
            log(typeof menuId);
            log("Open Menu: menuId=" + menuId + "  " + MenuId[menuId]);
        }
        OpenMenu(MenuId.Login);
        OpenMenu(30);
        log("1 == MenuId.Login  :  " + (1 == MenuId.Login));
        log("1 === MenuId.Login  :  " + (1 === MenuId.Login));
        log("2 === MenuId.Login  :  " + (2 == MenuId.Login));
    };
    return LearnMenu;
}());
new LearnMenu();
//# sourceMappingURL=LearnEnum.js.map