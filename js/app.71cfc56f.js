(function(t){function s(s){for(var i,l,r=s[0],n=s[1],o=s[2],v=0,u=[];v<r.length;v++)l=r[v],Object.prototype.hasOwnProperty.call(e,l)&&e[l]&&u.push(e[l][0]),e[l]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);d&&d(s);while(u.length)u.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var t,s=0;s<c.length;s++){for(var a=c[s],i=!0,r=1;r<a.length;r++){var n=a[r];0!==e[n]&&(i=!1)}i&&(c.splice(s--,1),t=l(l.s=a[0]))}return t}var i={},e={app:0},c=[];function l(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,s,a){l.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,s){if(1&s&&(t=l(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)l.d(a,i,function(s){return t[s]}.bind(null,i));return a},l.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(s,"a",s),s},l.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=s,r=r.slice();for(var o=0;o<r.length;o++)s(r[o]);var d=n;c.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"0439":function(t,s,a){"use strict";a("9544")},1071:function(t,s,a){"use strict";a("eb0c")},2329:function(t,s,a){"use strict";a("3e31")},"2b01":function(t,s,a){"use strict";a("8366")},"2e71":function(t,s,a){"use strict";a("9bc8")},"33bd":function(t,s,a){},"3e31":function(t,s,a){},4290:function(t,s,a){},4795:function(t,s,a){"use strict";a("d868")},"50ff":function(t,s,a){t.exports=a.p+"img/profile-3.c94be0c6.jpg"},"56d7":function(t,s,a){"use strict";a.r(s),a.d(s,"bus",(function(){return os}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("Dashboard")],1)},c=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("Sidenav"),a("Main"),a("RightSection")],1)},r=[],n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[a("Nav"),a("div",{staticClass:"dashboard-main"},[a("router-view")],1)],1)},o=[],d=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"nav"},[a("h1",[t._v("Dashboard")]),a("div",{staticClass:"date"},[a("input",{attrs:{type:"date"}})])])}],u={name:"Nav"},p=u,m=(a("a674"),a("2877")),_=Object(m["a"])(p,d,v,!1,null,"fd5eeb06",null),f=_.exports,C={name:"Main",components:{Nav:f}},h=C,b=(a("7afa"),Object(m["a"])(h,n,o,!1,null,"1947000f",null)),g=b.exports,y=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"right"},[a("div",{staticClass:"top"},[a("button",{staticClass:"menu-btn",class:{btnMenu:t.isActive},on:{click:function(s){return t.toggleNav()}}},[a("span",{staticClass:"material-icons-sharp"},[t._v("menu")])]),t._m(0),t._m(1)]),t._m(2),t._m(3)])},x=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"theme-toggler"},[a("span",{staticClass:"material-icons-sharp active"},[t._v("light_mode")]),a("span",{staticClass:"material-icons-sharp"},[t._v("dark_mode")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"profile"},[i("div",{staticClass:"info"},[i("p",[t._v("Hey, "),i("b",[t._v("Jotham")])]),i("small",{staticClass:"text-muted"},[t._v("Admin")])]),i("div",{staticClass:"profile-photo"},[i("img",{attrs:{src:a("e350"),alt:"Jotham"}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"recent-updates"},[i("h2",[t._v("Recent Updates")]),i("div",{staticClass:"updates"},[i("div",{staticClass:"update"},[i("div",{staticClass:"profile-photo"},[i("img",{attrs:{src:a("716c"),alt:""}})]),i("div",{staticClass:"message"},[i("p",[i("b",[t._v("Mike Tyson")]),t._v(" recieved his order of Apple Airpod.")]),i("small",{staticClass:"text-muted"},[t._v("2 Minutes Ago")])])]),i("div",{staticClass:"update"},[i("div",{staticClass:"profile-photo"},[i("img",{attrs:{src:a("e350"),alt:""}})]),i("div",{staticClass:"message"},[i("p",[i("b",[t._v("Mike Tyson")]),t._v(" recieved his order of Apple Airpod.")]),i("small",{staticClass:"text-muted"},[t._v("2 Minutes Ago")])])]),i("div",{staticClass:"update"},[i("div",{staticClass:"profile-photo"},[i("img",{attrs:{src:a("50ff"),alt:""}})]),i("div",{staticClass:"message"},[i("p",[i("b",[t._v("Mike Tyson")]),t._v(" recieved his order of Apple Airpod.")]),i("small",{staticClass:"text-muted"},[t._v("2 Minutes Ago")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"app-analytics"},[a("h2",[t._v("Analytics")]),a("div",{staticClass:"item users"},[a("div",{staticClass:"icon"},[a("span",{staticClass:"material-icons-sharp active"},[t._v("persons")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"info"},[a("h3",[t._v("Users")]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])]),a("h5",{staticClass:"success"},[t._v("+39%")]),a("h3",[t._v("3849")])])]),a("div",{staticClass:"item dep"},[a("div",{staticClass:"icon"},[a("span",{staticClass:"material-icons-sharp active"},[t._v("persons")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"info"},[a("h3",[t._v("Departments")]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])]),a("h5",{staticClass:"warning"},[t._v("+19%")]),a("h3",[t._v("2649")])])]),a("div",{staticClass:"item faculty"},[a("div",{staticClass:"icon"},[a("span",{staticClass:"material-icons-sharp active"},[t._v("persons")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"info"},[a("h3",[t._v("Faculties")]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])]),a("h5",{staticClass:"success"},[t._v("+9%")]),a("h3",[t._v("849")])])]),a("div",{staticClass:"item add-user"},[a("div",[a("span",{staticClass:"material-icons-sharp"},[t._v("add")]),a("h3",[t._v("Add User")])])])])}],A={name:"RightSection",data:function(){return{isActive:!1}},methods:{toggleNav:function(){this.isActive=!this.isActive,os.$emit("toggle",this.isActive)}},created:function(){var t=this;os.$on("close",(function(s){t.isActive=s}))}},E=A,w=(a("2e71"),Object(m["a"])(E,y,x,!1,null,"52414919",null)),P=w.exports,$=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("aside",{class:{mobileWidth:t.isActive}},[a("div",{staticClass:"top"},[t._m(0),a("div",{staticClass:"close",attrs:{id:"close-btn"},on:{click:t.closeNav}},[a("span",{staticClass:"material-icons-sharp"},[t._v("close")])])]),a("div",{staticClass:"sidebar"},[a("router-link",{staticClass:"active",attrs:{to:"/"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("dashboard")]),a("h3",[t._v("Dashboard")])]),t._m(1),a("router-link",{attrs:{to:"/pill-shop"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("vaccines")]),a("h3",[t._v("Pill Shops")])]),a("router-link",{attrs:{to:"/pill-box"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("health_and_safety")]),a("h3",[t._v("Pill Box")])]),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)],1)])},j=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:a("cf05"),alt:""}}),i("h2",{staticClass:"title "},[t._v("CARES"),i("span",{staticClass:"success"},[t._v("+")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("forum")]),a("h3",[t._v("Chats")]),a("span",{staticClass:"message-count"},[t._v("15")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("food_bank")]),a("h3",[t._v("Food Guage")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("fitbit")]),a("h3",[t._v("Health Updates")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("spa")]),a("h3",[t._v("Physical Activities")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("pix")]),a("h3",[t._v("Vitals")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{attrs:{href:""}},[a("span",{staticClass:"material-icons-sharp"},[t._v("logout")]),a("h3",[t._v("Logout")])])}],k={name:"Sidenav",data:function(){return{isActive:!1}},methods:{closeNav:function(){this.isActive=!1,os.$emit("close",this.isActive)}},created:function(){var t=this;os.$on("toggle",(function(s){t.isActive=s}))}},S=k,N=(a("f6cd"),Object(m["a"])(S,$,j,!1,null,"f97af3ba",null)),O=N.exports,D={name:"Dashboard",components:{Sidenav:O,Main:g,RightSection:P},data:function(){return{isActive:!1}}},M=D,L=Object(m["a"])(M,l,r,!1,null,null,null),B=L.exports,R={components:{Dashboard:B}},T=R,H=(a("034f"),Object(m["a"])(T,e,c,!1,null,null,null)),Q=H.exports,V=a("8c4f"),G=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"create"},[a("form",{staticClass:"row g-3"},[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputName"}},[t._v("Employee Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputName"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputEmail4"}},[t._v("Email")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail4"}})]),a("div",{staticClass:"col-12"},[a("label",{staticClass:"form-label",attrs:{for:"inputAddress"}},[t._v("Address")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"1234 Main St"}})]),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"form-label",attrs:{for:"inputState"}},[t._v("State")]),a("select",{staticClass:"form-select",attrs:{id:"inputState"}},[a("option",{attrs:{selected:""}},[t._v("Rivers")]),a("option",[t._v("Delta")]),a("option",[t._v("Bayelsa")]),a("option",[t._v("Edo")]),a("option",[t._v("Akwa Ibom")])])]),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"form-label",attrs:{for:"inputCity"}},[t._v("City")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputCity"}})]),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"form-label",attrs:{for:"inputRole"}},[t._v("Role")]),a("select",{staticClass:"form-select",attrs:{id:"inputRole"}},[a("option",{attrs:{selected:""}},[t._v("Manager")]),a("option",[t._v("Sales Person")]),a("option",[t._v("Pharmacist")]),a("option",[t._v("Security")])])]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add")])])])])}],F={name:"AddPharmacy"},I=F,J=(a("4795"),Object(m["a"])(I,G,U,!1,null,"579b29f0",null)),W=J.exports,q=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("Stats"),a("Btn"),a("Business-card")],1)},z=[],K=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row row-cols-1 row-cols-md-3 g-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",alt:"Skyscrapers"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Pill Shop")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",alt:"Los Angeles Skyscrapers"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Pill box")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",alt:"Palm Springs Road"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Health info")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",alt:"Palm Springs Road"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Food Guage")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",alt:"Palm Springs Road"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Physical Activity")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",alt:"Palm Springs Road"}}),a("div",{staticClass:"card-body"},[a("h2",{staticClass:"card-title"},[t._v("Vitals")])]),a("div",{staticClass:"card-footer"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])])])])}],Y={name:"BusinessCard"},Z=Y,tt=Object(m["a"])(Z,K,X,!1,null,"d8b8e2da",null),st=tt.exports,at=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btn-parent"},[a("div",{staticClass:"btn-sib"}),a("div",{staticClass:"btn-sib"},[a("AddModal")],1)])},it=[],et=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"add-pharm"},[a("router-link",{attrs:{to:"/add-pharmacy",id:"add-btn"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("add")]),t._v(" Add Employee ")])],1)},ct=[],lt={name:"AddModal"},rt=lt,nt=(a("2b01"),Object(m["a"])(rt,et,ct,!1,null,"9caa6836",null)),ot=nt.exports,dt={name:"Btn",components:{AddModal:ot}},vt=dt,ut=(a("1071"),Object(m["a"])(vt,at,it,!1,null,"3496b3ba",null)),pt=ut.exports,mt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"insights"},[a("div",{staticClass:"sales"},[a("span",{staticClass:"material-icons-sharp"},[t._v("analytics")]),a("div",{staticClass:"middle"},[t._m(0),a("div",{staticClass:"progress"},[a("svg",[a("circle",{attrs:{cx:"38",cy:"38",r:"36"}})]),t._m(1)])]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])]),a("div",{staticClass:"expenses"},[a("span",{staticClass:"material-icons-sharp"},[t._v("analytics")]),a("div",{staticClass:"middle"},[t._m(2),a("div",{staticClass:"progress"},[a("svg",[a("circle",{attrs:{cx:"38",cy:"38",r:"36"}})]),t._m(3)])]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])]),a("div",{staticClass:"income"},[a("span",{staticClass:"material-icons-sharp"},[t._v("analytics")]),a("div",{staticClass:"middle"},[t._m(4),a("div",{staticClass:"progress"},[a("svg",[a("circle",{attrs:{cx:"38",cy:"38",r:"36"}})]),t._m(5)])]),a("small",{staticClass:"text-muted"},[t._v("Last 24 Hours")])])])},_t=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("h3",[t._v("Total Pharmacies")]),a("h1",[t._v("25")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number"},[a("p",[t._v("81%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("h3",[t._v("Total Users")]),a("h1",[t._v("100")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number"},[a("p",[t._v("81%")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left"},[a("h3",[t._v("Total Employees")]),a("h1",[t._v("50")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"number"},[a("p",[t._v("81%")])])}],ft={name:"Stats"},Ct=ft,ht=(a("709f"),Object(m["a"])(Ct,mt,_t,!1,null,"3bb1613b",null)),bt=ht.exports,gt={name:"DashboardIndex",components:{BusinessCard:st,Btn:pt,Stats:bt}},yt=gt,xt=Object(m["a"])(yt,q,z,!1,null,"b9942b40",null),At=xt.exports,Et=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"pills"}},[a("Btn"),t._m(0)],1)},wt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Drug Name")]),a("th",{attrs:{scope:"col"}},[t._v("Qty")]),a("th",{attrs:{scope:"col"}},[t._v("Cost Per Price")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Manu. Date")]),a("th",{attrs:{scope:"col"}},[t._v("Expiry Date")])])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("1")]),a("td",[t._v("Panadol")]),a("td",[t._v("5 Pkts")]),a("td",[t._v("#100")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("2")]),a("td",[t._v("Vitamin C")]),a("td",[t._v("20 Pcs")]),a("td",[t._v("#200")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("3")]),a("td",[t._v("Panadol")]),a("td",[t._v("5 Pkts")]),a("td",[t._v("#100")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("4")]),a("td",[t._v("Paracetamol")]),a("td",[t._v("5 Pkts")]),a("td",[t._v("#100")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("5")]),a("td",[t._v("Panadol")]),a("td",[t._v("5 Pkts")]),a("td",[t._v("#100")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("6")]),a("td",[t._v("Panadol")]),a("td",[t._v("5 Pkts")]),a("td",[t._v("#100")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("01-05-2022")]),a("td",[t._v("31-07-2024")])])])])}],Pt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btn-parent"},[a("div",{staticClass:"btn-sib"}),a("div",{staticClass:"btn-sib"},[a("div",{staticClass:"add-pharm"},[a("router-link",{attrs:{to:"/add-drug",id:"add-btn"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("add")]),t._v(" Add Drug ")])],1)])])},$t=[],jt={name:"Btn"},kt=jt,St=(a("c32e"),Object(m["a"])(kt,Pt,$t,!1,null,"57921ba6",null)),Nt=St.exports,Ot={name:"PillIndex",components:{Btn:Nt}},Dt=Ot,Mt=(a("2329"),Object(m["a"])(Dt,Et,wt,!1,null,"569c602e",null)),Lt=Mt.exports,Bt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Rt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"create"},[a("form",{staticClass:"row g-3"},[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputName"}},[t._v("Drug Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputName"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputsciName"}},[t._v("Scientific Name")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputsciName"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputQty"}},[t._v("Quantity")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputQty"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputmanufacturer"}},[t._v("Manufacturer")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputmanufacturer"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputCategory"}},[t._v("Category")]),a("select",{staticClass:"form-select",attrs:{id:"inputCategory"}},[a("option",{attrs:{selected:""}},[t._v("Anti-biotics")]),a("option",[t._v("Anti-malaria")]),a("option",[t._v("Contraceptive")])])]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputCost"}},[t._v("Cost per Unit")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputCost"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputName"}},[t._v("Manufacture Date")]),a("input",{staticClass:"form-control",attrs:{type:"date",id:"inputName"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputsciName"}},[t._v("Expiry Date")]),a("input",{staticClass:"form-control",attrs:{type:"date",id:"inputsciName"}})]),a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-label",attrs:{for:"inputsciName"}},[t._v("Caution")]),a("textarea",{staticClass:"form-control",attrs:{id:"inputsciName"}})]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add")])])])])}],Tt={name:"AddDrug"},Ht=Tt,Qt=(a("e7ba"),Object(m["a"])(Ht,Bt,Rt,!1,null,"7cad5bc6",null)),Vt=Qt.exports,Gt=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"create"},[a("form",{staticClass:"row g-3"},[a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputName"}},[t._v("Pill Label")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputName"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputDuration"}},[t._v("Treatment Duration")]),a("select",{staticClass:"form-select",attrs:{id:"inputDuration"}},[a("option",{attrs:{selected:""}},[t._v("1 week")]),a("option",[t._v("4 weeks")]),a("option",[t._v("2 months")])])]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputQty"}},[t._v("Quantity")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"inputQty"}})]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputCategory"}},[t._v("Category")]),a("select",{staticClass:"form-select",attrs:{id:"inputCategory"}},[a("option",{attrs:{selected:""}},[t._v("Anti-biotics")]),a("option",[t._v("Anti-malaria")]),a("option",[t._v("Contraceptive")])])]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputCategory"}},[t._v("Pharmacist")]),a("select",{staticClass:"form-select",attrs:{id:"inputCategory"}},[a("option",{attrs:{selected:""}},[t._v("V-Gate")]),a("option",[t._v("Capitol City")])])]),a("div",{staticClass:"col-md-6"},[a("label",{staticClass:"form-label",attrs:{for:"inputsciName"}},[t._v("Expiry Date")]),a("input",{staticClass:"form-control",attrs:{type:"date",id:"inputsciName"}})]),a("div",{staticClass:"col-md-12"},[a("label",{staticClass:"form-label",attrs:{for:"inputsciName"}},[t._v("Caution")]),a("textarea",{staticClass:"form-control",attrs:{id:"inputsciName"}})]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add")])])])])}],Ft={name:"AddDrug"},It=Ft,Jt=(a("b18f"),Object(m["a"])(It,Gt,Ut,!1,null,"2ea836fd",null)),Wt=Jt.exports,qt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"pills"}},[a("Btn"),t._m(0)],1)},zt=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Pill Label")]),a("th",{attrs:{scope:"col"}},[t._v("Duration")]),a("th",{attrs:{scope:"col"}},[t._v("Quantity")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Pharmacist")]),a("th",{attrs:{scope:"col"}},[t._v("Expiry Date")])])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("1")]),a("td",[t._v("Panadol")]),a("td",[t._v("1 week")]),a("td",[t._v("5pcs")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("V-Gate")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("2")]),a("td",[t._v("Panadol")]),a("td",[t._v("1 week")]),a("td",[t._v("5pcs")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("V-Gate")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("3")]),a("td",[t._v("Panadol")]),a("td",[t._v("4 week")]),a("td",[t._v("5pcs")]),a("td",[t._v("Anti-biotics")]),a("td",[t._v("Capitol City")]),a("td",[t._v("31-07-2024")])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("4")]),a("td",[t._v("Panadol")]),a("td",[t._v("1 week")]),a("td",[t._v("5pcs")]),a("td",[t._v("Anti-Fungal")]),a("td",[t._v("V-Gate")]),a("td",[t._v("31-07-2024")])])])])}],Kt=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"btn-parent"},[a("div",{staticClass:"btn-sib"}),a("div",{staticClass:"btn-sib"},[a("div",{staticClass:"add-pharm"},[a("router-link",{attrs:{to:"/add-pill",id:"add-btn"}},[a("span",{staticClass:"material-icons-sharp"},[t._v("add")]),t._v(" Add Pill ")])],1)])])},Xt=[],Yt={name:"Btn"},Zt=Yt,ts=(a("0439"),Object(m["a"])(Zt,Kt,Xt,!1,null,"2a15a1a0",null)),ss=ts.exports,as={name:"PillIndex",components:{Btn:ss}},is=as,es=(a("d124"),Object(m["a"])(is,qt,zt,!1,null,"184d6490",null)),cs=es.exports;i["a"].use(V["a"]);var ls=[{path:"/",name:"Dashboard",component:At},{path:"/add-pharmacy",name:"Pharmacy",component:W},{path:"/pill-shop",name:"Pill",component:Lt},{path:"/add-drug",name:"Pill",component:Vt},{path:"/pill-box",name:"Pillbox",component:cs},{path:"/add-pill",name:"Pill",component:Wt}],rs=new V["a"]({mode:"history",base:"/",routes:ls}),ns=rs;a("f9e3"),a("7d05");i["a"].config.productionTip=!1;var os=new i["a"];new i["a"]({router:ns,render:function(t){return t(Q)}}).$mount("#app")},6043:function(t,s,a){},6483:function(t,s,a){},"709f":function(t,s,a){"use strict";a("6043")},"716c":function(t,s,a){t.exports=a.p+"img/profile-1.d9509e29.jpg"},"7afa":function(t,s,a){"use strict";a("814b")},"7d05":function(t,s,a){},"814b":function(t,s,a){},8366:function(t,s,a){},"85ec":function(t,s,a){},9544:function(t,s,a){},"966b":function(t,s,a){},"9bc8":function(t,s,a){},a674:function(t,s,a){"use strict";a("33bd")},aee2:function(t,s,a){},b18f:function(t,s,a){"use strict";a("e766")},c32e:function(t,s,a){"use strict";a("aee2")},cf05:function(t,s,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d124:function(t,s,a){"use strict";a("4290")},d868:function(t,s,a){},e350:function(t,s,a){t.exports=a.p+"img/profile-2.ece42023.jpg"},e766:function(t,s,a){},e7ba:function(t,s,a){"use strict";a("6483")},eb0c:function(t,s,a){},f6cd:function(t,s,a){"use strict";a("966b")}});
//# sourceMappingURL=app.71cfc56f.js.map