function a0_0x2eec(_0x33b706,_0x56ce7f){var _0x1630e0=a0_0x1630();return a0_0x2eec=function(_0x2eec46,_0x5cdf6a){_0x2eec46=_0x2eec46-0x71;var _0x4d365e=_0x1630e0[_0x2eec46];return _0x4d365e;},a0_0x2eec(_0x33b706,_0x56ce7f);}var a0_0x44293e=a0_0x2eec;(function(_0x42e26e,_0x2eb62d){var _0xf63861=a0_0x2eec,_0x2f325c=_0x42e26e();while(!![]){try{var _0x2d34ba=-parseInt(_0xf63861(0xba))/0x1+parseInt(_0xf63861(0xd9))/0x2+-parseInt(_0xf63861(0x78))/0x3*(-parseInt(_0xf63861(0x7a))/0x4)+-parseInt(_0xf63861(0x8b))/0x5*(parseInt(_0xf63861(0xd2))/0x6)+parseInt(_0xf63861(0xd3))/0x7+parseInt(_0xf63861(0xd6))/0x8+parseInt(_0xf63861(0x83))/0x9;if(_0x2d34ba===_0x2eb62d)break;else _0x2f325c['push'](_0x2f325c['shift']());}catch(_0x23e161){_0x2f325c['push'](_0x2f325c['shift']());}}}(a0_0x1630,0x53639));const express=require('express'),app=express(),router=express[a0_0x44293e(0xa3)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x44293e(0x8f)),auth=require(a0_0x44293e(0x84)),users=require(a0_0x44293e(0xc6));function a0_0x1630(){var _0x294e1b=['$product_details.storage','old_data','Arabic\x20(ae)','invoice','getDate','slice','Return\x20Rooms','53586XINcjQ','2954434fNYqIM','product_name','/invoice/:id','3264480KnatCJ','sale_qty','paid_amount','144790LLCtGi','Spanish','payment\x20successfull','user','stocks','master','bay','save','name','type','date','product_details','flash','new\x20new_data','return_sale','501ImRaCb','findById','10308QRQDWz','product_stock','purchase\x20return\x20successfully','forEach','types','ToWarehouse','c_payment','Chinese','French','891252WlbyeV','../middleware/auth','note','errors','params','return_sale_edit','$product_details._id','$product_details.secondary_code','305vmlJeO','aggregate','Returned\x20Payment\x20For\x20Sale\x20Return','English','../models/all_models','secondary_code','warehouse_name','Portuguese','getMonth','success','/view/:id','Sale\x20Return','foreach\x20newproduct','customers','return_qty','$product_details.floorlevel','find','$product_details.product_name','Arabic','$product_details.primary_code','/sales_return/view','sales_return_invoice','language','Raw\x20Materials','Router','findOne','redirect','map','post','Portuguese\x20(BR)','email','$product_details','product_code','getFullYear','ToRoom','primary_code','log','German','subtract','stock','bin','sales_quantity','suppliers','$product_details.type','/view','amount','floorlevel','545552MwMNjT','$product_details.rack','exports','get','$name','status','Hindi','body','/give_payment/:id','old_warehouse_data','customer','render','../public/language/languages.json','English\x20(US)','$product_details.bay','$customer_docs','message'];a0_0x1630=function(){return _0x294e1b;};return a0_0x1630();}router[a0_0x44293e(0xbd)](a0_0x44293e(0xb7),auth,async(_0x193a61,_0x24539a)=>{var _0x4fb85e=a0_0x44293e;try{const {username:_0x311f33,email:_0x5dbc44,role:_0x203060}=_0x193a61[_0x4fb85e(0xdc)],_0x1f4c62=_0x193a61[_0x4fb85e(0xdc)],_0x6aefee=await profile[_0x4fb85e(0xa4)]({'email':_0x1f4c62[_0x4fb85e(0xa9)]}),_0x36a3f7=await master_shop[_0x4fb85e(0x9b)]();console[_0x4fb85e(0xaf)](_0x4fb85e(0xde),_0x36a3f7);const _0xd6d4d4=await sales_return['aggregate']([{'$lookup':{'from':_0x4fb85e(0x98),'localField':_0x4fb85e(0xc4),'foreignField':_0x4fb85e(0x71),'as':'customer_docs'}},{'$unwind':_0x4fb85e(0xc9)}]);console[_0x4fb85e(0xaf)]('all_data',_0xd6d4d4);if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]==_0x4fb85e(0xc7)){var _0x5794a7=users[_0x4fb85e(0x8e)];console[_0x4fb85e(0xaf)](_0x5794a7);}else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]==_0x4fb85e(0xc0))var _0x5794a7=users[_0x4fb85e(0xc0)];else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]=='German')var _0x5794a7=users[_0x4fb85e(0xb0)];else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]=='Spanish')var _0x5794a7=users['Spanish'];else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]=='French')var _0x5794a7=users[_0x4fb85e(0x82)];else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]=='Portuguese\x20(BR)')var _0x5794a7=users[_0x4fb85e(0x92)];else{if(_0x36a3f7[0x0]['language']==_0x4fb85e(0x81))var _0x5794a7=users[_0x4fb85e(0x81)];else{if(_0x36a3f7[0x0][_0x4fb85e(0xa1)]==_0x4fb85e(0xcd))var _0x5794a7=users[_0x4fb85e(0x9d)];}}}}}}}_0x24539a[_0x4fb85e(0xc5)]('sales_return',{'success':_0x193a61['flash'](_0x4fb85e(0x94)),'errors':_0x193a61[_0x4fb85e(0x75)](_0x4fb85e(0x86)),'role':_0x1f4c62,'profile':_0x6aefee,'master_shop':_0x36a3f7,'user':_0xd6d4d4,'language':_0x5794a7});}catch(_0x2298e1){console[_0x4fb85e(0xaf)](_0x2298e1);}}),router[a0_0x44293e(0xbd)]('/view/:id',auth,async(_0x14c059,_0x2a669e)=>{var _0x5b6fc3=a0_0x44293e;try{const {username:_0x59d640,email:_0x564afe,role:_0x4f5d1e}=_0x14c059[_0x5b6fc3(0xdc)],_0x4b1ab6=_0x14c059[_0x5b6fc3(0xdc)],_0x5133e0=await profile[_0x5b6fc3(0xa4)]({'email':_0x4b1ab6[_0x5b6fc3(0xa9)]}),_0x4605e0=await master_shop[_0x5b6fc3(0x9b)]();console[_0x5b6fc3(0xaf)](_0x5b6fc3(0xde),_0x4605e0);const _0x561eca=_0x14c059[_0x5b6fc3(0x87)]['id'];console['log'](_0x561eca);var _0x504ec8=[_0x5b6fc3(0xd1)];const _0x3bfdfc=await sales_return[_0x5b6fc3(0x79)](_0x561eca),_0x5ac943=await warehouse[_0x5b6fc3(0x8c)]([{'$match':{'name':_0x3bfdfc[_0x5b6fc3(0x7f)],'room':_0x3bfdfc[_0x5b6fc3(0xad)]}},{'$unwind':_0x5b6fc3(0xaa)},{'$group':{'_id':_0x5b6fc3(0x89),'name':{'$first':_0x5b6fc3(0x9c)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x5b6fc3(0xc8)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x5b6fc3(0xb6)},'floorlevel':{'$first':_0x5b6fc3(0x9a)},'primary_code':{'$first':_0x5b6fc3(0x9e)},'secondary_code':{'$first':_0x5b6fc3(0x8a)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x5b6fc3(0xcb)},'rack':{'$first':_0x5b6fc3(0xbb)}}}]);console[_0x5b6fc3(0xaf)](_0x5ac943);const _0x2e3d6d=await warehouse[_0x5b6fc3(0x8c)]([{'$match':{'status':'Enabled','name':'Return\x20Goods','warehouse_category':_0x5b6fc3(0xa2)}},{'$group':{'_id':_0x5b6fc3(0xbe),'name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x3e5e60=await product[_0x5b6fc3(0x9b)]({});if(_0x4605e0[0x0]['language']==_0x5b6fc3(0xc7)){var _0x34d686=users[_0x5b6fc3(0x8e)];console['log'](_0x34d686);}else{if(_0x4605e0[0x0]['language']==_0x5b6fc3(0xc0))var _0x34d686=users[_0x5b6fc3(0xc0)];else{if(_0x4605e0[0x0][_0x5b6fc3(0xa1)]==_0x5b6fc3(0xb0))var _0x34d686=users['German'];else{if(_0x4605e0[0x0][_0x5b6fc3(0xa1)]==_0x5b6fc3(0xda))var _0x34d686=users['Spanish'];else{if(_0x4605e0[0x0][_0x5b6fc3(0xa1)]==_0x5b6fc3(0x82))var _0x34d686=users[_0x5b6fc3(0x82)];else{if(_0x4605e0[0x0]['language']=='Portuguese\x20(BR)')var _0x34d686=users[_0x5b6fc3(0x92)];else{if(_0x4605e0[0x0][_0x5b6fc3(0xa1)]==_0x5b6fc3(0x81))var _0x34d686=users[_0x5b6fc3(0x81)];else{if(_0x4605e0[0x0][_0x5b6fc3(0xa1)]==_0x5b6fc3(0xcd))var _0x34d686=users[_0x5b6fc3(0x9d)];}}}}}}}_0x2a669e[_0x5b6fc3(0xc5)](_0x5b6fc3(0x88),{'success':_0x14c059[_0x5b6fc3(0x75)](_0x5b6fc3(0x94)),'errors':_0x14c059['flash'](_0x5b6fc3(0x86)),'role':_0x4b1ab6,'profile':_0x5133e0,'master_shop':_0x4605e0,'user':_0x3bfdfc,'stock':_0x5ac943,'unit':_0x3e5e60,'language':_0x34d686,'warehouses':_0x2e3d6d,'rooms':_0x504ec8});}catch(_0x267b45){console[_0x5b6fc3(0xaf)](_0x267b45);}}),router['post'](a0_0x44293e(0x95),auth,async(_0x1a5eb1,_0x585ede)=>{var _0x15933a=a0_0x44293e;try{const _0x5db4d1=_0x1a5eb1['params']['id'];console['log'](_0x5db4d1);const _0x5040da=await sales_return[_0x15933a(0xa4)]({'invoice':_0x1a5eb1[_0x15933a(0xc1)]['invoice']});console[_0x15933a(0xaf)](_0x15933a(0xcc),_0x5040da);const _0x90a00=await warehouse[_0x15933a(0xa4)]({'name':_0x5040da[_0x15933a(0x7f)],'room':_0x5040da[_0x15933a(0xad)]});console['log'](_0x15933a(0xc3),_0x90a00);const {invoice:_0x434488,customer:_0x1594d0,date:_0x4052e1,warehouse_name:_0x4740bd,product_name:_0x492b58,primary_code:_0x1c04f5,secondary_code:_0x2c2a6c,product_code:_0xc39cae,sales_quantity:_0x59d3c8,stocks:_0x1515a9,return_qty:_0x10e718,note:_0x191386,to_warehouse_name:_0x5b3d8a,to_Room_name:_0x53232a}=_0x1a5eb1[_0x15933a(0xc1)];console[_0x15933a(0xaf)](_0x1a5eb1[_0x15933a(0xc1)]);if(typeof _0x492b58=='string')var _0x2d4bb5=[_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xd4)]],_0x4208d4=[_0x1a5eb1['body'][_0x15933a(0xae)]],_0x1be9e3=[_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0x90)]],_0x319051=[_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xab)]],_0x51f262=[_0x1a5eb1[_0x15933a(0xc1)]['sales_quantity']],_0x44ed31=[_0x1a5eb1['body'][_0x15933a(0xdd)]],_0x5255f6=[_0x1a5eb1['body'][_0x15933a(0x99)]],_0x241a96=[_0x1a5eb1[_0x15933a(0xc1)]['bay']],_0x4a1dd3=[_0x1a5eb1['body'][_0x15933a(0xb3)]],_0xa1c441=[_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0x7e)]],_0x8a0a5a=[_0x1a5eb1['body'][_0x15933a(0xb9)]];else var _0x2d4bb5=[..._0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xd4)]],_0x4208d4=[..._0x1a5eb1['body'][_0x15933a(0xae)]],_0x1be9e3=[..._0x1a5eb1['body'][_0x15933a(0x90)]],_0x319051=[..._0x1a5eb1[_0x15933a(0xc1)]['product_code']],_0x51f262=[..._0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xb4)]],_0x44ed31=[..._0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xdd)]],_0x5255f6=[..._0x1a5eb1['body'][_0x15933a(0x99)]],_0x241a96=[..._0x1a5eb1['body'][_0x15933a(0xdf)]],_0x4a1dd3=[..._0x1a5eb1[_0x15933a(0xc1)]['bin']],_0xa1c441=[..._0x1a5eb1[_0x15933a(0xc1)]['types']],_0x8a0a5a=[..._0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xb9)]];const _0x507caf=_0x2d4bb5[_0x15933a(0xa6)](_0x5bacfe=>{return _0x5bacfe={'product_name':_0x5bacfe};});_0x4208d4[_0x15933a(0x7d)]((_0x22f4de,_0xb629ab)=>{var _0x4a659c=_0x15933a;_0x507caf[_0xb629ab][_0x4a659c(0xae)]=_0x22f4de;}),_0x1be9e3[_0x15933a(0x7d)]((_0x50ce33,_0x398d93)=>{_0x507caf[_0x398d93]['secondary_code']=_0x50ce33;}),_0x319051[_0x15933a(0x7d)]((_0x168839,_0x133d2b)=>{_0x507caf[_0x133d2b]['product_code']=_0x168839;}),_0x51f262[_0x15933a(0x7d)]((_0x302a8b,_0x41911d)=>{var _0x2a55d5=_0x15933a;_0x507caf[_0x41911d][_0x2a55d5(0xd7)]=_0x302a8b;}),_0x44ed31['forEach']((_0x2e0b1b,_0xbe2d3)=>{var _0x5be58e=_0x15933a;_0x507caf[_0xbe2d3][_0x5be58e(0xb2)]=_0x2e0b1b;}),_0x5255f6[_0x15933a(0x7d)]((_0x23f482,_0x1af6f6)=>{var _0x25132f=_0x15933a;_0x507caf[_0x1af6f6][_0x25132f(0x99)]=_0x23f482;}),_0x241a96[_0x15933a(0x7d)]((_0x3193cd,_0x1133db)=>{var _0x39af89=_0x15933a;_0x507caf[_0x1133db][_0x39af89(0xdf)]=_0x3193cd;}),_0x4a1dd3['forEach']((_0x53acf1,_0x133ad8)=>{var _0x3a7661=_0x15933a;_0x507caf[_0x133ad8][_0x3a7661(0xb3)]=_0x53acf1;}),_0xa1c441[_0x15933a(0x7d)]((_0x26f024,_0x4262ae)=>{var _0x58ab9f=_0x15933a;_0x507caf[_0x4262ae][_0x58ab9f(0x72)]=_0x26f024;}),_0x8a0a5a[_0x15933a(0x7d)]((_0x5dd5b3,_0x107fa5)=>{var _0x4d9cfe=_0x15933a;_0x507caf[_0x107fa5][_0x4d9cfe(0xb9)]=_0x5dd5b3;});var _0x4e3f74=0x0;_0x507caf['forEach'](_0x427148=>{var _0x1ba448=_0x15933a;console['log'](_0x1ba448(0x97),_0x427148),(parseInt(_0x427148[_0x1ba448(0xd7)])<parseInt(_0x427148['return_qty'])||parseInt(_0x427148['stock'])<parseInt(_0x427148[_0x1ba448(0x99)])&&parseInt(_0x427148[_0x1ba448(0xd7)])>parseInt(_0x427148[_0x1ba448(0x99)])||parseInt(_0x427148[_0x1ba448(0x99)])==0x0)&&_0x4e3f74++;});if(_0x4e3f74!=0x0)return _0x1a5eb1[_0x15933a(0x75)](_0x15933a(0x86),'Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x585ede[_0x15933a(0xa5)]('back');_0x5040da[_0x15933a(0x77)][_0x15933a(0x7d)](_0x11c42e=>{var _0x32ed3d=_0x15933a;const _0x35d9ca=_0x90a00[_0x32ed3d(0x74)][_0x32ed3d(0xa6)](_0x233806=>{var _0x5f0ee5=_0x32ed3d;_0x233806[_0x5f0ee5(0xd4)]==_0x11c42e['product_name']&&_0x233806[_0x5f0ee5(0xb9)]==_0x11c42e[_0x5f0ee5(0xb9)]&&_0x233806['type']==_0x11c42e[_0x5f0ee5(0x72)]&&_0x233806['bin']==_0x11c42e[_0x5f0ee5(0xb3)]&&_0x233806['bay']==_0x11c42e[_0x5f0ee5(0xdf)]&&(_0x233806[_0x5f0ee5(0x7b)]=parseInt(_0x233806[_0x5f0ee5(0x7b)])+parseInt(_0x11c42e[_0x5f0ee5(0x99)]));});}),console[_0x15933a(0xaf)](_0x15933a(0xc3),_0x90a00),await _0x90a00[_0x15933a(0xe0)](),_0x5040da[_0x15933a(0xce)]=_0x434488,_0x5040da[_0x15933a(0xc4)]=_0x1594d0,_0x5040da[_0x15933a(0x73)]=_0x4052e1,_0x5040da[_0x15933a(0x91)]=_0x4740bd,_0x5040da[_0x15933a(0x77)]=_0x507caf,_0x5040da[_0x15933a(0x85)]=_0x191386,_0x5040da[_0x15933a(0x7f)]=_0x5b3d8a,_0x5040da[_0x15933a(0xad)]=_0x53232a;const _0x8fa921=await _0x5040da[_0x15933a(0xe0)]();console[_0x15933a(0xaf)](_0x15933a(0x76),_0x8fa921);const _0x9df769=await c_payment_data[_0x15933a(0xa4)]({'invoice':_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xce)],'reason':_0x15933a(0x96)});_0x9df769[_0x15933a(0xb5)]=_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0xb5)],_0x9df769[_0x15933a(0x73)]=_0x1a5eb1[_0x15933a(0xc1)][_0x15933a(0x73)],await _0x9df769[_0x15933a(0xe0)](),_0x1a5eb1[_0x15933a(0x75)](_0x15933a(0x94),_0x15933a(0x7c)),_0x585ede[_0x15933a(0xa5)](_0x15933a(0x9f));}catch(_0x46d7f8){console[_0x15933a(0xaf)](_0x46d7f8),_0x585ede[_0x15933a(0xbf)](0xc8)['json']({'message':_0x46d7f8[_0x15933a(0xca)]});}}),router[a0_0x44293e(0xa7)](a0_0x44293e(0xc2),auth,async(_0x5a92e5,_0x568196)=>{var _0x24a7b2=a0_0x44293e;try{const _0x4f952c=_0x5a92e5[_0x24a7b2(0x87)]['id'],{invoice:_0x4205eb,customer:_0x23dce1,payable_to_customer:_0x540ddc,paid_amount:_0x4d3778}=_0x5a92e5['body'],_0x49cdb6=await sales_return[_0x24a7b2(0x79)](_0x4f952c);console['log']('data',_0x49cdb6),console[_0x24a7b2(0xaf)](_0x540ddc),console['log'](_0x4d3778);var _0x81ba0a=_0x540ddc-_0x4d3778;console[_0x24a7b2(0xaf)](_0x24a7b2(0xb1),_0x81ba0a),_0x49cdb6[_0x24a7b2(0xd8)]=parseFloat(_0x4d3778)+parseFloat(_0x49cdb6[_0x24a7b2(0xd8)]),_0x49cdb6['due_amount']=_0x81ba0a,console['log'](_0x49cdb6);const _0xd96666=await _0x49cdb6['save']();console[_0x24a7b2(0xaf)](0x1b207);const _0x76e49a=await c_payment_data[_0x24a7b2(0xa4)]({'invoice':_0x5a92e5['body']['invoice'],'reason':_0x24a7b2(0x96)});console[_0x24a7b2(0xaf)](_0x24a7b2(0x80),_0x76e49a),_0x76e49a[_0x24a7b2(0xb8)]=_0x81ba0a,await _0x76e49a[_0x24a7b2(0xe0)]();let _0x355360=new Date(),_0x1f3a3c=('0'+_0x355360[_0x24a7b2(0xcf)]())[_0x24a7b2(0xd0)](-0x2),_0x2a4b96=('0'+(_0x355360[_0x24a7b2(0x93)]()+0x1))[_0x24a7b2(0xd0)](-0x2),_0x489bcd=_0x355360[_0x24a7b2(0xac)](),_0x3de69f=_0x489bcd+'-'+_0x2a4b96+'-'+_0x1f3a3c;const _0x572237=new customer_payment({'invoice':_0x4205eb,'date':_0x489bcd+'-'+_0x2a4b96+'-'+_0x1f3a3c,'customer':_0x23dce1,'reason':_0x24a7b2(0x8d),'amount':_0x4d3778}),_0x272606=await _0x572237[_0x24a7b2(0xe0)]();_0x5a92e5['flash'](_0x24a7b2(0x94),_0x24a7b2(0xdb)),_0x568196[_0x24a7b2(0xa5)]('/sales_return/view');}catch(_0xb222e){console[_0x24a7b2(0xaf)](_0xb222e);}}),router[a0_0x44293e(0xbd)](a0_0x44293e(0xd5),auth,async(_0x113fd5,_0x1df0fc)=>{var _0x1fcc42=a0_0x44293e;try{const {username:_0x215444,email:_0x55bf76,role:_0xd876c4}=_0x113fd5['user'],_0x578e2a=_0x113fd5[_0x1fcc42(0xdc)],_0x5405a4=await profile[_0x1fcc42(0xa4)]({'email':_0x578e2a['email']}),_0x3e82e3=await master_shop[_0x1fcc42(0x9b)]();console['log'](_0x1fcc42(0xde),_0x3e82e3);const _0x3a38fb=_0x113fd5['params']['id'],_0x10755a=await sales_return[_0x1fcc42(0x79)](_0x3a38fb);console[_0x1fcc42(0xaf)](_0x10755a);const _0x5a7592=await customer[_0x1fcc42(0xa4)]({'name':_0x10755a[_0x1fcc42(0xc4)]});console['log'](_0x5a7592);if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]==_0x1fcc42(0xc7)){var _0x4c0cb7=users[_0x1fcc42(0x8e)];console[_0x1fcc42(0xaf)](_0x4c0cb7);}else{if(_0x3e82e3[0x0]['language']==_0x1fcc42(0xc0))var _0x4c0cb7=users['Hindi'];else{if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]==_0x1fcc42(0xb0))var _0x4c0cb7=users[_0x1fcc42(0xb0)];else{if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]=='Spanish')var _0x4c0cb7=users[_0x1fcc42(0xda)];else{if(_0x3e82e3[0x0]['language']==_0x1fcc42(0x82))var _0x4c0cb7=users[_0x1fcc42(0x82)];else{if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]==_0x1fcc42(0xa8))var _0x4c0cb7=users['Portuguese'];else{if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]=='Chinese')var _0x4c0cb7=users[_0x1fcc42(0x81)];else{if(_0x3e82e3[0x0][_0x1fcc42(0xa1)]==_0x1fcc42(0xcd))var _0x4c0cb7=users[_0x1fcc42(0x9d)];}}}}}}}_0x1df0fc['render'](_0x1fcc42(0xa0),{'success':_0x113fd5[_0x1fcc42(0x75)](_0x1fcc42(0x94)),'errors':_0x113fd5[_0x1fcc42(0x75)](_0x1fcc42(0x86)),'role':_0x578e2a,'profile':_0x5405a4,'master_shop':_0x3e82e3,'customers':_0x5a7592,'sales':_0x10755a,'language':_0x4c0cb7});}catch(_0x1e1e67){console['log'](_0x1e1e67);}}),module[a0_0x44293e(0xbc)]=router;