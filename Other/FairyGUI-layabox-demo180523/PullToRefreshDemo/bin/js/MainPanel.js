var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("PullToRefresh", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._list1 = this._view.getChild("list1").asList;
        this._list1.itemRenderer = Handler.create(this, this.renderListItem1, null, false);
        this._list1.setVirtual();
        this._list1.numItems = 1;
        this._list1.on(fairygui.Events.PULL_DOWN_RELEASE, this, this.onPullDownToRefresh);
        this._list2 = this._view.getChild("list2").asList;
        this._list2.itemRenderer = Handler.create(this, this.renderListItem2, null, false);
        this._list2.setVirtual();
        this._list2.numItems = 1;
        this._list2.on(fairygui.Events.PULL_UP_RELEASE, this, this.onPullUpToRefresh);
    }
    MainPanel.prototype.renderListItem1 = function (index, item) {
        item.text = "Item " + (this._list1.numItems - index - 1);
    };
    MainPanel.prototype.renderListItem2 = function (index, item) {
        item.text = "Item " + index;
    };
    MainPanel.prototype.onPullDownToRefresh = function (evt) {
        var header = (this._list1.scrollPane.header);
        if (header.readyToRefresh) {
            header.setRefreshStatus(2);
            this._list1.scrollPane.lockHeader(header.sourceHeight);
            //Simulate a async resquest
            Laya.timer.once(2000, this, function () {
                this._list1.numItems += 5;
                //Refresh completed
                header.setRefreshStatus(3);
                this._list1.scrollPane.lockHeader(35);
                Laya.timer.once(2000, this, function () {
                    header.setRefreshStatus(0);
                    this._list1.scrollPane.lockHeader(0);
                });
            });
        }
    };
    MainPanel.prototype.onPullUpToRefresh = function (evt) {
        var footer = this._list2.scrollPane.footer.asCom;
        footer.getController("c1").selectedIndex = 1;
        this._list2.scrollPane.lockFooter(footer.sourceHeight);
        //Simulate a async resquest
        Laya.timer.once(2000, this, function () {
            this._list2.numItems += 5;
            //Refresh completed
            footer.getController("c1").selectedIndex = 0;
            this._list2.scrollPane.lockFooter(0);
        });
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map