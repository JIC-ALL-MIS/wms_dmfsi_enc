var a0_0x4d617e=a0_0x4871;(function(_0x318b47,_0x7ec81b){var _0x381fab=a0_0x4871,_0x1b5eca=_0x318b47();while(!![]){try{var _0x257557=-parseInt(_0x381fab(0xee))/0x1+parseInt(_0x381fab(0xd0))/0x2*(-parseInt(_0x381fab(0x129))/0x3)+-parseInt(_0x381fab(0x115))/0x4*(parseInt(_0x381fab(0xd1))/0x5)+-parseInt(_0x381fab(0x101))/0x6+-parseInt(_0x381fab(0x119))/0x7*(-parseInt(_0x381fab(0xda))/0x8)+-parseInt(_0x381fab(0x11f))/0x9*(-parseInt(_0x381fab(0x127))/0xa)+parseInt(_0x381fab(0x12e))/0xb*(parseInt(_0x381fab(0x10b))/0xc);if(_0x257557===_0x7ec81b)break;else _0x1b5eca['push'](_0x1b5eca['shift']());}catch(_0x2c5569){_0x1b5eca['push'](_0x1b5eca['shift']());}}}(a0_0x5398,0xd2110));function a0_0x4871(_0x3370e1,_0x141cd4){var _0x5398ed=a0_0x5398();return a0_0x4871=function(_0x487158,_0x43ff4f){_0x487158=_0x487158-0xcf;var _0x1ceac6=_0x5398ed[_0x487158];return _0x1ceac6;},a0_0x4871(_0x3370e1,_0x141cd4);}const express=require(a0_0x4d617e(0x137)),app=express(),router=express[a0_0x4d617e(0xf3)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x4d617e(0x102)),auth=require(a0_0x4d617e(0xfe)),users=require('../public/language/languages.json');function a0_0x5398(){var _0x4bc6ba=['map','product_name','all_data','73992WMaXXS','English\x20(US)','Portuguese\x20(BR)','exports','get','redirect','sales_return_invoice','product_stock','/sales_return/view','Raw\x20Materials','amount','note','ToRoom','new\x20new_data','Chinese','post','payment\x20successfull','find','stocks','ToWarehouse','774738cNuCtO','forEach','bin','suppliers','findOne','Router','return_sale','return_qty','floorlevel','Spanish','user','old_warehouse_data','warehouse_name','date','sales_quantity','getDate','../middleware/auth','paid_amount','$product_details.product_name','178578qZnGGL','../models/all_models','stock','type','German','$product_details.secondary_code','/invoice/:id','getMonth','c_payment','$product_details.type','1385112goeyym','$product_details.bay','due_amount','primary_code','render','$product_details.storage','flash','findById','Return\x20Goods','log','492AHwTeD','product_details','/view','params','455uvgyBb','subtract','email','English','$product_details._id','name','9700767Bbytvl','bay','$product_details','Enabled','$product_details.rack','aggregate','Arabic\x20(ae)','French','10vStFlI','Returned\x20Payment\x20For\x20Sale\x20Return','674034XnJITp','language','types','secondary_code','invoice','143oPCNGt','sale_qty','$name','customer','$product_details.bin','success','Arabic','Sale\x20Return','json','express','slice','status','/view/:id','$product_details.product_stock','sales_return','Portuguese','$customer_docs','errors','/give_payment/:id','save','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','body','10lNWZNx','15905VqnULL','$product_details.floorlevel','product_code','Hindi','master','customer_docs'];a0_0x5398=function(){return _0x4bc6ba;};return a0_0x5398();}router[a0_0x4d617e(0xde)](a0_0x4d617e(0x117),auth,async(_0x5e9514,_0x3663fb)=>{var _0x2fa012=a0_0x4d617e;try{const {username:_0x3a3b71,email:_0x20b2cf,role:_0x245e61}=_0x5e9514[_0x2fa012(0xf8)],_0x20e44e=_0x5e9514[_0x2fa012(0xf8)],_0x4ea301=await profile[_0x2fa012(0xf2)]({'email':_0x20e44e[_0x2fa012(0x11b)]}),_0x3f9435=await master_shop[_0x2fa012(0xeb)]();console['log']('master',_0x3f9435);const _0x1f73cc=await sales_return[_0x2fa012(0x124)]([{'$lookup':{'from':'customers','localField':_0x2fa012(0x131),'foreignField':_0x2fa012(0x11e),'as':_0x2fa012(0xd6)}},{'$unwind':_0x2fa012(0x13e)}]);console['log'](_0x2fa012(0xd9),_0x1f73cc);if(_0x3f9435[0x0][_0x2fa012(0x12a)]==_0x2fa012(0xdb)){var _0x29c399=users[_0x2fa012(0x11c)];console[_0x2fa012(0x114)](_0x29c399);}else{if(_0x3f9435[0x0][_0x2fa012(0x12a)]==_0x2fa012(0xd4))var _0x29c399=users[_0x2fa012(0xd4)];else{if(_0x3f9435[0x0][_0x2fa012(0x12a)]=='German')var _0x29c399=users[_0x2fa012(0x105)];else{if(_0x3f9435[0x0]['language']=='Spanish')var _0x29c399=users['Spanish'];else{if(_0x3f9435[0x0]['language']=='French')var _0x29c399=users[_0x2fa012(0x126)];else{if(_0x3f9435[0x0][_0x2fa012(0x12a)]=='Portuguese\x20(BR)')var _0x29c399=users[_0x2fa012(0x13d)];else{if(_0x3f9435[0x0][_0x2fa012(0x12a)]==_0x2fa012(0xe8))var _0x29c399=users[_0x2fa012(0xe8)];else{if(_0x3f9435[0x0][_0x2fa012(0x12a)]==_0x2fa012(0x125))var _0x29c399=users[_0x2fa012(0x134)];}}}}}}}_0x3663fb[_0x2fa012(0x10f)](_0x2fa012(0x13c),{'success':_0x5e9514[_0x2fa012(0x111)](_0x2fa012(0x133)),'errors':_0x5e9514[_0x2fa012(0x111)](_0x2fa012(0x13f)),'role':_0x20e44e,'profile':_0x4ea301,'master_shop':_0x3f9435,'user':_0x1f73cc,'language':_0x29c399});}catch(_0x5c83bb){console['log'](_0x5c83bb);}}),router['get'](a0_0x4d617e(0x13a),auth,async(_0x2a9466,_0x4eef7e)=>{var _0x414985=a0_0x4d617e;try{const {username:_0x4e627d,email:_0x57c6c7,role:_0xfd28e9}=_0x2a9466[_0x414985(0xf8)],_0x56baa5=_0x2a9466[_0x414985(0xf8)],_0x1ea3f3=await profile[_0x414985(0xf2)]({'email':_0x56baa5[_0x414985(0x11b)]}),_0x458584=await master_shop[_0x414985(0xeb)]();console['log'](_0x414985(0xd5),_0x458584);const _0x43f6d5=_0x2a9466[_0x414985(0x118)]['id'];console[_0x414985(0x114)](_0x43f6d5);var _0x3fe732=['Return\x20Rooms'];const _0x5b329f=await sales_return[_0x414985(0x112)](_0x43f6d5),_0x3cbfb6=await warehouse['aggregate']([{'$match':{'name':_0x5b329f[_0x414985(0xed)],'room':_0x5b329f[_0x414985(0xe6)]}},{'$unwind':_0x414985(0x121)},{'$group':{'_id':_0x414985(0x11d),'name':{'$first':_0x414985(0x100)},'product_stock':{'$first':_0x414985(0x13b)},'bay':{'$first':_0x414985(0x10c)},'bin':{'$first':_0x414985(0x132)},'type':{'$first':_0x414985(0x10a)},'floorlevel':{'$first':_0x414985(0xd2)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x414985(0x106)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x414985(0x110)},'rack':{'$first':_0x414985(0x123)}}}]);console[_0x414985(0x114)](_0x3cbfb6);const _0x27774b=await warehouse[_0x414985(0x124)]([{'$match':{'status':_0x414985(0x122),'name':_0x414985(0x113),'warehouse_category':_0x414985(0xe3)}},{'$group':{'_id':_0x414985(0x130),'name':{'$first':_0x414985(0x130)}}},{'$sort':{'name':0x1}}]),_0x219eda=await product['find']({});if(_0x458584[0x0]['language']=='English\x20(US)'){var _0x8f3941=users[_0x414985(0x11c)];console[_0x414985(0x114)](_0x8f3941);}else{if(_0x458584[0x0][_0x414985(0x12a)]==_0x414985(0xd4))var _0x8f3941=users[_0x414985(0xd4)];else{if(_0x458584[0x0][_0x414985(0x12a)]==_0x414985(0x105))var _0x8f3941=users[_0x414985(0x105)];else{if(_0x458584[0x0][_0x414985(0x12a)]==_0x414985(0xf7))var _0x8f3941=users[_0x414985(0xf7)];else{if(_0x458584[0x0]['language']=='French')var _0x8f3941=users['French'];else{if(_0x458584[0x0][_0x414985(0x12a)]==_0x414985(0xdc))var _0x8f3941=users['Portuguese'];else{if(_0x458584[0x0][_0x414985(0x12a)]==_0x414985(0xe8))var _0x8f3941=users[_0x414985(0xe8)];else{if(_0x458584[0x0][_0x414985(0x12a)]=='Arabic\x20(ae)')var _0x8f3941=users[_0x414985(0x134)];}}}}}}}_0x4eef7e['render']('return_sale_edit',{'success':_0x2a9466[_0x414985(0x111)](_0x414985(0x133)),'errors':_0x2a9466[_0x414985(0x111)](_0x414985(0x13f)),'role':_0x56baa5,'profile':_0x1ea3f3,'master_shop':_0x458584,'user':_0x5b329f,'stock':_0x3cbfb6,'unit':_0x219eda,'language':_0x8f3941,'warehouses':_0x27774b,'rooms':_0x3fe732});}catch(_0x3a8fcb){console[_0x414985(0x114)](_0x3a8fcb);}}),router[a0_0x4d617e(0xe9)](a0_0x4d617e(0x13a),auth,async(_0x5d4175,_0xe8dd6f)=>{var _0x5d1d98=a0_0x4d617e;try{const _0x1cabe2=_0x5d4175[_0x5d1d98(0x118)]['id'];console[_0x5d1d98(0x114)](_0x1cabe2);const _0x7e3436=await sales_return[_0x5d1d98(0xf2)]({'invoice':_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x12d)]});console[_0x5d1d98(0x114)]('old_data',_0x7e3436);const _0x5578a6=await warehouse[_0x5d1d98(0xf2)]({'name':_0x7e3436['ToWarehouse'],'room':_0x7e3436[_0x5d1d98(0xe6)]});console[_0x5d1d98(0x114)]('old_warehouse_data',_0x5578a6);const {invoice:_0x582b21,customer:_0x397e62,date:_0x2eeaf6,warehouse_name:_0xf356aa,product_name:_0x5d5c29,primary_code:_0x505454,secondary_code:_0x35e5c2,product_code:_0x1100f3,sales_quantity:_0x18608f,stocks:_0x9a5d8c,return_qty:_0x529b7d,note:_0x47da06,to_warehouse_name:_0x930cf8,to_Room_name:_0x401d48}=_0x5d4175[_0x5d1d98(0xcf)];console[_0x5d1d98(0x114)](_0x5d4175[_0x5d1d98(0xcf)]);if(typeof _0x5d5c29=='string')var _0xaf0171=[_0x5d4175['body'][_0x5d1d98(0xd8)]],_0x2c5cd2=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x10e)]],_0x40e63f=[_0x5d4175[_0x5d1d98(0xcf)]['secondary_code']],_0x333653=[_0x5d4175['body'][_0x5d1d98(0xd3)]],_0x4c4cd9=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xfc)]],_0x44b84d=[_0x5d4175['body'][_0x5d1d98(0xec)]],_0xf4cf97=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xf5)]],_0x3b0606=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x120)]],_0x222a0b=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xf0)]],_0x1f7df3=[_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x12b)]],_0x4d857a=[_0x5d4175['body'][_0x5d1d98(0xf6)]];else var _0xaf0171=[..._0x5d4175[_0x5d1d98(0xcf)]['product_name']],_0x2c5cd2=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x10e)]],_0x40e63f=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x12c)]],_0x333653=[..._0x5d4175[_0x5d1d98(0xcf)]['product_code']],_0x4c4cd9=[..._0x5d4175[_0x5d1d98(0xcf)]['sales_quantity']],_0x44b84d=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xec)]],_0xf4cf97=[..._0x5d4175[_0x5d1d98(0xcf)]['return_qty']],_0x3b0606=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x120)]],_0x222a0b=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xf0)]],_0x1f7df3=[..._0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0x12b)]],_0x4d857a=[..._0x5d4175['body'][_0x5d1d98(0xf6)]];const _0x47fd5a=_0xaf0171[_0x5d1d98(0xd7)](_0x1849a5=>{return _0x1849a5={'product_name':_0x1849a5};});_0x2c5cd2[_0x5d1d98(0xef)]((_0x3f4a03,_0x25320e)=>{var _0x419ad1=_0x5d1d98;_0x47fd5a[_0x25320e][_0x419ad1(0x10e)]=_0x3f4a03;}),_0x40e63f[_0x5d1d98(0xef)]((_0x3f39d0,_0x5592df)=>{var _0x3dc3cd=_0x5d1d98;_0x47fd5a[_0x5592df][_0x3dc3cd(0x12c)]=_0x3f39d0;}),_0x333653[_0x5d1d98(0xef)]((_0x20b37a,_0x1f7d53)=>{var _0x1833d5=_0x5d1d98;_0x47fd5a[_0x1f7d53][_0x1833d5(0xd3)]=_0x20b37a;}),_0x4c4cd9[_0x5d1d98(0xef)]((_0x57af85,_0x365bae)=>{var _0x42a608=_0x5d1d98;_0x47fd5a[_0x365bae][_0x42a608(0x12f)]=_0x57af85;}),_0x44b84d[_0x5d1d98(0xef)]((_0x105276,_0xea03fc)=>{var _0x37afb2=_0x5d1d98;_0x47fd5a[_0xea03fc][_0x37afb2(0x103)]=_0x105276;}),_0xf4cf97[_0x5d1d98(0xef)]((_0x20b812,_0x25dd5d)=>{var _0x40a089=_0x5d1d98;_0x47fd5a[_0x25dd5d][_0x40a089(0xf5)]=_0x20b812;}),_0x3b0606[_0x5d1d98(0xef)]((_0x29086c,_0x177992)=>{var _0x35b7aa=_0x5d1d98;_0x47fd5a[_0x177992][_0x35b7aa(0x120)]=_0x29086c;}),_0x222a0b[_0x5d1d98(0xef)]((_0x11d0a3,_0x5b1502)=>{var _0x8b4f0e=_0x5d1d98;_0x47fd5a[_0x5b1502][_0x8b4f0e(0xf0)]=_0x11d0a3;}),_0x1f7df3[_0x5d1d98(0xef)]((_0x17b56c,_0x103b49)=>{var _0x3e33cd=_0x5d1d98;_0x47fd5a[_0x103b49][_0x3e33cd(0x104)]=_0x17b56c;}),_0x4d857a[_0x5d1d98(0xef)]((_0x75bbb3,_0x3bcd82)=>{var _0xfc65c6=_0x5d1d98;_0x47fd5a[_0x3bcd82][_0xfc65c6(0xf6)]=_0x75bbb3;});var _0x26da05=0x0;_0x47fd5a[_0x5d1d98(0xef)](_0x5039f7=>{var _0x2ba203=_0x5d1d98;console[_0x2ba203(0x114)]('foreach\x20newproduct',_0x5039f7),(parseInt(_0x5039f7[_0x2ba203(0x12f)])<parseInt(_0x5039f7[_0x2ba203(0xf5)])||parseInt(_0x5039f7['stock'])<parseInt(_0x5039f7[_0x2ba203(0xf5)])&&parseInt(_0x5039f7[_0x2ba203(0x12f)])>parseInt(_0x5039f7[_0x2ba203(0xf5)])||parseInt(_0x5039f7[_0x2ba203(0xf5)])==0x0)&&_0x26da05++;});if(_0x26da05!=0x0)return _0x5d4175[_0x5d1d98(0x111)](_0x5d1d98(0x13f),_0x5d1d98(0x142)),_0xe8dd6f[_0x5d1d98(0xdf)]('back');_0x7e3436[_0x5d1d98(0xf4)][_0x5d1d98(0xef)](_0x5b611c=>{var _0x4536be=_0x5d1d98;const _0x4929cf=_0x5578a6[_0x4536be(0x116)][_0x4536be(0xd7)](_0x539c9e=>{var _0x3be075=_0x4536be;_0x539c9e[_0x3be075(0xd8)]==_0x5b611c['product_name']&&_0x539c9e[_0x3be075(0xf6)]==_0x5b611c[_0x3be075(0xf6)]&&_0x539c9e[_0x3be075(0x104)]==_0x5b611c[_0x3be075(0x104)]&&_0x539c9e[_0x3be075(0xf0)]==_0x5b611c['bin']&&_0x539c9e[_0x3be075(0x120)]==_0x5b611c[_0x3be075(0x120)]&&(_0x539c9e[_0x3be075(0xe1)]=parseInt(_0x539c9e[_0x3be075(0xe1)])+parseInt(_0x5b611c[_0x3be075(0xf5)]));});}),console['log'](_0x5d1d98(0xf9),_0x5578a6),await _0x5578a6[_0x5d1d98(0x141)](),_0x7e3436['invoice']=_0x582b21,_0x7e3436[_0x5d1d98(0x131)]=_0x397e62,_0x7e3436[_0x5d1d98(0xfb)]=_0x2eeaf6,_0x7e3436[_0x5d1d98(0xfa)]=_0xf356aa,_0x7e3436[_0x5d1d98(0xf4)]=_0x47fd5a,_0x7e3436[_0x5d1d98(0xe5)]=_0x47da06,_0x7e3436[_0x5d1d98(0xed)]=_0x930cf8,_0x7e3436[_0x5d1d98(0xe6)]=_0x401d48;const _0x3dce2f=await _0x7e3436[_0x5d1d98(0x141)]();console[_0x5d1d98(0x114)](_0x5d1d98(0xe7),_0x3dce2f);const _0x2c5466=await c_payment_data[_0x5d1d98(0xf2)]({'invoice':_0x5d4175['body'][_0x5d1d98(0x12d)],'reason':_0x5d1d98(0x135)});_0x2c5466[_0x5d1d98(0xf1)]=_0x5d4175[_0x5d1d98(0xcf)][_0x5d1d98(0xf1)],_0x2c5466['date']=_0x5d4175['body'][_0x5d1d98(0xfb)],await _0x2c5466['save'](),_0x5d4175[_0x5d1d98(0x111)](_0x5d1d98(0x133),'purchase\x20return\x20successfully'),_0xe8dd6f[_0x5d1d98(0xdf)]('/sales_return/view');}catch(_0x4afff3){console[_0x5d1d98(0x114)](_0x4afff3),_0xe8dd6f[_0x5d1d98(0x139)](0xc8)[_0x5d1d98(0x136)]({'message':_0x4afff3['message']});}}),router[a0_0x4d617e(0xe9)](a0_0x4d617e(0x140),auth,async(_0x387052,_0x14740d)=>{var _0x2cebd0=a0_0x4d617e;try{const _0x108439=_0x387052[_0x2cebd0(0x118)]['id'],{invoice:_0x5adcc4,customer:_0x3d7de4,payable_to_customer:_0x256c33,paid_amount:_0x51e933}=_0x387052['body'],_0x231583=await sales_return['findById'](_0x108439);console['log']('data',_0x231583),console[_0x2cebd0(0x114)](_0x256c33),console[_0x2cebd0(0x114)](_0x51e933);var _0x3d853a=_0x256c33-_0x51e933;console[_0x2cebd0(0x114)](_0x2cebd0(0x11a),_0x3d853a),_0x231583[_0x2cebd0(0xff)]=parseFloat(_0x51e933)+parseFloat(_0x231583[_0x2cebd0(0xff)]),_0x231583[_0x2cebd0(0x10d)]=_0x3d853a,console[_0x2cebd0(0x114)](_0x231583);const _0x266efe=await _0x231583[_0x2cebd0(0x141)]();console['log'](0x1b207);const _0x378483=await c_payment_data[_0x2cebd0(0xf2)]({'invoice':_0x387052[_0x2cebd0(0xcf)][_0x2cebd0(0x12d)],'reason':_0x2cebd0(0x135)});console[_0x2cebd0(0x114)](_0x2cebd0(0x109),_0x378483),_0x378483[_0x2cebd0(0xe4)]=_0x3d853a,await _0x378483[_0x2cebd0(0x141)]();let _0x20d164=new Date(),_0xf5c7c1=('0'+_0x20d164[_0x2cebd0(0xfd)]())[_0x2cebd0(0x138)](-0x2),_0x29a697=('0'+(_0x20d164[_0x2cebd0(0x108)]()+0x1))['slice'](-0x2),_0x15fdcf=_0x20d164['getFullYear'](),_0x504bc7=_0x15fdcf+'-'+_0x29a697+'-'+_0xf5c7c1;const _0x406f59=new customer_payment({'invoice':_0x5adcc4,'date':_0x15fdcf+'-'+_0x29a697+'-'+_0xf5c7c1,'customer':_0x3d7de4,'reason':_0x2cebd0(0x128),'amount':_0x51e933}),_0x2c6ffe=await _0x406f59[_0x2cebd0(0x141)]();_0x387052[_0x2cebd0(0x111)]('success',_0x2cebd0(0xea)),_0x14740d['redirect'](_0x2cebd0(0xe2));}catch(_0x80d38d){console[_0x2cebd0(0x114)](_0x80d38d);}}),router['get'](a0_0x4d617e(0x107),auth,async(_0x2a1db5,_0x1f0a07)=>{var _0x137d25=a0_0x4d617e;try{const {username:_0x92e1,email:_0x2cd29e,role:_0x2a9809}=_0x2a1db5[_0x137d25(0xf8)],_0x2eca2e=_0x2a1db5[_0x137d25(0xf8)],_0x1f2aee=await profile[_0x137d25(0xf2)]({'email':_0x2eca2e['email']}),_0x2111f5=await master_shop[_0x137d25(0xeb)]();console[_0x137d25(0x114)](_0x137d25(0xd5),_0x2111f5);const _0x1473a1=_0x2a1db5['params']['id'],_0x397dcf=await sales_return['findById'](_0x1473a1);console[_0x137d25(0x114)](_0x397dcf);const _0x9d0de9=await customer['findOne']({'name':_0x397dcf[_0x137d25(0x131)]});console[_0x137d25(0x114)](_0x9d0de9);if(_0x2111f5[0x0][_0x137d25(0x12a)]==_0x137d25(0xdb)){var _0x24763f=users[_0x137d25(0x11c)];console[_0x137d25(0x114)](_0x24763f);}else{if(_0x2111f5[0x0][_0x137d25(0x12a)]==_0x137d25(0xd4))var _0x24763f=users[_0x137d25(0xd4)];else{if(_0x2111f5[0x0][_0x137d25(0x12a)]==_0x137d25(0x105))var _0x24763f=users[_0x137d25(0x105)];else{if(_0x2111f5[0x0]['language']==_0x137d25(0xf7))var _0x24763f=users['Spanish'];else{if(_0x2111f5[0x0]['language']==_0x137d25(0x126))var _0x24763f=users[_0x137d25(0x126)];else{if(_0x2111f5[0x0][_0x137d25(0x12a)]==_0x137d25(0xdc))var _0x24763f=users[_0x137d25(0x13d)];else{if(_0x2111f5[0x0][_0x137d25(0x12a)]==_0x137d25(0xe8))var _0x24763f=users[_0x137d25(0xe8)];else{if(_0x2111f5[0x0][_0x137d25(0x12a)]=='Arabic\x20(ae)')var _0x24763f=users[_0x137d25(0x134)];}}}}}}}_0x1f0a07[_0x137d25(0x10f)](_0x137d25(0xe0),{'success':_0x2a1db5[_0x137d25(0x111)](_0x137d25(0x133)),'errors':_0x2a1db5[_0x137d25(0x111)](_0x137d25(0x13f)),'role':_0x2eca2e,'profile':_0x1f2aee,'master_shop':_0x2111f5,'customers':_0x9d0de9,'sales':_0x397dcf,'language':_0x24763f});}catch(_0x2bced0){console[_0x137d25(0x114)](_0x2bced0);}}),module[a0_0x4d617e(0xdd)]=router;