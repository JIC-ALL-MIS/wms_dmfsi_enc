var a0_0x4f93e4=a0_0x33b7;function a0_0x3e66(){var _0x56ab1d=['$product_details._id','express','English\x20(US)','Portuguese\x20(BR)','get','product_stock','267476sVddWn','$customer_docs','body','Arabic','purchase\x20return\x20successfully','Chinese','5089660auqAiq','customer_docs','data','getMonth','French','string','name','$product_details.floorlevel','type','map','params','German','product_name','bin','customers','success','flash','748678TFnjyG','old_data','ToRoom','new\x20new_data','English','return_qty','390872pLGfkV','suppliers','getFullYear','redirect','Sale\x20Return','return_sale','sales_return_invoice','$product_details.type','$product_details.product_code','user','types','$product_details.product_stock','render','11kCUWgG','sale_qty','post','secondary_code','Hindi','findOne','Return\x20Goods','Returned\x20Payment\x20For\x20Sale\x20Return','stock','/give_payment/:id','forEach','Portuguese','invoice','1047261VUPmsK','/view/:id','../public/language/languages.json','Router','customer','Raw\x20Materials','message','email','aggregate','findById','Return\x20Rooms','$product_details.secondary_code','$name','payment\x20successfull','slice','amount','26385610LilAsA','log','find','primary_code','paid_amount','/view','/sales_return/view','old_warehouse_data','subtract','stocks','2XSWAUc','../models/all_models','Enabled','bay','exports','save','date','3431730QfliAs','ToWarehouse','errors','78gyrlwj','sales_quantity','floorlevel','master','207VBVvPM','product_code','Spanish','warehouse_name','language','Arabic\x20(ae)','note'];a0_0x3e66=function(){return _0x56ab1d;};return a0_0x3e66();}(function(_0x59f9f7,_0x440793){var _0x564012=a0_0x33b7,_0x1c3de4=_0x59f9f7();while(!![]){try{var _0x52297f=parseInt(_0x564012(0x143))/0x1*(-parseInt(_0x564012(0x15d))/0x2)+-parseInt(_0x564012(0x167))/0x3*(-parseInt(_0x564012(0x178))/0x4)+parseInt(_0x564012(0x112))/0x5+parseInt(_0x564012(0x164))/0x6+parseInt(_0x564012(0x123))/0x7+parseInt(_0x564012(0x129))/0x8*(parseInt(_0x564012(0x16b))/0x9)+parseInt(_0x564012(0x153))/0xa*(-parseInt(_0x564012(0x136))/0xb);if(_0x52297f===_0x440793)break;else _0x1c3de4['push'](_0x1c3de4['shift']());}catch(_0x3a13eb){_0x1c3de4['push'](_0x1c3de4['shift']());}}}(a0_0x3e66,0xd539a));function a0_0x33b7(_0x330c26,_0xbba48){var _0x3e660d=a0_0x3e66();return a0_0x33b7=function(_0x33b790,_0x32ef5a){_0x33b790=_0x33b790-0x10d;var _0x262536=_0x3e660d[_0x33b790];return _0x262536;},a0_0x33b7(_0x330c26,_0xbba48);}const express=require(a0_0x4f93e4(0x173)),app=express(),router=express[a0_0x4f93e4(0x146)](),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,purchases_return,sales,sales_return,customer_payment,c_payment_data}=require(a0_0x4f93e4(0x15e)),auth=require('../middleware/auth'),users=require(a0_0x4f93e4(0x145));router[a0_0x4f93e4(0x176)](a0_0x4f93e4(0x158),auth,async(_0x707646,_0x7e6ed6)=>{var _0x105e84=a0_0x4f93e4;try{const {username:_0x1323b5,email:_0x8384d8,role:_0x2368ae}=_0x707646[_0x105e84(0x132)],_0x422747=_0x707646[_0x105e84(0x132)],_0x12a150=await profile[_0x105e84(0x13b)]({'email':_0x422747[_0x105e84(0x14a)]}),_0x158183=await master_shop[_0x105e84(0x155)]();console[_0x105e84(0x154)]('master',_0x158183);const _0x23fb45=await sales_return[_0x105e84(0x14b)]([{'$lookup':{'from':_0x105e84(0x120),'localField':_0x105e84(0x147),'foreignField':_0x105e84(0x118),'as':_0x105e84(0x113)}},{'$unwind':_0x105e84(0x10d)}]);console[_0x105e84(0x154)]('all_data',_0x23fb45);if(_0x158183[0x0][_0x105e84(0x16f)]=='English\x20(US)'){var _0x1d6f46=users['English'];console[_0x105e84(0x154)](_0x1d6f46);}else{if(_0x158183[0x0][_0x105e84(0x16f)]=='Hindi')var _0x1d6f46=users[_0x105e84(0x13a)];else{if(_0x158183[0x0][_0x105e84(0x16f)]=='German')var _0x1d6f46=users[_0x105e84(0x11d)];else{if(_0x158183[0x0]['language']==_0x105e84(0x16d))var _0x1d6f46=users[_0x105e84(0x16d)];else{if(_0x158183[0x0]['language']==_0x105e84(0x116))var _0x1d6f46=users[_0x105e84(0x116)];else{if(_0x158183[0x0]['language']==_0x105e84(0x175))var _0x1d6f46=users[_0x105e84(0x141)];else{if(_0x158183[0x0][_0x105e84(0x16f)]==_0x105e84(0x111))var _0x1d6f46=users[_0x105e84(0x111)];else{if(_0x158183[0x0]['language']=='Arabic\x20(ae)')var _0x1d6f46=users[_0x105e84(0x10f)];}}}}}}}_0x7e6ed6['render']('sales_return',{'success':_0x707646['flash'](_0x105e84(0x121)),'errors':_0x707646[_0x105e84(0x122)](_0x105e84(0x166)),'role':_0x422747,'profile':_0x12a150,'master_shop':_0x158183,'user':_0x23fb45,'language':_0x1d6f46});}catch(_0x112cc){console[_0x105e84(0x154)](_0x112cc);}}),router[a0_0x4f93e4(0x176)]('/view/:id',auth,async(_0x9f0f87,_0x1e7db9)=>{var _0x30c51e=a0_0x4f93e4;try{const {username:_0x42834e,email:_0x5c8875,role:_0x3e6325}=_0x9f0f87[_0x30c51e(0x132)],_0x558a88=_0x9f0f87['user'],_0x1256b3=await profile['findOne']({'email':_0x558a88[_0x30c51e(0x14a)]}),_0x548a57=await master_shop['find']();console[_0x30c51e(0x154)](_0x30c51e(0x16a),_0x548a57);const _0x59f331=_0x9f0f87[_0x30c51e(0x11c)]['id'];console[_0x30c51e(0x154)](_0x59f331);var _0x2e1178=[_0x30c51e(0x14d)];const _0x9a304b=await sales_return[_0x30c51e(0x14c)](_0x59f331),_0x14aeb8=await warehouse['aggregate']([{'$match':{'name':_0x9a304b[_0x30c51e(0x165)],'room':_0x9a304b[_0x30c51e(0x125)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0x30c51e(0x172),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x30c51e(0x134)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x30c51e(0x130)},'floorlevel':{'$first':_0x30c51e(0x119)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x30c51e(0x14e)},'product_code':{'$first':_0x30c51e(0x131)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'}}}]);console[_0x30c51e(0x154)](_0x14aeb8);const _0x1a0c20=await warehouse[_0x30c51e(0x14b)]([{'$match':{'status':_0x30c51e(0x15f),'name':_0x30c51e(0x13c),'warehouse_category':_0x30c51e(0x148)}},{'$group':{'_id':'$name','name':{'$first':_0x30c51e(0x14f)}}},{'$sort':{'name':0x1}}]),_0x2ae618=await product['find']({});if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x174)){var _0x27e246=users[_0x30c51e(0x127)];console[_0x30c51e(0x154)](_0x27e246);}else{if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x13a))var _0x27e246=users[_0x30c51e(0x13a)];else{if(_0x548a57[0x0]['language']==_0x30c51e(0x11d))var _0x27e246=users[_0x30c51e(0x11d)];else{if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x16d))var _0x27e246=users['Spanish'];else{if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x116))var _0x27e246=users['French'];else{if(_0x548a57[0x0][_0x30c51e(0x16f)]=='Portuguese\x20(BR)')var _0x27e246=users[_0x30c51e(0x141)];else{if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x111))var _0x27e246=users[_0x30c51e(0x111)];else{if(_0x548a57[0x0][_0x30c51e(0x16f)]==_0x30c51e(0x170))var _0x27e246=users[_0x30c51e(0x10f)];}}}}}}}_0x1e7db9[_0x30c51e(0x135)]('return_sale_edit',{'success':_0x9f0f87[_0x30c51e(0x122)]('success'),'errors':_0x9f0f87['flash'](_0x30c51e(0x166)),'role':_0x558a88,'profile':_0x1256b3,'master_shop':_0x548a57,'user':_0x9a304b,'stock':_0x14aeb8,'unit':_0x2ae618,'language':_0x27e246,'warehouses':_0x1a0c20,'rooms':_0x2e1178});}catch(_0x32cb77){console[_0x30c51e(0x154)](_0x32cb77);}}),router[a0_0x4f93e4(0x138)](a0_0x4f93e4(0x144),auth,async(_0xd8f4e1,_0x1fabb0)=>{var _0x4897fb=a0_0x4f93e4;try{const _0x4b79b0=_0xd8f4e1['params']['id'];console['log'](_0x4b79b0);const _0x289ee4=await sales_return[_0x4897fb(0x13b)]({'invoice':_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x142)]});console[_0x4897fb(0x154)](_0x4897fb(0x124),_0x289ee4);const _0x469292=await warehouse[_0x4897fb(0x13b)]({'name':_0x289ee4[_0x4897fb(0x165)],'room':_0x289ee4[_0x4897fb(0x125)]});console[_0x4897fb(0x154)](_0x4897fb(0x15a),_0x469292);const {invoice:_0x47d130,customer:_0x16bc4e,date:_0x5d2342,warehouse_name:_0x19ff5b,product_name:_0x119cd1,primary_code:_0x3346f1,secondary_code:_0x533c50,product_code:_0x29bdce,sales_quantity:_0x496e2f,stocks:_0x107548,return_qty:_0x1117d0,note:_0x35ecb3,to_warehouse_name:_0x2ece18,to_Room_name:_0x3280cf}=_0xd8f4e1[_0x4897fb(0x10e)];console[_0x4897fb(0x154)](_0xd8f4e1[_0x4897fb(0x10e)]);if(typeof _0x119cd1==_0x4897fb(0x117))var _0x31996b=[_0xd8f4e1['body'][_0x4897fb(0x11e)]],_0x2c0793=[_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x156)]],_0x377853=[_0xd8f4e1['body'][_0x4897fb(0x139)]],_0x52dca7=[_0xd8f4e1['body'][_0x4897fb(0x16c)]],_0x579cb0=[_0xd8f4e1[_0x4897fb(0x10e)]['sales_quantity']],_0x56ece2=[_0xd8f4e1['body'][_0x4897fb(0x15c)]],_0x324fa0=[_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x128)]],_0x381ae3=[_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x160)]],_0x345698=[_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x11f)]],_0x360fd2=[_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x133)]],_0xa3723d=[_0xd8f4e1['body']['floorlevel']];else var _0x31996b=[..._0xd8f4e1['body'][_0x4897fb(0x11e)]],_0x2c0793=[..._0xd8f4e1['body'][_0x4897fb(0x156)]],_0x377853=[..._0xd8f4e1['body'][_0x4897fb(0x139)]],_0x52dca7=[..._0xd8f4e1[_0x4897fb(0x10e)]['product_code']],_0x579cb0=[..._0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x168)]],_0x56ece2=[..._0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x15c)]],_0x324fa0=[..._0xd8f4e1[_0x4897fb(0x10e)]['return_qty']],_0x381ae3=[..._0xd8f4e1['body'][_0x4897fb(0x160)]],_0x345698=[..._0xd8f4e1['body'][_0x4897fb(0x11f)]],_0x360fd2=[..._0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x133)]],_0xa3723d=[..._0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x169)]];const _0x46367d=_0x31996b[_0x4897fb(0x11b)](_0x4738db=>{return _0x4738db={'product_name':_0x4738db};});_0x2c0793[_0x4897fb(0x140)]((_0x4c45a9,_0x3611bd)=>{_0x46367d[_0x3611bd]['primary_code']=_0x4c45a9;}),_0x377853[_0x4897fb(0x140)]((_0x3b06ec,_0x49e395)=>{_0x46367d[_0x49e395]['secondary_code']=_0x3b06ec;}),_0x52dca7[_0x4897fb(0x140)]((_0x3aefd8,_0x3ab2ab)=>{var _0x13692c=_0x4897fb;_0x46367d[_0x3ab2ab][_0x13692c(0x16c)]=_0x3aefd8;}),_0x579cb0[_0x4897fb(0x140)]((_0x5e32fd,_0x381eb7)=>{var _0x5e556d=_0x4897fb;_0x46367d[_0x381eb7][_0x5e556d(0x137)]=_0x5e32fd;}),_0x56ece2[_0x4897fb(0x140)]((_0x1015a1,_0x201d13)=>{var _0x308a96=_0x4897fb;_0x46367d[_0x201d13][_0x308a96(0x13e)]=_0x1015a1;}),_0x324fa0[_0x4897fb(0x140)]((_0x55a3b8,_0x26d84a)=>{_0x46367d[_0x26d84a]['return_qty']=_0x55a3b8;}),_0x381ae3[_0x4897fb(0x140)]((_0x142b52,_0x53c77f)=>{var _0x4f7731=_0x4897fb;_0x46367d[_0x53c77f][_0x4f7731(0x160)]=_0x142b52;}),_0x345698['forEach']((_0x1edc22,_0x40fafd)=>{var _0x221d22=_0x4897fb;_0x46367d[_0x40fafd][_0x221d22(0x11f)]=_0x1edc22;}),_0x360fd2[_0x4897fb(0x140)]((_0x20ea13,_0x367a78)=>{var _0x34259=_0x4897fb;_0x46367d[_0x367a78][_0x34259(0x11a)]=_0x20ea13;}),_0xa3723d[_0x4897fb(0x140)]((_0x23a9c6,_0x71b595)=>{_0x46367d[_0x71b595]['floorlevel']=_0x23a9c6;});var _0x9d54ff=0x0;_0x46367d[_0x4897fb(0x140)](_0x13f5e5=>{var _0x2adf2b=_0x4897fb;console[_0x2adf2b(0x154)]('foreach\x20newproduct',_0x13f5e5),(parseInt(_0x13f5e5[_0x2adf2b(0x137)])<parseInt(_0x13f5e5[_0x2adf2b(0x128)])||parseInt(_0x13f5e5[_0x2adf2b(0x13e)])<parseInt(_0x13f5e5[_0x2adf2b(0x128)])&&parseInt(_0x13f5e5[_0x2adf2b(0x137)])>parseInt(_0x13f5e5[_0x2adf2b(0x128)])||parseInt(_0x13f5e5[_0x2adf2b(0x128)])==0x0)&&_0x9d54ff++;});if(_0x9d54ff!=0x0)return _0xd8f4e1[_0x4897fb(0x122)]('errors','Must\x20not\x20be\x20greater\x20than\x20sale\x20Qty'),_0x1fabb0['redirect']('back');_0x289ee4['return_sale'][_0x4897fb(0x140)](_0x34f008=>{var _0x4d2a81=_0x4897fb;const _0x59ca7c=_0x469292['product_details'][_0x4d2a81(0x11b)](_0x43a35e=>{var _0x210348=_0x4d2a81;_0x43a35e['product_name']==_0x34f008[_0x210348(0x11e)]&&_0x43a35e[_0x210348(0x169)]==_0x34f008[_0x210348(0x169)]&&_0x43a35e[_0x210348(0x11a)]==_0x34f008[_0x210348(0x11a)]&&_0x43a35e[_0x210348(0x11f)]==_0x34f008['bin']&&_0x43a35e[_0x210348(0x160)]==_0x34f008[_0x210348(0x160)]&&(_0x43a35e[_0x210348(0x177)]=parseInt(_0x43a35e[_0x210348(0x177)])+parseInt(_0x34f008[_0x210348(0x128)]));});}),console[_0x4897fb(0x154)](_0x4897fb(0x15a),_0x469292),await _0x469292[_0x4897fb(0x162)](),_0x289ee4[_0x4897fb(0x142)]=_0x47d130,_0x289ee4[_0x4897fb(0x147)]=_0x16bc4e,_0x289ee4['date']=_0x5d2342,_0x289ee4[_0x4897fb(0x16e)]=_0x19ff5b,_0x289ee4[_0x4897fb(0x12e)]=_0x46367d,_0x289ee4[_0x4897fb(0x171)]=_0x35ecb3,_0x289ee4['ToWarehouse']=_0x2ece18,_0x289ee4[_0x4897fb(0x125)]=_0x3280cf;const _0x202201=await _0x289ee4['save']();console['log'](_0x4897fb(0x126),_0x202201);const _0x1113ec=await c_payment_data[_0x4897fb(0x13b)]({'invoice':_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x142)],'reason':_0x4897fb(0x12d)});_0x1113ec[_0x4897fb(0x12a)]=_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x12a)],_0x1113ec[_0x4897fb(0x163)]=_0xd8f4e1[_0x4897fb(0x10e)][_0x4897fb(0x163)],await _0x1113ec['save'](),_0xd8f4e1[_0x4897fb(0x122)](_0x4897fb(0x121),_0x4897fb(0x110)),_0x1fabb0[_0x4897fb(0x12c)](_0x4897fb(0x159));}catch(_0x28e8ca){console['log'](_0x28e8ca),_0x1fabb0['status'](0xc8)['json']({'message':_0x28e8ca[_0x4897fb(0x149)]});}}),router[a0_0x4f93e4(0x138)](a0_0x4f93e4(0x13f),auth,async(_0x2e7e22,_0x294eb8)=>{var _0x408abf=a0_0x4f93e4;try{const _0x4bd62c=_0x2e7e22['params']['id'],{invoice:_0x4b5b55,customer:_0x7d9977,payable_to_customer:_0x1dec01,paid_amount:_0x5e804f}=_0x2e7e22[_0x408abf(0x10e)],_0x428b75=await sales_return[_0x408abf(0x14c)](_0x4bd62c);console[_0x408abf(0x154)](_0x408abf(0x114),_0x428b75),console[_0x408abf(0x154)](_0x1dec01),console[_0x408abf(0x154)](_0x5e804f);var _0x1926b1=_0x1dec01-_0x5e804f;console[_0x408abf(0x154)](_0x408abf(0x15b),_0x1926b1),_0x428b75[_0x408abf(0x157)]=parseFloat(_0x5e804f)+parseFloat(_0x428b75['paid_amount']),_0x428b75['due_amount']=_0x1926b1,console[_0x408abf(0x154)](_0x428b75);const _0xd66886=await _0x428b75[_0x408abf(0x162)]();console[_0x408abf(0x154)](0x1b207);const _0x11d2d3=await c_payment_data['findOne']({'invoice':_0x2e7e22[_0x408abf(0x10e)][_0x408abf(0x142)],'reason':'Sale\x20Return'});console[_0x408abf(0x154)]('c_payment',_0x11d2d3),_0x11d2d3[_0x408abf(0x152)]=_0x1926b1,await _0x11d2d3[_0x408abf(0x162)]();let _0x352a1b=new Date(),_0x404143=('0'+_0x352a1b['getDate']())['slice'](-0x2),_0x18c216=('0'+(_0x352a1b[_0x408abf(0x115)]()+0x1))[_0x408abf(0x151)](-0x2),_0x237cae=_0x352a1b[_0x408abf(0x12b)](),_0x28cbf6=_0x237cae+'-'+_0x18c216+'-'+_0x404143;const _0x2dabf0=new customer_payment({'invoice':_0x4b5b55,'date':_0x237cae+'-'+_0x18c216+'-'+_0x404143,'customer':_0x7d9977,'reason':_0x408abf(0x13d),'amount':_0x5e804f}),_0x5c2d4b=await _0x2dabf0[_0x408abf(0x162)]();_0x2e7e22[_0x408abf(0x122)]('success',_0x408abf(0x150)),_0x294eb8[_0x408abf(0x12c)](_0x408abf(0x159));}catch(_0x17a60a){console[_0x408abf(0x154)](_0x17a60a);}}),router[a0_0x4f93e4(0x176)]('/invoice/:id',auth,async(_0x2fb248,_0x395ceb)=>{var _0x2bf575=a0_0x4f93e4;try{const {username:_0x4a5244,email:_0x375522,role:_0x14d1dc}=_0x2fb248[_0x2bf575(0x132)],_0x378f77=_0x2fb248[_0x2bf575(0x132)],_0x59dcfb=await profile['findOne']({'email':_0x378f77[_0x2bf575(0x14a)]}),_0x28dc24=await master_shop[_0x2bf575(0x155)]();console[_0x2bf575(0x154)](_0x2bf575(0x16a),_0x28dc24);const _0x2d15cf=_0x2fb248[_0x2bf575(0x11c)]['id'],_0x3c6b7c=await sales_return[_0x2bf575(0x14c)](_0x2d15cf);console[_0x2bf575(0x154)](_0x3c6b7c);const _0x4c9a02=await customer[_0x2bf575(0x13b)]({'name':_0x3c6b7c[_0x2bf575(0x147)]});console[_0x2bf575(0x154)](_0x4c9a02);if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x174)){var _0x2e3533=users[_0x2bf575(0x127)];console[_0x2bf575(0x154)](_0x2e3533);}else{if(_0x28dc24[0x0]['language']==_0x2bf575(0x13a))var _0x2e3533=users[_0x2bf575(0x13a)];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x11d))var _0x2e3533=users[_0x2bf575(0x11d)];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x16d))var _0x2e3533=users[_0x2bf575(0x16d)];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x116))var _0x2e3533=users[_0x2bf575(0x116)];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x175))var _0x2e3533=users[_0x2bf575(0x141)];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]==_0x2bf575(0x111))var _0x2e3533=users['Chinese'];else{if(_0x28dc24[0x0][_0x2bf575(0x16f)]=='Arabic\x20(ae)')var _0x2e3533=users['Arabic'];}}}}}}}_0x395ceb[_0x2bf575(0x135)](_0x2bf575(0x12f),{'success':_0x2fb248[_0x2bf575(0x122)](_0x2bf575(0x121)),'errors':_0x2fb248[_0x2bf575(0x122)](_0x2bf575(0x166)),'role':_0x378f77,'profile':_0x59dcfb,'master_shop':_0x28dc24,'customers':_0x4c9a02,'sales':_0x3c6b7c,'language':_0x2e3533});}catch(_0x1f1a29){console[_0x2bf575(0x154)](_0x1f1a29);}}),module[a0_0x4f93e4(0x161)]=router;