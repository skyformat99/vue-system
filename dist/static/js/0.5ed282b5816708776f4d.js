webpackJsonp([0],{672:function(n,t,o){function i(n){o(677),o(676)}var e=o(9)(o(673),o(678),i,"data-v-f3463e14",null);n.exports=e.exports},673:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(61),e=o(227),a=o.n(e);t.default={data:function(){return{inputAccount:"137****6666",inputName:"",inputPassword:"",inputSMS:"",passwordShow:!0,passwordClean:!1,accountClean:!1,passwordMistake:!0,verification:!0,consent:!1,dialogVisible:!1,sendCountdown:!0,time:60,smsWarning:!1,verificationMistake:!0}},components:{verify:a.a},watch:{inputPassword:function(){this.passwordClean=!1}},methods:{imgClicks:function(n){console.log(n)},passwordSeeClick:function(){this.passwordShow=!this.passwordShow},clearPassword:function(){this.inputPassword=""},passeordChange:function(n){this.inputPassword&&"P"==n?this.passwordClean=!0:this.passwordClean=!1},timer:function(){this.time>0?(this.sendCountdown=!1,this.time--,setTimeout(this.timer,1e3)):(this.sendCountdown=!0,this.time=60)},primary:function(){if(""==this.inputSMS)return void(this.smsWarning=!0);console.log("111"),this.passwordClean=i.a.checkPassword(this.inputPassword),this.passwordClean}}}},674:function(n,t,o){t=n.exports=o(670)(!0),t.push([n.i,".signin-new-account .el-input,.signin-new-account .el-input .el-input__inner{height:40px}.signin-new-account .el-button{font-weight:400;height:40px}.signin-new-account .border-button{width:100%;margin-top:20px;display:inline-block}.signin-new-account .border-button .el-button{background-color:#e9f3ff;border:1px solid #aad3ff;color:#5ba8ff}.signin-new-account .border-button .el-button:hover{border-color:#20a0ff;background:#20a0ff;color:#fff}.signin-new-account .el-checkbox__inner{width:16px;height:16px}.signin-new-account .el-checkbox__inner:after{height:7px;left:4px}.signin-new-account .el-dialog{width:640px;max-height:845px;top:7%!important}.signin-new-account .el-dialog__body{border:1px solid #e5e9f2;border-width:1px 0;margin-top:16px;margin-bottom:5px}.signin-new-account .el-dialog__title{font-size:18px;color:#1f2d3d}.signin-new-account .el-dialog__footer{text-align:center}.signin-new-account .el-dialog__footer .el-button{font-weight:400;width:88px;height:36px}.signin-new-account .pass-input-error input{border-color:#e0001b}.signin-new-account .pass-input-error p{color:#e0001b!important}","",{version:3,sources:["/Users/duyangsir/Desktop/vue/demo/src/view/login/signinNewAccount.vue"],names:[],mappings:"AAOA,6EACE,WAAa,CACd,AACD,+BACE,gBAAiB,AACjB,WAAa,CACd,AACD,mCACE,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,8CACE,yBAA0B,AAC1B,yBAA0B,AAC1B,aAAe,CAChB,AACD,oDACE,qBAAsB,AACtB,mBAAoB,AACpB,UAAe,CAChB,AACD,wCACE,WAAY,AACZ,WAAa,CACd,AACD,8CACE,WAAY,AACZ,QAAU,CACX,AACD,+BACE,YAAa,AACb,iBAAkB,AAClB,gBAAmB,CACpB,AACD,qCACE,yBAA0B,AAC1B,mBAA0B,AAC1B,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sCACE,eAAgB,AAChB,aAAe,CAChB,AACD,uCACE,iBAAmB,CACpB,AACD,kDACE,gBAAiB,AACjB,WAAY,AACZ,WAAa,CACd,AACD,4CACE,oBAAsB,CACvB,AACD,wCACE,uBAA0B,CAC3B",file:"signinNewAccount.vue",sourcesContent:["\n.signin-new-account {\n  /*隐私条例*/\n}\n.signin-new-account .el-input {\n  height: 40px;\n}\n.signin-new-account .el-input .el-input__inner {\n  height: 40px;\n}\n.signin-new-account .el-button {\n  font-weight: 400;\n  height: 40px;\n}\n.signin-new-account .border-button {\n  width: 100%;\n  margin-top: 20px;\n  display: inline-block;\n}\n.signin-new-account .border-button .el-button {\n  background-color: #e9f3ff;\n  border: 1px solid #aad3ff;\n  color: #5ba8ff;\n}\n.signin-new-account .border-button .el-button:hover {\n  border-color: #20a0ff;\n  background: #20a0ff;\n  color: #ffffff;\n}\n.signin-new-account .el-checkbox__inner {\n  width: 16px;\n  height: 16px;\n}\n.signin-new-account .el-checkbox__inner::after {\n  height: 7px;\n  left: 4px;\n}\n.signin-new-account .el-dialog {\n  width: 640px;\n  max-height: 845px;\n  top: 7% !important;\n}\n.signin-new-account .el-dialog__body {\n  border: 1px solid #e5e9f2;\n  border-width: 1px 0 1px 0;\n  margin-top: 16px;\n  margin-bottom: 5px;\n}\n.signin-new-account .el-dialog__title {\n  font-size: 18px;\n  color: #1f2d3d;\n}\n.signin-new-account .el-dialog__footer {\n  text-align: center;\n}\n.signin-new-account .el-dialog__footer .el-button {\n  font-weight: 400;\n  width: 88px;\n  height: 36px;\n}\n.signin-new-account .pass-input-error input {\n  border-color: #e0001b;\n}\n.signin-new-account .pass-input-error p {\n  color: #e0001b !important;\n}\n"],sourceRoot:""}])},675:function(n,t,o){t=n.exports=o(670)(!0),t.push([n.i,"a[data-v-f3463e14]{text-decoration:none}.signin-new-account[data-v-f3463e14]{position:relative;top:0;left:0;width:100%;height:100%;min-height:1000px;background-color:#fff}.signin-new-account .operation-content[data-v-f3463e14]{position:absolute;left:50%;top:26%;margin-left:-170px;margin-top:-170px;width:340px;height:340px}.signin-new-account .operation-content .login-title[data-v-f3463e14]{background:url("+o(226)+') 6px 0 no-repeat;background-size:contain;width:100%;height:91px;margin-bottom:20px}.signin-new-account .operation-content .login-title-text[data-v-f3463e14]{font-weight:300;width:100%;font-size:18px;text-align:center;color:#8492a6;margin:30px 0}.signin-new-account .operation-content .login-body[data-v-f3463e14]{position:relative}.signin-new-account .operation-content .login-body .regulations[data-v-f3463e14]{text-align:center;font-size:14px}.signin-new-account .operation-content .login-body .regulations a[data-v-f3463e14]{color:#359ef3}.signin-new-account .operation-content .login-body .password-mistake[data-v-f3463e14]{position:relative;top:-15px;margin:0;width:100%;padding-left:14px;font-size:14px}.signin-new-account .operation-content .login-body .password-mistake span[data-v-f3463e14]{color:#e0001b}.signin-new-account .operation-content .login-body .password-mistake span i[data-v-f3463e14]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.signin-new-account .operation-content .login-body .password-mistake a[data-v-f3463e14]{color:#359ef3}.signin-new-account .operation-content .login-body .sms-wrap[data-v-f3463e14]{position:relative;padding:30px 0}.signin-new-account .operation-content .login-body .sms-wrap .send-sms[data-v-f3463e14]{position:absolute;right:12px;top:40px;font-size:14px;color:#3395f2}.signin-new-account .operation-content .login-body .sms-wrap .send-countdown[data-v-f3463e14]{position:absolute;left:247px;top:40px;font-size:14px;color:#949ba2}.signin-new-account .operation-content .login-body .sms-wrap .sms-warning[data-v-f3463e14]{position:absolute;top:72px;left:89px;width:158px;height:26px;border:1px solid #c0ccda;border-radius:2px;box-shadow:0 0 4px #949ba2}.signin-new-account .operation-content .login-body .sms-wrap .sms-warning span[data-v-f3463e14]{font-weight:400;font-size:13px;line-height:26px;padding-left:12px}.signin-new-account .operation-content .login-body .sms-wrap .sms-warning i[data-v-f3463e14]{display:block;border-width:6px;border-top-width:0;border-bottom-color:#e6ebf5;-webkit-filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));filter:drop-shadow(0 2px 12px rgba(0,0,0,.03))}.signin-new-account .operation-content .login-body .sms-wrap .sms-warning i[data-v-f3463e14]:after{content:" ";position:absolute;display:block;width:0;height:0;border:6px solid transparent;top:-6px;left:25px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.signin-new-account .operation-content .login-body .verification-wrap[data-v-f3463e14]{height:80px;border:1px solid #c0ccda;border-radius:4px}.signin-new-account .operation-content .login-body .prompt-msg[data-v-f3463e14]{margin:20px 0 30px;font-size:14px;color:#8492a6;font-weight:100}.signin-new-account .operation-content .login-body .input-icon-0[data-v-f3463e14],.signin-new-account .operation-content .login-body .input-icon-1[data-v-f3463e14],.signin-new-account .operation-content .login-body .input-icon-2[data-v-f3463e14]{font-size:14px;cursor:pointer;position:absolute;right:10px;top:44px;color:#bfcbd9}.signin-new-account .operation-content .login-body .password-input .input-icon-1[data-v-f3463e14]{right:36px}.signin-new-account .operation-content .login-body .el-button[data-v-f3463e14]{width:100%;margin-bottom:10px}.signin-new-account .operation-content .login-body .forget-password[data-v-f3463e14]{text-align:right;font-size:14px;padding:6px 0;margin:0}.signin-new-account .operation-content .login-body .forget-password a[data-v-f3463e14]{color:#949ba2}.signin-new-account .operation-content .login-body .password-input[data-v-f3463e14]{display:inline-block;width:100%;position:relative}.signin-new-account .operation-content .login-body .password-input .input-icon-1[data-v-f3463e14]{right:13px;top:14px;color:#e0001b}.signin-new-account .operation-content .login-body .password-input p[data-v-f3463e14]{color:#949ba2;font-size:14px;padding-left:12px}.signin-new-account .footer[data-v-f3463e14]{position:absolute;left:0;bottom:0;width:100%;height:105px}.signin-new-account .footer p[data-v-f3463e14]{position:absolute;left:0;bottom:23px;width:100%;text-align:center;font-size:12px;color:#949ba2}.signin-new-account .text-con[data-v-f3463e14]{font-size:14px}',"",{version:3,sources:["/Users/duyangsir/Desktop/vue/demo/src/view/login/signinNewAccount.vue"],names:[],mappings:"AACA,mBACE,oBAAsB,CACvB,AACD,qCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,qBAA0B,CAC3B,AACD,wDACE,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,mBAAoB,AACpB,kBAAmB,AACnB,YAAa,AACb,YAAc,CACf,AACD,qEACE,yDAAiE,AACjE,wBAAyB,AACzB,WAAY,AACZ,YAAa,AACb,kBAAoB,CACrB,AACD,0EACE,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,aAAsB,CACvB,AACD,oEACE,iBAAmB,CACpB,AACD,iFACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,mFACE,aAAe,CAChB,AACD,sFACE,kBAAmB,AACnB,UAAW,AACX,SAAU,AACV,WAAY,AACZ,kBAAmB,AACnB,cAAgB,CACjB,AACD,2FACE,aAAe,CAChB,AACD,6FACE,iCAAkC,AAC1B,wBAA0B,CACnC,AACD,wFACE,aAAe,CAChB,AACD,8EACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,wFACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,eAAgB,AAChB,aAAe,CAChB,AACD,8FACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,eAAgB,AAChB,aAAe,CAChB,AACD,2FACE,kBAAmB,AACnB,SAAU,AACV,UAAW,AACX,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,0BAA4B,CAC7B,AACD,gGACE,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,6FACE,cAAe,AACf,iBAAkB,AAClB,mBAAoB,AACpB,4BAA6B,AAC7B,uDAA4D,AACpD,8CAAoD,CAC7D,AACD,mGACE,YAAa,AAEb,kBAAmB,AACnB,cAAe,AACf,QAAS,AACT,SAAU,AACV,6BAA0B,AAE1B,SAAU,AACV,UAAW,AACX,iBAAkB,AAClB,mBAAoB,AACpB,wBAA0B,CAC3B,AACD,uFACE,YAAa,AACb,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,gFACE,mBAAsB,AACtB,eAAgB,AAChB,cAAe,AACf,eAAiB,CAClB,AACD,sPAGE,eAAgB,AAChB,eAAgB,AAChB,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,aAAe,CAChB,AAMD,kGACE,UAAY,CACb,AASD,+EACE,WAAY,AACZ,kBAAoB,CACrB,AACD,qFACE,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,QAAU,CACX,AACD,uFACE,aAAe,CAChB,AACD,oFACE,qBAAsB,AACtB,WAAY,AACZ,iBAAmB,CACpB,AACD,kGACE,WAAY,AACZ,SAAU,AACV,aAAe,CAChB,AACD,sFACE,cAAe,AACf,eAAgB,AAChB,iBAAmB,CACpB,AACD,6CACE,kBAAmB,AACnB,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,YAAc,CACf,AACD,+CACE,kBAAmB,AACnB,OAAQ,AACR,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,+CACE,cAAgB,CACjB",file:"signinNewAccount.vue",sourcesContent:['/*@import "../../assets/style/login.less";*/\na[data-v-f3463e14] {\n  text-decoration: none;\n}\n.signin-new-account[data-v-f3463e14] {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 1000px;\n  background-color: #ffffff;\n}\n.signin-new-account .operation-content[data-v-f3463e14] {\n  position: absolute;\n  left: 50%;\n  top: 26%;\n  margin-left: -170px;\n  margin-top: -170px;\n  width: 340px;\n  height: 340px;\n}\n.signin-new-account .operation-content .login-title[data-v-f3463e14] {\n  background: url("../../assets/images/login.png") 6px 0 no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 91px;\n  margin-bottom: 20px;\n}\n.signin-new-account .operation-content .login-title-text[data-v-f3463e14] {\n  font-weight: 300;\n  width: 100%;\n  font-size: 18px;\n  text-align: center;\n  color: #8492a6;\n  margin: 30px 0 30px 0;\n}\n.signin-new-account .operation-content .login-body[data-v-f3463e14] {\n  position: relative;\n}\n.signin-new-account .operation-content .login-body .regulations[data-v-f3463e14] {\n  text-align: center;\n  font-size: 14px;\n}\n.signin-new-account .operation-content .login-body .regulations a[data-v-f3463e14] {\n  color: #359ef3;\n}\n.signin-new-account .operation-content .login-body .password-mistake[data-v-f3463e14] {\n  position: relative;\n  top: -15px;\n  margin: 0;\n  width: 100%;\n  padding-left: 14px;\n  font-size: 14px;\n}\n.signin-new-account .operation-content .login-body .password-mistake span[data-v-f3463e14] {\n  color: #e0001b;\n}\n.signin-new-account .operation-content .login-body .password-mistake span i[data-v-f3463e14] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.signin-new-account .operation-content .login-body .password-mistake a[data-v-f3463e14] {\n  color: #359ef3;\n}\n.signin-new-account .operation-content .login-body .sms-wrap[data-v-f3463e14] {\n  position: relative;\n  padding: 30px 0;\n}\n.signin-new-account .operation-content .login-body .sms-wrap .send-sms[data-v-f3463e14] {\n  position: absolute;\n  right: 12px;\n  top: 40px;\n  font-size: 14px;\n  color: #3395f2;\n}\n.signin-new-account .operation-content .login-body .sms-wrap .send-countdown[data-v-f3463e14] {\n  position: absolute;\n  left: 247px;\n  top: 40px;\n  font-size: 14px;\n  color: #949ba2;\n}\n.signin-new-account .operation-content .login-body .sms-wrap .sms-warning[data-v-f3463e14] {\n  position: absolute;\n  top: 72px;\n  left: 89px;\n  width: 158px;\n  height: 26px;\n  border: 1px solid #c0ccda;\n  border-radius: 2px;\n  box-shadow: 0 0 4px #949ba2;\n}\n.signin-new-account .operation-content .login-body .sms-wrap .sms-warning span[data-v-f3463e14] {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 26px;\n  padding-left: 12px;\n}\n.signin-new-account .operation-content .login-body .sms-wrap .sms-warning i[data-v-f3463e14] {\n  display: block;\n  border-width: 6px;\n  border-top-width: 0;\n  border-bottom-color: #e6ebf5;\n  -webkit-filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n          filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));\n}\n.signin-new-account .operation-content .login-body .sms-wrap .sms-warning i[data-v-f3463e14]:after {\n  content: " ";\n  border-width: 6px;\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n  top: -6px;\n  left: 25px;\n  margin-left: -6px;\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.signin-new-account .operation-content .login-body .verification-wrap[data-v-f3463e14] {\n  height: 80px;\n  border: 1px solid #c0ccda;\n  border-radius: 4px;\n}\n.signin-new-account .operation-content .login-body .prompt-msg[data-v-f3463e14] {\n  margin: 20px 0 30px 0;\n  font-size: 14px;\n  color: #8492a6;\n  font-weight: 100;\n}\n.signin-new-account .operation-content .login-body .input-icon-0[data-v-f3463e14],\n.signin-new-account .operation-content .login-body .input-icon-1[data-v-f3463e14],\n.signin-new-account .operation-content .login-body .input-icon-2[data-v-f3463e14] {\n  font-size: 14px;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 44px;\n  color: #bfcbd9;\n}\n.signin-new-account .operation-content .login-body .password-input[data-v-f3463e14] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.signin-new-account .operation-content .login-body .password-input .input-icon-1[data-v-f3463e14] {\n  right: 36px;\n}\n.signin-new-account .operation-content .login-body .password-input p[data-v-f3463e14] {\n  color: #949ba2;\n  font-size: 14px;\n  padding-left: 12px;\n}\n.signin-new-account .operation-content .login-body .el-input[data-v-f3463e14] {\n  /*margin-top: 30px;*/\n}\n.signin-new-account .operation-content .login-body .el-button[data-v-f3463e14] {\n  width: 100%;\n  margin-bottom: 10px;\n}\n.signin-new-account .operation-content .login-body .forget-password[data-v-f3463e14] {\n  text-align: right;\n  font-size: 14px;\n  padding: 6px 0;\n  margin: 0;\n}\n.signin-new-account .operation-content .login-body .forget-password a[data-v-f3463e14] {\n  color: #949ba2;\n}\n.signin-new-account .operation-content .login-body .password-input[data-v-f3463e14] {\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.signin-new-account .operation-content .login-body .password-input .input-icon-1[data-v-f3463e14] {\n  right: 13px;\n  top: 14px;\n  color: #e0001b;\n}\n.signin-new-account .operation-content .login-body .password-input p[data-v-f3463e14] {\n  color: #949ba2;\n  font-size: 14px;\n  padding-left: 12px;\n}\n.signin-new-account .footer[data-v-f3463e14] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 105px;\n}\n.signin-new-account .footer p[data-v-f3463e14] {\n  position: absolute;\n  left: 0;\n  bottom: 23px;\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: #949ba2;\n}\n.signin-new-account .text-con[data-v-f3463e14] {\n  font-size: 14px;\n}\n'],sourceRoot:""}])},676:function(n,t,o){var i=o(674);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o(671)("75b10d03",i,!0)},677:function(n,t,o){var i=o(675);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);o(671)("af567096",i,!0)},678:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"signin-new-account"},[o("div",{staticClass:"operation-content"},[o("div",{staticClass:"login-title"}),n._v(" "),o("p",{staticClass:"login-title-text"},[n._v("注册新账号")]),n._v(" "),o("div",{staticClass:"login-body"},[o("el-input",{attrs:{placeholder:"手机号码",disabled:""},model:{value:n.inputAccount,callback:function(t){n.inputAccount=t},expression:"inputAccount"}}),n._v(" "),o("div",{staticClass:"sms-wrap"},[o("el-input",{attrs:{type:"text",placeholder:"您的姓名"},model:{value:n.inputName,callback:function(t){n.inputName=t},expression:"inputName"}})],1),n._v(" "),1==n.passwordShow?o("div",{class:[{"pass-input-error":n.passwordClean},"password-input"]},[o("el-input",{attrs:{type:"text",placeholder:"密码"},on:{change:function(t){n.passeordChange("P")}},model:{value:n.inputPassword,callback:function(t){n.inputPassword=t},expression:"inputPassword"}}),n._v(" "),n._m(0),n._v(" "),n.passwordClean?o("i",{staticClass:"input-icon-1  el-icon-circle-cross",on:{click:function(t){n.inputPassword="",n.passwordClean=!1}}}):n._e()],1):n._e(),n._v(" "),n.verification?o("div",{staticClass:"verification-wrap"},[o("verify",{on:{imgClick:n.imgClicks}})],1):n._e(),n._v(" "),o("div",{staticClass:"sms-wrap"},[o("el-input",{attrs:{type:"text",placeholder:"短信验证码"},on:{focus:function(t){n.smsWarning=!1}},model:{value:n.inputSMS,callback:function(t){n.inputSMS=t},expression:"inputSMS"}}),n._v(" "),0==n.sendCountdown?o("span",{staticClass:"send-countdown"},[n._v("重新获取("+n._s(n.time)+")")]):n._e(),n._v(" "),1==n.sendCountdown?o("a",{staticClass:"send-sms",attrs:{href:"javascript:void(0);"},on:{click:function(t){n.timer()}}},[n._v("重新获取")]):n._e(),n._v(" "),n.smsWarning?o("div",{staticClass:"sms-warning"},[o("i"),n._v(" "),o("span",[n._v("\n              请输入短信验证码\n            ")])]):n._e()],1),n._v(" "),n.verificationMistake?o("p",{staticClass:"password-mistake"},[n._m(1)]):n._e(),n._v(" "),o("el-button",{attrs:{type:"primary",disabled:!n.consent},on:{click:function(t){n.primary()}}},[n._v("注 册")]),n._v(" "),o("p",{staticClass:"regulations"},[o("el-checkbox",{model:{value:n.consent,callback:function(t){n.consent=t},expression:"consent"}},[n._v("我已阅读并同意")]),n._v(" "),o("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){n.dialogVisible=!0}}},[n._v("\n          《紫山资产管理系统隐私条款》\n        ")])],1),n._v(" "),o("hr",{staticStyle:{height:"0px",border:"none","border-top":"1px solid #e5e9f2"}}),n._v(" "),o("div",{staticClass:"border-button"},[o("el-button",[n._v("使用其他账号注册")])],1)],1),n._v(" "),o("el-dialog",{attrs:{title:"紫山资产管理系统隐私条款",visible:n.dialogVisible,size:"tiny"},on:{"update:visible":function(t){n.dialogVisible=t}}},[o("p",{staticClass:"text-con"},[n._v("\n        一、为什么需要二步验证？\n        "),o("br"),n._v(" "),o("br"),n._v("\n        密码被盗的风险存在于用户的许多常见操作中，例如：使用同一密码登录多个网站、下载不明身份网站的文件、点击电子邮箱中的链接等等；\n        "),o("br"),n._v(" "),o("br"),n._v("\n        二步验证可以将别有用心的人阻挡在外，即使他们知道您的密码也无法盗取您的帐户信息\n        "),o("br"),n._v(" "),o("br"),n._v(" "),o("br"),n._v("\n        二、二步验证的工作方式\n        "),o("br"),n._v(" "),o("br"),n._v("\n        1、您需要输入密码\n        "),o("br"),n._v(" "),o("br"),n._v("\n        每当您登录 紫山资产管理系统 时，都需要照常输入您的帐号和密码\n        "),o("br"),n._v(" "),o("br"),n._v("\n        2、您需要输入验证码\n        "),o("br"),n._v(" "),o("br"),n._v("\n        谷歌身份验证器会生成一个验证码，您需要在验证码时间到期前输入这个验证码，才可以成功登录您的 紫山资产管理系统 帐户\n        "),o("br"),n._v(" "),o("br"),n._v(" "),o("br"),n._v("\n        三、二步验证如何保护您的帐户安全\n        "),o("br"),n._v(" "),o("br"),n._v("\n        1、启用二步验证后，即使有人破解了您的密码，他们仍需要借助您的手机才能登录您的帐户\n        "),o("br"),n._v(" "),o("br"),n._v("\n        2、谷歌身份验证器的验证码是专门根据您的帐户生成的，每个验证码都有较短的有效期，且每个验证码只能使用一次\n        "),o("br"),n._v(" "),o("br"),n._v("\n        3、若您不慎遗失了您的手机或卸载了谷歌身份验证器，您仍可以通过备用验证码登录您的帐户，但每个备用验证码只能使用一次，所以请务必将备用验证码打印下来或保存在安全的地方\n      ")]),n._v(" "),o("span",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){n.dialogVisible=!1,n.consent=!1}}},[n._v("不同意")]),n._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){n.dialogVisible=!1,n.consent=!0}}},[n._v("同意")])],1)])],1),n._v(" "),n._m(2)])},staticRenderFns:[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("p",[n._v("\n          请将密码设置为6-20位，并且由字母，数字和符号\n          "),o("br"),n._v("\n          两种以上组合，不能与旧密码相同\n        ")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("span",[o("i",{staticClass:"el-icon-information"}),n._v("\n            图片验证码错误次数过多请明天再试\n          ")])},function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"footer"},[o("p",[n._v("©2016 上海微兆信息科技有限公司")])])}]}}});
//# sourceMappingURL=0.5ed282b5816708776f4d.js.map