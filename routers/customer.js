const a0_0x10bbaf=a0_0x57b7;(function(_0x8f425e,_0x29ddd6){const _0x22187c=a0_0x57b7,_0x3e5c7b=_0x8f425e();while(!![]){try{const _0x45acbc=-parseInt(_0x22187c(0x118))/0x1+parseInt(_0x22187c(0x119))/0x2*(-parseInt(_0x22187c(0x16c))/0x3)+parseInt(_0x22187c(0x11b))/0x4+parseInt(_0x22187c(0x10f))/0x5*(parseInt(_0x22187c(0x115))/0x6)+parseInt(_0x22187c(0x12b))/0x7*(-parseInt(_0x22187c(0x151))/0x8)+-parseInt(_0x22187c(0x116))/0x9*(parseInt(_0x22187c(0x168))/0xa)+parseInt(_0x22187c(0x16d))/0xb;if(_0x45acbc===_0x29ddd6)break;else _0x3e5c7b['push'](_0x3e5c7b['shift']());}catch(_0x7aa94e){_0x3e5c7b['push'](_0x3e5c7b['shift']());}}}(a0_0x349f,0xe64e4));const express=require(a0_0x10bbaf(0x111)),app=express(),router=express[a0_0x10bbaf(0x143)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x10bbaf(0x161)),auth=require(a0_0x10bbaf(0x158)),users=require(a0_0x10bbaf(0x165)),excelJS=require(a0_0x10bbaf(0x15c)),xlsx=require(a0_0x10bbaf(0x16e)),multer=require(a0_0x10bbaf(0x14f));router[a0_0x10bbaf(0x10d)](a0_0x10bbaf(0x159),auth,async(_0x4ef0a6,_0x178d4f)=>{const _0x48cdec=a0_0x10bbaf;try{const {username:_0x14f449,email:_0x28b852,role:_0x4d5650}=_0x4ef0a6[_0x48cdec(0x13e)],_0x388f3e=_0x4ef0a6[_0x48cdec(0x13e)],_0x4c0232=await profile[_0x48cdec(0x13d)]({'email':_0x388f3e['email']}),_0x3edd3b=await master_shop[_0x48cdec(0x138)]();console[_0x48cdec(0x150)](_0x48cdec(0x121),_0x3edd3b);const _0x51867=await customer['find'](),_0x1ea389=await customer[_0x48cdec(0x134)]([{'$lookup':{'from':_0x48cdec(0x13b),'localField':'name','foreignField':'customer','as':'customer_docs'}}]);console[_0x48cdec(0x150)](_0x1ea389);const _0x54386a=_0x1ea389[_0x48cdec(0x141)](_0x3de698=>{const _0x159198=_0x48cdec;console['log'](_0x159198(0x11f),_0x3de698);var _0x315fa7=0x0,_0x4c5428=0x0;return _0x3de698[_0x159198(0x127)][_0x159198(0x114)](_0x34330b=>{const _0xc537d7=_0x159198;console[_0xc537d7(0x150)](_0xc537d7(0x131),_0x34330b),_0x34330b[_0xc537d7(0x12c)]==_0xc537d7(0x149)?_0x315fa7+=_0x34330b[_0xc537d7(0x11e)]:_0x4c5428+=_0x34330b[_0xc537d7(0x11e)];}),_0x3de698[_0x159198(0x122)]=parseFloat(_0x315fa7)+0x0,_0x3de698[_0x159198(0x112)]=parseFloat(_0x4c5428)+0x0,_0x3de698;});console[_0x48cdec(0x150)](_0x48cdec(0x162),_0x54386a);if(_0x3edd3b[0x0]['language']==_0x48cdec(0x13a)){var _0x199ee1=users['English'];console[_0x48cdec(0x150)](_0x199ee1);}else{if(_0x3edd3b[0x0][_0x48cdec(0x135)]=='Hindi')var _0x199ee1=users[_0x48cdec(0x12f)];else{if(_0x3edd3b[0x0]['language']==_0x48cdec(0x10c))var _0x199ee1=users[_0x48cdec(0x10c)];else{if(_0x3edd3b[0x0][_0x48cdec(0x135)]==_0x48cdec(0x12a))var _0x199ee1=users['Spanish'];else{if(_0x3edd3b[0x0]['language']=='French')var _0x199ee1=users[_0x48cdec(0x14e)];else{if(_0x3edd3b[0x0][_0x48cdec(0x135)]=='Portuguese\x20(BR)')var _0x199ee1=users['Portuguese'];else{if(_0x3edd3b[0x0][_0x48cdec(0x135)]==_0x48cdec(0x155))var _0x199ee1=users[_0x48cdec(0x155)];else{if(_0x3edd3b[0x0][_0x48cdec(0x135)]=='Arabic\x20(ae)')var _0x199ee1=users[_0x48cdec(0x172)];}}}}}}}_0x178d4f[_0x48cdec(0x14a)](_0x48cdec(0x11d),{'success':_0x4ef0a6['flash']('success'),'errors':_0x4ef0a6[_0x48cdec(0x142)]('errors'),'user':_0x51867,'role':_0x388f3e,'profile':_0x4c0232,'payment':_0x54386a,'master_shop':_0x3edd3b,'language':_0x199ee1});}catch(_0x915e74){console[_0x48cdec(0x150)](_0x915e74);}}),router[a0_0x10bbaf(0x11c)](a0_0x10bbaf(0x159),auth,async(_0x856f12,_0x4839fa)=>{const _0x3a6859=a0_0x10bbaf;try{const {name:_0x4961e0,address:_0x311405,mobile:_0x4f8e93,email:_0x125dfe,receivable:_0xd34b9f,payable:_0x376d1f,contactperson:_0x420e17,landline:_0x1facb3}=_0x856f12['body'],_0x453293=new customer({'name':_0x4961e0,'address':_0x311405,'mobile':_0x4f8e93,'email':_0x125dfe,'receivable':_0xd34b9f,'payable':_0x376d1f,'contactperson':_0x420e17,'landline':_0x1facb3}),_0x210937=await _0x453293['save']();_0x856f12[_0x3a6859(0x142)](_0x3a6859(0x152),'customer\x20add\x20successfully'),_0x4839fa[_0x3a6859(0x15d)](_0x3a6859(0x13c));}catch(_0x3ce783){console[_0x3a6859(0x150)](_0x3ce783);}}),router[a0_0x10bbaf(0x10d)]('/view/:id',auth,async(_0x6e5f6b,_0x19283e)=>{const _0x577857=a0_0x10bbaf;try{const {username:_0x11c630,email:_0x21893f,role:_0x17ef29}=_0x6e5f6b['user'],_0x27cb9a=_0x6e5f6b[_0x577857(0x13e)],_0x153a74=await profile[_0x577857(0x13d)]({'email':_0x27cb9a[_0x577857(0x13f)]}),_0x301848=await master_shop[_0x577857(0x138)]();console['log'](_0x577857(0x121),_0x301848);const _0x487cde=_0x6e5f6b[_0x577857(0x15e)]['id'],_0xbe1ef8=await customer[_0x577857(0x113)](_0x487cde);if(_0x301848[0x0]['language']=='English\x20(US)'){var _0xf64174=users[_0x577857(0x148)];console[_0x577857(0x150)](_0xf64174);}else{if(_0x301848[0x0][_0x577857(0x135)]==_0x577857(0x12f))var _0xf64174=users['Hindi'];else{if(_0x301848[0x0][_0x577857(0x135)]==_0x577857(0x10c))var _0xf64174=users[_0x577857(0x10c)];else{if(_0x301848[0x0][_0x577857(0x135)]=='Spanish')var _0xf64174=users[_0x577857(0x12a)];else{if(_0x301848[0x0]['language']==_0x577857(0x14e))var _0xf64174=users[_0x577857(0x14e)];else{if(_0x301848[0x0]['language']==_0x577857(0x15b))var _0xf64174=users['Portuguese'];else{if(_0x301848[0x0][_0x577857(0x135)]==_0x577857(0x155))var _0xf64174=users[_0x577857(0x155)];else{if(_0x301848[0x0]['language']==_0x577857(0x125))var _0xf64174=users[_0x577857(0x172)];}}}}}}}_0x19283e[_0x577857(0x14a)](_0x577857(0x11d),{'success':_0x6e5f6b[_0x577857(0x142)](_0x577857(0x152)),'errors':_0x6e5f6b[_0x577857(0x142)]('errors'),'role':_0x27cb9a,'profile':_0x153a74,'user':_0xbe1ef8,'master_shop':_0x301848,'language':_0xf64174});}catch(_0x27fba1){console['log'](_0x27fba1);}}),router[a0_0x10bbaf(0x11c)](a0_0x10bbaf(0x136),auth,async(_0x3f7799,_0x8de48a)=>{const _0x49abb2=a0_0x10bbaf;try{const _0x2865c5=_0x3f7799[_0x49abb2(0x15e)]['id'],_0x308c52=await customer[_0x49abb2(0x113)](_0x2865c5),{name:_0x16b0e7,address:_0xddd1ce,mobile:_0x5e162e,email:_0xf1f1ad,receivable:_0x2bdecf,payable:_0x32044c,contactperson:_0x251803,landline:_0x3a2181}=_0x3f7799[_0x49abb2(0x160)];_0x308c52[_0x49abb2(0x156)]=_0x16b0e7,_0x308c52[_0x49abb2(0x171)]=_0xddd1ce,_0x308c52[_0x49abb2(0x139)]=_0x5e162e,_0x308c52[_0x49abb2(0x13f)]=_0xf1f1ad,_0x308c52['receivable']=_0x2bdecf,_0x308c52['payable']=_0x32044c,_0x308c52[_0x49abb2(0x174)]=_0x251803,_0x308c52[_0x49abb2(0x167)]=_0x3a2181;const _0x5af48e=await _0x308c52['save']();_0x3f7799[_0x49abb2(0x142)](_0x49abb2(0x152),_0x49abb2(0x12d)),_0x8de48a['redirect'](_0x49abb2(0x13c));}catch(_0x56221f){console[_0x49abb2(0x150)](_0x56221f);}}),router[a0_0x10bbaf(0x10d)]('/view/payment/:id',auth,async(_0x5f3396,_0x1440d0)=>{const _0x4b5dfd=a0_0x10bbaf;try{const {username:_0x11dd53,email:_0x453c62,role:_0x197909}=_0x5f3396[_0x4b5dfd(0x13e)],_0x6d5309=_0x5f3396[_0x4b5dfd(0x13e)],_0x2cacde=await profile[_0x4b5dfd(0x13d)]({'email':_0x6d5309['email']}),_0x211e4a=await master_shop[_0x4b5dfd(0x138)]();console[_0x4b5dfd(0x150)](_0x4b5dfd(0x121),_0x211e4a),console[_0x4b5dfd(0x150)](_0x5f3396[_0x4b5dfd(0x15e)]['id']);const _0x224429=await customer[_0x4b5dfd(0x13d)]({'_id':_0x5f3396[_0x4b5dfd(0x15e)]['id']});console[_0x4b5dfd(0x150)](_0x4b5dfd(0x154),_0x224429);const _0x47e6cd=await c_payment_data[_0x4b5dfd(0x138)]({'customer':_0x224429[_0x4b5dfd(0x156)]});console['log'](_0x47e6cd);const _0x11e3bc=await c_payment_data[_0x4b5dfd(0x134)]([{'$match':{'customer':_0x224429[_0x4b5dfd(0x156)]}},{'$match':{'reason':_0x4b5dfd(0x149)}},{'$group':{'_id':_0x4b5dfd(0x10b),'sum':{'$sum':'$amount'}}}]);console[_0x4b5dfd(0x150)](_0x4b5dfd(0x126),_0x11e3bc);const _0x1a359d=await c_payment_data['aggregate']([{'$match':{'customer':_0x224429['name']}},{'$match':{'reason':_0x4b5dfd(0x147)}},{'$group':{'_id':_0x4b5dfd(0x10b),'sum':{'$sum':'$amount'}}}]);console['log'](_0x4b5dfd(0x132),_0x1a359d);if(_0x211e4a[0x0][_0x4b5dfd(0x135)]==_0x4b5dfd(0x13a)){var _0x4be0fb=users['English'];console['log'](_0x4be0fb);}else{if(_0x211e4a[0x0][_0x4b5dfd(0x135)]=='Hindi')var _0x4be0fb=users[_0x4b5dfd(0x12f)];else{if(_0x211e4a[0x0]['language']=='German')var _0x4be0fb=users[_0x4b5dfd(0x10c)];else{if(_0x211e4a[0x0][_0x4b5dfd(0x135)]==_0x4b5dfd(0x12a))var _0x4be0fb=users[_0x4b5dfd(0x12a)];else{if(_0x211e4a[0x0]['language']==_0x4b5dfd(0x14e))var _0x4be0fb=users[_0x4b5dfd(0x14e)];else{if(_0x211e4a[0x0]['language']=='Portuguese\x20(BR)')var _0x4be0fb=users['Portuguese'];else{if(_0x211e4a[0x0][_0x4b5dfd(0x135)]==_0x4b5dfd(0x155))var _0x4be0fb=users[_0x4b5dfd(0x155)];else{if(_0x211e4a[0x0][_0x4b5dfd(0x135)]==_0x4b5dfd(0x125))var _0x4be0fb=users['Arabic'];}}}}}}}_0x1440d0[_0x4b5dfd(0x14a)](_0x4b5dfd(0x124),{'success':_0x5f3396['flash'](_0x4b5dfd(0x152)),'errors':_0x5f3396[_0x4b5dfd(0x142)](_0x4b5dfd(0x170)),'role':_0x6d5309,'profile':_0x2cacde,'payment':_0x47e6cd,'payable':_0x11e3bc,'receivable':_0x1a359d,'master_shop':_0x211e4a,'language':_0x4be0fb});}catch(_0x31f44e){console[_0x4b5dfd(0x150)](_0x31f44e);}}),router[a0_0x10bbaf(0x10d)](a0_0x10bbaf(0x110),auth,async(_0xd29536,_0x35b859)=>{const _0x3fb744=a0_0x10bbaf;try{const _0xef348f=new excelJS['Workbook'](),_0x1e410f=_0xef348f[_0x3fb744(0x130)](_0x3fb744(0x133));return _0x1e410f[_0x3fb744(0x120)]=[{'header':'ID','key':'PName','width':0xa},{'header':_0x3fb744(0x14d),'key':_0x3fb744(0x16b),'width':0xa},{'header':_0x3fb744(0x137),'key':_0x3fb744(0x163),'width':0xa},{'header':_0x3fb744(0x123),'key':_0x3fb744(0x123),'width':0xa},{'header':'address','key':'address','width':0xa},{'header':_0x3fb744(0x139),'key':_0x3fb744(0x139),'width':0xa},{'header':'email','key':_0x3fb744(0x13f),'width':0xa}],_0x35b859[_0x3fb744(0x10e)](_0x3fb744(0x11a),_0x3fb744(0x14c)),_0x35b859[_0x3fb744(0x10e)](_0x3fb744(0x140),_0x3fb744(0x153)),_0xef348f[_0x3fb744(0x16e)][_0x3fb744(0x146)](_0x35b859)[_0x3fb744(0x145)](()=>{_0x35b859['status'](0xc8);});}catch(_0x3fe090){_0x35b859[_0x3fb744(0x164)](0x190)[_0x3fb744(0x173)]({'errors':_0x3fe090[_0x3fb744(0x14b)]});}});const storage1=multer[a0_0x10bbaf(0x10a)]({'destination':(_0x48f744,_0x260d3f,_0x2bcb8e)=>{_0x2bcb8e(null,'public/Migration');},'filename':(_0x32395a,_0x3846b3,_0x48b858)=>{_0x48b858(null,Date['now']()+_0x3846b3['originalname']);}}),uploadMigrate=multer({'storage':storage1});function a0_0x57b7(_0x168312,_0xa5c981){const _0x349fe4=a0_0x349f();return a0_0x57b7=function(_0x57b7c4,_0x4a6979){_0x57b7c4=_0x57b7c4-0x10a;let _0x22152e=_0x349fe4[_0x57b7c4];return _0x22152e;},a0_0x57b7(_0x168312,_0xa5c981);}router[a0_0x10bbaf(0x11c)](a0_0x10bbaf(0x166),auth,uploadMigrate[a0_0x10bbaf(0x117)](a0_0x10bbaf(0x16f)),async(_0x51d67d,_0x50f04a)=>{const _0x2e9348=a0_0x10bbaf,_0x56e3f8=_0x51d67d['file'][_0x2e9348(0x129)],_0x203cdb=await xlsx['readFile'](_0x2e9348(0x16a)+_0x56e3f8);let _0x5882fc=_0x203cdb[_0x2e9348(0x144)],_0x22422d=xlsx['utils'][_0x2e9348(0x15a)](_0x203cdb['Sheets'][_0x5882fc[0x0]]);for(const _0xcf51ed of _0x22422d){const _0x2fa2ef=_0xcf51ed['ID'],_0x281952=_0xcf51ed[_0x2e9348(0x14d)],_0x131b83=_0xcf51ed[_0x2e9348(0x137)],_0x17d8e4=_0xcf51ed[_0x2e9348(0x123)],_0x781f7f=_0xcf51ed[_0x2e9348(0x171)],_0x17e892=_0xcf51ed['mobile'],_0x4c4a23=_0xcf51ed[_0x2e9348(0x13f)];try{let _0x2be75d=await customer[_0x2e9348(0x13d)]({'name':_0x281952});if(!_0x2be75d){const _0x447663=new customer({'name':_0x281952,'ID':_0x2fa2ef,'SalesmanCode':_0x131b83,'SalesmanName':_0x17d8e4,'address':_0x781f7f,'mobile':_0x17e892,'email':_0x4c4a23});_0x2be75d=await _0x447663[_0x2e9348(0x15f)](),_0x51d67d[_0x2e9348(0x142)](_0x2e9348(0x152),_0x281952+_0x2e9348(0x157));}else _0x51d67d[_0x2e9348(0x142)]('error',_0x281952+_0x2e9348(0x12e));}catch(_0x127f6e){_0x50f04a['status'](0x1f4)[_0x2e9348(0x169)]({'proderror':_0x127f6e[_0x2e9348(0x14b)],'aproduct':ProductName});}}_0x50f04a[_0x2e9348(0x15d)](_0x2e9348(0x13c));}),module[a0_0x10bbaf(0x128)]=router;function a0_0x349f(){const _0x1cb308=['customer\x20update\x20successfully','\x20Failed','Hindi','addWorksheet','element','receivable_sum','Customers','aggregate','language','/view/:id','SalesmanCode','find','mobile','English\x20(US)','c_payments','/customer/view','findOne','user','email','Content-Disposition','map','flash','Router','SheetNames','then','write','Sale\x20Return','English','Sale','render','message','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','Name','French','multer','log','440QBLUer','success','attachment;\x20filename=customer_Migration_File.xlsx','customer_data','Chinese','name','\x20added\x20successfully','../middleware/auth','/view','sheet_to_json','Portuguese\x20(BR)','exceljs','redirect','params','save','body','../models/all_models','payment_data','PUnits','status','../public/language/languages.json','/customer_import_migrate_file','landline','10wiYKJV','json','public/Migration/','PBrands','1817934jheRuH','30251364iyHfga','xlsx','customer_product_fule','errors','address','Arabic','send','contactperson','diskStorage','$reason','German','get','setHeader','5qOPYBl','/products_export_migrate_file','express','sale_return','findById','forEach','5020506yIKFLP','11937393jaXHfI','single','336136NmqTKn','4MMAImu','Content-Type','6134624DPIcyT','post','customer','amount','data','columns','master','sale','SalesmanName','customer_payment','Arabic\x20(ae)','payable_sum','customer_docs','exports','filename','Spanish','165802DCtLGb','reason'];a0_0x349f=function(){return _0x1cb308;};return a0_0x349f();}