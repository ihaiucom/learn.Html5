/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_TreeExpandButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;

		public static URL:string = "ui://7g5he7apfk7w3d";

		public static createInstance():UI_TreeExpandButton {
			return <UI_TreeExpandButton><any>(fairygui.UIPackage.createObject("BlackSkin","TreeExpandButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}