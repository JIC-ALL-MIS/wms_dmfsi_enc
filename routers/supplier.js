const a0_0x1d84da=a0_0x3bcb;(function(_0x23a46a,_0x57bd74){const _0x22ab61=a0_0x3bcb,_0x24e39e=_0x23a46a();while(!![]){try{const _0x3277de=parseInt(_0x22ab61(0xd3))/0x1*(-parseInt(_0x22ab61(0xf6))/0x2)+parseInt(_0x22ab61(0xea))/0x3+-parseInt(_0x22ab61(0xf0))/0x4+-parseInt(_0x22ab61(0xd6))/0x5+parseInt(_0x22ab61(0xb4))/0x6+-parseInt(_0x22ab61(0xda))/0x7*(-parseInt(_0x22ab61(0xde))/0x8)+parseInt(_0x22ab61(0xff))/0x9;if(_0x3277de===_0x57bd74)break;else _0x24e39e['push'](_0x24e39e['shift']());}catch(_0x327e54){_0x24e39e['push'](_0x24e39e['shift']());}}}(a0_0x3533,0x4811b));const express=require('express'),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require(a0_0x1d84da(0x112)),auth=require(a0_0x1d84da(0xb3)),users=require(a0_0x1d84da(0xe4)),excelJS=require(a0_0x1d84da(0x111)),xlsx=require('xlsx'),multer=require(a0_0x1d84da(0xd9));router[a0_0x1d84da(0x105)](a0_0x1d84da(0xb6),auth,async(_0x259eb9,_0x3fc0bf)=>{const _0x46c26e=a0_0x1d84da;try{const {username:_0x1ba1e7,email:_0x62c4a7,role:_0x303e32}=_0x259eb9['user'],_0x1b799a=_0x259eb9[_0x46c26e(0xb7)],_0x3e5329=await profile[_0x46c26e(0xb0)]({'email':_0x1b799a[_0x46c26e(0xc0)]}),_0x12c122=await master_shop[_0x46c26e(0xdc)]();console[_0x46c26e(0xe7)](_0x46c26e(0xfd),_0x12c122);const _0x3963f5=await suppliers[_0x46c26e(0xdc)]();console[_0x46c26e(0xe7)](_0x3963f5);const _0x1b07b6=await suppliers[_0x46c26e(0xd0)]([{'$lookup':{'from':'s_payments','localField':_0x46c26e(0xf1),'foreignField':_0x46c26e(0xe6),'as':_0x46c26e(0xdb)}}]),_0x12ce45=_0x1b07b6[_0x46c26e(0xcd)](_0x27adcc=>{const _0x383dc4=_0x46c26e;console[_0x383dc4(0xe7)]('data',_0x27adcc);var _0x291436=0x0,_0x50bff2=0x0;return _0x27adcc['suppliers_docs']['forEach'](_0x134b7d=>{const _0x28120a=_0x383dc4;console[_0x28120a(0xe7)]('doc',_0x134b7d),_0x134b7d[_0x28120a(0xbe)]==_0x28120a(0xc1)?_0x291436+=_0x134b7d[_0x28120a(0xb1)]:_0x50bff2+=_0x134b7d['amount'];}),_0x27adcc[_0x383dc4(0xf5)]=_0x291436,_0x27adcc[_0x383dc4(0xba)]=_0x50bff2,_0x27adcc;});console[_0x46c26e(0xe7)](_0x46c26e(0xf4),_0x12ce45);if(_0x12c122[0x0][_0x46c26e(0x103)]=='English\x20(US)'){var _0x128235=users['English'];console['log'](_0x128235);}else{if(_0x12c122[0x0]['language']=='Hindi')var _0x128235=users['Hindi'];else{if(_0x12c122[0x0][_0x46c26e(0x103)]==_0x46c26e(0xbf))var _0x128235=users[_0x46c26e(0xbf)];else{if(_0x12c122[0x0]['language']==_0x46c26e(0xc3))var _0x128235=users[_0x46c26e(0xc3)];else{if(_0x12c122[0x0][_0x46c26e(0x103)]==_0x46c26e(0xca))var _0x128235=users[_0x46c26e(0xca)];else{if(_0x12c122[0x0][_0x46c26e(0x103)]=='Portuguese\x20(BR)')var _0x128235=users[_0x46c26e(0x114)];else{if(_0x12c122[0x0][_0x46c26e(0x103)]==_0x46c26e(0xe3))var _0x128235=users[_0x46c26e(0xe3)];else{if(_0x12c122[0x0][_0x46c26e(0x103)]==_0x46c26e(0xd2))var _0x128235=users[_0x46c26e(0xd8)];}}}}}}}_0x3fc0bf['render'](_0x46c26e(0xe5),{'success':_0x259eb9['flash'](_0x46c26e(0xe2)),'errors':_0x259eb9[_0x46c26e(0xdf)](_0x46c26e(0x108)),'user':_0x3963f5,'profile':_0x3e5329,'master_shop':_0x12c122,'role':_0x1b799a,'payment':_0x12ce45,'language':_0x128235});}catch(_0x5d6490){console[_0x46c26e(0xe7)](_0x5d6490);}}),router[a0_0x1d84da(0xf9)]('/view',auth,async(_0x455513,_0x38540c)=>{const _0x5d41d7=a0_0x1d84da;try{const {name:_0x359e3c,email:_0x1afce7,mobile:_0x3d7b3e,company:_0x528379,address:_0x35a0ea,receivable:_0x33bec6,payable:_0xaf105d,code:_0x528961,contactperson:_0x3cf635,landline:_0x21b5aa}=_0x455513[_0x5d41d7(0x10d)],_0x25b24a=new suppliers({'name':_0x359e3c,'email':_0x1afce7,'mobile':_0x3d7b3e,'company':_0x528379,'address':_0x35a0ea,'receivable':_0x33bec6,'payable':_0xaf105d,'suppliers_code':_0x528961,'contactperson':_0x3cf635,'landline':_0x21b5aa}),_0x44f903=await _0x25b24a[_0x5d41d7(0xc6)]();_0x455513[_0x5d41d7(0xdf)]('success',_0x5d41d7(0xd7)),_0x38540c[_0x5d41d7(0xb2)]('/supplier/view');}catch(_0x445964){console[_0x5d41d7(0xe7)](_0x445964);}}),router[a0_0x1d84da(0x105)](a0_0x1d84da(0x113),auth,async(_0x5c7c2f,_0x3d2f01)=>{const _0x1a9f37=a0_0x1d84da;try{const {username:_0x3d4009,email:_0x43ebba,role:_0x31fc73}=_0x5c7c2f[_0x1a9f37(0xb7)],_0x44b45e=_0x5c7c2f[_0x1a9f37(0xb7)],_0x554d37=await profile[_0x1a9f37(0xb0)]({'email':_0x44b45e['email']}),_0x39e6a7=await master_shop['find']();console['log']('master',_0x39e6a7);const _0x2700c3=_0x5c7c2f['params']['id'],_0x2a1922=await suppliers[_0x1a9f37(0xed)](_0x2700c3);console[_0x1a9f37(0xe7)](_0x2a1922);if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xe8)){var _0x26aae2=users[_0x1a9f37(0x110)];console[_0x1a9f37(0xe7)](_0x26aae2);}else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xc2))var _0x26aae2=users[_0x1a9f37(0xc2)];else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xbf))var _0x26aae2=users[_0x1a9f37(0xbf)];else{if(_0x39e6a7[0x0]['language']==_0x1a9f37(0xc3))var _0x26aae2=users[_0x1a9f37(0xc3)];else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xca))var _0x26aae2=users[_0x1a9f37(0xca)];else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xd4))var _0x26aae2=users[_0x1a9f37(0x114)];else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xe3))var _0x26aae2=users[_0x1a9f37(0xe3)];else{if(_0x39e6a7[0x0][_0x1a9f37(0x103)]==_0x1a9f37(0xd2))var _0x26aae2=users['Arabic'];}}}}}}}_0x3d2f01['render'](_0x1a9f37(0xe5),{'success':_0x5c7c2f[_0x1a9f37(0xdf)](_0x1a9f37(0xe2)),'errors':_0x5c7c2f[_0x1a9f37(0xdf)]('errors'),'role':_0x44b45e,'profile':_0x554d37,'master_shop':_0x39e6a7,'user':_0x2a1922,'language':_0x26aae2});}catch(_0x6a43cf){console[_0x1a9f37(0xe7)](_0x6a43cf);}}),router[a0_0x1d84da(0xf9)](a0_0x1d84da(0x113),auth,async(_0x49455b,_0x445483)=>{const _0x21000a=a0_0x1d84da;try{const _0x206bf6=_0x49455b['params']['id'],_0x57be2d=await suppliers[_0x21000a(0xed)](_0x206bf6),{name:_0x1cb34e,email:_0x5cdf7d,mobile:_0x2fb22f,company:_0xea50b0,address:_0x55a31d,receivable:_0x3ebf70,payable:_0x5deff3,code:_0x40ea55,contactperson:_0x6abdc1,landline:_0x84c631}=_0x49455b[_0x21000a(0x10d)];_0x57be2d[_0x21000a(0xf1)]=_0x1cb34e,_0x57be2d[_0x21000a(0xc0)]=_0x5cdf7d,_0x57be2d[_0x21000a(0xbb)]=_0x2fb22f,_0x57be2d[_0x21000a(0xb9)]=_0xea50b0,_0x57be2d[_0x21000a(0x10a)]=_0x55a31d,_0x57be2d['receivable']=_0x3ebf70,_0x57be2d[_0x21000a(0xce)]=_0x5deff3,_0x57be2d[_0x21000a(0x102)]=_0x40ea55,_0x57be2d['contactperson']=_0x6abdc1,_0x57be2d[_0x21000a(0xf8)]=_0x84c631;const _0x38cd44=await _0x57be2d[_0x21000a(0xc6)]();_0x49455b['flash'](_0x21000a(0xe2),_0x21000a(0xe9)),_0x445483[_0x21000a(0xb2)]('/supplier/view');}catch(_0x5dfea6){console['log'](_0x5dfea6);}}),router[a0_0x1d84da(0x105)]('/view/payment/:id',auth,async(_0x1be217,_0x3fbdf8)=>{const _0x36add7=a0_0x1d84da;try{const {username:_0x1f7974,email:_0x1ff78a,role:_0x7cd28c}=_0x1be217[_0x36add7(0xb7)],_0x469c34=_0x1be217[_0x36add7(0xb7)],_0x4e432a=await profile[_0x36add7(0xb0)]({'email':_0x469c34[_0x36add7(0xc0)]}),_0x37aa7d=await master_shop[_0x36add7(0xdc)]();console[_0x36add7(0xe7)](_0x36add7(0xfd),_0x37aa7d),console[_0x36add7(0xe7)](_0x1be217[_0x36add7(0xfa)]['id']);const _0x1d2cc5=await suppliers[_0x36add7(0xb0)]({'_id':_0x1be217[_0x36add7(0xfa)]['id']});console['log'](_0x1d2cc5);const _0x1a9feb=await s_payment_data[_0x36add7(0xdc)]({'suppliers':_0x1d2cc5[_0x36add7(0xf1)]});console['log'](_0x1a9feb);const _0x1abd35=await s_payment_data[_0x36add7(0xd0)]([{'$match':{'suppliers':_0x1d2cc5['name']}},{'$match':{'reason':_0x36add7(0xc1)}},{'$group':{'_id':_0x36add7(0x106),'sum':{'$sum':_0x36add7(0x116)}}}]);console[_0x36add7(0xe7)](_0x36add7(0xd1),_0x1abd35);const _0x4da58f=await s_payment_data[_0x36add7(0xd0)]([{'$match':{'suppliers':_0x1d2cc5[_0x36add7(0xf1)]}},{'$match':{'reason':'Purchase\x20Return'}},{'$group':{'_id':_0x36add7(0x106),'sum':{'$sum':_0x36add7(0x116)}}}]);console[_0x36add7(0xe7)](_0x36add7(0xc7),_0x4da58f);if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xe8)){var _0x5d5386=users['English'];console[_0x36add7(0xe7)](_0x5d5386);}else{if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xc2))var _0x5d5386=users[_0x36add7(0xc2)];else{if(_0x37aa7d[0x0]['language']==_0x36add7(0xbf))var _0x5d5386=users[_0x36add7(0xbf)];else{if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xc3))var _0x5d5386=users[_0x36add7(0xc3)];else{if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xca))var _0x5d5386=users['French'];else{if(_0x37aa7d[0x0]['language']==_0x36add7(0xd4))var _0x5d5386=users[_0x36add7(0x114)];else{if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xe3))var _0x5d5386=users['Chinese'];else{if(_0x37aa7d[0x0][_0x36add7(0x103)]==_0x36add7(0xd2))var _0x5d5386=users[_0x36add7(0xd8)];}}}}}}}_0x3fbdf8[_0x36add7(0xbc)](_0x36add7(0xcc),{'success':_0x1be217[_0x36add7(0xdf)](_0x36add7(0xe2)),'errors':_0x1be217[_0x36add7(0xdf)](_0x36add7(0x108)),'role':_0x469c34,'profile':_0x4e432a,'master_shop':_0x37aa7d,'payment':_0x1a9feb,'payable':_0x1abd35,'receivable':_0x4da58f,'language':_0x5d5386});}catch(_0x2d89b6){console[_0x36add7(0xe7)](_0x2d89b6);}}),router['get']('/products_export_migrate_file',auth,async(_0x1e81e3,_0x2ef4f3)=>{const _0x4184a0=a0_0x1d84da;try{const _0x3f57bf=new excelJS[(_0x4184a0(0x115))](),_0x577a11=_0x3f57bf[_0x4184a0(0xc5)](_0x4184a0(0xc4));return _0x577a11[_0x4184a0(0x107)]=[{'header':_0x4184a0(0x10f),'key':_0x4184a0(0xfb),'width':0xa},{'header':_0x4184a0(0xe1),'key':_0x4184a0(0xb8),'width':0xa},{'header':_0x4184a0(0x10b),'key':'SalesmanName','width':0xa},{'header':_0x4184a0(0x101),'key':_0x4184a0(0x10a),'width':0xa},{'header':_0x4184a0(0xfc),'key':_0x4184a0(0xbb),'width':0xa},{'header':'address','key':_0x4184a0(0xc0),'width':0xa}],_0x2ef4f3[_0x4184a0(0x100)](_0x4184a0(0xec),_0x4184a0(0xef)),_0x2ef4f3[_0x4184a0(0x100)](_0x4184a0(0xc9),_0x4184a0(0xee)),_0x3f57bf[_0x4184a0(0xd5)][_0x4184a0(0x109)](_0x2ef4f3)[_0x4184a0(0xdd)](()=>{_0x2ef4f3['status'](0xc8);});}catch(_0x91e4b3){_0x2ef4f3['status'](0x190)[_0x4184a0(0xfe)]({'errors':_0x91e4b3[_0x4184a0(0xbd)]});}});const storage1=multer['diskStorage']({'destination':(_0x43743e,_0x418965,_0x41e017)=>{const _0x150412=a0_0x1d84da;_0x41e017(null,_0x150412(0x10c));},'filename':(_0x4abe13,_0x551ab1,_0x53bc57)=>{const _0x18769c=a0_0x1d84da;_0x53bc57(null,Date[_0x18769c(0x10e)]()+_0x551ab1[_0x18769c(0x117)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x1d84da(0xf9)]('/supplier_import_migrate_file',auth,uploadMigrate[a0_0x1d84da(0xcb)]('supplier_product_file'),async(_0x5b6535,_0x13fe7a)=>{const _0x5566bc=a0_0x1d84da,_0x3036ab=_0x5b6535[_0x5566bc(0xb5)]['filename'],_0x8aaf68=await xlsx[_0x5566bc(0x118)](_0x5566bc(0xcf)+_0x3036ab);let _0x27b2ca=_0x8aaf68[_0x5566bc(0x119)],_0x167b2c=xlsx[_0x5566bc(0xc8)][_0x5566bc(0xf3)](_0x8aaf68[_0x5566bc(0xeb)][_0x27b2ca[0x0]]);for(const _0x294c26 of _0x167b2c){const _0x10719a=_0x294c26['Name'],_0x5e3249=_0x294c26[_0x5566bc(0xe1)],_0x488de1=_0x294c26['address'],_0x326af3=_0x294c26[_0x5566bc(0x101)],_0x24f7d7=_0x294c26[_0x5566bc(0x10b)],_0x459b49=_0x294c26[_0x5566bc(0xfc)];try{let _0x31daa8=await suppliers['findOne']({'name':_0x10719a});if(!_0x31daa8){const _0xc35b85=new suppliers({'name':_0x10719a,'suppliers_code':_0x5e3249,'address':_0x488de1,'mobile':_0x326af3,'email':_0x24f7d7,'company':_0x459b49});_0x31daa8=await _0xc35b85[_0x5566bc(0xc6)](),_0x5b6535[_0x5566bc(0xdf)](_0x5566bc(0xe2),_0x10719a+_0x5566bc(0xf2));}else _0x5b6535['flash'](_0x5566bc(0xf7),_0x10719a+'\x20Failed');}catch(_0x2dff31){_0x13fe7a[_0x5566bc(0x104)](0x1f4)['json']({'proderror':_0x2dff31[_0x5566bc(0xbd)],'aproduct':ProductName});}}_0x13fe7a[_0x5566bc(0xb2)](_0x5566bc(0xe0));}),module['exports']=router;function a0_0x3bcb(_0x19540a,_0x1e0825){const _0x353383=a0_0x3533();return a0_0x3bcb=function(_0x3bcb5a,_0x1aa989){_0x3bcb5a=_0x3bcb5a-0xb0;let _0x2267e6=_0x353383[_0x3bcb5a];return _0x2267e6;},a0_0x3bcb(_0x19540a,_0x1e0825);}function a0_0x3533(){const _0x21ae8a=['1394412ErYfZg','file','/view','user','PUnits','company','purchase_return','mobile','render','message','reason','German','email','Purchase','Hindi','Spanish','Customers','addWorksheet','save','receivable_sum','utils','Content-Disposition','French','single','supplier_payment','map','payable','public/Migration/','aggregate','payable_sum','Arabic\x20(ae)','16619qkZBXS','Portuguese\x20(BR)','xlsx','719610PCVWmQ','supplier\x20data\x20add\x20successfully','Arabic','multer','147tRQTkX','suppliers_docs','find','then','128376pMQBEr','flash','/supplier/view','Supplier_Code','success','Chinese','../public/language/languages.json','supplier','suppliers','log','English\x20(US)','supplier\x20data\x20update\x20successfully','456879ltVGWE','Sheets','Content-Type','findById','attachment;\x20filename=supplier_Migration_File.xlsx','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','1250932HcpHOk','name','\x20added\x20successfully','sheet_to_json','supplier.js\x20payment_data','purchase','6fkxCAo','error','landline','post','params','PBrands','Company_Name','master','send','720225OmYQaS','setHeader','Mobile_number','suppliers_code','language','status','get','$reason','columns','errors','write','address','Email','public/Migration','body','now','Name','English','exceljs','../models/all_models','/view/:id','Portuguese','Workbook','$amount','originalname','readFile','SheetNames','findOne','amount','redirect','../middleware/auth'];a0_0x3533=function(){return _0x21ae8a;};return a0_0x3533();}