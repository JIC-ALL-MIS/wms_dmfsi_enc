function a0_0x397b(_0x222e33,_0x239c68){var _0x3365ee=a0_0x3365();return a0_0x397b=function(_0x397b8d,_0x3c9a32){_0x397b8d=_0x397b8d-0x1f0;var _0x1fa451=_0x3365ee[_0x397b8d];return _0x1fa451;},a0_0x397b(_0x222e33,_0x239c68);}var a0_0x5427e0=a0_0x397b;(function(_0xcb8332,_0x54bf4a){var _0x1ab37d=a0_0x397b,_0x289d7b=_0xcb8332();while(!![]){try{var _0x1edd4a=parseInt(_0x1ab37d(0x24f))/0x1*(-parseInt(_0x1ab37d(0x21a))/0x2)+-parseInt(_0x1ab37d(0x20a))/0x3+-parseInt(_0x1ab37d(0x21b))/0x4+parseInt(_0x1ab37d(0x241))/0x5*(-parseInt(_0x1ab37d(0x1f1))/0x6)+-parseInt(_0x1ab37d(0x247))/0x7*(parseInt(_0x1ab37d(0x254))/0x8)+parseInt(_0x1ab37d(0x258))/0x9*(parseInt(_0x1ab37d(0x248))/0xa)+parseInt(_0x1ab37d(0x233))/0xb;if(_0x1edd4a===_0x54bf4a)break;else _0x289d7b['push'](_0x289d7b['shift']());}catch(_0xe85983){_0x289d7b['push'](_0x289d7b['shift']());}}}(a0_0x3365,0x2ea80));function a0_0x3365(){var _0x1a7363=['$customer_docs','types','for_categorize','redirect','return_sale_QA','34252kkvmBs','bin','params','new\x20new_data','/invoice/:id','16sseakQ','suppliers','slice','../models/all_models','4941eUXBVv','customer_docs','Returned\x20Payment\x20For\x20Sale\x20Return','stock','$product_details.primary_code','Chinese','Spanish','errors','Sale\x20Return','type','email','English\x20(US)','return_qty_QA','data','render','paid_amount','due_amount','/view/:id','product_name_QA','get','c_payment','Enabled','save','102UggSLF','product_stock','subtract','Hindi','post','$product_details.bin','QA\x20Warehouse','log','exports','Portuguese\x20(BR)','date','$product_details.type','language','name','warehouse_name','stocks_QA','floorlevel','$product_details.product_name','getDate','foreach\x20newproduct','stocks','success','sales_return_finished','$product_details.storage','secondary_code','723585MJMVyJ','getMonth','product_code','return_sale','French','express','findById','/view','/give_payment/:id','$product_details.product_stock','payment\x20successfull','/sales_return/view','body','product_name','German','invoice','12YvnpTI','281912pkSHyC','amount','old_warehouse_data','purchase\x20return\x20successfully','Arabic','ToWarehouse','status','English','find','sales_return_invoice','$product_details','findOne','/sales_return_finished/view','Router','aggregate','sales_quantity_QA','map','sale_qty','product_details','customer','Portuguese','product_code_QA','$product_details.rack','flash','7364445nmASSQ','ToRoom','sales_quantity','Arabic\x20(ae)','note','../middleware/auth','$product_details.floorlevel','$product_details.bay','primary_code_QA','forEach','bay','master','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','return_qty','17795cPaBOH','string','$name','primary_code','Return\x20Rooms','json','826497sbcWDY','6110Gereih','user'];a0_0x3365=function(){return _0x1a7363;};return a0_0x3365();}const express=require(a0_0x5427e0(0x20f)),app=express(),router=express[a0_0x5427e0(0x228)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data,sales_return_finished}=require(a0_0x5427e0(0x257)),auth=require(a0_0x5427e0(0x238)),users=require('../public/language/languages.json');router[a0_0x5427e0(0x26b)](a0_0x5427e0(0x211),auth,async(_0x1bb487,_0x5ab160)=>{var _0x5abefb=a0_0x5427e0;try{const {username:_0x479054,email:_0xd0d6df,role:_0x40f35f}=_0x1bb487[_0x5abefb(0x249)],_0x385299=_0x1bb487[_0x5abefb(0x249)],_0xb022e2=await profile[_0x5abefb(0x226)]({'email':_0x385299['email']}),_0x4b702f=await master_shop[_0x5abefb(0x223)](),_0x306bbc=await sales_return_finished['aggregate']([{'$lookup':{'from':'customers','localField':'customer','foreignField':_0x5abefb(0x1fe),'as':_0x5abefb(0x259)}},{'$unwind':_0x5abefb(0x24a)}]);if(_0x4b702f[0x0][_0x5abefb(0x1fd)]==_0x5abefb(0x263)){var _0x1ab584=users[_0x5abefb(0x222)];console[_0x5abefb(0x1f8)](_0x1ab584);}else{if(_0x4b702f[0x0][_0x5abefb(0x1fd)]==_0x5abefb(0x1f4))var _0x1ab584=users[_0x5abefb(0x1f4)];else{if(_0x4b702f[0x0]['language']==_0x5abefb(0x218))var _0x1ab584=users[_0x5abefb(0x218)];else{if(_0x4b702f[0x0]['language']==_0x5abefb(0x25e))var _0x1ab584=users['Spanish'];else{if(_0x4b702f[0x0][_0x5abefb(0x1fd)]==_0x5abefb(0x20e))var _0x1ab584=users[_0x5abefb(0x20e)];else{if(_0x4b702f[0x0][_0x5abefb(0x1fd)]==_0x5abefb(0x1fa))var _0x1ab584=users[_0x5abefb(0x22f)];else{if(_0x4b702f[0x0][_0x5abefb(0x1fd)]==_0x5abefb(0x25d))var _0x1ab584=users[_0x5abefb(0x25d)];else{if(_0x4b702f[0x0]['language']==_0x5abefb(0x236))var _0x1ab584=users[_0x5abefb(0x21f)];}}}}}}}_0x5ab160['render'](_0x5abefb(0x207),{'success':_0x1bb487['flash'](_0x5abefb(0x206)),'errors':_0x1bb487['flash'](_0x5abefb(0x25f)),'role':_0x385299,'profile':_0xb022e2,'master_shop':_0x4b702f,'user':_0x306bbc,'language':_0x1ab584});}catch(_0x62e350){console['log'](_0x62e350);}}),router['get']('/view/:id',auth,async(_0x4ed3ab,_0xa1fd48)=>{var _0x21b1e6=a0_0x5427e0;try{const {username:_0x1b7fe6,email:_0x1b794b,role:_0x39d12f}=_0x4ed3ab[_0x21b1e6(0x249)],_0x456bf3=_0x4ed3ab['user'],_0x30bd0c=await profile[_0x21b1e6(0x226)]({'email':_0x456bf3[_0x21b1e6(0x262)]}),_0x22e322=await master_shop[_0x21b1e6(0x223)]();console[_0x21b1e6(0x1f8)](_0x21b1e6(0x23e),_0x22e322);const _0xab1ace=_0x4ed3ab[_0x21b1e6(0x251)]['id'];console['log'](_0xab1ace);var _0x56192f=[_0x21b1e6(0x245)];const _0x598112=await sales_return_finished[_0x21b1e6(0x210)](_0xab1ace),_0x3a8fa2=await warehouse[_0x21b1e6(0x229)]([{'$match':{'name':_0x598112[_0x21b1e6(0x220)],'room':_0x598112['ToRoom']}},{'$unwind':_0x21b1e6(0x225)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x21b1e6(0x202)},'product_stock':{'$first':_0x21b1e6(0x213)},'bay':{'$first':_0x21b1e6(0x23a)},'bin':{'$first':_0x21b1e6(0x1f6)},'type':{'$first':_0x21b1e6(0x1fc)},'floorlevel':{'$first':_0x21b1e6(0x239)},'primary_code':{'$first':_0x21b1e6(0x25c)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x21b1e6(0x208)},'rack':{'$first':_0x21b1e6(0x231)}}}]);console['log'](_0x3a8fa2);const _0x372ca0=await warehouse['aggregate']([{'$match':{'status':'Enabled','warehouse_category':'Finished\x20Goods'}},{'$group':{'_id':_0x21b1e6(0x243),'name':{'$first':_0x21b1e6(0x243)}}},{'$sort':{'name':0x1}}]),_0x50c99a=await warehouse[_0x21b1e6(0x229)]([{'$match':{'status':_0x21b1e6(0x26d),'name':_0x21b1e6(0x1f7)}},{'$group':{'_id':_0x21b1e6(0x243),'name':{'$first':_0x21b1e6(0x243)}}},{'$sort':{'name':0x1}}]),_0x25b3b7=await product[_0x21b1e6(0x223)]({});if(_0x22e322[0x0][_0x21b1e6(0x1fd)]=='English\x20(US)'){var _0x4bf776=users[_0x21b1e6(0x222)];console[_0x21b1e6(0x1f8)](_0x4bf776);}else{if(_0x22e322[0x0]['language']==_0x21b1e6(0x1f4))var _0x4bf776=users[_0x21b1e6(0x1f4)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]==_0x21b1e6(0x218))var _0x4bf776=users[_0x21b1e6(0x218)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]==_0x21b1e6(0x25e))var _0x4bf776=users[_0x21b1e6(0x25e)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]==_0x21b1e6(0x20e))var _0x4bf776=users[_0x21b1e6(0x20e)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]=='Portuguese\x20(BR)')var _0x4bf776=users[_0x21b1e6(0x22f)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]=='Chinese')var _0x4bf776=users[_0x21b1e6(0x25d)];else{if(_0x22e322[0x0][_0x21b1e6(0x1fd)]==_0x21b1e6(0x236))var _0x4bf776=users[_0x21b1e6(0x21f)];}}}}}}}_0xa1fd48[_0x21b1e6(0x266)]('return_sale_edit_finished',{'success':_0x4ed3ab['flash'](_0x21b1e6(0x206)),'errors':_0x4ed3ab[_0x21b1e6(0x232)]('errors'),'role':_0x456bf3,'profile':_0x30bd0c,'master_shop':_0x22e322,'user':_0x598112,'stock':_0x3a8fa2,'unit':_0x25b3b7,'language':_0x4bf776,'warehouses':_0x372ca0,'rooms':_0x56192f,'warehouse_QA':_0x50c99a});}catch(_0x2c42cf){console['log'](_0x2c42cf);}}),router[a0_0x5427e0(0x1f5)](a0_0x5427e0(0x269),auth,async(_0x3398c6,_0x124b6a)=>{var _0x1d961e=a0_0x5427e0;if(_0x3398c6['body'][_0x1d961e(0x24c)]=='QA')try{const _0x5f0fe2=_0x3398c6['params']['id'],_0x591b17=await sales_return[_0x1d961e(0x226)]({'invoice':_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x219)]}),_0x142a92=await warehouse[_0x1d961e(0x226)]({'name':_0x591b17['ToWarehouse'],'room':_0x591b17[_0x1d961e(0x234)]}),{invoice:_0x34ab02,customer:_0x17aeda,date:_0x4c9029,warehouse_name:_0x549f1a,product_name:_0x15113a,primary_code:_0x35dffc,secondary_code:_0x1306bf,product_code:_0x12b377,sales_quantity:_0x5b766d,stocks:_0x4b6117,return_qty:_0x56aac0,note:_0x43987f,to_warehouse_name_QA:_0x1105aa,to_Room_name_QA:_0x203028}=_0x3398c6[_0x1d961e(0x216)];if(typeof product_name_QA==_0x1d961e(0x242))var _0x4ee751=[_0x3398c6[_0x1d961e(0x216)]['product_name_QA']],_0x9e768f=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x23b)]],_0x14c8e8=[_0x3398c6[_0x1d961e(0x216)]['secondary_code_QA']],_0x4db2ca=[_0x3398c6['body'][_0x1d961e(0x230)]],_0x863c2=[_0x3398c6['body'][_0x1d961e(0x22a)]],_0x5807ca=[_0x3398c6['body'][_0x1d961e(0x200)]],_0x402e95=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x264)]];else var _0x4ee751=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x26a)]],_0x9e768f=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x23b)]],_0x14c8e8=[..._0x3398c6[_0x1d961e(0x216)]['secondary_code_QA']],_0x4db2ca=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x230)]],_0x863c2=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x22a)]],_0x5807ca=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x200)]],_0x402e95=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x264)]];const _0x85a380=_0x4ee751[_0x1d961e(0x22b)](_0x8e1ce8=>{return _0x8e1ce8={'product_name':_0x8e1ce8};});_0x9e768f[_0x1d961e(0x23c)]((_0x335639,_0x277035)=>{var _0x4d9f98=_0x1d961e;_0x85a380[_0x277035][_0x4d9f98(0x244)]=_0x335639;}),_0x14c8e8['forEach']((_0x1f1ce4,_0x5176ed)=>{_0x85a380[_0x5176ed]['secondary_code']=_0x1f1ce4;}),_0x4db2ca[_0x1d961e(0x23c)]((_0x288890,_0xbe9ea5)=>{var _0x248651=_0x1d961e;_0x85a380[_0xbe9ea5][_0x248651(0x20c)]=_0x288890;}),_0x863c2[_0x1d961e(0x23c)]((_0x3e0d55,_0x4c2093)=>{var _0x5eef66=_0x1d961e;_0x85a380[_0x4c2093][_0x5eef66(0x22c)]=_0x3e0d55;}),_0x5807ca[_0x1d961e(0x23c)]((_0x4b0b70,_0x313332)=>{var _0x264b6f=_0x1d961e;_0x85a380[_0x313332][_0x264b6f(0x25b)]=_0x4b0b70;}),_0x402e95[_0x1d961e(0x23c)]((_0x1abb4d,_0x2d1601)=>{var _0x19439f=_0x1d961e;_0x85a380[_0x2d1601][_0x19439f(0x240)]=_0x1abb4d;}),_0x591b17[_0x1d961e(0x24e)][_0x1d961e(0x23c)](_0x2fe4a8=>{var _0x3b4b15=_0x1d961e;const _0x1d1f64=_0x142a92[_0x3b4b15(0x22d)][_0x3b4b15(0x22b)](_0x117c57=>{var _0x1505cc=_0x3b4b15;_0x117c57[_0x1505cc(0x217)]==_0x2fe4a8[_0x1505cc(0x217)]&&(_0x117c57[_0x1505cc(0x1f2)]=parseInt(_0x117c57[_0x1505cc(0x1f2)])+parseInt(_0x2fe4a8['return_qty']));});}),await _0x142a92['save'](),_0x591b17[_0x1d961e(0x219)]=_0x34ab02,_0x591b17[_0x1d961e(0x22e)]=_0x17aeda,_0x591b17[_0x1d961e(0x1fb)]=_0x4c9029,_0x591b17[_0x1d961e(0x1ff)]=_0x549f1a,_0x591b17[_0x1d961e(0x24e)]=_0x85a380,_0x591b17[_0x1d961e(0x237)]=_0x43987f,_0x591b17[_0x1d961e(0x220)]=_0x1105aa,_0x591b17[_0x1d961e(0x234)]=_0x203028;const _0x3afeb0=await _0x591b17[_0x1d961e(0x1f0)](),_0x592fd3=await c_payment_data[_0x1d961e(0x226)]({'invoice':_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x219)],'reason':_0x1d961e(0x260)});_0x592fd3['suppliers']=_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x255)],_0x592fd3[_0x1d961e(0x1fb)]=_0x3398c6[_0x1d961e(0x216)]['date'],await _0x592fd3[_0x1d961e(0x1f0)](),_0x3398c6['flash'](_0x1d961e(0x206),_0x1d961e(0x21e)),_0x124b6a[_0x1d961e(0x24d)](_0x1d961e(0x227));}catch(_0x312cce){console[_0x1d961e(0x1f8)](_0x312cce),_0x124b6a[_0x1d961e(0x221)](0xc8)[_0x1d961e(0x246)]({'message':_0x312cce['message']});}else try{const _0x430a21=_0x3398c6[_0x1d961e(0x251)]['id'];console[_0x1d961e(0x1f8)](_0x430a21);const _0xcba46e=await sales_return[_0x1d961e(0x226)]({'invoice':_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x219)]});console['log']('old_data',_0xcba46e);const _0x2dae77=await warehouse[_0x1d961e(0x226)]({'name':_0xcba46e[_0x1d961e(0x220)],'room':_0xcba46e[_0x1d961e(0x234)]});console[_0x1d961e(0x1f8)]('old_warehouse_data',_0x2dae77);const {invoice:_0x2de441,customer:_0x2de0b0,date:_0x40e8b9,warehouse_name:_0x3861ee,product_name:_0x4fc452,primary_code:_0x5e59c7,secondary_code:_0x1e1a60,product_code:_0x51c558,sales_quantity:_0x412802,stocks:_0x50edca,return_qty:_0x56d85d,note:_0x51bfd7,to_warehouse_name:_0x523725,to_Room_name:_0x46d3a3}=_0x3398c6[_0x1d961e(0x216)];console[_0x1d961e(0x1f8)](_0x3398c6[_0x1d961e(0x216)]);if(typeof _0x4fc452==_0x1d961e(0x242))var _0x4ee751=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x217)]],_0x9e768f=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x244)]],_0x14c8e8=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x209)]],_0x4db2ca=[_0x3398c6[_0x1d961e(0x216)]['product_code']],_0x863c2=[_0x3398c6[_0x1d961e(0x216)]['sales_quantity']],_0x5807ca=[_0x3398c6['body']['stocks']],_0x402e95=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x240)]],_0x92f255=[_0x3398c6[_0x1d961e(0x216)]['bay']],_0x53327f=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x250)]],_0x3aec09=[_0x3398c6[_0x1d961e(0x216)]['types']],_0xf57172=[_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x201)]];else var _0x4ee751=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x217)]],_0x9e768f=[..._0x3398c6[_0x1d961e(0x216)]['primary_code']],_0x14c8e8=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x209)]],_0x4db2ca=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x20c)]],_0x863c2=[..._0x3398c6['body'][_0x1d961e(0x235)]],_0x5807ca=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x205)]],_0x402e95=[..._0x3398c6['body'][_0x1d961e(0x240)]],_0x92f255=[..._0x3398c6[_0x1d961e(0x216)]['bay']],_0x53327f=[..._0x3398c6['body'][_0x1d961e(0x250)]],_0x3aec09=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x24b)]],_0xf57172=[..._0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x201)]];const _0x23f196=_0x4ee751[_0x1d961e(0x22b)](_0x198d66=>{return _0x198d66={'product_name':_0x198d66};});_0x9e768f[_0x1d961e(0x23c)]((_0x1aa7a8,_0x1705b3)=>{_0x23f196[_0x1705b3]['primary_code']=_0x1aa7a8;}),_0x14c8e8[_0x1d961e(0x23c)]((_0x115a0d,_0x129079)=>{_0x23f196[_0x129079]['secondary_code']=_0x115a0d;}),_0x4db2ca[_0x1d961e(0x23c)]((_0x43e2e8,_0x3b253c)=>{var _0x44ab2e=_0x1d961e;_0x23f196[_0x3b253c][_0x44ab2e(0x20c)]=_0x43e2e8;}),_0x863c2['forEach']((_0xb379d6,_0x21c660)=>{var _0x2b84d3=_0x1d961e;_0x23f196[_0x21c660][_0x2b84d3(0x22c)]=_0xb379d6;}),_0x5807ca['forEach']((_0x492eb7,_0xd10d20)=>{var _0x11d937=_0x1d961e;_0x23f196[_0xd10d20][_0x11d937(0x25b)]=_0x492eb7;}),_0x402e95[_0x1d961e(0x23c)]((_0x34e977,_0x40fc1a)=>{var _0x3b7e20=_0x1d961e;_0x23f196[_0x40fc1a][_0x3b7e20(0x240)]=_0x34e977;}),_0x92f255[_0x1d961e(0x23c)]((_0x11e822,_0x1d6910)=>{var _0x13a8db=_0x1d961e;_0x23f196[_0x1d6910][_0x13a8db(0x23d)]=_0x11e822;}),_0x53327f[_0x1d961e(0x23c)]((_0xba046,_0x2c70d2)=>{var _0x403cfd=_0x1d961e;_0x23f196[_0x2c70d2][_0x403cfd(0x250)]=_0xba046;}),_0x3aec09[_0x1d961e(0x23c)]((_0x554903,_0x50c286)=>{var _0x427ac5=_0x1d961e;_0x23f196[_0x50c286][_0x427ac5(0x261)]=_0x554903;}),_0xf57172[_0x1d961e(0x23c)]((_0x545145,_0x21130b)=>{_0x23f196[_0x21130b]['floorlevel']=_0x545145;});var _0x49456b=0x0;_0x23f196[_0x1d961e(0x23c)](_0x437e09=>{var _0x3b0f15=_0x1d961e;console[_0x3b0f15(0x1f8)](_0x3b0f15(0x204),_0x437e09),(parseInt(_0x437e09[_0x3b0f15(0x22c)])<parseInt(_0x437e09[_0x3b0f15(0x240)])||parseInt(_0x437e09['stock'])<parseInt(_0x437e09[_0x3b0f15(0x240)])&&parseInt(_0x437e09[_0x3b0f15(0x22c)])>parseInt(_0x437e09[_0x3b0f15(0x240)])||parseInt(_0x437e09['return_qty'])==0x0)&&_0x49456b++;});if(_0x49456b!=0x0)return _0x3398c6[_0x1d961e(0x232)](_0x1d961e(0x25f),_0x1d961e(0x23f)),_0x124b6a['redirect']('back');_0xcba46e[_0x1d961e(0x20d)][_0x1d961e(0x23c)](_0x14b778=>{var _0x378e99=_0x1d961e;const _0x3f9d71=_0x2dae77[_0x378e99(0x22d)][_0x378e99(0x22b)](_0x5b8c2c=>{var _0x487ec6=_0x378e99;_0x5b8c2c[_0x487ec6(0x217)]==_0x14b778[_0x487ec6(0x217)]&&_0x5b8c2c[_0x487ec6(0x201)]==_0x14b778[_0x487ec6(0x201)]&&_0x5b8c2c[_0x487ec6(0x261)]==_0x14b778[_0x487ec6(0x261)]&&_0x5b8c2c[_0x487ec6(0x250)]==_0x14b778[_0x487ec6(0x250)]&&_0x5b8c2c[_0x487ec6(0x23d)]==_0x14b778[_0x487ec6(0x23d)]&&(_0x5b8c2c[_0x487ec6(0x1f2)]=parseInt(_0x5b8c2c[_0x487ec6(0x1f2)])+parseInt(_0x14b778[_0x487ec6(0x240)]));});}),console[_0x1d961e(0x1f8)](_0x1d961e(0x21d),_0x2dae77),await _0x2dae77['save'](),_0xcba46e[_0x1d961e(0x219)]=_0x2de441,_0xcba46e[_0x1d961e(0x22e)]=_0x2de0b0,_0xcba46e[_0x1d961e(0x1fb)]=_0x40e8b9,_0xcba46e[_0x1d961e(0x1ff)]=_0x3861ee,_0xcba46e[_0x1d961e(0x20d)]=_0x23f196,_0xcba46e[_0x1d961e(0x237)]=_0x51bfd7,_0xcba46e['ToWarehouse']=_0x523725,_0xcba46e[_0x1d961e(0x234)]=_0x46d3a3;const _0x28d5ae=await _0xcba46e['save']();console[_0x1d961e(0x1f8)](_0x1d961e(0x252),_0x28d5ae);const _0x3cbc23=await c_payment_data['findOne']({'invoice':_0x3398c6[_0x1d961e(0x216)][_0x1d961e(0x219)],'reason':_0x1d961e(0x260)});_0x3cbc23['suppliers']=_0x3398c6[_0x1d961e(0x216)]['suppliers'],_0x3cbc23[_0x1d961e(0x1fb)]=_0x3398c6['body'][_0x1d961e(0x1fb)],await _0x3cbc23['save'](),_0x3398c6[_0x1d961e(0x232)](_0x1d961e(0x206),_0x1d961e(0x21e)),_0x124b6a[_0x1d961e(0x24d)](_0x1d961e(0x215));}catch(_0x5e8507){console[_0x1d961e(0x1f8)](_0x5e8507),_0x124b6a[_0x1d961e(0x221)](0xc8)[_0x1d961e(0x246)]({'message':_0x5e8507['message']});}}),router[a0_0x5427e0(0x1f5)](a0_0x5427e0(0x212),auth,async(_0x579512,_0x2fdb26)=>{var _0x3d9aff=a0_0x5427e0;try{const _0x2b0b51=_0x579512['params']['id'],{invoice:_0x13d701,customer:_0x27212a,payable_to_customer:_0x3bbbd3,paid_amount:_0x40e3b1}=_0x579512[_0x3d9aff(0x216)],_0x35228c=await sales_return['findById'](_0x2b0b51);console[_0x3d9aff(0x1f8)](_0x3d9aff(0x265),_0x35228c),console[_0x3d9aff(0x1f8)](_0x3bbbd3),console[_0x3d9aff(0x1f8)](_0x40e3b1);var _0x3f7f54=_0x3bbbd3-_0x40e3b1;console['log'](_0x3d9aff(0x1f3),_0x3f7f54),_0x35228c[_0x3d9aff(0x267)]=parseFloat(_0x40e3b1)+parseFloat(_0x35228c[_0x3d9aff(0x267)]),_0x35228c[_0x3d9aff(0x268)]=_0x3f7f54,console[_0x3d9aff(0x1f8)](_0x35228c);const _0xc622eb=await _0x35228c[_0x3d9aff(0x1f0)]();console['log'](0x1b207);const _0x57559c=await c_payment_data['findOne']({'invoice':_0x579512[_0x3d9aff(0x216)][_0x3d9aff(0x219)],'reason':_0x3d9aff(0x260)});console[_0x3d9aff(0x1f8)](_0x3d9aff(0x26c),_0x57559c),_0x57559c[_0x3d9aff(0x21c)]=_0x3f7f54,await _0x57559c['save']();let _0x80023c=new Date(),_0x27c0a0=('0'+_0x80023c[_0x3d9aff(0x203)]())[_0x3d9aff(0x256)](-0x2),_0x595154=('0'+(_0x80023c[_0x3d9aff(0x20b)]()+0x1))['slice'](-0x2),_0x4e1782=_0x80023c['getFullYear'](),_0x57d9f4=_0x4e1782+'-'+_0x595154+'-'+_0x27c0a0;const _0x571232=new customer_payment({'invoice':_0x13d701,'date':_0x4e1782+'-'+_0x595154+'-'+_0x27c0a0,'customer':_0x27212a,'reason':_0x3d9aff(0x25a),'amount':_0x40e3b1}),_0x20ac73=await _0x571232[_0x3d9aff(0x1f0)]();_0x579512[_0x3d9aff(0x232)](_0x3d9aff(0x206),_0x3d9aff(0x214)),_0x2fdb26[_0x3d9aff(0x24d)]('/sales_return/view');}catch(_0x38b441){console['log'](_0x38b441);}}),router['get'](a0_0x5427e0(0x253),auth,async(_0x599b6c,_0x53df2a)=>{var _0x23afb8=a0_0x5427e0;try{const {username:_0x54a01a,email:_0x4d3ee4,role:_0x174e8a}=_0x599b6c['user'],_0x27e0a0=_0x599b6c[_0x23afb8(0x249)],_0x4c762a=await profile[_0x23afb8(0x226)]({'email':_0x27e0a0[_0x23afb8(0x262)]}),_0x33fb79=await master_shop[_0x23afb8(0x223)]();console[_0x23afb8(0x1f8)]('master',_0x33fb79);const _0xaa8cfb=_0x599b6c[_0x23afb8(0x251)]['id'],_0x348871=await sales_return[_0x23afb8(0x210)](_0xaa8cfb);console[_0x23afb8(0x1f8)](_0x348871);const _0x2b9401=await customer[_0x23afb8(0x226)]({'name':_0x348871['customer']});console[_0x23afb8(0x1f8)](_0x2b9401);if(_0x33fb79[0x0][_0x23afb8(0x1fd)]==_0x23afb8(0x263)){var _0x9f6754=users[_0x23afb8(0x222)];console[_0x23afb8(0x1f8)](_0x9f6754);}else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]==_0x23afb8(0x1f4))var _0x9f6754=users['Hindi'];else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]==_0x23afb8(0x218))var _0x9f6754=users[_0x23afb8(0x218)];else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]==_0x23afb8(0x25e))var _0x9f6754=users[_0x23afb8(0x25e)];else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]=='French')var _0x9f6754=users[_0x23afb8(0x20e)];else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]==_0x23afb8(0x1fa))var _0x9f6754=users['Portuguese'];else{if(_0x33fb79[0x0]['language']=='Chinese')var _0x9f6754=users[_0x23afb8(0x25d)];else{if(_0x33fb79[0x0][_0x23afb8(0x1fd)]=='Arabic\x20(ae)')var _0x9f6754=users[_0x23afb8(0x21f)];}}}}}}}_0x53df2a[_0x23afb8(0x266)](_0x23afb8(0x224),{'success':_0x599b6c[_0x23afb8(0x232)]('success'),'errors':_0x599b6c[_0x23afb8(0x232)]('errors'),'role':_0x27e0a0,'profile':_0x4c762a,'master_shop':_0x33fb79,'customers':_0x2b9401,'sales':_0x348871,'language':_0x9f6754});}catch(_0x127dcf){console[_0x23afb8(0x1f8)](_0x127dcf);}}),module[a0_0x5427e0(0x1f9)]=router;