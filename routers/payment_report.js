const a0_0x31357e=a0_0x1d45;(function(_0x5851e5,_0x239544){const _0x2dd505=a0_0x1d45,_0x1a3aee=_0x5851e5();while(!![]){try{const _0x116ebc=-parseInt(_0x2dd505(0x148))/0x1*(parseInt(_0x2dd505(0x14a))/0x2)+-parseInt(_0x2dd505(0x16b))/0x3*(parseInt(_0x2dd505(0x142))/0x4)+parseInt(_0x2dd505(0x152))/0x5*(parseInt(_0x2dd505(0x15d))/0x6)+parseInt(_0x2dd505(0x159))/0x7+-parseInt(_0x2dd505(0x14f))/0x8*(parseInt(_0x2dd505(0x164))/0x9)+-parseInt(_0x2dd505(0x14d))/0xa+-parseInt(_0x2dd505(0x143))/0xb*(-parseInt(_0x2dd505(0x158))/0xc);if(_0x116ebc===_0x239544)break;else _0x1a3aee['push'](_0x1a3aee['shift']());}catch(_0xda6013){_0x1a3aee['push'](_0x1a3aee['shift']());}}}(a0_0x529c,0xbb71e));function a0_0x1d45(_0x2bdb44,_0x1ab2a5){const _0x529c38=a0_0x529c();return a0_0x1d45=function(_0x1d45c5,_0x405734){_0x1d45c5=_0x1d45c5-0x142;let _0x450ca0=_0x529c38[_0x1d45c5];return _0x450ca0;},a0_0x1d45(_0x2bdb44,_0x1ab2a5);}const express=require('express'),app=express(),router=express[a0_0x31357e(0x169)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x31357e(0x15c)),auth=require(a0_0x31357e(0x154)),users=require('../public/language/languages.json');router['get'](a0_0x31357e(0x145),auth,async(_0x30795b,_0x17b38c)=>{const _0x35743d=a0_0x31357e;try{const {username:_0x110e36,email:_0x70abe4,role:_0x198c29}=_0x30795b[_0x35743d(0x14b)],_0x2a4f8f=_0x30795b[_0x35743d(0x14b)],_0x4bb9c4=await profile[_0x35743d(0x163)]({'email':_0x2a4f8f['email']}),_0xaf11c3=await master_shop[_0x35743d(0x147)]();console[_0x35743d(0x160)](_0x35743d(0x150),_0xaf11c3);const _0x53f501=await suppliers_payment[_0x35743d(0x147)]();console[_0x35743d(0x160)](_0x53f501);if(_0xaf11c3[0x0]['language']=='English\x20(US)'){var _0x1a53cc=users[_0x35743d(0x167)];console[_0x35743d(0x160)](_0x1a53cc);}else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x168))var _0x1a53cc=users[_0x35743d(0x168)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x151))var _0x1a53cc=users[_0x35743d(0x151)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x14c))var _0x1a53cc=users[_0x35743d(0x14c)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x15b))var _0x1a53cc=users[_0x35743d(0x15b)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x153))var _0x1a53cc=users[_0x35743d(0x155)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]=='Chinese')var _0x1a53cc=users[_0x35743d(0x162)];else{if(_0xaf11c3[0x0][_0x35743d(0x157)]==_0x35743d(0x156))var _0x1a53cc=users[_0x35743d(0x166)];}}}}}}}_0x17b38c[_0x35743d(0x149)]('supplier_payment_report',{'success':_0x30795b[_0x35743d(0x15a)](_0x35743d(0x15f)),'errors':_0x30795b[_0x35743d(0x15a)](_0x35743d(0x14e)),'role':_0x2a4f8f,'profile':_0x4bb9c4,'suppliers_data':_0x53f501,'master_shop':_0xaf11c3,'language':_0x1a53cc});}catch(_0x25382b){console[_0x35743d(0x160)](_0x25382b);}}),router[a0_0x31357e(0x165)](a0_0x31357e(0x161),auth,async(_0x3fd339,_0x2b75de)=>{const _0x533907=a0_0x31357e;try{const {username:_0x224d38,email:_0xcb9524,role:_0x5476cb}=_0x3fd339[_0x533907(0x14b)],_0x5217a4=_0x3fd339['user'],_0x3919ae=await profile[_0x533907(0x163)]({'email':_0x5217a4[_0x533907(0x16a)]}),_0x9b0b08=await master_shop[_0x533907(0x147)]();console[_0x533907(0x160)]('master',_0x9b0b08);const _0x29ec6e=await customer_payment[_0x533907(0x147)]();console['log'](_0x29ec6e);if(_0x9b0b08[0x0]['language']==_0x533907(0x146)){var _0xe65452=users[_0x533907(0x167)];console[_0x533907(0x160)](_0xe65452);}else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x168))var _0xe65452=users[_0x533907(0x168)];else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x151))var _0xe65452=users[_0x533907(0x151)];else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x14c))var _0xe65452=users[_0x533907(0x14c)];else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x15b))var _0xe65452=users['French'];else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x153))var _0xe65452=users[_0x533907(0x155)];else{if(_0x9b0b08[0x0][_0x533907(0x157)]==_0x533907(0x162))var _0xe65452=users['Chinese'];else{if(_0x9b0b08[0x0]['language']==_0x533907(0x156))var _0xe65452=users['Arabic'];}}}}}}}_0x2b75de['render'](_0x533907(0x15e),{'success':_0x3fd339['flash'](_0x533907(0x15f)),'errors':_0x3fd339[_0x533907(0x15a)](_0x533907(0x14e)),'role':_0x5217a4,'profile':_0x3919ae,'customer_data':_0x29ec6e,'master_shop':_0x9b0b08,'language':_0xe65452});}catch(_0x265c1f){console[_0x533907(0x160)](_0x265c1f);}}),module[a0_0x31357e(0x144)]=router;function a0_0x529c(){const _0x16321f=['6650056vlDbSM','flash','French','../models/all_models','2811378YHQbcR','customer_payment_report','success','log','/customer','Chinese','findOne','153CAIiVK','get','Arabic','English','Hindi','Router','email','20571ucWOfw','860rRuJRM','21996744gzBiTd','exports','/supplier','English\x20(US)','find','8803IDzeZu','render','166qtSdPF','user','Spanish','18890gppdCy','errors','429304buXbfg','master','German','10sfTgDr','Portuguese\x20(BR)','../middleware/auth','Portuguese','Arabic\x20(ae)','language','12UytQCE'];a0_0x529c=function(){return _0x16321f;};return a0_0x529c();}