const a0_0x2c3f24=a0_0xf6c1;function a0_0xf6c1(_0x15404f,_0x5c1ed8){const _0x260cea=a0_0x260c();return a0_0xf6c1=function(_0xf6c1e7,_0x634e9a){_0xf6c1e7=_0xf6c1e7-0x1da;let _0x5c6321=_0x260cea[_0xf6c1e7];return _0x5c6321;},a0_0xf6c1(_0x15404f,_0x5c1ed8);}(function(_0x444faf,_0x44547a){const _0x137eda=a0_0xf6c1,_0x20162c=_0x444faf();while(!![]){try{const _0x52f9fc=-parseInt(_0x137eda(0x1e2))/0x1+parseInt(_0x137eda(0x21a))/0x2*(-parseInt(_0x137eda(0x202))/0x3)+-parseInt(_0x137eda(0x1eb))/0x4*(-parseInt(_0x137eda(0x205))/0x5)+-parseInt(_0x137eda(0x227))/0x6*(-parseInt(_0x137eda(0x1fe))/0x7)+parseInt(_0x137eda(0x206))/0x8*(parseInt(_0x137eda(0x207))/0x9)+-parseInt(_0x137eda(0x1f0))/0xa*(parseInt(_0x137eda(0x226))/0xb)+-parseInt(_0x137eda(0x1fb))/0xc*(-parseInt(_0x137eda(0x219))/0xd);if(_0x52f9fc===_0x44547a)break;else _0x20162c['push'](_0x20162c['shift']());}catch(_0x51f354){_0x20162c['push'](_0x20162c['shift']());}}}(a0_0x260c,0x8f996));const express=require(a0_0x2c3f24(0x216)),app=express(),router=express[a0_0x2c3f24(0x221)](),multer=require(a0_0x2c3f24(0x1dd)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x2c3f24(0x1e8)),auth=require('../middleware/auth');var timezones=require(a0_0x2c3f24(0x1e5));const users=require(a0_0x2c3f24(0x201));router['get'](a0_0x2c3f24(0x200),auth,async(_0x17f7be,_0x52150d)=>{const _0x3cb984=a0_0x2c3f24;try{const {username:_0x35f4ff,email:_0x4293cc,role:_0x56c931}=_0x17f7be['user'],_0x22bbb7=_0x17f7be[_0x3cb984(0x222)],_0x30b29e=await profile[_0x3cb984(0x1ef)]({'email':_0x22bbb7[_0x3cb984(0x1f5)]}),_0x11a0f0=await master_shop['find']();console[_0x3cb984(0x21d)](_0x3cb984(0x1ec),_0x11a0f0);let _0x1c17ee;if(_0x22bbb7[_0x3cb984(0x204)]==_0x3cb984(0x213)){const _0x182986=await staff[_0x3cb984(0x1ef)]({'email':_0x22bbb7['email']});_0x1c17ee=await warehouse[_0x3cb984(0x20b)]([{'$match':{'status':'Enabled','name':_0x182986[_0x3cb984(0x1fa)]}},{'$group':{'_id':_0x3cb984(0x1dc),'name':{'$first':'$name'}}}]);}else _0x1c17ee=await warehouse[_0x3cb984(0x20b)]([{'$match':{'status':_0x3cb984(0x1e0)}},{'$group':{'_id':_0x3cb984(0x1dc),'name':{'$first':_0x3cb984(0x1dc)}}}]);const _0xa65e1d=new Date()['toLocaleString'](_0x3cb984(0x224),{'timeZone':_0x11a0f0[0x0]['timezone']});console['log'](_0x3cb984(0x211),_0xa65e1d);if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x1de)){var _0xf1fa54=users[_0x3cb984(0x209)];console[_0x3cb984(0x21d)](_0xf1fa54);}else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x1ff))var _0xf1fa54=users['Hindi'];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x208))var _0xf1fa54=users[_0x3cb984(0x208)];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]=='Spanish')var _0xf1fa54=users[_0x3cb984(0x215)];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x1e9))var _0xf1fa54=users[_0x3cb984(0x1e9)];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x1ed))var _0xf1fa54=users['Portuguese'];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]=='Chinese')var _0xf1fa54=users[_0x3cb984(0x1e1)];else{if(_0x11a0f0[0x0][_0x3cb984(0x223)]==_0x3cb984(0x1e3))var _0xf1fa54=users[_0x3cb984(0x1f8)];}}}}}}}_0x52150d[_0x3cb984(0x217)]('warehousemap_incoming',{'success':_0x17f7be[_0x3cb984(0x1e7)](_0x3cb984(0x212)),'errors':_0x17f7be[_0x3cb984(0x1e7)](_0x3cb984(0x1e6)),'role':_0x22bbb7,'profile':_0x30b29e,'master_shop':_0x11a0f0,'timezones':timezones,'language':_0xf1fa54,'warehouse':_0x1c17ee});}catch(_0x27c4ae){console[_0x3cb984(0x21d)](_0x27c4ae),_0x52150d[_0x3cb984(0x225)](0xc8)[_0x3cb984(0x22a)]({'message':_0x27c4ae[_0x3cb984(0x228)]});}}),router[a0_0x2c3f24(0x1f4)]('/MapData',async(_0x389ccc,_0x5e54e1)=>{const _0x20267c=a0_0x2c3f24,{warehouseNew:_0x44ef07,rooms:_0xc53ea9,Type:_0x36c0ec}=_0x389ccc[_0x20267c(0x229)],_0x430002=await warehouse[_0x20267c(0x20b)]([{'$unwind':_0x20267c(0x21b)},{'$match':{'name':_0x44ef07,'room':_0xc53ea9,'product_details.type':_0x36c0ec}},{'$group':{'_id':{'bay':'$product_details.bay','bin':'$product_details.bin','type':_0x20267c(0x1da),'floorlevel':_0x20267c(0x1fd)},'products':{'$push':{'product_name':_0x20267c(0x20d),'product_quantity':'$product_details.product_stock','product_code':_0x20267c(0x210)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':['$product_details.product_stock',0x0]},'then':_0x20267c(0x1df),'else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x20267c(0x1f2),'bin':_0x20267c(0x22b),'type':_0x20267c(0x1f7),'floorlevel':'$_id.floorlevel','products':{'$filter':{'input':'$products','as':_0x20267c(0x20f),'cond':{'$gt':['$$product.product_quantity',0x0]}}},'totalQuantity':0x1}}]);_0x5e54e1[_0x20267c(0x22a)](_0x430002);}),router['post'](a0_0x2c3f24(0x1f3),async(_0x393b3d,_0x57d039)=>{const _0x1f4994=a0_0x2c3f24,{warehouseNew:_0x46a542,rooms:_0x2000e7,room_cat:_0x29372c}=_0x393b3d['body'];let _0x8f6094;if(_0x29372c==_0x1f4994(0x21f))_0x8f6094=await warehouse['aggregate']([{'$unwind':'$product_details'},{'$match':{'name':_0x46a542}},{'$group':{'_id':{'bay':'$product_details.bay','product':_0x1f4994(0x20d),'expiry':'$product_details.expiry_date'},'count':{'$sum':'$product_details.product_stock'},'production_date':{'$first':_0x1f4994(0x1ea)},'expiry_date':{'$first':'$product_details.expiry_date'},'batch_code':{'$first':_0x1f4994(0x218)},'product_code':{'$first':_0x1f4994(0x210)}}},{'$group':{'_id':_0x1f4994(0x1f2),'products':{'$push':{'product':_0x1f4994(0x1f9),'quantity':'$count','production_date':'$production_date','expiry_date':_0x1f4994(0x214),'batch_code':'$batch_code','product_code':_0x1f4994(0x1e4)}},'totalQuantity':{'$sum':_0x1f4994(0x21c)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x1f4994(0x20e),'products':0x1,'totalQuantity':0x1}}]),console['log'](_0x29372c);else{}_0x57d039[_0x1f4994(0x22a)](_0x8f6094);}),router['post'](a0_0x2c3f24(0x20a),async(_0x2e28c0,_0x4bd963)=>{const _0x2f504a=a0_0x2c3f24;try{const {warehouse_name:_0x3ffd88,A:_0x16b020,B:_0x23b86d}=_0x2e28c0['body'];var _0x573456='';_0x16b020==_0x2f504a(0x220)?_0x23b86d==_0x2f504a(0x1f1)?_0x573456=[{'$match':{'name':_0x3ffd88,'status':_0x2f504a(0x1e0),'room':_0x2f504a(0x20c)}},{'$group':{'_id':_0x2f504a(0x20e),'room_name':{'$first':_0x2f504a(0x1fc)}}},{'$sort':{'room_name':0x1}}]:_0x573456=[{'$match':{'name':_0x3ffd88,'status':_0x2f504a(0x1e0)}},{'$group':{'_id':_0x2f504a(0x20e),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0x573456=[{'$match':{'name':_0x3ffd88,'status':'Enabled'}},{'$group':{'_id':_0x2f504a(0x20e),'room_name':{'$first':_0x2f504a(0x1fc)}}},{'$sort':{'room_name':0x1}}];const _0x46a6cc=await warehouse['aggregate'](_0x573456);_0x4bd963[_0x2f504a(0x225)](0xc8)['json'](_0x46a6cc);}catch(_0x1ce170){_0x4bd963[_0x2f504a(0x225)](0x190)[_0x2f504a(0x22a)]({'errorMessage':_0x1ce170[_0x2f504a(0x228)]});}}),router[a0_0x2c3f24(0x1f4)](a0_0x2c3f24(0x21e),async(_0x55a81b,_0xee1266)=>{const _0x39f8f2=a0_0x2c3f24;try{const {warehouse_name:_0x196081,cat:_0x542983,valNew:_0x2ddfc3}=_0x55a81b[_0x39f8f2(0x229)];var _0x49521d='',_0x5af483='';if(_0x542983=='Raw\x20Materials')_0x49521d='Return\x20Goods',_0x2ddfc3==_0x39f8f2(0x1f1)?_0x5af483=[{'$match':{'status':_0x39f8f2(0x1e0),'warehouse_category':_0x542983,'name':{'$ne':_0x49521d},'name':_0x39f8f2(0x1f6)}},{'$group':{'_id':_0x39f8f2(0x1dc),'room_name':{'$first':_0x39f8f2(0x1dc)}}},{'$sort':{'room_name':0x1}}]:_0x5af483=[{'$match':{'status':_0x39f8f2(0x1e0),'warehouse_category':_0x542983,'name':{'$ne':_0x49521d}}},{'$group':{'_id':_0x39f8f2(0x1dc),'room_name':{'$first':_0x39f8f2(0x1dc)}}},{'$sort':{'room_name':0x1}}];else _0x542983==_0x39f8f2(0x1ee)?(_0x49521d=_0x39f8f2(0x1db),_0x5af483=[{'$match':{'status':_0x39f8f2(0x1e0),'warehouse_category':_0x542983,'name':{'$ne':_0x49521d}}},{'$group':{'_id':_0x39f8f2(0x1dc),'room_name':{'$first':_0x39f8f2(0x1dc)}}},{'$sort':{'room_name':0x1}}]):_0x5af483=[{'$match':{'status':_0x39f8f2(0x1e0)}},{'$group':{'_id':_0x39f8f2(0x1dc),'room_name':{'$first':_0x39f8f2(0x1dc)}}},{'$sort':{'room_name':0x1}}];const _0x3dedba=await warehouse['aggregate'](_0x5af483);_0xee1266[_0x39f8f2(0x225)](0xc8)['json'](_0x3dedba);}catch(_0x28685c){_0xee1266[_0x39f8f2(0x225)](0x190)['json']({'errorMessage':_0x28685c[_0x39f8f2(0x228)]}),console['log'](_0x28685c);}}),router[a0_0x2c3f24(0x1f4)]('/Rooms_data3',async(_0x9cd49d,_0x33ecb5)=>{const _0x10de6f=a0_0x2c3f24;try{const {warehouse_name:_0x19d29a,cat:_0x13fd47}=_0x9cd49d[_0x10de6f(0x229)],_0x28bfca=await warehouse['aggregate']([{'$match':{'status':_0x10de6f(0x1e0),'warehouse_category':_0x13fd47,'name':_0x19d29a}},{'$group':{'_id':_0x10de6f(0x1fc),'room_name':{'$first':_0x10de6f(0x1fc)}}},{'$sort':{'room_name':0x1}}]);_0x33ecb5[_0x10de6f(0x225)](0xc8)[_0x10de6f(0x22a)](_0x28bfca);}catch(_0x4db092){_0x33ecb5[_0x10de6f(0x225)](0x190)[_0x10de6f(0x22a)]({'errorMessage':_0x4db092[_0x10de6f(0x228)]});}}),module[a0_0x2c3f24(0x203)]=router;function a0_0x260c(){const _0x4d76c8=['multer','English\x20(US)','$product_details.product_stock','Enabled','Chinese','878728HpJGoE','Arabic\x20(ae)','$product_code','timezones-list','errors','flash','../models/all_models','French','$product_details.production_date','20612XSBzMM','master','Portuguese\x20(BR)','Finished\x20Goods','findOne','10jCcwvU','pack','$_id.bay','/MapData2','post','email','DRY\x20STORAGE','$_id.type','Arabic','$_id.product','warehouse','424428NNejyt','$room','$product_details.floorlevel','98YVPVLH','Hindi','/view','../public/language/languages.json','117GbYsvb','exports','role','545ApQiVp','10456kbERkH','3897YGZLbS','German','English','/Rooms_data','aggregate','Rack\x20A','$product_details.product_name','$_id','product','$product_details.product_code','timezone','success','staff','$expiry_date','Spanish','express','render','$product_details.batch_code','585qnOYEV','52062VhdtlG','$product_details','$count','log','/Rooms_data2','All','raw','Router','user','language','en-US','status','12407208tzHeMJ','381786MKZwMB','message','body','json','$_id.bin','$product_details.type','QA\x20Warehouse','$name'];a0_0x260c=function(){return _0x4d76c8;};return a0_0x260c();}