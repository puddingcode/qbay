(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-332e0166"],{"874c":function(e,t,s){"use strict";s.d(t,"b",(function(){return c})),s.d(t,"a",(function(){return l}));s("baa5"),s("fb6a"),s("b0c0"),s("d3b7");var a=s("0da4"),n=s.n(a),i=s("2b0e"),o=s("9923"),r=s("e43c");n.a.config.update({region:"ap-southeast-2",credentials:new n.a.CognitoIdentityCredentials({IdentityPoolId:"ap-southeast-2:3690eca5-99fb-4e84-8cf4-74ec0ac8162c"})});var u=new n.a.S3({apiVersion:"2006-03-01",params:{Bucket:"test.znox.top.images"}});function c(e){Object(r.b)(".avatar_loading");var t=e.file,s="image/jpeg"===t.type||"image/png"===t.type,a=t.size/1024/1024<2;if(!s)return i.default.prototype.$message({showClose:!0,message:o.a.t("error.picTypeErr"),type:"error"}),Promise.reject({msg:"uploaderr"});if(!a)return i.default.prototyoe.$message({showClose:!0,message:o.a.t("error.picMaxErr"),type:"error"}),Promise.reject({msg:"uploaderr"});var n=t.name.lastIndexOf("."),c=t.name.slice(n,t.name.length),l="static/images/"+t.uid+c;return u.upload({Bucket:"test.znox.top.images",Key:l,Body:t,ACL:"public-read"},{partSize:10485760,queueSize:1}).promise()}function l(e){var t=e.file;return console.log(t),u.upload({Bucket:"test.znox.top.images",Key:"index.html",Body:t,ACL:"public-read"}).promise().then((function(e){console.log("success",e)}),(function(e){console.log("failed",e)}))}},bb50:function(e,t,s){"use strict";s.r(t);s("b0c0"),s("ac1f"),s("1276");var a=s("5530"),n=s("2f62"),i=s("874c"),o=s("e43c"),r={created:function(){var e=this.shopInfo,t=e.name,s=e.do_business_end_minute,a=e.do_business_start_minute,n=e.announcement_picture,i=e.logo,o=e.is_open,r=e.address;this.businessData={name:t,do_business_end_minute:this.minutesToTime(s),do_business_start_minute:this.minutesToTime(a),announcement_picture:n,logo:i,is_open:o,address:r}},data:function(){return{avatarLoading:!1,announcementLoading:!1,isLoading:!1,businessData:{}}},computed:Object(a.a)({},Object(n.d)({shopId:function(e){return e.user.loginData.id},shopInfo:function(e){return e.user.loginData}})),methods:Object(a.a)({timeToMinutes:function(e){return 60*parseInt(e.split(":")[0])},minutesToTime:function(e){var t=e/60;return t>=10?"".concat(t,":00"):"0".concat(t,":00")},getShopInfo:function(){var e={shop_id:this.shopId};return this.getShopBasicInfo(e)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png",s=e.size/1024/1024<2;t||this.$message.error(this.$t("error.picTypeErr")),s||this.$message.error(this.$t("error.picMaxErr"))},uploadFile:function(e){var t=this;this.avatarLoading=!0,Object(i.b)(e).then((function(e){t.avatarLoading=!1,Object(o.a)(),t.businessData.logo=e.Location}),(function(e){t.avatarLoading=!1,Object(o.a)(),e.msg||t.$message.error(t.$t("error.picUploadErr"))}))},uploadAnnouncementPic:function(e){var t=this;this.announcementLoading=!0,Object(i.b)(e).then((function(e){t.announcementLoading=!1,Object(o.a)(),t.businessData.announcement_picture=e.Location}),(function(e){t.announcementLoading=!1,Object(o.a)(),e.msg||t.$message.error(t.$t("error.picUploadErr"))}))},handleSave:function(){var e=this;this.$refs.form.validate((function(t){if(t){e.isLoading=!0;var s=e.timeToMinutes(e.businessData.do_business_end_minute),n=e.timeToMinutes(e.businessData.do_business_start_minute),i=Object(a.a)(Object(a.a)({},e.businessData),{},{do_business_start_minute:n,do_business_end_minute:s});e.alterInfo(i).then((function(){e.isLoading=!1,e.$message({message:e.$t("store.successInfo"),type:"success"})}),(function(){e.isLoading=!1}))}}))}},Object(n.b)({saveInfo:"user/saveStoreInformation",alterInfo:"user/alterBusiness",getShopBasicInfo:"user/getShopBasicInfo"}))},u=(s("bc2e"),s("2877")),c=Object(u.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticClass:"store-card"},[s("el-form",{ref:"form",staticClass:"store-form",attrs:{"label-position":"left","label-width":"130px",model:e.businessData}},[s("el-form-item",{attrs:{label:e.$t("store.currentState"),prop:"is_open"}},[s("el-select",{model:{value:e.businessData.is_open,callback:function(t){e.$set(e.businessData,"is_open",t)},expression:"businessData.is_open"}},[s("el-option",{attrs:{label:e.$t("store.business"),value:1}}),s("el-option",{attrs:{label:e.$t("store.suspend"),value:0}})],1)],1),s("el-form-item",{attrs:{label:e.$t("store.name"),prop:"name"}},[s("el-input",{staticClass:"storeName",staticStyle:{width:"50%"},model:{value:e.businessData.name,callback:function(t){e.$set(e.businessData,"name",t)},expression:"businessData.name"}})],1),s("el-form-item",{staticClass:"location",attrs:{label:e.$t("store.location"),prop:"address"}},[s("el-input",{staticStyle:{width:"50%"},model:{value:e.businessData.address,callback:function(t){e.$set(e.businessData,"address",t)},expression:"businessData.address"}})],1),s("el-form-item",{attrs:{label:e.$t("store.openingTime"),prop:"do_business_start_minute"}},[s("el-time-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("store.openTimePlaceholder"),"picker-options":{start:"06:00",step:"01:00",end:"24:00"}},model:{value:e.businessData.do_business_start_minute,callback:function(t){e.$set(e.businessData,"do_business_start_minute",t)},expression:"businessData.do_business_start_minute"}})],1),s("el-form-item",{attrs:{label:e.$t("store.closingTime"),prop:"do_business_end_minute"}},[s("el-time-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.$t("store.closeTimePlaceHolder"),"picker-options":{start:"06:00",step:"01:00",end:"24:00"}},model:{value:e.businessData.do_business_end_minute,callback:function(t){e.$set(e.businessData,"do_business_end_minute",t)},expression:"businessData.do_business_end_minute"}})],1),s("el-form-item",{staticClass:"map",attrs:{label:this.$t("store.announcementMap"),prop:"announcement_picture"}},[s("div",{staticClass:"announcement_list"},[s("el-upload",{staticClass:"announcement-uploader",attrs:{action:"","show-file-list":!1,"http-request":e.uploadAnnouncementPic}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.announcementLoading,expression:"announcementLoading"}],staticClass:"announcment_loading"}),s("div",{staticClass:"announcement_pic"},[s("el-image",{directives:[{name:"show",rawName:"v-show",value:e.businessData.announcement_picture,expression:"businessData.announcement_picture"}],staticStyle:{width:"100%"},attrs:{src:e.businessData.announcement_picture}}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.businessData.announcement_picture,expression:"!businessData.announcement_picture"}]},[s("i",{staticClass:"el-icon-plus announcement-uploader-icon"}),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" "+e._s(e.$t("public.picInfo"))+" ")])])],1)])],1)]),s("el-form-item",{staticClass:"avatar-uploader",attrs:{prop:"logo"}},[s("el-upload",{attrs:{action:"","show-file-list":!1,"http-request":e.uploadFile,"before-upload":e.beforeAvatarUpload}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.avatarLoading,expression:"avatarLoading"}],staticClass:"avatar_loading"}),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.avatarLoading,expression:"!avatarLoading"}]},[e.businessData.logo?s("img",{staticClass:"avatar",attrs:{src:e.businessData.logo}}):e._e(),s("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" "+e._s(e.$t("public.picInfo"))+" ")])])])],1),s("el-form-item",{staticClass:"lastItem",staticStyle:{width:"100%"}},[s("el-button",{staticClass:"saveBtn",attrs:{type:"primary",loading:e.isLoading},on:{click:e.handleSave}},[e._v(e._s(e.$t("btn.save")))])],1)],1)],1)}),[],!1,null,"03b0f0b7",null);t.default=c.exports},bc2e:function(e,t,s){"use strict";s("ec21")},e43c:function(e,t,s){"use strict";s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return o}));var a,n=s("5c96");function i(e){var t={text:"loading......",background:"rgba(255, 255, 255, 0.6)",target:document.querySelector(e)||"body",customClass:"server_loading"};a=n.Loading.service(t)}function o(){a.close()}},ec21:function(e,t,s){}}]);
//# sourceMappingURL=chunk-332e0166.fd20b915.js.map