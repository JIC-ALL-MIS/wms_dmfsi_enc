var a0_0x4d84dd=a0_0x15f4;function a0_0x1aa1(){var _0x5974d0=['exports','Router','stock','return_qty','1036280GSZviS','c_payment','7DszRRz','French','$product_details.bin','$product_details','Return\x20Goods','master','Spanish','product_code','warehouse_name','Sale\x20Return','secondary_code','language','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','99342tANCej','320112OSpRsl','Portuguese','suppliers','/sales_return/view','user','customers','getDate','ToRoom','10545012cSLDFN','log','$product_details.type','English\x20(US)','string','date','invoice','customer_docs','customer','bay','findOne','$product_details.bay','stocks','success','findById','name','1441WgRJSG','7314oxxOyc','get','all_data','message','getFullYear','34alyADB','post','English','redirect','415264AodVUG','Portuguese\x20(BR)','status','product_stock','product_name','save','types','German','/view/:id','Arabic','return_sale','$product_details._id','$product_details.secondary_code','email','$product_details.product_code','type','$product_details.rack','forEach','$name','../public/language/languages.json','find','flash','$product_details.product_name','$product_details.primary_code','paid_amount','new\x20new_data','$customer_docs','aggregate','params','due_amount','errors','product_details','primary_code','184180AEKZAF','ToWarehouse','sale_qty','../models/all_models','Raw\x20Materials','getMonth','old_data','$product_details.storage','slice','body','data','payment\x20successfull','Return\x20Rooms','map','render','json','Chinese','return_sale_edit','bin','back','Hindi','old_warehouse_data','sales_return_invoice','amount','floorlevel','Arabic\x20(ae)','1235Aphlnf'];a0_0x1aa1=function(){return _0x5974d0;};return a0_0x1aa1();}function a0_0x15f4(_0x52e25e,_0x31cbe1){var _0x1aa144=a0_0x1aa1();return a0_0x15f4=function(_0x15f4d1,_0x13f034){_0x15f4d1=_0x15f4d1-0xb9;var _0x3822dc=_0x1aa144[_0x15f4d1];return _0x3822dc;},a0_0x15f4(_0x52e25e,_0x31cbe1);}(function(_0x3943b7,_0x5d7e9f){var _0x3c510e=a0_0x15f4,_0x5b5247=_0x3943b7();while(!![]){try{var _0xe10339=parseInt(_0x3c510e(0xcf))/0x1*(parseInt(_0x3c510e(0x122))/0x2)+-parseInt(_0x3c510e(0x123))/0x3+parseInt(_0x3c510e(0xd3))/0x4+parseInt(_0x3c510e(0x10e))/0x5*(parseInt(_0x3c510e(0xca))/0x6)+-parseInt(_0x3c510e(0x115))/0x7*(-parseInt(_0x3c510e(0x113))/0x8)+parseInt(_0x3c510e(0xb9))/0x9+parseInt(_0x3c510e(0xf4))/0xa*(-parseInt(_0x3c510e(0xc9))/0xb);if(_0xe10339===_0x5d7e9f)break;else _0x5b5247['push'](_0x5b5247['shift']());}catch(_0x8e8464){_0x5b5247['push'](_0x5b5247['shift']());}}}(a0_0x1aa1,0xd5bc8));const express=require('express'),app=express(),router=express[a0_0x4d84dd(0x110)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x4d84dd(0xf7)),auth=require('../middleware/auth'),users=require(a0_0x4d84dd(0xe6));router['get']('/view',auth,async(_0x43798c,_0x491a04)=>{var _0x4f44f3=a0_0x4d84dd;try{const {username:_0x23bef6,email:_0x2fb9bc,role:_0x2c122f}=_0x43798c[_0x4f44f3(0x127)],_0x1b2080=_0x43798c['user'],_0x21bc7e=await profile[_0x4f44f3(0xc3)]({'email':_0x1b2080[_0x4f44f3(0xe0)]}),_0xd9a4e4=await master_shop[_0x4f44f3(0xe7)]();console['log'](_0x4f44f3(0x11a),_0xd9a4e4);const _0x4028e8=await sales_return[_0x4f44f3(0xee)]([{'$lookup':{'from':_0x4f44f3(0x128),'localField':'customer','foreignField':_0x4f44f3(0xc8),'as':_0x4f44f3(0xc0)}},{'$unwind':_0x4f44f3(0xed)}]);console[_0x4f44f3(0xba)](_0x4f44f3(0xcc),_0x4028e8);if(_0xd9a4e4[0x0]['language']=='English\x20(US)'){var _0x2c265a=users[_0x4f44f3(0xd1)];console[_0x4f44f3(0xba)](_0x2c265a);}else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]==_0x4f44f3(0x108))var _0x2c265a=users['Hindi'];else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]==_0x4f44f3(0xda))var _0x2c265a=users[_0x4f44f3(0xda)];else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]==_0x4f44f3(0x11b))var _0x2c265a=users[_0x4f44f3(0x11b)];else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]==_0x4f44f3(0x116))var _0x2c265a=users['French'];else{if(_0xd9a4e4[0x0]['language']==_0x4f44f3(0xd4))var _0x2c265a=users[_0x4f44f3(0x124)];else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]=='Chinese')var _0x2c265a=users['Chinese'];else{if(_0xd9a4e4[0x0][_0x4f44f3(0x120)]==_0x4f44f3(0x10d))var _0x2c265a=users[_0x4f44f3(0xdc)];}}}}}}}_0x491a04[_0x4f44f3(0x102)]('sales_return',{'success':_0x43798c['flash'](_0x4f44f3(0xc6)),'errors':_0x43798c['flash'](_0x4f44f3(0xf1)),'role':_0x1b2080,'profile':_0x21bc7e,'master_shop':_0xd9a4e4,'user':_0x4028e8,'language':_0x2c265a});}catch(_0x59dc3f){console[_0x4f44f3(0xba)](_0x59dc3f);}}),router[a0_0x4d84dd(0xcb)](a0_0x4d84dd(0xdb),auth,async(_0x354fcd,_0x494eaf)=>{var _0x32ed52=a0_0x4d84dd;try{const {username:_0x476d02,email:_0x3a10b5,role:_0x2e3987}=_0x354fcd[_0x32ed52(0x127)],_0x569f63=_0x354fcd[_0x32ed52(0x127)],_0x623809=await profile[_0x32ed52(0xc3)]({'email':_0x569f63[_0x32ed52(0xe0)]}),_0x54ae4e=await master_shop[_0x32ed52(0xe7)]();console[_0x32ed52(0xba)](_0x32ed52(0x11a),_0x54ae4e);const _0x15d9e3=_0x354fcd[_0x32ed52(0xef)]['id'];console[_0x32ed52(0xba)](_0x15d9e3);var _0x43f104=[_0x32ed52(0x100)];const _0x286c32=await sales_return[_0x32ed52(0xc7)](_0x15d9e3),_0x395188=await warehouse[_0x32ed52(0xee)]([{'$match':{'name':_0x286c32[_0x32ed52(0xf5)],'room':_0x286c32['ToRoom']}},{'$unwind':_0x32ed52(0x118)},{'$group':{'_id':_0x32ed52(0xde),'name':{'$first':_0x32ed52(0xe9)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x32ed52(0xc4)},'bin':{'$first':_0x32ed52(0x117)},'type':{'$first':_0x32ed52(0xbb)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x32ed52(0xea)},'secondary_code':{'$first':_0x32ed52(0xdf)},'product_code':{'$first':_0x32ed52(0xe1)},'storage':{'$first':_0x32ed52(0xfb)},'rack':{'$first':_0x32ed52(0xe3)}}}]);console[_0x32ed52(0xba)](_0x395188);const _0x5757b2=await warehouse[_0x32ed52(0xee)]([{'$match':{'status':'Enabled','name':_0x32ed52(0x119),'warehouse_category':_0x32ed52(0xf8)}},{'$group':{'_id':_0x32ed52(0xe5),'name':{'$first':_0x32ed52(0xe5)}}},{'$sort':{'name':0x1}}]),_0x428a74=await product['find']({});if(_0x54ae4e[0x0]['language']=='English\x20(US)'){var _0x53489f=users['English'];console[_0x32ed52(0xba)](_0x53489f);}else{if(_0x54ae4e[0x0][_0x32ed52(0x120)]==_0x32ed52(0x108))var _0x53489f=users['Hindi'];else{if(_0x54ae4e[0x0]['language']=='German')var _0x53489f=users['German'];else{if(_0x54ae4e[0x0][_0x32ed52(0x120)]==_0x32ed52(0x11b))var _0x53489f=users[_0x32ed52(0x11b)];else{if(_0x54ae4e[0x0][_0x32ed52(0x120)]==_0x32ed52(0x116))var _0x53489f=users[_0x32ed52(0x116)];else{if(_0x54ae4e[0x0][_0x32ed52(0x120)]==_0x32ed52(0xd4))var _0x53489f=users[_0x32ed52(0x124)];else{if(_0x54ae4e[0x0]['language']==_0x32ed52(0x104))var _0x53489f=users['Chinese'];else{if(_0x54ae4e[0x0][_0x32ed52(0x120)]=='Arabic\x20(ae)')var _0x53489f=users[_0x32ed52(0xdc)];}}}}}}}_0x494eaf[_0x32ed52(0x102)](_0x32ed52(0x105),{'success':_0x354fcd['flash'](_0x32ed52(0xc6)),'errors':_0x354fcd['flash'](_0x32ed52(0xf1)),'role':_0x569f63,'profile':_0x623809,'master_shop':_0x54ae4e,'user':_0x286c32,'stock':_0x395188,'unit':_0x428a74,'language':_0x53489f,'warehouses':_0x5757b2,'rooms':_0x43f104});}catch(_0xbeaef0){console[_0x32ed52(0xba)](_0xbeaef0);}}),router[a0_0x4d84dd(0xd0)](a0_0x4d84dd(0xdb),auth,async(_0x2f54b8,_0x14df4b)=>{var _0x471d5a=a0_0x4d84dd;try{const _0x2978c6=_0x2f54b8[_0x471d5a(0xef)]['id'];console[_0x471d5a(0xba)](_0x2978c6);const _0x55b6d2=await sales_return['findOne']({'invoice':_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xbf)]});console[_0x471d5a(0xba)](_0x471d5a(0xfa),_0x55b6d2);const _0x5c5ddf=await warehouse['findOne']({'name':_0x55b6d2[_0x471d5a(0xf5)],'room':_0x55b6d2[_0x471d5a(0x12a)]});console[_0x471d5a(0xba)](_0x471d5a(0x109),_0x5c5ddf);const {invoice:_0x2a0aa3,customer:_0x775476,date:_0x94acd7,warehouse_name:_0x24e185,product_name:_0x1615f6,primary_code:_0x24ea1b,secondary_code:_0x53507e,product_code:_0x2b7bca,sales_quantity:_0x3fb2c8,stocks:_0x2ba5ff,return_qty:_0x2a9847,note:_0x393ade,to_warehouse_name:_0x26d13e,to_Room_name:_0x924fb1}=_0x2f54b8['body'];console['log'](_0x2f54b8[_0x471d5a(0xfd)]);if(typeof _0x1615f6==_0x471d5a(0xbd))var _0xe7f824=[_0x2f54b8[_0x471d5a(0xfd)]['product_name']],_0x2f3c73=[_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xf3)]],_0x5b61e3=[_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x11f)]],_0x3ac48d=[_0x2f54b8['body'][_0x471d5a(0x11c)]],_0x3b8124=[_0x2f54b8[_0x471d5a(0xfd)]['sales_quantity']],_0xca7632=[_0x2f54b8['body']['stocks']],_0x2391a8=[_0x2f54b8['body'][_0x471d5a(0x112)]],_0x5a4a51=[_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xc2)]],_0x5a07e3=[_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x106)]],_0x48487d=[_0x2f54b8[_0x471d5a(0xfd)]['types']],_0x292d96=[_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x10c)]];else var _0xe7f824=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xd7)]],_0x2f3c73=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xf3)]],_0x5b61e3=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x11f)]],_0x3ac48d=[..._0x2f54b8['body']['product_code']],_0x3b8124=[..._0x2f54b8[_0x471d5a(0xfd)]['sales_quantity']],_0xca7632=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xc5)]],_0x2391a8=[..._0x2f54b8['body'][_0x471d5a(0x112)]],_0x5a4a51=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xc2)]],_0x5a07e3=[..._0x2f54b8['body'][_0x471d5a(0x106)]],_0x48487d=[..._0x2f54b8['body'][_0x471d5a(0xd9)]],_0x292d96=[..._0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x10c)]];const _0x365f84=_0xe7f824[_0x471d5a(0x101)](_0x5c9ed4=>{return _0x5c9ed4={'product_name':_0x5c9ed4};});_0x2f3c73[_0x471d5a(0xe4)]((_0x3d41f1,_0x42b3dc)=>{var _0x4cec66=_0x471d5a;_0x365f84[_0x42b3dc][_0x4cec66(0xf3)]=_0x3d41f1;}),_0x5b61e3[_0x471d5a(0xe4)]((_0x1288d5,_0x7d3a)=>{var _0x4a2318=_0x471d5a;_0x365f84[_0x7d3a][_0x4a2318(0x11f)]=_0x1288d5;}),_0x3ac48d[_0x471d5a(0xe4)]((_0x264139,_0x351eba)=>{var _0x54ce69=_0x471d5a;_0x365f84[_0x351eba][_0x54ce69(0x11c)]=_0x264139;}),_0x3b8124['forEach']((_0x1d4efc,_0x22bd67)=>{var _0x56fb93=_0x471d5a;_0x365f84[_0x22bd67][_0x56fb93(0xf6)]=_0x1d4efc;}),_0xca7632[_0x471d5a(0xe4)]((_0x49b908,_0x21d3c5)=>{var _0x575129=_0x471d5a;_0x365f84[_0x21d3c5][_0x575129(0x111)]=_0x49b908;}),_0x2391a8[_0x471d5a(0xe4)]((_0x2bc149,_0x38d98a)=>{_0x365f84[_0x38d98a]['return_qty']=_0x2bc149;}),_0x5a4a51[_0x471d5a(0xe4)]((_0x9afb60,_0x5d00ec)=>{var _0x7b75e5=_0x471d5a;_0x365f84[_0x5d00ec][_0x7b75e5(0xc2)]=_0x9afb60;}),_0x5a07e3['forEach']((_0x895526,_0x31dc58)=>{var _0x2bbee3=_0x471d5a;_0x365f84[_0x31dc58][_0x2bbee3(0x106)]=_0x895526;}),_0x48487d[_0x471d5a(0xe4)]((_0x210ac8,_0x13658a)=>{var _0x51da88=_0x471d5a;_0x365f84[_0x13658a][_0x51da88(0xe2)]=_0x210ac8;}),_0x292d96[_0x471d5a(0xe4)]((_0xb67cbe,_0x22f066)=>{var _0x272686=_0x471d5a;_0x365f84[_0x22f066][_0x272686(0x10c)]=_0xb67cbe;});var _0x574133=0x0;_0x365f84['forEach'](_0x4511f6=>{var _0x21d51a=_0x471d5a;console[_0x21d51a(0xba)]('foreach\x20newproduct',_0x4511f6),(parseInt(_0x4511f6[_0x21d51a(0xf6)])<parseInt(_0x4511f6[_0x21d51a(0x112)])||parseInt(_0x4511f6[_0x21d51a(0x111)])<parseInt(_0x4511f6[_0x21d51a(0x112)])&&parseInt(_0x4511f6['sale_qty'])>parseInt(_0x4511f6[_0x21d51a(0x112)])||parseInt(_0x4511f6['return_qty'])==0x0)&&_0x574133++;});if(_0x574133!=0x0)return _0x2f54b8[_0x471d5a(0xe8)](_0x471d5a(0xf1),_0x471d5a(0x121)),_0x14df4b['redirect'](_0x471d5a(0x107));_0x55b6d2['return_sale']['forEach'](_0x141036=>{var _0x2c65d7=_0x471d5a;const _0x172057=_0x5c5ddf[_0x2c65d7(0xf2)][_0x2c65d7(0x101)](_0x3c0a0c=>{var _0x5243de=_0x2c65d7;_0x3c0a0c[_0x5243de(0xd7)]==_0x141036[_0x5243de(0xd7)]&&_0x3c0a0c[_0x5243de(0x10c)]==_0x141036[_0x5243de(0x10c)]&&_0x3c0a0c[_0x5243de(0xe2)]==_0x141036[_0x5243de(0xe2)]&&_0x3c0a0c[_0x5243de(0x106)]==_0x141036[_0x5243de(0x106)]&&_0x3c0a0c[_0x5243de(0xc2)]==_0x141036[_0x5243de(0xc2)]&&(_0x3c0a0c['product_stock']=parseInt(_0x3c0a0c[_0x5243de(0xd6)])+parseInt(_0x141036[_0x5243de(0x112)]));});}),console[_0x471d5a(0xba)](_0x471d5a(0x109),_0x5c5ddf),await _0x5c5ddf[_0x471d5a(0xd8)](),_0x55b6d2[_0x471d5a(0xbf)]=_0x2a0aa3,_0x55b6d2[_0x471d5a(0xc1)]=_0x775476,_0x55b6d2[_0x471d5a(0xbe)]=_0x94acd7,_0x55b6d2[_0x471d5a(0x11d)]=_0x24e185,_0x55b6d2[_0x471d5a(0xdd)]=_0x365f84,_0x55b6d2['note']=_0x393ade,_0x55b6d2[_0x471d5a(0xf5)]=_0x26d13e,_0x55b6d2[_0x471d5a(0x12a)]=_0x924fb1;const _0x34bc45=await _0x55b6d2[_0x471d5a(0xd8)]();console[_0x471d5a(0xba)](_0x471d5a(0xec),_0x34bc45);const _0x185ece=await c_payment_data[_0x471d5a(0xc3)]({'invoice':_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0xbf)],'reason':_0x471d5a(0x11e)});_0x185ece['suppliers']=_0x2f54b8[_0x471d5a(0xfd)][_0x471d5a(0x125)],_0x185ece[_0x471d5a(0xbe)]=_0x2f54b8['body'][_0x471d5a(0xbe)],await _0x185ece[_0x471d5a(0xd8)](),_0x2f54b8['flash']('success','purchase\x20return\x20successfully'),_0x14df4b[_0x471d5a(0xd2)](_0x471d5a(0x126));}catch(_0x4549ad){console[_0x471d5a(0xba)](_0x4549ad),_0x14df4b[_0x471d5a(0xd5)](0xc8)[_0x471d5a(0x103)]({'message':_0x4549ad[_0x471d5a(0xcd)]});}}),router[a0_0x4d84dd(0xd0)]('/give_payment/:id',auth,async(_0x5d2f18,_0x1f86d8)=>{var _0x329de5=a0_0x4d84dd;try{const _0x5e1bb8=_0x5d2f18[_0x329de5(0xef)]['id'],{invoice:_0x5de795,customer:_0x5ae252,payable_to_customer:_0x289abd,paid_amount:_0x3ad304}=_0x5d2f18[_0x329de5(0xfd)],_0x12a7e8=await sales_return[_0x329de5(0xc7)](_0x5e1bb8);console[_0x329de5(0xba)](_0x329de5(0xfe),_0x12a7e8),console[_0x329de5(0xba)](_0x289abd),console[_0x329de5(0xba)](_0x3ad304);var _0x4a8553=_0x289abd-_0x3ad304;console['log']('subtract',_0x4a8553),_0x12a7e8['paid_amount']=parseFloat(_0x3ad304)+parseFloat(_0x12a7e8[_0x329de5(0xeb)]),_0x12a7e8[_0x329de5(0xf0)]=_0x4a8553,console['log'](_0x12a7e8);const _0x50c326=await _0x12a7e8[_0x329de5(0xd8)]();console[_0x329de5(0xba)](0x1b207);const _0x4e7d55=await c_payment_data[_0x329de5(0xc3)]({'invoice':_0x5d2f18[_0x329de5(0xfd)]['invoice'],'reason':_0x329de5(0x11e)});console['log'](_0x329de5(0x114),_0x4e7d55),_0x4e7d55[_0x329de5(0x10b)]=_0x4a8553,await _0x4e7d55[_0x329de5(0xd8)]();let _0x3c4676=new Date(),_0x757543=('0'+_0x3c4676[_0x329de5(0x129)]())[_0x329de5(0xfc)](-0x2),_0x4d3d34=('0'+(_0x3c4676[_0x329de5(0xf9)]()+0x1))['slice'](-0x2),_0x5080af=_0x3c4676[_0x329de5(0xce)](),_0xfc3bf3=_0x5080af+'-'+_0x4d3d34+'-'+_0x757543;const _0x474b92=new customer_payment({'invoice':_0x5de795,'date':_0x5080af+'-'+_0x4d3d34+'-'+_0x757543,'customer':_0x5ae252,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x3ad304}),_0x5468e7=await _0x474b92['save']();_0x5d2f18[_0x329de5(0xe8)]('success',_0x329de5(0xff)),_0x1f86d8['redirect'](_0x329de5(0x126));}catch(_0x4e1f17){console['log'](_0x4e1f17);}}),router['get']('/invoice/:id',auth,async(_0x131fca,_0x46d5e0)=>{var _0x1db683=a0_0x4d84dd;try{const {username:_0x384e4e,email:_0x154b2c,role:_0x1b50c1}=_0x131fca[_0x1db683(0x127)],_0x21a2a7=_0x131fca['user'],_0x42d44d=await profile[_0x1db683(0xc3)]({'email':_0x21a2a7['email']}),_0x1fe2b4=await master_shop['find']();console[_0x1db683(0xba)](_0x1db683(0x11a),_0x1fe2b4);const _0x2e63fa=_0x131fca['params']['id'],_0x58d750=await sales_return[_0x1db683(0xc7)](_0x2e63fa);console[_0x1db683(0xba)](_0x58d750);const _0x43e811=await customer['findOne']({'name':_0x58d750[_0x1db683(0xc1)]});console[_0x1db683(0xba)](_0x43e811);if(_0x1fe2b4[0x0][_0x1db683(0x120)]==_0x1db683(0xbc)){var _0x106fd7=users[_0x1db683(0xd1)];console[_0x1db683(0xba)](_0x106fd7);}else{if(_0x1fe2b4[0x0][_0x1db683(0x120)]==_0x1db683(0x108))var _0x106fd7=users[_0x1db683(0x108)];else{if(_0x1fe2b4[0x0]['language']==_0x1db683(0xda))var _0x106fd7=users[_0x1db683(0xda)];else{if(_0x1fe2b4[0x0][_0x1db683(0x120)]=='Spanish')var _0x106fd7=users['Spanish'];else{if(_0x1fe2b4[0x0][_0x1db683(0x120)]==_0x1db683(0x116))var _0x106fd7=users['French'];else{if(_0x1fe2b4[0x0]['language']==_0x1db683(0xd4))var _0x106fd7=users[_0x1db683(0x124)];else{if(_0x1fe2b4[0x0][_0x1db683(0x120)]==_0x1db683(0x104))var _0x106fd7=users[_0x1db683(0x104)];else{if(_0x1fe2b4[0x0][_0x1db683(0x120)]==_0x1db683(0x10d))var _0x106fd7=users[_0x1db683(0xdc)];}}}}}}}_0x46d5e0['render'](_0x1db683(0x10a),{'success':_0x131fca['flash']('success'),'errors':_0x131fca[_0x1db683(0xe8)](_0x1db683(0xf1)),'role':_0x21a2a7,'profile':_0x42d44d,'master_shop':_0x1fe2b4,'customers':_0x43e811,'sales':_0x58d750,'language':_0x106fd7});}catch(_0x1d6e47){console[_0x1db683(0xba)](_0x1d6e47);}}),module[a0_0x4d84dd(0x10f)]=router;