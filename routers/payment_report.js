const a0_0x18f755=a0_0x1ec8;(function(_0x5cf29c,_0x36a729){const _0x21e6c4=a0_0x1ec8,_0x1b5427=_0x5cf29c();while(!![]){try{const _0x1a955d=parseInt(_0x21e6c4(0x1ad))/0x1+-parseInt(_0x21e6c4(0x1b4))/0x2*(parseInt(_0x21e6c4(0x1b0))/0x3)+-parseInt(_0x21e6c4(0x1cf))/0x4*(parseInt(_0x21e6c4(0x1b7))/0x5)+parseInt(_0x21e6c4(0x1b6))/0x6*(parseInt(_0x21e6c4(0x1b1))/0x7)+-parseInt(_0x21e6c4(0x1b3))/0x8+-parseInt(_0x21e6c4(0x1c3))/0x9+-parseInt(_0x21e6c4(0x1ca))/0xa*(-parseInt(_0x21e6c4(0x1a9))/0xb);if(_0x1a955d===_0x36a729)break;else _0x1b5427['push'](_0x1b5427['shift']());}catch(_0x41f4ed){_0x1b5427['push'](_0x1b5427['shift']());}}}(a0_0x7cf2,0x30a91));const express=require('express'),app=express(),router=express[a0_0x18f755(0x1b2)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,customer_payment}=require(a0_0x18f755(0x1a8)),auth=require(a0_0x18f755(0x1be)),users=require(a0_0x18f755(0x1af));function a0_0x1ec8(_0x4bfeb2,_0x2942b8){const _0x7cf27b=a0_0x7cf2();return a0_0x1ec8=function(_0x1ec814,_0x1c7c19){_0x1ec814=_0x1ec814-0x1a7;let _0x2762db=_0x7cf27b[_0x1ec814];return _0x2762db;},a0_0x1ec8(_0x4bfeb2,_0x2942b8);}router[a0_0x18f755(0x1b5)](a0_0x18f755(0x1cb),auth,async(_0x4dafa1,_0x3d5271)=>{const _0x45b9ef=a0_0x18f755;try{const {username:_0xbc0cfd,email:_0x33c2c5,role:_0x22e859}=_0x4dafa1[_0x45b9ef(0x1ab)],_0x2ee00f=_0x4dafa1[_0x45b9ef(0x1ab)],_0x6f243f=await profile[_0x45b9ef(0x1c5)]({'email':_0x2ee00f[_0x45b9ef(0x1aa)]}),_0x141c6f=await master_shop['find']();console[_0x45b9ef(0x1a7)](_0x45b9ef(0x1bf),_0x141c6f);const _0x5c981e=await suppliers_payment[_0x45b9ef(0x1ce)]();console[_0x45b9ef(0x1a7)](_0x5c981e);if(_0x141c6f[0x0]['language']==_0x45b9ef(0x1c7)){var _0xe225d5=users[_0x45b9ef(0x1c2)];console[_0x45b9ef(0x1a7)](_0xe225d5);}else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]==_0x45b9ef(0x1cd))var _0xe225d5=users[_0x45b9ef(0x1cd)];else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]==_0x45b9ef(0x1bd))var _0xe225d5=users['German'];else{if(_0x141c6f[0x0]['language']=='Spanish')var _0xe225d5=users[_0x45b9ef(0x1c9)];else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]==_0x45b9ef(0x1c8))var _0xe225d5=users[_0x45b9ef(0x1c8)];else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]==_0x45b9ef(0x1bc))var _0xe225d5=users['Portuguese'];else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]==_0x45b9ef(0x1cc))var _0xe225d5=users['Chinese'];else{if(_0x141c6f[0x0][_0x45b9ef(0x1b8)]=='Arabic\x20(ae)')var _0xe225d5=users[_0x45b9ef(0x1b9)];}}}}}}}_0x3d5271[_0x45b9ef(0x1c6)](_0x45b9ef(0x1ac),{'success':_0x4dafa1[_0x45b9ef(0x1ae)](_0x45b9ef(0x1c4)),'errors':_0x4dafa1['flash'](_0x45b9ef(0x1c0)),'role':_0x2ee00f,'profile':_0x6f243f,'suppliers_data':_0x5c981e,'master_shop':_0x141c6f,'language':_0xe225d5});}catch(_0x35187c){console[_0x45b9ef(0x1a7)](_0x35187c);}}),router[a0_0x18f755(0x1b5)](a0_0x18f755(0x1ba),auth,async(_0x24d223,_0x1c595a)=>{const _0x158f5b=a0_0x18f755;try{const {username:_0x110a27,email:_0x4eee01,role:_0x3b5215}=_0x24d223[_0x158f5b(0x1ab)],_0x2ab5d0=_0x24d223[_0x158f5b(0x1ab)],_0x1f8273=await profile['findOne']({'email':_0x2ab5d0[_0x158f5b(0x1aa)]}),_0x4fc5d9=await master_shop['find']();console[_0x158f5b(0x1a7)]('master',_0x4fc5d9);const _0x757464=await customer_payment[_0x158f5b(0x1ce)]();console[_0x158f5b(0x1a7)](_0x757464);if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]=='English\x20(US)'){var _0x83958e=users[_0x158f5b(0x1c2)];console[_0x158f5b(0x1a7)](_0x83958e);}else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1cd))var _0x83958e=users[_0x158f5b(0x1cd)];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1bd))var _0x83958e=users[_0x158f5b(0x1bd)];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1c9))var _0x83958e=users['Spanish'];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1c8))var _0x83958e=users[_0x158f5b(0x1c8)];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1bc))var _0x83958e=users[_0x158f5b(0x1c1)];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1cc))var _0x83958e=users[_0x158f5b(0x1cc)];else{if(_0x4fc5d9[0x0][_0x158f5b(0x1b8)]==_0x158f5b(0x1bb))var _0x83958e=users[_0x158f5b(0x1b9)];}}}}}}}_0x1c595a[_0x158f5b(0x1c6)]('customer_payment_report',{'success':_0x24d223['flash']('success'),'errors':_0x24d223['flash'](_0x158f5b(0x1c0)),'role':_0x2ab5d0,'profile':_0x1f8273,'customer_data':_0x757464,'master_shop':_0x4fc5d9,'language':_0x83958e});}catch(_0x29f5e6){console[_0x158f5b(0x1a7)](_0x29f5e6);}}),module['exports']=router;function a0_0x7cf2(){const _0x10cc77=['Hindi','find','3964rGJkqe','log','../models/all_models','707795Fthvpt','email','user','supplier_payment_report','157126NnIvJF','flash','../public/language/languages.json','1074kduOuL','21xXjdoX','Router','106224ePItfC','1526TelhJr','get','319686PuryiK','1145MUXita','language','Arabic','/customer','Arabic\x20(ae)','Portuguese\x20(BR)','German','../middleware/auth','master','errors','Portuguese','English','1071405OnbDxy','success','findOne','render','English\x20(US)','French','Spanish','80zDvLIX','/supplier','Chinese'];a0_0x7cf2=function(){return _0x10cc77;};return a0_0x7cf2();}