(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1b9d7216"],{"0b40":function(t,e,a){"use strict";a.r(e);var s=a("5530"),i=a("2f62"),n=a("e43c"),o={mounted:function(){var t=this;Object(n.b)(".business_loading");var e={way:this.choice,pay_method:1,shop_id:this.shopId};this.getShopStatistics(e).then((function(){t.isLoading=!1,Object(n.a)()}))},data:function(){return{isLoading:!0,date:[{way:"day",label:this.$t("data.today")},{way:"week",label:this.$t("data.week")},{way:"month",label:this.$t("data.month")},{way:"all",label:this.$t("data.all")}],choice:"day"}},methods:Object(s.a)({changeDate:function(t){var e=this;this.isLoading=!0,Object(n.b)(".business_loading");var a={way:t,pay_method:1,shop_id:this.shopId};this.getShopStatistics(a).then((function(){e.isLoading=!1,Object(n.a)()}))}},Object(i.b)({getAllSales:"statistics/sGetAllSales",getShopStatistics:"statistics/sGetShopStatistics"})),computed:Object(s.a)({},Object(i.d)({bussinessStatistics:function(t){return t.statistics.bussinessStatistics},shopId:function(t){return t.user.data.role_id}}))},c=(a("cde7"),a("2877")),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-select",{on:{change:t.changeDate},model:{value:t.choice,callback:function(e){t.choice=e},expression:"choice"}},t._l(t.date,(function(t){return a("el-option",{key:t.way,attrs:{label:t.label,value:t.way}})})),1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"business_loading"}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"business_wrapper"},[a("el-table",{staticClass:"bussinesss_table",staticStyle:{width:"100%"},attrs:{border:"",data:t.bussinessStatistics,"cell-class-name":"bussiness_cell","header-row-class-name":"bussiness_head",height:"100%"}},[a("el-table-column",{attrs:{prop:"total_order_price",label:t.$t("data.turnOver"),width:"width"}}),a("el-table-column",{attrs:{prop:"valid_order_sum",label:t.$t("data.validOrder"),width:"width"}}),a("el-table-column",{attrs:{prop:"invalid_order_sum",label:t.$t("data.invalidOrder"),width:"width"}}),a("el-table-column",{attrs:{prop:"all_order_sum",label:t.$t("data.totalOrder"),width:"width"}})],1)],1)],1)}),[],!1,null,"13ad22db",null);e.default=l.exports},c4c5:function(t,e,a){},cde7:function(t,e,a){"use strict";var s=a("c4c5");a.n(s).a},e43c:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o}));var s,i=a("5c96");function n(t){var e={text:"loading......",background:"rgba(255, 255, 255, 0.6)",target:document.querySelector(t)||"body",customClass:"server_loading"};s=i.Loading.service(e)}function o(){s.close()}}}]);
//# sourceMappingURL=chunk-1b9d7216.19524fce.js.map