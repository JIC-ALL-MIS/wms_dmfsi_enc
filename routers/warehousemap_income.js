const a0_0x3c08bb=a0_0x459b;(function(_0x4bfb8d,_0x5a3ee0){const _0x1a2c9a=a0_0x459b,_0x197bd5=_0x4bfb8d();while(!![]){try{const _0x348c37=-parseInt(_0x1a2c9a(0x189))/0x1+-parseInt(_0x1a2c9a(0x1a7))/0x2+-parseInt(_0x1a2c9a(0x177))/0x3+parseInt(_0x1a2c9a(0x170))/0x4+parseInt(_0x1a2c9a(0x193))/0x5+-parseInt(_0x1a2c9a(0x19b))/0x6*(parseInt(_0x1a2c9a(0x175))/0x7)+parseInt(_0x1a2c9a(0x18b))/0x8;if(_0x348c37===_0x5a3ee0)break;else _0x197bd5['push'](_0x197bd5['shift']());}catch(_0x33512b){_0x197bd5['push'](_0x197bd5['shift']());}}}(a0_0x2f3f,0xb8b3a));const express=require('express'),app=express(),router=express[a0_0x3c08bb(0x160)](),multer=require(a0_0x3c08bb(0x196)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x3c08bb(0x184)),auth=require('../middleware/auth');function a0_0x2f3f(){const _0x3f4f0e=['$product_details.floorlevel','role','$_id.bin','get','Rack\x20A','$_id.product','5517912SwfIcV','json','English','warehousemap_incoming','warehouse','12887OKidmT','timezone','1354977hLgkLY','$product_details.product_stock','$_id.floorlevel','Finished\x20Goods','$product_details.product_name','Chinese','$count','QA\x20Warehouse','en-US','email','/MapData2','post','raw','../models/all_models','timezones-list','/Rooms_data','exports','Return\x20Goods','754771yCljMo','$product_details.product_code','12718680KBdanW','Raw\x20Materials','log','$_id','Hindi','Portuguese\x20(BR)','$_id.bay','$production_date','6917505uyfJtX','body','English\x20(US)','multer','product','findOne','Arabic\x20(ae)','pack','3234cWSEiK','$product_details.type','$product_details.batch_code','aggregate','Portuguese','Spanish','$name','/Rooms_data2','staff','flash','$expiry_date','All','2795094ixDXIn','Enabled','$product_details','Arabic','German','$products','render','$batch_code','../public/language/languages.json','Router','/Rooms_data3','message','status','user','$room','$product_details.bay','language','$product_details.expiry_date','French'];a0_0x2f3f=function(){return _0x3f4f0e;};return a0_0x2f3f();}function a0_0x459b(_0x2ccc87,_0x538f6e){const _0x2f3fd=a0_0x2f3f();return a0_0x459b=function(_0x459b35,_0x5925d6){_0x459b35=_0x459b35-0x158;let _0x378d58=_0x2f3fd[_0x459b35];return _0x378d58;},a0_0x459b(_0x2ccc87,_0x538f6e);}var timezones=require(a0_0x3c08bb(0x185));const users=require(a0_0x3c08bb(0x15f));router[a0_0x3c08bb(0x16d)]('/view',auth,async(_0x2506ab,_0x4bf351)=>{const _0x31764e=a0_0x3c08bb;try{const {username:_0x5ec28c,email:_0x57e2d7,role:_0x21dc99}=_0x2506ab[_0x31764e(0x164)],_0x27d631=_0x2506ab[_0x31764e(0x164)],_0x21f092=await profile['findOne']({'email':_0x27d631[_0x31764e(0x180)]}),_0x2c974f=await master_shop['find']();console[_0x31764e(0x18d)]('master',_0x2c974f);let _0x2f4455;if(_0x27d631[_0x31764e(0x16b)]==_0x31764e(0x1a3)){const _0x378762=await staff[_0x31764e(0x198)]({'email':_0x27d631['email']});_0x2f4455=await warehouse[_0x31764e(0x19e)]([{'$match':{'status':'Enabled','name':_0x378762[_0x31764e(0x174)]}},{'$group':{'_id':_0x31764e(0x1a1),'name':{'$first':_0x31764e(0x1a1)}}}]);}else _0x2f4455=await warehouse[_0x31764e(0x19e)]([{'$match':{'status':_0x31764e(0x158)}},{'$group':{'_id':'$name','name':{'$first':_0x31764e(0x1a1)}}}]);const _0x2367a7=new Date()['toLocaleString'](_0x31764e(0x17f),{'timeZone':_0x2c974f[0x0][_0x31764e(0x176)]});console['log'](_0x31764e(0x176),_0x2367a7);if(_0x2c974f[0x0][_0x31764e(0x167)]==_0x31764e(0x195)){var _0x1de1a5=users[_0x31764e(0x172)];console[_0x31764e(0x18d)](_0x1de1a5);}else{if(_0x2c974f[0x0][_0x31764e(0x167)]=='Hindi')var _0x1de1a5=users[_0x31764e(0x18f)];else{if(_0x2c974f[0x0][_0x31764e(0x167)]==_0x31764e(0x15b))var _0x1de1a5=users[_0x31764e(0x15b)];else{if(_0x2c974f[0x0][_0x31764e(0x167)]=='Spanish')var _0x1de1a5=users[_0x31764e(0x1a0)];else{if(_0x2c974f[0x0]['language']=='French')var _0x1de1a5=users[_0x31764e(0x169)];else{if(_0x2c974f[0x0][_0x31764e(0x167)]==_0x31764e(0x190))var _0x1de1a5=users[_0x31764e(0x19f)];else{if(_0x2c974f[0x0][_0x31764e(0x167)]==_0x31764e(0x17c))var _0x1de1a5=users[_0x31764e(0x17c)];else{if(_0x2c974f[0x0]['language']==_0x31764e(0x199))var _0x1de1a5=users[_0x31764e(0x15a)];}}}}}}}_0x4bf351[_0x31764e(0x15d)](_0x31764e(0x173),{'success':_0x2506ab[_0x31764e(0x1a4)]('success'),'errors':_0x2506ab[_0x31764e(0x1a4)]('errors'),'role':_0x27d631,'profile':_0x21f092,'master_shop':_0x2c974f,'timezones':timezones,'language':_0x1de1a5,'warehouse':_0x2f4455});}catch(_0x463f4e){console[_0x31764e(0x18d)](_0x463f4e),_0x4bf351[_0x31764e(0x163)](0xc8)[_0x31764e(0x171)]({'message':_0x463f4e[_0x31764e(0x162)]});}}),router[a0_0x3c08bb(0x182)]('/MapData',async(_0x241d9d,_0x20043c)=>{const _0x1343c7=a0_0x3c08bb,{warehouseNew:_0x3a67d3,rooms:_0x227b1c,Type:_0x552e99}=_0x241d9d[_0x1343c7(0x194)],_0x292e3f=await warehouse[_0x1343c7(0x19e)]([{'$unwind':_0x1343c7(0x159)},{'$match':{'name':_0x3a67d3,'room':_0x227b1c,'product_details.type':_0x552e99}},{'$group':{'_id':{'bay':_0x1343c7(0x166),'bin':'$product_details.bin','type':_0x1343c7(0x19c),'floorlevel':_0x1343c7(0x16a)},'products':{'$push':{'product_name':_0x1343c7(0x17b),'product_quantity':_0x1343c7(0x178),'product_code':_0x1343c7(0x18a)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':[_0x1343c7(0x178),0x0]},'then':_0x1343c7(0x178),'else':0x0}}}}},{'$project':{'_id':0x0,'bay':'$_id.bay','bin':_0x1343c7(0x16c),'type':'$_id.type','floorlevel':_0x1343c7(0x179),'products':{'$filter':{'input':_0x1343c7(0x15c),'as':_0x1343c7(0x197),'cond':{'$gt':['$$product.product_quantity',0x0]}}},'totalQuantity':0x1}}]);_0x20043c['json'](_0x292e3f);}),router[a0_0x3c08bb(0x182)](a0_0x3c08bb(0x181),async(_0x423886,_0x349504)=>{const _0x212f90=a0_0x3c08bb,{warehouseNew:_0x4603b2,rooms:_0x36f29b,room_cat:_0x364117}=_0x423886[_0x212f90(0x194)];let _0x3e3c68;if(_0x364117==_0x212f90(0x1a6))_0x3e3c68=await warehouse[_0x212f90(0x19e)]([{'$unwind':_0x212f90(0x159)},{'$match':{'name':_0x4603b2}},{'$group':{'_id':{'bay':_0x212f90(0x166),'product':_0x212f90(0x17b),'expiry':_0x212f90(0x168)},'count':{'$sum':_0x212f90(0x178)},'production_date':{'$first':'$product_details.production_date'},'expiry_date':{'$first':'$product_details.expiry_date'},'batch_code':{'$first':_0x212f90(0x19d)},'product_code':{'$first':'$product_details.product_code'}}},{'$group':{'_id':_0x212f90(0x191),'products':{'$push':{'product':_0x212f90(0x16f),'quantity':_0x212f90(0x17d),'production_date':_0x212f90(0x192),'expiry_date':_0x212f90(0x1a5),'batch_code':_0x212f90(0x15e),'product_code':'$product_code'}},'totalQuantity':{'$sum':_0x212f90(0x17d)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x212f90(0x18e),'products':0x1,'totalQuantity':0x1}}]),console[_0x212f90(0x18d)](_0x364117);else{}_0x349504['json'](_0x3e3c68);}),router[a0_0x3c08bb(0x182)](a0_0x3c08bb(0x186),async(_0x1369c5,_0x5780bf)=>{const _0x26690a=a0_0x3c08bb;try{const {warehouse_name:_0x58eb4b,A:_0x2459be,B:_0xb22abe}=_0x1369c5[_0x26690a(0x194)];var _0x545b0b='';_0x2459be==_0x26690a(0x183)?_0xb22abe=='pack'?_0x545b0b=[{'$match':{'name':_0x58eb4b,'status':_0x26690a(0x158),'room':_0x26690a(0x16e)}},{'$group':{'_id':'$_id','room_name':{'$first':_0x26690a(0x165)}}},{'$sort':{'room_name':0x1}}]:_0x545b0b=[{'$match':{'name':_0x58eb4b,'status':'Enabled'}},{'$group':{'_id':_0x26690a(0x18e),'room_name':{'$first':_0x26690a(0x165)}}},{'$sort':{'room_name':0x1}}]:_0x545b0b=[{'$match':{'name':_0x58eb4b,'status':_0x26690a(0x158)}},{'$group':{'_id':'$_id','room_name':{'$first':_0x26690a(0x165)}}},{'$sort':{'room_name':0x1}}];const _0xee20c1=await warehouse['aggregate'](_0x545b0b);_0x5780bf[_0x26690a(0x163)](0xc8)['json'](_0xee20c1);}catch(_0x76535b){_0x5780bf[_0x26690a(0x163)](0x190)[_0x26690a(0x171)]({'errorMessage':_0x76535b[_0x26690a(0x162)]});}}),router['post'](a0_0x3c08bb(0x1a2),async(_0x1b233a,_0x3a6dba)=>{const _0x3a40d8=a0_0x3c08bb;try{const {warehouse_name:_0x13eecb,cat:_0x1a935b,valNew:_0x20a78d}=_0x1b233a[_0x3a40d8(0x194)];var _0x24729a='',_0x3c8cb9='';if(_0x1a935b==_0x3a40d8(0x18c))_0x24729a=_0x3a40d8(0x188),_0x20a78d==_0x3a40d8(0x19a)?_0x3c8cb9=[{'$match':{'status':_0x3a40d8(0x158),'warehouse_category':_0x1a935b,'name':{'$ne':_0x24729a},'name':'DRY\x20STORAGE'}},{'$group':{'_id':_0x3a40d8(0x1a1),'room_name':{'$first':_0x3a40d8(0x1a1)}}},{'$sort':{'room_name':0x1}}]:_0x3c8cb9=[{'$match':{'status':_0x3a40d8(0x158),'warehouse_category':_0x1a935b,'name':{'$ne':_0x24729a}}},{'$group':{'_id':_0x3a40d8(0x1a1),'room_name':{'$first':_0x3a40d8(0x1a1)}}},{'$sort':{'room_name':0x1}}];else _0x1a935b==_0x3a40d8(0x17a)?(_0x24729a=_0x3a40d8(0x17e),_0x3c8cb9=[{'$match':{'status':_0x3a40d8(0x158),'warehouse_category':_0x1a935b,'name':{'$ne':_0x24729a}}},{'$group':{'_id':_0x3a40d8(0x1a1),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}]):_0x3c8cb9=[{'$match':{'status':_0x3a40d8(0x158)}},{'$group':{'_id':_0x3a40d8(0x1a1),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];const _0x1cb37b=await warehouse[_0x3a40d8(0x19e)](_0x3c8cb9);_0x3a6dba['status'](0xc8)[_0x3a40d8(0x171)](_0x1cb37b);}catch(_0xac9003){_0x3a6dba[_0x3a40d8(0x163)](0x190)[_0x3a40d8(0x171)]({'errorMessage':_0xac9003[_0x3a40d8(0x162)]}),console[_0x3a40d8(0x18d)](_0xac9003);}}),router['post'](a0_0x3c08bb(0x161),async(_0xa24ae2,_0x3d3f87)=>{const _0x312e88=a0_0x3c08bb;try{const {warehouse_name:_0x560390,cat:_0x27a2aa}=_0xa24ae2[_0x312e88(0x194)],_0x29df0b=await warehouse[_0x312e88(0x19e)]([{'$match':{'status':_0x312e88(0x158),'warehouse_category':_0x27a2aa,'name':_0x560390}},{'$group':{'_id':_0x312e88(0x165),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]);_0x3d3f87[_0x312e88(0x163)](0xc8)[_0x312e88(0x171)](_0x29df0b);}catch(_0x1dd6a0){_0x3d3f87[_0x312e88(0x163)](0x190)['json']({'errorMessage':_0x1dd6a0[_0x312e88(0x162)]});}}),module[a0_0x3c08bb(0x187)]=router;