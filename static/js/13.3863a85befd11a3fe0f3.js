webpackJsonp([13],{"676C":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("aJxU"),a=n("Muz9"),r=n.n(a),d=(n("qrwc"),{components:{Header:s.a},data:function(){return{info:[]}},mounted:function(){var t=this;this.http.get("http://elm.cangdu.org/v1/users/38070/addresses").then(function(e){t.info=e.data})},methods:{address:function(t){var e=this;r.a.delete("http://elm.cangdu.org/v1/users/38070/addresses/"+t).then(function(t){r.a.get("http://elm.cangdu.org/v1/users/38070/addresses").then(function(t){e.info=t.data})})}}}),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("Header",{attrs:{nnt:!0,got:!0,ont:!0,gnt:!1}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"item"},t._l(t.info,function(e,s){return n("ul",{key:s},[n("li",[n("p",[t._v(t._s(e.address))]),t._v(" "),n("p",[t._v(t._s(e.name))])]),t._v(" "),n("li",{on:{click:function(n){return t.address(e.id)}}},[t._v("X")])])}),0),t._v(" "),n("div",{staticClass:"address"},[n("router-link",{attrs:{to:"/anout/receiv/add"}},[t._v("\n                新增地址\n            ")])],1)])],1)},staticRenderFns:[]};var o=n("C7Lr")(d,i,!1,function(t){n("UhgQ")},"data-v-3cba91b6",null);e.default=o.exports},UhgQ:function(t,e){}});
//# sourceMappingURL=13.3863a85befd11a3fe0f3.js.map