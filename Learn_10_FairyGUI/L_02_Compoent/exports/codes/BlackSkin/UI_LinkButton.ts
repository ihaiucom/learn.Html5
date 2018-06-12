/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_LinkButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7w7";

		public static createInstance():UI_LinkButton {
			return <UI_LinkButton><any>(fairygui.UIPackage.createObject("BlackSkin","LinkButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(0));
		}
	}
}