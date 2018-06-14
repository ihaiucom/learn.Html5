/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_NumericInput extends fairygui.GLabel {

		public m_c1:fairygui.Controller;
		public m_grayed:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_holder:fairygui.GGraph;
		public m_title:fairygui.GTextInput;

		public static URL:string = "ui://7g5he7apfk7w2l";

		public static createInstance():UI_NumericInput {
			return <UI_NumericInput><any>(fairygui.UIPackage.createObject("BlackSkin","NumericInput"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_grayed = this.getControllerAt(1);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_holder = <fairygui.GGraph><any>(this.getChildAt(2));
			this.m_title = <fairygui.GTextInput><any>(this.getChildAt(3));
		}
	}
}