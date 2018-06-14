/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_InputTextField extends fairygui.GLabel {

		public m_n0:fairygui.GImage;
		public m_title:fairygui.GTextInput;

		public static URL:string = "ui://7iq4v3xwwjwd1c";

		public static createInstance():UI_InputTextField {
			return <UI_InputTextField><any>(fairygui.UIPackage.createObject("BlueSkin","InputTextField"));
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