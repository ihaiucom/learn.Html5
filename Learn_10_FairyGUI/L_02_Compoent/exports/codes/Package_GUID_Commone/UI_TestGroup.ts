/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module TestFGUI.Package_GUID_Commone {

	export class UI_TestGroup extends fairygui.GComponent {

		public m_n7:fairygui.GGraph;
		public m_n8:fairygui.GGraph;
		public m_n9:fairygui.GGroup;
		public m_n10:fairygui.GGraph;
		public m_n11:fairygui.GGraph;
		public m_n12:fairygui.GGroup;
		public m_n13:fairygui.GGraph;
		public m_n14:fairygui.GGraph;
		public m_n16:fairygui.GGraph;
		public m_n17:fairygui.GGraph;
		public m_n18:fairygui.GGraph;
		public m_n15:fairygui.GGroup;
		public m_iconView:UI_IconView;
		public m_iconView_2:UI_IconView;

		public static URL:string = "ui://7s9cxbxockii72";

		public static createInstance():UI_TestGroup {
			return <UI_TestGroup><any>(fairygui.UIPackage.createObject("Package_GUID_Commone","TestGroup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n7 = <fairygui.GGraph><any>(this.getChildAt(0));
			this.m_n8 = <fairygui.GGraph><any>(this.getChildAt(1));
			this.m_n9 = <fairygui.GGroup><any>(this.getChildAt(2));
			this.m_n10 = <fairygui.GGraph><any>(this.getChildAt(3));
			this.m_n11 = <fairygui.GGraph><any>(this.getChildAt(4));
			this.m_n12 = <fairygui.GGroup><any>(this.getChildAt(5));
			this.m_n13 = <fairygui.GGraph><any>(this.getChildAt(6));
			this.m_n14 = <fairygui.GGraph><any>(this.getChildAt(7));
			this.m_n16 = <fairygui.GGraph><any>(this.getChildAt(8));
			this.m_n17 = <fairygui.GGraph><any>(this.getChildAt(9));
			this.m_n18 = <fairygui.GGraph><any>(this.getChildAt(10));
			this.m_n15 = <fairygui.GGroup><any>(this.getChildAt(11));
			this.m_iconView = <UI_IconView><any>(this.getChildAt(12));
			this.m_iconView_2 = <UI_IconView><any>(this.getChildAt(13));
		}
	}
}