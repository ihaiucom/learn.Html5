/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_Button extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7iq4v3xwwjwd18";

		public static createInstance():UI_Button {
			return <UI_Button><any>(fairygui.UIPackage.createObject("BlueSkin","Button"));
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
		}
	}
}