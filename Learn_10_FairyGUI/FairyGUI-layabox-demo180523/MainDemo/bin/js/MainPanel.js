var MainPanel = /** @class */ (function () {
    function MainPanel() {
        this._view = fairygui.UIPackage.createObject("Basic", "Main").asCom;
        this._view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        fairygui.GRoot.inst.addChild(this._view);
        this._backBtn = this._view.getChild("btn_Back");
        this._backBtn.visible = false;
        this._backBtn.onClick(this, this.onClickBack);
        this._demoContainer = this._view.getChild("container").asCom;
        this._cc = this._view.getController("c1");
        var cnt = this._view.numChildren;
        for (var i = 0; i < cnt; i++) {
            var obj = this._view.getChildAt(i);
            if (obj.group != null && obj.group.name == "btns")
                obj.onClick(this, this.runDemo);
        }
        this._demoObjects = {};
    }
    MainPanel.prototype.update = function () {
        this._view.getChild("n33").rotation += 5;
        this._view.getChild("n34").displayObject.rotation += 5;
    };
    MainPanel.prototype.runDemo = function (evt) {
        var type = fairygui.GObject.cast(evt.currentTarget).name.substr(4);
        var obj = this._demoObjects[type];
        if (obj == null) {
            obj = fairygui.UIPackage.createObject("Basic", "Demo_" + type).asCom;
            this._demoObjects[type] = obj;
        }
        this._demoContainer.removeChildren();
        this._demoContainer.addChild(obj);
        this._cc.selectedIndex = 1;
        this._backBtn.visible = true;
        switch (type) {
            case "Button":
                this.playButton();
                break;
            case "Text":
                this.playText();
                break;
            case "Window":
                this.playWindow();
                break;
            case "Popup":
                this.playPopup();
                break;
            case "Drag&Drop":
                this.playDragDrop();
                break;
            case "Depth":
                this.playDepth();
                break;
            case "Grid":
                this.playGrid();
                break;
            case "ProgressBar":
                this.playProgressBar();
                break;
        }
    };
    MainPanel.prototype.onClickBack = function (evt) {
        this._cc.selectedIndex = 0;
        this._backBtn.visible = false;
    };
    //------------------------------
    MainPanel.prototype.playButton = function () {
        var obj = this._demoObjects["Button"];
        obj.getChild("n34").onClick(this, this.__clickButton);
    };
    MainPanel.prototype.__clickButton = function () {
        console.log("click button");
    };
    //------------------------------
    MainPanel.prototype.playText = function () {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").on(laya.events.Event.LINK, this, this.__clickLink);
        obj.getChild("n22").onClick(this, this.__clickGetInput);
    };
    MainPanel.prototype.__clickLink = function (link) {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").text = "[img]ui://9leh0eyft9fj5f[/img][color=#FF0000]你点击了链接[/color]：" + link;
    };
    MainPanel.prototype.__clickGetInput = function () {
        var obj = this._demoObjects["Text"];
        obj.getChild("n21").text = obj.getChild("n19").text;
    };
    MainPanel.prototype.playWindow = function () {
        var obj = this._demoObjects["Window"];
        obj.getChild("n0").onClick(this, this.__clickWindowA);
        obj.getChild("n1").onClick(this, this.__clickWindowB);
    };
    MainPanel.prototype.__clickWindowA = function () {
        if (this._winA == null)
            this._winA = new WindowA();
        this._winA.show();
    };
    MainPanel.prototype.__clickWindowB = function () {
        if (this._winB == null)
            this._winB = new WindowB();
        this._winB.show();
    };
    MainPanel.prototype.playPopup = function () {
        if (this._pm == null) {
            this._pm = new fairygui.PopupMenu();
            this._pm.addItem("Item 1");
            this._pm.addItem("Item 2");
            this._pm.addItem("Item 3");
            this._pm.addItem("Item 4");
            if (this._popupCom == null) {
                this._popupCom = fairygui.UIPackage.createObject("Basic", "Component12").asCom;
                this._popupCom.center();
            }
        }
        var obj = this._demoObjects["Popup"];
        var btn = obj.getChild("n3");
        btn.onClick(this, this.__clickPopup1);
        var btn2 = obj.getChild("n5");
        btn2.onClick(this, this.__clickPopup2);
    };
    MainPanel.prototype.__clickPopup1 = function (evt) {
        var btn = fairygui.GObject.cast(evt.currentTarget);
        this._pm.show(btn, true);
    };
    MainPanel.prototype.__clickPopup2 = function () {
        fairygui.GRoot.inst.showPopup(this._popupCom);
    };
    //------------------------------
    MainPanel.prototype.playDragDrop = function () {
        var obj = this._demoObjects["Drag&Drop"];
        var btnA = obj.getChild("a");
        btnA.draggable = true;
        var btnB = obj.getChild("b").asButton;
        btnB.draggable = true;
        btnB.on(fairygui.Events.DRAG_START, this, this.__onDragStart);
        var btnC = obj.getChild("c").asButton;
        btnC.icon = null;
        btnC.on(fairygui.Events.DROP, this, this.__onDrop);
        var btnD = obj.getChild("d");
        btnD.draggable = true;
        var bounds = obj.getChild("bounds");
        var rect = new laya.maths.Rectangle();
        bounds.localToGlobalRect(0, 0, bounds.width, bounds.height, rect);
        fairygui.GRoot.inst.globalToLocalRect(rect.x, rect.y, rect.width, rect.height, rect);
        //因为这时候面板还在从右往左动，所以rect不准确，需要用相对位置算出最终停下来的范围
        rect.x -= obj.parent.x;
        btnD.dragBounds = rect;
    };
    MainPanel.prototype.__onDragStart = function (evt) {
        var btn = fairygui.GObject.cast(evt.currentTarget);
        btn.stopDrag(); //取消对原目标的拖动，换成一个替代品
        fairygui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon);
    };
    MainPanel.prototype.__onDrop = function (data, evt) {
        var btn = fairygui.GObject.cast(evt.currentTarget);
        btn.icon = data;
    };
    //------------------------------
    MainPanel.prototype.playDepth = function () {
        var obj = this._demoObjects["Depth"];
        var testContainer = obj.getChild("n22").asCom;
        var fixedObj = testContainer.getChild("n0");
        fixedObj.sortingOrder = 100;
        fixedObj.draggable = true;
        var numChildren = testContainer.numChildren;
        var i = 0;
        while (i < numChildren) {
            var child = testContainer.getChildAt(i);
            if (child != fixedObj) {
                testContainer.removeChildAt(i);
                numChildren--;
            }
            else
                i++;
        }
        var startPos = new laya.maths.Point(fixedObj.x, fixedObj.y);
        obj.getChild("btn0").onClick(this, this.__click1, [obj, startPos]);
        obj.getChild("btn1").onClick(this, this.__click2, [obj, startPos]);
    };
    MainPanel.prototype.__click1 = function (obj, startPos) {
        var graph = new fairygui.GGraph();
        startPos.x += 10;
        startPos.y += 10;
        graph.setXY(startPos.x, startPos.y);
        graph.setSize(150, 150);
        graph.drawRect(1, "#000000", "#FF0000");
        obj.getChild("n22").asCom.addChild(graph);
    };
    MainPanel.prototype.__click2 = function (obj, startPos) {
        var obj = this._demoObjects["Depth"];
        var graph = new fairygui.GGraph();
        startPos.x += 10;
        startPos.y += 10;
        graph.setXY(startPos.x, startPos.y);
        graph.setSize(150, 150);
        graph.drawRect(1, "#000000", "#00FF00");
        graph.sortingOrder = 200;
        obj.getChild("n22").asCom.addChild(graph);
    };
    //------------------------------
    MainPanel.prototype.playGrid = function () {
        var obj = this._demoObjects["Grid"];
        var list1 = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames = ["苹果手机操作系统", "安卓手机操作系统", "微软手机操作系统", "微软桌面操作系统", "苹果桌面操作系统", "未知操作系统"];
        var testColors = [0xFFFF00, 0xFF0000, 0xFFFFFF, 0x0000FF];
        var cnt = testNames.length;
        for (var i = 0; i < cnt; i++) {
            var item = list1.addItemFromPool().asButton;
            item.getChild("t0").text = "" + (i + 1);
            item.getChild("t1").text = testNames[i];
            item.getChild("t2").asTextField.color = laya.utils.Utils.toHexColor(testColors[Math.floor(Math.random() * 4)]);
            item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3) + 1) / 3 * 100;
        }
        var list2 = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for (var i = 0; i < cnt; i++) {
            var item = list2.addItemFromPool().asButton;
            item.getChild("cb").asButton.selected = false;
            item.getChild("t1").text = testNames[i];
            item.getChild("mc").asMovieClip.playing = i % 2 == 0;
            item.getChild("t3").text = "" + Math.floor(Math.random() * 10000);
        }
    };
    //---------------------------------------------
    MainPanel.prototype.playProgressBar = function () {
        var obj = this._demoObjects["ProgressBar"];
        Laya.timer.frameLoop(2, this, this.__playProgress);
        obj.on(laya.events.Event.UNDISPLAY, this, this.__removeTimer);
    };
    MainPanel.prototype.__removeTimer = function () {
        Laya.timer.clear(this, this.__playProgress);
    };
    MainPanel.prototype.__playProgress = function () {
        var obj = this._demoObjects["ProgressBar"];
        var cnt = obj.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = obj.getChildAt(i);
            if (child != null) {
                child.value += 1;
                if (child.value > child.max)
                    child.value = 0;
            }
        }
    };
    return MainPanel;
}());
//# sourceMappingURL=MainPanel.js.map