function a0_0x3f90(_0x2df9d9,_0x254378){const _0x481cb2=a0_0x481c();return a0_0x3f90=function(_0x3f901a,_0x5572c9){_0x3f901a=_0x3f901a-0xd2;let _0x272d36=_0x481cb2[_0x3f901a];return _0x272d36;},a0_0x3f90(_0x2df9d9,_0x254378);}const a0_0x4a5ad4=a0_0x3f90;(function(_0x352b94,_0x4f14bc){const _0x2cb37b=a0_0x3f90,_0x16d6b7=_0x352b94();while(!![]){try{const _0x3b5dab=parseInt(_0x2cb37b(0xef))/0x1+parseInt(_0x2cb37b(0xd7))/0x2*(parseInt(_0x2cb37b(0x101))/0x3)+-parseInt(_0x2cb37b(0x10a))/0x4*(-parseInt(_0x2cb37b(0x110))/0x5)+-parseInt(_0x2cb37b(0x104))/0x6*(parseInt(_0x2cb37b(0x129))/0x7)+parseInt(_0x2cb37b(0x12a))/0x8*(parseInt(_0x2cb37b(0xf5))/0x9)+-parseInt(_0x2cb37b(0xe1))/0xa+parseInt(_0x2cb37b(0x126))/0xb*(-parseInt(_0x2cb37b(0x11a))/0xc);if(_0x3b5dab===_0x4f14bc)break;else _0x16d6b7['push'](_0x16d6b7['shift']());}catch(_0x57477e){_0x16d6b7['push'](_0x16d6b7['shift']());}}}(a0_0x481c,0x2c6b0));function a0_0x481c(){const _0x2f64af=['findOne','error','errors','user','send','now','Portuguese\x20(BR)','payable','success','/view/payment/:id','4530cMtRHe','json','element','1021434XGpBNK','email','contactperson','utils','flash','/customer_import_migrate_file','3308PcArFJ','map','English\x20(US)','SalesmanName','sale','find','165NKKeIZ','../public/language/languages.json','/view/:id','customer','$amount','forEach','Spanish','express','Workbook','log','3412596mrnAxy','sheet_to_json','customer_docs','payment_data','receivable_sum','Arabic\x20(ae)','get','Name','redirect','payable_sum','/products_export_migrate_file','amount','11IgJyHY','multer','public/Migration','7qfBvKe','1816BtxwXj','c_payments','mobile','customer\x20add\x20successfully','render','English','/view','Content-Type','params','columns','\x20Failed','French','PUnits','findById','$reason','data','../middleware/auth','originalname','filename','language','Portuguese','exports','Sale','xlsx','German','318hLHvUi','customer\x20update\x20successfully','address','Content-Disposition','message','exceljs','file','aggregate','/customer/view','reason','1246990XvCJkT','sale_return','../models/all_models','PName','name','setHeader','customer_data','customer_product_fule','public/Migration/','Arabic','save','\x20added\x20successfully','status','SalesmanCode','310233DnqkVn','Router','diskStorage','Chinese','post','then','7281PjGtep','master'];a0_0x481c=function(){return _0x2f64af;};return a0_0x481c();}const express=require(a0_0x4a5ad4(0x117)),app=express(),router=express[a0_0x4a5ad4(0xf0)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x4a5ad4(0xe3)),auth=require(a0_0x4a5ad4(0x13a)),users=require(a0_0x4a5ad4(0x111)),excelJS=require(a0_0x4a5ad4(0xdc)),xlsx=require(a0_0x4a5ad4(0xd5)),multer=require(a0_0x4a5ad4(0x127));router['get'](a0_0x4a5ad4(0x130),auth,async(_0x48cbc9,_0x54c70a)=>{const _0x8aa7b1=a0_0x4a5ad4;try{const {username:_0x1cf0ce,email:_0x23f8e8,role:_0x26ab94}=_0x48cbc9[_0x8aa7b1(0xfa)],_0x2130c4=_0x48cbc9['user'],_0xbdf39=await profile[_0x8aa7b1(0xf7)]({'email':_0x2130c4['email']}),_0x3994cf=await master_shop[_0x8aa7b1(0x10f)]();console[_0x8aa7b1(0x119)](_0x8aa7b1(0xf6),_0x3994cf);const _0x33e055=await customer[_0x8aa7b1(0x10f)](),_0x20ac9a=await customer[_0x8aa7b1(0xde)]([{'$lookup':{'from':_0x8aa7b1(0x12b),'localField':_0x8aa7b1(0xe5),'foreignField':_0x8aa7b1(0x113),'as':_0x8aa7b1(0x11c)}}]);console['log'](_0x20ac9a);const _0x41bc4f=_0x20ac9a[_0x8aa7b1(0x10b)](_0x1b582f=>{const _0x2c4c38=_0x8aa7b1;console[_0x2c4c38(0x119)](_0x2c4c38(0x139),_0x1b582f);var _0x2ce970=0x0,_0xd8390a=0x0;return _0x1b582f['customer_docs'][_0x2c4c38(0x115)](_0xe39855=>{const _0x377024=_0x2c4c38;console[_0x377024(0x119)](_0x377024(0x103),_0xe39855),_0xe39855[_0x377024(0xe0)]==_0x377024(0xd4)?_0x2ce970+=_0xe39855[_0x377024(0x125)]:_0xd8390a+=_0xe39855[_0x377024(0x125)];}),_0x1b582f[_0x2c4c38(0x10e)]=parseFloat(_0x2ce970)+0x0,_0x1b582f[_0x2c4c38(0xe2)]=parseFloat(_0xd8390a)+0x0,_0x1b582f;});console[_0x8aa7b1(0x119)](_0x8aa7b1(0x11d),_0x41bc4f);if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]==_0x8aa7b1(0x10c)){var _0x52f004=users[_0x8aa7b1(0x12f)];console[_0x8aa7b1(0x119)](_0x52f004);}else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]=='Hindi')var _0x52f004=users['Hindi'];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]=='German')var _0x52f004=users[_0x8aa7b1(0xd6)];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]==_0x8aa7b1(0x116))var _0x52f004=users[_0x8aa7b1(0x116)];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]==_0x8aa7b1(0x135))var _0x52f004=users[_0x8aa7b1(0x135)];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]=='Portuguese\x20(BR)')var _0x52f004=users[_0x8aa7b1(0xd2)];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]=='Chinese')var _0x52f004=users['Chinese'];else{if(_0x3994cf[0x0][_0x8aa7b1(0x13d)]==_0x8aa7b1(0x11f))var _0x52f004=users['Arabic'];}}}}}}}_0x54c70a[_0x8aa7b1(0x12e)](_0x8aa7b1(0x113),{'success':_0x48cbc9[_0x8aa7b1(0x108)]('success'),'errors':_0x48cbc9[_0x8aa7b1(0x108)](_0x8aa7b1(0xf9)),'user':_0x33e055,'role':_0x2130c4,'profile':_0xbdf39,'payment':_0x41bc4f,'master_shop':_0x3994cf,'language':_0x52f004});}catch(_0x149f85){console[_0x8aa7b1(0x119)](_0x149f85);}}),router[a0_0x4a5ad4(0xf3)](a0_0x4a5ad4(0x130),auth,async(_0x42c38b,_0x3b9e9a)=>{const _0x14c1fb=a0_0x4a5ad4;try{const {name:_0x9a1ced,address:_0x3e222a,mobile:_0x3995f2,email:_0x528b2a,receivable:_0x3f216e,payable:_0xf185d1,contactperson:_0xa93a,landline:_0x4fd87b}=_0x42c38b['body'],_0xf752d1=new customer({'name':_0x9a1ced,'address':_0x3e222a,'mobile':_0x3995f2,'email':_0x528b2a,'receivable':_0x3f216e,'payable':_0xf185d1,'contactperson':_0xa93a,'landline':_0x4fd87b}),_0x49b0fe=await _0xf752d1[_0x14c1fb(0xeb)]();_0x42c38b[_0x14c1fb(0x108)](_0x14c1fb(0xff),_0x14c1fb(0x12d)),_0x3b9e9a[_0x14c1fb(0x122)]('/customer/view');}catch(_0x3b0207){console[_0x14c1fb(0x119)](_0x3b0207);}}),router['get'](a0_0x4a5ad4(0x112),auth,async(_0x2c469e,_0x2d0807)=>{const _0x33c3a9=a0_0x4a5ad4;try{const {username:_0x41481e,email:_0x5c9816,role:_0x4d5bb8}=_0x2c469e[_0x33c3a9(0xfa)],_0x30fb5d=_0x2c469e['user'],_0x324254=await profile['findOne']({'email':_0x30fb5d[_0x33c3a9(0x105)]}),_0x433d34=await master_shop[_0x33c3a9(0x10f)]();console['log'](_0x33c3a9(0xf6),_0x433d34);const _0x5c82b2=_0x2c469e['params']['id'],_0x4ce102=await customer[_0x33c3a9(0x137)](_0x5c82b2);if(_0x433d34[0x0]['language']==_0x33c3a9(0x10c)){var _0xc238a6=users['English'];console[_0x33c3a9(0x119)](_0xc238a6);}else{if(_0x433d34[0x0]['language']=='Hindi')var _0xc238a6=users['Hindi'];else{if(_0x433d34[0x0]['language']=='German')var _0xc238a6=users[_0x33c3a9(0xd6)];else{if(_0x433d34[0x0]['language']==_0x33c3a9(0x116))var _0xc238a6=users[_0x33c3a9(0x116)];else{if(_0x433d34[0x0][_0x33c3a9(0x13d)]==_0x33c3a9(0x135))var _0xc238a6=users[_0x33c3a9(0x135)];else{if(_0x433d34[0x0][_0x33c3a9(0x13d)]==_0x33c3a9(0xfd))var _0xc238a6=users['Portuguese'];else{if(_0x433d34[0x0]['language']=='Chinese')var _0xc238a6=users[_0x33c3a9(0xf2)];else{if(_0x433d34[0x0][_0x33c3a9(0x13d)]==_0x33c3a9(0x11f))var _0xc238a6=users[_0x33c3a9(0xea)];}}}}}}}_0x2d0807['render']('customer',{'success':_0x2c469e[_0x33c3a9(0x108)](_0x33c3a9(0xff)),'errors':_0x2c469e['flash']('errors'),'role':_0x30fb5d,'profile':_0x324254,'user':_0x4ce102,'master_shop':_0x433d34,'language':_0xc238a6});}catch(_0x5c7b9f){console[_0x33c3a9(0x119)](_0x5c7b9f);}}),router[a0_0x4a5ad4(0xf3)](a0_0x4a5ad4(0x112),auth,async(_0x5cd7d0,_0xbc3182)=>{const _0x59a023=a0_0x4a5ad4;try{const _0x3221f1=_0x5cd7d0[_0x59a023(0x132)]['id'],_0xd6c9e9=await customer[_0x59a023(0x137)](_0x3221f1),{name:_0x5860da,address:_0x457e63,mobile:_0x3dfa6f,email:_0x5dafba,receivable:_0x4fded9,payable:_0x3907f2,contactperson:_0x33e02b,landline:_0x8b3569}=_0x5cd7d0['body'];_0xd6c9e9[_0x59a023(0xe5)]=_0x5860da,_0xd6c9e9[_0x59a023(0xd9)]=_0x457e63,_0xd6c9e9[_0x59a023(0x12c)]=_0x3dfa6f,_0xd6c9e9[_0x59a023(0x105)]=_0x5dafba,_0xd6c9e9['receivable']=_0x4fded9,_0xd6c9e9[_0x59a023(0xfe)]=_0x3907f2,_0xd6c9e9[_0x59a023(0x106)]=_0x33e02b,_0xd6c9e9['landline']=_0x8b3569;const _0x48d769=await _0xd6c9e9['save']();_0x5cd7d0[_0x59a023(0x108)]('success',_0x59a023(0xd8)),_0xbc3182[_0x59a023(0x122)](_0x59a023(0xdf));}catch(_0x41ba7e){console[_0x59a023(0x119)](_0x41ba7e);}}),router[a0_0x4a5ad4(0x120)](a0_0x4a5ad4(0x100),auth,async(_0x483d44,_0x389c38)=>{const _0x35cc00=a0_0x4a5ad4;try{const {username:_0x26e217,email:_0x1eff46,role:_0x46dc6e}=_0x483d44[_0x35cc00(0xfa)],_0x2030f7=_0x483d44['user'],_0x1519bd=await profile[_0x35cc00(0xf7)]({'email':_0x2030f7[_0x35cc00(0x105)]}),_0x21b7c3=await master_shop[_0x35cc00(0x10f)]();console[_0x35cc00(0x119)](_0x35cc00(0xf6),_0x21b7c3),console[_0x35cc00(0x119)](_0x483d44[_0x35cc00(0x132)]['id']);const _0xce019b=await customer[_0x35cc00(0xf7)]({'_id':_0x483d44[_0x35cc00(0x132)]['id']});console[_0x35cc00(0x119)](_0x35cc00(0xe7),_0xce019b);const _0x241598=await c_payment_data['find']({'customer':_0xce019b[_0x35cc00(0xe5)]});console[_0x35cc00(0x119)](_0x241598);const _0x50172e=await c_payment_data[_0x35cc00(0xde)]([{'$match':{'customer':_0xce019b[_0x35cc00(0xe5)]}},{'$match':{'reason':_0x35cc00(0xd4)}},{'$group':{'_id':_0x35cc00(0x138),'sum':{'$sum':_0x35cc00(0x114)}}}]);console[_0x35cc00(0x119)](_0x35cc00(0x123),_0x50172e);const _0x166913=await c_payment_data['aggregate']([{'$match':{'customer':_0xce019b[_0x35cc00(0xe5)]}},{'$match':{'reason':'Sale\x20Return'}},{'$group':{'_id':_0x35cc00(0x138),'sum':{'$sum':_0x35cc00(0x114)}}}]);console[_0x35cc00(0x119)](_0x35cc00(0x11e),_0x166913);if(_0x21b7c3[0x0]['language']==_0x35cc00(0x10c)){var _0x448d5d=users[_0x35cc00(0x12f)];console[_0x35cc00(0x119)](_0x448d5d);}else{if(_0x21b7c3[0x0][_0x35cc00(0x13d)]=='Hindi')var _0x448d5d=users['Hindi'];else{if(_0x21b7c3[0x0][_0x35cc00(0x13d)]==_0x35cc00(0xd6))var _0x448d5d=users['German'];else{if(_0x21b7c3[0x0][_0x35cc00(0x13d)]==_0x35cc00(0x116))var _0x448d5d=users[_0x35cc00(0x116)];else{if(_0x21b7c3[0x0]['language']==_0x35cc00(0x135))var _0x448d5d=users['French'];else{if(_0x21b7c3[0x0][_0x35cc00(0x13d)]==_0x35cc00(0xfd))var _0x448d5d=users[_0x35cc00(0xd2)];else{if(_0x21b7c3[0x0]['language']==_0x35cc00(0xf2))var _0x448d5d=users['Chinese'];else{if(_0x21b7c3[0x0]['language']=='Arabic\x20(ae)')var _0x448d5d=users['Arabic'];}}}}}}}_0x389c38[_0x35cc00(0x12e)]('customer_payment',{'success':_0x483d44[_0x35cc00(0x108)](_0x35cc00(0xff)),'errors':_0x483d44[_0x35cc00(0x108)](_0x35cc00(0xf9)),'role':_0x2030f7,'profile':_0x1519bd,'payment':_0x241598,'payable':_0x50172e,'receivable':_0x166913,'master_shop':_0x21b7c3,'language':_0x448d5d});}catch(_0x357d76){console['log'](_0x357d76);}}),router[a0_0x4a5ad4(0x120)](a0_0x4a5ad4(0x124),auth,async(_0x43fb36,_0x27fdd9)=>{const _0xf716f9=a0_0x4a5ad4;try{const _0x577421=new excelJS[(_0xf716f9(0x118))](),_0x3e0445=_0x577421['addWorksheet']('Customers');return _0x3e0445[_0xf716f9(0x133)]=[{'header':'ID','key':_0xf716f9(0xe4),'width':0xa},{'header':_0xf716f9(0x121),'key':'PBrands','width':0xa},{'header':_0xf716f9(0xee),'key':_0xf716f9(0x136),'width':0xa},{'header':_0xf716f9(0x10d),'key':_0xf716f9(0x10d),'width':0xa},{'header':_0xf716f9(0xd9),'key':_0xf716f9(0xd9),'width':0xa},{'header':'mobile','key':'mobile','width':0xa},{'header':_0xf716f9(0x105),'key':_0xf716f9(0x105),'width':0xa}],_0x27fdd9['setHeader'](_0xf716f9(0x131),'application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x27fdd9[_0xf716f9(0xe6)](_0xf716f9(0xda),'attachment;\x20filename=customer_Migration_File.xlsx'),_0x577421['xlsx']['write'](_0x27fdd9)[_0xf716f9(0xf4)](()=>{_0x27fdd9['status'](0xc8);});}catch(_0x2d0b1e){_0x27fdd9[_0xf716f9(0xed)](0x190)[_0xf716f9(0xfb)]({'errors':_0x2d0b1e['message']});}});const storage1=multer[a0_0x4a5ad4(0xf1)]({'destination':(_0x15b8ce,_0x4feacc,_0x54c010)=>{const _0x106199=a0_0x4a5ad4;_0x54c010(null,_0x106199(0x128));},'filename':(_0x39d566,_0x279b10,_0x31961d)=>{const _0x43119b=a0_0x4a5ad4;_0x31961d(null,Date[_0x43119b(0xfc)]()+_0x279b10[_0x43119b(0x13b)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x4a5ad4(0xf3)](a0_0x4a5ad4(0x109),auth,uploadMigrate['single'](a0_0x4a5ad4(0xe8)),async(_0x4dc5c5,_0x5e5e94)=>{const _0x4807bb=a0_0x4a5ad4,_0x4e9bf8=_0x4dc5c5[_0x4807bb(0xdd)][_0x4807bb(0x13c)],_0x50c8e1=await xlsx['readFile'](_0x4807bb(0xe9)+_0x4e9bf8);let _0x3b0485=_0x50c8e1['SheetNames'],_0x149384=xlsx[_0x4807bb(0x107)][_0x4807bb(0x11b)](_0x50c8e1['Sheets'][_0x3b0485[0x0]]);for(const _0x251ddc of _0x149384){const _0x3f19cb=_0x251ddc['ID'],_0x2828ae=_0x251ddc[_0x4807bb(0x121)],_0xa39b74=_0x251ddc[_0x4807bb(0xee)],_0x5937e5=_0x251ddc['SalesmanName'],_0x29cbee=_0x251ddc[_0x4807bb(0xd9)],_0x4fe14b=_0x251ddc['mobile'],_0x11ba9e=_0x251ddc[_0x4807bb(0x105)];try{let _0x558f22=await customer[_0x4807bb(0xf7)]({'name':_0x2828ae});if(!_0x558f22){const _0x1f8548=new customer({'name':_0x2828ae,'ID':_0x3f19cb,'SalesmanCode':_0xa39b74,'SalesmanName':_0x5937e5,'address':_0x29cbee,'mobile':_0x4fe14b,'email':_0x11ba9e});_0x558f22=await _0x1f8548[_0x4807bb(0xeb)](),_0x4dc5c5[_0x4807bb(0x108)](_0x4807bb(0xff),_0x2828ae+_0x4807bb(0xec));}else _0x4dc5c5[_0x4807bb(0x108)](_0x4807bb(0xf8),_0x2828ae+_0x4807bb(0x134));}catch(_0x2b4008){_0x5e5e94['status'](0x1f4)[_0x4807bb(0x102)]({'proderror':_0x2b4008[_0x4807bb(0xdb)],'aproduct':ProductName});}}_0x5e5e94[_0x4807bb(0x122)](_0x4807bb(0xdf));}),module[a0_0x4a5ad4(0xd3)]=router;