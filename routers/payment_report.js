function a0_0x309d(_0x3c7e8c,_0x1c4f15){const _0x425357=a0_0x4253();return a0_0x309d=function(_0x309d25,_0x4b4c05){_0x309d25=_0x309d25-0x1b0;let _0x255d94=_0x425357[_0x309d25];return _0x255d94;},a0_0x309d(_0x3c7e8c,_0x1c4f15);}const a0_0x15f6b2=a0_0x309d;(function(_0x302545,_0x3498bb){const _0x2521c9=a0_0x309d,_0x4c5902=_0x302545();while(!![]){try{const _0x33b09a=parseInt(_0x2521c9(0x1c0))/0x1*(-parseInt(_0x2521c9(0x1b9))/0x2)+-parseInt(_0x2521c9(0x1cf))/0x3+parseInt(_0x2521c9(0x1c2))/0x4+-parseInt(_0x2521c9(0x1b7))/0x5+parseInt(_0x2521c9(0x1b3))/0x6*(parseInt(_0x2521c9(0x1b5))/0x7)+-parseInt(_0x2521c9(0x1c3))/0x8+parseInt(_0x2521c9(0x1cc))/0x9;if(_0x33b09a===_0x3498bb)break;else _0x4c5902['push'](_0x4c5902['shift']());}catch(_0x26d31d){_0x4c5902['push'](_0x4c5902['shift']());}}}(a0_0x4253,0x351a1));const express=require('express'),app=express(),router=express[a0_0x15f6b2(0x1b0)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x15f6b2(0x1c6));router[a0_0x15f6b2(0x1d0)](a0_0x15f6b2(0x1c7),auth,async(_0x191527,_0x104852)=>{const _0x3894b1=a0_0x15f6b2;try{const {username:_0x1089c1,email:_0x57d6a1,role:_0x376147}=_0x191527[_0x3894b1(0x1bb)],_0x3b3f0c=_0x191527[_0x3894b1(0x1bb)],_0x312b6d=await profile[_0x3894b1(0x1b2)]({'email':_0x3b3f0c[_0x3894b1(0x1ce)]}),_0x2fc98e=await master_shop[_0x3894b1(0x1b1)]();console[_0x3894b1(0x1d2)](_0x3894b1(0x1bf),_0x2fc98e);const _0x34157b=await suppliers_payment['find']();console[_0x3894b1(0x1d2)](_0x34157b);if(_0x2fc98e[0x0][_0x3894b1(0x1b6)]==_0x3894b1(0x1b8)){var _0x548553=users['English'];console[_0x3894b1(0x1d2)](_0x548553);}else{if(_0x2fc98e[0x0][_0x3894b1(0x1b6)]==_0x3894b1(0x1cb))var _0x548553=users[_0x3894b1(0x1cb)];else{if(_0x2fc98e[0x0][_0x3894b1(0x1b6)]==_0x3894b1(0x1be))var _0x548553=users[_0x3894b1(0x1be)];else{if(_0x2fc98e[0x0]['language']==_0x3894b1(0x1c1))var _0x548553=users['Spanish'];else{if(_0x2fc98e[0x0]['language']=='French')var _0x548553=users[_0x3894b1(0x1c5)];else{if(_0x2fc98e[0x0]['language']=='Portuguese\x20(BR)')var _0x548553=users['Portuguese'];else{if(_0x2fc98e[0x0][_0x3894b1(0x1b6)]==_0x3894b1(0x1c4))var _0x548553=users['Chinese'];else{if(_0x2fc98e[0x0]['language']==_0x3894b1(0x1b4))var _0x548553=users[_0x3894b1(0x1c8)];}}}}}}}_0x104852[_0x3894b1(0x1c9)]('supplier_payment_report',{'success':_0x191527[_0x3894b1(0x1bd)](_0x3894b1(0x1d1)),'errors':_0x191527[_0x3894b1(0x1bd)](_0x3894b1(0x1bc)),'role':_0x3b3f0c,'profile':_0x312b6d,'suppliers_data':_0x34157b,'master_shop':_0x2fc98e,'language':_0x548553});}catch(_0x1a9e09){console[_0x3894b1(0x1d2)](_0x1a9e09);}}),router[a0_0x15f6b2(0x1d0)](a0_0x15f6b2(0x1ba),auth,async(_0xa013d3,_0x4fea4c)=>{const _0x9b3e40=a0_0x15f6b2;try{const {username:_0x3c4f0c,email:_0x18fab4,role:_0x4d8875}=_0xa013d3[_0x9b3e40(0x1bb)],_0x193bd2=_0xa013d3[_0x9b3e40(0x1bb)],_0x2af6a0=await profile['findOne']({'email':_0x193bd2['email']}),_0x1c0af0=await master_shop['find']();console[_0x9b3e40(0x1d2)]('master',_0x1c0af0);const _0x1102e8=await customer_payment[_0x9b3e40(0x1b1)]();console['log'](_0x1102e8);if(_0x1c0af0[0x0][_0x9b3e40(0x1b6)]==_0x9b3e40(0x1b8)){var _0x25b03c=users[_0x9b3e40(0x1ca)];console[_0x9b3e40(0x1d2)](_0x25b03c);}else{if(_0x1c0af0[0x0][_0x9b3e40(0x1b6)]=='Hindi')var _0x25b03c=users[_0x9b3e40(0x1cb)];else{if(_0x1c0af0[0x0][_0x9b3e40(0x1b6)]==_0x9b3e40(0x1be))var _0x25b03c=users[_0x9b3e40(0x1be)];else{if(_0x1c0af0[0x0]['language']==_0x9b3e40(0x1c1))var _0x25b03c=users[_0x9b3e40(0x1c1)];else{if(_0x1c0af0[0x0][_0x9b3e40(0x1b6)]==_0x9b3e40(0x1c5))var _0x25b03c=users['French'];else{if(_0x1c0af0[0x0][_0x9b3e40(0x1b6)]=='Portuguese\x20(BR)')var _0x25b03c=users['Portuguese'];else{if(_0x1c0af0[0x0]['language']==_0x9b3e40(0x1c4))var _0x25b03c=users['Chinese'];else{if(_0x1c0af0[0x0]['language']==_0x9b3e40(0x1b4))var _0x25b03c=users[_0x9b3e40(0x1c8)];}}}}}}}_0x4fea4c[_0x9b3e40(0x1c9)](_0x9b3e40(0x1cd),{'success':_0xa013d3[_0x9b3e40(0x1bd)](_0x9b3e40(0x1d1)),'errors':_0xa013d3[_0x9b3e40(0x1bd)](_0x9b3e40(0x1bc)),'role':_0x193bd2,'profile':_0x2af6a0,'customer_data':_0x1102e8,'master_shop':_0x1c0af0,'language':_0x25b03c});}catch(_0x4e75b7){console['log'](_0x4e75b7);}}),module['exports']=router;function a0_0x4253(){const _0x21123a=['get','success','log','Router','find','findOne','2141562yqhpAW','Arabic\x20(ae)','7HkXBpU','language','1882225brZfUE','English\x20(US)','12KUBoZv','/customer','user','errors','flash','German','master','26522bKeNrn','Spanish','1632912cqNnoZ','1740680zXKilk','Chinese','French','../public/language/languages.json','/supplier','Arabic','render','English','Hindi','3899610Nukcwj','customer_payment_report','email','683334fhGbDu'];a0_0x4253=function(){return _0x21123a;};return a0_0x4253();}