/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_IconListItem extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_title:fairygui.GTextField;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7g5he7apfk7w2o";

		public static createInstance():UI_IconListItem {
			return <UI_IconListItem><any>(fairygui.UIPackage.createObject("BlackSkin","IconListItem"));
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
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(3));
		}
	}
}