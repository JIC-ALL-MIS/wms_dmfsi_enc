const a0_0xc688e6=a0_0x5be8;(function(_0x22713f,_0x9060c7){const _0x4a8d3d=a0_0x5be8,_0x504bdb=_0x22713f();while(!![]){try{const _0x426681=parseInt(_0x4a8d3d(0x1d6))/0x1+parseInt(_0x4a8d3d(0x1ed))/0x2*(-parseInt(_0x4a8d3d(0x1f2))/0x3)+-parseInt(_0x4a8d3d(0x1eb))/0x4*(parseInt(_0x4a8d3d(0x1ee))/0x5)+parseInt(_0x4a8d3d(0x23b))/0x6*(-parseInt(_0x4a8d3d(0x1f7))/0x7)+parseInt(_0x4a8d3d(0x204))/0x8*(-parseInt(_0x4a8d3d(0x21c))/0x9)+-parseInt(_0x4a8d3d(0x22a))/0xa+parseInt(_0x4a8d3d(0x20e))/0xb;if(_0x426681===_0x9060c7)break;else _0x504bdb['push'](_0x504bdb['shift']());}catch(_0x28520a){_0x504bdb['push'](_0x504bdb['shift']());}}}(a0_0x4a12,0x7431e));const express=require(a0_0xc688e6(0x1f4)),app=express(),router=express[a0_0xc688e6(0x1e9)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0xc688e6(0x237)),auth=require(a0_0xc688e6(0x21d)),users=require('../public/language/languages.json'),excelJS=require('exceljs'),xlsx=require(a0_0xc688e6(0x22b)),multer=require('multer');router[a0_0xc688e6(0x224)](a0_0xc688e6(0x238),auth,async(_0x11faf1,_0x5df747)=>{const _0x546358=a0_0xc688e6;try{const {username:_0x41875c,email:_0x287ec6,role:_0x1ddad9}=_0x11faf1[_0x546358(0x221)],_0x2e7ee2=_0x11faf1[_0x546358(0x221)],_0x1561d4=await profile['findOne']({'email':_0x2e7ee2[_0x546358(0x231)]}),_0x7a7d55=await master_shop['find']();console[_0x546358(0x202)](_0x546358(0x201),_0x7a7d55);const _0x255660=await customer[_0x546358(0x21e)](),_0x15e05b=await customer['aggregate']([{'$lookup':{'from':_0x546358(0x225),'localField':_0x546358(0x239),'foreignField':_0x546358(0x1f1),'as':_0x546358(0x20d)}}]);console[_0x546358(0x202)](_0x15e05b);const _0xb17b48=_0x15e05b['map'](_0x11ffe4=>{const _0x4e7746=_0x546358;console[_0x4e7746(0x202)](_0x4e7746(0x1de),_0x11ffe4);var _0x5b3096=0x0,_0xaffd8b=0x0;return _0x11ffe4['customer_docs'][_0x4e7746(0x20f)](_0xb01774=>{const _0x2bd068=_0x4e7746;console[_0x2bd068(0x202)]('element',_0xb01774),_0xb01774[_0x2bd068(0x23a)]==_0x2bd068(0x229)?_0x5b3096+=_0xb01774[_0x2bd068(0x1dd)]:_0xaffd8b+=_0xb01774['amount'];}),_0x11ffe4['sale']=parseFloat(_0x5b3096)+0x0,_0x11ffe4[_0x4e7746(0x21a)]=parseFloat(_0xaffd8b)+0x0,_0x11ffe4;});console[_0x546358(0x202)]('payment_data',_0xb17b48);if(_0x7a7d55[0x0][_0x546358(0x1d9)]==_0x546358(0x205)){var _0x2c0c6d=users['English'];console[_0x546358(0x202)](_0x2c0c6d);}else{if(_0x7a7d55[0x0]['language']==_0x546358(0x1fe))var _0x2c0c6d=users['Hindi'];else{if(_0x7a7d55[0x0][_0x546358(0x1d9)]=='German')var _0x2c0c6d=users['German'];else{if(_0x7a7d55[0x0]['language']==_0x546358(0x209))var _0x2c0c6d=users[_0x546358(0x209)];else{if(_0x7a7d55[0x0][_0x546358(0x1d9)]==_0x546358(0x1dc))var _0x2c0c6d=users[_0x546358(0x1dc)];else{if(_0x7a7d55[0x0]['language']=='Portuguese\x20(BR)')var _0x2c0c6d=users[_0x546358(0x234)];else{if(_0x7a7d55[0x0]['language']=='Chinese')var _0x2c0c6d=users[_0x546358(0x1fd)];else{if(_0x7a7d55[0x0]['language']==_0x546358(0x1e0))var _0x2c0c6d=users[_0x546358(0x1d7)];}}}}}}}_0x5df747[_0x546358(0x1ea)](_0x546358(0x1f1),{'success':_0x11faf1[_0x546358(0x22e)]('success'),'errors':_0x11faf1[_0x546358(0x22e)]('errors'),'user':_0x255660,'role':_0x2e7ee2,'profile':_0x1561d4,'payment':_0xb17b48,'master_shop':_0x7a7d55,'language':_0x2c0c6d});}catch(_0x5ee237){console['log'](_0x5ee237);}}),router[a0_0xc688e6(0x228)](a0_0xc688e6(0x238),auth,async(_0x1262e2,_0x2147ff)=>{const _0x415d3e=a0_0xc688e6;try{const {name:_0x16ddcd,address:_0xa9ec12,mobile:_0x221635,email:_0xab8d1e,receivable:_0x3576e0,payable:_0x127a65,contactperson:_0x1e4137,landline:_0x55acc9}=_0x1262e2[_0x415d3e(0x216)],_0x4772ce=new customer({'name':_0x16ddcd,'address':_0xa9ec12,'mobile':_0x221635,'email':_0xab8d1e,'receivable':_0x3576e0,'payable':_0x127a65,'contactperson':_0x1e4137,'landline':_0x55acc9}),_0x910ec=await _0x4772ce[_0x415d3e(0x223)]();_0x1262e2[_0x415d3e(0x22e)](_0x415d3e(0x210),'customer\x20add\x20successfully'),_0x2147ff[_0x415d3e(0x1f8)](_0x415d3e(0x1e7));}catch(_0x30f5e1){console[_0x415d3e(0x202)](_0x30f5e1);}}),router[a0_0xc688e6(0x224)](a0_0xc688e6(0x1da),auth,async(_0x1fe967,_0x5b9fd1)=>{const _0x11596c=a0_0xc688e6;try{const {username:_0x375e3b,email:_0x1d39a5,role:_0x2f1689}=_0x1fe967['user'],_0x5b3a42=_0x1fe967[_0x11596c(0x221)],_0x3e36f7=await profile[_0x11596c(0x21b)]({'email':_0x5b3a42[_0x11596c(0x231)]}),_0x3b5341=await master_shop[_0x11596c(0x21e)]();console[_0x11596c(0x202)](_0x11596c(0x201),_0x3b5341);const _0x419a1f=_0x1fe967[_0x11596c(0x1fb)]['id'],_0x2464a4=await customer['findById'](_0x419a1f);if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x205)){var _0x5f0fbd=users[_0x11596c(0x1f3)];console['log'](_0x5f0fbd);}else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]=='Hindi')var _0x5f0fbd=users[_0x11596c(0x1fe)];else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x22d))var _0x5f0fbd=users[_0x11596c(0x22d)];else{if(_0x3b5341[0x0]['language']==_0x11596c(0x209))var _0x5f0fbd=users[_0x11596c(0x209)];else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x1dc))var _0x5f0fbd=users[_0x11596c(0x1dc)];else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x22c))var _0x5f0fbd=users[_0x11596c(0x234)];else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x1fd))var _0x5f0fbd=users[_0x11596c(0x1fd)];else{if(_0x3b5341[0x0][_0x11596c(0x1d9)]==_0x11596c(0x1e0))var _0x5f0fbd=users[_0x11596c(0x1d7)];}}}}}}}_0x5b9fd1[_0x11596c(0x1ea)](_0x11596c(0x1f1),{'success':_0x1fe967[_0x11596c(0x22e)]('success'),'errors':_0x1fe967[_0x11596c(0x22e)](_0x11596c(0x1d8)),'role':_0x5b3a42,'profile':_0x3e36f7,'user':_0x2464a4,'master_shop':_0x3b5341,'language':_0x5f0fbd});}catch(_0x39df18){console['log'](_0x39df18);}}),router[a0_0xc688e6(0x228)](a0_0xc688e6(0x1da),auth,async(_0x2da7e2,_0x38272a)=>{const _0x400b03=a0_0xc688e6;try{const _0x5eb368=_0x2da7e2['params']['id'],_0xd7d3c6=await customer[_0x400b03(0x206)](_0x5eb368),{name:_0x30d032,address:_0x40fb46,mobile:_0x3c2a21,email:_0x12bf3a,receivable:_0x3913aa,payable:_0x30b182,contactperson:_0x377434,landline:_0x307989}=_0x2da7e2['body'];_0xd7d3c6[_0x400b03(0x239)]=_0x30d032,_0xd7d3c6[_0x400b03(0x212)]=_0x40fb46,_0xd7d3c6[_0x400b03(0x1e6)]=_0x3c2a21,_0xd7d3c6[_0x400b03(0x231)]=_0x12bf3a,_0xd7d3c6[_0x400b03(0x1e2)]=_0x3913aa,_0xd7d3c6[_0x400b03(0x232)]=_0x30b182,_0xd7d3c6[_0x400b03(0x213)]=_0x377434,_0xd7d3c6[_0x400b03(0x235)]=_0x307989;const _0x1596fe=await _0xd7d3c6[_0x400b03(0x223)]();_0x2da7e2[_0x400b03(0x22e)]('success',_0x400b03(0x222)),_0x38272a[_0x400b03(0x1f8)](_0x400b03(0x1e7));}catch(_0xb8e2ec){console[_0x400b03(0x202)](_0xb8e2ec);}}),router[a0_0xc688e6(0x224)](a0_0xc688e6(0x1ec),auth,async(_0x118f11,_0x472f06)=>{const _0x590dc4=a0_0xc688e6;try{const {username:_0x52ae97,email:_0x366806,role:_0x33d898}=_0x118f11[_0x590dc4(0x221)],_0x592c67=_0x118f11[_0x590dc4(0x221)],_0x174022=await profile['findOne']({'email':_0x592c67[_0x590dc4(0x231)]}),_0x1bd9ae=await master_shop['find']();console['log'](_0x590dc4(0x201),_0x1bd9ae),console[_0x590dc4(0x202)](_0x118f11['params']['id']);const _0x10fa11=await customer[_0x590dc4(0x21b)]({'_id':_0x118f11[_0x590dc4(0x1fb)]['id']});console[_0x590dc4(0x202)](_0x590dc4(0x1d5),_0x10fa11);const _0x595572=await c_payment_data[_0x590dc4(0x21e)]({'customer':_0x10fa11[_0x590dc4(0x239)]});console['log'](_0x595572);const _0x5d5ecf=await c_payment_data['aggregate']([{'$match':{'customer':_0x10fa11[_0x590dc4(0x239)]}},{'$match':{'reason':'Sale'}},{'$group':{'_id':'$reason','sum':{'$sum':_0x590dc4(0x208)}}}]);console['log']('payable_sum',_0x5d5ecf);const _0x262723=await c_payment_data[_0x590dc4(0x1e5)]([{'$match':{'customer':_0x10fa11['name']}},{'$match':{'reason':_0x590dc4(0x217)}},{'$group':{'_id':'$reason','sum':{'$sum':_0x590dc4(0x208)}}}]);console[_0x590dc4(0x202)](_0x590dc4(0x1e4),_0x262723);if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]==_0x590dc4(0x205)){var _0x57b70f=users[_0x590dc4(0x1f3)];console[_0x590dc4(0x202)](_0x57b70f);}else{if(_0x1bd9ae[0x0]['language']=='Hindi')var _0x57b70f=users[_0x590dc4(0x1fe)];else{if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]==_0x590dc4(0x22d))var _0x57b70f=users[_0x590dc4(0x22d)];else{if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]==_0x590dc4(0x209))var _0x57b70f=users[_0x590dc4(0x209)];else{if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]=='French')var _0x57b70f=users[_0x590dc4(0x1dc)];else{if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]=='Portuguese\x20(BR)')var _0x57b70f=users[_0x590dc4(0x234)];else{if(_0x1bd9ae[0x0]['language']==_0x590dc4(0x1fd))var _0x57b70f=users[_0x590dc4(0x1fd)];else{if(_0x1bd9ae[0x0][_0x590dc4(0x1d9)]==_0x590dc4(0x1e0))var _0x57b70f=users['Arabic'];}}}}}}}_0x472f06[_0x590dc4(0x1ea)](_0x590dc4(0x1ef),{'success':_0x118f11[_0x590dc4(0x22e)](_0x590dc4(0x210)),'errors':_0x118f11[_0x590dc4(0x22e)](_0x590dc4(0x1d8)),'role':_0x592c67,'profile':_0x174022,'payment':_0x595572,'payable':_0x5d5ecf,'receivable':_0x262723,'master_shop':_0x1bd9ae,'language':_0x57b70f});}catch(_0xdb64f5){console[_0x590dc4(0x202)](_0xdb64f5);}}),router[a0_0xc688e6(0x224)]('/products_export_migrate_file',auth,async(_0x3dfabe,_0x3e19f3)=>{const _0x2953a7=a0_0xc688e6;try{const _0x30c1c1=new excelJS['Workbook'](),_0x530c36=_0x30c1c1[_0x2953a7(0x20a)]('Customers');return _0x530c36[_0x2953a7(0x1e1)]=[{'header':'ID','key':_0x2953a7(0x1db),'width':0xa},{'header':_0x2953a7(0x200),'key':_0x2953a7(0x20c),'width':0xa},{'header':_0x2953a7(0x207),'key':_0x2953a7(0x1fc),'width':0xa},{'header':'SalesmanName','key':_0x2953a7(0x22f),'width':0xa},{'header':_0x2953a7(0x212),'key':'address','width':0xa},{'header':_0x2953a7(0x1e6),'key':'mobile','width':0xa},{'header':_0x2953a7(0x231),'key':_0x2953a7(0x231),'width':0xa}],_0x3e19f3[_0x2953a7(0x20b)](_0x2953a7(0x219),'application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x3e19f3[_0x2953a7(0x20b)](_0x2953a7(0x23e),_0x2953a7(0x1f9)),_0x30c1c1[_0x2953a7(0x22b)][_0x2953a7(0x1df)](_0x3e19f3)['then'](()=>{_0x3e19f3['status'](0xc8);});}catch(_0x3b345e){_0x3e19f3[_0x2953a7(0x230)](0x190)[_0x2953a7(0x236)]({'errors':_0x3b345e['message']});}});const storage1=multer[a0_0xc688e6(0x23f)]({'destination':(_0x4384c1,_0x5acd1e,_0x1b46ae)=>{const _0xd3929f=a0_0xc688e6;_0x1b46ae(null,_0xd3929f(0x1ff));},'filename':(_0x25c614,_0x265883,_0x3f594c)=>{const _0x1d8bef=a0_0xc688e6;_0x3f594c(null,Date[_0x1d8bef(0x226)]()+_0x265883[_0x1d8bef(0x21f)]);}}),uploadMigrate=multer({'storage':storage1});function a0_0x5be8(_0x3720f0,_0x28c522){const _0x4a12b6=a0_0x4a12();return a0_0x5be8=function(_0x5be8de,_0x511e0c){_0x5be8de=_0x5be8de-0x1d5;let _0xcc2c80=_0x4a12b6[_0x5be8de];return _0xcc2c80;},a0_0x5be8(_0x3720f0,_0x28c522);}router[a0_0xc688e6(0x228)](a0_0xc688e6(0x1e3),auth,uploadMigrate['single'](a0_0xc688e6(0x227)),async(_0x53dd3f,_0x365900)=>{const _0x37540e=a0_0xc688e6,_0x279693=_0x53dd3f[_0x37540e(0x218)][_0x37540e(0x1e8)],_0x1b72a4=await xlsx[_0x37540e(0x1f0)](_0x37540e(0x1fa)+_0x279693);let _0x450222=_0x1b72a4[_0x37540e(0x203)],_0x345caf=xlsx[_0x37540e(0x23d)][_0x37540e(0x1f6)](_0x1b72a4[_0x37540e(0x211)][_0x450222[0x0]]);for(const _0x96de15 of _0x345caf){const _0x39a0b4=_0x96de15['ID'],_0x4d17e5=_0x96de15[_0x37540e(0x200)],_0x400813=_0x96de15['SalesmanCode'],_0x3b4725=_0x96de15[_0x37540e(0x22f)],_0x1b5032=_0x96de15[_0x37540e(0x212)],_0x3e769a=_0x96de15[_0x37540e(0x1e6)],_0x2c13a9=_0x96de15[_0x37540e(0x231)];try{let _0x143b2b=await customer[_0x37540e(0x21b)]({'name':_0x4d17e5});if(!_0x143b2b){const _0x5e6507=new customer({'name':_0x4d17e5,'ID':_0x39a0b4,'SalesmanCode':_0x400813,'SalesmanName':_0x3b4725,'address':_0x1b5032,'mobile':_0x3e769a,'email':_0x2c13a9});_0x143b2b=await _0x5e6507[_0x37540e(0x223)](),_0x53dd3f[_0x37540e(0x22e)](_0x37540e(0x210),_0x4d17e5+_0x37540e(0x233));}else _0x53dd3f['flash'](_0x37540e(0x1f5),_0x4d17e5+_0x37540e(0x214));}catch(_0x1d785b){_0x365900['status'](0x1f4)[_0x37540e(0x220)]({'proderror':_0x1d785b[_0x37540e(0x23c)],'aproduct':ProductName});}}_0x365900[_0x37540e(0x1f8)](_0x37540e(0x1e7));}),module[a0_0xc688e6(0x215)]=router;function a0_0x4a12(){const _0x4d46cb=['3348vklhiD','/view/payment/:id','847414VLPBUO','5095ALMRbd','customer_payment','readFile','customer','3YiHkaT','English','express','error','sheet_to_json','24969rrmDvn','redirect','attachment;\x20filename=customer_Migration_File.xlsx','public/Migration/','params','PUnits','Chinese','Hindi','public/Migration','Name','master','log','SheetNames','506936AkaTKD','English\x20(US)','findById','SalesmanCode','$amount','Spanish','addWorksheet','setHeader','PBrands','customer_docs','34905409KrHlMP','forEach','success','Sheets','address','contactperson','\x20Failed','exports','body','Sale\x20Return','file','Content-Type','sale_return','findOne','117bctOrN','../middleware/auth','find','originalname','json','user','customer\x20update\x20successfully','save','get','c_payments','now','customer_product_fule','post','Sale','504690lIMmjJ','xlsx','Portuguese\x20(BR)','German','flash','SalesmanName','status','email','payable','\x20added\x20successfully','Portuguese','landline','send','../models/all_models','/view','name','reason','1002ukscjQ','message','utils','Content-Disposition','diskStorage','customer_data','49254WmERkg','Arabic','errors','language','/view/:id','PName','French','amount','data','write','Arabic\x20(ae)','columns','receivable','/customer_import_migrate_file','receivable_sum','aggregate','mobile','/customer/view','filename','Router','render'];a0_0x4a12=function(){return _0x4d46cb;};return a0_0x4a12();}