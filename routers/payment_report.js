function a0_0x49f8(_0x421dcb,_0x30180b){const _0xab1222=a0_0xab12();return a0_0x49f8=function(_0x49f88d,_0x11cb55){_0x49f88d=_0x49f88d-0x104;let _0x56fd8b=_0xab1222[_0x49f88d];return _0x56fd8b;},a0_0x49f8(_0x421dcb,_0x30180b);}function a0_0xab12(){const _0x30521b=['findOne','Arabic','email','37bBXQas','language','Chinese','/supplier','log','flash','3283133dujWjA','success','customer_payment_report','1286802TbzKhu','20409516bkAwBm','3240152dBpUjp','French','Spanish','Hindi','../public/language/languages.json','exports','user','3784668vPqjwp','English\x20(US)','supplier_payment_report','Portuguese','34438YuDTby','master','5LrGrMa','find','express','/customer','get','Router','5030600QKknXZ','Arabic\x20(ae)','Portuguese\x20(BR)','German','English','../middleware/auth','render'];a0_0xab12=function(){return _0x30521b;};return a0_0xab12();}const a0_0x5ef93c=a0_0x49f8;(function(_0x15d962,_0x287ef3){const _0x5e5c04=a0_0x49f8,_0x1a1c5d=_0x15d962();while(!![]){try{const _0x566b9c=-parseInt(_0x5e5c04(0x11b))/0x1*(parseInt(_0x5e5c04(0x109))/0x2)+parseInt(_0x5e5c04(0x124))/0x3+-parseInt(_0x5e5c04(0x126))/0x4*(parseInt(_0x5e5c04(0x10b))/0x5)+-parseInt(_0x5e5c04(0x105))/0x6+parseInt(_0x5e5c04(0x121))/0x7+-parseInt(_0x5e5c04(0x111))/0x8+parseInt(_0x5e5c04(0x125))/0x9;if(_0x566b9c===_0x287ef3)break;else _0x1a1c5d['push'](_0x1a1c5d['shift']());}catch(_0x4c76d8){_0x1a1c5d['push'](_0x1a1c5d['shift']());}}}(a0_0xab12,0x700b5));const express=require(a0_0x5ef93c(0x10d)),app=express(),router=express[a0_0x5ef93c(0x110)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require('../models/all_models'),auth=require(a0_0x5ef93c(0x116)),users=require(a0_0x5ef93c(0x12a));router[a0_0x5ef93c(0x10f)](a0_0x5ef93c(0x11e),auth,async(_0x428325,_0x223472)=>{const _0x5897ef=a0_0x5ef93c;try{const {username:_0x3b7956,email:_0x2432f5,role:_0x2f237c}=_0x428325['user'],_0x29539a=_0x428325['user'],_0x497943=await profile[_0x5897ef(0x118)]({'email':_0x29539a[_0x5897ef(0x11a)]}),_0x130804=await master_shop[_0x5897ef(0x10c)]();console[_0x5897ef(0x11f)](_0x5897ef(0x10a),_0x130804);const _0x214e2b=await suppliers_payment[_0x5897ef(0x10c)]();console['log'](_0x214e2b);if(_0x130804[0x0][_0x5897ef(0x11c)]==_0x5897ef(0x106)){var _0x29123d=users[_0x5897ef(0x115)];console[_0x5897ef(0x11f)](_0x29123d);}else{if(_0x130804[0x0]['language']=='Hindi')var _0x29123d=users[_0x5897ef(0x129)];else{if(_0x130804[0x0][_0x5897ef(0x11c)]==_0x5897ef(0x114))var _0x29123d=users[_0x5897ef(0x114)];else{if(_0x130804[0x0][_0x5897ef(0x11c)]=='Spanish')var _0x29123d=users['Spanish'];else{if(_0x130804[0x0]['language']==_0x5897ef(0x127))var _0x29123d=users[_0x5897ef(0x127)];else{if(_0x130804[0x0][_0x5897ef(0x11c)]==_0x5897ef(0x113))var _0x29123d=users[_0x5897ef(0x108)];else{if(_0x130804[0x0]['language']==_0x5897ef(0x11d))var _0x29123d=users[_0x5897ef(0x11d)];else{if(_0x130804[0x0][_0x5897ef(0x11c)]==_0x5897ef(0x112))var _0x29123d=users['Arabic'];}}}}}}}_0x223472[_0x5897ef(0x117)](_0x5897ef(0x107),{'success':_0x428325[_0x5897ef(0x120)]('success'),'errors':_0x428325[_0x5897ef(0x120)]('errors'),'role':_0x29539a,'profile':_0x497943,'suppliers_data':_0x214e2b,'master_shop':_0x130804,'language':_0x29123d});}catch(_0x59db72){console[_0x5897ef(0x11f)](_0x59db72);}}),router[a0_0x5ef93c(0x10f)](a0_0x5ef93c(0x10e),auth,async(_0x42941e,_0x2b8bfd)=>{const _0xec68dc=a0_0x5ef93c;try{const {username:_0x11ac27,email:_0x199e38,role:_0x20c438}=_0x42941e['user'],_0x4da683=_0x42941e[_0xec68dc(0x104)],_0x26625e=await profile[_0xec68dc(0x118)]({'email':_0x4da683[_0xec68dc(0x11a)]}),_0x23e2f7=await master_shop['find']();console['log'](_0xec68dc(0x10a),_0x23e2f7);const _0x445fb9=await customer_payment['find']();console[_0xec68dc(0x11f)](_0x445fb9);if(_0x23e2f7[0x0]['language']==_0xec68dc(0x106)){var _0x43023b=users[_0xec68dc(0x115)];console[_0xec68dc(0x11f)](_0x43023b);}else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x129))var _0x43023b=users['Hindi'];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x114))var _0x43023b=users['German'];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x128))var _0x43023b=users[_0xec68dc(0x128)];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]=='French')var _0x43023b=users[_0xec68dc(0x127)];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x113))var _0x43023b=users[_0xec68dc(0x108)];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x11d))var _0x43023b=users['Chinese'];else{if(_0x23e2f7[0x0][_0xec68dc(0x11c)]==_0xec68dc(0x112))var _0x43023b=users[_0xec68dc(0x119)];}}}}}}}_0x2b8bfd[_0xec68dc(0x117)](_0xec68dc(0x123),{'success':_0x42941e['flash'](_0xec68dc(0x122)),'errors':_0x42941e[_0xec68dc(0x120)]('errors'),'role':_0x4da683,'profile':_0x26625e,'customer_data':_0x445fb9,'master_shop':_0x23e2f7,'language':_0x43023b});}catch(_0x13c9ea){console[_0xec68dc(0x11f)](_0x13c9ea);}}),module[a0_0x5ef93c(0x12b)]=router;