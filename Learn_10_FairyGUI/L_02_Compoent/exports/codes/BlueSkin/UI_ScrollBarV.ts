/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_ScrollBarV extends fairygui.GScrollBar {

		public m_n1:fairygui.GImage;
		public m_bar:fairygui.GGraph;
		public m_arrow1:UI_ScrollBar_arrow;
		public m_arrow2:UI_ScrollBar_arrow;
		public m_grip:UI_ScrollBar_grip;

		public static URL:string = "ui://7iq4v3xwwjwd1n";

		public static createInstance():UI_ScrollBarV {
			return <UI_ScrollBarV><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBarV"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GGraph><any>(this.getChildAt(1));
			this.m_arrow1 = <UI_ScrollBar_arrow><any>(this.getChildAt(2));
			this.m_arrow2 = <UI_ScrollBar_arrow><any>(this.getChildAt(3));
			this.m_grip = <UI_ScrollBar_grip><any>(this.getChildAt(4));
		}
	}
}