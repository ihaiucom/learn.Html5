/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ProgressBar extends fairygui.GProgressBar {

		public m_n0:fairygui.GImage;
		public m_bar:fairygui.GImage;

		public static URL:string = "ui://7g5he7apfk7w2u";

		public static createInstance():UI_ProgressBar {
			return <UI_ProgressBar><any>(fairygui.UIPackage.createObject("BlackSkin","ProgressBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}