/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_FlatIconButton extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n7:fairygui.GImage;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7g5he7apfk7w4";

		public static createInstance():UI_FlatIconButton {
			return <UI_FlatIconButton><any>(fairygui.UIPackage.createObject("BlackSkin","FlatIconButton"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n7 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}