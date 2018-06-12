/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_SliderH extends fairygui.GSlider {

		public m_n1:fairygui.GImage;
		public m_bar:fairygui.GImage;
		public m_grip:UI_Button_icon;

		public static URL:string = "ui://7iq4v3xwwjwd1e";

		public static createInstance():UI_SliderH {
			return <UI_SliderH><any>(fairygui.UIPackage.createObject("BlueSkin","SliderH"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_grip = <UI_Button_icon><any>(this.getChildAt(2));
		}
	}
}