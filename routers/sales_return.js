var a0_0x5eef9f=a0_0x433f;(function(_0x37ca46,_0x212d1f){var _0x20a888=a0_0x433f,_0x3e2289=_0x37ca46();while(!![]){try{var _0x17f408=parseInt(_0x20a888(0x1af))/0x1*(-parseInt(_0x20a888(0x204))/0x2)+parseInt(_0x20a888(0x1f9))/0x3+-parseInt(_0x20a888(0x1b9))/0x4*(-parseInt(_0x20a888(0x1d6))/0x5)+-parseInt(_0x20a888(0x1f0))/0x6+-parseInt(_0x20a888(0x1a1))/0x7*(-parseInt(_0x20a888(0x1df))/0x8)+parseInt(_0x20a888(0x1c5))/0x9+parseInt(_0x20a888(0x1dd))/0xa*(-parseInt(_0x20a888(0x1db))/0xb);if(_0x17f408===_0x212d1f)break;else _0x3e2289['push'](_0x3e2289['shift']());}catch(_0x12e001){_0x3e2289['push'](_0x3e2289['shift']());}}}(a0_0x1bb2,0xd9e2d));const express=require(a0_0x5eef9f(0x1e6)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x5eef9f(0x1b3)),auth=require(a0_0x5eef9f(0x1e3)),users=require(a0_0x5eef9f(0x1f6));router['get'](a0_0x5eef9f(0x1e8),auth,async(_0x2fe6d1,_0xe8066f)=>{var _0x47d9e0=a0_0x5eef9f;try{const {username:_0x4597e1,email:_0xff45a0,role:_0x4f78a8}=_0x2fe6d1[_0x47d9e0(0x1cb)],_0x14f574=_0x2fe6d1['user'],_0x2be12f=await profile[_0x47d9e0(0x1a6)]({'email':_0x14f574[_0x47d9e0(0x1fd)]}),_0x2ee339=await master_shop[_0x47d9e0(0x1bc)]();console[_0x47d9e0(0x1da)](_0x47d9e0(0x1c1),_0x2ee339);const _0x25e1d4=await sales_return['aggregate']([{'$lookup':{'from':'customers','localField':_0x47d9e0(0x1bf),'foreignField':_0x47d9e0(0x201),'as':_0x47d9e0(0x19a)}},{'$unwind':_0x47d9e0(0x1ae)}]);console[_0x47d9e0(0x1da)](_0x47d9e0(0x1fa),_0x25e1d4);if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x1a4)){var _0x494418=users[_0x47d9e0(0x1f8)];console['log'](_0x494418);}else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]=='Hindi')var _0x494418=users['Hindi'];else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x1c2))var _0x494418=users['German'];else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x1e9))var _0x494418=users[_0x47d9e0(0x1e9)];else{if(_0x2ee339[0x0]['language']==_0x47d9e0(0x1ab))var _0x494418=users[_0x47d9e0(0x1ab)];else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x1cf))var _0x494418=users[_0x47d9e0(0x1f4)];else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x206))var _0x494418=users['Chinese'];else{if(_0x2ee339[0x0][_0x47d9e0(0x1ed)]==_0x47d9e0(0x1b5))var _0x494418=users['Arabic'];}}}}}}}_0xe8066f[_0x47d9e0(0x1de)](_0x47d9e0(0x1d3),{'success':_0x2fe6d1['flash']('success'),'errors':_0x2fe6d1[_0x47d9e0(0x1d9)](_0x47d9e0(0x19f)),'role':_0x14f574,'profile':_0x2be12f,'master_shop':_0x2ee339,'user':_0x25e1d4,'language':_0x494418});}catch(_0x3a4107){console[_0x47d9e0(0x1da)](_0x3a4107);}}),router[a0_0x5eef9f(0x1aa)](a0_0x5eef9f(0x1a0),auth,async(_0x10da7e,_0xaae6f8)=>{var _0x5340cd=a0_0x5eef9f;try{const {username:_0x5c41db,email:_0x1b1856,role:_0x11d446}=_0x10da7e[_0x5340cd(0x1cb)],_0x1f951c=_0x10da7e['user'],_0x178b36=await profile['findOne']({'email':_0x1f951c[_0x5340cd(0x1fd)]}),_0x5c1b44=await master_shop[_0x5340cd(0x1bc)]();console[_0x5340cd(0x1da)]('master',_0x5c1b44);const _0x58f006=_0x10da7e[_0x5340cd(0x1bb)]['id'];console[_0x5340cd(0x1da)](_0x58f006);var _0xf7588c=[_0x5340cd(0x1e7)];const _0x1b7cf8=await sales_return['findById'](_0x58f006),_0x394900=await warehouse['aggregate']([{'$match':{'name':_0x1b7cf8['ToWarehouse'],'room':_0x1b7cf8[_0x5340cd(0x1ac)]}},{'$unwind':_0x5340cd(0x1f3)},{'$group':{'_id':_0x5340cd(0x1a2),'name':{'$first':_0x5340cd(0x1f7)},'product_stock':{'$first':_0x5340cd(0x1e0)},'bay':{'$first':_0x5340cd(0x205)},'bin':{'$first':_0x5340cd(0x1fe)},'type':{'$first':_0x5340cd(0x1b6)},'floorlevel':{'$first':_0x5340cd(0x19b)},'primary_code':{'$first':_0x5340cd(0x196)},'secondary_code':{'$first':_0x5340cd(0x1c0)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x5340cd(0x1f1)},'rack':{'$first':_0x5340cd(0x1a3)}}}]);console['log'](_0x394900);const _0x4d60a9=await warehouse['aggregate']([{'$match':{'status':_0x5340cd(0x1ff),'name':_0x5340cd(0x1a9),'warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':_0x5340cd(0x1ea),'name':{'$first':_0x5340cd(0x1ea)}}},{'$sort':{'name':0x1}}]),_0x59f6f9=await product[_0x5340cd(0x1bc)]({});if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x1a4)){var _0x1bf380=users['English'];console[_0x5340cd(0x1da)](_0x1bf380);}else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x19d))var _0x1bf380=users[_0x5340cd(0x19d)];else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x1c2))var _0x1bf380=users['German'];else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x1e9))var _0x1bf380=users[_0x5340cd(0x1e9)];else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x1ab))var _0x1bf380=users[_0x5340cd(0x1ab)];else{if(_0x5c1b44[0x0]['language']==_0x5340cd(0x1cf))var _0x1bf380=users[_0x5340cd(0x1f4)];else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]==_0x5340cd(0x206))var _0x1bf380=users[_0x5340cd(0x206)];else{if(_0x5c1b44[0x0][_0x5340cd(0x1ed)]=='Arabic\x20(ae)')var _0x1bf380=users[_0x5340cd(0x194)];}}}}}}}_0xaae6f8[_0x5340cd(0x1de)]('return_sale_edit',{'success':_0x10da7e['flash'](_0x5340cd(0x1bd)),'errors':_0x10da7e[_0x5340cd(0x1d9)](_0x5340cd(0x19f)),'role':_0x1f951c,'profile':_0x178b36,'master_shop':_0x5c1b44,'user':_0x1b7cf8,'stock':_0x394900,'unit':_0x59f6f9,'language':_0x1bf380,'warehouses':_0x4d60a9,'rooms':_0xf7588c});}catch(_0xb478e2){console[_0x5340cd(0x1da)](_0xb478e2);}}),router[a0_0x5eef9f(0x1ec)]('/view/:id',auth,async(_0x423dd6,_0x578b55)=>{var _0xfa234d=a0_0x5eef9f;try{const _0x4d835c=_0x423dd6[_0xfa234d(0x1bb)]['id'];console[_0xfa234d(0x1da)](_0x4d835c);const _0x7c4991=await sales_return[_0xfa234d(0x1a6)]({'invoice':_0x423dd6['body'][_0xfa234d(0x209)]});console[_0xfa234d(0x1da)](_0xfa234d(0x1cd),_0x7c4991);const _0x55edb9=await warehouse[_0xfa234d(0x1a6)]({'name':_0x7c4991['ToWarehouse'],'room':_0x7c4991[_0xfa234d(0x1ac)]});console['log']('old_warehouse_data',_0x55edb9);const {invoice:_0x3be8f7,customer:_0x3e683a,date:_0x38f277,warehouse_name:_0x4b4662,product_name:_0x5643c4,primary_code:_0x4bdb0e,secondary_code:_0x25e5c2,product_code:_0x168538,sales_quantity:_0x8d75b8,stocks:_0x220176,return_qty:_0x455aaf,note:_0x53bc85,to_warehouse_name:_0x1ec2f6,to_Room_name:_0xce55b9}=_0x423dd6['body'];console[_0xfa234d(0x1da)](_0x423dd6[_0xfa234d(0x1e2)]);if(typeof _0x5643c4==_0xfa234d(0x1fc))var _0x39656e=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1b4)]],_0x5739ff=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1d4)]],_0x27a4cf=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1ad)]],_0x528636=[_0x423dd6['body'][_0xfa234d(0x1e4)]],_0x3676a7=[_0x423dd6['body']['sales_quantity']],_0x15e190=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1d0)]],_0xb1a8c9=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1c9)]],_0x3cbe1a=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1f2)]],_0x3cbb2e=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x208)]],_0x1f22db=[_0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1ba)]],_0x5c24e2=[_0x423dd6['body'][_0xfa234d(0x195)]];else var _0x39656e=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1b4)]],_0x5739ff=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1d4)]],_0x27a4cf=[..._0x423dd6[_0xfa234d(0x1e2)]['secondary_code']],_0x528636=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1e4)]],_0x3676a7=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x19e)]],_0x15e190=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1d0)]],_0xb1a8c9=[..._0x423dd6['body']['return_qty']],_0x3cbe1a=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1f2)]],_0x3cbb2e=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x208)]],_0x1f22db=[..._0x423dd6[_0xfa234d(0x1e2)][_0xfa234d(0x1ba)]],_0x5c24e2=[..._0x423dd6[_0xfa234d(0x1e2)]['floorlevel']];const _0x849c28=_0x39656e[_0xfa234d(0x1b1)](_0x1a6bdd=>{return _0x1a6bdd={'product_name':_0x1a6bdd};});_0x5739ff[_0xfa234d(0x1cc)]((_0x4e4112,_0xaaf5ab)=>{_0x849c28[_0xaaf5ab]['primary_code']=_0x4e4112;}),_0x27a4cf[_0xfa234d(0x1cc)]((_0x21d174,_0x102528)=>{var _0x28b389=_0xfa234d;_0x849c28[_0x102528][_0x28b389(0x1ad)]=_0x21d174;}),_0x528636[_0xfa234d(0x1cc)]((_0x1b685f,_0x19f9e0)=>{_0x849c28[_0x19f9e0]['product_code']=_0x1b685f;}),_0x3676a7[_0xfa234d(0x1cc)]((_0x5ca1e0,_0x19feb3)=>{var _0x5e8a9f=_0xfa234d;_0x849c28[_0x19feb3][_0x5e8a9f(0x1c8)]=_0x5ca1e0;}),_0x15e190[_0xfa234d(0x1cc)]((_0xa304ef,_0x18b759)=>{var _0x104331=_0xfa234d;_0x849c28[_0x18b759][_0x104331(0x1c4)]=_0xa304ef;}),_0xb1a8c9[_0xfa234d(0x1cc)]((_0x4051d4,_0x67d0af)=>{var _0x224863=_0xfa234d;_0x849c28[_0x67d0af][_0x224863(0x1c9)]=_0x4051d4;}),_0x3cbe1a[_0xfa234d(0x1cc)]((_0x3a01f5,_0x74ed21)=>{var _0x311304=_0xfa234d;_0x849c28[_0x74ed21][_0x311304(0x1f2)]=_0x3a01f5;}),_0x3cbb2e[_0xfa234d(0x1cc)]((_0x16ca18,_0x1d9d37)=>{_0x849c28[_0x1d9d37]['bin']=_0x16ca18;}),_0x1f22db['forEach']((_0x213d9c,_0x55c361)=>{var _0x518107=_0xfa234d;_0x849c28[_0x55c361][_0x518107(0x1d7)]=_0x213d9c;}),_0x5c24e2[_0xfa234d(0x1cc)]((_0x42fd09,_0x45831e)=>{var _0x253214=_0xfa234d;_0x849c28[_0x45831e][_0x253214(0x195)]=_0x42fd09;});var _0x539a13=0x0;_0x849c28['forEach'](_0x1c796a=>{var _0x28a1a5=_0xfa234d;console[_0x28a1a5(0x1da)](_0x28a1a5(0x1eb),_0x1c796a),(parseInt(_0x1c796a[_0x28a1a5(0x1c8)])<parseInt(_0x1c796a['return_qty'])||parseInt(_0x1c796a[_0x28a1a5(0x1c4)])<parseInt(_0x1c796a[_0x28a1a5(0x1c9)])&&parseInt(_0x1c796a[_0x28a1a5(0x1c8)])>parseInt(_0x1c796a[_0x28a1a5(0x1c9)])||parseInt(_0x1c796a['return_qty'])==0x0)&&_0x539a13++;});if(_0x539a13!=0x0)return _0x423dd6[_0xfa234d(0x1d9)]('errors',_0xfa234d(0x1be)),_0x578b55[_0xfa234d(0x1a7)](_0xfa234d(0x1b7));_0x7c4991['return_sale'][_0xfa234d(0x1cc)](_0xd6945c=>{var _0xba0c12=_0xfa234d;const _0x575745=_0x55edb9[_0xba0c12(0x1ca)][_0xba0c12(0x1b1)](_0x5107cb=>{var _0x201c10=_0xba0c12;_0x5107cb['product_name']==_0xd6945c[_0x201c10(0x1b4)]&&_0x5107cb['floorlevel']==_0xd6945c[_0x201c10(0x195)]&&_0x5107cb[_0x201c10(0x1d7)]==_0xd6945c[_0x201c10(0x1d7)]&&_0x5107cb[_0x201c10(0x208)]==_0xd6945c[_0x201c10(0x208)]&&_0x5107cb[_0x201c10(0x1f2)]==_0xd6945c[_0x201c10(0x1f2)]&&(_0x5107cb[_0x201c10(0x1d1)]=parseInt(_0x5107cb['product_stock'])+parseInt(_0xd6945c[_0x201c10(0x1c9)]));});}),console[_0xfa234d(0x1da)]('old_warehouse_data',_0x55edb9),await _0x55edb9['save'](),_0x7c4991[_0xfa234d(0x209)]=_0x3be8f7,_0x7c4991['customer']=_0x3e683a,_0x7c4991['date']=_0x38f277,_0x7c4991[_0xfa234d(0x1d2)]=_0x4b4662,_0x7c4991[_0xfa234d(0x1fb)]=_0x849c28,_0x7c4991[_0xfa234d(0x1b0)]=_0x53bc85,_0x7c4991[_0xfa234d(0x198)]=_0x1ec2f6,_0x7c4991[_0xfa234d(0x1ac)]=_0xce55b9;const _0x4b0147=await _0x7c4991[_0xfa234d(0x199)]();console[_0xfa234d(0x1da)](_0xfa234d(0x1d8),_0x4b0147);const _0x505055=await c_payment_data[_0xfa234d(0x1a6)]({'invoice':_0x423dd6['body'][_0xfa234d(0x209)],'reason':'Sale\x20Return'});_0x505055[_0xfa234d(0x200)]=_0x423dd6['body'][_0xfa234d(0x200)],_0x505055[_0xfa234d(0x202)]=_0x423dd6[_0xfa234d(0x1e2)]['date'],await _0x505055[_0xfa234d(0x199)](),_0x423dd6[_0xfa234d(0x1d9)](_0xfa234d(0x1bd),_0xfa234d(0x1ce)),_0x578b55['redirect']('/sales_return/view');}catch(_0x580585){console[_0xfa234d(0x1da)](_0x580585),_0x578b55[_0xfa234d(0x1c6)](0xc8)[_0xfa234d(0x197)]({'message':_0x580585[_0xfa234d(0x1c7)]});}}),router[a0_0x5eef9f(0x1ec)](a0_0x5eef9f(0x1b8),auth,async(_0x1fff2d,_0x36c9a1)=>{var _0xb4e29e=a0_0x5eef9f;try{const _0x186e1e=_0x1fff2d[_0xb4e29e(0x1bb)]['id'],{invoice:_0x56bfd2,customer:_0x2cc263,payable_to_customer:_0x9dc65e,paid_amount:_0x538d5f}=_0x1fff2d[_0xb4e29e(0x1e2)],_0x5a0610=await sales_return[_0xb4e29e(0x203)](_0x186e1e);console[_0xb4e29e(0x1da)](_0xb4e29e(0x1ef),_0x5a0610),console['log'](_0x9dc65e),console[_0xb4e29e(0x1da)](_0x538d5f);var _0x10ea4e=_0x9dc65e-_0x538d5f;console[_0xb4e29e(0x1da)](_0xb4e29e(0x1a8),_0x10ea4e),_0x5a0610[_0xb4e29e(0x1a5)]=parseFloat(_0x538d5f)+parseFloat(_0x5a0610[_0xb4e29e(0x1a5)]),_0x5a0610[_0xb4e29e(0x1c3)]=_0x10ea4e,console[_0xb4e29e(0x1da)](_0x5a0610);const _0xcd6919=await _0x5a0610[_0xb4e29e(0x199)]();console[_0xb4e29e(0x1da)](0x1b207);const _0x260ca9=await c_payment_data[_0xb4e29e(0x1a6)]({'invoice':_0x1fff2d[_0xb4e29e(0x1e2)]['invoice'],'reason':'Sale\x20Return'});console[_0xb4e29e(0x1da)](_0xb4e29e(0x1b2),_0x260ca9),_0x260ca9[_0xb4e29e(0x1d5)]=_0x10ea4e,await _0x260ca9['save']();let _0x30302c=new Date(),_0x27a7a8=('0'+_0x30302c['getDate']())[_0xb4e29e(0x1dc)](-0x2),_0x5e571c=('0'+(_0x30302c[_0xb4e29e(0x1e5)]()+0x1))[_0xb4e29e(0x1dc)](-0x2),_0xe30ac=_0x30302c[_0xb4e29e(0x207)](),_0x274ec8=_0xe30ac+'-'+_0x5e571c+'-'+_0x27a7a8;const _0x15cc75=new customer_payment({'invoice':_0x56bfd2,'date':_0xe30ac+'-'+_0x5e571c+'-'+_0x27a7a8,'customer':_0x2cc263,'reason':_0xb4e29e(0x1ee),'amount':_0x538d5f}),_0x692ada=await _0x15cc75[_0xb4e29e(0x199)]();_0x1fff2d['flash'](_0xb4e29e(0x1bd),_0xb4e29e(0x1e1)),_0x36c9a1[_0xb4e29e(0x1a7)]('/sales_return/view');}catch(_0x1fec10){console[_0xb4e29e(0x1da)](_0x1fec10);}}),router[a0_0x5eef9f(0x1aa)](a0_0x5eef9f(0x1f5),auth,async(_0x135d40,_0xd064fd)=>{var _0x5797ca=a0_0x5eef9f;try{const {username:_0x4f64a5,email:_0x1ddab8,role:_0x2559fe}=_0x135d40['user'],_0x100965=_0x135d40[_0x5797ca(0x1cb)],_0x458d6b=await profile[_0x5797ca(0x1a6)]({'email':_0x100965[_0x5797ca(0x1fd)]}),_0xe007df=await master_shop[_0x5797ca(0x1bc)]();console['log']('master',_0xe007df);const _0x1c5520=_0x135d40['params']['id'],_0x146ddb=await sales_return[_0x5797ca(0x203)](_0x1c5520);console[_0x5797ca(0x1da)](_0x146ddb);const _0x1d5ef5=await customer[_0x5797ca(0x1a6)]({'name':_0x146ddb[_0x5797ca(0x1bf)]});console[_0x5797ca(0x1da)](_0x1d5ef5);if(_0xe007df[0x0][_0x5797ca(0x1ed)]==_0x5797ca(0x1a4)){var _0x33b8ad=users[_0x5797ca(0x1f8)];console[_0x5797ca(0x1da)](_0x33b8ad);}else{if(_0xe007df[0x0][_0x5797ca(0x1ed)]==_0x5797ca(0x19d))var _0x33b8ad=users[_0x5797ca(0x19d)];else{if(_0xe007df[0x0][_0x5797ca(0x1ed)]=='German')var _0x33b8ad=users[_0x5797ca(0x1c2)];else{if(_0xe007df[0x0]['language']=='Spanish')var _0x33b8ad=users[_0x5797ca(0x1e9)];else{if(_0xe007df[0x0][_0x5797ca(0x1ed)]=='French')var _0x33b8ad=users['French'];else{if(_0xe007df[0x0]['language']==_0x5797ca(0x1cf))var _0x33b8ad=users[_0x5797ca(0x1f4)];else{if(_0xe007df[0x0][_0x5797ca(0x1ed)]==_0x5797ca(0x206))var _0x33b8ad=users[_0x5797ca(0x206)];else{if(_0xe007df[0x0][_0x5797ca(0x1ed)]==_0x5797ca(0x1b5))var _0x33b8ad=users['Arabic'];}}}}}}}_0xd064fd[_0x5797ca(0x1de)](_0x5797ca(0x19c),{'success':_0x135d40[_0x5797ca(0x1d9)](_0x5797ca(0x1bd)),'errors':_0x135d40[_0x5797ca(0x1d9)](_0x5797ca(0x19f)),'role':_0x100965,'profile':_0x458d6b,'master_shop':_0xe007df,'customers':_0x1d5ef5,'sales':_0x146ddb,'language':_0x33b8ad});}catch(_0x2c8965){console[_0x5797ca(0x1da)](_0x2c8965);}}),module['exports']=router;function a0_0x433f(_0x3837f0,_0xbb4ccc){var _0x1bb2a8=a0_0x1bb2();return a0_0x433f=function(_0x433fa0,_0x5b9949){_0x433fa0=_0x433fa0-0x194;var _0x2dd99b=_0x1bb2a8[_0x433fa0];return _0x2dd99b;},a0_0x433f(_0x3837f0,_0xbb4ccc);}function a0_0x1bb2(){var _0x13d1f7=['sales_quantity','errors','/view/:id','1252139bHnVJo','$product_details._id','$product_details.rack','English\x20(US)','paid_amount','findOne','redirect','subtract','Return\x20Goods','get','French','ToRoom','secondary_code','$customer_docs','28OnOsKG','note','map','c_payment','../models/all_models','product_name','Arabic\x20(ae)','$product_details.type','back','/give_payment/:id','6596980mGNygr','types','params','find','success','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','customer','$product_details.secondary_code','master','German','due_amount','stock','11430450zZMvYh','status','message','sale_qty','return_qty','product_details','user','forEach','old_data','purchase\x20return\x20successfully','Portuguese\x20(BR)','stocks','product_stock','warehouse_name','sales_return','primary_code','amount','5vBaJcd','type','new\x20new_data','flash','log','561wwGwEG','slice','365090JkfnNm','render','72cTyEYo','$product_details.product_stock','payment\x20successfull','body','../middleware/auth','product_code','getMonth','express','Return\x20Rooms','/view','Spanish','$name','foreach\x20newproduct','post','language','Returned\x20Payment\x20For\x20Sale\x20Return','data','4099500EIzTzN','$product_details.storage','bay','$product_details','Portuguese','/invoice/:id','../public/language/languages.json','$product_details.product_name','English','1562754YQcSWC','all_data','return_sale','string','email','$product_details.bin','Enabled','suppliers','name','date','findById','115174iDfYZq','$product_details.bay','Chinese','getFullYear','bin','invoice','Arabic','floorlevel','$product_details.primary_code','json','ToWarehouse','save','customer_docs','$product_details.floorlevel','sales_return_invoice','Hindi'];a0_0x1bb2=function(){return _0x13d1f7;};return a0_0x1bb2();}