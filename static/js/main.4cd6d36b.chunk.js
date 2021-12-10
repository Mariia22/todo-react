(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{10:function(e,t,o){e.exports={todoCheckBox:"Todo_todoCheckBox__1FrXv",todoInput:"Todo_todoInput__1gCU9",todoText:"Todo_todoText__2M32L",todoTextChecked:"Todo_todoTextChecked__R1aXM"}},11:function(e,t,o){e.exports={header:"Header_header__1v0yI",headerLight:"Header_headerLight__TreYr",headerDark:"Header_headerDark__3IhRR",header_headers:"Header_header_headers__S-sjH",header_name:"Header_header_name__MFaQ7"}},14:function(e,t,o){e.exports={app_wrapper:"App_app_wrapper__1TKao",app_main:"App_app_main__Dg0FQ",app_content:"App_app_content__2nUUD",app_paragraph:"App_app_paragraph__3oz8d"}},18:function(e,t,o){e.exports={todo_total_sort_item:"Filter_todo_total_sort_item__3NC-I",todo_total_sort_item_active:"Filter_todo_total_sort_item_active__12_J8"}},19:function(e,t,o){e.exports={button:"ToggleTheme_button__CPanT",buttonLight:"ToggleTheme_buttonLight__1IegN",buttonDark:"ToggleTheme_buttonDark__7P0Xi"}},20:function(e,t,o){e.exports={form:"Form_form__3wvE7",formInput:"Form_formInput__3Nojn"}},24:function(e,t,o){e.exports={footer:"Footer_footer__7dIj9"}},25:function(e,t,o){e.exports={app_content:"Wrapper_app_content__2lF2M"}},39:function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"AddTodoAction",(function(){return E})),o.d(r,"ToggleTodoAction",(function(){return N})),o.d(r,"ClearAllTodoAction",(function(){return F})),o.d(r,"FilterTodoAction",(function(){return I})),o.d(r,"DragEndAction",(function(){return G}));var a,n=o(8),c=o.n(n),d=o(5),l=o(4);!function(e){e.ADD_TODO="ADD_TODO",e.TOGGLE_TODO="TOGGLE_TODO",e.CLEAR_ALL_COMPLETED="CLEAR_All_COMPLETED",e.SET_FILTER="SET_FILTER",e.DRAG_TODO="DRAG_TODO"}(a||(a={}));var i=o(7),s=o(3),_={todos:function(){try{var e=localStorage.getItem("store");if(null===e)return;return JSON.parse(e)}catch(t){return}}()||[]},u=Object(l.combineReducers)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;return t.type===a.SET_FILTER?t.payload:e},todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.ADD_TODO:return Object(s.a)(Object(s.a)({},e),{},{todos:[].concat(Object(i.a)(e.todos),[{id:Date.now(),text:t.payload,checked:!1}])});case a.TOGGLE_TODO:var o=Object(i.a)(e.todos);return o.map((function(e){e.id===t.payload&&(e.checked=!e.checked)})),Object(s.a)(Object(s.a)({},e),{},{todos:Object(i.a)(o)});case a.CLEAR_ALL_COMPLETED:return Object(s.a)(Object(s.a)({},e),{},{todos:Object(i.a)(e.todos.filter((function(e){return!1===e.checked})))});case a.DRAG_TODO:var r=Object(i.a)(e.todos),n=r.splice(t.payload[0],1);return r.splice.apply(r,[t.payload[1],0].concat(Object(i.a)(n))),Object(s.a)(Object(s.a)({},e),{},{todos:Object(i.a)(r)});default:return e}}}),h=o(22),j=o(23),O=Object(l.createStore)(u,Object(h.composeWithDevTools)());O.subscribe(Object(j.throttle)((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("store",t)}catch(o){console.log(o)}}(O.getState().todoList.todos)}),1e3));var p,b=o(14),m=o.n(b),f=o(13);!function(e){e.VeryLightBlueGrey="hsl(0, 0%, 98%)",e.Grey="hsl(236, 33%, 92%)",e.VeryDarkGreyBlue="hsl(235, 24%, 19%)",e.BlackColor="hsl(235, 24%, 19%)",e.DarkFontColor="hsl(233, 11%, 84%)",e.LightFontColor="hsl(235, 19%, 35%)"}(p||(p={}));var T={light:{"--background-color":p.Grey,"--list":p.VeryLightBlueGrey,"--font":p.LightFontColor},dark:{"--background-color":p.BlackColor,"--list":p.VeryDarkGreyBlue,"--font":p.DarkFontColor}},x=o(0),g=o(1),v=Object(x.createContext)({themeType:"light",theme:T.light}),L=function(e){var t=e.children,o=Object(x.useState)("light"),r=Object(f.a)(o,2),a=r[0],n=r[1];return Object(g.jsx)(v.Provider,{value:{themeType:a,theme:T[a],setCurrentTheme:n},children:t})},D=function(){return Object(x.useContext)(v)},C=o(15),y=o(6),A=o.n(y),k=d.d;function E(e){return{type:a.ADD_TODO,payload:e}}function N(e){return{type:a.TOGGLE_TODO,payload:e}}function F(){return{type:a.CLEAR_ALL_COMPLETED}}function I(e){return{type:a.SET_FILTER,payload:e}}function G(e){return{type:a.DRAG_TODO,payload:e}}var R=Object(s.a)({},r),S=function(){var e=Object(d.c)();return Object(l.bindActionCreators)(R,e)},M=o(10),P=o.n(M),w=function(e){var t=e.checked,o=e.text,r=e.id,a=S().ToggleTodoAction;return Object(g.jsxs)("label",{className:P.a.todoCheckBox,children:[Object(g.jsx)("input",{className:P.a.todoInput,checked:t,type:"checkbox",onChange:function(e){a(Number(e.target.value))},value:r}),Object(g.jsx)("span",{className:t?P.a.todoTextChecked:P.a.todoText,children:o})]})},B=o(18),H=o.n(B),V=function(e){var t=e.name,o=e.value,r=e.currentFilter,a=S().FilterTodoAction;return o===r?Object(g.jsx)("button",{disabled:!0,className:H.a.todo_total_sort_item_active,children:t}):Object(g.jsx)("button",{className:H.a.todo_total_sort_item,value:o,onClick:function(e){a(e.currentTarget.value)},children:t})},J=function(){var e=D().theme,t=k((function(e){return e.todoList})).todos,o=k((function(e){return e.filter})),r=S(),a=r.ClearAllTodoAction,n=r.DragEndAction,c=Object(x.useMemo)((function(){return function(e,t){switch(t){case"ALL":default:return e;case"COMPLETED":return e.filter((function(e){return e.checked}));case"ACTIVE":return e.filter((function(e){return!e.checked}))}}(t,o)}),[t,o]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{onDragEnd:function(e){var t=e.destination,o=e.source;t&&n([o.index,t.index])},children:Object(g.jsx)(C.c,{droppableId:"todos",children:function(t){return Object(g.jsxs)("ul",Object(s.a)(Object(s.a)({},t.droppableProps),{},{ref:t.innerRef,style:Object(s.a)({},e),className:A.a.list,children:[c.map((function(e,t){return Object(g.jsx)(C.b,{index:t,draggableId:String(e.id),children:function(t,o){return Object(x.createElement)("li",Object(s.a)(Object(s.a)(Object(s.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:o.isDragging?A.a.todoSelected:A.a.todo,key:e.id}),Object(g.jsx)(w,{checked:e.checked,text:e.text,id:e.id}))}},e.id)})),t.placeholder]}))}})}),Object(g.jsxs)("div",{style:Object(s.a)({},e),className:A.a.todo_total,children:[Object(g.jsxs)("div",{className:A.a.todo_total_items,children:[t.length," items left"]}),Object(g.jsx)("div",{className:A.a.todo_total_completed,onClick:function(){a()},children:"Clear Completed"}),Object(g.jsxs)("div",{className:A.a.todo_total_sort,children:[Object(g.jsx)(V,{value:"ALL",name:"All",currentFilter:o}),Object(g.jsx)(V,{value:"ACTIVE",name:"Active",currentFilter:o}),Object(g.jsx)(V,{value:"COMPLETED",name:"Completed",currentFilter:o})]})]}),Object(g.jsxs)("div",{className:A.a.todo_total_sort_mobile,children:[Object(g.jsx)(V,{value:"ALL",name:"All",currentFilter:o}),Object(g.jsx)(V,{value:"ACTIVE",name:"Active",currentFilter:o}),Object(g.jsx)(V,{value:"COMPLETED",name:"Completed",currentFilter:o})]})]})},U=o(19),X=o.n(U),K=function(e){var t=e.themeType,o=e.onClick,r=e.children,a="light"===t?X.a.buttonLight:X.a.buttonDark;return Object(g.jsx)("button",{className:a,onClick:o,children:r})},Q=o(20),W=o.n(Q),z=function(){var e=D().theme,t=S().AddTodoAction,o=Object(x.useState)(""),r=Object(f.a)(o,2),a=r[0],n=r[1];return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a),n("")},className:W.a.form,children:Object(g.jsx)("input",{style:Object(s.a)({},e),className:W.a.formInput,type:"text",placeholder:"Create a new todo...",value:a,onChange:function(e){n(e.target.value)}})})},Y=o(11),q=o.n(Y),Z=function(){var e=D(),t=e.themeType,o=e.setCurrentTheme,r="light"===t?q.a.headerLight:q.a.headerDark;return Object(g.jsxs)("div",{className:r,children:[Object(g.jsxs)("div",{className:q.a.header_headers,children:[Object(g.jsx)("h1",{className:q.a.header_name,children:"TODO"}),Object(g.jsx)(K,{themeType:t,onClick:function(){return o("dark"===t?"light":"dark")}})]}),Object(g.jsx)(z,{})]})},$=o(24),ee=o.n($),te=function(){var e=D().theme;return Object(g.jsxs)("div",{style:Object(s.a)({},e),className:ee.a.footer,children:["Challenge by ",Object(g.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by ",Object(g.jsx)("a",{href:"https://github.com/Mariia22",target:"_blank",rel:"noreferrer",children:"Maria Ushakova"})]})},oe=o(25),re=o.n(oe),ae=function(e){var t=e.children,o=D().theme;return Object(g.jsx)("div",{style:Object(s.a)({},o),className:re.a.app_content,children:t})};var ne=function(){return Object(g.jsx)(L,{children:Object(g.jsxs)("div",{className:m.a.app_wrapper,children:[Object(g.jsxs)(ae,{children:[Object(g.jsx)(Z,{}),Object(g.jsx)("div",{className:m.a.app_main,children:Object(g.jsx)(J,{})}),Object(g.jsx)("p",{className:m.a.app_paragraph,children:" Drag and drop to reorder list"})]}),Object(g.jsx)(te,{})]})})};c.a.render(Object(g.jsx)(d.a,{store:O,children:Object(g.jsx)(ne,{})}),document.getElementById("root"))},6:function(e,t,o){e.exports={list:"TodoList_list__1X2Te",todo:"TodoList_todo__1jsOR",todoSelected:"TodoList_todoSelected__fjHlj",todo_total:"TodoList_todo_total__1eP7l",todo_total_items:"TodoList_todo_total_items__33-Kg",todo_total_completed:"TodoList_todo_total_completed__1H2Gm",todo_total_sort:"TodoList_todo_total_sort__3Ts7d",todo_total_sort_mobile:"TodoList_todo_total_sort_mobile__3yBLG"}}},[[39,1,2]]]);
//# sourceMappingURL=main.4cd6d36b.chunk.js.map