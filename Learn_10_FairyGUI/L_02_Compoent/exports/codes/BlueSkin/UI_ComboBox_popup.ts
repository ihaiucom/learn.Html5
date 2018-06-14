/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlueSkin {

	export class UI_ComboBox_popup extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_list:fairygui.GList;

		public static URL:string = "ui://7iq4v3xwwjwd7";

		public static createInstance():UI_ComboBox_popup {
			return <UI_ComboBox_popup><any>(fairygui.UIPackage.createObject("BlueSkin","ComboBox_popup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_list = <fairygui.GList><any>(this.getChildAt(1));
		}
	}
}