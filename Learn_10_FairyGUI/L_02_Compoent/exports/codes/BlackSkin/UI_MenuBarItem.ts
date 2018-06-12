/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_MenuBarItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n4:fairygui.GGraph;
		public m_n2:fairygui.GGraph;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7w2q";

		public static createInstance():UI_MenuBarItem {
			return <UI_MenuBarItem><any>(fairygui.UIPackage.createObject("BlackSkin","MenuBarItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n4 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GGraph><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}