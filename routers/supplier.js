const a0_0x1cd27a=a0_0x2824;function a0_0x14e1(){const _0x23558e=['save','supplier','French','Portuguese','send','multer','receivable','express','sheet_to_json','suppliers_docs','Content-Disposition','Content-Type','Email','/view','496426oQgNlM','params','status','data','English','Sheets','84MPYqri','email','Purchase','message','English\x20(US)','json','1110562FWIriC','/products_export_migrate_file','s_payments','setHeader','Hindi','/view/payment/:id','get','Arabic','findOne','865900saatiP','supplier_payment','contactperson','landline','../models/all_models','suppliers_code','columns','suppliers','\x20Failed','findById','4343094dDAtnL','5HnEfMq','errors','payable_sum','render','supplier.js\x20payment_data','then','name','body','public/Migration/','log','Portuguese\x20(BR)','Arabic\x20(ae)','2221887XUsDay','Mobile_number','Company_Name','master','redirect','Customers','../middleware/auth','../public/language/languages.json','247177sNJAaB','application/vnd.openxmlformats-officedocument.spreadsheatml.sheet','Router','/supplier/view','SalesmanName','filename','single','German','amount','utils','$reason','payable','purchase_return','Spanish','diskStorage','supplier_product_file','now','attachment;\x20filename=supplier_Migration_File.xlsx','exports','find','file','success','Name','Chinese','user','reason','language','/view/:id','flash','supplier\x20data\x20add\x20successfully','receivable_sum','post','aggregate','7293704ZgQuMf','address','mobile','readFile','$amount'];a0_0x14e1=function(){return _0x23558e;};return a0_0x14e1();}function a0_0x2824(_0x2021f1,_0x4af319){const _0x14e19b=a0_0x14e1();return a0_0x2824=function(_0x282482,_0x46ec4b){_0x282482=_0x282482-0x141;let _0x48dbd1=_0x14e19b[_0x282482];return _0x48dbd1;},a0_0x2824(_0x2021f1,_0x4af319);}(function(_0x4b62a5,_0x201bc2){const _0x112942=a0_0x2824,_0x13d204=_0x4b62a5();while(!![]){try{const _0x3c2232=parseInt(_0x112942(0x143))/0x1+parseInt(_0x112942(0x14f))/0x2+-parseInt(_0x112942(0x16f))/0x3+-parseInt(_0x112942(0x158))/0x4*(-parseInt(_0x112942(0x163))/0x5)+-parseInt(_0x112942(0x149))/0x6*(parseInt(_0x112942(0x177))/0x7)+parseInt(_0x112942(0x198))/0x8+-parseInt(_0x112942(0x162))/0x9;if(_0x3c2232===_0x201bc2)break;else _0x13d204['push'](_0x13d204['shift']());}catch(_0x440f12){_0x13d204['push'](_0x13d204['shift']());}}}(a0_0x14e1,0x70e0a));const express=require(a0_0x1cd27a(0x1a4)),app=express(),router=express[a0_0x1cd27a(0x179)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,s_payment_data}=require(a0_0x1cd27a(0x15c)),auth=require(a0_0x1cd27a(0x175)),users=require(a0_0x1cd27a(0x176)),excelJS=require('exceljs'),xlsx=require('xlsx'),multer=require(a0_0x1cd27a(0x1a2));router['get'](a0_0x1cd27a(0x142),auth,async(_0x434b6e,_0x546e9d)=>{const _0x592ba0=a0_0x1cd27a;try{const {username:_0x260e32,email:_0x2fed3a,role:_0x22eb89}=_0x434b6e['user'],_0x56568e=_0x434b6e[_0x592ba0(0x18f)],_0x2acbe0=await profile[_0x592ba0(0x157)]({'email':_0x56568e[_0x592ba0(0x14a)]}),_0x512cd4=await master_shop[_0x592ba0(0x18a)]();console[_0x592ba0(0x16c)]('master',_0x512cd4);const _0x10896e=await suppliers['find']();console[_0x592ba0(0x16c)](_0x10896e);const _0x203884=await suppliers[_0x592ba0(0x197)]([{'$lookup':{'from':_0x592ba0(0x151),'localField':_0x592ba0(0x169),'foreignField':_0x592ba0(0x15f),'as':_0x592ba0(0x1a6)}}]),_0x368e67=_0x203884['map'](_0x4f4255=>{const _0x58ea28=_0x592ba0;console[_0x58ea28(0x16c)](_0x58ea28(0x146),_0x4f4255);var _0x18a341=0x0,_0x38e95=0x0;return _0x4f4255[_0x58ea28(0x1a6)]['forEach'](_0x5ebe4c=>{const _0xc2a4c7=_0x58ea28;console[_0xc2a4c7(0x16c)]('doc',_0x5ebe4c),_0x5ebe4c[_0xc2a4c7(0x190)]=='Purchase'?_0x18a341+=_0x5ebe4c[_0xc2a4c7(0x17f)]:_0x38e95+=_0x5ebe4c['amount'];}),_0x4f4255['purchase']=_0x18a341,_0x4f4255[_0x58ea28(0x183)]=_0x38e95,_0x4f4255;});console[_0x592ba0(0x16c)](_0x592ba0(0x167),_0x368e67);if(_0x512cd4[0x0][_0x592ba0(0x191)]=='English\x20(US)'){var _0x4b3e92=users[_0x592ba0(0x147)];console[_0x592ba0(0x16c)](_0x4b3e92);}else{if(_0x512cd4[0x0][_0x592ba0(0x191)]==_0x592ba0(0x153))var _0x4b3e92=users[_0x592ba0(0x153)];else{if(_0x512cd4[0x0][_0x592ba0(0x191)]==_0x592ba0(0x17e))var _0x4b3e92=users[_0x592ba0(0x17e)];else{if(_0x512cd4[0x0][_0x592ba0(0x191)]=='Spanish')var _0x4b3e92=users[_0x592ba0(0x184)];else{if(_0x512cd4[0x0][_0x592ba0(0x191)]==_0x592ba0(0x19f))var _0x4b3e92=users[_0x592ba0(0x19f)];else{if(_0x512cd4[0x0][_0x592ba0(0x191)]=='Portuguese\x20(BR)')var _0x4b3e92=users[_0x592ba0(0x1a0)];else{if(_0x512cd4[0x0][_0x592ba0(0x191)]=='Chinese')var _0x4b3e92=users[_0x592ba0(0x18e)];else{if(_0x512cd4[0x0]['language']==_0x592ba0(0x16e))var _0x4b3e92=users[_0x592ba0(0x156)];}}}}}}}_0x546e9d['render'](_0x592ba0(0x19e),{'success':_0x434b6e[_0x592ba0(0x193)](_0x592ba0(0x18c)),'errors':_0x434b6e['flash']('errors'),'user':_0x10896e,'profile':_0x2acbe0,'master_shop':_0x512cd4,'role':_0x56568e,'payment':_0x368e67,'language':_0x4b3e92});}catch(_0x384829){console[_0x592ba0(0x16c)](_0x384829);}}),router['post'](a0_0x1cd27a(0x142),auth,async(_0x3eb36d,_0x2e8f9a)=>{const _0x6e32b3=a0_0x1cd27a;try{const {name:_0x2998e1,email:_0x15e29d,mobile:_0x5b12e7,company:_0x420d54,address:_0x12d14a,receivable:_0x3f3e1d,payable:_0x4ad8b0,code:_0x5e4f95,contactperson:_0x4c18d9,landline:_0x28cea6}=_0x3eb36d[_0x6e32b3(0x16a)],_0x1902d6=new suppliers({'name':_0x2998e1,'email':_0x15e29d,'mobile':_0x5b12e7,'company':_0x420d54,'address':_0x12d14a,'receivable':_0x3f3e1d,'payable':_0x4ad8b0,'suppliers_code':_0x5e4f95,'contactperson':_0x4c18d9,'landline':_0x28cea6}),_0x4a8f57=await _0x1902d6[_0x6e32b3(0x19d)]();_0x3eb36d[_0x6e32b3(0x193)](_0x6e32b3(0x18c),_0x6e32b3(0x194)),_0x2e8f9a['redirect'](_0x6e32b3(0x17a));}catch(_0x25b335){console[_0x6e32b3(0x16c)](_0x25b335);}}),router['get'](a0_0x1cd27a(0x192),auth,async(_0x5298f4,_0x2db84d)=>{const _0x123a1c=a0_0x1cd27a;try{const {username:_0x5c41da,email:_0x403bfc,role:_0x2831c7}=_0x5298f4[_0x123a1c(0x18f)],_0x5bc279=_0x5298f4[_0x123a1c(0x18f)],_0x437246=await profile[_0x123a1c(0x157)]({'email':_0x5bc279[_0x123a1c(0x14a)]}),_0x30f546=await master_shop[_0x123a1c(0x18a)]();console[_0x123a1c(0x16c)](_0x123a1c(0x172),_0x30f546);const _0x1018eb=_0x5298f4['params']['id'],_0x3cd84b=await suppliers[_0x123a1c(0x161)](_0x1018eb);console[_0x123a1c(0x16c)](_0x3cd84b);if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x14d)){var _0xe0e018=users[_0x123a1c(0x147)];console[_0x123a1c(0x16c)](_0xe0e018);}else{if(_0x30f546[0x0][_0x123a1c(0x191)]=='Hindi')var _0xe0e018=users[_0x123a1c(0x153)];else{if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x17e))var _0xe0e018=users['German'];else{if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x184))var _0xe0e018=users[_0x123a1c(0x184)];else{if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x19f))var _0xe0e018=users[_0x123a1c(0x19f)];else{if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x16d))var _0xe0e018=users[_0x123a1c(0x1a0)];else{if(_0x30f546[0x0]['language']==_0x123a1c(0x18e))var _0xe0e018=users[_0x123a1c(0x18e)];else{if(_0x30f546[0x0][_0x123a1c(0x191)]==_0x123a1c(0x16e))var _0xe0e018=users[_0x123a1c(0x156)];}}}}}}}_0x2db84d[_0x123a1c(0x166)](_0x123a1c(0x19e),{'success':_0x5298f4['flash']('success'),'errors':_0x5298f4['flash'](_0x123a1c(0x164)),'role':_0x5bc279,'profile':_0x437246,'master_shop':_0x30f546,'user':_0x3cd84b,'language':_0xe0e018});}catch(_0x26391a){console[_0x123a1c(0x16c)](_0x26391a);}}),router[a0_0x1cd27a(0x196)](a0_0x1cd27a(0x192),auth,async(_0x15be02,_0x1f29ab)=>{const _0x4af555=a0_0x1cd27a;try{const _0x520429=_0x15be02['params']['id'],_0x37283c=await suppliers[_0x4af555(0x161)](_0x520429),{name:_0x3214d7,email:_0x583f36,mobile:_0x4b29e2,company:_0x573d40,address:_0x51a80e,receivable:_0x2f7e1d,payable:_0x12f548,code:_0x5c2e81,contactperson:_0x412555,landline:_0xc42ffa}=_0x15be02[_0x4af555(0x16a)];_0x37283c['name']=_0x3214d7,_0x37283c[_0x4af555(0x14a)]=_0x583f36,_0x37283c[_0x4af555(0x19a)]=_0x4b29e2,_0x37283c['company']=_0x573d40,_0x37283c[_0x4af555(0x199)]=_0x51a80e,_0x37283c[_0x4af555(0x1a3)]=_0x2f7e1d,_0x37283c[_0x4af555(0x182)]=_0x12f548,_0x37283c[_0x4af555(0x15d)]=_0x5c2e81,_0x37283c[_0x4af555(0x15a)]=_0x412555,_0x37283c[_0x4af555(0x15b)]=_0xc42ffa;const _0x4d1e0a=await _0x37283c[_0x4af555(0x19d)]();_0x15be02[_0x4af555(0x193)](_0x4af555(0x18c),'supplier\x20data\x20update\x20successfully'),_0x1f29ab[_0x4af555(0x173)](_0x4af555(0x17a));}catch(_0x5a64be){console[_0x4af555(0x16c)](_0x5a64be);}}),router[a0_0x1cd27a(0x155)](a0_0x1cd27a(0x154),auth,async(_0x52f470,_0x826205)=>{const _0x582429=a0_0x1cd27a;try{const {username:_0x45e565,email:_0x4fca31,role:_0x170e91}=_0x52f470['user'],_0x7dd025=_0x52f470[_0x582429(0x18f)],_0xc8bb54=await profile[_0x582429(0x157)]({'email':_0x7dd025[_0x582429(0x14a)]}),_0x372350=await master_shop['find']();console[_0x582429(0x16c)](_0x582429(0x172),_0x372350),console['log'](_0x52f470['params']['id']);const _0x28701=await suppliers[_0x582429(0x157)]({'_id':_0x52f470[_0x582429(0x144)]['id']});console['log'](_0x28701);const _0x510404=await s_payment_data[_0x582429(0x18a)]({'suppliers':_0x28701[_0x582429(0x169)]});console[_0x582429(0x16c)](_0x510404);const _0x108e12=await s_payment_data[_0x582429(0x197)]([{'$match':{'suppliers':_0x28701['name']}},{'$match':{'reason':_0x582429(0x14b)}},{'$group':{'_id':_0x582429(0x181),'sum':{'$sum':_0x582429(0x19c)}}}]);console[_0x582429(0x16c)](_0x582429(0x165),_0x108e12);const _0x2aa96e=await s_payment_data[_0x582429(0x197)]([{'$match':{'suppliers':_0x28701[_0x582429(0x169)]}},{'$match':{'reason':'Purchase\x20Return'}},{'$group':{'_id':_0x582429(0x181),'sum':{'$sum':_0x582429(0x19c)}}}]);console[_0x582429(0x16c)](_0x582429(0x195),_0x2aa96e);if(_0x372350[0x0]['language']=='English\x20(US)'){var _0x3c99ae=users[_0x582429(0x147)];console[_0x582429(0x16c)](_0x3c99ae);}else{if(_0x372350[0x0]['language']=='Hindi')var _0x3c99ae=users[_0x582429(0x153)];else{if(_0x372350[0x0][_0x582429(0x191)]==_0x582429(0x17e))var _0x3c99ae=users[_0x582429(0x17e)];else{if(_0x372350[0x0][_0x582429(0x191)]=='Spanish')var _0x3c99ae=users['Spanish'];else{if(_0x372350[0x0][_0x582429(0x191)]==_0x582429(0x19f))var _0x3c99ae=users[_0x582429(0x19f)];else{if(_0x372350[0x0][_0x582429(0x191)]==_0x582429(0x16d))var _0x3c99ae=users['Portuguese'];else{if(_0x372350[0x0][_0x582429(0x191)]==_0x582429(0x18e))var _0x3c99ae=users[_0x582429(0x18e)];else{if(_0x372350[0x0][_0x582429(0x191)]=='Arabic\x20(ae)')var _0x3c99ae=users[_0x582429(0x156)];}}}}}}}_0x826205['render'](_0x582429(0x159),{'success':_0x52f470[_0x582429(0x193)](_0x582429(0x18c)),'errors':_0x52f470[_0x582429(0x193)](_0x582429(0x164)),'role':_0x7dd025,'profile':_0xc8bb54,'master_shop':_0x372350,'payment':_0x510404,'payable':_0x108e12,'receivable':_0x2aa96e,'language':_0x3c99ae});}catch(_0xd72a8b){console['log'](_0xd72a8b);}}),router[a0_0x1cd27a(0x155)](a0_0x1cd27a(0x150),auth,async(_0x25225d,_0x512c5d)=>{const _0x37ef76=a0_0x1cd27a;try{const _0x50e15a=new excelJS['Workbook'](),_0x31e840=_0x50e15a['addWorksheet'](_0x37ef76(0x174));return _0x31e840[_0x37ef76(0x15e)]=[{'header':_0x37ef76(0x18d),'key':'PBrands','width':0xa},{'header':'Supplier_Code','key':'PUnits','width':0xa},{'header':_0x37ef76(0x141),'key':_0x37ef76(0x17b),'width':0xa},{'header':'Mobile_number','key':'address','width':0xa},{'header':_0x37ef76(0x171),'key':'mobile','width':0xa},{'header':_0x37ef76(0x199),'key':'email','width':0xa}],_0x512c5d[_0x37ef76(0x152)](_0x37ef76(0x1a8),_0x37ef76(0x178)),_0x512c5d['setHeader'](_0x37ef76(0x1a7),_0x37ef76(0x188)),_0x50e15a['xlsx']['write'](_0x512c5d)[_0x37ef76(0x168)](()=>{const _0x522fde=_0x37ef76;_0x512c5d[_0x522fde(0x145)](0xc8);});}catch(_0xe243c){_0x512c5d[_0x37ef76(0x145)](0x190)[_0x37ef76(0x1a1)]({'errors':_0xe243c[_0x37ef76(0x14c)]});}});const storage1=multer[a0_0x1cd27a(0x185)]({'destination':(_0x1c3e7f,_0x2d6da1,_0x7abae9)=>{_0x7abae9(null,'public/Migration');},'filename':(_0x11e18a,_0x3ba330,_0x49525c)=>{const _0x24b2f9=a0_0x1cd27a;_0x49525c(null,Date[_0x24b2f9(0x187)]()+_0x3ba330['originalname']);}}),uploadMigrate=multer({'storage':storage1});router[a0_0x1cd27a(0x196)]('/supplier_import_migrate_file',auth,uploadMigrate[a0_0x1cd27a(0x17d)](a0_0x1cd27a(0x186)),async(_0x516c84,_0x1a8519)=>{const _0x346200=a0_0x1cd27a,_0x438cf4=_0x516c84[_0x346200(0x18b)][_0x346200(0x17c)],_0x5ca5ed=await xlsx[_0x346200(0x19b)](_0x346200(0x16b)+_0x438cf4);let _0x441f59=_0x5ca5ed['SheetNames'],_0x3c0699=xlsx[_0x346200(0x180)][_0x346200(0x1a5)](_0x5ca5ed[_0x346200(0x148)][_0x441f59[0x0]]);for(const _0x24709f of _0x3c0699){const _0x143f9f=_0x24709f[_0x346200(0x18d)],_0x56652b=_0x24709f['Supplier_Code'],_0x4999bb=_0x24709f[_0x346200(0x199)],_0x2b18a8=_0x24709f[_0x346200(0x170)],_0x4e9628=_0x24709f['Email'],_0x4fb341=_0x24709f['Company_Name'];try{let _0x100700=await suppliers[_0x346200(0x157)]({'name':_0x143f9f});if(!_0x100700){const _0x199b4c=new suppliers({'name':_0x143f9f,'suppliers_code':_0x56652b,'address':_0x4999bb,'mobile':_0x2b18a8,'email':_0x4e9628,'company':_0x4fb341});_0x100700=await _0x199b4c[_0x346200(0x19d)](),_0x516c84[_0x346200(0x193)]('success',_0x143f9f+'\x20added\x20successfully');}else _0x516c84[_0x346200(0x193)]('error',_0x143f9f+_0x346200(0x160));}catch(_0x27e9eb){_0x1a8519['status'](0x1f4)[_0x346200(0x14e)]({'proderror':_0x27e9eb[_0x346200(0x14c)],'aproduct':ProductName});}}_0x1a8519[_0x346200(0x173)](_0x346200(0x17a));}),module[a0_0x1cd27a(0x189)]=router;