function a0_0xaf18(){var _0x327bf0=['ToWarehouse','product_stock','secondary_code','slice','Enabled','post','return_qty_QA','English','payment\x20successfull','amount','getFullYear','/sales_return_finished/view','124128dIgjUj','/invoice/:id','Arabic\x20(ae)','due_amount','return_sale','/sales_return/view','warehouse_name','customer','stocks_QA','save','get','express','QA\x20Warehouse','9404pEJVoN','floorlevel','invoice','return_qty','forEach','Sale\x20Return','$customer_docs','email','status','user','ToRoom','secondary_code_QA','Hindi','German','365bvcPnm','getDate','$product_details.bay','type','body','primary_code_QA','sales_quantity','Returned\x20Payment\x20For\x20Sale\x20Return','$product_details.primary_code','sales_return_invoice','string','params','product_details','flash','/give_payment/:id','656163NgqoFM','old_warehouse_data','English\x20(US)','Return\x20Rooms','Chinese','11UjKXeA','sale_qty','getMonth','name','/view/:id','French','message','Router','$product_details','json','2VeQzVr','stock','$name','render','$product_details.secondary_code','language','522642wjeKes','$product_details._id','product_name','old_data','aggregate','/view','$product_details.rack','Spanish','91679yhkvMU','$product_details.bin','findById','success','find','874450wjvCxx','../public/language/languages.json','for_categorize','back','../models/all_models','types','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','136qVUoxQ','$product_details.floorlevel','c_payment','log','Portuguese','product_name_QA','findOne','return_sale_edit_finished','product_code_QA','bin','$product_details.product_name','$product_details.storage','primary_code','Arabic','bay','suppliers','$product_details.product_code','sales_quantity_QA','note','master','sales_return_finished','Finished\x20Goods','7zdzEJo','redirect','4825524xyLSgG','return_sale_QA','stocks','Portuguese\x20(BR)','errors','map','purchase\x20return\x20successfully','new\x20new_data','paid_amount','product_code','date'];a0_0xaf18=function(){return _0x327bf0;};return a0_0xaf18();}var a0_0x278d48=a0_0x2e4d;function a0_0x2e4d(_0x2f05e3,_0x485daa){var _0xaf1885=a0_0xaf18();return a0_0x2e4d=function(_0x2e4d10,_0x8b11bd){_0x2e4d10=_0x2e4d10-0x104;var _0x28cf42=_0xaf1885[_0x2e4d10];return _0x28cf42;},a0_0x2e4d(_0x2f05e3,_0x485daa);}(function(_0x2794c2,_0x58e49c){var _0x123435=a0_0x2e4d,_0x210cfd=_0x2794c2();while(!![]){try{var _0x5c2bee=parseInt(_0x123435(0x126))/0x1+parseInt(_0x123435(0x118))/0x2*(parseInt(_0x123435(0x109))/0x3)+-parseInt(_0x123435(0x16e))/0x4*(parseInt(_0x123435(0x17c))/0x5)+-parseInt(_0x123435(0x11e))/0x6*(-parseInt(_0x123435(0x148))/0x7)+parseInt(_0x123435(0x132))/0x8*(parseInt(_0x123435(0x161))/0x9)+parseInt(_0x123435(0x12b))/0xa*(parseInt(_0x123435(0x10e))/0xb)+-parseInt(_0x123435(0x14a))/0xc;if(_0x5c2bee===_0x58e49c)break;else _0x210cfd['push'](_0x210cfd['shift']());}catch(_0xef1804){_0x210cfd['push'](_0x210cfd['shift']());}}}(a0_0xaf18,0x23902));const express=require(a0_0x278d48(0x16c)),app=express(),router=express[a0_0x278d48(0x115)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data,sales_return_finished}=require(a0_0x278d48(0x12f)),auth=require('../middleware/auth'),users=require(a0_0x278d48(0x12c));router[a0_0x278d48(0x16b)](a0_0x278d48(0x123),auth,async(_0x23f010,_0x1253c5)=>{var _0x5664fa=a0_0x278d48;try{const {username:_0x5c7315,email:_0x585e85,role:_0x3787cb}=_0x23f010['user'],_0x151f96=_0x23f010['user'],_0xba6492=await profile[_0x5664fa(0x138)]({'email':_0x151f96['email']}),_0x2733d0=await master_shop[_0x5664fa(0x12a)](),_0xfac590=await sales_return_finished[_0x5664fa(0x122)]([{'$lookup':{'from':'customers','localField':_0x5664fa(0x168),'foreignField':_0x5664fa(0x111),'as':'customer_docs'}},{'$unwind':_0x5664fa(0x174)}]);if(_0x2733d0[0x0]['language']==_0x5664fa(0x10b)){var _0xacc45d=users[_0x5664fa(0x15c)];console['log'](_0xacc45d);}else{if(_0x2733d0[0x0][_0x5664fa(0x11d)]==_0x5664fa(0x17a))var _0xacc45d=users[_0x5664fa(0x17a)];else{if(_0x2733d0[0x0]['language']=='German')var _0xacc45d=users[_0x5664fa(0x17b)];else{if(_0x2733d0[0x0][_0x5664fa(0x11d)]==_0x5664fa(0x125))var _0xacc45d=users[_0x5664fa(0x125)];else{if(_0x2733d0[0x0][_0x5664fa(0x11d)]==_0x5664fa(0x113))var _0xacc45d=users[_0x5664fa(0x113)];else{if(_0x2733d0[0x0]['language']==_0x5664fa(0x14d))var _0xacc45d=users[_0x5664fa(0x136)];else{if(_0x2733d0[0x0][_0x5664fa(0x11d)]==_0x5664fa(0x10d))var _0xacc45d=users[_0x5664fa(0x10d)];else{if(_0x2733d0[0x0]['language']==_0x5664fa(0x163))var _0xacc45d=users[_0x5664fa(0x13f)];}}}}}}}_0x1253c5[_0x5664fa(0x11b)](_0x5664fa(0x146),{'success':_0x23f010[_0x5664fa(0x107)](_0x5664fa(0x129)),'errors':_0x23f010[_0x5664fa(0x107)]('errors'),'role':_0x151f96,'profile':_0xba6492,'master_shop':_0x2733d0,'user':_0xfac590,'language':_0xacc45d});}catch(_0x1f317a){console[_0x5664fa(0x135)](_0x1f317a);}}),router[a0_0x278d48(0x16b)](a0_0x278d48(0x112),auth,async(_0x492ff2,_0x14bbf4)=>{var _0x2bb744=a0_0x278d48;try{const {username:_0x5b856d,email:_0x1393bb,role:_0x335a07}=_0x492ff2['user'],_0x2dd281=_0x492ff2[_0x2bb744(0x177)],_0x217f6a=await profile[_0x2bb744(0x138)]({'email':_0x2dd281['email']}),_0x5b43eb=await master_shop['find']();console[_0x2bb744(0x135)](_0x2bb744(0x145),_0x5b43eb);const _0x3db556=_0x492ff2[_0x2bb744(0x105)]['id'];console[_0x2bb744(0x135)](_0x3db556);var _0x28c566=[_0x2bb744(0x10c)];const _0x197e30=await sales_return_finished[_0x2bb744(0x128)](_0x3db556),_0x7c4465=await warehouse[_0x2bb744(0x122)]([{'$match':{'name':_0x197e30[_0x2bb744(0x155)],'room':_0x197e30[_0x2bb744(0x178)]}},{'$unwind':_0x2bb744(0x116)},{'$group':{'_id':_0x2bb744(0x11f),'name':{'$first':_0x2bb744(0x13c)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x2bb744(0x17e)},'bin':{'$first':_0x2bb744(0x127)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x2bb744(0x133)},'primary_code':{'$first':_0x2bb744(0x184)},'secondary_code':{'$first':_0x2bb744(0x11c)},'product_code':{'$first':_0x2bb744(0x142)},'storage':{'$first':_0x2bb744(0x13d)},'rack':{'$first':_0x2bb744(0x124)}}}]);console[_0x2bb744(0x135)](_0x7c4465);const _0x3e9fe0=await warehouse['aggregate']([{'$match':{'status':'Enabled','warehouse_category':_0x2bb744(0x147)}},{'$group':{'_id':_0x2bb744(0x11a),'name':{'$first':_0x2bb744(0x11a)}}},{'$sort':{'name':0x1}}]),_0x404a9e=await warehouse[_0x2bb744(0x122)]([{'$match':{'status':_0x2bb744(0x159),'name':_0x2bb744(0x16d)}},{'$group':{'_id':_0x2bb744(0x11a),'name':{'$first':_0x2bb744(0x11a)}}},{'$sort':{'name':0x1}}]),_0xb1b171=await product['find']({});if(_0x5b43eb[0x0][_0x2bb744(0x11d)]==_0x2bb744(0x10b)){var _0x1f3fd1=users[_0x2bb744(0x15c)];console['log'](_0x1f3fd1);}else{if(_0x5b43eb[0x0][_0x2bb744(0x11d)]==_0x2bb744(0x17a))var _0x1f3fd1=users[_0x2bb744(0x17a)];else{if(_0x5b43eb[0x0][_0x2bb744(0x11d)]==_0x2bb744(0x17b))var _0x1f3fd1=users[_0x2bb744(0x17b)];else{if(_0x5b43eb[0x0][_0x2bb744(0x11d)]=='Spanish')var _0x1f3fd1=users[_0x2bb744(0x125)];else{if(_0x5b43eb[0x0]['language']==_0x2bb744(0x113))var _0x1f3fd1=users[_0x2bb744(0x113)];else{if(_0x5b43eb[0x0]['language']=='Portuguese\x20(BR)')var _0x1f3fd1=users[_0x2bb744(0x136)];else{if(_0x5b43eb[0x0][_0x2bb744(0x11d)]==_0x2bb744(0x10d))var _0x1f3fd1=users['Chinese'];else{if(_0x5b43eb[0x0][_0x2bb744(0x11d)]=='Arabic\x20(ae)')var _0x1f3fd1=users[_0x2bb744(0x13f)];}}}}}}}_0x14bbf4['render'](_0x2bb744(0x139),{'success':_0x492ff2[_0x2bb744(0x107)](_0x2bb744(0x129)),'errors':_0x492ff2[_0x2bb744(0x107)](_0x2bb744(0x14e)),'role':_0x2dd281,'profile':_0x217f6a,'master_shop':_0x5b43eb,'user':_0x197e30,'stock':_0x7c4465,'unit':_0xb1b171,'language':_0x1f3fd1,'warehouses':_0x3e9fe0,'rooms':_0x28c566,'warehouse_QA':_0x404a9e});}catch(_0x2620bb){console[_0x2bb744(0x135)](_0x2620bb);}}),router[a0_0x278d48(0x15a)](a0_0x278d48(0x112),auth,async(_0x54bd72,_0x2ce459)=>{var _0x45831f=a0_0x278d48;if(_0x54bd72[_0x45831f(0x180)][_0x45831f(0x12d)]=='QA')try{const _0x360aa7=_0x54bd72['params']['id'],_0xf4cc22=await sales_return[_0x45831f(0x138)]({'invoice':_0x54bd72[_0x45831f(0x180)][_0x45831f(0x170)]}),_0x505935=await warehouse[_0x45831f(0x138)]({'name':_0xf4cc22[_0x45831f(0x155)],'room':_0xf4cc22[_0x45831f(0x178)]}),{invoice:_0x3fe93d,customer:_0x368fd1,date:_0x4d5cef,warehouse_name:_0x5c61e7,product_name:_0x44d1cf,primary_code:_0x550f0d,secondary_code:_0x495f84,product_code:_0x16cfc7,sales_quantity:_0x2db075,stocks:_0x5cf19f,return_qty:_0x20f908,note:_0x1615d6,to_warehouse_name_QA:_0x2a388d,to_Room_name_QA:_0x534dfd}=_0x54bd72[_0x45831f(0x180)];if(typeof product_name_QA==_0x45831f(0x104))var _0x501214=[_0x54bd72['body'][_0x45831f(0x137)]],_0x35696f=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x181)]],_0x12672d=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x179)]],_0x49250a=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x13a)]],_0x43d24b=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x143)]],_0xa8b046=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x169)]],_0x477d4b=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x15b)]];else var _0x501214=[..._0x54bd72[_0x45831f(0x180)]['product_name_QA']],_0x35696f=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x181)]],_0x12672d=[..._0x54bd72['body'][_0x45831f(0x179)]],_0x49250a=[..._0x54bd72['body'][_0x45831f(0x13a)]],_0x43d24b=[..._0x54bd72[_0x45831f(0x180)]['sales_quantity_QA']],_0xa8b046=[..._0x54bd72['body'][_0x45831f(0x169)]],_0x477d4b=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x15b)]];const _0x1bff21=_0x501214[_0x45831f(0x14f)](_0x367e1a=>{return _0x367e1a={'product_name':_0x367e1a};});_0x35696f[_0x45831f(0x172)]((_0x2d8534,_0x479d8f)=>{var _0x3c90cc=_0x45831f;_0x1bff21[_0x479d8f][_0x3c90cc(0x13e)]=_0x2d8534;}),_0x12672d['forEach']((_0x213302,_0x347f85)=>{_0x1bff21[_0x347f85]['secondary_code']=_0x213302;}),_0x49250a[_0x45831f(0x172)]((_0x294cd0,_0x48f7b8)=>{var _0x3fed19=_0x45831f;_0x1bff21[_0x48f7b8][_0x3fed19(0x153)]=_0x294cd0;}),_0x43d24b[_0x45831f(0x172)]((_0x39ce0f,_0x4bbf24)=>{var _0x241800=_0x45831f;_0x1bff21[_0x4bbf24][_0x241800(0x10f)]=_0x39ce0f;}),_0xa8b046[_0x45831f(0x172)]((_0x142ba7,_0x3037fe)=>{var _0x141bad=_0x45831f;_0x1bff21[_0x3037fe][_0x141bad(0x119)]=_0x142ba7;}),_0x477d4b[_0x45831f(0x172)]((_0x224c42,_0x102a1a)=>{_0x1bff21[_0x102a1a]['return_qty']=_0x224c42;}),_0xf4cc22[_0x45831f(0x14b)][_0x45831f(0x172)](_0x18a76e=>{var _0x5290b3=_0x45831f;const _0x1ba5f9=_0x505935['product_details'][_0x5290b3(0x14f)](_0x1e98d4=>{var _0x5db7c8=_0x5290b3;_0x1e98d4[_0x5db7c8(0x120)]==_0x18a76e[_0x5db7c8(0x120)]&&(_0x1e98d4[_0x5db7c8(0x156)]=parseInt(_0x1e98d4[_0x5db7c8(0x156)])+parseInt(_0x18a76e[_0x5db7c8(0x171)]));});}),await _0x505935[_0x45831f(0x16a)](),_0xf4cc22['invoice']=_0x3fe93d,_0xf4cc22[_0x45831f(0x168)]=_0x368fd1,_0xf4cc22[_0x45831f(0x154)]=_0x4d5cef,_0xf4cc22[_0x45831f(0x167)]=_0x5c61e7,_0xf4cc22[_0x45831f(0x14b)]=_0x1bff21,_0xf4cc22[_0x45831f(0x144)]=_0x1615d6,_0xf4cc22[_0x45831f(0x155)]=_0x2a388d,_0xf4cc22[_0x45831f(0x178)]=_0x534dfd;const _0x4df801=await _0xf4cc22[_0x45831f(0x16a)](),_0x42bcbf=await c_payment_data[_0x45831f(0x138)]({'invoice':_0x54bd72[_0x45831f(0x180)][_0x45831f(0x170)],'reason':'Sale\x20Return'});_0x42bcbf[_0x45831f(0x141)]=_0x54bd72[_0x45831f(0x180)][_0x45831f(0x141)],_0x42bcbf[_0x45831f(0x154)]=_0x54bd72[_0x45831f(0x180)][_0x45831f(0x154)],await _0x42bcbf[_0x45831f(0x16a)](),_0x54bd72[_0x45831f(0x107)](_0x45831f(0x129),_0x45831f(0x150)),_0x2ce459[_0x45831f(0x149)](_0x45831f(0x160));}catch(_0x4f657b){console[_0x45831f(0x135)](_0x4f657b),_0x2ce459[_0x45831f(0x176)](0xc8)[_0x45831f(0x117)]({'message':_0x4f657b[_0x45831f(0x114)]});}else try{const _0x3f18f0=_0x54bd72[_0x45831f(0x105)]['id'];console[_0x45831f(0x135)](_0x3f18f0);const _0x360624=await sales_return['findOne']({'invoice':_0x54bd72[_0x45831f(0x180)][_0x45831f(0x170)]});console[_0x45831f(0x135)](_0x45831f(0x121),_0x360624);const _0x586379=await warehouse[_0x45831f(0x138)]({'name':_0x360624[_0x45831f(0x155)],'room':_0x360624['ToRoom']});console[_0x45831f(0x135)](_0x45831f(0x10a),_0x586379);const {invoice:_0x18b548,customer:_0x320b54,date:_0x52826f,warehouse_name:_0x2a87e7,product_name:_0x524c60,primary_code:_0x3cc59f,secondary_code:_0x15c524,product_code:_0x40ad71,sales_quantity:_0x90596d,stocks:_0x46298e,return_qty:_0x33c897,note:_0x1e580d,to_warehouse_name:_0x7676b,to_Room_name:_0x396c44}=_0x54bd72[_0x45831f(0x180)];console[_0x45831f(0x135)](_0x54bd72[_0x45831f(0x180)]);if(typeof _0x524c60=='string')var _0x501214=[_0x54bd72['body'][_0x45831f(0x120)]],_0x35696f=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x13e)]],_0x12672d=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x157)]],_0x49250a=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x153)]],_0x43d24b=[_0x54bd72['body'][_0x45831f(0x182)]],_0xa8b046=[_0x54bd72[_0x45831f(0x180)]['stocks']],_0x477d4b=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x171)]],_0x41baee=[_0x54bd72['body'][_0x45831f(0x140)]],_0x539f26=[_0x54bd72[_0x45831f(0x180)][_0x45831f(0x13b)]],_0x388e72=[_0x54bd72[_0x45831f(0x180)]['types']],_0x3aeb78=[_0x54bd72['body'][_0x45831f(0x16f)]];else var _0x501214=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x120)]],_0x35696f=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x13e)]],_0x12672d=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x157)]],_0x49250a=[..._0x54bd72[_0x45831f(0x180)]['product_code']],_0x43d24b=[..._0x54bd72['body'][_0x45831f(0x182)]],_0xa8b046=[..._0x54bd72['body'][_0x45831f(0x14c)]],_0x477d4b=[..._0x54bd72[_0x45831f(0x180)]['return_qty']],_0x41baee=[..._0x54bd72[_0x45831f(0x180)]['bay']],_0x539f26=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x13b)]],_0x388e72=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x130)]],_0x3aeb78=[..._0x54bd72[_0x45831f(0x180)][_0x45831f(0x16f)]];const _0x1e2740=_0x501214[_0x45831f(0x14f)](_0xad254=>{return _0xad254={'product_name':_0xad254};});_0x35696f['forEach']((_0x5eaef4,_0x37dca9)=>{_0x1e2740[_0x37dca9]['primary_code']=_0x5eaef4;}),_0x12672d[_0x45831f(0x172)]((_0x2a86a6,_0x21808e)=>{var _0x518252=_0x45831f;_0x1e2740[_0x21808e][_0x518252(0x157)]=_0x2a86a6;}),_0x49250a[_0x45831f(0x172)]((_0xa3540c,_0xbe7d46)=>{var _0x513a36=_0x45831f;_0x1e2740[_0xbe7d46][_0x513a36(0x153)]=_0xa3540c;}),_0x43d24b[_0x45831f(0x172)]((_0x4f7513,_0x5be313)=>{_0x1e2740[_0x5be313]['sale_qty']=_0x4f7513;}),_0xa8b046[_0x45831f(0x172)]((_0x411a3f,_0x4e01c9)=>{var _0x3fb2ad=_0x45831f;_0x1e2740[_0x4e01c9][_0x3fb2ad(0x119)]=_0x411a3f;}),_0x477d4b[_0x45831f(0x172)]((_0x39056e,_0x4440da)=>{var _0x269a5e=_0x45831f;_0x1e2740[_0x4440da][_0x269a5e(0x171)]=_0x39056e;}),_0x41baee[_0x45831f(0x172)]((_0x52dda1,_0x1d050a)=>{var _0x2910d9=_0x45831f;_0x1e2740[_0x1d050a][_0x2910d9(0x140)]=_0x52dda1;}),_0x539f26[_0x45831f(0x172)]((_0x41c5b2,_0x15e451)=>{_0x1e2740[_0x15e451]['bin']=_0x41c5b2;}),_0x388e72[_0x45831f(0x172)]((_0x13b6b8,_0x47e61b)=>{var _0x37e0fb=_0x45831f;_0x1e2740[_0x47e61b][_0x37e0fb(0x17f)]=_0x13b6b8;}),_0x3aeb78[_0x45831f(0x172)]((_0x1bae36,_0x3bb2d1)=>{var _0x1aa34e=_0x45831f;_0x1e2740[_0x3bb2d1][_0x1aa34e(0x16f)]=_0x1bae36;});var _0x71c58e=0x0;_0x1e2740['forEach'](_0x33825a=>{var _0x2d9db9=_0x45831f;console['log']('foreach\x20newproduct',_0x33825a),(parseInt(_0x33825a['sale_qty'])<parseInt(_0x33825a[_0x2d9db9(0x171)])||parseInt(_0x33825a['stock'])<parseInt(_0x33825a[_0x2d9db9(0x171)])&&parseInt(_0x33825a[_0x2d9db9(0x10f)])>parseInt(_0x33825a[_0x2d9db9(0x171)])||parseInt(_0x33825a[_0x2d9db9(0x171)])==0x0)&&_0x71c58e++;});if(_0x71c58e!=0x0)return _0x54bd72[_0x45831f(0x107)](_0x45831f(0x14e),_0x45831f(0x131)),_0x2ce459[_0x45831f(0x149)](_0x45831f(0x12e));_0x360624[_0x45831f(0x165)]['forEach'](_0x280fd0=>{var _0x4bcec7=_0x45831f;const _0xaa3ae8=_0x586379[_0x4bcec7(0x106)]['map'](_0xf1052a=>{var _0x340943=_0x4bcec7;_0xf1052a[_0x340943(0x120)]==_0x280fd0[_0x340943(0x120)]&&_0xf1052a[_0x340943(0x16f)]==_0x280fd0['floorlevel']&&_0xf1052a[_0x340943(0x17f)]==_0x280fd0[_0x340943(0x17f)]&&_0xf1052a[_0x340943(0x13b)]==_0x280fd0[_0x340943(0x13b)]&&_0xf1052a[_0x340943(0x140)]==_0x280fd0[_0x340943(0x140)]&&(_0xf1052a[_0x340943(0x156)]=parseInt(_0xf1052a[_0x340943(0x156)])+parseInt(_0x280fd0[_0x340943(0x171)]));});}),console[_0x45831f(0x135)]('old_warehouse_data',_0x586379),await _0x586379[_0x45831f(0x16a)](),_0x360624[_0x45831f(0x170)]=_0x18b548,_0x360624['customer']=_0x320b54,_0x360624[_0x45831f(0x154)]=_0x52826f,_0x360624[_0x45831f(0x167)]=_0x2a87e7,_0x360624['return_sale']=_0x1e2740,_0x360624[_0x45831f(0x144)]=_0x1e580d,_0x360624[_0x45831f(0x155)]=_0x7676b,_0x360624[_0x45831f(0x178)]=_0x396c44;const _0x18c7d4=await _0x360624[_0x45831f(0x16a)]();console[_0x45831f(0x135)](_0x45831f(0x151),_0x18c7d4);const _0x3df6de=await c_payment_data[_0x45831f(0x138)]({'invoice':_0x54bd72[_0x45831f(0x180)][_0x45831f(0x170)],'reason':_0x45831f(0x173)});_0x3df6de[_0x45831f(0x141)]=_0x54bd72['body'][_0x45831f(0x141)],_0x3df6de['date']=_0x54bd72[_0x45831f(0x180)][_0x45831f(0x154)],await _0x3df6de['save'](),_0x54bd72[_0x45831f(0x107)](_0x45831f(0x129),_0x45831f(0x150)),_0x2ce459['redirect'](_0x45831f(0x166));}catch(_0x4cc71a){console['log'](_0x4cc71a),_0x2ce459[_0x45831f(0x176)](0xc8)[_0x45831f(0x117)]({'message':_0x4cc71a[_0x45831f(0x114)]});}}),router['post'](a0_0x278d48(0x108),auth,async(_0x2bfb2d,_0x12be37)=>{var _0xf8a5bf=a0_0x278d48;try{const _0x197040=_0x2bfb2d['params']['id'],{invoice:_0x3d0a4b,customer:_0x3b1bbc,payable_to_customer:_0x23b539,paid_amount:_0x193629}=_0x2bfb2d[_0xf8a5bf(0x180)],_0x43bfa9=await sales_return[_0xf8a5bf(0x128)](_0x197040);console['log']('data',_0x43bfa9),console[_0xf8a5bf(0x135)](_0x23b539),console[_0xf8a5bf(0x135)](_0x193629);var _0x41a141=_0x23b539-_0x193629;console['log']('subtract',_0x41a141),_0x43bfa9[_0xf8a5bf(0x152)]=parseFloat(_0x193629)+parseFloat(_0x43bfa9[_0xf8a5bf(0x152)]),_0x43bfa9[_0xf8a5bf(0x164)]=_0x41a141,console[_0xf8a5bf(0x135)](_0x43bfa9);const _0x4daf2e=await _0x43bfa9[_0xf8a5bf(0x16a)]();console[_0xf8a5bf(0x135)](0x1b207);const _0x55fb8e=await c_payment_data[_0xf8a5bf(0x138)]({'invoice':_0x2bfb2d[_0xf8a5bf(0x180)]['invoice'],'reason':_0xf8a5bf(0x173)});console[_0xf8a5bf(0x135)](_0xf8a5bf(0x134),_0x55fb8e),_0x55fb8e[_0xf8a5bf(0x15e)]=_0x41a141,await _0x55fb8e['save']();let _0x3d439d=new Date(),_0xcf134d=('0'+_0x3d439d[_0xf8a5bf(0x17d)]())[_0xf8a5bf(0x158)](-0x2),_0x541e71=('0'+(_0x3d439d[_0xf8a5bf(0x110)]()+0x1))[_0xf8a5bf(0x158)](-0x2),_0x2950e1=_0x3d439d[_0xf8a5bf(0x15f)](),_0x114406=_0x2950e1+'-'+_0x541e71+'-'+_0xcf134d;const _0xdc016e=new customer_payment({'invoice':_0x3d0a4b,'date':_0x2950e1+'-'+_0x541e71+'-'+_0xcf134d,'customer':_0x3b1bbc,'reason':_0xf8a5bf(0x183),'amount':_0x193629}),_0x3ff3d6=await _0xdc016e['save']();_0x2bfb2d[_0xf8a5bf(0x107)](_0xf8a5bf(0x129),_0xf8a5bf(0x15d)),_0x12be37[_0xf8a5bf(0x149)](_0xf8a5bf(0x166));}catch(_0x3526e4){console[_0xf8a5bf(0x135)](_0x3526e4);}}),router[a0_0x278d48(0x16b)](a0_0x278d48(0x162),auth,async(_0x42a3a8,_0x1fc83c)=>{var _0x5386e3=a0_0x278d48;try{const {username:_0x266835,email:_0x1e49a7,role:_0x46af6b}=_0x42a3a8['user'],_0x3e1e0c=_0x42a3a8[_0x5386e3(0x177)],_0x8ca991=await profile['findOne']({'email':_0x3e1e0c[_0x5386e3(0x175)]}),_0x21ebfe=await master_shop[_0x5386e3(0x12a)]();console['log']('master',_0x21ebfe);const _0x5583bf=_0x42a3a8['params']['id'],_0x1e67f8=await sales_return[_0x5386e3(0x128)](_0x5583bf);console[_0x5386e3(0x135)](_0x1e67f8);const _0xe0365d=await customer[_0x5386e3(0x138)]({'name':_0x1e67f8[_0x5386e3(0x168)]});console['log'](_0xe0365d);if(_0x21ebfe[0x0][_0x5386e3(0x11d)]=='English\x20(US)'){var _0x41ac32=users[_0x5386e3(0x15c)];console[_0x5386e3(0x135)](_0x41ac32);}else{if(_0x21ebfe[0x0]['language']==_0x5386e3(0x17a))var _0x41ac32=users[_0x5386e3(0x17a)];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]=='German')var _0x41ac32=users['German'];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]==_0x5386e3(0x125))var _0x41ac32=users['Spanish'];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]=='French')var _0x41ac32=users[_0x5386e3(0x113)];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]==_0x5386e3(0x14d))var _0x41ac32=users[_0x5386e3(0x136)];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]==_0x5386e3(0x10d))var _0x41ac32=users[_0x5386e3(0x10d)];else{if(_0x21ebfe[0x0][_0x5386e3(0x11d)]==_0x5386e3(0x163))var _0x41ac32=users[_0x5386e3(0x13f)];}}}}}}}_0x1fc83c['render'](_0x5386e3(0x185),{'success':_0x42a3a8['flash'](_0x5386e3(0x129)),'errors':_0x42a3a8[_0x5386e3(0x107)]('errors'),'role':_0x3e1e0c,'profile':_0x8ca991,'master_shop':_0x21ebfe,'customers':_0xe0365d,'sales':_0x1e67f8,'language':_0x41ac32});}catch(_0x4af66d){console[_0x5386e3(0x135)](_0x4af66d);}}),module['exports']=router;