function a0_0x57ba(_0x42847a,_0x3d246a){const _0x684278=a0_0x6842();return a0_0x57ba=function(_0x57ba12,_0x14a16c){_0x57ba12=_0x57ba12-0x151;let _0x2777d8=_0x684278[_0x57ba12];return _0x2777d8;},a0_0x57ba(_0x42847a,_0x3d246a);}function a0_0x6842(){const _0x2600f3=['$product_details.secondary_code','post','337512etMBeV','stocks','return_qty','findOne','payment\x20successfull','to_room','Spanish','Finished\x20Goods','German','name','English','$supplier_docs','stock_data','exports','Arabic\x20(ae)','aggregate','2983473Lttgec','redirect','../middleware/auth','1kvpbVI','$suppliers','$product_details.bin','user','839856YjwXIG','/receive_payment/:id','purchase_quantity','product_code_hide','$supplier_docs.email','$discount','due_amount','product_name','slice','language','$supplier_docs.mobile','$product_details','$return_product.return_qty','$return_product.product_name','Hindi','log','received','to_warehouse_name','product_details','$return_product','Received\x20For\x20Purchase\x20Return','$return_product.total','email','find','invoice','$note','product_code','$product_details.product_stock','3224470tMoWxV','primary_code_hide','15RWOSkW','../public/language/languages.json','get','Enabled','Arabic','260428bvZzQk','date','$supplier_docs.address','purchase\x20return\x20successfully','room','Purchase\x20Return','/view/:id','Chinese','/purchases_return/view','return_product','getFullYear','forEach','return_purchase_invoice','Portuguese\x20(BR)','warehouse_name','42315VNXIJp','$product_details.type','$date','to_Room_name','getDate','suppliers','body','$product_details.floorlevel','render','$received','English\x20(US)','product_stock','save','level','bay','map','secondary_code','1067214CzjNsB','$product_details._id','184AZWBSr','$product_details.product_code','getMonth','params','$receivable','master','stock_quantity','$warehouse_name','flash','Portuguese','Router','$due_amount','Return\x20Goods','supplier_docs','../models/all_models','$product_details.primary_code','string','secondary_code_hide','express','$name','success','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty','errors','purchases_return_finished','note','json','French','findById'];a0_0x6842=function(){return _0x2600f3;};return a0_0x6842();}const a0_0x39039b=a0_0x57ba;(function(_0x18a755,_0x13374b){const _0x180a3c=a0_0x57ba,_0x580ddd=_0x18a755();while(!![]){try{const _0x1506c5=-parseInt(_0x180a3c(0x15d))/0x1*(-parseInt(_0x180a3c(0x1a4))/0x2)+-parseInt(_0x180a3c(0x161))/0x3+parseInt(_0x180a3c(0x184))/0x4+-parseInt(_0x180a3c(0x17f))/0x5*(-parseInt(_0x180a3c(0x1c4))/0x6)+parseInt(_0x180a3c(0x193))/0x7*(-parseInt(_0x180a3c(0x1a6))/0x8)+-parseInt(_0x180a3c(0x15a))/0x9+parseInt(_0x180a3c(0x17d))/0xa;if(_0x1506c5===_0x13374b)break;else _0x580ddd['push'](_0x580ddd['shift']());}catch(_0x79dde6){_0x580ddd['push'](_0x580ddd['shift']());}}}(a0_0x6842,0x52de9));const express=require(a0_0x39039b(0x1b8)),app=express(),router=express[a0_0x39039b(0x1b0)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data,purchases_return_finished}=require(a0_0x39039b(0x1b4)),auth=require(a0_0x39039b(0x15c)),users=require(a0_0x39039b(0x180));router[a0_0x39039b(0x181)]('/view',auth,async(_0x49de40,_0x26b74e)=>{const _0x151560=a0_0x39039b;try{const {username:_0x11de85,email:_0x242b65,role:_0x5a4915}=_0x49de40[_0x151560(0x160)],_0x94fd32=_0x49de40[_0x151560(0x160)],_0x6e9a77=await profile[_0x151560(0x1c7)]({'email':_0x94fd32['email']}),_0x333e99=await master_shop[_0x151560(0x178)]();console[_0x151560(0x170)](_0x151560(0x1ab),_0x333e99);const _0x675d1e=await purchases_return_finished[_0x151560(0x159)]([{'$lookup':{'from':_0x151560(0x198),'localField':_0x151560(0x198),'foreignField':_0x151560(0x153),'as':_0x151560(0x1b3)}},{'$unwind':_0x151560(0x174)},{'$unwind':_0x151560(0x155)},{'$group':{'_id':'$_id','invoice':{'$first':'$invoice'},'date':{'$first':_0x151560(0x195)},'suppliers':{'$first':_0x151560(0x15e)},'warehouse_name':{'$first':_0x151560(0x1ad)},'product_name':{'$first':_0x151560(0x16e)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':'$return_product.price'},'total':{'$sum':_0x151560(0x176)},'note':{'$first':_0x151560(0x17a)},'total_amount':{'$first':'$total_amount'},'discount':{'$first':_0x151560(0x166)},'receivable':{'$first':_0x151560(0x1aa)},'received':{'$first':_0x151560(0x19c)},'due_amount':{'$first':_0x151560(0x1b1)},'mobile':{'$first':_0x151560(0x16b)},'email':{'$first':_0x151560(0x165)},'address':{'$first':_0x151560(0x186)},'return_sum_qty':{'$sum':_0x151560(0x16d)}}}]);console[_0x151560(0x170)](_0x675d1e);if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x19d)){var _0x4fb14b=users[_0x151560(0x154)];console['log'](_0x4fb14b);}else{if(_0x333e99[0x0]['language']=='Hindi')var _0x4fb14b=users[_0x151560(0x16f)];else{if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x152))var _0x4fb14b=users[_0x151560(0x152)];else{if(_0x333e99[0x0]['language']==_0x151560(0x1ca))var _0x4fb14b=users[_0x151560(0x1ca)];else{if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x1c0))var _0x4fb14b=users[_0x151560(0x1c0)];else{if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x191))var _0x4fb14b=users[_0x151560(0x1af)];else{if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x18b))var _0x4fb14b=users[_0x151560(0x18b)];else{if(_0x333e99[0x0][_0x151560(0x16a)]==_0x151560(0x158))var _0x4fb14b=users['Arabic'];}}}}}}}_0x26b74e['render'](_0x151560(0x1bd),{'success':_0x49de40[_0x151560(0x1ae)]('success'),'errors':_0x49de40[_0x151560(0x1ae)](_0x151560(0x1bc)),'role':_0x94fd32,'profile':_0x6e9a77,'master_shop':_0x333e99,'user':_0x675d1e,'language':_0x4fb14b});}catch(_0x2d9c23){console[_0x151560(0x170)](_0x2d9c23);}}),router[a0_0x39039b(0x181)](a0_0x39039b(0x18a),auth,async(_0x4dd625,_0x2b08b8)=>{const _0x103fb7=a0_0x39039b;try{const {username:_0x462031,email:_0x5c655a,role:_0x45e693}=_0x4dd625[_0x103fb7(0x160)],_0x53af11=_0x4dd625['user'],_0x2d994c=await profile[_0x103fb7(0x1c7)]({'email':_0x53af11[_0x103fb7(0x177)]}),_0x3f97ab=await product[_0x103fb7(0x178)]({}),_0x53d8e3=await master_shop[_0x103fb7(0x178)](),_0x50cf3f=_0x4dd625[_0x103fb7(0x1a9)]['id'],_0x29ed1d=await purchases_return_finished['findById'](_0x50cf3f),_0x4188b3=await warehouse['aggregate']([{'$match':{'name':_0x29ed1d[_0x103fb7(0x192)],'room':_0x29ed1d[_0x103fb7(0x188)],'warehouse_category':'Finished\x20Goods'}},{'$unwind':_0x103fb7(0x16c)},{'$group':{'_id':_0x103fb7(0x1a5),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x103fb7(0x17c)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':_0x103fb7(0x15f)},'type':{'$first':_0x103fb7(0x194)},'floorlevel':{'$first':_0x103fb7(0x19a)},'primary_code':{'$first':_0x103fb7(0x1b5)},'secondary_code':{'$first':_0x103fb7(0x1c2)},'product_code':{'$first':_0x103fb7(0x1a7)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'}}}]);warehouse_data=await warehouse[_0x103fb7(0x159)]([{'$match':{'status':_0x103fb7(0x182),'name':_0x103fb7(0x1b2),'warehouse_category':_0x103fb7(0x151)}},{'$group':{'_id':'$name','name':{'$first':_0x103fb7(0x1b9)}}},{'$sort':{'name':0x1}}]),console['log'](_0x103fb7(0x156),_0x4188b3);if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x19d)){var _0x7a88af=users[_0x103fb7(0x154)];console[_0x103fb7(0x170)](_0x7a88af);}else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x16f))var _0x7a88af=users[_0x103fb7(0x16f)];else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x152))var _0x7a88af=users[_0x103fb7(0x152)];else{if(_0x53d8e3[0x0]['language']==_0x103fb7(0x1ca))var _0x7a88af=users[_0x103fb7(0x1ca)];else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x1c0))var _0x7a88af=users[_0x103fb7(0x1c0)];else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x191))var _0x7a88af=users[_0x103fb7(0x1af)];else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]==_0x103fb7(0x18b))var _0x7a88af=users[_0x103fb7(0x18b)];else{if(_0x53d8e3[0x0][_0x103fb7(0x16a)]=='Arabic\x20(ae)')var _0x7a88af=users['Arabic'];}}}}}}}_0x2b08b8[_0x103fb7(0x19b)]('return_purchase_edit_finished',{'success':_0x4dd625[_0x103fb7(0x1ae)]('success'),'errors':_0x4dd625[_0x103fb7(0x1ae)](_0x103fb7(0x1bc)),'role':_0x53af11,'master_shop':_0x53d8e3,'profile':_0x2d994c,'user':_0x29ed1d,'stock':_0x4188b3,'product':_0x3f97ab,'language':_0x7a88af,'warehouse':warehouse_data});}catch(_0x65e270){console[_0x103fb7(0x170)](_0x65e270);}}),router[a0_0x39039b(0x1c3)](a0_0x39039b(0x18a),auth,async(_0x10340b,_0x4302ee)=>{const _0x12a54a=a0_0x39039b;try{const _0x3cdb83=_0x10340b[_0x12a54a(0x1a9)]['id'],_0xb8bdc8=await purchases_return_finished['findOne']({'invoice':_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x179)]}),_0x2cec5d=await warehouse[_0x12a54a(0x1c7)]({'name':_0xb8bdc8[_0x12a54a(0x172)],'room':_0xb8bdc8[_0x12a54a(0x1c9)],'warehouse_category':_0x12a54a(0x151)}),{invoice:_0x460725,suppliers:_0x1861da,date:_0x1a49f6,warehouse_name:_0x12e596,product_name:_0x5f3e7e,purchase_quantity:_0x16f0ce,stocks:_0x410e90,return_qty:_0x3ff1dd,note:_0x42f074,Room_name:_0xf71526,level:_0x136728,isle:_0x4b1559,pallet:_0xb762b8,to_warehouse_name:_0x76d9cb,to_Room_name:_0x23ebe0}=_0x10340b[_0x12a54a(0x199)];if(typeof _0x5f3e7e==_0x12a54a(0x1b6))var _0x58ba9b=[_0x10340b[_0x12a54a(0x199)]['product_name']],_0x2d473b=[_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x163)]],_0x52c7a1=[_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1c5)]],_0x4ffbb9=[_0x10340b['body'][_0x12a54a(0x1c6)]],_0x5fb033=[_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1a0)]],_0x47eaee=[_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x164)]],_0x3fe9f3=[_0x10340b['body'][_0x12a54a(0x17e)]],_0x35fb15=[_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1b7)]];else var _0x58ba9b=[..._0x10340b[_0x12a54a(0x199)][_0x12a54a(0x168)]],_0x2d473b=[..._0x10340b[_0x12a54a(0x199)]['purchase_quantity']],_0x52c7a1=[..._0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1c5)]],_0x4ffbb9=[..._0x10340b[_0x12a54a(0x199)]['return_qty']],_0x5fb033=[..._0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1a0)]],_0x47eaee=[..._0x10340b[_0x12a54a(0x199)]['product_code_hide']],_0x3fe9f3=[..._0x10340b['body'][_0x12a54a(0x17e)]],_0x35fb15=[..._0x10340b[_0x12a54a(0x199)][_0x12a54a(0x1b7)]];const _0x5d33df=_0x58ba9b[_0x12a54a(0x1a2)](_0xd385cd=>{return _0xd385cd={'product_name':_0xd385cd};});_0x2d473b[_0x12a54a(0x18f)]((_0x4f8fd1,_0x181ee0)=>{_0x5d33df[_0x181ee0]['purchase_quantity']=_0x4f8fd1;}),_0x52c7a1['forEach']((_0x3f9b83,_0x25707e)=>{const _0xe1116b=_0x12a54a;_0x5d33df[_0x25707e][_0xe1116b(0x1ac)]=_0x3f9b83;}),_0x4ffbb9['forEach']((_0x1ea227,_0x5a3796)=>{_0x5d33df[_0x5a3796]['return_qty']=_0x1ea227;}),_0x5fb033['forEach']((_0x3ffbeb,_0x258fbe)=>{const _0x1c5121=_0x12a54a;_0x5d33df[_0x258fbe][_0x1c5121(0x1a1)]=_0x3ffbeb;}),_0x47eaee[_0x12a54a(0x18f)]((_0x19b57c,_0x355b6f)=>{const _0x527fb6=_0x12a54a;_0x5d33df[_0x355b6f][_0x527fb6(0x17b)]=_0x19b57c;}),_0x3fe9f3[_0x12a54a(0x18f)]((_0x1280af,_0x5ed0dc)=>{_0x5d33df[_0x5ed0dc]['primary_code']=_0x1280af;}),_0x35fb15[_0x12a54a(0x18f)]((_0x9f1c13,_0x419bbc)=>{const _0x218768=_0x12a54a;_0x5d33df[_0x419bbc][_0x218768(0x1a3)]=_0x9f1c13;});var _0x3e328d=0x0;_0x5d33df[_0x12a54a(0x18f)](_0x10b2ac=>{const _0x17ac63=_0x12a54a;(parseInt(_0x10b2ac[_0x17ac63(0x163)])<parseInt(_0x10b2ac[_0x17ac63(0x1c6)])||parseInt(_0x10b2ac[_0x17ac63(0x1ac)])<parseInt(_0x10b2ac[_0x17ac63(0x1c6)]))&&_0x3e328d++;});if(_0x3e328d!=0x0)return _0x10340b['flash'](_0x12a54a(0x1bc),_0x12a54a(0x1bb)),_0x4302ee[_0x12a54a(0x15b)]('back');_0xb8bdc8[_0x12a54a(0x18d)][_0x12a54a(0x18f)](_0x1dd3db=>{const _0x43516c=_0x12a54a;if(_0x1dd3db[_0x43516c(0x1c6)]>0x0){const _0x341dd2=_0x2cec5d[_0x43516c(0x173)][_0x43516c(0x1a2)](_0x5aaa00=>{const _0x31cf43=_0x43516c;_0x5aaa00['product_name']==_0x1dd3db['product_name']&&_0x5aaa00[_0x31cf43(0x1a1)]==_0x1dd3db[_0x31cf43(0x1a1)]&&(_0x5aaa00['product_stock']=parseInt(_0x5aaa00[_0x31cf43(0x19e)])+parseInt(_0x1dd3db['return_qty']));});}}),await _0x2cec5d[_0x12a54a(0x19f)](),_0xb8bdc8[_0x12a54a(0x179)]=_0x460725,_0xb8bdc8[_0x12a54a(0x198)]=_0x1861da,_0xb8bdc8[_0x12a54a(0x185)]=_0x1a49f6,_0xb8bdc8[_0x12a54a(0x192)]=_0x12e596,_0xb8bdc8['return_product']=_0x5d33df,_0xb8bdc8[_0x12a54a(0x1be)]=_0x42f074,_0xb8bdc8['room']=_0xf71526,_0xb8bdc8[_0x12a54a(0x172)]=_0x76d9cb,_0xb8bdc8[_0x12a54a(0x1c9)]=_0x23ebe0;const _0x58fc9d=await _0xb8bdc8[_0x12a54a(0x19f)](),_0x10ded2=await purchases_return_finished[_0x12a54a(0x1c7)]({'invoice':_0x10340b[_0x12a54a(0x199)]['invoice']}),_0x565f89=await warehouse[_0x12a54a(0x1c7)]({'name':_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x172)],'room':_0x10340b['body'][_0x12a54a(0x196)],'warehouse_category':_0x12a54a(0x151)});_0x10ded2[_0x12a54a(0x18d)][_0x12a54a(0x18f)](_0xed0283=>{const _0x1b7747=_0x12a54a;_0x565f89[_0x1b7747(0x173)]['map'](_0x95d3e7=>{const _0x48bfac=_0x1b7747;_0x95d3e7[_0x48bfac(0x168)]==_0xed0283[_0x48bfac(0x168)]&&_0x95d3e7['bay']==_0xed0283[_0x48bfac(0x1a1)]&&(_0x95d3e7[_0x48bfac(0x19e)]=parseInt(_0x95d3e7[_0x48bfac(0x19e)])-parseInt(_0xed0283[_0x48bfac(0x1c6)]));});}),await _0x565f89[_0x12a54a(0x19f)]();const _0x26e48a=await s_payment_data[_0x12a54a(0x1c7)]({'invoice':_0x10340b[_0x12a54a(0x199)][_0x12a54a(0x179)],'reason':_0x12a54a(0x189)});await _0x26e48a[_0x12a54a(0x19f)](),_0x10340b[_0x12a54a(0x1ae)](_0x12a54a(0x1ba),_0x12a54a(0x187)),_0x4302ee[_0x12a54a(0x15b)]('/purchases_return_finished/view');}catch(_0x311c1a){console[_0x12a54a(0x170)](_0x311c1a),_0x4302ee['status'](0xc8)[_0x12a54a(0x1bf)]({'message':_0x311c1a['message']});}}),router['get']('/invoice/:id',auth,async(_0x2ade76,_0x92e785)=>{const _0x3ae56c=a0_0x39039b;try{const {username:_0x25ae78,email:_0x58dc78,role:_0x3c097c}=_0x2ade76['user'],_0x104e85=_0x2ade76[_0x3ae56c(0x160)],_0x19d297=await profile[_0x3ae56c(0x1c7)]({'email':_0x104e85[_0x3ae56c(0x177)]}),_0x521b10=await master_shop['find']();console[_0x3ae56c(0x170)](_0x3ae56c(0x1ab),_0x521b10);const _0x8fc710=_0x2ade76[_0x3ae56c(0x1a9)]['id'],_0x2a9df4=await purchases_return[_0x3ae56c(0x1c1)](_0x8fc710);console['log'](_0x2a9df4);const _0x7eb86a=await suppliers[_0x3ae56c(0x1c7)]({'name':_0x2a9df4[_0x3ae56c(0x198)]});console['log'](_0x7eb86a);if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x19d)){var _0xbe1684=users[_0x3ae56c(0x154)];console[_0x3ae56c(0x170)](_0xbe1684);}else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x16f))var _0xbe1684=users[_0x3ae56c(0x16f)];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]=='German')var _0xbe1684=users[_0x3ae56c(0x152)];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x1ca))var _0xbe1684=users['Spanish'];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x1c0))var _0xbe1684=users[_0x3ae56c(0x1c0)];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x191))var _0xbe1684=users['Portuguese'];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x18b))var _0xbe1684=users['Chinese'];else{if(_0x521b10[0x0][_0x3ae56c(0x16a)]==_0x3ae56c(0x158))var _0xbe1684=users[_0x3ae56c(0x183)];}}}}}}}_0x92e785[_0x3ae56c(0x19b)](_0x3ae56c(0x190),{'success':_0x2ade76[_0x3ae56c(0x1ae)](_0x3ae56c(0x1ba)),'errors':_0x2ade76[_0x3ae56c(0x1ae)](_0x3ae56c(0x1bc)),'role':_0x104e85,'profile':_0x19d297,'master_shop':_0x521b10,'supplier':_0x7eb86a,'purchase':_0x2a9df4,'language':_0xbe1684});}catch(_0x3c37c2){console['log'](_0x3c37c2);}}),router[a0_0x39039b(0x1c3)](a0_0x39039b(0x162),auth,async(_0x23cc6a,_0x1331b2)=>{const _0x3f64f1=a0_0x39039b;try{const _0x3f2fe3=_0x23cc6a[_0x3f64f1(0x1a9)]['id'],{invoice:_0x51cc9c,suppliers:_0x4faa39,receivable_amount:_0x12667b,received_amount:_0x41da58}=_0x23cc6a[_0x3f64f1(0x199)],_0x44b719=await purchases_return['findById'](_0x3f2fe3);console['log'](_0x44b719);var _0x109bc2=_0x12667b-_0x41da58;console[_0x3f64f1(0x170)](_0x41da58),_0x44b719[_0x3f64f1(0x171)]=parseFloat(_0x41da58)+parseFloat(_0x44b719[_0x3f64f1(0x171)]),_0x44b719[_0x3f64f1(0x167)]=_0x109bc2,console[_0x3f64f1(0x170)](_0x44b719);const _0x5836c2=await _0x44b719[_0x3f64f1(0x19f)](),_0x297200=await s_payment_data[_0x3f64f1(0x1c7)]({'invoice':_0x23cc6a[_0x3f64f1(0x199)][_0x3f64f1(0x179)],'reason':'Purchase\x20Return'});_0x297200['amount']=_0x109bc2,await _0x297200['save']();let _0x96257f=new Date(),_0x1f28c6=('0'+_0x96257f[_0x3f64f1(0x197)]())[_0x3f64f1(0x169)](-0x2),_0x264c83=('0'+(_0x96257f[_0x3f64f1(0x1a8)]()+0x1))[_0x3f64f1(0x169)](-0x2),_0x1d825e=_0x96257f[_0x3f64f1(0x18e)](),_0x1f8b30=_0x1d825e+'-'+_0x264c83+'-'+_0x1f28c6;const _0x1a6a2d=new suppliers_payment({'invoice':_0x51cc9c,'date':_0x1d825e+'-'+_0x264c83+'-'+_0x1f28c6,'suppliers':_0x4faa39,'reason':_0x3f64f1(0x175),'amount':_0x41da58}),_0x33b6fb=await _0x1a6a2d[_0x3f64f1(0x19f)]();_0x23cc6a[_0x3f64f1(0x1ae)]('success',_0x3f64f1(0x1c8)),_0x1331b2[_0x3f64f1(0x15b)](_0x3f64f1(0x18c));}catch(_0x116595){console[_0x3f64f1(0x170)](_0x116595);}}),module[a0_0x39039b(0x157)]=router;