const a0_0x1ba576=a0_0x29df;function a0_0x29df(_0x28f18b,_0x4f5c66){const _0x3ed02a=a0_0x3ed0();return a0_0x29df=function(_0x29df23,_0x161a52){_0x29df23=_0x29df23-0x68;let _0x48da9d=_0x3ed02a[_0x29df23];return _0x48da9d;},a0_0x29df(_0x28f18b,_0x4f5c66);}(function(_0x37f07f,_0x31c79d){const _0x4df546=a0_0x29df,_0x3c0698=_0x37f07f();while(!![]){try{const _0x5a51f2=-parseInt(_0x4df546(0x96))/0x1*(parseInt(_0x4df546(0x94))/0x2)+parseInt(_0x4df546(0x84))/0x3*(parseInt(_0x4df546(0x87))/0x4)+-parseInt(_0x4df546(0x72))/0x5+parseInt(_0x4df546(0x80))/0x6*(-parseInt(_0x4df546(0x8e))/0x7)+parseInt(_0x4df546(0x8b))/0x8+-parseInt(_0x4df546(0x93))/0x9+parseInt(_0x4df546(0xaa))/0xa;if(_0x5a51f2===_0x31c79d)break;else _0x3c0698['push'](_0x3c0698['shift']());}catch(_0xb38ef4){_0x3c0698['push'](_0x3c0698['shift']());}}}(a0_0x3ed0,0x858fa));const express=require(a0_0x1ba576(0xb5)),app=express(),router=express[a0_0x1ba576(0x8c)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x1ba576(0xc7)),auth=require('../middleware/auth'),users=require(a0_0x1ba576(0xc3)),excelJS=require(a0_0x1ba576(0x83)),xlsx=require('xlsx'),multer=require(a0_0x1ba576(0xa9));router['get'](a0_0x1ba576(0x8f),auth,async(_0x5eacb0,_0x3cf892)=>{const _0x48d8fa=a0_0x1ba576;try{const {username:_0x196469,email:_0x58a67b,role:_0xf807d3}=_0x5eacb0['user'],_0x3312a9=_0x5eacb0[_0x48d8fa(0x7c)],_0x3ec750=await profile[_0x48d8fa(0xc1)]({'email':_0x3312a9[_0x48d8fa(0xa0)]}),_0x3dbde5=await master_shop[_0x48d8fa(0x92)]();console[_0x48d8fa(0xca)](_0x48d8fa(0x7d),_0x3dbde5);const _0x4b65a1=await customer['find'](),_0x5bf29d=await customer[_0x48d8fa(0x8a)]([{'$lookup':{'from':_0x48d8fa(0xa5),'localField':'name','foreignField':_0x48d8fa(0x88),'as':_0x48d8fa(0x7b)}}]);console['log'](_0x5bf29d);const _0x2c7cb0=_0x5bf29d[_0x48d8fa(0x75)](_0x355545=>{const _0xfad008=_0x48d8fa;console['log'](_0xfad008(0xd0),_0x355545);var _0x450e04=0x0,_0x189d51=0x0;return _0x355545[_0xfad008(0x7b)][_0xfad008(0x68)](_0x47e0d4=>{const _0x344773=_0xfad008;console[_0x344773(0xca)](_0x344773(0x99),_0x47e0d4),_0x47e0d4[_0x344773(0x6a)]==_0x344773(0xbe)?_0x450e04+=_0x47e0d4['amount']:_0x189d51+=_0x47e0d4[_0x344773(0xb4)];}),_0x355545[_0xfad008(0x89)]=parseFloat(_0x450e04)+0x0,_0x355545['sale_return']=parseFloat(_0x189d51)+0x0,_0x355545;});console[_0x48d8fa(0xca)](_0x48d8fa(0x76),_0x2c7cb0);if(_0x3dbde5[0x0]['language']==_0x48d8fa(0x6d)){var _0x16a5bb=users[_0x48d8fa(0x74)];console['log'](_0x16a5bb);}else{if(_0x3dbde5[0x0][_0x48d8fa(0xcf)]=='Hindi')var _0x16a5bb=users[_0x48d8fa(0x85)];else{if(_0x3dbde5[0x0]['language']==_0x48d8fa(0xc8))var _0x16a5bb=users[_0x48d8fa(0xc8)];else{if(_0x3dbde5[0x0][_0x48d8fa(0xcf)]==_0x48d8fa(0xcd))var _0x16a5bb=users[_0x48d8fa(0xcd)];else{if(_0x3dbde5[0x0]['language']==_0x48d8fa(0xb2))var _0x16a5bb=users[_0x48d8fa(0xb2)];else{if(_0x3dbde5[0x0]['language']==_0x48d8fa(0xb7))var _0x16a5bb=users[_0x48d8fa(0x8d)];else{if(_0x3dbde5[0x0][_0x48d8fa(0xcf)]=='Chinese')var _0x16a5bb=users[_0x48d8fa(0xd2)];else{if(_0x3dbde5[0x0][_0x48d8fa(0xcf)]==_0x48d8fa(0x6e))var _0x16a5bb=users['Arabic'];}}}}}}}_0x3cf892['render'](_0x48d8fa(0x88),{'success':_0x5eacb0[_0x48d8fa(0xcc)]('success'),'errors':_0x5eacb0['flash'](_0x48d8fa(0x98)),'user':_0x4b65a1,'role':_0x3312a9,'profile':_0x3ec750,'payment':_0x2c7cb0,'master_shop':_0x3dbde5,'language':_0x16a5bb});}catch(_0x1023e2){console[_0x48d8fa(0xca)](_0x1023e2);}}),router['post']('/view',auth,async(_0xc9da86,_0x507bc6)=>{const _0x138ffd=a0_0x1ba576;try{const {name:_0x3cd2e3,address:_0x26a4c1,mobile:_0x3465b9,email:_0x4d7acb,receivable:_0x5b6a3c,payable:_0x23a63e,contactperson:_0x487c79,landline:_0x3e16e2}=_0xc9da86[_0x138ffd(0x6c)],_0x4f0452=new customer({'name':_0x3cd2e3,'address':_0x26a4c1,'mobile':_0x3465b9,'email':_0x4d7acb,'receivable':_0x5b6a3c,'payable':_0x23a63e,'contactperson':_0x487c79,'landline':_0x3e16e2}),_0x1ed003=await _0x4f0452[_0x138ffd(0x77)]();_0xc9da86[_0x138ffd(0xcc)](_0x138ffd(0xb8),_0x138ffd(0x9d)),_0x507bc6[_0x138ffd(0xb3)]('/customer/view');}catch(_0x52d618){console[_0x138ffd(0xca)](_0x52d618);}}),router[a0_0x1ba576(0xd1)](a0_0x1ba576(0xd3),auth,async(_0x542f13,_0x170f06)=>{const _0x19b63a=a0_0x1ba576;try{const {username:_0x2801ba,email:_0x1f0a81,role:_0x4fc72b}=_0x542f13[_0x19b63a(0x7c)],_0x2df7d2=_0x542f13[_0x19b63a(0x7c)],_0x17a2c=await profile[_0x19b63a(0xc1)]({'email':_0x2df7d2[_0x19b63a(0xa0)]}),_0x1bf356=await master_shop[_0x19b63a(0x92)]();console[_0x19b63a(0xca)](_0x19b63a(0x7d),_0x1bf356);const _0x15dae1=_0x542f13['params']['id'],_0x19005b=await customer[_0x19b63a(0x7e)](_0x15dae1);if(_0x1bf356[0x0]['language']==_0x19b63a(0x6d)){var _0xd19f4b=users['English'];console[_0x19b63a(0xca)](_0xd19f4b);}else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]==_0x19b63a(0x85))var _0xd19f4b=users[_0x19b63a(0x85)];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]==_0x19b63a(0xc8))var _0xd19f4b=users['German'];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]=='Spanish')var _0xd19f4b=users[_0x19b63a(0xcd)];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]==_0x19b63a(0xb2))var _0xd19f4b=users[_0x19b63a(0xb2)];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]==_0x19b63a(0xb7))var _0xd19f4b=users[_0x19b63a(0x8d)];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]=='Chinese')var _0xd19f4b=users['Chinese'];else{if(_0x1bf356[0x0][_0x19b63a(0xcf)]==_0x19b63a(0x6e))var _0xd19f4b=users[_0x19b63a(0xa6)];}}}}}}}_0x170f06[_0x19b63a(0xc0)]('customer',{'success':_0x542f13['flash'](_0x19b63a(0xb8)),'errors':_0x542f13[_0x19b63a(0xcc)]('errors'),'role':_0x2df7d2,'profile':_0x17a2c,'user':_0x19005b,'master_shop':_0x1bf356,'language':_0xd19f4b});}catch(_0x3292dd){console[_0x19b63a(0xca)](_0x3292dd);}}),router[a0_0x1ba576(0xcb)](a0_0x1ba576(0xd3),auth,async(_0x278376,_0x3450df)=>{const _0x56ec96=a0_0x1ba576;try{const _0x2922bd=_0x278376[_0x56ec96(0x9f)]['id'],_0x37ebed=await customer[_0x56ec96(0x7e)](_0x2922bd),{name:_0x51d49f,address:_0x53c565,mobile:_0x4354ea,email:_0x55a1cd,receivable:_0x3f975f,payable:_0x56fbc7,contactperson:_0x5d64fb,landline:_0x18a835}=_0x278376[_0x56ec96(0x6c)];_0x37ebed[_0x56ec96(0x90)]=_0x51d49f,_0x37ebed['address']=_0x53c565,_0x37ebed[_0x56ec96(0x6f)]=_0x4354ea,_0x37ebed[_0x56ec96(0xa0)]=_0x55a1cd,_0x37ebed[_0x56ec96(0xb6)]=_0x3f975f,_0x37ebed['payable']=_0x56fbc7,_0x37ebed[_0x56ec96(0xab)]=_0x5d64fb,_0x37ebed[_0x56ec96(0xba)]=_0x18a835;const _0x5447da=await _0x37ebed[_0x56ec96(0x77)]();_0x278376['flash'](_0x56ec96(0xb8),_0x56ec96(0x6b)),_0x3450df[_0x56ec96(0xb3)](_0x56ec96(0xae));}catch(_0x19a488){console[_0x56ec96(0xca)](_0x19a488);}}),router['get'](a0_0x1ba576(0x73),auth,async(_0x418b43,_0x46006e)=>{const _0x58d178=a0_0x1ba576;try{const {username:_0x8c6572,email:_0x3150e0,role:_0x288b0d}=_0x418b43[_0x58d178(0x7c)],_0x3835b4=_0x418b43['user'],_0x34a880=await profile['findOne']({'email':_0x3835b4[_0x58d178(0xa0)]}),_0x55a477=await master_shop[_0x58d178(0x92)]();console[_0x58d178(0xca)](_0x58d178(0x7d),_0x55a477),console[_0x58d178(0xca)](_0x418b43[_0x58d178(0x9f)]['id']);const _0x767f6f=await customer[_0x58d178(0xc1)]({'_id':_0x418b43[_0x58d178(0x9f)]['id']});console[_0x58d178(0xca)]('customer_data',_0x767f6f);const _0x5bac9c=await c_payment_data[_0x58d178(0x92)]({'customer':_0x767f6f[_0x58d178(0x90)]});console[_0x58d178(0xca)](_0x5bac9c);const _0x23b592=await c_payment_data[_0x58d178(0x8a)]([{'$match':{'customer':_0x767f6f[_0x58d178(0x90)]}},{'$match':{'reason':_0x58d178(0xbe)}},{'$group':{'_id':_0x58d178(0xc4),'sum':{'$sum':'$amount'}}}]);console[_0x58d178(0xca)](_0x58d178(0x86),_0x23b592);const _0x266cb8=await c_payment_data[_0x58d178(0x8a)]([{'$match':{'customer':_0x767f6f[_0x58d178(0x90)]}},{'$match':{'reason':_0x58d178(0xb9)}},{'$group':{'_id':_0x58d178(0xc4),'sum':{'$sum':_0x58d178(0x71)}}}]);console[_0x58d178(0xca)](_0x58d178(0xa4),_0x266cb8);if(_0x55a477[0x0]['language']==_0x58d178(0x6d)){var _0x23041e=users[_0x58d178(0x74)];console[_0x58d178(0xca)](_0x23041e);}else{if(_0x55a477[0x0][_0x58d178(0xcf)]==_0x58d178(0x85))var _0x23041e=users[_0x58d178(0x85)];else{if(_0x55a477[0x0][_0x58d178(0xcf)]==_0x58d178(0xc8))var _0x23041e=users[_0x58d178(0xc8)];else{if(_0x55a477[0x0][_0x58d178(0xcf)]=='Spanish')var _0x23041e=users[_0x58d178(0xcd)];else{if(_0x55a477[0x0][_0x58d178(0xcf)]==_0x58d178(0xb2))var _0x23041e=users['French'];else{if(_0x55a477[0x0][_0x58d178(0xcf)]==_0x58d178(0xb7))var _0x23041e=users[_0x58d178(0x8d)];else{if(_0x55a477[0x0][_0x58d178(0xcf)]=='Chinese')var _0x23041e=users[_0x58d178(0xd2)];else{if(_0x55a477[0x0][_0x58d178(0xcf)]=='Arabic\x20(ae)')var _0x23041e=users[_0x58d178(0xa6)];}}}}}}}_0x46006e[_0x58d178(0xc0)]('customer_payment',{'success':_0x418b43['flash']('success'),'errors':_0x418b43[_0x58d178(0xcc)](_0x58d178(0x98)),'role':_0x3835b4,'profile':_0x34a880,'payment':_0x5bac9c,'payable':_0x23b592,'receivable':_0x266cb8,'master_shop':_0x55a477,'language':_0x23041e});}catch(_0x34d414){console[_0x58d178(0xca)](_0x34d414);}}),router['get'](a0_0x1ba576(0x82),auth,async(_0x276b5a,_0x16c3f2)=>{const _0x11dae4=a0_0x1ba576;try{const _0x298f14=new excelJS[(_0x11dae4(0x7f))](),_0x557711=_0x298f14[_0x11dae4(0x7a)]('Customers');return _0x557711[_0x11dae4(0xa8)]=[{'header':'ID','key':_0x11dae4(0xbd),'width':0xa},{'header':_0x11dae4(0xbf),'key':'PBrands','width':0xa},{'header':_0x11dae4(0x91),'key':_0x11dae4(0xb0),'width':0xa},{'header':_0x11dae4(0xce),'key':'SalesmanName','width':0xa},{'header':_0x11dae4(0xb1),'key':_0x11dae4(0xb1),'width':0xa},{'header':_0x11dae4(0x6f),'key':_0x11dae4(0x6f),'width':0xa},{'header':_0x11dae4(0xa0),'key':'email','width':0xa}],_0x16c3f2[_0x11dae4(0xa7)](_0x11dae4(0x81),_0x11dae4(0x9c)),_0x16c3f2['setHeader'](_0x11dae4(0x9b),_0x11dae4(0x78)),_0x298f14[_0x11dae4(0xad)][_0x11dae4(0xaf)](_0x16c3f2)[_0x11dae4(0xbb)](()=>{_0x16c3f2['status'](0xc8);});}catch(_0x7c6d8d){_0x16c3f2[_0x11dae4(0xc5)](0x190)['send']({'errors':_0x7c6d8d[_0x11dae4(0x79)]});}});function a0_0x3ed0(){const _0x474736=['10681210ISyrBW','contactperson','now','xlsx','/customer/view','write','PUnits','address','French','redirect','amount','express','receivable','Portuguese\x20(BR)','success','Sale\x20Return','landline','then','single','PName','Sale','Name','render','findOne','public/Migration','../public/language/languages.json','$reason','status','sheet_to_json','../models/all_models','German','utils','log','post','flash','Spanish','SalesmanName','language','data','get','Chinese','/view/:id','forEach','originalname','reason','customer\x20update\x20successfully','body','English\x20(US)','Arabic\x20(ae)','mobile','json','$amount','4544895djazum','/view/payment/:id','English','map','payment_data','save','attachment;\x20filename=customer_Migration_File.xlsx','message','addWorksheet','customer_docs','user','master','findById','Workbook','132rZzAva','Content-Type','/products_export_migrate_file','exceljs','13830fAhQSW','Hindi','payable_sum','820VgkpzR','customer','sale','aggregate','720504bNAsJY','Router','Portuguese','44527jVAbOA','/view','name','SalesmanCode','find','415809RzviLQ','86UlmXKz','exports','10722WxHEXq','diskStorage','errors','element','readFile','Content-Disposition','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','customer\x20add\x20successfully','error','params','email','Sheets','filename','public/Migration/','receivable_sum','c_payments','Arabic','setHeader','columns','multer'];a0_0x3ed0=function(){return _0x474736;};return a0_0x3ed0();}const storage1=multer[a0_0x1ba576(0x97)]({'destination':(_0x169bb5,_0x2a1471,_0x1dc182)=>{const _0xdc91dd=a0_0x1ba576;_0x1dc182(null,_0xdc91dd(0xc2));},'filename':(_0x172997,_0xde857,_0xf3e349)=>{const _0x1b1553=a0_0x1ba576;_0xf3e349(null,Date[_0x1b1553(0xac)]()+_0xde857[_0x1b1553(0x69)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x1ba576(0xcb)]('/customer_import_migrate_file',auth,uploadMigrate[a0_0x1ba576(0xbc)]('customer_product_fule'),async(_0x1e4c41,_0x90680e)=>{const _0x385ceb=a0_0x1ba576,_0x27da41=_0x1e4c41['file'][_0x385ceb(0xa2)],_0x9d54db=await xlsx[_0x385ceb(0x9a)](_0x385ceb(0xa3)+_0x27da41);let _0xdff1b7=_0x9d54db['SheetNames'],_0x5f01ed=xlsx[_0x385ceb(0xc9)][_0x385ceb(0xc6)](_0x9d54db[_0x385ceb(0xa1)][_0xdff1b7[0x0]]);for(const _0x391d79 of _0x5f01ed){const _0x1d85b7=_0x391d79['ID'],_0x24efca=_0x391d79[_0x385ceb(0xbf)],_0x24cad4=_0x391d79[_0x385ceb(0x91)],_0x12bc15=_0x391d79['SalesmanName'],_0x3ab289=_0x391d79[_0x385ceb(0xb1)],_0x56dbc8=_0x391d79[_0x385ceb(0x6f)],_0x194b26=_0x391d79[_0x385ceb(0xa0)];try{let _0x23cd5a=await customer[_0x385ceb(0xc1)]({'name':_0x24efca});if(!_0x23cd5a){const _0x3ee810=new customer({'name':_0x24efca,'ID':_0x1d85b7,'SalesmanCode':_0x24cad4,'SalesmanName':_0x12bc15,'address':_0x3ab289,'mobile':_0x56dbc8,'email':_0x194b26});_0x23cd5a=await _0x3ee810[_0x385ceb(0x77)](),_0x1e4c41['flash'](_0x385ceb(0xb8),_0x24efca+'\x20added\x20successfully');}else _0x1e4c41[_0x385ceb(0xcc)](_0x385ceb(0x9e),_0x24efca+'\x20Failed');}catch(_0x2f83be){_0x90680e[_0x385ceb(0xc5)](0x1f4)[_0x385ceb(0x70)]({'proderror':_0x2f83be[_0x385ceb(0x79)],'aproduct':ProductName});}}_0x90680e[_0x385ceb(0xb3)]('/customer/view');}),module[a0_0x1ba576(0x95)]=router;