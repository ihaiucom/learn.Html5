/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.BlackSkin {

	export class UI_PopupMenu extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_list:fairygui.GList;

		public static URL:string = "ui://7g5he7apfk7w2t";

		public static createInstance():UI_PopupMenu {
			return <UI_PopupMenu><any>(fairygui.UIPackage.createObject("BlackSkin","PopupMenu"));
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