var a0_0x242344=a0_0xe433;(function(_0x161364,_0x1b2900){var _0x21f457=a0_0xe433,_0x5d88ca=_0x161364();while(!![]){try{var _0xe8d556=parseInt(_0x21f457(0x209))/0x1*(-parseInt(_0x21f457(0x1df))/0x2)+-parseInt(_0x21f457(0x1f3))/0x3+parseInt(_0x21f457(0x1d5))/0x4+-parseInt(_0x21f457(0x1d3))/0x5*(parseInt(_0x21f457(0x23d))/0x6)+-parseInt(_0x21f457(0x213))/0x7*(-parseInt(_0x21f457(0x21a))/0x8)+parseInt(_0x21f457(0x221))/0x9*(-parseInt(_0x21f457(0x1ec))/0xa)+parseInt(_0x21f457(0x22b))/0xb;if(_0xe8d556===_0x1b2900)break;else _0x5d88ca['push'](_0x5d88ca['shift']());}catch(_0x224133){_0x5d88ca['push'](_0x5d88ca['shift']());}}}(a0_0x272c,0x6d417));const express=require(a0_0x242344(0x1d8)),app=express(),router=express[a0_0x242344(0x21d)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x242344(0x1eb)),auth=require(a0_0x242344(0x215)),users=require(a0_0x242344(0x1d2));function a0_0xe433(_0x40fd0f,_0x3a4a6b){var _0x272c40=a0_0x272c();return a0_0xe433=function(_0xe4337b,_0x3d61d8){_0xe4337b=_0xe4337b-0x1cf;var _0x50a3b4=_0x272c40[_0xe4337b];return _0x50a3b4;},a0_0xe433(_0x40fd0f,_0x3a4a6b);}router[a0_0x242344(0x1f0)](a0_0x242344(0x1d7),auth,async(_0x528e15,_0x41edaa)=>{var _0x2ff83e=a0_0x242344;try{const {username:_0x1fa880,email:_0x3bb9b4,role:_0x80e17b}=_0x528e15[_0x2ff83e(0x20f)],_0x1ac064=_0x528e15['user'],_0x5538cc=await profile[_0x2ff83e(0x212)]({'email':_0x1ac064[_0x2ff83e(0x243)]}),_0x459bd5=await master_shop[_0x2ff83e(0x1e8)]();console[_0x2ff83e(0x240)]('master',_0x459bd5);const _0x11e22a=await sales_return[_0x2ff83e(0x1ea)]([{'$lookup':{'from':_0x2ff83e(0x1f1),'localField':_0x2ff83e(0x23e),'foreignField':_0x2ff83e(0x1ee),'as':_0x2ff83e(0x21e)}},{'$unwind':_0x2ff83e(0x1e9)}]);console['log']('all_data',_0x11e22a);if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x1fd)){var _0x798cf6=users[_0x2ff83e(0x211)];console[_0x2ff83e(0x240)](_0x798cf6);}else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x239))var _0x798cf6=users[_0x2ff83e(0x239)];else{if(_0x459bd5[0x0]['language']=='German')var _0x798cf6=users['German'];else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x20c))var _0x798cf6=users[_0x2ff83e(0x20c)];else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x233))var _0x798cf6=users['French'];else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x1ff))var _0x798cf6=users[_0x2ff83e(0x206)];else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]==_0x2ff83e(0x1da))var _0x798cf6=users[_0x2ff83e(0x1da)];else{if(_0x459bd5[0x0][_0x2ff83e(0x1d9)]=='Arabic\x20(ae)')var _0x798cf6=users['Arabic'];}}}}}}}_0x41edaa[_0x2ff83e(0x1e0)](_0x2ff83e(0x234),{'success':_0x528e15['flash'](_0x2ff83e(0x21b)),'errors':_0x528e15[_0x2ff83e(0x1fa)]('errors'),'role':_0x1ac064,'profile':_0x5538cc,'master_shop':_0x459bd5,'user':_0x11e22a,'language':_0x798cf6});}catch(_0x2abcad){console['log'](_0x2abcad);}}),router[a0_0x242344(0x1f0)]('/view/:id',auth,async(_0x205456,_0xecd020)=>{var _0xf1390a=a0_0x242344;try{const {username:_0xe6029d,email:_0x1189d7,role:_0x28ec20}=_0x205456[_0xf1390a(0x20f)],_0x4953ab=_0x205456['user'],_0x1d3aeb=await profile['findOne']({'email':_0x4953ab['email']}),_0x2bbd01=await master_shop[_0xf1390a(0x1e8)]();console[_0xf1390a(0x240)](_0xf1390a(0x228),_0x2bbd01);const _0x41030d=_0x205456[_0xf1390a(0x21c)]['id'];console[_0xf1390a(0x240)](_0x41030d);var _0x453d81=[_0xf1390a(0x225)];const _0x27ebb2=await sales_return[_0xf1390a(0x1fc)](_0x41030d),_0x522065=await warehouse[_0xf1390a(0x1ea)]([{'$match':{'name':_0x27ebb2[_0xf1390a(0x20b)],'room':_0x27ebb2[_0xf1390a(0x232)]}},{'$unwind':_0xf1390a(0x222)},{'$group':{'_id':_0xf1390a(0x1e6),'name':{'$first':_0xf1390a(0x1ed)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':'$product_details.bay'},'bin':{'$first':'$product_details.bin'},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0xf1390a(0x226)},'primary_code':{'$first':_0xf1390a(0x21f)},'secondary_code':{'$first':_0xf1390a(0x231)},'product_code':{'$first':_0xf1390a(0x1de)},'storage':{'$first':_0xf1390a(0x237)},'rack':{'$first':_0xf1390a(0x1f4)}}}]);console[_0xf1390a(0x240)](_0x522065);const _0x2035f=await warehouse['aggregate']([{'$match':{'status':_0xf1390a(0x23b),'name':_0xf1390a(0x203),'warehouse_category':_0xf1390a(0x201)}},{'$group':{'_id':'$name','name':{'$first':_0xf1390a(0x1ef)}}},{'$sort':{'name':0x1}}]),_0x37c972=await product[_0xf1390a(0x1e8)]({});if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]=='English\x20(US)'){var _0x823c84=users[_0xf1390a(0x211)];console[_0xf1390a(0x240)](_0x823c84);}else{if(_0x2bbd01[0x0]['language']==_0xf1390a(0x239))var _0x823c84=users[_0xf1390a(0x239)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]==_0xf1390a(0x1db))var _0x823c84=users[_0xf1390a(0x1db)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]==_0xf1390a(0x20c))var _0x823c84=users[_0xf1390a(0x20c)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]=='French')var _0x823c84=users[_0xf1390a(0x233)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]==_0xf1390a(0x1ff))var _0x823c84=users[_0xf1390a(0x206)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]=='Chinese')var _0x823c84=users[_0xf1390a(0x1da)];else{if(_0x2bbd01[0x0][_0xf1390a(0x1d9)]==_0xf1390a(0x230))var _0x823c84=users['Arabic'];}}}}}}}_0xecd020[_0xf1390a(0x1e0)](_0xf1390a(0x208),{'success':_0x205456[_0xf1390a(0x1fa)]('success'),'errors':_0x205456[_0xf1390a(0x1fa)]('errors'),'role':_0x4953ab,'profile':_0x1d3aeb,'master_shop':_0x2bbd01,'user':_0x27ebb2,'stock':_0x522065,'unit':_0x37c972,'language':_0x823c84,'warehouses':_0x2035f,'rooms':_0x453d81});}catch(_0x2eae0f){console[_0xf1390a(0x240)](_0x2eae0f);}}),router[a0_0x242344(0x224)](a0_0x242344(0x20d),auth,async(_0x4a7f33,_0x473c8d)=>{var _0x559392=a0_0x242344;try{const _0x5171f=_0x4a7f33[_0x559392(0x21c)]['id'];console[_0x559392(0x240)](_0x5171f);const _0x18b7ad=await sales_return[_0x559392(0x212)]({'invoice':_0x4a7f33[_0x559392(0x22a)][_0x559392(0x235)]});console['log'](_0x559392(0x207),_0x18b7ad);const _0x11c96f=await warehouse[_0x559392(0x212)]({'name':_0x18b7ad[_0x559392(0x20b)],'room':_0x18b7ad[_0x559392(0x232)]});console[_0x559392(0x240)](_0x559392(0x205),_0x11c96f);const {invoice:_0x2a7faf,customer:_0x41698a,date:_0xbd88d6,warehouse_name:_0x57c399,product_name:_0x323978,primary_code:_0x5d0fb3,secondary_code:_0x2c118f,product_code:_0xeaba23,sales_quantity:_0x4a9704,stocks:_0x22299f,return_qty:_0x158caf,note:_0x18f2d0,to_warehouse_name:_0x53651e,to_Room_name:_0x79be3}=_0x4a7f33[_0x559392(0x22a)];console[_0x559392(0x240)](_0x4a7f33['body']);if(typeof _0x323978==_0x559392(0x20e))var _0x4583d7=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x1d0)]],_0x7f7794=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x1f8)]],_0x3e8a36=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x23f)]],_0xc3dc29=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x1cf)]],_0x50de9a=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x229)]],_0x3c1f36=[_0x4a7f33[_0x559392(0x22a)]['stocks']],_0x2fe25c=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x217)]],_0x9437e=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x241)]],_0x2fe7e1=[_0x4a7f33['body'][_0x559392(0x200)]],_0x4721b5=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x1f6)]],_0x3a00f7=[_0x4a7f33[_0x559392(0x22a)][_0x559392(0x1f9)]];else var _0x4583d7=[..._0x4a7f33[_0x559392(0x22a)][_0x559392(0x1d0)]],_0x7f7794=[..._0x4a7f33['body'][_0x559392(0x1f8)]],_0x3e8a36=[..._0x4a7f33[_0x559392(0x22a)][_0x559392(0x23f)]],_0xc3dc29=[..._0x4a7f33[_0x559392(0x22a)]['product_code']],_0x50de9a=[..._0x4a7f33[_0x559392(0x22a)]['sales_quantity']],_0x3c1f36=[..._0x4a7f33['body']['stocks']],_0x2fe25c=[..._0x4a7f33[_0x559392(0x22a)]['return_qty']],_0x9437e=[..._0x4a7f33[_0x559392(0x22a)]['bay']],_0x2fe7e1=[..._0x4a7f33['body']['bin']],_0x4721b5=[..._0x4a7f33[_0x559392(0x22a)][_0x559392(0x1f6)]],_0x3a00f7=[..._0x4a7f33[_0x559392(0x22a)][_0x559392(0x1f9)]];const _0x2258f4=_0x4583d7[_0x559392(0x23a)](_0x5ac9ca=>{return _0x5ac9ca={'product_name':_0x5ac9ca};});_0x7f7794[_0x559392(0x1e1)]((_0x8b9123,_0x3e1af8)=>{_0x2258f4[_0x3e1af8]['primary_code']=_0x8b9123;}),_0x3e8a36[_0x559392(0x1e1)]((_0x5b0f71,_0x57488e)=>{var _0x2cf036=_0x559392;_0x2258f4[_0x57488e][_0x2cf036(0x23f)]=_0x5b0f71;}),_0xc3dc29[_0x559392(0x1e1)]((_0x5b9a24,_0xd81143)=>{var _0x41b785=_0x559392;_0x2258f4[_0xd81143][_0x41b785(0x1cf)]=_0x5b9a24;}),_0x50de9a['forEach']((_0x896850,_0x4bbf17)=>{var _0x551e3c=_0x559392;_0x2258f4[_0x4bbf17][_0x551e3c(0x214)]=_0x896850;}),_0x3c1f36[_0x559392(0x1e1)]((_0x4f61d5,_0x469345)=>{_0x2258f4[_0x469345]['stock']=_0x4f61d5;}),_0x2fe25c[_0x559392(0x1e1)]((_0x21f55b,_0x515d20)=>{var _0x3d8b26=_0x559392;_0x2258f4[_0x515d20][_0x3d8b26(0x217)]=_0x21f55b;}),_0x9437e[_0x559392(0x1e1)]((_0x2eb8fb,_0xa71f3d)=>{var _0x21295e=_0x559392;_0x2258f4[_0xa71f3d][_0x21295e(0x241)]=_0x2eb8fb;}),_0x2fe7e1[_0x559392(0x1e1)]((_0x1b1021,_0x2ecaaa)=>{_0x2258f4[_0x2ecaaa]['bin']=_0x1b1021;}),_0x4721b5[_0x559392(0x1e1)]((_0x1ae9e6,_0x5713f3)=>{_0x2258f4[_0x5713f3]['type']=_0x1ae9e6;}),_0x3a00f7[_0x559392(0x1e1)]((_0x6e9cf5,_0x51bfda)=>{var _0x1c6b33=_0x559392;_0x2258f4[_0x51bfda][_0x1c6b33(0x1f9)]=_0x6e9cf5;});var _0x6e6899=0x0;_0x2258f4[_0x559392(0x1e1)](_0x63dbcd=>{var _0x2aaf73=_0x559392;console[_0x2aaf73(0x240)](_0x2aaf73(0x1d1),_0x63dbcd),(parseInt(_0x63dbcd['sale_qty'])<parseInt(_0x63dbcd[_0x2aaf73(0x217)])||parseInt(_0x63dbcd[_0x2aaf73(0x22d)])<parseInt(_0x63dbcd['return_qty'])&&parseInt(_0x63dbcd['sale_qty'])>parseInt(_0x63dbcd[_0x2aaf73(0x217)])||parseInt(_0x63dbcd[_0x2aaf73(0x217)])==0x0)&&_0x6e6899++;});if(_0x6e6899!=0x0)return _0x4a7f33[_0x559392(0x1fa)](_0x559392(0x218),_0x559392(0x227)),_0x473c8d[_0x559392(0x1d6)](_0x559392(0x1d4));_0x18b7ad[_0x559392(0x1e5)]['forEach'](_0x26127e=>{var _0x160ecc=_0x559392;const _0x1ed2b6=_0x11c96f[_0x160ecc(0x1dc)][_0x160ecc(0x23a)](_0x3a0a1b=>{var _0x3ed6ca=_0x160ecc;_0x3a0a1b[_0x3ed6ca(0x1d0)]==_0x26127e[_0x3ed6ca(0x1d0)]&&_0x3a0a1b[_0x3ed6ca(0x1f9)]==_0x26127e[_0x3ed6ca(0x1f9)]&&_0x3a0a1b[_0x3ed6ca(0x1fe)]==_0x26127e[_0x3ed6ca(0x1fe)]&&_0x3a0a1b[_0x3ed6ca(0x200)]==_0x26127e[_0x3ed6ca(0x200)]&&_0x3a0a1b[_0x3ed6ca(0x241)]==_0x26127e[_0x3ed6ca(0x241)]&&(_0x3a0a1b[_0x3ed6ca(0x22e)]=parseInt(_0x3a0a1b[_0x3ed6ca(0x22e)])+parseInt(_0x26127e['return_qty']));});}),console['log'](_0x559392(0x205),_0x11c96f),await _0x11c96f[_0x559392(0x220)](),_0x18b7ad[_0x559392(0x235)]=_0x2a7faf,_0x18b7ad[_0x559392(0x23e)]=_0x41698a,_0x18b7ad[_0x559392(0x23c)]=_0xbd88d6,_0x18b7ad['warehouse_name']=_0x57c399,_0x18b7ad[_0x559392(0x1e5)]=_0x2258f4,_0x18b7ad[_0x559392(0x219)]=_0x18f2d0,_0x18b7ad['ToWarehouse']=_0x53651e,_0x18b7ad[_0x559392(0x232)]=_0x79be3;const _0x244f3a=await _0x18b7ad[_0x559392(0x220)]();console['log']('new\x20new_data',_0x244f3a);const _0x1c733b=await c_payment_data['findOne']({'invoice':_0x4a7f33[_0x559392(0x22a)][_0x559392(0x235)],'reason':_0x559392(0x22c)});_0x1c733b[_0x559392(0x210)]=_0x4a7f33[_0x559392(0x22a)][_0x559392(0x210)],_0x1c733b['date']=_0x4a7f33['body'][_0x559392(0x23c)],await _0x1c733b[_0x559392(0x220)](),_0x4a7f33['flash']('success','purchase\x20return\x20successfully'),_0x473c8d[_0x559392(0x1d6)]('/sales_return/view');}catch(_0x273807){console[_0x559392(0x240)](_0x273807),_0x473c8d[_0x559392(0x1e7)](0xc8)[_0x559392(0x202)]({'message':_0x273807[_0x559392(0x1e3)]});}}),router['post'](a0_0x242344(0x1f2),auth,async(_0x459097,_0x1293a4)=>{var _0x47276e=a0_0x242344;try{const _0x1e79d1=_0x459097[_0x47276e(0x21c)]['id'],{invoice:_0x1dfe34,customer:_0x579caf,payable_to_customer:_0x20feae,paid_amount:_0x3d27e1}=_0x459097[_0x47276e(0x22a)],_0x16d78a=await sales_return['findById'](_0x1e79d1);console['log'](_0x47276e(0x1dd),_0x16d78a),console[_0x47276e(0x240)](_0x20feae),console['log'](_0x3d27e1);var _0x4c4251=_0x20feae-_0x3d27e1;console['log']('subtract',_0x4c4251),_0x16d78a[_0x47276e(0x22f)]=parseFloat(_0x3d27e1)+parseFloat(_0x16d78a[_0x47276e(0x22f)]),_0x16d78a['due_amount']=_0x4c4251,console[_0x47276e(0x240)](_0x16d78a);const _0x47b76e=await _0x16d78a[_0x47276e(0x220)]();console[_0x47276e(0x240)](0x1b207);const _0x45452a=await c_payment_data['findOne']({'invoice':_0x459097[_0x47276e(0x22a)][_0x47276e(0x235)],'reason':_0x47276e(0x22c)});console[_0x47276e(0x240)](_0x47276e(0x236),_0x45452a),_0x45452a[_0x47276e(0x1f7)]=_0x4c4251,await _0x45452a[_0x47276e(0x220)]();let _0x5172aa=new Date(),_0x542578=('0'+_0x5172aa[_0x47276e(0x1f5)]())[_0x47276e(0x1e2)](-0x2),_0x1533ad=('0'+(_0x5172aa['getMonth']()+0x1))[_0x47276e(0x1e2)](-0x2),_0x269508=_0x5172aa[_0x47276e(0x242)](),_0x21ce49=_0x269508+'-'+_0x1533ad+'-'+_0x542578;const _0x3240d6=new customer_payment({'invoice':_0x1dfe34,'date':_0x269508+'-'+_0x1533ad+'-'+_0x542578,'customer':_0x579caf,'reason':_0x47276e(0x1fb),'amount':_0x3d27e1}),_0x3788ee=await _0x3240d6[_0x47276e(0x220)]();_0x459097['flash']('success',_0x47276e(0x216)),_0x1293a4[_0x47276e(0x1d6)](_0x47276e(0x1e4));}catch(_0x5c9930){console[_0x47276e(0x240)](_0x5c9930);}}),router['get'](a0_0x242344(0x20a),auth,async(_0x391f8,_0x47b2b8)=>{var _0x3b6893=a0_0x242344;try{const {username:_0x3b0229,email:_0x1828d8,role:_0x392276}=_0x391f8[_0x3b6893(0x20f)],_0x326b98=_0x391f8[_0x3b6893(0x20f)],_0x568391=await profile[_0x3b6893(0x212)]({'email':_0x326b98[_0x3b6893(0x243)]}),_0x30e882=await master_shop[_0x3b6893(0x1e8)]();console['log'](_0x3b6893(0x228),_0x30e882);const _0x311504=_0x391f8[_0x3b6893(0x21c)]['id'],_0x391bfd=await sales_return[_0x3b6893(0x1fc)](_0x311504);console[_0x3b6893(0x240)](_0x391bfd);const _0x3d5786=await customer['findOne']({'name':_0x391bfd[_0x3b6893(0x23e)]});console[_0x3b6893(0x240)](_0x3d5786);if(_0x30e882[0x0]['language']==_0x3b6893(0x1fd)){var _0x2f2f2e=users[_0x3b6893(0x211)];console[_0x3b6893(0x240)](_0x2f2f2e);}else{if(_0x30e882[0x0][_0x3b6893(0x1d9)]==_0x3b6893(0x239))var _0x2f2f2e=users['Hindi'];else{if(_0x30e882[0x0]['language']=='German')var _0x2f2f2e=users[_0x3b6893(0x1db)];else{if(_0x30e882[0x0]['language']==_0x3b6893(0x20c))var _0x2f2f2e=users[_0x3b6893(0x20c)];else{if(_0x30e882[0x0][_0x3b6893(0x1d9)]==_0x3b6893(0x233))var _0x2f2f2e=users['French'];else{if(_0x30e882[0x0][_0x3b6893(0x1d9)]==_0x3b6893(0x1ff))var _0x2f2f2e=users[_0x3b6893(0x206)];else{if(_0x30e882[0x0][_0x3b6893(0x1d9)]=='Chinese')var _0x2f2f2e=users[_0x3b6893(0x1da)];else{if(_0x30e882[0x0][_0x3b6893(0x1d9)]==_0x3b6893(0x230))var _0x2f2f2e=users[_0x3b6893(0x238)];}}}}}}}_0x47b2b8[_0x3b6893(0x1e0)](_0x3b6893(0x223),{'success':_0x391f8['flash'](_0x3b6893(0x21b)),'errors':_0x391f8[_0x3b6893(0x1fa)](_0x3b6893(0x218)),'role':_0x326b98,'profile':_0x568391,'master_shop':_0x30e882,'customers':_0x3d5786,'sales':_0x391bfd,'language':_0x2f2f2e});}catch(_0x2a92c5){console[_0x3b6893(0x240)](_0x2a92c5);}}),module[a0_0x242344(0x204)]=router;function a0_0x272c(){var _0x11c5ad=['$product_details.rack','getDate','types','amount','primary_code','floorlevel','flash','Returned\x20Payment\x20For\x20Sale\x20Return','findById','English\x20(US)','type','Portuguese\x20(BR)','bin','Raw\x20Materials','json','Return\x20Goods','exports','old_warehouse_data','Portuguese','old_data','return_sale_edit','50leZalm','/invoice/:id','ToWarehouse','Spanish','/view/:id','string','user','suppliers','English','findOne','7mWMOTC','sale_qty','../middleware/auth','payment\x20successfull','return_qty','errors','note','2801728IfaVrJ','success','params','Router','customer_docs','$product_details.primary_code','save','9BjnZOW','$product_details','sales_return_invoice','post','Return\x20Rooms','$product_details.floorlevel','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','master','sales_quantity','body','22011946jTOFhp','Sale\x20Return','stock','product_stock','paid_amount','Arabic\x20(ae)','$product_details.secondary_code','ToRoom','French','sales_return','invoice','c_payment','$product_details.storage','Arabic','Hindi','map','Enabled','date','3374958poFtRf','customer','secondary_code','log','bay','getFullYear','email','product_code','product_name','foreach\x20newproduct','../public/language/languages.json','5zhLTKU','back','29376IYOQoj','redirect','/view','express','language','Chinese','German','product_details','data','$product_details.product_code','25478ulmFKP','render','forEach','slice','message','/sales_return/view','return_sale','$product_details._id','status','find','$customer_docs','aggregate','../models/all_models','3121060gqqmkp','$product_details.product_name','name','$name','get','customers','/give_payment/:id','1198758DLEomS'];a0_0x272c=function(){return _0x11c5ad;};return a0_0x272c();}