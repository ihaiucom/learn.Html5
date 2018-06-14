/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_ImageLoader extends fairygui.GComponent {

		public m_chun:fairygui.GImage;
		public m_n2:UI_IconView;

		public static URL:string = "ui://7s9cxbxofk7w6t";

		public static createInstance():UI_ImageLoader {
			return <UI_ImageLoader><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","ImageLoader"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_chun = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n2 = <UI_IconView><any>(this.getChildAt(1));
		}
	}
}