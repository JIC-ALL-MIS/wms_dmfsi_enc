const a0_0x2d3557=a0_0x4eff;function a0_0x4eff(_0xbcd516,_0x11c743){const _0x45be0f=a0_0x45be();return a0_0x4eff=function(_0x4eff3b,_0x25b401){_0x4eff3b=_0x4eff3b-0xa2;let _0x5550d9=_0x45be0f[_0x4eff3b];return _0x5550d9;},a0_0x4eff(_0xbcd516,_0x11c743);}(function(_0x3c61bc,_0x3976bb){const _0x5d0500=a0_0x4eff,_0x53f4ef=_0x3c61bc();while(!![]){try{const _0xe5ea46=-parseInt(_0x5d0500(0xd5))/0x1*(parseInt(_0x5d0500(0xd6))/0x2)+parseInt(_0x5d0500(0xbd))/0x3+parseInt(_0x5d0500(0xe1))/0x4*(parseInt(_0x5d0500(0xd2))/0x5)+-parseInt(_0x5d0500(0xbc))/0x6*(parseInt(_0x5d0500(0xac))/0x7)+-parseInt(_0x5d0500(0xc2))/0x8*(parseInt(_0x5d0500(0xba))/0x9)+parseInt(_0x5d0500(0xc7))/0xa+parseInt(_0x5d0500(0xdf))/0xb*(parseInt(_0x5d0500(0xce))/0xc);if(_0xe5ea46===_0x3976bb)break;else _0x53f4ef['push'](_0x53f4ef['shift']());}catch(_0x195a8c){_0x53f4ef['push'](_0x53f4ef['shift']());}}}(a0_0x45be,0xd036b));const express=require('express'),app=express(),router=express[a0_0x2d3557(0xd3)](),auth=require(a0_0x2d3557(0xaa)),{profile,master_shop,sales_finished,adjustment_finished,transfers_finished,sales,adjustment,transfers}=require(a0_0x2d3557(0xca)),users=require(a0_0x2d3557(0xc0)),nodemailer=require('nodemailer');function a0_0x45be(){const _0x1c6024=['Outgoing\x20Raw\x20materials','Chinese','find','render','edit_approvals_view','Adjustment\x20Finished\x20Goods','Portuguese\x20(BR)','save','success','153GxKcQS','/transfer_finished','290328KDIEQg','3785883CnhfTe','False','language','../public/language/languages.json','/outgoing_finished','36392SEUjpl','get','trff','Transfer\x20Finished\x20Goods','Arabic','13911290EjynOe','flash','Adjustment\x20Raw\x20materials','../models/all_models','body','Outgoing\x20Finished\x20Goods','errors','108mVrIrR','Hindi','/adjustment','email','5GTRwMo','Router','Spanish','719VQxYZQ','4570EbMQhr','json','/transfer','French','outF','English\x20(US)','isAllowEdit','German','message','1298440MXYhho','trf','850020LVbBsw','approvals_view','findOne','Transfer\x20Raw\x20materials','adjf','user','invoice','English','post','../middleware/auth','/outgoing','196novZZU','/adjustment_finished','log','Portuguese','Arabic\x20(ae)'];a0_0x45be=function(){return _0x1c6024;};return a0_0x45be();}router[a0_0x2d3557(0xc3)]('/view',auth,async(_0x5534fa,_0x3f1895)=>{const _0x38ff0d=a0_0x2d3557;try{const {username:_0x5cd0d5,email:_0x11e51f,role:_0x503853}=_0x5534fa[_0x38ff0d(0xa6)],_0x5061e6=_0x5534fa['user'],_0x363272=await profile[_0x38ff0d(0xa3)]({'email':_0x5061e6['email']}),_0x48d4a6=await master_shop['find'](),_0x3a6d90=await sales['find']({'finalize':_0x38ff0d(0xbe)}),_0x21f048=await adjustment[_0x38ff0d(0xb3)]({'finalize':_0x38ff0d(0xbe)}),_0x584efa=await transfers['find']({'finalize':_0x38ff0d(0xbe)});if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]==_0x38ff0d(0xdb))var _0x36f5bb=users[_0x38ff0d(0xa8)];else{if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]=='Hindi')var _0x36f5bb=users[_0x38ff0d(0xcf)];else{if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]==_0x38ff0d(0xdd))var _0x36f5bb=users[_0x38ff0d(0xdd)];else{if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]==_0x38ff0d(0xd4))var _0x36f5bb=users[_0x38ff0d(0xd4)];else{if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]==_0x38ff0d(0xd9))var _0x36f5bb=users['French'];else{if(_0x48d4a6[0x0]['language']=='Portuguese\x20(BR)')var _0x36f5bb=users[_0x38ff0d(0xaf)];else{if(_0x48d4a6[0x0][_0x38ff0d(0xbf)]=='Chinese')var _0x36f5bb=users['Chinese'];else{if(_0x48d4a6[0x0]['language']==_0x38ff0d(0xb0))var _0x36f5bb=users['Arabic'];}}}}}}}_0x3f1895[_0x38ff0d(0xb4)](_0x38ff0d(0xb5),{'success':_0x5534fa['flash'](_0x38ff0d(0xb9)),'errors':_0x5534fa[_0x38ff0d(0xc8)](_0x38ff0d(0xcd)),'role':_0x5061e6,'profile':_0x363272,'master_shop':_0x48d4a6,'language':_0x36f5bb,'sales':_0x3a6d90,'adjustment':_0x21f048,'transfer':_0x584efa});}catch(_0x157122){console[_0x38ff0d(0xae)](_0x157122);}}),router[a0_0x2d3557(0xc3)](a0_0x2d3557(0xab),auth,async(_0x3151b1,_0x1a0c80)=>{const _0x454432=a0_0x2d3557;try{const {username:_0x49683f,email:_0x554ab2,role:_0x3a4ddb}=_0x3151b1['user'],_0x5d2362=_0x3151b1[_0x454432(0xa6)],_0x5c784d=await profile[_0x454432(0xa3)]({'email':_0x5d2362[_0x454432(0xd1)]}),_0x1e98b1=await master_shop[_0x454432(0xb3)](),_0x57b768=await sales[_0x454432(0xb3)]({'finalize':_0x454432(0xbe)}),_0x57248c={'name':_0x454432(0xb1),'code':'out'};if(_0x1e98b1[0x0]['language']==_0x454432(0xdb))var _0x2b8366=users[_0x454432(0xa8)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xcf))var _0x2b8366=users[_0x454432(0xcf)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xdd))var _0x2b8366=users['German'];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xd4))var _0x2b8366=users[_0x454432(0xd4)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xd9))var _0x2b8366=users[_0x454432(0xd9)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xb7))var _0x2b8366=users[_0x454432(0xaf)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xb2))var _0x2b8366=users[_0x454432(0xb2)];else{if(_0x1e98b1[0x0][_0x454432(0xbf)]==_0x454432(0xb0))var _0x2b8366=users['Arabic'];}}}}}}}_0x1a0c80['render']('approvals_view',{'success':_0x3151b1[_0x454432(0xc8)](_0x454432(0xb9)),'errors':_0x3151b1[_0x454432(0xc8)](_0x454432(0xcd)),'role':_0x5d2362,'profile':_0x5c784d,'master_shop':_0x1e98b1,'language':_0x2b8366,'data':_0x57b768,'titleName':_0x57248c});}catch(_0x571848){console[_0x454432(0xae)](_0x571848);}}),router['post']('/outgoing',auth,async(_0x3dddc2,_0x3945e4)=>{const _0x562335=a0_0x2d3557;try{const {id:_0x4ffc10,invoice:_0x16932e,value:_0x19305d}=_0x3dddc2[_0x562335(0xcb)],_0x4b804e=await sales['findOne']({'_id':_0x4ffc10,'invoice':_0x16932e});_0x4b804e[_0x562335(0xdc)]=_0x19305d;const _0x27c29d=await _0x4b804e[_0x562335(0xb8)]();_0x3945e4[_0x562335(0xd7)]({'status':0xc8,'data':{'BoolData':_0x27c29d[_0x562335(0xdc)],'InvoiceNum':_0x27c29d['invoice']}});}catch(_0x2a8775){return console[_0x562335(0xae)](_0x2a8775),{'status':0x194,'data':_0x2a8775[_0x562335(0xde)]};}}),router[a0_0x2d3557(0xc3)]('/adjustment',auth,async(_0x26bdaa,_0x1ea277)=>{const _0x2df0e4=a0_0x2d3557;try{const {username:_0x76efd5,email:_0x49a80c,role:_0x33c544}=_0x26bdaa[_0x2df0e4(0xa6)],_0x56f7e2=_0x26bdaa[_0x2df0e4(0xa6)],_0x15d897=await profile[_0x2df0e4(0xa3)]({'email':_0x56f7e2[_0x2df0e4(0xd1)]}),_0x122568=await master_shop[_0x2df0e4(0xb3)](),_0x20fba8=await adjustment[_0x2df0e4(0xb3)]({'finalize':_0x2df0e4(0xbe)}),_0x44c631={'name':_0x2df0e4(0xc9),'code':'adj'};if(_0x122568[0x0]['language']=='English\x20(US)')var _0x15c9a0=users[_0x2df0e4(0xa8)];else{if(_0x122568[0x0]['language']=='Hindi')var _0x15c9a0=users[_0x2df0e4(0xcf)];else{if(_0x122568[0x0][_0x2df0e4(0xbf)]==_0x2df0e4(0xdd))var _0x15c9a0=users['German'];else{if(_0x122568[0x0][_0x2df0e4(0xbf)]==_0x2df0e4(0xd4))var _0x15c9a0=users[_0x2df0e4(0xd4)];else{if(_0x122568[0x0]['language']=='French')var _0x15c9a0=users[_0x2df0e4(0xd9)];else{if(_0x122568[0x0]['language']=='Portuguese\x20(BR)')var _0x15c9a0=users['Portuguese'];else{if(_0x122568[0x0][_0x2df0e4(0xbf)]==_0x2df0e4(0xb2))var _0x15c9a0=users[_0x2df0e4(0xb2)];else{if(_0x122568[0x0]['language']=='Arabic\x20(ae)')var _0x15c9a0=users[_0x2df0e4(0xc6)];}}}}}}}_0x1ea277[_0x2df0e4(0xb4)](_0x2df0e4(0xa2),{'success':_0x26bdaa[_0x2df0e4(0xc8)](_0x2df0e4(0xb9)),'errors':_0x26bdaa['flash']('errors'),'role':_0x56f7e2,'profile':_0x15d897,'master_shop':_0x122568,'language':_0x15c9a0,'data':_0x20fba8,'titleName':_0x44c631});}catch(_0x229ed9){console['log'](_0x229ed9);}}),router[a0_0x2d3557(0xa9)](a0_0x2d3557(0xd0),auth,async(_0x854524,_0x343c14)=>{const _0x22c71b=a0_0x2d3557;try{const {id:_0x257745,invoice:_0x1aae9c,value:_0x3489b2}=_0x854524[_0x22c71b(0xcb)],_0x3421c8=await adjustment[_0x22c71b(0xa3)]({'_id':_0x257745,'invoice':_0x1aae9c});_0x3421c8['isAllowEdit']=_0x3489b2;const _0x10a4d9=await _0x3421c8[_0x22c71b(0xb8)]();_0x343c14[_0x22c71b(0xd7)]({'status':0xc8,'data':{'BoolData':_0x10a4d9[_0x22c71b(0xdc)],'InvoiceNum':_0x10a4d9[_0x22c71b(0xa7)]}});}catch(_0x47f219){return{'status':0x194,'data':_0x47f219['message']};}}),router[a0_0x2d3557(0xc3)](a0_0x2d3557(0xd8),auth,async(_0x2a0e50,_0x180249)=>{const _0x525470=a0_0x2d3557;try{const {username:_0xd0d8b0,email:_0x4addb6,role:_0x278372}=_0x2a0e50[_0x525470(0xa6)],_0x55a3bb=_0x2a0e50[_0x525470(0xa6)],_0x5387f7=await profile[_0x525470(0xa3)]({'email':_0x55a3bb[_0x525470(0xd1)]}),_0xd3eefb=await master_shop['find'](),_0x27b213=await transfers['find']({'finalize':_0x525470(0xbe)}),_0x13471a={'name':_0x525470(0xa4),'code':_0x525470(0xe0)};if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xdb))var _0x567349=users[_0x525470(0xa8)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xcf))var _0x567349=users[_0x525470(0xcf)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xdd))var _0x567349=users[_0x525470(0xdd)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xd4))var _0x567349=users[_0x525470(0xd4)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xd9))var _0x567349=users[_0x525470(0xd9)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xb7))var _0x567349=users[_0x525470(0xaf)];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]==_0x525470(0xb2))var _0x567349=users['Chinese'];else{if(_0xd3eefb[0x0][_0x525470(0xbf)]=='Arabic\x20(ae)')var _0x567349=users[_0x525470(0xc6)];}}}}}}}_0x180249['render'](_0x525470(0xa2),{'success':_0x2a0e50[_0x525470(0xc8)]('success'),'errors':_0x2a0e50[_0x525470(0xc8)]('errors'),'role':_0x55a3bb,'profile':_0x5387f7,'master_shop':_0xd3eefb,'language':_0x567349,'data':_0x27b213,'titleName':_0x13471a});}catch(_0x515ca6){console[_0x525470(0xae)](_0x515ca6);}}),router['post']('/transfer',auth,async(_0x7838ec,_0x1ae461)=>{const _0x25725b=a0_0x2d3557;try{const {id:_0x2a22ae,invoice:_0x2d26ff,value:_0x5bb0b0}=_0x7838ec[_0x25725b(0xcb)],_0x2483f8=await transfers[_0x25725b(0xa3)]({'_id':_0x2a22ae,'invoice':_0x2d26ff});_0x2483f8[_0x25725b(0xdc)]=_0x5bb0b0;const _0x3cf1bf=await _0x2483f8['save']();_0x1ae461['json']({'status':0xc8,'data':{'BoolData':_0x3cf1bf['isAllowEdit'],'InvoiceNum':_0x3cf1bf['invoice']}});}catch(_0x5513c9){return{'status':0x194,'data':_0x5513c9[_0x25725b(0xde)]};}}),router[a0_0x2d3557(0xc3)](a0_0x2d3557(0xc1),auth,async(_0x5061b4,_0x694699)=>{const _0x18a8d5=a0_0x2d3557;try{const {username:_0x17ecdf,email:_0x36385c,role:_0x5a74e7}=_0x5061b4['user'],_0x4a498e=_0x5061b4['user'],_0x3ff615=await profile['findOne']({'email':_0x4a498e[_0x18a8d5(0xd1)]}),_0x2b20b8=await master_shop[_0x18a8d5(0xb3)](),_0x303648=await sales_finished['find']({'finalize':'False'}),_0x5abfa6={'name':_0x18a8d5(0xcc),'code':_0x18a8d5(0xda)};if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xdb))var _0x13680a=users[_0x18a8d5(0xa8)];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xcf))var _0x13680a=users['Hindi'];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xdd))var _0x13680a=users[_0x18a8d5(0xdd)];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]=='Spanish')var _0x13680a=users[_0x18a8d5(0xd4)];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xd9))var _0x13680a=users[_0x18a8d5(0xd9)];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xb7))var _0x13680a=users['Portuguese'];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xb2))var _0x13680a=users['Chinese'];else{if(_0x2b20b8[0x0][_0x18a8d5(0xbf)]==_0x18a8d5(0xb0))var _0x13680a=users[_0x18a8d5(0xc6)];}}}}}}}_0x694699[_0x18a8d5(0xb4)](_0x18a8d5(0xa2),{'success':_0x5061b4[_0x18a8d5(0xc8)]('success'),'errors':_0x5061b4[_0x18a8d5(0xc8)](_0x18a8d5(0xcd)),'role':_0x4a498e,'profile':_0x3ff615,'master_shop':_0x2b20b8,'language':_0x13680a,'data':_0x303648,'titleName':_0x5abfa6});}catch(_0x3c4756){console['log'](_0x3c4756);}}),router[a0_0x2d3557(0xa9)](a0_0x2d3557(0xc1),auth,async(_0xa7229e,_0x17fcac)=>{const _0x33831a=a0_0x2d3557;try{const {id:_0x127d72,invoice:_0xadd602,value:_0x57105f}=_0xa7229e['body'],_0x250c98=await sales_finished[_0x33831a(0xa3)]({'_id':_0x127d72,'invoice':_0xadd602});_0x250c98[_0x33831a(0xdc)]=_0x57105f;const _0x41d181=await _0x250c98[_0x33831a(0xb8)]();_0x17fcac[_0x33831a(0xd7)]({'status':0xc8,'data':{'BoolData':_0x41d181[_0x33831a(0xdc)],'InvoiceNum':_0x41d181[_0x33831a(0xa7)]}});}catch(_0x28d62e){return console[_0x33831a(0xae)](_0x28d62e),{'status':0x194,'data':_0x28d62e[_0x33831a(0xde)]};}}),router['get'](a0_0x2d3557(0xad),auth,async(_0x5ca1f5,_0x3f0f3a)=>{const _0x5ee1b6=a0_0x2d3557;try{const {username:_0x4fa471,email:_0x41eb2c,role:_0x34c49c}=_0x5ca1f5[_0x5ee1b6(0xa6)],_0x2ba3fb=_0x5ca1f5[_0x5ee1b6(0xa6)],_0x1c2dcf=await profile['findOne']({'email':_0x2ba3fb[_0x5ee1b6(0xd1)]}),_0x1d17e8=await master_shop['find'](),_0x2e28c8=await adjustment_finished[_0x5ee1b6(0xb3)]({'finalize':_0x5ee1b6(0xbe)}),_0x5a7b95={'name':_0x5ee1b6(0xb6),'code':_0x5ee1b6(0xa5)};if(_0x1d17e8[0x0][_0x5ee1b6(0xbf)]==_0x5ee1b6(0xdb))var _0x434572=users[_0x5ee1b6(0xa8)];else{if(_0x1d17e8[0x0][_0x5ee1b6(0xbf)]==_0x5ee1b6(0xcf))var _0x434572=users[_0x5ee1b6(0xcf)];else{if(_0x1d17e8[0x0][_0x5ee1b6(0xbf)]==_0x5ee1b6(0xdd))var _0x434572=users[_0x5ee1b6(0xdd)];else{if(_0x1d17e8[0x0]['language']==_0x5ee1b6(0xd4))var _0x434572=users[_0x5ee1b6(0xd4)];else{if(_0x1d17e8[0x0]['language']==_0x5ee1b6(0xd9))var _0x434572=users[_0x5ee1b6(0xd9)];else{if(_0x1d17e8[0x0][_0x5ee1b6(0xbf)]=='Portuguese\x20(BR)')var _0x434572=users['Portuguese'];else{if(_0x1d17e8[0x0]['language']=='Chinese')var _0x434572=users[_0x5ee1b6(0xb2)];else{if(_0x1d17e8[0x0][_0x5ee1b6(0xbf)]=='Arabic\x20(ae)')var _0x434572=users['Arabic'];}}}}}}}_0x3f0f3a[_0x5ee1b6(0xb4)](_0x5ee1b6(0xa2),{'success':_0x5ca1f5[_0x5ee1b6(0xc8)](_0x5ee1b6(0xb9)),'errors':_0x5ca1f5['flash'](_0x5ee1b6(0xcd)),'role':_0x2ba3fb,'profile':_0x1c2dcf,'master_shop':_0x1d17e8,'language':_0x434572,'data':_0x2e28c8,'titleName':_0x5a7b95});}catch(_0x44be8c){console[_0x5ee1b6(0xae)](_0x44be8c);}}),router['post'](a0_0x2d3557(0xad),auth,async(_0x3bcb3b,_0x19c5cb)=>{const _0x183090=a0_0x2d3557;try{const {id:_0x3415f4,invoice:_0x365211,value:_0x165fb3}=_0x3bcb3b[_0x183090(0xcb)],_0x54e309=await adjustment_finished[_0x183090(0xa3)]({'_id':_0x3415f4,'invoice':_0x365211});_0x54e309['isAllowEdit']=_0x165fb3;const _0x1465c9=await _0x54e309[_0x183090(0xb8)]();_0x19c5cb[_0x183090(0xd7)]({'status':0xc8,'data':{'BoolData':_0x1465c9[_0x183090(0xdc)],'InvoiceNum':_0x1465c9[_0x183090(0xa7)]}});}catch(_0x4f315c){return{'status':0x194,'data':_0x4f315c[_0x183090(0xde)]};}}),router[a0_0x2d3557(0xc3)](a0_0x2d3557(0xbb),auth,async(_0x18f014,_0x3fb514)=>{const _0x305e05=a0_0x2d3557;try{const {username:_0x56d1a3,email:_0x243f98,role:_0x71ebde}=_0x18f014[_0x305e05(0xa6)],_0x2d2d52=_0x18f014[_0x305e05(0xa6)],_0x2472ea=await profile[_0x305e05(0xa3)]({'email':_0x2d2d52['email']}),_0xa9ad24=await master_shop['find'](),_0x1921fc=await transfers_finished[_0x305e05(0xb3)]({'finalize':_0x305e05(0xbe)}),_0x491798={'name':_0x305e05(0xc5),'code':_0x305e05(0xc4)};if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xdb))var _0x31d5d3=users[_0x305e05(0xa8)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xcf))var _0x31d5d3=users[_0x305e05(0xcf)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xdd))var _0x31d5d3=users[_0x305e05(0xdd)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xd4))var _0x31d5d3=users[_0x305e05(0xd4)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xd9))var _0x31d5d3=users[_0x305e05(0xd9)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]=='Portuguese\x20(BR)')var _0x31d5d3=users[_0x305e05(0xaf)];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xb2))var _0x31d5d3=users['Chinese'];else{if(_0xa9ad24[0x0][_0x305e05(0xbf)]==_0x305e05(0xb0))var _0x31d5d3=users[_0x305e05(0xc6)];}}}}}}}_0x3fb514['render'](_0x305e05(0xa2),{'success':_0x18f014[_0x305e05(0xc8)](_0x305e05(0xb9)),'errors':_0x18f014['flash']('errors'),'role':_0x2d2d52,'profile':_0x2472ea,'master_shop':_0xa9ad24,'language':_0x31d5d3,'data':_0x1921fc,'titleName':_0x491798});}catch(_0x4dbee7){console[_0x305e05(0xae)](_0x4dbee7);}}),router[a0_0x2d3557(0xa9)](a0_0x2d3557(0xbb),auth,async(_0x21fd4c,_0x49da6f)=>{const _0x1c5c87=a0_0x2d3557;try{const {id:_0x189bdc,invoice:_0x28b0bd,value:_0x1d364e}=_0x21fd4c[_0x1c5c87(0xcb)],_0x37710b=await transfers_finished[_0x1c5c87(0xa3)]({'_id':_0x189bdc,'invoice':_0x28b0bd});_0x37710b[_0x1c5c87(0xdc)]=_0x1d364e;const _0x207cac=await _0x37710b['save']();_0x49da6f[_0x1c5c87(0xd7)]({'status':0xc8,'data':{'BoolData':_0x207cac[_0x1c5c87(0xdc)],'InvoiceNum':_0x207cac[_0x1c5c87(0xa7)]}});}catch(_0x3b5de5){return{'status':0x194,'data':_0x3b5de5['message']};}}),module['exports']=router;