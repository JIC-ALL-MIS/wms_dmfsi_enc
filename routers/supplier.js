function a0_0x3b7d(){const _0x80f780=['master','diskStorage','flash','Portuguese','Chinese','Portuguese\x20(BR)','aggregate','450OArOfH','status','user','Arabic','findOne','124848EOFiOC','post','1613293GVdmyQ','company','purchase_return','/view','purchase','Spanish','payable_sum','supplier\x20data\x20add\x20successfully','Hindi','exports','34468WyCiwC','Arabic\x20(ae)','receivable_sum','Content-Type','Purchase','Supplier_Code','suppliers_code','send','\x20Failed','$amount','6039276DHVEji','exceljs','file','error','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','email','621294NokhAf','76150shUiNS','/view/payment/:id','\x20added\x20successfully','landline','find','/products_export_migrate_file','mobile','Company_Name','Router','/view/:id','contactperson','name','96vxufCJ','Content-Disposition','9wHnbni','suppliers_docs','reason','French','save','success','then','redirect','filename','public/Migration/','xlsx','public/Migration','/supplier/view','Email','amount','errors','../models/all_models','findById','write','render','data','SalesmanName','SheetNames','supplier\x20data\x20update\x20successfully','log','English','776qHRDde','supplier.js\x20payment_data','originalname','/supplier_import_migrate_file','28dzeSIU','payable','message','156425pusAUI','single','Mobile_number','json','language','English\x20(US)','setHeader','$reason','addWorksheet','get','utils','German','Sheets','params','body','supplier_product_file','supplier','PBrands','address','sheet_to_json','express'];a0_0x3b7d=function(){return _0x80f780;};return a0_0x3b7d();}const a0_0x3b3e7=a0_0x5c69;(function(_0x5d7118,_0x2297fc){const _0x1b11b3=a0_0x5c69,_0x547990=_0x5d7118();while(!![]){try{const _0x14e082=-parseInt(_0x1b11b3(0x1d6))/0x1+parseInt(_0x1b11b3(0x1f2))/0x2*(parseInt(_0x1b11b3(0x201))/0x3)+-parseInt(_0x1b11b3(0x21f))/0x4*(parseInt(_0x1b11b3(0x222))/0x5)+parseInt(_0x1b11b3(0x1ec))/0x6+parseInt(_0x1b11b3(0x1e2))/0x7*(parseInt(_0x1b11b3(0x21b))/0x8)+-parseInt(_0x1b11b3(0x23e))/0x9*(parseInt(_0x1b11b3(0x1f3))/0xa)+-parseInt(_0x1b11b3(0x1d8))/0xb*(parseInt(_0x1b11b3(0x1ff))/0xc);if(_0x14e082===_0x2297fc)break;else _0x547990['push'](_0x547990['shift']());}catch(_0x77febc){_0x547990['push'](_0x547990['shift']());}}}(a0_0x3b7d,0x7e84a));const express=require(a0_0x3b3e7(0x236)),app=express(),router=express[a0_0x3b3e7(0x1fb)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require(a0_0x3b3e7(0x211)),auth=require('../middleware/auth'),users=require('../public/language/languages.json'),excelJS=require(a0_0x3b3e7(0x1ed)),xlsx=require(a0_0x3b3e7(0x20b)),multer=require('multer');router[a0_0x3b3e7(0x22b)](a0_0x3b3e7(0x1db),auth,async(_0x511913,_0x391f76)=>{const _0x47be1b=a0_0x3b3e7;try{const {username:_0x307ee9,email:_0x32fcf4,role:_0x176578}=_0x511913['user'],_0x16b55f=_0x511913[_0x47be1b(0x240)],_0x49e415=await profile[_0x47be1b(0x1d5)]({'email':_0x16b55f['email']}),_0x519e10=await master_shop[_0x47be1b(0x1f7)]();console['log'](_0x47be1b(0x237),_0x519e10);const _0xb05635=await suppliers[_0x47be1b(0x1f7)]();console[_0x47be1b(0x219)](_0xb05635);const _0x2320da=await suppliers[_0x47be1b(0x23d)]([{'$lookup':{'from':'s_payments','localField':_0x47be1b(0x1fe),'foreignField':'suppliers','as':_0x47be1b(0x202)}}]),_0x33fcf4=_0x2320da['map'](_0x5592ab=>{const _0x5da085=_0x47be1b;console['log'](_0x5da085(0x215),_0x5592ab);var _0x195bbe=0x0,_0x16682e=0x0;return _0x5592ab[_0x5da085(0x202)]['forEach'](_0x4c08a7=>{const _0x27e71e=_0x5da085;console[_0x27e71e(0x219)]('doc',_0x4c08a7),_0x4c08a7[_0x27e71e(0x203)]==_0x27e71e(0x1e6)?_0x195bbe+=_0x4c08a7[_0x27e71e(0x20f)]:_0x16682e+=_0x4c08a7[_0x27e71e(0x20f)];}),_0x5592ab[_0x5da085(0x1dc)]=_0x195bbe,_0x5592ab[_0x5da085(0x1da)]=_0x16682e,_0x5592ab;});console[_0x47be1b(0x219)](_0x47be1b(0x21c),_0x33fcf4);if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x227)){var _0x392f4c=users[_0x47be1b(0x21a)];console['log'](_0x392f4c);}else{if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x1e0))var _0x392f4c=users[_0x47be1b(0x1e0)];else{if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x22d))var _0x392f4c=users[_0x47be1b(0x22d)];else{if(_0x519e10[0x0]['language']==_0x47be1b(0x1dd))var _0x392f4c=users['Spanish'];else{if(_0x519e10[0x0]['language']=='French')var _0x392f4c=users[_0x47be1b(0x204)];else{if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x23c))var _0x392f4c=users[_0x47be1b(0x23a)];else{if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x23b))var _0x392f4c=users[_0x47be1b(0x23b)];else{if(_0x519e10[0x0][_0x47be1b(0x226)]==_0x47be1b(0x1e3))var _0x392f4c=users[_0x47be1b(0x241)];}}}}}}}_0x391f76[_0x47be1b(0x214)](_0x47be1b(0x232),{'success':_0x511913['flash'](_0x47be1b(0x206)),'errors':_0x511913[_0x47be1b(0x239)]('errors'),'user':_0xb05635,'profile':_0x49e415,'master_shop':_0x519e10,'role':_0x16b55f,'payment':_0x33fcf4,'language':_0x392f4c});}catch(_0x1024f8){console[_0x47be1b(0x219)](_0x1024f8);}}),router[a0_0x3b3e7(0x1d7)](a0_0x3b3e7(0x1db),auth,async(_0xff4da1,_0x119e8c)=>{const _0x1ba242=a0_0x3b3e7;try{const {name:_0x59c3f2,email:_0x41a17b,mobile:_0x3b1fdb,company:_0x5f1d3f,address:_0x4d0b06,receivable:_0x5dfc32,payable:_0x387f0b,code:_0xa64e8c,contactperson:_0x48428d,landline:_0xc8e214}=_0xff4da1['body'],_0x2345d3=new suppliers({'name':_0x59c3f2,'email':_0x41a17b,'mobile':_0x3b1fdb,'company':_0x5f1d3f,'address':_0x4d0b06,'receivable':_0x5dfc32,'payable':_0x387f0b,'suppliers_code':_0xa64e8c,'contactperson':_0x48428d,'landline':_0xc8e214}),_0x407161=await _0x2345d3['save']();_0xff4da1[_0x1ba242(0x239)]('success',_0x1ba242(0x1df)),_0x119e8c[_0x1ba242(0x208)](_0x1ba242(0x20d));}catch(_0x40df65){console[_0x1ba242(0x219)](_0x40df65);}}),router[a0_0x3b3e7(0x22b)](a0_0x3b3e7(0x1fc),auth,async(_0x4d5e7c,_0x5597d1)=>{const _0x4a6906=a0_0x3b3e7;try{const {username:_0x3111a4,email:_0x30fe56,role:_0x34488e}=_0x4d5e7c[_0x4a6906(0x240)],_0x263d7c=_0x4d5e7c[_0x4a6906(0x240)],_0x563aa7=await profile[_0x4a6906(0x1d5)]({'email':_0x263d7c[_0x4a6906(0x1f1)]}),_0x1454e5=await master_shop[_0x4a6906(0x1f7)]();console[_0x4a6906(0x219)](_0x4a6906(0x237),_0x1454e5);const _0x4279ec=_0x4d5e7c[_0x4a6906(0x22f)]['id'],_0x5b0c58=await suppliers['findById'](_0x4279ec);console['log'](_0x5b0c58);if(_0x1454e5[0x0]['language']==_0x4a6906(0x227)){var _0x425420=users[_0x4a6906(0x21a)];console[_0x4a6906(0x219)](_0x425420);}else{if(_0x1454e5[0x0][_0x4a6906(0x226)]==_0x4a6906(0x1e0))var _0x425420=users[_0x4a6906(0x1e0)];else{if(_0x1454e5[0x0][_0x4a6906(0x226)]==_0x4a6906(0x22d))var _0x425420=users[_0x4a6906(0x22d)];else{if(_0x1454e5[0x0]['language']==_0x4a6906(0x1dd))var _0x425420=users['Spanish'];else{if(_0x1454e5[0x0][_0x4a6906(0x226)]==_0x4a6906(0x204))var _0x425420=users['French'];else{if(_0x1454e5[0x0]['language']==_0x4a6906(0x23c))var _0x425420=users[_0x4a6906(0x23a)];else{if(_0x1454e5[0x0][_0x4a6906(0x226)]==_0x4a6906(0x23b))var _0x425420=users['Chinese'];else{if(_0x1454e5[0x0][_0x4a6906(0x226)]=='Arabic\x20(ae)')var _0x425420=users['Arabic'];}}}}}}}_0x5597d1[_0x4a6906(0x214)]('supplier',{'success':_0x4d5e7c['flash'](_0x4a6906(0x206)),'errors':_0x4d5e7c[_0x4a6906(0x239)]('errors'),'role':_0x263d7c,'profile':_0x563aa7,'master_shop':_0x1454e5,'user':_0x5b0c58,'language':_0x425420});}catch(_0x1329c7){console['log'](_0x1329c7);}}),router[a0_0x3b3e7(0x1d7)]('/view/:id',auth,async(_0x5e185e,_0x5c9dfb)=>{const _0x96733e=a0_0x3b3e7;try{const _0x1817a0=_0x5e185e[_0x96733e(0x22f)]['id'],_0x5640ce=await suppliers[_0x96733e(0x212)](_0x1817a0),{name:_0x1edde8,email:_0x35946f,mobile:_0x5e4da5,company:_0x56ac4a,address:_0x51ec31,receivable:_0x38fae8,payable:_0xc510c0,code:_0x2cae32,contactperson:_0x5d6826,landline:_0x627b65}=_0x5e185e[_0x96733e(0x230)];_0x5640ce[_0x96733e(0x1fe)]=_0x1edde8,_0x5640ce[_0x96733e(0x1f1)]=_0x35946f,_0x5640ce[_0x96733e(0x1f9)]=_0x5e4da5,_0x5640ce[_0x96733e(0x1d9)]=_0x56ac4a,_0x5640ce['address']=_0x51ec31,_0x5640ce['receivable']=_0x38fae8,_0x5640ce[_0x96733e(0x220)]=_0xc510c0,_0x5640ce[_0x96733e(0x1e8)]=_0x2cae32,_0x5640ce[_0x96733e(0x1fd)]=_0x5d6826,_0x5640ce[_0x96733e(0x1f6)]=_0x627b65;const _0x321ae3=await _0x5640ce[_0x96733e(0x205)]();_0x5e185e['flash'](_0x96733e(0x206),_0x96733e(0x218)),_0x5c9dfb[_0x96733e(0x208)](_0x96733e(0x20d));}catch(_0x384644){console['log'](_0x384644);}}),router[a0_0x3b3e7(0x22b)](a0_0x3b3e7(0x1f4),auth,async(_0x1c91ab,_0x27c27f)=>{const _0x1e1e34=a0_0x3b3e7;try{const {username:_0x34aa82,email:_0xfb7843,role:_0x3cc981}=_0x1c91ab[_0x1e1e34(0x240)],_0x15fe4d=_0x1c91ab[_0x1e1e34(0x240)],_0x4c9c17=await profile['findOne']({'email':_0x15fe4d[_0x1e1e34(0x1f1)]}),_0x1c1882=await master_shop[_0x1e1e34(0x1f7)]();console[_0x1e1e34(0x219)](_0x1e1e34(0x237),_0x1c1882),console[_0x1e1e34(0x219)](_0x1c91ab['params']['id']);const _0x4a9f43=await suppliers[_0x1e1e34(0x1d5)]({'_id':_0x1c91ab[_0x1e1e34(0x22f)]['id']});console[_0x1e1e34(0x219)](_0x4a9f43);const _0x3072c2=await s_payment_data[_0x1e1e34(0x1f7)]({'suppliers':_0x4a9f43[_0x1e1e34(0x1fe)]});console[_0x1e1e34(0x219)](_0x3072c2);const _0x451646=await s_payment_data[_0x1e1e34(0x23d)]([{'$match':{'suppliers':_0x4a9f43[_0x1e1e34(0x1fe)]}},{'$match':{'reason':_0x1e1e34(0x1e6)}},{'$group':{'_id':_0x1e1e34(0x229),'sum':{'$sum':_0x1e1e34(0x1eb)}}}]);console[_0x1e1e34(0x219)](_0x1e1e34(0x1de),_0x451646);const _0x7ca297=await s_payment_data[_0x1e1e34(0x23d)]([{'$match':{'suppliers':_0x4a9f43[_0x1e1e34(0x1fe)]}},{'$match':{'reason':'Purchase\x20Return'}},{'$group':{'_id':_0x1e1e34(0x229),'sum':{'$sum':'$amount'}}}]);console[_0x1e1e34(0x219)](_0x1e1e34(0x1e4),_0x7ca297);if(_0x1c1882[0x0][_0x1e1e34(0x226)]==_0x1e1e34(0x227)){var _0x31398d=users[_0x1e1e34(0x21a)];console['log'](_0x31398d);}else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]==_0x1e1e34(0x1e0))var _0x31398d=users['Hindi'];else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]=='German')var _0x31398d=users['German'];else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]==_0x1e1e34(0x1dd))var _0x31398d=users[_0x1e1e34(0x1dd)];else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]==_0x1e1e34(0x204))var _0x31398d=users[_0x1e1e34(0x204)];else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]=='Portuguese\x20(BR)')var _0x31398d=users[_0x1e1e34(0x23a)];else{if(_0x1c1882[0x0][_0x1e1e34(0x226)]==_0x1e1e34(0x23b))var _0x31398d=users[_0x1e1e34(0x23b)];else{if(_0x1c1882[0x0]['language']==_0x1e1e34(0x1e3))var _0x31398d=users['Arabic'];}}}}}}}_0x27c27f[_0x1e1e34(0x214)]('supplier_payment',{'success':_0x1c91ab[_0x1e1e34(0x239)](_0x1e1e34(0x206)),'errors':_0x1c91ab[_0x1e1e34(0x239)](_0x1e1e34(0x210)),'role':_0x15fe4d,'profile':_0x4c9c17,'master_shop':_0x1c1882,'payment':_0x3072c2,'payable':_0x451646,'receivable':_0x7ca297,'language':_0x31398d});}catch(_0x48cfbd){console['log'](_0x48cfbd);}}),router['get'](a0_0x3b3e7(0x1f8),auth,async(_0x3b2dcc,_0x79718e)=>{const _0x48fb6d=a0_0x3b3e7;try{const _0x3e90e1=new excelJS['Workbook'](),_0x16fc97=_0x3e90e1[_0x48fb6d(0x22a)]('Customers');return _0x16fc97['columns']=[{'header':'Name','key':_0x48fb6d(0x233),'width':0xa},{'header':'Supplier_Code','key':'PUnits','width':0xa},{'header':_0x48fb6d(0x20e),'key':_0x48fb6d(0x216),'width':0xa},{'header':_0x48fb6d(0x224),'key':_0x48fb6d(0x234),'width':0xa},{'header':_0x48fb6d(0x1fa),'key':'mobile','width':0xa},{'header':_0x48fb6d(0x234),'key':_0x48fb6d(0x1f1),'width':0xa}],_0x79718e[_0x48fb6d(0x228)](_0x48fb6d(0x1e5),_0x48fb6d(0x1f0)),_0x79718e[_0x48fb6d(0x228)](_0x48fb6d(0x200),'attachment;\x20filename=supplier_Migration_File.xlsx'),_0x3e90e1[_0x48fb6d(0x20b)][_0x48fb6d(0x213)](_0x79718e)[_0x48fb6d(0x207)](()=>{_0x79718e['status'](0xc8);});}catch(_0xdf43a){_0x79718e[_0x48fb6d(0x23f)](0x190)[_0x48fb6d(0x1e9)]({'errors':_0xdf43a[_0x48fb6d(0x221)]});}});function a0_0x5c69(_0x8ac351,_0x368dcd){const _0x3b7d1e=a0_0x3b7d();return a0_0x5c69=function(_0x5c6929,_0x309919){_0x5c6929=_0x5c6929-0x1d5;let _0x57721f=_0x3b7d1e[_0x5c6929];return _0x57721f;},a0_0x5c69(_0x8ac351,_0x368dcd);}const storage1=multer[a0_0x3b3e7(0x238)]({'destination':(_0x2f13d9,_0x96a412,_0x3962a6)=>{const _0x29b1c3=a0_0x3b3e7;_0x3962a6(null,_0x29b1c3(0x20c));},'filename':(_0x322b6b,_0x2815fb,_0x151d0e)=>{const _0x46f46c=a0_0x3b3e7;_0x151d0e(null,Date['now']()+_0x2815fb[_0x46f46c(0x21d)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x3b3e7(0x1d7)](a0_0x3b3e7(0x21e),auth,uploadMigrate[a0_0x3b3e7(0x223)](a0_0x3b3e7(0x231)),async(_0x3d5b45,_0x31fe32)=>{const _0x28ff0a=a0_0x3b3e7,_0x5d4706=_0x3d5b45[_0x28ff0a(0x1ee)][_0x28ff0a(0x209)],_0x3b98b2=await xlsx['readFile'](_0x28ff0a(0x20a)+_0x5d4706);let _0x1a4616=_0x3b98b2[_0x28ff0a(0x217)],_0x36ce78=xlsx[_0x28ff0a(0x22c)][_0x28ff0a(0x235)](_0x3b98b2[_0x28ff0a(0x22e)][_0x1a4616[0x0]]);for(const _0x517701 of _0x36ce78){const _0x2edea7=_0x517701['Name'],_0xccd8bc=_0x517701[_0x28ff0a(0x1e7)],_0x61fe68=_0x517701['address'],_0x471ffc=_0x517701[_0x28ff0a(0x224)],_0x155994=_0x517701[_0x28ff0a(0x20e)],_0x141153=_0x517701['Company_Name'];try{let _0x1eb47e=await suppliers['findOne']({'name':_0x2edea7});if(!_0x1eb47e){const _0x2c8dde=new suppliers({'name':_0x2edea7,'suppliers_code':_0xccd8bc,'address':_0x61fe68,'mobile':_0x471ffc,'email':_0x155994,'company':_0x141153});_0x1eb47e=await _0x2c8dde[_0x28ff0a(0x205)](),_0x3d5b45[_0x28ff0a(0x239)](_0x28ff0a(0x206),_0x2edea7+_0x28ff0a(0x1f5));}else _0x3d5b45[_0x28ff0a(0x239)](_0x28ff0a(0x1ef),_0x2edea7+_0x28ff0a(0x1ea));}catch(_0x565f11){_0x31fe32[_0x28ff0a(0x23f)](0x1f4)[_0x28ff0a(0x225)]({'proderror':_0x565f11[_0x28ff0a(0x221)],'aproduct':ProductName});}}_0x31fe32['redirect'](_0x28ff0a(0x20d));}),module[a0_0x3b3e7(0x1e1)]=router;