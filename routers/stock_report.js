var a0_0x2b9fd7=a0_0xe47c;function a0_0xe47c(_0x397441,_0x4e4a0b){var _0x2774b6=a0_0x2774();return a0_0xe47c=function(_0xe47ce9,_0x18a398){_0xe47ce9=_0xe47ce9-0xaf;var _0xa19e8=_0x2774b6[_0xe47ce9];return _0xa19e8;},a0_0xe47c(_0x397441,_0x4e4a0b);}(function(_0x3c0fc9,_0x5765f9){var _0x1eff0a=a0_0xe47c,_0x4d4415=_0x3c0fc9();while(!![]){try{var _0x2c8ac7=-parseInt(_0x1eff0a(0xc5))/0x1*(-parseInt(_0x1eff0a(0xcb))/0x2)+-parseInt(_0x1eff0a(0xc1))/0x3+parseInt(_0x1eff0a(0xd4))/0x4+parseInt(_0x1eff0a(0xcc))/0x5+-parseInt(_0x1eff0a(0xc2))/0x6+-parseInt(_0x1eff0a(0xbd))/0x7*(-parseInt(_0x1eff0a(0xcd))/0x8)+-parseInt(_0x1eff0a(0xc9))/0x9*(parseInt(_0x1eff0a(0xbf))/0xa);if(_0x2c8ac7===_0x5765f9)break;else _0x4d4415['push'](_0x4d4415['shift']());}catch(_0x57eef0){_0x4d4415['push'](_0x4d4415['shift']());}}}(a0_0x2774,0xe784e));function a0_0x2774(){var _0x115742=['../public/language/languages.json','Raw\x20Materials','name','Finished\x20Goods','$product_docs.category','post','email','847vnSsVl','role_data','2582070gubqQd','Hindi','295932CYeJRB','10216350divJVU','stock_report','$product_details.product_name','116ISQrvu','$product_docs.brand','/view','$product_details.product_stock','27csIfXg','findOne','16946ZLfcpp','3301065vBYePI','45872Jzomsm','params','ssd','../models/all_models','Chinese','/view/product/:id','../middleware/auth','4749588ZtdUPs','Portuguese','render','body','get','find','Portuguese\x20(BR)','flash','/Reports_product','raw','/view/:id','English','product_data','$product_docs.sku','Arabic\x20(ae)','master','product_details.product_name','Router','aggregate','Spanish','language','Arabic','German','log','status','product_details.bin_name','$product_docs','products','success','product_details.rak_name','French','json','English\x20(US)','express','/view/warehouse/:id','errors','All','$product_details'];a0_0x2774=function(){return _0x115742;};return a0_0x2774();}const express=require(a0_0x2b9fd7(0xb1)),app=express(),router=express[a0_0x2b9fd7(0xe5)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require(a0_0x2b9fd7(0xd0)),auth=require(a0_0x2b9fd7(0xd3)),users=require(a0_0x2b9fd7(0xb6));router[a0_0x2b9fd7(0xd8)](a0_0x2b9fd7(0xc7),auth,async(_0x4eedde,_0x3b4b99)=>{var _0x546870=a0_0x2b9fd7;try{const _0x33869f=_0x4eedde['user'];console[_0x546870(0xeb)](_0x546870(0xbe),_0x4eedde['user']);const _0x1f00d5=await profile[_0x546870(0xca)]({'email':_0x33869f[_0x546870(0xbc)]}),_0xd05d3b=await master_shop[_0x546870(0xd9)]();console[_0x546870(0xeb)](_0x546870(0xe3),_0xd05d3b);const _0x5ae48c=await warehouse['find']({}),_0x32c54a=await product[_0x546870(0xd9)]({});if(_0xd05d3b[0x0][_0x546870(0xe8)]==_0x546870(0xb0)){var _0x39ad81=users['English'];console[_0x546870(0xeb)](_0x39ad81);}else{if(_0xd05d3b[0x0]['language']==_0x546870(0xc0))var _0x39ad81=users[_0x546870(0xc0)];else{if(_0xd05d3b[0x0]['language']=='German')var _0x39ad81=users[_0x546870(0xea)];else{if(_0xd05d3b[0x0][_0x546870(0xe8)]==_0x546870(0xe7))var _0x39ad81=users['Spanish'];else{if(_0xd05d3b[0x0][_0x546870(0xe8)]==_0x546870(0xf2))var _0x39ad81=users[_0x546870(0xf2)];else{if(_0xd05d3b[0x0][_0x546870(0xe8)]==_0x546870(0xda))var _0x39ad81=users[_0x546870(0xd5)];else{if(_0xd05d3b[0x0][_0x546870(0xe8)]==_0x546870(0xd1))var _0x39ad81=users['Chinese'];else{if(_0xd05d3b[0x0]['language']==_0x546870(0xe2))var _0x39ad81=users[_0x546870(0xe9)];}}}}}}}_0x3b4b99[_0x546870(0xd6)](_0x546870(0xc3),{'success':_0x4eedde[_0x546870(0xdb)](_0x546870(0xf0)),'errors':_0x4eedde[_0x546870(0xdb)](_0x546870(0xb3)),'role':_0x33869f,'profile':_0x1f00d5,'master_shop':_0xd05d3b,'warehouse':_0x5ae48c,'product':_0x32c54a,'warehouse_doc':[],'product_doc':[],'language':_0x39ad81});}catch(_0x149f0f){console[_0x546870(0xeb)](_0x149f0f);}}),router[a0_0x2b9fd7(0xd8)](a0_0x2b9fd7(0xde),auth,async(_0x342563,_0x4d9f24)=>{var _0x6dc8b=a0_0x2b9fd7;try{const _0x5124bd=await master_shop['find']();console[_0x6dc8b(0xeb)](_0x6dc8b(0xe3),_0x5124bd);if(_0x342563['params']['id']=='warehouse'){const _0x1e772e=await warehouse[_0x6dc8b(0xd9)]();console['log'](_0x1e772e);if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='English\x20(US)'){var _0x4f032c=users[_0x6dc8b(0xdf)];console[_0x6dc8b(0xeb)](_0x4f032c);}else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xc0))var _0x4f032c=users['Hindi'];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='German')var _0x4f032c=users[_0x6dc8b(0xea)];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xe7))var _0x4f032c=users[_0x6dc8b(0xe7)];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xf2))var _0x4f032c=users['French'];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='Portuguese\x20(BR)')var _0x4f032c=users[_0x6dc8b(0xd5)];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='Chinese')var _0x4f032c=users[_0x6dc8b(0xd1)];else{if(_0x5124bd[0x0]['language']==_0x6dc8b(0xe2))var _0x4f032c=users[_0x6dc8b(0xe9)];}}}}}}}_0x4d9f24[_0x6dc8b(0xec)](0xc8)[_0x6dc8b(0xaf)]({'data':_0x1e772e,'language':_0x4f032c['warehouse']});}else{const _0x138d31=await product['find']();console[_0x6dc8b(0xeb)]('111',_0x138d31);if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xb0)){var _0x4f032c=users[_0x6dc8b(0xdf)];console['log'](_0x4f032c);}else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='Hindi')var _0x4f032c=users[_0x6dc8b(0xc0)];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xea))var _0x4f032c=users['German'];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]=='Spanish')var _0x4f032c=users[_0x6dc8b(0xe7)];else{if(_0x5124bd[0x0]['language']==_0x6dc8b(0xf2))var _0x4f032c=users[_0x6dc8b(0xf2)];else{if(_0x5124bd[0x0]['language']==_0x6dc8b(0xda))var _0x4f032c=users[_0x6dc8b(0xd5)];else{if(_0x5124bd[0x0]['language']==_0x6dc8b(0xd1))var _0x4f032c=users[_0x6dc8b(0xd1)];else{if(_0x5124bd[0x0][_0x6dc8b(0xe8)]==_0x6dc8b(0xe2))var _0x4f032c=users[_0x6dc8b(0xe9)];}}}}}}}_0x4d9f24[_0x6dc8b(0xec)](0xc8)[_0x6dc8b(0xaf)]({'data':_0x138d31,'language':_0x4f032c[_0x6dc8b(0xef)]});}}catch(_0x4d224e){console[_0x6dc8b(0xeb)](_0x4d224e);}}),router[a0_0x2b9fd7(0xd8)](a0_0x2b9fd7(0xb2),auth,async(_0x403e1f,_0x59fdd3)=>{var _0x482f79=a0_0x2b9fd7;try{const _0x4db831=_0x403e1f[_0x482f79(0xce)]['id'];console['log'](_0x4db831);const _0x23f635=await master_shop[_0x482f79(0xd9)]();console[_0x482f79(0xeb)]('master',_0x23f635);const _0x41c2e4=await warehouse[_0x482f79(0xe6)]([{'$match':{'name':_0x4db831}},{'$unwind':_0x482f79(0xb5)},{'$lookup':{'from':_0x482f79(0xef),'localField':_0x482f79(0xe4),'foreignField':_0x482f79(0xb8),'as':'product_docs'}},{'$unwind':_0x482f79(0xee)},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':'$product_details.product_stock','category':_0x482f79(0xba),'brand':_0x482f79(0xc6),'sku':_0x482f79(0xe1),'unit':'$product_docs.unit','rak':_0x482f79(0xf1),'bin':_0x482f79(0xed)}}]);console[_0x482f79(0xeb)](_0x41c2e4);if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xb0)){var _0x19385a=users[_0x482f79(0xdf)];console[_0x482f79(0xeb)](_0x19385a);}else{if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xc0))var _0x19385a=users['Hindi'];else{if(_0x23f635[0x0]['language']==_0x482f79(0xea))var _0x19385a=users[_0x482f79(0xea)];else{if(_0x23f635[0x0]['language']==_0x482f79(0xe7))var _0x19385a=users[_0x482f79(0xe7)];else{if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xf2))var _0x19385a=users[_0x482f79(0xf2)];else{if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xda))var _0x19385a=users[_0x482f79(0xd5)];else{if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xd1))var _0x19385a=users['Chinese'];else{if(_0x23f635[0x0][_0x482f79(0xe8)]==_0x482f79(0xe2))var _0x19385a=users['Arabic'];}}}}}}}_0x59fdd3[_0x482f79(0xec)](0xc8)[_0x482f79(0xaf)]({'data':_0x41c2e4,'language':_0x19385a});}catch(_0x2c1ce9){console[_0x482f79(0xeb)](_0x2c1ce9);}}),router[a0_0x2b9fd7(0xd8)](a0_0x2b9fd7(0xd2),auth,async(_0x1daa1f,_0x354b4e)=>{var _0x4ee037=a0_0x2b9fd7;try{const _0x15064a=_0x1daa1f[_0x4ee037(0xce)]['id'];console[_0x4ee037(0xeb)](_0x15064a);const _0x3d23f6=await master_shop[_0x4ee037(0xd9)]();console[_0x4ee037(0xeb)]('master',_0x3d23f6);const _0x381adf=await product[_0x4ee037(0xca)]({'name':_0x15064a});console[_0x4ee037(0xeb)](_0x4ee037(0xe0),_0x381adf);const _0x138dc2=await warehouse[_0x4ee037(0xe6)]([{'$unwind':_0x4ee037(0xb5)},{'$match':{'product_details.product_name':_0x15064a}},{'$project':{'name':0x1,'product_name':_0x4ee037(0xc4),'product_stock':_0x4ee037(0xc8)}}]);console[_0x4ee037(0xeb)]('warehouse_data',_0x138dc2);if(_0x3d23f6[0x0][_0x4ee037(0xe8)]==_0x4ee037(0xb0)){var _0x417daf=users[_0x4ee037(0xdf)];console[_0x4ee037(0xeb)](_0x417daf);}else{if(_0x3d23f6[0x0]['language']=='Hindi')var _0x417daf=users[_0x4ee037(0xc0)];else{if(_0x3d23f6[0x0][_0x4ee037(0xe8)]=='German')var _0x417daf=users[_0x4ee037(0xea)];else{if(_0x3d23f6[0x0][_0x4ee037(0xe8)]=='Spanish')var _0x417daf=users[_0x4ee037(0xe7)];else{if(_0x3d23f6[0x0][_0x4ee037(0xe8)]=='French')var _0x417daf=users[_0x4ee037(0xf2)];else{if(_0x3d23f6[0x0]['language']==_0x4ee037(0xda))var _0x417daf=users[_0x4ee037(0xd5)];else{if(_0x3d23f6[0x0][_0x4ee037(0xe8)]==_0x4ee037(0xd1))var _0x417daf=users[_0x4ee037(0xd1)];else{if(_0x3d23f6[0x0]['language']==_0x4ee037(0xe2))var _0x417daf=users[_0x4ee037(0xe9)];}}}}}}}_0x354b4e[_0x4ee037(0xec)](0xc8)['json']({'product_data':_0x381adf,'warehouse_data':_0x138dc2,'language':_0x417daf});}catch(_0x1ca11b){console[_0x4ee037(0xeb)](_0x1ca11b);}}),router['post']('/Reports',async(_0x541901,_0x147b84)=>{var _0x364a8c=a0_0x2b9fd7;const {warehouseNew:_0x376e9e,rooms:_0x5b230e,Type:_0x2f0158,process_cat:_0x364994,room_cat:_0xad3eee}=_0x541901['body'];let _0x25813e;console['log'](_0x541901[_0x364a8c(0xd7)]);if(_0x364994==_0x364a8c(0xdd))_0x25813e=await warehouse['aggregate']([{'$match':{'name':_0x376e9e,'room':_0x5b230e,'warehouse_category':_0x364a8c(0xb7)}},{'$unwind':_0x364a8c(0xb5)},{'$match':{'product_details.type':_0x2f0158,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x364994=='finish'?_0x5b230e==_0x364a8c(0xb4)?_0x25813e=await warehouse[_0x364a8c(0xe6)]([{'$match':{'name':_0x376e9e,'warehouse_category':'Finished\x20Goods'}},{'$unwind':_0x364a8c(0xb5)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x25813e=await warehouse[_0x364a8c(0xe6)]([{'$match':{'name':_0x376e9e,'room':_0x5b230e,'warehouse_category':_0x364a8c(0xb9)}},{'$unwind':_0x364a8c(0xb5)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x364a8c(0xeb)](_0x364a8c(0xcf)),Include=[{'$unwind':_0x364a8c(0xb5)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x25813e=await warehouse['aggregate'](Include));_0x147b84['json'](_0x25813e);}),router[a0_0x2b9fd7(0xbb)](a0_0x2b9fd7(0xdc),async(_0x2c6f99,_0x4a3e5c)=>{var _0x503e6a=a0_0x2b9fd7;const {warehouseNew:_0x1ac647,rooms:_0x3549ce,Type:_0x375e3a,process_cat:_0xa14073,room_cat:_0x427241}=_0x2c6f99[_0x503e6a(0xd7)],_0x540051=await product['find']();_0x4a3e5c[_0x503e6a(0xaf)](_0x540051);}),module['exports']=router;