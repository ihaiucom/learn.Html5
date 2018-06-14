/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_ProgressBar extends fairygui.GProgressBar {

		public m_n1:fairygui.GImage;
		public m_bar:fairygui.GImage;

		public static URL:string = "ui://7iq4v3xwwjwd1h";

		public static createInstance():UI_ProgressBar {
			return <UI_ProgressBar><any>(fairygui.UIPackage.createObject("BlueSkin","ProgressBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GImage><any>(this.getChildAt(1));
		}
	}
}