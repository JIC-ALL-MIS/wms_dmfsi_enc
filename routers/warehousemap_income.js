const a0_0x3d6786=a0_0x1098;function a0_0x1098(_0x313379,_0xbe3ada){const _0x39ac37=a0_0x39ac();return a0_0x1098=function(_0x10981d,_0x71f141){_0x10981d=_0x10981d-0x193;let _0x4748b0=_0x39ac37[_0x10981d];return _0x4748b0;},a0_0x1098(_0x313379,_0xbe3ada);}(function(_0x3128ac,_0x5e30ee){const _0x140fb2=a0_0x1098,_0x4bb74d=_0x3128ac();while(!![]){try{const _0x52fea9=-parseInt(_0x140fb2(0x1de))/0x1+-parseInt(_0x140fb2(0x1c6))/0x2*(parseInt(_0x140fb2(0x1d7))/0x3)+-parseInt(_0x140fb2(0x1e2))/0x4*(parseInt(_0x140fb2(0x195))/0x5)+parseInt(_0x140fb2(0x1d0))/0x6*(-parseInt(_0x140fb2(0x1d9))/0x7)+parseInt(_0x140fb2(0x1c4))/0x8+-parseInt(_0x140fb2(0x1d8))/0x9*(parseInt(_0x140fb2(0x1b7))/0xa)+parseInt(_0x140fb2(0x19e))/0xb;if(_0x52fea9===_0x5e30ee)break;else _0x4bb74d['push'](_0x4bb74d['shift']());}catch(_0x3e6af9){_0x4bb74d['push'](_0x4bb74d['shift']());}}}(a0_0x39ac,0xb6211));const express=require(a0_0x3d6786(0x1af)),app=express(),router=express['Router'](),multer=require(a0_0x3d6786(0x1d2)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require('../models/all_models'),auth=require(a0_0x3d6786(0x1ca));var timezones=require(a0_0x3d6786(0x1b1));function a0_0x39ac(){const _0x1af5ec=['express','Return\x20Goods','timezones-list','Portuguese','$_id','$product_details.type','$_id.floorlevel','exports','6430URpvws','$expiry_date','toLocaleString','$_id.bin','QA\x20Warehouse','All','Portuguese\x20(BR)','post','French','$product_details.bay','$product_details.product_stock','$_id.bay','$product_code','8822848LAZIox','json','2OVRYrt','timezone','English','aggregate','../middleware/auth','$product_details','/view','message','errors','Enabled','8045574nkehQa','flash','multer','findOne','success','staff','$production_date','2229033CXDrGq','15624HtdDNf','7HIcFQo','find','email','$product_details.batch_code','$name','943190BqNztC','$product_details.floorlevel','Rack\x20A','$count','380NdQidY','Chinese','Spanish','log','$product_details.product_name','$room','47935tnKiPd','/Rooms_data','role','language','/Rooms_data3','product','/MapData2','$product_details.product_code','$product_details.expiry_date','51670168COdgTi','Hindi','Arabic\x20(ae)','German','en-US','Arabic','warehouse','/MapData','$products','body','$$product.product_quantity','$batch_code','warehousemap_incoming','pack','status','English\x20(US)','user'];a0_0x39ac=function(){return _0x1af5ec;};return a0_0x39ac();}const users=require('../public/language/languages.json');router['get'](a0_0x3d6786(0x1cc),auth,async(_0x26384c,_0x166d3d)=>{const _0x3fa566=a0_0x3d6786;try{const {username:_0x35a537,email:_0xf368e3,role:_0x483388}=_0x26384c['user'],_0x3e6a7a=_0x26384c[_0x3fa566(0x1ae)],_0x50645b=await profile[_0x3fa566(0x1d3)]({'email':_0x3e6a7a[_0x3fa566(0x1db)]}),_0x3fb06d=await master_shop[_0x3fa566(0x1da)]();console[_0x3fa566(0x1e5)]('master',_0x3fb06d);let _0x3ae73c;if(_0x3e6a7a[_0x3fa566(0x197)]==_0x3fa566(0x1d5)){const _0x21d282=await staff[_0x3fa566(0x1d3)]({'email':_0x3e6a7a[_0x3fa566(0x1db)]});_0x3ae73c=await warehouse[_0x3fa566(0x1c9)]([{'$match':{'status':_0x3fa566(0x1cf),'name':_0x21d282[_0x3fa566(0x1a4)]}},{'$group':{'_id':'$name','name':{'$first':_0x3fa566(0x1dd)}}}]);}else _0x3ae73c=await warehouse[_0x3fa566(0x1c9)]([{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x3fa566(0x1dd),'name':{'$first':'$name'}}}]);const _0x15316c=new Date()[_0x3fa566(0x1b9)](_0x3fa566(0x1a2),{'timeZone':_0x3fb06d[0x0][_0x3fa566(0x1c7)]});console[_0x3fa566(0x1e5)](_0x3fa566(0x1c7),_0x15316c);if(_0x3fb06d[0x0]['language']==_0x3fa566(0x1ad)){var _0x22a52a=users[_0x3fa566(0x1c8)];console[_0x3fa566(0x1e5)](_0x22a52a);}else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]==_0x3fa566(0x19f))var _0x22a52a=users[_0x3fa566(0x19f)];else{if(_0x3fb06d[0x0]['language']==_0x3fa566(0x1a1))var _0x22a52a=users[_0x3fa566(0x1a1)];else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]=='Spanish')var _0x22a52a=users[_0x3fa566(0x1e4)];else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]==_0x3fa566(0x1bf))var _0x22a52a=users[_0x3fa566(0x1bf)];else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]==_0x3fa566(0x1bd))var _0x22a52a=users[_0x3fa566(0x1b2)];else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]==_0x3fa566(0x1e3))var _0x22a52a=users[_0x3fa566(0x1e3)];else{if(_0x3fb06d[0x0][_0x3fa566(0x198)]==_0x3fa566(0x1a0))var _0x22a52a=users[_0x3fa566(0x1a3)];}}}}}}}_0x166d3d['render'](_0x3fa566(0x1aa),{'success':_0x26384c['flash'](_0x3fa566(0x1d4)),'errors':_0x26384c[_0x3fa566(0x1d1)](_0x3fa566(0x1ce)),'role':_0x3e6a7a,'profile':_0x50645b,'master_shop':_0x3fb06d,'timezones':timezones,'language':_0x22a52a,'warehouse':_0x3ae73c});}catch(_0x1ee856){console['log'](_0x1ee856),_0x166d3d[_0x3fa566(0x1ac)](0xc8)[_0x3fa566(0x1c5)]({'message':_0x1ee856[_0x3fa566(0x1cd)]});}}),router[a0_0x3d6786(0x1be)](a0_0x3d6786(0x1a5),async(_0x38a566,_0xa93de4)=>{const _0x49baf7=a0_0x3d6786,{warehouseNew:_0x3d93fe,rooms:_0x15b2ef,Type:_0x4039e3}=_0x38a566[_0x49baf7(0x1a7)],_0x34b302=await warehouse[_0x49baf7(0x1c9)]([{'$unwind':'$product_details'},{'$match':{'name':_0x3d93fe,'room':_0x15b2ef,'product_details.type':_0x4039e3}},{'$group':{'_id':{'bay':_0x49baf7(0x1c0),'bin':'$product_details.bin','type':_0x49baf7(0x1b4),'floorlevel':_0x49baf7(0x1df)},'products':{'$push':{'product_name':_0x49baf7(0x193),'product_quantity':'$product_details.product_stock','product_code':_0x49baf7(0x19c)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':['$product_details.product_stock',0x0]},'then':_0x49baf7(0x1c1),'else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x49baf7(0x1c2),'bin':_0x49baf7(0x1ba),'type':'$_id.type','floorlevel':_0x49baf7(0x1b5),'products':{'$filter':{'input':_0x49baf7(0x1a6),'as':_0x49baf7(0x19a),'cond':{'$gt':[_0x49baf7(0x1a8),0x0]}}},'totalQuantity':0x1}}]);_0xa93de4[_0x49baf7(0x1c5)](_0x34b302);}),router[a0_0x3d6786(0x1be)](a0_0x3d6786(0x19b),async(_0x537ce5,_0x591c21)=>{const _0x198d3d=a0_0x3d6786,{warehouseNew:_0x13504f,rooms:_0x204c7f,room_cat:_0x4c156e}=_0x537ce5[_0x198d3d(0x1a7)];let _0x52718d;if(_0x4c156e==_0x198d3d(0x1bc))_0x52718d=await warehouse[_0x198d3d(0x1c9)]([{'$unwind':_0x198d3d(0x1cb)},{'$match':{'name':_0x13504f}},{'$group':{'_id':{'bay':_0x198d3d(0x1c0),'product':_0x198d3d(0x193),'expiry':_0x198d3d(0x19d)},'count':{'$sum':_0x198d3d(0x1c1)},'production_date':{'$first':'$product_details.production_date'},'expiry_date':{'$first':'$product_details.expiry_date'},'batch_code':{'$first':_0x198d3d(0x1dc)},'product_code':{'$first':'$product_details.product_code'}}},{'$group':{'_id':_0x198d3d(0x1c2),'products':{'$push':{'product':'$_id.product','quantity':_0x198d3d(0x1e1),'production_date':_0x198d3d(0x1d6),'expiry_date':_0x198d3d(0x1b8),'batch_code':_0x198d3d(0x1a9),'product_code':_0x198d3d(0x1c3)}},'totalQuantity':{'$sum':_0x198d3d(0x1e1)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x198d3d(0x1b3),'products':0x1,'totalQuantity':0x1}}]),console[_0x198d3d(0x1e5)](_0x4c156e);else{}_0x591c21[_0x198d3d(0x1c5)](_0x52718d);}),router[a0_0x3d6786(0x1be)](a0_0x3d6786(0x196),async(_0x53446a,_0x60a7b6)=>{const _0x376486=a0_0x3d6786;try{const {warehouse_name:_0x239c77,A:_0xa2836f,B:_0x593986}=_0x53446a[_0x376486(0x1a7)];var _0x29a5a9='';_0xa2836f=='raw'?_0x593986==_0x376486(0x1ab)?_0x29a5a9=[{'$match':{'name':_0x239c77,'status':_0x376486(0x1cf),'room':_0x376486(0x1e0)}},{'$group':{'_id':_0x376486(0x1b3),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0x29a5a9=[{'$match':{'name':_0x239c77,'status':_0x376486(0x1cf)}},{'$group':{'_id':'$_id','room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0x29a5a9=[{'$match':{'name':_0x239c77,'status':_0x376486(0x1cf)}},{'$group':{'_id':_0x376486(0x1b3),'room_name':{'$first':_0x376486(0x194)}}},{'$sort':{'room_name':0x1}}];const _0x4cd79b=await warehouse[_0x376486(0x1c9)](_0x29a5a9);_0x60a7b6['status'](0xc8)[_0x376486(0x1c5)](_0x4cd79b);}catch(_0x277aba){_0x60a7b6[_0x376486(0x1ac)](0x190)[_0x376486(0x1c5)]({'errorMessage':_0x277aba[_0x376486(0x1cd)]});}}),router[a0_0x3d6786(0x1be)]('/Rooms_data2',async(_0x527145,_0x3c81d6)=>{const _0x5783f6=a0_0x3d6786;try{const {warehouse_name:_0x2d9875,cat:_0x2593f6,valNew:_0x5a5a5f}=_0x527145['body'];var _0x1dbdc3='',_0x2bb4ed='';if(_0x2593f6=='Raw\x20Materials')_0x1dbdc3=_0x5783f6(0x1b0),_0x5a5a5f==_0x5783f6(0x1ab)?_0x2bb4ed=[{'$match':{'status':_0x5783f6(0x1cf),'warehouse_category':_0x2593f6,'name':{'$ne':_0x1dbdc3},'name':'DRY\x20STORAGE'}},{'$group':{'_id':_0x5783f6(0x1dd),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}]:_0x2bb4ed=[{'$match':{'status':_0x5783f6(0x1cf),'warehouse_category':_0x2593f6,'name':{'$ne':_0x1dbdc3}}},{'$group':{'_id':_0x5783f6(0x1dd),'room_name':{'$first':_0x5783f6(0x1dd)}}},{'$sort':{'room_name':0x1}}];else _0x2593f6=='Finished\x20Goods'?(_0x1dbdc3=_0x5783f6(0x1bb),_0x2bb4ed=[{'$match':{'status':_0x5783f6(0x1cf),'warehouse_category':_0x2593f6,'name':{'$ne':_0x1dbdc3}}},{'$group':{'_id':'$name','room_name':{'$first':_0x5783f6(0x1dd)}}},{'$sort':{'room_name':0x1}}]):_0x2bb4ed=[{'$match':{'status':_0x5783f6(0x1cf)}},{'$group':{'_id':_0x5783f6(0x1dd),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];const _0x160c41=await warehouse[_0x5783f6(0x1c9)](_0x2bb4ed);_0x3c81d6[_0x5783f6(0x1ac)](0xc8)[_0x5783f6(0x1c5)](_0x160c41);}catch(_0xb4bff4){_0x3c81d6[_0x5783f6(0x1ac)](0x190)['json']({'errorMessage':_0xb4bff4[_0x5783f6(0x1cd)]}),console[_0x5783f6(0x1e5)](_0xb4bff4);}}),router[a0_0x3d6786(0x1be)](a0_0x3d6786(0x199),async(_0xc6c27c,_0x433181)=>{const _0x112520=a0_0x3d6786;try{const {warehouse_name:_0x282647,cat:_0x4b34f2}=_0xc6c27c[_0x112520(0x1a7)],_0x3dafd2=await warehouse[_0x112520(0x1c9)]([{'$match':{'status':_0x112520(0x1cf),'warehouse_category':_0x4b34f2,'name':_0x282647}},{'$group':{'_id':_0x112520(0x194),'room_name':{'$first':_0x112520(0x194)}}},{'$sort':{'room_name':0x1}}]);_0x433181[_0x112520(0x1ac)](0xc8)['json'](_0x3dafd2);}catch(_0x2abc28){_0x433181['status'](0x190)[_0x112520(0x1c5)]({'errorMessage':_0x2abc28[_0x112520(0x1cd)]});}}),module[a0_0x3d6786(0x1b6)]=router;