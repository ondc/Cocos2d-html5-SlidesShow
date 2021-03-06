var ppt8 = ppt.extend({

    onEnter:function () {

        this._super();

        cc.log("I am ppt8. Performance test");
        var size = cc.Director.getInstance().getWinSize();
        var backGround = cc.Sprite.create(s_backGround1024);
        backGround.setAnchorPoint(cc.p(0.5, 0.5));
        backGround.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(backGround, 0);

        var webGLShowcase = cc.Sprite.create(s_webGLShowcase);
        webGLShowcase.setAnchorPoint(cc.p(0.5, 0.5));
        webGLShowcase.setScale(1.2);
        webGLShowcase.setPosition(cc.p(size.width / 2, size.height / 2-20));
        this.addChild(webGLShowcase, 0);





    }
});

ppt8.scene = function () {
    var ret = cc.Scene.create();
    var layer = new ppt8();
    layer.init();
    ret.addChild(layer);
    return cc.TransitionProgressRadialCW.create(0.8, ret);
};