const a0_0x54453e=a0_0x5150;(function(_0x385678,_0x5768f8){const _0x47f861=a0_0x5150,_0x35b9e2=_0x385678();while(!![]){try{const _0x12247f=parseInt(_0x47f861(0x1ef))/0x1+parseInt(_0x47f861(0x208))/0x2*(parseInt(_0x47f861(0x1d8))/0x3)+parseInt(_0x47f861(0x223))/0x4*(parseInt(_0x47f861(0x229))/0x5)+parseInt(_0x47f861(0x1d2))/0x6*(-parseInt(_0x47f861(0x217))/0x7)+-parseInt(_0x47f861(0x1dc))/0x8+parseInt(_0x47f861(0x220))/0x9+-parseInt(_0x47f861(0x1ea))/0xa*(parseInt(_0x47f861(0x1f6))/0xb);if(_0x12247f===_0x5768f8)break;else _0x35b9e2['push'](_0x35b9e2['shift']());}catch(_0x3f4b57){_0x35b9e2['push'](_0x35b9e2['shift']());}}}(a0_0x1fa7,0xce307));function a0_0x5150(_0x1d07b9,_0x2898c7){const _0x1fa767=a0_0x1fa7();return a0_0x5150=function(_0x5150eb,_0x3ec288){_0x5150eb=_0x5150eb-0x1c6;let _0x563e1a=_0x1fa767[_0x5150eb];return _0x563e1a;},a0_0x5150(_0x1d07b9,_0x2898c7);}function a0_0x1fa7(){const _0x1d62ad=['receivable_sum','Chinese','send','now','SalesmanName','../public/language/languages.json','Sale','body','filename','data','setHeader','map','master','528682UoPWtT','\x20Failed','Spanish','\x20added\x20successfully','mobile','customer\x20add\x20successfully','PName','exceljs','json','13460157oxxInY','German','element','44JTVCWp','Content-Type','find','write','email','public/Migration/','38365XezPZf','render','Arabic','receivable','Hindi','PUnits','payment_data','/view/payment/:id','$amount','SheetNames','../models/all_models','reason','post','SalesmanCode','columns','findOne','English\x20(US)','24qNQvIk','utils','get','customer','customer_docs','Workbook','1006089vNrqBD','redirect','amount','user','4424728SXdFTw','Sheets','status','c_payments','log','message','Customers','file','payable','xlsx','customer_product_fule','name','sale','aggregate','410VkSxJc','params','Portuguese\x20(BR)','attachment;\x20filename=customer_Migration_File.xlsx','language','378408YXYkMJ','Portuguese','Arabic\x20(ae)','errors','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','/view/:id','Router','339317NbtiKa','flash','success','$reason','English','/view','save','PBrands','address','Name','originalname','landline','/customer/view','customer_payment','readFile','/customer_import_migrate_file','findById','French','6BWODdC','exports'];a0_0x1fa7=function(){return _0x1d62ad;};return a0_0x1fa7();}const express=require('express'),app=express(),router=express[a0_0x54453e(0x1f5)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x54453e(0x1cb)),auth=require('../middleware/auth'),users=require(a0_0x54453e(0x20f)),excelJS=require(a0_0x54453e(0x21e)),xlsx=require(a0_0x54453e(0x1e5)),multer=require('multer');router[a0_0x54453e(0x1d4)](a0_0x54453e(0x1fb),auth,async(_0x161404,_0x480a44)=>{const _0x256a49=a0_0x54453e;try{const {username:_0x2e1104,email:_0x4d3e30,role:_0x4b6f29}=_0x161404[_0x256a49(0x1db)],_0xbde9fd=_0x161404[_0x256a49(0x1db)],_0x32f4b8=await profile[_0x256a49(0x1d0)]({'email':_0xbde9fd[_0x256a49(0x227)]}),_0xddff8a=await master_shop[_0x256a49(0x225)]();console[_0x256a49(0x1e0)](_0x256a49(0x216),_0xddff8a);const _0x17c3f7=await customer[_0x256a49(0x225)](),_0x408d1a=await customer[_0x256a49(0x1e9)]([{'$lookup':{'from':_0x256a49(0x1df),'localField':'name','foreignField':_0x256a49(0x1d5),'as':_0x256a49(0x1d6)}}]);console['log'](_0x408d1a);const _0x15c3ad=_0x408d1a[_0x256a49(0x215)](_0x3e9b33=>{const _0xba0738=_0x256a49;console[_0xba0738(0x1e0)](_0xba0738(0x213),_0x3e9b33);var _0x1678f6=0x0,_0x1fdfb7=0x0;return _0x3e9b33[_0xba0738(0x1d6)]['forEach'](_0x15c7d6=>{const _0x2632c3=_0xba0738;console['log'](_0x2632c3(0x222),_0x15c7d6),_0x15c7d6[_0x2632c3(0x1cc)]=='Sale'?_0x1678f6+=_0x15c7d6['amount']:_0x1fdfb7+=_0x15c7d6[_0x2632c3(0x1da)];}),_0x3e9b33[_0xba0738(0x1e8)]=parseFloat(_0x1678f6)+0x0,_0x3e9b33['sale_return']=parseFloat(_0x1fdfb7)+0x0,_0x3e9b33;});console[_0x256a49(0x1e0)](_0x256a49(0x1c7),_0x15c3ad);if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x1d1)){var _0x3ab96f=users['English'];console[_0x256a49(0x1e0)](_0x3ab96f);}else{if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x22d))var _0x3ab96f=users[_0x256a49(0x22d)];else{if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x221))var _0x3ab96f=users[_0x256a49(0x221)];else{if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x219))var _0x3ab96f=users[_0x256a49(0x219)];else{if(_0xddff8a[0x0]['language']==_0x256a49(0x207))var _0x3ab96f=users[_0x256a49(0x207)];else{if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x1ec))var _0x3ab96f=users['Portuguese'];else{if(_0xddff8a[0x0]['language']==_0x256a49(0x20b))var _0x3ab96f=users[_0x256a49(0x20b)];else{if(_0xddff8a[0x0][_0x256a49(0x1ee)]==_0x256a49(0x1f1))var _0x3ab96f=users[_0x256a49(0x22b)];}}}}}}}_0x480a44[_0x256a49(0x22a)](_0x256a49(0x1d5),{'success':_0x161404[_0x256a49(0x1f7)]('success'),'errors':_0x161404[_0x256a49(0x1f7)]('errors'),'user':_0x17c3f7,'role':_0xbde9fd,'profile':_0x32f4b8,'payment':_0x15c3ad,'master_shop':_0xddff8a,'language':_0x3ab96f});}catch(_0x497fb7){console[_0x256a49(0x1e0)](_0x497fb7);}}),router[a0_0x54453e(0x1cd)](a0_0x54453e(0x1fb),auth,async(_0x1c44c2,_0x475fd0)=>{const _0x1fae1e=a0_0x54453e;try{const {name:_0x424cca,address:_0x1fff40,mobile:_0x167ac6,email:_0x235992,receivable:_0x2090ac,payable:_0xa06ad8,contactperson:_0xe39b25,landline:_0x292ee3}=_0x1c44c2[_0x1fae1e(0x211)],_0x538de7=new customer({'name':_0x424cca,'address':_0x1fff40,'mobile':_0x167ac6,'email':_0x235992,'receivable':_0x2090ac,'payable':_0xa06ad8,'contactperson':_0xe39b25,'landline':_0x292ee3}),_0x703a58=await _0x538de7['save']();_0x1c44c2[_0x1fae1e(0x1f7)](_0x1fae1e(0x1f8),_0x1fae1e(0x21c)),_0x475fd0['redirect']('/customer/view');}catch(_0x1f5f9f){console[_0x1fae1e(0x1e0)](_0x1f5f9f);}}),router[a0_0x54453e(0x1d4)]('/view/:id',auth,async(_0x2a0cac,_0x52d66f)=>{const _0x8270=a0_0x54453e;try{const {username:_0x1dea45,email:_0x9cecc4,role:_0x31ea38}=_0x2a0cac['user'],_0x3ab504=_0x2a0cac[_0x8270(0x1db)],_0x18544f=await profile['findOne']({'email':_0x3ab504[_0x8270(0x227)]}),_0x3af7c3=await master_shop[_0x8270(0x225)]();console[_0x8270(0x1e0)]('master',_0x3af7c3);const _0x8d0746=_0x2a0cac[_0x8270(0x1eb)]['id'],_0x4858b7=await customer['findById'](_0x8d0746);if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x1d1)){var _0x4cbb1c=users[_0x8270(0x1fa)];console['log'](_0x4cbb1c);}else{if(_0x3af7c3[0x0]['language']=='Hindi')var _0x4cbb1c=users[_0x8270(0x22d)];else{if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x221))var _0x4cbb1c=users[_0x8270(0x221)];else{if(_0x3af7c3[0x0]['language']=='Spanish')var _0x4cbb1c=users[_0x8270(0x219)];else{if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x207))var _0x4cbb1c=users['French'];else{if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x1ec))var _0x4cbb1c=users[_0x8270(0x1f0)];else{if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x20b))var _0x4cbb1c=users['Chinese'];else{if(_0x3af7c3[0x0][_0x8270(0x1ee)]==_0x8270(0x1f1))var _0x4cbb1c=users['Arabic'];}}}}}}}_0x52d66f[_0x8270(0x22a)](_0x8270(0x1d5),{'success':_0x2a0cac[_0x8270(0x1f7)](_0x8270(0x1f8)),'errors':_0x2a0cac[_0x8270(0x1f7)](_0x8270(0x1f2)),'role':_0x3ab504,'profile':_0x18544f,'user':_0x4858b7,'master_shop':_0x3af7c3,'language':_0x4cbb1c});}catch(_0x6196c8){console[_0x8270(0x1e0)](_0x6196c8);}}),router[a0_0x54453e(0x1cd)](a0_0x54453e(0x1f4),auth,async(_0x3e1659,_0x2a1d10)=>{const _0x10e8d4=a0_0x54453e;try{const _0x4ab531=_0x3e1659['params']['id'],_0x40f540=await customer[_0x10e8d4(0x206)](_0x4ab531),{name:_0x2ea6a6,address:_0x4fa13f,mobile:_0x22a63a,email:_0x19dabe,receivable:_0x4502dd,payable:_0x4e66ff,contactperson:_0x329f64,landline:_0x21f1d5}=_0x3e1659[_0x10e8d4(0x211)];_0x40f540[_0x10e8d4(0x1e7)]=_0x2ea6a6,_0x40f540[_0x10e8d4(0x1fe)]=_0x4fa13f,_0x40f540[_0x10e8d4(0x21b)]=_0x22a63a,_0x40f540[_0x10e8d4(0x227)]=_0x19dabe,_0x40f540[_0x10e8d4(0x22c)]=_0x4502dd,_0x40f540[_0x10e8d4(0x1e4)]=_0x4e66ff,_0x40f540['contactperson']=_0x329f64,_0x40f540[_0x10e8d4(0x201)]=_0x21f1d5;const _0x4e7480=await _0x40f540[_0x10e8d4(0x1fc)]();_0x3e1659[_0x10e8d4(0x1f7)](_0x10e8d4(0x1f8),'customer\x20update\x20successfully'),_0x2a1d10[_0x10e8d4(0x1d9)]('/customer/view');}catch(_0x5c82e6){console[_0x10e8d4(0x1e0)](_0x5c82e6);}}),router[a0_0x54453e(0x1d4)](a0_0x54453e(0x1c8),auth,async(_0x3dac39,_0x127eba)=>{const _0x455a2f=a0_0x54453e;try{const {username:_0x481917,email:_0x4623dc,role:_0xe4dd98}=_0x3dac39[_0x455a2f(0x1db)],_0x314e04=_0x3dac39[_0x455a2f(0x1db)],_0x1b017c=await profile[_0x455a2f(0x1d0)]({'email':_0x314e04['email']}),_0x1385bf=await master_shop['find']();console[_0x455a2f(0x1e0)]('master',_0x1385bf),console[_0x455a2f(0x1e0)](_0x3dac39[_0x455a2f(0x1eb)]['id']);const _0x19988d=await customer[_0x455a2f(0x1d0)]({'_id':_0x3dac39[_0x455a2f(0x1eb)]['id']});console[_0x455a2f(0x1e0)]('customer_data',_0x19988d);const _0x3fa794=await c_payment_data['find']({'customer':_0x19988d[_0x455a2f(0x1e7)]});console['log'](_0x3fa794);const _0x575421=await c_payment_data[_0x455a2f(0x1e9)]([{'$match':{'customer':_0x19988d['name']}},{'$match':{'reason':_0x455a2f(0x210)}},{'$group':{'_id':_0x455a2f(0x1f9),'sum':{'$sum':'$amount'}}}]);console[_0x455a2f(0x1e0)]('payable_sum',_0x575421);const _0x23d8ed=await c_payment_data[_0x455a2f(0x1e9)]([{'$match':{'customer':_0x19988d[_0x455a2f(0x1e7)]}},{'$match':{'reason':'Sale\x20Return'}},{'$group':{'_id':'$reason','sum':{'$sum':_0x455a2f(0x1c9)}}}]);console[_0x455a2f(0x1e0)](_0x455a2f(0x20a),_0x23d8ed);if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x1d1)){var _0x26782e=users[_0x455a2f(0x1fa)];console[_0x455a2f(0x1e0)](_0x26782e);}else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x22d))var _0x26782e=users[_0x455a2f(0x22d)];else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]=='German')var _0x26782e=users[_0x455a2f(0x221)];else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x219))var _0x26782e=users[_0x455a2f(0x219)];else{if(_0x1385bf[0x0]['language']==_0x455a2f(0x207))var _0x26782e=users[_0x455a2f(0x207)];else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x1ec))var _0x26782e=users[_0x455a2f(0x1f0)];else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x20b))var _0x26782e=users[_0x455a2f(0x20b)];else{if(_0x1385bf[0x0][_0x455a2f(0x1ee)]==_0x455a2f(0x1f1))var _0x26782e=users['Arabic'];}}}}}}}_0x127eba[_0x455a2f(0x22a)](_0x455a2f(0x203),{'success':_0x3dac39[_0x455a2f(0x1f7)](_0x455a2f(0x1f8)),'errors':_0x3dac39[_0x455a2f(0x1f7)](_0x455a2f(0x1f2)),'role':_0x314e04,'profile':_0x1b017c,'payment':_0x3fa794,'payable':_0x575421,'receivable':_0x23d8ed,'master_shop':_0x1385bf,'language':_0x26782e});}catch(_0x38eab5){console['log'](_0x38eab5);}}),router[a0_0x54453e(0x1d4)]('/products_export_migrate_file',auth,async(_0x31783d,_0x1f1751)=>{const _0xc56c70=a0_0x54453e;try{const _0x5206be=new excelJS[(_0xc56c70(0x1d7))](),_0x4472a6=_0x5206be['addWorksheet'](_0xc56c70(0x1e2));return _0x4472a6[_0xc56c70(0x1cf)]=[{'header':'ID','key':_0xc56c70(0x21d),'width':0xa},{'header':_0xc56c70(0x1ff),'key':_0xc56c70(0x1fd),'width':0xa},{'header':'SalesmanCode','key':_0xc56c70(0x1c6),'width':0xa},{'header':'SalesmanName','key':_0xc56c70(0x20e),'width':0xa},{'header':'address','key':'address','width':0xa},{'header':'mobile','key':_0xc56c70(0x21b),'width':0xa},{'header':_0xc56c70(0x227),'key':_0xc56c70(0x227),'width':0xa}],_0x1f1751[_0xc56c70(0x214)](_0xc56c70(0x224),_0xc56c70(0x1f3)),_0x1f1751[_0xc56c70(0x214)]('Content-Disposition',_0xc56c70(0x1ed)),_0x5206be[_0xc56c70(0x1e5)][_0xc56c70(0x226)](_0x1f1751)['then'](()=>{const _0x3a11b7=_0xc56c70;_0x1f1751[_0x3a11b7(0x1de)](0xc8);});}catch(_0x525f1c){_0x1f1751[_0xc56c70(0x1de)](0x190)[_0xc56c70(0x20c)]({'errors':_0x525f1c[_0xc56c70(0x1e1)]});}});const storage1=multer['diskStorage']({'destination':(_0x1de4a4,_0x21be29,_0x77a16f)=>{_0x77a16f(null,'public/Migration');},'filename':(_0x54cd39,_0xe196e7,_0x28c7cc)=>{const _0x941eb1=a0_0x54453e;_0x28c7cc(null,Date[_0x941eb1(0x20d)]()+_0xe196e7[_0x941eb1(0x200)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x54453e(0x1cd)](a0_0x54453e(0x205),auth,uploadMigrate['single'](a0_0x54453e(0x1e6)),async(_0x378cdc,_0x173688)=>{const _0x59e468=a0_0x54453e,_0x22fe1d=_0x378cdc[_0x59e468(0x1e3)][_0x59e468(0x212)],_0x485187=await xlsx[_0x59e468(0x204)](_0x59e468(0x228)+_0x22fe1d);let _0x4c23e0=_0x485187[_0x59e468(0x1ca)],_0x324d0c=xlsx[_0x59e468(0x1d3)]['sheet_to_json'](_0x485187[_0x59e468(0x1dd)][_0x4c23e0[0x0]]);for(const _0x35e6d8 of _0x324d0c){const _0x2bc790=_0x35e6d8['ID'],_0x37eae6=_0x35e6d8[_0x59e468(0x1ff)],_0x33e944=_0x35e6d8[_0x59e468(0x1ce)],_0x2e4cc0=_0x35e6d8[_0x59e468(0x20e)],_0x5394e8=_0x35e6d8[_0x59e468(0x1fe)],_0x31ab4c=_0x35e6d8['mobile'],_0x411944=_0x35e6d8[_0x59e468(0x227)];try{let _0x50d14c=await customer[_0x59e468(0x1d0)]({'name':_0x37eae6});if(!_0x50d14c){const _0x2e973b=new customer({'name':_0x37eae6,'ID':_0x2bc790,'SalesmanCode':_0x33e944,'SalesmanName':_0x2e4cc0,'address':_0x5394e8,'mobile':_0x31ab4c,'email':_0x411944});_0x50d14c=await _0x2e973b[_0x59e468(0x1fc)](),_0x378cdc[_0x59e468(0x1f7)]('success',_0x37eae6+_0x59e468(0x21a));}else _0x378cdc[_0x59e468(0x1f7)]('error',_0x37eae6+_0x59e468(0x218));}catch(_0x4024a1){_0x173688[_0x59e468(0x1de)](0x1f4)[_0x59e468(0x21f)]({'proderror':_0x4024a1[_0x59e468(0x1e1)],'aproduct':ProductName});}}_0x173688['redirect'](_0x59e468(0x202));}),module[a0_0x54453e(0x209)]=router;