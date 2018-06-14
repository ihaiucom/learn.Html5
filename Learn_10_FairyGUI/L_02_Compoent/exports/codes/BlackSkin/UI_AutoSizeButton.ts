/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_AutoSizeButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_grayed:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7w6";

		public static createInstance():UI_AutoSizeButton {
			return <UI_AutoSizeButton><any>(fairygui.UIPackage.createObject("BlackSkin","AutoSizeButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_grayed = this.getControllerAt(1);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}