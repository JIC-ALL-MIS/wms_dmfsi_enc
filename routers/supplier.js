function a0_0x2f72(){const _0x120bd2=['body','language','aggregate','columns','originalname','2QlJuqM','627828ipvLho','/supplier/view','English','$amount','/supplier_import_migrate_file','master','Hindi','flash','get','find','Purchase','params','30726HSwzqQ','errors','amount','data','German','status','file','receivable','doc','s_payments','company','/view/:id','SheetNames','payable_sum','addWorksheet','524Fodhpu','Content-Disposition','setHeader','xlsx','Supplier_Code','PUnits','7590waKkbf','Purchase\x20Return','\x20Failed','address','71368lFJoya','../middleware/auth','sheet_to_json','log','French','Company_Name','345NsIuOg','SalesmanName','send','error','now','readFile','63baEHTy','\x20added\x20successfully','../models/all_models','email','/products_export_migrate_file','suppliers_code','suppliers','13zYEfpz','mobile','Sheets','contactperson','English\x20(US)','462506OvfWTc','Spanish','Arabic','530762WESrqp','then','supplier','purchase','findOne','public/Migration','message','utils','redirect','../public/language/languages.json','single','Name','/view/payment/:id','save','4896BsNQhO','purchase_return','supplier.js\x20payment_data','user','suppliers_docs','12933fmkXAK','post','name','receivable_sum','multer','success','Workbook','PBrands','Router','filename','Chinese','$reason','express','supplier\x20data\x20add\x20successfully','Arabic\x20(ae)','Email','findById','reason','Portuguese','diskStorage','Mobile_number','render','landline','Customers','supplier_product_file','Portuguese\x20(BR)'];a0_0x2f72=function(){return _0x120bd2;};return a0_0x2f72();}const a0_0x161be8=a0_0x1cdd;function a0_0x1cdd(_0x13d809,_0x18d425){const _0x2f7283=a0_0x2f72();return a0_0x1cdd=function(_0x1cdde0,_0x4906ba){_0x1cdde0=_0x1cdde0-0x16d;let _0x338cfd=_0x2f7283[_0x1cdde0];return _0x338cfd;},a0_0x1cdd(_0x13d809,_0x18d425);}(function(_0x4b7061,_0x4e220d){const _0x11dfd5=a0_0x1cdd,_0xebe9b5=_0x4b7061();while(!![]){try{const _0xe222bb=parseInt(_0x11dfd5(0x1ab))/0x1*(parseInt(_0x11dfd5(0x179))/0x2)+-parseInt(_0x11dfd5(0x18c))/0x3*(-parseInt(_0x11dfd5(0x1c7))/0x4)+-parseInt(_0x11dfd5(0x1d7))/0x5*(parseInt(_0x11dfd5(0x1b8))/0x6)+parseInt(_0x11dfd5(0x1dd))/0x7*(-parseInt(_0x11dfd5(0x1d1))/0x8)+parseInt(_0x11dfd5(0x187))/0x9*(-parseInt(_0x11dfd5(0x1cd))/0xa)+parseInt(_0x11dfd5(0x176))/0xb+parseInt(_0x11dfd5(0x1ac))/0xc*(parseInt(_0x11dfd5(0x171))/0xd);if(_0xe222bb===_0x4e220d)break;else _0xebe9b5['push'](_0xebe9b5['shift']());}catch(_0x4af61e){_0xebe9b5['push'](_0xebe9b5['shift']());}}}(a0_0x2f72,0x53d26));const express=require(a0_0x161be8(0x198)),app=express(),router=express[a0_0x161be8(0x194)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require(a0_0x161be8(0x1df)),auth=require(a0_0x161be8(0x1d2)),users=require(a0_0x161be8(0x182)),excelJS=require('exceljs'),xlsx=require(a0_0x161be8(0x1ca)),multer=require(a0_0x161be8(0x190));router[a0_0x161be8(0x1b4)]('/view',auth,async(_0x3cde74,_0x42fcb9)=>{const _0x289952=a0_0x161be8;try{const {username:_0x41623b,email:_0x53c53d,role:_0x3b1b9a}=_0x3cde74[_0x289952(0x18a)],_0x4cdd3b=_0x3cde74[_0x289952(0x18a)],_0x49b507=await profile[_0x289952(0x17d)]({'email':_0x4cdd3b[_0x289952(0x16d)]}),_0x289b37=await master_shop[_0x289952(0x1b5)]();console[_0x289952(0x1d4)](_0x289952(0x1b1),_0x289b37);const _0x23a0b8=await suppliers[_0x289952(0x1b5)]();console[_0x289952(0x1d4)](_0x23a0b8);const _0x415304=await suppliers[_0x289952(0x1a8)]([{'$lookup':{'from':_0x289952(0x1c1),'localField':_0x289952(0x18e),'foreignField':_0x289952(0x170),'as':_0x289952(0x18b)}}]),_0x413d5c=_0x415304['map'](_0xb68d75=>{const _0x565663=_0x289952;console[_0x565663(0x1d4)](_0x565663(0x1bb),_0xb68d75);var _0x261810=0x0,_0x130c55=0x0;return _0xb68d75[_0x565663(0x18b)]['forEach'](_0x34e185=>{const _0x3f04eb=_0x565663;console[_0x3f04eb(0x1d4)](_0x3f04eb(0x1c0),_0x34e185),_0x34e185[_0x3f04eb(0x19d)]==_0x3f04eb(0x1b6)?_0x261810+=_0x34e185['amount']:_0x130c55+=_0x34e185[_0x3f04eb(0x1ba)];}),_0xb68d75[_0x565663(0x17c)]=_0x261810,_0xb68d75[_0x565663(0x188)]=_0x130c55,_0xb68d75;});console[_0x289952(0x1d4)](_0x289952(0x189),_0x413d5c);if(_0x289b37[0x0][_0x289952(0x1a7)]==_0x289952(0x175)){var _0x302403=users[_0x289952(0x1ae)];console[_0x289952(0x1d4)](_0x302403);}else{if(_0x289b37[0x0][_0x289952(0x1a7)]==_0x289952(0x1b2))var _0x302403=users['Hindi'];else{if(_0x289b37[0x0][_0x289952(0x1a7)]==_0x289952(0x1bc))var _0x302403=users['German'];else{if(_0x289b37[0x0][_0x289952(0x1a7)]==_0x289952(0x177))var _0x302403=users[_0x289952(0x177)];else{if(_0x289b37[0x0][_0x289952(0x1a7)]=='French')var _0x302403=users[_0x289952(0x1d5)];else{if(_0x289b37[0x0][_0x289952(0x1a7)]=='Portuguese\x20(BR)')var _0x302403=users['Portuguese'];else{if(_0x289b37[0x0][_0x289952(0x1a7)]==_0x289952(0x196))var _0x302403=users[_0x289952(0x196)];else{if(_0x289b37[0x0]['language']==_0x289952(0x19a))var _0x302403=users[_0x289952(0x178)];}}}}}}}_0x42fcb9[_0x289952(0x1a1)](_0x289952(0x17b),{'success':_0x3cde74[_0x289952(0x1b3)](_0x289952(0x191)),'errors':_0x3cde74[_0x289952(0x1b3)](_0x289952(0x1b9)),'user':_0x23a0b8,'profile':_0x49b507,'master_shop':_0x289b37,'role':_0x4cdd3b,'payment':_0x413d5c,'language':_0x302403});}catch(_0x5dbabf){console[_0x289952(0x1d4)](_0x5dbabf);}}),router['post']('/view',auth,async(_0x4dac28,_0x23624f)=>{const _0x2b1aaa=a0_0x161be8;try{const {name:_0x537d12,email:_0x4753e1,mobile:_0x945ef5,company:_0x1d3f40,address:_0x428468,receivable:_0x490b6a,payable:_0x417ad0,code:_0x145d87,contactperson:_0x5baf3a,landline:_0x139070}=_0x4dac28[_0x2b1aaa(0x1a6)],_0x3ecbcf=new suppliers({'name':_0x537d12,'email':_0x4753e1,'mobile':_0x945ef5,'company':_0x1d3f40,'address':_0x428468,'receivable':_0x490b6a,'payable':_0x417ad0,'suppliers_code':_0x145d87,'contactperson':_0x5baf3a,'landline':_0x139070}),_0x505ce7=await _0x3ecbcf[_0x2b1aaa(0x186)]();_0x4dac28[_0x2b1aaa(0x1b3)](_0x2b1aaa(0x191),_0x2b1aaa(0x199)),_0x23624f[_0x2b1aaa(0x181)](_0x2b1aaa(0x1ad));}catch(_0x549d69){console[_0x2b1aaa(0x1d4)](_0x549d69);}}),router[a0_0x161be8(0x1b4)](a0_0x161be8(0x1c3),auth,async(_0x2f2271,_0x2fc2a9)=>{const _0xddf037=a0_0x161be8;try{const {username:_0x4c3658,email:_0x4be437,role:_0x352529}=_0x2f2271['user'],_0x4f3dbc=_0x2f2271['user'],_0x57b44f=await profile[_0xddf037(0x17d)]({'email':_0x4f3dbc['email']}),_0x39499b=await master_shop['find']();console['log'](_0xddf037(0x1b1),_0x39499b);const _0x272a3f=_0x2f2271['params']['id'],_0x4f7226=await suppliers[_0xddf037(0x19c)](_0x272a3f);console[_0xddf037(0x1d4)](_0x4f7226);if(_0x39499b[0x0][_0xddf037(0x1a7)]=='English\x20(US)'){var _0x4a317f=users['English'];console['log'](_0x4a317f);}else{if(_0x39499b[0x0]['language']=='Hindi')var _0x4a317f=users[_0xddf037(0x1b2)];else{if(_0x39499b[0x0][_0xddf037(0x1a7)]=='German')var _0x4a317f=users['German'];else{if(_0x39499b[0x0][_0xddf037(0x1a7)]==_0xddf037(0x177))var _0x4a317f=users[_0xddf037(0x177)];else{if(_0x39499b[0x0][_0xddf037(0x1a7)]=='French')var _0x4a317f=users[_0xddf037(0x1d5)];else{if(_0x39499b[0x0][_0xddf037(0x1a7)]==_0xddf037(0x1a5))var _0x4a317f=users[_0xddf037(0x19e)];else{if(_0x39499b[0x0]['language']==_0xddf037(0x196))var _0x4a317f=users['Chinese'];else{if(_0x39499b[0x0][_0xddf037(0x1a7)]==_0xddf037(0x19a))var _0x4a317f=users['Arabic'];}}}}}}}_0x2fc2a9[_0xddf037(0x1a1)](_0xddf037(0x17b),{'success':_0x2f2271['flash'](_0xddf037(0x191)),'errors':_0x2f2271[_0xddf037(0x1b3)](_0xddf037(0x1b9)),'role':_0x4f3dbc,'profile':_0x57b44f,'master_shop':_0x39499b,'user':_0x4f7226,'language':_0x4a317f});}catch(_0x15ce91){console[_0xddf037(0x1d4)](_0x15ce91);}}),router[a0_0x161be8(0x18d)](a0_0x161be8(0x1c3),auth,async(_0xaf991d,_0x2337bb)=>{const _0x404b4b=a0_0x161be8;try{const _0x5bc2f4=_0xaf991d['params']['id'],_0x1549f3=await suppliers[_0x404b4b(0x19c)](_0x5bc2f4),{name:_0x3140c9,email:_0x3e7a73,mobile:_0x145814,company:_0x6f4a33,address:_0xb28f3b,receivable:_0x27212a,payable:_0x20434b,code:_0xb127ab,contactperson:_0x3e1707,landline:_0x5bcf5e}=_0xaf991d[_0x404b4b(0x1a6)];_0x1549f3[_0x404b4b(0x18e)]=_0x3140c9,_0x1549f3[_0x404b4b(0x16d)]=_0x3e7a73,_0x1549f3[_0x404b4b(0x172)]=_0x145814,_0x1549f3[_0x404b4b(0x1c2)]=_0x6f4a33,_0x1549f3[_0x404b4b(0x1d0)]=_0xb28f3b,_0x1549f3[_0x404b4b(0x1bf)]=_0x27212a,_0x1549f3['payable']=_0x20434b,_0x1549f3[_0x404b4b(0x16f)]=_0xb127ab,_0x1549f3[_0x404b4b(0x174)]=_0x3e1707,_0x1549f3[_0x404b4b(0x1a2)]=_0x5bcf5e;const _0x17baab=await _0x1549f3[_0x404b4b(0x186)]();_0xaf991d[_0x404b4b(0x1b3)](_0x404b4b(0x191),'supplier\x20data\x20update\x20successfully'),_0x2337bb[_0x404b4b(0x181)](_0x404b4b(0x1ad));}catch(_0x4a5b53){console[_0x404b4b(0x1d4)](_0x4a5b53);}}),router['get'](a0_0x161be8(0x185),auth,async(_0x54779f,_0x3d6c6b)=>{const _0x16afe3=a0_0x161be8;try{const {username:_0x68a18f,email:_0x2d866d,role:_0x5757ce}=_0x54779f[_0x16afe3(0x18a)],_0x4c6b13=_0x54779f[_0x16afe3(0x18a)],_0x2e4ae7=await profile[_0x16afe3(0x17d)]({'email':_0x4c6b13[_0x16afe3(0x16d)]}),_0x3666b7=await master_shop['find']();console[_0x16afe3(0x1d4)](_0x16afe3(0x1b1),_0x3666b7),console['log'](_0x54779f['params']['id']);const _0x5150ed=await suppliers[_0x16afe3(0x17d)]({'_id':_0x54779f[_0x16afe3(0x1b7)]['id']});console[_0x16afe3(0x1d4)](_0x5150ed);const _0x438433=await s_payment_data['find']({'suppliers':_0x5150ed['name']});console[_0x16afe3(0x1d4)](_0x438433);const _0x19e18c=await s_payment_data['aggregate']([{'$match':{'suppliers':_0x5150ed[_0x16afe3(0x18e)]}},{'$match':{'reason':'Purchase'}},{'$group':{'_id':'$reason','sum':{'$sum':_0x16afe3(0x1af)}}}]);console[_0x16afe3(0x1d4)](_0x16afe3(0x1c5),_0x19e18c);const _0x2679b7=await s_payment_data[_0x16afe3(0x1a8)]([{'$match':{'suppliers':_0x5150ed[_0x16afe3(0x18e)]}},{'$match':{'reason':_0x16afe3(0x1ce)}},{'$group':{'_id':_0x16afe3(0x197),'sum':{'$sum':'$amount'}}}]);console[_0x16afe3(0x1d4)](_0x16afe3(0x18f),_0x2679b7);if(_0x3666b7[0x0][_0x16afe3(0x1a7)]=='English\x20(US)'){var _0x3cc6ec=users[_0x16afe3(0x1ae)];console['log'](_0x3cc6ec);}else{if(_0x3666b7[0x0]['language']==_0x16afe3(0x1b2))var _0x3cc6ec=users['Hindi'];else{if(_0x3666b7[0x0][_0x16afe3(0x1a7)]=='German')var _0x3cc6ec=users[_0x16afe3(0x1bc)];else{if(_0x3666b7[0x0][_0x16afe3(0x1a7)]==_0x16afe3(0x177))var _0x3cc6ec=users[_0x16afe3(0x177)];else{if(_0x3666b7[0x0]['language']=='French')var _0x3cc6ec=users[_0x16afe3(0x1d5)];else{if(_0x3666b7[0x0][_0x16afe3(0x1a7)]==_0x16afe3(0x1a5))var _0x3cc6ec=users[_0x16afe3(0x19e)];else{if(_0x3666b7[0x0]['language']==_0x16afe3(0x196))var _0x3cc6ec=users[_0x16afe3(0x196)];else{if(_0x3666b7[0x0][_0x16afe3(0x1a7)]=='Arabic\x20(ae)')var _0x3cc6ec=users['Arabic'];}}}}}}}_0x3d6c6b[_0x16afe3(0x1a1)]('supplier_payment',{'success':_0x54779f['flash'](_0x16afe3(0x191)),'errors':_0x54779f[_0x16afe3(0x1b3)](_0x16afe3(0x1b9)),'role':_0x4c6b13,'profile':_0x2e4ae7,'master_shop':_0x3666b7,'payment':_0x438433,'payable':_0x19e18c,'receivable':_0x2679b7,'language':_0x3cc6ec});}catch(_0x4d016d){console[_0x16afe3(0x1d4)](_0x4d016d);}}),router[a0_0x161be8(0x1b4)](a0_0x161be8(0x16e),auth,async(_0x44a414,_0x520be4)=>{const _0x2bf4c1=a0_0x161be8;try{const _0x4b2c62=new excelJS[(_0x2bf4c1(0x192))](),_0x258727=_0x4b2c62[_0x2bf4c1(0x1c6)](_0x2bf4c1(0x1a3));return _0x258727[_0x2bf4c1(0x1a9)]=[{'header':_0x2bf4c1(0x184),'key':_0x2bf4c1(0x193),'width':0xa},{'header':_0x2bf4c1(0x1cb),'key':_0x2bf4c1(0x1cc),'width':0xa},{'header':_0x2bf4c1(0x19b),'key':_0x2bf4c1(0x1d8),'width':0xa},{'header':'Mobile_number','key':_0x2bf4c1(0x1d0),'width':0xa},{'header':_0x2bf4c1(0x1d6),'key':'mobile','width':0xa},{'header':_0x2bf4c1(0x1d0),'key':_0x2bf4c1(0x16d),'width':0xa}],_0x520be4[_0x2bf4c1(0x1c9)]('Content-Type','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet'),_0x520be4[_0x2bf4c1(0x1c9)](_0x2bf4c1(0x1c8),'attachment;\x20filename=supplier_Migration_File.xlsx'),_0x4b2c62['xlsx']['write'](_0x520be4)[_0x2bf4c1(0x17a)](()=>{const _0x39f6fb=_0x2bf4c1;_0x520be4[_0x39f6fb(0x1bd)](0xc8);});}catch(_0x5e2695){_0x520be4['status'](0x190)[_0x2bf4c1(0x1d9)]({'errors':_0x5e2695['message']});}});const storage1=multer[a0_0x161be8(0x19f)]({'destination':(_0x302f21,_0x5392cb,_0x199c70)=>{const _0x5beb5c=a0_0x161be8;_0x199c70(null,_0x5beb5c(0x17e));},'filename':(_0x5713ec,_0x5b5109,_0x4467d6)=>{const _0xa3c9e2=a0_0x161be8;_0x4467d6(null,Date[_0xa3c9e2(0x1db)]()+_0x5b5109[_0xa3c9e2(0x1aa)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x161be8(0x18d)](a0_0x161be8(0x1b0),auth,uploadMigrate[a0_0x161be8(0x183)](a0_0x161be8(0x1a4)),async(_0x22c189,_0x22baee)=>{const _0x18026e=a0_0x161be8,_0x24aea2=_0x22c189[_0x18026e(0x1be)][_0x18026e(0x195)],_0x3cb97e=await xlsx[_0x18026e(0x1dc)]('public/Migration/'+_0x24aea2);let _0x92c814=_0x3cb97e[_0x18026e(0x1c4)],_0x1f7d00=xlsx[_0x18026e(0x180)][_0x18026e(0x1d3)](_0x3cb97e[_0x18026e(0x173)][_0x92c814[0x0]]);for(const _0x5bcfe8 of _0x1f7d00){const _0x11a207=_0x5bcfe8['Name'],_0x20fbeb=_0x5bcfe8[_0x18026e(0x1cb)],_0x192901=_0x5bcfe8[_0x18026e(0x1d0)],_0x345458=_0x5bcfe8[_0x18026e(0x1a0)],_0x4de291=_0x5bcfe8[_0x18026e(0x19b)],_0x563928=_0x5bcfe8['Company_Name'];try{let _0x161d16=await suppliers[_0x18026e(0x17d)]({'name':_0x11a207});if(!_0x161d16){const _0x424007=new suppliers({'name':_0x11a207,'suppliers_code':_0x20fbeb,'address':_0x192901,'mobile':_0x345458,'email':_0x4de291,'company':_0x563928});_0x161d16=await _0x424007['save'](),_0x22c189[_0x18026e(0x1b3)](_0x18026e(0x191),_0x11a207+_0x18026e(0x1de));}else _0x22c189['flash'](_0x18026e(0x1da),_0x11a207+_0x18026e(0x1cf));}catch(_0x1f3b3a){_0x22baee[_0x18026e(0x1bd)](0x1f4)['json']({'proderror':_0x1f3b3a[_0x18026e(0x17f)],'aproduct':ProductName});}}_0x22baee[_0x18026e(0x181)](_0x18026e(0x1ad));}),module['exports']=router;