const a0_0x7ba50d=a0_0x3b7b;function a0_0x3b7b(_0xebd448,_0x105513){const _0x2e4ac6=a0_0x2e4a();return a0_0x3b7b=function(_0x3b7ba3,_0x2c061b){_0x3b7ba3=_0x3b7ba3-0x13f;let _0xb2e2b9=_0x2e4ac6[_0x3b7ba3];return _0xb2e2b9;},a0_0x3b7b(_0xebd448,_0x105513);}(function(_0x2f5064,_0x15a0b6){const _0x37ee6d=a0_0x3b7b,_0x1ce076=_0x2f5064();while(!![]){try{const _0x4e4b47=-parseInt(_0x37ee6d(0x165))/0x1+-parseInt(_0x37ee6d(0x185))/0x2+-parseInt(_0x37ee6d(0x151))/0x3+parseInt(_0x37ee6d(0x15a))/0x4*(-parseInt(_0x37ee6d(0x175))/0x5)+-parseInt(_0x37ee6d(0x17c))/0x6*(parseInt(_0x37ee6d(0x168))/0x7)+parseInt(_0x37ee6d(0x17d))/0x8+parseInt(_0x37ee6d(0x189))/0x9*(parseInt(_0x37ee6d(0x178))/0xa);if(_0x4e4b47===_0x15a0b6)break;else _0x1ce076['push'](_0x1ce076['shift']());}catch(_0x528beb){_0x1ce076['push'](_0x1ce076['shift']());}}}(a0_0x2e4a,0xe6596));function a0_0x2e4a(){const _0x1dfd27=['exports','$_id.product','14cNEaNh','flash','Portuguese','pack','findOne','$_id.bin','$product_details','$expiry_date','Rack\x20A','French','English','$_id.bay','$product_details.product_code','7045IHFAQi','$_id.type','$production_date','6396340uSpyZV','role','product','warehousemap_incoming','3350082zbWuRW','14925240TNPUeK','$products','post','timezone','master','Raw\x20Materials','language','$product_details.product_stock','761508LcKbwI','body','$product_details.production_date','/Rooms_data3','45DOjiLa','Hindi','$_id','$product_code','/Rooms_data','success','Router','render','en-US','$batch_code','express','/view','email','$product_details.product_name','Chinese','json','$$product.product_quantity','All','errors','$product_details.expiry_date','$_id.floorlevel','/MapData2','status','$product_details.type','Spanish','Return\x20Goods','../middleware/auth','DRY\x20STORAGE','Finished\x20Goods','user','German','$room','../public/language/languages.json','$name','293070dfvkfJ','multer','Enabled','aggregate','QA\x20Warehouse','/MapData','English\x20(US)','get','toLocaleString','3444xPpoyh','$product_details.bin','$product_details.batch_code','$count','message','Arabic\x20(ae)','$product_details.bay','../models/all_models','log','find','$product_details.floorlevel','1312028FCktPd'];a0_0x2e4a=function(){return _0x1dfd27;};return a0_0x2e4a();}const express=require(a0_0x7ba50d(0x193)),app=express(),router=express[a0_0x7ba50d(0x18f)](),multer=require(a0_0x7ba50d(0x152)),{profile,master_shop,email_settings,warehouse,purchases,staff}=require(a0_0x7ba50d(0x161)),auth=require(a0_0x7ba50d(0x149));var timezones=require('timezones-list');const users=require(a0_0x7ba50d(0x14f));router[a0_0x7ba50d(0x158)](a0_0x7ba50d(0x194),auth,async(_0x9b43a1,_0x42733f)=>{const _0x46193b=a0_0x7ba50d;try{const {username:_0x30ffbf,email:_0x2199ce,role:_0x3f765f}=_0x9b43a1[_0x46193b(0x14c)],_0xfb2882=_0x9b43a1['user'],_0xfb8e64=await profile['findOne']({'email':_0xfb2882[_0x46193b(0x195)]}),_0x3ee60f=await master_shop[_0x46193b(0x163)]();console[_0x46193b(0x162)](_0x46193b(0x181),_0x3ee60f);let _0x5bc9a4;if(_0xfb2882[_0x46193b(0x179)]=='staff'){const _0x5860e7=await staff[_0x46193b(0x16c)]({'email':_0xfb2882['email']});_0x5bc9a4=await warehouse[_0x46193b(0x154)]([{'$match':{'status':_0x46193b(0x153),'name':_0x5860e7['warehouse']}},{'$group':{'_id':'$name','name':{'$first':_0x46193b(0x150)}}}]);}else _0x5bc9a4=await warehouse[_0x46193b(0x154)]([{'$match':{'status':_0x46193b(0x153)}},{'$group':{'_id':'$name','name':{'$first':_0x46193b(0x150)}}}]);const _0x41b70d=new Date()[_0x46193b(0x159)](_0x46193b(0x191),{'timeZone':_0x3ee60f[0x0][_0x46193b(0x180)]});console[_0x46193b(0x162)](_0x46193b(0x180),_0x41b70d);if(_0x3ee60f[0x0]['language']==_0x46193b(0x157)){var _0x161ce3=users[_0x46193b(0x172)];console['log'](_0x161ce3);}else{if(_0x3ee60f[0x0][_0x46193b(0x183)]==_0x46193b(0x18a))var _0x161ce3=users['Hindi'];else{if(_0x3ee60f[0x0][_0x46193b(0x183)]==_0x46193b(0x14d))var _0x161ce3=users[_0x46193b(0x14d)];else{if(_0x3ee60f[0x0][_0x46193b(0x183)]==_0x46193b(0x147))var _0x161ce3=users['Spanish'];else{if(_0x3ee60f[0x0][_0x46193b(0x183)]=='French')var _0x161ce3=users[_0x46193b(0x171)];else{if(_0x3ee60f[0x0][_0x46193b(0x183)]=='Portuguese\x20(BR)')var _0x161ce3=users[_0x46193b(0x16a)];else{if(_0x3ee60f[0x0][_0x46193b(0x183)]==_0x46193b(0x197))var _0x161ce3=users[_0x46193b(0x197)];else{if(_0x3ee60f[0x0]['language']==_0x46193b(0x15f))var _0x161ce3=users['Arabic'];}}}}}}}_0x42733f[_0x46193b(0x190)](_0x46193b(0x17b),{'success':_0x9b43a1[_0x46193b(0x169)](_0x46193b(0x18e)),'errors':_0x9b43a1[_0x46193b(0x169)](_0x46193b(0x141)),'role':_0xfb2882,'profile':_0xfb8e64,'master_shop':_0x3ee60f,'timezones':timezones,'language':_0x161ce3,'warehouse':_0x5bc9a4});}catch(_0x1d1e43){console[_0x46193b(0x162)](_0x1d1e43),_0x42733f[_0x46193b(0x145)](0xc8)[_0x46193b(0x198)]({'message':_0x1d1e43[_0x46193b(0x15e)]});}}),router[a0_0x7ba50d(0x17f)](a0_0x7ba50d(0x156),async(_0x423463,_0x279524)=>{const _0x3fd2b2=a0_0x7ba50d,{warehouseNew:_0x34cd2e,rooms:_0x59d592,Type:_0x1ef560}=_0x423463[_0x3fd2b2(0x186)],_0x52b36b=await warehouse['aggregate']([{'$unwind':_0x3fd2b2(0x16e)},{'$match':{'name':_0x34cd2e,'room':_0x59d592,'product_details.type':_0x1ef560}},{'$group':{'_id':{'bay':_0x3fd2b2(0x160),'bin':_0x3fd2b2(0x15b),'type':_0x3fd2b2(0x146),'floorlevel':_0x3fd2b2(0x164)},'products':{'$push':{'product_name':'$product_details.product_name','product_quantity':_0x3fd2b2(0x184),'product_code':_0x3fd2b2(0x174)}},'totalQuantity':{'$sum':{'$cond':{'if':{'$gt':[_0x3fd2b2(0x184),0x0]},'then':'$product_details.product_stock','else':0x0}}}}},{'$project':{'_id':0x0,'bay':_0x3fd2b2(0x173),'bin':_0x3fd2b2(0x16d),'type':_0x3fd2b2(0x176),'floorlevel':_0x3fd2b2(0x143),'products':{'$filter':{'input':_0x3fd2b2(0x17e),'as':_0x3fd2b2(0x17a),'cond':{'$gt':[_0x3fd2b2(0x13f),0x0]}}},'totalQuantity':0x1}}]);_0x279524[_0x3fd2b2(0x198)](_0x52b36b);}),router['post'](a0_0x7ba50d(0x144),async(_0x36de3b,_0x5154e8)=>{const _0x563728=a0_0x7ba50d,{warehouseNew:_0xd1f426,rooms:_0x531990,room_cat:_0x2aeb27}=_0x36de3b[_0x563728(0x186)];let _0x199c1e;if(_0x2aeb27==_0x563728(0x140))_0x199c1e=await warehouse['aggregate']([{'$unwind':_0x563728(0x16e)},{'$match':{'name':_0xd1f426}},{'$group':{'_id':{'bay':_0x563728(0x160),'product':_0x563728(0x196),'expiry':_0x563728(0x142)},'count':{'$sum':_0x563728(0x184)},'production_date':{'$first':_0x563728(0x187)},'expiry_date':{'$first':'$product_details.expiry_date'},'batch_code':{'$first':_0x563728(0x15c)},'product_code':{'$first':_0x563728(0x174)}}},{'$group':{'_id':_0x563728(0x173),'products':{'$push':{'product':_0x563728(0x167),'quantity':_0x563728(0x15d),'production_date':_0x563728(0x177),'expiry_date':_0x563728(0x16f),'batch_code':_0x563728(0x192),'product_code':_0x563728(0x18c)}},'totalQuantity':{'$sum':_0x563728(0x15d)}}},{'$match':{'totalQuantity':{'$gt':0x0}}},{'$project':{'_id':0x0,'bay':_0x563728(0x18b),'products':0x1,'totalQuantity':0x1}}]),console[_0x563728(0x162)](_0x2aeb27);else{}_0x5154e8[_0x563728(0x198)](_0x199c1e);}),router[a0_0x7ba50d(0x17f)](a0_0x7ba50d(0x18d),async(_0x483d0b,_0x468ff1)=>{const _0x2051ce=a0_0x7ba50d;try{const {warehouse_name:_0x2df9cb,A:_0x42da4f,B:_0x35befe}=_0x483d0b[_0x2051ce(0x186)];var _0x588130='';_0x42da4f=='raw'?_0x35befe==_0x2051ce(0x16b)?_0x588130=[{'$match':{'name':_0x2df9cb,'status':_0x2051ce(0x153),'room':_0x2051ce(0x170)}},{'$group':{'_id':'$_id','room_name':{'$first':_0x2051ce(0x14e)}}},{'$sort':{'room_name':0x1}}]:_0x588130=[{'$match':{'name':_0x2df9cb,'status':_0x2051ce(0x153)}},{'$group':{'_id':'$_id','room_name':{'$first':_0x2051ce(0x14e)}}},{'$sort':{'room_name':0x1}}]:_0x588130=[{'$match':{'name':_0x2df9cb,'status':'Enabled'}},{'$group':{'_id':_0x2051ce(0x18b),'room_name':{'$first':_0x2051ce(0x14e)}}},{'$sort':{'room_name':0x1}}];const _0x198a4d=await warehouse[_0x2051ce(0x154)](_0x588130);_0x468ff1[_0x2051ce(0x145)](0xc8)['json'](_0x198a4d);}catch(_0x27bc84){_0x468ff1[_0x2051ce(0x145)](0x190)[_0x2051ce(0x198)]({'errorMessage':_0x27bc84[_0x2051ce(0x15e)]});}}),router[a0_0x7ba50d(0x17f)]('/Rooms_data2',async(_0x5a4de7,_0x299b2f)=>{const _0x53e839=a0_0x7ba50d;try{const {warehouse_name:_0x56480c,cat:_0x5d811b,valNew:_0x32961b}=_0x5a4de7[_0x53e839(0x186)];var _0x36f755='',_0x3764a8='';if(_0x5d811b==_0x53e839(0x182))_0x36f755=_0x53e839(0x148),_0x32961b=='pack'?_0x3764a8=[{'$match':{'status':_0x53e839(0x153),'warehouse_category':_0x5d811b,'name':{'$ne':_0x36f755},'name':_0x53e839(0x14a)}},{'$group':{'_id':'$name','room_name':{'$first':_0x53e839(0x150)}}},{'$sort':{'room_name':0x1}}]:_0x3764a8=[{'$match':{'status':'Enabled','warehouse_category':_0x5d811b,'name':{'$ne':_0x36f755}}},{'$group':{'_id':_0x53e839(0x150),'room_name':{'$first':_0x53e839(0x150)}}},{'$sort':{'room_name':0x1}}];else _0x5d811b==_0x53e839(0x14b)?(_0x36f755=_0x53e839(0x155),_0x3764a8=[{'$match':{'status':_0x53e839(0x153),'warehouse_category':_0x5d811b,'name':{'$ne':_0x36f755}}},{'$group':{'_id':_0x53e839(0x150),'room_name':{'$first':_0x53e839(0x150)}}},{'$sort':{'room_name':0x1}}]):_0x3764a8=[{'$match':{'status':_0x53e839(0x153)}},{'$group':{'_id':_0x53e839(0x150),'room_name':{'$first':_0x53e839(0x150)}}},{'$sort':{'room_name':0x1}}];const _0x3cd6c0=await warehouse['aggregate'](_0x3764a8);_0x299b2f['status'](0xc8)['json'](_0x3cd6c0);}catch(_0x16b8fe){_0x299b2f[_0x53e839(0x145)](0x190)[_0x53e839(0x198)]({'errorMessage':_0x16b8fe[_0x53e839(0x15e)]}),console[_0x53e839(0x162)](_0x16b8fe);}}),router['post'](a0_0x7ba50d(0x188),async(_0x3a83f9,_0x22265f)=>{const _0x565c67=a0_0x7ba50d;try{const {warehouse_name:_0x1d750d,cat:_0x486eed}=_0x3a83f9['body'],_0x334a03=await warehouse[_0x565c67(0x154)]([{'$match':{'status':_0x565c67(0x153),'warehouse_category':_0x486eed,'name':_0x1d750d}},{'$group':{'_id':'$room','room_name':{'$first':_0x565c67(0x14e)}}},{'$sort':{'room_name':0x1}}]);_0x22265f[_0x565c67(0x145)](0xc8)[_0x565c67(0x198)](_0x334a03);}catch(_0x4f9a23){_0x22265f['status'](0x190)[_0x565c67(0x198)]({'errorMessage':_0x4f9a23[_0x565c67(0x15e)]});}}),module[a0_0x7ba50d(0x166)]=router;