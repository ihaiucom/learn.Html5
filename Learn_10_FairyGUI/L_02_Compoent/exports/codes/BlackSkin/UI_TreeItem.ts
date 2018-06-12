/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_TreeItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_indent:fairygui.GGraph;
		public m_icon:fairygui.GLoader;
		public m_expandButton:UI_TreeExpandButton;
		public m_sign:fairygui.GLoader;

		public static URL:string = "ui://7g5he7apfk7w3c";

		public static createInstance():UI_TreeItem {
			return <UI_TreeItem><any>(fairygui.UIPackage.createObject("BlackSkin","TreeItem"));
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
			this.m_indent = <fairygui.GGraph><any>(this.getChildAt(3));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(4));
			this.m_expandButton = <UI_TreeExpandButton><any>(this.getChildAt(5));
			this.m_sign = <fairygui.GLoader><any>(this.getChildAt(6));
		}
	}
}