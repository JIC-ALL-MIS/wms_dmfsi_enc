const a0_0x971ddb=a0_0x2f88;(function(_0xd6fae9,_0x583f0d){const _0x13e6a5=a0_0x2f88,_0x8962a6=_0xd6fae9();while(!![]){try{const _0x4f8e99=-parseInt(_0x13e6a5(0x25f))/0x1*(parseInt(_0x13e6a5(0x214))/0x2)+parseInt(_0x13e6a5(0x23d))/0x3*(-parseInt(_0x13e6a5(0x228))/0x4)+-parseInt(_0x13e6a5(0x226))/0x5*(parseInt(_0x13e6a5(0x20f))/0x6)+-parseInt(_0x13e6a5(0x25a))/0x7*(parseInt(_0x13e6a5(0x216))/0x8)+-parseInt(_0x13e6a5(0x1ee))/0x9*(parseInt(_0x13e6a5(0x25e))/0xa)+-parseInt(_0x13e6a5(0x220))/0xb*(-parseInt(_0x13e6a5(0x204))/0xc)+parseInt(_0x13e6a5(0x25b))/0xd*(parseInt(_0x13e6a5(0x234))/0xe);if(_0x4f8e99===_0x583f0d)break;else _0x8962a6['push'](_0x8962a6['shift']());}catch(_0x24937b){_0x8962a6['push'](_0x8962a6['shift']());}}}(a0_0xaa6e,0x9f820));function a0_0x2f88(_0x2242c9,_0x1d0b97){const _0xaa6e1e=a0_0xaa6e();return a0_0x2f88=function(_0x2f88e4,_0x189734){_0x2f88e4=_0x2f88e4-0x1ed;let _0x58b291=_0xaa6e1e[_0x2f88e4];return _0x58b291;},a0_0x2f88(_0x2242c9,_0x1d0b97);}const express=require(a0_0x971ddb(0x1f3)),app=express(),router=express[a0_0x971ddb(0x22c)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require('../models/all_models'),auth=require('../middleware/auth'),users=require(a0_0x971ddb(0x24f));router[a0_0x971ddb(0x1ef)](a0_0x971ddb(0x1fd),auth,async(_0x3bd279,_0x323d8e)=>{const _0x2e49e8=a0_0x971ddb;try{const {username:_0x3f95c1,email:_0xcd4832,role:_0x44a831}=_0x3bd279[_0x2e49e8(0x261)],_0x179914=_0x3bd279[_0x2e49e8(0x261)],_0x1c0f51=await profile[_0x2e49e8(0x239)]({'email':_0x179914[_0x2e49e8(0x217)]}),_0x33d8de=await master_shop[_0x2e49e8(0x26b)]();console[_0x2e49e8(0x249)](_0x2e49e8(0x229),_0x33d8de);const _0x1ecc11=await purchases_return_finished[_0x2e49e8(0x207)]([{'$lookup':{'from':_0x2e49e8(0x21f),'localField':'suppliers','foreignField':_0x2e49e8(0x255),'as':_0x2e49e8(0x24a)}},{'$unwind':_0x2e49e8(0x1fe)},{'$unwind':_0x2e49e8(0x232)},{'$group':{'_id':_0x2e49e8(0x219),'invoice':{'$first':'$invoice'},'date':{'$first':_0x2e49e8(0x227)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':_0x2e49e8(0x264)},'product_name':{'$first':_0x2e49e8(0x236)},'return_qty':{'$first':_0x2e49e8(0x259)},'price':{'$first':_0x2e49e8(0x225)},'total':{'$sum':_0x2e49e8(0x201)},'note':{'$first':'$note'},'total_amount':{'$first':_0x2e49e8(0x243)},'discount':{'$first':'$discount'},'receivable':{'$first':'$receivable'},'received':{'$first':'$received'},'due_amount':{'$first':_0x2e49e8(0x209)},'mobile':{'$first':_0x2e49e8(0x233)},'email':{'$first':_0x2e49e8(0x222)},'address':{'$first':_0x2e49e8(0x1ff)},'return_sum_qty':{'$sum':_0x2e49e8(0x259)}}}]);console['log'](_0x1ecc11);if(_0x33d8de[0x0][_0x2e49e8(0x25d)]==_0x2e49e8(0x237)){var _0x2c753a=users['English'];console[_0x2e49e8(0x249)](_0x2c753a);}else{if(_0x33d8de[0x0]['language']=='Hindi')var _0x2c753a=users['Hindi'];else{if(_0x33d8de[0x0]['language']==_0x2e49e8(0x1fa))var _0x2c753a=users[_0x2e49e8(0x1fa)];else{if(_0x33d8de[0x0][_0x2e49e8(0x25d)]==_0x2e49e8(0x1f1))var _0x2c753a=users[_0x2e49e8(0x1f1)];else{if(_0x33d8de[0x0][_0x2e49e8(0x25d)]==_0x2e49e8(0x1ed))var _0x2c753a=users['French'];else{if(_0x33d8de[0x0][_0x2e49e8(0x25d)]==_0x2e49e8(0x20d))var _0x2c753a=users[_0x2e49e8(0x22a)];else{if(_0x33d8de[0x0]['language']==_0x2e49e8(0x21a))var _0x2c753a=users['Chinese'];else{if(_0x33d8de[0x0]['language']=='Arabic\x20(ae)')var _0x2c753a=users[_0x2e49e8(0x212)];}}}}}}}_0x323d8e[_0x2e49e8(0x21b)](_0x2e49e8(0x246),{'success':_0x3bd279[_0x2e49e8(0x248)](_0x2e49e8(0x24b)),'errors':_0x3bd279[_0x2e49e8(0x248)](_0x2e49e8(0x21e)),'role':_0x179914,'profile':_0x1c0f51,'master_shop':_0x33d8de,'user':_0x1ecc11,'language':_0x2c753a});}catch(_0x518b9c){console[_0x2e49e8(0x249)](_0x518b9c);}}),router[a0_0x971ddb(0x1ef)]('/view/:id',auth,async(_0x251264,_0x5cc566)=>{const _0x14fb1b=a0_0x971ddb;try{const {username:_0x2a20e2,email:_0x43d6c1,role:_0x1de2cf}=_0x251264[_0x14fb1b(0x261)],_0x19f33b=_0x251264[_0x14fb1b(0x261)],_0x438cbf=await profile[_0x14fb1b(0x239)]({'email':_0x19f33b[_0x14fb1b(0x217)]}),_0x476736=await product[_0x14fb1b(0x26b)]({}),_0x375c02=await master_shop[_0x14fb1b(0x26b)](),_0x273ff2=_0x251264['params']['id'],_0x58b1ce=await purchases_return_finished[_0x14fb1b(0x231)](_0x273ff2),_0x48be23=await warehouse[_0x14fb1b(0x207)]([{'$match':{'name':_0x58b1ce[_0x14fb1b(0x242)],'room':_0x58b1ce['room'],'warehouse_category':_0x14fb1b(0x218)}},{'$unwind':_0x14fb1b(0x1fb)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x14fb1b(0x251)},'product_stock':{'$first':_0x14fb1b(0x203)},'bay':{'$first':_0x14fb1b(0x240)},'bin':{'$first':_0x14fb1b(0x1f0)},'type':{'$first':_0x14fb1b(0x23f)},'floorlevel':{'$first':_0x14fb1b(0x250)},'primary_code':{'$first':_0x14fb1b(0x20b)},'secondary_code':{'$first':_0x14fb1b(0x21d)},'product_code':{'$first':_0x14fb1b(0x1f6)},'storage':{'$first':_0x14fb1b(0x23b)},'rack':{'$first':_0x14fb1b(0x241)}}}]);warehouse_data=await warehouse[_0x14fb1b(0x207)]([{'$match':{'status':_0x14fb1b(0x257),'name':_0x14fb1b(0x262),'warehouse_category':_0x14fb1b(0x218)}},{'$group':{'_id':_0x14fb1b(0x26a),'name':{'$first':_0x14fb1b(0x26a)}}},{'$sort':{'name':0x1}}]),console['log'](_0x14fb1b(0x205),_0x48be23);if(_0x375c02[0x0][_0x14fb1b(0x25d)]==_0x14fb1b(0x237)){var _0x3059cd=users[_0x14fb1b(0x22e)];console['log'](_0x3059cd);}else{if(_0x375c02[0x0]['language']==_0x14fb1b(0x1fc))var _0x3059cd=users['Hindi'];else{if(_0x375c02[0x0][_0x14fb1b(0x25d)]==_0x14fb1b(0x1fa))var _0x3059cd=users['German'];else{if(_0x375c02[0x0][_0x14fb1b(0x25d)]==_0x14fb1b(0x1f1))var _0x3059cd=users[_0x14fb1b(0x1f1)];else{if(_0x375c02[0x0]['language']==_0x14fb1b(0x1ed))var _0x3059cd=users['French'];else{if(_0x375c02[0x0][_0x14fb1b(0x25d)]==_0x14fb1b(0x20d))var _0x3059cd=users['Portuguese'];else{if(_0x375c02[0x0][_0x14fb1b(0x25d)]=='Chinese')var _0x3059cd=users[_0x14fb1b(0x21a)];else{if(_0x375c02[0x0]['language']==_0x14fb1b(0x20e))var _0x3059cd=users[_0x14fb1b(0x212)];}}}}}}}_0x5cc566[_0x14fb1b(0x21b)]('return_purchase_edit_finished',{'success':_0x251264[_0x14fb1b(0x248)](_0x14fb1b(0x24b)),'errors':_0x251264[_0x14fb1b(0x248)](_0x14fb1b(0x21e)),'role':_0x19f33b,'master_shop':_0x375c02,'profile':_0x438cbf,'user':_0x58b1ce,'stock':_0x48be23,'product':_0x476736,'language':_0x3059cd,'warehouse':warehouse_data});}catch(_0x3f16c8){console['log'](_0x3f16c8);}}),router[a0_0x971ddb(0x23c)](a0_0x971ddb(0x254),auth,async(_0x5b486a,_0x53c248)=>{const _0xd003ab=a0_0x971ddb;try{const _0x9e8572=_0x5b486a[_0xd003ab(0x238)]['id'],_0x30f52d=await purchases_return_finished[_0xd003ab(0x239)]({'invoice':_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x230)]}),_0x5d893f=await warehouse['findOne']({'name':_0x30f52d[_0xd003ab(0x20a)],'room':_0x30f52d['to_room'],'warehouse_category':_0xd003ab(0x218)}),{invoice:_0x506651,suppliers:_0x1c414e,date:_0x5ee125,warehouse_name:_0x329c83,product_name:_0x29856a,purchase_quantity:_0x1de2fa,stocks:_0x3d4682,return_qty:_0x330542,note:_0x3ea800,Room_name:_0x193d4d,level:_0x1cf57b,isle:_0x4662a4,pallet:_0x313fa8,to_warehouse_name:_0x10880a,to_Room_name:_0x3ab63e}=_0x5b486a[_0xd003ab(0x235)];if(typeof _0x29856a==_0xd003ab(0x1f4))var _0x4a6494=[_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x215)]],_0x21e43e=[_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x269)]],_0x44bb3a=[_0x5b486a[_0xd003ab(0x235)]['stocks']],_0x3f37ea=[_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x258)]],_0xf9bec3=[_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x1f7)]],_0x3e8a34=[_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x221)]],_0x283f60=[_0x5b486a['body'][_0xd003ab(0x267)]],_0x583114=[_0x5b486a['body'][_0xd003ab(0x253)]];else var _0x4a6494=[..._0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x215)]],_0x21e43e=[..._0x5b486a['body'][_0xd003ab(0x269)]],_0x44bb3a=[..._0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x247)]],_0x3f37ea=[..._0x5b486a[_0xd003ab(0x235)]['return_qty']],_0xf9bec3=[..._0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x1f7)]],_0x3e8a34=[..._0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x221)]],_0x283f60=[..._0x5b486a['body']['primary_code_hide']],_0x583114=[..._0x5b486a[_0xd003ab(0x235)]['secondary_code_hide']];const _0x440090=_0x4a6494[_0xd003ab(0x23a)](_0x5056e3=>{return _0x5056e3={'product_name':_0x5056e3};});_0x21e43e[_0xd003ab(0x263)]((_0x1c3af2,_0x2a95ce)=>{const _0x4cc092=_0xd003ab;_0x440090[_0x2a95ce][_0x4cc092(0x269)]=_0x1c3af2;}),_0x44bb3a[_0xd003ab(0x263)]((_0x48bb18,_0x435791)=>{const _0x3fc64f=_0xd003ab;_0x440090[_0x435791][_0x3fc64f(0x206)]=_0x48bb18;}),_0x3f37ea[_0xd003ab(0x263)]((_0x5a46a8,_0x764a19)=>{const _0x2bba89=_0xd003ab;_0x440090[_0x764a19][_0x2bba89(0x258)]=_0x5a46a8;}),_0xf9bec3['forEach']((_0x53d091,_0x535405)=>{_0x440090[_0x535405]['bay']=_0x53d091;}),_0x3e8a34[_0xd003ab(0x263)]((_0x5ea7e4,_0x146467)=>{const _0x58d915=_0xd003ab;_0x440090[_0x146467][_0x58d915(0x213)]=_0x5ea7e4;}),_0x283f60['forEach']((_0x2f016b,_0x27cd6e)=>{_0x440090[_0x27cd6e]['primary_code']=_0x2f016b;}),_0x583114['forEach']((_0x535efc,_0x1e257e)=>{const _0xda7d29=_0xd003ab;_0x440090[_0x1e257e][_0xda7d29(0x24c)]=_0x535efc;});var _0x59a479=0x0;_0x440090[_0xd003ab(0x263)](_0x4a12cb=>{const _0x172655=_0xd003ab;(parseInt(_0x4a12cb[_0x172655(0x269)])<parseInt(_0x4a12cb[_0x172655(0x258)])||parseInt(_0x4a12cb[_0x172655(0x206)])<parseInt(_0x4a12cb[_0x172655(0x258)]))&&_0x59a479++;});if(_0x59a479!=0x0)return _0x5b486a[_0xd003ab(0x248)](_0xd003ab(0x21e),_0xd003ab(0x23e)),_0x53c248[_0xd003ab(0x244)](_0xd003ab(0x265));_0x30f52d[_0xd003ab(0x211)]['forEach'](_0x46a776=>{const _0x19ba64=_0xd003ab;if(_0x46a776[_0x19ba64(0x258)]>0x0){const _0x133b88=_0x5d893f[_0x19ba64(0x200)][_0x19ba64(0x23a)](_0x1481c6=>{const _0x1868c5=_0x19ba64;_0x1481c6[_0x1868c5(0x215)]==_0x46a776[_0x1868c5(0x215)]&&_0x1481c6[_0x1868c5(0x25c)]==_0x46a776[_0x1868c5(0x25c)]&&(_0x1481c6[_0x1868c5(0x1f5)]=parseInt(_0x1481c6[_0x1868c5(0x1f5)])+parseInt(_0x46a776['return_qty']));});}}),await _0x5d893f[_0xd003ab(0x252)](),_0x30f52d[_0xd003ab(0x230)]=_0x506651,_0x30f52d[_0xd003ab(0x21f)]=_0x1c414e,_0x30f52d[_0xd003ab(0x24d)]=_0x5ee125,_0x30f52d[_0xd003ab(0x242)]=_0x329c83,_0x30f52d['return_product']=_0x440090,_0x30f52d[_0xd003ab(0x268)]=_0x3ea800,_0x30f52d[_0xd003ab(0x202)]=_0x193d4d,_0x30f52d[_0xd003ab(0x20a)]=_0x10880a,_0x30f52d['to_room']=_0x3ab63e;const _0xeb84c9=await _0x30f52d[_0xd003ab(0x252)](),_0x3af206=await purchases_return_finished[_0xd003ab(0x239)]({'invoice':_0x5b486a['body'][_0xd003ab(0x230)]}),_0x5c7fb3=await warehouse[_0xd003ab(0x239)]({'name':_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x20a)],'room':_0x5b486a[_0xd003ab(0x235)][_0xd003ab(0x223)],'warehouse_category':_0xd003ab(0x218)});_0x3af206[_0xd003ab(0x211)]['forEach'](_0x4977ff=>{const _0x3a72ea=_0xd003ab;_0x5c7fb3[_0x3a72ea(0x200)][_0x3a72ea(0x23a)](_0x5a22f4=>{const _0x452188=_0x3a72ea;_0x5a22f4[_0x452188(0x215)]==_0x4977ff['product_name']&&_0x5a22f4[_0x452188(0x25c)]==_0x4977ff[_0x452188(0x25c)]&&(_0x5a22f4['product_stock']=parseInt(_0x5a22f4[_0x452188(0x1f5)])-parseInt(_0x4977ff[_0x452188(0x258)]));});}),await _0x5c7fb3[_0xd003ab(0x252)]();const _0x3c9b38=await s_payment_data[_0xd003ab(0x239)]({'invoice':_0x5b486a[_0xd003ab(0x235)]['invoice'],'reason':_0xd003ab(0x20c)});await _0x3c9b38[_0xd003ab(0x252)](),_0x5b486a[_0xd003ab(0x248)](_0xd003ab(0x24b),_0xd003ab(0x208)),_0x53c248[_0xd003ab(0x244)](_0xd003ab(0x22d));}catch(_0x2df198){console['log'](_0x2df198),_0x53c248['status'](0xc8)[_0xd003ab(0x245)]({'message':_0x2df198[_0xd003ab(0x1f9)]});}}),router[a0_0x971ddb(0x1ef)](a0_0x971ddb(0x24e),auth,async(_0x5450b1,_0xb5406b)=>{const _0x586bcf=a0_0x971ddb;try{const {username:_0x1b7c38,email:_0x45424f,role:_0x51f172}=_0x5450b1[_0x586bcf(0x261)],_0x5f2773=_0x5450b1[_0x586bcf(0x261)],_0x6ead62=await profile[_0x586bcf(0x239)]({'email':_0x5f2773['email']}),_0x430641=await master_shop['find']();console[_0x586bcf(0x249)]('master',_0x430641);const _0x227348=_0x5450b1['params']['id'],_0x126bce=await purchases_return[_0x586bcf(0x231)](_0x227348);console['log'](_0x126bce);const _0x105bb4=await suppliers[_0x586bcf(0x239)]({'name':_0x126bce[_0x586bcf(0x21f)]});console['log'](_0x105bb4);if(_0x430641[0x0][_0x586bcf(0x25d)]=='English\x20(US)'){var _0x153d9c=users[_0x586bcf(0x22e)];console[_0x586bcf(0x249)](_0x153d9c);}else{if(_0x430641[0x0][_0x586bcf(0x25d)]==_0x586bcf(0x1fc))var _0x153d9c=users[_0x586bcf(0x1fc)];else{if(_0x430641[0x0][_0x586bcf(0x25d)]=='German')var _0x153d9c=users[_0x586bcf(0x1fa)];else{if(_0x430641[0x0][_0x586bcf(0x25d)]==_0x586bcf(0x1f1))var _0x153d9c=users['Spanish'];else{if(_0x430641[0x0][_0x586bcf(0x25d)]=='French')var _0x153d9c=users[_0x586bcf(0x1ed)];else{if(_0x430641[0x0][_0x586bcf(0x25d)]==_0x586bcf(0x20d))var _0x153d9c=users[_0x586bcf(0x22a)];else{if(_0x430641[0x0][_0x586bcf(0x25d)]==_0x586bcf(0x21a))var _0x153d9c=users['Chinese'];else{if(_0x430641[0x0][_0x586bcf(0x25d)]==_0x586bcf(0x20e))var _0x153d9c=users[_0x586bcf(0x212)];}}}}}}}_0xb5406b['render'](_0x586bcf(0x224),{'success':_0x5450b1[_0x586bcf(0x248)]('success'),'errors':_0x5450b1[_0x586bcf(0x248)](_0x586bcf(0x21e)),'role':_0x5f2773,'profile':_0x6ead62,'master_shop':_0x430641,'supplier':_0x105bb4,'purchase':_0x126bce,'language':_0x153d9c});}catch(_0x34d4d9){console['log'](_0x34d4d9);}}),router[a0_0x971ddb(0x23c)](a0_0x971ddb(0x260),auth,async(_0x1ddc1b,_0x1b3d09)=>{const _0x2087b7=a0_0x971ddb;try{const _0x2378a9=_0x1ddc1b[_0x2087b7(0x238)]['id'],{invoice:_0x1522ec,suppliers:_0x35b8f6,receivable_amount:_0x5c545d,received_amount:_0xec5778}=_0x1ddc1b['body'],_0x568db6=await purchases_return[_0x2087b7(0x231)](_0x2378a9);console[_0x2087b7(0x249)](_0x568db6);var _0x27a92b=_0x5c545d-_0xec5778;console['log'](_0xec5778),_0x568db6[_0x2087b7(0x22f)]=parseFloat(_0xec5778)+parseFloat(_0x568db6['received']),_0x568db6[_0x2087b7(0x266)]=_0x27a92b,console['log'](_0x568db6);const _0x339dc5=await _0x568db6[_0x2087b7(0x252)](),_0x2b14e5=await s_payment_data[_0x2087b7(0x239)]({'invoice':_0x1ddc1b[_0x2087b7(0x235)][_0x2087b7(0x230)],'reason':'Purchase\x20Return'});_0x2b14e5['amount']=_0x27a92b,await _0x2b14e5['save']();let _0x4f9628=new Date(),_0x35a6a9=('0'+_0x4f9628[_0x2087b7(0x210)]())[_0x2087b7(0x1f8)](-0x2),_0x59ff98=('0'+(_0x4f9628[_0x2087b7(0x22b)]()+0x1))[_0x2087b7(0x1f8)](-0x2),_0x5538b7=_0x4f9628[_0x2087b7(0x21c)](),_0x1feee3=_0x5538b7+'-'+_0x59ff98+'-'+_0x35a6a9;const _0x207120=new suppliers_payment({'invoice':_0x1522ec,'date':_0x5538b7+'-'+_0x59ff98+'-'+_0x35a6a9,'suppliers':_0x35b8f6,'reason':_0x2087b7(0x1f2),'amount':_0xec5778}),_0x4eefce=await _0x207120['save']();_0x1ddc1b[_0x2087b7(0x248)](_0x2087b7(0x24b),'payment\x20successfull'),_0x1b3d09[_0x2087b7(0x244)]('/purchases_return/view');}catch(_0xecaac8){console[_0x2087b7(0x249)](_0xecaac8);}}),module[a0_0x971ddb(0x256)]=router;function a0_0xaa6e(){const _0x15b276=['$product_details.rack','warehouse_name','$total_amount','redirect','json','purchases_return_finished','stocks','flash','log','supplier_docs','success','secondary_code','date','/invoice/:id','../public/language/languages.json','$product_details.floorlevel','$product_details.product_name','save','secondary_code_hide','/view/:id','name','exports','Enabled','return_qty','$return_product.return_qty','301JRwoxG','35226269EHrjMc','bay','language','30Gasepv','827Ancmgu','/receive_payment/:id','user','Return\x20Goods','forEach','$warehouse_name','back','due_amount','primary_code_hide','note','purchase_quantity','$name','find','French','141813LFlXrm','get','$product_details.bin','Spanish','Received\x20For\x20Purchase\x20Return','express','string','product_stock','$product_details.product_code','level','slice','message','German','$product_details','Hindi','/view','$return_product','$supplier_docs.address','product_details','$return_product.total','room','$product_details.product_stock','12CuowEX','stock_data','stock_quantity','aggregate','purchase\x20return\x20successfully','$due_amount','to_warehouse_name','$product_details.primary_code','Purchase\x20Return','Portuguese\x20(BR)','Arabic\x20(ae)','7338YGEEYP','getDate','return_product','Arabic','product_code','1604TbcZUY','product_name','17144QdgEmR','email','Finished\x20Goods','$_id','Chinese','render','getFullYear','$product_details.secondary_code','errors','suppliers','9719182wdhOzk','product_code_hide','$supplier_docs.email','to_Room_name','return_purchase_invoice','$return_product.price','4230IUIBEl','$date','4410396dutMbo','master','Portuguese','getMonth','Router','/purchases_return_finished/view','English','received','invoice','findById','$supplier_docs','$supplier_docs.mobile','14iaCMvf','body','$return_product.product_name','English\x20(US)','params','findOne','map','$product_details.storage','post','3IsNiMr','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','$product_details.type','$product_details.bay'];a0_0xaa6e=function(){return _0x15b276;};return a0_0xaa6e();}