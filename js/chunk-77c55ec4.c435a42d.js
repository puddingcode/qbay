(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77c55ec4"],{"796d":function(t,e,s){"use strict";s("e635")},"924c":function(t,e,s){"use strict";s.r(e);s("4de4");var r=s("5530"),n=s("2f62"),u={mounted:function(){this.$route.params.username&&(this.subAccount=this.$route.params)},data:function(){return{subAccount:{username:"",password:""},oldName:this.$route.params.username,isLoading:!1}},methods:Object(r.a)({complete:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.isLoading=!0,t.$route.params.username?t.modifySubAccount():t.addSubAccount())}))},modifySubAccount:function(){var t=this;this.alterSub({username:this.oldName,subAccount:this.subAccount}).then((function(){t.isLoading=!1,t.$refs.form.resetFields(),t.$alert(t.$t("public.modifySuccessMsg"),"",{confirmButtonText:t.$t("btn.confirm"),center:!0}).then((function(){t.$router.go(-1)}))})).catch((function(e){e&&(t.isLoading=!1,t.$refs.form.resetFields())}))},addSubAccount:function(){var t=this;this.registerSubAccount(this.subAccount).then((function(){t.isLoading=!1,t.$refs.form.resetFields(),t.$alert(t.$t("public.addSuccessMsg"),"",{confirmButtonText:t.$t("btn.confirm"),center:!0}).then((function(){t.$router.push({path:"/subaccount/index/listofsubaccounts"})}))})).catch((function(e){e&&(t.isLoading=!1,t.$refs.form.resetFields())}))}},Object(n.b)({registerSubAccount:"user/registerSubAccount",alterSub:"user/alterSubAccount"})),computed:Object(r.a)({editNameRule:function(){var t=this;return{username:[{validator:function(e,s,r){t.subAccountList.filter((function(t){return t.username===s})).length?r(new Error(t.$t("error.sameNameErr"))):r()},trigger:"blur"},{required:!0,message:this.$t("subAccount.nameRequiredErrMsg"),trigger:"blur"},{validator:function(e,s,r){s?/^[a-zA-Z0-9]{6,12}$/.test(s)?r():r(new Error(t.$t("subAccount.nameLengthErrMsg"))):r()}}]}},normalRules:function(){var t=this;return{username:[{required:!0,message:this.$t("subAccount.nameRequiredErrMsg"),trigger:"blur"},{validator:function(e,s,r){s?/^[a-zA-Z0-9]{6,12}$/.test(s)?r():r(new Error(t.$t("subAccount.nameLengthErrMsg"))):r()}}],password:[{required:!0,message:this.$t("subAccount.passwordRequiredErrMsg"),trigger:"blur"},{min:8,max:16,message:this.$t("subAccount.passwordLengthErrMsg")},{validator:function(e,s,r){s?/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/.test(s)?r():r(new Error(t.$t("subAccount.passwordTypeErrMsg"))):r()}}]}},addingRules:function(){return this.$route.params.username?this.normalRules:Object(r.a)(Object(r.a)({},this.normalRules),this.editNameRule)}},Object(n.d)({userinfo:function(t){return t.user.loginData},subAccountList:function(t){return t.user.subAccount}}))},c=(s("796d"),s("2877")),o=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"subaccount_wrapper"},[s("div",{staticClass:"subaccount_content"},[s("div",{staticClass:"subaccount_title"},[t._v(t._s(t.$t("subAccount.title")))]),s("el-form",{ref:"form",attrs:{rules:t.addingRules,model:t.subAccount}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{placeholder:t.$t("subAccount.namePlaceholder")},model:{value:t.subAccount.username,callback:function(e){t.$set(t.subAccount,"username",e)},expression:"subAccount.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{placeholder:t.$t("subAccount.passwordPlaceholder")},model:{value:t.subAccount.password,callback:function(e){t.$set(t.subAccount,"password",e)},expression:"subAccount.password"}})],1),s("el-form-item",{staticClass:"btn_wrapper"},[s("el-button",{staticClass:"subaccount_btn",attrs:{type:"primary",loading:t.isLoading},on:{click:t.complete}},[t._v(t._s(t.$t("btn.complete")))])],1)],1)],1)])}),[],!1,null,"32c34c7c",null);e.default=o.exports},e635:function(t,e,s){}}]);
//# sourceMappingURL=chunk-77c55ec4.c435a42d.js.map