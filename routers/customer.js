const a0_0x4da954=a0_0x14ff;(function(_0x45c064,_0x44d3b7){const _0x484c9a=a0_0x14ff,_0x7f20f6=_0x45c064();while(!![]){try{const _0x45236e=parseInt(_0x484c9a(0x1ec))/0x1+-parseInt(_0x484c9a(0x1d1))/0x2+parseInt(_0x484c9a(0x1fb))/0x3+parseInt(_0x484c9a(0x1dd))/0x4+parseInt(_0x484c9a(0x1ba))/0x5+-parseInt(_0x484c9a(0x1b6))/0x6*(-parseInt(_0x484c9a(0x1fa))/0x7)+-parseInt(_0x484c9a(0x1c3))/0x8;if(_0x45236e===_0x44d3b7)break;else _0x7f20f6['push'](_0x7f20f6['shift']());}catch(_0x19ef39){_0x7f20f6['push'](_0x7f20f6['shift']());}}}(a0_0x1257,0xcb2ce));function a0_0x1257(){const _0x1c17ba=['attachment;\x20filename=customer_Migration_File.xlsx','readFile','reason','../models/all_models','3452984MVEwZk','customer_docs','Chinese','params','$amount','findOne','master','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','Arabic','find','log','Customers','Portuguese','public/Migration/','customer','56924TUlQDV','language','/products_export_migrate_file','../public/language/languages.json','single','Sale','status','aggregate','user','get','addWorksheet','sale_return','multer','json','154yzOBbF','4697133HnJUQD','amount','PBrands','filename','Hindi','contactperson','\x20added\x20successfully','xlsx','render','German','post','Portuguese\x20(BR)','SalesmanName','/view','receivable','English\x20(US)','PName','message','Arabic\x20(ae)','Workbook','/view/:id','write','SalesmanCode','/view/payment/:id','element','Content-Disposition','originalname','flash','payment_data','success','English','c_payments','394410cSzkUS','SheetNames','mobile','sale','4619420wIZhKm','errors','/customer_import_migrate_file','findById','save','Name','French','map','file','21233560cGdYSf','body','Sale\x20Return','now','$reason','Spanish','customer_product_fule','address','/customer/view','forEach','exports','redirect','name','Content-Type','2739068aeMOqu','PUnits','email','landline','diskStorage','setHeader','payable','send'];a0_0x1257=function(){return _0x1c17ba;};return a0_0x1257();}const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,customer_payment,c_payment_data,sing_up}=require(a0_0x4da954(0x1dc)),auth=require('../middleware/auth'),users=require(a0_0x4da954(0x1ef)),excelJS=require('exceljs'),xlsx=require(a0_0x4da954(0x19d)),multer=require(a0_0x4da954(0x1f8));function a0_0x14ff(_0x4a4a85,_0x1e5c90){const _0x125725=a0_0x1257();return a0_0x14ff=function(_0x14ff55,_0x2b3076){_0x14ff55=_0x14ff55-0x198;let _0x73764=_0x125725[_0x14ff55];return _0x73764;},a0_0x14ff(_0x4a4a85,_0x1e5c90);}router[a0_0x4da954(0x1f5)](a0_0x4da954(0x1a3),auth,async(_0x4a87af,_0x283e09)=>{const _0x256e42=a0_0x4da954;try{const {username:_0x385145,email:_0x43987e,role:_0x16f988}=_0x4a87af['user'],_0xfcca18=_0x4a87af[_0x256e42(0x1f4)],_0x48815b=await profile[_0x256e42(0x1e2)]({'email':_0xfcca18[_0x256e42(0x1d3)]}),_0x17347b=await master_shop[_0x256e42(0x1e6)]();console[_0x256e42(0x1e7)](_0x256e42(0x1e3),_0x17347b);const _0x47d0d2=await customer[_0x256e42(0x1e6)](),_0x43c144=await customer['aggregate']([{'$lookup':{'from':_0x256e42(0x1b5),'localField':_0x256e42(0x1cf),'foreignField':_0x256e42(0x1eb),'as':'customer_docs'}}]);console[_0x256e42(0x1e7)](_0x43c144);const _0x344f6f=_0x43c144[_0x256e42(0x1c1)](_0x38fa4c=>{const _0x1a15a8=_0x256e42;console['log']('data',_0x38fa4c);var _0x305b98=0x0,_0x17f4dd=0x0;return _0x38fa4c[_0x1a15a8(0x1de)][_0x1a15a8(0x1cc)](_0x561e49=>{const _0x194f99=_0x1a15a8;console['log'](_0x194f99(0x1ae),_0x561e49),_0x561e49[_0x194f99(0x1db)]==_0x194f99(0x1f1)?_0x305b98+=_0x561e49[_0x194f99(0x1fc)]:_0x17f4dd+=_0x561e49[_0x194f99(0x1fc)];}),_0x38fa4c[_0x1a15a8(0x1b9)]=parseFloat(_0x305b98)+0x0,_0x38fa4c[_0x1a15a8(0x1f7)]=parseFloat(_0x17f4dd)+0x0,_0x38fa4c;});console[_0x256e42(0x1e7)](_0x256e42(0x1b2),_0x344f6f);if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x1a5)){var _0x161cc0=users['English'];console[_0x256e42(0x1e7)](_0x161cc0);}else{if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x19a))var _0x161cc0=users[_0x256e42(0x19a)];else{if(_0x17347b[0x0][_0x256e42(0x1ed)]=='German')var _0x161cc0=users[_0x256e42(0x19f)];else{if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x1c8))var _0x161cc0=users[_0x256e42(0x1c8)];else{if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x1c0))var _0x161cc0=users['French'];else{if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x1a1))var _0x161cc0=users[_0x256e42(0x1e9)];else{if(_0x17347b[0x0]['language']==_0x256e42(0x1df))var _0x161cc0=users['Chinese'];else{if(_0x17347b[0x0][_0x256e42(0x1ed)]==_0x256e42(0x1a8))var _0x161cc0=users['Arabic'];}}}}}}}_0x283e09[_0x256e42(0x19e)](_0x256e42(0x1eb),{'success':_0x4a87af[_0x256e42(0x1b1)](_0x256e42(0x1b3)),'errors':_0x4a87af[_0x256e42(0x1b1)](_0x256e42(0x1bb)),'user':_0x47d0d2,'role':_0xfcca18,'profile':_0x48815b,'payment':_0x344f6f,'master_shop':_0x17347b,'language':_0x161cc0});}catch(_0x4fd1f5){console[_0x256e42(0x1e7)](_0x4fd1f5);}}),router[a0_0x4da954(0x1a0)](a0_0x4da954(0x1a3),auth,async(_0x503efb,_0x4ee1e9)=>{const _0x169d22=a0_0x4da954;try{const {name:_0x675ed,address:_0x5857cc,mobile:_0x507330,email:_0x2a9881,receivable:_0x31681a,payable:_0xdef3b6,contactperson:_0x54f9b1,landline:_0x3f40f7}=_0x503efb[_0x169d22(0x1c4)],_0x3e44cd=new customer({'name':_0x675ed,'address':_0x5857cc,'mobile':_0x507330,'email':_0x2a9881,'receivable':_0x31681a,'payable':_0xdef3b6,'contactperson':_0x54f9b1,'landline':_0x3f40f7}),_0x4b1f45=await _0x3e44cd[_0x169d22(0x1be)]();_0x503efb[_0x169d22(0x1b1)](_0x169d22(0x1b3),'customer\x20add\x20successfully'),_0x4ee1e9[_0x169d22(0x1ce)](_0x169d22(0x1cb));}catch(_0x409a17){console[_0x169d22(0x1e7)](_0x409a17);}}),router[a0_0x4da954(0x1f5)]('/view/:id',auth,async(_0x538606,_0x3148fe)=>{const _0x664651=a0_0x4da954;try{const {username:_0x2dc1d8,email:_0x113619,role:_0x5da9f6}=_0x538606[_0x664651(0x1f4)],_0x4d2c66=_0x538606[_0x664651(0x1f4)],_0x3f7f0c=await profile[_0x664651(0x1e2)]({'email':_0x4d2c66[_0x664651(0x1d3)]}),_0x5f1f04=await master_shop['find']();console[_0x664651(0x1e7)](_0x664651(0x1e3),_0x5f1f04);const _0x174c4b=_0x538606[_0x664651(0x1e0)]['id'],_0x2fa5af=await customer[_0x664651(0x1bd)](_0x174c4b);if(_0x5f1f04[0x0][_0x664651(0x1ed)]==_0x664651(0x1a5)){var _0x347f92=users[_0x664651(0x1b4)];console[_0x664651(0x1e7)](_0x347f92);}else{if(_0x5f1f04[0x0]['language']==_0x664651(0x19a))var _0x347f92=users[_0x664651(0x19a)];else{if(_0x5f1f04[0x0][_0x664651(0x1ed)]=='German')var _0x347f92=users[_0x664651(0x19f)];else{if(_0x5f1f04[0x0][_0x664651(0x1ed)]==_0x664651(0x1c8))var _0x347f92=users[_0x664651(0x1c8)];else{if(_0x5f1f04[0x0][_0x664651(0x1ed)]=='French')var _0x347f92=users[_0x664651(0x1c0)];else{if(_0x5f1f04[0x0]['language']==_0x664651(0x1a1))var _0x347f92=users[_0x664651(0x1e9)];else{if(_0x5f1f04[0x0][_0x664651(0x1ed)]==_0x664651(0x1df))var _0x347f92=users['Chinese'];else{if(_0x5f1f04[0x0][_0x664651(0x1ed)]==_0x664651(0x1a8))var _0x347f92=users[_0x664651(0x1e5)];}}}}}}}_0x3148fe[_0x664651(0x19e)](_0x664651(0x1eb),{'success':_0x538606[_0x664651(0x1b1)]('success'),'errors':_0x538606[_0x664651(0x1b1)](_0x664651(0x1bb)),'role':_0x4d2c66,'profile':_0x3f7f0c,'user':_0x2fa5af,'master_shop':_0x5f1f04,'language':_0x347f92});}catch(_0x6c9f2d){console[_0x664651(0x1e7)](_0x6c9f2d);}}),router[a0_0x4da954(0x1a0)](a0_0x4da954(0x1aa),auth,async(_0x43c24e,_0x1a7e85)=>{const _0x165b68=a0_0x4da954;try{const _0x69b82c=_0x43c24e['params']['id'],_0x13b9f6=await customer[_0x165b68(0x1bd)](_0x69b82c),{name:_0x540e33,address:_0x27e36,mobile:_0x5939bb,email:_0x52f820,receivable:_0x31db1c,payable:_0x439012,contactperson:_0x49a6ae,landline:_0x1ba529}=_0x43c24e[_0x165b68(0x1c4)];_0x13b9f6['name']=_0x540e33,_0x13b9f6[_0x165b68(0x1ca)]=_0x27e36,_0x13b9f6[_0x165b68(0x1b8)]=_0x5939bb,_0x13b9f6[_0x165b68(0x1d3)]=_0x52f820,_0x13b9f6[_0x165b68(0x1a4)]=_0x31db1c,_0x13b9f6[_0x165b68(0x1d7)]=_0x439012,_0x13b9f6[_0x165b68(0x19b)]=_0x49a6ae,_0x13b9f6[_0x165b68(0x1d4)]=_0x1ba529;const _0x30e258=await _0x13b9f6['save']();_0x43c24e[_0x165b68(0x1b1)](_0x165b68(0x1b3),'customer\x20update\x20successfully'),_0x1a7e85[_0x165b68(0x1ce)](_0x165b68(0x1cb));}catch(_0x558342){console['log'](_0x558342);}}),router[a0_0x4da954(0x1f5)](a0_0x4da954(0x1ad),auth,async(_0x454469,_0x3b1fc6)=>{const _0x3d830e=a0_0x4da954;try{const {username:_0x29b56d,email:_0xfa8c61,role:_0x1e0d41}=_0x454469[_0x3d830e(0x1f4)],_0x218c30=_0x454469['user'],_0x34ba97=await profile[_0x3d830e(0x1e2)]({'email':_0x218c30[_0x3d830e(0x1d3)]}),_0x5b3978=await master_shop[_0x3d830e(0x1e6)]();console[_0x3d830e(0x1e7)](_0x3d830e(0x1e3),_0x5b3978),console[_0x3d830e(0x1e7)](_0x454469[_0x3d830e(0x1e0)]['id']);const _0x3362e7=await customer[_0x3d830e(0x1e2)]({'_id':_0x454469[_0x3d830e(0x1e0)]['id']});console[_0x3d830e(0x1e7)]('customer_data',_0x3362e7);const _0x2065d2=await c_payment_data[_0x3d830e(0x1e6)]({'customer':_0x3362e7[_0x3d830e(0x1cf)]});console[_0x3d830e(0x1e7)](_0x2065d2);const _0x1168a2=await c_payment_data[_0x3d830e(0x1f3)]([{'$match':{'customer':_0x3362e7[_0x3d830e(0x1cf)]}},{'$match':{'reason':_0x3d830e(0x1f1)}},{'$group':{'_id':_0x3d830e(0x1c7),'sum':{'$sum':_0x3d830e(0x1e1)}}}]);console['log']('payable_sum',_0x1168a2);const _0x44fc9d=await c_payment_data[_0x3d830e(0x1f3)]([{'$match':{'customer':_0x3362e7[_0x3d830e(0x1cf)]}},{'$match':{'reason':_0x3d830e(0x1c5)}},{'$group':{'_id':_0x3d830e(0x1c7),'sum':{'$sum':_0x3d830e(0x1e1)}}}]);console[_0x3d830e(0x1e7)]('receivable_sum',_0x44fc9d);if(_0x5b3978[0x0]['language']==_0x3d830e(0x1a5)){var _0x2cb184=users[_0x3d830e(0x1b4)];console[_0x3d830e(0x1e7)](_0x2cb184);}else{if(_0x5b3978[0x0][_0x3d830e(0x1ed)]==_0x3d830e(0x19a))var _0x2cb184=users[_0x3d830e(0x19a)];else{if(_0x5b3978[0x0][_0x3d830e(0x1ed)]==_0x3d830e(0x19f))var _0x2cb184=users[_0x3d830e(0x19f)];else{if(_0x5b3978[0x0][_0x3d830e(0x1ed)]==_0x3d830e(0x1c8))var _0x2cb184=users[_0x3d830e(0x1c8)];else{if(_0x5b3978[0x0]['language']==_0x3d830e(0x1c0))var _0x2cb184=users[_0x3d830e(0x1c0)];else{if(_0x5b3978[0x0][_0x3d830e(0x1ed)]==_0x3d830e(0x1a1))var _0x2cb184=users[_0x3d830e(0x1e9)];else{if(_0x5b3978[0x0]['language']==_0x3d830e(0x1df))var _0x2cb184=users[_0x3d830e(0x1df)];else{if(_0x5b3978[0x0][_0x3d830e(0x1ed)]==_0x3d830e(0x1a8))var _0x2cb184=users['Arabic'];}}}}}}}_0x3b1fc6[_0x3d830e(0x19e)]('customer_payment',{'success':_0x454469[_0x3d830e(0x1b1)]('success'),'errors':_0x454469[_0x3d830e(0x1b1)](_0x3d830e(0x1bb)),'role':_0x218c30,'profile':_0x34ba97,'payment':_0x2065d2,'payable':_0x1168a2,'receivable':_0x44fc9d,'master_shop':_0x5b3978,'language':_0x2cb184});}catch(_0x5128ae){console['log'](_0x5128ae);}}),router['get'](a0_0x4da954(0x1ee),auth,async(_0x3ecff8,_0x2d458d)=>{const _0x4c0be3=a0_0x4da954;try{const _0x57ff3b=new excelJS[(_0x4c0be3(0x1a9))](),_0x59737e=_0x57ff3b[_0x4c0be3(0x1f6)](_0x4c0be3(0x1e8));return _0x59737e['columns']=[{'header':'ID','key':_0x4c0be3(0x1a6),'width':0xa},{'header':_0x4c0be3(0x1bf),'key':_0x4c0be3(0x198),'width':0xa},{'header':_0x4c0be3(0x1ac),'key':_0x4c0be3(0x1d2),'width':0xa},{'header':_0x4c0be3(0x1a2),'key':_0x4c0be3(0x1a2),'width':0xa},{'header':_0x4c0be3(0x1ca),'key':_0x4c0be3(0x1ca),'width':0xa},{'header':_0x4c0be3(0x1b8),'key':'mobile','width':0xa},{'header':_0x4c0be3(0x1d3),'key':_0x4c0be3(0x1d3),'width':0xa}],_0x2d458d[_0x4c0be3(0x1d6)](_0x4c0be3(0x1d0),_0x4c0be3(0x1e4)),_0x2d458d[_0x4c0be3(0x1d6)](_0x4c0be3(0x1af),_0x4c0be3(0x1d9)),_0x57ff3b['xlsx'][_0x4c0be3(0x1ab)](_0x2d458d)['then'](()=>{const _0x343275=_0x4c0be3;_0x2d458d[_0x343275(0x1f2)](0xc8);});}catch(_0x5684be){_0x2d458d[_0x4c0be3(0x1f2)](0x190)[_0x4c0be3(0x1d8)]({'errors':_0x5684be[_0x4c0be3(0x1a7)]});}});const storage1=multer[a0_0x4da954(0x1d5)]({'destination':(_0x2f3512,_0x34ed58,_0x4a7a8b)=>{_0x4a7a8b(null,'public/Migration');},'filename':(_0x636944,_0x258b6c,_0x461add)=>{const _0x1acae8=a0_0x4da954;_0x461add(null,Date[_0x1acae8(0x1c6)]()+_0x258b6c[_0x1acae8(0x1b0)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x4da954(0x1a0)](a0_0x4da954(0x1bc),auth,uploadMigrate[a0_0x4da954(0x1f0)](a0_0x4da954(0x1c9)),async(_0x111e9d,_0x51d939)=>{const _0x252f35=a0_0x4da954,_0x33972b=_0x111e9d[_0x252f35(0x1c2)][_0x252f35(0x199)],_0x1cd506=await xlsx[_0x252f35(0x1da)](_0x252f35(0x1ea)+_0x33972b);let _0x16f0b2=_0x1cd506[_0x252f35(0x1b7)],_0x4dfc5b=xlsx['utils']['sheet_to_json'](_0x1cd506['Sheets'][_0x16f0b2[0x0]]);for(const _0x3ff136 of _0x4dfc5b){const _0xa3932=_0x3ff136['ID'],_0x54d3b2=_0x3ff136[_0x252f35(0x1bf)],_0xc27b07=_0x3ff136[_0x252f35(0x1ac)],_0x188716=_0x3ff136[_0x252f35(0x1a2)],_0x582b13=_0x3ff136[_0x252f35(0x1ca)],_0x575b06=_0x3ff136['mobile'],_0xfcb0c9=_0x3ff136[_0x252f35(0x1d3)];try{let _0x116341=await customer[_0x252f35(0x1e2)]({'name':_0x54d3b2});if(!_0x116341){const _0x403a05=new customer({'name':_0x54d3b2,'ID':_0xa3932,'SalesmanCode':_0xc27b07,'SalesmanName':_0x188716,'address':_0x582b13,'mobile':_0x575b06,'email':_0xfcb0c9});_0x116341=await _0x403a05[_0x252f35(0x1be)](),_0x111e9d['flash'](_0x252f35(0x1b3),_0x54d3b2+_0x252f35(0x19c));}else _0x111e9d['flash']('error',_0x54d3b2+'\x20Failed');}catch(_0x5d1afd){_0x51d939[_0x252f35(0x1f2)](0x1f4)[_0x252f35(0x1f9)]({'proderror':_0x5d1afd[_0x252f35(0x1a7)],'aproduct':ProductName});}}_0x51d939[_0x252f35(0x1ce)](_0x252f35(0x1cb));}),module[a0_0x4da954(0x1cd)]=router;