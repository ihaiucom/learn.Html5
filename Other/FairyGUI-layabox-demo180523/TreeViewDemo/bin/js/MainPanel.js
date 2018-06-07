var TreeNode = fairygui.tree.TreeNode;
var MainPanel = (function () {
    function MainPanel() {
        this._mainView = fairygui.UIPackage.createObject("TreeView", "Main").asCom;
        this._mainView.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._mainView);
        this._treeView = new fairygui.tree.TreeView(this._mainView.getChild("tree").asList);
        this._treeView.treeNodeClick = Handler.create(this, this.__clickNode, null, false);
        this._treeView.treeNodeRender = Handler.create(this, this.renderTreeNode, null, false);
        var topNode = new TreeNode(true);
        topNode.data = "I'm a top node";
        this._treeView.root.addChild(topNode);
        for (var i = 0; i < 5; i++) {
            var node = new TreeNode(false);
            node.data = "Hello " + i;
            topNode.addChild(node);
        }
        var aFolderNode = new TreeNode(true);
        aFolderNode.data = "A folder node";
        topNode.addChild(aFolderNode);
        for (var i = 0; i < 5; i++) {
            var node = new TreeNode(false);
            node.data = "Good " + i;
            aFolderNode.addChild(node);
        }
        for (var i = 0; i < 3; i++) {
            var node = new TreeNode(false);
            node.data = "World " + i;
            topNode.addChild(node);
        }
        var anotherTopNode = new TreeNode(false);
        anotherTopNode.data = { title: "I'm a top node too", icon: "ui://TreeView/heart" };
        this._treeView.root.addChild(anotherTopNode);
    }
    MainPanel.prototype.renderTreeNode = function (node) {
        var btn = node.cell;
        if (node.isFolder) {
            if (node.expanded)
                btn.icon = "ui://TreeView/folder_opened";
            else
                btn.icon = "ui://TreeView/folder_closed";
            btn.title = node.data;
        }
        else if (node.data.icon) {
            btn.icon = node.data.icon;
            btn.title = node.data.title;
        }
        else {
            btn.icon = "ui://TreeView/file";
            btn.title = node.data;
        }
    };
    MainPanel.prototype.__clickNode = function (node, evt) {
        if (node.isFolder)
            node.expanded = !node.expanded;
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map