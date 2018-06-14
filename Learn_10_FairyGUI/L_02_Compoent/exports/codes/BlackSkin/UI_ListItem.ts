/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ListItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7w2n";

		public static createInstance():UI_ListItem {
			return <UI_ListItem><any>(fairygui.UIPackage.createObject("BlackSkin","ListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}