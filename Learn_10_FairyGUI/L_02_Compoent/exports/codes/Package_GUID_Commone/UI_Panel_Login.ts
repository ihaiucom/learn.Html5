/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_Panel_Login extends fairygui.GComponent {

		public m_bg:fairygui.GImage;
		public m_button:UI_Button_Red;
		public m_n3:fairygui.GMovieClip;
		public m_n2:fairygui.GMovieClip;
		public m_n4:fairygui.GMovieClip;
		public m_n6:UI_InputText;
		public m_n8:UI_TestGroup;

		public static URL:string = "ui://7s9cxbxowjwd6s";

		public static createInstance():UI_Panel_Login {
			return <UI_Panel_Login><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","Panel-Login"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_button = <UI_Button_Red><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GMovieClip><any>(this.getChildAt(2));
			this.m_n2 = <fairygui.GMovieClip><any>(this.getChildAt(3));
			this.m_n4 = <fairygui.GMovieClip><any>(this.getChildAt(4));
			this.m_n6 = <UI_InputText><any>(this.getChildAt(5));
			this.m_n8 = <UI_TestGroup><any>(this.getChildAt(6));
		}
	}
}