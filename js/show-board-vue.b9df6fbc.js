(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["show-board-vue"],{"70d0":function(t,e,o){"use strict";var a=o("7513"),r=o.n(a);r.a},7513:function(t,e,o){},df73:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("h2",[t._v("\n      Edit Board\n      "),o("b-link",{attrs:{href:"/"}},[t._v("(Boards)")])],1),o("b-jumbotron",[o("template",{slot:"header"},[t._v("\n        "+t._s(t.board.title)+"\n      ")]),o("template",{slot:"lead"},[t._v("\n        Title: "+t._s(t.board.title)),o("br"),t._v("\n        Description: "+t._s(t.board.description)),o("br"),t._v("\n        Author: "+t._s(t.board.author)),o("br")]),o("hr",{staticClass:"my-4"}),o("b-btn",{staticClass:"edit-btn",attrs:{variant:"success"},on:{click:function(e){e.stopPropagation(),t.editBoard(t.key)}}},[t._v("Edit")]),o("b-btn",{attrs:{variant:"danger"},on:{click:function(e){e.stopPropagation(),t.deleteBoard(t.key)}}},[t._v("Delete")])],2)],1)],1)},r=[],n=o("dc59"),s=o("41cb"),d={name:"show-board",data(){return{key:"",board:{}}},created(){const t=n["a"].firestore().collection("boards").doc(this.$route.params.id);t.get().then(t=>{t.exists?(this.key=t.id,this.board=t.data()):alert("No such document!")})},methods:{editBoard(t){s["a"].push({name:"edit-board",params:{id:t}})},deleteBoard(t){n["a"].firestore().collection("boards").doc(t).delete().then(()=>{s["a"].push({name:"boards"})}).catch(t=>{alert("Error removing document: ",t)})}}},i=d,c=(o("70d0"),o("2877")),l=Object(c["a"])(i,a,r,!1,null,null,null);l.options.__file="show-board.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=show-board-vue.b9df6fbc.js.map