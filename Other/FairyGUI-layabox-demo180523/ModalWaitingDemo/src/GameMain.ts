import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;

// 程序入口
class GameMain {
    constructor()
    {
        Laya.init(1136, 640, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        
        Laya.loader.load([
        { url: "res/ModalWaiting@atlas0.png", type: Loader.IMAGE },
        { url: "res/ModalWaiting.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }

    onLoaded(): void {
		Laya.stage.addChild(fairygui.GRoot.inst.displayObject);

		fairygui.UIPackage.addPackage("res/ModalWaiting");		
		fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL("ModalWaiting","GlobalModalWaiting");
        fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL("ModalWaiting","WindowModalWaiting");

        fairygui.UIObjectFactory.setPackageItemExtension(fairygui.UIPackage.getItemURL("ModalWaiting","GlobalModalWaiting"),GlobalWaiting);
		
		new MainPanel();
  	}
}
new GameMain();