var a0_0x1b3851=a0_0x1175;(function(_0x3b8e04,_0x221351){var _0x2410d2=a0_0x1175,_0x6122a5=_0x3b8e04();while(!![]){try{var _0x404f6b=parseInt(_0x2410d2(0x11f))/0x1+-parseInt(_0x2410d2(0x122))/0x2*(parseInt(_0x2410d2(0x106))/0x3)+-parseInt(_0x2410d2(0x112))/0x4*(-parseInt(_0x2410d2(0x121))/0x5)+parseInt(_0x2410d2(0x138))/0x6+-parseInt(_0x2410d2(0x132))/0x7*(-parseInt(_0x2410d2(0x128))/0x8)+parseInt(_0x2410d2(0x10d))/0x9*(-parseInt(_0x2410d2(0x12d))/0xa)+-parseInt(_0x2410d2(0x13d))/0xb;if(_0x404f6b===_0x221351)break;else _0x6122a5['push'](_0x6122a5['shift']());}catch(_0x330a4b){_0x6122a5['push'](_0x6122a5['shift']());}}}(a0_0x1dad,0x4b6cb));function a0_0x1dad(){var _0x40fedf=['find','render','German','Arabic','$sale_product.product_name','480GkKcmx','flash','/transfer','French','/product','3114130PuossI','/supplier','master','log','$product.product_name','71771bZzpBv','sales_report','/sale','purchases_report','../models/all_models','product_report','2545602anZpFn','$return_product.product_name','/adjustment','purchases\x20report','Arabic\x20(ae)','10253859iREASI','Spanish','user','English\x20(US)','get','language','9TpQdoR','../middleware/auth','purchases_return_report','aggregate','English','Router','email','9Nlaezl','/purchases','adjustment_report','Portuguese\x20(BR)','/customer','164GlwLgR','exports','Hindi','success','Portuguese','/expense','transfer_report','customer_report','express','errors','expense_report','findOne','Chinese','230473SkZHJP','../public/language/languages.json','60910zPdUny','144574hjxUKO'];a0_0x1dad=function(){return _0x40fedf;};return a0_0x1dad();}const express=require(a0_0x1b3851(0x11a)),app=express(),router=express[a0_0x1b3851(0x10b)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require(a0_0x1b3851(0x136)),auth=require(a0_0x1b3851(0x107)),users=require(a0_0x1b3851(0x120));function a0_0x1175(_0x5a5194,_0x2f209d){var _0x1dadaa=a0_0x1dad();return a0_0x1175=function(_0x117545,_0x35e72d){_0x117545=_0x117545-0x103;var _0x318da5=_0x1dadaa[_0x117545];return _0x318da5;},a0_0x1175(_0x5a5194,_0x2f209d);}router[a0_0x1b3851(0x104)](a0_0x1b3851(0x12c),auth,async(_0x4a3236,_0x4a705f)=>{var _0x49b97d=a0_0x1b3851;try{const {username:_0x32bf49,email:_0x450c5e,role:_0x115574}=_0x4a3236[_0x49b97d(0x13f)],_0x7e6632=_0x4a3236['user'],_0x433358=await profile[_0x49b97d(0x11d)]({'email':_0x7e6632[_0x49b97d(0x10c)]}),_0x404f4d=await master_shop['find']();console[_0x49b97d(0x130)](_0x49b97d(0x12f),_0x404f4d);const _0x29d6dc=await product[_0x49b97d(0x123)]();console[_0x49b97d(0x130)](_0x29d6dc);if(_0x404f4d[0x0][_0x49b97d(0x105)]==_0x49b97d(0x103)){var _0x340abc=users[_0x49b97d(0x10a)];console[_0x49b97d(0x130)](_0x340abc);}else{if(_0x404f4d[0x0]['language']==_0x49b97d(0x114))var _0x340abc=users[_0x49b97d(0x114)];else{if(_0x404f4d[0x0][_0x49b97d(0x105)]==_0x49b97d(0x125))var _0x340abc=users['German'];else{if(_0x404f4d[0x0]['language']==_0x49b97d(0x13e))var _0x340abc=users[_0x49b97d(0x13e)];else{if(_0x404f4d[0x0][_0x49b97d(0x105)]=='French')var _0x340abc=users['French'];else{if(_0x404f4d[0x0][_0x49b97d(0x105)]==_0x49b97d(0x110))var _0x340abc=users['Portuguese'];else{if(_0x404f4d[0x0][_0x49b97d(0x105)]=='Chinese')var _0x340abc=users[_0x49b97d(0x11e)];else{if(_0x404f4d[0x0][_0x49b97d(0x105)]==_0x49b97d(0x13c))var _0x340abc=users['Arabic'];}}}}}}}_0x4a705f[_0x49b97d(0x124)](_0x49b97d(0x137),{'success':_0x4a3236[_0x49b97d(0x129)](_0x49b97d(0x115)),'errors':_0x4a3236[_0x49b97d(0x129)]('errors'),'role':_0x7e6632,'profile':_0x433358,'master_shop':_0x404f4d,'alldata':_0x29d6dc,'language':_0x340abc});}catch(_0x359d02){console['log'](_0x359d02);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x111),auth,async(_0x5ecb64,_0xc6a0eb)=>{var _0x42668e=a0_0x1b3851;try{const {username:_0x4c2c54,email:_0x155ee1,role:_0x307889}=_0x5ecb64[_0x42668e(0x13f)],_0x15ed98=_0x5ecb64[_0x42668e(0x13f)],_0x365606=await profile[_0x42668e(0x11d)]({'email':_0x15ed98[_0x42668e(0x10c)]}),_0x49f7bc=await master_shop[_0x42668e(0x123)]();console[_0x42668e(0x130)](_0x42668e(0x12f),_0x49f7bc);const _0x5ba137=await customer[_0x42668e(0x123)]();console[_0x42668e(0x130)](_0x5ba137);if(_0x49f7bc[0x0][_0x42668e(0x105)]==_0x42668e(0x103)){var _0x1dee04=users['English'];console[_0x42668e(0x130)](_0x1dee04);}else{if(_0x49f7bc[0x0][_0x42668e(0x105)]==_0x42668e(0x114))var _0x1dee04=users[_0x42668e(0x114)];else{if(_0x49f7bc[0x0][_0x42668e(0x105)]==_0x42668e(0x125))var _0x1dee04=users['German'];else{if(_0x49f7bc[0x0][_0x42668e(0x105)]=='Spanish')var _0x1dee04=users[_0x42668e(0x13e)];else{if(_0x49f7bc[0x0][_0x42668e(0x105)]==_0x42668e(0x12b))var _0x1dee04=users[_0x42668e(0x12b)];else{if(_0x49f7bc[0x0][_0x42668e(0x105)]==_0x42668e(0x110))var _0x1dee04=users[_0x42668e(0x116)];else{if(_0x49f7bc[0x0]['language']==_0x42668e(0x11e))var _0x1dee04=users[_0x42668e(0x11e)];else{if(_0x49f7bc[0x0][_0x42668e(0x105)]=='Arabic\x20(ae)')var _0x1dee04=users[_0x42668e(0x126)];}}}}}}}_0xc6a0eb[_0x42668e(0x124)](_0x42668e(0x119),{'success':_0x5ecb64[_0x42668e(0x129)]('success'),'errors':_0x5ecb64['flash'](_0x42668e(0x11b)),'role':_0x15ed98,'profile':_0x365606,'master_shop':_0x49f7bc,'alldata':_0x5ba137,'language':_0x1dee04});}catch(_0xd92aed){console[_0x42668e(0x130)](_0xd92aed);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x12e),auth,async(_0x3d722c,_0x29342e)=>{var _0x2aef5f=a0_0x1b3851;try{const {username:_0x58fac0,email:_0x82018c,role:_0x2c7af6}=_0x3d722c[_0x2aef5f(0x13f)],_0x395844=_0x3d722c['user'],_0x4a0087=await profile[_0x2aef5f(0x11d)]({'email':_0x395844[_0x2aef5f(0x10c)]}),_0x12a7ad=await master_shop[_0x2aef5f(0x123)]();console['log'](_0x2aef5f(0x12f),_0x12a7ad);const _0x1d3106=await suppliers[_0x2aef5f(0x123)]();console[_0x2aef5f(0x130)](_0x1d3106);if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x103)){var _0xb211ca=users[_0x2aef5f(0x10a)];console[_0x2aef5f(0x130)](_0xb211ca);}else{if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x114))var _0xb211ca=users[_0x2aef5f(0x114)];else{if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x125))var _0xb211ca=users['German'];else{if(_0x12a7ad[0x0]['language']==_0x2aef5f(0x13e))var _0xb211ca=users[_0x2aef5f(0x13e)];else{if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x12b))var _0xb211ca=users[_0x2aef5f(0x12b)];else{if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x110))var _0xb211ca=users['Portuguese'];else{if(_0x12a7ad[0x0][_0x2aef5f(0x105)]==_0x2aef5f(0x11e))var _0xb211ca=users[_0x2aef5f(0x11e)];else{if(_0x12a7ad[0x0]['language']=='Arabic\x20(ae)')var _0xb211ca=users[_0x2aef5f(0x126)];}}}}}}}_0x29342e[_0x2aef5f(0x124)]('supplier_report',{'success':_0x3d722c[_0x2aef5f(0x129)]('success'),'errors':_0x3d722c[_0x2aef5f(0x129)](_0x2aef5f(0x11b)),'role':_0x395844,'profile':_0x4a0087,'master_shop':_0x12a7ad,'alldata':_0x1d3106,'language':_0xb211ca});}catch(_0x262ef9){console['log'](_0x262ef9);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x10e),auth,async(_0xcb2a5e,_0x27dd5f)=>{var _0x17cb46=a0_0x1b3851;try{const {username:_0x238423,email:_0x24380c,role:_0x304531}=_0xcb2a5e[_0x17cb46(0x13f)],_0x43b6c6=_0xcb2a5e[_0x17cb46(0x13f)],_0x49d428=await profile[_0x17cb46(0x11d)]({'email':_0x43b6c6[_0x17cb46(0x10c)]}),_0x810f5d=await master_shop[_0x17cb46(0x123)]();console[_0x17cb46(0x130)]('master',_0x810f5d);const _0x382157=await purchases[_0x17cb46(0x109)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x17cb46(0x131),'payable':0x1}}]);console[_0x17cb46(0x130)](_0x17cb46(0x13b),_0x382157);if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x103)){var _0x30f3d9=users[_0x17cb46(0x10a)];console[_0x17cb46(0x130)](_0x30f3d9);}else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x114))var _0x30f3d9=users[_0x17cb46(0x114)];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x125))var _0x30f3d9=users['German'];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]=='Spanish')var _0x30f3d9=users['Spanish'];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x12b))var _0x30f3d9=users[_0x17cb46(0x12b)];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x110))var _0x30f3d9=users[_0x17cb46(0x116)];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x11e))var _0x30f3d9=users[_0x17cb46(0x11e)];else{if(_0x810f5d[0x0][_0x17cb46(0x105)]==_0x17cb46(0x13c))var _0x30f3d9=users[_0x17cb46(0x126)];}}}}}}}_0x27dd5f['render'](_0x17cb46(0x135),{'success':_0xcb2a5e[_0x17cb46(0x129)](_0x17cb46(0x115)),'errors':_0xcb2a5e[_0x17cb46(0x129)](_0x17cb46(0x11b)),'role':_0x43b6c6,'profile':_0x49d428,'master_shop':_0x810f5d,'alldata':_0x382157,'language':_0x30f3d9});}catch(_0xdb46f0){console[_0x17cb46(0x130)](_0xdb46f0);}}),router[a0_0x1b3851(0x104)]('/purchase_return',auth,async(_0x670f2a,_0x28f11b)=>{var _0xc1c043=a0_0x1b3851;try{const {username:_0xe6708e,email:_0x27388a,role:_0x19cae8}=_0x670f2a[_0xc1c043(0x13f)],_0x4a7db7=_0x670f2a[_0xc1c043(0x13f)],_0x4e093a=await profile['findOne']({'email':_0x4a7db7['email']}),_0xa61bf8=await master_shop[_0xc1c043(0x123)]();console[_0xc1c043(0x130)](_0xc1c043(0x12f),_0xa61bf8);const _0x10b143=await purchases_return['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0xc1c043(0x139),'receivable':0x1}}]);console['log'](_0xc1c043(0x108),_0x10b143);if(_0xa61bf8[0x0][_0xc1c043(0x105)]=='English\x20(US)'){var _0x41ec8a=users[_0xc1c043(0x10a)];console[_0xc1c043(0x130)](_0x41ec8a);}else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]=='Hindi')var _0x41ec8a=users[_0xc1c043(0x114)];else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]==_0xc1c043(0x125))var _0x41ec8a=users['German'];else{if(_0xa61bf8[0x0]['language']==_0xc1c043(0x13e))var _0x41ec8a=users[_0xc1c043(0x13e)];else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]==_0xc1c043(0x12b))var _0x41ec8a=users[_0xc1c043(0x12b)];else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]==_0xc1c043(0x110))var _0x41ec8a=users['Portuguese'];else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]==_0xc1c043(0x11e))var _0x41ec8a=users[_0xc1c043(0x11e)];else{if(_0xa61bf8[0x0][_0xc1c043(0x105)]==_0xc1c043(0x13c))var _0x41ec8a=users[_0xc1c043(0x126)];}}}}}}}_0x28f11b['render'](_0xc1c043(0x108),{'success':_0x670f2a[_0xc1c043(0x129)](_0xc1c043(0x115)),'errors':_0x670f2a[_0xc1c043(0x129)](_0xc1c043(0x11b)),'role':_0x4a7db7,'profile':_0x4e093a,'master_shop':_0xa61bf8,'alldata':_0x10b143,'language':_0x41ec8a});}catch(_0x5cfe84){console['log'](_0x5cfe84);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x134),auth,async(_0x5004ea,_0x44e786)=>{var _0x226689=a0_0x1b3851;try{const {username:_0x1f2d78,email:_0x435cc7,role:_0x22873b}=_0x5004ea[_0x226689(0x13f)],_0x1a9dc4=_0x5004ea[_0x226689(0x13f)],_0x39877e=await profile[_0x226689(0x11d)]({'email':_0x1a9dc4['email']}),_0x238927=await master_shop[_0x226689(0x123)]();console[_0x226689(0x130)]('master',_0x238927);const _0xbe4ce8=await sales['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':_0x226689(0x127),'receivable_amount':0x1}}]);console[_0x226689(0x130)](_0xbe4ce8);if(_0x238927[0x0]['language']=='English\x20(US)'){var _0x14968b=users[_0x226689(0x10a)];console[_0x226689(0x130)](_0x14968b);}else{if(_0x238927[0x0][_0x226689(0x105)]=='Hindi')var _0x14968b=users[_0x226689(0x114)];else{if(_0x238927[0x0]['language']==_0x226689(0x125))var _0x14968b=users[_0x226689(0x125)];else{if(_0x238927[0x0][_0x226689(0x105)]=='Spanish')var _0x14968b=users[_0x226689(0x13e)];else{if(_0x238927[0x0]['language']==_0x226689(0x12b))var _0x14968b=users[_0x226689(0x12b)];else{if(_0x238927[0x0][_0x226689(0x105)]=='Portuguese\x20(BR)')var _0x14968b=users[_0x226689(0x116)];else{if(_0x238927[0x0][_0x226689(0x105)]==_0x226689(0x11e))var _0x14968b=users['Chinese'];else{if(_0x238927[0x0][_0x226689(0x105)]==_0x226689(0x13c))var _0x14968b=users[_0x226689(0x126)];}}}}}}}_0x44e786[_0x226689(0x124)](_0x226689(0x133),{'success':_0x5004ea[_0x226689(0x129)]('success'),'errors':_0x5004ea[_0x226689(0x129)](_0x226689(0x11b)),'role':_0x1a9dc4,'profile':_0x39877e,'master_shop':_0x238927,'alldata':_0xbe4ce8,'language':_0x14968b});}catch(_0x25375e){console['log'](_0x25375e);}}),router[a0_0x1b3851(0x104)]('/sale_return',auth,async(_0xabeb25,_0xfddb05)=>{var _0x14b71d=a0_0x1b3851;try{const {username:_0x320cfa,email:_0x11173f,role:_0x15733c}=_0xabeb25[_0x14b71d(0x13f)],_0x4dabdb=_0xabeb25['user'],_0x4c663c=await profile[_0x14b71d(0x11d)]({'email':_0x4dabdb[_0x14b71d(0x10c)]}),_0x58b900=await master_shop[_0x14b71d(0x123)]();console[_0x14b71d(0x130)]('master',_0x58b900);const _0x2006e6=await sales_return[_0x14b71d(0x109)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':'$return_sale.product_name','payable_to_customer':0x1}}]);console[_0x14b71d(0x130)](_0x2006e6);if(_0x58b900[0x0][_0x14b71d(0x105)]=='English\x20(US)'){var _0x81bb09=users[_0x14b71d(0x10a)];console[_0x14b71d(0x130)](_0x81bb09);}else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x114))var _0x81bb09=users[_0x14b71d(0x114)];else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x125))var _0x81bb09=users[_0x14b71d(0x125)];else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x13e))var _0x81bb09=users['Spanish'];else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x12b))var _0x81bb09=users[_0x14b71d(0x12b)];else{if(_0x58b900[0x0][_0x14b71d(0x105)]=='Portuguese\x20(BR)')var _0x81bb09=users[_0x14b71d(0x116)];else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x11e))var _0x81bb09=users['Chinese'];else{if(_0x58b900[0x0][_0x14b71d(0x105)]==_0x14b71d(0x13c))var _0x81bb09=users[_0x14b71d(0x126)];}}}}}}}_0xfddb05[_0x14b71d(0x124)]('sales_return_report',{'success':_0xabeb25['flash']('success'),'errors':_0xabeb25[_0x14b71d(0x129)](_0x14b71d(0x11b)),'role':_0x4dabdb,'profile':_0x4c663c,'master_shop':_0x58b900,'alldata':_0x2006e6,'language':_0x81bb09});}catch(_0x2b523f){console[_0x14b71d(0x130)](_0x2b523f);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x13a),auth,async(_0x2eeb96,_0x5c7787)=>{var _0x27f069=a0_0x1b3851;try{const {username:_0x5e4480,email:_0x1a8f32,role:_0xab3a43}=_0x2eeb96[_0x27f069(0x13f)],_0x488137=_0x2eeb96[_0x27f069(0x13f)],_0x4f6f3b=await profile[_0x27f069(0x11d)]({'email':_0x488137[_0x27f069(0x10c)]}),_0x285a2a=await master_shop['find']();console[_0x27f069(0x130)](_0x27f069(0x12f),_0x285a2a);const _0x543f34=await adjustment[_0x27f069(0x123)]();console[_0x27f069(0x130)](_0x543f34);if(_0x285a2a[0x0][_0x27f069(0x105)]==_0x27f069(0x103)){var _0x103641=users[_0x27f069(0x10a)];console[_0x27f069(0x130)](_0x103641);}else{if(_0x285a2a[0x0][_0x27f069(0x105)]=='Hindi')var _0x103641=users[_0x27f069(0x114)];else{if(_0x285a2a[0x0]['language']=='German')var _0x103641=users[_0x27f069(0x125)];else{if(_0x285a2a[0x0][_0x27f069(0x105)]==_0x27f069(0x13e))var _0x103641=users[_0x27f069(0x13e)];else{if(_0x285a2a[0x0][_0x27f069(0x105)]==_0x27f069(0x12b))var _0x103641=users[_0x27f069(0x12b)];else{if(_0x285a2a[0x0][_0x27f069(0x105)]==_0x27f069(0x110))var _0x103641=users[_0x27f069(0x116)];else{if(_0x285a2a[0x0][_0x27f069(0x105)]==_0x27f069(0x11e))var _0x103641=users['Chinese'];else{if(_0x285a2a[0x0]['language']=='Arabic\x20(ae)')var _0x103641=users['Arabic'];}}}}}}}_0x5c7787[_0x27f069(0x124)](_0x27f069(0x10f),{'success':_0x2eeb96[_0x27f069(0x129)](_0x27f069(0x115)),'errors':_0x2eeb96[_0x27f069(0x129)](_0x27f069(0x11b)),'role':_0x488137,'profile':_0x4f6f3b,'master_shop':_0x285a2a,'alldata':_0x543f34,'language':_0x103641});}catch(_0x2c7b1a){console[_0x27f069(0x130)](_0x2c7b1a);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x12a),auth,async(_0x303c4b,_0x6fa74b)=>{var _0x45f08c=a0_0x1b3851;try{const {username:_0xdf0b8c,email:_0xa57aa0,role:_0x2cdb72}=_0x303c4b[_0x45f08c(0x13f)],_0x7c8fe8=_0x303c4b[_0x45f08c(0x13f)],_0x4cce10=await profile['findOne']({'email':_0x7c8fe8['email']}),_0x220a39=await master_shop['find']();console['log'](_0x45f08c(0x12f),_0x220a39);const _0x73a8be=await transfers[_0x45f08c(0x123)]();console['log'](_0x73a8be);if(_0x220a39[0x0]['language']=='English\x20(US)'){var _0x39e26a=users[_0x45f08c(0x10a)];console['log'](_0x39e26a);}else{if(_0x220a39[0x0]['language']==_0x45f08c(0x114))var _0x39e26a=users['Hindi'];else{if(_0x220a39[0x0][_0x45f08c(0x105)]==_0x45f08c(0x125))var _0x39e26a=users['German'];else{if(_0x220a39[0x0]['language']==_0x45f08c(0x13e))var _0x39e26a=users[_0x45f08c(0x13e)];else{if(_0x220a39[0x0][_0x45f08c(0x105)]==_0x45f08c(0x12b))var _0x39e26a=users[_0x45f08c(0x12b)];else{if(_0x220a39[0x0][_0x45f08c(0x105)]=='Portuguese\x20(BR)')var _0x39e26a=users['Portuguese'];else{if(_0x220a39[0x0]['language']==_0x45f08c(0x11e))var _0x39e26a=users[_0x45f08c(0x11e)];else{if(_0x220a39[0x0]['language']=='Arabic\x20(ae)')var _0x39e26a=users[_0x45f08c(0x126)];}}}}}}}_0x6fa74b[_0x45f08c(0x124)](_0x45f08c(0x118),{'success':_0x303c4b[_0x45f08c(0x129)](_0x45f08c(0x115)),'errors':_0x303c4b[_0x45f08c(0x129)]('errors'),'role':_0x7c8fe8,'profile':_0x4cce10,'master_shop':_0x220a39,'alldata':_0x73a8be,'language':_0x39e26a});}catch(_0x1cb2ce){console[_0x45f08c(0x130)](_0x1cb2ce);}}),router[a0_0x1b3851(0x104)](a0_0x1b3851(0x117),auth,async(_0x124de0,_0x5b618f)=>{var _0x2a17b9=a0_0x1b3851;try{const {username:_0x3526c0,email:_0x128a88,role:_0x378e85}=_0x124de0[_0x2a17b9(0x13f)],_0x39c6d4=_0x124de0[_0x2a17b9(0x13f)],_0x326f1f=await profile[_0x2a17b9(0x11d)]({'email':_0x39c6d4[_0x2a17b9(0x10c)]}),_0x49ef77=await master_shop[_0x2a17b9(0x123)]();console[_0x2a17b9(0x130)]('master',_0x49ef77);const _0x192d6c=await all_expenses['find']();console[_0x2a17b9(0x130)](_0x192d6c);if(_0x49ef77[0x0][_0x2a17b9(0x105)]==_0x2a17b9(0x103)){var _0x52ef11=users[_0x2a17b9(0x10a)];console['log'](_0x52ef11);}else{if(_0x49ef77[0x0][_0x2a17b9(0x105)]==_0x2a17b9(0x114))var _0x52ef11=users['Hindi'];else{if(_0x49ef77[0x0]['language']==_0x2a17b9(0x125))var _0x52ef11=users[_0x2a17b9(0x125)];else{if(_0x49ef77[0x0][_0x2a17b9(0x105)]==_0x2a17b9(0x13e))var _0x52ef11=users['Spanish'];else{if(_0x49ef77[0x0]['language']=='French')var _0x52ef11=users[_0x2a17b9(0x12b)];else{if(_0x49ef77[0x0][_0x2a17b9(0x105)]=='Portuguese\x20(BR)')var _0x52ef11=users[_0x2a17b9(0x116)];else{if(_0x49ef77[0x0][_0x2a17b9(0x105)]==_0x2a17b9(0x11e))var _0x52ef11=users[_0x2a17b9(0x11e)];else{if(_0x49ef77[0x0][_0x2a17b9(0x105)]=='Arabic\x20(ae)')var _0x52ef11=users[_0x2a17b9(0x126)];}}}}}}}_0x5b618f[_0x2a17b9(0x124)](_0x2a17b9(0x11c),{'success':_0x124de0[_0x2a17b9(0x129)]('success'),'errors':_0x124de0['flash'](_0x2a17b9(0x11b)),'role':_0x39c6d4,'profile':_0x326f1f,'master_shop':_0x49ef77,'alldata':_0x192d6c,'language':_0x52ef11});}catch(_0xc418d4){console[_0x2a17b9(0x130)](_0xc418d4);}}),module[a0_0x1b3851(0x113)]=router;