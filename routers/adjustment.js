var a0_0x798013=a0_0x3ad8;(function(_0x236dc8,_0x3bf30e){var _0x2daa99=a0_0x3ad8,_0xe9c36f=_0x236dc8();while(!![]){try{var _0x3525d0=parseInt(_0x2daa99(0x15f))/0x1+parseInt(_0x2daa99(0x147))/0x2+parseInt(_0x2daa99(0xe2))/0x3*(parseInt(_0x2daa99(0x15c))/0x4)+parseInt(_0x2daa99(0x130))/0x5+parseInt(_0x2daa99(0x158))/0x6*(-parseInt(_0x2daa99(0x171))/0x7)+parseInt(_0x2daa99(0x123))/0x8*(-parseInt(_0x2daa99(0x151))/0x9)+-parseInt(_0x2daa99(0x11d))/0xa;if(_0x3525d0===_0x3bf30e)break;else _0xe9c36f['push'](_0xe9c36f['shift']());}catch(_0x336d98){_0xe9c36f['push'](_0xe9c36f['shift']());}}}(a0_0x38ad,0x51325));function a0_0x3ad8(_0x5d397e,_0xcfecba){var _0x38ad54=a0_0x38ad();return a0_0x3ad8=function(_0x3ad84f,_0x4e9cef){_0x3ad84f=_0x3ad84f-0xaf;var _0xee7de0=_0x38ad54[_0x3ad84f];return _0xee7de0;},a0_0x3ad8(_0x5d397e,_0xcfecba);}function a0_0x38ad(){var _0x33d592=['adjustment','Arabic','\x20Order\x20Number\x20:\x20','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>','English\x20(US)','Hindi','$product_details.storage','Logo.png','image','634328WqtApO','product_details','edit_adjustment','/preview/:id','$date','/picking_list/PDF_adjustment_rm/','level','<tr>','language','$product_details.product_name','9RvuBrT','stockBefore','$product_details.level','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','floor','second1','$product_details.production_date','6yftfeo','save','findById','New_Qty_Converted','4DVNNeF','foreach\x20newproduct','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200','34645ygazZH','date','adjustment\x20Finalized\x20successfully','product','$product_details.product_code','get','then','add_adjustment','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>','There\x27s\x20a\x20error\x20in\x20this\x20transaction','Ambient','all','prod_invoice','Arabic\x20(ae)','$product_details.expiry_date','\x20</h2>','staff','$product_details','2323062AcbVqI','email','Primary_Units','$product.room_names','New_Qty_Converted_adj','Router','message','</head><body>','French','expiry_date','Return\x20Goods','<span\x20style=\x22float:\x20right;\x22>','$invoice','\x20Order\x20Date\x20:\x20','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Secondary\x20Unit\x20</th>','secondary_unit','bin','prod_code','$_id','$product_details.type','status','maxperunit','Enabled','$warehouse_name','$product','render','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','<strong>\x20Regards\x20</strong>','find','toString','aggregate','room_names','Chinese','map','storage','floorlevel','../public/language/languages.json','English','$product_details.primary_code','$product_details.unit','/view/add_adjustment','ADJ-','exports','prime1','RMSEmail','role','type','$room','<thead\x20style=\x22width:\x20100%\x20!important;\x22>','Raw\x20Materials','$finalize','errors','unit','adjustment\x20data\x20update\x20successfully','flash','bay','product_name','Rooms','forEach','523638GatQbW','<div>','maxPerUnit','</div>','batch_code','_id','error','user','False','<h5>','Enclosed','port','<tbody\x20style=\x22text-align:\x20center;\x22>','</h5>','split','filter','\x20<>\x20','$name','Spanish','$product_details.product_stock','$product_details.secondary_unit','<hr\x20class=\x22my-3\x22>','Shelves','$product_details.isle','$product_details.batch_code','Portuguese','/view','site_title','password','$product_details.bay','$product.product_name','post','json','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room</th>','redirect','Floor','log','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','secondary_code','An\x20error\x20occurred\x20while\x20saving\x20data.','</thead>','product_code','invoice','body','isAllowEdit','room','/adjustment/view','production_date','max_per_unit','warehouse','</tbody>','$product_details._id','adjust_qty','$product_details.secondary_code','</td>','/view/:id','$product_details.maxPerUnit','stock','warehouse_name','3518010EAEWbz','length','$product_details.bin','string','slice','success','384392LDzALT','rack','prod_cat','master','$product_details.pallet','Receiving\x20Area','primary_code','prod_name','express','product_stock','Adjustment\x20Mail','Secondary_units','params','2689710DBRgGf','/CheckingWarehouse','German','Email\x20sent\x20successfully','types','$product_details.floorlevel','findOne','Level','$product_details.rack','createTransport','edit_adjustment_view','catch','Portuguese\x20(BR)','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>'];a0_0x38ad=function(){return _0x33d592;};return a0_0x38ad();}const express=require(a0_0x798013(0x12b)),app=express(),router=express[a0_0x798013(0x176)](),auth=require('../middleware/auth'),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,supervisor_settings,email_settings}=require('../models/all_models'),users=require(a0_0x798013(0xcb)),nodemailer=require('nodemailer');router[a0_0x798013(0x164)](a0_0x798013(0xfc),auth,async(_0x245f49,_0x482ede)=>{var _0x52116e=a0_0x798013;try{const {username:_0x1d5d4c,email:_0x4d56f8,role:_0xd9beab}=_0x245f49[_0x52116e(0xe9)],_0x1b4a49=_0x245f49['user'],_0x569b29=await profile[_0x52116e(0x136)]({'email':_0x1b4a49[_0x52116e(0x172)]}),_0x57ccb5=await master_shop[_0x52116e(0xc3)]();console[_0x52116e(0x106)](_0x52116e(0x126),_0x57ccb5);let _0x9d6a45;if(_0x1b4a49[_0x52116e(0xd4)]=='staff'){const _0x55da99=await staff['findOne']({'email':_0x1b4a49['email']});_0x9d6a45=await warehouse[_0x52116e(0xc3)]({'status':'Enabled','name':_0x55da99[_0x52116e(0x113)]});}else _0x9d6a45=await warehouse[_0x52116e(0xc3)]({'status':_0x52116e(0xbd)});const _0x2a08d2=await product[_0x52116e(0xc3)]();let _0x48555d;if(_0x1b4a49[_0x52116e(0xd4)]=='staff'){const _0x4b5d64=await staff[_0x52116e(0x136)]({'email':_0x1b4a49[_0x52116e(0x172)]});_0x48555d=await adjustment[_0x52116e(0xc3)]({'warehouse_name':_0x4b5d64[_0x52116e(0x113)]});}else _0x48555d=await adjustment[_0x52116e(0xc5)]([{'$unwind':_0x52116e(0xbf)},{'$group':{'_id':_0x52116e(0xb9),'invoice':{'$first':_0x52116e(0xb3)},'date':{'$first':_0x52116e(0x14b)},'warehouse_name':{'$first':_0x52116e(0xbe)},'room':{'$addToSet':_0x52116e(0x174)},'finalize':{'$first':_0x52116e(0xd9)},'isAllowEdit':{'$first':'$isAllowEdit'}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1,'isAllowEdit':0x1}}]);if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0x142)){var _0x2efe6f=users[_0x52116e(0xcc)];console[_0x52116e(0x106)](_0x2efe6f);}else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0x143))var _0x2efe6f=users['Hindi'];else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0x132))var _0x2efe6f=users['German'];else{if(_0x57ccb5[0x0]['language']==_0x52116e(0xf4))var _0x2efe6f=users[_0x52116e(0xf4)];else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]=='French')var _0x2efe6f=users[_0x52116e(0xaf)];else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0x13c))var _0x2efe6f=users[_0x52116e(0xfb)];else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0xc7))var _0x2efe6f=users[_0x52116e(0xc7)];else{if(_0x57ccb5[0x0][_0x52116e(0x14f)]==_0x52116e(0x16c))var _0x2efe6f=users[_0x52116e(0x13f)];}}}}}}}_0x482ede[_0x52116e(0xc0)](_0x52116e(0x13e),{'success':_0x245f49['flash'](_0x52116e(0x122)),'errors':_0x245f49[_0x52116e(0xdd)](_0x52116e(0xda)),'role':_0x1b4a49,'profile':_0x569b29,'warehouse':_0x9d6a45,'product':_0x2a08d2,'adjustment':_0x48555d,'master_shop':_0x57ccb5,'language':_0x2efe6f});}catch(_0x4d4ff4){console[_0x52116e(0x106)](_0x4d4ff4);}});async function getRandom8DigitNumber(){var _0x20f8b0=a0_0x798013;const _0x357c6b=0x989680,_0x63f306=0x5f5e0ff,_0x343f3f=Math[_0x20f8b0(0x155)](Math['random']()*(_0x63f306-_0x357c6b+0x1))+_0x357c6b;var _0x26e341;const _0x3e63c1=await adjustment[_0x20f8b0(0x136)]({'invoice':'ADJ-'+_0x343f3f});return _0x3e63c1&&_0x3e63c1['length']>0x0?_0x26e341=_0x20f8b0(0xd0)+_0x343f3f:_0x26e341=_0x20f8b0(0xd0)+_0x343f3f,_0x26e341;}router[a0_0x798013(0x164)](a0_0x798013(0xcf),auth,async(_0x1fdaf0,_0x58f0e7)=>{var _0x313658=a0_0x798013;try{const {username:_0x7c3d06,email:_0x28e050,role:_0x57f63f}=_0x1fdaf0[_0x313658(0xe9)],_0x3fc5cc=_0x1fdaf0[_0x313658(0xe9)],_0x1625ef=await profile[_0x313658(0x136)]({'email':_0x3fc5cc[_0x313658(0x172)]}),_0x3af594=await master_shop[_0x313658(0xc3)]();let _0x130770;if(_0x3fc5cc[_0x313658(0xd4)]==_0x313658(0x16f)){const _0x3ecc56=await staff[_0x313658(0x136)]({'email':_0x3fc5cc[_0x313658(0x172)]});_0x130770=await warehouse['aggregate']([{'$match':{'status':_0x313658(0xbd),'name':_0x3ecc56[_0x313658(0x113)],'warehouse_category':'Raw\x20Materials','name':{'$ne':_0x313658(0xb1)}}},{'$group':{'_id':_0x313658(0xf3),'name':{'$first':_0x313658(0xf3)}}}]);}else _0x130770=await warehouse['aggregate']([{'$match':{'status':_0x313658(0xbd),'warehouse_category':_0x313658(0xd8),'name':{'$ne':'Return\x20Goods'}}},{'$group':{'_id':'$name','name':{'$first':_0x313658(0xf3)}}}]);const _0x38cc49=await product[_0x313658(0xc3)]({}),_0xa7a0c1=await adjustment[_0x313658(0xc3)]({}),_0x4096dd=_0xa7a0c1['length']+0x1,_0x220dfd=_0x313658(0xd0)+_0x4096dd[_0x313658(0xc4)]()['padStart'](0x5,'0');var _0x34e07a=[_0x313658(0x169),_0x313658(0xec),'Return\x20Rooms'];if(_0x3af594[0x0][_0x313658(0x14f)]=='English\x20(US)')var _0x1eb4fe=users[_0x313658(0xcc)];else{if(_0x3af594[0x0]['language']==_0x313658(0x143))var _0x1eb4fe=users['Hindi'];else{if(_0x3af594[0x0][_0x313658(0x14f)]=='German')var _0x1eb4fe=users[_0x313658(0x132)];else{if(_0x3af594[0x0]['language']==_0x313658(0xf4))var _0x1eb4fe=users['Spanish'];else{if(_0x3af594[0x0][_0x313658(0x14f)]==_0x313658(0xaf))var _0x1eb4fe=users[_0x313658(0xaf)];else{if(_0x3af594[0x0][_0x313658(0x14f)]=='Portuguese\x20(BR)')var _0x1eb4fe=users[_0x313658(0xfb)];else{if(_0x3af594[0x0][_0x313658(0x14f)]==_0x313658(0xc7))var _0x1eb4fe=users[_0x313658(0xc7)];else{if(_0x3af594[0x0][_0x313658(0x14f)]==_0x313658(0x16c))var _0x1eb4fe=users['Arabic'];}}}}}}}const _0x2bed96=getRandom8DigitNumber();_0x2bed96[_0x313658(0x165)](_0xe3cfd2=>{var _0x3b5d60=_0x313658;_0x58f0e7['render'](_0x3b5d60(0x166),{'success':_0x1fdaf0[_0x3b5d60(0xdd)]('success'),'errors':_0x1fdaf0[_0x3b5d60(0xdd)](_0x3b5d60(0xda)),'role':_0x3fc5cc,'profile':_0x1625ef,'warehouse':_0x130770,'product':_0x38cc49,'master_shop':_0x3af594,'language':_0x1eb4fe,'rooms_data':_0x34e07a,'invoice_no':_0xe3cfd2});})[_0x313658(0x13b)](_0x421ad3=>{var _0x36aaa1=_0x313658;_0x1fdaf0['flash'](_0x36aaa1(0xda),_0x36aaa1(0x168)),_0x58f0e7[_0x36aaa1(0x104)](_0x36aaa1(0x110));});}catch(_0x37add7){console[_0x313658(0x106)](_0x37add7);}}),router[a0_0x798013(0x101)](a0_0x798013(0xcf),auth,async(_0x45cb8e,_0xa6c03f)=>{var _0x5157c7=a0_0x798013;try{const {warehouse_name:_0x440210,date:_0x4c55ff,prod_name:_0x459fb0,level:_0x130ef6,isle:_0x1ae811,pallet:_0xddc908,stock:_0x4290f5,types:_0x319995,adjust_qty:_0x834472,new_adjust_qty:_0x3ffdec,note:_0x38902c,Room_name:_0x381e54,invoice:_0x5cd95f,JO_number:_0x3b1785,expiry_date:_0x5ea601}=_0x45cb8e[_0x5157c7(0x10d)];if(typeof _0x459fb0==_0x5157c7(0x120))var _0x4a7903=[_0x45cb8e['body'][_0x5157c7(0x12a)]],_0x4f636c=[_0x45cb8e['body'][_0x5157c7(0x14d)]],_0xcb6756=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x11b)]],_0x441010=[_0x45cb8e['body']['types']],_0x46783b=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x175)]],_0x30ba61=[_0x45cb8e['body'][_0x5157c7(0x15b)]],_0x56f416=[_0x45cb8e['body']['Primary_Units']],_0x4ddfbd=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x12e)]],_0x2ec3fd=[_0x45cb8e[_0x5157c7(0x10d)]['prod_code']],_0x283999=[_0x45cb8e[_0x5157c7(0x10d)]['batch_code']],_0x5b35eb=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0xb0)]],_0x32f1a0=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x112)]],_0x1f9253=[_0x45cb8e[_0x5157c7(0x10d)]['production_date']],_0x21e5e3=[_0x45cb8e[_0x5157c7(0x10d)]['prod_cat']],_0x247130=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0xe0)]],_0x224de1=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0xd2)]],_0x19212c=[_0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x156)]],_0x150397=[_0x45cb8e['body'][_0x5157c7(0x16b)]];else var _0x4a7903=[..._0x45cb8e['body'][_0x5157c7(0x12a)]],_0x4f636c=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x14d)]],_0xcb6756=[..._0x45cb8e['body'][_0x5157c7(0x11b)]],_0x441010=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x134)]],_0x46783b=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x175)]],_0x30ba61=[..._0x45cb8e['body']['New_Qty_Converted']],_0x56f416=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0xdb)]],_0x4ddfbd=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x12e)]],_0x2ec3fd=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0xb8)]],_0x283999=[..._0x45cb8e[_0x5157c7(0x10d)]['batch_code']],_0x5b35eb=[..._0x45cb8e['body'][_0x5157c7(0xb0)]],_0x32f1a0=[..._0x45cb8e['body']['max_per_unit']],_0x1f9253=[..._0x45cb8e[_0x5157c7(0x10d)]['production_date']],_0x21e5e3=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x125)]],_0x247130=[..._0x45cb8e[_0x5157c7(0x10d)]['Rooms']],_0x224de1=[..._0x45cb8e['body'][_0x5157c7(0xd2)]],_0x19212c=[..._0x45cb8e['body'][_0x5157c7(0x156)]],_0x150397=[..._0x45cb8e[_0x5157c7(0x10d)][_0x5157c7(0x16b)]];const _0x40894d=_0x4a7903[_0x5157c7(0xc8)](_0x1b71a0=>{return _0x1b71a0={'product_name':_0x1b71a0};});_0x4f636c[_0x5157c7(0xe1)]((_0x29eedd,_0x5a6d82)=>{var _0x203279=_0x5157c7;_0x247130[_0x203279(0xe1)]((_0x24fc9d,_0x3a9225)=>{var _0x37cd74=_0x203279;if(_0x24fc9d=='Receiving\x20Area'&&_0x5a6d82==_0x3a9225){var _0x31fb5b=_0x29eedd[_0x37cd74(0x121)](0x3);_0x40894d[_0x5a6d82][_0x37cd74(0xc9)]=_0x29eedd[0x0],_0x40894d[_0x5a6d82]['rack']=_0x29eedd[0x1],_0x40894d[_0x5a6d82]['bay']=0x0,_0x40894d[_0x5a6d82][_0x37cd74(0xb7)]=0x0,_0x40894d[_0x5a6d82]['type']=_0x37cd74(0x105),_0x40894d[_0x5a6d82][_0x37cd74(0xca)]=_0x31fb5b;}else{if(_0x24fc9d==_0x37cd74(0xf8)&&_0x5a6d82==_0x3a9225){var _0x31fb5b=_0x29eedd['slice'](0x3);_0x40894d[_0x5a6d82]['storage']=_0x29eedd[0x0],_0x40894d[_0x5a6d82][_0x37cd74(0x124)]=_0x29eedd[0x1],_0x40894d[_0x5a6d82][_0x37cd74(0xde)]=0x0,_0x40894d[_0x5a6d82][_0x37cd74(0xb7)]=0x0,_0x40894d[_0x5a6d82][_0x37cd74(0xd5)]=_0x37cd74(0x105),_0x40894d[_0x5a6d82][_0x37cd74(0xca)]=_0x29eedd[0x5];}else{if(_0x5a6d82==_0x3a9225){var _0x57ddb2;if(_0x29eedd[0x4]=='L')_0x57ddb2=_0x37cd74(0x137);else _0x29eedd[0x4]=='F'&&(_0x57ddb2='Floor');_0x40894d[_0x5a6d82][_0x37cd74(0xc9)]=_0x29eedd[0x0],_0x40894d[_0x5a6d82][_0x37cd74(0x124)]=_0x29eedd[0x1],_0x40894d[_0x5a6d82][_0x37cd74(0xde)]=_0x29eedd[0x2],_0x40894d[_0x5a6d82][_0x37cd74(0xb7)]=_0x29eedd[0x3],_0x40894d[_0x5a6d82][_0x37cd74(0xd5)]=_0x57ddb2,_0x40894d[_0x5a6d82][_0x37cd74(0xca)]=_0x29eedd[0x5];}}}});}),_0xcb6756[_0x5157c7(0xe1)]((_0x5d98f8,_0x2effb3)=>{_0x40894d[_0x2effb3]['stockBefore']=_0x5d98f8;}),_0x441010[_0x5157c7(0xe1)]((_0x3a7ab6,_0x2f8c1b)=>{_0x40894d[_0x2f8c1b]['types']=_0x3a7ab6;}),_0x46783b['forEach']((_0x2be489,_0x5938a8)=>{var _0x137ef8=_0x5157c7;_0x40894d[_0x5938a8][_0x137ef8(0x116)]=_0x2be489;}),_0x30ba61[_0x5157c7(0xe1)]((_0x2c14ee,_0x5a7015)=>{_0x40894d[_0x5a7015]['new_adjust_qty']=_0x2c14ee;}),_0x56f416['forEach']((_0x3adc04,_0x55b65c)=>{var _0x2d9af1=_0x5157c7;_0x40894d[_0x55b65c][_0x2d9af1(0xdb)]=_0x3adc04;}),_0x4ddfbd[_0x5157c7(0xe1)]((_0x30b3a9,_0x24be11)=>{var _0x442df3=_0x5157c7;_0x40894d[_0x24be11][_0x442df3(0xb6)]=_0x30b3a9;}),_0x2ec3fd['forEach']((_0x2292b5,_0x393589)=>{var _0x318aca=_0x5157c7;_0x40894d[_0x393589][_0x318aca(0x10b)]=_0x2292b5;}),_0x283999[_0x5157c7(0xe1)]((_0x3da826,_0x2ddeef)=>{_0x40894d[_0x2ddeef]['batch_code']=_0x3da826;}),_0x5b35eb[_0x5157c7(0xe1)]((_0x325f39,_0x16dbce)=>{_0x40894d[_0x16dbce]['expiry_date']=_0x325f39;}),_0x32f1a0[_0x5157c7(0xe1)]((_0x343cec,_0xd6ac3f)=>{var _0x233696=_0x5157c7;_0x40894d[_0xd6ac3f][_0x233696(0xbc)]=_0x343cec;}),_0x1f9253['forEach']((_0x502f7d,_0x46422b)=>{_0x40894d[_0x46422b]['production_date']=_0x502f7d;}),_0x21e5e3[_0x5157c7(0xe1)]((_0x441b87,_0x3a745e)=>{var _0x39e722=_0x5157c7;_0x40894d[_0x3a745e][_0x39e722(0x125)]=_0x441b87;}),_0x247130['forEach']((_0x37e63a,_0xfcc7f0)=>{var _0x31aa21=_0x5157c7;_0x40894d[_0xfcc7f0][_0x31aa21(0xc6)]=_0x37e63a;}),_0x224de1[_0x5157c7(0xe1)]((_0x4d0e63,_0x76472e)=>{_0x40894d[_0x76472e]['primary_code']=_0x4d0e63;}),_0x19212c[_0x5157c7(0xe1)]((_0x6b3ccd,_0x22a164)=>{_0x40894d[_0x22a164]['secondary_code']=_0x6b3ccd;}),_0x150397[_0x5157c7(0xe1)]((_0x3c01b1,_0x19c3cd)=>{var _0x47bf4f=_0x5157c7;_0x40894d[_0x19c3cd][_0x47bf4f(0x10c)]=_0x3c01b1;});const _0x3d0c80=_0x40894d[_0x5157c7(0xf1)](_0x29cbf8=>_0x29cbf8[_0x5157c7(0x116)]!=='0'&&_0x29cbf8[_0x5157c7(0x116)]!=='');var _0x42aca0=0x0;_0x3d0c80[_0x5157c7(0xe1)](_0x466e22=>{var _0x45c26b=_0x5157c7;console[_0x45c26b(0x106)](_0x45c26b(0x15d),_0x466e22),parseInt(_0x466e22[_0x45c26b(0x116)])<=0x0&&_0x42aca0++;});if(_0x42aca0!=0x0)return _0x45cb8e[_0x5157c7(0xdd)](_0x5157c7(0xda),_0x5157c7(0x15e)),_0xa6c03f[_0x5157c7(0x104)]('back');const _0x34d405=new adjustment({'warehouse_name':_0x440210,'date':_0x4c55ff,'product':_0x3d0c80,'note':_0x38902c,'room':_0x381e54,'invoice':_0x5cd95f,'JO_number':_0x3b1785,'expiry_date':_0x5ea601}),_0x27b3fa=await _0x34d405['save']();_0x45cb8e[_0x5157c7(0xdd)](_0x5157c7(0x122),'adjustment\x20add\x20successfull'),_0xa6c03f[_0x5157c7(0x104)]('/adjustment/preview/'+_0x27b3fa[_0x5157c7(0xe7)]);}catch(_0x3c1e1f){console['log'](_0x3c1e1f),_0xa6c03f['status'](0xc8)[_0x5157c7(0x102)]({'message':_0x3c1e1f[_0x5157c7(0x177)]});}}),router['get'](a0_0x798013(0x14a),auth,async(_0x2657be,_0x4c8e79)=>{var _0x1afbe1=a0_0x798013;try{const {username:_0x41c90c,email:_0x2f26dc,role:_0x2c7900}=_0x2657be[_0x1afbe1(0xe9)],_0x50e135=_0x2657be[_0x1afbe1(0xe9)],_0x5ec658=await profile[_0x1afbe1(0x136)]({'email':_0x50e135[_0x1afbe1(0x172)]}),_0x2cacf3=await master_shop[_0x1afbe1(0xc3)](),_0x1951ba=_0x2657be[_0x1afbe1(0x12f)]['id'],_0xdb6590=await adjustment[_0x1afbe1(0x15a)]({'_id':_0x1951ba}),_0x210db4=await purchases[_0x1afbe1(0xc5)]([{'$match':{'warehouse_name':_0xdb6590['warehouse_name']}},{'$unwind':_0x1afbe1(0xbf)},{'$group':{'_id':_0x1afbe1(0x100)}}]),_0x5cc92f=await product[_0x1afbe1(0xc3)]({}),_0x42986b=await warehouse[_0x1afbe1(0xc5)]([{'$match':{'name':_0xdb6590[_0x1afbe1(0x11c)]}},{'$unwind':_0x1afbe1(0x170)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x1afbe1(0x150)},'product_stock':{'$first':_0x1afbe1(0xf5)},'bay':{'$first':_0x1afbe1(0xff)},'bin':{'$first':_0x1afbe1(0x11f)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x1afbe1(0x135)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x1afbe1(0x117)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x1afbe1(0x144)},'rack':{'$first':_0x1afbe1(0x138)},'maxPerUnit':{'$first':_0x1afbe1(0x11a)},'expiry_date':{'$first':_0x1afbe1(0x16d)},'production_date':{'$first':_0x1afbe1(0x157)},'batch_code':{'$first':_0x1afbe1(0xfa)},'room':{'$first':_0x1afbe1(0xd6)}}}]);if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]==_0x1afbe1(0x142)){var _0x65387d=users['English'];console[_0x1afbe1(0x106)](_0x65387d);}else{if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]==_0x1afbe1(0x143))var _0x65387d=users[_0x1afbe1(0x143)];else{if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]==_0x1afbe1(0x132))var _0x65387d=users['German'];else{if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]=='Spanish')var _0x65387d=users[_0x1afbe1(0xf4)];else{if(_0x2cacf3[0x0]['language']=='French')var _0x65387d=users[_0x1afbe1(0xaf)];else{if(_0x2cacf3[0x0]['language']==_0x1afbe1(0x13c))var _0x65387d=users['Portuguese'];else{if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]==_0x1afbe1(0xc7))var _0x65387d=users[_0x1afbe1(0xc7)];else{if(_0x2cacf3[0x0][_0x1afbe1(0x14f)]==_0x1afbe1(0x16c))var _0x65387d=users['Arabic'];}}}}}}}_0x4c8e79[_0x1afbe1(0xc0)](_0x1afbe1(0x13a),{'success':_0x2657be['flash'](_0x1afbe1(0x122)),'errors':_0x2657be[_0x1afbe1(0xdd)](_0x1afbe1(0xda)),'role':_0x50e135,'profile':_0x5ec658,'adjustment':_0xdb6590,'stock':_0x42986b,'master_shop':_0x2cacf3,'warehouse_name':_0x210db4,'unit':_0x5cc92f,'language':_0x65387d});}catch(_0xedab5e){console[_0x1afbe1(0x106)](_0xedab5e),_0x4c8e79[_0x1afbe1(0xbb)](0xc8)[_0x1afbe1(0x102)]({'message':_0xedab5e[_0x1afbe1(0x177)]});}}),router[a0_0x798013(0x101)](a0_0x798013(0x14a),auth,async(_0x4f9863,_0x3ac879)=>{var _0x17df4a=a0_0x798013;try{const _0x3dbbd1=_0x4f9863[_0x17df4a(0x12f)]['id'],{warehouse_name:_0x3233f2,Room_name:_0x247aa3}=_0x4f9863['body'],_0x322b7b=await adjustment['findById']({'_id':_0x3dbbd1}),_0x2a7130=_0x322b7b[_0x17df4a(0x162)][_0x17df4a(0xc8)](async _0x531c9d=>{var _0x2ed565=_0x17df4a;if(_0x531c9d['adjust_qty']>0x0){var _0x472515=await warehouse['findOne']({'name':_0x3233f2,'room':_0x531c9d[_0x2ed565(0xc6)],'warehouse_category':_0x2ed565(0xd8)});const _0xd338f2=_0x472515[_0x2ed565(0x148)][_0x2ed565(0xc8)](_0x28b697=>{var _0x287dba=_0x2ed565;if(_0x531c9d[_0x287dba(0xd5)]=='minus'){if(_0x28b697[_0x287dba(0xdf)]==_0x531c9d[_0x287dba(0xdf)]&&_0x28b697[_0x287dba(0xca)]==_0x531c9d[_0x287dba(0xca)]&&_0x28b697['type']==_0x531c9d[_0x287dba(0xd5)]&&_0x28b697[_0x287dba(0xb7)]==_0x531c9d[_0x287dba(0xb7)]&&_0x28b697[_0x287dba(0xde)]==_0x531c9d[_0x287dba(0xde)]&&_0x28b697[_0x287dba(0x124)]==_0x531c9d['rack']&&_0x28b697[_0x287dba(0xc9)]==_0x531c9d[_0x287dba(0xc9)]&&_0x28b697[_0x287dba(0xb0)]==_0x531c9d[_0x287dba(0xb0)]&&_0x28b697[_0x287dba(0xe6)]==_0x531c9d['batch_code']&&_0x28b697[_0x287dba(0x111)]==_0x531c9d[_0x287dba(0x111)]&&_0x28b697[_0x287dba(0x10c)]==_0x531c9d[_0x287dba(0x10c)]){var _0x142ce2;_0x142ce2=_0x531c9d[_0x287dba(0x116)],_0x531c9d[_0x287dba(0x125)]=='S'&&(_0x142ce2=_0x531c9d['adjust_qty']),_0x28b697[_0x287dba(0x12c)]=_0x28b697[_0x287dba(0x12c)]-_0x142ce2;}}else{if(_0x28b697[_0x287dba(0xdf)]==_0x531c9d[_0x287dba(0xdf)]&&_0x28b697[_0x287dba(0xca)]==_0x531c9d['floorlevel']&&_0x28b697['type']==_0x531c9d[_0x287dba(0xd5)]&&_0x28b697[_0x287dba(0xb7)]==_0x531c9d[_0x287dba(0xb7)]&&_0x28b697[_0x287dba(0xde)]==_0x531c9d[_0x287dba(0xde)]&&_0x28b697['rack']==_0x531c9d[_0x287dba(0x124)]&&_0x28b697[_0x287dba(0xc9)]==_0x531c9d['storage']&&_0x28b697[_0x287dba(0xb0)]==_0x531c9d[_0x287dba(0xb0)]&&_0x28b697['batch_code']==_0x531c9d[_0x287dba(0xe6)]&&_0x28b697['production_date']==_0x531c9d['production_date']&&_0x28b697['invoice']==_0x531c9d[_0x287dba(0x10c)]){console[_0x287dba(0x106)](_0x531c9d);var _0x142ce2;_0x142ce2=_0x531c9d[_0x287dba(0x116)],_0x531c9d['prod_cat']=='S'&&(_0x142ce2=_0x531c9d[_0x287dba(0x116)]),console[_0x287dba(0x106)](_0x142ce2+_0x287dba(0xf2)+_0x531c9d['adjust_qty']+_0x287dba(0xf2)+_0x28b697[_0x287dba(0xe4)]+_0x287dba(0xf2)+_0x531c9d[_0x287dba(0x125)]),_0x28b697[_0x287dba(0x12c)]=_0x28b697['product_stock']+_0x142ce2;}}});}return _0x472515;});Promise[_0x17df4a(0x16a)](_0x2a7130)['then'](async _0xa7cde2=>{var _0x26f1a9=_0x17df4a;try{for(const _0x3fab4b of _0xa7cde2){await _0x3fab4b[_0x26f1a9(0x159)]();}_0x322b7b['finalize']='True';const _0x4385ae=await _0x322b7b['save'](),_0xe5283e=await master_shop[_0x26f1a9(0xc3)](),_0x1d7797=await email_settings[_0x26f1a9(0x136)](),_0x411fd3=await supervisor_settings[_0x26f1a9(0xc3)]();var _0x48537c=_0x322b7b[_0x26f1a9(0x162)],_0x4d1202='',_0x5cb99c;for(_0x5cb99c in _0x48537c){_0x4d1202+=_0x26f1a9(0x14e)+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c][_0x26f1a9(0xdf)]+_0x26f1a9(0x118)+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c][_0x26f1a9(0x10b)]+_0x26f1a9(0x118)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x48537c[_0x5cb99c]['adjust_qty']+_0x26f1a9(0x118)+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c][_0x26f1a9(0xdb)]+_0x26f1a9(0x118)+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c][_0x26f1a9(0xb6)]+'</td>'+_0x26f1a9(0xc1)+_0x322b7b[_0x26f1a9(0x11c)]+'</td>'+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c]['room_names']+_0x26f1a9(0x118)+_0x26f1a9(0xc1)+_0x48537c[_0x5cb99c][_0x26f1a9(0xc9)]+_0x48537c[_0x5cb99c][_0x26f1a9(0x124)]+_0x48537c[_0x5cb99c]['bay']+_0x48537c[_0x5cb99c][_0x26f1a9(0xb7)]+_0x48537c[_0x5cb99c]['type'][0x0]+_0x48537c[_0x5cb99c][_0x26f1a9(0xca)]+_0x26f1a9(0x118),'</tr>';}let _0xfc70cc=nodemailer[_0x26f1a9(0x139)]({'host':_0x1d7797['host'],'port':Number(_0x1d7797[_0x26f1a9(0xed)]),'secure':![],'auth':{'user':_0x1d7797[_0x26f1a9(0x172)],'pass':_0x1d7797[_0x26f1a9(0xfe)]}}),_0x43b5e6={'from':_0x1d7797[_0x26f1a9(0x172)],'to':_0x411fd3[0x0][_0x26f1a9(0xd3)],'subject':_0x26f1a9(0x12d),'attachments':[{'filename':_0x26f1a9(0x145),'path':__dirname+'/../public'+'/upload/'+_0xe5283e[0x0][_0x26f1a9(0x146)],'cid':'logo'}],'html':'<!DOCTYPE\x20html>'+'<html><head><title></title>'+_0x26f1a9(0x178)+_0x26f1a9(0xe3)+_0x26f1a9(0x13d)+_0x26f1a9(0xe3)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x26f1a9(0xe5)+_0x26f1a9(0xe3)+'<h2>\x20'+_0xe5283e[0x0][_0x26f1a9(0xfd)]+_0x26f1a9(0x16e)+_0x26f1a9(0xe5)+_0x26f1a9(0xe5)+_0x26f1a9(0xf7)+_0x26f1a9(0xe3)+'<h5\x20style=\x22text-align:\x20left;\x22>'+_0x26f1a9(0x140)+_0x322b7b[_0x26f1a9(0x10c)]+'\x20'+_0x26f1a9(0xb2)+_0x26f1a9(0xb4)+_0x322b7b['date']+'\x20'+'</span>'+_0x26f1a9(0xef)+'</div>'+'<table\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x26f1a9(0xd7)+_0x26f1a9(0x14e)+_0x26f1a9(0x154)+_0x26f1a9(0x141)+_0x26f1a9(0x107)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>'+_0x26f1a9(0xb5)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Warehouse</th>'+_0x26f1a9(0x103)+_0x26f1a9(0x167)+'</tr>'+_0x26f1a9(0x10a)+_0x26f1a9(0xee)+'\x20'+_0x4d1202+'\x20'+_0x26f1a9(0x114)+'</table>'+_0x26f1a9(0xe3)+_0x26f1a9(0xc2)+_0x26f1a9(0xeb)+_0xe5283e[0x0][_0x26f1a9(0xfd)]+_0x26f1a9(0xef)+_0x26f1a9(0xe5)+'</div>'+'</body></html>'};_0xfc70cc['sendMail'](_0x43b5e6,function(_0x4ce35a,_0x545209){var _0x456dea=_0x26f1a9;_0x4ce35a?(console[_0x456dea(0x106)](_0x4ce35a),console[_0x456dea(0x106)]('Error\x20Occurs')):console[_0x456dea(0x106)](_0x456dea(0x133));}),_0x4f9863['flash']('success',_0x26f1a9(0x161)),_0x3ac879['redirect'](_0x26f1a9(0x14c)+_0x4385ae[_0x26f1a9(0xe7)]);}catch(_0x58c8c6){console[_0x26f1a9(0xe8)](_0x58c8c6),_0x3ac879[_0x26f1a9(0xbb)](0x1f4)['json']({'error':_0x26f1a9(0x109)});}})['catch'](_0x5d21bb=>{var _0x4ed906=_0x17df4a;console[_0x4ed906(0xe8)](_0x5d21bb),_0x3ac879['status'](0x1f4)[_0x4ed906(0x102)]({'error':'An\x20error\x20occurred.'});});}catch(_0x3c2060){console[_0x17df4a(0x106)](_0x3c2060),_0x3ac879[_0x17df4a(0xbb)](0xc8)['json']({'message':_0x3c2060[_0x17df4a(0x177)]});}}),router[a0_0x798013(0x164)](a0_0x798013(0x119),auth,async(_0xe75f57,_0x264b45)=>{var _0x5a9f30=a0_0x798013;try{const {username:_0x29cf68,email:_0x13ccb8,role:_0x2921c5}=_0xe75f57['user'],_0x2f4f67=_0xe75f57['user'],_0x1ff12c=await profile[_0x5a9f30(0x136)]({'email':_0x2f4f67[_0x5a9f30(0x172)]}),_0x28af46=await master_shop['find'](),_0x3ed87e=_0xe75f57['params']['id'],_0x5ed3e6=await adjustment['findById']({'_id':_0x3ed87e}),_0xe016f6=await purchases[_0x5a9f30(0xc5)]([{'$match':{'warehouse_name':_0x5ed3e6['warehouse_name']}},{'$unwind':'$product'},{'$group':{'_id':_0x5a9f30(0x100)}}]),_0x25d5b5=await product['find']({}),_0x4952e4=await warehouse[_0x5a9f30(0xc5)]([{'$match':{'name':_0x5ed3e6[_0x5a9f30(0x11c)]}},{'$unwind':_0x5a9f30(0x170)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x5a9f30(0x150)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x5a9f30(0xff)},'bin':{'$first':_0x5a9f30(0x11f)},'type':{'$first':'$product_details.type'},'floorlevel':{'$first':_0x5a9f30(0x135)},'primary_code':{'$first':_0x5a9f30(0xcd)},'secondary_code':{'$first':_0x5a9f30(0x117)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x5a9f30(0x138)},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'expiry_date':{'$first':_0x5a9f30(0x16d)},'production_date':{'$first':'$product_details.production_date'},'batch_code':{'$first':_0x5a9f30(0xfa)},'room':{'$first':_0x5a9f30(0xd6)}}}]);let _0x40c7bb;if(_0x2f4f67['role']==_0x5a9f30(0x16f)){const _0xdd7f7b=await staff['findOne']({'email':_0x2f4f67['email']});_0x40c7bb=await warehouse[_0x5a9f30(0xc5)]([{'$match':{'status':_0x5a9f30(0xbd),'name':_0xdd7f7b[_0x5a9f30(0x113)],'warehouse_category':_0x5a9f30(0xd8),'name':{'$ne':_0x5a9f30(0xb1)}}},{'$group':{'_id':_0x5a9f30(0xf3),'name':{'$first':'$name'}}}]);}else _0x40c7bb=await warehouse['aggregate']([{'$match':{'status':'Enabled','warehouse_category':_0x5a9f30(0xd8),'name':{'$ne':_0x5a9f30(0xb1)}}},{'$group':{'_id':_0x5a9f30(0xf3),'name':{'$first':_0x5a9f30(0xf3)}}}]);if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0x142)){var _0x44795f=users['English'];console['log'](_0x44795f);}else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0x143))var _0x44795f=users['Hindi'];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]=='German')var _0x44795f=users[_0x5a9f30(0x132)];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]=='Spanish')var _0x44795f=users[_0x5a9f30(0xf4)];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0xaf))var _0x44795f=users[_0x5a9f30(0xaf)];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0x13c))var _0x44795f=users[_0x5a9f30(0xfb)];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0xc7))var _0x44795f=users['Chinese'];else{if(_0x28af46[0x0][_0x5a9f30(0x14f)]==_0x5a9f30(0x16c))var _0x44795f=users['Arabic'];}}}}}}}_0x264b45['render'](_0x5a9f30(0x149),{'success':_0xe75f57[_0x5a9f30(0xdd)]('success'),'errors':_0xe75f57[_0x5a9f30(0xdd)](_0x5a9f30(0xda)),'role':_0x2f4f67,'profile':_0x1ff12c,'adjustment':_0x5ed3e6,'stock':_0x4952e4,'master_shop':_0x28af46,'warehouse_name':_0xe016f6,'unit':_0x25d5b5,'language':_0x44795f,'warehouse':_0x40c7bb});}catch(_0x33bb7c){console[_0x5a9f30(0x106)](_0x33bb7c),_0x264b45[_0x5a9f30(0xbb)](0xc8)['json']({'message':_0x33bb7c[_0x5a9f30(0x177)]});}}),router['post'](a0_0x798013(0x119),auth,async(_0x40789,_0x9d459)=>{var _0x1a5039=a0_0x798013;try{const _0x242fb6=_0x40789[_0x1a5039(0x12f)]['id'],_0x298eed=await adjustment[_0x1a5039(0x15a)]({'_id':_0x242fb6}),_0x8b927c=await warehouse['findOne']({'name':_0x298eed['warehouse_name'],'room':_0x298eed[_0x1a5039(0x10f)]}),{warehouse_name:_0xf063be,date:_0x4a35f4,prod_name:_0x5d11f9,level:_0x2ab344,isle:_0x57a72e,pallet:_0x2602b8,stock:_0x534330,types:_0x2c7b9b,adjust_qty:_0x3a13bc,new_adjust_qty:_0x411ea0,note:_0x48eeca,Room_name:_0x57bccf,invoice:_0x1be7d0,JO_number:_0x3887d8,expiry_date:_0x2326d0}=_0x40789[_0x1a5039(0x10d)];if(typeof _0x5d11f9=='string')var _0x5b1276=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x12a)]],_0x3627d1=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x14d)]],_0x4167a3=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x11b)]],_0x4294f2=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x134)]],_0x23ca62=[_0x40789['body'][_0x1a5039(0x175)]],_0x1f9722=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x15b)]],_0x50737a=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x173)]],_0x5a4a2a=[_0x40789[_0x1a5039(0x10d)]['Secondary_units']],_0x2849b5=[_0x40789['body'][_0x1a5039(0xb8)]],_0x6f86ea=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0xe6)]],_0x4b9c69=[_0x40789['body'][_0x1a5039(0xb0)]],_0x2ea244=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x112)]],_0x2e72c0=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x111)]],_0x17b06e=[_0x40789[_0x1a5039(0x10d)][_0x1a5039(0x125)]],_0x386224=[_0x40789[_0x1a5039(0x10d)]['Rooms']],_0x19855d=[_0x40789[_0x1a5039(0x10d)]['prime1']],_0x516fba=[_0x40789['body'][_0x1a5039(0x156)]];else var _0x5b1276=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x12a)]],_0x3627d1=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x14d)]],_0x4167a3=[..._0x40789[_0x1a5039(0x10d)]['stock']],_0x4294f2=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x134)]],_0x23ca62=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x175)]],_0x1f9722=[..._0x40789['body']['New_Qty_Converted']],_0x50737a=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0xdb)]],_0x5a4a2a=[..._0x40789['body'][_0x1a5039(0x12e)]],_0x2849b5=[..._0x40789[_0x1a5039(0x10d)]['prod_code']],_0x6f86ea=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0xe6)]],_0x4b9c69=[..._0x40789[_0x1a5039(0x10d)]['expiry_date']],_0x2ea244=[..._0x40789['body'][_0x1a5039(0x112)]],_0x2e72c0=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x111)]],_0x17b06e=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x125)]],_0x386224=[..._0x40789[_0x1a5039(0x10d)]['Rooms']],_0x19855d=[..._0x40789[_0x1a5039(0x10d)]['prime1']],_0x516fba=[..._0x40789[_0x1a5039(0x10d)][_0x1a5039(0x156)]];const _0x1bd9ba=_0x5b1276[_0x1a5039(0xc8)](_0x2b382e=>{return _0x2b382e={'product_name':_0x2b382e};});_0x3627d1['forEach']((_0x393a6a,_0xcb57aa)=>{var _0x2e7111=_0x1a5039;_0x386224[_0x2e7111(0xe1)]((_0x99f3a7,_0x8c761c)=>{var _0x1819c1=_0x2e7111;if(_0x99f3a7==_0x1819c1(0x128)&&_0xcb57aa==_0x8c761c){var _0x22efb9=_0x393a6a[_0x1819c1(0x121)](0x3);_0x1bd9ba[_0xcb57aa][_0x1819c1(0xc9)]=_0x393a6a[0x0],_0x1bd9ba[_0xcb57aa][_0x1819c1(0x124)]=_0x393a6a[0x1],_0x1bd9ba[_0xcb57aa][_0x1819c1(0xde)]=0x0,_0x1bd9ba[_0xcb57aa][_0x1819c1(0xb7)]=0x0,_0x1bd9ba[_0xcb57aa]['type']=_0x1819c1(0x105),_0x1bd9ba[_0xcb57aa][_0x1819c1(0xca)]=_0x22efb9;}else{if(_0x99f3a7=='Shelves'&&_0xcb57aa==_0x8c761c){var _0x22efb9=_0x393a6a[_0x1819c1(0x121)](0x3);_0x1bd9ba[_0xcb57aa][_0x1819c1(0xc9)]=_0x393a6a[0x0],_0x1bd9ba[_0xcb57aa][_0x1819c1(0x124)]=_0x393a6a[0x1],_0x1bd9ba[_0xcb57aa][_0x1819c1(0xde)]=0x0,_0x1bd9ba[_0xcb57aa]['bin']=0x0,_0x1bd9ba[_0xcb57aa]['type']='Floor',_0x1bd9ba[_0xcb57aa]['floorlevel']=_0x393a6a[0x5];}else{if(_0xcb57aa==_0x8c761c){var _0x44a627;if(_0x393a6a[0x4]=='L')_0x44a627=_0x1819c1(0x137);else _0x393a6a[0x4]=='F'&&(_0x44a627='Floor');_0x1bd9ba[_0xcb57aa][_0x1819c1(0xc9)]=_0x393a6a[0x0],_0x1bd9ba[_0xcb57aa][_0x1819c1(0x124)]=_0x393a6a[0x1],_0x1bd9ba[_0xcb57aa]['bay']=_0x393a6a[0x2],_0x1bd9ba[_0xcb57aa]['bin']=_0x393a6a[0x3],_0x1bd9ba[_0xcb57aa][_0x1819c1(0xd5)]=_0x44a627,_0x1bd9ba[_0xcb57aa]['floorlevel']=_0x393a6a[0x5];}}}});}),_0x4167a3[_0x1a5039(0xe1)]((_0x55d60d,_0x5ca2d3)=>{var _0x4fc538=_0x1a5039;_0x1bd9ba[_0x5ca2d3][_0x4fc538(0x152)]=_0x55d60d;}),_0x4294f2[_0x1a5039(0xe1)]((_0x3c2071,_0x3a627d)=>{_0x1bd9ba[_0x3a627d]['types']=_0x3c2071;}),_0x23ca62[_0x1a5039(0xe1)]((_0x3f073c,_0x65fcd5)=>{var _0x178bae=_0x1a5039;_0x1bd9ba[_0x65fcd5][_0x178bae(0x116)]=_0x3f073c;}),_0x1f9722[_0x1a5039(0xe1)]((_0xbc7151,_0x301021)=>{_0x1bd9ba[_0x301021]['new_adjust_qty']=_0xbc7151;}),_0x50737a[_0x1a5039(0xe1)]((_0x21799c,_0x1a940e)=>{var _0x5872ee=_0x1a5039;_0x1bd9ba[_0x1a940e][_0x5872ee(0xdb)]=_0x21799c;}),_0x5a4a2a[_0x1a5039(0xe1)]((_0x4f6ea3,_0x4c6fc0)=>{_0x1bd9ba[_0x4c6fc0]['secondary_unit']=_0x4f6ea3;}),_0x2849b5[_0x1a5039(0xe1)]((_0x3febe2,_0x4785ee)=>{_0x1bd9ba[_0x4785ee]['product_code']=_0x3febe2;}),_0x6f86ea[_0x1a5039(0xe1)]((_0x582b8e,_0x736b57)=>{_0x1bd9ba[_0x736b57]['batch_code']=_0x582b8e;}),_0x4b9c69[_0x1a5039(0xe1)]((_0x2cd27e,_0x587764)=>{var _0x1e8e53=_0x1a5039;_0x1bd9ba[_0x587764][_0x1e8e53(0xb0)]=_0x2cd27e;}),_0x2ea244[_0x1a5039(0xe1)]((_0x18b5a4,_0x505098)=>{var _0x4b002b=_0x1a5039;_0x1bd9ba[_0x505098][_0x4b002b(0xbc)]=_0x18b5a4;}),_0x2e72c0[_0x1a5039(0xe1)]((_0x4f6f86,_0x3d0487)=>{var _0x3329d5=_0x1a5039;_0x1bd9ba[_0x3d0487][_0x3329d5(0x111)]=_0x4f6f86;}),_0x17b06e[_0x1a5039(0xe1)]((_0x578ccd,_0x14e7cb)=>{_0x1bd9ba[_0x14e7cb]['prod_cat']=_0x578ccd;}),_0x386224['forEach']((_0x5d2b8b,_0xe03fa7)=>{var _0xb05f05=_0x1a5039;_0x1bd9ba[_0xe03fa7][_0xb05f05(0xc6)]=_0x5d2b8b;}),_0x19855d['forEach']((_0x356881,_0x3c7ef4)=>{var _0x588963=_0x1a5039;_0x1bd9ba[_0x3c7ef4][_0x588963(0x129)]=_0x356881;}),_0x516fba['forEach']((_0x5b76d4,_0x266cc7)=>{var _0x5e2180=_0x1a5039;_0x1bd9ba[_0x266cc7][_0x5e2180(0x108)]=_0x5b76d4;});const _0x1557a6=_0x1bd9ba[_0x1a5039(0xf1)](_0x571021=>_0x571021[_0x1a5039(0x116)]!=='0'&&_0x571021[_0x1a5039(0x116)]!=='');var _0x35553e=0x0;_0x1557a6[_0x1a5039(0xe1)](_0x57bbdb=>{var _0x399b4b=_0x1a5039;console[_0x399b4b(0x106)](_0x399b4b(0x15d),_0x57bbdb),parseInt(_0x57bbdb[_0x399b4b(0x116)])<=0x0&&_0x35553e++;});if(_0x35553e!=0x0)return _0x40789['flash'](_0x1a5039(0xda),_0x1a5039(0x15e)),_0x9d459[_0x1a5039(0x104)]('back');_0x298eed[_0x1a5039(0x11c)]=_0xf063be,_0x298eed[_0x1a5039(0x160)]=_0x4a35f4,_0x298eed[_0x1a5039(0x162)]=_0x1557a6,_0x298eed['note']=_0x48eeca,_0x298eed[_0x1a5039(0x10c)]=_0x1be7d0,_0x298eed[_0x1a5039(0x10e)]=_0x1a5039(0xea);const _0x5a38ca=await _0x298eed[_0x1a5039(0x159)]();_0x40789[_0x1a5039(0xdd)](_0x1a5039(0x122),_0x1a5039(0xdc)),_0x9d459[_0x1a5039(0x104)](_0x1a5039(0x110));}catch(_0x20bdf4){console[_0x1a5039(0x106)](_0x20bdf4);}}),router['post']('/barcode_scanner',async(_0x544774,_0x4a26ad)=>{var _0x557b3e=a0_0x798013;const {primary_code:_0x50542f,warehouse_data:_0x23bdae,rooms_data:_0x1cc682,Roomslist:_0x1f6444}=_0x544774['body'],_0x4594e0=_0x1f6444[_0x557b3e(0xf0)](','),_0x4537a2=[];async function _0x11d9d4(_0x14d90b){var _0xef1e06=_0x557b3e;const _0x4ca995=await warehouse[_0xef1e06(0xc5)]([{'$match':{'name':_0x23bdae,'room':_0x14d90b}},{'$unwind':'$product_details'},{'$match':{'product_details.primary_code':_0x50542f}},{'$group':{'_id':_0xef1e06(0x115),'name':{'$first':_0xef1e06(0x150)},'product_stock':{'$first':'$product_details.product_stock'},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0xef1e06(0x117)},'product_code':{'$first':_0xef1e06(0x163)},'level':{'$first':_0xef1e06(0xff)},'isle':{'$first':_0xef1e06(0x11f)},'type':{'$first':_0xef1e06(0xba)},'pallet':{'$first':_0xef1e06(0x135)},'unit':{'$first':'$product_details.unit'},'secondary_unit':{'$first':_0xef1e06(0xf6)},'storage':{'$first':_0xef1e06(0x144)},'rack':{'$first':_0xef1e06(0x138)},'expiry_date':{'$first':_0xef1e06(0x16d)},'production_date':{'$first':_0xef1e06(0x157)},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'batch_code':{'$first':_0xef1e06(0xfa)},'product_cat':{'$first':'$product_details.product_cat'},'computeUsed':{'$first':'P'},'roomNamed':{'$first':'$room'}}}]),_0x28d6e3=await warehouse[_0xef1e06(0xc5)]([{'$match':{'name':_0x23bdae,'room':_0x14d90b}},{'$unwind':_0xef1e06(0x170)},{'$match':{'product_details.secondary_code':_0x50542f}},{'$group':{'_id':_0xef1e06(0x115),'name':{'$first':_0xef1e06(0x150)},'product_stock':{'$first':_0xef1e06(0xf5)},'primary_code':{'$first':_0xef1e06(0xcd)},'secondary_code':{'$first':_0xef1e06(0x117)},'product_code':{'$first':'$product_details.product_code'},'level':{'$first':'$product_details.bay'},'isle':{'$first':_0xef1e06(0x11f)},'type':{'$first':_0xef1e06(0xba)},'pallet':{'$first':_0xef1e06(0x135)},'unit':{'$first':_0xef1e06(0xce)},'secondary_unit':{'$first':_0xef1e06(0xf6)},'storage':{'$first':_0xef1e06(0x144)},'rack':{'$first':_0xef1e06(0x138)},'expiry_date':{'$first':_0xef1e06(0x16d)},'production_date':{'$first':_0xef1e06(0x157)},'maxPerUnit':{'$first':_0xef1e06(0x11a)},'batch_code':{'$first':'$product_details.batch_code'},'product_cat':{'$first':'$product_details.product_cat'},'computeUsed':{'$first':'S'},'roomNamed':{'$first':_0xef1e06(0xd6)}}}]);if(_0x4ca995[_0xef1e06(0x11e)]>0x0)_0x4537a2['push'](_0x4ca995);else _0x28d6e3['length']>0x0&&_0x4537a2['push'](_0x28d6e3);}const _0x1d6174=_0x4594e0[_0x557b3e(0xc8)](_0x1342d9=>_0x11d9d4(_0x1342d9));await Promise[_0x557b3e(0x16a)](_0x1d6174),_0x4a26ad[_0x557b3e(0x102)](_0x4537a2);}),router[a0_0x798013(0x101)](a0_0x798013(0x131),async(_0x41b5a6,_0x582b3b)=>{var _0x5c1705=a0_0x798013;const {primaryCode:_0x25d6b3,secondaryCode:_0xadff8,productCode:_0x2529c0,level:_0x443056,isle:_0x17797f,pallet:_0x4d1233,warehouses:_0x2993a8,room:_0x5e1a0b}=_0x41b5a6['body'];try{const _0x3754be=await warehouse[_0x5c1705(0xc5)]([{'$match':{'name':_0x2993a8,'room':_0x5e1a0b}},{'$unwind':_0x5c1705(0x170)},{'$match':{'product_details.level':parseInt(_0x443056),'product_details.isle':_0x17797f,'product_details.pallet':parseInt(_0x4d1233)}},{'$group':{'_id':_0x5c1705(0x115),'name':{'$first':_0x5c1705(0x150)},'product_stock':{'$first':_0x5c1705(0xf5)},'level':{'$first':_0x5c1705(0x153)},'isle':{'$first':_0x5c1705(0xf9)},'pallet':{'$first':_0x5c1705(0x127)},'maxProducts':{'$first':'$product_details.maxProducts'}}}]);_0x582b3b['status'](0xc8)[_0x5c1705(0x102)](_0x3754be);}catch(_0x3f507f){_0x582b3b['status'](0x194)[_0x5c1705(0x102)]({'message':_0x3f507f[_0x5c1705(0x177)]});}}),module[a0_0x798013(0xd1)]=router;