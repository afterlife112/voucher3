exports.ids=[16],exports.modules={NFwV:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"StorePageModule",function(){return StorePageModule});var common=__webpack_require__("ofXK"),fesm2015_forms=__webpack_require__("3Pt+"),ionic_angular=__webpack_require__("TEn/"),router=__webpack_require__("tyNb"),index_node_cjs=__webpack_require__("iV0I"),index_node_cjs_default=__webpack_require__.n(index_node_cjs),core=__webpack_require__("fXoL"),platform_browser=__webpack_require__("jhN1");function StorePage_img_3_Template(rf,ctx){1&rf&&core["\u0275\u0275element"](0,"img",17)}function StorePage_img_4_Template(rf,ctx){1&rf&&core["\u0275\u0275element"](0,"img",18)}function StorePage_div_11_div_9_Template(rf,ctx){if(1&rf&&(core["\u0275\u0275elementStart"](0,"div",29),core["\u0275\u0275text"](1),core["\u0275\u0275pipe"](2,"currency"),core["\u0275\u0275elementEnd"]()),2&rf){const eve_r4=core["\u0275\u0275nextContext"]().$implicit;core["\u0275\u0275advance"](1),core["\u0275\u0275textInterpolate1"](" ",core["\u0275\u0275pipeBind2"](2,1,eve_r4.value.price_now,"RM")," ")}}function StorePage_div_11_div_10_Template(rf,ctx){1&rf&&(core["\u0275\u0275elementStart"](0,"div",29),core["\u0275\u0275text"](1,"APPLY FOR FREE "),core["\u0275\u0275elementEnd"]())}function StorePage_div_11_div_11_Template(rf,ctx){if(1&rf&&(core["\u0275\u0275elementStart"](0,"div",30),core["\u0275\u0275text"](1),core["\u0275\u0275pipe"](2,"currency"),core["\u0275\u0275elementEnd"]()),2&rf){const eve_r4=core["\u0275\u0275nextContext"]().$implicit;core["\u0275\u0275advance"](1),core["\u0275\u0275textInterpolate1"](" \xa0",core["\u0275\u0275pipeBind2"](2,1,eve_r4.value.price_ori,"RM"),"\xa0")}}const _c0=function(a0){return{width:a0}};function StorePage_div_11_Template(rf,ctx){if(1&rf){const _r12=core["\u0275\u0275getCurrentView"]();core["\u0275\u0275elementStart"](0,"div",19),core["\u0275\u0275listener"]("click",function StorePage_div_11_Template_div_click_0_listener(){core["\u0275\u0275restoreView"](_r12);const eve_r4=ctx.$implicit;return core["\u0275\u0275nextContext"]().go(eve_r4.value.id)}),core["\u0275\u0275elementStart"](1,"div",20),core["\u0275\u0275elementStart"](2,"div",21),core["\u0275\u0275element"](3,"img",22),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](4,"div",23),core["\u0275\u0275elementStart"](5,"div",24),core["\u0275\u0275text"](6),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](7,"div",25),core["\u0275\u0275elementStart"](8,"div",26),core["\u0275\u0275template"](9,StorePage_div_11_div_9_Template,3,4,"div",27),core["\u0275\u0275template"](10,StorePage_div_11_div_10_Template,2,0,"div",27),core["\u0275\u0275template"](11,StorePage_div_11_div_11_Template,3,4,"div",28),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"]()}if(2&rf){const eve_r4=ctx.$implicit,ctx_r2=core["\u0275\u0275nextContext"]();core["\u0275\u0275property"]("ngStyle",core["\u0275\u0275pureFunction1"](6,_c0,900>ctx_r2.widtherget()?(ctx_r2.widtherget()-20)/ctx_r2.rounder(ctx_r2.widtherget()/200)-20+"px":"calc( ( 900px - 100px ) / 4 )")),core["\u0275\u0275advance"](3),core["\u0275\u0275propertyInterpolate"]("src",eve_r4.value.thumbnail,core["\u0275\u0275sanitizeUrl"]),core["\u0275\u0275advance"](3),core["\u0275\u0275textInterpolate"](eve_r4.value.name),core["\u0275\u0275advance"](3),core["\u0275\u0275property"]("ngIf",eve_r4.value.price_now),core["\u0275\u0275advance"](1),core["\u0275\u0275property"]("ngIf",!eve_r4.value.price_now),core["\u0275\u0275advance"](1),core["\u0275\u0275property"]("ngIf",eve_r4.value.price_ori>eve_r4.value.price_now)}}function StorePage_div_13_Template(rf,ctx){1&rf&&(core["\u0275\u0275elementStart"](0,"div",31),core["\u0275\u0275elementStart"](1,"div",32),core["\u0275\u0275element"](2,"img",33),core["\u0275\u0275elementStart"](3,"div",34),core["\u0275\u0275text"](4,"Nothing Here"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](5,"div",35),core["\u0275\u0275text"](6,"There are no items in this list."),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"]())}const _c1=function(a0,a1){return{"padding-left":a0,"padding-right":a1}};class store_page_StorePage{constructor(platform,actRoute,nav,title){this.platform=platform,this.actRoute=actRoute,this.nav=nav,this.title=title,this.user=[],this.vouchers=[],this.vendors=[],this.animer=0,this.links=[],this.puller=this.platform.width()/2}rounder(x){return Math.floor(x)}checkit(x){return x.filter(a=>1==a.value.status)}outside(x){window.open(this.links[x])}proper2(x){return Math.round(100*((Math.abs(x)||0)+Number.EPSILON))/100}ngOnInit(){this.title.setTitle("Welcome to User's vsnap store!")}stringornot(x){return"string"==typeof x}ionViewWillEnter(){this.id=this.actRoute.snapshot.paramMap.get("id"),index_node_cjs_default.a.database().ref("users/"+this.id).once("value",data=>{this.user=data.val(),this.title.setTitle("Welcome to "+this.user.name+"'s vsnap store!"),(data.val().store||[]).forEach(element=>{index_node_cjs_default.a.database().ref("vouchers/"+element).once("value",data=>{this.vouchers[data.val().id]=data.val(),console.log(this.vouchers)})})}),index_node_cjs_default.a.database().ref("vendors").once("value",data=>{this.vendors=data.val()}),index_node_cjs_default.a.database().ref("link").once("value",data=>{this.links=data.val()})}lengthof(x){return x?Object.keys(x).length:0}lefter(){return this.platform.width()>800?(this.platform.width()-800)/2+"px":this.platform.width()}widtherget(){return this.platform.width()}gettimes(){return this.platform.width()>600?"calc( 100vw / 3 )":"calc( 100vw / 1.5 )"}widther(x){return this.puller=this.platform.width()>=900?450:this.platform.width()<600?300:this.platform.width()/2,this.platform.width()>=x}go(x){this.nav.navigateForward("home/"+x+"/"+this.id)}}store_page_StorePage.\u0275fac=function StorePage_Factory(t){return new(t||store_page_StorePage)(core["\u0275\u0275directiveInject"](ionic_angular.n),core["\u0275\u0275directiveInject"](router.a),core["\u0275\u0275directiveInject"](ionic_angular.m),core["\u0275\u0275directiveInject"](platform_browser.e))},store_page_StorePage.\u0275cmp=core["\u0275\u0275defineComponent"]({type:store_page_StorePage,selectors:[["app-store"]],decls:30,vars:14,consts:[[2,"--background","#f7f9fd"],[2,"width","100vw","background-color","#f7f9fd",3,"ngStyle"],[2,"width","100%","display","flex","align-items","center","justify-content","space-between","padding","0px 20px","background-color","white","border-bottom","1px solid #eeeeee","height","70px"],["style","height:30px;object-fit: contain;cursor: pointer;","src","https://i.imgur.com/pEyI97C.png","alt","",4,"ngIf"],["style","height:40px;width:40px;;object-fit: contain;cursor: pointer;","src","https://i.imgur.com/vCmo9nR.png","alt","",4,"ngIf"],[2,"width","100%","display","flex","justify-content","flex-start","background-color","white","padding","20px"],["alt","",2,"height","60px","width","60px","border-radius","100%","object-fit","cover",3,"src"],[2,"margin-left","20px"],[2,"font-size","15px","font-weight","bold","color","#333333","margin-top","10px"],[2,"width","100%","display","flex","flex-wrap","wrap","padding-left","20px","background-color","white"],["style","margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;",3,"ngStyle","click",4,"ngFor","ngForOf"],["style","width:100%;",4,"ngIf"],[2,"padding","40px","border-top","1px solid #eeeeee","background-color","white"],[2,"font-size","12px","color","#999999","text-align","center","margin-bottom","20px"],[2,"text-align","center","display","flex","align-items","center","justify-content","center"],[2,"cursor","pointer",";font-size","10px","color","#525dc2",3,"click"],[2,"cursor","pointer","font-size","10px","color","#525dc2",3,"click"],["src","https://i.imgur.com/pEyI97C.png","alt","",2,"height","30px","object-fit","contain","cursor","pointer"],["src","https://i.imgur.com/vCmo9nR.png","alt","",2,"height","40px","width","40px",";object-fit","contain","cursor","pointer"],[2,"margin-right","20px","margin-bottom","20px","background-color","white","box-shadow","1px 5px 10px rgba(0,0,0,0.1)","position","relative",3,"ngStyle","click"],[2,"width","100%","cursor","pointer"],[2,"width","100%","padding-bottom","100%","position","relative"],["alt","",2,"width","100%","height","100%","top","0","left","0","right","0","bottom","0","position","absolute","z-index","10","object-fit","cover",3,"src"],[2,"padding","10px","width","100%"],[2,"font-size","14px","color","#262626","font-weight","bold"],[2,"width","100%","display","flex","justify-content","space-between","align-items","center"],[2,"margin-top","5px","display","flex","align-items","center"],["style","font-size:14px;font-weight: bold;color:#8a1515;",4,"ngIf"],["style","font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;",4,"ngIf"],[2,"font-size","14px","font-weight","bold","color","#8a1515"],[2,"font-size","11px","font-weight","normal","color","#999999",";text-decoration","line-through","margin-left","5px"],[2,"width","100%"],[2,"width","calc( 100% - 40px )","margin","20px","padding","20px","display","flex","justify-content","center","align-items","center","background-color","white","flex-direction","column"],["src","https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif","alt","",2,"width","200px"],[2,"font-size","16px","font-weight","bold","color","#666666","text-align","center"],[2,"padding-top","5px","font-size","14px","font-weight","normal","color","#666666","text-align","center"]],template:function StorePage_Template(rf,ctx){1&rf&&(core["\u0275\u0275elementStart"](0,"ion-content",0),core["\u0275\u0275elementStart"](1,"div",1),core["\u0275\u0275elementStart"](2,"div",2),core["\u0275\u0275template"](3,StorePage_img_3_Template,1,0,"img",3),core["\u0275\u0275template"](4,StorePage_img_4_Template,1,0,"img",4),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](5,"div",5),core["\u0275\u0275element"](6,"img",6),core["\u0275\u0275elementStart"](7,"div",7),core["\u0275\u0275elementStart"](8,"div",8),core["\u0275\u0275text"](9),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](10,"div",9),core["\u0275\u0275template"](11,StorePage_div_11_Template,12,8,"div",10),core["\u0275\u0275pipe"](12,"keyvalue"),core["\u0275\u0275template"](13,StorePage_div_13_Template,7,0,"div",11),core["\u0275\u0275pipe"](14,"keyvalue"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](15,"div",12),core["\u0275\u0275elementStart"](16,"div",13),core["\u0275\u0275text"](17,"\xa9 Copyright 2020- All rights reserved - Vsnap by Vsnap Global Sdn Bhd. version 3.1.0"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](18,"div",14),core["\u0275\u0275elementStart"](19,"span",15),core["\u0275\u0275listener"]("click",function StorePage_Template_span_click_19_listener(){return ctx.outside("terms")}),core["\u0275\u0275text"](20,"Terms & Condition"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275text"](21,"\xa0\u2022\xa0"),core["\u0275\u0275elementStart"](22,"span",16),core["\u0275\u0275listener"]("click",function StorePage_Template_span_click_22_listener(){return ctx.outside("privacy")}),core["\u0275\u0275text"](23,"Privacy Policy"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275text"](24,"\xa0\u2022\xa0"),core["\u0275\u0275elementStart"](25,"span",16),core["\u0275\u0275listener"]("click",function StorePage_Template_span_click_25_listener(){return ctx.outside("disclaimer")}),core["\u0275\u0275text"](26,"Disclaimer"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275text"](27,"\xa0\u2022\xa0"),core["\u0275\u0275elementStart"](28,"span",16),core["\u0275\u0275listener"]("click",function StorePage_Template_span_click_28_listener(){return ctx.outside("refund")}),core["\u0275\u0275text"](29,"Refund Policy"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"]()),2&rf&&(core["\u0275\u0275advance"](1),core["\u0275\u0275property"]("ngStyle",core["\u0275\u0275pureFunction2"](11,_c1,1==ctx.widther(900)?" calc( ( 100vw - 900px ) / 2 )":"0px",1==ctx.widther(900)?" calc( ( 100vw - 900px ) / 2 )":"0px")),core["\u0275\u0275advance"](2),core["\u0275\u0275property"]("ngIf",1==ctx.widther(400)),core["\u0275\u0275advance"](1),core["\u0275\u0275property"]("ngIf",0==ctx.widther(400)),core["\u0275\u0275advance"](2),core["\u0275\u0275propertyInterpolate"]("src",ctx.stringornot(ctx.user.photo)?ctx.user.photo[0]:ctx.user.photo,core["\u0275\u0275sanitizeUrl"]),core["\u0275\u0275advance"](3),core["\u0275\u0275textInterpolate"](ctx.user.name),core["\u0275\u0275advance"](2),core["\u0275\u0275property"]("ngForOf",ctx.checkit(core["\u0275\u0275pipeBind1"](12,7,ctx.vouchers))),core["\u0275\u0275advance"](2),core["\u0275\u0275property"]("ngIf",0==ctx.lengthof(core["\u0275\u0275pipeBind1"](14,9,ctx.vouchers))))},directives:[ionic_angular.c,common.n,common.m,common.l],pipes:[common.g,common.c],styles:[""]});const routes=[{path:"",component:store_page_StorePage}];class StorePageRoutingModule{}StorePageRoutingModule.\u0275fac=function StorePageRoutingModule_Factory(t){return new(t||StorePageRoutingModule)},StorePageRoutingModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:StorePageRoutingModule}),StorePageRoutingModule.\u0275inj=core["\u0275\u0275defineInjector"]({imports:[[router.i.forChild(routes)],router.i]});class StorePageModule{}StorePageModule.\u0275fac=function StorePageModule_Factory(t){return new(t||StorePageModule)},StorePageModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:StorePageModule}),StorePageModule.\u0275inj=core["\u0275\u0275defineInjector"]({imports:[[common.b,fesm2015_forms.a,ionic_angular.j,StorePageRoutingModule]]})}};