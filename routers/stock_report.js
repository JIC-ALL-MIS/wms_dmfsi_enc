var a0_0x47c829=a0_0x3e11;(function(_0x4d2139,_0x3d7787){var _0x2ec463=a0_0x3e11,_0x4f6493=_0x4d2139();while(!![]){try{var _0x5014cb=parseInt(_0x2ec463(0x103))/0x1*(parseInt(_0x2ec463(0xd7))/0x2)+parseInt(_0x2ec463(0xd6))/0x3+parseInt(_0x2ec463(0x113))/0x4+-parseInt(_0x2ec463(0xdd))/0x5+parseInt(_0x2ec463(0x106))/0x6*(-parseInt(_0x2ec463(0xf5))/0x7)+parseInt(_0x2ec463(0x10c))/0x8+-parseInt(_0x2ec463(0x10e))/0x9;if(_0x5014cb===_0x3d7787)break;else _0x4f6493['push'](_0x4f6493['shift']());}catch(_0x36263e){_0x4f6493['push'](_0x4f6493['shift']());}}}(a0_0xb4d2,0x4dc92));function a0_0x3e11(_0x4d602c,_0x7b115e){var _0xb4d2de=a0_0xb4d2();return a0_0x3e11=function(_0x3e11a9,_0x34e26e){_0x3e11a9=_0x3e11a9-0xd6;var _0x42d46b=_0xb4d2de[_0x3e11a9];return _0x42d46b;},a0_0x3e11(_0x4d602c,_0x7b115e);}function a0_0xb4d2(){var _0x45d087=['10chubfx','All','/view/warehouse/:id','1740TNFfLn','product_details.bin_name','post','warehouse_data','products','/view/:id','2244488pShpzl','product_details.product_name','2496285pEJLja','master','product_details.rak_name','ssd','Spanish','1382808NdxuDS','render','719808iFaqJz','81214jkCrXO','French','body','$product_details','role_data','json','358220Lgvrww','name','/Reports','111','$product_details.product_name','$product_docs.sku','Raw\x20Materials','product_docs','express','aggregate','English','flash','params','success','../middleware/auth','Portuguese\x20(BR)','warehouse','/Reports_product','Arabic\x20(ae)','language','findOne','find','Hindi','log','14595sYSdmX','German','Chinese','Router','user','$product_docs','email','Portuguese','$product_details.product_stock','English\x20(US)','Arabic','raw','get','../public/language/languages.json'];a0_0xb4d2=function(){return _0x45d087;};return a0_0xb4d2();}const express=require(a0_0x47c829(0xe5)),app=express(),router=express[a0_0x47c829(0xf8)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases}=require('../models/all_models'),auth=require(a0_0x47c829(0xeb)),users=require(a0_0x47c829(0x102));router[a0_0x47c829(0x101)]('/view',auth,async(_0xf67451,_0x5132f0)=>{var _0x33e2cb=a0_0x47c829;try{const _0x460ea3=_0xf67451['user'];console[_0x33e2cb(0xf4)](_0x33e2cb(0xdb),_0xf67451[_0x33e2cb(0xf9)]);const _0x505f0c=await profile[_0x33e2cb(0xf1)]({'email':_0x460ea3[_0x33e2cb(0xfb)]}),_0x17afd1=await master_shop[_0x33e2cb(0xf2)]();console[_0x33e2cb(0xf4)](_0x33e2cb(0x10f),_0x17afd1);const _0x36642d=await warehouse[_0x33e2cb(0xf2)]({}),_0x330415=await product['find']({});if(_0x17afd1[0x0][_0x33e2cb(0xf0)]==_0x33e2cb(0xfe)){var _0x1fd59c=users[_0x33e2cb(0xe7)];console['log'](_0x1fd59c);}else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]=='Hindi')var _0x1fd59c=users[_0x33e2cb(0xf3)];else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]==_0x33e2cb(0xf6))var _0x1fd59c=users['German'];else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]=='Spanish')var _0x1fd59c=users['Spanish'];else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]==_0x33e2cb(0xd8))var _0x1fd59c=users[_0x33e2cb(0xd8)];else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]==_0x33e2cb(0xec))var _0x1fd59c=users[_0x33e2cb(0xfc)];else{if(_0x17afd1[0x0][_0x33e2cb(0xf0)]==_0x33e2cb(0xf7))var _0x1fd59c=users['Chinese'];else{if(_0x17afd1[0x0]['language']==_0x33e2cb(0xef))var _0x1fd59c=users[_0x33e2cb(0xff)];}}}}}}}_0x5132f0[_0x33e2cb(0x114)]('stock_report',{'success':_0xf67451['flash'](_0x33e2cb(0xea)),'errors':_0xf67451[_0x33e2cb(0xe8)]('errors'),'role':_0x460ea3,'profile':_0x505f0c,'master_shop':_0x17afd1,'warehouse':_0x36642d,'product':_0x330415,'warehouse_doc':[],'product_doc':[],'language':_0x1fd59c});}catch(_0x937198){console[_0x33e2cb(0xf4)](_0x937198);}}),router[a0_0x47c829(0x101)](a0_0x47c829(0x10b),auth,async(_0x174a9a,_0x5c5805)=>{var _0x4b58b4=a0_0x47c829;try{const _0xa2e789=await master_shop['find']();console[_0x4b58b4(0xf4)](_0x4b58b4(0x10f),_0xa2e789);if(_0x174a9a[_0x4b58b4(0xe9)]['id']==_0x4b58b4(0xed)){const _0x2b5d3c=await warehouse[_0x4b58b4(0xf2)]();console['log'](_0x2b5d3c);if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xfe)){var _0x5eaf88=users[_0x4b58b4(0xe7)];console[_0x4b58b4(0xf4)](_0x5eaf88);}else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]=='Hindi')var _0x5eaf88=users[_0x4b58b4(0xf3)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xf6))var _0x5eaf88=users[_0x4b58b4(0xf6)];else{if(_0xa2e789[0x0]['language']=='Spanish')var _0x5eaf88=users[_0x4b58b4(0x112)];else{if(_0xa2e789[0x0]['language']==_0x4b58b4(0xd8))var _0x5eaf88=users[_0x4b58b4(0xd8)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xec))var _0x5eaf88=users[_0x4b58b4(0xfc)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xf7))var _0x5eaf88=users[_0x4b58b4(0xf7)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xef))var _0x5eaf88=users[_0x4b58b4(0xff)];}}}}}}}_0x5c5805['status'](0xc8)['json']({'data':_0x2b5d3c,'language':_0x5eaf88['warehouse']});}else{const _0x3c2551=await product[_0x4b58b4(0xf2)]();console[_0x4b58b4(0xf4)](_0x4b58b4(0xe0),_0x3c2551);if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xfe)){var _0x5eaf88=users[_0x4b58b4(0xe7)];console[_0x4b58b4(0xf4)](_0x5eaf88);}else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xf3))var _0x5eaf88=users[_0x4b58b4(0xf3)];else{if(_0xa2e789[0x0]['language']=='German')var _0x5eaf88=users['German'];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]=='Spanish')var _0x5eaf88=users['Spanish'];else{if(_0xa2e789[0x0]['language']=='French')var _0x5eaf88=users[_0x4b58b4(0xd8)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xec))var _0x5eaf88=users[_0x4b58b4(0xfc)];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xf7))var _0x5eaf88=users['Chinese'];else{if(_0xa2e789[0x0][_0x4b58b4(0xf0)]==_0x4b58b4(0xef))var _0x5eaf88=users[_0x4b58b4(0xff)];}}}}}}}_0x5c5805['status'](0xc8)['json']({'data':_0x3c2551,'language':_0x5eaf88[_0x4b58b4(0x10a)]});}}catch(_0x5c9abb){console[_0x4b58b4(0xf4)](_0x5c9abb);}}),router['get'](a0_0x47c829(0x105),auth,async(_0x652d88,_0x1055ef)=>{var _0x3413fb=a0_0x47c829;try{const _0x2a97fd=_0x652d88[_0x3413fb(0xe9)]['id'];console[_0x3413fb(0xf4)](_0x2a97fd);const _0xab4e98=await master_shop[_0x3413fb(0xf2)]();console[_0x3413fb(0xf4)]('master',_0xab4e98);const _0x79abdc=await warehouse[_0x3413fb(0xe6)]([{'$match':{'name':_0x2a97fd}},{'$unwind':_0x3413fb(0xda)},{'$lookup':{'from':'products','localField':_0x3413fb(0x10d),'foreignField':_0x3413fb(0xde),'as':_0x3413fb(0xe4)}},{'$unwind':_0x3413fb(0xfa)},{'$project':{'name':0x1,'product_name':_0x3413fb(0xe1),'product_stock':_0x3413fb(0xfd),'category':'$product_docs.category','brand':'$product_docs.brand','sku':_0x3413fb(0xe2),'unit':'$product_docs.unit','rak':_0x3413fb(0x110),'bin':_0x3413fb(0x107)}}]);console['log'](_0x79abdc);if(_0xab4e98[0x0][_0x3413fb(0xf0)]==_0x3413fb(0xfe)){var _0x252df=users[_0x3413fb(0xe7)];console[_0x3413fb(0xf4)](_0x252df);}else{if(_0xab4e98[0x0]['language']==_0x3413fb(0xf3))var _0x252df=users[_0x3413fb(0xf3)];else{if(_0xab4e98[0x0][_0x3413fb(0xf0)]==_0x3413fb(0xf6))var _0x252df=users[_0x3413fb(0xf6)];else{if(_0xab4e98[0x0][_0x3413fb(0xf0)]==_0x3413fb(0x112))var _0x252df=users[_0x3413fb(0x112)];else{if(_0xab4e98[0x0][_0x3413fb(0xf0)]=='French')var _0x252df=users['French'];else{if(_0xab4e98[0x0]['language']==_0x3413fb(0xec))var _0x252df=users[_0x3413fb(0xfc)];else{if(_0xab4e98[0x0][_0x3413fb(0xf0)]==_0x3413fb(0xf7))var _0x252df=users[_0x3413fb(0xf7)];else{if(_0xab4e98[0x0][_0x3413fb(0xf0)]==_0x3413fb(0xef))var _0x252df=users[_0x3413fb(0xff)];}}}}}}}_0x1055ef['status'](0xc8)[_0x3413fb(0xdc)]({'data':_0x79abdc,'language':_0x252df});}catch(_0x6e521e){console[_0x3413fb(0xf4)](_0x6e521e);}}),router[a0_0x47c829(0x101)]('/view/product/:id',auth,async(_0x26c43c,_0x16b2fc)=>{var _0x2d6a34=a0_0x47c829;try{const _0xfb2859=_0x26c43c[_0x2d6a34(0xe9)]['id'];console['log'](_0xfb2859);const _0x36c38a=await master_shop[_0x2d6a34(0xf2)]();console[_0x2d6a34(0xf4)](_0x2d6a34(0x10f),_0x36c38a);const _0x2b3f62=await product[_0x2d6a34(0xf1)]({'name':_0xfb2859});console[_0x2d6a34(0xf4)]('product_data',_0x2b3f62);const _0x84cbc=await warehouse[_0x2d6a34(0xe6)]([{'$unwind':'$product_details'},{'$match':{'product_details.product_name':_0xfb2859}},{'$project':{'name':0x1,'product_name':'$product_details.product_name','product_stock':_0x2d6a34(0xfd)}}]);console[_0x2d6a34(0xf4)](_0x2d6a34(0x109),_0x84cbc);if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0xfe)){var _0x418de0=users[_0x2d6a34(0xe7)];console['log'](_0x418de0);}else{if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0xf3))var _0x418de0=users[_0x2d6a34(0xf3)];else{if(_0x36c38a[0x0]['language']=='German')var _0x418de0=users[_0x2d6a34(0xf6)];else{if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0x112))var _0x418de0=users[_0x2d6a34(0x112)];else{if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0xd8))var _0x418de0=users[_0x2d6a34(0xd8)];else{if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0xec))var _0x418de0=users['Portuguese'];else{if(_0x36c38a[0x0]['language']=='Chinese')var _0x418de0=users[_0x2d6a34(0xf7)];else{if(_0x36c38a[0x0][_0x2d6a34(0xf0)]==_0x2d6a34(0xef))var _0x418de0=users[_0x2d6a34(0xff)];}}}}}}}_0x16b2fc['status'](0xc8)[_0x2d6a34(0xdc)]({'product_data':_0x2b3f62,'warehouse_data':_0x84cbc,'language':_0x418de0});}catch(_0x1b383a){console[_0x2d6a34(0xf4)](_0x1b383a);}}),router['post'](a0_0x47c829(0xdf),async(_0x4dddb0,_0xf7f03f)=>{var _0x2cc864=a0_0x47c829;const {warehouseNew:_0x540a99,rooms:_0x55f7a0,Type:_0x3845c8,process_cat:_0x393fb6,room_cat:_0x5c2ecf}=_0x4dddb0[_0x2cc864(0xd9)];let _0x1d7c2d;console[_0x2cc864(0xf4)](_0x4dddb0[_0x2cc864(0xd9)]);if(_0x393fb6==_0x2cc864(0x100))_0x1d7c2d=await warehouse[_0x2cc864(0xe6)]([{'$match':{'name':_0x540a99,'room':_0x55f7a0,'warehouse_category':_0x2cc864(0xe3)}},{'$unwind':_0x2cc864(0xda)},{'$match':{'product_details.type':_0x3845c8,'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]);else _0x393fb6=='finish'?_0x55f7a0==_0x2cc864(0x104)?_0x1d7c2d=await warehouse[_0x2cc864(0xe6)]([{'$match':{'name':_0x540a99,'warehouse_category':'Finished\x20Goods'}},{'$unwind':_0x2cc864(0xda)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):_0x1d7c2d=await warehouse[_0x2cc864(0xe6)]([{'$match':{'name':_0x540a99,'room':_0x55f7a0,'warehouse_category':'Finished\x20Goods'}},{'$unwind':_0x2cc864(0xda)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}]):(console[_0x2cc864(0xf4)](_0x2cc864(0x111)),Include=[{'$unwind':_0x2cc864(0xda)},{'$match':{'product_details.product_stock':{'$gt':0x0}}},{'$sort':{'warehouse_category':0x1,'product_details.bay':0x1}}],_0x1d7c2d=await warehouse[_0x2cc864(0xe6)](Include));_0xf7f03f['json'](_0x1d7c2d);}),router[a0_0x47c829(0x108)](a0_0x47c829(0xee),async(_0xfb6191,_0x37051c)=>{var _0x45a360=a0_0x47c829;const {warehouseNew:_0x4bf4f0,rooms:_0x325c93,Type:_0x2b4893,process_cat:_0x369bf8,room_cat:_0xdc0df6}=_0xfb6191[_0x45a360(0xd9)],_0x6c4e4f=await product[_0x45a360(0xf2)]();_0x37051c[_0x45a360(0xdc)](_0x6c4e4f);}),module['exports']=router;