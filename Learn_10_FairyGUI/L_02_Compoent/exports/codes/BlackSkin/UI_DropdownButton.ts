/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_DropdownButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_n3:fairygui.GImage;
		public m_n5:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7wi";

		public static createInstance():UI_DropdownButton {
			return <UI_DropdownButton><any>(fairygui.UIPackage.createObject("BlackSkin","DropdownButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_n5 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(4));
		}
	}
}