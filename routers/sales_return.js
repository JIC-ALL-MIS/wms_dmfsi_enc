var a0_0x3da49e=a0_0x5ef6;function a0_0x24a6(){var _0x1e7652=['English\x20(US)','Spanish','floorlevel','161Jcrkzo','German','$product_details.rack','/sales_return/view','log','foreach\x20newproduct','secondary_code','Router','payment\x20successfull','slice','Hindi','data','all_data','333NnaLMi','flash','Raw\x20Materials','email','$product_details.bay','name','493826VSYbUa','master','product_code','language','getMonth','map','suppliers','Return\x20Goods','Portuguese','return_qty','$product_details.bin','find','findById','string','bay','$product_details.floorlevel','ToWarehouse','body','5798135GXlppc','stock','redirect','old_warehouse_data','getDate','../models/all_models','json','54472ZkhiaC','/give_payment/:id','back','return_sale','French','product_details','paid_amount','$product_details.type','Arabic\x20(ae)','success','7kMUljp','params','warehouse_name','386940ejkwpa','old_data','sales_quantity','date','$product_details.secondary_code','amount','sales_return','ToRoom','$product_details.product_code','customer_docs','forEach','status','bin','invoice','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty','save','findOne','Portuguese\x20(BR)','7385244SNqOlH','English','message','user','stocks','product_name','/view','errors','../middleware/auth','primary_code','14734790VpVaZd','$product_details.product_stock','/view/:id','product_stock','Sale\x20Return','Chinese','get','/invoice/:id','customer','type','$product_details.product_name','16LQlCrg','render','post','Arabic','44qXytFV','getFullYear','sale_qty','131049VksrfA','types'];a0_0x24a6=function(){return _0x1e7652;};return a0_0x24a6();}function a0_0x5ef6(_0x206701,_0xb75ee9){var _0x24a66e=a0_0x24a6();return a0_0x5ef6=function(_0x5ef64f,_0x50e32d){_0x5ef64f=_0x5ef64f-0x1eb;var _0x207425=_0x24a66e[_0x5ef64f];return _0x207425;},a0_0x5ef6(_0x206701,_0xb75ee9);}(function(_0x5ea521,_0x369293){var _0x4df63e=a0_0x5ef6,_0x15a588=_0x5ea521();while(!![]){try{var _0x35e334=parseInt(_0x4df63e(0x253))/0x1*(parseInt(_0x4df63e(0x230))/0x2)+-parseInt(_0x4df63e(0x22a))/0x3*(parseInt(_0x4df63e(0x249))/0x4)+parseInt(_0x4df63e(0x242))/0x5+-parseInt(_0x4df63e(0x256))/0x6*(parseInt(_0x4df63e(0x21d))/0x7)+-parseInt(_0x4df63e(0x211))/0x8*(-parseInt(_0x4df63e(0x218))/0x9)+-parseInt(_0x4df63e(0x206))/0xa+-parseInt(_0x4df63e(0x215))/0xb*(-parseInt(_0x4df63e(0x1fc))/0xc);if(_0x35e334===_0x369293)break;else _0x15a588['push'](_0x15a588['shift']());}catch(_0x44a8ee){_0x15a588['push'](_0x15a588['shift']());}}}(a0_0x24a6,0xde4cd));const express=require('express'),app=express(),router=express[a0_0x3da49e(0x224)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x3da49e(0x247)),auth=require(a0_0x3da49e(0x204)),users=require('../public/language/languages.json');router[a0_0x3da49e(0x20c)](a0_0x3da49e(0x202),auth,async(_0x334431,_0x22123f)=>{var _0x4464c2=a0_0x3da49e;try{const {username:_0x334a3e,email:_0x2c58d6,role:_0x4d5e18}=_0x334431[_0x4464c2(0x1ff)],_0x5e23c6=_0x334431['user'],_0x450a10=await profile['findOne']({'email':_0x5e23c6[_0x4464c2(0x22d)]}),_0x4b252d=await master_shop[_0x4464c2(0x23b)]();console[_0x4464c2(0x221)](_0x4464c2(0x231),_0x4b252d);const _0x48b5fa=await sales_return['aggregate']([{'$lookup':{'from':'customers','localField':_0x4464c2(0x20e),'foreignField':_0x4464c2(0x22f),'as':_0x4464c2(0x1f3)}},{'$unwind':'$customer_docs'}]);console['log'](_0x4464c2(0x229),_0x48b5fa);if(_0x4b252d[0x0][_0x4464c2(0x233)]==_0x4464c2(0x21a)){var _0x3209e3=users[_0x4464c2(0x1fd)];console[_0x4464c2(0x221)](_0x3209e3);}else{if(_0x4b252d[0x0]['language']==_0x4464c2(0x227))var _0x3209e3=users[_0x4464c2(0x227)];else{if(_0x4b252d[0x0][_0x4464c2(0x233)]==_0x4464c2(0x21e))var _0x3209e3=users[_0x4464c2(0x21e)];else{if(_0x4b252d[0x0][_0x4464c2(0x233)]=='Spanish')var _0x3209e3=users[_0x4464c2(0x21b)];else{if(_0x4b252d[0x0][_0x4464c2(0x233)]==_0x4464c2(0x24d))var _0x3209e3=users[_0x4464c2(0x24d)];else{if(_0x4b252d[0x0][_0x4464c2(0x233)]==_0x4464c2(0x1fb))var _0x3209e3=users['Portuguese'];else{if(_0x4b252d[0x0][_0x4464c2(0x233)]==_0x4464c2(0x20b))var _0x3209e3=users[_0x4464c2(0x20b)];else{if(_0x4b252d[0x0]['language']==_0x4464c2(0x251))var _0x3209e3=users[_0x4464c2(0x214)];}}}}}}}_0x22123f[_0x4464c2(0x212)](_0x4464c2(0x1f0),{'success':_0x334431['flash'](_0x4464c2(0x252)),'errors':_0x334431[_0x4464c2(0x22b)](_0x4464c2(0x203)),'role':_0x5e23c6,'profile':_0x450a10,'master_shop':_0x4b252d,'user':_0x48b5fa,'language':_0x3209e3});}catch(_0x517d81){console[_0x4464c2(0x221)](_0x517d81);}}),router[a0_0x3da49e(0x20c)](a0_0x3da49e(0x208),auth,async(_0x311706,_0x549b43)=>{var _0x3afe33=a0_0x3da49e;try{const {username:_0x5a13d5,email:_0x4bd46e,role:_0x31b115}=_0x311706[_0x3afe33(0x1ff)],_0x136caa=_0x311706['user'],_0x4e9d7f=await profile[_0x3afe33(0x1fa)]({'email':_0x136caa[_0x3afe33(0x22d)]}),_0x1f2910=await master_shop[_0x3afe33(0x23b)]();console[_0x3afe33(0x221)](_0x3afe33(0x231),_0x1f2910);const _0x122caa=_0x311706[_0x3afe33(0x254)]['id'];console[_0x3afe33(0x221)](_0x122caa);var _0x515f7e=['Return\x20Rooms'];const _0x4c9b2b=await sales_return[_0x3afe33(0x23c)](_0x122caa),_0x1b5038=await warehouse['aggregate']([{'$match':{'name':_0x4c9b2b[_0x3afe33(0x240)],'room':_0x4c9b2b[_0x3afe33(0x1f1)]}},{'$unwind':'$product_details'},{'$group':{'_id':'$product_details._id','name':{'$first':_0x3afe33(0x210)},'product_stock':{'$first':_0x3afe33(0x207)},'bay':{'$first':_0x3afe33(0x22e)},'bin':{'$first':_0x3afe33(0x23a)},'type':{'$first':_0x3afe33(0x250)},'floorlevel':{'$first':_0x3afe33(0x23f)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x3afe33(0x1ee)},'product_code':{'$first':_0x3afe33(0x1f2)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x3afe33(0x21f)}}}]);console[_0x3afe33(0x221)](_0x1b5038);const _0x55af87=await warehouse['aggregate']([{'$match':{'status':'Enabled','name':_0x3afe33(0x237),'warehouse_category':_0x3afe33(0x22c)}},{'$group':{'_id':'$name','name':{'$first':'$name'}}},{'$sort':{'name':0x1}}]),_0x3f37d0=await product[_0x3afe33(0x23b)]({});if(_0x1f2910[0x0][_0x3afe33(0x233)]=='English\x20(US)'){var _0x5095b3=users[_0x3afe33(0x1fd)];console[_0x3afe33(0x221)](_0x5095b3);}else{if(_0x1f2910[0x0]['language']==_0x3afe33(0x227))var _0x5095b3=users['Hindi'];else{if(_0x1f2910[0x0][_0x3afe33(0x233)]==_0x3afe33(0x21e))var _0x5095b3=users[_0x3afe33(0x21e)];else{if(_0x1f2910[0x0][_0x3afe33(0x233)]==_0x3afe33(0x21b))var _0x5095b3=users[_0x3afe33(0x21b)];else{if(_0x1f2910[0x0]['language']==_0x3afe33(0x24d))var _0x5095b3=users[_0x3afe33(0x24d)];else{if(_0x1f2910[0x0][_0x3afe33(0x233)]==_0x3afe33(0x1fb))var _0x5095b3=users['Portuguese'];else{if(_0x1f2910[0x0][_0x3afe33(0x233)]=='Chinese')var _0x5095b3=users[_0x3afe33(0x20b)];else{if(_0x1f2910[0x0]['language']==_0x3afe33(0x251))var _0x5095b3=users['Arabic'];}}}}}}}_0x549b43['render']('return_sale_edit',{'success':_0x311706[_0x3afe33(0x22b)](_0x3afe33(0x252)),'errors':_0x311706['flash'](_0x3afe33(0x203)),'role':_0x136caa,'profile':_0x4e9d7f,'master_shop':_0x1f2910,'user':_0x4c9b2b,'stock':_0x1b5038,'unit':_0x3f37d0,'language':_0x5095b3,'warehouses':_0x55af87,'rooms':_0x515f7e});}catch(_0x3c161b){console['log'](_0x3c161b);}}),router[a0_0x3da49e(0x213)](a0_0x3da49e(0x208),auth,async(_0x18a421,_0xa55a1f)=>{var _0x13f483=a0_0x3da49e;try{const _0x4783c7=_0x18a421[_0x13f483(0x254)]['id'];console[_0x13f483(0x221)](_0x4783c7);const _0x558201=await sales_return[_0x13f483(0x1fa)]({'invoice':_0x18a421[_0x13f483(0x241)][_0x13f483(0x1f7)]});console[_0x13f483(0x221)](_0x13f483(0x1eb),_0x558201);const _0x1ea68b=await warehouse[_0x13f483(0x1fa)]({'name':_0x558201[_0x13f483(0x240)],'room':_0x558201['ToRoom']});console[_0x13f483(0x221)](_0x13f483(0x245),_0x1ea68b);const {invoice:_0x9e8d86,customer:_0x508a02,date:_0x1902b1,warehouse_name:_0x11b59d,product_name:_0x3996e1,primary_code:_0x366345,secondary_code:_0x87d4d2,product_code:_0x2e5737,sales_quantity:_0x24feee,stocks:_0x36f3a9,return_qty:_0x5a55fc,note:_0x21e143,to_warehouse_name:_0x54824a,to_Room_name:_0x1f25e6}=_0x18a421[_0x13f483(0x241)];console[_0x13f483(0x221)](_0x18a421[_0x13f483(0x241)]);if(typeof _0x3996e1==_0x13f483(0x23d))var _0x383bf9=[_0x18a421['body']['product_name']],_0x415f13=[_0x18a421[_0x13f483(0x241)][_0x13f483(0x205)]],_0x3b1a45=[_0x18a421['body'][_0x13f483(0x223)]],_0x28795b=[_0x18a421[_0x13f483(0x241)]['product_code']],_0x1b2ade=[_0x18a421[_0x13f483(0x241)][_0x13f483(0x1ec)]],_0x35a915=[_0x18a421[_0x13f483(0x241)]['stocks']],_0x48809a=[_0x18a421[_0x13f483(0x241)][_0x13f483(0x239)]],_0x35479b=[_0x18a421['body']['bay']],_0x301ec1=[_0x18a421[_0x13f483(0x241)][_0x13f483(0x1f6)]],_0x44b01a=[_0x18a421['body'][_0x13f483(0x219)]],_0x8bdc51=[_0x18a421[_0x13f483(0x241)][_0x13f483(0x21c)]];else var _0x383bf9=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x201)]],_0x415f13=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x205)]],_0x3b1a45=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x223)]],_0x28795b=[..._0x18a421['body'][_0x13f483(0x232)]],_0x1b2ade=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x1ec)]],_0x35a915=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x200)]],_0x48809a=[..._0x18a421['body'][_0x13f483(0x239)]],_0x35479b=[..._0x18a421['body'][_0x13f483(0x23e)]],_0x301ec1=[..._0x18a421[_0x13f483(0x241)]['bin']],_0x44b01a=[..._0x18a421['body'][_0x13f483(0x219)]],_0x8bdc51=[..._0x18a421[_0x13f483(0x241)][_0x13f483(0x21c)]];const _0x1caed5=_0x383bf9[_0x13f483(0x235)](_0x3107a5=>{return _0x3107a5={'product_name':_0x3107a5};});_0x415f13['forEach']((_0xc156bc,_0x232b38)=>{var _0x21b2c8=_0x13f483;_0x1caed5[_0x232b38][_0x21b2c8(0x205)]=_0xc156bc;}),_0x3b1a45[_0x13f483(0x1f4)]((_0x13c72a,_0x405eed)=>{_0x1caed5[_0x405eed]['secondary_code']=_0x13c72a;}),_0x28795b[_0x13f483(0x1f4)]((_0xe14439,_0x55a251)=>{var _0x3b5a59=_0x13f483;_0x1caed5[_0x55a251][_0x3b5a59(0x232)]=_0xe14439;}),_0x1b2ade[_0x13f483(0x1f4)]((_0x455fd7,_0x99e04c)=>{var _0xabd7d=_0x13f483;_0x1caed5[_0x99e04c][_0xabd7d(0x217)]=_0x455fd7;}),_0x35a915[_0x13f483(0x1f4)]((_0x4290b6,_0x2816d1)=>{_0x1caed5[_0x2816d1]['stock']=_0x4290b6;}),_0x48809a[_0x13f483(0x1f4)]((_0x5a7657,_0x649c41)=>{var _0x44ea6f=_0x13f483;_0x1caed5[_0x649c41][_0x44ea6f(0x239)]=_0x5a7657;}),_0x35479b[_0x13f483(0x1f4)]((_0x52424a,_0x168d15)=>{var _0x4fd330=_0x13f483;_0x1caed5[_0x168d15][_0x4fd330(0x23e)]=_0x52424a;}),_0x301ec1[_0x13f483(0x1f4)]((_0x579c4a,_0x779a2c)=>{var _0x4b1405=_0x13f483;_0x1caed5[_0x779a2c][_0x4b1405(0x1f6)]=_0x579c4a;}),_0x44b01a[_0x13f483(0x1f4)]((_0x57398e,_0x3e9990)=>{var _0x1bb9c3=_0x13f483;_0x1caed5[_0x3e9990][_0x1bb9c3(0x20f)]=_0x57398e;}),_0x8bdc51[_0x13f483(0x1f4)]((_0x3b1df0,_0x59c48b)=>{var _0x2824ff=_0x13f483;_0x1caed5[_0x59c48b][_0x2824ff(0x21c)]=_0x3b1df0;});var _0x923616=0x0;_0x1caed5['forEach'](_0x5e342e=>{var _0x5038d1=_0x13f483;console[_0x5038d1(0x221)](_0x5038d1(0x222),_0x5e342e),(parseInt(_0x5e342e[_0x5038d1(0x217)])<parseInt(_0x5e342e[_0x5038d1(0x239)])||parseInt(_0x5e342e[_0x5038d1(0x243)])<parseInt(_0x5e342e[_0x5038d1(0x239)])&&parseInt(_0x5e342e[_0x5038d1(0x217)])>parseInt(_0x5e342e[_0x5038d1(0x239)])||parseInt(_0x5e342e[_0x5038d1(0x239)])==0x0)&&_0x923616++;});if(_0x923616!=0x0)return _0x18a421[_0x13f483(0x22b)](_0x13f483(0x203),_0x13f483(0x1f8)),_0xa55a1f[_0x13f483(0x244)](_0x13f483(0x24b));_0x558201[_0x13f483(0x24c)][_0x13f483(0x1f4)](_0x39ece9=>{var _0x538f73=_0x13f483;const _0x5c6665=_0x1ea68b[_0x538f73(0x24e)][_0x538f73(0x235)](_0x276a09=>{var _0x4ec365=_0x538f73;_0x276a09[_0x4ec365(0x201)]==_0x39ece9[_0x4ec365(0x201)]&&_0x276a09['floorlevel']==_0x39ece9[_0x4ec365(0x21c)]&&_0x276a09[_0x4ec365(0x20f)]==_0x39ece9[_0x4ec365(0x20f)]&&_0x276a09[_0x4ec365(0x1f6)]==_0x39ece9[_0x4ec365(0x1f6)]&&_0x276a09[_0x4ec365(0x23e)]==_0x39ece9[_0x4ec365(0x23e)]&&(_0x276a09[_0x4ec365(0x209)]=parseInt(_0x276a09[_0x4ec365(0x209)])+parseInt(_0x39ece9[_0x4ec365(0x239)]));});}),console[_0x13f483(0x221)]('old_warehouse_data',_0x1ea68b),await _0x1ea68b[_0x13f483(0x1f9)](),_0x558201['invoice']=_0x9e8d86,_0x558201[_0x13f483(0x20e)]=_0x508a02,_0x558201['date']=_0x1902b1,_0x558201[_0x13f483(0x255)]=_0x11b59d,_0x558201['return_sale']=_0x1caed5,_0x558201['note']=_0x21e143,_0x558201[_0x13f483(0x240)]=_0x54824a,_0x558201[_0x13f483(0x1f1)]=_0x1f25e6;const _0x5113d0=await _0x558201['save']();console[_0x13f483(0x221)]('new\x20new_data',_0x5113d0);const _0x448ebd=await c_payment_data[_0x13f483(0x1fa)]({'invoice':_0x18a421[_0x13f483(0x241)][_0x13f483(0x1f7)],'reason':_0x13f483(0x20a)});_0x448ebd[_0x13f483(0x236)]=_0x18a421[_0x13f483(0x241)][_0x13f483(0x236)],_0x448ebd[_0x13f483(0x1ed)]=_0x18a421[_0x13f483(0x241)][_0x13f483(0x1ed)],await _0x448ebd[_0x13f483(0x1f9)](),_0x18a421[_0x13f483(0x22b)](_0x13f483(0x252),'purchase\x20return\x20successfully'),_0xa55a1f['redirect']('/sales_return/view');}catch(_0x5ab630){console[_0x13f483(0x221)](_0x5ab630),_0xa55a1f[_0x13f483(0x1f5)](0xc8)[_0x13f483(0x248)]({'message':_0x5ab630[_0x13f483(0x1fe)]});}}),router['post'](a0_0x3da49e(0x24a),auth,async(_0x3689b4,_0x2133a6)=>{var _0x2e06de=a0_0x3da49e;try{const _0x395086=_0x3689b4[_0x2e06de(0x254)]['id'],{invoice:_0x3c9598,customer:_0x249ec6,payable_to_customer:_0x58cb26,paid_amount:_0x1566f5}=_0x3689b4[_0x2e06de(0x241)],_0x4aeae7=await sales_return[_0x2e06de(0x23c)](_0x395086);console['log'](_0x2e06de(0x228),_0x4aeae7),console[_0x2e06de(0x221)](_0x58cb26),console['log'](_0x1566f5);var _0x42d2ba=_0x58cb26-_0x1566f5;console[_0x2e06de(0x221)]('subtract',_0x42d2ba),_0x4aeae7[_0x2e06de(0x24f)]=parseFloat(_0x1566f5)+parseFloat(_0x4aeae7[_0x2e06de(0x24f)]),_0x4aeae7['due_amount']=_0x42d2ba,console[_0x2e06de(0x221)](_0x4aeae7);const _0xdd67b=await _0x4aeae7[_0x2e06de(0x1f9)]();console['log'](0x1b207);const _0x16e097=await c_payment_data['findOne']({'invoice':_0x3689b4[_0x2e06de(0x241)]['invoice'],'reason':'Sale\x20Return'});console[_0x2e06de(0x221)]('c_payment',_0x16e097),_0x16e097[_0x2e06de(0x1ef)]=_0x42d2ba,await _0x16e097[_0x2e06de(0x1f9)]();let _0x3973e4=new Date(),_0xef7e2a=('0'+_0x3973e4[_0x2e06de(0x246)]())['slice'](-0x2),_0xaa41f8=('0'+(_0x3973e4[_0x2e06de(0x234)]()+0x1))[_0x2e06de(0x226)](-0x2),_0x351157=_0x3973e4[_0x2e06de(0x216)](),_0x2c452e=_0x351157+'-'+_0xaa41f8+'-'+_0xef7e2a;const _0x2d90b2=new customer_payment({'invoice':_0x3c9598,'date':_0x351157+'-'+_0xaa41f8+'-'+_0xef7e2a,'customer':_0x249ec6,'reason':'Returned\x20Payment\x20For\x20Sale\x20Return','amount':_0x1566f5}),_0x1a8f0c=await _0x2d90b2[_0x2e06de(0x1f9)]();_0x3689b4[_0x2e06de(0x22b)](_0x2e06de(0x252),_0x2e06de(0x225)),_0x2133a6[_0x2e06de(0x244)](_0x2e06de(0x220));}catch(_0x443c88){console['log'](_0x443c88);}}),router['get'](a0_0x3da49e(0x20d),auth,async(_0x3c851c,_0xe814)=>{var _0x539644=a0_0x3da49e;try{const {username:_0x57fcc9,email:_0x560998,role:_0x5c49b7}=_0x3c851c['user'],_0x2aed54=_0x3c851c[_0x539644(0x1ff)],_0x4d176b=await profile[_0x539644(0x1fa)]({'email':_0x2aed54[_0x539644(0x22d)]}),_0x54fdaf=await master_shop['find']();console[_0x539644(0x221)]('master',_0x54fdaf);const _0x54e38a=_0x3c851c['params']['id'],_0x5188e5=await sales_return[_0x539644(0x23c)](_0x54e38a);console['log'](_0x5188e5);const _0xba6ebf=await customer['findOne']({'name':_0x5188e5['customer']});console['log'](_0xba6ebf);if(_0x54fdaf[0x0][_0x539644(0x233)]=='English\x20(US)'){var _0xd29f38=users['English'];console['log'](_0xd29f38);}else{if(_0x54fdaf[0x0][_0x539644(0x233)]=='Hindi')var _0xd29f38=users[_0x539644(0x227)];else{if(_0x54fdaf[0x0]['language']==_0x539644(0x21e))var _0xd29f38=users['German'];else{if(_0x54fdaf[0x0][_0x539644(0x233)]==_0x539644(0x21b))var _0xd29f38=users[_0x539644(0x21b)];else{if(_0x54fdaf[0x0][_0x539644(0x233)]==_0x539644(0x24d))var _0xd29f38=users['French'];else{if(_0x54fdaf[0x0][_0x539644(0x233)]=='Portuguese\x20(BR)')var _0xd29f38=users[_0x539644(0x238)];else{if(_0x54fdaf[0x0]['language']=='Chinese')var _0xd29f38=users[_0x539644(0x20b)];else{if(_0x54fdaf[0x0][_0x539644(0x233)]=='Arabic\x20(ae)')var _0xd29f38=users[_0x539644(0x214)];}}}}}}}_0xe814[_0x539644(0x212)]('sales_return_invoice',{'success':_0x3c851c['flash'](_0x539644(0x252)),'errors':_0x3c851c[_0x539644(0x22b)](_0x539644(0x203)),'role':_0x2aed54,'profile':_0x4d176b,'master_shop':_0x54fdaf,'customers':_0xba6ebf,'sales':_0x5188e5,'language':_0xd29f38});}catch(_0x1d675f){console[_0x539644(0x221)](_0x1d675f);}}),module['exports']=router;