/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_TextArea extends fairygui.GLabel {

		public m_n0:fairygui.GImage;
		public m_title:fairygui.GTextInput;

		public static URL:string = "ui://7g5he7apfk7w2m";

		public static createInstance():UI_TextArea {
			return <UI_TextArea><any>(fairygui.UIPackage.createObject("BlackSkin","TextArea"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_title = <fairygui.GTextInput><any>(this.getChildAt(1));
		}
	}
}