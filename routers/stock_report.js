var a0_0x3f3827=a0_0x86df;(function(_0x189eb8,_0x5e1042){var _0x10ffb7=a0_0x86df,_0x441cff=_0x189eb8();while(!![]){try{var _0x547f2d=parseInt(_0x10ffb7(0x7c))/0x1*(-parseInt(_0x10ffb7(0x8b))/0x2)+parseInt(_0x10ffb7(0x97))/0x3*(parseInt(_0x10ffb7(0x9c))/0x4)+parseInt(_0x10ffb7(0xa0))/0x5+-parseInt(_0x10ffb7(0x71))/0x6*(-parseInt(_0x10ffb7(0x9b))/0x7)+parseInt(_0x10ffb7(0x8a))/0x8*(-parseInt(_0x10ffb7(0x75))/0x9)+-parseInt(_0x10ffb7(0xac))/0xa+parseInt(_0x10ffb7(0x80))/0xb*(parseInt(_0x10ffb7(0x78))/0xc);if(_0x547f2d===_0x5e1042)break;else _0x441cff['push'](_0x441cff['shift']());}catch(_0x1206c1){_0x441cff['push'](_0x441cff['shift']());}}}(a0_0x5bb5,0xe00b7));const express=require('express'),app=express(),router=express[a0_0x3f3827(0x99)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0x3f3827(0x7b)),auth=require('../middleware/auth'),users=require(a0_0x3f3827(0xa9));router['get']('/view',auth,async(_0x56ea7c,_0x28290a)=>{var _0x4342de=a0_0x3f3827;try{const _0x353b03=_0x56ea7c[_0x4342de(0x9f)];console[_0x4342de(0xab)](_0x4342de(0x74),_0x56ea7c[_0x4342de(0x9f)]);const _0x1e6292=await profile[_0x4342de(0x8d)]({'email':_0x353b03[_0x4342de(0x9a)]}),_0x27ca25=await master_shop['find']();console[_0x4342de(0xab)](_0x4342de(0x96),_0x27ca25);const _0x2a8e5d=await warehouse['find']({}),_0x277b6a=await product['find']({});if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0xa5)){var _0x1c9ce5=users[_0x4342de(0x86)];console['log'](_0x1c9ce5);}else{if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0xad))var _0x1c9ce5=users[_0x4342de(0xad)];else{if(_0x27ca25[0x0][_0x4342de(0xa2)]=='German')var _0x1c9ce5=users[_0x4342de(0x95)];else{if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0xb5))var _0x1c9ce5=users['Spanish'];else{if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0xb2))var _0x1c9ce5=users['French'];else{if(_0x27ca25[0x0]['language']==_0x4342de(0x72))var _0x1c9ce5=users[_0x4342de(0x90)];else{if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0x87))var _0x1c9ce5=users[_0x4342de(0x87)];else{if(_0x27ca25[0x0][_0x4342de(0xa2)]==_0x4342de(0xa3))var _0x1c9ce5=users[_0x4342de(0xb4)];}}}}}}}_0x28290a['render'](_0x4342de(0xa6),{'success':_0x56ea7c[_0x4342de(0xa8)](_0x4342de(0x92)),'errors':_0x56ea7c['flash'](_0x4342de(0xa4)),'role':_0x353b03,'profile':_0x1e6292,'master_shop':_0x27ca25,'warehouse':_0x2a8e5d,'product':_0x277b6a,'warehouse_doc':[],'product_doc':[],'language':_0x1c9ce5});}catch(_0x401888){console[_0x4342de(0xab)](_0x401888);}}),router[a0_0x3f3827(0xaa)]('/view/:id',auth,async(_0x160f27,_0x49d8cf)=>{var _0x5640ac=a0_0x3f3827;try{const _0x21d693=await master_shop[_0x5640ac(0x8f)]();console['log'](_0x5640ac(0x96),_0x21d693);if(_0x160f27['params']['id']==_0x5640ac(0x83)){const _0x369c28=await warehouse[_0x5640ac(0x8f)]();console[_0x5640ac(0xab)](_0x369c28);if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0xa5)){var _0x5e8355=users[_0x5640ac(0x86)];console['log'](_0x5e8355);}else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0xad))var _0x5e8355=users[_0x5640ac(0xad)];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]=='German')var _0x5e8355=users[_0x5640ac(0x95)];else{if(_0x21d693[0x0]['language']=='Spanish')var _0x5e8355=users[_0x5640ac(0xb5)];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]=='French')var _0x5e8355=users['French'];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]=='Portuguese\x20(BR)')var _0x5e8355=users['Portuguese'];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0x87))var _0x5e8355=users['Chinese'];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0xa3))var _0x5e8355=users['Arabic'];}}}}}}}_0x49d8cf[_0x5640ac(0xa1)](0xc8)[_0x5640ac(0x8c)]({'data':_0x369c28,'language':_0x5e8355[_0x5640ac(0x83)]});}else{const _0x14dd68=await product[_0x5640ac(0x8f)]();console[_0x5640ac(0xab)](_0x5640ac(0xb0),_0x14dd68);if(_0x21d693[0x0][_0x5640ac(0xa2)]=='English\x20(US)'){var _0x5e8355=users[_0x5640ac(0x86)];console[_0x5640ac(0xab)](_0x5e8355);}else{if(_0x21d693[0x0]['language']==_0x5640ac(0xad))var _0x5e8355=users['Hindi'];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0x95))var _0x5e8355=users[_0x5640ac(0x95)];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0xb5))var _0x5e8355=users[_0x5640ac(0xb5)];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]=='French')var _0x5e8355=users[_0x5640ac(0xb2)];else{if(_0x21d693[0x0]['language']==_0x5640ac(0x72))var _0x5e8355=users[_0x5640ac(0x90)];else{if(_0x21d693[0x0]['language']==_0x5640ac(0x87))var _0x5e8355=users[_0x5640ac(0x87)];else{if(_0x21d693[0x0][_0x5640ac(0xa2)]==_0x5640ac(0xa3))var _0x5e8355=users[_0x5640ac(0xb4)];}}}}}}}_0x49d8cf[_0x5640ac(0xa1)](0xc8)[_0x5640ac(0x8c)]({'data':_0x14dd68,'language':_0x5e8355[_0x5640ac(0x8e)]});}}catch(_0x46898c){console[_0x5640ac(0xab)](_0x46898c);}}),router[a0_0x3f3827(0xaa)](a0_0x3f3827(0x6f),auth,async(_0x27f4e7,_0x2a9014)=>{var _0x25eee9=a0_0x3f3827;try{const _0x9b54ea=_0x27f4e7[_0x25eee9(0x77)]['id'];console[_0x25eee9(0xab)](_0x9b54ea);const _0x3c58ea=await master_shop[_0x25eee9(0x8f)]();console[_0x25eee9(0xab)](_0x25eee9(0x96),_0x3c58ea);const _0x95b3ac=await warehouse['aggregate']([{'$match':{'name':_0x9b54ea}},{'$unwind':_0x25eee9(0xb3)},{'$lookup':{'from':_0x25eee9(0x8e),'localField':_0x25eee9(0xae),'foreignField':_0x25eee9(0x79),'as':_0x25eee9(0x88)}},{'$unwind':_0x25eee9(0x7d)},{'$project':{'name':0x1,'product_name':_0x25eee9(0x94),'product_stock':'$product_details.product_stock','category':_0x25eee9(0xa7),'brand':'$product_docs.brand','sku':_0x25eee9(0x84),'unit':'$product_docs.unit','rak':'product_details.rak_name','bin':_0x25eee9(0x82)}}]);console['log'](_0x95b3ac);if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0xa5)){var _0x50ee6a=users[_0x25eee9(0x86)];console[_0x25eee9(0xab)](_0x50ee6a);}else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0xad))var _0x50ee6a=users[_0x25eee9(0xad)];else{if(_0x3c58ea[0x0]['language']==_0x25eee9(0x95))var _0x50ee6a=users[_0x25eee9(0x95)];else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0xb5))var _0x50ee6a=users[_0x25eee9(0xb5)];else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0xb2))var _0x50ee6a=users[_0x25eee9(0xb2)];else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0x72))var _0x50ee6a=users[_0x25eee9(0x90)];else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0x87))var _0x50ee6a=users[_0x25eee9(0x87)];else{if(_0x3c58ea[0x0][_0x25eee9(0xa2)]==_0x25eee9(0xa3))var _0x50ee6a=users[_0x25eee9(0xb4)];}}}}}}}_0x2a9014['status'](0xc8)[_0x25eee9(0x8c)]({'data':_0x95b3ac,'language':_0x50ee6a});}catch(_0x371131){console[_0x25eee9(0xab)](_0x371131);}}),router[a0_0x3f3827(0xaa)](a0_0x3f3827(0x9d),auth,async(_0x50f93f,_0x3d583d)=>{var _0x41ab12=a0_0x3f3827;try{const _0x54ee1a=_0x50f93f[_0x41ab12(0x77)]['id'];console['log'](_0x54ee1a);const _0x21696f=await master_shop[_0x41ab12(0x8f)]();console[_0x41ab12(0xab)](_0x41ab12(0x96),_0x21696f);const _0x29dbb6=await product['findOne']({'name':_0x54ee1a});console[_0x41ab12(0xab)](_0x41ab12(0x91),_0x29dbb6);const _0x35543c=await warehouse['aggregate']([{'$unwind':_0x41ab12(0xb3)},{'$match':{'product_details.product_name':_0x54ee1a}},{'$project':{'name':0x1,'product_name':_0x41ab12(0x94),'product_stock':_0x41ab12(0xb1)}}]);console[_0x41ab12(0xab)](_0x41ab12(0x7e),_0x35543c);if(_0x21696f[0x0][_0x41ab12(0xa2)]==_0x41ab12(0xa5)){var _0x52d79a=users[_0x41ab12(0x86)];console['log'](_0x52d79a);}else{if(_0x21696f[0x0][_0x41ab12(0xa2)]==_0x41ab12(0xad))var _0x52d79a=users[_0x41ab12(0xad)];else{if(_0x21696f[0x0][_0x41ab12(0xa2)]==_0x41ab12(0x95))var _0x52d79a=users[_0x41ab12(0x95)];else{if(_0x21696f[0x0]['language']==_0x41ab12(0xb5))var _0x52d79a=users['Spanish'];else{if(_0x21696f[0x0][_0x41ab12(0xa2)]==_0x41ab12(0xb2))var _0x52d79a=users[_0x41ab12(0xb2)];else{if(_0x21696f[0x0]['language']==_0x41ab12(0x72))var _0x52d79a=users[_0x41ab12(0x90)];else{if(_0x21696f[0x0][_0x41ab12(0xa2)]=='Chinese')var _0x52d79a=users[_0x41ab12(0x87)];else{if(_0x21696f[0x0]['language']=='Arabic\x20(ae)')var _0x52d79a=users[_0x41ab12(0xb4)];}}}}}}}_0x3d583d[_0x41ab12(0xa1)](0xc8)[_0x41ab12(0x8c)]({'product_data':_0x29dbb6,'warehouse_data':_0x35543c,'language':_0x52d79a});}catch(_0x344323){console[_0x41ab12(0xab)](_0x344323);}}),router['post'](a0_0x3f3827(0xaf),async(_0x485cda,_0x6c55e3)=>{var _0x3cb349=a0_0x3f3827;const {warehouseNew:_0x38ce51,rooms:_0x2dc7a8,Type:_0x1f07b6,process_cat:_0x24ee1b,room_cat:_0x35292f}=_0x485cda['body'];let _0x283947;console[_0x3cb349(0xab)](_0x485cda[_0x3cb349(0x81)]);if(_0x24ee1b==_0x3cb349(0x85))_0x283947=await warehouse[_0x3cb349(0x76)]([{'$match':{'name':_0x38ce51,'room':_0x2dc7a8,'warehouse_category':_0x3cb349(0x89)}},{'$unwind':_0x3cb349(0xb3)},{'$match':{'product_details.type':_0x1f07b6,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x24ee1b==_0x3cb349(0x98)?_0x2dc7a8==_0x3cb349(0x7a)?_0x283947=await warehouse[_0x3cb349(0x76)]([{'$match':{'name':_0x38ce51,'warehouse_category':_0x3cb349(0x7f)}},{'$unwind':_0x3cb349(0xb3)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x283947=await warehouse['aggregate']([{'$match':{'name':_0x38ce51,'room':_0x2dc7a8,'warehouse_category':_0x3cb349(0x7f)}},{'$unwind':_0x3cb349(0xb3)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x3cb349(0xab)](_0x3cb349(0x70)),Include=[{'$unwind':_0x3cb349(0xb3)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x283947=await warehouse[_0x3cb349(0x76)](Include));_0x6c55e3[_0x3cb349(0x8c)](_0x283947);}),router[a0_0x3f3827(0x93)](a0_0x3f3827(0x73),async(_0x147015,_0x3f0a7f)=>{var _0x7238ca=a0_0x3f3827;const {warehouseNew:_0x29e573,rooms:_0x4e83bb,Type:_0x3e0c32,process_cat:_0x52994b,room_cat:_0x5d7f17}=_0x147015[_0x7238ca(0x81)],_0x51bd86=await product['find']();_0x3f0a7f[_0x7238ca(0x8c)](_0x51bd86);}),module[a0_0x3f3827(0x9e)]=router;function a0_0x86df(_0x2e1ce7,_0x5b179b){var _0x5bb504=a0_0x5bb5();return a0_0x86df=function(_0x86dfd0,_0x2713ef){_0x86dfd0=_0x86dfd0-0x6f;var _0x5f29d5=_0x5bb504[_0x86dfd0];return _0x5f29d5;},a0_0x86df(_0x2e1ce7,_0x5b179b);}function a0_0x5bb5(){var _0x215034=['../models/all_models','203Tloykl','$product_docs','warehouse_data','Finished\x20Goods','15102164EnZLHF','body','product_details.bin_name','warehouse','$product_docs.sku','raw','English','Chinese','product_docs','Raw\x20Materials','356296ylnRwr','8816AhWGTd','json','findOne','products','find','Portuguese','product_data','success','post','$product_details.product_name','German','master','12aLocSv','finish','Router','email','12080677KNNPuT','908528hJcfKH','/view/product/:id','exports','user','1801955rmbXsn','status','language','Arabic\x20(ae)','errors','English\x20(US)','stock_report','$product_docs.category','flash','../public/language/languages.json','get','log','9072740FYFSat','Hindi','product_details.product_name','/Reports','111','$product_details.product_stock','French','$product_details','Arabic','Spanish','/view/warehouse/:id','ssd','6jNUNdb','Portuguese\x20(BR)','/Reports_product','role_data','333FQAftZ','aggregate','params','12cumQWi','name','All'];a0_0x5bb5=function(){return _0x215034;};return a0_0x5bb5();}