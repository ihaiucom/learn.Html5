/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_WindowFrame extends fairygui.GLabel {

		public m_hasClose:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_contentArea:fairygui.GGraph;
		public m_dragArea:fairygui.GGraph;
		public m_n5:UI_WindowCloseButton;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7iq4v3xwwjwd1j";

		public static createInstance():UI_WindowFrame {
			return <UI_WindowFrame><any>(fairygui.UIPackage.createObject("BlueSkin","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_hasClose = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_contentArea = <fairygui.GGraph><any>(this.getChildAt(2));
			this.m_dragArea = <fairygui.GGraph><any>(this.getChildAt(3));
			this.m_n5 = <UI_WindowCloseButton><any>(this.getChildAt(4));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(5));
		}
	}
}