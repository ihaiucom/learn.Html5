/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_CheckIconListItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n4:fairygui.GImage;
		public m_n8:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7g5he7apfk7w2p";

		public static createInstance():UI_CheckIconListItem {
			return <UI_CheckIconListItem><any>(fairygui.UIPackage.createObject("BlackSkin","CheckIconListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n8 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(3));
		}
	}
}