var a0_0x444fd9=a0_0x34dd;function a0_0x5d77(){var _0x1143b4=['90FpDZae','English','transfer_report','English\x20(US)','../middleware/auth','../public/language/languages.json','/expense','find','8tyDaDU','/transfer','aggregate','/supplier','sales_return_report','errors','email','language','Arabic\x20(ae)','Spanish','sales_report','8CxdCTk','adjustment_report','Router','purchases_report','success','8RrjkSS','/purchases','2488746GXHQuU','flash','get','customer_report','/purchase_return','/sale_return','Portuguese','/sale','$product.product_name','render','supplier_report','$return_product.product_name','Portuguese\x20(BR)','4844819BJANUj','9441060LwSICb','French','Chinese','master','3348162UwPiAd','741114zGshTA','../models/all_models','1488160KcCbHL','German','purchases_return_report','express','exports','$sale_product.product_name','Arabic','/product','user','/adjustment','log','Hindi','findOne','203441qHpWDE'];a0_0x5d77=function(){return _0x1143b4;};return a0_0x5d77();}(function(_0x3e7c15,_0x573d92){var _0xcaf239=a0_0x34dd,_0xcfe211=_0x3e7c15();while(!![]){try{var _0x193089=-parseInt(_0xcaf239(0xa4))/0x1*(-parseInt(_0xcaf239(0xbd))/0x2)+-parseInt(_0xcaf239(0xbf))/0x3*(parseInt(_0xcaf239(0xb8))/0x4)+-parseInt(_0xcaf239(0xd4))/0x5+parseInt(_0xcaf239(0xcd))/0x6+parseInt(_0xcaf239(0xcc))/0x7*(parseInt(_0xcaf239(0xad))/0x8)+parseInt(_0xcaf239(0xd1))/0x9+-parseInt(_0xcaf239(0xa5))/0xa*(parseInt(_0xcaf239(0xd2))/0xb);if(_0x193089===_0x573d92)break;else _0xcfe211['push'](_0xcfe211['shift']());}catch(_0x49e4ca){_0xcfe211['push'](_0xcfe211['shift']());}}}(a0_0x5d77,0xd8db7));const express=require(a0_0x444fd9(0xd7)),app=express(),router=express[a0_0x444fd9(0xba)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x444fd9(0xd3)),auth=require(a0_0x444fd9(0xa9)),users=require(a0_0x444fd9(0xaa));function a0_0x34dd(_0x5b4067,_0x591ff8){var _0x5d77cd=a0_0x5d77();return a0_0x34dd=function(_0x34ddc7,_0x53f200){_0x34ddc7=_0x34ddc7-0xa4;var _0x14864a=_0x5d77cd[_0x34ddc7];return _0x14864a;},a0_0x34dd(_0x5b4067,_0x591ff8);}router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xdb),auth,async(_0xeae85a,_0x57c6c0)=>{var _0x43fd72=a0_0x444fd9;try{const {username:_0x397f91,email:_0x277621,role:_0x40513e}=_0xeae85a['user'],_0x9713bf=_0xeae85a['user'],_0x47cdba=await profile[_0x43fd72(0xe0)]({'email':_0x9713bf[_0x43fd72(0xb3)]}),_0xc6eb8f=await master_shop[_0x43fd72(0xac)]();console['log'](_0x43fd72(0xd0),_0xc6eb8f);const _0x42681c=await product[_0x43fd72(0xac)]();console[_0x43fd72(0xde)](_0x42681c);if(_0xc6eb8f[0x0]['language']=='English\x20(US)'){var _0x587052=users[_0x43fd72(0xa6)];console[_0x43fd72(0xde)](_0x587052);}else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]==_0x43fd72(0xdf))var _0x587052=users['Hindi'];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]==_0x43fd72(0xd5))var _0x587052=users[_0x43fd72(0xd5)];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]=='Spanish')var _0x587052=users[_0x43fd72(0xb6)];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]==_0x43fd72(0xce))var _0x587052=users['French'];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]==_0x43fd72(0xcb))var _0x587052=users[_0x43fd72(0xc5)];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]==_0x43fd72(0xcf))var _0x587052=users['Chinese'];else{if(_0xc6eb8f[0x0][_0x43fd72(0xb4)]=='Arabic\x20(ae)')var _0x587052=users[_0x43fd72(0xda)];}}}}}}}_0x57c6c0[_0x43fd72(0xc8)]('product_report',{'success':_0xeae85a[_0x43fd72(0xc0)](_0x43fd72(0xbc)),'errors':_0xeae85a[_0x43fd72(0xc0)](_0x43fd72(0xb2)),'role':_0x9713bf,'profile':_0x47cdba,'master_shop':_0xc6eb8f,'alldata':_0x42681c,'language':_0x587052});}catch(_0x4d384c){console['log'](_0x4d384c);}}),router[a0_0x444fd9(0xc1)]('/customer',auth,async(_0x5750ed,_0x28c80a)=>{var _0x4884d2=a0_0x444fd9;try{const {username:_0x411b05,email:_0x328d8d,role:_0x1d1245}=_0x5750ed[_0x4884d2(0xdc)],_0x4efaad=_0x5750ed[_0x4884d2(0xdc)],_0x42f686=await profile[_0x4884d2(0xe0)]({'email':_0x4efaad[_0x4884d2(0xb3)]}),_0x173914=await master_shop[_0x4884d2(0xac)]();console[_0x4884d2(0xde)](_0x4884d2(0xd0),_0x173914);const _0x5a3fac=await customer['find']();console[_0x4884d2(0xde)](_0x5a3fac);if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xa8)){var _0x5412d1=users[_0x4884d2(0xa6)];console[_0x4884d2(0xde)](_0x5412d1);}else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xdf))var _0x5412d1=users['Hindi'];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xd5))var _0x5412d1=users[_0x4884d2(0xd5)];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xb6))var _0x5412d1=users[_0x4884d2(0xb6)];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xce))var _0x5412d1=users[_0x4884d2(0xce)];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xcb))var _0x5412d1=users[_0x4884d2(0xc5)];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xcf))var _0x5412d1=users[_0x4884d2(0xcf)];else{if(_0x173914[0x0][_0x4884d2(0xb4)]==_0x4884d2(0xb5))var _0x5412d1=users[_0x4884d2(0xda)];}}}}}}}_0x28c80a[_0x4884d2(0xc8)](_0x4884d2(0xc2),{'success':_0x5750ed[_0x4884d2(0xc0)](_0x4884d2(0xbc)),'errors':_0x5750ed[_0x4884d2(0xc0)](_0x4884d2(0xb2)),'role':_0x4efaad,'profile':_0x42f686,'master_shop':_0x173914,'alldata':_0x5a3fac,'language':_0x5412d1});}catch(_0x42b8cc){console[_0x4884d2(0xde)](_0x42b8cc);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xb0),auth,async(_0x9dd399,_0x2fa719)=>{var _0x3f3cbb=a0_0x444fd9;try{const {username:_0x2ac343,email:_0x24eef9,role:_0x366c65}=_0x9dd399['user'],_0x548ca8=_0x9dd399['user'],_0x23050b=await profile[_0x3f3cbb(0xe0)]({'email':_0x548ca8[_0x3f3cbb(0xb3)]}),_0x6649a9=await master_shop['find']();console[_0x3f3cbb(0xde)](_0x3f3cbb(0xd0),_0x6649a9);const _0x5816d0=await suppliers[_0x3f3cbb(0xac)]();console[_0x3f3cbb(0xde)](_0x5816d0);if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]==_0x3f3cbb(0xa8)){var _0x1ebda6=users['English'];console[_0x3f3cbb(0xde)](_0x1ebda6);}else{if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]=='Hindi')var _0x1ebda6=users[_0x3f3cbb(0xdf)];else{if(_0x6649a9[0x0]['language']==_0x3f3cbb(0xd5))var _0x1ebda6=users[_0x3f3cbb(0xd5)];else{if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]==_0x3f3cbb(0xb6))var _0x1ebda6=users[_0x3f3cbb(0xb6)];else{if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]==_0x3f3cbb(0xce))var _0x1ebda6=users[_0x3f3cbb(0xce)];else{if(_0x6649a9[0x0]['language']==_0x3f3cbb(0xcb))var _0x1ebda6=users[_0x3f3cbb(0xc5)];else{if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]==_0x3f3cbb(0xcf))var _0x1ebda6=users[_0x3f3cbb(0xcf)];else{if(_0x6649a9[0x0][_0x3f3cbb(0xb4)]==_0x3f3cbb(0xb5))var _0x1ebda6=users[_0x3f3cbb(0xda)];}}}}}}}_0x2fa719['render'](_0x3f3cbb(0xc9),{'success':_0x9dd399[_0x3f3cbb(0xc0)](_0x3f3cbb(0xbc)),'errors':_0x9dd399[_0x3f3cbb(0xc0)](_0x3f3cbb(0xb2)),'role':_0x548ca8,'profile':_0x23050b,'master_shop':_0x6649a9,'alldata':_0x5816d0,'language':_0x1ebda6});}catch(_0x76f4f7){console[_0x3f3cbb(0xde)](_0x76f4f7);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xbe),auth,async(_0x46e924,_0x4e56ad)=>{var _0x2e4fa1=a0_0x444fd9;try{const {username:_0x2d2ea5,email:_0x4fdba0,role:_0x37739f}=_0x46e924[_0x2e4fa1(0xdc)],_0x3c9b4a=_0x46e924['user'],_0x820803=await profile[_0x2e4fa1(0xe0)]({'email':_0x3c9b4a[_0x2e4fa1(0xb3)]}),_0x50727d=await master_shop[_0x2e4fa1(0xac)]();console['log']('master',_0x50727d);const _0x1e2f1c=await purchases[_0x2e4fa1(0xaf)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x2e4fa1(0xc7),'payable':0x1}}]);console[_0x2e4fa1(0xde)]('purchases\x20report',_0x1e2f1c);if(_0x50727d[0x0][_0x2e4fa1(0xb4)]==_0x2e4fa1(0xa8)){var _0xf01ef4=users[_0x2e4fa1(0xa6)];console[_0x2e4fa1(0xde)](_0xf01ef4);}else{if(_0x50727d[0x0][_0x2e4fa1(0xb4)]==_0x2e4fa1(0xdf))var _0xf01ef4=users[_0x2e4fa1(0xdf)];else{if(_0x50727d[0x0][_0x2e4fa1(0xb4)]==_0x2e4fa1(0xd5))var _0xf01ef4=users[_0x2e4fa1(0xd5)];else{if(_0x50727d[0x0]['language']==_0x2e4fa1(0xb6))var _0xf01ef4=users[_0x2e4fa1(0xb6)];else{if(_0x50727d[0x0][_0x2e4fa1(0xb4)]=='French')var _0xf01ef4=users[_0x2e4fa1(0xce)];else{if(_0x50727d[0x0][_0x2e4fa1(0xb4)]==_0x2e4fa1(0xcb))var _0xf01ef4=users[_0x2e4fa1(0xc5)];else{if(_0x50727d[0x0]['language']==_0x2e4fa1(0xcf))var _0xf01ef4=users[_0x2e4fa1(0xcf)];else{if(_0x50727d[0x0][_0x2e4fa1(0xb4)]==_0x2e4fa1(0xb5))var _0xf01ef4=users[_0x2e4fa1(0xda)];}}}}}}}_0x4e56ad[_0x2e4fa1(0xc8)](_0x2e4fa1(0xbb),{'success':_0x46e924['flash'](_0x2e4fa1(0xbc)),'errors':_0x46e924['flash'](_0x2e4fa1(0xb2)),'role':_0x3c9b4a,'profile':_0x820803,'master_shop':_0x50727d,'alldata':_0x1e2f1c,'language':_0xf01ef4});}catch(_0x2cdca9){console[_0x2e4fa1(0xde)](_0x2cdca9);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xc3),auth,async(_0x1e036f,_0x56342b)=>{var _0x3627e6=a0_0x444fd9;try{const {username:_0x518cc6,email:_0x51665e,role:_0x57973b}=_0x1e036f[_0x3627e6(0xdc)],_0x1d5c2b=_0x1e036f[_0x3627e6(0xdc)],_0x57f1c2=await profile[_0x3627e6(0xe0)]({'email':_0x1d5c2b['email']}),_0x3cc842=await master_shop[_0x3627e6(0xac)]();console[_0x3627e6(0xde)]('master',_0x3cc842);const _0x2011e8=await purchases_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x3627e6(0xca),'receivable':0x1}}]);console[_0x3627e6(0xde)]('purchases_return_report',_0x2011e8);if(_0x3cc842[0x0][_0x3627e6(0xb4)]==_0x3627e6(0xa8)){var _0x4c4c77=users[_0x3627e6(0xa6)];console['log'](_0x4c4c77);}else{if(_0x3cc842[0x0]['language']==_0x3627e6(0xdf))var _0x4c4c77=users[_0x3627e6(0xdf)];else{if(_0x3cc842[0x0]['language']==_0x3627e6(0xd5))var _0x4c4c77=users[_0x3627e6(0xd5)];else{if(_0x3cc842[0x0][_0x3627e6(0xb4)]==_0x3627e6(0xb6))var _0x4c4c77=users[_0x3627e6(0xb6)];else{if(_0x3cc842[0x0][_0x3627e6(0xb4)]==_0x3627e6(0xce))var _0x4c4c77=users['French'];else{if(_0x3cc842[0x0][_0x3627e6(0xb4)]=='Portuguese\x20(BR)')var _0x4c4c77=users['Portuguese'];else{if(_0x3cc842[0x0][_0x3627e6(0xb4)]==_0x3627e6(0xcf))var _0x4c4c77=users[_0x3627e6(0xcf)];else{if(_0x3cc842[0x0]['language']==_0x3627e6(0xb5))var _0x4c4c77=users[_0x3627e6(0xda)];}}}}}}}_0x56342b[_0x3627e6(0xc8)](_0x3627e6(0xd6),{'success':_0x1e036f[_0x3627e6(0xc0)]('success'),'errors':_0x1e036f['flash'](_0x3627e6(0xb2)),'role':_0x1d5c2b,'profile':_0x57f1c2,'master_shop':_0x3cc842,'alldata':_0x2011e8,'language':_0x4c4c77});}catch(_0x26e6fe){console[_0x3627e6(0xde)](_0x26e6fe);}}),router['get'](a0_0x444fd9(0xc6),auth,async(_0x4b43d4,_0x59f422)=>{var _0x396491=a0_0x444fd9;try{const {username:_0x5029ae,email:_0x45f2f9,role:_0x571040}=_0x4b43d4[_0x396491(0xdc)],_0x391900=_0x4b43d4[_0x396491(0xdc)],_0x312b0c=await profile[_0x396491(0xe0)]({'email':_0x391900['email']}),_0x2494d1=await master_shop['find']();console['log'](_0x396491(0xd0),_0x2494d1);const _0x14e214=await sales[_0x396491(0xaf)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x396491(0xd9),'receivable_amount':0x1}}]);console[_0x396491(0xde)](_0x14e214);if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xa8)){var _0x3ed8f4=users[_0x396491(0xa6)];console['log'](_0x3ed8f4);}else{if(_0x2494d1[0x0][_0x396491(0xb4)]=='Hindi')var _0x3ed8f4=users[_0x396491(0xdf)];else{if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xd5))var _0x3ed8f4=users[_0x396491(0xd5)];else{if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xb6))var _0x3ed8f4=users['Spanish'];else{if(_0x2494d1[0x0][_0x396491(0xb4)]=='French')var _0x3ed8f4=users[_0x396491(0xce)];else{if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xcb))var _0x3ed8f4=users[_0x396491(0xc5)];else{if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xcf))var _0x3ed8f4=users[_0x396491(0xcf)];else{if(_0x2494d1[0x0][_0x396491(0xb4)]==_0x396491(0xb5))var _0x3ed8f4=users[_0x396491(0xda)];}}}}}}}_0x59f422[_0x396491(0xc8)](_0x396491(0xb7),{'success':_0x4b43d4['flash']('success'),'errors':_0x4b43d4[_0x396491(0xc0)]('errors'),'role':_0x391900,'profile':_0x312b0c,'master_shop':_0x2494d1,'alldata':_0x14e214,'language':_0x3ed8f4});}catch(_0x895b44){console[_0x396491(0xde)](_0x895b44);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xc4),auth,async(_0x5b0340,_0x20b2ab)=>{var _0x4cee9f=a0_0x444fd9;try{const {username:_0x1d8590,email:_0x57b865,role:_0x29fbbb}=_0x5b0340[_0x4cee9f(0xdc)],_0x59b95a=_0x5b0340[_0x4cee9f(0xdc)],_0x4a026d=await profile[_0x4cee9f(0xe0)]({'email':_0x59b95a[_0x4cee9f(0xb3)]}),_0x5e0f70=await master_shop[_0x4cee9f(0xac)]();console[_0x4cee9f(0xde)](_0x4cee9f(0xd0),_0x5e0f70);const _0x315d0b=await sales_return[_0x4cee9f(0xaf)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':'$return_sale.product_name','payable_to_customer':0x1}}]);console[_0x4cee9f(0xde)](_0x315d0b);if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xa8)){var _0x51c6e7=users['English'];console[_0x4cee9f(0xde)](_0x51c6e7);}else{if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xdf))var _0x51c6e7=users[_0x4cee9f(0xdf)];else{if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xd5))var _0x51c6e7=users[_0x4cee9f(0xd5)];else{if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xb6))var _0x51c6e7=users[_0x4cee9f(0xb6)];else{if(_0x5e0f70[0x0]['language']==_0x4cee9f(0xce))var _0x51c6e7=users[_0x4cee9f(0xce)];else{if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xcb))var _0x51c6e7=users[_0x4cee9f(0xc5)];else{if(_0x5e0f70[0x0][_0x4cee9f(0xb4)]==_0x4cee9f(0xcf))var _0x51c6e7=users['Chinese'];else{if(_0x5e0f70[0x0]['language']==_0x4cee9f(0xb5))var _0x51c6e7=users[_0x4cee9f(0xda)];}}}}}}}_0x20b2ab[_0x4cee9f(0xc8)](_0x4cee9f(0xb1),{'success':_0x5b0340['flash'](_0x4cee9f(0xbc)),'errors':_0x5b0340[_0x4cee9f(0xc0)](_0x4cee9f(0xb2)),'role':_0x59b95a,'profile':_0x4a026d,'master_shop':_0x5e0f70,'alldata':_0x315d0b,'language':_0x51c6e7});}catch(_0x2c68f3){console[_0x4cee9f(0xde)](_0x2c68f3);}}),router['get'](a0_0x444fd9(0xdd),auth,async(_0x1f54d1,_0x18c14e)=>{var _0x2fc29d=a0_0x444fd9;try{const {username:_0x3aa17d,email:_0xeb8857,role:_0x1d8cf4}=_0x1f54d1[_0x2fc29d(0xdc)],_0x365ffd=_0x1f54d1[_0x2fc29d(0xdc)],_0x22fd88=await profile[_0x2fc29d(0xe0)]({'email':_0x365ffd[_0x2fc29d(0xb3)]}),_0x24ca3d=await master_shop[_0x2fc29d(0xac)]();console[_0x2fc29d(0xde)]('master',_0x24ca3d);const _0x5b17eb=await adjustment[_0x2fc29d(0xac)]();console[_0x2fc29d(0xde)](_0x5b17eb);if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xa8)){var _0x2aa774=users[_0x2fc29d(0xa6)];console[_0x2fc29d(0xde)](_0x2aa774);}else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xdf))var _0x2aa774=users[_0x2fc29d(0xdf)];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]=='German')var _0x2aa774=users['German'];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]=='Spanish')var _0x2aa774=users[_0x2fc29d(0xb6)];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xce))var _0x2aa774=users[_0x2fc29d(0xce)];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xcb))var _0x2aa774=users[_0x2fc29d(0xc5)];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xcf))var _0x2aa774=users[_0x2fc29d(0xcf)];else{if(_0x24ca3d[0x0][_0x2fc29d(0xb4)]==_0x2fc29d(0xb5))var _0x2aa774=users[_0x2fc29d(0xda)];}}}}}}}_0x18c14e[_0x2fc29d(0xc8)](_0x2fc29d(0xb9),{'success':_0x1f54d1[_0x2fc29d(0xc0)](_0x2fc29d(0xbc)),'errors':_0x1f54d1[_0x2fc29d(0xc0)]('errors'),'role':_0x365ffd,'profile':_0x22fd88,'master_shop':_0x24ca3d,'alldata':_0x5b17eb,'language':_0x2aa774});}catch(_0x5fc84e){console[_0x2fc29d(0xde)](_0x5fc84e);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xae),auth,async(_0x336cde,_0x3fcbfd)=>{var _0x4c76ab=a0_0x444fd9;try{const {username:_0x4ee5d9,email:_0x545b37,role:_0x44c521}=_0x336cde[_0x4c76ab(0xdc)],_0xd68431=_0x336cde[_0x4c76ab(0xdc)],_0x1bf32c=await profile['findOne']({'email':_0xd68431[_0x4c76ab(0xb3)]}),_0x5098aa=await master_shop[_0x4c76ab(0xac)]();console['log'](_0x4c76ab(0xd0),_0x5098aa);const _0x2d0edb=await transfers['find']();console[_0x4c76ab(0xde)](_0x2d0edb);if(_0x5098aa[0x0][_0x4c76ab(0xb4)]==_0x4c76ab(0xa8)){var _0x319efe=users[_0x4c76ab(0xa6)];console[_0x4c76ab(0xde)](_0x319efe);}else{if(_0x5098aa[0x0]['language']==_0x4c76ab(0xdf))var _0x319efe=users[_0x4c76ab(0xdf)];else{if(_0x5098aa[0x0][_0x4c76ab(0xb4)]==_0x4c76ab(0xd5))var _0x319efe=users[_0x4c76ab(0xd5)];else{if(_0x5098aa[0x0]['language']==_0x4c76ab(0xb6))var _0x319efe=users[_0x4c76ab(0xb6)];else{if(_0x5098aa[0x0]['language']=='French')var _0x319efe=users[_0x4c76ab(0xce)];else{if(_0x5098aa[0x0][_0x4c76ab(0xb4)]==_0x4c76ab(0xcb))var _0x319efe=users[_0x4c76ab(0xc5)];else{if(_0x5098aa[0x0][_0x4c76ab(0xb4)]=='Chinese')var _0x319efe=users[_0x4c76ab(0xcf)];else{if(_0x5098aa[0x0][_0x4c76ab(0xb4)]==_0x4c76ab(0xb5))var _0x319efe=users[_0x4c76ab(0xda)];}}}}}}}_0x3fcbfd['render'](_0x4c76ab(0xa7),{'success':_0x336cde[_0x4c76ab(0xc0)](_0x4c76ab(0xbc)),'errors':_0x336cde['flash'](_0x4c76ab(0xb2)),'role':_0xd68431,'profile':_0x1bf32c,'master_shop':_0x5098aa,'alldata':_0x2d0edb,'language':_0x319efe});}catch(_0x6502f1){console[_0x4c76ab(0xde)](_0x6502f1);}}),router[a0_0x444fd9(0xc1)](a0_0x444fd9(0xab),auth,async(_0xb5c197,_0x3ccfae)=>{var _0x1dcac1=a0_0x444fd9;try{const {username:_0xb9890a,email:_0x37f4b8,role:_0x4f3dbb}=_0xb5c197[_0x1dcac1(0xdc)],_0x466159=_0xb5c197[_0x1dcac1(0xdc)],_0x43dfdf=await profile[_0x1dcac1(0xe0)]({'email':_0x466159['email']}),_0x49db67=await master_shop[_0x1dcac1(0xac)]();console[_0x1dcac1(0xde)](_0x1dcac1(0xd0),_0x49db67);const _0x404ce9=await all_expenses[_0x1dcac1(0xac)]();console[_0x1dcac1(0xde)](_0x404ce9);if(_0x49db67[0x0][_0x1dcac1(0xb4)]==_0x1dcac1(0xa8)){var _0xfea3b6=users[_0x1dcac1(0xa6)];console[_0x1dcac1(0xde)](_0xfea3b6);}else{if(_0x49db67[0x0]['language']==_0x1dcac1(0xdf))var _0xfea3b6=users[_0x1dcac1(0xdf)];else{if(_0x49db67[0x0][_0x1dcac1(0xb4)]==_0x1dcac1(0xd5))var _0xfea3b6=users['German'];else{if(_0x49db67[0x0]['language']==_0x1dcac1(0xb6))var _0xfea3b6=users[_0x1dcac1(0xb6)];else{if(_0x49db67[0x0][_0x1dcac1(0xb4)]=='French')var _0xfea3b6=users[_0x1dcac1(0xce)];else{if(_0x49db67[0x0][_0x1dcac1(0xb4)]=='Portuguese\x20(BR)')var _0xfea3b6=users[_0x1dcac1(0xc5)];else{if(_0x49db67[0x0][_0x1dcac1(0xb4)]==_0x1dcac1(0xcf))var _0xfea3b6=users['Chinese'];else{if(_0x49db67[0x0][_0x1dcac1(0xb4)]==_0x1dcac1(0xb5))var _0xfea3b6=users['Arabic'];}}}}}}}_0x3ccfae['render']('expense_report',{'success':_0xb5c197[_0x1dcac1(0xc0)](_0x1dcac1(0xbc)),'errors':_0xb5c197[_0x1dcac1(0xc0)]('errors'),'role':_0x466159,'profile':_0x43dfdf,'master_shop':_0x49db67,'alldata':_0x404ce9,'language':_0xfea3b6});}catch(_0xca3ff1){console[_0x1dcac1(0xde)](_0xca3ff1);}}),module[a0_0x444fd9(0xd8)]=router;