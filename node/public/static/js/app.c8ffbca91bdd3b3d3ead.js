webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a=n("bOdI"),r=n.n(a),i=n("woOf"),c=n.n(i),s=n("//Fk"),u=n.n(s),l=n("mtWM"),p=n.n(l);p.a.interceptors.request.use(function(e){return e},function(e){return u.a.reject(e)}),p.a.interceptors.response.use(function(e){return e},function(e){return u.a.reject(e)}),p.a.defaults.baseURL="http://wuliaoyuan.top/";var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",o=~["delete","get","head"].indexOf(n)?"params":"data";return t=c()({},t),p()(r()({url:e,method:n,timeout:6400},o,t)).then(function(e){return e.data}).catch(function(e){console.log(e)})},f={name:"App",created:function(){(function(e){return d("/getConfig",{path:e})})(encodeURIComponent("http://wuliaoyuan.top/index.html")).then(function(e){var t=e.timestamp,n=e.nonceStr,o=e.signature;window.wx&&(wx.config({debug:!0,appId:"wx9aa35e28128f3456",timestamp:t,nonceStr:n,signature:o,jsApiList:["scanQRCode","updateAppMessageShareData","updateTimelineShareData","checkJsApi","hideMenuItems","chooseImage"]}),wx.ready(function(){var e={title:"那年|时光遗忘了，文字却清晰地复刻着",desc:"那年|时光遗忘了，文字却清晰地复刻着",link:"http://wuliaoyuan.top/index.html",imgUrl:"http://txt25-2.book118.com/2017/0425/book102185/102184432.jpg",success:function(){alert("用户确认分享后执行的回调函数")},cancel:function(){alert("用户取消分享后执行的回调函数")}};wx.updateTimelineShareData(e),wx.updateAppMessageShareData(e)}),wx.error(function(e){console.log(e)}))})}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(f,h,!1,function(e){n("YlLa")},null,null).exports,g=n("/ocq"),v={name:"HelloWorld",data:function(){return{msg:"浙江dfggsdgdfs省杭州市"}},created:function(){},methods:{foo:function(){window.wx&&wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){var t=e.resultStr;console.log(t)}})},callCamera:function(){!function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["original","compressed"],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["album","camera"],n=arguments[3];wx.chooseImage({count:1,sizeType:e,sourceType:t,success:n})}(1,["original","compressed"],["album","camera"])}}},w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",{on:{click:this.foo}},[this._v(this._s(this.msg))]),this._v(" "),t("div",{on:{click:this.callCamera}},[this._v("调用摄像头")])])},staticRenderFns:[]};var x=n("VU/8")(v,w,!1,function(e){n("oK0w")},"data-v-24f716bf",null).exports;o.a.use(g.a);var b=new g.a({routes:[{path:"/",name:"HelloWorld",component:x}]}),_=n("fO40"),y=n.n(_);n("TNmv");o.a.config.productionTip=!1,o.a.prototype.$weui=y.a,new o.a({el:"#app",router:b,components:{App:m},template:"<App/>"})},TNmv:function(e,t){},YlLa:function(e,t){},oK0w:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c8ffbca91bdd3b3d3ead.js.map