function a0_0x1c81(_0x3bf80d,_0x1e9621){const _0x4c04cc=a0_0x4c04();return a0_0x1c81=function(_0x1c81fd,_0x191869){_0x1c81fd=_0x1c81fd-0x13d;let _0x2f1f34=_0x4c04cc[_0x1c81fd];return _0x2f1f34;},a0_0x1c81(_0x3bf80d,_0x1e9621);}const a0_0x6f5b6a=a0_0x1c81;(function(_0x41fc17,_0x1a7a91){const _0x17db7d=a0_0x1c81,_0x2e2940=_0x41fc17();while(!![]){try{const _0x410b23=-parseInt(_0x17db7d(0x151))/0x1*(parseInt(_0x17db7d(0x152))/0x2)+-parseInt(_0x17db7d(0x161))/0x3*(-parseInt(_0x17db7d(0x155))/0x4)+-parseInt(_0x17db7d(0x163))/0x5*(-parseInt(_0x17db7d(0x14b))/0x6)+-parseInt(_0x17db7d(0x154))/0x7+-parseInt(_0x17db7d(0x159))/0x8+parseInt(_0x17db7d(0x147))/0x9+-parseInt(_0x17db7d(0x153))/0xa*(parseInt(_0x17db7d(0x15c))/0xb);if(_0x410b23===_0x1a7a91)break;else _0x2e2940['push'](_0x2e2940['shift']());}catch(_0x562dae){_0x2e2940['push'](_0x2e2940['shift']());}}}(a0_0x4c04,0x45776));const express=require(a0_0x6f5b6a(0x162)),app=express(),router=express[a0_0x6f5b6a(0x157)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x6f5b6a(0x158)),auth=require(a0_0x6f5b6a(0x141)),users=require('../public/language/languages.json');router['get'](a0_0x6f5b6a(0x15e),auth,async(_0xb53152,_0x589823)=>{const _0x1c2ae7=a0_0x6f5b6a;try{const {username:_0xafc20d,email:_0x2f1bce,role:_0x439800}=_0xb53152[_0x1c2ae7(0x150)],_0x5435c1=_0xb53152['user'],_0x1e1cee=await profile[_0x1c2ae7(0x13f)]({'email':_0x5435c1[_0x1c2ae7(0x145)]}),_0x302a8f=await master_shop['find']();console[_0x1c2ae7(0x14f)]('master',_0x302a8f);const _0x315d74=await suppliers_payment['find']();console[_0x1c2ae7(0x14f)](_0x315d74);if(_0x302a8f[0x0][_0x1c2ae7(0x148)]==_0x1c2ae7(0x149)){var _0x1c242=users[_0x1c2ae7(0x14a)];console[_0x1c2ae7(0x14f)](_0x1c242);}else{if(_0x302a8f[0x0]['language']==_0x1c2ae7(0x14e))var _0x1c242=users[_0x1c2ae7(0x14e)];else{if(_0x302a8f[0x0][_0x1c2ae7(0x148)]==_0x1c2ae7(0x142))var _0x1c242=users[_0x1c2ae7(0x142)];else{if(_0x302a8f[0x0][_0x1c2ae7(0x148)]==_0x1c2ae7(0x143))var _0x1c242=users[_0x1c2ae7(0x143)];else{if(_0x302a8f[0x0][_0x1c2ae7(0x148)]==_0x1c2ae7(0x144))var _0x1c242=users[_0x1c2ae7(0x144)];else{if(_0x302a8f[0x0]['language']==_0x1c2ae7(0x160))var _0x1c242=users['Portuguese'];else{if(_0x302a8f[0x0][_0x1c2ae7(0x148)]=='Chinese')var _0x1c242=users[_0x1c2ae7(0x15f)];else{if(_0x302a8f[0x0][_0x1c2ae7(0x148)]==_0x1c2ae7(0x146))var _0x1c242=users['Arabic'];}}}}}}}_0x589823['render'](_0x1c2ae7(0x14c),{'success':_0xb53152[_0x1c2ae7(0x13d)](_0x1c2ae7(0x15d)),'errors':_0xb53152[_0x1c2ae7(0x13d)](_0x1c2ae7(0x140)),'role':_0x5435c1,'profile':_0x1e1cee,'suppliers_data':_0x315d74,'master_shop':_0x302a8f,'language':_0x1c242});}catch(_0x7e6196){console[_0x1c2ae7(0x14f)](_0x7e6196);}}),router[a0_0x6f5b6a(0x15a)](a0_0x6f5b6a(0x164),auth,async(_0x15b506,_0x8061e)=>{const _0x71d39=a0_0x6f5b6a;try{const {username:_0x513581,email:_0x2a0ad3,role:_0x370050}=_0x15b506[_0x71d39(0x150)],_0x9b38d=_0x15b506[_0x71d39(0x150)],_0xdf5a28=await profile[_0x71d39(0x13f)]({'email':_0x9b38d[_0x71d39(0x145)]}),_0x417326=await master_shop[_0x71d39(0x13e)]();console[_0x71d39(0x14f)]('master',_0x417326);const _0x125d54=await customer_payment[_0x71d39(0x13e)]();console[_0x71d39(0x14f)](_0x125d54);if(_0x417326[0x0][_0x71d39(0x148)]=='English\x20(US)'){var _0x2c2089=users[_0x71d39(0x14a)];console['log'](_0x2c2089);}else{if(_0x417326[0x0][_0x71d39(0x148)]=='Hindi')var _0x2c2089=users[_0x71d39(0x14e)];else{if(_0x417326[0x0][_0x71d39(0x148)]=='German')var _0x2c2089=users[_0x71d39(0x142)];else{if(_0x417326[0x0]['language']==_0x71d39(0x143))var _0x2c2089=users['Spanish'];else{if(_0x417326[0x0][_0x71d39(0x148)]=='French')var _0x2c2089=users[_0x71d39(0x144)];else{if(_0x417326[0x0][_0x71d39(0x148)]==_0x71d39(0x160))var _0x2c2089=users[_0x71d39(0x14d)];else{if(_0x417326[0x0]['language']==_0x71d39(0x15f))var _0x2c2089=users[_0x71d39(0x15f)];else{if(_0x417326[0x0][_0x71d39(0x148)]==_0x71d39(0x146))var _0x2c2089=users[_0x71d39(0x15b)];}}}}}}}_0x8061e[_0x71d39(0x156)]('customer_payment_report',{'success':_0x15b506[_0x71d39(0x13d)](_0x71d39(0x15d)),'errors':_0x15b506[_0x71d39(0x13d)](_0x71d39(0x140)),'role':_0x9b38d,'profile':_0xdf5a28,'customer_data':_0x125d54,'master_shop':_0x417326,'language':_0x2c2089});}catch(_0x9fb6c8){console[_0x71d39(0x14f)](_0x9fb6c8);}}),module[a0_0x6f5b6a(0x165)]=router;function a0_0x4c04(){const _0x16ffc1=['render','Router','../models/all_models','2381064eiMSKF','get','Arabic','165doZWVT','success','/supplier','Chinese','Portuguese\x20(BR)','21WqcphS','express','2246565Pwqhyp','/customer','exports','flash','find','findOne','errors','../middleware/auth','German','Spanish','French','email','Arabic\x20(ae)','1770120vorvyI','language','English\x20(US)','English','6gFweDv','supplier_payment_report','Portuguese','Hindi','log','user','126031MVGkIw','2tunisj','170710IZPJlo','559377DJkNHc','227532iaYhoW'];a0_0x4c04=function(){return _0x16ffc1;};return a0_0x4c04();}