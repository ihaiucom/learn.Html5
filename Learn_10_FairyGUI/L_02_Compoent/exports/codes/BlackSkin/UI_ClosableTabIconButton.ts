/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ClosableTabIconButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n5:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_closeButton:UI_TabCloseButton;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7g5he7apfk7w38";

		public static createInstance():UI_ClosableTabIconButton {
			return <UI_ClosableTabIconButton><any>(fairygui.UIPackage.createObject("BlackSkin","ClosableTabIconButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_closeButton = <UI_TabCloseButton><any>(this.getChildAt(3));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(4));
		}
	}
}