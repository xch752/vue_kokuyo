webpackJsonp([1],{161:function(t,e,s){s(172);var a=s(75)(s(167),s(198),null,null);a.options.__file="C:\\Users\\xch752\\Desktop\\vue-book-master\\vue-book-master\\router\\views\\case.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] case.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},167:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{value:[],options:[{value:"jianzhu",label:"建筑工程"},{value:"chuanyi",label:"创意设计"},{value:"shengwu",label:"生物制药"},{value:"kuaisu",label:"快速消费品"},{value:"jingrong",label:"金融保险"},{value:"dichan",label:"地产建设"}],activeIndex:"3",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)},handleChange:function(t){console.log(t)}}}},172:function(t,e){},179:function(t,e,s){t.exports=s.p+"cddc17086f7742eca3fade6a8f9e862c.jpg"},180:function(t,e,s){t.exports=s.p+"9dbd4c8ae53a8412e0798cf7741d9eaf.jpg"},181:function(t,e,s){t.exports=s.p+"cfa81894eafa7a04e02b5b527cdefdd1.jpg"},182:function(t,e,s){t.exports=s.p+"36b903448303d82bb08fae3d4219efca.jpg"},183:function(t,e,s){t.exports=s.p+"f11377e7554d4d916e620486d466c539.jpg"},184:function(t,e,s){t.exports=s.p+"ab8e2b8b3d2e367297bb4aca8f9e3b5b.jpg"},185:function(t,e,s){t.exports=s.p+"69f55ed0004d794b6e2cc7dcdf0dd117.jpg"},186:function(t,e,s){t.exports=s.p+"9bc605fd72b368905b72ca7701d04ba8.jpg"},187:function(t,e,s){t.exports=s.p+"9a62290750100de88ea7f7a9bde99f26.jpg"},198:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","text-color":"black","active-text-color":"#747474","font-family":"bold"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/index"}},[t._v("首页")])],1),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("router-link",{attrs:{to:"/product"}},[t._v("产品")])],1),t._v(" "),a("el-submenu",{attrs:{index:"2-1"}},[a("template",{slot:"title"},[t._v("座椅")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1-1"}},[t._v("所有办公座椅")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1-2"}},[t._v("员工椅")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1-3"}},[t._v("管理职椅")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-1-4"}},[t._v("会议/培训椅")])],2),t._v(" "),a("el-submenu",{attrs:{index:"2-2"}},[a("template",{slot:"title"},[t._v("智能办公/会议桌")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-1"}},[t._v("所有办公/会议桌")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-2"}},[t._v("智能升降桌")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-3"}},[t._v("长条桌")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-4"}},[t._v("屏风工作位")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-5"}},[t._v("管理职工位")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-2-6"}},[t._v("会议/培训桌")])],2),t._v(" "),a("el-submenu",{attrs:{index:"2-3"}},[a("template",{slot:"title"},[t._v("协作/休闲家具")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-3-1"}},[t._v("协作/休闲家具")])],2),t._v(" "),a("el-submenu",{attrs:{index:"2-4"}},[a("template",{slot:"title"},[t._v("储物柜")]),t._v(" "),a("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("办公收纳")])],2)],2),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[t._v("项目案例")]),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[t._v("课题研究")]),t._v(" "),a("el-menu-item",{attrs:{index:"5"}},[t._v("关于我们")]),t._v(" "),a("el-menu-item",{attrs:{index:"6"}},[t._v("联系我们")]),t._v(" "),a("el-menu-item",{attrs:{index:"7"}},[t._v("校园招聘")]),t._v(" "),a("el-menu-item",{attrs:{index:"8"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),a("i",{staticClass:"el-icon-search"})],1),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}}),t._v(" "),a("el-menu-item",{attrs:{index:"7"}},[a("h1",[t._v("KOKUYO")])])],1)],1),t._v(" "),a("el-main",[a("el-row",[a("el-col",{attrs:{span:10,offset:"4"}},[a("div",{staticStyle:{height:"20px"}})])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offset:"3"}},[a("div",{staticClass:"grid-content bg-purple",staticStyle:{"text-align":"left"}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("项目案例")])],1)],1)])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-carousel",{attrs:{interval:3e3,"indicator-position":"none",height:"",type:"card",arrow:"hover"}},[a("el-carousel-item",[a("img",{staticClass:"carousel_image_type",attrs:{src:"https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/15110001_20-1024x683.jpg"}})]),t._v(" "),a("el-carousel-item",[a("img",{staticClass:"carousel_image_type",attrs:{src:"https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/15110001_10-1024x683.jpg"}})]),t._v(" "),a("el-carousel-item",[a("img",{staticClass:"carousel_image_type",attrs:{src:"https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/L16030037_06.jpg"}})]),t._v(" "),a("el-carousel-item",[a("img",{staticClass:"carousel_image_type",attrs:{src:"https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/anli.jpg"}})]),t._v(" "),a("el-carousel-item",[a("img",{staticClass:"carousel_image_type",attrs:{src:"https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/L17030002_08.jpg"}})])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:4,offset:"2"}},[a("div",{staticClass:"grid-content bg-purple",staticStyle:{"text-align":"left"}},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"}),t._v(" "),a("el-cascader",{attrs:{options:t.options},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(179)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        NEW OFFICE AWARD-YASUJIMA")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(180)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        THOUGHTWORKS")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(181)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        深圳中洲控股有限公司")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offset:"4"}},[a("div",{staticClass:"grid-content bg-purple"},[a("h2",{staticStyle:{"text-align":"left"}})])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(182)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        安德森·毛利·友常律师事务所")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(183)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        新日铁兴和不动产有限公司")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(184)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        NEW OFFICE AWARD-千寿制药有限公司")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offset:"4"}},[a("div",{staticClass:"grid-content bg-purple"},[a("h2",{staticStyle:{"text-align":"left"}})])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(185)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        YAHOO JAPAN 大阪办公室")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(186)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        TOYOTA L&F 大阪客户中心")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("router-link",{attrs:{to:"/office"}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",staticStyle:{width:"100%",display:"block"},attrs:{src:s(187)}}),t._v(" "),a("div",{staticStyle:{padding:"0px"}},[a("p",{staticStyle:{"font-size":"1vw"}},[t._v("        不二制油研究开发中心")])])])],1)],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10,offset:"4"}},[a("div",{staticClass:"grid-content bg-purple"},[a("h2",{staticStyle:{"text-align":"left"}})])])],1)],1),t._v(" "),a("div",{staticClass:"foot"},[a("el-row",[a("el-col",{attrs:{span:7}},[a("div",{staticClass:"footer_thank"},[a("span",[t._v("T")]),t._v("HANKS\n\t\t")])]),t._v(" "),a("el-col",{attrs:{span:10}},[a("div",{staticClass:"footer_copy"},[a("span",[t._v("Copyright © 2018.Company name All rights reserved.")])])]),t._v(" "),a("el-col",{attrs:{span:7}},[a("div",{staticClass:"foot_3"})])],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});