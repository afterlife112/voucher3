(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ZQTp:function(t,i,e){"use strict";e.r(i),e.d(i,"BrandPageModule",function(){return I});var n=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),a=e("Jgta"),s=(e("Zs65"),e("6nsN"),e("fXoL")),p=e("jhN1"),d=e("m/P+"),h=e("tk/3");function l(t,i){if(1&t){const t=s.Qb();s.Pb(0,"img",23),s.Xb("click",function(){return s.mc(t),s.Zb().tomain()}),s.Ob()}}function g(t,i){if(1&t){const t=s.Qb();s.Pb(0,"img",24),s.Xb("click",function(){return s.mc(t),s.Zb().tomain()}),s.Ob()}}function b(t,i){if(1&t){const t=s.Qb();s.Pb(0,"div",25),s.Xb("click",function(){s.mc(t);const i=s.Zb();return i.store(i.influencer.id)}),s.Nb(1,"img",26),s.Pb(2,"div",27),s.Pb(3,"div",28),s.qc(4),s.Ob(),s.Pb(5,"div",29),s.qc(6,"Visit my store >"),s.Ob(),s.Ob(),s.Ob()}if(2&t){const t=s.Zb();s.Cb(1),s.gc("src",t.influencer.photo?t.stringornot(t.influencer.photo)?t.influencer.photo:t.influencer.photo[0]:"https://i.imgur.com/GvrNqUS.png",s.nc),s.Cb(3),s.sc(" ",t.influencer.name,"")}}function m(t,i){if(1&t){const t=s.Qb();s.Pb(0,"div",30),s.Xb("click",function(){s.mc(t);const e=i.$implicit;return s.Zb().openlink(e.link,e.name)}),s.qc(1),s.Ob()}if(2&t){const t=i.$implicit;s.Cb(1),s.sc(" ",t.name,"")}}function u(t,i){if(1&t){const t=s.Qb();s.Pb(0,"div",31),s.Xb("click",function(){return s.mc(t),s.Zb().donatecsr2021()}),s.qc(1," Donate to Fight2021"),s.Ob()}}function f(t,i){if(1&t&&(s.Pb(0,"div",42),s.qc(1),s.ac(2,"currency"),s.Ob()),2&t){const t=s.Zb().$implicit;s.Cb(1),s.sc(" ",s.cc(2,1,t.price_now,"RM")," ")}}function v(t,i){1&t&&(s.Pb(0,"div",42),s.qc(1," APPLY FOR FREE "),s.Ob())}function x(t,i){if(1&t&&(s.Pb(0,"div",43),s.qc(1),s.ac(2,"currency"),s.Ob()),2&t){const t=s.Zb().$implicit;s.Cb(1),s.sc(" \xa0",s.cc(2,1,t.price_ori,"RM"),"\xa0")}}const w=function(t){return{width:t}};function y(t,i){if(1&t){const t=s.Qb();s.Pb(0,"div",32),s.Xb("click",function(){s.mc(t);const e=i.$implicit;return s.Zb().go(e.id)}),s.Pb(1,"div",33),s.Pb(2,"div",34),s.Nb(3,"img",35),s.Ob(),s.Pb(4,"div",36),s.Pb(5,"div",37),s.qc(6),s.Ob(),s.Pb(7,"div",38),s.Pb(8,"div",39),s.pc(9,f,3,4,"div",40),s.pc(10,v,2,0,"div",40),s.pc(11,x,3,4,"div",41),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()}if(2&t){const t=i.$implicit,e=s.Zb();s.fc("ngStyle",s.ic(6,w,900>e.widtherget()?(e.widtherget()-20)/e.rounder(e.widtherget()/200)-20+"px":"calc( ( 900px - 100px ) / 4 )")),s.Cb(3),s.gc("src",t.thumbnail,s.nc),s.Cb(3),s.rc(t.name),s.Cb(3),s.fc("ngIf",t.price_now),s.Cb(1),s.fc("ngIf",!t.price_now),s.Cb(1),s.fc("ngIf",t.price_ori>t.price_now)}}function k(t,i){1&t&&(s.Pb(0,"div",44),s.Pb(1,"div",45),s.Nb(2,"img",46),s.Pb(3,"div",47),s.qc(4,"Nothing Here"),s.Ob(),s.Pb(5,"div",48),s.qc(6,"There are no items in this list."),s.Ob(),s.Ob(),s.Ob())}const P=function(t,i){return{"padding-left":t,"padding-right":i}},O=[{path:"",component:(()=>{class t{constructor(t,i,e,n,o,r,c){this.meta=t,this.platform=i,this.activatedRoute=e,this.nav=n,this.title=o,this.iab=r,this.http=c,this.enter=!1,this.item="",this.user="",this.voucher=[],this.influencer={},this.vendor="",this.qty=1,this.selected=0,this.puller=this.platform.width()/2,this.var_select=[0,1],this.disabled=[!0,!0,!0],this.vendor_info={},this.links=[]}widther(t){return this.puller=this.platform.width()>=900?450:this.platform.width()<600?300:this.platform.width()/2,this.platform.width()>=t}openlink(t,i){this.iab.create(("Facebook"==i||"Instagram"==i?"https://":"")+("Facebook"==i?"www.facebook.com/":"Instagram"==i?"www.instagram.com/":"")+t,"_system")}proper2(t){return Math.round(100*((Math.abs(t)||0)+Number.EPSILON))/100}checkit(t){return t?t.filter(t=>1==t.status):[]}lengthof(t){return t?t.length:0}rounder(t){return Math.floor(t)}widtherget(){return this.platform.width()}stringornot(t){return"string"==typeof t}go(t){this.nav.navigateForward("home/"+t+"/"+this.user+"?click_id="+this.click_id)}ngOnInit(){console.log("Do nothing"),this.activatedRoute.queryParams.subscribe(t=>{this.click_id=t.click_id||""}),this.vendor=this.activatedRoute.snapshot.paramMap.get("vendor"),this.user=this.activatedRoute.snapshot.paramMap.get("user")||"yRSIH0mIALf4PsxkwSUFkKnjdMI3",this.http.post("https://api2.vsnap.my/dataVendorlogin",{userid:this.vendor}).subscribe(t=>{t.data[1]&&t.data[1].id&&(this.title.setTitle(t.data[1].name+"'s Vsnap Vendor Store"),this.meta.updateTag({name:"description",content:t.data[1].description||"Welcome to "+t.data[1].name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"name",content:t.data[1].name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"description",content:t.data[1].description||"Welcome to "+t.data[1].name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"image",content:t.data[1].photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"og:url",content:"https://deal.vsnap.my/brand/"+this.vendor+"/"+this.user}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:description",content:t.data[1].description||"Welcome to "+t.data[1].name+"'s Vsnap Vendor Store"}),this.meta.updateTag({property:"og:title",content:t.data[1].name+"'s Vsnap Vendor Store"}),this.meta.updateTag({property:"og:image",content:t.data[1].photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"og:image:secure_url",content:t.data[1].photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"fb:app_id",content:"2713339858890729"}),this.meta.updateTag({property:"og:image:width",content:"500"}),this.meta.updateTag({property:"og:image:height",content:"500"}))},t=>{})}ionViewWillEnter(){this.vendor=this.activatedRoute.snapshot.paramMap.get("vendor"),this.user=this.activatedRoute.snapshot.paramMap.get("user")||"yRSIH0mIALf4PsxkwSUFkKnjdMI3","5qjg3XyuGGdu1janN1yp305qWL62"!=this.vendor?this.http.post("https://api2.vsnap.my/datavendorvouchers",{id:this.vendor}).subscribe(t=>{this.voucher=t.data.filter(t=>t.status)||[],console.log(this.voucher)}):this.http.post("https://api2.vsnap.my/datavoucherbytag",{tag:"CSR2021"}).subscribe(t=>{console.log("here"),this.voucher=t.data.filter(t=>t.status)||[],console.log(this.voucher)}),this.http.post("https://api2.vsnap.my/dataVendorlogin",{userid:this.vendor}).subscribe(t=>{t.data[1]&&t.data[1].id?(this.vendor_info=t.data[1]||{},this.title.setTitle(this.vendor_info.name+"'s Vsnap Vendor Store"),this.meta.updateTag({name:"description",content:this.vendor_info.description||"Welcome to "+this.vendor_info.name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"name",content:this.vendor_info.name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"description",content:this.vendor_info.description||"Welcome to "+this.vendor_info.name+"'s Vsnap Vendor Store"}),this.meta.updateTag({itemprop:"image",content:this.vendor_info.photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"og:url",content:"https://deal.vsnap.my/brand/"+this.vendor+"/"+this.user}),this.meta.updateTag({property:"og:type",content:"website"}),this.meta.updateTag({property:"og:description",content:this.vendor_info.description||"Welcome to "+this.vendor_info.name+"'s Vsnap Vendor Store"}),this.meta.updateTag({property:"og:title",content:this.vendor_info.name+"'s Vsnap Vendor Store"}),this.meta.updateTag({property:"og:image",content:this.vendor_info.photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"og:image:secure_url",content:this.vendor_info.photo||"https://i.imgur.com/cW5MqH2.png"}),this.meta.updateTag({property:"fb:app_id",content:"2713339858890729"}),this.meta.updateTag({property:"og:image:width",content:"500"}),this.meta.updateTag({property:"og:image:height",content:"500"})):(this.tomain(),this.vendor_info={})},t=>{this.tomain(),this.vendor_info={}}),this.influencer.id=this.user,this.http.post("https://api2.vsnap.my/getusers",{id:this.user}).subscribe(t=>{t.data.id?this.influencer=t.data||{}:this.http.post("https://api2.vsnap.my/getusers",{id:"yRSIH0mIALf4PsxkwSUFkKnjdMI3"}).subscribe(t=>{t.data.id?this.influencer=t.data||{}:this.tomain()},t=>{this.tomain()})},t=>{this.http.post("https://api2.vsnap.my/getusers",{id:"yRSIH0mIALf4PsxkwSUFkKnjdMI3"}).subscribe(t=>{t.data.id?this.influencer=t.data||{}:this.tomain()},t=>{this.tomain()})}),a.a.database().ref("link").once("value",t=>{this.links=t.val()})}tomain(){this.nav.navigateForward("main?user="+this.user+"&click_id="+this.click_id)}join(){window.open("https://register.vsnap.my/influencer?referrer_id="+this.user)}store(t){this.nav.navigateForward("store/"+t+"?click_id="+this.click_id)}donatecsr2021(){this.iab.create("https://pg.revenuemonster.my/v1/invoice-group/input?invoiceGroupId=1626521195381410810","_system")}outside(t){this.iab.create(this.links[t],"_system")}}return t.\u0275fac=function(i){return new(i||t)(s.Mb(p.b),s.Mb(r.p),s.Mb(c.a),s.Mb(r.o),s.Mb(p.c),s.Mb(d.a),s.Mb(h.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-brand"]],decls:36,vars:13,consts:[[2,"--background","#f7f9fd"],[2,"width","100vw","background-color","#f7f9fd",3,"ngStyle"],[2,"width","100%","display","flex","align-items","center","justify-content","space-between","padding","0px 20px","background-color","white","border-bottom","1px solid #eeeeee","height","70px"],["style","height:30px;object-fit: contain;cursor: pointer;","src","https://i.imgur.com/pEyI97C.png","alt","",3,"click",4,"ngIf"],["style","height:40px;width:40px;;object-fit: contain;cursor: pointer;","src","https://i.imgur.com/vCmo9nR.png","alt","",3,"click",4,"ngIf"],["style","display:flex;align-items: center;justify-content: flex-end;",3,"click",4,"ngIf"],[2,"width","100%","display","flex","justify-content","flex-start","background-color","white","padding","20px"],["alt","",2,"height","60px","width","60px","border-radius","100%","object-fit","cover",3,"src"],[2,"margin-left","20px"],[2,"font-size","15px","font-weight","bold","color","#333333","margin-top","10px"],[2,"width","calc( 100% )","display","flex","flex-wrap","wrap","margin-top","10px"],["style","cursor: pointer;;padding:5px 10px;border:1px solid #eeeeee;font-size:12px;margin-right:10px;margin-bottom:10px;",3,"click",4,"ngFor","ngForOf"],["style","margin-top:10px;;padding:7px 15px;width:max-content;font-size:14px;color:white;background-color: #8a1515;",3,"click",4,"ngIf"],[2,"width","100%","display","flex","flex-wrap","wrap","padding-left","20px","background-color","white"],["style","margin-right:20px;margin-bottom:20px;background-color:white;box-shadow:1px 5px 10px rgba(0,0,0,0.1);position: relative;",3,"ngStyle","click",4,"ngFor","ngForOf"],["style","width:100%;",4,"ngIf"],[2,"padding","40px","border-top","1px solid #eeeeee","background-color","white"],[2,"font-size","12px","color","#999999","text-align","center","margin-bottom","10px"],[2,"text-decoration","underline",3,"click"],[2,"font-size","12px","color","#999999","text-align","center","margin-bottom","20px"],[2,"text-align","center","display","flex","align-items","center","justify-content","center"],[2,"cursor","pointer",";font-size","10px","color","#525dc2",3,"click"],[2,"cursor","pointer","font-size","10px","color","#525dc2",3,"click"],["src","https://i.imgur.com/pEyI97C.png","alt","",2,"height","30px","object-fit","contain","cursor","pointer",3,"click"],["src","https://i.imgur.com/vCmo9nR.png","alt","",2,"height","40px","width","40px",";object-fit","contain","cursor","pointer",3,"click"],[2,"display","flex","align-items","center","justify-content","flex-end",3,"click"],["alt","",2,"height","40px","width","40px","object-fit","cover","border-radius","100%",3,"src"],[2,"margin-left","10px","cursor","pointer"],[2,"font-size","14px","color","#333333","background-color","white","margin-right","20px","text-align","left","font-weight","bold","white-space","nowrap","overflow","hidden","text-overflow","ellipsis","max-width","90px"],[2,"font-size","12px","color","#999999","margin-top","2px"],[2,"cursor","pointer",";padding","5px 10px","border","1px solid #eeeeee","font-size","12px","margin-right","10px","margin-bottom","10px",3,"click"],[2,"margin-top","10px",";padding","7px 15px","width","max-content","font-size","14px","color","white","background-color","#8a1515",3,"click"],[2,"margin-right","20px","margin-bottom","20px","background-color","white","box-shadow","1px 5px 10px rgba(0,0,0,0.1)","position","relative",3,"ngStyle","click"],[2,"width","100%","cursor","pointer"],[2,"width","100%","padding-bottom","100%","position","relative"],["alt","",2,"width","100%","height","100%","top","0","left","0","right","0","bottom","0","position","absolute","z-index","10","object-fit","cover",3,"src"],[2,"padding","10px","width","100%"],[2,"font-size","14px","color","#262626","font-weight","bold"],[2,"width","100%","display","flex","justify-content","space-between","align-items","center"],[2,"margin-top","5px","display","flex","align-items","center"],["style","font-size:14px;font-weight: bold;color:#8a1515;",4,"ngIf"],["style","font-size:11px;font-weight: normal;color:#999999;;text-decoration:line-through;margin-left:5px;",4,"ngIf"],[2,"font-size","14px","font-weight","bold","color","#8a1515"],[2,"font-size","11px","font-weight","normal","color","#999999",";text-decoration","line-through","margin-left","5px"],[2,"width","100%"],[2,"width","calc( 100% - 40px )","margin","20px","padding","20px","display","flex","justify-content","center","align-items","center","background-color","white","flex-direction","column"],["src","https://i.pinimg.com/originals/5d/35/e3/5d35e39988e3a183bdc3a9d2570d20a9.gif","alt","",2,"width","200px"],[2,"font-size","16px","font-weight","bold","color","#666666","text-align","center"],[2,"padding-top","5px","font-size","14px","font-weight","normal","color","#666666","text-align","center"]],template:function(t,i){1&t&&(s.Pb(0,"ion-content",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.pc(3,l,1,0,"img",3),s.pc(4,g,1,0,"img",4),s.pc(5,b,7,2,"div",5),s.Ob(),s.Pb(6,"div",6),s.Nb(7,"img",7),s.Pb(8,"div",8),s.Pb(9,"div",9),s.qc(10),s.Ob(),s.Pb(11,"div",10),s.pc(12,m,2,1,"div",11),s.Ob(),s.pc(13,u,2,0,"div",12),s.Ob(),s.Ob(),s.Pb(14,"div",13),s.pc(15,y,12,8,"div",14),s.pc(16,k,7,0,"div",15),s.Ob(),s.Pb(17,"div",16),s.Pb(18,"div",17),s.qc(19,"Become a vsnap influencer or become a vsnap vendor?\xa0 "),s.Pb(20,"span",18),s.Xb("click",function(){return i.join()}),s.qc(21,"join us now."),s.Ob(),s.Ob(),s.Pb(22,"div",19),s.qc(23,"\xa9 Copyright 2020- All rights reserved - Vsnap by Vsnap Global Sdn Bhd. version 6.1.0"),s.Ob(),s.Pb(24,"div",20),s.Pb(25,"span",21),s.Xb("click",function(){return i.outside("terms")}),s.qc(26,"Terms & Condition"),s.Ob(),s.qc(27,"\xa0\u2022\xa0"),s.Pb(28,"span",22),s.Xb("click",function(){return i.outside("privacy")}),s.qc(29,"Privacy Policy"),s.Ob(),s.qc(30,"\xa0\u2022\xa0"),s.Pb(31,"span",22),s.Xb("click",function(){return i.outside("disclaimer")}),s.qc(32,"Disclaimer"),s.Ob(),s.qc(33,"\xa0\u2022\xa0"),s.Pb(34,"span",22),s.Xb("click",function(){return i.outside("refund")}),s.qc(35,"Refund Policy"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.Cb(1),s.fc("ngStyle",s.jc(10,P,1==i.widther(900)?" calc( ( 100vw - 900px ) / 2 )":"0px",1==i.widther(900)?" calc( ( 100vw - 900px ) / 2 )":"0px")),s.Cb(2),s.fc("ngIf",1==i.widther(400)),s.Cb(1),s.fc("ngIf",0==i.widther(400)),s.Cb(1),s.fc("ngIf",i.user==i.influencer.id),s.Cb(2),s.gc("src",i.vendor_info.photo||"https://media.istockphoto.com/vectors/young-woman-engaged-in-shopping-and-checkout-her-purchases-vector-id1073204892?b=1&k=6&m=1073204892&s=612x612&w=0&h=WQz5o6GHiShCSZhpcQ6G1Fkg8fPV65UKNU7z2sWTEBg=",s.nc),s.Cb(3),s.rc(i.vendor_info.name),s.Cb(2),s.fc("ngForOf",i.vendor_info.link),s.Cb(1),s.fc("ngIf","CSR2021"==i.vendor_info.tag),s.Cb(2),s.fc("ngForOf",i.checkit(i.voucher)),s.Cb(1),s.fc("ngIf",0==i.lengthof(i.voucher)))},directives:[r.c,n.n,n.m,n.l],pipes:[n.c],styles:[""]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[c.i.forChild(O)],c.i]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[n.b,o.a,r.l,_]]}),t})()}}]);