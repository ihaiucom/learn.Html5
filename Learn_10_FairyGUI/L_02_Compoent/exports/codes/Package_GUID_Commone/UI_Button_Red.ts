/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_Button_Red extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_up:fairygui.GImage;
		public m_down:fairygui.GImage;
		public m_text:fairygui.GTextField;

		public static URL:string = "ui://7s9cxbxopf1j6r";

		public static createInstance():UI_Button_Red {
			return <UI_Button_Red><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","Button-Red"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_up = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_down = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_text = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}