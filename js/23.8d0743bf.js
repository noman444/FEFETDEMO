(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{ab54:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"row justify-center items-stretch"},[s("div",{staticClass:"container-box"},[s("locking-form",{staticClass:"q-mb-xl",attrs:{busdReward:"100000"}}),s("div",{staticClass:"text-h4 q-mb-md"},[t._v(t._s(t.$t("Your Rewards")))]),s("locking-reward",{staticClass:"q-mb-xl"}),s("div",{staticClass:"text-h4 q-mb-md"},[t._v(t._s(t.$t("Referral program")))]),s("locking-referral",{staticClass:"q-mb-md"})],1)])])},o=[],i=(s("e9c4"),s("2f62")),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{staticClass:"bg-transparent",attrs:{flat:""}},[s("div",{staticClass:"row q-col-gutter-md q-mb-md items-stretch"},[s("div",{staticClass:"col-xs-12 col-md-7"},[s("q-card",{staticClass:"grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"text-h4 q-mb-sm"},[t._v(t._s(t.$t("bank_p1")))]),s("div",[t._v(t._s(t.$t("lockingform 1")))]),s("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.$t("lockingform 2")))]),s("div",[t._v("\n              "+t._s(t.$t("lockingform 3"))+"\n            ")]),s("div",[t._v(t._s(t.$t("bank_p5")))]),s("div",[t._v(t._s(t.$t("bank_p6")))]),s("div",[t._v(t._s(t.$t("bank_p7")))]),s("a",{staticClass:"text-orange",attrs:{href:"https://docs.libero.financial/libero-bank",target:"_blank"}},[t._v(t._s(t.$t("Read more")))])])],1)],1),s("div",{staticClass:"col-xs-12 col-md-5"},[s("q-img",{staticClass:"rounded-borders",attrs:{src:"/landing/liberobank.webp"}}),s("countdown-airdrop",{staticClass:"q-mt-md"})],1)]),s("div",{staticClass:"row q-col-gutter-md q-mb-md"},[s("div",{staticClass:"col-xs-12 col-sm-6 items-stretch"},[s("lock-stat")],1),s("div",{staticClass:"col-xs-12 col-sm-6"},[s("q-card",{staticClass:"grow-box",attrs:{flat:""}},[t.isLocking?[s("q-card-section",[s("div",{staticClass:"row justify-between items-center no-wrap q-col-gutter-xs"},[s("div",{staticClass:"col-auto"},[t._v(t._s(t.$t("xLIBERO in wallet")+" "+t.$t("(Will be used when unlock to Libero)")))]),s("div",{staticClass:"col-grow text-right"},[""!==t.bankInfo.lockMinted?s("span",[t._v(t._s(parseFloat(parseFloat(t.bankInfo.lockMinted).toFixed(2)).toLocaleString()))]):t._e()]),s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{name:"img:https://storage.googleapis.com/libero-cdn/public/icon/xlibero.webp",size:"20px"}})],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{dense:"",flat:"",icon:"img:https://storage.googleapis.com/libero-cdn/public/icon/metamask.webp",size:"sm"},on:{click:function(a){return t.$root.$emit("addTokenToMetamask",t.$contracts.bankToken)}}})],1)]),s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"col-auto"},[t._v(t._s(t.$t("Lock until")))]),s("div",{staticClass:"col-grow text-right"},[t._v(t._s(new Date(1e3*t.bankInfo.lockEnd).format()))])]),s("div",{staticClass:"row justify-between items-center q-mb-md"},[s("div",{staticClass:"col-auto"},[t._v(t._s(t.$t("Early unlock penalty")))]),s("div",{staticClass:"col-grow text-right"},[t._v(t._s(t.bankInfo.earlyWithdrawPenaltyRate)+"%")])]),s("div",{staticClass:"row justify-between"},[s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{unelevated:"",color:"primary",type:"a",href:"https://thoreum.capital/exchange/?outputCurrency=0x0DFCb45EAE071B3b846E220560Bbcdd958414d78",target:"_blank"}},[t._v("Buy LIBERO")])],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"q-mb-xs"},[s("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"","no-caps":"",color:"purple",loading:t.isWithdrawing},on:{click:function(a){return t.$root.$emit("showDialog",{type:"card-bank-withdraw",persistent:!0})}}},[t._v(t._s(t.$t("Unlock")))])],1),s("div",[s("q-btn",{staticClass:"text-grey-6 text-caption",attrs:{unelevated:"",dense:"","no-caps":""},on:{click:function(a){return t.$root.$emit("showDialog",{type:"card-bank-withdraw",persistent:!0})}}},[t._v(t._s(t.$t("Early unlock ?")))])],1)])])])]:[s("q-card-section",[s("q-card",{staticClass:"grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row items-center q-col-gutter-sm"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/thor2-cdn/public/coins/LIBERO.webp"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v("LIBERO")]),s("div",{staticClass:"text-grey-5 text-caption"},[t._v("\n                        "+t._s(t.$t("Balance"))+": "+t._s(t.tokenInfo.balance?parseFloat(parseFloat(t.tokenInfo.balance).toFixed(2)).toLocaleString():"--")+"\n                      ")])]),t.isLogon?[t.isAllowance?s("div",{staticClass:"col-grow"},[s("q-input",{staticClass:"rounded-borders text-body1 bg-black q-pa-sm",attrs:{type:"number",borderless:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"",outline:"",dense:"",label:"MAX"},on:{click:t.doSetMax}})]},proxy:!0}],null,!1,3393409561),model:{value:t.payload.amount,callback:function(a){t.$set(t.payload,"amount",a)},expression:"payload.amount"}})],1):s("div",{staticClass:"col-grow text-right"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",loading:t.isApproving},on:{click:t.doApprove}},[t._v(t._s(t.$t("Approve LIBERO")))])],1)]:t._e()],2)])],1)],1)],s("q-card-section",[s("q-card",{staticClass:"grow-box",attrs:{flat:""}},[s("q-card-section",[t.isLocking?[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Get More xLIBERO")))]),s("div",{staticClass:"q-mb-md"},[t._l(t.typeOptions,(function(a,e){return[s("div",{key:e},[s("q-radio",{staticClass:"text-body1",attrs:{dense:"",val:a.value,label:a.label},model:{value:t.payload.type,callback:function(a){t.$set(t.payload,"type",a)},expression:"payload.type"}})],1)]}))],2)]:t._e(),"increaseAmount"===t.payload.type?s("section",{ref:"increaseAmount"},[s("div",{staticClass:"row items-center q-col-gutter-sm"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/thor2-cdn/public/coins/LIBERO.webp"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v("LIBERO")]),s("div",{staticClass:"text-grey-5 text-caption"},[t._v("\n                        "+t._s(t.$t("Balance"))+": "+t._s(t.tokenInfo.balance?parseFloat(parseFloat(t.tokenInfo.balance).toFixed(2)).toLocaleString():"--")+"\n                      ")])]),t.isAllowance?s("div",{staticClass:"col-grow"},[s("q-input",{staticClass:"rounded-borders text-body1 bg-black q-pa-sm",attrs:{type:"number",borderless:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"",outline:"",dense:"",label:"MAX"},on:{click:t.doSetMax}})]},proxy:!0}],null,!1,3393409561),model:{value:t.payload.amount,callback:function(a){t.$set(t.payload,"amount",a)},expression:"payload.amount"}})],1):s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",loading:t.isApproving},on:{click:t.doApprove}},[t._v(t._s(t.$t("Approve LIBERO")))])],1)])]):s("section",{ref:"increaseDay"},[s("div",{staticClass:"row items-center q-col-gutter-sm q-mb-md"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"lock"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.lockLabel))]),s("div",{staticClass:"text-grey-5 text-caption"},[t._v(t._s(t.$t("14 days - 4 years")))])]),s("div",{staticClass:"col-grow"},[s("q-input",{attrs:{type:"number",borderless:"",dense:"","input-class":"rounded-borders text-body1 bg-black q-px-md"},scopedSlots:t._u([{key:"append",fn:function(){return[s("span",{staticClass:"text-body1 q-px-sm"},[t._v(t._s(t.$t("Days")))]),s("q-btn",{staticClass:"q-px-sm",attrs:{unelevated:"",outline:"",dense:"",label:"MAX"},on:{click:t.doSetMaxDays}})]},proxy:!0}]),model:{value:t.payload.days,callback:function(a){t.$set(t.payload,"days",a)},expression:"payload.days"}})],1)]),s("div",{staticClass:"text-h6"},[t._v(t._s(t.lockLabel))]),s("div",{staticClass:"row q-col-gutter-md"},[t._l(t.dayOptions,(function(a,e){return[s("div",{key:e,staticClass:"col-xs-6 col-lg-4"},[s("q-radio",{staticClass:"fit",attrs:{dense:"",val:a.value,label:a.label},model:{value:t.payload.days,callback:function(a){t.$set(t.payload,"days",a)},expression:"payload.days"}})],1)]}))],2),t.payload.days>0?s("div",{staticClass:"q-mt-sm text-grey-5"},[t._v("\n                    "+t._s(t.$t("Lock until"))+": "+t._s(new Date(1e3*t.newLockEnd).format())+"\n                  ")]):t._e(),s("div",{staticClass:"text-grey-5"},[s("div",[t._v(t._s(t.$t("lockingform 4")))]),s("div",[t._v(t._s(t.$t("lockingform 5")))]),s("div",[t._v(t._s(t.$t("lockingform 6")))]),s("div",[t._v(t._s(t.$t("lockingform 7")))])])])],2)],1)],1),s("q-card-actions",{attrs:{align:"center"}},[s("div",{staticClass:"row items-center justify-center"},[t.isLogon?t.isLocking?"increaseAmount"===t.payload.type?[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",disable:!t.canIncreaseAmount},on:{click:t.doIncreaseAmount}},[t._v(t._s(t.$t("Submit")))])]:"increaseDays"===t.payload.type?[s("div",{staticClass:"text-center"},[t.isInAllowDays?t.isValidDays?t._e():s("div",{staticClass:"text-orange"},[t._v("\n                    "+t._s(t.$t("lockingform 9"))+"\n                  ")]):s("div",{staticClass:"text-orange"},[t._v("\n                    "+t._s(t.$t("lockingform 8"))+"\n                  ")]),s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",disable:!t.canIncreaseDays},on:{click:t.doIncreaseDays}},[t._v(t._s(t.$t("Submit")))])],1)]:s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",disable:!t.canCreateLock},on:{click:t.doCreateLocking}},[t._v(t._s(t.$t("Submit")))])],1):[s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange",disable:!t.canCreateLock,loading:t.isLoading},on:{click:t.doCreateLocking}},[t._v(t._s(t.$t("Submit")))])],1)]:s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"","no-caps":"",size:"lg",color:"orange"}},[t._v(t._s(t.$t("Connect Wallet")))])],1)],2)]),s("q-card-section",{staticClass:"text-body2"},[s("div",[t._v(t._s(t.$t("bank_p10"))+" "+t._s(parseFloat(t.bankInfo.minLockedAmount).toLocaleString())+" LIBERO")]),s("div",[t._v(t._s(t.$t("bank_p11"))+" "+t._s(parseFloat(t.bankInfo.maxLockedAmount)<1e10?parseFloat(t.bankInfo.maxLockedAmount).toLocaleString():"Unlimited")+" LIBERO")]),s("div",[t._v(t._s(t.$t("bank_p13"))+" "+t._s(t.bankInfo.earlyWithdrawPenaltyRate)+"%")])])],2)],1)])])},l=[],c=(s("a79d"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",[s("div",{staticClass:"row items-stretch q-col-gutter-sm"},[s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"grow-box",attrs:{flat:""}},[s("q-card-section",{staticClass:"text-h6"},[s("div",{staticClass:"row q-col-gutter-md"},[s("div",{staticClass:"col-auto"},[t._v("\n                "+t._s(t.$t("Your shares / Total reward:"))+"\n              ")]),s("div",{staticClass:"col-auto text-green"},[""===t.bankInfo.sharePercent?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(t.bankInfo.sharePercent>0?parseFloat(parseFloat(t.bankInfo.sharePercent).toFixed(4)).toLocaleString()+"%":"--"))])],1)])])],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"fit grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row q-col-gutter-md no-wrap"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/thor2-cdn/public/coins/LIBERO.png"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Total $LIBERO Rewarded")))]),s("div",[""===t.bankInfo.totalLiberoReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):[s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalLiberoReward).toFixed(2)).toLocaleString()))]),s("span",{staticClass:"q-ml-sm"},[t._v("($"+t._s(parseFloat((t.bankInfo.totalLiberoReward*t.tokenInfo.price).toFixed(2)).toLocaleString())+")")])]],2)])])])],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"fit grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row q-col-gutter-md no-wrap"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/thor2-cdn/public/coins/BUSD.png"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Total $BUSD Rewarded")))]),s("div",[""===t.bankInfo.totalBusdReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalBusdReward).toFixed(2)).toLocaleString()))])],1),s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("bank_p9")))]),s("div",[""===t.tokenInfo.totalBusdRewarded?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-green text-h5"},[t._v("\n                    $"+t._s(parseFloat(t.tokenInfo.totalBusdRewarded.toFixed(2)).toLocaleString())+"\n                  ")])],1)])])])],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"fit grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row q-col-gutter-mds no-wrap"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/thor2-cdn/public/coins/LIBERO.webp"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("LIBERO locked")))]),s("div",[""===t.bankInfo.totalDeposited?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):[s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalDeposited).toFixed(2)).toLocaleString()))]),s("span",{staticClass:"q-ml-sm"},[t._v("($"+t._s(parseFloat((t.bankInfo.totalDeposited*t.tokenInfo.price).toFixed(2)).toLocaleString())+")")])]],2)])])])],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"fit grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row q-col-gutter-md no-wrap"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"img:https://storage.googleapis.com/libero-cdn/public/icon/xlibero.webp"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("xLIBERO in circulation")))]),s("div",[""===t.bankInfo.totalSupply?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalSupply).toFixed(2)).toLocaleString()))])],1)])])])],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"fit grow-box",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row q-col-gutter-md no-wrap"},[s("div",{staticClass:"col-auto"},[s("q-icon",{attrs:{size:"42px",name:"history"}})],1),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Average lock time")))]),s("div",[""===t.bankInfo.averageLockTime?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.averageLockTime).toFixed(2)).toLocaleString())+" "+t._s(t.$t("Days")))])],1)])])])],1)],1)])])}),r=[],d={computed:{...Object(i["b"])({isLogon:"auth/isLogon",getAccount:"auth/getAccount",getTokenInfo:"farm/getTokenInfo",getBankInfo:"farm/getBankInfo"}),tokenInfo(){return JSON.parse(JSON.stringify(this.getTokenInfo))},bankInfo(){return JSON.parse(JSON.stringify(this.getBankInfo))}}},p=d,g=s("2877"),m=s("f09f"),u=s("a370"),v=s("293e"),b=s("0016"),h=s("eebe"),k=s.n(h),x=Object(g["a"])(p,c,r,!1,null,null,null),C=x.exports;k()(x,"components",{QCard:m["a"],QCardSection:u["a"],QSkeleton:v["a"],QIcon:b["a"]});var f=s("5a46"),_={components:{CountdownAirdrop:f["a"],LockStat:C},data(){return{isApproving:!1,isLoading:!1,isWithdrawing:!1,payload:{days:100,amount:"",type:"increaseDays"},referrerBy:"0x0000000000000000000000000000000000000000",liberoBalance:""}},computed:{...Object(i["b"])({isLogon:"auth/isLogon",getAccount:"auth/getAccount",getTokenInfo:"farm/getTokenInfo",getBankInfo:"farm/getBankInfo"}),tokenInfo(){return JSON.parse(JSON.stringify(this.getTokenInfo))},bankInfo(){return JSON.parse(JSON.stringify(this.getBankInfo))},dayOptions(){return[{label:"2 Week",value:14},{label:"1 Month",value:30},{label:"6 Months",value:180},{label:"1 Year",value:365},{label:"2 Years",value:730},{label:"4 Years",value:1460}]},typeOptions(){return[{label:"Lock more LIBERO",value:"increaseAmount"},{label:"Extend lock time",value:"increaseDays"}]},newLockEnd(){return(this.bankInfo.lockEnd||(new Date).getTime()/1e3)+24*this.payload.days*60*60},isLocking(){return this.bankInfo.lockedAmount>0||this.bankInfo.lockEnd>0},isAllowance(){return this.tokenInfo.bankAllowance>0},canCreateLock(){return this.isAllowance&&0===parseFloat(this.bankInfo.lockedAmount)&&parseFloat(this.payload.amount)>=this.bankInfo.minLockedAmount&&parseFloat(this.payload.days)>=14&&parseFloat(this.payload.days)<=1460},canIncreaseDays(){return parseFloat(this.bankInfo.lockedAmount)>0&&this.isValidDays&&this.isInAllowDays},isValidDays(){return parseInt(this.payload.days)>=14&&parseInt(this.payload.days)<=1460},isInAllowDays(){return this.bankInfo.lockEnd+24*this.payload.days*60*60-(new Date).getTime()/1e3<=126144e3},canIncreaseAmount(){return parseFloat(this.bankInfo.lockedAmount)>0&&parseFloat(this.payload.amount)>=this.bankInfo.minLockedAmount},lockLabel(){return this.isLocking?"Extend for":"Lock for"}},methods:{doSetMax(){this.payload.amount=Math.floor(Math.min(this.bankInfo.maxLockedAmount-this.bankInfo.lockedAmount,this.tokenInfo.balance))},doSetMaxDays(){this.payload.days=Math.floor(1460-Math.max(0,this.bankInfo.lockEnd-(new Date).getTime()/1e3)/86400)},doApprove(){this.isApproving=!0,this.$store.dispatch("farm/approveToken",{account:this.getAccount,token:this.$contracts.mainToken.address,spender:this.$contracts.bankToken.address}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.isApproving=!1}))},doCreateLocking(){this.isLoading=!0,this.$store.dispatch("farm/writeBankContract",{action:"createLock",account:this.getAccount,amount:this.payload.amount,days:this.payload.days,referral:this.referrerBy}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.isLoading=!1}))},doIncreaseAmount(){this.isLoading=!0,this.$store.dispatch("farm/writeBankContract",{action:"increaseAmount",account:this.getAccount,amount:this.payload.amount}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.isLoading=!1}))},doIncreaseDays(){this.isLoading=!0,this.$store.dispatch("farm/writeBankContract",{action:"increaseUnlockTime",account:this.getAccount,days:this.payload.days}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.isLoading=!1}))},doWithdraw(){this.isLoading=!0,this.$store.dispatch("farm/writeBankContract",{action:"withdraw",account:this.getAccount}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.isLoading=!1}))}},mounted(){this.$q.cookies.has("referrer")&&this.isValidAddress(this.$q.cookies.get("referrer"))&&(this.referrerBy=this.$q.cookies.get("referrer"))}},y=_,w=s("068f"),q=s("9c40"),I=s("27f9"),$=s("3786"),L=s("4b7e"),F=s("74f7"),B=Object(g["a"])(y,n,l,!1,null,null,null),S=B.exports;k()(B,"components",{QCard:m["a"],QCardSection:u["a"],QImg:w["a"],QIcon:b["a"],QBtn:q["a"],QInput:I["a"],QRadio:$["a"],QCardActions:L["a"],QInnerLoading:F["a"]});var A=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{staticClass:"bg-transparent",attrs:{flat:""}},[s("div",{staticClass:"row q-col-gutter-md q-mb-md items-stretch"},[s("div",{staticClass:"col-xs-12 col-md-6"},[s("q-card",{staticClass:"grow-box fit",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("You LIBERO Locked")))]),s("div",{staticClass:"q-mb-md"},[""===t.bankInfo.lockedAmount?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):[s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.lockedAmount).toFixed(2)).toLocaleString())+" LIBERO")]),s("span",{staticClass:"q-ml-sm"},[t._v("($"+t._s(parseFloat((t.bankInfo.lockedAmount*t.tokenInfo.price).toFixed(2)).toLocaleString())+")")])]],2),s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("You xLIBERO Balance")))]),s("div",{staticClass:"q-mb-md"},[""===t.bankInfo.lockMinted?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.lockMinted).toFixed(2)).toLocaleString())+" xLIBERO")])],1),s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Your shares / Total reward")))]),""===t.bankInfo.sharePercent?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(t.bankInfo.sharePercent>0?parseFloat(parseFloat(t.bankInfo.sharePercent).toFixed(8)).toLocaleString()+"%":"--"))])],1)],1)],1),s("div",{staticClass:"col-xs-12 col-md-6"},[s("q-card",{staticClass:"grow-box fit",attrs:{flat:""}},[s("q-card-section",[s("div",[t._v("xLIBERO APY")]),s("div",{staticClass:"q-mb-md"},[""===t.bankInfo.liberoApy?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.liberoApy).toFixed(2)).toLocaleString())+"% ("+t._s(parseFloat(parseFloat(t.bankInfo.liberoAprDay).toFixed(2)).toLocaleString())+"% / day)")]),s("div",{staticClass:"text-grey-5"},[t._v(t._s(t.$t("lockingform 10")))])],1),s("div",[t._v("BUSD APR")]),s("div",[""===t.bankInfo.busdApr?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.busdApr).toFixed(2)).toLocaleString())+"% ("+t._s(parseFloat(parseFloat(t.bankInfo.busdAprDay).toFixed(2)).toLocaleString())+"% / day)")])],1)]),s("q-expansion-item",{attrs:{dense:"",icon:"help"}},[s("q-card",[s("q-card-section",[s("div",[t._v(t._s(t.$t("lockingform 11")))]),s("div",[t._v(t._s(t.$t("lockingform 12")))]),s("div",[t._v(t._s(t.$t("lockingform 13")))])])],1)],1),s("q-card-section",[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Next Reward")))]),""===t.tokenInfo.nextRebase?s("q-skeleton",{staticClass:"text-h5",attrs:{type:"text",width:"100px"}}):s("countdown-text",{staticClass:"text-h5",attrs:{"target-second":t.tokenInfo.nextRebase}})],1)],1)],1),s("div",{staticClass:"col-xs-12 col-md-6"},[s("q-card",{staticClass:"grow-box fit",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"row justify-center q-mb-md q-col-gutter-md"},[s("div",{staticClass:"col-xs-12 col-sm-grow"},[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Total $LIBERO Reward")))]),""===t.bankInfo.totalUserLiberoReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):[s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalUserLiberoReward).toFixed(2)).toLocaleString())+" LIBERO")]),s("span",{staticClass:"q-ml-sm"},[t._v("($"+t._s(parseFloat(parseFloat(t.bankInfo.totalUserLiberoRewardFiat).toFixed(2)).toLocaleString())+")")])]],2),s("div",{staticClass:"col-xs-12 col-sm-grow"},[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Total $BUSD Reward")))]),""===t.bankInfo.totalUserBusdReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(t.bankInfo.totalUserBusdReward.toFixed(2)).toLocaleString()))])],1)])]),s("q-card-section",[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-12 col-sm-grow"},[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Pending $FEFEreward")))]),""===t.bankInfo.pendingLiberoReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):[s("span",{staticClass:"text-green text-h5"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.pendingLiberoReward).toFixed(2)).toLocaleString())+" LIBERO")]),s("span",{staticClass:"q-ml-sm"},[t._v("($"+t._s(parseFloat(t.bankInfo.pendingLiberoRewardFiat.toFixed(2)).toLocaleString())+")")])],s("div",[t._v(t._s(t.$t("lockingform 14")))])],2),s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-xs",attrs:{unelevated:"",color:"orange","no-caps":"",size:"lg",disable:!t.isLogon,loading:t.liberoClaiming},on:{click:t.doClaimLibero}},[t._v(t._s(t.$t("Claim $LIBERO")))])],1)])]),s("q-card-section",[s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col-xs-12 col-sm-grow"},[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Pending $BUSD Reward")))]),""===t.bankInfo.pendingBusdReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.pendingBusdReward).toFixed(2)).toLocaleString()))])],1),s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-xs",attrs:{unelevated:"",color:"orange","no-caps":"",size:"lg",disable:!t.isLogon,loading:t.busdClaiming},on:{click:t.doClaimBusd}},[t._v(t._s(t.$t("Claim $BUSD")))])],1)])])],1)],1),s("div",{staticClass:"col-xs-12 col-md-6"},[s("q-card",{staticClass:"grow-box fit",attrs:{flat:""}},[s("q-card-section",[s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Compound $BUSD")))]),s("div",{staticClass:"q-mb-md"},[""===t.bankInfo.pendingBusdReward?s("q-skeleton",{staticClass:"text-h4",attrs:{type:"text",width:"150px"}}):s("span",{staticClass:"text-h5 text-green"},[t._v(t._s(parseFloat(parseFloat(t.bankInfo.pendingBusdReward).toFixed(2)).toLocaleString()))])],1),s("div",{staticClass:"text-grey-6"},[t._v(t._s(t.$t("Select token to compound:")))]),s("q-list",{attrs:{dense:""}},[t._l(t.compoundList,(function(a,e){return[s("q-item",{key:e,attrs:{tag:"label"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-radio",{attrs:{dense:"",val:a.address},model:{value:t.wantToken,callback:function(a){t.wantToken=a},expression:"wantToken"}})],1),s("q-item-section",{attrs:{side:""}},[s("q-item-label",[t._v(t._s(a.symbol))])],1),s("q-item-section",[s("q-avatar",{attrs:{size:"20px"}},[s("q-img",{attrs:{src:a.icon}})],1)],1),s("q-item-section",{staticClass:"text-caption",attrs:{side:""}},[t._v("\n                    $"+t._s(a.price.toFixed(6))+"\n                  ")])],1)]}))],2)],1),s("q-card-actions",{attrs:{align:"center"}},[s("div",{staticClass:"row justify-center items-center"},[s("div",{staticClass:"col-auto"},[s("q-btn",{staticClass:"q-px-md",attrs:{unelevated:"",color:"orange","no-caps":"",size:"lg",disable:!t.isLogon,loading:t.busdCompounding},on:{click:t.doCompoundBusd}},[t._v(t._s(t.$t("Compound")))])],1)])]),s("q-card-section",{staticClass:"text-center"},[t._v("\n            "+t._s(t.$t("You save buy tax when compound to tokens"))+"\n          ")])],1)],1)])])},R=[],O=(s("8b05"),s("a00e")),E={components:{CountdownText:O["a"]},data(){return{liberoClaiming:!1,busdClaiming:!1,busdCompounding:!1,wantToken:"0x0dfcb45eae071b3b846e220560bbcdd958414d78"}},computed:{...Object(i["b"])({isLogon:"auth/isLogon",getAccount:"auth/getAccount",getTokenInfo:"farm/getTokenInfo",getBankInfo:"farm/getBankInfo",getCompoundList:"farm/getCompoundList",getToken:"farm/getToken"}),tokenInfo(){return JSON.parse(JSON.stringify(this.getTokenInfo))},bankInfo(){return JSON.parse(JSON.stringify(this.getBankInfo))},busdReturnDay(){return Math.round(100/this.bankInfo.busdAprDay)},compoundList(){return JSON.parse(JSON.stringify(this.getCompoundList)).map((t=>this.getToken(t)))}},methods:{doClaimLibero(){this.liberoClaiming=!0,this.$store.dispatch("farm/writeBankContract",{action:"claimLibero",account:this.getAccount}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.liberoClaiming=!1}))},doClaimBusd(){this.busdClaiming=!0,this.$store.dispatch("farm/writeBankContract",{action:"claimBusd",account:this.getAccount}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.busdClaiming=!1}))},doCompoundBusd(){this.busdCompounding=!0,this.$store.dispatch("farm/writeBankContract",{action:"compoundBusd",account:this.getAccount,wantToken:this.wantToken}).then((t=>{this.$root.$emit("showMessage",t),this.$emit("close")})).catch((t=>{this.$root.$emit("showMessage",{status:!1,message:t.message})})).finally((()=>{this.busdCompounding=!1}))}}},T=E,D=s("3b73"),M=s("1c1c"),Q=s("66e5"),z=s("4074"),j=s("0170"),J=s("cb32"),N=Object(g["a"])(T,A,R,!1,null,null,null),U=N.exports;k()(N,"components",{QCard:m["a"],QCardSection:u["a"],QSkeleton:v["a"],QExpansionItem:D["a"],QBtn:q["a"],QList:M["a"],QItem:Q["a"],QItemSection:z["a"],QRadio:$["a"],QItemLabel:j["a"],QAvatar:J["a"],QImg:w["a"],QCardActions:L["a"]});var P=s("c9a0"),Y={components:{LockingReferral:P["a"],LockingReward:U,LockingForm:S},computed:{...Object(i["b"])({getTokenInfo:"farm/getTokenInfo"}),tokenInfo(){return JSON.parse(JSON.stringify(this.getTokenInfo))}}},W=Y,V=s("9989"),X=s("429bb"),G=s("7460"),H=Object(g["a"])(W,e,o,!1,null,null,null);a["default"]=H.exports;k()(H,"components",{QPage:V["a"],QCard:m["a"],QCardSection:u["a"],QTabs:X["a"],QTab:G["a"]})}}]);