(this["webpackJsonpatop-okra-frontend"]=this["webpackJsonpatop-okra-frontend"]||[]).push([[0],{332:function(e,t,n){},436:function(e,t){},438:function(e,t){},452:function(e,t){},454:function(e,t){},482:function(e,t){},484:function(e,t){},485:function(e,t){},490:function(e,t){},492:function(e,t){},498:function(e,t){},500:function(e,t){},519:function(e,t){},531:function(e,t){},534:function(e,t){},551:function(e,t,n){"use strict";n.r(t);var r,s=n(0),c=n(29),a=n.n(c),i=n(57),o=(n(332),n(23)),l=n(30),j=n(574),u=n(575),d=n(56),b=n(119),h=n(568),p=n(317),O=n(557),m=n(211),x=n(129),f=n.p+"static/media/logo.250415dd.svg",g=n(572),y=n(573),v=n(6),w=[{name:"Dashboard",icon:Object(v.jsx)(g.a,{}),routes:[{path:"/",name:"Overview"},{path:"/switch",name:"Switch"},{path:"/cwr",name:"CWR"}]},{name:"Deployment",icon:Object(v.jsx)(y.a,{}),routes:[{path:"/ztp",name:"ZTP"},{path:"/sitemanagement",name:"Site Mangement"}]}],S=n(72),k=n(117),F=n(213),I=n.n(F),T=n(300),E=n(138),P=n(301),C=n.n(P),M=Object(E.b)("userAuth/login",function(){var e=Object(T.a)(I.a.mark((function e(t,n){var r,s,c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,s=t.password,e.prev=1,e.next=4,C()({method:"POST",url:"/api/token",headers:{accept:"application/json","Content-Type":"application/json"},data:{name:r,password:s}});case 4:return c=e.sent,e.next=7,c.data;case 7:if(a=e.sent,200!==c.status||0!==c.data.code){e.next=14;break}return sessionStorage.setItem("rmstoken",a.payload.token.token),sessionStorage.setItem("rmsuser",a.payload.user.name),e.abrupt("return",a.payload.user);case 14:return e.abrupt("return",n.rejectWithValue(a.payload.reason));case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(1),console.log("Error",e.t0.response.statusText),e.abrupt("return",n.rejectWithValue(e.t0.response.statusText));case 21:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,n){return e.apply(this,arguments)}}()),W=Object(E.c)({name:"userAuth",initialState:{name:"",isFetching:!1,isSuccess:!1,isError:!1,errorMessage:""},reducers:{clearState:function(e){return e.isError=!1,e.isSuccess=!1,e.isFetching=!1,e},setUser:function(e,t){var n=t.payload;return e.name=n,e},logoutUser:function(e){return e.name="",e.isError=!1,e.isSuccess=!1,e.isFetching=!1,e.errorMessage="",e}},extraReducers:(r={},Object(k.a)(r,M.fulfilled,(function(e,t){var n=t.payload;return e.name=null===n||void 0===n?void 0:n.name,e.isFetching=!1,e.isSuccess=!0,e})),Object(k.a)(r,M.rejected,(function(e,t){var n=t.payload;e.isFetching=!1,e.isError=!0,e.errorMessage=n})),Object(k.a)(r,M.pending,(function(e){e.isFetching=!0})),r)}),A=W.actions,U=A.clearState,z=(A.setUser,A.logoutUser,function(e){return e.userAuth}),N=function(e){var t=Object(o.g)(),n=Object(o.h)(),r=(Object(S.b)(),Object(S.c)(z).name),c=Object(s.useState)(t.pathname),a=Object(l.a)(c,2),g=a[0],y=a[1],k=Object(v.jsx)(d.a,{children:Object(v.jsx)(d.a.Item,{children:Object(v.jsx)(b.a,{type:"primary",block:!0,onClick:function(){n("/login",{replace:!0})},children:"Logout"})},"0")});return Object(v.jsx)(m.a,{layout:"mix",title:"Atop OKRA",logo:f,fixSiderbar:!0,fixedHeader:!0,location:{pathname:g},route:{routes:w},navTheme:"light",rightContentRender:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{count:11,size:"small",offset:[-1,3],children:Object(v.jsx)(p.a,{shape:"circle",icon:Object(v.jsx)(j.a,{}),style:{background:"inherit"}})}),Object(v.jsx)(O.a,{overlay:k,trigger:["click"],children:Object(v.jsx)(b.a,{type:"text",onClick:function(e){return e.preventDefault()},icon:Object(v.jsx)(u.a,{}),style:{color:"#fff"},children:r})})]})},menuItemRender:function(e,t){return Object(v.jsx)(i.b,{to:e.path||"deploy",onClick:function(){return y(e.path||"deploy")},children:t})},children:Object(v.jsx)(x.a,{header:{title:"",breadcrumb:{}},children:Object(v.jsx)(o.b,{})})})},B=function(){return Object(v.jsx)("div",{children:"CWR Works !"})},D=n(120),L=n(61),R=n(564),q=n(570),Z=n(576),K=n(322),V=n(323),_=R.a.Title,H={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",height:"203px"},J=function(e){return{fontSize:"70px",color:"var(--ant-".concat(e,"-color)")}},G=function(){return Object(v.jsx)(q.a,{title:"Alarm Status",bordered:!1,children:Object(v.jsxs)(D.a,{gutter:16,align:"middle",children:[Object(v.jsxs)(L.a,{span:8,style:H,children:[Object(v.jsx)(Z.a,{style:J("warning")}),Object(v.jsx)(_,{level:4,children:"Warning"}),Object(v.jsx)(_,{level:5,children:"5"})]}),Object(v.jsxs)(L.a,{span:8,style:H,children:[Object(v.jsx)(K.a,{style:J("info")}),Object(v.jsx)(_,{level:4,children:"Information"}),Object(v.jsx)(_,{level:5,children:"5"})]}),Object(v.jsxs)(L.a,{span:8,style:H,children:[Object(v.jsx)(V.a,{style:J("error")}),Object(v.jsx)(_,{level:4,children:"Critical"}),Object(v.jsx)(_,{level:5,children:"5"})]})]})})},Y=n(306),Q=n(312),X=n.n(Q),$=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){r({series:[27,25,18],options:{chart:{height:200,type:"donut"},labels:["Warning","Offline","Unknown"],colors:["#5B8FF9","#5AD8A6","#5D7092"],dataLabels:{enabled:!0,formatter:function(e,t){return t.w.globals.series[t.seriesIndex]}},legend:{formatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex]}},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],plotOptions:{pie:{donut:{labels:{show:!0,total:{showAlways:!0,show:!0},value:{fontWeight:600,fontSize:"32px"}}}}}}})}),[]),Object(v.jsx)(q.a,{title:"Device Status",bordered:!1,children:Object(v.jsx)("div",{id:"chart",style:{position:"relative"},children:null===n?Object(v.jsx)(Y.a,{}):Object(v.jsx)(X.a,{options:n.options,series:n.series,type:"donut",height:200})})})},ee=n(565),te=n(566),ne=function(e){var t=ee.a.useForm(),n=Object(l.a)(t,1)[0],r=Object(s.useState)({}),c=Object(l.a)(r,2)[1];Object(s.useEffect)((function(){c({})}),[]);return Object(v.jsx)("div",{style:{marginBottom:"10px"},children:Object(v.jsxs)(ee.a,{form:n,name:"horizontal_login",layout:"inline",onFinish:function(t){e.flyToMap(t),n.resetFields()},children:[Object(v.jsx)(ee.a.Item,{name:"lat",style:{marginBottom:"0px"},rules:[{required:!0,message:"Field is required!"},function(){return{validator:function(e,t){return!t||re(t)?Promise.resolve():Promise.reject(new Error("latitude value must be between -90 to 90!"))}}}],children:Object(v.jsx)(te.a,{controls:!1,placeholder:"latitude",style:{width:250}})}),Object(v.jsx)(ee.a.Item,{name:"lng",style:{marginBottom:"0px"},rules:[{required:!0,message:"Field is required!"},function(){return{validator:function(e,t){return!t||se(t)?Promise.resolve():Promise.reject(new Error("Longitude value must be between -180 to 180!"))}}}],children:Object(v.jsx)(te.a,{controls:!1,placeholder:"Longitude",style:{width:250}})}),Object(v.jsx)(ee.a.Item,{shouldUpdate:!0,children:function(){return Object(v.jsx)(b.a,{type:"primary",htmlType:"submit",disabled:!n.isFieldsTouched(!0)||!!n.getFieldsError().filter((function(e){return e.errors.length})).length,children:"Fly To Entered Coordinate"})}})]})})},re=function(e){return isFinite(e)&&Math.abs(e)<=90},se=function(e){return isFinite(e)&&Math.abs(e)<=180},ce=n(558),ae=n(559),ie=n(560),oe=n(561),le=n(562),je=n(577),ue=n(51),de=n.n(ue),be=n(313),he=n(314),pe=n(315),Oe=function(){Object(s.useEffect)((function(){delete de.a.Icon.Default.prototype._getIconUrl,de.a.Icon.Default.mergeOptions({iconRetinaUrl:pe.a,iconUrl:be.a,shadowUrl:he.a})}),[]);var e=Object(s.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(ce.a)({});return null!==n&&e.flyTo(n,e.getZoom()),null===n?null:Object(v.jsx)(ae.a,{position:n,children:Object(v.jsx)(ie.a,{children:"You are here"})})};return Object(v.jsxs)(q.a,{children:[Object(v.jsx)(ne,{flyToMap:function(e){r(e)}}),Object(v.jsx)(oe.a,{center:[13.005321507296706,77.66291562524158],zoom:13,scrollWheelZoom:!0,children:Object(v.jsxs)(le.a,{position:"topright",children:[Object(v.jsx)(le.a.BaseLayer,{checked:!0,name:"Mapbox streets map",children:Object(v.jsx)(je.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:18})}),Object(v.jsx)(le.a.BaseLayer,{name:"OpenStreetMap.Mapnik",children:Object(v.jsx)(je.a,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",maxZoom:18})}),Object(v.jsx)(ae.a,{position:[13.005321507296706,77.66291562524158],children:Object(v.jsxs)(ie.a,{children:["Atech Solutions Private Limited ",Object(v.jsx)("br",{})," No. 3M, 217, East of NGEF Layout, Kasturi Nagar, Bengaluru, Karnataka 560043."]})}),Object(v.jsx)(c,{})]})})]})},me=function(){return Object(v.jsxs)(D.a,{gutter:[16,16],children:[Object(v.jsx)(L.a,{span:12,children:Object(v.jsx)($,{})}),Object(v.jsx)(L.a,{span:12,children:Object(v.jsx)(G,{})}),Object(v.jsx)(L.a,{span:24,children:Object(v.jsx)(Oe,{})})]})},xe=function(){return Object(v.jsx)("div",{children:"Switch Page Works !"})},fe=function(){return Object(v.jsx)("div",{children:"Site management Works !"})},ge=function(){return Object(v.jsx)("div",{children:"ZTP Page Works !"})},ye=n(318),ve=n(571),we=n(563),Se=n(567),ke=n(569),Fe=n(578),Ie=n.p+"static/media/Logo.d157142d.png",Te=R.a.Text,Ee=function(e){return Object(v.jsxs)("div",{className:"formWrapper",children:[Object(v.jsxs)(ve.b,{direction:"vertical",align:"center",size:0,children:[Object(v.jsx)(we.a,{height:87,src:Ie,preview:!1}),Object(v.jsx)(Te,{type:"secondary",children:"Simple Solutions for Complex Connections"})]}),Object(v.jsxs)(ee.a,{name:"normal_login",className:"loginForm",size:"large",autoComplete:"off",onFinish:e.onFinish,form:e.form,children:[Object(v.jsx)(ee.a.Item,{name:"name",rules:[{required:!0,message:"Please input your Username!"}],children:Object(v.jsx)(Se.a,{prefix:Object(v.jsx)(u.a,{}),placeholder:"Username"})}),Object(v.jsx)(ee.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(v.jsx)(Se.a,{prefix:Object(v.jsx)(Fe.a,{}),type:"password",placeholder:"Password"})}),Object(v.jsxs)(ee.a.Item,{children:[Object(v.jsx)(ee.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(v.jsx)(ke.a,{children:"Remember me"})}),Object(v.jsx)(i.b,{className:"login-form-forgot",to:"/login",children:"Forgot your password?"})]}),Object(v.jsx)(ee.a.Item,{children:Object(v.jsx)(b.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:e.loading,children:"Sign in"})})]})]})},Pe=R.a.Text,Ce=function(){var e=Object(o.h)(),t=ee.a.useForm(),n=Object(l.a)(t,1)[0],r=Object(S.b)(),c=Object(S.c)(z),a=c.isFetching,i=c.isSuccess,j=c.isError,u=c.errorMessage;return Object(s.useEffect)((function(){return sessionStorage.removeItem("rmstoken"),sessionStorage.removeItem("rmsuser"),function(){r(U())}}),[]),Object(s.useEffect)((function(){j&&(ye.a.error({message:u}),n.resetFields(),r(U())),i&&(r(U()),ye.a.success({message:"Successfully loggedin !"}),n.resetFields(),e("/"))}),[j,i]),Object(v.jsxs)("div",{className:"container-login",children:[Object(v.jsx)(Ee,{onFinish:function(t){e("/")},form:n,loading:a}),Object(v.jsxs)("div",{className:"loginFooter",children:[Object(v.jsx)(Pe,{type:"secondary",children:"Copyright \xa92021 Produced by Atop Technologies"}),Object(v.jsx)(Pe,{type:"secondary",children:"Version 1.0.0"})]})]})},Me=n(319),We=function(){var e=Object(o.h)();return Object(v.jsx)(Me.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(v.jsx)(b.a,{type:"primary",onClick:function(){return e("/")},children:"Back Home"})})};n(432);function Ae(e){var t=e.children;return Ue()?t:Object(v.jsx)(o.a,{to:"/login",replace:!0})}var Ue=function(){return!0},ze=function(){return Object(v.jsxs)(o.e,{children:[Object(v.jsxs)(o.c,{element:Object(v.jsx)(N,{}),children:[Object(v.jsx)(o.c,{path:"/",element:Object(v.jsx)(Ae,{children:Object(v.jsx)(me,{})})}),Object(v.jsx)(o.c,{path:"/switch",element:Object(v.jsx)(Ae,{children:Object(v.jsx)(xe,{})})}),Object(v.jsx)(o.c,{path:"/cwr",element:Object(v.jsx)(Ae,{children:Object(v.jsx)(B,{})})}),Object(v.jsx)(o.c,{path:"/ztp",element:Object(v.jsx)(Ae,{children:Object(v.jsx)(ge,{})})}),Object(v.jsx)(o.c,{path:"/sitemanagement",element:Object(v.jsx)(Ae,{children:Object(v.jsx)(fe,{})})})]}),Object(v.jsx)(o.c,{path:"/login",element:Object(v.jsx)(Ce,{})}),Object(v.jsx)(o.c,{path:"*",element:Object(v.jsx)(We,{})})]})};var Ne=function(){return Object(v.jsx)(ze,{})},Be=Object(E.a)({reducer:{userAuth:W.reducer}});a.a.render(Object(v.jsx)(S.a,{store:Be,children:Object(v.jsx)(i.a,{children:Object(v.jsx)(Ne,{})})}),document.getElementById("root"))}},[[551,1,2]]]);
//# sourceMappingURL=main.1b2157d9.chunk.js.map