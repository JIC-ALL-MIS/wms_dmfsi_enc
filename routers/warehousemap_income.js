const a0_0x480644=a0_0x3e91;(function(_0x70e5d2,_0x4d94be){const _0x28787a=a0_0x3e91,_0xf7dd16=_0x70e5d2();while(!![]){try{const _0x290e25=parseInt(_0x28787a(0xcc))/0x1*(-parseInt(_0x28787a(0xa3))/0x2)+parseInt(_0x28787a(0xad))/0x3+parseInt(_0x28787a(0xb9))/0x4+parseInt(_0x28787a(0xbb))/0x5+parseInt(_0x28787a(0xc4))/0x6+parseInt(_0x28787a(0xc2))/0x7*(-parseInt(_0x28787a(0xd0))/0x8)+-parseInt(_0x28787a(0x9c))/0x9*(parseInt(_0x28787a(0xd7))/0xa);if(_0x290e25===_0x4d94be)break;else _0xf7dd16['push'](_0xf7dd16['shift']());}catch(_0x1b2ecc){_0xf7dd16['push'](_0xf7dd16['shift']());}}}(a0_0x52e9,0x8ed43));const express=require(a0_0x480644(0xd2)),app=express(),router=express[a0_0x480644(0xbc)](),multer=require(a0_0x480644(0xe1)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x480644(0xa8)),auth=require(a0_0x480644(0xe7));function a0_0x3e91(_0xc03d34,_0x519565){const _0x52e95b=a0_0x52e9();return a0_0x3e91=function(_0x3e91fc,_0x43f273){_0x3e91fc=_0x3e91fc-0x9a;let _0x3c5bf5=_0x52e95b[_0x3e91fc];return _0x3c5bf5;},a0_0x3e91(_0xc03d34,_0x519565);}var timezones=require('timezones-list');function a0_0x52e9(){const _0x38d550=['$name','/MapData','get','post','$room','Hindi','success','2mrZonR','Portuguese\x20(BR)','$_id.product','German','416lfsXvE','json','express','Arabic','$product_details.expiry_date','status','product','10uqSgMZ','$count','flash','staff','$product_details.batch_code','$product_details.floorlevel','/Rooms_data2','Return\x20Goods','find','French','multer','$product_details.bay','$expiry_date','$product_details.production_date','Finished\x20Goods','../public/language/languages.json','../middleware/auth','timezone','Spanish','/MapData2','Portuguese','/view','$product_details.product_name','9555453jmkaJM','$product_details','body','$_id.bin','Chinese','$_id.floorlevel','language','502862iMSqVM','$product_details.product_stock','$product_details.product_code','warehouse','QA\x20Warehouse','../models/all_models','errors','findOne','English\x20(US)','toLocaleString','3030978rgcNlB','Raw\x20Materials','Enabled','$products','render','email','aggregate','$product_code','role','$_id','/Rooms_data3','$_id.bay','739072goekIc','$_id.type','5402100ZueerV','Router','log','user','$batch_code','message','Arabic\x20(ae)','30611tSUJrT','master','608928xPTziD'];a0_0x52e9=function(){return _0x38d550;};return a0_0x52e9();}const users=require(a0_0x480644(0xe6));router[a0_0x480644(0xc7)](a0_0x480644(0x9a),auth,async(_0x31c9ef,_0x3ad248)=>{const _0x1964bc=a0_0x480644;try{const {username:_0xbd8812,email:_0x553fce,role:_0xc13855}=_0x31c9ef[_0x1964bc(0xbe)],_0x5d876f=_0x31c9ef[_0x1964bc(0xbe)],_0x89b89a=await profile[_0x1964bc(0xaa)]({'email':_0x5d876f[_0x1964bc(0xb2)]}),_0x30891e=await master_shop[_0x1964bc(0xdf)]();console[_0x1964bc(0xbd)](_0x1964bc(0xc3),_0x30891e);let _0x473400;if(_0x5d876f[_0x1964bc(0xb5)]==_0x1964bc(0xda)){const _0x939ee1=await staff['findOne']({'email':_0x5d876f[_0x1964bc(0xb2)]});_0x473400=await warehouse[_0x1964bc(0xb3)]([{'$match':{'status':_0x1964bc(0xaf),'name':_0x939ee1[_0x1964bc(0xa6)]}},{'$group':{'_id':_0x1964bc(0xc5),'name':{'$first':'$name'}}}]);}else _0x473400=await warehouse[_0x1964bc(0xb3)]([{'$match':{'status':_0x1964bc(0xaf)}},{'$group':{'_id':_0x1964bc(0xc5),'name':{'$first':'$name'}}}]);const _0x30d085=new Date()[_0x1964bc(0xac)]('en-US',{'timeZone':_0x30891e[0x0]['timezone']});console[_0x1964bc(0xbd)](_0x1964bc(0xe8),_0x30d085);if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xab)){var _0x142002=users['English'];console['log'](_0x142002);}else{if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xca))var _0x142002=users[_0x1964bc(0xca)];else{if(_0x30891e[0x0][_0x1964bc(0xa2)]=='German')var _0x142002=users[_0x1964bc(0xcf)];else{if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xe9))var _0x142002=users[_0x1964bc(0xe9)];else{if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xe0))var _0x142002=users['French'];else{if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xcd))var _0x142002=users[_0x1964bc(0xeb)];else{if(_0x30891e[0x0][_0x1964bc(0xa2)]==_0x1964bc(0xa0))var _0x142002=users[_0x1964bc(0xa0)];else{if(_0x30891e[0x0]['language']==_0x1964bc(0xc1))var _0x142002=users[_0x1964bc(0xd3)];}}}}}}}_0x3ad248[_0x1964bc(0xb1)]('warehousemap_incoming',{'success':_0x31c9ef[_0x1964bc(0xd9)](_0x1964bc(0xcb)),'errors':_0x31c9ef[_0x1964bc(0xd9)](_0x1964bc(0xa9)),'role':_0x5d876f,'profile':_0x89b89a,'master_shop':_0x30891e,'timezones':timezones,'language':_0x142002,'warehouse':_0x473400});}catch(_0x299632){console[_0x1964bc(0xbd)](_0x299632),_0x3ad248[_0x1964bc(0xd5)](0xc8)[_0x1964bc(0xd1)]({'message':_0x299632[_0x1964bc(0xc0)]});}}),router[a0_0x480644(0xc8)](a0_0x480644(0xc6),async(_0x469860,_0x561e3e)=>{const _0x56e16a=a0_0x480644,{warehouseNew:_0x2256d1,rooms:_0x4c6c88,Type:_0x2e8175}=_0x469860[_0x56e16a(0x9e)],_0x4d95b8=await warehouse[_0x56e16a(0xb3)]([{'$unwind':'$product_details'},{'$match':{'name':_0x2256d1,'room':_0x4c6c88,'product_details.type':_0x2e8175}},{'$group':{'_id':{'bay':_0x56e16a(0xe2),'bin':'$product_details.bin','type':'$product_details.type','floorlevel':_0x56e16a(0xdc)},'products':{'$push':{'product_name':'$product_details.product_name','product_quantity':'$product_details.product_stock','product_code':'$product_details.product_code'}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':[_0x56e16a(0xa4),0x0]},'then':'$product_details.product_stock','else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x56e16a(0xb8),'bin':_0x56e16a(0x9f),'type':_0x56e16a(0xba),'floorlevel':_0x56e16a(0xa1),'products':{'$filter':{'input':_0x56e16a(0xb0),'as':_0x56e16a(0xd6),'cond':{'$gt':['$$product.product_quantity',0x0]}}},'totalQuantity':0x1}}]);_0x561e3e[_0x56e16a(0xd1)](_0x4d95b8);}),router[a0_0x480644(0xc8)](a0_0x480644(0xea),async(_0x46c0ce,_0x3e3131)=>{const _0x630d4e=a0_0x480644,{warehouseNew:_0x1fd874,rooms:_0x44eafe,room_cat:_0xdc040f}=_0x46c0ce[_0x630d4e(0x9e)];let _0xa77c5d;if(_0xdc040f=='All')_0xa77c5d=await warehouse[_0x630d4e(0xb3)]([{'$unwind':_0x630d4e(0x9d)},{'$match':{'name':_0x1fd874}},{'$group':{'_id':{'bay':_0x630d4e(0xe2),'product':_0x630d4e(0x9b),'expiry':'$product_details.expiry_date'},'count':{'$sum':_0x630d4e(0xa4)},'production_date':{'$first':_0x630d4e(0xe4)},'expiry_date':{'$first':_0x630d4e(0xd4)},'batch_code':{'$first':_0x630d4e(0xdb)},'product_code':{'$first':_0x630d4e(0xa5)}}},{'$group':{'_id':_0x630d4e(0xb8),'products':{'$push':{'product':_0x630d4e(0xce),'quantity':_0x630d4e(0xd8),'production_date':'$production_date','expiry_date':_0x630d4e(0xe3),'batch_code':_0x630d4e(0xbf),'product_code':_0x630d4e(0xb4)}},'totalQuantity':{'$sum':'$count'}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x630d4e(0xb6),'products':0x1,'totalQuantity':0x1}}]),console[_0x630d4e(0xbd)](_0xdc040f);else{}_0x3e3131['json'](_0xa77c5d);}),router['post']('/Rooms_data',async(_0x399cb8,_0x1738d9)=>{const _0x2620f9=a0_0x480644;try{const {warehouse_name:_0x5d8de8,A:_0x3c6e89,B:_0x2b59c1}=_0x399cb8['body'];var _0x27eb16='';_0x3c6e89=='raw'?_0x2b59c1=='pack'?_0x27eb16=[{'$match':{'name':_0x5d8de8,'status':'Enabled','room':'Rack\x20A'}},{'$group':{'_id':_0x2620f9(0xb6),'room_name':{'$first':_0x2620f9(0xc9)}}},{'$sort':{'room_name':0x1}}]:_0x27eb16=[{'$match':{'name':_0x5d8de8,'status':_0x2620f9(0xaf)}},{'$group':{'_id':_0x2620f9(0xb6),'room_name':{'$first':_0x2620f9(0xc9)}}},{'$sort':{'room_name':0x1}}]:_0x27eb16=[{'$match':{'name':_0x5d8de8,'status':'Enabled'}},{'$group':{'_id':'$_id','room_name':{'$first':_0x2620f9(0xc9)}}},{'$sort':{'room_name':0x1}}];const _0x44e6b1=await warehouse[_0x2620f9(0xb3)](_0x27eb16);_0x1738d9['status'](0xc8)['json'](_0x44e6b1);}catch(_0x1cf8bc){_0x1738d9[_0x2620f9(0xd5)](0x190)['json']({'errorMessage':_0x1cf8bc[_0x2620f9(0xc0)]});}}),router[a0_0x480644(0xc8)](a0_0x480644(0xdd),async(_0x35ac82,_0x235f22)=>{const _0x284207=a0_0x480644;try{const {warehouse_name:_0x5cc221,cat:_0x5e0ce0,valNew:_0xbb7329}=_0x35ac82['body'];var _0x103cf2='',_0x4c95c2='';if(_0x5e0ce0==_0x284207(0xae))_0x103cf2=_0x284207(0xde),_0xbb7329=='pack'?_0x4c95c2=[{'$match':{'status':'Enabled','warehouse_category':_0x5e0ce0,'name':{'$ne':_0x103cf2},'name':'DRY\x20STORAGE'}},{'$group':{'_id':'$name','room_name':{'$first':_0x284207(0xc5)}}},{'$sort':{'room_name':0x1}}]:_0x4c95c2=[{'$match':{'status':_0x284207(0xaf),'warehouse_category':_0x5e0ce0,'name':{'$ne':_0x103cf2}}},{'$group':{'_id':'$name','room_name':{'$first':_0x284207(0xc5)}}},{'$sort':{'room_name':0x1}}];else _0x5e0ce0==_0x284207(0xe5)?(_0x103cf2=_0x284207(0xa7),_0x4c95c2=[{'$match':{'status':_0x284207(0xaf),'warehouse_category':_0x5e0ce0,'name':{'$ne':_0x103cf2}}},{'$group':{'_id':_0x284207(0xc5),'room_name':{'$first':'$name'}}},{'$sort':{'room_name':0x1}}]):_0x4c95c2=[{'$match':{'status':'Enabled'}},{'$group':{'_id':_0x284207(0xc5),'room_name':{'$first':_0x284207(0xc5)}}},{'$sort':{'room_name':0x1}}];const _0x46c4b8=await warehouse['aggregate'](_0x4c95c2);_0x235f22[_0x284207(0xd5)](0xc8)[_0x284207(0xd1)](_0x46c4b8);}catch(_0x2a7578){_0x235f22['status'](0x190)[_0x284207(0xd1)]({'errorMessage':_0x2a7578[_0x284207(0xc0)]}),console['log'](_0x2a7578);}}),router[a0_0x480644(0xc8)](a0_0x480644(0xb7),async(_0x1f709b,_0x5bb2c3)=>{const _0x28e7a6=a0_0x480644;try{const {warehouse_name:_0x4a8ceb,cat:_0x965689}=_0x1f709b[_0x28e7a6(0x9e)],_0x2dbea3=await warehouse['aggregate']([{'$match':{'status':'Enabled','warehouse_category':_0x965689,'name':_0x4a8ceb}},{'$group':{'_id':_0x28e7a6(0xc9),'room_name':{'$first':'$room'}}},{'$sort':{'room_name':0x1}}]);_0x5bb2c3[_0x28e7a6(0xd5)](0xc8)[_0x28e7a6(0xd1)](_0x2dbea3);}catch(_0x350911){_0x5bb2c3['status'](0x190)[_0x28e7a6(0xd1)]({'errorMessage':_0x350911['message']});}}),module['exports']=router;