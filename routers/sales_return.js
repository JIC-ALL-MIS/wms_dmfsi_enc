var a0_0x358672=a0_0x12c6;function a0_0x12c6(_0x218b59,_0x13a803){var _0x5479e0=a0_0x5479();return a0_0x12c6=function(_0x12c6c5,_0x33c6b5){_0x12c6c5=_0x12c6c5-0xca;var _0x35cf86=_0x5479e0[_0x12c6c5];return _0x35cf86;},a0_0x12c6(_0x218b59,_0x13a803);}(function(_0x1a0c3,_0x346c14){var _0x486451=a0_0x12c6,_0x4481bc=_0x1a0c3();while(!![]){try{var _0x4934a1=-parseInt(_0x486451(0xca))/0x1*(-parseInt(_0x486451(0x116))/0x2)+parseInt(_0x486451(0xd8))/0x3+-parseInt(_0x486451(0xd7))/0x4*(-parseInt(_0x486451(0xe5))/0x5)+-parseInt(_0x486451(0x10f))/0x6+-parseInt(_0x486451(0x12e))/0x7+parseInt(_0x486451(0x101))/0x8+-parseInt(_0x486451(0x130))/0x9*(-parseInt(_0x486451(0xed))/0xa);if(_0x4934a1===_0x346c14)break;else _0x4481bc['push'](_0x4481bc['shift']());}catch(_0x44cf51){_0x4481bc['push'](_0x4481bc['shift']());}}}(a0_0x5479,0x4a9b8));const express=require('express'),app=express(),router=express[a0_0x358672(0x10b)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x358672(0x133)),auth=require(a0_0x358672(0xd1)),users=require(a0_0x358672(0x10c));router['get'](a0_0x358672(0x10a),auth,async(_0x4a7cd6,_0x861c26)=>{var _0x28fb23=a0_0x358672;try{const {username:_0x4e6a5c,email:_0x8b5c91,role:_0x3a70e4}=_0x4a7cd6[_0x28fb23(0x118)],_0x5b87e6=_0x4a7cd6[_0x28fb23(0x118)],_0xc5103c=await profile[_0x28fb23(0xce)]({'email':_0x5b87e6[_0x28fb23(0xdb)]}),_0xe73bf7=await master_shop[_0x28fb23(0xf2)]();console['log']('master',_0xe73bf7);const _0x1c7c54=await sales_return[_0x28fb23(0xf8)]([{'$lookup':{'from':_0x28fb23(0xdc),'localField':_0x28fb23(0x12a),'foreignField':_0x28fb23(0xf4),'as':_0x28fb23(0x12c)}},{'$unwind':'$customer_docs'}]);console['log'](_0x28fb23(0x124),_0x1c7c54);if(_0xe73bf7[0x0][_0x28fb23(0x113)]=='English\x20(US)'){var _0x528955=users['English'];console['log'](_0x528955);}else{if(_0xe73bf7[0x0][_0x28fb23(0x113)]==_0x28fb23(0x129))var _0x528955=users[_0x28fb23(0x129)];else{if(_0xe73bf7[0x0][_0x28fb23(0x113)]==_0x28fb23(0xee))var _0x528955=users[_0x28fb23(0xee)];else{if(_0xe73bf7[0x0][_0x28fb23(0x113)]==_0x28fb23(0xd5))var _0x528955=users[_0x28fb23(0xd5)];else{if(_0xe73bf7[0x0]['language']==_0x28fb23(0x11c))var _0x528955=users[_0x28fb23(0x11c)];else{if(_0xe73bf7[0x0]['language']==_0x28fb23(0xef))var _0x528955=users[_0x28fb23(0x109)];else{if(_0xe73bf7[0x0][_0x28fb23(0x113)]==_0x28fb23(0x102))var _0x528955=users[_0x28fb23(0x102)];else{if(_0xe73bf7[0x0][_0x28fb23(0x113)]==_0x28fb23(0x132))var _0x528955=users[_0x28fb23(0x123)];}}}}}}}_0x861c26[_0x28fb23(0xda)](_0x28fb23(0xfe),{'success':_0x4a7cd6[_0x28fb23(0xe4)]('success'),'errors':_0x4a7cd6[_0x28fb23(0xe4)]('errors'),'role':_0x5b87e6,'profile':_0xc5103c,'master_shop':_0xe73bf7,'user':_0x1c7c54,'language':_0x528955});}catch(_0x2f064d){console[_0x28fb23(0xcc)](_0x2f064d);}}),router[a0_0x358672(0x125)](a0_0x358672(0x134),auth,async(_0x144447,_0x1f6dbb)=>{var _0x53aa61=a0_0x358672;try{const {username:_0x7c62ae,email:_0x1f4704,role:_0x1a22a6}=_0x144447[_0x53aa61(0x118)],_0x8b58e6=_0x144447[_0x53aa61(0x118)],_0x1ccb8f=await profile['findOne']({'email':_0x8b58e6[_0x53aa61(0xdb)]}),_0x4f5019=await master_shop[_0x53aa61(0xf2)]();console[_0x53aa61(0xcc)](_0x53aa61(0xfb),_0x4f5019);const _0x54dbd2=_0x144447[_0x53aa61(0xe7)]['id'];console[_0x53aa61(0xcc)](_0x54dbd2);var _0x55913f=['Return\x20Rooms'];const _0x4247dc=await sales_return['findById'](_0x54dbd2),_0x4d7edd=await warehouse['aggregate']([{'$match':{'name':_0x4247dc[_0x53aa61(0xd6)],'room':_0x4247dc[_0x53aa61(0x104)]}},{'$unwind':'$product_details'},{'$group':{'_id':'$product_details._id','name':{'$first':_0x53aa61(0xf0)},'product_stock':{'$first':_0x53aa61(0x11a)},'bay':{'$first':_0x53aa61(0x105)},'bin':{'$first':_0x53aa61(0x110)},'type':{'$first':_0x53aa61(0xd2)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x53aa61(0x114)},'storage':{'$first':_0x53aa61(0xd0)},'rack':{'$first':_0x53aa61(0x111)}}}]);console['log'](_0x4d7edd);const _0x5ee70f=await warehouse[_0x53aa61(0xf8)]([{'$match':{'status':_0x53aa61(0xe2),'name':_0x53aa61(0x117),'warehouse_category':_0x53aa61(0xf1)}},{'$group':{'_id':'$name','name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0xf51e9=await product[_0x53aa61(0xf2)]({});if(_0x4f5019[0x0][_0x53aa61(0x113)]=='English\x20(US)'){var _0x346c7e=users[_0x53aa61(0x119)];console['log'](_0x346c7e);}else{if(_0x4f5019[0x0]['language']==_0x53aa61(0x129))var _0x346c7e=users['Hindi'];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]=='German')var _0x346c7e=users[_0x53aa61(0xee)];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]==_0x53aa61(0xd5))var _0x346c7e=users[_0x53aa61(0xd5)];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]==_0x53aa61(0x11c))var _0x346c7e=users[_0x53aa61(0x11c)];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]==_0x53aa61(0xef))var _0x346c7e=users['Portuguese'];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]=='Chinese')var _0x346c7e=users[_0x53aa61(0x102)];else{if(_0x4f5019[0x0][_0x53aa61(0x113)]=='Arabic\x20(ae)')var _0x346c7e=users[_0x53aa61(0x123)];}}}}}}}_0x1f6dbb[_0x53aa61(0xda)](_0x53aa61(0x12b),{'success':_0x144447['flash'](_0x53aa61(0xdd)),'errors':_0x144447[_0x53aa61(0xe4)](_0x53aa61(0xf5)),'role':_0x8b58e6,'profile':_0x1ccb8f,'master_shop':_0x4f5019,'user':_0x4247dc,'stock':_0x4d7edd,'unit':_0xf51e9,'language':_0x346c7e,'warehouses':_0x5ee70f,'rooms':_0x55913f});}catch(_0xff2de0){console['log'](_0xff2de0);}}),router['post'](a0_0x358672(0x134),auth,async(_0x157673,_0x3440a6)=>{var _0x174b87=a0_0x358672;try{const _0xb7762b=_0x157673['params']['id'];console[_0x174b87(0xcc)](_0xb7762b);const _0x51c22e=await sales_return[_0x174b87(0xce)]({'invoice':_0x157673[_0x174b87(0x122)][_0x174b87(0xe1)]});console[_0x174b87(0xcc)](_0x174b87(0x10e),_0x51c22e);const _0x159afe=await warehouse[_0x174b87(0xce)]({'name':_0x51c22e[_0x174b87(0xd6)],'room':_0x51c22e['ToRoom']});console[_0x174b87(0xcc)](_0x174b87(0x11f),_0x159afe);const {invoice:_0x485878,customer:_0x3d0afc,date:_0x4a8b5f,warehouse_name:_0x1073ba,product_name:_0x532ea1,primary_code:_0xd83b41,secondary_code:_0x46c475,product_code:_0x11ee2b,sales_quantity:_0x1c0348,stocks:_0x9fa808,return_qty:_0x485d61,note:_0x534fe2,to_warehouse_name:_0xcfe5eb,to_Room_name:_0x133e04}=_0x157673[_0x174b87(0x122)];console[_0x174b87(0xcc)](_0x157673[_0x174b87(0x122)]);if(typeof _0x532ea1==_0x174b87(0x12f))var _0x466a58=[_0x157673['body']['product_name']],_0x5ac4a1=[_0x157673[_0x174b87(0x122)][_0x174b87(0x103)]],_0x473237=[_0x157673[_0x174b87(0x122)][_0x174b87(0xe3)]],_0x261cde=[_0x157673[_0x174b87(0x122)][_0x174b87(0xcf)]],_0x39fb46=[_0x157673['body'][_0x174b87(0xe6)]],_0x1640ff=[_0x157673['body'][_0x174b87(0x108)]],_0x42cae6=[_0x157673[_0x174b87(0x122)]['return_qty']],_0x3a6cfb=[_0x157673['body'][_0x174b87(0xe9)]],_0x243477=[_0x157673['body'][_0x174b87(0x11e)]],_0x5bce91=[_0x157673[_0x174b87(0x122)][_0x174b87(0xd9)]],_0x56261e=[_0x157673[_0x174b87(0x122)][_0x174b87(0x135)]];else var _0x466a58=[..._0x157673[_0x174b87(0x122)]['product_name']],_0x5ac4a1=[..._0x157673['body'][_0x174b87(0x103)]],_0x473237=[..._0x157673[_0x174b87(0x122)]['secondary_code']],_0x261cde=[..._0x157673[_0x174b87(0x122)][_0x174b87(0xcf)]],_0x39fb46=[..._0x157673[_0x174b87(0x122)][_0x174b87(0xe6)]],_0x1640ff=[..._0x157673[_0x174b87(0x122)][_0x174b87(0x108)]],_0x42cae6=[..._0x157673[_0x174b87(0x122)][_0x174b87(0x120)]],_0x3a6cfb=[..._0x157673[_0x174b87(0x122)][_0x174b87(0xe9)]],_0x243477=[..._0x157673[_0x174b87(0x122)][_0x174b87(0x11e)]],_0x5bce91=[..._0x157673['body']['types']],_0x56261e=[..._0x157673[_0x174b87(0x122)]['floorlevel']];const _0x50c160=_0x466a58[_0x174b87(0xeb)](_0x273415=>{return _0x273415={'product_name':_0x273415};});_0x5ac4a1[_0x174b87(0xf6)]((_0x1d3f12,_0x1082e8)=>{_0x50c160[_0x1082e8]['primary_code']=_0x1d3f12;}),_0x473237[_0x174b87(0xf6)]((_0x2639e5,_0x212fe3)=>{_0x50c160[_0x212fe3]['secondary_code']=_0x2639e5;}),_0x261cde[_0x174b87(0xf6)]((_0xd88e5d,_0x5fd84f)=>{var _0x1af34d=_0x174b87;_0x50c160[_0x5fd84f][_0x1af34d(0xcf)]=_0xd88e5d;}),_0x39fb46[_0x174b87(0xf6)]((_0xcc5303,_0x11740f)=>{var _0x214f87=_0x174b87;_0x50c160[_0x11740f][_0x214f87(0xf3)]=_0xcc5303;}),_0x1640ff[_0x174b87(0xf6)]((_0x4eea54,_0x24a74e)=>{var _0x31d43d=_0x174b87;_0x50c160[_0x24a74e][_0x31d43d(0xf9)]=_0x4eea54;}),_0x42cae6[_0x174b87(0xf6)]((_0x45260e,_0x1a5288)=>{var _0x4aad37=_0x174b87;_0x50c160[_0x1a5288][_0x4aad37(0x120)]=_0x45260e;}),_0x3a6cfb['forEach']((_0x38cb83,_0x14d627)=>{var _0x2501de=_0x174b87;_0x50c160[_0x14d627][_0x2501de(0xe9)]=_0x38cb83;}),_0x243477['forEach']((_0x3d84d1,_0x2b0b8a)=>{var _0x25d122=_0x174b87;_0x50c160[_0x2b0b8a][_0x25d122(0x11e)]=_0x3d84d1;}),_0x5bce91[_0x174b87(0xf6)]((_0x1a69a4,_0xdfc174)=>{_0x50c160[_0xdfc174]['type']=_0x1a69a4;}),_0x56261e[_0x174b87(0xf6)]((_0x11287f,_0x21b0d4)=>{_0x50c160[_0x21b0d4]['floorlevel']=_0x11287f;});var _0x235564=0x0;_0x50c160['forEach'](_0x189f82=>{var _0x17fb95=_0x174b87;console[_0x17fb95(0xcc)](_0x17fb95(0xd3),_0x189f82),(parseInt(_0x189f82[_0x17fb95(0xf3)])<parseInt(_0x189f82[_0x17fb95(0x120)])||parseInt(_0x189f82[_0x17fb95(0xf9)])<parseInt(_0x189f82[_0x17fb95(0x120)])&&parseInt(_0x189f82[_0x17fb95(0xf3)])>parseInt(_0x189f82['return_qty'])||parseInt(_0x189f82[_0x17fb95(0x120)])==0x0)&&_0x235564++;});if(_0x235564!=0x0)return _0x157673[_0x174b87(0xe4)](_0x174b87(0xf5),_0x174b87(0x11b)),_0x3440a6[_0x174b87(0xe8)](_0x174b87(0xfd));_0x51c22e[_0x174b87(0xfc)][_0x174b87(0xf6)](_0x301e63=>{var _0x12bbe3=_0x174b87;const _0x595196=_0x159afe[_0x12bbe3(0x115)]['map'](_0xec8be1=>{var _0x4bf328=_0x12bbe3;_0xec8be1[_0x4bf328(0x131)]==_0x301e63[_0x4bf328(0x131)]&&_0xec8be1[_0x4bf328(0x135)]==_0x301e63[_0x4bf328(0x135)]&&_0xec8be1['type']==_0x301e63[_0x4bf328(0x100)]&&_0xec8be1['bin']==_0x301e63[_0x4bf328(0x11e)]&&_0xec8be1['bay']==_0x301e63['bay']&&(_0xec8be1[_0x4bf328(0x121)]=parseInt(_0xec8be1[_0x4bf328(0x121)])+parseInt(_0x301e63[_0x4bf328(0x120)]));});}),console[_0x174b87(0xcc)]('old_warehouse_data',_0x159afe),await _0x159afe[_0x174b87(0xff)](),_0x51c22e['invoice']=_0x485878,_0x51c22e[_0x174b87(0x12a)]=_0x3d0afc,_0x51c22e['date']=_0x4a8b5f,_0x51c22e['warehouse_name']=_0x1073ba,_0x51c22e[_0x174b87(0xfc)]=_0x50c160,_0x51c22e['note']=_0x534fe2,_0x51c22e[_0x174b87(0xd6)]=_0xcfe5eb,_0x51c22e['ToRoom']=_0x133e04;const _0x49921c=await _0x51c22e['save']();console['log']('new\x20new_data',_0x49921c);const _0x3a95eb=await c_payment_data[_0x174b87(0xce)]({'invoice':_0x157673[_0x174b87(0x122)][_0x174b87(0xe1)],'reason':'Sale\x20Return'});_0x3a95eb['suppliers']=_0x157673[_0x174b87(0x122)][_0x174b87(0xf7)],_0x3a95eb[_0x174b87(0xcb)]=_0x157673[_0x174b87(0x122)]['date'],await _0x3a95eb[_0x174b87(0xff)](),_0x157673[_0x174b87(0xe4)](_0x174b87(0xdd),_0x174b87(0x107)),_0x3440a6[_0x174b87(0xe8)](_0x174b87(0x127));}catch(_0x4a6dd0){console[_0x174b87(0xcc)](_0x4a6dd0),_0x3440a6[_0x174b87(0xec)](0xc8)['json']({'message':_0x4a6dd0[_0x174b87(0xde)]});}}),router['post']('/give_payment/:id',auth,async(_0x15967b,_0x3a767d)=>{var _0x25b223=a0_0x358672;try{const _0x143be4=_0x15967b[_0x25b223(0xe7)]['id'],{invoice:_0x5ad2fc,customer:_0x5920a1,payable_to_customer:_0x9ef58,paid_amount:_0x4dfb78}=_0x15967b[_0x25b223(0x122)],_0x3923d9=await sales_return[_0x25b223(0x126)](_0x143be4);console['log']('data',_0x3923d9),console[_0x25b223(0xcc)](_0x9ef58),console['log'](_0x4dfb78);var _0x15d9d8=_0x9ef58-_0x4dfb78;console[_0x25b223(0xcc)](_0x25b223(0xdf),_0x15d9d8),_0x3923d9[_0x25b223(0xe0)]=parseFloat(_0x4dfb78)+parseFloat(_0x3923d9[_0x25b223(0xe0)]),_0x3923d9['due_amount']=_0x15d9d8,console['log'](_0x3923d9);const _0x44c905=await _0x3923d9[_0x25b223(0xff)]();console[_0x25b223(0xcc)](0x1b207);const _0x4bd771=await c_payment_data[_0x25b223(0xce)]({'invoice':_0x15967b[_0x25b223(0x122)][_0x25b223(0xe1)],'reason':'Sale\x20Return'});console[_0x25b223(0xcc)](_0x25b223(0xd4),_0x4bd771),_0x4bd771[_0x25b223(0xfa)]=_0x15d9d8,await _0x4bd771['save']();let _0x4fcc62=new Date(),_0x3355ca=('0'+_0x4fcc62['getDate']())[_0x25b223(0x11d)](-0x2),_0x159dd7=('0'+(_0x4fcc62[_0x25b223(0xea)]()+0x1))[_0x25b223(0x11d)](-0x2),_0x22af22=_0x4fcc62[_0x25b223(0x106)](),_0x10b1a6=_0x22af22+'-'+_0x159dd7+'-'+_0x3355ca;const _0x24eeca=new customer_payment({'invoice':_0x5ad2fc,'date':_0x22af22+'-'+_0x159dd7+'-'+_0x3355ca,'customer':_0x5920a1,'reason':_0x25b223(0x136),'amount':_0x4dfb78}),_0x589277=await _0x24eeca[_0x25b223(0xff)]();_0x15967b[_0x25b223(0xe4)](_0x25b223(0xdd),_0x25b223(0x10d)),_0x3a767d[_0x25b223(0xe8)](_0x25b223(0x127));}catch(_0xd54d1a){console[_0x25b223(0xcc)](_0xd54d1a);}}),router[a0_0x358672(0x125)](a0_0x358672(0xcd),auth,async(_0x269bd5,_0x426784)=>{var _0x347dfc=a0_0x358672;try{const {username:_0x2308e7,email:_0x449784,role:_0x2c99e3}=_0x269bd5['user'],_0x3b844b=_0x269bd5[_0x347dfc(0x118)],_0x124c12=await profile['findOne']({'email':_0x3b844b[_0x347dfc(0xdb)]}),_0x58c482=await master_shop[_0x347dfc(0xf2)]();console['log']('master',_0x58c482);const _0xe8f8bd=_0x269bd5['params']['id'],_0x2b0c80=await sales_return['findById'](_0xe8f8bd);console[_0x347dfc(0xcc)](_0x2b0c80);const _0x5ec3ff=await customer[_0x347dfc(0xce)]({'name':_0x2b0c80[_0x347dfc(0x12a)]});console[_0x347dfc(0xcc)](_0x5ec3ff);if(_0x58c482[0x0]['language']==_0x347dfc(0x12d)){var _0x1955cb=users['English'];console[_0x347dfc(0xcc)](_0x1955cb);}else{if(_0x58c482[0x0][_0x347dfc(0x113)]==_0x347dfc(0x129))var _0x1955cb=users['Hindi'];else{if(_0x58c482[0x0][_0x347dfc(0x113)]==_0x347dfc(0xee))var _0x1955cb=users['German'];else{if(_0x58c482[0x0][_0x347dfc(0x113)]==_0x347dfc(0xd5))var _0x1955cb=users[_0x347dfc(0xd5)];else{if(_0x58c482[0x0][_0x347dfc(0x113)]==_0x347dfc(0x11c))var _0x1955cb=users['French'];else{if(_0x58c482[0x0][_0x347dfc(0x113)]=='Portuguese\x20(BR)')var _0x1955cb=users[_0x347dfc(0x109)];else{if(_0x58c482[0x0]['language']==_0x347dfc(0x102))var _0x1955cb=users[_0x347dfc(0x102)];else{if(_0x58c482[0x0][_0x347dfc(0x113)]=='Arabic\x20(ae)')var _0x1955cb=users['Arabic'];}}}}}}}_0x426784[_0x347dfc(0xda)](_0x347dfc(0x112),{'success':_0x269bd5[_0x347dfc(0xe4)](_0x347dfc(0xdd)),'errors':_0x269bd5[_0x347dfc(0xe4)](_0x347dfc(0xf5)),'role':_0x3b844b,'profile':_0x124c12,'master_shop':_0x58c482,'customers':_0x5ec3ff,'sales':_0x2b0c80,'language':_0x1955cb});}catch(_0x246320){console['log'](_0x246320);}}),module[a0_0x358672(0x128)]=router;function a0_0x5479(){var _0x5274ca=['amount','master','return_sale','back','sales_return','save','type','3043168QPuXAX','Chinese','primary_code','ToRoom','$product_details.bay','getFullYear','purchase\x20return\x20successfully','stocks','Portuguese','/view','Router','../public/language/languages.json','payment\x20successfull','old_data','1870482QhAxca','$product_details.bin','$product_details.rack','sales_return_invoice','language','$product_details.product_code','product_details','6338aiVAPd','Return\x20Goods','user','English','$product_details.product_stock','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','French','slice','bin','old_warehouse_data','return_qty','product_stock','body','Arabic','all_data','get','findById','/sales_return/view','exports','Hindi','customer','return_sale_edit','customer_docs','English\x20(US)','3536610ZbjRgB','string','45lYCWjc','product_name','Arabic\x20(ae)','../models/all_models','/view/:id','floorlevel','Returned\x20Payment\x20For\x20Sale\x20Return','29bUPzle','date','log','/invoice/:id','findOne','product_code','$product_details.storage','../middleware/auth','$product_details.type','foreach\x20newproduct','c_payment','Spanish','ToWarehouse','2612megYvT','815082OwBpJp','types','render','email','customers','success','message','subtract','paid_amount','invoice','Enabled','secondary_code','flash','1355PqwqrB','sales_quantity','params','redirect','bay','getMonth','map','status','403230sdbZVx','German','Portuguese\x20(BR)','$product_details.product_name','Raw\x20Materials','find','sale_qty','name','errors','forEach','suppliers','aggregate','stock'];a0_0x5479=function(){return _0x5274ca;};return a0_0x5479();}