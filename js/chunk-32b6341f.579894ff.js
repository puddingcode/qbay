(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-32b6341f"],{"230f":function(t,i,e){"use strict";e("af2f")},"2cf3":function(t,i,e){"use strict";e.r(i);e("b0c0");var o=e("5530"),a=(e("4160"),e("a434"),e("a9e3"),e("159b"),e("365c")),n=e("2f62"),s=e("4260"),c={props:["commodityList"],created:function(){this.changeCommodityList()},data:function(){return{newCommodityList:[]}},methods:Object(o.a)({changeCommodityList:function(){this.newCommodityList=JSON.parse(JSON.stringify(this.commodityList)),this.newCommodityList.forEach((function(t){t.status=!!t.status,t.btnLoading=!1}))},modifyCommodity:function(t,i){var e=this.commodityList[i].id;this.$router.push({name:"Adding Goods",params:{id:e}})},deleteCommodity:function(t,i){var e=this;this.newCommodityList.splice(i,1,Object(o.a)(Object(o.a)({},this.newCommodityList[i]),{},{btnLoading:!0}));var n=this.newCommodityList[i].id;a.a.deleteCommodity({id:n}).then((function(){e.$message.success(e.$t("public.deleteSuccessMsg")),e.newCommodityList.splice(i,1)})).catch((function(t){console.log(t),e.newCommodityList.splice(i,1,Object(o.a)(Object(o.a)({},e.newCommodityList[i]),{},{btnLoading:!1}))}))},changeSwitch:function(t,i){var e=this.newCommodityList[i].status,a=Object(o.a)(Object(o.a)({},Object(s.d)(t,["id","name","oss_url","shop_id","category_id","status","base_price","size","description"])),{},{status:Number(e),size:JSON.parse(t.size)});this.modify_commodity(a)}},Object(n.b)({modify_commodity:"commodity/modifyCommodity"})),computed:Object(o.a)({},Object(n.d)({shopId:function(t){return t.user.loginData.id}}))},r=(e("5588"),e("2877")),d=Object(r.a)(c,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"commodity_list"},[e("el-table",{ref:"itemTable",staticStyle:{width:"100%"},attrs:{data:t.newCommodityList,height:"100%"}},[e("el-table-column",{attrs:{label:t.$t("commodity.commodity"),width:"width"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:12}},[e("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{"referrer-policy":"strict-origin-when-cross-origin",src:t.newCommodityList[i.$index].oss_url}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])])],1),e("el-col",{attrs:{span:12}},[e("div",[t._v(t._s(t.newCommodityList[i.$index].name))])])],1)]}}])}),e("el-table-column",{attrs:{label:t.$t("commodity.display"),"min-width":"20%"},scopedSlots:t._u([{key:"default",fn:function(i){var o=i.row,a=i.$index;return[e("el-switch",{attrs:{"active-color":"#1fab89","inactive-color":"#DCDCDC"},on:{change:function(i){return t.changeSwitch(o,a)}},model:{value:t.newCommodityList[a].status,callback:function(i){t.$set(t.newCommodityList[a],"status",i)},expression:"newCommodityList[$index].status"}})]}}])}),e("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){var o=i.row,a=i.$index;return[e("el-button",{staticStyle:{width:"80px"},attrs:{size:"small",type:"primary"},on:{click:function(i){return t.modifyCommodity(o,a)}}},[t._v(" "+t._s(t.$t("btn.modify"))+" ")]),e("el-button",{staticStyle:{width:"80px"},attrs:{size:"small",type:"primary",loading:o.btnLoading,plain:""},on:{click:function(i){return t.deleteCommodity(o,a)}}},[t._v(" "+t._s(t.$t("btn.delete"))+" ")])]}}])})],1)],1)}),[],!1,null,"3f4c186c",null).exports,l=e("540a"),m=e("e43c"),u=e("333d"),p={mounted:function(){this.getCommodityList(),this.getProductCategories()},data:function(){return{activeName:"All",currentComponent:d,loading:!1,categoryId:null,listQuery:{page:1,limit:20},commodityList:[],total:0}},methods:Object(o.a)({getProductCategories:function(){this.$store.dispatch("commodity/getCommodityCategorityList",{shop_id:this.shopId})},getList:function(){this.getCommodityList()},getCommodityList:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{limit:this.listQuery.limit,offset:(this.listQuery.page-1)*this.listQuery.limit};this.loading=!0,Object(m.b)(".loading_wrapper"),Object(l.getCommodityList)(i).then((function(i){t.loading=!1,setTimeout((function(){Object(m.a)()}),0),t.total=i.data.total,t.commodityList=i.data.list}))},tabClick:function(t){var i;this.activeName=t.name,"All"!==t.name&&(i={limit:this.listQuery.limit,offset:(this.listQuery.page-1)*this.listQuery.limit,category_id:this.categoryId=t.$attrs["data-id"]}),this.getCommodityList(i)}},Object(n.b)({modifyCommodity:"commodity/modifyCommodity"})),computed:Object(o.a)({commodityStatus:function(){return this.$refs.switch}},Object(n.d)({shopId:function(t){return t.user.loginData.id},categoryList:function(t){return t.commodity.commodityCategorityList}})),components:{SortItem:d,Pagination:u.a}},y=(e("f65a"),Object(r.a)(p,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"commodity_wrapper"},[e("el-scrollbar",{staticClass:"commodity_title"},[e("el-tabs",{staticClass:"sidebar_tab",staticStyle:{},attrs:{"tab-position":"left"},on:{"tab-click":t.tabClick},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("commodity.all"),name:"All"}}),t._l(t.categoryList,(function(t){return e("el-tab-pane",{key:t.id,attrs:{label:t.name,name:t.id+"","data-id":t.id}})}))],2)],1),e("div",{staticClass:"commodity_content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading_wrapper"}),t.loading?t._e():e(t.currentComponent,{tag:"component",attrs:{commodityList:t.commodityList},on:{"update:commodityList":function(i){t.commodityList=i},"update:commodity-list":function(i){t.commodityList=i}}}),e("div",{staticClass:"pagination_wrapper"},[e("pagination",{attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(i){return t.$set(t.listQuery,"page",i)},"update:limit":function(i){return t.$set(t.listQuery,"limit",i)},pagination:t.getList}})],1)],1)],1)}),[],!1,null,"accf51c2",null));i.default=y.exports},"333d":function(t,i,e){"use strict";e("a9e3");var o={props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total,sizes,prev,pager,next,jumper"},background:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{limit:t,page:this.currentPage})},handleCurrentChange:function(t){this.$emit("pagination",{limit:this.pageSize,page:t})}}},a=(e("230f"),e("2877")),n=Object(a.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[e("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(i){t.currentPage=i},"update:current-page":function(i){t.currentPage=i},"update:pageSize":function(i){t.pageSize=i},"update:page-size":function(i){t.pageSize=i},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)}),[],!1,null,"6902aa3c",null);i.a=n.exports},"3a5f":function(t,i,e){},5588:function(t,i,e){"use strict";e("c291")},af2f:function(t,i,e){},c291:function(t,i,e){},e43c:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"a",(function(){return s}));var o,a=e("5c96");function n(t){var i={text:"loading......",background:"rgba(255, 255, 255, 0.6)",target:document.querySelector(t)||"body",customClass:"server_loading"};o=a.Loading.service(i)}function s(){o.close()}},f65a:function(t,i,e){"use strict";e("3a5f")}}]);
//# sourceMappingURL=chunk-32b6341f.579894ff.js.map