/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_ComboBoxPopup extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_list:fairygui.GList;

		public static URL:string = "ui://7g5he7apfk7wf";

		public static createInstance():UI_ComboBoxPopup {
			return <UI_ComboBoxPopup><any>(fairygui.UIPackage.createObject("BlackSkin","ComboBoxPopup"));
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