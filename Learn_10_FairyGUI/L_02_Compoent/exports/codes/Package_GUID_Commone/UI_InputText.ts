/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_InputText extends fairygui.GComponent {

		public m_bg:fairygui.GImage;
		public m_text:fairygui.GTextInput;

		public static URL:string = "ui://7s9cxbxockii71";

		public static createInstance():UI_InputText {
			return <UI_InputText><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","InputText"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_text = <fairygui.GTextInput><any>(this.getChildAt(1));
		}
	}
}