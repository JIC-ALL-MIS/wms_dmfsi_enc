const a0_0x262874=a0_0x1fd5;function a0_0x1fd5(_0x541387,_0x2317e6){const _0x5c2471=a0_0x5c24();return a0_0x1fd5=function(_0x1fd5ac,_0x371b3e){_0x1fd5ac=_0x1fd5ac-0x1b6;let _0x580a7d=_0x5c2471[_0x1fd5ac];return _0x580a7d;},a0_0x1fd5(_0x541387,_0x2317e6);}(function(_0x5c4aaf,_0x41d333){const _0x4aaedc=a0_0x1fd5,_0x4e7669=_0x5c4aaf();while(!![]){try{const _0xfce5ba=parseInt(_0x4aaedc(0x1df))/0x1+parseInt(_0x4aaedc(0x1d2))/0x2+parseInt(_0x4aaedc(0x1ed))/0x3+-parseInt(_0x4aaedc(0x1dc))/0x4*(-parseInt(_0x4aaedc(0x219))/0x5)+-parseInt(_0x4aaedc(0x1e6))/0x6*(parseInt(_0x4aaedc(0x1b8))/0x7)+-parseInt(_0x4aaedc(0x1f6))/0x8+-parseInt(_0x4aaedc(0x1c6))/0x9;if(_0xfce5ba===_0x41d333)break;else _0x4e7669['push'](_0x4e7669['shift']());}catch(_0xa30aab){_0x4e7669['push'](_0x4e7669['shift']());}}}(a0_0x5c24,0x35d83));const express=require(a0_0x262874(0x1da)),app=express(),router=express[a0_0x262874(0x1d7)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x262874(0x1f8));router[a0_0x262874(0x1ef)](a0_0x262874(0x223),auth,async(_0x22e577,_0x40f588)=>{const _0x78bb88=a0_0x262874;try{const {username:_0x70d36d,email:_0x5e4285,role:_0x1676a3}=_0x22e577[_0x78bb88(0x202)],_0x10ca55=_0x22e577[_0x78bb88(0x202)],_0x249783=await profile['findOne']({'email':_0x10ca55['email']}),_0x255086=await master_shop['find']();console[_0x78bb88(0x1f1)](_0x78bb88(0x208),_0x255086);const _0xbec258=await purchases_return_finished[_0x78bb88(0x201)]([{'$lookup':{'from':_0x78bb88(0x1fc),'localField':_0x78bb88(0x1fc),'foreignField':'name','as':'supplier_docs'}},{'$unwind':'$return_product'},{'$unwind':_0x78bb88(0x1f4)},{'$group':{'_id':_0x78bb88(0x1ec),'invoice':{'$first':_0x78bb88(0x1d3)},'date':{'$first':_0x78bb88(0x1e3)},'suppliers':{'$first':_0x78bb88(0x211)},'warehouse_name':{'$first':_0x78bb88(0x209)},'product_name':{'$first':'$return_product.product_name'},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0x78bb88(0x1ce)},'total':{'$sum':_0x78bb88(0x1db)},'note':{'$first':_0x78bb88(0x20c)},'total_amount':{'$first':_0x78bb88(0x1fa)},'discount':{'$first':'$discount'},'receivable':{'$first':'$receivable'},'received':{'$first':'$received'},'due_amount':{'$first':_0x78bb88(0x200)},'mobile':{'$first':_0x78bb88(0x1d5)},'email':{'$first':_0x78bb88(0x204)},'address':{'$first':'$supplier_docs.address'},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console['log'](_0xbec258);if(_0x255086[0x0][_0x78bb88(0x1f9)]==_0x78bb88(0x1d0)){var _0xa5ea1=users[_0x78bb88(0x1cf)];console[_0x78bb88(0x1f1)](_0xa5ea1);}else{if(_0x255086[0x0][_0x78bb88(0x1f9)]==_0x78bb88(0x1bc))var _0xa5ea1=users[_0x78bb88(0x1bc)];else{if(_0x255086[0x0][_0x78bb88(0x1f9)]=='German')var _0xa5ea1=users[_0x78bb88(0x1dd)];else{if(_0x255086[0x0][_0x78bb88(0x1f9)]==_0x78bb88(0x226))var _0xa5ea1=users[_0x78bb88(0x226)];else{if(_0x255086[0x0][_0x78bb88(0x1f9)]==_0x78bb88(0x1c3))var _0xa5ea1=users[_0x78bb88(0x1c3)];else{if(_0x255086[0x0]['language']==_0x78bb88(0x1d4))var _0xa5ea1=users['Portuguese'];else{if(_0x255086[0x0][_0x78bb88(0x1f9)]==_0x78bb88(0x1e2))var _0xa5ea1=users[_0x78bb88(0x1e2)];else{if(_0x255086[0x0][_0x78bb88(0x1f9)]=='Arabic\x20(ae)')var _0xa5ea1=users[_0x78bb88(0x217)];}}}}}}}_0x40f588[_0x78bb88(0x20f)]('purchases_return_finished',{'success':_0x22e577[_0x78bb88(0x1d9)](_0x78bb88(0x224)),'errors':_0x22e577[_0x78bb88(0x1d9)](_0x78bb88(0x1c5)),'role':_0x10ca55,'profile':_0x249783,'master_shop':_0x255086,'user':_0xbec258,'language':_0xa5ea1});}catch(_0x3fb805){console[_0x78bb88(0x1f1)](_0x3fb805);}}),router[a0_0x262874(0x1ef)](a0_0x262874(0x213),auth,async(_0x1e86b4,_0x4b6d31)=>{const _0x51c297=a0_0x262874;try{const {username:_0x22eed0,email:_0x19e489,role:_0x2c24a4}=_0x1e86b4[_0x51c297(0x202)],_0x305251=_0x1e86b4[_0x51c297(0x202)],_0x282787=await profile[_0x51c297(0x1eb)]({'email':_0x305251['email']}),_0x26de3b=await product[_0x51c297(0x221)]({}),_0x50c99d=await master_shop[_0x51c297(0x221)](),_0x32808a=_0x1e86b4[_0x51c297(0x220)]['id'],_0x450942=await purchases_return_finished[_0x51c297(0x21a)](_0x32808a),_0x565779=await warehouse[_0x51c297(0x201)]([{'$match':{'name':_0x450942[_0x51c297(0x1cc)],'room':_0x450942[_0x51c297(0x218)],'warehouse_category':_0x51c297(0x1e7)}},{'$unwind':_0x51c297(0x206)},{'$group':{'_id':_0x51c297(0x1cd),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x51c297(0x1b7)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x51c297(0x215)},'type':{'$first':_0x51c297(0x20a)},'floorlevel':{'$first':_0x51c297(0x1c4)},'primary_code':{'$first':_0x51c297(0x227)},'secondary_code':{'$first':_0x51c297(0x203)},'product_code':{'$first':_0x51c297(0x21f)},'storage':{'$first':_0x51c297(0x1fe)},'rack':{'$first':_0x51c297(0x1e8)}}}]);warehouse_data=await warehouse[_0x51c297(0x201)]([{'$match':{'status':_0x51c297(0x212),'name':_0x51c297(0x207),'warehouse_category':_0x51c297(0x1e7)}},{'$group':{'_id':_0x51c297(0x1c0),'name':{'$first':_0x51c297(0x1c0)}}},{'$sort':{'name':0x1}}]),console[_0x51c297(0x1f1)](_0x51c297(0x1c1),_0x565779);if(_0x50c99d[0x0][_0x51c297(0x1f9)]==_0x51c297(0x1d0)){var _0xaa2b6d=users[_0x51c297(0x1cf)];console[_0x51c297(0x1f1)](_0xaa2b6d);}else{if(_0x50c99d[0x0][_0x51c297(0x1f9)]=='Hindi')var _0xaa2b6d=users[_0x51c297(0x1bc)];else{if(_0x50c99d[0x0][_0x51c297(0x1f9)]==_0x51c297(0x1dd))var _0xaa2b6d=users['German'];else{if(_0x50c99d[0x0]['language']==_0x51c297(0x226))var _0xaa2b6d=users[_0x51c297(0x226)];else{if(_0x50c99d[0x0]['language']==_0x51c297(0x1c3))var _0xaa2b6d=users['French'];else{if(_0x50c99d[0x0][_0x51c297(0x1f9)]==_0x51c297(0x1d4))var _0xaa2b6d=users['Portuguese'];else{if(_0x50c99d[0x0][_0x51c297(0x1f9)]==_0x51c297(0x1e2))var _0xaa2b6d=users[_0x51c297(0x1e2)];else{if(_0x50c99d[0x0]['language']==_0x51c297(0x1e9))var _0xaa2b6d=users[_0x51c297(0x217)];}}}}}}}_0x4b6d31[_0x51c297(0x20f)]('return_purchase_edit_finished',{'success':_0x1e86b4[_0x51c297(0x1d9)](_0x51c297(0x224)),'errors':_0x1e86b4[_0x51c297(0x1d9)]('errors'),'role':_0x305251,'master_shop':_0x50c99d,'profile':_0x282787,'user':_0x450942,'stock':_0x565779,'product':_0x26de3b,'language':_0xaa2b6d,'warehouse':warehouse_data});}catch(_0x192ba7){console[_0x51c297(0x1f1)](_0x192ba7);}}),router[a0_0x262874(0x210)](a0_0x262874(0x213),auth,async(_0x18dc57,_0x2dd62a)=>{const _0x293561=a0_0x262874;try{const _0x37b535=_0x18dc57['params']['id'],_0x26b8ab=await purchases_return_finished[_0x293561(0x1eb)]({'invoice':_0x18dc57['body'][_0x293561(0x1f5)]}),_0x3ad41f=await warehouse['findOne']({'name':_0x26b8ab['to_warehouse_name'],'room':_0x26b8ab[_0x293561(0x1c2)],'warehouse_category':'Finished\x20Goods'}),{invoice:_0x1211cd,suppliers:_0x1aa4fe,date:_0x5eb13c,warehouse_name:_0x7618f5,product_name:_0x3cdecb,purchase_quantity:_0x4f4156,stocks:_0x2fc812,return_qty:_0x33ef86,note:_0x20e321,Room_name:_0x17048d,level:_0x4fa48f,isle:_0xb8f6e2,pallet:_0x14aae5,to_warehouse_name:_0x524300,to_Room_name:_0x21c16d}=_0x18dc57[_0x293561(0x1c8)];if(typeof _0x3cdecb=='string')var _0x585a94=[_0x18dc57[_0x293561(0x1c8)]['product_name']],_0x3afedb=[_0x18dc57[_0x293561(0x1c8)][_0x293561(0x1bb)]],_0x540de5=[_0x18dc57['body'][_0x293561(0x21d)]],_0x3f78a0=[_0x18dc57[_0x293561(0x1c8)][_0x293561(0x20e)]],_0x3f8a82=[_0x18dc57['body'][_0x293561(0x21e)]],_0x10a6be=[_0x18dc57['body'][_0x293561(0x1f7)]],_0x2e7d1e=[_0x18dc57[_0x293561(0x1c8)]['primary_code_hide']],_0x59ac04=[_0x18dc57[_0x293561(0x1c8)][_0x293561(0x1ff)]];else var _0x585a94=[..._0x18dc57[_0x293561(0x1c8)]['product_name']],_0x3afedb=[..._0x18dc57[_0x293561(0x1c8)][_0x293561(0x1bb)]],_0x540de5=[..._0x18dc57['body'][_0x293561(0x21d)]],_0x3f78a0=[..._0x18dc57[_0x293561(0x1c8)][_0x293561(0x20e)]],_0x3f8a82=[..._0x18dc57['body']['level']],_0x10a6be=[..._0x18dc57[_0x293561(0x1c8)][_0x293561(0x1f7)]],_0x2e7d1e=[..._0x18dc57[_0x293561(0x1c8)]['primary_code_hide']],_0x59ac04=[..._0x18dc57[_0x293561(0x1c8)][_0x293561(0x1ff)]];const _0x26d488=_0x585a94[_0x293561(0x1b6)](_0x40e410=>{return _0x40e410={'product_name':_0x40e410};});_0x3afedb[_0x293561(0x1d1)]((_0x8fdd48,_0x3d4750)=>{_0x26d488[_0x3d4750]['purchase_quantity']=_0x8fdd48;}),_0x540de5[_0x293561(0x1d1)]((_0x402847,_0x5625df)=>{const _0x9b1cea=_0x293561;_0x26d488[_0x5625df][_0x9b1cea(0x1e4)]=_0x402847;}),_0x3f78a0[_0x293561(0x1d1)]((_0x3212a9,_0x1e080b)=>{_0x26d488[_0x1e080b]['return_qty']=_0x3212a9;}),_0x3f8a82[_0x293561(0x1d1)]((_0x2f8883,_0x5313db)=>{const _0x5a9102=_0x293561;_0x26d488[_0x5313db][_0x5a9102(0x21c)]=_0x2f8883;}),_0x10a6be['forEach']((_0x1bbcd3,_0x2cfd34)=>{const _0x4356ee=_0x293561;_0x26d488[_0x2cfd34][_0x4356ee(0x1ea)]=_0x1bbcd3;}),_0x2e7d1e[_0x293561(0x1d1)]((_0x232913,_0x365b19)=>{const _0x251fb0=_0x293561;_0x26d488[_0x365b19][_0x251fb0(0x1b9)]=_0x232913;}),_0x59ac04['forEach']((_0x446a5e,_0x3e0b22)=>{const _0x46877d=_0x293561;_0x26d488[_0x3e0b22][_0x46877d(0x1bf)]=_0x446a5e;});var _0x39d9bb=0x0;_0x26d488[_0x293561(0x1d1)](_0x8cf390=>{const _0x3ed4d4=_0x293561;(parseInt(_0x8cf390[_0x3ed4d4(0x1bb)])<parseInt(_0x8cf390[_0x3ed4d4(0x20e)])||parseInt(_0x8cf390[_0x3ed4d4(0x1e4)])<parseInt(_0x8cf390['return_qty']))&&_0x39d9bb++;});if(_0x39d9bb!=0x0)return _0x18dc57[_0x293561(0x1d9)]('errors','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x2dd62a[_0x293561(0x1ba)]('back');_0x26b8ab[_0x293561(0x225)][_0x293561(0x1d1)](_0x1ad229=>{if(_0x1ad229['return_qty']>0x0){const _0x13da54=_0x3ad41f['product_details']['map'](_0x382be5=>{const _0x9b6521=a0_0x1fd5;_0x382be5[_0x9b6521(0x1cb)]==_0x1ad229[_0x9b6521(0x1cb)]&&_0x382be5['bay']==_0x1ad229[_0x9b6521(0x21c)]&&(_0x382be5[_0x9b6521(0x20b)]=parseInt(_0x382be5[_0x9b6521(0x20b)])+parseInt(_0x1ad229[_0x9b6521(0x20e)]));});}}),await _0x3ad41f['save'](),_0x26b8ab[_0x293561(0x1f5)]=_0x1211cd,_0x26b8ab[_0x293561(0x1fc)]=_0x1aa4fe,_0x26b8ab['date']=_0x5eb13c,_0x26b8ab[_0x293561(0x1cc)]=_0x7618f5,_0x26b8ab[_0x293561(0x225)]=_0x26d488,_0x26b8ab[_0x293561(0x1d8)]=_0x20e321,_0x26b8ab[_0x293561(0x218)]=_0x17048d,_0x26b8ab[_0x293561(0x1be)]=_0x524300,_0x26b8ab['to_room']=_0x21c16d;const _0xf5300a=await _0x26b8ab[_0x293561(0x1f0)](),_0x3ea309=await purchases_return_finished[_0x293561(0x1eb)]({'invoice':_0x18dc57['body']['invoice']}),_0x3d5bc0=await warehouse[_0x293561(0x1eb)]({'name':_0x18dc57['body'][_0x293561(0x1be)],'room':_0x18dc57[_0x293561(0x1c8)][_0x293561(0x1c9)],'warehouse_category':'Finished\x20Goods'});_0x3ea309[_0x293561(0x225)][_0x293561(0x1d1)](_0x277aaa=>{const _0x360773=_0x293561;_0x3d5bc0[_0x360773(0x1e0)][_0x360773(0x1b6)](_0x3355e7=>{const _0x3cfd3f=_0x360773;_0x3355e7[_0x3cfd3f(0x1cb)]==_0x277aaa[_0x3cfd3f(0x1cb)]&&_0x3355e7[_0x3cfd3f(0x21c)]==_0x277aaa[_0x3cfd3f(0x21c)]&&(_0x3355e7[_0x3cfd3f(0x20b)]=parseInt(_0x3355e7['product_stock'])-parseInt(_0x277aaa[_0x3cfd3f(0x20e)]));});}),await _0x3d5bc0[_0x293561(0x1f0)]();const _0x4f5a38=await s_payment_data['findOne']({'invoice':_0x18dc57[_0x293561(0x1c8)][_0x293561(0x1f5)],'reason':'Purchase\x20Return'});await _0x4f5a38[_0x293561(0x1f0)](),_0x18dc57[_0x293561(0x1d9)](_0x293561(0x224),_0x293561(0x1c7)),_0x2dd62a[_0x293561(0x1ba)](_0x293561(0x1e5));}catch(_0xa9d459){console[_0x293561(0x1f1)](_0xa9d459),_0x2dd62a['status'](0xc8)[_0x293561(0x214)]({'message':_0xa9d459[_0x293561(0x1fd)]});}}),router[a0_0x262874(0x1ef)](a0_0x262874(0x1ca),auth,async(_0x4d94e,_0x3f4f1d)=>{const _0x3c8dd7=a0_0x262874;try{const {username:_0x4b57c5,email:_0x5da6e5,role:_0x17b151}=_0x4d94e['user'],_0x207544=_0x4d94e[_0x3c8dd7(0x202)],_0x1ddf79=await profile[_0x3c8dd7(0x1eb)]({'email':_0x207544[_0x3c8dd7(0x1f2)]}),_0x14714b=await master_shop['find']();console[_0x3c8dd7(0x1f1)](_0x3c8dd7(0x208),_0x14714b);const _0x2fbde9=_0x4d94e['params']['id'],_0x3d1722=await purchases_return[_0x3c8dd7(0x21a)](_0x2fbde9);console[_0x3c8dd7(0x1f1)](_0x3d1722);const _0x583350=await suppliers[_0x3c8dd7(0x1eb)]({'name':_0x3d1722[_0x3c8dd7(0x1fc)]});console[_0x3c8dd7(0x1f1)](_0x583350);if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]==_0x3c8dd7(0x1d0)){var _0x26bfc3=users[_0x3c8dd7(0x1cf)];console[_0x3c8dd7(0x1f1)](_0x26bfc3);}else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]=='Hindi')var _0x26bfc3=users[_0x3c8dd7(0x1bc)];else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]==_0x3c8dd7(0x1dd))var _0x26bfc3=users[_0x3c8dd7(0x1dd)];else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]==_0x3c8dd7(0x226))var _0x26bfc3=users[_0x3c8dd7(0x226)];else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]=='French')var _0x26bfc3=users[_0x3c8dd7(0x1c3)];else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]==_0x3c8dd7(0x1d4))var _0x26bfc3=users[_0x3c8dd7(0x1fb)];else{if(_0x14714b[0x0][_0x3c8dd7(0x1f9)]==_0x3c8dd7(0x1e2))var _0x26bfc3=users[_0x3c8dd7(0x1e2)];else{if(_0x14714b[0x0]['language']==_0x3c8dd7(0x1e9))var _0x26bfc3=users['Arabic'];}}}}}}}_0x3f4f1d['render']('return_purchase_invoice',{'success':_0x4d94e['flash'](_0x3c8dd7(0x224)),'errors':_0x4d94e[_0x3c8dd7(0x1d9)](_0x3c8dd7(0x1c5)),'role':_0x207544,'profile':_0x1ddf79,'master_shop':_0x14714b,'supplier':_0x583350,'purchase':_0x3d1722,'language':_0x26bfc3});}catch(_0x34fd13){console['log'](_0x34fd13);}}),router['post'](a0_0x262874(0x1ee),auth,async(_0x2d01a1,_0x4243e3)=>{const _0x1d66f0=a0_0x262874;try{const _0xd91f63=_0x2d01a1[_0x1d66f0(0x220)]['id'],{invoice:_0x27012f,suppliers:_0xaf0004,receivable_amount:_0x363898,received_amount:_0x386c13}=_0x2d01a1['body'],_0x46102a=await purchases_return[_0x1d66f0(0x21a)](_0xd91f63);console[_0x1d66f0(0x1f1)](_0x46102a);var _0x4c3b37=_0x363898-_0x386c13;console['log'](_0x386c13),_0x46102a[_0x1d66f0(0x216)]=parseFloat(_0x386c13)+parseFloat(_0x46102a['received']),_0x46102a[_0x1d66f0(0x21b)]=_0x4c3b37,console[_0x1d66f0(0x1f1)](_0x46102a);const _0x34a381=await _0x46102a[_0x1d66f0(0x1f0)](),_0x1b9481=await s_payment_data[_0x1d66f0(0x1eb)]({'invoice':_0x2d01a1[_0x1d66f0(0x1c8)][_0x1d66f0(0x1f5)],'reason':_0x1d66f0(0x1bd)});_0x1b9481[_0x1d66f0(0x1e1)]=_0x4c3b37,await _0x1b9481['save']();let _0xbbc27f=new Date(),_0x5037a3=('0'+_0xbbc27f['getDate']())[_0x1d66f0(0x1f3)](-0x2),_0x4abd7b=('0'+(_0xbbc27f[_0x1d66f0(0x1de)]()+0x1))[_0x1d66f0(0x1f3)](-0x2),_0x2c831a=_0xbbc27f['getFullYear'](),_0x1f494c=_0x2c831a+'-'+_0x4abd7b+'-'+_0x5037a3;const _0x588b04=new suppliers_payment({'invoice':_0x27012f,'date':_0x2c831a+'-'+_0x4abd7b+'-'+_0x5037a3,'suppliers':_0xaf0004,'reason':_0x1d66f0(0x205),'amount':_0x386c13}),_0x43097a=await _0x588b04[_0x1d66f0(0x1f0)]();_0x2d01a1['flash']('success',_0x1d66f0(0x20d)),_0x4243e3['redirect'](_0x1d66f0(0x1d6));}catch(_0x20eefb){console['log'](_0x20eefb);}}),module[a0_0x262874(0x222)]=router;function a0_0x5c24(){const _0x505200=['$product_details.rack','Arabic\x20(ae)','product_code','findOne','$_id','1149573ghYRhw','/receive_payment/:id','get','save','log','email','slice','$supplier_docs','invoice','1146696JcWWlN','product_code_hide','../public/language/languages.json','language','$total_amount','Portuguese','suppliers','message','$product_details.storage','secondary_code_hide','$due_amount','aggregate','user','$product_details.secondary_code','$supplier_docs.email','Received\x20For\x20Purchase\x20Return','$product_details','Return\x20Goods','master','$warehouse_name','$product_details.type','product_stock','$note','payment\x20successfull','return_qty','render','post','$suppliers','Enabled','/view/:id','json','$product_details.bin','received','Arabic','room','5305FZSHqj','findById','due_amount','bay','stocks','level','$product_details.product_code','params','find','exports','/view','success','return_product','Spanish','$product_details.primary_code','map','$product_details.product_stock','7AaJdVv','primary_code','redirect','purchase_quantity','Hindi','Purchase\x20Return','to_warehouse_name','secondary_code','$name','stock_data','to_room','French','$product_details.floorlevel','errors','950715sUmAgJ','purchase\x20return\x20successfully','body','to_Room_name','/invoice/:id','product_name','warehouse_name','$product_details._id','$return_product.price','English','English\x20(US)','forEach','902pScuRJ','$invoice','Portuguese\x20(BR)','$supplier_docs.mobile','/purchases_return/view','Router','note','flash','express','$return_product.total','1332GJSuWw','German','getMonth','172650lenhRR','product_details','amount','Chinese','$date','stock_quantity','/purchases_return_finished/view','2640516tIwZeO','Finished\x20Goods'];a0_0x5c24=function(){return _0x505200;};return a0_0x5c24();}