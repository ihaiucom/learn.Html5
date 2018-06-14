/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_TooltipsWin extends fairygui.GLabel {

		public m_n1:fairygui.GGraph;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7g5he7apfk7w3b";

		public static createInstance():UI_TooltipsWin {
			return <UI_TooltipsWin><any>(fairygui.UIPackage.createObject("BlackSkin","TooltipsWin"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(1));
		}
	}
}