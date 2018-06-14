/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_SliderV extends fairygui.GSlider {

		public m_n1:fairygui.GImage;
		public m_bar_v:fairygui.GImage;
		public m_grip:UI_Button_icon;

		public static URL:string = "ui://7iq4v3xwwjwd1g";

		public static createInstance():UI_SliderV {
			return <UI_SliderV><any>(fairygui.UIPackage.createObject("BlueSkin","SliderV"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_bar_v = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_grip = <UI_Button_icon><any>(this.getChildAt(2));
		}
	}
}