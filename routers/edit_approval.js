const a0_0x367107=a0_0x5d63;(function(_0x4a2552,_0x591a42){const _0x1e2b1e=a0_0x5d63,_0x21c234=_0x4a2552();while(!![]){try{const _0x44b5ca=-parseInt(_0x1e2b1e(0xf9))/0x1+-parseInt(_0x1e2b1e(0x116))/0x2*(-parseInt(_0x1e2b1e(0x113))/0x3)+-parseInt(_0x1e2b1e(0x12c))/0x4+-parseInt(_0x1e2b1e(0xfe))/0x5*(parseInt(_0x1e2b1e(0xfd))/0x6)+parseInt(_0x1e2b1e(0x10b))/0x7*(-parseInt(_0x1e2b1e(0x126))/0x8)+-parseInt(_0x1e2b1e(0x128))/0x9*(parseInt(_0x1e2b1e(0x136))/0xa)+parseInt(_0x1e2b1e(0x127))/0xb;if(_0x44b5ca===_0x591a42)break;else _0x21c234['push'](_0x21c234['shift']());}catch(_0x186cb7){_0x21c234['push'](_0x21c234['shift']());}}}(a0_0x99b2,0x84d28));function a0_0x5d63(_0x55adab,_0x5ccbf6){const _0x99b22d=a0_0x99b2();return a0_0x5d63=function(_0x5d6382,_0x22755c){_0x5d6382=_0x5d6382-0xf7;let _0x503335=_0x99b22d[_0x5d6382];return _0x503335;},a0_0x5d63(_0x55adab,_0x5ccbf6);}const express=require('express'),app=express(),router=express['Router'](),auth=require('../middleware/auth'),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x367107(0xff)),users=require(a0_0x367107(0x11a)),nodemailer=require(a0_0x367107(0x106));function a0_0x99b2(){const _0x436251=['json','trf','Adjustment\x20Finished\x20Goods','email','trff','findOne','24MVUNfw','22064647swfVOv','2961BdnmMo','save','/transfer_finished','success','1408180tewDSV','approvals_view','French','Portuguese\x20(BR)','render','exports','flash','invoice','Hindi','/transfer','18950xIaeME','log','message','512564jtsvth','German','/adjustment','Chinese','1171446HlMzqi','5GSNKUA','../models/all_models','isAllowEdit','adj','Adjustment\x20Raw\x20materials','/adjustment_finished','Arabic\x20(ae)','post','nodemailer','/outgoing_finished','adjf','edit_approvals_view','Portuguese','1985263rxGecH','Outgoing\x20Raw\x20materials','Arabic','False','get','English','English\x20(US)','language','3ljxLeV','body','errors','2144590ooSSWN','Transfer\x20Finished\x20Goods','/outgoing','/view','../public/language/languages.json','Spanish','user','Outgoing\x20Finished\x20Goods','outF','find'];a0_0x99b2=function(){return _0x436251;};return a0_0x99b2();}router[a0_0x367107(0x10f)](a0_0x367107(0x119),auth,async(_0x37f1a2,_0xace824)=>{const _0x460d47=a0_0x367107;try{const {username:_0x340ed2,email:_0x5f44ca,role:_0x32d3ed}=_0x37f1a2[_0x460d47(0x11c)],_0x3fc41d=_0x37f1a2[_0x460d47(0x11c)],_0x26edca=await profile[_0x460d47(0x125)]({'email':_0x3fc41d[_0x460d47(0x123)]}),_0x183319=await master_shop[_0x460d47(0x11f)](),_0x1bb248=await sales['find']({'finalize':_0x460d47(0x10e)}),_0x2fd039=await adjustment[_0x460d47(0x11f)]({'finalize':'False'}),_0x42db45=await transfers[_0x460d47(0x11f)]({'finalize':'False'});if(_0x183319[0x0][_0x460d47(0x112)]=='English\x20(US)')var _0x21397a=users[_0x460d47(0x110)];else{if(_0x183319[0x0][_0x460d47(0x112)]==_0x460d47(0x134))var _0x21397a=users[_0x460d47(0x134)];else{if(_0x183319[0x0][_0x460d47(0x112)]==_0x460d47(0xfa))var _0x21397a=users[_0x460d47(0xfa)];else{if(_0x183319[0x0][_0x460d47(0x112)]==_0x460d47(0x11b))var _0x21397a=users[_0x460d47(0x11b)];else{if(_0x183319[0x0]['language']==_0x460d47(0x12e))var _0x21397a=users['French'];else{if(_0x183319[0x0]['language']=='Portuguese\x20(BR)')var _0x21397a=users['Portuguese'];else{if(_0x183319[0x0][_0x460d47(0x112)]==_0x460d47(0xfc))var _0x21397a=users[_0x460d47(0xfc)];else{if(_0x183319[0x0][_0x460d47(0x112)]==_0x460d47(0x104))var _0x21397a=users['Arabic'];}}}}}}}_0xace824['render'](_0x460d47(0x109),{'success':_0x37f1a2['flash'](_0x460d47(0x12b)),'errors':_0x37f1a2[_0x460d47(0x132)](_0x460d47(0x115)),'role':_0x3fc41d,'profile':_0x26edca,'master_shop':_0x183319,'language':_0x21397a,'sales':_0x1bb248,'adjustment':_0x2fd039,'transfer':_0x42db45});}catch(_0xb34142){console[_0x460d47(0xf7)](_0xb34142);}}),router[a0_0x367107(0x10f)](a0_0x367107(0x118),auth,async(_0x126857,_0x193373)=>{const _0x54f43e=a0_0x367107;try{const {username:_0x385353,email:_0x30c562,role:_0x56096a}=_0x126857[_0x54f43e(0x11c)],_0x17c65b=_0x126857['user'],_0x434e05=await profile[_0x54f43e(0x125)]({'email':_0x17c65b[_0x54f43e(0x123)]}),_0x537597=await master_shop[_0x54f43e(0x11f)](),_0x369e90=await sales[_0x54f43e(0x11f)]({'finalize':_0x54f43e(0x10e)}),_0x225ba0={'name':_0x54f43e(0x10c),'code':'out'};if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0x111))var _0x47815c=users[_0x54f43e(0x110)];else{if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0x134))var _0x47815c=users[_0x54f43e(0x134)];else{if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0xfa))var _0x47815c=users[_0x54f43e(0xfa)];else{if(_0x537597[0x0]['language']==_0x54f43e(0x11b))var _0x47815c=users[_0x54f43e(0x11b)];else{if(_0x537597[0x0]['language']==_0x54f43e(0x12e))var _0x47815c=users['French'];else{if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0x12f))var _0x47815c=users[_0x54f43e(0x10a)];else{if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0xfc))var _0x47815c=users['Chinese'];else{if(_0x537597[0x0][_0x54f43e(0x112)]==_0x54f43e(0x104))var _0x47815c=users[_0x54f43e(0x10d)];}}}}}}}_0x193373['render'](_0x54f43e(0x12d),{'success':_0x126857['flash'](_0x54f43e(0x12b)),'errors':_0x126857[_0x54f43e(0x132)](_0x54f43e(0x115)),'role':_0x17c65b,'profile':_0x434e05,'master_shop':_0x537597,'language':_0x47815c,'data':_0x369e90,'titleName':_0x225ba0});}catch(_0x459ce4){console['log'](_0x459ce4);}}),router[a0_0x367107(0x105)](a0_0x367107(0x118),auth,async(_0x6f9a4e,_0x5a08eb)=>{const _0x13f98f=a0_0x367107;try{const {id:_0x57a9c5,invoice:_0x1b7470,value:_0x520463}=_0x6f9a4e[_0x13f98f(0x114)],_0x499016=await sales[_0x13f98f(0x125)]({'_id':_0x57a9c5,'invoice':_0x1b7470});_0x499016[_0x13f98f(0x100)]=_0x520463;const _0x41e0da=await _0x499016[_0x13f98f(0x129)]();_0x5a08eb[_0x13f98f(0x120)]({'status':0xc8,'data':{'BoolData':_0x41e0da[_0x13f98f(0x100)],'InvoiceNum':_0x41e0da[_0x13f98f(0x133)]}});}catch(_0x4dc800){return console[_0x13f98f(0xf7)](_0x4dc800),{'status':0x194,'data':_0x4dc800[_0x13f98f(0xf8)]};}}),router[a0_0x367107(0x10f)]('/adjustment',auth,async(_0x287692,_0x5cd0ee)=>{const _0x561e44=a0_0x367107;try{const {username:_0x4d0791,email:_0x2fdde0,role:_0xd32292}=_0x287692[_0x561e44(0x11c)],_0x46425e=_0x287692[_0x561e44(0x11c)],_0x330f0b=await profile['findOne']({'email':_0x46425e[_0x561e44(0x123)]}),_0x4bfb46=await master_shop[_0x561e44(0x11f)](),_0x3fbf57=await adjustment[_0x561e44(0x11f)]({'finalize':_0x561e44(0x10e)}),_0x46f587={'name':_0x561e44(0x102),'code':_0x561e44(0x101)};if(_0x4bfb46[0x0]['language']==_0x561e44(0x111))var _0x2267d5=users[_0x561e44(0x110)];else{if(_0x4bfb46[0x0][_0x561e44(0x112)]==_0x561e44(0x134))var _0x2267d5=users[_0x561e44(0x134)];else{if(_0x4bfb46[0x0][_0x561e44(0x112)]==_0x561e44(0xfa))var _0x2267d5=users[_0x561e44(0xfa)];else{if(_0x4bfb46[0x0][_0x561e44(0x112)]==_0x561e44(0x11b))var _0x2267d5=users[_0x561e44(0x11b)];else{if(_0x4bfb46[0x0]['language']=='French')var _0x2267d5=users[_0x561e44(0x12e)];else{if(_0x4bfb46[0x0]['language']=='Portuguese\x20(BR)')var _0x2267d5=users[_0x561e44(0x10a)];else{if(_0x4bfb46[0x0]['language']==_0x561e44(0xfc))var _0x2267d5=users['Chinese'];else{if(_0x4bfb46[0x0][_0x561e44(0x112)]==_0x561e44(0x104))var _0x2267d5=users[_0x561e44(0x10d)];}}}}}}}_0x5cd0ee[_0x561e44(0x130)](_0x561e44(0x12d),{'success':_0x287692['flash'](_0x561e44(0x12b)),'errors':_0x287692['flash'](_0x561e44(0x115)),'role':_0x46425e,'profile':_0x330f0b,'master_shop':_0x4bfb46,'language':_0x2267d5,'data':_0x3fbf57,'titleName':_0x46f587});}catch(_0x4f6fb8){console[_0x561e44(0xf7)](_0x4f6fb8);}}),router['post'](a0_0x367107(0xfb),auth,async(_0x2b4fff,_0xfbe0db)=>{const _0x3deb18=a0_0x367107;try{const {id:_0x300a58,invoice:_0x13a945,value:_0xb2358c}=_0x2b4fff['body'],_0x5b62f3=await adjustment[_0x3deb18(0x125)]({'_id':_0x300a58,'invoice':_0x13a945});_0x5b62f3[_0x3deb18(0x100)]=_0xb2358c;const _0x35b7d6=await _0x5b62f3[_0x3deb18(0x129)]();_0xfbe0db[_0x3deb18(0x120)]({'status':0xc8,'data':{'BoolData':_0x35b7d6['isAllowEdit'],'InvoiceNum':_0x35b7d6[_0x3deb18(0x133)]}});}catch(_0x3544bd){return{'status':0x194,'data':_0x3544bd[_0x3deb18(0xf8)]};}}),router[a0_0x367107(0x10f)]('/transfer',auth,async(_0x426fde,_0x36320b)=>{const _0x3e6d87=a0_0x367107;try{const {username:_0x4a3c7c,email:_0x11c9fb,role:_0x265e4f}=_0x426fde['user'],_0x59ba9d=_0x426fde[_0x3e6d87(0x11c)],_0x33377e=await profile[_0x3e6d87(0x125)]({'email':_0x59ba9d[_0x3e6d87(0x123)]}),_0x31dd9a=await master_shop[_0x3e6d87(0x11f)](),_0x60c2f6=await transfers[_0x3e6d87(0x11f)]({'finalize':_0x3e6d87(0x10e)}),_0x18e0f1={'name':'Transfer\x20Raw\x20materials','code':_0x3e6d87(0x121)};if(_0x31dd9a[0x0]['language']=='English\x20(US)')var _0x146494=users[_0x3e6d87(0x110)];else{if(_0x31dd9a[0x0][_0x3e6d87(0x112)]==_0x3e6d87(0x134))var _0x146494=users[_0x3e6d87(0x134)];else{if(_0x31dd9a[0x0][_0x3e6d87(0x112)]==_0x3e6d87(0xfa))var _0x146494=users[_0x3e6d87(0xfa)];else{if(_0x31dd9a[0x0]['language']=='Spanish')var _0x146494=users[_0x3e6d87(0x11b)];else{if(_0x31dd9a[0x0][_0x3e6d87(0x112)]==_0x3e6d87(0x12e))var _0x146494=users['French'];else{if(_0x31dd9a[0x0][_0x3e6d87(0x112)]==_0x3e6d87(0x12f))var _0x146494=users['Portuguese'];else{if(_0x31dd9a[0x0][_0x3e6d87(0x112)]==_0x3e6d87(0xfc))var _0x146494=users[_0x3e6d87(0xfc)];else{if(_0x31dd9a[0x0]['language']==_0x3e6d87(0x104))var _0x146494=users['Arabic'];}}}}}}}_0x36320b[_0x3e6d87(0x130)](_0x3e6d87(0x12d),{'success':_0x426fde[_0x3e6d87(0x132)]('success'),'errors':_0x426fde[_0x3e6d87(0x132)](_0x3e6d87(0x115)),'role':_0x59ba9d,'profile':_0x33377e,'master_shop':_0x31dd9a,'language':_0x146494,'data':_0x60c2f6,'titleName':_0x18e0f1});}catch(_0x5b2d2a){console[_0x3e6d87(0xf7)](_0x5b2d2a);}}),router[a0_0x367107(0x105)](a0_0x367107(0x135),auth,async(_0x490d04,_0xcbbe65)=>{const _0x25b82a=a0_0x367107;try{const {id:_0xd15ebc,invoice:_0x2776e6,value:_0x2ea1bb}=_0x490d04[_0x25b82a(0x114)],_0x7780fe=await transfers[_0x25b82a(0x125)]({'_id':_0xd15ebc,'invoice':_0x2776e6});_0x7780fe[_0x25b82a(0x100)]=_0x2ea1bb;const _0x34f667=await _0x7780fe[_0x25b82a(0x129)]();_0xcbbe65[_0x25b82a(0x120)]({'status':0xc8,'data':{'BoolData':_0x34f667[_0x25b82a(0x100)],'InvoiceNum':_0x34f667[_0x25b82a(0x133)]}});}catch(_0x3721d1){return{'status':0x194,'data':_0x3721d1['message']};}}),router['get'](a0_0x367107(0x107),auth,async(_0x1fa6de,_0x3c6092)=>{const _0x11a999=a0_0x367107;try{const {username:_0x2306e4,email:_0x15ac93,role:_0x4921f9}=_0x1fa6de[_0x11a999(0x11c)],_0x556275=_0x1fa6de[_0x11a999(0x11c)],_0x5f3c1f=await profile[_0x11a999(0x125)]({'email':_0x556275[_0x11a999(0x123)]}),_0x7e3e25=await master_shop[_0x11a999(0x11f)](),_0x24c8e5=await sales_finished[_0x11a999(0x11f)]({'finalize':_0x11a999(0x10e)}),_0x48febb={'name':_0x11a999(0x11d),'code':_0x11a999(0x11e)};if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0x111))var _0x5c0041=users[_0x11a999(0x110)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]=='Hindi')var _0x5c0041=users[_0x11a999(0x134)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0xfa))var _0x5c0041=users[_0x11a999(0xfa)];else{if(_0x7e3e25[0x0]['language']==_0x11a999(0x11b))var _0x5c0041=users[_0x11a999(0x11b)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0x12e))var _0x5c0041=users[_0x11a999(0x12e)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0x12f))var _0x5c0041=users[_0x11a999(0x10a)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0xfc))var _0x5c0041=users[_0x11a999(0xfc)];else{if(_0x7e3e25[0x0][_0x11a999(0x112)]==_0x11a999(0x104))var _0x5c0041=users[_0x11a999(0x10d)];}}}}}}}_0x3c6092[_0x11a999(0x130)](_0x11a999(0x12d),{'success':_0x1fa6de[_0x11a999(0x132)](_0x11a999(0x12b)),'errors':_0x1fa6de[_0x11a999(0x132)](_0x11a999(0x115)),'role':_0x556275,'profile':_0x5f3c1f,'master_shop':_0x7e3e25,'language':_0x5c0041,'data':_0x24c8e5,'titleName':_0x48febb});}catch(_0x3c2111){console[_0x11a999(0xf7)](_0x3c2111);}}),router[a0_0x367107(0x105)]('/outgoing_finished',auth,async(_0x2a9963,_0x2dd641)=>{const _0x572296=a0_0x367107;try{const {id:_0x23be04,invoice:_0x57896f,value:_0x56e44f}=_0x2a9963[_0x572296(0x114)],_0x259e28=await sales_finished['findOne']({'_id':_0x23be04,'invoice':_0x57896f});_0x259e28['isAllowEdit']=_0x56e44f;const _0x5b5ae7=await _0x259e28[_0x572296(0x129)]();_0x2dd641[_0x572296(0x120)]({'status':0xc8,'data':{'BoolData':_0x5b5ae7[_0x572296(0x100)],'InvoiceNum':_0x5b5ae7[_0x572296(0x133)]}});}catch(_0x323b48){return console['log'](_0x323b48),{'status':0x194,'data':_0x323b48['message']};}}),router['get'](a0_0x367107(0x103),auth,async(_0x3bb466,_0x4c7bf2)=>{const _0xb1112d=a0_0x367107;try{const {username:_0x3f01d1,email:_0x415afa,role:_0x2b7854}=_0x3bb466[_0xb1112d(0x11c)],_0x29d409=_0x3bb466[_0xb1112d(0x11c)],_0x36a4b9=await profile[_0xb1112d(0x125)]({'email':_0x29d409[_0xb1112d(0x123)]}),_0x876599=await master_shop['find'](),_0x996629=await adjustment_finished[_0xb1112d(0x11f)]({'finalize':_0xb1112d(0x10e)}),_0x2aa38e={'name':_0xb1112d(0x122),'code':_0xb1112d(0x108)};if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x111))var _0x7d7431=users[_0xb1112d(0x110)];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x134))var _0x7d7431=users[_0xb1112d(0x134)];else{if(_0x876599[0x0][_0xb1112d(0x112)]=='German')var _0x7d7431=users['German'];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x11b))var _0x7d7431=users[_0xb1112d(0x11b)];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x12e))var _0x7d7431=users['French'];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x12f))var _0x7d7431=users[_0xb1112d(0x10a)];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0xfc))var _0x7d7431=users[_0xb1112d(0xfc)];else{if(_0x876599[0x0][_0xb1112d(0x112)]==_0xb1112d(0x104))var _0x7d7431=users[_0xb1112d(0x10d)];}}}}}}}_0x4c7bf2['render']('approvals_view',{'success':_0x3bb466[_0xb1112d(0x132)](_0xb1112d(0x12b)),'errors':_0x3bb466[_0xb1112d(0x132)]('errors'),'role':_0x29d409,'profile':_0x36a4b9,'master_shop':_0x876599,'language':_0x7d7431,'data':_0x996629,'titleName':_0x2aa38e});}catch(_0x484b5e){console['log'](_0x484b5e);}}),router[a0_0x367107(0x105)](a0_0x367107(0x103),auth,async(_0x5247ae,_0x4ab80)=>{const _0x3d7287=a0_0x367107;try{const {id:_0x225c82,invoice:_0x3c5a2c,value:_0x262290}=_0x5247ae['body'],_0x33a636=await adjustment_finished[_0x3d7287(0x125)]({'_id':_0x225c82,'invoice':_0x3c5a2c});_0x33a636[_0x3d7287(0x100)]=_0x262290;const _0x11b228=await _0x33a636[_0x3d7287(0x129)]();_0x4ab80['json']({'status':0xc8,'data':{'BoolData':_0x11b228[_0x3d7287(0x100)],'InvoiceNum':_0x11b228[_0x3d7287(0x133)]}});}catch(_0x3e49a){return{'status':0x194,'data':_0x3e49a[_0x3d7287(0xf8)]};}}),router['get'](a0_0x367107(0x12a),auth,async(_0xebe5b8,_0x120485)=>{const _0x557f33=a0_0x367107;try{const {username:_0x45fbd9,email:_0x4aade5,role:_0x5d0d46}=_0xebe5b8['user'],_0xb93b6b=_0xebe5b8[_0x557f33(0x11c)],_0x308300=await profile[_0x557f33(0x125)]({'email':_0xb93b6b[_0x557f33(0x123)]}),_0x70c208=await master_shop[_0x557f33(0x11f)](),_0x59a21b=await transfers_finished[_0x557f33(0x11f)]({'finalize':_0x557f33(0x10e)}),_0x3e85a8={'name':_0x557f33(0x117),'code':_0x557f33(0x124)};if(_0x70c208[0x0][_0x557f33(0x112)]==_0x557f33(0x111))var _0xa6f4ab=users[_0x557f33(0x110)];else{if(_0x70c208[0x0][_0x557f33(0x112)]==_0x557f33(0x134))var _0xa6f4ab=users[_0x557f33(0x134)];else{if(_0x70c208[0x0][_0x557f33(0x112)]==_0x557f33(0xfa))var _0xa6f4ab=users[_0x557f33(0xfa)];else{if(_0x70c208[0x0][_0x557f33(0x112)]==_0x557f33(0x11b))var _0xa6f4ab=users[_0x557f33(0x11b)];else{if(_0x70c208[0x0][_0x557f33(0x112)]==_0x557f33(0x12e))var _0xa6f4ab=users['French'];else{if(_0x70c208[0x0][_0x557f33(0x112)]=='Portuguese\x20(BR)')var _0xa6f4ab=users[_0x557f33(0x10a)];else{if(_0x70c208[0x0]['language']==_0x557f33(0xfc))var _0xa6f4ab=users[_0x557f33(0xfc)];else{if(_0x70c208[0x0]['language']==_0x557f33(0x104))var _0xa6f4ab=users[_0x557f33(0x10d)];}}}}}}}_0x120485['render'](_0x557f33(0x12d),{'success':_0xebe5b8['flash'](_0x557f33(0x12b)),'errors':_0xebe5b8[_0x557f33(0x132)](_0x557f33(0x115)),'role':_0xb93b6b,'profile':_0x308300,'master_shop':_0x70c208,'language':_0xa6f4ab,'data':_0x59a21b,'titleName':_0x3e85a8});}catch(_0x2d8f2c){console['log'](_0x2d8f2c);}}),router['post'](a0_0x367107(0x12a),auth,async(_0x1db07c,_0x1daa22)=>{const _0x4646b8=a0_0x367107;try{const {id:_0x11ec2d,invoice:_0x403764,value:_0x36097c}=_0x1db07c['body'],_0xfe2121=await transfers_finished['findOne']({'_id':_0x11ec2d,'invoice':_0x403764});_0xfe2121['isAllowEdit']=_0x36097c;const _0x4639b6=await _0xfe2121[_0x4646b8(0x129)]();_0x1daa22[_0x4646b8(0x120)]({'status':0xc8,'data':{'BoolData':_0x4639b6[_0x4646b8(0x100)],'InvoiceNum':_0x4639b6[_0x4646b8(0x133)]}});}catch(_0x5c3f69){return{'status':0x194,'data':_0x5c3f69['message']};}}),module[a0_0x367107(0x131)]=router;