var a0_0xaea336=a0_0x2e36;(function(_0x34f3ec,_0x5d43c3){var _0x5751db=a0_0x2e36,_0x6eaa68=_0x34f3ec();while(!![]){try{var _0x15bb75=-parseInt(_0x5751db(0xa7))/0x1+-parseInt(_0x5751db(0xa8))/0x2+-parseInt(_0x5751db(0xae))/0x3*(-parseInt(_0x5751db(0xeb))/0x4)+parseInt(_0x5751db(0x115))/0x5*(parseInt(_0x5751db(0xb0))/0x6)+-parseInt(_0x5751db(0xf7))/0x7*(parseInt(_0x5751db(0xfc))/0x8)+-parseInt(_0x5751db(0xe3))/0x9*(parseInt(_0x5751db(0xdb))/0xa)+-parseInt(_0x5751db(0xd0))/0xb*(-parseInt(_0x5751db(0xdd))/0xc);if(_0x15bb75===_0x5d43c3)break;else _0x6eaa68['push'](_0x6eaa68['shift']());}catch(_0x3df726){_0x6eaa68['push'](_0x6eaa68['shift']());}}}(a0_0x5489,0x18e82));const express=require('express'),app=express(),router=express[a0_0xaea336(0xd9)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0xaea336(0xe9)),auth=require(a0_0xaea336(0xf3)),users=require(a0_0xaea336(0x10a));router[a0_0xaea336(0x114)](a0_0xaea336(0xf4),auth,async(_0x2514be,_0x3eacbd)=>{var _0x29f81b=a0_0xaea336;try{const {username:_0x210cd0,email:_0x3d05d6,role:_0x12863e}=_0x2514be[_0x29f81b(0x107)],_0x1314a0=_0x2514be[_0x29f81b(0x107)],_0x59a1fd=await profile[_0x29f81b(0xfd)]({'email':_0x1314a0['email']}),_0x910b71=await master_shop['find']();console[_0x29f81b(0xd6)](_0x29f81b(0x104),_0x910b71);const _0x2db673=await sales_return['aggregate']([{'$lookup':{'from':_0x29f81b(0xc1),'localField':_0x29f81b(0xe1),'foreignField':_0x29f81b(0xfa),'as':_0x29f81b(0xe0)}},{'$unwind':_0x29f81b(0xb2)}]);console[_0x29f81b(0xd6)](_0x29f81b(0xa9),_0x2db673);if(_0x910b71[0x0][_0x29f81b(0x111)]==_0x29f81b(0xd8)){var _0x5598d8=users[_0x29f81b(0xb3)];console['log'](_0x5598d8);}else{if(_0x910b71[0x0]['language']==_0x29f81b(0x10c))var _0x5598d8=users[_0x29f81b(0x10c)];else{if(_0x910b71[0x0]['language']==_0x29f81b(0xea))var _0x5598d8=users[_0x29f81b(0xea)];else{if(_0x910b71[0x0][_0x29f81b(0x111)]==_0x29f81b(0xef))var _0x5598d8=users[_0x29f81b(0xef)];else{if(_0x910b71[0x0]['language']==_0x29f81b(0xc5))var _0x5598d8=users[_0x29f81b(0xc5)];else{if(_0x910b71[0x0][_0x29f81b(0x111)]==_0x29f81b(0xad))var _0x5598d8=users[_0x29f81b(0xf8)];else{if(_0x910b71[0x0][_0x29f81b(0x111)]==_0x29f81b(0x10d))var _0x5598d8=users[_0x29f81b(0x10d)];else{if(_0x910b71[0x0][_0x29f81b(0x111)]==_0x29f81b(0x106))var _0x5598d8=users[_0x29f81b(0xff)];}}}}}}}_0x3eacbd[_0x29f81b(0xc3)]('sales_return',{'success':_0x2514be[_0x29f81b(0xd1)](_0x29f81b(0xd7)),'errors':_0x2514be[_0x29f81b(0xd1)](_0x29f81b(0x100)),'role':_0x1314a0,'profile':_0x59a1fd,'master_shop':_0x910b71,'user':_0x2db673,'language':_0x5598d8});}catch(_0xe105ec){console[_0x29f81b(0xd6)](_0xe105ec);}}),router[a0_0xaea336(0x114)](a0_0xaea336(0xc8),auth,async(_0x24a075,_0x194540)=>{var _0xaaa0a4=a0_0xaea336;try{const {username:_0x1fc058,email:_0x50994f,role:_0x328383}=_0x24a075['user'],_0x245fac=_0x24a075[_0xaaa0a4(0x107)],_0x2daed7=await profile[_0xaaa0a4(0xfd)]({'email':_0x245fac[_0xaaa0a4(0xba)]}),_0x3ba597=await master_shop[_0xaaa0a4(0xf9)]();console['log'](_0xaaa0a4(0x104),_0x3ba597);const _0x4b2502=_0x24a075['params']['id'];console['log'](_0x4b2502);var _0x20c79f=[_0xaaa0a4(0xf0)];const _0x5ca635=await sales_return[_0xaaa0a4(0xc9)](_0x4b2502),_0x262572=await warehouse[_0xaaa0a4(0x10f)]([{'$match':{'name':_0x5ca635['ToWarehouse'],'room':_0x5ca635[_0xaaa0a4(0xc6)]}},{'$unwind':_0xaaa0a4(0xfe)},{'$group':{'_id':'$product_details._id','name':{'$first':_0xaaa0a4(0xaa)},'product_stock':{'$first':_0xaaa0a4(0xf2)},'bay':{'$first':_0xaaa0a4(0xc4)},'bin':{'$first':_0xaaa0a4(0xcc)},'type':{'$first':_0xaaa0a4(0xed)},'floorlevel':{'$first':_0xaaa0a4(0x10e)},'primary_code':{'$first':_0xaaa0a4(0x116)},'secondary_code':{'$first':_0xaaa0a4(0xe5)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'}}}]);console[_0xaaa0a4(0xd6)](_0x262572);const _0x1eb520=await warehouse[_0xaaa0a4(0x10f)]([{'$match':{'status':_0xaaa0a4(0xe7),'name':_0xaaa0a4(0xc7),'warehouse_category':_0xaaa0a4(0xbd)}},{'$group':{'_id':'$name','name':{'$first':_0xaaa0a4(0xe6)}}},{'$sort':{'name':0x1}}]),_0x32cc60=await product['find']({});if(_0x3ba597[0x0][_0xaaa0a4(0x111)]==_0xaaa0a4(0xd8)){var _0x305833=users[_0xaaa0a4(0xb3)];console[_0xaaa0a4(0xd6)](_0x305833);}else{if(_0x3ba597[0x0]['language']==_0xaaa0a4(0x10c))var _0x305833=users['Hindi'];else{if(_0x3ba597[0x0]['language']=='German')var _0x305833=users[_0xaaa0a4(0xea)];else{if(_0x3ba597[0x0][_0xaaa0a4(0x111)]==_0xaaa0a4(0xef))var _0x305833=users[_0xaaa0a4(0xef)];else{if(_0x3ba597[0x0]['language']==_0xaaa0a4(0xc5))var _0x305833=users[_0xaaa0a4(0xc5)];else{if(_0x3ba597[0x0][_0xaaa0a4(0x111)]==_0xaaa0a4(0xad))var _0x305833=users[_0xaaa0a4(0xf8)];else{if(_0x3ba597[0x0][_0xaaa0a4(0x111)]=='Chinese')var _0x305833=users[_0xaaa0a4(0x10d)];else{if(_0x3ba597[0x0][_0xaaa0a4(0x111)]=='Arabic\x20(ae)')var _0x305833=users[_0xaaa0a4(0xff)];}}}}}}}_0x194540[_0xaaa0a4(0xc3)](_0xaaa0a4(0xca),{'success':_0x24a075[_0xaaa0a4(0xd1)]('success'),'errors':_0x24a075[_0xaaa0a4(0xd1)](_0xaaa0a4(0x100)),'role':_0x245fac,'profile':_0x2daed7,'master_shop':_0x3ba597,'user':_0x5ca635,'stock':_0x262572,'unit':_0x32cc60,'language':_0x305833,'warehouses':_0x1eb520,'rooms':_0x20c79f});}catch(_0x55e59a){console['log'](_0x55e59a);}}),router['post']('/view/:id',auth,async(_0x5bfda7,_0x59267d)=>{var _0xf238dc=a0_0xaea336;try{const _0x5648a6=_0x5bfda7[_0xf238dc(0xe4)]['id'];console[_0xf238dc(0xd6)](_0x5648a6);const _0x1dc062=await sales_return['findOne']({'invoice':_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xe2)]});console[_0xf238dc(0xd6)](_0xf238dc(0xd4),_0x1dc062);const _0x81c696=await warehouse[_0xf238dc(0xfd)]({'name':_0x1dc062[_0xf238dc(0x101)],'room':_0x1dc062[_0xf238dc(0xc6)]});console[_0xf238dc(0xd6)](_0xf238dc(0xf6),_0x81c696);const {invoice:_0x5f0fea,customer:_0x32b61b,date:_0x4f5b65,warehouse_name:_0x1d1f0f,product_name:_0x76f7e3,primary_code:_0xe55d27,secondary_code:_0x14f647,product_code:_0x3990f2,sales_quantity:_0x1f48d2,stocks:_0x136c7b,return_qty:_0x375c4e,note:_0x5da704,to_warehouse_name:_0x1c3ff0,to_Room_name:_0x3fe07f}=_0x5bfda7[_0xf238dc(0x102)];console[_0xf238dc(0xd6)](_0x5bfda7[_0xf238dc(0x102)]);if(typeof _0x76f7e3==_0xf238dc(0xda))var _0x126553=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0x10b)]],_0x3d75a0=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xcb)]],_0x27a314=[_0x5bfda7['body'][_0xf238dc(0xd5)]],_0x3a70f8=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xbe)]],_0x5d407f=[_0x5bfda7['body'][_0xf238dc(0xf1)]],_0x124d75=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xf5)]],_0x105156=[_0x5bfda7['body'][_0xf238dc(0xfb)]],_0x4754be=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xee)]],_0x4052ba=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xc0)]],_0x12af0a=[_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xdc)]],_0x2f9933=[_0x5bfda7['body'][_0xf238dc(0x109)]];else var _0x126553=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0x10b)]],_0x3d75a0=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xcb)]],_0x27a314=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xd5)]],_0x3a70f8=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xbe)]],_0x5d407f=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xf1)]],_0x124d75=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xf5)]],_0x105156=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xfb)]],_0x4754be=[..._0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xee)]],_0x4052ba=[..._0x5bfda7['body']['bin']],_0x12af0a=[..._0x5bfda7[_0xf238dc(0x102)]['types']],_0x2f9933=[..._0x5bfda7[_0xf238dc(0x102)]['floorlevel']];const _0x46990a=_0x126553['map'](_0x4379dc=>{return _0x4379dc={'product_name':_0x4379dc};});_0x3d75a0['forEach']((_0x2f866e,_0x161785)=>{var _0xc8db5d=_0xf238dc;_0x46990a[_0x161785][_0xc8db5d(0xcb)]=_0x2f866e;}),_0x27a314['forEach']((_0x306da3,_0x3ab513)=>{var _0x462ed7=_0xf238dc;_0x46990a[_0x3ab513][_0x462ed7(0xd5)]=_0x306da3;}),_0x3a70f8[_0xf238dc(0xcd)]((_0x11c299,_0x35c76c)=>{_0x46990a[_0x35c76c]['product_code']=_0x11c299;}),_0x5d407f[_0xf238dc(0xcd)]((_0x46f0ff,_0x46a0b1)=>{_0x46990a[_0x46a0b1]['sale_qty']=_0x46f0ff;}),_0x124d75['forEach']((_0x4e4be4,_0x4f5550)=>{var _0x317848=_0xf238dc;_0x46990a[_0x4f5550][_0x317848(0xe8)]=_0x4e4be4;}),_0x105156[_0xf238dc(0xcd)]((_0x47777c,_0x4edad3)=>{_0x46990a[_0x4edad3]['return_qty']=_0x47777c;}),_0x4754be[_0xf238dc(0xcd)]((_0x3b75a5,_0x14324a)=>{var _0x37cd0a=_0xf238dc;_0x46990a[_0x14324a][_0x37cd0a(0xee)]=_0x3b75a5;}),_0x4052ba[_0xf238dc(0xcd)]((_0x486f4d,_0x31c30c)=>{var _0x57cf90=_0xf238dc;_0x46990a[_0x31c30c][_0x57cf90(0xc0)]=_0x486f4d;}),_0x12af0a[_0xf238dc(0xcd)]((_0x48367b,_0x4bbe2d)=>{var _0xf920f1=_0xf238dc;_0x46990a[_0x4bbe2d][_0xf920f1(0xce)]=_0x48367b;}),_0x2f9933[_0xf238dc(0xcd)]((_0x433654,_0x207498)=>{var _0x30f001=_0xf238dc;_0x46990a[_0x207498][_0x30f001(0x109)]=_0x433654;});var _0x198d8d=0x0;_0x46990a[_0xf238dc(0xcd)](_0x215791=>{var _0x3df186=_0xf238dc;console[_0x3df186(0xd6)](_0x3df186(0xbc),_0x215791),(parseInt(_0x215791[_0x3df186(0xb7)])<parseInt(_0x215791[_0x3df186(0xfb)])||parseInt(_0x215791[_0x3df186(0xe8)])<parseInt(_0x215791[_0x3df186(0xfb)])&&parseInt(_0x215791[_0x3df186(0xb7)])>parseInt(_0x215791['return_qty'])||parseInt(_0x215791[_0x3df186(0xfb)])==0x0)&&_0x198d8d++;});if(_0x198d8d!=0x0)return _0x5bfda7['flash']('errors',_0xf238dc(0xd2)),_0x59267d['redirect'](_0xf238dc(0xbb));_0x1dc062[_0xf238dc(0x113)][_0xf238dc(0xcd)](_0x5c5f19=>{var _0x4fef4f=_0xf238dc;const _0x33ee77=_0x81c696[_0x4fef4f(0x11a)][_0x4fef4f(0x103)](_0x3a3a40=>{var _0x594a81=_0x4fef4f;_0x3a3a40[_0x594a81(0x10b)]==_0x5c5f19['product_name']&&_0x3a3a40['floorlevel']==_0x5c5f19[_0x594a81(0x109)]&&_0x3a3a40[_0x594a81(0xce)]==_0x5c5f19['type']&&_0x3a3a40[_0x594a81(0xc0)]==_0x5c5f19['bin']&&_0x3a3a40[_0x594a81(0xee)]==_0x5c5f19['bay']&&(_0x3a3a40[_0x594a81(0xdf)]=parseInt(_0x3a3a40[_0x594a81(0xdf)])+parseInt(_0x5c5f19[_0x594a81(0xfb)]));});}),console[_0xf238dc(0xd6)](_0xf238dc(0xf6),_0x81c696),await _0x81c696[_0xf238dc(0xc2)](),_0x1dc062['invoice']=_0x5f0fea,_0x1dc062[_0xf238dc(0xe1)]=_0x32b61b,_0x1dc062[_0xf238dc(0xcf)]=_0x4f5b65,_0x1dc062['warehouse_name']=_0x1d1f0f,_0x1dc062[_0xf238dc(0x113)]=_0x46990a,_0x1dc062[_0xf238dc(0x112)]=_0x5da704,_0x1dc062[_0xf238dc(0x101)]=_0x1c3ff0,_0x1dc062[_0xf238dc(0xc6)]=_0x3fe07f;const _0x419759=await _0x1dc062[_0xf238dc(0xc2)]();console[_0xf238dc(0xd6)]('new\x20new_data',_0x419759);const _0x3fbcae=await c_payment_data[_0xf238dc(0xfd)]({'invoice':_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xe2)],'reason':'Sale\x20Return'});_0x3fbcae[_0xf238dc(0xb4)]=_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xb4)],_0x3fbcae[_0xf238dc(0xcf)]=_0x5bfda7[_0xf238dc(0x102)][_0xf238dc(0xcf)],await _0x3fbcae[_0xf238dc(0xc2)](),_0x5bfda7[_0xf238dc(0xd1)]('success',_0xf238dc(0xb6)),_0x59267d[_0xf238dc(0xac)](_0xf238dc(0xb5));}catch(_0x36bbc3){console[_0xf238dc(0xd6)](_0x36bbc3),_0x59267d[_0xf238dc(0xb9)](0xc8)[_0xf238dc(0x119)]({'message':_0x36bbc3[_0xf238dc(0xab)]});}}),router['post']('/give_payment/:id',auth,async(_0x5b2569,_0x1299fc)=>{var _0x18f306=a0_0xaea336;try{const _0x39575f=_0x5b2569[_0x18f306(0xe4)]['id'],{invoice:_0x2553f5,customer:_0x38ac2b,payable_to_customer:_0x379f34,paid_amount:_0x3997f4}=_0x5b2569[_0x18f306(0x102)],_0x3780ec=await sales_return[_0x18f306(0xc9)](_0x39575f);console['log'](_0x18f306(0xaf),_0x3780ec),console[_0x18f306(0xd6)](_0x379f34),console[_0x18f306(0xd6)](_0x3997f4);var _0x4a552b=_0x379f34-_0x3997f4;console[_0x18f306(0xd6)](_0x18f306(0x110),_0x4a552b),_0x3780ec['paid_amount']=parseFloat(_0x3997f4)+parseFloat(_0x3780ec[_0x18f306(0xec)]),_0x3780ec['due_amount']=_0x4a552b,console['log'](_0x3780ec);const _0x4de0b4=await _0x3780ec[_0x18f306(0xc2)]();console[_0x18f306(0xd6)](0x1b207);const _0x24e709=await c_payment_data[_0x18f306(0xfd)]({'invoice':_0x5b2569[_0x18f306(0x102)][_0x18f306(0xe2)],'reason':_0x18f306(0xde)});console[_0x18f306(0xd6)](_0x18f306(0xb1),_0x24e709),_0x24e709[_0x18f306(0xbf)]=_0x4a552b,await _0x24e709['save']();let _0x12dee2=new Date(),_0xad6a6=('0'+_0x12dee2[_0x18f306(0xd3)]())[_0x18f306(0x105)](-0x2),_0x354e78=('0'+(_0x12dee2['getMonth']()+0x1))['slice'](-0x2),_0x19cfd9=_0x12dee2[_0x18f306(0x117)](),_0x484d0b=_0x19cfd9+'-'+_0x354e78+'-'+_0xad6a6;const _0x10f508=new customer_payment({'invoice':_0x2553f5,'date':_0x19cfd9+'-'+_0x354e78+'-'+_0xad6a6,'customer':_0x38ac2b,'reason':_0x18f306(0x108),'amount':_0x3997f4}),_0x4a1600=await _0x10f508[_0x18f306(0xc2)]();_0x5b2569[_0x18f306(0xd1)]('success','payment\x20successfull'),_0x1299fc[_0x18f306(0xac)](_0x18f306(0xb5));}catch(_0xa2ad6e){console[_0x18f306(0xd6)](_0xa2ad6e);}}),router['get']('/invoice/:id',auth,async(_0x4c0ea5,_0x37056e)=>{var _0x27d3f5=a0_0xaea336;try{const {username:_0x4b842f,email:_0xcfbc3b,role:_0x117899}=_0x4c0ea5['user'],_0x371e5a=_0x4c0ea5[_0x27d3f5(0x107)],_0x4de9d9=await profile[_0x27d3f5(0xfd)]({'email':_0x371e5a[_0x27d3f5(0xba)]}),_0x140dca=await master_shop[_0x27d3f5(0xf9)]();console['log']('master',_0x140dca);const _0x2315bb=_0x4c0ea5[_0x27d3f5(0xe4)]['id'],_0x39576f=await sales_return[_0x27d3f5(0xc9)](_0x2315bb);console[_0x27d3f5(0xd6)](_0x39576f);const _0x18ec4d=await customer[_0x27d3f5(0xfd)]({'name':_0x39576f[_0x27d3f5(0xe1)]});console[_0x27d3f5(0xd6)](_0x18ec4d);if(_0x140dca[0x0][_0x27d3f5(0x111)]==_0x27d3f5(0xd8)){var _0x433042=users[_0x27d3f5(0xb3)];console[_0x27d3f5(0xd6)](_0x433042);}else{if(_0x140dca[0x0][_0x27d3f5(0x111)]=='Hindi')var _0x433042=users[_0x27d3f5(0x10c)];else{if(_0x140dca[0x0]['language']==_0x27d3f5(0xea))var _0x433042=users['German'];else{if(_0x140dca[0x0]['language']==_0x27d3f5(0xef))var _0x433042=users['Spanish'];else{if(_0x140dca[0x0]['language']==_0x27d3f5(0xc5))var _0x433042=users['French'];else{if(_0x140dca[0x0][_0x27d3f5(0x111)]==_0x27d3f5(0xad))var _0x433042=users[_0x27d3f5(0xf8)];else{if(_0x140dca[0x0][_0x27d3f5(0x111)]==_0x27d3f5(0x10d))var _0x433042=users['Chinese'];else{if(_0x140dca[0x0][_0x27d3f5(0x111)]=='Arabic\x20(ae)')var _0x433042=users['Arabic'];}}}}}}}_0x37056e[_0x27d3f5(0xc3)](_0x27d3f5(0xb8),{'success':_0x4c0ea5['flash']('success'),'errors':_0x4c0ea5[_0x27d3f5(0xd1)](_0x27d3f5(0x100)),'role':_0x371e5a,'profile':_0x4de9d9,'master_shop':_0x140dca,'customers':_0x18ec4d,'sales':_0x39576f,'language':_0x433042});}catch(_0x2b4db3){console['log'](_0x2b4db3);}}),module[a0_0xaea336(0x118)]=router;function a0_0x2e36(_0x378d24,_0x36991d){var _0x5489de=a0_0x5489();return a0_0x2e36=function(_0x2e36a4,_0x3b3b19){_0x2e36a4=_0x2e36a4-0xa7;var _0x4a4d96=_0x5489de[_0x2e36a4];return _0x4a4d96;},a0_0x2e36(_0x378d24,_0x36991d);}function a0_0x5489(){var _0x2e9309=['language','note','return_sale','get','697435MwNHWH','$product_details.primary_code','getFullYear','exports','json','product_details','52449zykusg','311390trMtfA','all_data','$product_details.product_name','message','redirect','Portuguese\x20(BR)','136173DZefKd','data','6pRwnmB','c_payment','$customer_docs','English','suppliers','/sales_return/view','purchase\x20return\x20successfully','sale_qty','sales_return_invoice','status','email','back','foreach\x20newproduct','Raw\x20Materials','product_code','amount','bin','customers','save','render','$product_details.bay','French','ToRoom','Return\x20Goods','/view/:id','findById','return_sale_edit','primary_code','$product_details.bin','forEach','type','date','254078fVbzfe','flash','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','getDate','old_data','secondary_code','log','success','English\x20(US)','Router','string','39770hkZcJt','types','168lRZBiX','Sale\x20Return','product_stock','customer_docs','customer','invoice','369eygYBL','params','$product_details.secondary_code','$name','Enabled','stock','../models/all_models','German','8DFurDz','paid_amount','$product_details.type','bay','Spanish','Return\x20Rooms','sales_quantity','$product_details.product_stock','../middleware/auth','/view','stocks','old_warehouse_data','7XRXDxu','Portuguese','find','name','return_qty','643376ofztrJ','findOne','$product_details','Arabic','errors','ToWarehouse','body','map','master','slice','Arabic\x20(ae)','user','Returned\x20Payment\x20For\x20Sale\x20Return','floorlevel','../public/language/languages.json','product_name','Hindi','Chinese','$product_details.floorlevel','aggregate','subtract'];a0_0x5489=function(){return _0x2e9309;};return a0_0x5489();}