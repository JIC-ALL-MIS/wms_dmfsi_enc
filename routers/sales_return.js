var a0_0x730217=a0_0x2988;function a0_0x2988(_0x440495,_0x563103){var _0x465ff8=a0_0x465f();return a0_0x2988=function(_0x298880,_0x50519){_0x298880=_0x298880-0x19c;var _0x2359f6=_0x465ff8[_0x298880];return _0x2359f6;},a0_0x2988(_0x440495,_0x563103);}(function(_0x2f666c,_0x2763da){var _0x727322=a0_0x2988,_0xe91e6c=_0x2f666c();while(!![]){try{var _0x525f7d=-parseInt(_0x727322(0x200))/0x1*(-parseInt(_0x727322(0x1c4))/0x2)+-parseInt(_0x727322(0x1b4))/0x3*(parseInt(_0x727322(0x1cc))/0x4)+-parseInt(_0x727322(0x1bb))/0x5+-parseInt(_0x727322(0x1b2))/0x6+parseInt(_0x727322(0x1ce))/0x7+-parseInt(_0x727322(0x1e4))/0x8*(parseInt(_0x727322(0x1a8))/0x9)+parseInt(_0x727322(0x1cd))/0xa*(parseInt(_0x727322(0x1c7))/0xb);if(_0x525f7d===_0x2763da)break;else _0xe91e6c['push'](_0xe91e6c['shift']());}catch(_0x24f40f){_0xe91e6c['push'](_0xe91e6c['shift']());}}}(a0_0x465f,0x6652a));const express=require(a0_0x730217(0x1e8)),app=express(),router=express[a0_0x730217(0x1d8)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x730217(0x1c1)),auth=require('../middleware/auth'),users=require(a0_0x730217(0x1e7));router[a0_0x730217(0x1c8)](a0_0x730217(0x1b8),auth,async(_0x353480,_0x619da9)=>{var _0x4ca7f5=a0_0x730217;try{const {username:_0x364321,email:_0xc96082,role:_0x4053e2}=_0x353480[_0x4ca7f5(0x208)],_0x4f3e2c=_0x353480['user'],_0x5106b5=await profile['findOne']({'email':_0x4f3e2c['email']}),_0xcb24f3=await master_shop[_0x4ca7f5(0x1e1)]();console[_0x4ca7f5(0x1b6)]('master',_0xcb24f3);const _0x17586f=await sales_return[_0x4ca7f5(0x206)]([{'$lookup':{'from':_0x4ca7f5(0x1d0),'localField':_0x4ca7f5(0x1cb),'foreignField':_0x4ca7f5(0x1f4),'as':'customer_docs'}},{'$unwind':_0x4ca7f5(0x20b)}]);console[_0x4ca7f5(0x1b6)](_0x4ca7f5(0x1f3),_0x17586f);if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1b5)){var _0x1f46d8=users[_0x4ca7f5(0x1c5)];console['log'](_0x1f46d8);}else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x202))var _0x1f46d8=users[_0x4ca7f5(0x202)];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1d5))var _0x1f46d8=users['German'];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1ea))var _0x1f46d8=users[_0x4ca7f5(0x1ea)];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1aa))var _0x1f46d8=users[_0x4ca7f5(0x1aa)];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1df))var _0x1f46d8=users[_0x4ca7f5(0x1e3)];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x201))var _0x1f46d8=users[_0x4ca7f5(0x201)];else{if(_0xcb24f3[0x0][_0x4ca7f5(0x1dc)]==_0x4ca7f5(0x1db))var _0x1f46d8=users['Arabic'];}}}}}}}_0x619da9[_0x4ca7f5(0x19d)](_0x4ca7f5(0x1c6),{'success':_0x353480['flash'](_0x4ca7f5(0x1f2)),'errors':_0x353480[_0x4ca7f5(0x1a2)](_0x4ca7f5(0x1bf)),'role':_0x4f3e2c,'profile':_0x5106b5,'master_shop':_0xcb24f3,'user':_0x17586f,'language':_0x1f46d8});}catch(_0x165e35){console[_0x4ca7f5(0x1b6)](_0x165e35);}}),router[a0_0x730217(0x1c8)](a0_0x730217(0x1e2),auth,async(_0xed010d,_0x210a53)=>{var _0x321b6e=a0_0x730217;try{const {username:_0x175510,email:_0x4c2caa,role:_0x18c601}=_0xed010d[_0x321b6e(0x208)],_0xcd65d7=_0xed010d[_0x321b6e(0x208)],_0x3517cd=await profile[_0x321b6e(0x1b0)]({'email':_0xcd65d7[_0x321b6e(0x1af)]}),_0x25aba3=await master_shop[_0x321b6e(0x1e1)]();console[_0x321b6e(0x1b6)](_0x321b6e(0x1c9),_0x25aba3);const _0xa354dc=_0xed010d[_0x321b6e(0x1d3)]['id'];console['log'](_0xa354dc);var _0x1d74b2=[_0x321b6e(0x19e)];const _0x4c1d78=await sales_return[_0x321b6e(0x1da)](_0xa354dc),_0x45efc5=await warehouse[_0x321b6e(0x206)]([{'$match':{'name':_0x4c1d78[_0x321b6e(0x1bc)],'room':_0x4c1d78[_0x321b6e(0x1d2)]}},{'$unwind':_0x321b6e(0x1fe)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x321b6e(0x209)},'product_stock':{'$first':_0x321b6e(0x1ab)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x321b6e(0x1d6)},'type':{'$first':_0x321b6e(0x1e9)},'floorlevel':{'$first':_0x321b6e(0x1b9)},'primary_code':{'$first':_0x321b6e(0x1f8)},'secondary_code':{'$first':_0x321b6e(0x1f7)},'product_code':{'$first':_0x321b6e(0x1b1)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'}}}]);console['log'](_0x45efc5);const _0x2b50e8=await warehouse[_0x321b6e(0x206)]([{'$match':{'status':_0x321b6e(0x1ae),'name':_0x321b6e(0x1fa),'warehouse_category':_0x321b6e(0x1a7)}},{'$group':{'_id':_0x321b6e(0x207),'name':{'$first':_0x321b6e(0x207)}}},{'$sort':{'name':0x1}}]),_0x5516c8=await product[_0x321b6e(0x1e1)]({});if(_0x25aba3[0x0][_0x321b6e(0x1dc)]==_0x321b6e(0x1b5)){var _0x517641=users['English'];console[_0x321b6e(0x1b6)](_0x517641);}else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]=='Hindi')var _0x517641=users[_0x321b6e(0x202)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]==_0x321b6e(0x1d5))var _0x517641=users[_0x321b6e(0x1d5)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]==_0x321b6e(0x1ea))var _0x517641=users[_0x321b6e(0x1ea)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]=='French')var _0x517641=users[_0x321b6e(0x1aa)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]==_0x321b6e(0x1df))var _0x517641=users[_0x321b6e(0x1e3)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]=='Chinese')var _0x517641=users[_0x321b6e(0x201)];else{if(_0x25aba3[0x0][_0x321b6e(0x1dc)]==_0x321b6e(0x1db))var _0x517641=users['Arabic'];}}}}}}}_0x210a53[_0x321b6e(0x19d)](_0x321b6e(0x204),{'success':_0xed010d['flash'](_0x321b6e(0x1f2)),'errors':_0xed010d['flash'](_0x321b6e(0x1bf)),'role':_0xcd65d7,'profile':_0x3517cd,'master_shop':_0x25aba3,'user':_0x4c1d78,'stock':_0x45efc5,'unit':_0x5516c8,'language':_0x517641,'warehouses':_0x2b50e8,'rooms':_0x1d74b2});}catch(_0x115a65){console[_0x321b6e(0x1b6)](_0x115a65);}}),router[a0_0x730217(0x1ad)](a0_0x730217(0x1e2),auth,async(_0x595da0,_0x3f794c)=>{var _0x4f95f5=a0_0x730217;try{const _0x24145c=_0x595da0[_0x4f95f5(0x1d3)]['id'];console[_0x4f95f5(0x1b6)](_0x24145c);const _0x26c07b=await sales_return['findOne']({'invoice':_0x595da0[_0x4f95f5(0x1a5)]['invoice']});console[_0x4f95f5(0x1b6)](_0x4f95f5(0x1ba),_0x26c07b);const _0x37d43e=await warehouse[_0x4f95f5(0x1b0)]({'name':_0x26c07b['ToWarehouse'],'room':_0x26c07b[_0x4f95f5(0x1d2)]});console[_0x4f95f5(0x1b6)](_0x4f95f5(0x1f1),_0x37d43e);const {invoice:_0x245096,customer:_0x54b568,date:_0x5c645d,warehouse_name:_0x3a53ad,product_name:_0x429e7f,primary_code:_0x3bdaa2,secondary_code:_0x388428,product_code:_0x589ec5,sales_quantity:_0x52cd2e,stocks:_0x820966,return_qty:_0x3ea356,note:_0x506335,to_warehouse_name:_0x1856a1,to_Room_name:_0x4d3341}=_0x595da0[_0x4f95f5(0x1a5)];console['log'](_0x595da0[_0x4f95f5(0x1a5)]);if(typeof _0x429e7f=='string')var _0x234e7f=[_0x595da0['body'][_0x4f95f5(0x1d4)]],_0x276a3f=[_0x595da0['body'][_0x4f95f5(0x20d)]],_0x3cdf18=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1a4)]],_0x10e5c0=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1d9)]],_0x487aca=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1f5)]],_0x419176=[_0x595da0[_0x4f95f5(0x1a5)]['stocks']],_0x43cc2b=[_0x595da0[_0x4f95f5(0x1a5)]['return_qty']],_0x274da2=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1f6)]],_0x3ba0f8=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1dd)]],_0x5e8746=[_0x595da0[_0x4f95f5(0x1a5)]['types']],_0x336f5c=[_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1ed)]];else var _0x234e7f=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1d4)]],_0x276a3f=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x20d)]],_0x3cdf18=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1a4)]],_0x10e5c0=[..._0x595da0[_0x4f95f5(0x1a5)]['product_code']],_0x487aca=[..._0x595da0[_0x4f95f5(0x1a5)]['sales_quantity']],_0x419176=[..._0x595da0[_0x4f95f5(0x1a5)]['stocks']],_0x43cc2b=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x19c)]],_0x274da2=[..._0x595da0[_0x4f95f5(0x1a5)]['bay']],_0x3ba0f8=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1dd)]],_0x5e8746=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1f9)]],_0x336f5c=[..._0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1ed)]];const _0x3b447c=_0x234e7f['map'](_0x5ba6bb=>{return _0x5ba6bb={'product_name':_0x5ba6bb};});_0x276a3f[_0x4f95f5(0x1e6)]((_0xf3239c,_0x3661e2)=>{var _0x323302=_0x4f95f5;_0x3b447c[_0x3661e2][_0x323302(0x20d)]=_0xf3239c;}),_0x3cdf18['forEach']((_0x31a8e0,_0x7659ea)=>{var _0x220292=_0x4f95f5;_0x3b447c[_0x7659ea][_0x220292(0x1a4)]=_0x31a8e0;}),_0x10e5c0[_0x4f95f5(0x1e6)]((_0x15eed4,_0x5ccaf7)=>{var _0x983d13=_0x4f95f5;_0x3b447c[_0x5ccaf7][_0x983d13(0x1d9)]=_0x15eed4;}),_0x487aca[_0x4f95f5(0x1e6)]((_0xd2b246,_0x573ce1)=>{_0x3b447c[_0x573ce1]['sale_qty']=_0xd2b246;}),_0x419176['forEach']((_0x2ed198,_0x2e0bab)=>{var _0x1f5f47=_0x4f95f5;_0x3b447c[_0x2e0bab][_0x1f5f47(0x1bd)]=_0x2ed198;}),_0x43cc2b['forEach']((_0x4ee91e,_0x38fc61)=>{var _0x5cf8b8=_0x4f95f5;_0x3b447c[_0x38fc61][_0x5cf8b8(0x19c)]=_0x4ee91e;}),_0x274da2['forEach']((_0x52223d,_0x33d44d)=>{_0x3b447c[_0x33d44d]['bay']=_0x52223d;}),_0x3ba0f8[_0x4f95f5(0x1e6)]((_0x182cb6,_0x153e27)=>{var _0x50175b=_0x4f95f5;_0x3b447c[_0x153e27][_0x50175b(0x1dd)]=_0x182cb6;}),_0x5e8746['forEach']((_0xd2731e,_0x2d2cc3)=>{var _0x2bb982=_0x4f95f5;_0x3b447c[_0x2d2cc3][_0x2bb982(0x1fd)]=_0xd2731e;}),_0x336f5c['forEach']((_0x5eab53,_0x15a2ab)=>{var _0x1bc1c6=_0x4f95f5;_0x3b447c[_0x15a2ab][_0x1bc1c6(0x1ed)]=_0x5eab53;});var _0xb12e0f=0x0;_0x3b447c[_0x4f95f5(0x1e6)](_0x300236=>{var _0x32c794=_0x4f95f5;console[_0x32c794(0x1b6)](_0x32c794(0x1c3),_0x300236),(parseInt(_0x300236[_0x32c794(0x1e0)])<parseInt(_0x300236[_0x32c794(0x19c)])||parseInt(_0x300236[_0x32c794(0x1bd)])<parseInt(_0x300236['return_qty'])&&parseInt(_0x300236['sale_qty'])>parseInt(_0x300236['return_qty'])||parseInt(_0x300236[_0x32c794(0x19c)])==0x0)&&_0xb12e0f++;});if(_0xb12e0f!=0x0)return _0x595da0[_0x4f95f5(0x1a2)](_0x4f95f5(0x1bf),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x3f794c['redirect'](_0x4f95f5(0x20a));_0x26c07b[_0x4f95f5(0x1ac)][_0x4f95f5(0x1e6)](_0x277a97=>{var _0x201d02=_0x4f95f5;const _0x33624d=_0x37d43e[_0x201d02(0x1eb)]['map'](_0x314aac=>{var _0x1f4375=_0x201d02;_0x314aac['product_name']==_0x277a97['product_name']&&_0x314aac[_0x1f4375(0x1ed)]==_0x277a97[_0x1f4375(0x1ed)]&&_0x314aac[_0x1f4375(0x1fd)]==_0x277a97[_0x1f4375(0x1fd)]&&_0x314aac['bin']==_0x277a97[_0x1f4375(0x1dd)]&&_0x314aac[_0x1f4375(0x1f6)]==_0x277a97['bay']&&(_0x314aac['product_stock']=parseInt(_0x314aac[_0x1f4375(0x1a9)])+parseInt(_0x277a97[_0x1f4375(0x19c)]));});}),console[_0x4f95f5(0x1b6)](_0x4f95f5(0x1f1),_0x37d43e),await _0x37d43e[_0x4f95f5(0x1a3)](),_0x26c07b['invoice']=_0x245096,_0x26c07b[_0x4f95f5(0x1cb)]=_0x54b568,_0x26c07b[_0x4f95f5(0x20c)]=_0x5c645d,_0x26c07b['warehouse_name']=_0x3a53ad,_0x26c07b[_0x4f95f5(0x1ac)]=_0x3b447c,_0x26c07b[_0x4f95f5(0x1cf)]=_0x506335,_0x26c07b[_0x4f95f5(0x1bc)]=_0x1856a1,_0x26c07b[_0x4f95f5(0x1d2)]=_0x4d3341;const _0x3e7a5b=await _0x26c07b[_0x4f95f5(0x1a3)]();console['log']('new\x20new_data',_0x3e7a5b);const _0x1d5941=await c_payment_data[_0x4f95f5(0x1b0)]({'invoice':_0x595da0['body'][_0x4f95f5(0x19f)],'reason':_0x4f95f5(0x1d7)});_0x1d5941[_0x4f95f5(0x1b7)]=_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x1b7)],_0x1d5941['date']=_0x595da0[_0x4f95f5(0x1a5)][_0x4f95f5(0x20c)],await _0x1d5941['save'](),_0x595da0['flash'](_0x4f95f5(0x1f2),_0x4f95f5(0x1be)),_0x3f794c[_0x4f95f5(0x1a0)](_0x4f95f5(0x1ee));}catch(_0x38e5a1){console[_0x4f95f5(0x1b6)](_0x38e5a1),_0x3f794c[_0x4f95f5(0x1f0)](0xc8)['json']({'message':_0x38e5a1[_0x4f95f5(0x1a1)]});}}),router[a0_0x730217(0x1ad)](a0_0x730217(0x1d1),auth,async(_0x2eb0fc,_0x3c2839)=>{var _0x443d26=a0_0x730217;try{const _0x43b243=_0x2eb0fc[_0x443d26(0x1d3)]['id'],{invoice:_0x568e1d,customer:_0xc4312c,payable_to_customer:_0x2d3b6a,paid_amount:_0x15b7dd}=_0x2eb0fc['body'],_0x525009=await sales_return['findById'](_0x43b243);console[_0x443d26(0x1b6)](_0x443d26(0x1ef),_0x525009),console[_0x443d26(0x1b6)](_0x2d3b6a),console[_0x443d26(0x1b6)](_0x15b7dd);var _0x3fb325=_0x2d3b6a-_0x15b7dd;console['log'](_0x443d26(0x1ca),_0x3fb325),_0x525009[_0x443d26(0x1fb)]=parseFloat(_0x15b7dd)+parseFloat(_0x525009[_0x443d26(0x1fb)]),_0x525009[_0x443d26(0x1de)]=_0x3fb325,console[_0x443d26(0x1b6)](_0x525009);const _0x5b0b4f=await _0x525009[_0x443d26(0x1a3)]();console['log'](0x1b207);const _0x5bbb56=await c_payment_data[_0x443d26(0x1b0)]({'invoice':_0x2eb0fc[_0x443d26(0x1a5)][_0x443d26(0x19f)],'reason':_0x443d26(0x1d7)});console['log'](_0x443d26(0x1e5),_0x5bbb56),_0x5bbb56[_0x443d26(0x1c2)]=_0x3fb325,await _0x5bbb56['save']();let _0x42d725=new Date(),_0x41b5da=('0'+_0x42d725[_0x443d26(0x1fc)]())[_0x443d26(0x1ec)](-0x2),_0x11cb84=('0'+(_0x42d725[_0x443d26(0x1b3)]()+0x1))[_0x443d26(0x1ec)](-0x2),_0x1dd9ad=_0x42d725[_0x443d26(0x1ff)](),_0x3e0a69=_0x1dd9ad+'-'+_0x11cb84+'-'+_0x41b5da;const _0x308b98=new customer_payment({'invoice':_0x568e1d,'date':_0x1dd9ad+'-'+_0x11cb84+'-'+_0x41b5da,'customer':_0xc4312c,'reason':_0x443d26(0x1a6),'amount':_0x15b7dd}),_0xc9bd43=await _0x308b98['save']();_0x2eb0fc['flash']('success',_0x443d26(0x205)),_0x3c2839['redirect'](_0x443d26(0x1ee));}catch(_0x3eb157){console[_0x443d26(0x1b6)](_0x3eb157);}}),router['get']('/invoice/:id',auth,async(_0x1e5225,_0x2cd643)=>{var _0x2398b1=a0_0x730217;try{const {username:_0x302841,email:_0x57ca9d,role:_0x542331}=_0x1e5225[_0x2398b1(0x208)],_0x34262f=_0x1e5225[_0x2398b1(0x208)],_0x51b542=await profile[_0x2398b1(0x1b0)]({'email':_0x34262f[_0x2398b1(0x1af)]}),_0x140c19=await master_shop[_0x2398b1(0x1e1)]();console[_0x2398b1(0x1b6)](_0x2398b1(0x1c9),_0x140c19);const _0x40d3e3=_0x1e5225[_0x2398b1(0x1d3)]['id'],_0x274931=await sales_return[_0x2398b1(0x1da)](_0x40d3e3);console[_0x2398b1(0x1b6)](_0x274931);const _0x619ebb=await customer[_0x2398b1(0x1b0)]({'name':_0x274931['customer']});console[_0x2398b1(0x1b6)](_0x619ebb);if(_0x140c19[0x0][_0x2398b1(0x1dc)]==_0x2398b1(0x1b5)){var _0x3b99be=users[_0x2398b1(0x1c5)];console['log'](_0x3b99be);}else{if(_0x140c19[0x0][_0x2398b1(0x1dc)]=='Hindi')var _0x3b99be=users['Hindi'];else{if(_0x140c19[0x0][_0x2398b1(0x1dc)]==_0x2398b1(0x1d5))var _0x3b99be=users['German'];else{if(_0x140c19[0x0]['language']==_0x2398b1(0x1ea))var _0x3b99be=users[_0x2398b1(0x1ea)];else{if(_0x140c19[0x0][_0x2398b1(0x1dc)]==_0x2398b1(0x1aa))var _0x3b99be=users[_0x2398b1(0x1aa)];else{if(_0x140c19[0x0][_0x2398b1(0x1dc)]==_0x2398b1(0x1df))var _0x3b99be=users[_0x2398b1(0x1e3)];else{if(_0x140c19[0x0][_0x2398b1(0x1dc)]=='Chinese')var _0x3b99be=users[_0x2398b1(0x201)];else{if(_0x140c19[0x0]['language']==_0x2398b1(0x1db))var _0x3b99be=users['Arabic'];}}}}}}}_0x2cd643['render'](_0x2398b1(0x203),{'success':_0x1e5225['flash']('success'),'errors':_0x1e5225[_0x2398b1(0x1a2)](_0x2398b1(0x1bf)),'role':_0x34262f,'profile':_0x51b542,'master_shop':_0x140c19,'customers':_0x619ebb,'sales':_0x274931,'language':_0x3b99be});}catch(_0xb16e31){console['log'](_0xb16e31);}}),module[a0_0x730217(0x1c0)]=router;function a0_0x465f(){var _0x31cd93=['bay','$product_details.secondary_code','$product_details.primary_code','types','Return\x20Goods','paid_amount','getDate','type','$product_details','getFullYear','3ceamrH','Chinese','Hindi','sales_return_invoice','return_sale_edit','payment\x20successfull','aggregate','$name','user','$product_details.product_name','back','$customer_docs','date','primary_code','return_qty','render','Return\x20Rooms','invoice','redirect','message','flash','save','secondary_code','body','Returned\x20Payment\x20For\x20Sale\x20Return','Raw\x20Materials','507339ERTGPe','product_stock','French','$product_details.product_stock','return_sale','post','Enabled','email','findOne','$product_details.product_code','403866LOvobO','getMonth','3897fjlXVf','English\x20(US)','log','suppliers','/view','$product_details.floorlevel','old_data','1200090ebRfLS','ToWarehouse','stock','purchase\x20return\x20successfully','errors','exports','../models/all_models','amount','foreach\x20newproduct','338222VLaVZh','English','sales_return','11AyHlNR','get','master','subtract','customer','1340KuWWVL','5516530jRmdaL','1112951dUleXF','note','customers','/give_payment/:id','ToRoom','params','product_name','German','$product_details.bin','Sale\x20Return','Router','product_code','findById','Arabic\x20(ae)','language','bin','due_amount','Portuguese\x20(BR)','sale_qty','find','/view/:id','Portuguese','8khsEhz','c_payment','forEach','../public/language/languages.json','express','$product_details.type','Spanish','product_details','slice','floorlevel','/sales_return/view','data','status','old_warehouse_data','success','all_data','name','sales_quantity'];a0_0x465f=function(){return _0x31cd93;};return a0_0x465f();}