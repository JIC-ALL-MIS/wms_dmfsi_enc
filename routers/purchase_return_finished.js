function a0_0x14a9(_0x4cb248,_0x532af4){const _0xb84dd8=a0_0xb84d();return a0_0x14a9=function(_0x14a9af,_0x5c9072){_0x14a9af=_0x14a9af-0xcc;let _0x3a94ae=_0xb84dd8[_0x14a9af];return _0x3a94ae;},a0_0x14a9(_0x4cb248,_0x532af4);}const a0_0x484cfd=a0_0x14a9;(function(_0x51a6fe,_0x3aa636){const _0x445aca=a0_0x14a9,_0x40056f=_0x51a6fe();while(!![]){try{const _0x5da7e7=-parseInt(_0x445aca(0xf6))/0x1+-parseInt(_0x445aca(0x11d))/0x2+parseInt(_0x445aca(0xe9))/0x3+parseInt(_0x445aca(0x113))/0x4+parseInt(_0x445aca(0xd0))/0x5+-parseInt(_0x445aca(0xda))/0x6+parseInt(_0x445aca(0xf8))/0x7*(parseInt(_0x445aca(0xef))/0x8);if(_0x5da7e7===_0x3aa636)break;else _0x40056f['push'](_0x40056f['shift']());}catch(_0x1bab8c){_0x40056f['push'](_0x40056f['shift']());}}}(a0_0xb84d,0x6fe54));const express=require(a0_0x484cfd(0x125)),app=express(),router=express[a0_0x484cfd(0xfa)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require(a0_0x484cfd(0x127)),auth=require(a0_0x484cfd(0x108)),users=require('../public/language/languages.json');router[a0_0x484cfd(0xd3)](a0_0x484cfd(0x123),auth,async(_0x258084,_0x47af9e)=>{const _0xb2e323=a0_0x484cfd;try{const {username:_0x1c57d2,email:_0x15dfc5,role:_0x184543}=_0x258084[_0xb2e323(0xcf)],_0x45ac9c=_0x258084[_0xb2e323(0xcf)],_0x30ccd2=await profile[_0xb2e323(0x120)]({'email':_0x45ac9c[_0xb2e323(0x124)]}),_0x4b2b79=await master_shop[_0xb2e323(0x111)]();console[_0xb2e323(0xf5)](_0xb2e323(0x134),_0x4b2b79);const _0x3cf67c=await purchases_return_finished[_0xb2e323(0xd7)]([{'$lookup':{'from':_0xb2e323(0x13f),'localField':_0xb2e323(0x13f),'foreignField':_0xb2e323(0x129),'as':'supplier_docs'}},{'$unwind':_0xb2e323(0xdd)},{'$unwind':_0xb2e323(0x133)},{'$group':{'_id':_0xb2e323(0xfe),'invoice':{'$first':_0xb2e323(0xdb)},'date':{'$first':_0xb2e323(0xe3)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':_0xb2e323(0x10a)},'product_name':{'$first':_0xb2e323(0x100)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':_0xb2e323(0x122)},'total':{'$sum':_0xb2e323(0xfb)},'note':{'$first':_0xb2e323(0x12c)},'total_amount':{'$first':_0xb2e323(0x10d)},'discount':{'$first':_0xb2e323(0xf3)},'receivable':{'$first':'$receivable'},'received':{'$first':_0xb2e323(0x11c)},'due_amount':{'$first':_0xb2e323(0x11b)},'mobile':{'$first':_0xb2e323(0xeb)},'email':{'$first':_0xb2e323(0xcd)},'address':{'$first':_0xb2e323(0x126)},'return_sum_qty':{'$sum':'$return_product.return_qty'}}}]);console['log'](_0x3cf67c);if(_0x4b2b79[0x0]['language']==_0xb2e323(0xf0)){var _0xaa0dde=users[_0xb2e323(0x135)];console[_0xb2e323(0xf5)](_0xaa0dde);}else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0x110))var _0xaa0dde=users['Hindi'];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0xe0))var _0xaa0dde=users['German'];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]=='Spanish')var _0xaa0dde=users['Spanish'];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0xe4))var _0xaa0dde=users['French'];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0x11a))var _0xaa0dde=users[_0xb2e323(0x102)];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0xf2))var _0xaa0dde=users['Chinese'];else{if(_0x4b2b79[0x0][_0xb2e323(0x101)]==_0xb2e323(0x137))var _0xaa0dde=users[_0xb2e323(0x106)];}}}}}}}_0x47af9e[_0xb2e323(0xce)](_0xb2e323(0xe6),{'success':_0x258084['flash'](_0xb2e323(0xf4)),'errors':_0x258084[_0xb2e323(0xe8)](_0xb2e323(0x13c)),'role':_0x45ac9c,'profile':_0x30ccd2,'master_shop':_0x4b2b79,'user':_0x3cf67c,'language':_0xaa0dde});}catch(_0xbc6565){console[_0xb2e323(0xf5)](_0xbc6565);}}),router[a0_0x484cfd(0xd3)](a0_0x484cfd(0x13e),auth,async(_0x1fe0d5,_0x1b0571)=>{const _0x487ed5=a0_0x484cfd;try{const {username:_0x20b963,email:_0x569374,role:_0x40d609}=_0x1fe0d5['user'],_0x3eb93c=_0x1fe0d5[_0x487ed5(0xcf)],_0x258977=await profile[_0x487ed5(0x120)]({'email':_0x3eb93c['email']}),_0x334153=await product[_0x487ed5(0x111)]({}),_0x20f57f=await master_shop[_0x487ed5(0x111)](),_0x16b041=_0x1fe0d5['params']['id'],_0x3674c4=await purchases_return_finished[_0x487ed5(0xf9)](_0x16b041),_0x6dd7dd=await warehouse['aggregate']([{'$match':{'name':_0x3674c4['warehouse_name'],'room':_0x3674c4[_0x487ed5(0x11f)],'warehouse_category':_0x487ed5(0x13b)}},{'$unwind':_0x487ed5(0xd9)},{'$group':{'_id':_0x487ed5(0x131),'name':{'$first':_0x487ed5(0x119)},'product_stock':{'$first':_0x487ed5(0x136)},'bay':{'$first':_0x487ed5(0xea)},'bin':{'$first':_0x487ed5(0xfd)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x487ed5(0xd2)},'primary_code':{'$first':_0x487ed5(0xe7)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x487ed5(0x112)},'storage':{'$first':_0x487ed5(0x105)},'rack':{'$first':_0x487ed5(0x10e)}}}]);warehouse_data=await warehouse[_0x487ed5(0xd7)]([{'$match':{'status':_0x487ed5(0x117),'name':'Return\x20Goods','warehouse_category':'Finished\x20Goods'}},{'$group':{'_id':_0x487ed5(0xd5),'name':{'$first':_0x487ed5(0xd5)}}},{'$sort':{'name':0x1}}]),console['log']('stock_data',_0x6dd7dd);if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0xf0)){var _0x15ccc0=users[_0x487ed5(0x135)];console[_0x487ed5(0xf5)](_0x15ccc0);}else{if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0x110))var _0x15ccc0=users['Hindi'];else{if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0xe0))var _0x15ccc0=users[_0x487ed5(0xe0)];else{if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0x11e))var _0x15ccc0=users['Spanish'];else{if(_0x20f57f[0x0]['language']==_0x487ed5(0xe4))var _0x15ccc0=users[_0x487ed5(0xe4)];else{if(_0x20f57f[0x0][_0x487ed5(0x101)]=='Portuguese\x20(BR)')var _0x15ccc0=users[_0x487ed5(0x102)];else{if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0xf2))var _0x15ccc0=users[_0x487ed5(0xf2)];else{if(_0x20f57f[0x0][_0x487ed5(0x101)]==_0x487ed5(0x137))var _0x15ccc0=users['Arabic'];}}}}}}}_0x1b0571[_0x487ed5(0xce)](_0x487ed5(0x10b),{'success':_0x1fe0d5[_0x487ed5(0xe8)](_0x487ed5(0xf4)),'errors':_0x1fe0d5[_0x487ed5(0xe8)](_0x487ed5(0x13c)),'role':_0x3eb93c,'master_shop':_0x20f57f,'profile':_0x258977,'user':_0x3674c4,'stock':_0x6dd7dd,'product':_0x334153,'language':_0x15ccc0,'warehouse':warehouse_data});}catch(_0x1a53d8){console[_0x487ed5(0xf5)](_0x1a53d8);}}),router[a0_0x484cfd(0x109)](a0_0x484cfd(0x13e),auth,async(_0x3252f0,_0x1d380e)=>{const _0x1bf555=a0_0x484cfd;try{const _0x205d45=_0x3252f0[_0x1bf555(0x107)]['id'],_0x40327b=await purchases_return_finished[_0x1bf555(0x120)]({'invoice':_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0xee)]}),_0x183302=await warehouse[_0x1bf555(0x120)]({'name':_0x40327b[_0x1bf555(0xed)],'room':_0x40327b[_0x1bf555(0xe5)],'warehouse_category':_0x1bf555(0x13b)}),{invoice:_0x3d6503,suppliers:_0x86ebd0,date:_0x201086,warehouse_name:_0x3fb933,product_name:_0x27b0eb,purchase_quantity:_0x2f1ce1,stocks:_0x28d744,return_qty:_0x1064f0,note:_0x23f1bf,Room_name:_0x3c3d18,level:_0xc4e7b0,isle:_0x1de3a1,pallet:_0x43a750,to_warehouse_name:_0x2d25ce,to_Room_name:_0x186f23}=_0x3252f0[_0x1bf555(0xcc)];if(typeof _0x27b0eb==_0x1bf555(0x12f))var _0x545a39=[_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0x128)]],_0x1a8fa5=[_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0x115)]],_0x1d8d1d=[_0x3252f0['body']['stocks']],_0x36193d=[_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0xff)]],_0xf5a017=[_0x3252f0[_0x1bf555(0xcc)]['level']],_0xf7c81f=[_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0x118)]],_0x4de2d6=[_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0x10c)]],_0x3af633=[_0x3252f0['body'][_0x1bf555(0xd8)]];else var _0x545a39=[..._0x3252f0['body']['product_name']],_0x1a8fa5=[..._0x3252f0[_0x1bf555(0xcc)]['purchase_quantity']],_0x1d8d1d=[..._0x3252f0[_0x1bf555(0xcc)]['stocks']],_0x36193d=[..._0x3252f0[_0x1bf555(0xcc)]['return_qty']],_0xf5a017=[..._0x3252f0[_0x1bf555(0xcc)]['level']],_0xf7c81f=[..._0x3252f0[_0x1bf555(0xcc)]['product_code_hide']],_0x4de2d6=[..._0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0x10c)]],_0x3af633=[..._0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0xd8)]];const _0x4f4f17=_0x545a39[_0x1bf555(0x13a)](_0x57b581=>{return _0x57b581={'product_name':_0x57b581};});_0x1a8fa5[_0x1bf555(0xdc)]((_0xc9fbcc,_0x5c1a4c)=>{const _0x339b71=_0x1bf555;_0x4f4f17[_0x5c1a4c][_0x339b71(0x115)]=_0xc9fbcc;}),_0x1d8d1d[_0x1bf555(0xdc)]((_0x9da6ca,_0x4b31d1)=>{const _0x3a93e8=_0x1bf555;_0x4f4f17[_0x4b31d1][_0x3a93e8(0x12e)]=_0x9da6ca;}),_0x36193d[_0x1bf555(0xdc)]((_0x231417,_0x5e902d)=>{_0x4f4f17[_0x5e902d]['return_qty']=_0x231417;}),_0xf5a017[_0x1bf555(0xdc)]((_0x29053b,_0x4e941b)=>{const _0x20b069=_0x1bf555;_0x4f4f17[_0x4e941b][_0x20b069(0x132)]=_0x29053b;}),_0xf7c81f['forEach']((_0x40a4f0,_0x125736)=>{const _0x5cb4b1=_0x1bf555;_0x4f4f17[_0x125736][_0x5cb4b1(0xf7)]=_0x40a4f0;}),_0x4de2d6[_0x1bf555(0xdc)]((_0xb59fa4,_0x561492)=>{const _0x51ac0a=_0x1bf555;_0x4f4f17[_0x561492][_0x51ac0a(0x12a)]=_0xb59fa4;}),_0x3af633['forEach']((_0x37ede6,_0x473d62)=>{const _0x56760b=_0x1bf555;_0x4f4f17[_0x473d62][_0x56760b(0x139)]=_0x37ede6;});var _0x47b6df=0x0;_0x4f4f17[_0x1bf555(0xdc)](_0x1a48dc=>{const _0xa73cab=_0x1bf555;(parseInt(_0x1a48dc[_0xa73cab(0x115)])<parseInt(_0x1a48dc[_0xa73cab(0xff)])||parseInt(_0x1a48dc[_0xa73cab(0x12e)])<parseInt(_0x1a48dc[_0xa73cab(0xff)]))&&_0x47b6df++;});if(_0x47b6df!=0x0)return _0x3252f0[_0x1bf555(0xe8)](_0x1bf555(0x13c),'Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x1d380e[_0x1bf555(0x121)]('back');_0x40327b[_0x1bf555(0x13d)][_0x1bf555(0xdc)](_0x57fb1c=>{const _0x380d10=_0x1bf555;if(_0x57fb1c[_0x380d10(0xff)]>0x0){const _0x422baa=_0x183302[_0x380d10(0xde)][_0x380d10(0x13a)](_0x501778=>{const _0x5a70f3=_0x380d10;_0x501778[_0x5a70f3(0x128)]==_0x57fb1c[_0x5a70f3(0x128)]&&_0x501778['bay']==_0x57fb1c['bay']&&(_0x501778['product_stock']=parseInt(_0x501778[_0x5a70f3(0xd6)])+parseInt(_0x57fb1c['return_qty']));});}}),await _0x183302[_0x1bf555(0xdf)](),_0x40327b[_0x1bf555(0xee)]=_0x3d6503,_0x40327b['suppliers']=_0x86ebd0,_0x40327b['date']=_0x201086,_0x40327b[_0x1bf555(0xe2)]=_0x3fb933,_0x40327b[_0x1bf555(0x13d)]=_0x4f4f17,_0x40327b[_0x1bf555(0xd4)]=_0x23f1bf,_0x40327b['room']=_0x3c3d18,_0x40327b[_0x1bf555(0xed)]=_0x2d25ce,_0x40327b[_0x1bf555(0xe5)]=_0x186f23;const _0x5ab0ef=await _0x40327b[_0x1bf555(0xdf)](),_0xfacf7f=await purchases_return_finished[_0x1bf555(0x120)]({'invoice':_0x3252f0[_0x1bf555(0xcc)]['invoice']}),_0x3cd0cd=await warehouse[_0x1bf555(0x120)]({'name':_0x3252f0[_0x1bf555(0xcc)][_0x1bf555(0xed)],'room':_0x3252f0['body'][_0x1bf555(0x12d)],'warehouse_category':_0x1bf555(0x13b)});_0xfacf7f['return_product'][_0x1bf555(0xdc)](_0x446f3c=>{const _0xfea2a1=_0x1bf555;_0x3cd0cd[_0xfea2a1(0xde)][_0xfea2a1(0x13a)](_0x5c4bc5=>{const _0x164c8a=_0xfea2a1;_0x5c4bc5[_0x164c8a(0x128)]==_0x446f3c[_0x164c8a(0x128)]&&_0x5c4bc5['bay']==_0x446f3c[_0x164c8a(0x132)]&&(_0x5c4bc5[_0x164c8a(0xd6)]=parseInt(_0x5c4bc5[_0x164c8a(0xd6)])-parseInt(_0x446f3c[_0x164c8a(0xff)]));});}),await _0x3cd0cd[_0x1bf555(0xdf)]();const _0x4e1a40=await s_payment_data['findOne']({'invoice':_0x3252f0[_0x1bf555(0xcc)]['invoice'],'reason':_0x1bf555(0x12b)});await _0x4e1a40['save'](),_0x3252f0[_0x1bf555(0xe8)](_0x1bf555(0xf4),_0x1bf555(0x103)),_0x1d380e[_0x1bf555(0x121)]('/purchases_return_finished/view');}catch(_0x2a697e){console[_0x1bf555(0xf5)](_0x2a697e),_0x1d380e[_0x1bf555(0x140)](0xc8)[_0x1bf555(0x104)]({'message':_0x2a697e[_0x1bf555(0xd1)]});}}),router[a0_0x484cfd(0xd3)](a0_0x484cfd(0x10f),auth,async(_0x17fba9,_0x43a8ee)=>{const _0x5de0e9=a0_0x484cfd;try{const {username:_0x32ddfc,email:_0x57304e,role:_0x1e800d}=_0x17fba9[_0x5de0e9(0xcf)],_0x404e9b=_0x17fba9['user'],_0x20692a=await profile[_0x5de0e9(0x120)]({'email':_0x404e9b[_0x5de0e9(0x124)]}),_0x3dd4b9=await master_shop[_0x5de0e9(0x111)]();console[_0x5de0e9(0xf5)](_0x5de0e9(0x134),_0x3dd4b9);const _0x1836a6=_0x17fba9[_0x5de0e9(0x107)]['id'],_0x49b175=await purchases_return[_0x5de0e9(0xf9)](_0x1836a6);console[_0x5de0e9(0xf5)](_0x49b175);const _0x920dd1=await suppliers[_0x5de0e9(0x120)]({'name':_0x49b175['suppliers']});console['log'](_0x920dd1);if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]=='English\x20(US)'){var _0x35c93e=users[_0x5de0e9(0x135)];console[_0x5de0e9(0xf5)](_0x35c93e);}else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]==_0x5de0e9(0x110))var _0x35c93e=users[_0x5de0e9(0x110)];else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]=='German')var _0x35c93e=users[_0x5de0e9(0xe0)];else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]==_0x5de0e9(0x11e))var _0x35c93e=users[_0x5de0e9(0x11e)];else{if(_0x3dd4b9[0x0]['language']==_0x5de0e9(0xe4))var _0x35c93e=users[_0x5de0e9(0xe4)];else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]==_0x5de0e9(0x11a))var _0x35c93e=users[_0x5de0e9(0x102)];else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]==_0x5de0e9(0xf2))var _0x35c93e=users[_0x5de0e9(0xf2)];else{if(_0x3dd4b9[0x0][_0x5de0e9(0x101)]=='Arabic\x20(ae)')var _0x35c93e=users['Arabic'];}}}}}}}_0x43a8ee[_0x5de0e9(0xce)](_0x5de0e9(0x138),{'success':_0x17fba9[_0x5de0e9(0xe8)](_0x5de0e9(0xf4)),'errors':_0x17fba9[_0x5de0e9(0xe8)]('errors'),'role':_0x404e9b,'profile':_0x20692a,'master_shop':_0x3dd4b9,'supplier':_0x920dd1,'purchase':_0x49b175,'language':_0x35c93e});}catch(_0x403602){console[_0x5de0e9(0xf5)](_0x403602);}}),router[a0_0x484cfd(0x109)]('/receive_payment/:id',auth,async(_0x5ad717,_0x316463)=>{const _0x2e7b2b=a0_0x484cfd;try{const _0x4d0ca3=_0x5ad717['params']['id'],{invoice:_0x32804e,suppliers:_0x44c24f,receivable_amount:_0x170040,received_amount:_0x29d9cc}=_0x5ad717['body'],_0x1c3290=await purchases_return[_0x2e7b2b(0xf9)](_0x4d0ca3);console['log'](_0x1c3290);var _0x22e4b0=_0x170040-_0x29d9cc;console[_0x2e7b2b(0xf5)](_0x29d9cc),_0x1c3290[_0x2e7b2b(0xe1)]=parseFloat(_0x29d9cc)+parseFloat(_0x1c3290[_0x2e7b2b(0xe1)]),_0x1c3290[_0x2e7b2b(0xfc)]=_0x22e4b0,console[_0x2e7b2b(0xf5)](_0x1c3290);const _0x1dc9c3=await _0x1c3290[_0x2e7b2b(0xdf)](),_0x378484=await s_payment_data[_0x2e7b2b(0x120)]({'invoice':_0x5ad717[_0x2e7b2b(0xcc)][_0x2e7b2b(0xee)],'reason':'Purchase\x20Return'});_0x378484[_0x2e7b2b(0x114)]=_0x22e4b0,await _0x378484[_0x2e7b2b(0xdf)]();let _0xd6a8c4=new Date(),_0x1372c2=('0'+_0xd6a8c4[_0x2e7b2b(0x130)]())[_0x2e7b2b(0xf1)](-0x2),_0x15627c=('0'+(_0xd6a8c4['getMonth']()+0x1))['slice'](-0x2),_0x39e5f4=_0xd6a8c4[_0x2e7b2b(0x116)](),_0x50a3a8=_0x39e5f4+'-'+_0x15627c+'-'+_0x1372c2;const _0x482661=new suppliers_payment({'invoice':_0x32804e,'date':_0x39e5f4+'-'+_0x15627c+'-'+_0x1372c2,'suppliers':_0x44c24f,'reason':_0x2e7b2b(0xec),'amount':_0x29d9cc}),_0x21695e=await _0x482661[_0x2e7b2b(0xdf)]();_0x5ad717[_0x2e7b2b(0xe8)]('success','payment\x20successfull'),_0x316463[_0x2e7b2b(0x121)]('/purchases_return/view');}catch(_0x18cd66){console['log'](_0x18cd66);}}),module['exports']=router;function a0_0xb84d(){const _0x327851=['$product_details','1958052ZnovGV','$invoice','forEach','$return_product','product_details','save','German','received','warehouse_name','$date','French','to_room','purchases_return_finished','$product_details.primary_code','flash','2732550jVyOju','$product_details.bay','$supplier_docs.mobile','Received\x20For\x20Purchase\x20Return','to_warehouse_name','invoice','2542920bUcnax','English\x20(US)','slice','Chinese','$discount','success','log','675596USSrto','product_code','7WUNBkB','findById','Router','$return_product.total','due_amount','$product_details.bin','$_id','return_qty','$return_product.product_name','language','Portuguese','purchase\x20return\x20successfully','json','$product_details.storage','Arabic','params','../middleware/auth','post','$warehouse_name','return_purchase_edit_finished','primary_code_hide','$total_amount','$product_details.rack','/invoice/:id','Hindi','find','$product_details.product_code','2505348EWbfwH','amount','purchase_quantity','getFullYear','Enabled','product_code_hide','$product_details.product_name','Portuguese\x20(BR)','$due_amount','$received','1373022SzxFiP','Spanish','room','findOne','redirect','$return_product.price','/view','email','express','$supplier_docs.address','../models/all_models','product_name','name','primary_code','Purchase\x20Return','$note','to_Room_name','stock_quantity','string','getDate','$product_details._id','bay','$supplier_docs','master','English','$product_details.product_stock','Arabic\x20(ae)','return_purchase_invoice','secondary_code','map','Finished\x20Goods','errors','return_product','/view/:id','suppliers','status','body','$supplier_docs.email','render','user','1458605CgutSt','message','$product_details.floorlevel','get','note','$name','product_stock','aggregate','secondary_code_hide'];a0_0xb84d=function(){return _0x327851;};return a0_0xb84d();}