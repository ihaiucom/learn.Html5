/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_ScrollBar_arrow extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;
		public m_n2:fairygui.GImage;
		public m_icon:fairygui.GLoader;

		public static URL:string = "ui://7iq4v3xwwjwd3";

		public static createInstance():UI_ScrollBar_arrow {
			return <UI_ScrollBar_arrow><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_arrow"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_icon = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}