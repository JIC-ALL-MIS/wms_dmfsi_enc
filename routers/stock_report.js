function a0_0x4e6b(){var _0x1dc5d4=['Arabic','5525900wgQIIO','exports','log','post','$product_docs.unit','findOne','10872169wsWemE','Hindi','/view','$product_details.product_stock','$product_details','1357668BbRHah','body','name','French','English','99HRICkJ','German','318211VJQyXe','$product_details.product_name','warehouse_data','/Reports','errors','English\x20(US)','$product_docs.category','master','product_details.bin_name','product_docs','products','Chinese','Finished\x20Goods','raw','get','Portuguese','status','Portuguese\x20(BR)','aggregate','/view/warehouse/:id','json','product_data','Arabic\x20(ae)','user','../public/language/languages.json','ssd','2IJmYCP','language','Spanish','/Reports_product','success','flash','$product_docs.brand','6989340uQjytI','522128LYdfng','product_details.rak_name','All','params','find','1627353YgVePA','stock_report','render','$product_docs','Raw\x20Materials','role_data'];a0_0x4e6b=function(){return _0x1dc5d4;};return a0_0x4e6b();}var a0_0x31e206=a0_0x5dc7;(function(_0x4a02c8,_0x536b69){var _0x2ea8de=a0_0x5dc7,_0x41b3cf=_0x4a02c8();while(!![]){try{var _0x1eac7d=-parseInt(_0x2ea8de(0x170))/0x1*(parseInt(_0x2ea8de(0x14a))/0x2)+parseInt(_0x2ea8de(0x157))/0x3+parseInt(_0x2ea8de(0x15e))/0x4+parseInt(_0x2ea8de(0x151))/0x5+parseInt(_0x2ea8de(0x169))/0x6+-parseInt(_0x2ea8de(0x164))/0x7+-parseInt(_0x2ea8de(0x152))/0x8*(parseInt(_0x2ea8de(0x16e))/0x9);if(_0x1eac7d===_0x536b69)break;else _0x41b3cf['push'](_0x41b3cf['shift']());}catch(_0x16e50e){_0x41b3cf['push'](_0x41b3cf['shift']());}}}(a0_0x4e6b,0xea130));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x31e206(0x148));function a0_0x5dc7(_0x15bb71,_0x22db77){var _0x4e6b9b=a0_0x4e6b();return a0_0x5dc7=function(_0x5dc791,_0x378b3a){_0x5dc791=_0x5dc791-0x141;var _0x129c9d=_0x4e6b9b[_0x5dc791];return _0x129c9d;},a0_0x5dc7(_0x15bb71,_0x22db77);}router[a0_0x31e206(0x17e)](a0_0x31e206(0x166),auth,async(_0x3822f,_0x41093b)=>{var _0x11e2e3=a0_0x31e206;try{const _0x126938=_0x3822f[_0x11e2e3(0x147)];console['log'](_0x11e2e3(0x15c),_0x3822f[_0x11e2e3(0x147)]);const _0x4b50cf=await profile['findOne']({'email':_0x126938['email']}),_0x120879=await master_shop['find']();console['log'](_0x11e2e3(0x177),_0x120879);const _0x50b016=await warehouse[_0x11e2e3(0x156)]({}),_0x258118=await product[_0x11e2e3(0x156)]({});if(_0x120879[0x0][_0x11e2e3(0x14b)]=='English\x20(US)'){var _0x2ee21f=users[_0x11e2e3(0x16d)];console[_0x11e2e3(0x160)](_0x2ee21f);}else{if(_0x120879[0x0][_0x11e2e3(0x14b)]==_0x11e2e3(0x165))var _0x2ee21f=users['Hindi'];else{if(_0x120879[0x0]['language']==_0x11e2e3(0x16f))var _0x2ee21f=users[_0x11e2e3(0x16f)];else{if(_0x120879[0x0][_0x11e2e3(0x14b)]==_0x11e2e3(0x14c))var _0x2ee21f=users['Spanish'];else{if(_0x120879[0x0]['language']==_0x11e2e3(0x16c))var _0x2ee21f=users[_0x11e2e3(0x16c)];else{if(_0x120879[0x0][_0x11e2e3(0x14b)]==_0x11e2e3(0x141))var _0x2ee21f=users['Portuguese'];else{if(_0x120879[0x0][_0x11e2e3(0x14b)]==_0x11e2e3(0x17b))var _0x2ee21f=users[_0x11e2e3(0x17b)];else{if(_0x120879[0x0][_0x11e2e3(0x14b)]==_0x11e2e3(0x146))var _0x2ee21f=users['Arabic'];}}}}}}}_0x41093b[_0x11e2e3(0x159)](_0x11e2e3(0x158),{'success':_0x3822f[_0x11e2e3(0x14f)](_0x11e2e3(0x14e)),'errors':_0x3822f[_0x11e2e3(0x14f)](_0x11e2e3(0x174)),'role':_0x126938,'profile':_0x4b50cf,'master_shop':_0x120879,'warehouse':_0x50b016,'product':_0x258118,'warehouse_doc':[],'product_doc':[],'language':_0x2ee21f});}catch(_0x4cff8b){console[_0x11e2e3(0x160)](_0x4cff8b);}}),router[a0_0x31e206(0x17e)]('/view/:id',auth,async(_0x2480c4,_0x27b4a4)=>{var _0xece919=a0_0x31e206;try{const _0x1ca7a4=await master_shop[_0xece919(0x156)]();console[_0xece919(0x160)](_0xece919(0x177),_0x1ca7a4);if(_0x2480c4[_0xece919(0x155)]['id']=='warehouse'){const _0x4e71d6=await warehouse[_0xece919(0x156)]();console[_0xece919(0x160)](_0x4e71d6);if(_0x1ca7a4[0x0]['language']=='English\x20(US)'){var _0x3e9c2f=users[_0xece919(0x16d)];console['log'](_0x3e9c2f);}else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x165))var _0x3e9c2f=users['Hindi'];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x16f))var _0x3e9c2f=users[_0xece919(0x16f)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]=='Spanish')var _0x3e9c2f=users[_0xece919(0x14c)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x16c))var _0x3e9c2f=users[_0xece919(0x16c)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x141))var _0x3e9c2f=users[_0xece919(0x17f)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]=='Chinese')var _0x3e9c2f=users['Chinese'];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]=='Arabic\x20(ae)')var _0x3e9c2f=users[_0xece919(0x15d)];}}}}}}}_0x27b4a4['status'](0xc8)['json']({'data':_0x4e71d6,'language':_0x3e9c2f['warehouse']});}else{const _0x173a36=await product[_0xece919(0x156)]();console['log']('111',_0x173a36);if(_0x1ca7a4[0x0]['language']=='English\x20(US)'){var _0x3e9c2f=users[_0xece919(0x16d)];console[_0xece919(0x160)](_0x3e9c2f);}else{if(_0x1ca7a4[0x0]['language']==_0xece919(0x165))var _0x3e9c2f=users[_0xece919(0x165)];else{if(_0x1ca7a4[0x0]['language']==_0xece919(0x16f))var _0x3e9c2f=users[_0xece919(0x16f)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x14c))var _0x3e9c2f=users[_0xece919(0x14c)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x16c))var _0x3e9c2f=users[_0xece919(0x16c)];else{if(_0x1ca7a4[0x0][_0xece919(0x14b)]==_0xece919(0x141))var _0x3e9c2f=users[_0xece919(0x17f)];else{if(_0x1ca7a4[0x0]['language']==_0xece919(0x17b))var _0x3e9c2f=users[_0xece919(0x17b)];else{if(_0x1ca7a4[0x0]['language']==_0xece919(0x146))var _0x3e9c2f=users[_0xece919(0x15d)];}}}}}}}_0x27b4a4[_0xece919(0x180)](0xc8)['json']({'data':_0x173a36,'language':_0x3e9c2f[_0xece919(0x17a)]});}}catch(_0x155e00){console[_0xece919(0x160)](_0x155e00);}}),router[a0_0x31e206(0x17e)](a0_0x31e206(0x143),auth,async(_0x17e3b0,_0x390570)=>{var _0x5a4c43=a0_0x31e206;try{const _0x5c893f=_0x17e3b0[_0x5a4c43(0x155)]['id'];console['log'](_0x5c893f);const _0x3509f3=await master_shop['find']();console[_0x5a4c43(0x160)](_0x5a4c43(0x177),_0x3509f3);const _0x4629e2=await warehouse['aggregate']([{'$match':{'name':_0x5c893f}},{'$unwind':_0x5a4c43(0x168)},{'$lookup':{'from':_0x5a4c43(0x17a),'localField':'product_details.product_name','foreignField':_0x5a4c43(0x16b),'as':_0x5a4c43(0x179)}},{'$unwind':_0x5a4c43(0x15a)},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x5a4c43(0x167),'category':_0x5a4c43(0x176),'brand':_0x5a4c43(0x150),'sku':'$product_docs.sku','unit':_0x5a4c43(0x162),'rak':_0x5a4c43(0x153),'bin':_0x5a4c43(0x178)}}]);console[_0x5a4c43(0x160)](_0x4629e2);if(_0x3509f3[0x0][_0x5a4c43(0x14b)]==_0x5a4c43(0x175)){var _0x226df4=users[_0x5a4c43(0x16d)];console['log'](_0x226df4);}else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]==_0x5a4c43(0x165))var _0x226df4=users['Hindi'];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]==_0x5a4c43(0x16f))var _0x226df4=users[_0x5a4c43(0x16f)];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]==_0x5a4c43(0x14c))var _0x226df4=users[_0x5a4c43(0x14c)];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]=='French')var _0x226df4=users['French'];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]=='Portuguese\x20(BR)')var _0x226df4=users[_0x5a4c43(0x17f)];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]=='Chinese')var _0x226df4=users[_0x5a4c43(0x17b)];else{if(_0x3509f3[0x0][_0x5a4c43(0x14b)]==_0x5a4c43(0x146))var _0x226df4=users[_0x5a4c43(0x15d)];}}}}}}}_0x390570[_0x5a4c43(0x180)](0xc8)[_0x5a4c43(0x144)]({'data':_0x4629e2,'language':_0x226df4});}catch(_0x306d33){console[_0x5a4c43(0x160)](_0x306d33);}}),router[a0_0x31e206(0x17e)]('/view/product/:id',auth,async(_0x595641,_0x55a726)=>{var _0x3af888=a0_0x31e206;try{const _0x4388e0=_0x595641[_0x3af888(0x155)]['id'];console[_0x3af888(0x160)](_0x4388e0);const _0x58d784=await master_shop[_0x3af888(0x156)]();console[_0x3af888(0x160)]('master',_0x58d784);const _0x280af0=await product[_0x3af888(0x163)]({'name':_0x4388e0});console[_0x3af888(0x160)](_0x3af888(0x145),_0x280af0);const _0x34c116=await warehouse[_0x3af888(0x142)]([{'$unwind':_0x3af888(0x168)},{'$match':{'product_details.product_name':_0x4388e0}},{'$project':{'name':0x1,'product_name':_0x3af888(0x171),'product_stock':_0x3af888(0x167)}}]);console[_0x3af888(0x160)](_0x3af888(0x172),_0x34c116);if(_0x58d784[0x0][_0x3af888(0x14b)]==_0x3af888(0x175)){var _0x4fb0f6=users[_0x3af888(0x16d)];console[_0x3af888(0x160)](_0x4fb0f6);}else{if(_0x58d784[0x0][_0x3af888(0x14b)]==_0x3af888(0x165))var _0x4fb0f6=users[_0x3af888(0x165)];else{if(_0x58d784[0x0][_0x3af888(0x14b)]==_0x3af888(0x16f))var _0x4fb0f6=users[_0x3af888(0x16f)];else{if(_0x58d784[0x0][_0x3af888(0x14b)]==_0x3af888(0x14c))var _0x4fb0f6=users['Spanish'];else{if(_0x58d784[0x0][_0x3af888(0x14b)]==_0x3af888(0x16c))var _0x4fb0f6=users[_0x3af888(0x16c)];else{if(_0x58d784[0x0]['language']==_0x3af888(0x141))var _0x4fb0f6=users[_0x3af888(0x17f)];else{if(_0x58d784[0x0]['language']==_0x3af888(0x17b))var _0x4fb0f6=users[_0x3af888(0x17b)];else{if(_0x58d784[0x0]['language']==_0x3af888(0x146))var _0x4fb0f6=users[_0x3af888(0x15d)];}}}}}}}_0x55a726[_0x3af888(0x180)](0xc8)['json']({'product_data':_0x280af0,'warehouse_data':_0x34c116,'language':_0x4fb0f6});}catch(_0x2fd9c4){console[_0x3af888(0x160)](_0x2fd9c4);}}),router[a0_0x31e206(0x161)](a0_0x31e206(0x173),async(_0x8ef44,_0x37d045)=>{var _0x395d6d=a0_0x31e206;const {warehouseNew:_0x14a6c5,rooms:_0x4193ea,Type:_0x18addb,process_cat:_0x3bc79b,room_cat:_0x23825a}=_0x8ef44[_0x395d6d(0x16a)];let _0x49a8fe;console[_0x395d6d(0x160)](_0x8ef44[_0x395d6d(0x16a)]);if(_0x3bc79b==_0x395d6d(0x17d))_0x49a8fe=await warehouse[_0x395d6d(0x142)]([{'$match':{'name':_0x14a6c5,'room':_0x4193ea,'warehouse_category':_0x395d6d(0x15b)}},{'$unwind':_0x395d6d(0x168)},{'$match':{'product_details.type':_0x18addb,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x3bc79b=='finish'?_0x4193ea==_0x395d6d(0x154)?_0x49a8fe=await warehouse['aggregate']([{'$match':{'name':_0x14a6c5,'warehouse_category':_0x395d6d(0x17c)}},{'$unwind':_0x395d6d(0x168)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x49a8fe=await warehouse[_0x395d6d(0x142)]([{'$match':{'name':_0x14a6c5,'room':_0x4193ea,'warehouse_category':_0x395d6d(0x17c)}},{'$unwind':_0x395d6d(0x168)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x395d6d(0x160)](_0x395d6d(0x149)),Include=[{'$unwind':'$product_details'},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x49a8fe=await warehouse[_0x395d6d(0x142)](Include));_0x37d045[_0x395d6d(0x144)](_0x49a8fe);}),router['post'](a0_0x31e206(0x14d),async(_0x33e544,_0x47cd25)=>{var _0x50b757=a0_0x31e206;const {warehouseNew:_0x47121f,rooms:_0x1fac10,Type:_0x538b35,process_cat:_0x18bde3,room_cat:_0x476505}=_0x33e544[_0x50b757(0x16a)],_0x52d17a=await product[_0x50b757(0x156)]();_0x47cd25[_0x50b757(0x144)](_0x52d17a);}),module[a0_0x31e206(0x15f)]=router;