var a0_0x3175a1=a0_0x1730;(function(_0x1742fb,_0x2c2150){var _0x764324=a0_0x1730,_0x424655=_0x1742fb();while(!![]){try{var _0x3cdb27=-parseInt(_0x764324(0xfc))/0x1+parseInt(_0x764324(0xcb))/0x2+-parseInt(_0x764324(0xdd))/0x3+parseInt(_0x764324(0xfa))/0x4+-parseInt(_0x764324(0xcc))/0x5+-parseInt(_0x764324(0xf2))/0x6*(-parseInt(_0x764324(0xf6))/0x7)+parseInt(_0x764324(0xf7))/0x8*(parseInt(_0x764324(0xc8))/0x9);if(_0x3cdb27===_0x2c2150)break;else _0x424655['push'](_0x424655['shift']());}catch(_0x240f38){_0x424655['push'](_0x424655['shift']());}}}(a0_0x3f39,0xe69ac));function a0_0x3f39(){var _0x1de0c4=['find','sales_report','/purchase_return','purchases_return_report','errors','Portuguese\x20(BR)','findOne','purchases_report','sales_return_report','/transfer','render','product_report','transfer_report','../middleware/auth','7337280HoECnG','success','/adjustment','user','7ZVWhSa','112qVaJAj','$return_product.product_name','German','5322944jvGLep','Arabic\x20(ae)','265788bReiUp','Portuguese','725157Vrdobq','$product.product_name','adjustment_report','671762yDVRDq','5870350VGKmqT','exports','aggregate','/product','French','get','/supplier','master','Spanish','email','Arabic','English','/customer','purchases\x20report','Hindi','Router','Chinese','4899315JbTWfT','flash','express','log','English\x20(US)','language','/sale'];a0_0x3f39=function(){return _0x1de0c4;};return a0_0x3f39();}function a0_0x1730(_0x29d16c,_0x4eba59){var _0x3f397c=a0_0x3f39();return a0_0x1730=function(_0x1730aa,_0x1cda9b){_0x1730aa=_0x1730aa-0xc8;var _0x42854d=_0x3f397c[_0x1730aa];return _0x42854d;},a0_0x1730(_0x29d16c,_0x4eba59);}const express=require(a0_0x3175a1(0xdf)),app=express(),router=express[a0_0x3175a1(0xdb)](),{profile,master_shop,product,customer,suppliers,purchases,purchases_return,sales,sales_return,adjustment,transfers,all_expenses}=require('../models/all_models'),auth=require(a0_0x3175a1(0xf1)),users=require('../public/language/languages.json');router[a0_0x3175a1(0xd1)](a0_0x3175a1(0xcf),auth,async(_0x16c67a,_0x3c7597)=>{var _0x612174=a0_0x3175a1;try{const {username:_0x5c5a20,email:_0x554a05,role:_0x2d88ec}=_0x16c67a[_0x612174(0xf5)],_0x289011=_0x16c67a[_0x612174(0xf5)],_0x4de701=await profile[_0x612174(0xea)]({'email':_0x289011[_0x612174(0xd5)]}),_0x1e46a2=await master_shop[_0x612174(0xe4)]();console[_0x612174(0xe0)](_0x612174(0xd3),_0x1e46a2);const _0x60c956=await product[_0x612174(0xe4)]();console['log'](_0x60c956);if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xe1)){var _0x38686f=users[_0x612174(0xd7)];console[_0x612174(0xe0)](_0x38686f);}else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xda))var _0x38686f=users[_0x612174(0xda)];else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xf9))var _0x38686f=users['German'];else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xd4))var _0x38686f=users[_0x612174(0xd4)];else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xd0))var _0x38686f=users[_0x612174(0xd0)];else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xe9))var _0x38686f=users['Portuguese'];else{if(_0x1e46a2[0x0]['language']==_0x612174(0xdc))var _0x38686f=users['Chinese'];else{if(_0x1e46a2[0x0][_0x612174(0xe2)]==_0x612174(0xfb))var _0x38686f=users[_0x612174(0xd6)];}}}}}}}_0x3c7597[_0x612174(0xee)](_0x612174(0xef),{'success':_0x16c67a['flash']('success'),'errors':_0x16c67a['flash'](_0x612174(0xe8)),'role':_0x289011,'profile':_0x4de701,'master_shop':_0x1e46a2,'alldata':_0x60c956,'language':_0x38686f});}catch(_0x439c23){console[_0x612174(0xe0)](_0x439c23);}}),router[a0_0x3175a1(0xd1)](a0_0x3175a1(0xd8),auth,async(_0xf6bcc6,_0x1bcd4e)=>{var _0x35bbc7=a0_0x3175a1;try{const {username:_0x395904,email:_0x5c1ed5,role:_0x328449}=_0xf6bcc6[_0x35bbc7(0xf5)],_0x47ba94=_0xf6bcc6[_0x35bbc7(0xf5)],_0x87403d=await profile[_0x35bbc7(0xea)]({'email':_0x47ba94[_0x35bbc7(0xd5)]}),_0x127097=await master_shop[_0x35bbc7(0xe4)]();console[_0x35bbc7(0xe0)]('master',_0x127097);const _0x245441=await customer[_0x35bbc7(0xe4)]();console[_0x35bbc7(0xe0)](_0x245441);if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xe1)){var _0x39da47=users[_0x35bbc7(0xd7)];console[_0x35bbc7(0xe0)](_0x39da47);}else{if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xda))var _0x39da47=users['Hindi'];else{if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xf9))var _0x39da47=users[_0x35bbc7(0xf9)];else{if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xd4))var _0x39da47=users[_0x35bbc7(0xd4)];else{if(_0x127097[0x0]['language']==_0x35bbc7(0xd0))var _0x39da47=users['French'];else{if(_0x127097[0x0]['language']==_0x35bbc7(0xe9))var _0x39da47=users[_0x35bbc7(0xfd)];else{if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xdc))var _0x39da47=users[_0x35bbc7(0xdc)];else{if(_0x127097[0x0][_0x35bbc7(0xe2)]==_0x35bbc7(0xfb))var _0x39da47=users[_0x35bbc7(0xd6)];}}}}}}}_0x1bcd4e[_0x35bbc7(0xee)]('customer_report',{'success':_0xf6bcc6[_0x35bbc7(0xde)](_0x35bbc7(0xf3)),'errors':_0xf6bcc6[_0x35bbc7(0xde)](_0x35bbc7(0xe8)),'role':_0x47ba94,'profile':_0x87403d,'master_shop':_0x127097,'alldata':_0x245441,'language':_0x39da47});}catch(_0x2e89f7){console[_0x35bbc7(0xe0)](_0x2e89f7);}}),router[a0_0x3175a1(0xd1)](a0_0x3175a1(0xd2),auth,async(_0x1fa32c,_0x1b5063)=>{var _0x458e5a=a0_0x3175a1;try{const {username:_0x593d9b,email:_0x4dc047,role:_0x505e72}=_0x1fa32c[_0x458e5a(0xf5)],_0x5e65df=_0x1fa32c[_0x458e5a(0xf5)],_0x3bf88a=await profile[_0x458e5a(0xea)]({'email':_0x5e65df[_0x458e5a(0xd5)]}),_0x5bdffd=await master_shop[_0x458e5a(0xe4)]();console[_0x458e5a(0xe0)](_0x458e5a(0xd3),_0x5bdffd);const _0xc2d1dc=await suppliers[_0x458e5a(0xe4)]();console[_0x458e5a(0xe0)](_0xc2d1dc);if(_0x5bdffd[0x0]['language']==_0x458e5a(0xe1)){var _0x3aa9c6=users[_0x458e5a(0xd7)];console[_0x458e5a(0xe0)](_0x3aa9c6);}else{if(_0x5bdffd[0x0][_0x458e5a(0xe2)]==_0x458e5a(0xda))var _0x3aa9c6=users[_0x458e5a(0xda)];else{if(_0x5bdffd[0x0][_0x458e5a(0xe2)]==_0x458e5a(0xf9))var _0x3aa9c6=users[_0x458e5a(0xf9)];else{if(_0x5bdffd[0x0]['language']==_0x458e5a(0xd4))var _0x3aa9c6=users[_0x458e5a(0xd4)];else{if(_0x5bdffd[0x0][_0x458e5a(0xe2)]=='French')var _0x3aa9c6=users[_0x458e5a(0xd0)];else{if(_0x5bdffd[0x0][_0x458e5a(0xe2)]==_0x458e5a(0xe9))var _0x3aa9c6=users[_0x458e5a(0xfd)];else{if(_0x5bdffd[0x0][_0x458e5a(0xe2)]=='Chinese')var _0x3aa9c6=users[_0x458e5a(0xdc)];else{if(_0x5bdffd[0x0]['language']==_0x458e5a(0xfb))var _0x3aa9c6=users[_0x458e5a(0xd6)];}}}}}}}_0x1b5063['render']('supplier_report',{'success':_0x1fa32c['flash']('success'),'errors':_0x1fa32c[_0x458e5a(0xde)](_0x458e5a(0xe8)),'role':_0x5e65df,'profile':_0x3bf88a,'master_shop':_0x5bdffd,'alldata':_0xc2d1dc,'language':_0x3aa9c6});}catch(_0x11b742){console[_0x458e5a(0xe0)](_0x11b742);}}),router[a0_0x3175a1(0xd1)]('/purchases',auth,async(_0x37843c,_0xdd91d5)=>{var _0x4e9908=a0_0x3175a1;try{const {username:_0x110e7b,email:_0xfa7f7a,role:_0x5112a4}=_0x37843c[_0x4e9908(0xf5)],_0x21bf96=_0x37843c[_0x4e9908(0xf5)],_0x43a23d=await profile[_0x4e9908(0xea)]({'email':_0x21bf96[_0x4e9908(0xd5)]}),_0x289d75=await master_shop['find']();console[_0x4e9908(0xe0)](_0x4e9908(0xd3),_0x289d75);const _0xc370b7=await purchases['aggregate']([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x4e9908(0xc9),'payable':0x1}}]);console[_0x4e9908(0xe0)](_0x4e9908(0xd9),_0xc370b7);if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xe1)){var _0x42c36f=users[_0x4e9908(0xd7)];console[_0x4e9908(0xe0)](_0x42c36f);}else{if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xda))var _0x42c36f=users[_0x4e9908(0xda)];else{if(_0x289d75[0x0]['language']==_0x4e9908(0xf9))var _0x42c36f=users['German'];else{if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xd4))var _0x42c36f=users[_0x4e9908(0xd4)];else{if(_0x289d75[0x0]['language']==_0x4e9908(0xd0))var _0x42c36f=users[_0x4e9908(0xd0)];else{if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xe9))var _0x42c36f=users[_0x4e9908(0xfd)];else{if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xdc))var _0x42c36f=users[_0x4e9908(0xdc)];else{if(_0x289d75[0x0][_0x4e9908(0xe2)]==_0x4e9908(0xfb))var _0x42c36f=users[_0x4e9908(0xd6)];}}}}}}}_0xdd91d5[_0x4e9908(0xee)](_0x4e9908(0xeb),{'success':_0x37843c[_0x4e9908(0xde)](_0x4e9908(0xf3)),'errors':_0x37843c[_0x4e9908(0xde)]('errors'),'role':_0x21bf96,'profile':_0x43a23d,'master_shop':_0x289d75,'alldata':_0xc370b7,'language':_0x42c36f});}catch(_0x2b9bb7){console[_0x4e9908(0xe0)](_0x2b9bb7);}}),router['get'](a0_0x3175a1(0xe6),auth,async(_0x15e3c7,_0x2dd5c9)=>{var _0x4e193c=a0_0x3175a1;try{const {username:_0x19a406,email:_0x14db3d,role:_0x500e11}=_0x15e3c7['user'],_0x198230=_0x15e3c7['user'],_0x89ae4=await profile['findOne']({'email':_0x198230[_0x4e193c(0xd5)]}),_0x26e6fe=await master_shop[_0x4e193c(0xe4)]();console[_0x4e193c(0xe0)]('master',_0x26e6fe);const _0x15e308=await purchases_return[_0x4e193c(0xce)]([{'$project':{'invoice':0x1,'date':0x1,'suppliers':0x1,'warehouse_name':0x1,'product_name':_0x4e193c(0xf8),'receivable':0x1}}]);console[_0x4e193c(0xe0)](_0x4e193c(0xe7),_0x15e308);if(_0x26e6fe[0x0][_0x4e193c(0xe2)]=='English\x20(US)'){var _0x3fd2e9=users[_0x4e193c(0xd7)];console[_0x4e193c(0xe0)](_0x3fd2e9);}else{if(_0x26e6fe[0x0][_0x4e193c(0xe2)]==_0x4e193c(0xda))var _0x3fd2e9=users['Hindi'];else{if(_0x26e6fe[0x0][_0x4e193c(0xe2)]==_0x4e193c(0xf9))var _0x3fd2e9=users[_0x4e193c(0xf9)];else{if(_0x26e6fe[0x0][_0x4e193c(0xe2)]=='Spanish')var _0x3fd2e9=users[_0x4e193c(0xd4)];else{if(_0x26e6fe[0x0]['language']==_0x4e193c(0xd0))var _0x3fd2e9=users[_0x4e193c(0xd0)];else{if(_0x26e6fe[0x0][_0x4e193c(0xe2)]=='Portuguese\x20(BR)')var _0x3fd2e9=users[_0x4e193c(0xfd)];else{if(_0x26e6fe[0x0][_0x4e193c(0xe2)]==_0x4e193c(0xdc))var _0x3fd2e9=users['Chinese'];else{if(_0x26e6fe[0x0]['language']=='Arabic\x20(ae)')var _0x3fd2e9=users['Arabic'];}}}}}}}_0x2dd5c9[_0x4e193c(0xee)]('purchases_return_report',{'success':_0x15e3c7[_0x4e193c(0xde)](_0x4e193c(0xf3)),'errors':_0x15e3c7[_0x4e193c(0xde)](_0x4e193c(0xe8)),'role':_0x198230,'profile':_0x89ae4,'master_shop':_0x26e6fe,'alldata':_0x15e308,'language':_0x3fd2e9});}catch(_0x14db68){console[_0x4e193c(0xe0)](_0x14db68);}}),router[a0_0x3175a1(0xd1)](a0_0x3175a1(0xe3),auth,async(_0x177604,_0x4ad71e)=>{var _0xd824db=a0_0x3175a1;try{const {username:_0x82646a,email:_0x3d1203,role:_0x3ec3bc}=_0x177604[_0xd824db(0xf5)],_0x2574f9=_0x177604[_0xd824db(0xf5)],_0x10c753=await profile['findOne']({'email':_0x2574f9[_0xd824db(0xd5)]}),_0x1a21cd=await master_shop[_0xd824db(0xe4)]();console['log']('master',_0x1a21cd);const _0x4629f7=await sales[_0xd824db(0xce)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':'$sale_product.product_name','receivable_amount':0x1}}]);console[_0xd824db(0xe0)](_0x4629f7);if(_0x1a21cd[0x0]['language']==_0xd824db(0xe1)){var _0x1a08b1=users[_0xd824db(0xd7)];console[_0xd824db(0xe0)](_0x1a08b1);}else{if(_0x1a21cd[0x0][_0xd824db(0xe2)]=='Hindi')var _0x1a08b1=users[_0xd824db(0xda)];else{if(_0x1a21cd[0x0]['language']==_0xd824db(0xf9))var _0x1a08b1=users[_0xd824db(0xf9)];else{if(_0x1a21cd[0x0][_0xd824db(0xe2)]==_0xd824db(0xd4))var _0x1a08b1=users[_0xd824db(0xd4)];else{if(_0x1a21cd[0x0][_0xd824db(0xe2)]==_0xd824db(0xd0))var _0x1a08b1=users[_0xd824db(0xd0)];else{if(_0x1a21cd[0x0][_0xd824db(0xe2)]==_0xd824db(0xe9))var _0x1a08b1=users['Portuguese'];else{if(_0x1a21cd[0x0]['language']==_0xd824db(0xdc))var _0x1a08b1=users[_0xd824db(0xdc)];else{if(_0x1a21cd[0x0][_0xd824db(0xe2)]==_0xd824db(0xfb))var _0x1a08b1=users[_0xd824db(0xd6)];}}}}}}}_0x4ad71e[_0xd824db(0xee)](_0xd824db(0xe5),{'success':_0x177604[_0xd824db(0xde)](_0xd824db(0xf3)),'errors':_0x177604[_0xd824db(0xde)]('errors'),'role':_0x2574f9,'profile':_0x10c753,'master_shop':_0x1a21cd,'alldata':_0x4629f7,'language':_0x1a08b1});}catch(_0x1cdee8){console['log'](_0x1cdee8);}}),router[a0_0x3175a1(0xd1)]('/sale_return',auth,async(_0x2ff355,_0x2b0821)=>{var _0x505780=a0_0x3175a1;try{const {username:_0x11d63e,email:_0x280e91,role:_0x5ca896}=_0x2ff355['user'],_0x309694=_0x2ff355[_0x505780(0xf5)],_0x2be420=await profile[_0x505780(0xea)]({'email':_0x309694[_0x505780(0xd5)]}),_0x350f4a=await master_shop[_0x505780(0xe4)]();console[_0x505780(0xe0)](_0x505780(0xd3),_0x350f4a);const _0x2cf223=await sales_return[_0x505780(0xce)]([{'$project':{'invoice':0x1,'date':0x1,'customer':0x1,'warehouse_name':0x1,'product_name':'$return_sale.product_name','payable_to_customer':0x1}}]);console[_0x505780(0xe0)](_0x2cf223);if(_0x350f4a[0x0][_0x505780(0xe2)]=='English\x20(US)'){var _0x1e9333=users[_0x505780(0xd7)];console['log'](_0x1e9333);}else{if(_0x350f4a[0x0][_0x505780(0xe2)]=='Hindi')var _0x1e9333=users[_0x505780(0xda)];else{if(_0x350f4a[0x0][_0x505780(0xe2)]==_0x505780(0xf9))var _0x1e9333=users[_0x505780(0xf9)];else{if(_0x350f4a[0x0][_0x505780(0xe2)]==_0x505780(0xd4))var _0x1e9333=users[_0x505780(0xd4)];else{if(_0x350f4a[0x0][_0x505780(0xe2)]=='French')var _0x1e9333=users[_0x505780(0xd0)];else{if(_0x350f4a[0x0][_0x505780(0xe2)]=='Portuguese\x20(BR)')var _0x1e9333=users[_0x505780(0xfd)];else{if(_0x350f4a[0x0][_0x505780(0xe2)]==_0x505780(0xdc))var _0x1e9333=users['Chinese'];else{if(_0x350f4a[0x0][_0x505780(0xe2)]==_0x505780(0xfb))var _0x1e9333=users[_0x505780(0xd6)];}}}}}}}_0x2b0821[_0x505780(0xee)](_0x505780(0xec),{'success':_0x2ff355[_0x505780(0xde)](_0x505780(0xf3)),'errors':_0x2ff355[_0x505780(0xde)](_0x505780(0xe8)),'role':_0x309694,'profile':_0x2be420,'master_shop':_0x350f4a,'alldata':_0x2cf223,'language':_0x1e9333});}catch(_0x56abed){console[_0x505780(0xe0)](_0x56abed);}}),router['get'](a0_0x3175a1(0xf4),auth,async(_0x497d39,_0x385d48)=>{var _0xf79ff7=a0_0x3175a1;try{const {username:_0x132924,email:_0x1f4366,role:_0xcd77df}=_0x497d39['user'],_0x2fa4cc=_0x497d39[_0xf79ff7(0xf5)],_0x429de3=await profile[_0xf79ff7(0xea)]({'email':_0x2fa4cc[_0xf79ff7(0xd5)]}),_0x1943f0=await master_shop[_0xf79ff7(0xe4)]();console[_0xf79ff7(0xe0)](_0xf79ff7(0xd3),_0x1943f0);const _0x2f96ad=await adjustment[_0xf79ff7(0xe4)]();console['log'](_0x2f96ad);if(_0x1943f0[0x0][_0xf79ff7(0xe2)]=='English\x20(US)'){var _0x4b7722=users[_0xf79ff7(0xd7)];console[_0xf79ff7(0xe0)](_0x4b7722);}else{if(_0x1943f0[0x0]['language']==_0xf79ff7(0xda))var _0x4b7722=users['Hindi'];else{if(_0x1943f0[0x0][_0xf79ff7(0xe2)]=='German')var _0x4b7722=users[_0xf79ff7(0xf9)];else{if(_0x1943f0[0x0][_0xf79ff7(0xe2)]==_0xf79ff7(0xd4))var _0x4b7722=users['Spanish'];else{if(_0x1943f0[0x0][_0xf79ff7(0xe2)]==_0xf79ff7(0xd0))var _0x4b7722=users[_0xf79ff7(0xd0)];else{if(_0x1943f0[0x0][_0xf79ff7(0xe2)]=='Portuguese\x20(BR)')var _0x4b7722=users[_0xf79ff7(0xfd)];else{if(_0x1943f0[0x0][_0xf79ff7(0xe2)]==_0xf79ff7(0xdc))var _0x4b7722=users[_0xf79ff7(0xdc)];else{if(_0x1943f0[0x0]['language']==_0xf79ff7(0xfb))var _0x4b7722=users[_0xf79ff7(0xd6)];}}}}}}}_0x385d48[_0xf79ff7(0xee)](_0xf79ff7(0xca),{'success':_0x497d39[_0xf79ff7(0xde)](_0xf79ff7(0xf3)),'errors':_0x497d39[_0xf79ff7(0xde)](_0xf79ff7(0xe8)),'role':_0x2fa4cc,'profile':_0x429de3,'master_shop':_0x1943f0,'alldata':_0x2f96ad,'language':_0x4b7722});}catch(_0x28d260){console['log'](_0x28d260);}}),router[a0_0x3175a1(0xd1)](a0_0x3175a1(0xed),auth,async(_0x2f977e,_0x5827b0)=>{var _0x3c05c9=a0_0x3175a1;try{const {username:_0x4e07b0,email:_0x1c1d09,role:_0x253097}=_0x2f977e[_0x3c05c9(0xf5)],_0x50e032=_0x2f977e[_0x3c05c9(0xf5)],_0x18b4eb=await profile[_0x3c05c9(0xea)]({'email':_0x50e032[_0x3c05c9(0xd5)]}),_0x460f9e=await master_shop['find']();console[_0x3c05c9(0xe0)](_0x3c05c9(0xd3),_0x460f9e);const _0x4bf8ce=await transfers[_0x3c05c9(0xe4)]();console[_0x3c05c9(0xe0)](_0x4bf8ce);if(_0x460f9e[0x0][_0x3c05c9(0xe2)]==_0x3c05c9(0xe1)){var _0x2d6fa2=users[_0x3c05c9(0xd7)];console[_0x3c05c9(0xe0)](_0x2d6fa2);}else{if(_0x460f9e[0x0][_0x3c05c9(0xe2)]==_0x3c05c9(0xda))var _0x2d6fa2=users[_0x3c05c9(0xda)];else{if(_0x460f9e[0x0]['language']==_0x3c05c9(0xf9))var _0x2d6fa2=users[_0x3c05c9(0xf9)];else{if(_0x460f9e[0x0][_0x3c05c9(0xe2)]==_0x3c05c9(0xd4))var _0x2d6fa2=users[_0x3c05c9(0xd4)];else{if(_0x460f9e[0x0]['language']==_0x3c05c9(0xd0))var _0x2d6fa2=users[_0x3c05c9(0xd0)];else{if(_0x460f9e[0x0]['language']==_0x3c05c9(0xe9))var _0x2d6fa2=users['Portuguese'];else{if(_0x460f9e[0x0]['language']==_0x3c05c9(0xdc))var _0x2d6fa2=users['Chinese'];else{if(_0x460f9e[0x0][_0x3c05c9(0xe2)]==_0x3c05c9(0xfb))var _0x2d6fa2=users[_0x3c05c9(0xd6)];}}}}}}}_0x5827b0[_0x3c05c9(0xee)](_0x3c05c9(0xf0),{'success':_0x2f977e[_0x3c05c9(0xde)](_0x3c05c9(0xf3)),'errors':_0x2f977e[_0x3c05c9(0xde)]('errors'),'role':_0x50e032,'profile':_0x18b4eb,'master_shop':_0x460f9e,'alldata':_0x4bf8ce,'language':_0x2d6fa2});}catch(_0x5585df){console['log'](_0x5585df);}}),router['get']('/expense',auth,async(_0x2786e2,_0x4fed63)=>{var _0xd7b1f2=a0_0x3175a1;try{const {username:_0x2de718,email:_0x31640c,role:_0x5a15cb}=_0x2786e2[_0xd7b1f2(0xf5)],_0x3f0482=_0x2786e2[_0xd7b1f2(0xf5)],_0x57ffec=await profile[_0xd7b1f2(0xea)]({'email':_0x3f0482['email']}),_0xdb7120=await master_shop[_0xd7b1f2(0xe4)]();console['log']('master',_0xdb7120);const _0x8f77c8=await all_expenses[_0xd7b1f2(0xe4)]();console[_0xd7b1f2(0xe0)](_0x8f77c8);if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]==_0xd7b1f2(0xe1)){var _0x1d3177=users[_0xd7b1f2(0xd7)];console[_0xd7b1f2(0xe0)](_0x1d3177);}else{if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]==_0xd7b1f2(0xda))var _0x1d3177=users[_0xd7b1f2(0xda)];else{if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]=='German')var _0x1d3177=users['German'];else{if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]=='Spanish')var _0x1d3177=users['Spanish'];else{if(_0xdb7120[0x0]['language']==_0xd7b1f2(0xd0))var _0x1d3177=users[_0xd7b1f2(0xd0)];else{if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]==_0xd7b1f2(0xe9))var _0x1d3177=users['Portuguese'];else{if(_0xdb7120[0x0][_0xd7b1f2(0xe2)]=='Chinese')var _0x1d3177=users[_0xd7b1f2(0xdc)];else{if(_0xdb7120[0x0]['language']==_0xd7b1f2(0xfb))var _0x1d3177=users[_0xd7b1f2(0xd6)];}}}}}}}_0x4fed63[_0xd7b1f2(0xee)]('expense_report',{'success':_0x2786e2[_0xd7b1f2(0xde)](_0xd7b1f2(0xf3)),'errors':_0x2786e2['flash'](_0xd7b1f2(0xe8)),'role':_0x3f0482,'profile':_0x57ffec,'master_shop':_0xdb7120,'alldata':_0x8f77c8,'language':_0x1d3177});}catch(_0x470f65){console['log'](_0x470f65);}}),module[a0_0x3175a1(0xcd)]=router;