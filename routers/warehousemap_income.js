function a0_0x3ad0(){const _0x594fbb=['/Rooms_data2','json','$product_details.batch_code','$product_details.bin','body','QA\x20Warehouse','language','pack','$product_details.bay','../middleware/auth','1721844bdAyRg','exports','user','post','42NAqEYu','Raw\x20Materials','English\x20(US)','$count','$name','$product_details.floorlevel','errors','Arabic\x20(ae)','flash','$_id.type','/Rooms_data3','product','log','/MapData2','Arabic','Return\x20Goods','../public/language/languages.json','raw','517578udeGQb','/view','3252968JtGfpK','$product_details.type','email','/Rooms_data','494649YPXput','Enabled','$_id.bay','render','../models/all_models','get','aggregate','message','DRY\x20STORAGE','$product_code','Portuguese','role','$expiry_date','Hindi','findOne','270124AIaZVd','$product_details.expiry_date','$product_details.production_date','timezone','$room','timezones-list','toLocaleString','staff','success','$product_details.product_name','$product_details','$_id.bin','917100rxqlDp','Chinese','French','Portuguese\x20(BR)','Spanish','status','multer','$products','1486938VmFhgq','German','$product_details.product_stock','$product_details.product_code','$_id','express'];a0_0x3ad0=function(){return _0x594fbb;};return a0_0x3ad0();}const a0_0x5cc954=a0_0x3b14;(function(_0x418b11,_0x1eb015){const _0x22e3c1=a0_0x3b14,_0x2e02e0=_0x418b11();while(!![]){try{const _0x57f059=-parseInt(_0x22e3c1(0x127))/0x1+parseInt(_0x22e3c1(0xe7))/0x2+parseInt(_0x22e3c1(0xfb))/0x3+parseInt(_0x22e3c1(0x10b))/0x4+-parseInt(_0x22e3c1(0xf3))/0x5+parseInt(_0x22e3c1(0x121))/0x6*(-parseInt(_0x22e3c1(0x10f))/0x7)+parseInt(_0x22e3c1(0x123))/0x8;if(_0x57f059===_0x1eb015)break;else _0x2e02e0['push'](_0x2e02e0['shift']());}catch(_0x4c4abf){_0x2e02e0['push'](_0x2e02e0['shift']());}}}(a0_0x3ad0,0x4270f));const express=require(a0_0x5cc954(0x100)),app=express(),router=express['Router'](),multer=require(a0_0x5cc954(0xf9)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x5cc954(0x12b)),auth=require(a0_0x5cc954(0x10a));var timezones=require(a0_0x5cc954(0xec));const users=require(a0_0x5cc954(0x11f));function a0_0x3b14(_0xe1dd0c,_0x2f90f1){const _0x3ad08b=a0_0x3ad0();return a0_0x3b14=function(_0x3b148a,_0x68147a){_0x3b148a=_0x3b148a-0xe4;let _0x3aafae=_0x3ad08b[_0x3b148a];return _0x3aafae;},a0_0x3b14(_0xe1dd0c,_0x2f90f1);}router[a0_0x5cc954(0x12c)](a0_0x5cc954(0x122),auth,async(_0x1ef851,_0x5dfec7)=>{const _0x41038d=a0_0x5cc954;try{const {username:_0x506082,email:_0x525af4,role:_0x127451}=_0x1ef851[_0x41038d(0x10d)],_0x3f3c49=_0x1ef851[_0x41038d(0x10d)],_0x1ac81b=await profile[_0x41038d(0xe6)]({'email':_0x3f3c49[_0x41038d(0x125)]}),_0x4d2e95=await master_shop['find']();console[_0x41038d(0x11b)]('master',_0x4d2e95);let _0x2992fa;if(_0x3f3c49[_0x41038d(0x132)]==_0x41038d(0xee)){const _0x13bef9=await staff[_0x41038d(0xe6)]({'email':_0x3f3c49[_0x41038d(0x125)]});_0x2992fa=await warehouse[_0x41038d(0x12d)]([{'$match':{'status':_0x41038d(0x128),'name':_0x13bef9['warehouse']}},{'$group':{'_id':_0x41038d(0x113),'name':{'$first':_0x41038d(0x113)}}}]);}else _0x2992fa=await warehouse[_0x41038d(0x12d)]([{'$match':{'status':_0x41038d(0x128)}},{'$group':{'_id':_0x41038d(0x113),'name':{'$first':_0x41038d(0x113)}}}]);const _0x268616=new Date()[_0x41038d(0xed)]('en-US',{'timeZone':_0x4d2e95[0x0][_0x41038d(0xea)]});console[_0x41038d(0x11b)](_0x41038d(0xea),_0x268616);if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0x111)){var _0x83d7bd=users['English'];console['log'](_0x83d7bd);}else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0xe5))var _0x83d7bd=users[_0x41038d(0xe5)];else{if(_0x4d2e95[0x0]['language']==_0x41038d(0xfc))var _0x83d7bd=users[_0x41038d(0xfc)];else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0xf7))var _0x83d7bd=users[_0x41038d(0xf7)];else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0xf5))var _0x83d7bd=users[_0x41038d(0xf5)];else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0xf6))var _0x83d7bd=users[_0x41038d(0x131)];else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0xf4))var _0x83d7bd=users[_0x41038d(0xf4)];else{if(_0x4d2e95[0x0][_0x41038d(0x107)]==_0x41038d(0x116))var _0x83d7bd=users[_0x41038d(0x11d)];}}}}}}}_0x5dfec7[_0x41038d(0x12a)]('warehousemap_incoming',{'success':_0x1ef851[_0x41038d(0x117)](_0x41038d(0xef)),'errors':_0x1ef851[_0x41038d(0x117)](_0x41038d(0x115)),'role':_0x3f3c49,'profile':_0x1ac81b,'master_shop':_0x4d2e95,'timezones':timezones,'language':_0x83d7bd,'warehouse':_0x2992fa});}catch(_0x1bd563){console[_0x41038d(0x11b)](_0x1bd563),_0x5dfec7[_0x41038d(0xf8)](0xc8)[_0x41038d(0x102)]({'message':_0x1bd563[_0x41038d(0x12e)]});}}),router['post']('/MapData',async(_0x513b5a,_0x2b4e03)=>{const _0x4d3eca=a0_0x5cc954,{warehouseNew:_0x47439c,rooms:_0x51f84a,Type:_0x5f3ccf}=_0x513b5a[_0x4d3eca(0x105)],_0x559239=await warehouse['aggregate']([{'$unwind':'$product_details'},{'$match':{'name':_0x47439c,'room':_0x51f84a,'product_details.type':_0x5f3ccf}},{'$group':{'_id':{'bay':_0x4d3eca(0x109),'bin':_0x4d3eca(0x104),'type':_0x4d3eca(0x124),'floorlevel':_0x4d3eca(0x114)},'products':{'$push':{'product_name':_0x4d3eca(0xf0),'product_quantity':_0x4d3eca(0xfd),'product_code':_0x4d3eca(0xfe)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':[_0x4d3eca(0xfd),0x0]},'then':'$product_details.product_stock','else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x4d3eca(0x129),'bin':_0x4d3eca(0xf2),'type':_0x4d3eca(0x118),'floorlevel':'$_id.floorlevel','products':{'$filter':{'input':_0x4d3eca(0xfa),'as':_0x4d3eca(0x11a),'cond':{'$gt':['$$product.product_quantity',0x0]}}},'totalQuantity':0x1}}]);_0x2b4e03['json'](_0x559239);}),router[a0_0x5cc954(0x10e)](a0_0x5cc954(0x11c),async(_0x458335,_0x2e245e)=>{const _0x5eb45f=a0_0x5cc954,{warehouseNew:_0x513adf,rooms:_0x5650e9,room_cat:_0x5e1e1d}=_0x458335[_0x5eb45f(0x105)];let _0x2e850f;if(_0x5e1e1d=='All')_0x2e850f=await warehouse[_0x5eb45f(0x12d)]([{'$unwind':_0x5eb45f(0xf1)},{'$match':{'name':_0x513adf}},{'$group':{'_id':{'bay':'$product_details.bay','product':_0x5eb45f(0xf0),'expiry':_0x5eb45f(0xe8)},'count':{'$sum':_0x5eb45f(0xfd)},'production_date':{'$first':_0x5eb45f(0xe9)},'expiry_date':{'$first':_0x5eb45f(0xe8)},'batch_code':{'$first':_0x5eb45f(0x103)},'product_code':{'$first':_0x5eb45f(0xfe)}}},{'$group':{'_id':'$_id.bay','products':{'$push':{'product':'$_id.product','quantity':_0x5eb45f(0x112),'production_date':'$production_date','expiry_date':_0x5eb45f(0xe4),'batch_code':'$batch_code','product_code':_0x5eb45f(0x130)}},'totalQuantity':{'$sum':_0x5eb45f(0x112)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':'$_id','products':0x1,'totalQuantity':0x1}}]),console[_0x5eb45f(0x11b)](_0x5e1e1d);else{}_0x2e245e['json'](_0x2e850f);}),router['post'](a0_0x5cc954(0x126),async(_0x34d836,_0x54d275)=>{const _0x257c42=a0_0x5cc954;try{const {warehouse_name:_0x20bc86,A:_0x94e0db,B:_0xbf0aaf}=_0x34d836['body'];var _0x1e04cb='';_0x94e0db==_0x257c42(0x120)?_0xbf0aaf==_0x257c42(0x108)?_0x1e04cb=[{'$match':{'name':_0x20bc86,'status':_0x257c42(0x128),'room':'Rack\x20A'}},{'$group':{'_id':_0x257c42(0xff),'room_name':{'$first':_0x257c42(0xeb)}}},{'$sort':{'room_name':0x1}}]:_0x1e04cb=[{'$match':{'name':_0x20bc86,'status':_0x257c42(0x128)}},{'$group':{'_id':_0x257c42(0xff),'room_name':{'$first':_0x257c42(0xeb)}}},{'$sort':{'room_name':0x1}}]:_0x1e04cb=[{'$match':{'name':_0x20bc86,'status':_0x257c42(0x128)}},{'$group':{'_id':_0x257c42(0xff),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}];const _0x2fc9a5=await warehouse['aggregate'](_0x1e04cb);_0x54d275[_0x257c42(0xf8)](0xc8)[_0x257c42(0x102)](_0x2fc9a5);}catch(_0xa64372){_0x54d275['status'](0x190)[_0x257c42(0x102)]({'errorMessage':_0xa64372['message']});}}),router[a0_0x5cc954(0x10e)](a0_0x5cc954(0x101),async(_0x24ad65,_0x19c8e6)=>{const _0x3e1bd9=a0_0x5cc954;try{const {warehouse_name:_0x22fbdd,cat:_0x1b435c,valNew:_0x2e9df6}=_0x24ad65['body'];var _0x497df3='',_0x23cc93='';if(_0x1b435c==_0x3e1bd9(0x110))_0x497df3=_0x3e1bd9(0x11e),_0x2e9df6==_0x3e1bd9(0x108)?_0x23cc93=[{'$match':{'status':'Enabled','warehouse_category':_0x1b435c,'name':{'$ne':_0x497df3},'name':_0x3e1bd9(0x12f)}},{'$group':{'_id':_0x3e1bd9(0x113),'room_name':{'$first':_0x3e1bd9(0x113)}}},{'$sort':{'room_name':0x1}}]:_0x23cc93=[{'$match':{'status':'Enabled','warehouse_category':_0x1b435c,'name':{'$ne':_0x497df3}}},{'$group':{'_id':_0x3e1bd9(0x113),'room_name':{'$first':_0x3e1bd9(0x113)}}},{'$sort':{'room_name':0x1}}];else _0x1b435c=='Finished\x20Goods'?(_0x497df3=_0x3e1bd9(0x106),_0x23cc93=[{'$match':{'status':_0x3e1bd9(0x128),'warehouse_category':_0x1b435c,'name':{'$ne':_0x497df3}}},{'$group':{'_id':_0x3e1bd9(0x113),'room_name':{'$first':_0x3e1bd9(0x113)}}},{'$sort':{'room_name':0x1}}]):_0x23cc93=[{'$match':{'status':_0x3e1bd9(0x128)}},{'$group':{'_id':_0x3e1bd9(0x113),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];const _0x2c96ea=await warehouse[_0x3e1bd9(0x12d)](_0x23cc93);_0x19c8e6['status'](0xc8)[_0x3e1bd9(0x102)](_0x2c96ea);}catch(_0x5e5b6f){_0x19c8e6['status'](0x190)[_0x3e1bd9(0x102)]({'errorMessage':_0x5e5b6f[_0x3e1bd9(0x12e)]}),console[_0x3e1bd9(0x11b)](_0x5e5b6f);}}),router[a0_0x5cc954(0x10e)](a0_0x5cc954(0x119),async(_0x3e0805,_0x85f041)=>{const _0xdbb1c7=a0_0x5cc954;try{const {warehouse_name:_0x5ee564,cat:_0x192ae9}=_0x3e0805['body'],_0x5c7996=await warehouse['aggregate']([{'$match':{'status':_0xdbb1c7(0x128),'warehouse_category':_0x192ae9,'name':_0x5ee564}},{'$group':{'_id':_0xdbb1c7(0xeb),'room_name':{'$first':_0xdbb1c7(0xeb)}}},{'$sort':{'room_name':0x1}}]);_0x85f041[_0xdbb1c7(0xf8)](0xc8)[_0xdbb1c7(0x102)](_0x5c7996);}catch(_0x14919c){_0x85f041['status'](0x190)[_0xdbb1c7(0x102)]({'errorMessage':_0x14919c['message']});}}),module[a0_0x5cc954(0x10c)]=router;