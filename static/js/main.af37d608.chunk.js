(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{16:function(e,t){e.exports={apiKey:"854c8a3295f56a94e28f120e97f6c3c9"}},21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(14),s=n.n(c),d=(n(21),n(5)),r=n(15),l=n.n(r),j=n(16),o=n.n(j),m=n(0),h=function(){var e,t=Object(a.useState)("berlin"),n=Object(d.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)({}),r=Object(d.a)(s,2),j=r[0],h=r[1],p=null===j||void 0===j||null===(e=j.wind)||void 0===e?void 0:e.deg,x=[{direction:"N",start:310,end:360},{direction:"N",start:1,end:50},{direction:"W",start:230,end:309},{direction:"S",start:130,end:229},{direction:"E",start:49,end:129}].find((function(e){return e.start<=p&&e.end>=p})),u=null===x||void 0===x?void 0:x.direction,b=new Date,O=b.getFullYear();return Object(m.jsxs)("div",{className:"app-wrap",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"text",value:i,placeholder:"enter a city name",onChange:function(e){c(e.target.value)}}),Object(m.jsx)("input",{onClick:function(e){var t;e.preventDefault(),t=i,l.a.get("".concat("https://api.openweathermap.org/data/2.5/","weather?q=").concat(t,"&units=metric&appid=").concat(o.a.apiKey)).then((function(e){return h(e.data)})).catch((function(e){return console.log("Please type an existing city name")}))},type:"submit",id:"submit",value:"Search"})]})}),(null===j||void 0===j?void 0:j.main)&&Object(m.jsxs)("main",{children:[Object(m.jsxs)("section",{className:"location",children:[Object(m.jsxs)("div",{className:"city",children:[" ",j.name,", ",j.sys.country]}),Object(m.jsxs)("div",{className:"date",children:[b.toLocaleDateString("en-US",{weekday:"long"})," ",b.toLocaleDateString("en-US",{day:"numeric"})," ",b.toLocaleDateString("en-US",{month:"long"})," ",O]})]}),Object(m.jsxs)("div",{className:"current",children:[Object(m.jsxs)("div",{className:"temp",children:[Object(m.jsx)("span",{className:"tempN",id:"temp",children:j.main.temp.toFixed()}),Object(m.jsx)("span",{children:"\xb0"})]}),Object(m.jsxs)("div",{className:"feelsContainer",children:["Feels like"," ",Object(m.jsx)("span",{className:"feels",children:j.main.feels_like.toFixed()}),Object(m.jsx)("span",{children:"\xb0"})]}),Object(m.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(j.weather[0].icon,"@2x.png"),className:"icon",alt:""}),Object(m.jsx)("div",{className:"weather",children:j.weather[0].main}),Object(m.jsxs)("div",{className:"hi-low",children:["Max ",j.main.temp_min.toFixed(),"\xb0 / Min"," ",j.main.temp_max.toFixed(),"\xb0"]}),Object(m.jsxs)("div",{className:"wind",children:[Object(m.jsx)("i",{className:"fas fa-wind"}),Object(m.jsxs)("div",{children:["Wind direction: ",Object(m.jsx)("div",{className:"windDeg",children:u})]}),Object(m.jsxs)("div",{children:["Speed:"," ",Object(m.jsxs)("span",{className:"windSpeed",children:[j.wind.speed,"km/h"]})]}),Object(m.jsxs)("div",{children:["Max-gust:"," ",Object(m.jsxs)("span",{className:"windGust",children:[j.wind.gust,"km/h"]})]})]}),Object(m.jsxs)("div",{className:"hum-img",children:[Object(m.jsx)("i",{className:"fas fa-water"}),Object(m.jsxs)("div",{className:"humidity",children:[" ","Humidity:",j.main.humidity,"%"]})]})]})]})]})};var p=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(h,{})})};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.af37d608.chunk.js.map