(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Head",{attrs:{title:"登录",show:!0}}),o("van-form",{on:{submit:e.loginSubmit}},[o("van-field",{attrs:{name:"mobile",label:"手机号",placeholder:"请输入手机号"},model:{value:e.login.mobile,callback:function(t){e.$set(e.login,"mobile",t)},expression:"login.mobile"}}),o("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}}),o("div",{staticStyle:{margin:"16px"}},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1),o("router-link",{attrs:{to:"/register"}},[o("p",[e._v("注册")])]),o("router-link",{attrs:{to:"/sms"}},[o("p",[e._v("短信登录")])])],1)},i=[],l={data:function(){return{login:{mobile:this.$route.query.mobile||""}}},methods:{loginSubmit:function(){var e=this;this.$axios.post("/vue/login",this.login).then((function(t){t.data.type&&(localStorage.mobile=e.login.mobile,e.$router.push({name:"4"}),sessionStorage.token=t.data.token)}))}}},a=l,s=o("2877"),r=Object(s["a"])(a,n,i,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.4b7cdc67.js.map