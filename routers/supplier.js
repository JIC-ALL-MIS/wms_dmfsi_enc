const a0_0x43bc38=a0_0x1e63;(function(_0x56c0e4,_0x42736a){const _0xeab784=a0_0x1e63,_0x40e4a9=_0x56c0e4();while(!![]){try{const _0x5a4c5b=parseInt(_0xeab784(0x10d))/0x1+parseInt(_0xeab784(0x11d))/0x2*(parseInt(_0xeab784(0x118))/0x3)+-parseInt(_0xeab784(0xd4))/0x4*(-parseInt(_0xeab784(0x119))/0x5)+parseInt(_0xeab784(0xe2))/0x6*(parseInt(_0xeab784(0xfa))/0x7)+parseInt(_0xeab784(0xe1))/0x8+-parseInt(_0xeab784(0x110))/0x9*(parseInt(_0xeab784(0xf2))/0xa)+-parseInt(_0xeab784(0xfc))/0xb*(parseInt(_0xeab784(0xf4))/0xc);if(_0x5a4c5b===_0x42736a)break;else _0x40e4a9['push'](_0x40e4a9['shift']());}catch(_0x19cffa){_0x40e4a9['push'](_0x40e4a9['shift']());}}}(a0_0x26df,0x5a300));const express=require(a0_0x43bc38(0x102)),app=express(),router=express[a0_0x43bc38(0xcb)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x43bc38(0x112)),users=require(a0_0x43bc38(0xf9)),excelJS=require('exceljs'),xlsx=require(a0_0x43bc38(0xfe)),multer=require('multer');router['get']('/view',auth,async(_0x7b8126,_0x45f157)=>{const _0x4d49e1=a0_0x43bc38;try{const {username:_0xf2a4e8,email:_0x710425,role:_0x5245ed}=_0x7b8126['user'],_0x1f7fc6=_0x7b8126['user'],_0x1b0ac2=await profile[_0x4d49e1(0xf5)]({'email':_0x1f7fc6[_0x4d49e1(0xee)]}),_0x4e44da=await master_shop[_0x4d49e1(0x115)]();console['log']('master',_0x4e44da);const _0x4e5db1=await suppliers[_0x4d49e1(0x115)]();console['log'](_0x4e5db1);const _0x5454e8=await suppliers[_0x4d49e1(0xd9)]([{'$lookup':{'from':'s_payments','localField':_0x4d49e1(0xdc),'foreignField':_0x4d49e1(0x103),'as':_0x4d49e1(0xf0)}}]),_0xf8e7bd=_0x5454e8[_0x4d49e1(0xc8)](_0x7e56e2=>{const _0x5013af=_0x4d49e1;console[_0x5013af(0x117)](_0x5013af(0x12e),_0x7e56e2);var _0x1f0793=0x0,_0x1a711d=0x0;return _0x7e56e2[_0x5013af(0xf0)][_0x5013af(0xd7)](_0x11da84=>{const _0x25852a=_0x5013af;console[_0x25852a(0x117)](_0x25852a(0x11c),_0x11da84),_0x11da84[_0x25852a(0xdd)]=='Purchase'?_0x1f0793+=_0x11da84['amount']:_0x1a711d+=_0x11da84[_0x25852a(0xca)];}),_0x7e56e2['purchase']=_0x1f0793,_0x7e56e2[_0x5013af(0xfb)]=_0x1a711d,_0x7e56e2;});console['log'](_0x4d49e1(0xcd),_0xf8e7bd);if(_0x4e44da[0x0]['language']==_0x4d49e1(0x12a)){var _0x18dfb5=users['English'];console[_0x4d49e1(0x117)](_0x18dfb5);}else{if(_0x4e44da[0x0][_0x4d49e1(0xd0)]==_0x4d49e1(0x12d))var _0x18dfb5=users[_0x4d49e1(0x12d)];else{if(_0x4e44da[0x0]['language']==_0x4d49e1(0x11a))var _0x18dfb5=users[_0x4d49e1(0x11a)];else{if(_0x4e44da[0x0][_0x4d49e1(0xd0)]==_0x4d49e1(0x116))var _0x18dfb5=users['Spanish'];else{if(_0x4e44da[0x0]['language']=='French')var _0x18dfb5=users[_0x4d49e1(0x106)];else{if(_0x4e44da[0x0][_0x4d49e1(0xd0)]==_0x4d49e1(0x10e))var _0x18dfb5=users[_0x4d49e1(0xfd)];else{if(_0x4e44da[0x0][_0x4d49e1(0xd0)]=='Chinese')var _0x18dfb5=users[_0x4d49e1(0xd6)];else{if(_0x4e44da[0x0][_0x4d49e1(0xd0)]==_0x4d49e1(0xf3))var _0x18dfb5=users[_0x4d49e1(0x128)];}}}}}}}_0x45f157[_0x4d49e1(0x107)](_0x4d49e1(0x11e),{'success':_0x7b8126['flash'](_0x4d49e1(0x114)),'errors':_0x7b8126['flash'](_0x4d49e1(0xec)),'user':_0x4e5db1,'profile':_0x1b0ac2,'master_shop':_0x4e44da,'role':_0x1f7fc6,'payment':_0xf8e7bd,'language':_0x18dfb5});}catch(_0x491b93){console[_0x4d49e1(0x117)](_0x491b93);}}),router[a0_0x43bc38(0x131)](a0_0x43bc38(0xda),auth,async(_0x14484d,_0x33a873)=>{const _0x17ba7a=a0_0x43bc38;try{const {name:_0x52da38,email:_0x298b39,mobile:_0x9f66c9,company:_0x490fdf,address:_0x523115,receivable:_0x3dc81f,payable:_0x3d033a,code:_0x38e194,contactperson:_0x365e98,landline:_0x78cf26}=_0x14484d[_0x17ba7a(0x11f)],_0x57a142=new suppliers({'name':_0x52da38,'email':_0x298b39,'mobile':_0x9f66c9,'company':_0x490fdf,'address':_0x523115,'receivable':_0x3dc81f,'payable':_0x3d033a,'suppliers_code':_0x38e194,'contactperson':_0x365e98,'landline':_0x78cf26}),_0xd73707=await _0x57a142[_0x17ba7a(0xce)]();_0x14484d[_0x17ba7a(0x10a)]('success',_0x17ba7a(0xe6)),_0x33a873[_0x17ba7a(0xcc)](_0x17ba7a(0x127));}catch(_0x4353ef){console['log'](_0x4353ef);}}),router[a0_0x43bc38(0xe3)]('/view/:id',auth,async(_0x5de120,_0x54408a)=>{const _0x2220a0=a0_0x43bc38;try{const {username:_0x1327e1,email:_0x1c4830,role:_0x56e375}=_0x5de120['user'],_0x43d77d=_0x5de120['user'],_0x118584=await profile[_0x2220a0(0xf5)]({'email':_0x43d77d[_0x2220a0(0xee)]}),_0x206587=await master_shop['find']();console['log'](_0x2220a0(0xe8),_0x206587);const _0x3c92e7=_0x5de120['params']['id'],_0xb1e0c0=await suppliers[_0x2220a0(0x12f)](_0x3c92e7);console[_0x2220a0(0x117)](_0xb1e0c0);if(_0x206587[0x0][_0x2220a0(0xd0)]==_0x2220a0(0x12a)){var _0x3a824e=users[_0x2220a0(0xd3)];console['log'](_0x3a824e);}else{if(_0x206587[0x0]['language']==_0x2220a0(0x12d))var _0x3a824e=users[_0x2220a0(0x12d)];else{if(_0x206587[0x0][_0x2220a0(0xd0)]=='German')var _0x3a824e=users[_0x2220a0(0x11a)];else{if(_0x206587[0x0]['language']==_0x2220a0(0x116))var _0x3a824e=users['Spanish'];else{if(_0x206587[0x0][_0x2220a0(0xd0)]=='French')var _0x3a824e=users['French'];else{if(_0x206587[0x0][_0x2220a0(0xd0)]==_0x2220a0(0x10e))var _0x3a824e=users['Portuguese'];else{if(_0x206587[0x0][_0x2220a0(0xd0)]=='Chinese')var _0x3a824e=users[_0x2220a0(0xd6)];else{if(_0x206587[0x0][_0x2220a0(0xd0)]=='Arabic\x20(ae)')var _0x3a824e=users[_0x2220a0(0x128)];}}}}}}}_0x54408a[_0x2220a0(0x107)](_0x2220a0(0x11e),{'success':_0x5de120[_0x2220a0(0x10a)](_0x2220a0(0x114)),'errors':_0x5de120[_0x2220a0(0x10a)](_0x2220a0(0xec)),'role':_0x43d77d,'profile':_0x118584,'master_shop':_0x206587,'user':_0xb1e0c0,'language':_0x3a824e});}catch(_0x5ec530){console[_0x2220a0(0x117)](_0x5ec530);}}),router[a0_0x43bc38(0x131)](a0_0x43bc38(0x10b),auth,async(_0x2b8a4b,_0x52e110)=>{const _0x26e5e0=a0_0x43bc38;try{const _0x5978a2=_0x2b8a4b['params']['id'],_0x1698c3=await suppliers[_0x26e5e0(0x12f)](_0x5978a2),{name:_0x4d6a8a,email:_0x544ae5,mobile:_0x3bf085,company:_0x38d1cc,address:_0x4f902c,receivable:_0x2448ea,payable:_0x506232,code:_0x465bc5,contactperson:_0x5e503c,landline:_0x18b94b}=_0x2b8a4b[_0x26e5e0(0x11f)];_0x1698c3[_0x26e5e0(0xdc)]=_0x4d6a8a,_0x1698c3['email']=_0x544ae5,_0x1698c3[_0x26e5e0(0x12b)]=_0x3bf085,_0x1698c3[_0x26e5e0(0x121)]=_0x38d1cc,_0x1698c3[_0x26e5e0(0xe7)]=_0x4f902c,_0x1698c3[_0x26e5e0(0xff)]=_0x2448ea,_0x1698c3[_0x26e5e0(0xf7)]=_0x506232,_0x1698c3['suppliers_code']=_0x465bc5,_0x1698c3[_0x26e5e0(0xef)]=_0x5e503c,_0x1698c3[_0x26e5e0(0xd1)]=_0x18b94b;const _0x479af4=await _0x1698c3['save']();_0x2b8a4b['flash'](_0x26e5e0(0x114),_0x26e5e0(0x104)),_0x52e110[_0x26e5e0(0xcc)]('/supplier/view');}catch(_0x5e2f7d){console['log'](_0x5e2f7d);}}),router['get'](a0_0x43bc38(0x10c),auth,async(_0x15ac5f,_0xc23090)=>{const _0x1c99cb=a0_0x43bc38;try{const {username:_0x242a1a,email:_0x1dfca7,role:_0x58f025}=_0x15ac5f['user'],_0x80ff39=_0x15ac5f['user'],_0x356b68=await profile[_0x1c99cb(0xf5)]({'email':_0x80ff39['email']}),_0x42ce30=await master_shop[_0x1c99cb(0x115)]();console[_0x1c99cb(0x117)](_0x1c99cb(0xe8),_0x42ce30),console['log'](_0x15ac5f[_0x1c99cb(0x129)]['id']);const _0x7f00ca=await suppliers['findOne']({'_id':_0x15ac5f[_0x1c99cb(0x129)]['id']});console[_0x1c99cb(0x117)](_0x7f00ca);const _0x18c255=await s_payment_data[_0x1c99cb(0x115)]({'suppliers':_0x7f00ca[_0x1c99cb(0xdc)]});console[_0x1c99cb(0x117)](_0x18c255);const _0x18f371=await s_payment_data[_0x1c99cb(0xd9)]([{'$match':{'suppliers':_0x7f00ca[_0x1c99cb(0xdc)]}},{'$match':{'reason':_0x1c99cb(0x125)}},{'$group':{'_id':_0x1c99cb(0xde),'sum':{'$sum':_0x1c99cb(0x108)}}}]);console[_0x1c99cb(0x117)]('payable_sum',_0x18f371);const _0x5eebf6=await s_payment_data[_0x1c99cb(0xd9)]([{'$match':{'suppliers':_0x7f00ca[_0x1c99cb(0xdc)]}},{'$match':{'reason':_0x1c99cb(0xf6)}},{'$group':{'_id':_0x1c99cb(0xde),'sum':{'$sum':_0x1c99cb(0x108)}}}]);console['log'](_0x1c99cb(0xea),_0x5eebf6);if(_0x42ce30[0x0]['language']==_0x1c99cb(0x12a)){var _0x2ef9b4=users[_0x1c99cb(0xd3)];console[_0x1c99cb(0x117)](_0x2ef9b4);}else{if(_0x42ce30[0x0][_0x1c99cb(0xd0)]==_0x1c99cb(0x12d))var _0x2ef9b4=users[_0x1c99cb(0x12d)];else{if(_0x42ce30[0x0][_0x1c99cb(0xd0)]==_0x1c99cb(0x11a))var _0x2ef9b4=users[_0x1c99cb(0x11a)];else{if(_0x42ce30[0x0][_0x1c99cb(0xd0)]==_0x1c99cb(0x116))var _0x2ef9b4=users['Spanish'];else{if(_0x42ce30[0x0]['language']==_0x1c99cb(0x106))var _0x2ef9b4=users['French'];else{if(_0x42ce30[0x0][_0x1c99cb(0xd0)]==_0x1c99cb(0x10e))var _0x2ef9b4=users[_0x1c99cb(0xfd)];else{if(_0x42ce30[0x0]['language']=='Chinese')var _0x2ef9b4=users[_0x1c99cb(0xd6)];else{if(_0x42ce30[0x0][_0x1c99cb(0xd0)]==_0x1c99cb(0xf3))var _0x2ef9b4=users[_0x1c99cb(0x128)];}}}}}}}_0xc23090[_0x1c99cb(0x107)]('supplier_payment',{'success':_0x15ac5f[_0x1c99cb(0x10a)](_0x1c99cb(0x114)),'errors':_0x15ac5f[_0x1c99cb(0x10a)](_0x1c99cb(0xec)),'role':_0x80ff39,'profile':_0x356b68,'master_shop':_0x42ce30,'payment':_0x18c255,'payable':_0x18f371,'receivable':_0x5eebf6,'language':_0x2ef9b4});}catch(_0x28163d){console[_0x1c99cb(0x117)](_0x28163d);}}),router[a0_0x43bc38(0xe3)]('/products_export_migrate_file',auth,async(_0x2a22e2,_0x4258fc)=>{const _0x1ff6f7=a0_0x43bc38;try{const _0x3a04d1=new excelJS['Workbook'](),_0x364f59=_0x3a04d1[_0x1ff6f7(0x10f)](_0x1ff6f7(0xc9));return _0x364f59[_0x1ff6f7(0xf8)]=[{'header':_0x1ff6f7(0x11b),'key':_0x1ff6f7(0xf1),'width':0xa},{'header':'Supplier_Code','key':_0x1ff6f7(0xd5),'width':0xa},{'header':_0x1ff6f7(0x124),'key':'SalesmanName','width':0xa},{'header':_0x1ff6f7(0x132),'key':'address','width':0xa},{'header':_0x1ff6f7(0x133),'key':_0x1ff6f7(0x12b),'width':0xa},{'header':_0x1ff6f7(0xe7),'key':_0x1ff6f7(0xee),'width':0xa}],_0x4258fc[_0x1ff6f7(0xd2)]('Content-Type',_0x1ff6f7(0x111)),_0x4258fc[_0x1ff6f7(0xd2)](_0x1ff6f7(0xe0),_0x1ff6f7(0xdb)),_0x3a04d1['xlsx'][_0x1ff6f7(0xd8)](_0x4258fc)['then'](()=>{const _0x4553bb=_0x1ff6f7;_0x4258fc[_0x4553bb(0x101)](0xc8);});}catch(_0x39fc4e){_0x4258fc['status'](0x190)[_0x1ff6f7(0x123)]({'errors':_0x39fc4e[_0x1ff6f7(0x12c)]});}});const storage1=multer[a0_0x43bc38(0xe5)]({'destination':(_0x9d589a,_0x3cda4b,_0x136bd9)=>{_0x136bd9(null,'public/Migration');},'filename':(_0x267654,_0x6683d1,_0xfa26e2)=>{const _0x1361b5=a0_0x43bc38;_0xfa26e2(null,Date[_0x1361b5(0x130)]()+_0x6683d1[_0x1361b5(0x113)]);}}),uploadMigrate=multer({'storage':storage1});function a0_0x1e63(_0x2ca9d1,_0x2d26e){const _0x26df8a=a0_0x26df();return a0_0x1e63=function(_0x1e6328,_0x807a64){_0x1e6328=_0x1e6328-0xc8;let _0x39d640=_0x26df8a[_0x1e6328];return _0x39d640;},a0_0x1e63(_0x2ca9d1,_0x2d26e);}function a0_0x26df(){const _0x5dd345=['diskStorage','supplier\x20data\x20add\x20successfully','address','master','supplier_product_file','receivable_sum','public/Migration/','errors','Sheets','email','contactperson','suppliers_docs','PBrands','230XTZDhD','Arabic\x20(ae)','173676yWAhjG','findOne','Purchase\x20Return','payable','columns','../public/language/languages.json','47005oIIooL','purchase_return','143GqEsuX','Portuguese','xlsx','receivable','\x20Failed','status','express','suppliers','supplier\x20data\x20update\x20successfully','file','French','render','$amount','readFile','flash','/view/:id','/view/payment/:id','33928jJYheD','Portuguese\x20(BR)','addWorksheet','111573mFUaaH','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','../middleware/auth','originalname','success','find','Spanish','log','3qSNchP','1285GpOHGp','German','Name','doc','140876DfLQQD','supplier','body','utils','company','/supplier_import_migrate_file','send','Email','Purchase','\x20added\x20successfully','/supplier/view','Arabic','params','English\x20(US)','mobile','message','Hindi','data','findById','now','post','Mobile_number','Company_Name','map','Customers','amount','Router','redirect','supplier.js\x20payment_data','save','single','language','landline','setHeader','English','6824IPagvO','PUnits','Chinese','forEach','write','aggregate','/view','attachment;\x20filename=supplier_Migration_File.xlsx','name','reason','$reason','json','Content-Disposition','787440cUjFNB','180vemMgf','get','Supplier_Code'];a0_0x26df=function(){return _0x5dd345;};return a0_0x26df();}router['post'](a0_0x43bc38(0x122),auth,uploadMigrate[a0_0x43bc38(0xcf)](a0_0x43bc38(0xe9)),async(_0x1f1027,_0x22410a)=>{const _0x4f4340=a0_0x43bc38,_0x403a52=_0x1f1027[_0x4f4340(0x105)]['filename'],_0x464adc=await xlsx[_0x4f4340(0x109)](_0x4f4340(0xeb)+_0x403a52);let _0xa0e859=_0x464adc['SheetNames'],_0x208447=xlsx[_0x4f4340(0x120)]['sheet_to_json'](_0x464adc[_0x4f4340(0xed)][_0xa0e859[0x0]]);for(const _0x57b5ac of _0x208447){const _0xd71ee3=_0x57b5ac[_0x4f4340(0x11b)],_0x305b76=_0x57b5ac[_0x4f4340(0xe4)],_0x1432cc=_0x57b5ac[_0x4f4340(0xe7)],_0x55811e=_0x57b5ac[_0x4f4340(0x132)],_0x224024=_0x57b5ac[_0x4f4340(0x124)],_0xce1c45=_0x57b5ac[_0x4f4340(0x133)];try{let _0x46afdd=await suppliers['findOne']({'name':_0xd71ee3});if(!_0x46afdd){const _0x109006=new suppliers({'name':_0xd71ee3,'suppliers_code':_0x305b76,'address':_0x1432cc,'mobile':_0x55811e,'email':_0x224024,'company':_0xce1c45});_0x46afdd=await _0x109006[_0x4f4340(0xce)](),_0x1f1027[_0x4f4340(0x10a)](_0x4f4340(0x114),_0xd71ee3+_0x4f4340(0x126));}else _0x1f1027[_0x4f4340(0x10a)]('error',_0xd71ee3+_0x4f4340(0x100));}catch(_0x38c580){_0x22410a[_0x4f4340(0x101)](0x1f4)[_0x4f4340(0xdf)]({'proderror':_0x38c580[_0x4f4340(0x12c)],'aproduct':ProductName});}}_0x22410a[_0x4f4340(0xcc)](_0x4f4340(0x127));}),module['exports']=router;