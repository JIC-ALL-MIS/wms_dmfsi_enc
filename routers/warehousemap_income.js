const a0_0x222113=a0_0x4a57;(function(_0x453e6b,_0x3feb29){const _0x51a8f0=a0_0x4a57,_0x34c299=_0x453e6b();while(!![]){try{const _0x3c581c=-parseInt(_0x51a8f0(0x119))/0x1*(-parseInt(_0x51a8f0(0x120))/0x2)+parseInt(_0x51a8f0(0x116))/0x3+parseInt(_0x51a8f0(0x10d))/0x4+parseInt(_0x51a8f0(0xee))/0x5*(parseInt(_0x51a8f0(0x136))/0x6)+-parseInt(_0x51a8f0(0x125))/0x7*(parseInt(_0x51a8f0(0x129))/0x8)+-parseInt(_0x51a8f0(0xeb))/0x9*(-parseInt(_0x51a8f0(0x115))/0xa)+-parseInt(_0x51a8f0(0xf6))/0xb*(parseInt(_0x51a8f0(0x11b))/0xc);if(_0x3c581c===_0x3feb29)break;else _0x34c299['push'](_0x34c299['shift']());}catch(_0x486ceb){_0x34c299['push'](_0x34c299['shift']());}}}(a0_0x6159,0xddb36));const express=require(a0_0x222113(0x108)),app=express(),router=express[a0_0x222113(0x102)](),multer=require('multer'),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x222113(0x107)),auth=require('../middleware/auth');var timezones=require('timezones-list');function a0_0x4a57(_0x1ea336,_0x48e0ce){const _0x6159a7=a0_0x6159();return a0_0x4a57=function(_0x4a57d9,_0x174775){_0x4a57d9=_0x4a57d9-0xe5;let _0x382b14=_0x6159a7[_0x4a57d9];return _0x382b14;},a0_0x4a57(_0x1ea336,_0x48e0ce);}function a0_0x6159(){const _0x3beed4=['$production_date','email','errors','English\x20(US)','Router','success','log','$$product.product_quantity','exports','../models/all_models','express','/MapData2','$_id.product','$count','master','2205480xfDFMD','product','DRY\x20STORAGE','$_id.bin','$product_details.production_date','/Rooms_data3','staff','Enabled','10cWgAgx','4961793xyPZDZ','pack','warehousemap_incoming','24049obTatp','$expiry_date','111624GVuzfx','findOne','body','aggregate','/MapData','6qlaxUF','All','Arabic\x20(ae)','status','$name','147035eimRpz','Hindi','Raw\x20Materials','message','528ejvWxE','$product_details.product_code','Rack\x20A','$_id.bay','$product_details.batch_code','$product_details.expiry_date','$batch_code','English','Chinese','Spanish','Finished\x20Goods','raw','$_id.floorlevel','236346xVTpnw','json','/Rooms_data2','$_id.type','post','get','../public/language/languages.json','$_id','$product_code','German','$product_details','$product_details.bin','12967569CKkTyA','timezone','$product_details.product_stock','105LbGWzd','find','$product_details.product_name','language','Portuguese\x20(BR)','/view','$room','/Rooms_data','2662PAVFXw','user','$product_details.type','$product_details.floorlevel','$product_details.bay','en-US','flash','$products'];a0_0x6159=function(){return _0x3beed4;};return a0_0x6159();}const users=require(a0_0x222113(0xe5));router[a0_0x222113(0x13b)](a0_0x222113(0xf3),auth,async(_0x320e2e,_0x11b30f)=>{const _0x127c34=a0_0x222113;try{const {username:_0x1b83f2,email:_0x220c5b,role:_0x3337e0}=_0x320e2e[_0x127c34(0xf7)],_0x32bc5e=_0x320e2e['user'],_0x49105a=await profile[_0x127c34(0x11c)]({'email':_0x32bc5e[_0x127c34(0xff)]}),_0x5d4c60=await master_shop[_0x127c34(0xef)]();console[_0x127c34(0x104)](_0x127c34(0x10c),_0x5d4c60);let _0x434bc3;if(_0x32bc5e['role']==_0x127c34(0x113)){const _0x1e1733=await staff[_0x127c34(0x11c)]({'email':_0x32bc5e[_0x127c34(0xff)]});_0x434bc3=await warehouse[_0x127c34(0x11e)]([{'$match':{'status':_0x127c34(0x114),'name':_0x1e1733['warehouse']}},{'$group':{'_id':'$name','name':{'$first':'$name'}}}]);}else _0x434bc3=await warehouse[_0x127c34(0x11e)]([{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x127c34(0x124),'name':{'$first':_0x127c34(0x124)}}}]);const _0x2fa65c=new Date()['toLocaleString'](_0x127c34(0xfb),{'timeZone':_0x5d4c60[0x0][_0x127c34(0xec)]});console[_0x127c34(0x104)]('timezone',_0x2fa65c);if(_0x5d4c60[0x0][_0x127c34(0xf1)]==_0x127c34(0x101)){var _0x4b305e=users[_0x127c34(0x130)];console['log'](_0x4b305e);}else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]=='Hindi')var _0x4b305e=users[_0x127c34(0x126)];else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]==_0x127c34(0xe8))var _0x4b305e=users['German'];else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]==_0x127c34(0x132))var _0x4b305e=users[_0x127c34(0x132)];else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]=='French')var _0x4b305e=users['French'];else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]==_0x127c34(0xf2))var _0x4b305e=users['Portuguese'];else{if(_0x5d4c60[0x0]['language']==_0x127c34(0x131))var _0x4b305e=users[_0x127c34(0x131)];else{if(_0x5d4c60[0x0][_0x127c34(0xf1)]==_0x127c34(0x122))var _0x4b305e=users['Arabic'];}}}}}}}_0x11b30f['render'](_0x127c34(0x118),{'success':_0x320e2e[_0x127c34(0xfc)](_0x127c34(0x103)),'errors':_0x320e2e[_0x127c34(0xfc)](_0x127c34(0x100)),'role':_0x32bc5e,'profile':_0x49105a,'master_shop':_0x5d4c60,'timezones':timezones,'language':_0x4b305e,'warehouse':_0x434bc3});}catch(_0x474c0e){console[_0x127c34(0x104)](_0x474c0e),_0x11b30f[_0x127c34(0x123)](0xc8)[_0x127c34(0x137)]({'message':_0x474c0e[_0x127c34(0x128)]});}}),router['post'](a0_0x222113(0x11f),async(_0x51d3dd,_0x392683)=>{const _0x3ab5fa=a0_0x222113,{warehouseNew:_0x1f5458,rooms:_0x2a033f,Type:_0x54bcec}=_0x51d3dd[_0x3ab5fa(0x11d)],_0x23606e=await warehouse['aggregate']([{'$unwind':_0x3ab5fa(0xe9)},{'$match':{'name':_0x1f5458,'room':_0x2a033f,'product_details.type':_0x54bcec}},{'$group':{'_id':{'bay':_0x3ab5fa(0xfa),'bin':_0x3ab5fa(0xea),'type':_0x3ab5fa(0xf8),'floorlevel':_0x3ab5fa(0xf9)},'products':{'$push':{'product_name':_0x3ab5fa(0xf0),'product_quantity':_0x3ab5fa(0xed),'product_code':_0x3ab5fa(0x12a)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':[_0x3ab5fa(0xed),0x0]},'then':'$product_details.product_stock','else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x3ab5fa(0x12c),'bin':_0x3ab5fa(0x110),'type':_0x3ab5fa(0x139),'floorlevel':_0x3ab5fa(0x135),'products':{'$filter':{'input':_0x3ab5fa(0xfd),'as':_0x3ab5fa(0x10e),'cond':{'$gt':[_0x3ab5fa(0x105),0x0]}}},'totalQuantity':0x1}}]);_0x392683[_0x3ab5fa(0x137)](_0x23606e);}),router[a0_0x222113(0x13a)](a0_0x222113(0x109),async(_0xd8d0f5,_0x5cd67b)=>{const _0x8337ce=a0_0x222113,{warehouseNew:_0x330c6e,rooms:_0x95943d,room_cat:_0x1fcc48}=_0xd8d0f5[_0x8337ce(0x11d)];let _0x39f252;if(_0x1fcc48==_0x8337ce(0x121))_0x39f252=await warehouse[_0x8337ce(0x11e)]([{'$unwind':_0x8337ce(0xe9)},{'$match':{'name':_0x330c6e}},{'$group':{'_id':{'bay':_0x8337ce(0xfa),'product':'$product_details.product_name','expiry':_0x8337ce(0x12e)},'count':{'$sum':_0x8337ce(0xed)},'production_date':{'$first':_0x8337ce(0x111)},'expiry_date':{'$first':_0x8337ce(0x12e)},'batch_code':{'$first':_0x8337ce(0x12d)},'product_code':{'$first':'$product_details.product_code'}}},{'$group':{'_id':_0x8337ce(0x12c),'products':{'$push':{'product':_0x8337ce(0x10a),'quantity':_0x8337ce(0x10b),'production_date':_0x8337ce(0xfe),'expiry_date':_0x8337ce(0x11a),'batch_code':_0x8337ce(0x12f),'product_code':_0x8337ce(0xe7)}},'totalQuantity':{'$sum':_0x8337ce(0x10b)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x8337ce(0xe6),'products':0x1,'totalQuantity':0x1}}]),console['log'](_0x1fcc48);else{}_0x5cd67b['json'](_0x39f252);}),router['post'](a0_0x222113(0xf5),async(_0x5654f7,_0xccb94e)=>{const _0x19c405=a0_0x222113;try{const {warehouse_name:_0x11f924,A:_0x2912cd,B:_0xf67779}=_0x5654f7['body'];var _0x221e2d='';_0x2912cd==_0x19c405(0x134)?_0xf67779==_0x19c405(0x117)?_0x221e2d=[{'$match':{'name':_0x11f924,'status':'Enabled','room':_0x19c405(0x12b)}},{'$group':{'_id':_0x19c405(0xe6),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0x221e2d=[{'$match':{'name':_0x11f924,'status':'Enabled'}},{'$group':{'_id':'$_id','room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0x221e2d=[{'$match':{'name':_0x11f924,'status':_0x19c405(0x114)}},{'$group':{'_id':'$_id','room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}];const _0x27d095=await warehouse[_0x19c405(0x11e)](_0x221e2d);_0xccb94e[_0x19c405(0x123)](0xc8)['json'](_0x27d095);}catch(_0x3c8f69){_0xccb94e[_0x19c405(0x123)](0x190)['json']({'errorMessage':_0x3c8f69['message']});}}),router[a0_0x222113(0x13a)](a0_0x222113(0x138),async(_0x16e96,_0x246dd0)=>{const _0x29e2bd=a0_0x222113;try{const {warehouse_name:_0x535308,cat:_0x5754c2,valNew:_0x30a44a}=_0x16e96[_0x29e2bd(0x11d)];var _0x17106d='',_0x21c3a1='';if(_0x5754c2==_0x29e2bd(0x127))_0x17106d='Return\x20Goods',_0x30a44a==_0x29e2bd(0x117)?_0x21c3a1=[{'$match':{'status':_0x29e2bd(0x114),'warehouse_category':_0x5754c2,'name':{'$ne':_0x17106d},'name':_0x29e2bd(0x10f)}},{'$group':{'_id':_0x29e2bd(0x124),'room_name':{'$first':_0x29e2bd(0x124)}}},{'$sort':{'room_name':0x1}}]:_0x21c3a1=[{'$match':{'status':_0x29e2bd(0x114),'warehouse_category':_0x5754c2,'name':{'$ne':_0x17106d}}},{'$group':{'_id':'$name','room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];else _0x5754c2==_0x29e2bd(0x133)?(_0x17106d='QA\x20Warehouse',_0x21c3a1=[{'$match':{'status':_0x29e2bd(0x114),'warehouse_category':_0x5754c2,'name':{'$ne':_0x17106d}}},{'$group':{'_id':_0x29e2bd(0x124),'room_name':{'$first':_0x29e2bd(0x124)}}},{'$sort':{'room_name':0x1}}]):_0x21c3a1=[{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x29e2bd(0x124),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];const _0x69cd2=await warehouse[_0x29e2bd(0x11e)](_0x21c3a1);_0x246dd0[_0x29e2bd(0x123)](0xc8)[_0x29e2bd(0x137)](_0x69cd2);}catch(_0x5a1faa){_0x246dd0[_0x29e2bd(0x123)](0x190)[_0x29e2bd(0x137)]({'errorMessage':_0x5a1faa[_0x29e2bd(0x128)]}),console['log'](_0x5a1faa);}}),router[a0_0x222113(0x13a)](a0_0x222113(0x112),async(_0x3d6c9e,_0x3d81d3)=>{const _0x217172=a0_0x222113;try{const {warehouse_name:_0x10c035,cat:_0x2c20a8}=_0x3d6c9e[_0x217172(0x11d)],_0x552381=await warehouse[_0x217172(0x11e)]([{'$match':{'status':_0x217172(0x114),'warehouse_category':_0x2c20a8,'name':_0x10c035}},{'$group':{'_id':_0x217172(0xf4),'room_name':{'$first':_0x217172(0xf4)}}},{'$sort':{'room_name':0x1}}]);_0x3d81d3[_0x217172(0x123)](0xc8)[_0x217172(0x137)](_0x552381);}catch(_0x4ff872){_0x3d81d3[_0x217172(0x123)](0x190)[_0x217172(0x137)]({'errorMessage':_0x4ff872['message']});}}),module[a0_0x222113(0x106)]=router;