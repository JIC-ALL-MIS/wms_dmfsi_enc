var a0_0x35df88=a0_0x54b8;(function(_0x1050db,_0x4c45c7){var _0x138460=a0_0x54b8,_0x1923b4=_0x1050db();while(!![]){try{var _0x5c7175=parseInt(_0x138460(0x18c))/0x1+parseInt(_0x138460(0x1a7))/0x2*(parseInt(_0x138460(0x187))/0x3)+-parseInt(_0x138460(0x18e))/0x4*(-parseInt(_0x138460(0x13b))/0x5)+parseInt(_0x138460(0x169))/0x6*(-parseInt(_0x138460(0x15b))/0x7)+-parseInt(_0x138460(0x139))/0x8*(parseInt(_0x138460(0x1ab))/0x9)+parseInt(_0x138460(0x182))/0xa+-parseInt(_0x138460(0x19f))/0xb;if(_0x5c7175===_0x4c45c7)break;else _0x1923b4['push'](_0x1923b4['shift']());}catch(_0x5224a2){_0x1923b4['push'](_0x1923b4['shift']());}}}(a0_0x1885,0x75efa));function a0_0x54b8(_0x461f48,_0x3eae7b){var _0x1885b8=a0_0x1885();return a0_0x54b8=function(_0x54b849,_0x492fcc){_0x54b849=_0x54b849-0x136;var _0x45d8f1=_0x1885b8[_0x54b849];return _0x45d8f1;},a0_0x54b8(_0x461f48,_0x3eae7b);}function a0_0x1885(){var _0x5dcff8=['Portuguese\x20(BR)','85295SCWaao','stocks','Portuguese','slice','/view/:id','product_code_hide','params','product_details','$product_details.type','$discount','$_id','$invoice','$supplier_docs.email','product_name','$date','return_purchase_invoice','invoice','$name','email','find','amount','$return_product.product_name','Arabic','to_warehouse_name','level','note','suppliers','get','$note','date','Received\x20For\x20Purchase\x20Return','English','679uZbRiA','to_room','getFullYear','Hindi','purchase\x20return\x20successfully','$product_details.product_code','Arabic\x20(ae)','pallet','bay','success','../middleware/auth','status','secondary_code','Chinese','28722saxFfZ','isle','../public/language/languages.json','$product_details.secondary_code','bin','$product_details.bay','primary_code_hide','purchases_return','findById','$return_product','stock_quantity','received','type','$received','product_code','/invoice/:id','exports','/purchases_return/view','body','$return_product.return_qty','$receivable','forEach','Purchase\x20Return','Spanish','primary_code','6313660nlpMUI','return_qty','name','return_product','return_purchase_edit','18VtWoGm','$product_details','flash','render','purchase_quantity','71563vTpEQR','errors','112OzsqOB','save','redirect','product_stock','language','$product_details.bin','map','final','getMonth','master','log','user','floorlevel','post','express','Enabled','findOne','773091CTCHUj','foreach\x20newproduct','$product_details.primary_code','room','English\x20(US)','French','$product_details.rack','German','30298VoBdBo','stock_data','$product_details.product_name','Router','2284101lhhqoM','$product_details.storage','$total_amount','string','aggregate','8ktiZmm'];a0_0x1885=function(){return _0x5dcff8;};return a0_0x1885();}const express=require(a0_0x35df88(0x19c)),app=express(),router=express[a0_0x35df88(0x1aa)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,suppliers_payment,s_payment_data}=require('../models/all_models'),auth=require(a0_0x35df88(0x165)),users=require(a0_0x35df88(0x16b));router[a0_0x35df88(0x156)]('/view',auth,async(_0x30fd68,_0x89e301)=>{var _0x4bfef1=a0_0x35df88;try{const {username:_0x112e1d,email:_0x5d2826,role:_0x37945b}=_0x30fd68[_0x4bfef1(0x199)],_0x539f4f=_0x30fd68['user'],_0xce78fe=await profile[_0x4bfef1(0x19e)]({'email':_0x539f4f[_0x4bfef1(0x14d)]}),_0x11146a=await master_shop[_0x4bfef1(0x14e)]();console[_0x4bfef1(0x198)](_0x4bfef1(0x197),_0x11146a);const _0x18fcc3=await purchases_return[_0x4bfef1(0x138)]([{'$lookup':{'from':_0x4bfef1(0x155),'localField':_0x4bfef1(0x155),'foreignField':_0x4bfef1(0x184),'as':'supplier_docs'}},{'$unwind':_0x4bfef1(0x172)},{'$unwind':'$supplier_docs'},{'$group':{'_id':_0x4bfef1(0x145),'invoice':{'$first':_0x4bfef1(0x146)},'date':{'$first':_0x4bfef1(0x149)},'suppliers':{'$first':'$suppliers'},'warehouse_name':{'$first':'$warehouse_name'},'product_name':{'$first':_0x4bfef1(0x150)},'return_qty':{'$first':'$return_product.return_qty'},'price':{'$first':'$return_product.price'},'total':{'$sum':'$return_product.total'},'note':{'$first':_0x4bfef1(0x157)},'total_amount':{'$first':_0x4bfef1(0x136)},'discount':{'$first':_0x4bfef1(0x144)},'receivable':{'$first':_0x4bfef1(0x17d)},'received':{'$first':_0x4bfef1(0x176)},'due_amount':{'$first':'$due_amount'},'mobile':{'$first':'$supplier_docs.mobile'},'email':{'$first':_0x4bfef1(0x147)},'address':{'$first':'$supplier_docs.address'},'return_sum_qty':{'$sum':_0x4bfef1(0x17c)}}}]);console[_0x4bfef1(0x198)](_0x18fcc3);if(_0x11146a[0x0][_0x4bfef1(0x192)]==_0x4bfef1(0x1a3)){var _0x456033=users['English'];console[_0x4bfef1(0x198)](_0x456033);}else{if(_0x11146a[0x0]['language']==_0x4bfef1(0x15e))var _0x456033=users[_0x4bfef1(0x15e)];else{if(_0x11146a[0x0][_0x4bfef1(0x192)]==_0x4bfef1(0x1a6))var _0x456033=users[_0x4bfef1(0x1a6)];else{if(_0x11146a[0x0][_0x4bfef1(0x192)]==_0x4bfef1(0x180))var _0x456033=users[_0x4bfef1(0x180)];else{if(_0x11146a[0x0][_0x4bfef1(0x192)]==_0x4bfef1(0x1a4))var _0x456033=users[_0x4bfef1(0x1a4)];else{if(_0x11146a[0x0]['language']==_0x4bfef1(0x13a))var _0x456033=users[_0x4bfef1(0x13d)];else{if(_0x11146a[0x0]['language']=='Chinese')var _0x456033=users[_0x4bfef1(0x168)];else{if(_0x11146a[0x0]['language']==_0x4bfef1(0x161))var _0x456033=users[_0x4bfef1(0x151)];}}}}}}}_0x89e301[_0x4bfef1(0x18a)](_0x4bfef1(0x170),{'success':_0x30fd68['flash'](_0x4bfef1(0x164)),'errors':_0x30fd68[_0x4bfef1(0x189)]('errors'),'role':_0x539f4f,'profile':_0xce78fe,'master_shop':_0x11146a,'user':_0x18fcc3,'language':_0x456033});}catch(_0x3a7ce3){console[_0x4bfef1(0x198)](_0x3a7ce3);}}),router['get'](a0_0x35df88(0x13f),auth,async(_0x1dc47f,_0xbbe531)=>{var _0x385230=a0_0x35df88;try{const {username:_0x1b0c6d,email:_0x146001,role:_0x251d6b}=_0x1dc47f[_0x385230(0x199)],_0x419e67=_0x1dc47f[_0x385230(0x199)],_0x47eece=await profile[_0x385230(0x19e)]({'email':_0x419e67[_0x385230(0x14d)]}),_0x3b271e=await product[_0x385230(0x14e)]({}),_0x2fb92b=await master_shop[_0x385230(0x14e)]();console[_0x385230(0x198)](_0x385230(0x197),_0x2fb92b),console['log'](_0x1dc47f[_0x385230(0x17b)]);const _0x2ec9e6=_0x1dc47f[_0x385230(0x141)]['id'],_0x400049=await purchases_return[_0x385230(0x171)](_0x2ec9e6);console[_0x385230(0x198)](_0x400049);const _0x10013b=await warehouse[_0x385230(0x138)]([{'$match':{'name':_0x400049['warehouse_name'],'room':_0x400049[_0x385230(0x1a2)]}},{'$unwind':_0x385230(0x188)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x385230(0x1a9)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x385230(0x16e)},'bin':{'$first':_0x385230(0x193)},'type':{'$first':_0x385230(0x143)},'floorlevel':{'$first':'$product_details.floorlevel'},'primary_code':{'$first':_0x385230(0x1a1)},'secondary_code':{'$first':_0x385230(0x16c)},'product_code':{'$first':_0x385230(0x160)},'storage':{'$first':_0x385230(0x1ac)},'rack':{'$first':_0x385230(0x1a5)}}}]);warehouse_data=await warehouse[_0x385230(0x138)]([{'$match':{'status':_0x385230(0x19d),'name':'Return\x20Goods','warehouse_category':'Raw\x20Materials'}},{'$group':{'_id':'$name','name':{'$first':_0x385230(0x14c)}}},{'$sort':{'name':0x1}}]),console[_0x385230(0x198)](_0x385230(0x1a8),_0x10013b);if(_0x2fb92b[0x0]['language']=='English\x20(US)'){var _0x59575d=users[_0x385230(0x15a)];console[_0x385230(0x198)](_0x59575d);}else{if(_0x2fb92b[0x0]['language']==_0x385230(0x15e))var _0x59575d=users[_0x385230(0x15e)];else{if(_0x2fb92b[0x0]['language']=='German')var _0x59575d=users['German'];else{if(_0x2fb92b[0x0][_0x385230(0x192)]==_0x385230(0x180))var _0x59575d=users['Spanish'];else{if(_0x2fb92b[0x0][_0x385230(0x192)]==_0x385230(0x1a4))var _0x59575d=users[_0x385230(0x1a4)];else{if(_0x2fb92b[0x0][_0x385230(0x192)]=='Portuguese\x20(BR)')var _0x59575d=users[_0x385230(0x13d)];else{if(_0x2fb92b[0x0][_0x385230(0x192)]==_0x385230(0x168))var _0x59575d=users[_0x385230(0x168)];else{if(_0x2fb92b[0x0][_0x385230(0x192)]==_0x385230(0x161))var _0x59575d=users[_0x385230(0x151)];}}}}}}}_0xbbe531[_0x385230(0x18a)](_0x385230(0x186),{'success':_0x1dc47f[_0x385230(0x189)](_0x385230(0x164)),'errors':_0x1dc47f[_0x385230(0x189)](_0x385230(0x18d)),'role':_0x419e67,'master_shop':_0x2fb92b,'profile':_0x47eece,'user':_0x400049,'stock':_0x10013b,'product':_0x3b271e,'language':_0x59575d,'warehouse':warehouse_data});}catch(_0x526801){console['log'](_0x526801);}}),router[a0_0x35df88(0x19b)]('/view/:id',auth,async(_0x3e15ac,_0x22eebc)=>{var _0xb7a88=a0_0x35df88;try{const _0x450795=_0x3e15ac['params']['id'];console[_0xb7a88(0x198)](_0x450795);const _0x6541=await purchases_return[_0xb7a88(0x19e)]({'invoice':_0x3e15ac[_0xb7a88(0x17b)]['invoice']});console[_0xb7a88(0x198)]('old_data',_0x6541);const _0x24dbf6=await warehouse[_0xb7a88(0x19e)]({'name':_0x6541[_0xb7a88(0x152)],'room':_0x6541[_0xb7a88(0x15c)]});console[_0xb7a88(0x198)]('old_warehouse_data',_0x24dbf6);const {invoice:_0x6f98e6,suppliers:_0x558df0,date:_0x202d83,warehouse_name:_0x3eb191,product_name:_0x137327,purchase_quantity:_0x39ac47,stocks:_0x1e02a2,return_qty:_0x5e0cd6,note:_0x12664e,Room_name:_0x35778b,level:_0x44b969,isle:_0x265377,pallet:_0x32bc0a,to_warehouse_name:_0x35725f,to_Room_name:_0x42b54f}=_0x3e15ac[_0xb7a88(0x17b)];if(typeof _0x137327==_0xb7a88(0x137))var _0x1b36ff=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x148)]],_0x293934=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x18b)]],_0x17642f=[_0x3e15ac['body'][_0xb7a88(0x13c)]],_0x14c5a5=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x183)]],_0x48c6c4=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x153)]],_0xa0498b=[_0x3e15ac[_0xb7a88(0x17b)]['isle']],_0x6e9f1d=[_0x3e15ac['body']['pallet']],_0x50a3d5=[_0x3e15ac[_0xb7a88(0x17b)]['types']],_0x5ebbb1=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x140)]],_0x14d5d2=[_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x16f)]],_0x15bdd0=[_0x3e15ac[_0xb7a88(0x17b)]['secondary_code_hide']];else var _0x1b36ff=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x148)]],_0x293934=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x18b)]],_0x17642f=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x13c)]],_0x14c5a5=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x183)]],_0x48c6c4=[..._0x3e15ac[_0xb7a88(0x17b)]['level']],_0xa0498b=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x16a)]],_0x6e9f1d=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x162)]],_0x5ebbb1=[..._0x3e15ac['body']['product_code_hide']],_0x14d5d2=[..._0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x16f)]],_0x15bdd0=[..._0x3e15ac[_0xb7a88(0x17b)]['secondary_code_hide']],_0x50a3d5=[..._0x3e15ac[_0xb7a88(0x17b)]['types']];const _0x17349d=_0x1b36ff[_0xb7a88(0x194)](_0x5d60a1=>{return _0x5d60a1={'product_name':_0x5d60a1};});_0x293934[_0xb7a88(0x17e)]((_0x1f938c,_0x1c3d01)=>{var _0x21ccda=_0xb7a88;_0x17349d[_0x1c3d01][_0x21ccda(0x18b)]=_0x1f938c;}),_0x17642f[_0xb7a88(0x17e)]((_0x4391e2,_0x317a0a)=>{var _0x363a67=_0xb7a88;_0x17349d[_0x317a0a][_0x363a67(0x173)]=_0x4391e2;}),_0x14c5a5[_0xb7a88(0x17e)]((_0x202e96,_0x218011)=>{_0x17349d[_0x218011]['return_qty']=_0x202e96;}),_0x48c6c4[_0xb7a88(0x17e)]((_0x27cf66,_0xacdd45)=>{var _0xac0079=_0xb7a88;_0x17349d[_0xacdd45][_0xac0079(0x163)]=_0x27cf66;}),_0xa0498b['forEach']((_0x150c49,_0x16b64c)=>{var _0x57a2ed=_0xb7a88;_0x17349d[_0x16b64c][_0x57a2ed(0x16d)]=_0x150c49;}),_0x6e9f1d[_0xb7a88(0x17e)]((_0x3fa059,_0x2b01f3)=>{_0x17349d[_0x2b01f3]['floorlevel']=_0x3fa059;}),_0x5ebbb1[_0xb7a88(0x17e)]((_0x1472f1,_0x54b22f)=>{var _0x36704c=_0xb7a88;_0x17349d[_0x54b22f][_0x36704c(0x177)]=_0x1472f1;}),_0x14d5d2[_0xb7a88(0x17e)]((_0x4e029b,_0x92d65d)=>{var _0x462c6f=_0xb7a88;_0x17349d[_0x92d65d][_0x462c6f(0x181)]=_0x4e029b;}),_0x15bdd0['forEach']((_0x32d6b7,_0xa8437f)=>{var _0x25f161=_0xb7a88;_0x17349d[_0xa8437f][_0x25f161(0x167)]=_0x32d6b7;}),_0x50a3d5[_0xb7a88(0x17e)]((_0x6ba67,_0x4ba226)=>{_0x17349d[_0x4ba226]['type']=_0x6ba67;});var _0x4687b5=0x0;_0x17349d[_0xb7a88(0x17e)](_0x42423a=>{var _0x399803=_0xb7a88;console['log'](_0x399803(0x1a0),_0x42423a),(parseInt(_0x42423a[_0x399803(0x18b)])<parseInt(_0x42423a['return_qty'])||parseInt(_0x42423a[_0x399803(0x173)])<parseInt(_0x42423a[_0x399803(0x183)])||parseInt(_0x42423a[_0x399803(0x183)])==0x0)&&_0x4687b5++;});if(_0x4687b5!=0x0)return _0x3e15ac[_0xb7a88(0x189)]('errors','Must\x20not\x20be\x20greater\x20than\x20Purchase/Stock\x20Qty'),_0x22eebc[_0xb7a88(0x190)]('back');_0x6541['return_product'][_0xb7a88(0x17e)](_0x448a12=>{var _0x3d9097=_0xb7a88;const _0x3becc5=_0x24dbf6[_0x3d9097(0x142)][_0x3d9097(0x194)](_0x56c044=>{var _0x62c2f8=_0x3d9097;_0x56c044[_0x62c2f8(0x148)]==_0x448a12[_0x62c2f8(0x148)]&&_0x56c044[_0x62c2f8(0x19a)]==_0x448a12[_0x62c2f8(0x19a)]&&_0x56c044[_0x62c2f8(0x175)]==_0x448a12[_0x62c2f8(0x175)]&&_0x56c044[_0x62c2f8(0x16d)]==_0x448a12[_0x62c2f8(0x16d)]&&_0x56c044[_0x62c2f8(0x163)]==_0x448a12[_0x62c2f8(0x163)]&&(_0x56c044[_0x62c2f8(0x191)]=parseInt(_0x56c044[_0x62c2f8(0x191)])+parseInt(_0x448a12[_0x62c2f8(0x183)]));});}),console[_0xb7a88(0x198)]('old_warehouse_data',_0x24dbf6),await _0x24dbf6[_0xb7a88(0x18f)](),_0x6541['invoice']=_0x6f98e6,_0x6541['suppliers']=_0x558df0,_0x6541[_0xb7a88(0x158)]=_0x202d83,_0x6541['warehouse_name']=_0x3eb191,_0x6541[_0xb7a88(0x185)]=_0x17349d,_0x6541[_0xb7a88(0x154)]=_0x12664e,_0x6541[_0xb7a88(0x1a2)]=_0x35778b,_0x6541[_0xb7a88(0x152)]=_0x35725f,_0x6541[_0xb7a88(0x15c)]=_0x42b54f;const _0x24506b=await _0x6541[_0xb7a88(0x18f)](),_0x3ff8e7=await purchases_return['findOne']({'invoice':_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x14b)]}),_0x31adea=await warehouse['findOne']({'name':_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x152)],'room':_0x3e15ac[_0xb7a88(0x17b)]['to_Room_name']});_0x3ff8e7['return_product'][_0xb7a88(0x17e)](_0x1e33f4=>{var _0x483aee=_0xb7a88;_0x31adea[_0x483aee(0x142)][_0x483aee(0x194)](_0x4e358e=>{var _0x30888f=_0x483aee;_0x4e358e[_0x30888f(0x148)]==_0x1e33f4[_0x30888f(0x148)]&&_0x4e358e[_0x30888f(0x162)]==_0x1e33f4[_0x30888f(0x162)]&&(_0x4e358e[_0x30888f(0x191)]=parseInt(_0x4e358e[_0x30888f(0x191)])-parseInt(_0x1e33f4[_0x30888f(0x183)]),console[_0x30888f(0x198)]('product_details.return_qtyproduct_details.return_qty',_0x1e33f4[_0x30888f(0x183)]));});}),console[_0xb7a88(0x198)](_0xb7a88(0x195),_0x31adea),await _0x31adea['save']();const _0x1310f4=await s_payment_data[_0xb7a88(0x19e)]({'invoice':_0x3e15ac[_0xb7a88(0x17b)][_0xb7a88(0x14b)],'reason':'Purchase\x20Return'});await _0x1310f4[_0xb7a88(0x18f)](),_0x3e15ac[_0xb7a88(0x189)]('success',_0xb7a88(0x15f)),_0x22eebc[_0xb7a88(0x190)](_0xb7a88(0x17a));}catch(_0x1eda6c){console[_0xb7a88(0x198)](_0x1eda6c),_0x22eebc[_0xb7a88(0x166)](0xc8)['json']({'message':_0x1eda6c['message']});}}),router[a0_0x35df88(0x156)](a0_0x35df88(0x178),auth,async(_0x1814e0,_0x2b504f)=>{var _0x1aebd4=a0_0x35df88;try{const {username:_0x3c75bd,email:_0x2a4fcd,role:_0x1b12e7}=_0x1814e0['user'],_0x470092=_0x1814e0[_0x1aebd4(0x199)],_0x1042c4=await profile['findOne']({'email':_0x470092['email']}),_0x2e885c=await master_shop[_0x1aebd4(0x14e)]();console[_0x1aebd4(0x198)](_0x1aebd4(0x197),_0x2e885c);const _0x4e9acb=_0x1814e0[_0x1aebd4(0x141)]['id'],_0x54045b=await purchases_return['findById'](_0x4e9acb);console[_0x1aebd4(0x198)](_0x54045b);const _0x514af6=await suppliers[_0x1aebd4(0x19e)]({'name':_0x54045b[_0x1aebd4(0x155)]});console[_0x1aebd4(0x198)](_0x514af6);if(_0x2e885c[0x0][_0x1aebd4(0x192)]==_0x1aebd4(0x1a3)){var _0x4a03c1=users[_0x1aebd4(0x15a)];console[_0x1aebd4(0x198)](_0x4a03c1);}else{if(_0x2e885c[0x0]['language']==_0x1aebd4(0x15e))var _0x4a03c1=users['Hindi'];else{if(_0x2e885c[0x0][_0x1aebd4(0x192)]==_0x1aebd4(0x1a6))var _0x4a03c1=users[_0x1aebd4(0x1a6)];else{if(_0x2e885c[0x0][_0x1aebd4(0x192)]==_0x1aebd4(0x180))var _0x4a03c1=users['Spanish'];else{if(_0x2e885c[0x0][_0x1aebd4(0x192)]=='French')var _0x4a03c1=users['French'];else{if(_0x2e885c[0x0][_0x1aebd4(0x192)]=='Portuguese\x20(BR)')var _0x4a03c1=users[_0x1aebd4(0x13d)];else{if(_0x2e885c[0x0][_0x1aebd4(0x192)]=='Chinese')var _0x4a03c1=users[_0x1aebd4(0x168)];else{if(_0x2e885c[0x0]['language']==_0x1aebd4(0x161))var _0x4a03c1=users[_0x1aebd4(0x151)];}}}}}}}_0x2b504f['render'](_0x1aebd4(0x14a),{'success':_0x1814e0[_0x1aebd4(0x189)]('success'),'errors':_0x1814e0[_0x1aebd4(0x189)](_0x1aebd4(0x18d)),'role':_0x470092,'profile':_0x1042c4,'master_shop':_0x2e885c,'supplier':_0x514af6,'purchase':_0x54045b,'language':_0x4a03c1});}catch(_0x360ce5){console[_0x1aebd4(0x198)](_0x360ce5);}}),router[a0_0x35df88(0x19b)]('/receive_payment/:id',auth,async(_0x538d48,_0x588864)=>{var _0x4d2667=a0_0x35df88;try{const _0x5a8af4=_0x538d48[_0x4d2667(0x141)]['id'],{invoice:_0x269705,suppliers:_0x56ce43,receivable_amount:_0x30a742,received_amount:_0x32b720}=_0x538d48['body'],_0x3a39e9=await purchases_return[_0x4d2667(0x171)](_0x5a8af4);console[_0x4d2667(0x198)](_0x3a39e9);var _0x27e64d=_0x30a742-_0x32b720;console[_0x4d2667(0x198)](_0x32b720),_0x3a39e9[_0x4d2667(0x174)]=parseFloat(_0x32b720)+parseFloat(_0x3a39e9[_0x4d2667(0x174)]),_0x3a39e9['due_amount']=_0x27e64d,console['log'](_0x3a39e9);const _0xdcff02=await _0x3a39e9[_0x4d2667(0x18f)](),_0x18d133=await s_payment_data[_0x4d2667(0x19e)]({'invoice':_0x538d48['body'][_0x4d2667(0x14b)],'reason':_0x4d2667(0x17f)});_0x18d133[_0x4d2667(0x14f)]=_0x27e64d,await _0x18d133[_0x4d2667(0x18f)]();let _0x7351d6=new Date(),_0xc443a3=('0'+_0x7351d6['getDate']())[_0x4d2667(0x13e)](-0x2),_0x3553b8=('0'+(_0x7351d6[_0x4d2667(0x196)]()+0x1))[_0x4d2667(0x13e)](-0x2),_0x3d7ceb=_0x7351d6[_0x4d2667(0x15d)](),_0x3986e2=_0x3d7ceb+'-'+_0x3553b8+'-'+_0xc443a3;const _0x4f1217=new suppliers_payment({'invoice':_0x269705,'date':_0x3d7ceb+'-'+_0x3553b8+'-'+_0xc443a3,'suppliers':_0x56ce43,'reason':_0x4d2667(0x159),'amount':_0x32b720}),_0x238608=await _0x4f1217[_0x4d2667(0x18f)]();_0x538d48[_0x4d2667(0x189)]('success','payment\x20successfull'),_0x588864[_0x4d2667(0x190)]('/purchases_return/view');}catch(_0x4a78c5){console[_0x4d2667(0x198)](_0x4a78c5);}}),module[a0_0x35df88(0x179)]=router;