/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_WindowFrame extends fairygui.GLabel {

		public m_n0:fairygui.GImage;
		public m_dragArea:fairygui.GGraph;
		public m_title:fairygui.GTextField;
		public m_contentArea:fairygui.GGraph;

		public static URL:string = "ui://7g5he7apfk7w3f";

		public static createInstance():UI_WindowFrame {
			return <UI_WindowFrame><any>(fairygui.UIPackage.createObject("BlackSkin","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_dragArea = <fairygui.GGraph><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_contentArea = <fairygui.GGraph><any>(this.getChildAt(3));
		}
	}
}