function a0_0x5e54(_0x389ade,_0x2130d3){const _0x3159e2=a0_0x3159();return a0_0x5e54=function(_0x5e547d,_0x2ea17c){_0x5e547d=_0x5e547d-0xe1;let _0x1f1c55=_0x3159e2[_0x5e547d];return _0x1f1c55;},a0_0x5e54(_0x389ade,_0x2130d3);}function a0_0x3159(){const _0x1824bf=['\x20is\x20alredy\x20added.\x20please\x20choose\x20another','hash','flash','10912IfMqDp','language','1063032NdAvij','render','findById','findOne','Router','success','/staff/view','7886CZEVCt','email','json','warehouse_category','save','errors','345MnaCyB','/view','English','/view/:id','Portuguese\x20(BR)','Chinese','2783555hlJSGv','7020hNILGj','name','user','redirect','status','12VLZUkZ','SPMX','firstname','Finished\x20Goods','Hindi','Raw\x20Materials','../models/all_models','post','$name','Arabic','body','staff','warehouse','password','Arabic\x20(ae)','get','3512816lFUdhn','Enabled','\x20is\x20add\x20successfully','params','express','master','Email\x20','position','French','126810zZPhuh','../middleware/auth','English\x20(US)','8928668XFLGrN','Portuguese','Spanish','find','808AuBPqV','staff\x20data\x20update\x20successfully','log','exports','German'];a0_0x3159=function(){return _0x1824bf;};return a0_0x3159();}const a0_0x35d1f6=a0_0x5e54;(function(_0x16c8f3,_0x858a47){const _0x399eaf=a0_0x5e54,_0x1a8d88=_0x16c8f3();while(!![]){try{const _0x31ac00=-parseInt(_0x399eaf(0xf6))/0x1+-parseInt(_0x399eaf(0xfd))/0x2*(parseInt(_0x399eaf(0x103))/0x3)+-parseInt(_0x399eaf(0x11f))/0x4+-parseInt(_0x399eaf(0x109))/0x5*(-parseInt(_0x399eaf(0x10f))/0x6)+parseInt(_0x399eaf(0xe8))/0x7+parseInt(_0x399eaf(0xec))/0x8*(parseInt(_0x399eaf(0xe5))/0x9)+-parseInt(_0x399eaf(0x10a))/0xa*(parseInt(_0x399eaf(0xf4))/0xb);if(_0x31ac00===_0x858a47)break;else _0x1a8d88['push'](_0x1a8d88['shift']());}catch(_0x5a406b){_0x1a8d88['push'](_0x1a8d88['shift']());}}}(a0_0x3159,0xb004b));const express=require(a0_0x35d1f6(0x123)),app=express(),router=express[a0_0x35d1f6(0xfa)](),bcrypt=require('bcryptjs'),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x35d1f6(0x115)),auth=require(a0_0x35d1f6(0xe6)),users=require('../public/language/languages.json');router['get'](a0_0x35d1f6(0x104),auth,async(_0x5a32d3,_0xf4e850)=>{const _0x215974=a0_0x35d1f6;try{const {username:_0x419822,email:_0x4faf4a,role:_0x481edf}=_0x5a32d3[_0x215974(0x10c)],_0x4a5b64=_0x5a32d3[_0x215974(0x10c)],_0x203feb=await profile[_0x215974(0xf9)]({'email':_0x4a5b64[_0x215974(0xfe)]}),_0x2750aa=await master_shop['find']();console[_0x215974(0xee)](_0x215974(0xe1),_0x2750aa),warehouse_data=await warehouse['aggregate']([{'$match':{'status':_0x215974(0x120)}},{'$group':{'_id':'$name','name':{'$first':_0x215974(0x117)}}}]);const _0x6e362a=await staff[_0x215974(0xeb)]();console[_0x215974(0xee)](_0x6e362a);if(_0x2750aa[0x0][_0x215974(0xf5)]=='English\x20(US)'){var _0x584b43=users[_0x215974(0x105)];console[_0x215974(0xee)](_0x584b43);}else{if(_0x2750aa[0x0][_0x215974(0xf5)]==_0x215974(0x113))var _0x584b43=users['Hindi'];else{if(_0x2750aa[0x0][_0x215974(0xf5)]=='German')var _0x584b43=users['German'];else{if(_0x2750aa[0x0][_0x215974(0xf5)]==_0x215974(0xea))var _0x584b43=users['Spanish'];else{if(_0x2750aa[0x0]['language']==_0x215974(0xe4))var _0x584b43=users['French'];else{if(_0x2750aa[0x0][_0x215974(0xf5)]=='Portuguese\x20(BR)')var _0x584b43=users['Portuguese'];else{if(_0x2750aa[0x0]['language']==_0x215974(0x108))var _0x584b43=users['Chinese'];else{if(_0x2750aa[0x0][_0x215974(0xf5)]=='Arabic\x20(ae)')var _0x584b43=users[_0x215974(0x118)];}}}}}}}let _0x5db793=[_0x215974(0x114),'Finished\x20Goods',_0x215974(0x110)];_0xf4e850[_0x215974(0xf7)]('staff',{'success':_0x5a32d3['flash'](_0x215974(0xfb)),'errors':_0x5a32d3[_0x215974(0xf3)]('errors'),'role':_0x4a5b64,'profile':_0x203feb,'master_shop':_0x2750aa,'user':_0x6e362a,'language':_0x584b43,'warehouse':warehouse_data,'warehouse_cat':_0x5db793});}catch(_0x5d5767){console['log'](_0x5d5767);}}),router[a0_0x35d1f6(0x116)]('/view',auth,async(_0x2b755d,_0x2f4a19)=>{const _0x892eb2=a0_0x35d1f6;try{const {name:_0x3f4671,email:_0x193139,mobile:_0x5d4510,password:_0x250909,status:_0x51e01d,warehouse:_0x2270a9,position:_0x5e291d,warehouse_cat:_0x51bc57}=_0x2b755d[_0x892eb2(0x119)],_0x4d64c3=await bcrypt[_0x892eb2(0xf2)](_0x250909,0xa),_0x42f97=new staff({'name':_0x3f4671,'email':_0x193139,'mobile':_0x5d4510,'status':_0x51e01d,'warehouse':_0x2270a9,'position':_0x5e291d,'warehouse_category':_0x51bc57}),_0x28a36d=await staff['findOne']({'email':_0x193139});console['log'](_0x28a36d);if(_0x28a36d)return _0x2b755d['flash'](_0x892eb2(0x102),_0x892eb2(0xe2)+_0x193139+_0x892eb2(0xf1)),_0x2f4a19[_0x892eb2(0x10d)]('back'),![];const _0x54e360=await _0x42f97[_0x892eb2(0x101)](),_0x5a30cb=new sing_up({'name':_0x3f4671,'email':_0x193139,'password':_0x4d64c3,'role':_0x892eb2(0x11a)}),_0x1ef134=await _0x5a30cb[_0x892eb2(0x101)](),_0x5e5e36=new profile({'firstname':_0x3f4671,'email':_0x193139}),_0x2c4fd8=await _0x5e5e36[_0x892eb2(0x101)]();_0x2b755d[_0x892eb2(0xf3)](_0x892eb2(0xfb),_0x3f4671+_0x892eb2(0x121)),_0x2f4a19[_0x892eb2(0x10d)]('/staff/view');}catch(_0x4ee30d){console[_0x892eb2(0xee)](_0x4ee30d);}}),router[a0_0x35d1f6(0x11e)](a0_0x35d1f6(0x106),auth,async(_0x48db1d,_0x5e3ea9)=>{const _0x17dde9=a0_0x35d1f6;try{const _0x14832b=_0x48db1d['params']['id'],_0x5e1aba=await master_shop[_0x17dde9(0xeb)](),_0x2b2eb9=await staff[_0x17dde9(0xf8)](_0x14832b);if(_0x5e1aba[0x0][_0x17dde9(0xf5)]==_0x17dde9(0xe7)){var _0x22f39a=users['English'];console[_0x17dde9(0xee)](_0x22f39a);}else{if(_0x5e1aba[0x0][_0x17dde9(0xf5)]==_0x17dde9(0x113))var _0x22f39a=users['Hindi'];else{if(_0x5e1aba[0x0][_0x17dde9(0xf5)]==_0x17dde9(0xf0))var _0x22f39a=users[_0x17dde9(0xf0)];else{if(_0x5e1aba[0x0]['language']=='Spanish')var _0x22f39a=users[_0x17dde9(0xea)];else{if(_0x5e1aba[0x0]['language']==_0x17dde9(0xe4))var _0x22f39a=users[_0x17dde9(0xe4)];else{if(_0x5e1aba[0x0][_0x17dde9(0xf5)]==_0x17dde9(0x107))var _0x22f39a=users[_0x17dde9(0xe9)];else{if(_0x5e1aba[0x0]['language']==_0x17dde9(0x108))var _0x22f39a=users['Chinese'];else{if(_0x5e1aba[0x0][_0x17dde9(0xf5)]==_0x17dde9(0x11d))var _0x22f39a=users[_0x17dde9(0x118)];}}}}}}}let _0x3f4f96=['Raw\x20Materials',_0x17dde9(0x112),'SPMX'];_0x5e3ea9[_0x17dde9(0xf7)](_0x17dde9(0x11a),{'success':_0x48db1d[_0x17dde9(0xf3)]('success'),'errors':_0x48db1d[_0x17dde9(0xf3)](_0x17dde9(0x102)),'master_shop':_0x5e1aba,'user':_0x2b2eb9,'language':_0x22f39a,'warehouse_cat':_0x3f4f96});}catch(_0x3a1ef8){console['log'](_0x3a1ef8);}}),router['post']('/view/:id',auth,async(_0x3e2909,_0x3e4458)=>{const _0x144dfe=a0_0x35d1f6;try{const _0x1d0472=_0x3e2909[_0x144dfe(0x122)]['id'],_0x2d652f=await staff[_0x144dfe(0xf8)](_0x1d0472),{name:_0xb333a1,email:_0x3de17a,mobile:_0x12660e,password:_0x13eff3,status:_0x147fe4,warehouse:_0x12310e,position:_0x924d95,warehouse_cat:_0x48cc72}=_0x3e2909[_0x144dfe(0x119)];_0x2d652f[_0x144dfe(0x10b)]=_0xb333a1,_0x2d652f[_0x144dfe(0xfe)]=_0x3de17a,_0x2d652f['mobile']=_0x12660e,_0x2d652f[_0x144dfe(0x11c)]=_0x13eff3,_0x2d652f[_0x144dfe(0x10e)]=_0x147fe4,_0x2d652f[_0x144dfe(0x11b)]=_0x12310e,_0x2d652f[_0x144dfe(0xe3)]=_0x924d95,_0x2d652f[_0x144dfe(0x100)]=_0x48cc72;const _0x1572dc=await _0x2d652f[_0x144dfe(0x101)](),_0x2b33ba=await profile[_0x144dfe(0xf9)]({'email':_0x3de17a});_0x2b33ba[_0x144dfe(0x111)]=_0xb333a1,_0x2b33ba[_0x144dfe(0xfe)]=_0x3de17a,await _0x2b33ba['save'](),_0x3e2909[_0x144dfe(0xf3)](_0x144dfe(0xfb),_0x144dfe(0xed)),_0x3e4458[_0x144dfe(0x10d)](_0x144dfe(0xfc));}catch(_0x40a7e0){console[_0x144dfe(0xee)](_0x40a7e0),_0x3e4458[_0x144dfe(0x10e)](0xc8)[_0x144dfe(0xff)](_0x40a7e0);}}),module[a0_0x35d1f6(0xef)]=router;