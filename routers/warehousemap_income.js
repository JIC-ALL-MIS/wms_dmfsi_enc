const a0_0x5f2fbe=a0_0x2d27;(function(_0x1edf2b,_0x3d5dc1){const _0x2bd466=a0_0x2d27,_0x4ecf43=_0x1edf2b();while(!![]){try{const _0x118f03=parseInt(_0x2bd466(0xea))/0x1*(parseInt(_0x2bd466(0xe4))/0x2)+-parseInt(_0x2bd466(0x101))/0x3+parseInt(_0x2bd466(0x105))/0x4+parseInt(_0x2bd466(0xdb))/0x5+parseInt(_0x2bd466(0xf3))/0x6*(parseInt(_0x2bd466(0xb9))/0x7)+-parseInt(_0x2bd466(0x103))/0x8+-parseInt(_0x2bd466(0xb7))/0x9;if(_0x118f03===_0x3d5dc1)break;else _0x4ecf43['push'](_0x4ecf43['shift']());}catch(_0x34bc67){_0x4ecf43['push'](_0x4ecf43['shift']());}}}(a0_0x3667,0x6d4a9));const express=require(a0_0x5f2fbe(0xdd)),app=express(),router=express[a0_0x5f2fbe(0xca)](),multer=require(a0_0x5f2fbe(0xe5)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x5f2fbe(0xd4)),auth=require('../middleware/auth');var timezones=require(a0_0x5f2fbe(0xba));function a0_0x3667(){const _0x56cf55=['$name','flash','$product_details.product_name','$production_date','toLocaleString','role','242734yivXlW','multer','Hindi','errors','Arabic','Finished\x20Goods','4azSLpx','$product_details.product_stock','$_id','Portuguese','/Rooms_data','English','/Rooms_data3','$product_code','All','66FWyaLY','$_id.floorlevel','findOne','Arabic\x20(ae)','$product_details.floorlevel','$product_details.batch_code','status','/MapData','$products','$product_details.bay','$product_details.product_code','post','$_id.bay','$product_details','2660925IEBXab','Raw\x20Materials','3215960amxDGc','raw','3092144nDTvyw','email','staff','language','6236748DuAgqs','$product_details.expiry_date','449974BdPBCl','timezones-list','$count','$_id.product','$room','../public/language/languages.json','$expiry_date','French','$_id.type','get','/MapData2','exports','pack','$_id.bin','$product_details.bin','user','log','Router','json','find','German','render','Enabled','$product_details.type','message','timezone','Chinese','../models/all_models','aggregate','Spanish','warehouse','master','success','body','2319965LgXQLL','$$product.product_quantity','express'];a0_0x3667=function(){return _0x56cf55;};return a0_0x3667();}const users=require(a0_0x5f2fbe(0xbe));function a0_0x2d27(_0x154f73,_0x2a38e7){const _0x3667e1=a0_0x3667();return a0_0x2d27=function(_0x2d276f,_0x4221a9){_0x2d276f=_0x2d276f-0xb7;let _0x403642=_0x3667e1[_0x2d276f];return _0x403642;},a0_0x2d27(_0x154f73,_0x2a38e7);}router[a0_0x5f2fbe(0xc2)]('/view',auth,async(_0x3c4af7,_0x357895)=>{const _0x28e40c=a0_0x5f2fbe;try{const {username:_0x58c97d,email:_0x18fae3,role:_0x2af715}=_0x3c4af7[_0x28e40c(0xc8)],_0x5bd68e=_0x3c4af7['user'],_0x58e32d=await profile[_0x28e40c(0xf5)]({'email':_0x5bd68e[_0x28e40c(0x106)]}),_0x41c22f=await master_shop[_0x28e40c(0xcc)]();console[_0x28e40c(0xc9)](_0x28e40c(0xd8),_0x41c22f);let _0x1ea763;if(_0x5bd68e[_0x28e40c(0xe3)]==_0x28e40c(0x107)){const _0xc3c954=await staff['findOne']({'email':_0x5bd68e[_0x28e40c(0x106)]});_0x1ea763=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0xc3c954[_0x28e40c(0xd7)]}},{'$group':{'_id':_0x28e40c(0xde),'name':{'$first':_0x28e40c(0xde)}}}]);}else _0x1ea763=await warehouse[_0x28e40c(0xd5)]([{'$match':{'status':_0x28e40c(0xcf)}},{'$group':{'_id':_0x28e40c(0xde),'name':{'$first':_0x28e40c(0xde)}}}]);const _0x249666=new Date()[_0x28e40c(0xe2)]('en-US',{'timeZone':_0x41c22f[0x0][_0x28e40c(0xd2)]});console[_0x28e40c(0xc9)]('timezone',_0x249666);if(_0x41c22f[0x0][_0x28e40c(0x108)]=='English\x20(US)'){var _0x5c12d3=users[_0x28e40c(0xef)];console[_0x28e40c(0xc9)](_0x5c12d3);}else{if(_0x41c22f[0x0][_0x28e40c(0x108)]==_0x28e40c(0xe6))var _0x5c12d3=users[_0x28e40c(0xe6)];else{if(_0x41c22f[0x0][_0x28e40c(0x108)]==_0x28e40c(0xcd))var _0x5c12d3=users['German'];else{if(_0x41c22f[0x0][_0x28e40c(0x108)]==_0x28e40c(0xd6))var _0x5c12d3=users[_0x28e40c(0xd6)];else{if(_0x41c22f[0x0][_0x28e40c(0x108)]=='French')var _0x5c12d3=users[_0x28e40c(0xc0)];else{if(_0x41c22f[0x0]['language']=='Portuguese\x20(BR)')var _0x5c12d3=users[_0x28e40c(0xed)];else{if(_0x41c22f[0x0]['language']==_0x28e40c(0xd3))var _0x5c12d3=users[_0x28e40c(0xd3)];else{if(_0x41c22f[0x0][_0x28e40c(0x108)]==_0x28e40c(0xf6))var _0x5c12d3=users[_0x28e40c(0xe8)];}}}}}}}_0x357895[_0x28e40c(0xce)]('warehousemap_incoming',{'success':_0x3c4af7[_0x28e40c(0xdf)](_0x28e40c(0xd9)),'errors':_0x3c4af7['flash'](_0x28e40c(0xe7)),'role':_0x5bd68e,'profile':_0x58e32d,'master_shop':_0x41c22f,'timezones':timezones,'language':_0x5c12d3,'warehouse':_0x1ea763});}catch(_0xee882){console[_0x28e40c(0xc9)](_0xee882),_0x357895[_0x28e40c(0xf9)](0xc8)[_0x28e40c(0xcb)]({'message':_0xee882[_0x28e40c(0xd1)]});}}),router[a0_0x5f2fbe(0xfe)](a0_0x5f2fbe(0xfa),async(_0xb58934,_0x1df634)=>{const _0x4694e5=a0_0x5f2fbe,{warehouseNew:_0x292dfd,rooms:_0x118a16,Type:_0xa5c7a}=_0xb58934[_0x4694e5(0xda)],_0x3a417b=await warehouse[_0x4694e5(0xd5)]([{'$unwind':'$product_details'},{'$match':{'name':_0x292dfd,'room':_0x118a16,'product_details.type':_0xa5c7a}},{'$group':{'_id':{'bay':'$product_details.bay','bin':_0x4694e5(0xc7),'type':_0x4694e5(0xd0),'floorlevel':_0x4694e5(0xf7)},'products':{'$push':{'product_name':_0x4694e5(0xe0),'product_quantity':_0x4694e5(0xeb),'product_code':_0x4694e5(0xfd)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':['$product_details.product_stock',0x0]},'then':_0x4694e5(0xeb),'else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x4694e5(0xff),'bin':_0x4694e5(0xc6),'type':_0x4694e5(0xc1),'floorlevel':_0x4694e5(0xf4),'products':{'$filter':{'input':_0x4694e5(0xfb),'as':'product','cond':{'$gt':[_0x4694e5(0xdc),0x0]}}},'totalQuantity':0x1}}]);_0x1df634[_0x4694e5(0xcb)](_0x3a417b);}),router['post'](a0_0x5f2fbe(0xc3),async(_0x4d3e5d,_0x293087)=>{const _0x12683d=a0_0x5f2fbe,{warehouseNew:_0x4d2750,rooms:_0xd389a0,room_cat:_0x379485}=_0x4d3e5d[_0x12683d(0xda)];let _0x43b773;if(_0x379485==_0x12683d(0xf2))_0x43b773=await warehouse[_0x12683d(0xd5)]([{'$unwind':_0x12683d(0x100)},{'$match':{'name':_0x4d2750}},{'$group':{'_id':{'bay':_0x12683d(0xfc),'product':'$product_details.product_name','expiry':_0x12683d(0xb8)},'count':{'$sum':_0x12683d(0xeb)},'production_date':{'$first':'$product_details.production_date'},'expiry_date':{'$first':_0x12683d(0xb8)},'batch_code':{'$first':_0x12683d(0xf8)},'product_code':{'$first':_0x12683d(0xfd)}}},{'$group':{'_id':_0x12683d(0xff),'products':{'$push':{'product':_0x12683d(0xbc),'quantity':_0x12683d(0xbb),'production_date':_0x12683d(0xe1),'expiry_date':_0x12683d(0xbf),'batch_code':'$batch_code','product_code':_0x12683d(0xf1)}},'totalQuantity':{'$sum':_0x12683d(0xbb)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x12683d(0xec),'products':0x1,'totalQuantity':0x1}}]),console[_0x12683d(0xc9)](_0x379485);else{}_0x293087[_0x12683d(0xcb)](_0x43b773);}),router['post'](a0_0x5f2fbe(0xee),async(_0x220f2b,_0x3861b0)=>{const _0x304550=a0_0x5f2fbe;try{const {warehouse_name:_0xacf33d,A:_0x3df699,B:_0x3b3c32}=_0x220f2b['body'];var _0x1b30e0='';_0x3df699==_0x304550(0x104)?_0x3b3c32=='pack'?_0x1b30e0=[{'$match':{'name':_0xacf33d,'status':'Enabled','room':'Rack\x20A'}},{'$group':{'_id':'$_id','room_name':{'$first':_0x304550(0xbd)}}},{'$sort':{'room_name':0x1}}]:_0x1b30e0=[{'$match':{'name':_0xacf33d,'status':_0x304550(0xcf)}},{'$group':{'_id':_0x304550(0xec),'room_name':{'$first':_0x304550(0xbd)}}},{'$sort':{'room_name':0x1}}]:_0x1b30e0=[{'$match':{'name':_0xacf33d,'status':_0x304550(0xcf)}},{'$group':{'_id':_0x304550(0xec),'room_name':{'$first':_0x304550(0xbd)}}},{'$sort':{'room_name':0x1}}];const _0x2ecb36=await warehouse['aggregate'](_0x1b30e0);_0x3861b0[_0x304550(0xf9)](0xc8)[_0x304550(0xcb)](_0x2ecb36);}catch(_0x428520){_0x3861b0[_0x304550(0xf9)](0x190)[_0x304550(0xcb)]({'errorMessage':_0x428520[_0x304550(0xd1)]});}}),router[a0_0x5f2fbe(0xfe)]('/Rooms_data2',async(_0x579d3f,_0x5c981e)=>{const _0x50e15a=a0_0x5f2fbe;try{const {warehouse_name:_0x3fb93c,cat:_0x271b84,valNew:_0x3d594e}=_0x579d3f[_0x50e15a(0xda)];var _0x223710='',_0x9fdec9='';if(_0x271b84==_0x50e15a(0x102))_0x223710='Return\x20Goods',_0x3d594e==_0x50e15a(0xc5)?_0x9fdec9=[{'$match':{'status':_0x50e15a(0xcf),'warehouse_category':_0x271b84,'name':{'$ne':_0x223710},'name':'DRY\x20STORAGE'}},{'$group':{'_id':_0x50e15a(0xde),'room_name':{'$first':_0x50e15a(0xde)}}},{'$sort':{'room_name':0x1}}]:_0x9fdec9=[{'$match':{'status':_0x50e15a(0xcf),'warehouse_category':_0x271b84,'name':{'$ne':_0x223710}}},{'$group':{'_id':_0x50e15a(0xde),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];else _0x271b84==_0x50e15a(0xe9)?(_0x223710='QA\x20Warehouse',_0x9fdec9=[{'$match':{'status':_0x50e15a(0xcf),'warehouse_category':_0x271b84,'name':{'$ne':_0x223710}}},{'$group':{'_id':_0x50e15a(0xde),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}]):_0x9fdec9=[{'$match':{'status':_0x50e15a(0xcf)}},{'$group':{'_id':_0x50e15a(0xde),'room_name':{'$first':_0x50e15a(0xde)}}},{'$sort':{'room_name':0x1}}];const _0x447e0f=await warehouse['aggregate'](_0x9fdec9);_0x5c981e[_0x50e15a(0xf9)](0xc8)[_0x50e15a(0xcb)](_0x447e0f);}catch(_0x14090d){_0x5c981e[_0x50e15a(0xf9)](0x190)[_0x50e15a(0xcb)]({'errorMessage':_0x14090d[_0x50e15a(0xd1)]}),console[_0x50e15a(0xc9)](_0x14090d);}}),router[a0_0x5f2fbe(0xfe)](a0_0x5f2fbe(0xf0),async(_0x5740e9,_0x4d5239)=>{const _0x5d7cda=a0_0x5f2fbe;try{const {warehouse_name:_0x360c0d,cat:_0x9b9b0a}=_0x5740e9[_0x5d7cda(0xda)],_0x15b050=await warehouse['aggregate']([{'$match':{'status':_0x5d7cda(0xcf),'warehouse_category':_0x9b9b0a,'name':_0x360c0d}},{'$group':{'_id':_0x5d7cda(0xbd),'room_name':{'$first':_0x5d7cda(0xbd)}}},{'$sort':{'room_name':0x1}}]);_0x4d5239[_0x5d7cda(0xf9)](0xc8)[_0x5d7cda(0xcb)](_0x15b050);}catch(_0x182214){_0x4d5239[_0x5d7cda(0xf9)](0x190)[_0x5d7cda(0xcb)]({'errorMessage':_0x182214[_0x5d7cda(0xd1)]});}}),module[a0_0x5f2fbe(0xc4)]=router;