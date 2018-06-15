var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.imageUrls = ["ui://7s9cxbxopf1j1", "ui://7s9cxbxopf1j0", "ui://7s9cxbxopf1j2", "ui://7s9cxbxopf1j3", "ui://7s9cxbxopf1j4", "ui://7s9cxbxopf1j5", "ui://7s9cxbxopf1j7"];
        this.imageIndex = 0;
        log(GuiPackage.Common);
        log(GuiPackage.Login);
        var menuConfig = new MenuConfig();
        menuConfig.id = 1;
        menuConfig.name = "ZF MenuConfig";
        log(menuConfig.getName());
        var msg = new MsgConfig();
        log(msg);
        Laya.init(640, 1136, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "top";
        //设置横竖屏
        // Laya.stage.screenMode = "vertical";
        // Laya.loader.load([{ url: "res/Basic@atlas0.png", type: Loader.IMAGE },
        //     { url: "res/Basic.fui", type: Loader.BUFFER }
        // ], Handler.create(this, this.onLoaded));
        setTimeout(function () {
            // this.loadGUI();
        }, 500);
    }
    GameMain.prototype.loadGUI = function () {
        fairygui.UIConfig["packageFileExtension"] = "bin";
        Laya.loader.load("res/langes/ZH_CN.xml", Handler.create(this, this.onLoadLange), null, Loader.TEXT);
        Laya.loader.load([
            { url: "res/Package_GUID_Commone@atlas0.png", type: Loader.IMAGE },
            { url: "res/Package_GUID_Commone@atlas2.png", type: Loader.IMAGE },
            { url: "res/Package_GUID_Commone.bin", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    };
    GameMain.prototype.onLoadLange = function () {
        var txt = Laya.loader.getRes("res/langes/ZH_CN.xml");
        fairygui.UIPackage.setStringsSource(txt);
    };
    GameMain.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        fairygui.UIPackage.addPackage("res/Package_GUID_Commone");
        fairygui.UIConfig.defaultFont = "宋体";
        var view = fairygui.UIPackage.createObject("Package_GUID_Commone", "Panel-Login").asCom;
        fairygui.GRoot.inst.addChild(view);
        var button = view.getChild("button").asButton;
        button.onClick(this, this.onClickButton);
        // button.touchable = false;
        // button.visible = false;
        // button.grayed = true;
        // button.enabled = false;
        // button.displayObject;
        var image = fairygui.UIPackage.createObject("Package_GUID_Commone", "common_tishi_xinfeng").asImage;
        Laya.stage.addChild(image.displayObject);
        var button2 = fairygui.UIPackage.createObject("Package_GUID_Commone", "Button-Red").asButton;
        button2.x = (fairygui.GRoot.inst.width - button2.width) * 0.5;
        button2.y = fairygui.GRoot.inst.height - button2.height - 30;
        Laya.stage.addChild(button2.displayObject);
        button2.onClick(this, this.onClickButton2);
        var iconView = fairygui.UIPackage.createObject("Package_GUID_Commone", "IconView").asCom;
        this.imageLoader = iconView.getChild("picLoader").asLoader;
        iconView.width = 80;
        iconView.height = 80;
        iconView.x = (fairygui.GRoot.inst.width - iconView.width) * 0.5;
        iconView.y = fairygui.GRoot.inst.height - iconView.height - button2.height - 60;
        Laya.stage.addChild(iconView.displayObject);
    };
    GameMain.prototype.onClickButton2 = function (event) {
        this.imageIndex++;
        if (this.imageIndex >= this.imageUrls.length) {
            this.imageIndex = 0;
        }
        this.imageLoader.url = this.imageUrls[this.imageIndex];
    };
    GameMain.prototype.onClickButton = function (event) {
        var button = (event.currentTarget["$owner"]);
        var sprite = event.currentTarget;
        var text = sprite.getChildAt(1);
        text.text = "OK";
        var label = text["$owner"];
        label.text = "进入游戏";
        log("button.data:" + button.data);
        log("button.tooltips:" + button.tooltips);
        log("button.resourceURL:" + button.resourceURL);
        log("button.packageItem.name:" + button.packageItem.name);
        log("button.packageItem.name:" + fairygui.UIPackage.getItemByURL(button.resourceURL).name);
        var packageItem = button.packageItem;
        // button.dispose();
        // fairygui.UIPackage.removePackage("Package_GUID_Commone");
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map