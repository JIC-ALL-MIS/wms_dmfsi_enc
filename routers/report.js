function a0_0x1eb1(_0x54215c,_0x96bc61){var _0x4111f5=a0_0x4111();return a0_0x1eb1=function(_0x1eb141,_0x10911b){_0x1eb141=_0x1eb141-0xcb;var _0x23f11b=_0x4111f5[_0x1eb141];return _0x23f11b;},a0_0x1eb1(_0x54215c,_0x96bc61);}var a0_0x185f65=a0_0x1eb1;function a0_0x4111(){var _0x22f974=['$sale_product.product_name','purchases\x20report','7146gorCdE','4336208niQnJG','findOne','master','adjustment_report','user','/sale','1691524IOwYOd','English','aggregate','errors','Router','670518VidgNg','$product.product_name','50YEFIiN','flash','Portuguese','customer_report','supplier_report','$return_sale.product_name','Spanish','2058VyAlZC','transfer_report','express','language','log','$return_product.product_name','4yaAHjT','../middleware/auth','/purchases','Chinese','get','sales_report','render','../models/all_models','5016924KOgupc','/transfer','/purchase_return','/sale_return','success','English\x20(US)','Portuguese\x20(BR)','German','Arabic\x20(ae)','Arabic','email','purchases_return_report','103574IFYYyr','Hindi','product_report','/expense','exports','French','851210LzVQdQ','3khnFni','find','sales_return_report'];a0_0x4111=function(){return _0x22f974;};return a0_0x4111();}(function(_0x560f61,_0x3951ac){var _0x40bced=a0_0x1eb1,_0x2bb16b=_0x560f61();while(!![]){try{var _0xfba62a=-parseInt(_0x40bced(0x104))/0x1*(-parseInt(_0x40bced(0xdd))/0x2)+-parseInt(_0x40bced(0xe4))/0x3*(-parseInt(_0x40bced(0xf0))/0x4)+-parseInt(_0x40bced(0xe3))/0x5+-parseInt(_0x40bced(0xe9))/0x6*(-parseInt(_0x40bced(0xfe))/0x7)+-parseInt(_0x40bced(0xea))/0x8+parseInt(_0x40bced(0xf5))/0x9*(-parseInt(_0x40bced(0xf7))/0xa)+parseInt(_0x40bced(0xd1))/0xb;if(_0xfba62a===_0x3951ac)break;else _0x2bb16b['push'](_0x2bb16b['shift']());}catch(_0x3e94b0){_0x2bb16b['push'](_0x2bb16b['shift']());}}}(a0_0x4111,0x55d01));const express=require(a0_0x185f65(0x100)),app=express(),router=express[a0_0x185f65(0xf4)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x185f65(0xd0)),auth=require(a0_0x185f65(0x105)),users=require('../public/language/languages.json');router[a0_0x185f65(0xcd)]('/product',auth,async(_0x5186b1,_0x2ef056)=>{var _0x429c85=a0_0x185f65;try{const {username:_0x35d368,email:_0x131976,role:_0x49d714}=_0x5186b1['user'],_0x14b46c=_0x5186b1['user'],_0x14b4d0=await profile['findOne']({'email':_0x14b46c[_0x429c85(0xdb)]}),_0x5ebbc8=await master_shop[_0x429c85(0xe5)]();console['log'](_0x429c85(0xec),_0x5ebbc8);const _0x3ebc4c=await product[_0x429c85(0xe5)]();console[_0x429c85(0x102)](_0x3ebc4c);if(_0x5ebbc8[0x0][_0x429c85(0x101)]==_0x429c85(0xd6)){var _0x1108cb=users[_0x429c85(0xf1)];console[_0x429c85(0x102)](_0x1108cb);}else{if(_0x5ebbc8[0x0]['language']==_0x429c85(0xde))var _0x1108cb=users[_0x429c85(0xde)];else{if(_0x5ebbc8[0x0][_0x429c85(0x101)]==_0x429c85(0xd8))var _0x1108cb=users[_0x429c85(0xd8)];else{if(_0x5ebbc8[0x0][_0x429c85(0x101)]==_0x429c85(0xfd))var _0x1108cb=users[_0x429c85(0xfd)];else{if(_0x5ebbc8[0x0][_0x429c85(0x101)]==_0x429c85(0xe2))var _0x1108cb=users[_0x429c85(0xe2)];else{if(_0x5ebbc8[0x0]['language']==_0x429c85(0xd7))var _0x1108cb=users[_0x429c85(0xf9)];else{if(_0x5ebbc8[0x0]['language']==_0x429c85(0xcc))var _0x1108cb=users[_0x429c85(0xcc)];else{if(_0x5ebbc8[0x0][_0x429c85(0x101)]==_0x429c85(0xd9))var _0x1108cb=users[_0x429c85(0xda)];}}}}}}}_0x2ef056[_0x429c85(0xcf)](_0x429c85(0xdf),{'success':_0x5186b1[_0x429c85(0xf8)]('success'),'errors':_0x5186b1[_0x429c85(0xf8)]('errors'),'role':_0x14b46c,'profile':_0x14b4d0,'master_shop':_0x5ebbc8,'alldata':_0x3ebc4c,'language':_0x1108cb});}catch(_0xa0fce3){console[_0x429c85(0x102)](_0xa0fce3);}}),router[a0_0x185f65(0xcd)]('/customer',auth,async(_0x7907cd,_0xc4e6dd)=>{var _0x2bc1e4=a0_0x185f65;try{const {username:_0xb69204,email:_0x55338e,role:_0x13a283}=_0x7907cd[_0x2bc1e4(0xee)],_0x38d053=_0x7907cd[_0x2bc1e4(0xee)],_0xeb1459=await profile[_0x2bc1e4(0xeb)]({'email':_0x38d053['email']}),_0x5addd6=await master_shop[_0x2bc1e4(0xe5)]();console[_0x2bc1e4(0x102)](_0x2bc1e4(0xec),_0x5addd6);const _0x27947e=await customer[_0x2bc1e4(0xe5)]();console[_0x2bc1e4(0x102)](_0x27947e);if(_0x5addd6[0x0]['language']=='English\x20(US)'){var _0x594e36=users[_0x2bc1e4(0xf1)];console['log'](_0x594e36);}else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xde))var _0x594e36=users[_0x2bc1e4(0xde)];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xd8))var _0x594e36=users['German'];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xfd))var _0x594e36=users[_0x2bc1e4(0xfd)];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xe2))var _0x594e36=users[_0x2bc1e4(0xe2)];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xd7))var _0x594e36=users[_0x2bc1e4(0xf9)];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xcc))var _0x594e36=users['Chinese'];else{if(_0x5addd6[0x0][_0x2bc1e4(0x101)]==_0x2bc1e4(0xd9))var _0x594e36=users[_0x2bc1e4(0xda)];}}}}}}}_0xc4e6dd[_0x2bc1e4(0xcf)](_0x2bc1e4(0xfa),{'success':_0x7907cd[_0x2bc1e4(0xf8)]('success'),'errors':_0x7907cd['flash'](_0x2bc1e4(0xf3)),'role':_0x38d053,'profile':_0xeb1459,'master_shop':_0x5addd6,'alldata':_0x27947e,'language':_0x594e36});}catch(_0x3c5c02){console[_0x2bc1e4(0x102)](_0x3c5c02);}}),router['get']('/supplier',auth,async(_0x5bd729,_0x4d0a7f)=>{var _0x3f18ec=a0_0x185f65;try{const {username:_0x1cf886,email:_0x24ceed,role:_0x402c61}=_0x5bd729['user'],_0x41b7de=_0x5bd729[_0x3f18ec(0xee)],_0x49160c=await profile['findOne']({'email':_0x41b7de['email']}),_0x21f227=await master_shop[_0x3f18ec(0xe5)]();console[_0x3f18ec(0x102)](_0x3f18ec(0xec),_0x21f227);const _0x3f6a81=await suppliers[_0x3f18ec(0xe5)]();console[_0x3f18ec(0x102)](_0x3f6a81);if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xd6)){var _0x4528aa=users[_0x3f18ec(0xf1)];console['log'](_0x4528aa);}else{if(_0x21f227[0x0][_0x3f18ec(0x101)]=='Hindi')var _0x4528aa=users[_0x3f18ec(0xde)];else{if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xd8))var _0x4528aa=users[_0x3f18ec(0xd8)];else{if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xfd))var _0x4528aa=users[_0x3f18ec(0xfd)];else{if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xe2))var _0x4528aa=users[_0x3f18ec(0xe2)];else{if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xd7))var _0x4528aa=users[_0x3f18ec(0xf9)];else{if(_0x21f227[0x0]['language']==_0x3f18ec(0xcc))var _0x4528aa=users[_0x3f18ec(0xcc)];else{if(_0x21f227[0x0][_0x3f18ec(0x101)]==_0x3f18ec(0xd9))var _0x4528aa=users['Arabic'];}}}}}}}_0x4d0a7f[_0x3f18ec(0xcf)](_0x3f18ec(0xfb),{'success':_0x5bd729[_0x3f18ec(0xf8)](_0x3f18ec(0xd5)),'errors':_0x5bd729['flash'](_0x3f18ec(0xf3)),'role':_0x41b7de,'profile':_0x49160c,'master_shop':_0x21f227,'alldata':_0x3f6a81,'language':_0x4528aa});}catch(_0x3224a7){console['log'](_0x3224a7);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xcb),auth,async(_0x2204b5,_0x48cca3)=>{var _0xd848b3=a0_0x185f65;try{const {username:_0x4fbf28,email:_0x461493,role:_0x59ff22}=_0x2204b5['user'],_0x5d0d65=_0x2204b5[_0xd848b3(0xee)],_0x188a9e=await profile[_0xd848b3(0xeb)]({'email':_0x5d0d65['email']}),_0x1d9ef6=await master_shop[_0xd848b3(0xe5)]();console[_0xd848b3(0x102)](_0xd848b3(0xec),_0x1d9ef6);const _0x4361dc=await purchases[_0xd848b3(0xf2)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0xd848b3(0xf6),'payable':0x1}}]);console[_0xd848b3(0x102)](_0xd848b3(0xe8),_0x4361dc);if(_0x1d9ef6[0x0]['language']==_0xd848b3(0xd6)){var _0x3c106d=users[_0xd848b3(0xf1)];console[_0xd848b3(0x102)](_0x3c106d);}else{if(_0x1d9ef6[0x0]['language']=='Hindi')var _0x3c106d=users[_0xd848b3(0xde)];else{if(_0x1d9ef6[0x0]['language']=='German')var _0x3c106d=users[_0xd848b3(0xd8)];else{if(_0x1d9ef6[0x0][_0xd848b3(0x101)]==_0xd848b3(0xfd))var _0x3c106d=users[_0xd848b3(0xfd)];else{if(_0x1d9ef6[0x0]['language']=='French')var _0x3c106d=users[_0xd848b3(0xe2)];else{if(_0x1d9ef6[0x0][_0xd848b3(0x101)]==_0xd848b3(0xd7))var _0x3c106d=users[_0xd848b3(0xf9)];else{if(_0x1d9ef6[0x0]['language']=='Chinese')var _0x3c106d=users['Chinese'];else{if(_0x1d9ef6[0x0]['language']==_0xd848b3(0xd9))var _0x3c106d=users[_0xd848b3(0xda)];}}}}}}}_0x48cca3[_0xd848b3(0xcf)]('purchases_report',{'success':_0x2204b5[_0xd848b3(0xf8)](_0xd848b3(0xd5)),'errors':_0x2204b5[_0xd848b3(0xf8)](_0xd848b3(0xf3)),'role':_0x5d0d65,'profile':_0x188a9e,'master_shop':_0x1d9ef6,'alldata':_0x4361dc,'language':_0x3c106d});}catch(_0x33064e){console[_0xd848b3(0x102)](_0x33064e);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xd3),auth,async(_0x252f73,_0x2db44d)=>{var _0x5342cd=a0_0x185f65;try{const {username:_0x5132ad,email:_0x1630d1,role:_0x36579b}=_0x252f73[_0x5342cd(0xee)],_0x1c3e3c=_0x252f73['user'],_0x18e642=await profile['findOne']({'email':_0x1c3e3c[_0x5342cd(0xdb)]}),_0x18a25e=await master_shop[_0x5342cd(0xe5)]();console['log'](_0x5342cd(0xec),_0x18a25e);const _0xc49539=await purchases_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x5342cd(0x103),'receivable':0x1}}]);console[_0x5342cd(0x102)](_0x5342cd(0xdc),_0xc49539);if(_0x18a25e[0x0][_0x5342cd(0x101)]==_0x5342cd(0xd6)){var _0x593ffc=users['English'];console['log'](_0x593ffc);}else{if(_0x18a25e[0x0][_0x5342cd(0x101)]=='Hindi')var _0x593ffc=users[_0x5342cd(0xde)];else{if(_0x18a25e[0x0]['language']==_0x5342cd(0xd8))var _0x593ffc=users[_0x5342cd(0xd8)];else{if(_0x18a25e[0x0][_0x5342cd(0x101)]==_0x5342cd(0xfd))var _0x593ffc=users[_0x5342cd(0xfd)];else{if(_0x18a25e[0x0]['language']==_0x5342cd(0xe2))var _0x593ffc=users['French'];else{if(_0x18a25e[0x0][_0x5342cd(0x101)]==_0x5342cd(0xd7))var _0x593ffc=users[_0x5342cd(0xf9)];else{if(_0x18a25e[0x0]['language']==_0x5342cd(0xcc))var _0x593ffc=users[_0x5342cd(0xcc)];else{if(_0x18a25e[0x0][_0x5342cd(0x101)]=='Arabic\x20(ae)')var _0x593ffc=users['Arabic'];}}}}}}}_0x2db44d['render'](_0x5342cd(0xdc),{'success':_0x252f73[_0x5342cd(0xf8)](_0x5342cd(0xd5)),'errors':_0x252f73[_0x5342cd(0xf8)](_0x5342cd(0xf3)),'role':_0x1c3e3c,'profile':_0x18e642,'master_shop':_0x18a25e,'alldata':_0xc49539,'language':_0x593ffc});}catch(_0x431549){console['log'](_0x431549);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xef),auth,async(_0x407bc1,_0x36ebde)=>{var _0x53a7db=a0_0x185f65;try{const {username:_0x118cfa,email:_0x46a63a,role:_0x26c636}=_0x407bc1['user'],_0x108b93=_0x407bc1[_0x53a7db(0xee)],_0x1e0ec4=await profile[_0x53a7db(0xeb)]({'email':_0x108b93['email']}),_0x19d462=await master_shop[_0x53a7db(0xe5)]();console[_0x53a7db(0x102)](_0x53a7db(0xec),_0x19d462);const _0x5549c5=await sales['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x53a7db(0xe7),'receivable_amount':0x1}}]);console[_0x53a7db(0x102)](_0x5549c5);if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xd6)){var _0x53f669=users[_0x53a7db(0xf1)];console[_0x53a7db(0x102)](_0x53f669);}else{if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xde))var _0x53f669=users[_0x53a7db(0xde)];else{if(_0x19d462[0x0]['language']==_0x53a7db(0xd8))var _0x53f669=users[_0x53a7db(0xd8)];else{if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xfd))var _0x53f669=users[_0x53a7db(0xfd)];else{if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xe2))var _0x53f669=users[_0x53a7db(0xe2)];else{if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xd7))var _0x53f669=users[_0x53a7db(0xf9)];else{if(_0x19d462[0x0]['language']=='Chinese')var _0x53f669=users[_0x53a7db(0xcc)];else{if(_0x19d462[0x0][_0x53a7db(0x101)]==_0x53a7db(0xd9))var _0x53f669=users[_0x53a7db(0xda)];}}}}}}}_0x36ebde[_0x53a7db(0xcf)](_0x53a7db(0xce),{'success':_0x407bc1[_0x53a7db(0xf8)](_0x53a7db(0xd5)),'errors':_0x407bc1[_0x53a7db(0xf8)](_0x53a7db(0xf3)),'role':_0x108b93,'profile':_0x1e0ec4,'master_shop':_0x19d462,'alldata':_0x5549c5,'language':_0x53f669});}catch(_0x174204){console[_0x53a7db(0x102)](_0x174204);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xd4),auth,async(_0x3ac75b,_0x449c90)=>{var _0x2e08bd=a0_0x185f65;try{const {username:_0x5c3b42,email:_0x54c139,role:_0x1a2c3e}=_0x3ac75b[_0x2e08bd(0xee)],_0x599993=_0x3ac75b[_0x2e08bd(0xee)],_0x5128aa=await profile['findOne']({'email':_0x599993[_0x2e08bd(0xdb)]}),_0x5a996a=await master_shop[_0x2e08bd(0xe5)]();console['log'](_0x2e08bd(0xec),_0x5a996a);const _0x5ab1e1=await sales_return[_0x2e08bd(0xf2)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x2e08bd(0xfc),'payable_to_customer':0x1}}]);console[_0x2e08bd(0x102)](_0x5ab1e1);if(_0x5a996a[0x0][_0x2e08bd(0x101)]==_0x2e08bd(0xd6)){var _0x5c14ec=users[_0x2e08bd(0xf1)];console['log'](_0x5c14ec);}else{if(_0x5a996a[0x0][_0x2e08bd(0x101)]=='Hindi')var _0x5c14ec=users[_0x2e08bd(0xde)];else{if(_0x5a996a[0x0]['language']==_0x2e08bd(0xd8))var _0x5c14ec=users[_0x2e08bd(0xd8)];else{if(_0x5a996a[0x0][_0x2e08bd(0x101)]==_0x2e08bd(0xfd))var _0x5c14ec=users[_0x2e08bd(0xfd)];else{if(_0x5a996a[0x0]['language']==_0x2e08bd(0xe2))var _0x5c14ec=users[_0x2e08bd(0xe2)];else{if(_0x5a996a[0x0][_0x2e08bd(0x101)]==_0x2e08bd(0xd7))var _0x5c14ec=users[_0x2e08bd(0xf9)];else{if(_0x5a996a[0x0][_0x2e08bd(0x101)]==_0x2e08bd(0xcc))var _0x5c14ec=users['Chinese'];else{if(_0x5a996a[0x0][_0x2e08bd(0x101)]==_0x2e08bd(0xd9))var _0x5c14ec=users[_0x2e08bd(0xda)];}}}}}}}_0x449c90[_0x2e08bd(0xcf)](_0x2e08bd(0xe6),{'success':_0x3ac75b[_0x2e08bd(0xf8)](_0x2e08bd(0xd5)),'errors':_0x3ac75b['flash']('errors'),'role':_0x599993,'profile':_0x5128aa,'master_shop':_0x5a996a,'alldata':_0x5ab1e1,'language':_0x5c14ec});}catch(_0x347327){console['log'](_0x347327);}}),router['get']('/adjustment',auth,async(_0x4ef534,_0x12592c)=>{var _0x2a3d24=a0_0x185f65;try{const {username:_0x585f77,email:_0x47b8b2,role:_0x4afb97}=_0x4ef534[_0x2a3d24(0xee)],_0x9d80fb=_0x4ef534[_0x2a3d24(0xee)],_0x333cca=await profile['findOne']({'email':_0x9d80fb['email']}),_0x5843df=await master_shop['find']();console[_0x2a3d24(0x102)]('master',_0x5843df);const _0x24c831=await adjustment[_0x2a3d24(0xe5)]();console[_0x2a3d24(0x102)](_0x24c831);if(_0x5843df[0x0]['language']=='English\x20(US)'){var _0x2f3e6e=users[_0x2a3d24(0xf1)];console['log'](_0x2f3e6e);}else{if(_0x5843df[0x0][_0x2a3d24(0x101)]==_0x2a3d24(0xde))var _0x2f3e6e=users[_0x2a3d24(0xde)];else{if(_0x5843df[0x0][_0x2a3d24(0x101)]=='German')var _0x2f3e6e=users[_0x2a3d24(0xd8)];else{if(_0x5843df[0x0][_0x2a3d24(0x101)]=='Spanish')var _0x2f3e6e=users['Spanish'];else{if(_0x5843df[0x0][_0x2a3d24(0x101)]==_0x2a3d24(0xe2))var _0x2f3e6e=users[_0x2a3d24(0xe2)];else{if(_0x5843df[0x0]['language']==_0x2a3d24(0xd7))var _0x2f3e6e=users[_0x2a3d24(0xf9)];else{if(_0x5843df[0x0][_0x2a3d24(0x101)]==_0x2a3d24(0xcc))var _0x2f3e6e=users['Chinese'];else{if(_0x5843df[0x0]['language']==_0x2a3d24(0xd9))var _0x2f3e6e=users[_0x2a3d24(0xda)];}}}}}}}_0x12592c[_0x2a3d24(0xcf)](_0x2a3d24(0xed),{'success':_0x4ef534[_0x2a3d24(0xf8)]('success'),'errors':_0x4ef534[_0x2a3d24(0xf8)](_0x2a3d24(0xf3)),'role':_0x9d80fb,'profile':_0x333cca,'master_shop':_0x5843df,'alldata':_0x24c831,'language':_0x2f3e6e});}catch(_0xf71ef1){console[_0x2a3d24(0x102)](_0xf71ef1);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xd2),auth,async(_0xe50a95,_0xf28c7)=>{var _0x4a5f32=a0_0x185f65;try{const {username:_0xb0586c,email:_0x263473,role:_0x5744ba}=_0xe50a95['user'],_0xc57498=_0xe50a95['user'],_0x5d43c8=await profile[_0x4a5f32(0xeb)]({'email':_0xc57498[_0x4a5f32(0xdb)]}),_0x37e3f=await master_shop[_0x4a5f32(0xe5)]();console['log'](_0x4a5f32(0xec),_0x37e3f);const _0x16266c=await transfers[_0x4a5f32(0xe5)]();console['log'](_0x16266c);if(_0x37e3f[0x0][_0x4a5f32(0x101)]==_0x4a5f32(0xd6)){var _0x1578f=users[_0x4a5f32(0xf1)];console['log'](_0x1578f);}else{if(_0x37e3f[0x0][_0x4a5f32(0x101)]==_0x4a5f32(0xde))var _0x1578f=users[_0x4a5f32(0xde)];else{if(_0x37e3f[0x0][_0x4a5f32(0x101)]==_0x4a5f32(0xd8))var _0x1578f=users['German'];else{if(_0x37e3f[0x0]['language']==_0x4a5f32(0xfd))var _0x1578f=users[_0x4a5f32(0xfd)];else{if(_0x37e3f[0x0]['language']==_0x4a5f32(0xe2))var _0x1578f=users[_0x4a5f32(0xe2)];else{if(_0x37e3f[0x0][_0x4a5f32(0x101)]==_0x4a5f32(0xd7))var _0x1578f=users['Portuguese'];else{if(_0x37e3f[0x0]['language']=='Chinese')var _0x1578f=users[_0x4a5f32(0xcc)];else{if(_0x37e3f[0x0][_0x4a5f32(0x101)]==_0x4a5f32(0xd9))var _0x1578f=users[_0x4a5f32(0xda)];}}}}}}}_0xf28c7[_0x4a5f32(0xcf)](_0x4a5f32(0xff),{'success':_0xe50a95['flash'](_0x4a5f32(0xd5)),'errors':_0xe50a95[_0x4a5f32(0xf8)](_0x4a5f32(0xf3)),'role':_0xc57498,'profile':_0x5d43c8,'master_shop':_0x37e3f,'alldata':_0x16266c,'language':_0x1578f});}catch(_0x940c7b){console[_0x4a5f32(0x102)](_0x940c7b);}}),router[a0_0x185f65(0xcd)](a0_0x185f65(0xe0),auth,async(_0x5ba6bb,_0x23e3dc)=>{var _0x908ecc=a0_0x185f65;try{const {username:_0xa37335,email:_0x109e82,role:_0x1b1ab2}=_0x5ba6bb[_0x908ecc(0xee)],_0x3a744b=_0x5ba6bb['user'],_0x1e12b9=await profile[_0x908ecc(0xeb)]({'email':_0x3a744b[_0x908ecc(0xdb)]}),_0x3dd3fe=await master_shop[_0x908ecc(0xe5)]();console[_0x908ecc(0x102)]('master',_0x3dd3fe);const _0x2e8419=await all_expenses[_0x908ecc(0xe5)]();console[_0x908ecc(0x102)](_0x2e8419);if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xd6)){var _0x460b6a=users[_0x908ecc(0xf1)];console[_0x908ecc(0x102)](_0x460b6a);}else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xde))var _0x460b6a=users[_0x908ecc(0xde)];else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xd8))var _0x460b6a=users[_0x908ecc(0xd8)];else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xfd))var _0x460b6a=users['Spanish'];else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xe2))var _0x460b6a=users[_0x908ecc(0xe2)];else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xd7))var _0x460b6a=users[_0x908ecc(0xf9)];else{if(_0x3dd3fe[0x0][_0x908ecc(0x101)]==_0x908ecc(0xcc))var _0x460b6a=users[_0x908ecc(0xcc)];else{if(_0x3dd3fe[0x0]['language']=='Arabic\x20(ae)')var _0x460b6a=users[_0x908ecc(0xda)];}}}}}}}_0x23e3dc[_0x908ecc(0xcf)]('expense_report',{'success':_0x5ba6bb[_0x908ecc(0xf8)](_0x908ecc(0xd5)),'errors':_0x5ba6bb['flash'](_0x908ecc(0xf3)),'role':_0x3a744b,'profile':_0x1e12b9,'master_shop':_0x3dd3fe,'alldata':_0x2e8419,'language':_0x460b6a});}catch(_0x2e7756){console['log'](_0x2e7756);}}),module[a0_0x185f65(0xe1)]=router;