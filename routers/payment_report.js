function a0_0x2faf(_0x141bd6,_0x44c4b9){const _0xd3b816=a0_0xd3b8();return a0_0x2faf=function(_0x2faf76,_0x551903){_0x2faf76=_0x2faf76-0x144;let _0xceca85=_0xd3b816[_0x2faf76];return _0xceca85;},a0_0x2faf(_0x141bd6,_0x44c4b9);}const a0_0x256cf5=a0_0x2faf;(function(_0x4766d0,_0x168f0a){const _0x4ce9cc=a0_0x2faf,_0x4057b7=_0x4766d0();while(!![]){try{const _0x50ad10=parseInt(_0x4ce9cc(0x161))/0x1*(parseInt(_0x4ce9cc(0x162))/0x2)+parseInt(_0x4ce9cc(0x164))/0x3*(-parseInt(_0x4ce9cc(0x146))/0x4)+parseInt(_0x4ce9cc(0x149))/0x5+-parseInt(_0x4ce9cc(0x15e))/0x6+-parseInt(_0x4ce9cc(0x14e))/0x7+-parseInt(_0x4ce9cc(0x153))/0x8+-parseInt(_0x4ce9cc(0x158))/0x9*(-parseInt(_0x4ce9cc(0x152))/0xa);if(_0x50ad10===_0x168f0a)break;else _0x4057b7['push'](_0x4057b7['shift']());}catch(_0x2a9cd9){_0x4057b7['push'](_0x4057b7['shift']());}}}(a0_0xd3b8,0x9658f));const express=require('express'),app=express(),router=express[a0_0x256cf5(0x154)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x256cf5(0x14c)),auth=require(a0_0x256cf5(0x15a)),users=require('../public/language/languages.json');function a0_0xd3b8(){const _0x15240d=['Arabic\x20(ae)','supplier_payment_report','master','exports','Spanish','12TDJhaj','errors','flash','45470etlplL','Portuguese','Chinese','../models/all_models','Hindi','5588940uUnZJP','find','German','Portuguese\x20(BR)','26882210WgONex','2547696jPyFim','Router','findOne','render','English','9YxgbIJ','log','../middleware/auth','French','English\x20(US)','success','6656586eXHGzm','email','user','162059domCYw','2vZaVrM','Arabic','17238MZYgyE','get','language','/customer','customer_payment_report'];a0_0xd3b8=function(){return _0x15240d;};return a0_0xd3b8();}router['get']('/supplier',auth,async(_0x5ebcae,_0x3f12a7)=>{const _0x330e58=a0_0x256cf5;try{const {username:_0x4fe39c,email:_0x10136c,role:_0x5ce482}=_0x5ebcae[_0x330e58(0x160)],_0x5a4ce5=_0x5ebcae[_0x330e58(0x160)],_0x1da140=await profile[_0x330e58(0x155)]({'email':_0x5a4ce5[_0x330e58(0x15f)]}),_0x52ba2b=await master_shop['find']();console[_0x330e58(0x159)]('master',_0x52ba2b);const _0x8c2739=await suppliers_payment[_0x330e58(0x14f)]();console[_0x330e58(0x159)](_0x8c2739);if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x15c)){var _0x4f45d7=users[_0x330e58(0x157)];console['log'](_0x4f45d7);}else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x14d))var _0x4f45d7=users[_0x330e58(0x14d)];else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x150))var _0x4f45d7=users['German'];else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x145))var _0x4f45d7=users[_0x330e58(0x145)];else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x15b))var _0x4f45d7=users[_0x330e58(0x15b)];else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x151))var _0x4f45d7=users['Portuguese'];else{if(_0x52ba2b[0x0]['language']=='Chinese')var _0x4f45d7=users[_0x330e58(0x14b)];else{if(_0x52ba2b[0x0][_0x330e58(0x166)]==_0x330e58(0x169))var _0x4f45d7=users[_0x330e58(0x163)];}}}}}}}_0x3f12a7[_0x330e58(0x156)](_0x330e58(0x16a),{'success':_0x5ebcae[_0x330e58(0x148)](_0x330e58(0x15d)),'errors':_0x5ebcae[_0x330e58(0x148)](_0x330e58(0x147)),'role':_0x5a4ce5,'profile':_0x1da140,'suppliers_data':_0x8c2739,'master_shop':_0x52ba2b,'language':_0x4f45d7});}catch(_0x2fab3e){console[_0x330e58(0x159)](_0x2fab3e);}}),router[a0_0x256cf5(0x165)](a0_0x256cf5(0x167),auth,async(_0x224ce4,_0x3fb579)=>{const _0x7ef08c=a0_0x256cf5;try{const {username:_0x505e85,email:_0x41e057,role:_0x390e7a}=_0x224ce4[_0x7ef08c(0x160)],_0x44f2b8=_0x224ce4[_0x7ef08c(0x160)],_0x312ea8=await profile[_0x7ef08c(0x155)]({'email':_0x44f2b8['email']}),_0x154544=await master_shop[_0x7ef08c(0x14f)]();console[_0x7ef08c(0x159)](_0x7ef08c(0x16b),_0x154544);const _0x5eaef0=await customer_payment['find']();console[_0x7ef08c(0x159)](_0x5eaef0);if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x15c)){var _0x5c6501=users[_0x7ef08c(0x157)];console[_0x7ef08c(0x159)](_0x5c6501);}else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x14d))var _0x5c6501=users[_0x7ef08c(0x14d)];else{if(_0x154544[0x0][_0x7ef08c(0x166)]=='German')var _0x5c6501=users['German'];else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x145))var _0x5c6501=users[_0x7ef08c(0x145)];else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x15b))var _0x5c6501=users[_0x7ef08c(0x15b)];else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x151))var _0x5c6501=users[_0x7ef08c(0x14a)];else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x14b))var _0x5c6501=users[_0x7ef08c(0x14b)];else{if(_0x154544[0x0][_0x7ef08c(0x166)]==_0x7ef08c(0x169))var _0x5c6501=users[_0x7ef08c(0x163)];}}}}}}}_0x3fb579[_0x7ef08c(0x156)](_0x7ef08c(0x168),{'success':_0x224ce4[_0x7ef08c(0x148)](_0x7ef08c(0x15d)),'errors':_0x224ce4['flash'](_0x7ef08c(0x147)),'role':_0x44f2b8,'profile':_0x312ea8,'customer_data':_0x5eaef0,'master_shop':_0x154544,'language':_0x5c6501});}catch(_0x479df5){console[_0x7ef08c(0x159)](_0x479df5);}}),module[a0_0x256cf5(0x144)]=router;