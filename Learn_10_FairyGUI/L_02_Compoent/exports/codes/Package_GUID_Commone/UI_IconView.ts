/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_IconView extends fairygui.GComponent {

		public m_bg:fairygui.GImage;
		public m_picLoader:fairygui.GLoader;

		public static URL:string = "ui://7s9cxbxofk7w6u";

		public static createInstance():UI_IconView {
			return <UI_IconView><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","IconView"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_picLoader = <fairygui.GLoader><any>(this.getChildAt(1));
		}
	}
}