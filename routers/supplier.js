const a0_0x3ead65=a0_0x26fd;(function(_0x5050b8,_0x48a8f0){const _0x5c192c=a0_0x26fd,_0xe31f6d=_0x5050b8();while(!![]){try{const _0x35d5be=parseInt(_0x5c192c(0x218))/0x1+parseInt(_0x5c192c(0x1ce))/0x2+-parseInt(_0x5c192c(0x1ed))/0x3+-parseInt(_0x5c192c(0x1f5))/0x4*(parseInt(_0x5c192c(0x21e))/0x5)+parseInt(_0x5c192c(0x1be))/0x6*(parseInt(_0x5c192c(0x1c6))/0x7)+parseInt(_0x5c192c(0x20d))/0x8+-parseInt(_0x5c192c(0x216))/0x9*(-parseInt(_0x5c192c(0x1b7))/0xa);if(_0x35d5be===_0x48a8f0)break;else _0xe31f6d['push'](_0xe31f6d['shift']());}catch(_0x450272){_0xe31f6d['push'](_0xe31f6d['shift']());}}}(a0_0x1639,0x2fa2e));const express=require(a0_0x3ead65(0x1ba)),app=express(),router=express[a0_0x3ead65(0x1ff)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x3ead65(0x1cc)),users=require('../public/language/languages.json'),excelJS=require(a0_0x3ead65(0x1e2)),xlsx=require(a0_0x3ead65(0x1df)),multer=require(a0_0x3ead65(0x1f8));router['get']('/view',auth,async(_0x1a4fb1,_0x4a0e2e)=>{const _0x4c9191=a0_0x3ead65;try{const {username:_0x36263d,email:_0x455bc6,role:_0x2e52b4}=_0x1a4fb1[_0x4c9191(0x1fd)],_0x58b81b=_0x1a4fb1[_0x4c9191(0x1fd)],_0x267085=await profile[_0x4c9191(0x1e1)]({'email':_0x58b81b['email']}),_0x3e45b3=await master_shop[_0x4c9191(0x20c)]();console[_0x4c9191(0x1d4)](_0x4c9191(0x1c1),_0x3e45b3);const _0x507fe3=await suppliers[_0x4c9191(0x20c)]();console[_0x4c9191(0x1d4)](_0x507fe3);const _0x24be45=await suppliers['aggregate']([{'$lookup':{'from':_0x4c9191(0x1ef),'localField':_0x4c9191(0x208),'foreignField':_0x4c9191(0x1c9),'as':_0x4c9191(0x1e8)}}]),_0x11bc33=_0x24be45[_0x4c9191(0x21a)](_0x42409b=>{const _0x23c731=_0x4c9191;console[_0x23c731(0x1d4)](_0x23c731(0x1c5),_0x42409b);var _0x4f99b0=0x0,_0x58daf6=0x0;return _0x42409b[_0x23c731(0x1e8)][_0x23c731(0x1d3)](_0xbc7ad2=>{const _0x4be64a=_0x23c731;console['log']('doc',_0xbc7ad2),_0xbc7ad2[_0x4be64a(0x1d8)]==_0x4be64a(0x1d1)?_0x4f99b0+=_0xbc7ad2[_0x4be64a(0x211)]:_0x58daf6+=_0xbc7ad2[_0x4be64a(0x211)];}),_0x42409b[_0x23c731(0x207)]=_0x4f99b0,_0x42409b[_0x23c731(0x1c2)]=_0x58daf6,_0x42409b;});console[_0x4c9191(0x1d4)](_0x4c9191(0x1e5),_0x11bc33);if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x1fa)){var _0x285f5c=users[_0x4c9191(0x1c4)];console['log'](_0x285f5c);}else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x1e9))var _0x285f5c=users[_0x4c9191(0x1e9)];else{if(_0x3e45b3[0x0]['language']==_0x4c9191(0x1af))var _0x285f5c=users[_0x4c9191(0x1af)];else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x20b))var _0x285f5c=users['Spanish'];else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x214))var _0x285f5c=users[_0x4c9191(0x214)];else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x20a))var _0x285f5c=users[_0x4c9191(0x1b6)];else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]=='Chinese')var _0x285f5c=users[_0x4c9191(0x204)];else{if(_0x3e45b3[0x0][_0x4c9191(0x1fe)]==_0x4c9191(0x1f1))var _0x285f5c=users[_0x4c9191(0x1b9)];}}}}}}}_0x4a0e2e['render'](_0x4c9191(0x1d7),{'success':_0x1a4fb1[_0x4c9191(0x1db)](_0x4c9191(0x1dc)),'errors':_0x1a4fb1[_0x4c9191(0x1db)](_0x4c9191(0x1ec)),'user':_0x507fe3,'profile':_0x267085,'master_shop':_0x3e45b3,'role':_0x58b81b,'payment':_0x11bc33,'language':_0x285f5c});}catch(_0x4afca5){console[_0x4c9191(0x1d4)](_0x4afca5);}}),router[a0_0x3ead65(0x1ca)](a0_0x3ead65(0x1b8),auth,async(_0x512a06,_0x31fa9d)=>{const _0x1a5d87=a0_0x3ead65;try{const {name:_0x19a196,email:_0x52ffab,mobile:_0x47c642,company:_0x1349a7,address:_0x20c57f,receivable:_0x2ade7b,payable:_0x5c46ce,code:_0x3613ed,contactperson:_0x2dc260,landline:_0x48b49c}=_0x512a06[_0x1a5d87(0x1bc)],_0x104220=new suppliers({'name':_0x19a196,'email':_0x52ffab,'mobile':_0x47c642,'company':_0x1349a7,'address':_0x20c57f,'receivable':_0x2ade7b,'payable':_0x5c46ce,'suppliers_code':_0x3613ed,'contactperson':_0x2dc260,'landline':_0x48b49c}),_0x5c8d80=await _0x104220[_0x1a5d87(0x1f4)]();_0x512a06[_0x1a5d87(0x1db)](_0x1a5d87(0x1dc),'supplier\x20data\x20add\x20successfully'),_0x31fa9d['redirect'](_0x1a5d87(0x219));}catch(_0x46b60c){console[_0x1a5d87(0x1d4)](_0x46b60c);}}),router[a0_0x3ead65(0x1d9)](a0_0x3ead65(0x1e3),auth,async(_0x51fa85,_0x2307a8)=>{const _0x1e9ca9=a0_0x3ead65;try{const {username:_0x5d2a62,email:_0x72cea9,role:_0x4d51ac}=_0x51fa85['user'],_0x27713c=_0x51fa85[_0x1e9ca9(0x1fd)],_0x1fb708=await profile[_0x1e9ca9(0x1e1)]({'email':_0x27713c[_0x1e9ca9(0x1f3)]}),_0x16fbbe=await master_shop[_0x1e9ca9(0x20c)]();console[_0x1e9ca9(0x1d4)](_0x1e9ca9(0x1c1),_0x16fbbe);const _0x204988=_0x51fa85['params']['id'],_0x2f02f1=await suppliers[_0x1e9ca9(0x1b5)](_0x204988);console[_0x1e9ca9(0x1d4)](_0x2f02f1);if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]==_0x1e9ca9(0x1fa)){var _0x5b5281=users[_0x1e9ca9(0x1c4)];console[_0x1e9ca9(0x1d4)](_0x5b5281);}else{if(_0x16fbbe[0x0]['language']=='Hindi')var _0x5b5281=users[_0x1e9ca9(0x1e9)];else{if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]==_0x1e9ca9(0x1af))var _0x5b5281=users[_0x1e9ca9(0x1af)];else{if(_0x16fbbe[0x0]['language']=='Spanish')var _0x5b5281=users[_0x1e9ca9(0x20b)];else{if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]==_0x1e9ca9(0x214))var _0x5b5281=users[_0x1e9ca9(0x214)];else{if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]=='Portuguese\x20(BR)')var _0x5b5281=users[_0x1e9ca9(0x1b6)];else{if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]==_0x1e9ca9(0x204))var _0x5b5281=users['Chinese'];else{if(_0x16fbbe[0x0][_0x1e9ca9(0x1fe)]==_0x1e9ca9(0x1f1))var _0x5b5281=users['Arabic'];}}}}}}}_0x2307a8[_0x1e9ca9(0x215)](_0x1e9ca9(0x1d7),{'success':_0x51fa85[_0x1e9ca9(0x1db)](_0x1e9ca9(0x1dc)),'errors':_0x51fa85['flash'](_0x1e9ca9(0x1ec)),'role':_0x27713c,'profile':_0x1fb708,'master_shop':_0x16fbbe,'user':_0x2f02f1,'language':_0x5b5281});}catch(_0x33fa13){console[_0x1e9ca9(0x1d4)](_0x33fa13);}}),router[a0_0x3ead65(0x1ca)]('/view/:id',auth,async(_0x317217,_0x4c1a8d)=>{const _0x1eb222=a0_0x3ead65;try{const _0x5e87b3=_0x317217[_0x1eb222(0x1fb)]['id'],_0x35c3c6=await suppliers[_0x1eb222(0x1b5)](_0x5e87b3),{name:_0x174feb,email:_0x179304,mobile:_0x1cd85c,company:_0x3a3eb3,address:_0x4ecff9,receivable:_0x5a35ea,payable:_0x47ff3d,code:_0x25dc7d,contactperson:_0x365cce,landline:_0x2e43d5}=_0x317217[_0x1eb222(0x1bc)];_0x35c3c6['name']=_0x174feb,_0x35c3c6[_0x1eb222(0x1f3)]=_0x179304,_0x35c3c6[_0x1eb222(0x1c7)]=_0x1cd85c,_0x35c3c6[_0x1eb222(0x1b1)]=_0x3a3eb3,_0x35c3c6[_0x1eb222(0x1b0)]=_0x4ecff9,_0x35c3c6[_0x1eb222(0x21b)]=_0x5a35ea,_0x35c3c6[_0x1eb222(0x206)]=_0x47ff3d,_0x35c3c6[_0x1eb222(0x21c)]=_0x25dc7d,_0x35c3c6[_0x1eb222(0x1b2)]=_0x365cce,_0x35c3c6[_0x1eb222(0x1c8)]=_0x2e43d5;const _0x4d3736=await _0x35c3c6[_0x1eb222(0x1f4)]();_0x317217[_0x1eb222(0x1db)](_0x1eb222(0x1dc),_0x1eb222(0x1cf)),_0x4c1a8d['redirect'](_0x1eb222(0x219));}catch(_0x3fb808){console['log'](_0x3fb808);}}),router['get'](a0_0x3ead65(0x201),auth,async(_0x3cfba2,_0x4ea64a)=>{const _0x225d74=a0_0x3ead65;try{const {username:_0x35fefb,email:_0x97ce90,role:_0x117fc8}=_0x3cfba2['user'],_0x35dced=_0x3cfba2[_0x225d74(0x1fd)],_0x5ce9c1=await profile[_0x225d74(0x1e1)]({'email':_0x35dced[_0x225d74(0x1f3)]}),_0x314123=await master_shop['find']();console[_0x225d74(0x1d4)](_0x225d74(0x1c1),_0x314123),console[_0x225d74(0x1d4)](_0x3cfba2[_0x225d74(0x1fb)]['id']);const _0x5df9bd=await suppliers[_0x225d74(0x1e1)]({'_id':_0x3cfba2[_0x225d74(0x1fb)]['id']});console[_0x225d74(0x1d4)](_0x5df9bd);const _0x1497f8=await s_payment_data['find']({'suppliers':_0x5df9bd['name']});console[_0x225d74(0x1d4)](_0x1497f8);const _0x1d36a0=await s_payment_data[_0x225d74(0x20f)]([{'$match':{'suppliers':_0x5df9bd['name']}},{'$match':{'reason':_0x225d74(0x1d1)}},{'$group':{'_id':_0x225d74(0x1c0),'sum':{'$sum':'$amount'}}}]);console[_0x225d74(0x1d4)]('payable_sum',_0x1d36a0);const _0x6ae8c1=await s_payment_data[_0x225d74(0x20f)]([{'$match':{'suppliers':_0x5df9bd[_0x225d74(0x208)]}},{'$match':{'reason':'Purchase\x20Return'}},{'$group':{'_id':'$reason','sum':{'$sum':_0x225d74(0x1bd)}}}]);console[_0x225d74(0x1d4)](_0x225d74(0x1b4),_0x6ae8c1);if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x1fa)){var _0xf2c717=users[_0x225d74(0x1c4)];console[_0x225d74(0x1d4)](_0xf2c717);}else{if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x1e9))var _0xf2c717=users['Hindi'];else{if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x1af))var _0xf2c717=users[_0x225d74(0x1af)];else{if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x20b))var _0xf2c717=users[_0x225d74(0x20b)];else{if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x214))var _0xf2c717=users[_0x225d74(0x214)];else{if(_0x314123[0x0][_0x225d74(0x1fe)]==_0x225d74(0x20a))var _0xf2c717=users[_0x225d74(0x1b6)];else{if(_0x314123[0x0][_0x225d74(0x1fe)]=='Chinese')var _0xf2c717=users[_0x225d74(0x204)];else{if(_0x314123[0x0]['language']==_0x225d74(0x1f1))var _0xf2c717=users[_0x225d74(0x1b9)];}}}}}}}_0x4ea64a[_0x225d74(0x215)](_0x225d74(0x1b3),{'success':_0x3cfba2[_0x225d74(0x1db)](_0x225d74(0x1dc)),'errors':_0x3cfba2['flash'](_0x225d74(0x1ec)),'role':_0x35dced,'profile':_0x5ce9c1,'master_shop':_0x314123,'payment':_0x1497f8,'payable':_0x1d36a0,'receivable':_0x6ae8c1,'language':_0xf2c717});}catch(_0x1f77eb){console['log'](_0x1f77eb);}}),router['get'](a0_0x3ead65(0x1f6),auth,async(_0x4758d6,_0x5034b7)=>{const _0x12d91e=a0_0x3ead65;try{const _0x3cba56=new excelJS['Workbook'](),_0x3d8aff=_0x3cba56[_0x12d91e(0x1da)](_0x12d91e(0x1d5));return _0x3d8aff[_0x12d91e(0x1e7)]=[{'header':_0x12d91e(0x1f9),'key':_0x12d91e(0x1e6),'width':0xa},{'header':_0x12d91e(0x210),'key':_0x12d91e(0x1bb),'width':0xa},{'header':'Email','key':_0x12d91e(0x1cd),'width':0xa},{'header':'Mobile_number','key':'address','width':0xa},{'header':_0x12d91e(0x209),'key':'mobile','width':0xa},{'header':_0x12d91e(0x1b0),'key':_0x12d91e(0x1f3),'width':0xa}],_0x5034b7[_0x12d91e(0x1bf)](_0x12d91e(0x200),_0x12d91e(0x1f2)),_0x5034b7[_0x12d91e(0x1bf)](_0x12d91e(0x1ea),_0x12d91e(0x1f7)),_0x3cba56[_0x12d91e(0x1df)]['write'](_0x5034b7)['then'](()=>{const _0x3480bb=_0x12d91e;_0x5034b7[_0x3480bb(0x1e4)](0xc8);});}catch(_0x459b30){_0x5034b7[_0x12d91e(0x1e4)](0x190)[_0x12d91e(0x203)]({'errors':_0x459b30[_0x12d91e(0x20e)]});}});function a0_0x26fd(_0x5cd83b,_0x2191d6){const _0x163936=a0_0x1639();return a0_0x26fd=function(_0x26fd58,_0x8b7c40){_0x26fd58=_0x26fd58-0x1af;let _0x39bbba=_0x163936[_0x26fd58];return _0x39bbba;},a0_0x26fd(_0x5cd83b,_0x2191d6);}const storage1=multer[a0_0x3ead65(0x202)]({'destination':(_0x5d3a6e,_0x4f7079,_0x328de5)=>{const _0x20048e=a0_0x3ead65;_0x328de5(null,_0x20048e(0x217));},'filename':(_0x12f5b6,_0x3ac6ee,_0x2c3b17)=>{const _0x3ea804=a0_0x3ead65;_0x2c3b17(null,Date[_0x3ea804(0x205)]()+_0x3ac6ee[_0x3ea804(0x1f0)]);}}),uploadMigrate=multer({'storage':storage1});router['post'](a0_0x3ead65(0x212),auth,uploadMigrate['single'](a0_0x3ead65(0x1de)),async(_0x1f3583,_0x33070d)=>{const _0x21c212=a0_0x3ead65,_0x346029=_0x1f3583[_0x21c212(0x1c3)][_0x21c212(0x1d2)],_0x1a7268=await xlsx[_0x21c212(0x1d0)]('public/Migration/'+_0x346029);let _0x4e4651=_0x1a7268[_0x21c212(0x1cb)],_0x7b2df1=xlsx[_0x21c212(0x213)][_0x21c212(0x1dd)](_0x1a7268['Sheets'][_0x4e4651[0x0]]);for(const _0x29fdb1 of _0x7b2df1){const _0x39205d=_0x29fdb1[_0x21c212(0x1f9)],_0x16801a=_0x29fdb1['Supplier_Code'],_0x2d8655=_0x29fdb1[_0x21c212(0x1b0)],_0x4b46e3=_0x29fdb1['Mobile_number'],_0x36bd9a=_0x29fdb1[_0x21c212(0x1ee)],_0x598780=_0x29fdb1['Company_Name'];try{let _0x10f66b=await suppliers[_0x21c212(0x1e1)]({'name':_0x39205d});if(!_0x10f66b){const _0x1901c3=new suppliers({'name':_0x39205d,'suppliers_code':_0x16801a,'address':_0x2d8655,'mobile':_0x4b46e3,'email':_0x36bd9a,'company':_0x598780});_0x10f66b=await _0x1901c3[_0x21c212(0x1f4)](),_0x1f3583[_0x21c212(0x1db)](_0x21c212(0x1dc),_0x39205d+_0x21c212(0x1eb));}else _0x1f3583[_0x21c212(0x1db)](_0x21c212(0x1e0),_0x39205d+_0x21c212(0x1d6));}catch(_0x57a1a5){_0x33070d['status'](0x1f4)[_0x21c212(0x1fc)]({'proderror':_0x57a1a5['message'],'aproduct':ProductName});}}_0x33070d[_0x21c212(0x21d)](_0x21c212(0x219));}),module['exports']=router;function a0_0x1639(){const _0x2d0fbc=['Router','Content-Type','/view/payment/:id','diskStorage','send','Chinese','now','payable','purchase','name','Company_Name','Portuguese\x20(BR)','Spanish','find','1685288gWHbRc','message','aggregate','Supplier_Code','amount','/supplier_import_migrate_file','utils','French','render','386937pGkXvy','public/Migration','130884GZFkZn','/supplier/view','map','receivable','suppliers_code','redirect','50525ThYdSp','German','address','company','contactperson','supplier_payment','receivable_sum','findById','Portuguese','10POVJwa','/view','Arabic','express','PUnits','body','$amount','7902wesAoM','setHeader','$reason','master','purchase_return','file','English','data','77luypEo','mobile','landline','suppliers','post','SheetNames','../middleware/auth','SalesmanName','247106miFJjz','supplier\x20data\x20update\x20successfully','readFile','Purchase','filename','forEach','log','Customers','\x20Failed','supplier','reason','get','addWorksheet','flash','success','sheet_to_json','supplier_product_file','xlsx','error','findOne','exceljs','/view/:id','status','supplier.js\x20payment_data','PBrands','columns','suppliers_docs','Hindi','Content-Disposition','\x20added\x20successfully','errors','739860NrtSBb','Email','s_payments','originalname','Arabic\x20(ae)','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','email','save','32jGoFJP','/products_export_migrate_file','attachment;\x20filename=supplier_Migration_File.xlsx','multer','Name','English\x20(US)','params','json','user','language'];a0_0x1639=function(){return _0x2d0fbc;};return a0_0x1639();}