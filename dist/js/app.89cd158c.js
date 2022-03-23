(function(e){function t(t){for(var n,a,u=t[0],d=t[1],o=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,u=1;u<i.length;u++){var d=i[u];0!==s[d]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var c=d;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"22d5":function(e,t,i){"use strict";i("93d8")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("159b");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"banner"},[e._v(" Linewriter ")]),i("Page")],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"pageContainer"}},[e._m(0),i("div",{staticClass:"content"},[i("div",{staticClass:"lines"},e._l(e.order,(function(t){return i("LineLine",{key:t,attrs:{"line-obj":e.lines[t]}})})),1),i("div",{staticClass:"preview"},e._l(e.preview,(function(t){return i("div",{key:t.uid,staticClass:"preview-line"},[e._v(" "+e._s(t.value)+" ")])})),0)])])},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"guide"},[i("div",{staticClass:"keydef"},[i("div",{staticClass:"keydef-line"},[i("div",{staticClass:"key"},[e._v("⇥")]),i("div",{staticClass:"desc"},[e._v("Continue to next item")])]),i("div",{staticClass:"keydef-line"},[i("div",{staticClass:"key"},[e._v("⇧")]),i("i",{staticClass:"fa fa-plus",staticStyle:{opacity:"0.3","font-size":"10px",margin:"0 4px"}}),i("div",{staticClass:"key"},[e._v("⇥")]),i("div",{staticClass:"desc"},[e._v("Back to previous item")])])]),i("div",{staticClass:"keydef"},[i("div",{staticClass:"keydef-line"},[i("div",{staticClass:"key"},[e._v("↵")]),i("div",{staticClass:"desc"},[e._v("Create a new line")])])]),i("p",[e._v(" Use arrow keys to navigate up/down lines ")]),i("p",[e._v(" Delete a line item by editing it and clearing it out with Backspace ")])])}],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.lineObj?i("div",{staticClass:"line"},[i("div",{staticClass:"items"},e._l(e.lineObj.items,(function(t){return i("Item",{key:t.uid,attrs:{"item-obj":t,"line-uid":e.lineObj.uid,"is-favorite":e.lineObj.favoriteItemUid===t.uid}})})),1),i("div",{staticClass:"add-item",on:{click:function(t){return e.addItem()}}},[i("i",{staticClass:"fa fa-plus"})])]):e._e()},o=[],c=i("d4ec"),l=i("bee2"),f=i("ec26"),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"item",class:{favorited:e.isFavorite},on:{click:function(t){return e.makeFavorite(t)}}},[e.isFocused?i("input",{directives:[{name:"model",rawName:"v-model",value:e.itemObj.value,expression:"itemObj.value"}],ref:"itemInput",staticClass:"item-input",attrs:{type:"text",placeholder:"-"},domProps:{value:e.itemObj.value},on:{click:function(e){return e.stopPropagation()},focusout:function(t){return e.defocus()},keydown:function(t){return e.keydown(t)},input:function(t){t.target.composing||e.$set(e.itemObj,"value",t.target.value)}}}):e._e(),e.isFocused?e._e():i("div",{staticClass:"item-view"},[e._v(" "+e._s(e.itemObj.value||"---")+" ")]),i("div",{staticClass:"item-edit",on:{click:function(t){return e.selectItem(t)}}},[i("i",{staticClass:"fa fa-pencil"})])])},m=[],h=i("2909"),p=(i("d81d"),i("fb6a"),i("99af"),i("4de4"),i("612d")),b=function(){function e(){Object(c["a"])(this,e),this.state=n["a"].observable({lines:{},order:[],focusedLineUid:null,focusedItemUid:null})}return Object(l["a"])(e,[{key:"getPreview",value:function(){var e=this;return this.state.order.map((function(t){var i=e.state.lines[t],n=Object(p["findLast"])((function(e){return e.uid===i.favoriteItemUid}),i.items);return n||{uid:"".concat(t,"_empty"),value:"???",lineUid:t}}))}},{key:"getLineByUid",value:function(e){return this.state.lines[e]}},{key:"getLineByIndex",value:function(e){var t=this.state.order[e];return this.getLineByUid(t)}},{key:"getIndex",value:function(e){return this.state.order.indexOf(e.uid)}},{key:"size",value:function(){return this.state.order.length}},{key:"getState",value:function(){return this.state}},{key:"appendLineAfter",value:function(e,t){if(n["a"].set(this.state.lines,e.uid,e),void 0===t)return this.state.order.push(e.uid),void n["a"].set(this.state,"order",this.state.order);var i=this.state.order.indexOf(t.uid)+1,s=this.state.order.slice(0,i),r=this.state.order.slice(i);n["a"].set(this.state,"order",[].concat(Object(h["a"])(s),[e.uid],Object(h["a"])(r)))}},{key:"removeLineByUid",value:function(e){delete this.state.lines[e],n["a"].set(this.state,"lines",this.state.lines),n["a"].set(this.state,"order",this.state.order.filter((function(t){return t!==e})))}},{key:"removeItemByLineAndUid",value:function(e,t){var i=this.state.lines[e].items.filter((function(e){return e.uid!==t}));n["a"].set(this.state.lines[e],"items",i)}},{key:"updateLine",value:function(e,t){n["a"].set(this.state.lines,e,t)}},{key:"setFocusedLineUid",value:function(e){n["a"].set(this.state,"focusedLineUid",e)}},{key:"setFocusedItemUid",value:function(e){n["a"].set(this.state,"focusedItemUid",e)}},{key:"setFavoriteItemForLine",value:function(e,t){n["a"].set(this.state.lines[e],"favoriteItemUid",t)}},{key:"deselectAll",value:function(){this.setFocusedLineUid(null),this.setFocusedItemUid(null)}},{key:"selectPreviousLine",value:function(e){if(this.getIndex(e)-1>=0){var t=this.getLineByIndex(this.getIndex(e)-1);this.setFocusedLineUid(t.uid),this.setFocusedItemUid(t.items[t.items.length-1].uid)}}},{key:"selectNextLine",value:function(e){if(this.getIndex(e)+1<this.size()){var t=this.getLineByIndex(this.getIndex(e)+1);this.setFocusedLineUid(t.uid),this.setFocusedItemUid(t.items[0].uid)}}},{key:"selectNeighboringItemInLine",value:function(e,t,i,n){var s=this.getLineByUid(e),r=s.items.indexOf(t),a=i?r-1:r+1;if(!(a<0))if(s.items.length===a){if(!n)return this.deselectAll();var u=new I("");s.addItem(u),this.setFocusedItemUid(u.uid)}else this.setFocusedItemUid(s.items[a].uid)}},{key:"selectLine",value:function(e){this.setFocusedItemUid(e.items[0].uid),this.setFocusedLineUid(e.uid)}},{key:"isItemFocused",value:function(e){return this.state.focusedItemUid===e}}]),e}(),y=new b,I=function e(t,i){Object(c["a"])(this,e),this.uid=Object(f["a"])(),this.value=t,this.lineUid=i},O=27,g=13,j=9,L=38,U=40,k=46,w=8,_={name:"Item",props:{itemObj:Object,isFavorite:Boolean},computed:{isFocused:function(){var e=this,t=y.getState().focusedItemUid===this.itemObj.uid;return t&&this.$nextTick((function(){e.$refs.itemInput.focus()})),t}},methods:{keydown:function(e){var t=this.itemObj.lineUid,i=e.keyCode,n=e.shiftKey;i===j&&e.preventDefault();var s=y.getLineByUid(this.itemObj.lineUid);switch(i){case O:return y.deselectAll();case j:return this.itemObj.value?y.selectNeighboringItemInLine(t,this.itemObj,n,!0):y.removeItemByLineAndUid(t,this.itemObj.uid);case L:return y.selectPreviousLine(s);case U:return y.selectNextLine(s);case k:return void(this.itemObj.value||(e.preventDefault(),y.selectNeighboringItemInLine(t,this.itemObj,!1,!1),y.removeItemByLineAndUid(t,this.itemObj.uid),s=y.getLineByUid(this.itemObj.lineUid),0===s.items.length&&y.getIndex(s)+1<y.size()&&(y.selectNextLine(s),y.removeLineByUid(t))));case w:return void(this.itemObj.value||(e.preventDefault(),y.selectNeighboringItemInLine(t,this.itemObj,!0,!1),y.removeItemByLineAndUid(t,this.itemObj.uid),s=y.getLineByUid(this.itemObj.lineUid),0===s.items.length&&y.getIndex(s)-1>=0&&(y.selectPreviousLine(s),y.removeLineByUid(t))));case g:var r=new P;return r.addItem(new I("")),y.appendLineAfter(r,s),void y.selectLine(r);default:return}},selectItem:function(e){e.stopPropagation(),y.setFocusedItemUid(this.itemObj.uid),y.setFocusedLineUid(this.itemObj.lineUid)},makeFavorite:function(e){e.stopPropagation(),y.setFavoriteItemForLine(this.itemObj.lineUid,this.itemObj.uid)},defocus:function(){y.isItemFocused(this.itemObj.uid)&&(y.setFocusedItemUid(null),y.setFocusedLineUid(null))}}},C=_,x=(i("572d"),i("2877")),F=Object(x["a"])(C,v,m,!1,null,"f0936536",null),B=F.exports,P=function(){function e(){Object(c["a"])(this,e),this.uid=Object(f["a"])(),this.items=[],this.favoriteItemUid=null}return Object(l["a"])(e,[{key:"addItem",value:function(e){return e.lineUid=this.uid,this.items.push(e),1===this.items.length&&(this.favoriteItemUid=this.items[0].uid),this}}]),e}(),A={name:"LineLine",components:{Item:B},props:{lineObj:P},computed:{isFocused:function(){return y.getState().focusedLineUid===this.lineObj.uid}},methods:{addItem:function(){var e=new I("");this.lineObj.addItem(e),y.updateLine(this.lineObj.uid,this.lineObj),this.selectItem({item:e,lineUid:this.lineObj.uid})},selectItem:function(e){var t=e.item,i=e.lineUid;y.setFocusedItemUid(t.uid),y.setFocusedLineUid(i)}}},S=A,$=(i("99fb"),Object(x["a"])(S,d,o,!1,null,"b99314ea",null)),N=$.exports;y.appendLineAfter((new P).addItem(new I("Welcome to Linewriter"))),y.appendLineAfter((new P).addItem(new I("Hover over an item to edit it"))),y.appendLineAfter((new P).addItem(new I(""))),y.appendLineAfter((new P).addItem(new I("Click an item to favorite it")).addItem(new I("Choose me")));var E={name:"Page",components:{LineLine:N},computed:{lines:function(){return y.state.lines},order:function(){return y.state.order},preview:function(){return y.getPreview()}}},z=E,D=(i("22d5"),Object(x["a"])(z,a,u,!1,null,"e894e0ec",null)),M=D.exports,T={name:"App",components:{Page:M}},J=T,H=(i("034f"),Object(x["a"])(J,s,r,!1,null,null,null)),K=H.exports;n["a"].config.productionTip=!1,window.focusItemEvent={listeners:[],register:function(e){this.listeners.push(e)},focusItem:function(e){this.listeners.forEach((function(t){return t(e)}))}},new n["a"]({render:function(e){return e(K)}}).$mount("#app")},"572d":function(e,t,i){"use strict";i("ea6b")},"69f2":function(e,t,i){},"85ec":function(e,t,i){},"93d8":function(e,t,i){},"99fb":function(e,t,i){"use strict";i("69f2")},ea6b:function(e,t,i){}});
//# sourceMappingURL=app.89cd158c.js.map