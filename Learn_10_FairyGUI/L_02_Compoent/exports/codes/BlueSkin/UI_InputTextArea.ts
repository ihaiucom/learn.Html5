/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_InputTextArea extends fairygui.GLabel {

		public m_n0:fairygui.GImage;
		public m_title:fairygui.GTextInput;

		public static URL:string = "ui://7iq4v3xwwjwd1d";

		public static createInstance():UI_InputTextArea {
			return <UI_InputTextArea><any>(fairygui.UIPackage.createObject("BlueSkin","InputTextArea"));
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