(function(e){function t(t){for(var d,s,r=t[0],a=t[1],l=t[2],u=0,f=[];u<r.length;u++)s=r[u],n[s]&&f.push(n[s][0]),n[s]=0;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],d=!0,r=1;r<o.length;r++){var a=o[r];0!==n[a]&&(d=!1)}d&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var d={},n={app:0},i=[];function s(t){if(d[t])return d[t].exports;var o=d[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=d,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)s.d(o,d,function(t){return e[t]}.bind(null,d));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-do/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var c=a;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var d=o("64a9"),n=o.n(d);n.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var d=o("2b0e"),n=o("43f9"),i=o.n(n),s=o("9c30"),r=(o("51de"),o("e094"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("md-card",[o("md-list",[o("md-field",[o("i",{staticClass:"material-icons"},[e._v("add")]),o("md-input",{staticClass:"addTodo",attrs:{placeholder:"Add a todo"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}}),o("span",{staticClass:"md-helper-text"},[e._v("Add a todo")]),o("span",{staticClass:"md-divider"})],1)],1),o("span",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"md-caption"},[e._v("Click when completed")]),o("ul",{staticClass:"todos"},e._l(e.todos,function(t){return o("li",{key:t.id,class:{completed:t.completed,editing:t.id==e.editedTodoId}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.editedTodoId!=t.id,expression:"editedTodoId != todo.id"}],staticClass:"todo-list"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"toggle-complete",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var d=t.completed,n=o.target,i=!!n.checked;if(Array.isArray(d)){var s=null,r=e._i(d,s);n.checked?r<0&&e.$set(t,"completed",d.concat([s])):r>-1&&e.$set(t,"completed",d.slice(0,r).concat(d.slice(r+1)))}else e.$set(t,"completed",i)}}}),o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.label))]),o("button",{staticClass:"md-accent",on:{click:function(o){return e.removeTodo(t)}}},[o("md-icon",[e._v("delete"),o("md-tooltip",{attrs:{"md-direction":"right"}},[e._v("delete todo")])],1)],1)]),o("md-input",{directives:[{name:"show",rawName:"v-show",value:e.editedTodoId==t.id,expression:"editedTodoId == todo.id"},{name:"focus",rawName:"v-focus",value:e.editedTodoId==t.id,expression:"editedTodoId == todo.id"}],class:{editing:t.id==e.editedTodoId},attrs:{placeholder:"Edit a todo label"},on:{blur:function(o){return e.updateTodo(t)}},model:{value:t.label,callback:function(o){e.$set(t,"label",o)},expression:"todo.label"}})],1)}),0),o("span",{staticClass:"md-caption"},[e._v("Double-click on todo item to edit it")])],1)],1)}),a=[],l=o("f029"),c={data:function(){return{todos:[],currentTodo:"",editedTodoId:null}},mounted:function(){if(localStorage.getItem("todos"))try{this.todos=JSON.parse(localStorage.getItem("todos"))}catch(e){localStorage.removeItem("todos")}},methods:{addTodo:function(){this.todos.push({id:l["a"].v1(),label:this.currentTodo,completed:!1}),this.saveTodos(),this.currentTodo=""},saveTodos:function(){var e=JSON.stringify(this.todos);localStorage.setItem("todos",e)},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1),this.saveTodos()},editTodo:function(e){this.editedTodoId=e.id},updateTodo:function(e){var t=this.todos.indexOf(e);this.todos[t].label=e.label,this.editedTodoId=null,this.saveTodos()},toggleCompleted:function(e){var t=this.todos.indexOf(e);this.todos[t].completed=!this.todos[t].completed,this.saveTodos()}},directives:{focus:function(e){e.focus()},clickOutside:{bind:function(e,t,o){var d=o.context,n=t.value;e.clickOutsideEvent=function(t){if(e!=t.target&&!e.contains(t.target))return n.call(d,t)},document.body.addEventListener("click",e.clickOutsideEvent)},unbind:function(e){document.body.removeEventListener("click",e.clickOutsideEvent)}}}},u=c,f=(o("034f"),o("2877")),p=Object(f["a"])(u,r,a,!1,null,null,null),v=p.exports;d["default"].use(i.a),d["default"].use(s["MdField"]),d["default"].use(s["MdButton"]),d["default"].use(s["MdCheckbox"]),d["default"].use(s["MdList"]),d["default"].use(s["MdDivider"]),d["default"].config.productionTip=!1,new d["default"]({render:function(e){return e(v)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.d37d858c.js.map