/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_Button_icon_text extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7iq4v3xwwjwd1k";

		public static createInstance():UI_Button_icon_text {
			return <UI_Button_icon_text><any>(fairygui.UIPackage.createObject("BlueSkin","Button_icon_text"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(4));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(5));
		}
	}
}