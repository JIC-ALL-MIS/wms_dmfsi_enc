const a0_0x2053e9=a0_0x38f2;function a0_0xcee7(){const _0x526178=['English\x20(US)','/view','1217837nRcGmO','exceljs','../middleware/auth','landline','2855455wCEAkg','findById','addWorksheet','Content-Disposition','save','Router','supplier\x20data\x20add\x20successfully','payable','utils','single','amount','Company_Name','find','Arabic','suppliers_code','English','setHeader','body','Arabic\x20(ae)','send','reason','render','findOne','../public/language/languages.json','exports','German','PUnits','purchase_return','errors','now','207480NRYSlj','doc','/supplier/view','public/Migration','attachment;\x20filename=supplier_Migration_File.xlsx','PBrands','xlsx','language','Portuguese','/supplier_import_migrate_file','error','receivable','diskStorage','address','Chinese','$reason','\x20Failed','redirect','contactperson','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','filename','multer','post','Portuguese\x20(BR)','suppliers_docs','status','supplier\x20data\x20update\x20successfully','forEach','SheetNames','master','originalname','mobile','Hindi','\x20added\x20successfully','$amount','map','aggregate','Workbook','../models/all_models','Customers','664413BWeeHo','message','get','user','email','flash','Purchase','log','receivable_sum','/products_export_migrate_file','Spanish','Mobile_number','218888wozFCv','/view/:id','sheet_to_json','name','json','supplier','success','49TzKMzw','Supplier_Code','3799578OQfXeu','Email','899578QDrltc','Sheets','French','columns','params','supplier_payment'];a0_0xcee7=function(){return _0x526178;};return a0_0xcee7();}(function(_0x30029a,_0x1767e2){const _0x3ad858=a0_0x38f2,_0x4eab12=_0x30029a();while(!![]){try{const _0x4876d5=parseInt(_0x3ad858(0xd4))/0x1+-parseInt(_0x3ad858(0xcc))/0x2+-parseInt(_0x3ad858(0xb5))/0x3+-parseInt(_0x3ad858(0xf6))/0x4+parseInt(_0x3ad858(0xd8))/0x5+-parseInt(_0x3ad858(0xca))/0x6+parseInt(_0x3ad858(0xc8))/0x7*(parseInt(_0x3ad858(0xc1))/0x8);if(_0x4876d5===_0x1767e2)break;else _0x4eab12['push'](_0x4eab12['shift']());}catch(_0x5062f9){_0x4eab12['push'](_0x4eab12['shift']());}}}(a0_0xcee7,0x985be));function a0_0x38f2(_0x365c5b,_0x1ff9c7){const _0xcee777=a0_0xcee7();return a0_0x38f2=function(_0x38f251,_0x49bb01){_0x38f251=_0x38f251-0xaf;let _0x4a6c8d=_0xcee777[_0x38f251];return _0x4a6c8d;},a0_0x38f2(_0x365c5b,_0x1ff9c7);}const express=require('express'),app=express(),router=express[a0_0x2053e9(0xdd)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require(a0_0x2053e9(0xb3)),auth=require(a0_0x2053e9(0xd6)),users=require(a0_0x2053e9(0xef)),excelJS=require(a0_0x2053e9(0xd5)),xlsx=require(a0_0x2053e9(0xfc)),multer=require(a0_0x2053e9(0x10b));router[a0_0x2053e9(0xb7)](a0_0x2053e9(0xd3),auth,async(_0x5de12c,_0x114199)=>{const _0x353260=a0_0x2053e9;try{const {username:_0x4192a2,email:_0x4efd30,role:_0x476307}=_0x5de12c[_0x353260(0xb8)],_0x55787c=_0x5de12c[_0x353260(0xb8)],_0xf2422=await profile[_0x353260(0xee)]({'email':_0x55787c[_0x353260(0xb9)]}),_0x3dc6de=await master_shop[_0x353260(0xe4)]();console[_0x353260(0xbc)](_0x353260(0x113),_0x3dc6de);const _0xf3bc84=await suppliers[_0x353260(0xe4)]();console[_0x353260(0xbc)](_0xf3bc84);const _0x20479f=await suppliers[_0x353260(0xb1)]([{'$lookup':{'from':'s_payments','localField':_0x353260(0xc4),'foreignField':'suppliers','as':_0x353260(0x10e)}}]),_0x4782f4=_0x20479f[_0x353260(0xb0)](_0x563cc0=>{const _0x1d7253=_0x353260;console['log']('data',_0x563cc0);var _0x180a62=0x0,_0x4ac520=0x0;return _0x563cc0[_0x1d7253(0x10e)][_0x1d7253(0x111)](_0x1280ec=>{const _0x1b1476=_0x1d7253;console[_0x1b1476(0xbc)](_0x1b1476(0xf7),_0x1280ec),_0x1280ec[_0x1b1476(0xec)]==_0x1b1476(0xbb)?_0x180a62+=_0x1280ec[_0x1b1476(0xe2)]:_0x4ac520+=_0x1280ec[_0x1b1476(0xe2)];}),_0x563cc0['purchase']=_0x180a62,_0x563cc0[_0x1d7253(0xf3)]=_0x4ac520,_0x563cc0;});console[_0x353260(0xbc)]('supplier.js\x20payment_data',_0x4782f4);if(_0x3dc6de[0x0][_0x353260(0xfd)]=='English\x20(US)'){var _0x46066c=users[_0x353260(0xe7)];console[_0x353260(0xbc)](_0x46066c);}else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0x116))var _0x46066c=users['Hindi'];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0xf1))var _0x46066c=users['German'];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0xbf))var _0x46066c=users[_0x353260(0xbf)];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0xce))var _0x46066c=users[_0x353260(0xce)];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0x10d))var _0x46066c=users[_0x353260(0xfe)];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0x104))var _0x46066c=users[_0x353260(0x104)];else{if(_0x3dc6de[0x0][_0x353260(0xfd)]==_0x353260(0xea))var _0x46066c=users[_0x353260(0xe5)];}}}}}}}_0x114199['render'](_0x353260(0xc6),{'success':_0x5de12c[_0x353260(0xba)](_0x353260(0xc7)),'errors':_0x5de12c[_0x353260(0xba)](_0x353260(0xf4)),'user':_0xf3bc84,'profile':_0xf2422,'master_shop':_0x3dc6de,'role':_0x55787c,'payment':_0x4782f4,'language':_0x46066c});}catch(_0xa34913){console['log'](_0xa34913);}}),router['post'](a0_0x2053e9(0xd3),auth,async(_0x411023,_0x59ff29)=>{const _0x6aea1f=a0_0x2053e9;try{const {name:_0x1f0e93,email:_0x35b7ff,mobile:_0x5b9650,company:_0x2b6b17,address:_0x3b7887,receivable:_0x3a11e5,payable:_0x4f272a,code:_0x30f76,contactperson:_0x1afe27,landline:_0x30908d}=_0x411023[_0x6aea1f(0xe9)],_0x411a22=new suppliers({'name':_0x1f0e93,'email':_0x35b7ff,'mobile':_0x5b9650,'company':_0x2b6b17,'address':_0x3b7887,'receivable':_0x3a11e5,'payable':_0x4f272a,'suppliers_code':_0x30f76,'contactperson':_0x1afe27,'landline':_0x30908d}),_0x19b1f9=await _0x411a22[_0x6aea1f(0xdc)]();_0x411023[_0x6aea1f(0xba)]('success',_0x6aea1f(0xde)),_0x59ff29[_0x6aea1f(0x107)]('/supplier/view');}catch(_0x4d1202){console[_0x6aea1f(0xbc)](_0x4d1202);}}),router[a0_0x2053e9(0xb7)](a0_0x2053e9(0xc2),auth,async(_0x54b4e1,_0x2af97f)=>{const _0x2303f8=a0_0x2053e9;try{const {username:_0x1dae23,email:_0x2dd115,role:_0x2da8ed}=_0x54b4e1[_0x2303f8(0xb8)],_0x5d2bc5=_0x54b4e1[_0x2303f8(0xb8)],_0x3b4de2=await profile[_0x2303f8(0xee)]({'email':_0x5d2bc5['email']}),_0x4c8cd6=await master_shop['find']();console['log'](_0x2303f8(0x113),_0x4c8cd6);const _0x29e898=_0x54b4e1[_0x2303f8(0xd0)]['id'],_0x35e85b=await suppliers['findById'](_0x29e898);console['log'](_0x35e85b);if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]=='English\x20(US)'){var _0x36ee26=users[_0x2303f8(0xe7)];console['log'](_0x36ee26);}else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]==_0x2303f8(0x116))var _0x36ee26=users[_0x2303f8(0x116)];else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]=='German')var _0x36ee26=users['German'];else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]=='Spanish')var _0x36ee26=users[_0x2303f8(0xbf)];else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]=='French')var _0x36ee26=users['French'];else{if(_0x4c8cd6[0x0]['language']==_0x2303f8(0x10d))var _0x36ee26=users[_0x2303f8(0xfe)];else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]==_0x2303f8(0x104))var _0x36ee26=users[_0x2303f8(0x104)];else{if(_0x4c8cd6[0x0][_0x2303f8(0xfd)]==_0x2303f8(0xea))var _0x36ee26=users['Arabic'];}}}}}}}_0x2af97f[_0x2303f8(0xed)]('supplier',{'success':_0x54b4e1[_0x2303f8(0xba)](_0x2303f8(0xc7)),'errors':_0x54b4e1[_0x2303f8(0xba)](_0x2303f8(0xf4)),'role':_0x5d2bc5,'profile':_0x3b4de2,'master_shop':_0x4c8cd6,'user':_0x35e85b,'language':_0x36ee26});}catch(_0xb1a97e){console['log'](_0xb1a97e);}}),router[a0_0x2053e9(0x10c)](a0_0x2053e9(0xc2),auth,async(_0x47ebd0,_0x1cddd8)=>{const _0x51b69e=a0_0x2053e9;try{const _0x3a8886=_0x47ebd0[_0x51b69e(0xd0)]['id'],_0x452bce=await suppliers[_0x51b69e(0xd9)](_0x3a8886),{name:_0x232d2f,email:_0x128d42,mobile:_0x4b13d8,company:_0xeea2fe,address:_0x4a2854,receivable:_0x332ce2,payable:_0x5ab64b,code:_0x41317d,contactperson:_0x3c8431,landline:_0x42702e}=_0x47ebd0[_0x51b69e(0xe9)];_0x452bce[_0x51b69e(0xc4)]=_0x232d2f,_0x452bce[_0x51b69e(0xb9)]=_0x128d42,_0x452bce[_0x51b69e(0x115)]=_0x4b13d8,_0x452bce['company']=_0xeea2fe,_0x452bce[_0x51b69e(0x103)]=_0x4a2854,_0x452bce[_0x51b69e(0x101)]=_0x332ce2,_0x452bce[_0x51b69e(0xdf)]=_0x5ab64b,_0x452bce[_0x51b69e(0xe6)]=_0x41317d,_0x452bce[_0x51b69e(0x108)]=_0x3c8431,_0x452bce[_0x51b69e(0xd7)]=_0x42702e;const _0x5f58d3=await _0x452bce[_0x51b69e(0xdc)]();_0x47ebd0[_0x51b69e(0xba)](_0x51b69e(0xc7),_0x51b69e(0x110)),_0x1cddd8[_0x51b69e(0x107)](_0x51b69e(0xf8));}catch(_0x600b9b){console[_0x51b69e(0xbc)](_0x600b9b);}}),router[a0_0x2053e9(0xb7)]('/view/payment/:id',auth,async(_0x22ae43,_0xcdecd6)=>{const _0x26dcc7=a0_0x2053e9;try{const {username:_0x5bf4f1,email:_0x2cc9dd,role:_0x7d5977}=_0x22ae43[_0x26dcc7(0xb8)],_0x450b47=_0x22ae43['user'],_0x19bedc=await profile[_0x26dcc7(0xee)]({'email':_0x450b47[_0x26dcc7(0xb9)]}),_0x22f974=await master_shop[_0x26dcc7(0xe4)]();console[_0x26dcc7(0xbc)](_0x26dcc7(0x113),_0x22f974),console['log'](_0x22ae43[_0x26dcc7(0xd0)]['id']);const _0x4fa0bf=await suppliers[_0x26dcc7(0xee)]({'_id':_0x22ae43['params']['id']});console[_0x26dcc7(0xbc)](_0x4fa0bf);const _0x23ada1=await s_payment_data[_0x26dcc7(0xe4)]({'suppliers':_0x4fa0bf[_0x26dcc7(0xc4)]});console['log'](_0x23ada1);const _0x3568c9=await s_payment_data[_0x26dcc7(0xb1)]([{'$match':{'suppliers':_0x4fa0bf[_0x26dcc7(0xc4)]}},{'$match':{'reason':'Purchase'}},{'$group':{'_id':_0x26dcc7(0x105),'sum':{'$sum':_0x26dcc7(0xaf)}}}]);console[_0x26dcc7(0xbc)]('payable_sum',_0x3568c9);const _0x534db5=await s_payment_data[_0x26dcc7(0xb1)]([{'$match':{'suppliers':_0x4fa0bf['name']}},{'$match':{'reason':'Purchase\x20Return'}},{'$group':{'_id':_0x26dcc7(0x105),'sum':{'$sum':'$amount'}}}]);console[_0x26dcc7(0xbc)](_0x26dcc7(0xbd),_0x534db5);if(_0x22f974[0x0][_0x26dcc7(0xfd)]==_0x26dcc7(0xd2)){var _0x3fd7e2=users['English'];console[_0x26dcc7(0xbc)](_0x3fd7e2);}else{if(_0x22f974[0x0][_0x26dcc7(0xfd)]==_0x26dcc7(0x116))var _0x3fd7e2=users['Hindi'];else{if(_0x22f974[0x0][_0x26dcc7(0xfd)]=='German')var _0x3fd7e2=users[_0x26dcc7(0xf1)];else{if(_0x22f974[0x0][_0x26dcc7(0xfd)]=='Spanish')var _0x3fd7e2=users['Spanish'];else{if(_0x22f974[0x0]['language']==_0x26dcc7(0xce))var _0x3fd7e2=users[_0x26dcc7(0xce)];else{if(_0x22f974[0x0]['language']==_0x26dcc7(0x10d))var _0x3fd7e2=users['Portuguese'];else{if(_0x22f974[0x0][_0x26dcc7(0xfd)]==_0x26dcc7(0x104))var _0x3fd7e2=users['Chinese'];else{if(_0x22f974[0x0]['language']==_0x26dcc7(0xea))var _0x3fd7e2=users[_0x26dcc7(0xe5)];}}}}}}}_0xcdecd6[_0x26dcc7(0xed)](_0x26dcc7(0xd1),{'success':_0x22ae43[_0x26dcc7(0xba)]('success'),'errors':_0x22ae43[_0x26dcc7(0xba)]('errors'),'role':_0x450b47,'profile':_0x19bedc,'master_shop':_0x22f974,'payment':_0x23ada1,'payable':_0x3568c9,'receivable':_0x534db5,'language':_0x3fd7e2});}catch(_0x57a4cf){console[_0x26dcc7(0xbc)](_0x57a4cf);}}),router[a0_0x2053e9(0xb7)](a0_0x2053e9(0xbe),auth,async(_0x2bf836,_0x154202)=>{const _0x336fb7=a0_0x2053e9;try{const _0x20032f=new excelJS[(_0x336fb7(0xb2))](),_0x5e8f7d=_0x20032f[_0x336fb7(0xda)](_0x336fb7(0xb4));return _0x5e8f7d[_0x336fb7(0xcf)]=[{'header':'Name','key':_0x336fb7(0xfb),'width':0xa},{'header':_0x336fb7(0xc9),'key':_0x336fb7(0xf2),'width':0xa},{'header':'Email','key':'SalesmanName','width':0xa},{'header':_0x336fb7(0xc0),'key':_0x336fb7(0x103),'width':0xa},{'header':'Company_Name','key':'mobile','width':0xa},{'header':_0x336fb7(0x103),'key':_0x336fb7(0xb9),'width':0xa}],_0x154202['setHeader']('Content-Type',_0x336fb7(0x109)),_0x154202[_0x336fb7(0xe8)](_0x336fb7(0xdb),_0x336fb7(0xfa)),_0x20032f[_0x336fb7(0xfc)]['write'](_0x154202)['then'](()=>{const _0x22ec8f=_0x336fb7;_0x154202[_0x22ec8f(0x10f)](0xc8);});}catch(_0xca2a2d){_0x154202[_0x336fb7(0x10f)](0x190)[_0x336fb7(0xeb)]({'errors':_0xca2a2d[_0x336fb7(0xb6)]});}});const storage1=multer[a0_0x2053e9(0x102)]({'destination':(_0x3a7b5d,_0x2d77f0,_0x3ca1c3)=>{const _0x453efc=a0_0x2053e9;_0x3ca1c3(null,_0x453efc(0xf9));},'filename':(_0x2a3c6e,_0x25eaef,_0x4f0122)=>{const _0x44e9b1=a0_0x2053e9;_0x4f0122(null,Date[_0x44e9b1(0xf5)]()+_0x25eaef[_0x44e9b1(0x114)]);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x2053e9(0x10c)](a0_0x2053e9(0xff),auth,uploadMigrate[a0_0x2053e9(0xe1)]('supplier_product_file'),async(_0x46b903,_0x4224b6)=>{const _0x5dc0c1=a0_0x2053e9,_0x47f451=_0x46b903['file'][_0x5dc0c1(0x10a)],_0x3c2229=await xlsx['readFile']('public/Migration/'+_0x47f451);let _0x5f123c=_0x3c2229[_0x5dc0c1(0x112)],_0x55bd21=xlsx[_0x5dc0c1(0xe0)][_0x5dc0c1(0xc3)](_0x3c2229[_0x5dc0c1(0xcd)][_0x5f123c[0x0]]);for(const _0x495de7 of _0x55bd21){const _0x43e960=_0x495de7['Name'],_0x167849=_0x495de7['Supplier_Code'],_0x581912=_0x495de7['address'],_0x4bad8d=_0x495de7[_0x5dc0c1(0xc0)],_0x441f37=_0x495de7[_0x5dc0c1(0xcb)],_0x3d51b1=_0x495de7[_0x5dc0c1(0xe3)];try{let _0x3fb821=await suppliers[_0x5dc0c1(0xee)]({'name':_0x43e960});if(!_0x3fb821){const _0x43ee9f=new suppliers({'name':_0x43e960,'suppliers_code':_0x167849,'address':_0x581912,'mobile':_0x4bad8d,'email':_0x441f37,'company':_0x3d51b1});_0x3fb821=await _0x43ee9f[_0x5dc0c1(0xdc)](),_0x46b903[_0x5dc0c1(0xba)]('success',_0x43e960+_0x5dc0c1(0x117));}else _0x46b903['flash'](_0x5dc0c1(0x100),_0x43e960+_0x5dc0c1(0x106));}catch(_0x394cca){_0x4224b6[_0x5dc0c1(0x10f)](0x1f4)[_0x5dc0c1(0xc5)]({'proderror':_0x394cca[_0x5dc0c1(0xb6)],'aproduct':ProductName});}}_0x4224b6[_0x5dc0c1(0x107)](_0x5dc0c1(0xf8));}),module[a0_0x2053e9(0xf0)]=router;