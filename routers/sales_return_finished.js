function a0_0x49d3(){var _0x135c71=['QA\x20Warehouse','German','ToRoom','errors','2590EmyDCV','type','primary_code','$product_details.bay','payment\x20successfull','../models/all_models','json','sales_return_finished','body','params','findOne','getDate','product_code','secondary_code','product_code_QA','primary_code_QA','return_qty_QA','subtract','customer','../public/language/languages.json','$product_details.bin','foreach\x20newproduct','46962003mULadl','redirect','aggregate','paid_amount','$product_details.type','new\x20new_data','$customer_docs','success','map','status','product_name_QA','amount','13718097FiVUHH','1190713itJcIe','590115ASxFMd','language','purchase\x20return\x20successfully','../middleware/auth','get','Portuguese\x20(BR)','7103160GlKMOU','return_sale','10grSxzq','940730OHFVuo','English\x20(US)','English','/invoice/:id','render','sales_return_invoice','/view/:id','date','customers','sales_quantity','data','old_data','product_stock','product_name','/sales_return/view','Finished\x20Goods','Portuguese','suppliers','$product_details','$product_details.product_name','string','Arabic\x20(ae)','invoice','$product_details.floorlevel','log','bay','stock','6lnkhLh','$product_details.storage','return_sale_QA','master','$product_details.rack','8JJlfkI','slice','Arabic','sales_quantity_QA','French','save','warehouse_name','Enabled','$name','5704OsKWEp','types','message','Spanish','ToWarehouse','express','sale_qty','secondary_code_QA','/give_payment/:id','return_qty','findById','find','old_warehouse_data','user','$product_details.primary_code','Chinese','note','product_details','name','/sales_return_finished/view','email','Sale\x20Return','due_amount','/view','$product_details._id','stocks','flash','getFullYear','Hindi','forEach','floorlevel','bin'];a0_0x49d3=function(){return _0x135c71;};return a0_0x49d3();}function a0_0x2e25(_0x1253f8,_0x2b137f){var _0x49d3ed=a0_0x49d3();return a0_0x2e25=function(_0x2e252c,_0x124642){_0x2e252c=_0x2e252c-0xf1;var _0x3e66ea=_0x49d3ed[_0x2e252c];return _0x3e66ea;},a0_0x2e25(_0x1253f8,_0x2b137f);}var a0_0x1d5921=a0_0x2e25;(function(_0x239814,_0x703ff8){var _0x2779a0=a0_0x2e25,_0x30904b=_0x239814();while(!![]){try{var _0x1679e4=parseInt(_0x2779a0(0x125))/0x1+parseInt(_0x2779a0(0x14a))/0x2*(parseInt(_0x2779a0(0x126))/0x3)+parseInt(_0x2779a0(0x158))/0x4*(parseInt(_0x2779a0(0x102))/0x5)+parseInt(_0x2779a0(0x12c))/0x6+-parseInt(_0x2779a0(0x12f))/0x7+-parseInt(_0x2779a0(0x14f))/0x8*(-parseInt(_0x2779a0(0x124))/0x9)+parseInt(_0x2779a0(0x12e))/0xa*(-parseInt(_0x2779a0(0x118))/0xb);if(_0x1679e4===_0x703ff8)break;else _0x30904b['push'](_0x30904b['shift']());}catch(_0xc339f3){_0x30904b['push'](_0x30904b['shift']());}}}(a0_0x49d3,0xc9276));const express=require(a0_0x1d5921(0x15d)),app=express(),router=express['Router'](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data,sales_return_finished}=require(a0_0x1d5921(0x107)),auth=require(a0_0x1d5921(0x129)),users=require(a0_0x1d5921(0x115));router[a0_0x1d5921(0x12a)](a0_0x1d5921(0xf5),auth,async(_0x52aa06,_0x1bf159)=>{var _0x5a3cf4=a0_0x1d5921;try{const {username:_0x15e18d,email:_0x4ebfad,role:_0x21fee6}=_0x52aa06[_0x5a3cf4(0x165)],_0x39635e=_0x52aa06[_0x5a3cf4(0x165)],_0x32b8ec=await profile[_0x5a3cf4(0x10c)]({'email':_0x39635e[_0x5a3cf4(0xf2)]}),_0x5c7cfe=await master_shop[_0x5a3cf4(0x163)](),_0x3f5be5=await sales_return_finished[_0x5a3cf4(0x11a)]([{'$lookup':{'from':_0x5a3cf4(0x137),'localField':_0x5a3cf4(0x114),'foreignField':_0x5a3cf4(0x16a),'as':'customer_docs'}},{'$unwind':_0x5a3cf4(0x11e)}]);if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]=='English\x20(US)'){var _0xff1e76=users['English'];console[_0x5a3cf4(0x147)](_0xff1e76);}else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]=='Hindi')var _0xff1e76=users[_0x5a3cf4(0xfa)];else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]==_0x5a3cf4(0xff))var _0xff1e76=users[_0x5a3cf4(0xff)];else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]==_0x5a3cf4(0x15b))var _0xff1e76=users[_0x5a3cf4(0x15b)];else{if(_0x5c7cfe[0x0]['language']==_0x5a3cf4(0x153))var _0xff1e76=users[_0x5a3cf4(0x153)];else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]==_0x5a3cf4(0x12b))var _0xff1e76=users['Portuguese'];else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]==_0x5a3cf4(0x167))var _0xff1e76=users[_0x5a3cf4(0x167)];else{if(_0x5c7cfe[0x0][_0x5a3cf4(0x127)]==_0x5a3cf4(0x144))var _0xff1e76=users[_0x5a3cf4(0x151)];}}}}}}}_0x1bf159[_0x5a3cf4(0x133)](_0x5a3cf4(0x109),{'success':_0x52aa06['flash']('success'),'errors':_0x52aa06['flash'](_0x5a3cf4(0x101)),'role':_0x39635e,'profile':_0x32b8ec,'master_shop':_0x5c7cfe,'user':_0x3f5be5,'language':_0xff1e76});}catch(_0xf04bcf){console[_0x5a3cf4(0x147)](_0xf04bcf);}}),router[a0_0x1d5921(0x12a)](a0_0x1d5921(0x135),auth,async(_0x15fb4d,_0x35cff1)=>{var _0x3eb62f=a0_0x1d5921;try{const {username:_0x282662,email:_0x292714,role:_0x116504}=_0x15fb4d[_0x3eb62f(0x165)],_0x2de576=_0x15fb4d[_0x3eb62f(0x165)],_0x2b10f2=await profile[_0x3eb62f(0x10c)]({'email':_0x2de576[_0x3eb62f(0xf2)]}),_0xc76b48=await master_shop[_0x3eb62f(0x163)]();console[_0x3eb62f(0x147)]('master',_0xc76b48);const _0x16bcf6=_0x15fb4d[_0x3eb62f(0x10b)]['id'];console[_0x3eb62f(0x147)](_0x16bcf6);var _0x1e31a7=['Return\x20Rooms'];const _0x1b3992=await sales_return_finished[_0x3eb62f(0x162)](_0x16bcf6),_0x199ed3=await warehouse[_0x3eb62f(0x11a)]([{'$match':{'name':_0x1b3992[_0x3eb62f(0x15c)],'room':_0x1b3992[_0x3eb62f(0x100)]}},{'$unwind':_0x3eb62f(0x141)},{'$group':{'_id':_0x3eb62f(0xf6),'name':{'$first':_0x3eb62f(0x142)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x3eb62f(0x105)},'bin':{'$first':_0x3eb62f(0x116)},'type':{'$first':_0x3eb62f(0x11c)},'floorlevel':{'$first':_0x3eb62f(0x146)},'primary_code':{'$first':_0x3eb62f(0x166)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x3eb62f(0x14b)},'rack':{'$first':_0x3eb62f(0x14e)}}}]);console[_0x3eb62f(0x147)](_0x199ed3);const _0x1e696e=await warehouse[_0x3eb62f(0x11a)]([{'$match':{'status':_0x3eb62f(0x156),'warehouse_category':_0x3eb62f(0x13e)}},{'$group':{'_id':_0x3eb62f(0x157),'name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x1a2469=await warehouse['aggregate']([{'$match':{'status':_0x3eb62f(0x156),'name':_0x3eb62f(0xfe)}},{'$group':{'_id':_0x3eb62f(0x157),'name':{'$first':_0x3eb62f(0x157)}}},{'$sort':{'name':0x1}}]),_0xc8813b=await product['find']({});if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0x130)){var _0x41214e=users[_0x3eb62f(0x131)];console[_0x3eb62f(0x147)](_0x41214e);}else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0xfa))var _0x41214e=users[_0x3eb62f(0xfa)];else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0xff))var _0x41214e=users['German'];else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0x15b))var _0x41214e=users['Spanish'];else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]=='French')var _0x41214e=users[_0x3eb62f(0x153)];else{if(_0xc76b48[0x0]['language']==_0x3eb62f(0x12b))var _0x41214e=users[_0x3eb62f(0x13f)];else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0x167))var _0x41214e=users['Chinese'];else{if(_0xc76b48[0x0][_0x3eb62f(0x127)]==_0x3eb62f(0x144))var _0x41214e=users['Arabic'];}}}}}}}_0x35cff1['render']('return_sale_edit_finished',{'success':_0x15fb4d[_0x3eb62f(0xf8)]('success'),'errors':_0x15fb4d[_0x3eb62f(0xf8)](_0x3eb62f(0x101)),'role':_0x2de576,'profile':_0x2b10f2,'master_shop':_0xc76b48,'user':_0x1b3992,'stock':_0x199ed3,'unit':_0xc8813b,'language':_0x41214e,'warehouses':_0x1e696e,'rooms':_0x1e31a7,'warehouse_QA':_0x1a2469});}catch(_0x157862){console[_0x3eb62f(0x147)](_0x157862);}}),router['post'](a0_0x1d5921(0x135),auth,async(_0x551129,_0x3551b7)=>{var _0x1bf423=a0_0x1d5921;if(_0x551129[_0x1bf423(0x10a)]['for_categorize']=='QA')try{const _0x30f78e=_0x551129[_0x1bf423(0x10b)]['id'],_0x400674=await sales_return['findOne']({'invoice':_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x145)]}),_0x8e22ed=await warehouse['findOne']({'name':_0x400674[_0x1bf423(0x15c)],'room':_0x400674[_0x1bf423(0x100)]}),{invoice:_0x30a0ad,customer:_0x1101c1,date:_0x38e5e2,warehouse_name:_0x140ea1,product_name:_0x180b10,primary_code:_0x4fa16a,secondary_code:_0x3597ad,product_code:_0x5b308c,sales_quantity:_0x5b029e,stocks:_0x23f34f,return_qty:_0x526513,note:_0x2a0d7d,to_warehouse_name_QA:_0x529017,to_Room_name_QA:_0x5a90b0}=_0x551129['body'];if(typeof product_name_QA==_0x1bf423(0x143))var _0x44e26b=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x122)]],_0x2930f4=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x111)]],_0x3dac02=[_0x551129['body']['secondary_code_QA']],_0x58e522=[_0x551129['body']['product_code_QA']],_0x197093=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x152)]],_0x20cf11=[_0x551129['body']['stocks_QA']],_0x597a3c=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x112)]];else var _0x44e26b=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x122)]],_0x2930f4=[..._0x551129['body'][_0x1bf423(0x111)]],_0x3dac02=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x15f)]],_0x58e522=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x110)]],_0x197093=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x152)]],_0x20cf11=[..._0x551129[_0x1bf423(0x10a)]['stocks_QA']],_0x597a3c=[..._0x551129['body']['return_qty_QA']];const _0x672246=_0x44e26b[_0x1bf423(0x120)](_0x238c44=>{return _0x238c44={'product_name':_0x238c44};});_0x2930f4[_0x1bf423(0xfb)]((_0x4f0df1,_0x4c019d)=>{var _0x59d34e=_0x1bf423;_0x672246[_0x4c019d][_0x59d34e(0x104)]=_0x4f0df1;}),_0x3dac02[_0x1bf423(0xfb)]((_0x4f2e43,_0x33c8d8)=>{var _0x1f780b=_0x1bf423;_0x672246[_0x33c8d8][_0x1f780b(0x10f)]=_0x4f2e43;}),_0x58e522[_0x1bf423(0xfb)]((_0x3416fd,_0x5ce40e)=>{_0x672246[_0x5ce40e]['product_code']=_0x3416fd;}),_0x197093[_0x1bf423(0xfb)]((_0x342fbc,_0x355f35)=>{_0x672246[_0x355f35]['sale_qty']=_0x342fbc;}),_0x20cf11[_0x1bf423(0xfb)]((_0x491578,_0x5f2b75)=>{var _0xed5800=_0x1bf423;_0x672246[_0x5f2b75][_0xed5800(0x149)]=_0x491578;}),_0x597a3c[_0x1bf423(0xfb)]((_0x4bcf70,_0x17b336)=>{var _0x349228=_0x1bf423;_0x672246[_0x17b336][_0x349228(0x161)]=_0x4bcf70;}),_0x400674[_0x1bf423(0x14c)][_0x1bf423(0xfb)](_0x150c28=>{var _0x3b5c06=_0x1bf423;const _0x35f492=_0x8e22ed[_0x3b5c06(0x169)][_0x3b5c06(0x120)](_0x2a5254=>{var _0x47435e=_0x3b5c06;_0x2a5254[_0x47435e(0x13c)]==_0x150c28[_0x47435e(0x13c)]&&(_0x2a5254[_0x47435e(0x13b)]=parseInt(_0x2a5254['product_stock'])+parseInt(_0x150c28[_0x47435e(0x161)]));});}),await _0x8e22ed[_0x1bf423(0x154)](),_0x400674[_0x1bf423(0x145)]=_0x30a0ad,_0x400674[_0x1bf423(0x114)]=_0x1101c1,_0x400674[_0x1bf423(0x136)]=_0x38e5e2,_0x400674['warehouse_name']=_0x140ea1,_0x400674[_0x1bf423(0x14c)]=_0x672246,_0x400674[_0x1bf423(0x168)]=_0x2a0d7d,_0x400674[_0x1bf423(0x15c)]=_0x529017,_0x400674['ToRoom']=_0x5a90b0;const _0x19e651=await _0x400674['save'](),_0x14e79e=await c_payment_data[_0x1bf423(0x10c)]({'invoice':_0x551129['body'][_0x1bf423(0x145)],'reason':_0x1bf423(0xf3)});_0x14e79e['suppliers']=_0x551129['body']['suppliers'],_0x14e79e['date']=_0x551129[_0x1bf423(0x10a)]['date'],await _0x14e79e[_0x1bf423(0x154)](),_0x551129[_0x1bf423(0xf8)](_0x1bf423(0x11f),_0x1bf423(0x128)),_0x3551b7[_0x1bf423(0x119)](_0x1bf423(0xf1));}catch(_0xe2fb06){console[_0x1bf423(0x147)](_0xe2fb06),_0x3551b7['status'](0xc8)[_0x1bf423(0x108)]({'message':_0xe2fb06['message']});}else try{const _0x4cd0f2=_0x551129[_0x1bf423(0x10b)]['id'];console[_0x1bf423(0x147)](_0x4cd0f2);const _0x1ad5ed=await sales_return[_0x1bf423(0x10c)]({'invoice':_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x145)]});console[_0x1bf423(0x147)](_0x1bf423(0x13a),_0x1ad5ed);const _0x437d12=await warehouse[_0x1bf423(0x10c)]({'name':_0x1ad5ed[_0x1bf423(0x15c)],'room':_0x1ad5ed['ToRoom']});console[_0x1bf423(0x147)](_0x1bf423(0x164),_0x437d12);const {invoice:_0x58fe89,customer:_0x2ff983,date:_0x1fb7bb,warehouse_name:_0x517810,product_name:_0x1423ee,primary_code:_0x2410cc,secondary_code:_0x3651f2,product_code:_0x4eaa5a,sales_quantity:_0x3d4bcc,stocks:_0xeb4e96,return_qty:_0x41925f,note:_0x5025cc,to_warehouse_name:_0x4938b9,to_Room_name:_0x17239b}=_0x551129[_0x1bf423(0x10a)];console[_0x1bf423(0x147)](_0x551129['body']);if(typeof _0x1423ee==_0x1bf423(0x143))var _0x44e26b=[_0x551129[_0x1bf423(0x10a)]['product_name']],_0x2930f4=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x104)]],_0x3dac02=[_0x551129[_0x1bf423(0x10a)]['secondary_code']],_0x58e522=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x10e)]],_0x197093=[_0x551129['body']['sales_quantity']],_0x20cf11=[_0x551129['body'][_0x1bf423(0xf7)]],_0x597a3c=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x161)]],_0x4fde89=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x148)]],_0x24384a=[_0x551129['body'][_0x1bf423(0xfd)]],_0x51b609=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x159)]],_0x133564=[_0x551129[_0x1bf423(0x10a)][_0x1bf423(0xfc)]];else var _0x44e26b=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x13c)]],_0x2930f4=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x104)]],_0x3dac02=[..._0x551129['body']['secondary_code']],_0x58e522=[..._0x551129[_0x1bf423(0x10a)]['product_code']],_0x197093=[..._0x551129[_0x1bf423(0x10a)][_0x1bf423(0x138)]],_0x20cf11=[..._0x551129[_0x1bf423(0x10a)]['stocks']],_0x597a3c=[..._0x551129['body']['return_qty']],_0x4fde89=[..._0x551129['body'][_0x1bf423(0x148)]],_0x24384a=[..._0x551129['body']['bin']],_0x51b609=[..._0x551129[_0x1bf423(0x10a)]['types']],_0x133564=[..._0x551129['body'][_0x1bf423(0xfc)]];const _0xdaa711=_0x44e26b['map'](_0x1a666e=>{return _0x1a666e={'product_name':_0x1a666e};});_0x2930f4[_0x1bf423(0xfb)]((_0x2b6b4f,_0x4f9e4a)=>{var _0x3f1c4e=_0x1bf423;_0xdaa711[_0x4f9e4a][_0x3f1c4e(0x104)]=_0x2b6b4f;}),_0x3dac02[_0x1bf423(0xfb)]((_0x5f0bce,_0xcfef9a)=>{var _0x3b12e4=_0x1bf423;_0xdaa711[_0xcfef9a][_0x3b12e4(0x10f)]=_0x5f0bce;}),_0x58e522[_0x1bf423(0xfb)]((_0x230b75,_0x445905)=>{var _0x30089b=_0x1bf423;_0xdaa711[_0x445905][_0x30089b(0x10e)]=_0x230b75;}),_0x197093[_0x1bf423(0xfb)]((_0x4a56c3,_0x3fbf9b)=>{_0xdaa711[_0x3fbf9b]['sale_qty']=_0x4a56c3;}),_0x20cf11[_0x1bf423(0xfb)]((_0x23d33b,_0x44c0d4)=>{var _0x36fcdb=_0x1bf423;_0xdaa711[_0x44c0d4][_0x36fcdb(0x149)]=_0x23d33b;}),_0x597a3c[_0x1bf423(0xfb)]((_0x2db74f,_0x3e2f98)=>{var _0x33ecb0=_0x1bf423;_0xdaa711[_0x3e2f98][_0x33ecb0(0x161)]=_0x2db74f;}),_0x4fde89[_0x1bf423(0xfb)]((_0x424dd1,_0x271a30)=>{var _0x503e02=_0x1bf423;_0xdaa711[_0x271a30][_0x503e02(0x148)]=_0x424dd1;}),_0x24384a[_0x1bf423(0xfb)]((_0x1f3faa,_0x4f6ee6)=>{var _0x92ea26=_0x1bf423;_0xdaa711[_0x4f6ee6][_0x92ea26(0xfd)]=_0x1f3faa;}),_0x51b609[_0x1bf423(0xfb)]((_0x5058f7,_0x52d034)=>{_0xdaa711[_0x52d034]['type']=_0x5058f7;}),_0x133564[_0x1bf423(0xfb)]((_0x1f4e1f,_0x4404e9)=>{var _0x1f889b=_0x1bf423;_0xdaa711[_0x4404e9][_0x1f889b(0xfc)]=_0x1f4e1f;});var _0x584594=0x0;_0xdaa711['forEach'](_0x22be50=>{var _0x5c4427=_0x1bf423;console[_0x5c4427(0x147)](_0x5c4427(0x117),_0x22be50),(parseInt(_0x22be50[_0x5c4427(0x15e)])<parseInt(_0x22be50[_0x5c4427(0x161)])||parseInt(_0x22be50[_0x5c4427(0x149)])<parseInt(_0x22be50['return_qty'])&&parseInt(_0x22be50[_0x5c4427(0x15e)])>parseInt(_0x22be50['return_qty'])||parseInt(_0x22be50[_0x5c4427(0x161)])==0x0)&&_0x584594++;});if(_0x584594!=0x0)return _0x551129[_0x1bf423(0xf8)](_0x1bf423(0x101),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x3551b7['redirect']('back');_0x1ad5ed[_0x1bf423(0x12d)]['forEach'](_0x30d96f=>{var _0x16e044=_0x1bf423;const _0x37079e=_0x437d12['product_details'][_0x16e044(0x120)](_0x723e2=>{var _0xad67cc=_0x16e044;_0x723e2[_0xad67cc(0x13c)]==_0x30d96f['product_name']&&_0x723e2['floorlevel']==_0x30d96f[_0xad67cc(0xfc)]&&_0x723e2[_0xad67cc(0x103)]==_0x30d96f[_0xad67cc(0x103)]&&_0x723e2[_0xad67cc(0xfd)]==_0x30d96f[_0xad67cc(0xfd)]&&_0x723e2['bay']==_0x30d96f['bay']&&(_0x723e2[_0xad67cc(0x13b)]=parseInt(_0x723e2[_0xad67cc(0x13b)])+parseInt(_0x30d96f[_0xad67cc(0x161)]));});}),console[_0x1bf423(0x147)](_0x1bf423(0x164),_0x437d12),await _0x437d12['save'](),_0x1ad5ed['invoice']=_0x58fe89,_0x1ad5ed[_0x1bf423(0x114)]=_0x2ff983,_0x1ad5ed[_0x1bf423(0x136)]=_0x1fb7bb,_0x1ad5ed[_0x1bf423(0x155)]=_0x517810,_0x1ad5ed[_0x1bf423(0x12d)]=_0xdaa711,_0x1ad5ed[_0x1bf423(0x168)]=_0x5025cc,_0x1ad5ed[_0x1bf423(0x15c)]=_0x4938b9,_0x1ad5ed[_0x1bf423(0x100)]=_0x17239b;const _0x1e4634=await _0x1ad5ed['save']();console[_0x1bf423(0x147)](_0x1bf423(0x11d),_0x1e4634);const _0x1d5a3c=await c_payment_data['findOne']({'invoice':_0x551129['body']['invoice'],'reason':'Sale\x20Return'});_0x1d5a3c['suppliers']=_0x551129['body'][_0x1bf423(0x140)],_0x1d5a3c[_0x1bf423(0x136)]=_0x551129[_0x1bf423(0x10a)][_0x1bf423(0x136)],await _0x1d5a3c[_0x1bf423(0x154)](),_0x551129[_0x1bf423(0xf8)](_0x1bf423(0x11f),_0x1bf423(0x128)),_0x3551b7[_0x1bf423(0x119)]('/sales_return/view');}catch(_0x4c1e34){console[_0x1bf423(0x147)](_0x4c1e34),_0x3551b7[_0x1bf423(0x121)](0xc8)[_0x1bf423(0x108)]({'message':_0x4c1e34[_0x1bf423(0x15a)]});}}),router['post'](a0_0x1d5921(0x160),auth,async(_0x414e5b,_0x2a5af9)=>{var _0x10477f=a0_0x1d5921;try{const _0x130f0d=_0x414e5b['params']['id'],{invoice:_0xc6939,customer:_0x29b9a6,payable_to_customer:_0x5e8488,paid_amount:_0x1f9ab9}=_0x414e5b[_0x10477f(0x10a)],_0x5f20af=await sales_return['findById'](_0x130f0d);console[_0x10477f(0x147)](_0x10477f(0x139),_0x5f20af),console[_0x10477f(0x147)](_0x5e8488),console[_0x10477f(0x147)](_0x1f9ab9);var _0x514e1e=_0x5e8488-_0x1f9ab9;console['log'](_0x10477f(0x113),_0x514e1e),_0x5f20af[_0x10477f(0x11b)]=parseFloat(_0x1f9ab9)+parseFloat(_0x5f20af[_0x10477f(0x11b)]),_0x5f20af[_0x10477f(0xf4)]=_0x514e1e,console['log'](_0x5f20af);const _0x325bc3=await _0x5f20af[_0x10477f(0x154)]();console['log'](0x1b207);const _0x5cf7f8=await c_payment_data['findOne']({'invoice':_0x414e5b[_0x10477f(0x10a)][_0x10477f(0x145)],'reason':_0x10477f(0xf3)});console['log']('c_payment',_0x5cf7f8),_0x5cf7f8[_0x10477f(0x123)]=_0x514e1e,await _0x5cf7f8[_0x10477f(0x154)]();let _0x5eddec=new Date(),_0x12ac9c=('0'+_0x5eddec[_0x10477f(0x10d)]())[_0x10477f(0x150)](-0x2),_0xc6a4f3=('0'+(_0x5eddec['getMonth']()+0x1))[_0x10477f(0x150)](-0x2),_0x23d05e=_0x5eddec[_0x10477f(0xf9)](),_0x23b62c=_0x23d05e+'-'+_0xc6a4f3+'-'+_0x12ac9c;const _0x59142b=new customer_payment({'invoice':_0xc6939,'date':_0x23d05e+'-'+_0xc6a4f3+'-'+_0x12ac9c,'customer':_0x29b9a6,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x1f9ab9}),_0x317f8e=await _0x59142b[_0x10477f(0x154)]();_0x414e5b[_0x10477f(0xf8)](_0x10477f(0x11f),_0x10477f(0x106)),_0x2a5af9[_0x10477f(0x119)](_0x10477f(0x13d));}catch(_0x3dce1b){console[_0x10477f(0x147)](_0x3dce1b);}}),router[a0_0x1d5921(0x12a)](a0_0x1d5921(0x132),auth,async(_0x3344d1,_0x2196a4)=>{var _0x43e4aa=a0_0x1d5921;try{const {username:_0x2d98db,email:_0x6bb748,role:_0x2be00d}=_0x3344d1[_0x43e4aa(0x165)],_0x4cb0b0=_0x3344d1[_0x43e4aa(0x165)],_0x1bc86e=await profile[_0x43e4aa(0x10c)]({'email':_0x4cb0b0['email']}),_0x1641d7=await master_shop[_0x43e4aa(0x163)]();console[_0x43e4aa(0x147)](_0x43e4aa(0x14d),_0x1641d7);const _0x37fb64=_0x3344d1['params']['id'],_0x47e1f6=await sales_return[_0x43e4aa(0x162)](_0x37fb64);console['log'](_0x47e1f6);const _0xa1c06=await customer[_0x43e4aa(0x10c)]({'name':_0x47e1f6['customer']});console[_0x43e4aa(0x147)](_0xa1c06);if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0x130)){var _0xdc1d50=users[_0x43e4aa(0x131)];console['log'](_0xdc1d50);}else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]=='Hindi')var _0xdc1d50=users[_0x43e4aa(0xfa)];else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0xff))var _0xdc1d50=users[_0x43e4aa(0xff)];else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0x15b))var _0xdc1d50=users[_0x43e4aa(0x15b)];else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0x153))var _0xdc1d50=users[_0x43e4aa(0x153)];else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0x12b))var _0xdc1d50=users['Portuguese'];else{if(_0x1641d7[0x0][_0x43e4aa(0x127)]==_0x43e4aa(0x167))var _0xdc1d50=users['Chinese'];else{if(_0x1641d7[0x0]['language']==_0x43e4aa(0x144))var _0xdc1d50=users[_0x43e4aa(0x151)];}}}}}}}_0x2196a4[_0x43e4aa(0x133)](_0x43e4aa(0x134),{'success':_0x3344d1[_0x43e4aa(0xf8)](_0x43e4aa(0x11f)),'errors':_0x3344d1[_0x43e4aa(0xf8)](_0x43e4aa(0x101)),'role':_0x4cb0b0,'profile':_0x1bc86e,'master_shop':_0x1641d7,'customers':_0xa1c06,'sales':_0x47e1f6,'language':_0xdc1d50});}catch(_0x971561){console[_0x43e4aa(0x147)](_0x971561);}}),module['exports']=router;