function a0_0x5293(){const _0x57c84b=['findOne','$$product.product_quantity','$expiry_date','flash','Arabic','1112TfYodB','$product_details.product_name','get','aggregate','4873ZPjJaU','$products','$product_details.bin','../models/all_models','All','Enabled','exports','2tSMBUs','French','Arabic\x20(ae)','$product_details','$_id.bin','staff','$_id','../public/language/languages.json','$room','$product_details.product_stock','/MapData2','$product_details.expiry_date','/Rooms_data2','/MapData','$product_details.product_code','Finished\x20Goods','en-US','Spanish','$product_details.batch_code','$_id.bay','toLocaleString','German','email','10KvGhgm','body','message','315869nDVOKl','log','warehouse','post','render','$batch_code','master','$name','Raw\x20Materials','2196750YZXzIE','errors','status','Router','user','$production_date','json','timezone','58248qYhAsJ','language','timezones-list','$_id.product','success','$product_details.type','English','$product_details.floorlevel','role','Return\x20Goods','express','pack','Portuguese\x20(BR)','Chinese','$product_details.bay','../middleware/auth','multer','$_id.floorlevel','364938ETIpmX','11730rZlAHp','warehousemap_incoming','376244JCeMfk','$product_code','192270fZfPxL'];a0_0x5293=function(){return _0x57c84b;};return a0_0x5293();}const a0_0x2ff6f5=a0_0x1b1a;(function(_0x2d036d,_0x9565ee){const _0x329c7a=a0_0x1b1a,_0x4b94de=_0x2d036d();while(!![]){try{const _0x2f692f=-parseInt(_0x329c7a(0x18d))/0x1*(parseInt(_0x329c7a(0x173))/0x2)+parseInt(_0x329c7a(0x162))/0x3+parseInt(_0x329c7a(0x160))/0x4+-parseInt(_0x329c7a(0x18a))/0x5*(parseInt(_0x329c7a(0x196))/0x6)+parseInt(_0x329c7a(0x15d))/0x7+parseInt(_0x329c7a(0x168))/0x8*(parseInt(_0x329c7a(0x19e))/0x9)+-parseInt(_0x329c7a(0x15e))/0xa*(-parseInt(_0x329c7a(0x16c))/0xb);if(_0x2f692f===_0x9565ee)break;else _0x4b94de['push'](_0x4b94de['shift']());}catch(_0x4c8735){_0x4b94de['push'](_0x4b94de['shift']());}}}(a0_0x5293,0x8df25));const express=require(a0_0x2ff6f5(0x1a8)),app=express(),router=express[a0_0x2ff6f5(0x199)](),multer=require(a0_0x2ff6f5(0x1ae)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x2ff6f5(0x16f)),auth=require(a0_0x2ff6f5(0x1ad));var timezones=require(a0_0x2ff6f5(0x1a0));function a0_0x1b1a(_0x59ce48,_0x58392e){const _0x5293d1=a0_0x5293();return a0_0x1b1a=function(_0x1b1ad6,_0xc7bd2c){_0x1b1ad6=_0x1b1ad6-0x15c;let _0x44bedc=_0x5293d1[_0x1b1ad6];return _0x44bedc;},a0_0x1b1a(_0x59ce48,_0x58392e);}const users=require(a0_0x2ff6f5(0x17a));router[a0_0x2ff6f5(0x16a)]('/view',auth,async(_0x47e867,_0x1742f5)=>{const _0x360356=a0_0x2ff6f5;try{const {username:_0x540f5a,email:_0x17e4b0,role:_0x25aef5}=_0x47e867[_0x360356(0x19a)],_0x9bc357=_0x47e867[_0x360356(0x19a)],_0xa5903b=await profile[_0x360356(0x163)]({'email':_0x9bc357[_0x360356(0x189)]}),_0x190677=await master_shop['find']();console[_0x360356(0x18e)](_0x360356(0x193),_0x190677);let _0x3ff752;if(_0x9bc357[_0x360356(0x1a6)]==_0x360356(0x178)){const _0x3c98c2=await staff[_0x360356(0x163)]({'email':_0x9bc357[_0x360356(0x189)]});_0x3ff752=await warehouse[_0x360356(0x16b)]([{'$match':{'status':_0x360356(0x171),'name':_0x3c98c2[_0x360356(0x18f)]}},{'$group':{'_id':_0x360356(0x194),'name':{'$first':_0x360356(0x194)}}}]);}else _0x3ff752=await warehouse['aggregate']([{'$match':{'status':_0x360356(0x171)}},{'$group':{'_id':_0x360356(0x194),'name':{'$first':_0x360356(0x194)}}}]);const _0x497646=new Date()[_0x360356(0x187)](_0x360356(0x183),{'timeZone':_0x190677[0x0][_0x360356(0x19d)]});console[_0x360356(0x18e)](_0x360356(0x19d),_0x497646);if(_0x190677[0x0][_0x360356(0x19f)]=='English\x20(US)'){var _0x3a2688=users[_0x360356(0x1a4)];console[_0x360356(0x18e)](_0x3a2688);}else{if(_0x190677[0x0][_0x360356(0x19f)]=='Hindi')var _0x3a2688=users['Hindi'];else{if(_0x190677[0x0]['language']==_0x360356(0x188))var _0x3a2688=users[_0x360356(0x188)];else{if(_0x190677[0x0][_0x360356(0x19f)]==_0x360356(0x184))var _0x3a2688=users[_0x360356(0x184)];else{if(_0x190677[0x0]['language']=='French')var _0x3a2688=users[_0x360356(0x174)];else{if(_0x190677[0x0]['language']==_0x360356(0x1aa))var _0x3a2688=users['Portuguese'];else{if(_0x190677[0x0]['language']==_0x360356(0x1ab))var _0x3a2688=users[_0x360356(0x1ab)];else{if(_0x190677[0x0][_0x360356(0x19f)]==_0x360356(0x175))var _0x3a2688=users[_0x360356(0x167)];}}}}}}}_0x1742f5[_0x360356(0x191)](_0x360356(0x15f),{'success':_0x47e867['flash'](_0x360356(0x1a2)),'errors':_0x47e867[_0x360356(0x166)](_0x360356(0x197)),'role':_0x9bc357,'profile':_0xa5903b,'master_shop':_0x190677,'timezones':timezones,'language':_0x3a2688,'warehouse':_0x3ff752});}catch(_0x216f74){console[_0x360356(0x18e)](_0x216f74),_0x1742f5[_0x360356(0x198)](0xc8)[_0x360356(0x19c)]({'message':_0x216f74[_0x360356(0x18c)]});}}),router[a0_0x2ff6f5(0x190)](a0_0x2ff6f5(0x180),async(_0x20c4ce,_0x2a9be1)=>{const _0x2b5e05=a0_0x2ff6f5,{warehouseNew:_0x49f48b,rooms:_0x3be529,Type:_0xedc8e1}=_0x20c4ce[_0x2b5e05(0x18b)],_0x9bdf9b=await warehouse[_0x2b5e05(0x16b)]([{'$unwind':'$product_details'},{'$match':{'name':_0x49f48b,'room':_0x3be529,'product_details.type':_0xedc8e1}},{'$group':{'_id':{'bay':_0x2b5e05(0x1ac),'bin':_0x2b5e05(0x16e),'type':_0x2b5e05(0x1a3),'floorlevel':_0x2b5e05(0x1a5)},'products':{'$push':{'product_name':_0x2b5e05(0x169),'product_quantity':_0x2b5e05(0x17c),'product_code':_0x2b5e05(0x181)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':['$product_details.product_stock',0x0]},'then':'$product_details.product_stock','else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x2b5e05(0x186),'bin':_0x2b5e05(0x177),'type':'$_id.type','floorlevel':_0x2b5e05(0x15c),'products':{'$filter':{'input':_0x2b5e05(0x16d),'as':'product','cond':{'$gt':[_0x2b5e05(0x164),0x0]}}},'totalQuantity':0x1}}]);_0x2a9be1[_0x2b5e05(0x19c)](_0x9bdf9b);}),router['post'](a0_0x2ff6f5(0x17d),async(_0x417719,_0xca572b)=>{const _0xb6f409=a0_0x2ff6f5,{warehouseNew:_0x3d26eb,rooms:_0x5a1c42,room_cat:_0x11b8fd}=_0x417719[_0xb6f409(0x18b)];let _0x102a16;if(_0x11b8fd==_0xb6f409(0x170))_0x102a16=await warehouse[_0xb6f409(0x16b)]([{'$unwind':_0xb6f409(0x176)},{'$match':{'name':_0x3d26eb}},{'$group':{'_id':{'bay':'$product_details.bay','product':_0xb6f409(0x169),'expiry':_0xb6f409(0x17e)},'count':{'$sum':_0xb6f409(0x17c)},'production_date':{'$first':'$product_details.production_date'},'expiry_date':{'$first':_0xb6f409(0x17e)},'batch_code':{'$first':_0xb6f409(0x185)},'product_code':{'$first':_0xb6f409(0x181)}}},{'$group':{'_id':'$_id.bay','products':{'$push':{'product':_0xb6f409(0x1a1),'quantity':'$count','production_date':_0xb6f409(0x19b),'expiry_date':_0xb6f409(0x165),'batch_code':_0xb6f409(0x192),'product_code':_0xb6f409(0x161)}},'totalQuantity':{'$sum':'$count'}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':'$_id','products':0x1,'totalQuantity':0x1}}]),console[_0xb6f409(0x18e)](_0x11b8fd);else{}_0xca572b[_0xb6f409(0x19c)](_0x102a16);}),router['post']('/Rooms_data',async(_0x11272f,_0x266dd7)=>{const _0x133ed3=a0_0x2ff6f5;try{const {warehouse_name:_0x69d3ac,A:_0x1e0bf1,B:_0x336e23}=_0x11272f['body'];var _0xd93503='';_0x1e0bf1=='raw'?_0x336e23==_0x133ed3(0x1a9)?_0xd93503=[{'$match':{'name':_0x69d3ac,'status':_0x133ed3(0x171),'room':'Rack\x20A'}},{'$group':{'_id':_0x133ed3(0x179),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]:_0xd93503=[{'$match':{'name':_0x69d3ac,'status':_0x133ed3(0x171)}},{'$group':{'_id':_0x133ed3(0x179),'room_name':{'$first':_0x133ed3(0x17b)}}},{'$sort':{'room_name':0x1}}]:_0xd93503=[{'$match':{'name':_0x69d3ac,'status':'Enabled'}},{'$group':{'_id':'$_id','room_name':{'$first':_0x133ed3(0x17b)}}},{'$sort':{'room_name':0x1}}];const _0x19236f=await warehouse[_0x133ed3(0x16b)](_0xd93503);_0x266dd7[_0x133ed3(0x198)](0xc8)[_0x133ed3(0x19c)](_0x19236f);}catch(_0x1f85d8){_0x266dd7[_0x133ed3(0x198)](0x190)['json']({'errorMessage':_0x1f85d8[_0x133ed3(0x18c)]});}}),router[a0_0x2ff6f5(0x190)](a0_0x2ff6f5(0x17f),async(_0x32aa95,_0x4cc053)=>{const _0x16711d=a0_0x2ff6f5;try{const {warehouse_name:_0xcb87b4,cat:_0x233139,valNew:_0x33a764}=_0x32aa95[_0x16711d(0x18b)];var _0x4b44e0='',_0x2bfb3e='';if(_0x233139==_0x16711d(0x195))_0x4b44e0=_0x16711d(0x1a7),_0x33a764==_0x16711d(0x1a9)?_0x2bfb3e=[{'$match':{'status':_0x16711d(0x171),'warehouse_category':_0x233139,'name':{'$ne':_0x4b44e0},'name':'DRY\x20STORAGE'}},{'$group':{'_id':_0x16711d(0x194),'room_name':{'$first':_0x16711d(0x194)}}},{'$sort':{'room_name':0x1}}]:_0x2bfb3e=[{'$match':{'status':_0x16711d(0x171),'warehouse_category':_0x233139,'name':{'$ne':_0x4b44e0}}},{'$group':{'_id':_0x16711d(0x194),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}];else _0x233139==_0x16711d(0x182)?(_0x4b44e0='QA\x20Warehouse',_0x2bfb3e=[{'$match':{'status':_0x16711d(0x171),'warehouse_category':_0x233139,'name':{'$ne':_0x4b44e0}}},{'$group':{'_id':_0x16711d(0x194),'room_name':{'$first':_0x16711d(0x194)}}},{'$sort':{'room_name':0x1}}]):_0x2bfb3e=[{'$match':{'status':_0x16711d(0x171)}},{'$group':{'_id':'$name','room_name':{'$first':_0x16711d(0x194)}}},{'$sort':{'room_name':0x1}}];const _0x544752=await warehouse[_0x16711d(0x16b)](_0x2bfb3e);_0x4cc053['status'](0xc8)[_0x16711d(0x19c)](_0x544752);}catch(_0x5bd8d3){_0x4cc053[_0x16711d(0x198)](0x190)[_0x16711d(0x19c)]({'errorMessage':_0x5bd8d3[_0x16711d(0x18c)]}),console[_0x16711d(0x18e)](_0x5bd8d3);}}),router[a0_0x2ff6f5(0x190)]('/Rooms_data3',async(_0x2a1438,_0x457e96)=>{const _0x57eb3d=a0_0x2ff6f5;try{const {warehouse_name:_0xb06c1c,cat:_0x35d3f9}=_0x2a1438[_0x57eb3d(0x18b)],_0x39dbc5=await warehouse['aggregate']([{'$match':{'status':_0x57eb3d(0x171),'warehouse_category':_0x35d3f9,'name':_0xb06c1c}},{'$group':{'_id':_0x57eb3d(0x17b),'room_name':{'$first':_0x57eb3d(0x17b)}}},{'$sort':{'room_name':0x1}}]);_0x457e96[_0x57eb3d(0x198)](0xc8)[_0x57eb3d(0x19c)](_0x39dbc5);}catch(_0x1e4320){_0x457e96[_0x57eb3d(0x198)](0x190)[_0x57eb3d(0x19c)]({'errorMessage':_0x1e4320[_0x57eb3d(0x18c)]});}}),module[a0_0x2ff6f5(0x172)]=router;