/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ScrollBar_VT extends fairygui.GScrollBar {

		public m_n0:fairygui.GImage;
		public m_arrow1:UI_ScrollUpButton;
		public m_arrow2:UI_ScrollDownButton;
		public m_bar:fairygui.GGraph;
		public m_grip:UI_GripButton_VT;

		public static URL:string = "ui://7g5he7apfk7w2w";

		public static createInstance():UI_ScrollBar_VT {
			return <UI_ScrollBar_VT><any>(fairygui.UIPackage.createObject("BlackSkin","ScrollBar_VT"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_arrow1 = <UI_ScrollUpButton><any>(this.getChildAt(1));
			this.m_arrow2 = <UI_ScrollDownButton><any>(this.getChildAt(2));
			this.m_bar = <fairygui.GGraph><any>(this.getChildAt(3));
			this.m_grip = <UI_GripButton_VT><any>(this.getChildAt(4));
		}
	}
}