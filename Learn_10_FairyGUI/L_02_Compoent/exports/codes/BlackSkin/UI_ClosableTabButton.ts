/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ClosableTabButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n5:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_closeButton:UI_TabCloseButton;

		public static URL:string = "ui://7g5he7apfk7w35";

		public static createInstance():UI_ClosableTabButton {
			return <UI_ClosableTabButton><any>(fairygui.UIPackage.createObject("BlackSkin","ClosableTabButton"));
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
		}
	}
}