var a0_0x435472=a0_0x2fcc;(function(_0xf92a0d,_0x16ed98){var _0x4e2f08=a0_0x2fcc,_0x107f70=_0xf92a0d();while(!![]){try{var _0xc88563=-parseInt(_0x4e2f08(0x15a))/0x1*(-parseInt(_0x4e2f08(0x146))/0x2)+parseInt(_0x4e2f08(0xe7))/0x3+parseInt(_0x4e2f08(0xee))/0x4*(parseInt(_0x4e2f08(0xf9))/0x5)+-parseInt(_0x4e2f08(0x16d))/0x6*(parseInt(_0x4e2f08(0x157))/0x7)+parseInt(_0x4e2f08(0x179))/0x8+-parseInt(_0x4e2f08(0x118))/0x9*(-parseInt(_0x4e2f08(0x125))/0xa)+parseInt(_0x4e2f08(0x101))/0xb*(-parseInt(_0x4e2f08(0x1a4))/0xc);if(_0xc88563===_0x16ed98)break;else _0x107f70['push'](_0x107f70['shift']());}catch(_0x3189ce){_0x107f70['push'](_0x107f70['shift']());}}}(a0_0x184b,0x326f1));const express=require(a0_0x435472(0x105)),app=express(),router=express['Router'](),auth=require(a0_0x435472(0x165)),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,adjustment_finished,email_settings,supervisor_settings}=require(a0_0x435472(0xf2)),users=require(a0_0x435472(0x18c)),nodemailer=require('nodemailer');function a0_0x2fcc(_0x27f317,_0x58f9d4){var _0x184bb8=a0_0x184b();return a0_0x2fcc=function(_0x2fcc08,_0x329f28){_0x2fcc08=_0x2fcc08-0xe5;var _0x277780=_0x184bb8[_0x2fcc08];return _0x277780;},a0_0x2fcc(_0x27f317,_0x58f9d4);}router['get'](a0_0x435472(0xec),auth,async(_0xd84552,_0x53de6a)=>{var _0x2d12e7=a0_0x435472;try{const {username:_0x190594,email:_0x5635b7,role:_0x319cb5}=_0xd84552[_0x2d12e7(0x123)],_0xc8ef00=_0xd84552['user'],_0x553c9b=await profile['findOne']({'email':_0xc8ef00[_0x2d12e7(0x19a)]}),_0x59e322=await master_shop['find']();let _0x25e2f3;if(_0xc8ef00[_0x2d12e7(0x119)]=='staff'){const _0x466c7d=await staff[_0x2d12e7(0x18e)]({'email':_0xc8ef00[_0x2d12e7(0x19a)]});_0x25e2f3=await warehouse['find']({'status':_0x2d12e7(0x116),'name':_0x466c7d['warehouse']});}else _0x25e2f3=await warehouse[_0x2d12e7(0x13c)]({'status':_0x2d12e7(0x116)});const _0x4c39f4=await product[_0x2d12e7(0x13c)]();let _0xcd3d61;if(_0xc8ef00[_0x2d12e7(0x119)]==_0x2d12e7(0x158)){const _0x39106c=await staff[_0x2d12e7(0x18e)]({'email':_0xc8ef00[_0x2d12e7(0x19a)]});_0xcd3d61=await adjustment_finished[_0x2d12e7(0x13c)]({'warehouse_name':_0x39106c[_0x2d12e7(0x148)]});}else _0xcd3d61=await adjustment_finished[_0x2d12e7(0xf1)]([{'$unwind':'$product'},{'$group':{'_id':_0x2d12e7(0x12f),'invoice':{'$first':_0x2d12e7(0x13a)},'date':{'$first':_0x2d12e7(0xe6)},'warehouse_name':{'$first':_0x2d12e7(0x10c)},'room':{'$addToSet':_0x2d12e7(0x102)},'finalize':{'$first':_0x2d12e7(0x129)}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1}}]);if(_0x59e322[0x0]['language']=='English\x20(US)'){var _0x9f125a=users['English'];console['log'](_0x9f125a);}else{if(_0x59e322[0x0][_0x2d12e7(0x11f)]==_0x2d12e7(0x147))var _0x9f125a=users[_0x2d12e7(0x147)];else{if(_0x59e322[0x0]['language']==_0x2d12e7(0x11d))var _0x9f125a=users[_0x2d12e7(0x11d)];else{if(_0x59e322[0x0][_0x2d12e7(0x11f)]==_0x2d12e7(0xf5))var _0x9f125a=users['Spanish'];else{if(_0x59e322[0x0][_0x2d12e7(0x11f)]==_0x2d12e7(0x172))var _0x9f125a=users[_0x2d12e7(0x172)];else{if(_0x59e322[0x0][_0x2d12e7(0x11f)]==_0x2d12e7(0x10a))var _0x9f125a=users[_0x2d12e7(0x16a)];else{if(_0x59e322[0x0][_0x2d12e7(0x11f)]==_0x2d12e7(0x19f))var _0x9f125a=users[_0x2d12e7(0x19f)];else{if(_0x59e322[0x0]['language']==_0x2d12e7(0x13d))var _0x9f125a=users['Arabic'];}}}}}}}_0x53de6a[_0x2d12e7(0x174)](_0x2d12e7(0x114),{'success':_0xd84552[_0x2d12e7(0x169)](_0x2d12e7(0x152)),'errors':_0xd84552[_0x2d12e7(0x169)](_0x2d12e7(0x167)),'role':_0xc8ef00,'profile':_0x553c9b,'warehouse':_0x25e2f3,'product':_0x4c39f4,'adjustment':_0xcd3d61,'master_shop':_0x59e322,'language':_0x9f125a});}catch(_0x16e76b){console[_0x2d12e7(0x144)](_0x16e76b);}});async function getRandom8DigitNumber(){var _0x3fb3e4=a0_0x435472;const _0x22182c=0x989680,_0x506fd8=0x5f5e0ff,_0x44dae0=Math[_0x3fb3e4(0x120)](Math[_0x3fb3e4(0x124)]()*(_0x506fd8-_0x22182c+0x1))+_0x22182c;var _0x5a1432;const _0x2efbbe=await adjustment_finished[_0x3fb3e4(0x18e)]({'invoice':_0x3fb3e4(0x12a)+_0x44dae0});return _0x2efbbe&&_0x2efbbe[_0x3fb3e4(0x12d)]>0x0?_0x5a1432=_0x3fb3e4(0x12a)+_0x44dae0:_0x5a1432=_0x3fb3e4(0x12a)+_0x44dae0,_0x5a1432;}router[a0_0x435472(0x18b)](a0_0x435472(0x16c),auth,async(_0x5d60e7,_0x3f121a)=>{var _0x39cbe8=a0_0x435472;try{const {username:_0x2ebcfb,email:_0x55317a,role:_0x462ad5}=_0x5d60e7[_0x39cbe8(0x123)],_0x4d738c=_0x5d60e7[_0x39cbe8(0x123)],_0x12fa37=await profile[_0x39cbe8(0x18e)]({'email':_0x4d738c[_0x39cbe8(0x19a)]}),_0x57a081=await master_shop[_0x39cbe8(0x13c)]();let _0x3bc8fc;if(_0x4d738c[_0x39cbe8(0x119)]==_0x39cbe8(0x158)){const _0x53f3fc=await staff[_0x39cbe8(0x18e)]({'email':_0x4d738c['email']});_0x3bc8fc=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0x53f3fc[_0x39cbe8(0x148)],'warehouse_category':_0x39cbe8(0xf7),'name':{'$ne':'QA\x20Warehouse'}}},{'$group':{'_id':_0x39cbe8(0x166),'name':{'$first':_0x39cbe8(0x166)}}}]);}else _0x3bc8fc=await warehouse['aggregate']([{'$match':{'status':_0x39cbe8(0x116),'warehouse_category':_0x39cbe8(0xf7),'name':{'$ne':_0x39cbe8(0x113)}}},{'$group':{'_id':_0x39cbe8(0x166),'name':{'$first':'$name'}}}]);const _0x15ffd7=await product['find']({}),_0x24cf7f=await adjustment_finished[_0x39cbe8(0x13c)]({}),_0x27a58d=_0x24cf7f[_0x39cbe8(0x12d)]+0x1,_0x274238='ADJF-'+_0x27a58d['toString']()[_0x39cbe8(0x12c)](0x5,'0');var _0x328f23=[_0x39cbe8(0x16e),_0x39cbe8(0x130),_0x39cbe8(0x173)];if(_0x57a081[0x0][_0x39cbe8(0x11f)]=='English\x20(US)')var _0x5dc0b7=users[_0x39cbe8(0x198)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]==_0x39cbe8(0x147))var _0x5dc0b7=users[_0x39cbe8(0x147)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]==_0x39cbe8(0x11d))var _0x5dc0b7=users[_0x39cbe8(0x11d)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]==_0x39cbe8(0xf5))var _0x5dc0b7=users[_0x39cbe8(0xf5)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]==_0x39cbe8(0x172))var _0x5dc0b7=users[_0x39cbe8(0x172)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]==_0x39cbe8(0x10a))var _0x5dc0b7=users['Portuguese'];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]=='Chinese')var _0x5dc0b7=users[_0x39cbe8(0x19f)];else{if(_0x57a081[0x0][_0x39cbe8(0x11f)]=='Arabic\x20(ae)')var _0x5dc0b7=users[_0x39cbe8(0x15c)];}}}}}}}const _0xa6979=getRandom8DigitNumber();_0xa6979[_0x39cbe8(0x1a1)](_0x564837=>{var _0x3c9364=_0x39cbe8;_0x3f121a[_0x3c9364(0x174)](_0x3c9364(0x14f),{'success':_0x5d60e7[_0x3c9364(0x169)]('success'),'errors':_0x5d60e7[_0x3c9364(0x169)](_0x3c9364(0x167)),'role':_0x4d738c,'profile':_0x12fa37,'warehouse':_0x3bc8fc,'product':_0x15ffd7,'master_shop':_0x57a081,'language':_0x5dc0b7,'rooms_data':_0x328f23,'invoice_no':_0x564837});})[_0x39cbe8(0x15d)](_0x4020f5=>{var _0x1fc407=_0x39cbe8;_0x5d60e7[_0x1fc407(0x169)](_0x1fc407(0x167),'There\x27s\x20a\x20error\x20in\x20this\x20transaction'),_0x3f121a['redirect']('/adjustment/view');});}catch(_0x438afe){console[_0x39cbe8(0x144)](_0x438afe);}}),router[a0_0x435472(0x161)](a0_0x435472(0x16c),auth,async(_0x28fbc7,_0x93e42e)=>{var _0x2c049d=a0_0x435472;try{const {warehouse_name:_0x33e459,date:_0x342eb6,prod_name:_0x564785,level:_0x3247f3,isle:_0x495b94,pallet:_0x1b4898,stock:_0x3ba5bf,types:_0x266a31,adjust_qty:_0x18a153,new_adjust_qty:_0x19ead2,note:_0x3a25a3,Room_name:_0x2ba3e2,invoice:_0x859fe2,JO_number:_0x42ed3d,expiry_date:_0x10ee1d}=_0x28fbc7['body'];if(typeof _0x564785==_0x2c049d(0x189))var _0x45f0a6=[_0x28fbc7[_0x2c049d(0x155)]['prod_name']],_0xa322e0=[_0x28fbc7[_0x2c049d(0x155)]['level']],_0x2e835b=[_0x28fbc7['body'][_0x2c049d(0x156)]],_0x19007a=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x170)]],_0x13862d=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x17e)]],_0x1eb81c=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0xf6)]],_0x138bc8=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x108)]],_0x4e8dd1=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x1a8)]],_0x430547=[_0x28fbc7[_0x2c049d(0x155)]['prod_code']],_0x1f0f9d=[_0x28fbc7['body'][_0x2c049d(0x1a5)]],_0x2050e0=[_0x28fbc7[_0x2c049d(0x155)]['expiry_date']],_0x205d62=[_0x28fbc7['body']['product_date']],_0xd8bfd4=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x133)]],_0x5250df=[_0x28fbc7[_0x2c049d(0x155)]['Rooms']],_0x44fc70=[_0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x126)]],_0x239342=[_0x28fbc7['body'][_0x2c049d(0xef)]];else var _0x45f0a6=[..._0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x18a)]],_0xa322e0=[..._0x28fbc7['body']['level']],_0x2e835b=[..._0x28fbc7['body']['stock']],_0x19007a=[..._0x28fbc7['body'][_0x2c049d(0x170)]],_0x13862d=[..._0x28fbc7['body'][_0x2c049d(0x17e)]],_0x1eb81c=[..._0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0xf6)]],_0x138bc8=[..._0x28fbc7['body'][_0x2c049d(0x108)]],_0x4e8dd1=[..._0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x1a8)]],_0x430547=[..._0x28fbc7['body']['prod_code']],_0x1f0f9d=[..._0x28fbc7['body'][_0x2c049d(0x1a5)]],_0x2050e0=[..._0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x138)]],_0x205d62=[..._0x28fbc7['body'][_0x2c049d(0x15e)]],_0xd8bfd4=[..._0x28fbc7[_0x2c049d(0x155)]['prod_cat']],_0x5250df=[..._0x28fbc7['body']['Rooms']],_0x44fc70=[..._0x28fbc7[_0x2c049d(0x155)][_0x2c049d(0x126)]],_0x239342=[..._0x28fbc7[_0x2c049d(0x155)]['prod_invoice']];const _0x42bb5b=_0x45f0a6[_0x2c049d(0xe9)](_0x1c354a=>{return _0x1c354a={'product_name':_0x1c354a};});_0xa322e0[_0x2c049d(0x160)]((_0x2f61ca,_0x94bbd2)=>{var _0x2f61f0=_0x2c049d;_0x42bb5b[_0x94bbd2][_0x2f61f0(0x153)]=_0x2f61ca;}),_0x2e835b[_0x2c049d(0x160)]((_0x46b1d3,_0x42209d)=>{var _0x513324=_0x2c049d;_0x42bb5b[_0x42209d][_0x513324(0x117)]=_0x46b1d3;}),_0x19007a['forEach']((_0x19ea96,_0x4e10e1)=>{var _0x4100ba=_0x2c049d;_0x42bb5b[_0x4e10e1][_0x4100ba(0x170)]=_0x19ea96;}),_0x13862d['forEach']((_0x43b093,_0x13b3c7)=>{var _0x613791=_0x2c049d;_0x42bb5b[_0x13b3c7][_0x613791(0x194)]=_0x43b093;}),_0x1eb81c[_0x2c049d(0x160)]((_0x116bea,_0xa6e6d1)=>{var _0x2fe924=_0x2c049d;_0x42bb5b[_0xa6e6d1][_0x2fe924(0x164)]=_0x116bea;}),_0x138bc8[_0x2c049d(0x160)]((_0x188adb,_0x1ab47c)=>{var _0x28cb79=_0x2c049d;_0x42bb5b[_0x1ab47c][_0x28cb79(0x1a0)]=_0x188adb;}),_0x4e8dd1['forEach']((_0x47538a,_0x58f955)=>{var _0x4859a7=_0x2c049d;_0x42bb5b[_0x58f955][_0x4859a7(0x193)]=_0x47538a;}),_0x430547[_0x2c049d(0x160)]((_0x284d06,_0x42e69e)=>{var _0x3948d6=_0x2c049d;_0x42bb5b[_0x42e69e][_0x3948d6(0x162)]=_0x284d06;}),_0x1f0f9d['forEach']((_0x335c82,_0x56ca88)=>{_0x42bb5b[_0x56ca88]['batch_code']=_0x335c82;}),_0x2050e0[_0x2c049d(0x160)]((_0x3c1fd5,_0x4656a4)=>{var _0x25da98=_0x2c049d;_0x42bb5b[_0x4656a4][_0x25da98(0x138)]=_0x3c1fd5;}),_0x205d62[_0x2c049d(0x160)]((_0x217057,_0x45c2ce)=>{var _0x2b1a08=_0x2c049d;_0x42bb5b[_0x45c2ce][_0x2b1a08(0x137)]=_0x217057;}),_0xd8bfd4[_0x2c049d(0x160)]((_0x46a2d1,_0x49f687)=>{var _0x4cf97b=_0x2c049d;_0x42bb5b[_0x49f687][_0x4cf97b(0x133)]=_0x46a2d1;}),_0x5250df[_0x2c049d(0x160)]((_0x590d8b,_0xb7a4a5)=>{var _0x4a49ea=_0x2c049d;_0x42bb5b[_0xb7a4a5][_0x4a49ea(0x178)]=_0x590d8b;}),_0x44fc70[_0x2c049d(0x160)]((_0x219370,_0x4ced35)=>{var _0x32b05f=_0x2c049d;_0x42bb5b[_0x4ced35][_0x32b05f(0x126)]=_0x219370;}),_0x239342['forEach']((_0x2ec414,_0x29ed34)=>{var _0x4a1291=_0x2c049d;_0x42bb5b[_0x29ed34][_0x4a1291(0x132)]=_0x2ec414;});const _0x38fc0e=_0x42bb5b[_0x2c049d(0xfe)](_0x3bef58=>_0x3bef58[_0x2c049d(0x194)]!=='0'&&_0x3bef58[_0x2c049d(0x194)]!=='');var _0x63121d=0x0;_0x38fc0e[_0x2c049d(0x160)](_0x5cec41=>{var _0x11b741=_0x2c049d;console[_0x11b741(0x144)]('foreach\x20newproduct',_0x5cec41),parseInt(_0x5cec41[_0x11b741(0x194)])<=0x0&&_0x63121d++;});if(_0x63121d!=0x0)return _0x28fbc7[_0x2c049d(0x169)](_0x2c049d(0x167),'You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x93e42e[_0x2c049d(0xf0)](_0x2c049d(0x12e));const _0x5990b7=new adjustment_finished({'warehouse_name':_0x33e459,'date':_0x342eb6,'product':_0x38fc0e,'note':_0x3a25a3,'room':_0x2ba3e2,'invoice':_0x859fe2,'JO_number':_0x42ed3d,'expiry_date':_0x10ee1d}),_0x27fb45=await _0x5990b7[_0x2c049d(0x14e)]();_0x28fbc7[_0x2c049d(0x169)](_0x2c049d(0x152),_0x2c049d(0x17b)),_0x93e42e['redirect'](_0x2c049d(0x150)+_0x27fb45[_0x2c049d(0x176)]);}catch(_0xf11307){console[_0x2c049d(0x144)](_0xf11307),_0x93e42e['status'](0xc8)['json']({'message':_0xf11307[_0x2c049d(0x17a)]});}}),router[a0_0x435472(0x18b)](a0_0x435472(0x128),auth,async(_0x4ce4fe,_0x47a9a7)=>{var _0x115f4f=a0_0x435472;try{const {username:_0x4f161e,email:_0x248b66,role:_0x3c4ff9}=_0x4ce4fe[_0x115f4f(0x123)],_0x3d3752=_0x4ce4fe[_0x115f4f(0x123)],_0x558f71=await profile[_0x115f4f(0x18e)]({'email':_0x3d3752['email']}),_0x11a2ea=await master_shop[_0x115f4f(0x13c)](),_0x8add82=_0x4ce4fe[_0x115f4f(0x1a7)]['id'],_0x3f019c=await adjustment_finished[_0x115f4f(0x16f)]({'_id':_0x8add82}),_0x4b0874=await purchases[_0x115f4f(0xf1)]([{'$match':{'warehouse_name':_0x3f019c[_0x115f4f(0x140)]}},{'$unwind':_0x115f4f(0xeb)},{'$group':{'_id':'$product.product_name'}}]);console[_0x115f4f(0x144)]('purchases_data',_0x4b0874);const _0x1761bb=await product[_0x115f4f(0x13c)]({}),_0x5867b4=await warehouse[_0x115f4f(0xf1)]([{'$match':{'name':_0x3f019c[_0x115f4f(0x140)],'warehouse_category':_0x115f4f(0xf7)}},{'$unwind':_0x115f4f(0x197)},{'$group':{'_id':'$product_details._id','name':{'$first':'$product_details.product_name'},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x115f4f(0x1a6)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x115f4f(0x182)},'floorlevel':{'$first':_0x115f4f(0x196)},'primary_code':{'$first':_0x115f4f(0x104)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x115f4f(0x180)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x115f4f(0x14b)},'expiry_date':{'$first':'$product_details.expiry_date'},'production_date':{'$first':_0x115f4f(0x18d)},'batch_code':{'$first':'$product_details.batch_code'},'maxPerUnit':{'$first':_0x115f4f(0x175)},'room':{'$first':_0x115f4f(0x11a)}}}]);if(_0x11a2ea[0x0]['language']==_0x115f4f(0x163)){var _0x50228b=users[_0x115f4f(0x198)];console[_0x115f4f(0x144)](_0x50228b);}else{if(_0x11a2ea[0x0]['language']==_0x115f4f(0x147))var _0x50228b=users[_0x115f4f(0x147)];else{if(_0x11a2ea[0x0]['language']==_0x115f4f(0x11d))var _0x50228b=users[_0x115f4f(0x11d)];else{if(_0x11a2ea[0x0][_0x115f4f(0x11f)]==_0x115f4f(0xf5))var _0x50228b=users[_0x115f4f(0xf5)];else{if(_0x11a2ea[0x0][_0x115f4f(0x11f)]=='French')var _0x50228b=users[_0x115f4f(0x172)];else{if(_0x11a2ea[0x0][_0x115f4f(0x11f)]==_0x115f4f(0x10a))var _0x50228b=users['Portuguese'];else{if(_0x11a2ea[0x0][_0x115f4f(0x11f)]=='Chinese')var _0x50228b=users['Chinese'];else{if(_0x11a2ea[0x0][_0x115f4f(0x11f)]==_0x115f4f(0x13d))var _0x50228b=users[_0x115f4f(0x15c)];}}}}}}}_0x47a9a7[_0x115f4f(0x174)](_0x115f4f(0x11e),{'success':_0x4ce4fe[_0x115f4f(0x169)](_0x115f4f(0x152)),'errors':_0x4ce4fe[_0x115f4f(0x169)](_0x115f4f(0x167)),'role':_0x3d3752,'profile':_0x558f71,'adjustment':_0x3f019c,'stock':_0x5867b4,'master_shop':_0x11a2ea,'warehouse_name':_0x4b0874,'unit':_0x1761bb,'language':_0x50228b});}catch(_0x2ae7f9){console[_0x115f4f(0x144)](_0x2ae7f9),_0x47a9a7[_0x115f4f(0x121)](0xc8)[_0x115f4f(0x145)]({'message':_0x2ae7f9[_0x115f4f(0x17a)]});}}),router['post'](a0_0x435472(0x128),auth,async(_0x4b7d84,_0x4c9f28)=>{var _0x1f81d5=a0_0x435472;try{const {invoice:_0x29685d,warehouse_name:_0x17f00c,Room_name:_0x3c8eff}=_0x4b7d84['body'],_0x15a8e4=_0x4b7d84[_0x1f81d5(0x1a7)]['id'],_0x4b830c=await adjustment_finished[_0x1f81d5(0x16f)]({'_id':_0x15a8e4});var _0x211015;const _0x53f546=_0x4b830c[_0x1f81d5(0x199)][_0x1f81d5(0xe9)](async _0x161834=>{var _0x219db5=_0x1f81d5;if(_0x161834[_0x219db5(0x194)]>0x0){_0x211015=await warehouse['findOne']({'name':_0x17f00c,'room':_0x161834[_0x219db5(0x178)],'warehouse_category':_0x219db5(0xf7)});const _0x7c446a=_0x211015[_0x219db5(0x13b)][_0x219db5(0xe9)](_0x488726=>{var _0xd42f11=_0x219db5;console['log'](_0x161834[_0xd42f11(0x170)]);if(_0x161834[_0xd42f11(0x170)]==_0xd42f11(0x184))_0x488726[_0xd42f11(0x109)]==_0x161834[_0xd42f11(0x109)]&&_0x488726['bay']==_0x161834[_0xd42f11(0x153)]&&_0x488726[_0xd42f11(0x138)]==_0x161834[_0xd42f11(0x138)]&&_0x488726[_0xd42f11(0x137)]==_0x161834[_0xd42f11(0x137)]&&_0x488726[_0xd42f11(0x1a5)]==_0x161834[_0xd42f11(0x1a5)]&&_0x488726[_0xd42f11(0x132)]==_0x161834[_0xd42f11(0x132)]&&(_0x488726[_0xd42f11(0x12b)]=_0x488726['product_stock']-_0x161834[_0xd42f11(0x194)]);else _0x161834['types']==_0xd42f11(0x14a)&&(_0x488726[_0xd42f11(0x109)]==_0x161834[_0xd42f11(0x109)]&&_0x488726['bay']==_0x161834[_0xd42f11(0x153)]&&_0x488726['expiry_date']==_0x161834[_0xd42f11(0x138)]&&_0x488726[_0xd42f11(0x137)]==_0x161834[_0xd42f11(0x137)]&&_0x488726[_0xd42f11(0x1a5)]==_0x161834[_0xd42f11(0x1a5)]&&_0x488726[_0xd42f11(0x132)]==_0x161834[_0xd42f11(0x132)]&&(_0x488726[_0xd42f11(0x12b)]=_0x488726['product_stock']+_0x161834[_0xd42f11(0x194)]));});}return _0x211015;});Promise['all'](_0x53f546)[_0x1f81d5(0x1a1)](async _0x2cf33f=>{var _0x64a23c=_0x1f81d5;try{for(const _0x25487d of _0x2cf33f){await _0x25487d['save']();}_0x4b830c[_0x64a23c(0x191)]=_0x64a23c(0x142);const _0x1581af=await _0x4b830c[_0x64a23c(0x14e)](),_0x4cd505=await master_shop['find'](),_0x3a7164=await email_settings[_0x64a23c(0x18e)](),_0x3c546f=await supervisor_settings[_0x64a23c(0x13c)]();var _0x354f80=_0x4b830c[_0x64a23c(0x199)],_0x20b207='',_0x1af738;for(_0x1af738 in _0x354f80){var _0x448744='FG';_0x4b830c[_0x64a23c(0x140)]=='DRY\x20GOODS'&&(_0x448744='DG'),_0x20b207+='<tr>'+_0x64a23c(0xf8)+_0x354f80[_0x1af738][_0x64a23c(0x109)]+_0x64a23c(0x19d)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x354f80[_0x1af738][_0x64a23c(0x162)]+_0x64a23c(0x19d)+_0x64a23c(0xf8)+_0x354f80[_0x1af738][_0x64a23c(0x194)]+_0x64a23c(0x19d)+_0x64a23c(0xf8)+_0x354f80[_0x1af738][_0x64a23c(0x1a0)]+_0x64a23c(0x19d)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x354f80[_0x1af738]['secondary_unit']+_0x64a23c(0x19d)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x4b830c[_0x64a23c(0x140)]+_0x64a23c(0x19d)+_0x64a23c(0xf8)+_0x354f80[_0x1af738][_0x64a23c(0x178)]+'</td>'+_0x64a23c(0xf8)+_0x448744+_0x354f80[_0x1af738][_0x64a23c(0x153)]+_0x64a23c(0x19d)+'</tr>';}let _0x450ff2=nodemailer[_0x64a23c(0x139)]({'host':_0x3a7164[_0x64a23c(0x19b)],'port':Number(_0x3a7164[_0x64a23c(0x143)]),'secure':![],'auth':{'user':_0x3a7164[_0x64a23c(0x19a)],'pass':_0x3a7164[_0x64a23c(0xea)]}}),_0x14d840={'from':_0x3a7164['email'],'to':_0x3c546f[0x0][_0x64a23c(0x16b)],'subject':_0x64a23c(0x159),'attachments':[{'filename':_0x64a23c(0xf3),'path':__dirname+'/../public'+_0x64a23c(0x151)+_0x4cd505[0x0][_0x64a23c(0x14c)],'cid':_0x64a23c(0x106)}],'html':'<!DOCTYPE\x20html>'+_0x64a23c(0x11c)+_0x64a23c(0x131)+_0x64a23c(0x15b)+'<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'+_0x64a23c(0x15b)+_0x64a23c(0x136)+_0x64a23c(0x111)+_0x64a23c(0x15b)+_0x64a23c(0x17f)+_0x4cd505[0x0]['site_title']+'\x20</h2>'+'</div>'+_0x64a23c(0x111)+_0x64a23c(0x1a2)+_0x64a23c(0x15b)+_0x64a23c(0x181)+_0x64a23c(0x11b)+_0x4b830c['invoice']+'\x20'+_0x64a23c(0x107)+_0x64a23c(0x154)+_0x4b830c['date']+'\x20'+_0x64a23c(0xfb)+_0x64a23c(0xff)+'</div>'+_0x64a23c(0x187)+_0x64a23c(0x112)+_0x64a23c(0x19e)+_0x64a23c(0x10e)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Secondary\x20Unit\x20</th>'+_0x64a23c(0x122)+_0x64a23c(0x141)+_0x64a23c(0x10b)+_0x64a23c(0x103)+'</thead>'+'<tbody\x20style=\x22text-align:\x20center;\x22>'+'\x20'+_0x20b207+'\x20'+_0x64a23c(0x18f)+'</table>'+_0x64a23c(0x15b)+'<strong>\x20Regards\x20</strong>'+_0x64a23c(0x177)+_0x4cd505[0x0]['site_title']+_0x64a23c(0xff)+_0x64a23c(0x111)+_0x64a23c(0x111)+_0x64a23c(0x186)};_0x450ff2[_0x64a23c(0x149)](_0x14d840,function(_0x420c24,_0x58e4dd){var _0x4f542b=_0x64a23c;_0x420c24?(console[_0x4f542b(0x144)](_0x420c24),console[_0x4f542b(0x144)](_0x4f542b(0x183))):console[_0x4f542b(0x144)]('Email\x20sent\x20successfully');}),_0x4b7d84[_0x64a23c(0x169)]('success','Adjustment\x20Finalize\x20Successfully'),_0x4c9f28[_0x64a23c(0xf0)]('/picking_list/PDF_adjustment/'+_0x1581af[_0x64a23c(0x176)]);}catch(_0xbc67dc){console[_0x64a23c(0x19c)](_0xbc67dc),_0x4c9f28[_0x64a23c(0x121)](0x1f4)['json']({'error':_0x64a23c(0x195)});}})[_0x1f81d5(0x15d)](_0x55a88c=>{var _0x12ed54=_0x1f81d5;console[_0x12ed54(0x19c)](_0x55a88c),_0x4c9f28['status'](0x1f4)[_0x12ed54(0x145)]({'error':_0x12ed54(0x192)});});}catch(_0x26d06d){_0x4c9f28[_0x1f81d5(0x145)]({'message':_0x26d06d[_0x1f81d5(0x17a)]});}}),router[a0_0x435472(0x18b)](a0_0x435472(0x110),auth,async(_0x19afb0,_0x39ec0c)=>{var _0x3462a9=a0_0x435472;try{const {username:_0x35c327,email:_0x40d64b,role:_0x2a8eb9}=_0x19afb0[_0x3462a9(0x123)],_0x305de0=_0x19afb0[_0x3462a9(0x123)],_0x17840e=await profile[_0x3462a9(0x18e)]({'email':_0x305de0[_0x3462a9(0x19a)]}),_0x4b9d53=await master_shop[_0x3462a9(0x13c)]();console['log'](_0x3462a9(0x190),_0x4b9d53);const _0x2b9f26=_0x19afb0[_0x3462a9(0x1a7)]['id'],_0x527abc=await adjustment_finished[_0x3462a9(0x16f)]({'_id':_0x2b9f26});let _0x2c3b50=new Date(_0x527abc[_0x3462a9(0x138)]),_0x35517c=('0'+_0x2c3b50[_0x3462a9(0x10d)]())['slice'](-0x2),_0x13ed56=('0'+(_0x2c3b50[_0x3462a9(0x127)]()+0x1))[_0x3462a9(0xe5)](-0x2),_0x3580aa=_0x2c3b50[_0x3462a9(0x17d)](),_0x386a93=_0x3580aa+'-'+_0x13ed56+'-'+_0x35517c;var _0x5adc81=[_0x3462a9(0x16e),_0x3462a9(0x130),_0x3462a9(0x173)];const _0x2c3ed7=await purchases[_0x3462a9(0xf1)]([{'$match':{'warehouse_name':_0x527abc[_0x3462a9(0x140)]}},{'$unwind':_0x3462a9(0xeb)},{'$group':{'_id':'$product.product_name'}}]);console[_0x3462a9(0x144)]('purchases_data',_0x2c3ed7);const _0x1c1650=await product[_0x3462a9(0x13c)]({}),_0x26257c=await warehouse['aggregate']([{'$match':{'name':_0x527abc[_0x3462a9(0x140)],'room':_0x527abc['room']}},{'$unwind':_0x3462a9(0x197)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x3462a9(0x13f)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x3462a9(0x17c)},'type':{'$first':_0x3462a9(0x182)},'floorlevel':{'$first':_0x3462a9(0x196)},'primary_code':{'$first':_0x3462a9(0x104)},'secondary_code':{'$first':_0x3462a9(0x134)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x3462a9(0xed)},'rack':{'$first':_0x3462a9(0x14b)}}}]);if(_0x4b9d53[0x0][_0x3462a9(0x11f)]=='English\x20(US)'){var _0x4a8b21=users[_0x3462a9(0x198)];console[_0x3462a9(0x144)](_0x4a8b21);}else{if(_0x4b9d53[0x0][_0x3462a9(0x11f)]==_0x3462a9(0x147))var _0x4a8b21=users[_0x3462a9(0x147)];else{if(_0x4b9d53[0x0][_0x3462a9(0x11f)]==_0x3462a9(0x11d))var _0x4a8b21=users['German'];else{if(_0x4b9d53[0x0][_0x3462a9(0x11f)]==_0x3462a9(0xf5))var _0x4a8b21=users[_0x3462a9(0xf5)];else{if(_0x4b9d53[0x0][_0x3462a9(0x11f)]=='French')var _0x4a8b21=users[_0x3462a9(0x172)];else{if(_0x4b9d53[0x0]['language']==_0x3462a9(0x10a))var _0x4a8b21=users['Portuguese'];else{if(_0x4b9d53[0x0][_0x3462a9(0x11f)]==_0x3462a9(0x19f))var _0x4a8b21=users[_0x3462a9(0x19f)];else{if(_0x4b9d53[0x0]['language']=='Arabic\x20(ae)')var _0x4a8b21=users[_0x3462a9(0x15c)];}}}}}}}_0x39ec0c['render'](_0x3462a9(0x135),{'success':_0x19afb0[_0x3462a9(0x169)](_0x3462a9(0x152)),'errors':_0x19afb0[_0x3462a9(0x169)]('errors'),'role':_0x305de0,'profile':_0x17840e,'adjustment':_0x527abc,'stock':_0x26257c,'master_shop':_0x4b9d53,'warehouse_name':_0x2c3ed7,'unit':_0x1c1650,'language':_0x4a8b21,'rooms_data':_0x5adc81,'ed_fullDate':_0x386a93});}catch(_0x5c4f61){console[_0x3462a9(0x144)](_0x5c4f61),_0x39ec0c[_0x3462a9(0x121)](0xc8)['json']({'message':_0x5c4f61[_0x3462a9(0x17a)]});}}),router['post'](a0_0x435472(0x110),auth,async(_0xf3a145,_0x123c74)=>{var _0x3ff330=a0_0x435472;try{const _0x1f5325=_0xf3a145['params']['id'],_0x357021=await adjustment_finished[_0x3ff330(0x16f)]({'_id':_0x1f5325}),_0x300988=await warehouse[_0x3ff330(0x18e)]({'name':_0x357021['warehouse_name'],'room':_0x357021[_0x3ff330(0x13e)]}),{warehouse_name:_0x49ae7b,date:_0x55f6f4,prod_name:_0x43c7bb,level:_0x31beab,isle:_0x1403c5,pallet:_0x4248bb,stock:_0x1ba194,types:_0x26a59e,adjust_qty:_0xf77455,new_adjust_qty:_0x243ec4,note:_0x9054c1,Room_name:_0x52f489,invoice:_0x56c7cd,JO_number:_0x3622f5}=_0xf3a145['body'];if(typeof _0x43c7bb=='string')var _0x525c55=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x18a)]],_0x989ac1=[_0xf3a145[_0x3ff330(0x155)]['level']],_0x2a6a43=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x156)]],_0x2ac3d6=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x170)]],_0x2bcca1=[_0xf3a145['body']['adjust_qty']],_0x2001cd=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x164)]],_0x4e14f9=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0xe8)]],_0x502aff=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x1a0)]],_0x17e943=[_0xf3a145['body'][_0x3ff330(0x1a8)]],_0x1dc2e7=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x1a5)]],_0xaaf605=[_0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x138)]];else var _0x525c55=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x18a)]],_0x989ac1=[..._0xf3a145[_0x3ff330(0x155)]['level']],_0x2a6a43=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x156)]],_0x2ac3d6=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x170)]],_0x2bcca1=[..._0xf3a145['body']['adjust_qty']],_0x2001cd=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x164)]],_0x4e14f9=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0xe8)]],_0x502aff=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x1a0)]],_0x17e943=[..._0xf3a145[_0x3ff330(0x155)][_0x3ff330(0x1a8)]],_0x1dc2e7=[..._0xf3a145[_0x3ff330(0x155)]['batch_code']],_0xaaf605=[..._0xf3a145[_0x3ff330(0x155)]['expiry_date']];const _0x14bc19=_0x525c55['map'](_0x491ff4=>{return _0x491ff4={'product_name':_0x491ff4};});_0x989ac1[_0x3ff330(0x160)]((_0x2d6b29,_0x41db99)=>{var _0x5163dc=_0x3ff330;_0x14bc19[_0x41db99][_0x5163dc(0x153)]=_0x2d6b29;}),_0x2a6a43[_0x3ff330(0x160)]((_0x52e6fb,_0x2299ed)=>{var _0x1de86d=_0x3ff330;_0x14bc19[_0x2299ed][_0x1de86d(0x117)]=_0x52e6fb;}),_0x2ac3d6[_0x3ff330(0x160)]((_0x259fd2,_0x710b90)=>{_0x14bc19[_0x710b90]['types']=_0x259fd2;}),_0x2bcca1[_0x3ff330(0x160)]((_0x3d65cb,_0x413943)=>{var _0x3cf841=_0x3ff330;_0x14bc19[_0x413943][_0x3cf841(0x194)]=_0x3d65cb;}),_0x2001cd[_0x3ff330(0x160)]((_0x4d4db6,_0x128726)=>{_0x14bc19[_0x128726]['new_adjust_qty']=_0x4d4db6;}),_0x502aff['forEach']((_0x39d10f,_0x23cec4)=>{_0x14bc19[_0x23cec4]['unit']=_0x39d10f;}),_0x17e943[_0x3ff330(0x160)]((_0x279d95,_0x57d19e)=>{var _0x26c4fd=_0x3ff330;_0x14bc19[_0x57d19e][_0x26c4fd(0x193)]=_0x279d95;}),_0x4e14f9[_0x3ff330(0x160)]((_0x241744,_0x4b220e)=>{_0x14bc19[_0x4b220e]['product_code']=_0x241744;}),_0x1dc2e7[_0x3ff330(0x160)]((_0x303ea5,_0x59a81c)=>{var _0xe3e998=_0x3ff330;_0x14bc19[_0x59a81c][_0xe3e998(0x1a5)]=_0x303ea5;}),_0xaaf605['forEach']((_0x51541b,_0x4444e0)=>{_0x14bc19[_0x4444e0]['expiry_date']=_0x51541b;});const _0x502128=_0x14bc19[_0x3ff330(0xfe)](_0x9539e2=>_0x9539e2[_0x3ff330(0x194)]!=='0'&&_0x9539e2[_0x3ff330(0x194)]!=='');var _0x44d3af=0x0;_0x502128[_0x3ff330(0x160)](_0x58580e=>{var _0x7ff77c=_0x3ff330;console[_0x7ff77c(0x144)](_0x7ff77c(0x171),_0x58580e),parseInt(_0x58580e[_0x7ff77c(0x194)])<=0x0&&_0x44d3af++;});if(_0x44d3af!=0x0)return _0xf3a145[_0x3ff330(0x169)](_0x3ff330(0x167),'You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x123c74['redirect']('back');_0x357021[_0x3ff330(0x140)]=_0x49ae7b,_0x357021[_0x3ff330(0xfc)]=_0x55f6f4,_0x357021[_0x3ff330(0x199)]=_0x502128,_0x357021['note']=_0x9054c1,_0x357021[_0x3ff330(0x13e)]=_0x52f489,_0x357021[_0x3ff330(0x132)]=_0x56c7cd,_0x357021[_0x3ff330(0x1a3)]=_0x3622f5;const _0x399bda=await _0x357021[_0x3ff330(0x14e)](),_0x301433=await warehouse['findOne']({'name':_0x49ae7b,'room':_0x52f489});_0x399bda[_0x3ff330(0x199)][_0x3ff330(0x160)](_0x3ab890=>{var _0x25f006=_0x3ff330;const _0x3fe32b=_0x301433['product_details'][_0x25f006(0xe9)](_0x4f2f33=>{var _0x63d7cc=_0x25f006;_0x3ab890['types']==_0x63d7cc(0x184)?_0x4f2f33[_0x63d7cc(0x109)]==_0x3ab890[_0x63d7cc(0x109)]&&_0x4f2f33[_0x63d7cc(0x153)]==_0x3ab890[_0x63d7cc(0x153)]&&(_0x4f2f33[_0x63d7cc(0x12b)]=parseInt(_0x4f2f33[_0x63d7cc(0x12b)])-parseInt(_0x3ab890[_0x63d7cc(0x194)])):_0x4f2f33['product_name']==_0x3ab890[_0x63d7cc(0x109)]&&_0x4f2f33[_0x63d7cc(0x153)]==_0x3ab890[_0x63d7cc(0x153)]&&(_0x4f2f33[_0x63d7cc(0x12b)]=parseInt(_0x4f2f33[_0x63d7cc(0x12b)])+parseInt(_0x3ab890[_0x63d7cc(0x194)]));});}),await _0x301433[_0x3ff330(0x14e)](),_0xf3a145[_0x3ff330(0x169)](_0x3ff330(0x152),_0x3ff330(0x15f)),_0x123c74['redirect']('/adjustment_finished/view');}catch(_0x145912){console[_0x3ff330(0x144)](_0x145912);}}),router[a0_0x435472(0x161)](a0_0x435472(0x168),async(_0x3f09da,_0x29022d)=>{var _0x1ba2e5=a0_0x435472;const {primary_code:_0x554e37,warehouse_data:_0x4f65aa,rooms_data:_0x2af660,Roomslist:_0x5e2696}=_0x3f09da[_0x1ba2e5(0x155)],_0x1be493=_0x5e2696['split'](','),_0x30ae95=[];async function _0x368f74(_0x303a0d){var _0x2cb8ef=_0x1ba2e5;const _0x4e6770=await warehouse[_0x2cb8ef(0xf1)]([{'$match':{'name':_0x4f65aa,'room':_0x303a0d}},{'$unwind':_0x2cb8ef(0x197)},{'$match':{'product_details.primary_code':_0x554e37}},{'$group':{'_id':_0x2cb8ef(0x185),'name':{'$first':_0x2cb8ef(0x13f)},'product_stock':{'$first':_0x2cb8ef(0x115)},'primary_code':{'$first':_0x2cb8ef(0x104)},'secondary_code':{'$first':_0x2cb8ef(0x134)},'product_code':{'$first':_0x2cb8ef(0x180)},'level':{'$first':_0x2cb8ef(0x1a6)},'isle':{'$first':_0x2cb8ef(0x17c)},'type':{'$first':_0x2cb8ef(0x182)},'pallet':{'$first':'$product_details.floorlevel'},'unit':{'$first':'$product_details.unit'},'secondary_unit':{'$first':'$product_details.secondary_unit'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x2cb8ef(0x14b)},'expiry_date':{'$first':_0x2cb8ef(0x100)},'production_date':{'$first':_0x2cb8ef(0x18d)},'batch_code':{'$first':_0x2cb8ef(0x1a9)},'product_cat':{'$first':'P'},'maxPerUnit':{'$first':_0x2cb8ef(0x175)},'roomNamed':{'$first':_0x2cb8ef(0x11a)},'invoice':{'$first':'$product_details.invoice'}}}]),_0x58404c=await warehouse[_0x2cb8ef(0xf1)]([{'$match':{'name':_0x4f65aa,'room':_0x303a0d}},{'$unwind':_0x2cb8ef(0x197)},{'$match':{'product_details.secondary_code':_0x554e37}},{'$group':{'_id':_0x2cb8ef(0x185),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x2cb8ef(0x115)},'primary_code':{'$first':_0x2cb8ef(0x104)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':'$product_details.product_code'},'level':{'$first':'$product_details.bay'},'isle':{'$first':_0x2cb8ef(0x17c)},'type':{'$first':_0x2cb8ef(0x182)},'pallet':{'$first':_0x2cb8ef(0x196)},'unit':{'$first':'$product_details.unit'},'secondary_unit':{'$first':_0x2cb8ef(0xfa)},'storage':{'$first':_0x2cb8ef(0xed)},'rack':{'$first':'$product_details.rack'},'expiry_date':{'$first':_0x2cb8ef(0x100)},'production_date':{'$first':_0x2cb8ef(0x18d)},'batch_code':{'$first':'$product_details.batch_code'},'product_cat':{'$first':'S'},'maxPerUnit':{'$first':_0x2cb8ef(0x175)},'roomNamed':{'$first':_0x2cb8ef(0x11a)},'invoice':{'$first':_0x2cb8ef(0x188)}}}]);if(_0x4e6770[_0x2cb8ef(0x12d)]>0x0)_0x30ae95['push'](_0x4e6770);else _0x58404c['length']>0x0&&_0x30ae95[_0x2cb8ef(0xf4)](_0x58404c);}const _0x207b37=_0x1be493['map'](_0x1c3a84=>_0x368f74(_0x1c3a84));await Promise[_0x1ba2e5(0x14d)](_0x207b37),_0x29022d['json'](_0x30ae95);}),router[a0_0x435472(0x161)](a0_0x435472(0xfd),async(_0x1c704d,_0x49f911)=>{var _0x377467=a0_0x435472;const {productCode:_0x1b4e63,bay:_0x662ec1,warehouses:_0x48d69e,room:_0x57e46e}=_0x1c704d[_0x377467(0x155)];console['log'](_0x1c704d[_0x377467(0x155)]);try{const _0x124023=await warehouse[_0x377467(0xf1)]([{'$match':{'name':_0x48d69e,'room':_0x57e46e}},{'$unwind':_0x377467(0x197)},{'$match':{'product_details.bay':parseInt(_0x662ec1)}},{'$group':{'_id':_0x377467(0x185),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x377467(0x115)},'bay':{'$first':_0x377467(0x1a6)},'maxProducts':{'$first':_0x377467(0x10f)}}}]);_0x49f911[_0x377467(0x121)](0xc8)[_0x377467(0x145)](_0x124023);}catch(_0x3630c2){_0x49f911['status'](0x194)[_0x377467(0x145)]({'message':_0x3630c2[_0x377467(0x17a)]});}}),module['exports']=router;function a0_0x184b(){var _0x116f78=['port','log','json','184jdInBI','Hindi','warehouse','sendMail','add','$product_details.rack','image','all','save','add_adjustment_finished','/adjustment_finished/preview/','/upload/','success','bay','\x20Order\x20Date\x20:\x20','body','stock','2094715OmJFOu','staff','Adjustment\x20Mail','1306dvDfwM','<div>','Arabic','catch','product_date','adjustment\x20data\x20update\x20successfully','forEach','post','product_code','English\x20(US)','new_adjust_qty','../middleware/auth','$name','errors','/barcode_scanner','flash','Portuguese','FGSEmail','/view/add_adjustment','6uWEqoG','Ambient','findById','types','foreach\x20newproduct','French','Return\x20Rooms','render','$product_details.maxPerUnit','_id','<h5>','room_names','2847120RYUinX','message','adjustment\x20add\x20successfull','$product_details.bin','getFullYear','New_Qty_Converted_adj','<h2>\x20','$product_details.product_code','<h5\x20style=\x22text-align:\x20left;\x22>','$product_details.type','Error\x20Occurs','minus','$product_details._id','</body></html>','<table\x20style=\x22width:\x20100%\x20!important;\x22>','$product_details.invoice','string','prod_name','get','../public/language/languages.json','$product_details.production_date','findOne','</tbody>','master','finalize','An\x20error\x20occurred.','secondary_unit','adjust_qty','An\x20error\x20occurred\x20while\x20saving\x20data.','$product_details.floorlevel','$product_details','English','product','email','host','error','</td>','<tr>','Chinese','unit','then','<hr\x20class=\x22my-3\x22>','JO_number','372fwKbuS','batch_code','$product_details.bay','params','Secondary_units','$product_details.batch_code','slice','$date','710640VzMPMK','prod_code','map','password','$product','/view','$product_details.storage','628FwNATd','prod_invoice','redirect','aggregate','../models/all_models','Logo.png','push','Spanish','New_Qty_Converted','Finished\x20Goods','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','4330VpqPdA','$product_details.secondary_unit','</span>','date','/CheckingWarehouse','filter','</h5>','$product_details.expiry_date','238403YpLHSy','$product.room_names','</tr>','$product_details.primary_code','express','logo','<span\x20style=\x22float:\x20right;\x22>','Primary_Units','product_name','Portuguese\x20(BR)','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>','$warehouse_name','getDate','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','$product_details.maxProducts','/view/:id','</div>','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','QA\x20Warehouse','adjustment_finished','$product_details.product_stock','Enabled','stockBefore','99UgXXKU','role','$room','\x20Order\x20Number\x20:\x20','<html><head><title></title>','German','edit_adjustment_finished_view','language','floor','status','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Warehouse</th>','user','random','298910gMbeZK','maxPerUnit','getMonth','/preview/:id','$finalize','ADJF-','product_stock','padStart','length','back','$_id','Enclosed','</head><body>','invoice','prod_cat','$product_details.secondary_code','edit_adjustment_finished','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','production_date','expiry_date','createTransport','$invoice','product_details','find','Arabic\x20(ae)','room','$product_details.product_name','warehouse_name','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room</th>','True'];a0_0x184b=function(){return _0x116f78;};return a0_0x184b();}