var a0_0x19210c=a0_0x3357;(function(_0x175a22,_0x121840){var _0x42bb39=a0_0x3357,_0x2266f1=_0x175a22();while(!![]){try{var _0x2d5fbe=-parseInt(_0x42bb39(0x18f))/0x1*(parseInt(_0x42bb39(0x228))/0x2)+parseInt(_0x42bb39(0x1cd))/0x3+-parseInt(_0x42bb39(0x207))/0x4*(parseInt(_0x42bb39(0x1c9))/0x5)+parseInt(_0x42bb39(0x1fc))/0x6+-parseInt(_0x42bb39(0x1ea))/0x7+-parseInt(_0x42bb39(0x224))/0x8*(-parseInt(_0x42bb39(0x1f7))/0x9)+-parseInt(_0x42bb39(0x21d))/0xa*(parseInt(_0x42bb39(0x17b))/0xb);if(_0x2d5fbe===_0x121840)break;else _0x2266f1['push'](_0x2266f1['shift']());}catch(_0x5e269c){_0x2266f1['push'](_0x2266f1['shift']());}}}(a0_0x3e2d,0xee6ab));const express=require(a0_0x19210c(0x19a)),app=express(),router=express['Router'](),auth=require(a0_0x19210c(0x1f1)),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,adjustment_finished,email_settings,supervisor_settings}=require(a0_0x19210c(0x21a)),users=require(a0_0x19210c(0x1d7)),nodemailer=require('nodemailer');function a0_0x3357(_0x509615,_0x13da98){var _0x3e2dd7=a0_0x3e2d();return a0_0x3357=function(_0x33571f,_0x1e8be9){_0x33571f=_0x33571f-0x168;var _0x513bcc=_0x3e2dd7[_0x33571f];return _0x513bcc;},a0_0x3357(_0x509615,_0x13da98);}router[a0_0x19210c(0x188)]('/view',auth,async(_0x48fcdb,_0x36a4fd)=>{var _0x1e7724=a0_0x19210c;try{const {username:_0x15a5be,email:_0x4880d6,role:_0x25d8c3}=_0x48fcdb[_0x1e7724(0x178)],_0x471867=_0x48fcdb[_0x1e7724(0x178)],_0x514b9e=await profile[_0x1e7724(0x16a)]({'email':_0x471867['email']}),_0x426176=await master_shop[_0x1e7724(0x19c)]();let _0x3c47af;if(_0x471867['role']==_0x1e7724(0x205)){const _0x1c1cb9=await staff[_0x1e7724(0x16a)]({'email':_0x471867[_0x1e7724(0x1fe)]});_0x3c47af=await warehouse['find']({'status':'Enabled','name':_0x1c1cb9['warehouse']});}else _0x3c47af=await warehouse['find']({'status':_0x1e7724(0x18d)});const _0x1bdff4=await product[_0x1e7724(0x19c)]();let _0x553724;if(_0x471867[_0x1e7724(0x1a7)]=='staff'){const _0x1d5d94=await staff[_0x1e7724(0x16a)]({'email':_0x471867[_0x1e7724(0x1fe)]});_0x553724=await adjustment_finished['find']({'warehouse_name':_0x1d5d94['warehouse']});}else _0x553724=await adjustment_finished[_0x1e7724(0x1a4)]([{'$unwind':_0x1e7724(0x1dc)},{'$group':{'_id':_0x1e7724(0x185),'invoice':{'$first':_0x1e7724(0x1e7)},'date':{'$first':_0x1e7724(0x209)},'warehouse_name':{'$first':'$warehouse_name'},'room':{'$addToSet':_0x1e7724(0x168)},'finalize':{'$first':'$finalize'}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1}}]);if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x20c)){var _0x2dc624=users['English'];console[_0x1e7724(0x22e)](_0x2dc624);}else{if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x1ab))var _0x2dc624=users[_0x1e7724(0x1ab)];else{if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x1bd))var _0x2dc624=users[_0x1e7724(0x1bd)];else{if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x193))var _0x2dc624=users['Spanish'];else{if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x195))var _0x2dc624=users[_0x1e7724(0x195)];else{if(_0x426176[0x0][_0x1e7724(0x190)]==_0x1e7724(0x197))var _0x2dc624=users['Portuguese'];else{if(_0x426176[0x0]['language']==_0x1e7724(0x172))var _0x2dc624=users[_0x1e7724(0x172)];else{if(_0x426176[0x0][_0x1e7724(0x190)]=='Arabic\x20(ae)')var _0x2dc624=users[_0x1e7724(0x216)];}}}}}}}_0x36a4fd[_0x1e7724(0x210)](_0x1e7724(0x17e),{'success':_0x48fcdb[_0x1e7724(0x170)]('success'),'errors':_0x48fcdb[_0x1e7724(0x170)](_0x1e7724(0x1ec)),'role':_0x471867,'profile':_0x514b9e,'warehouse':_0x3c47af,'product':_0x1bdff4,'adjustment':_0x553724,'master_shop':_0x426176,'language':_0x2dc624});}catch(_0x25cb88){console[_0x1e7724(0x22e)](_0x25cb88);}});async function getRandom8DigitNumber(){var _0x26cf3a=a0_0x19210c;const _0x2b9362=0x989680,_0x2ebb62=0x5f5e0ff,_0x3a2c45=Math[_0x26cf3a(0x1dd)](Math[_0x26cf3a(0x181)]()*(_0x2ebb62-_0x2b9362+0x1))+_0x2b9362;var _0x31fe7b;const _0x2337a3=await adjustment_finished['findOne']({'invoice':'ADJF-'+_0x3a2c45});return _0x2337a3&&_0x2337a3['length']>0x0?_0x31fe7b=_0x26cf3a(0x1d3)+_0x3a2c45:_0x31fe7b='ADJF-'+_0x3a2c45,_0x31fe7b;}function a0_0x3e2d(){var _0x40352d=['secondary_unit','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Warehouse</th>','11020lvPRif','bay','all','$product_details.product_stock','getDate','minus','$product_details','10352OXuqyU','<h5>','</head><body>','/CheckingWarehouse','14sLHpLi','There\x27s\x20a\x20error\x20in\x20this\x20transaction','$product_details.bin','JO_number','back','length','log','$product_details.invoice','slice','findById','New_Qty_Converted','$product.room_names','Adjustment\x20Mail','findOne','Return\x20Rooms','batch_code','/view/:id','stockBefore','<hr\x20class=\x22my-3\x22>','flash','edit_adjustment_finished_view','Chinese','prod_name','True','note','$product_details._id','Logo.png','user','adjustment\x20add\x20successfull','Rooms','6006jxhnqr','<tr>','/view/add_adjustment','adjustment_finished','stock','New_Qty_Converted_adj','random','<div>','$product_details.type','finalize','$_id','prod_code','unit','get','push','map','$product_details.storage','_id','Enabled','</table>','122636ROkfws','language','Enclosed','$product_details.expiry_date','Spanish','$product_details.floorlevel','French','json','Portuguese\x20(BR)','room_names','/upload/','express','params','find','error','$product_details.secondary_code','/preview/:id','then','</tr>','maxPerUnit','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200','aggregate','room','Finished\x20Goods','role','$product_details.bay','product_name','date','Hindi','English','getMonth','post','save','An\x20error\x20occurred\x20while\x20saving\x20data.','split','message','expiry_date','toString','Arabic\x20(ae)','$product_details.secondary_unit','warehouse','</tbody>','prod_cat','product_date','/adjustment_finished/view','forEach','German','$product_details.product_code','product_code','purchases_data','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>','Adjustment\x20Finalize\x20Successfully','An\x20error\x20occurred.','<span\x20style=\x22float:\x20right;\x22>','product_stock','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Secondary\x20Unit\x20</th>','catch','20HrdnpQ','$room','Email\x20sent\x20successfully','<strong>\x20Regards\x20</strong>','4958943kVHCVI','/adjustment_finished/preview/','$product_details.production_date','</td>','master','level','ADJF-','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','product_details','body','../public/language/languages.json','Portuguese','<!DOCTYPE\x20html>','prod_invoice','<tbody\x20style=\x22text-align:\x20center;\x22>','$product','floor','invoice','warehouse_name','success','$product_details.primary_code','<h2>\x20','QA\x20Warehouse','/../public','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','status','$invoice','Error\x20Occurs','getFullYear','7966693zRuiki','Ambient','errors','</thead>','port','types','sendMail','../middleware/auth','$product_details.maxProducts','filter','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>','$product_details.unit','$name','7578XGifmg','$product_details.batch_code','\x20</h2>','<html><head><title></title>','Secondary_units','10021686pogaTB','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>','email','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room</th>','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','</body></html>','<h5\x20style=\x22text-align:\x20left;\x22>','redirect','site_title','staff','foreach\x20newproduct','838012ZauMmB','image','$date','new_adjust_qty','$product_details.rack','English\x20(US)','product','logo','host','render','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','</h5>','production_date','adjustment\x20data\x20update\x20successfully','adjust_qty','Arabic','</div>','$product_details.product_name','\x20Order\x20Date\x20:\x20','../models/all_models'];a0_0x3e2d=function(){return _0x40352d;};return a0_0x3e2d();}router['get'](a0_0x19210c(0x17d),auth,async(_0x7e0460,_0x169f20)=>{var _0x832d33=a0_0x19210c;try{const {username:_0xb46a7d,email:_0x20c100,role:_0x5d7ba6}=_0x7e0460[_0x832d33(0x178)],_0x53ba5d=_0x7e0460[_0x832d33(0x178)],_0x3f582d=await profile[_0x832d33(0x16a)]({'email':_0x53ba5d[_0x832d33(0x1fe)]}),_0x5cc3ff=await master_shop['find']();let _0x24082e;if(_0x53ba5d[_0x832d33(0x1a7)]=='staff'){const _0x21bd93=await staff['findOne']({'email':_0x53ba5d[_0x832d33(0x1fe)]});_0x24082e=await warehouse['aggregate']([{'$match':{'status':_0x832d33(0x18d),'name':_0x21bd93[_0x832d33(0x1b7)],'warehouse_category':'Finished\x20Goods','name':{'$ne':_0x832d33(0x1e3)}}},{'$group':{'_id':_0x832d33(0x1f6),'name':{'$first':'$name'}}}]);}else _0x24082e=await warehouse[_0x832d33(0x1a4)]([{'$match':{'status':_0x832d33(0x18d),'warehouse_category':_0x832d33(0x1a6),'name':{'$ne':_0x832d33(0x1e3)}}},{'$group':{'_id':'$name','name':{'$first':_0x832d33(0x1f6)}}}]);const _0x789024=await product[_0x832d33(0x19c)]({}),_0x18e36c=await adjustment_finished['find']({}),_0x4271f3=_0x18e36c[_0x832d33(0x22d)]+0x1,_0x4070a5=_0x832d33(0x1d3)+_0x4271f3[_0x832d33(0x1b4)]()['padStart'](0x5,'0');var _0x1aa4a4=[_0x832d33(0x1eb),_0x832d33(0x191),_0x832d33(0x16b)];if(_0x5cc3ff[0x0]['language']==_0x832d33(0x20c))var _0x116c8c=users['English'];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x1ab))var _0x116c8c=users[_0x832d33(0x1ab)];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x1bd))var _0x116c8c=users['German'];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x193))var _0x116c8c=users[_0x832d33(0x193)];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x195))var _0x116c8c=users[_0x832d33(0x195)];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]=='Portuguese\x20(BR)')var _0x116c8c=users[_0x832d33(0x1d8)];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x172))var _0x116c8c=users[_0x832d33(0x172)];else{if(_0x5cc3ff[0x0][_0x832d33(0x190)]==_0x832d33(0x1b5))var _0x116c8c=users[_0x832d33(0x216)];}}}}}}}const _0x35e04f=getRandom8DigitNumber();_0x35e04f['then'](_0x52c7b0=>{var _0x38d589=_0x832d33;_0x169f20[_0x38d589(0x210)]('add_adjustment_finished',{'success':_0x7e0460['flash'](_0x38d589(0x1e0)),'errors':_0x7e0460[_0x38d589(0x170)](_0x38d589(0x1ec)),'role':_0x53ba5d,'profile':_0x3f582d,'warehouse':_0x24082e,'product':_0x789024,'master_shop':_0x5cc3ff,'language':_0x116c8c,'rooms_data':_0x1aa4a4,'invoice_no':_0x52c7b0});})[_0x832d33(0x1c8)](_0x541ae2=>{var _0x3333dc=_0x832d33;_0x7e0460[_0x3333dc(0x170)](_0x3333dc(0x1ec),_0x3333dc(0x229)),_0x169f20[_0x3333dc(0x203)]('/adjustment/view');});}catch(_0x10d152){console[_0x832d33(0x22e)](_0x10d152);}}),router['post']('/view/add_adjustment',auth,async(_0x3b1083,_0x3700b3)=>{var _0x4b7251=a0_0x19210c;try{const {warehouse_name:_0x4f914e,date:_0x259913,prod_name:_0xf6f037,level:_0x4f0387,isle:_0x570239,pallet:_0x455551,stock:_0xcfce75,types:_0x58b0eb,adjust_qty:_0x321701,new_adjust_qty:_0x6dd2da,note:_0x1b883b,Room_name:_0xe4b9e9,invoice:_0xaf4064,JO_number:_0x86d8fa,expiry_date:_0x2d4ca2}=_0x3b1083[_0x4b7251(0x1d6)];if(typeof _0xf6f037=='string')var _0x3e7c0a=[_0x3b1083['body']['prod_name']],_0xd7f501=[_0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1d2)]],_0x2ab6d4=[_0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x17f)]],_0x2e7eed=[_0x3b1083[_0x4b7251(0x1d6)]['types']],_0x4829f9=[_0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x180)]],_0x516b7b=[_0x3b1083[_0x4b7251(0x1d6)]['New_Qty_Converted']],_0x4d18e6=[_0x3b1083[_0x4b7251(0x1d6)]['Primary_Units']],_0x1c60b5=[_0x3b1083['body'][_0x4b7251(0x1fb)]],_0x1595d5=[_0x3b1083['body'][_0x4b7251(0x186)]],_0x1e4476=[_0x3b1083[_0x4b7251(0x1d6)]['batch_code']],_0x1911de=[_0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1b3)]],_0x5006dc=[_0x3b1083[_0x4b7251(0x1d6)]['product_date']],_0x555eed=[_0x3b1083['body'][_0x4b7251(0x1b9)]],_0x5d58e7=[_0x3b1083['body'][_0x4b7251(0x17a)]],_0x59e0b5=[_0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1a2)]],_0x19886a=[_0x3b1083[_0x4b7251(0x1d6)]['prod_invoice']];else var _0x3e7c0a=[..._0x3b1083[_0x4b7251(0x1d6)]['prod_name']],_0xd7f501=[..._0x3b1083[_0x4b7251(0x1d6)]['level']],_0x2ab6d4=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x17f)]],_0x2e7eed=[..._0x3b1083['body'][_0x4b7251(0x1ef)]],_0x4829f9=[..._0x3b1083['body'][_0x4b7251(0x180)]],_0x516b7b=[..._0x3b1083['body'][_0x4b7251(0x232)]],_0x4d18e6=[..._0x3b1083[_0x4b7251(0x1d6)]['Primary_Units']],_0x1c60b5=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1fb)]],_0x1595d5=[..._0x3b1083['body']['prod_code']],_0x1e4476=[..._0x3b1083['body'][_0x4b7251(0x16c)]],_0x1911de=[..._0x3b1083[_0x4b7251(0x1d6)]['expiry_date']],_0x5006dc=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1ba)]],_0x555eed=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1b9)]],_0x5d58e7=[..._0x3b1083['body'][_0x4b7251(0x17a)]],_0x59e0b5=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1a2)]],_0x19886a=[..._0x3b1083[_0x4b7251(0x1d6)][_0x4b7251(0x1da)]];const _0x2a8020=_0x3e7c0a['map'](_0x4f95e3=>{return _0x4f95e3={'product_name':_0x4f95e3};});_0xd7f501[_0x4b7251(0x1bc)]((_0x1d6062,_0x48aa31)=>{var _0x25c6c4=_0x4b7251;_0x2a8020[_0x48aa31][_0x25c6c4(0x21e)]=_0x1d6062;}),_0x2ab6d4[_0x4b7251(0x1bc)]((_0x5e7ea2,_0x3aceae)=>{var _0x489951=_0x4b7251;_0x2a8020[_0x3aceae][_0x489951(0x16e)]=_0x5e7ea2;}),_0x2e7eed[_0x4b7251(0x1bc)]((_0x1401d8,_0x21adcd)=>{var _0x231842=_0x4b7251;_0x2a8020[_0x21adcd][_0x231842(0x1ef)]=_0x1401d8;}),_0x4829f9[_0x4b7251(0x1bc)]((_0x4df2bb,_0x4a077e)=>{_0x2a8020[_0x4a077e]['adjust_qty']=_0x4df2bb;}),_0x516b7b[_0x4b7251(0x1bc)]((_0x4cd290,_0x497558)=>{var _0x3e97ac=_0x4b7251;_0x2a8020[_0x497558][_0x3e97ac(0x20a)]=_0x4cd290;}),_0x4d18e6[_0x4b7251(0x1bc)]((_0x34e086,_0x1084b0)=>{var _0x5c7b6b=_0x4b7251;_0x2a8020[_0x1084b0][_0x5c7b6b(0x187)]=_0x34e086;}),_0x1c60b5[_0x4b7251(0x1bc)]((_0x17863c,_0x1b1f50)=>{var _0x5471bd=_0x4b7251;_0x2a8020[_0x1b1f50][_0x5471bd(0x21b)]=_0x17863c;}),_0x1595d5[_0x4b7251(0x1bc)]((_0x560c78,_0x3180f2)=>{var _0x3dd90=_0x4b7251;_0x2a8020[_0x3180f2][_0x3dd90(0x1bf)]=_0x560c78;}),_0x1e4476['forEach']((_0x592df4,_0x248954)=>{var _0x20d130=_0x4b7251;_0x2a8020[_0x248954][_0x20d130(0x16c)]=_0x592df4;}),_0x1911de[_0x4b7251(0x1bc)]((_0x4731e9,_0x125a87)=>{_0x2a8020[_0x125a87]['expiry_date']=_0x4731e9;}),_0x5006dc[_0x4b7251(0x1bc)]((_0x20afb1,_0x27108b)=>{var _0x25eed5=_0x4b7251;_0x2a8020[_0x27108b][_0x25eed5(0x213)]=_0x20afb1;}),_0x555eed[_0x4b7251(0x1bc)]((_0x5bc821,_0x240c9e)=>{var _0x47b97c=_0x4b7251;_0x2a8020[_0x240c9e][_0x47b97c(0x1b9)]=_0x5bc821;}),_0x5d58e7[_0x4b7251(0x1bc)]((_0x1aac10,_0x2caff3)=>{var _0x11bad7=_0x4b7251;_0x2a8020[_0x2caff3][_0x11bad7(0x198)]=_0x1aac10;}),_0x59e0b5[_0x4b7251(0x1bc)]((_0x27dd6f,_0x42ddf3)=>{var _0x396b54=_0x4b7251;_0x2a8020[_0x42ddf3][_0x396b54(0x1a2)]=_0x27dd6f;}),_0x19886a[_0x4b7251(0x1bc)]((_0x257feb,_0x3452fb)=>{var _0x4c75c7=_0x4b7251;_0x2a8020[_0x3452fb][_0x4c75c7(0x1de)]=_0x257feb;});const _0x3ee7d1=_0x2a8020[_0x4b7251(0x1f3)](_0x128a96=>_0x128a96[_0x4b7251(0x215)]!=='0'&&_0x128a96[_0x4b7251(0x215)]!=='');var _0x47539f=0x0;_0x3ee7d1[_0x4b7251(0x1bc)](_0x380c49=>{var _0x4d53b9=_0x4b7251;console[_0x4d53b9(0x22e)]('foreach\x20newproduct',_0x380c49),parseInt(_0x380c49['adjust_qty'])<=0x0&&_0x47539f++;});if(_0x47539f!=0x0)return _0x3b1083[_0x4b7251(0x170)]('errors',_0x4b7251(0x1a3)),_0x3700b3[_0x4b7251(0x203)](_0x4b7251(0x22c));const _0x4d5edd=new adjustment_finished({'warehouse_name':_0x4f914e,'date':_0x259913,'product':_0x3ee7d1,'note':_0x1b883b,'room':_0xe4b9e9,'invoice':_0xaf4064,'JO_number':_0x86d8fa,'expiry_date':_0x2d4ca2}),_0x245569=await _0x4d5edd[_0x4b7251(0x1af)]();_0x3b1083[_0x4b7251(0x170)]('success',_0x4b7251(0x179)),_0x3700b3['redirect'](_0x4b7251(0x1ce)+_0x245569[_0x4b7251(0x18c)]);}catch(_0x217235){console[_0x4b7251(0x22e)](_0x217235),_0x3700b3[_0x4b7251(0x1e6)](0xc8)['json']({'message':_0x217235[_0x4b7251(0x1b2)]});}}),router[a0_0x19210c(0x188)](a0_0x19210c(0x19f),auth,async(_0x41131f,_0x22784a)=>{var _0x3646af=a0_0x19210c;try{const {username:_0x246b3a,email:_0x555c0b,role:_0x1aa159}=_0x41131f[_0x3646af(0x178)],_0x4e6ac9=_0x41131f[_0x3646af(0x178)],_0x479429=await profile[_0x3646af(0x16a)]({'email':_0x4e6ac9[_0x3646af(0x1fe)]}),_0x4aafe7=await master_shop[_0x3646af(0x19c)](),_0x44a1c0=_0x41131f[_0x3646af(0x19b)]['id'],_0x108ade=await adjustment_finished[_0x3646af(0x231)]({'_id':_0x44a1c0}),_0x225b98=await purchases[_0x3646af(0x1a4)]([{'$match':{'warehouse_name':_0x108ade[_0x3646af(0x1df)]}},{'$unwind':_0x3646af(0x1dc)},{'$group':{'_id':'$product.product_name'}}]);console[_0x3646af(0x22e)](_0x3646af(0x1c0),_0x225b98);const _0xd659ca=await product['find']({}),_0x5e8f2a=await warehouse['aggregate']([{'$match':{'name':_0x108ade[_0x3646af(0x1df)],'warehouse_category':_0x3646af(0x1a6)}},{'$unwind':_0x3646af(0x223)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x3646af(0x218)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x3646af(0x1a8)},'bin':{'$first':_0x3646af(0x22a)},'type':{'$first':_0x3646af(0x183)},'floorlevel':{'$first':_0x3646af(0x194)},'primary_code':{'$first':_0x3646af(0x1e1)},'secondary_code':{'$first':_0x3646af(0x19e)},'product_code':{'$first':_0x3646af(0x1be)},'storage':{'$first':_0x3646af(0x18b)},'rack':{'$first':_0x3646af(0x20b)},'expiry_date':{'$first':_0x3646af(0x192)},'production_date':{'$first':_0x3646af(0x1cf)},'batch_code':{'$first':'$product_details.batch_code'},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'room':{'$first':_0x3646af(0x1ca)}}}]);if(_0x4aafe7[0x0][_0x3646af(0x190)]=='English\x20(US)'){var _0x533c7c=users[_0x3646af(0x1ac)];console['log'](_0x533c7c);}else{if(_0x4aafe7[0x0][_0x3646af(0x190)]=='Hindi')var _0x533c7c=users[_0x3646af(0x1ab)];else{if(_0x4aafe7[0x0][_0x3646af(0x190)]==_0x3646af(0x1bd))var _0x533c7c=users['German'];else{if(_0x4aafe7[0x0]['language']==_0x3646af(0x193))var _0x533c7c=users[_0x3646af(0x193)];else{if(_0x4aafe7[0x0]['language']==_0x3646af(0x195))var _0x533c7c=users[_0x3646af(0x195)];else{if(_0x4aafe7[0x0][_0x3646af(0x190)]==_0x3646af(0x197))var _0x533c7c=users[_0x3646af(0x1d8)];else{if(_0x4aafe7[0x0][_0x3646af(0x190)]==_0x3646af(0x172))var _0x533c7c=users[_0x3646af(0x172)];else{if(_0x4aafe7[0x0][_0x3646af(0x190)]==_0x3646af(0x1b5))var _0x533c7c=users[_0x3646af(0x216)];}}}}}}}_0x22784a[_0x3646af(0x210)](_0x3646af(0x171),{'success':_0x41131f[_0x3646af(0x170)](_0x3646af(0x1e0)),'errors':_0x41131f[_0x3646af(0x170)](_0x3646af(0x1ec)),'role':_0x4e6ac9,'profile':_0x479429,'adjustment':_0x108ade,'stock':_0x5e8f2a,'master_shop':_0x4aafe7,'warehouse_name':_0x225b98,'unit':_0xd659ca,'language':_0x533c7c});}catch(_0x2177e5){console[_0x3646af(0x22e)](_0x2177e5),_0x22784a[_0x3646af(0x1e6)](0xc8)[_0x3646af(0x196)]({'message':_0x2177e5[_0x3646af(0x1b2)]});}}),router[a0_0x19210c(0x1ae)](a0_0x19210c(0x19f),auth,async(_0x1dd317,_0x5214ef)=>{var _0x5c92bc=a0_0x19210c;try{const {invoice:_0x3aa3a5,warehouse_name:_0x64e8aa,Room_name:_0x1d9557}=_0x1dd317[_0x5c92bc(0x1d6)],_0x2351e4=_0x1dd317[_0x5c92bc(0x19b)]['id'],_0xf0312c=await adjustment_finished['findById']({'_id':_0x2351e4});var _0x4ece40;const _0x118013=_0xf0312c[_0x5c92bc(0x20d)][_0x5c92bc(0x18a)](async _0x5ee719=>{var _0x1f427a=_0x5c92bc;if(_0x5ee719[_0x1f427a(0x215)]>0x0){_0x4ece40=await warehouse[_0x1f427a(0x16a)]({'name':_0x64e8aa,'room':_0x5ee719[_0x1f427a(0x198)],'warehouse_category':'Finished\x20Goods'});const _0x360a6f=_0x4ece40[_0x1f427a(0x1d5)][_0x1f427a(0x18a)](_0x518039=>{var _0x14dab3=_0x1f427a;console[_0x14dab3(0x22e)](_0x5ee719[_0x14dab3(0x1ef)]);if(_0x5ee719['types']==_0x14dab3(0x222))_0x518039[_0x14dab3(0x1a9)]==_0x5ee719[_0x14dab3(0x1a9)]&&_0x518039[_0x14dab3(0x21e)]==_0x5ee719[_0x14dab3(0x21e)]&&_0x518039[_0x14dab3(0x1b3)]==_0x5ee719[_0x14dab3(0x1b3)]&&_0x518039[_0x14dab3(0x213)]==_0x5ee719[_0x14dab3(0x213)]&&_0x518039[_0x14dab3(0x16c)]==_0x5ee719[_0x14dab3(0x16c)]&&_0x518039[_0x14dab3(0x1de)]==_0x5ee719[_0x14dab3(0x1de)]&&(_0x518039[_0x14dab3(0x1c6)]=_0x518039['product_stock']-_0x5ee719[_0x14dab3(0x215)]);else _0x5ee719['types']=='add'&&(_0x518039['product_name']==_0x5ee719[_0x14dab3(0x1a9)]&&_0x518039['bay']==_0x5ee719[_0x14dab3(0x21e)]&&_0x518039[_0x14dab3(0x1b3)]==_0x5ee719[_0x14dab3(0x1b3)]&&_0x518039['production_date']==_0x5ee719['production_date']&&_0x518039['batch_code']==_0x5ee719[_0x14dab3(0x16c)]&&_0x518039['invoice']==_0x5ee719['invoice']&&(_0x518039['product_stock']=_0x518039['product_stock']+_0x5ee719[_0x14dab3(0x215)]));});}return _0x4ece40;});Promise[_0x5c92bc(0x21f)](_0x118013)[_0x5c92bc(0x1a0)](async _0x1284db=>{var _0x14b48e=_0x5c92bc;try{for(const _0x3a3aeb of _0x1284db){await _0x3a3aeb['save']();}_0xf0312c[_0x14b48e(0x184)]=_0x14b48e(0x174);const _0x579aa6=await _0xf0312c['save'](),_0x58a442=await master_shop[_0x14b48e(0x19c)](),_0x202e3c=await email_settings[_0x14b48e(0x16a)](),_0x3bb135=await supervisor_settings[_0x14b48e(0x19c)]();var _0x3b8cbe=_0xf0312c[_0x14b48e(0x20d)],_0x3080ce='',_0x3536ff;for(_0x3536ff in _0x3b8cbe){var _0xaa7820='FG';_0xf0312c['warehouse_name']=='DRY\x20GOODS'&&(_0xaa7820='DG'),_0x3080ce+=_0x14b48e(0x17c)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x3b8cbe[_0x3536ff]['product_name']+_0x14b48e(0x1d0)+_0x14b48e(0x200)+_0x3b8cbe[_0x3536ff][_0x14b48e(0x1bf)]+_0x14b48e(0x1d0)+_0x14b48e(0x200)+_0x3b8cbe[_0x3536ff][_0x14b48e(0x215)]+_0x14b48e(0x1d0)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x3b8cbe[_0x3536ff]['unit']+_0x14b48e(0x1d0)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x3b8cbe[_0x3536ff][_0x14b48e(0x21b)]+_0x14b48e(0x1d0)+_0x14b48e(0x200)+_0xf0312c[_0x14b48e(0x1df)]+_0x14b48e(0x1d0)+_0x14b48e(0x200)+_0x3b8cbe[_0x3536ff][_0x14b48e(0x198)]+_0x14b48e(0x1d0)+_0x14b48e(0x200)+_0xaa7820+_0x3b8cbe[_0x3536ff][_0x14b48e(0x21e)]+_0x14b48e(0x1d0)+_0x14b48e(0x1a1);}let _0x55417b=nodemailer['createTransport']({'host':_0x202e3c[_0x14b48e(0x20f)],'port':Number(_0x202e3c[_0x14b48e(0x1ee)]),'secure':![],'auth':{'user':_0x202e3c[_0x14b48e(0x1fe)],'pass':_0x202e3c['password']}}),_0x584bbc={'from':_0x202e3c[_0x14b48e(0x1fe)],'to':_0x3bb135[0x0]['FGSEmail'],'subject':_0x14b48e(0x169),'attachments':[{'filename':_0x14b48e(0x177),'path':__dirname+_0x14b48e(0x1e4)+_0x14b48e(0x199)+_0x58a442[0x0][_0x14b48e(0x208)],'cid':_0x14b48e(0x20e)}],'html':_0x14b48e(0x1d9)+_0x14b48e(0x1fa)+_0x14b48e(0x226)+_0x14b48e(0x182)+_0x14b48e(0x1e5)+_0x14b48e(0x182)+_0x14b48e(0x211)+_0x14b48e(0x217)+_0x14b48e(0x182)+_0x14b48e(0x1e2)+_0x58a442[0x0][_0x14b48e(0x204)]+_0x14b48e(0x1f9)+_0x14b48e(0x217)+'</div>'+_0x14b48e(0x16f)+'<div>'+_0x14b48e(0x202)+'\x20Order\x20Number\x20:\x20'+_0xf0312c['invoice']+'\x20'+_0x14b48e(0x1c5)+_0x14b48e(0x219)+_0xf0312c[_0x14b48e(0x1aa)]+'\x20'+'</span>'+'</h5>'+_0x14b48e(0x217)+'<table\x20style=\x22width:\x20100%\x20!important;\x22>'+'<thead\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x14b48e(0x17c)+_0x14b48e(0x1c2)+_0x14b48e(0x1fd)+_0x14b48e(0x1d4)+_0x14b48e(0x1c1)+_0x14b48e(0x1c7)+_0x14b48e(0x21c)+_0x14b48e(0x1ff)+_0x14b48e(0x1f4)+_0x14b48e(0x1a1)+_0x14b48e(0x1ed)+_0x14b48e(0x1db)+'\x20'+_0x3080ce+'\x20'+_0x14b48e(0x1b8)+_0x14b48e(0x18e)+_0x14b48e(0x182)+_0x14b48e(0x1cc)+_0x14b48e(0x225)+_0x58a442[0x0][_0x14b48e(0x204)]+_0x14b48e(0x212)+_0x14b48e(0x217)+_0x14b48e(0x217)+_0x14b48e(0x201)};_0x55417b[_0x14b48e(0x1f0)](_0x584bbc,function(_0x3d7789,_0x36f4c2){var _0x4f4d94=_0x14b48e;_0x3d7789?(console[_0x4f4d94(0x22e)](_0x3d7789),console[_0x4f4d94(0x22e)](_0x4f4d94(0x1e8))):console[_0x4f4d94(0x22e)](_0x4f4d94(0x1cb));}),_0x1dd317['flash'](_0x14b48e(0x1e0),_0x14b48e(0x1c3)),_0x5214ef[_0x14b48e(0x203)]('/picking_list/PDF_adjustment/'+_0x579aa6[_0x14b48e(0x18c)]);}catch(_0x2cd8c1){console[_0x14b48e(0x19d)](_0x2cd8c1),_0x5214ef[_0x14b48e(0x1e6)](0x1f4)[_0x14b48e(0x196)]({'error':_0x14b48e(0x1b0)});}})[_0x5c92bc(0x1c8)](_0x2efb5b=>{var _0x26c534=_0x5c92bc;console['error'](_0x2efb5b),_0x5214ef[_0x26c534(0x1e6)](0x1f4)[_0x26c534(0x196)]({'error':_0x26c534(0x1c4)});});}catch(_0x39da65){_0x5214ef['json']({'message':_0x39da65[_0x5c92bc(0x1b2)]});}}),router['get']('/view/:id',auth,async(_0x180c85,_0x45c865)=>{var _0x53a4d1=a0_0x19210c;try{const {username:_0x352a69,email:_0x137e61,role:_0x4bda14}=_0x180c85[_0x53a4d1(0x178)],_0x20da18=_0x180c85[_0x53a4d1(0x178)],_0x556d62=await profile[_0x53a4d1(0x16a)]({'email':_0x20da18[_0x53a4d1(0x1fe)]}),_0x5b62d1=await master_shop[_0x53a4d1(0x19c)]();console[_0x53a4d1(0x22e)](_0x53a4d1(0x1d1),_0x5b62d1);const _0x438bec=_0x180c85[_0x53a4d1(0x19b)]['id'],_0x47ab75=await adjustment_finished[_0x53a4d1(0x231)]({'_id':_0x438bec});let _0x3c3e45=new Date(_0x47ab75['expiry_date']),_0x1dbf18=('0'+_0x3c3e45[_0x53a4d1(0x221)]())['slice'](-0x2),_0x4ab967=('0'+(_0x3c3e45[_0x53a4d1(0x1ad)]()+0x1))[_0x53a4d1(0x230)](-0x2),_0x52d42d=_0x3c3e45[_0x53a4d1(0x1e9)](),_0x288c75=_0x52d42d+'-'+_0x4ab967+'-'+_0x1dbf18;var _0x481990=[_0x53a4d1(0x1eb),_0x53a4d1(0x191),_0x53a4d1(0x16b)];const _0x16eec7=await purchases[_0x53a4d1(0x1a4)]([{'$match':{'warehouse_name':_0x47ab75[_0x53a4d1(0x1df)]}},{'$unwind':_0x53a4d1(0x1dc)},{'$group':{'_id':'$product.product_name'}}]);console[_0x53a4d1(0x22e)]('purchases_data',_0x16eec7);const _0xc2dcf5=await product[_0x53a4d1(0x19c)]({}),_0x3f5818=await warehouse[_0x53a4d1(0x1a4)]([{'$match':{'name':_0x47ab75[_0x53a4d1(0x1df)],'room':_0x47ab75[_0x53a4d1(0x1a5)]}},{'$unwind':_0x53a4d1(0x223)},{'$group':{'_id':'$product_details._id','name':{'$first':'$product_details.product_name'},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x53a4d1(0x1a8)},'bin':{'$first':_0x53a4d1(0x22a)},'type':{'$first':_0x53a4d1(0x183)},'floorlevel':{'$first':_0x53a4d1(0x194)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x53a4d1(0x1be)},'storage':{'$first':_0x53a4d1(0x18b)},'rack':{'$first':_0x53a4d1(0x20b)}}}]);if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x20c)){var _0x1db9a1=users['English'];console[_0x53a4d1(0x22e)](_0x1db9a1);}else{if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x1ab))var _0x1db9a1=users[_0x53a4d1(0x1ab)];else{if(_0x5b62d1[0x0]['language']==_0x53a4d1(0x1bd))var _0x1db9a1=users[_0x53a4d1(0x1bd)];else{if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x193))var _0x1db9a1=users[_0x53a4d1(0x193)];else{if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x195))var _0x1db9a1=users['French'];else{if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x197))var _0x1db9a1=users['Portuguese'];else{if(_0x5b62d1[0x0][_0x53a4d1(0x190)]==_0x53a4d1(0x172))var _0x1db9a1=users[_0x53a4d1(0x172)];else{if(_0x5b62d1[0x0]['language']=='Arabic\x20(ae)')var _0x1db9a1=users[_0x53a4d1(0x216)];}}}}}}}_0x45c865[_0x53a4d1(0x210)]('edit_adjustment_finished',{'success':_0x180c85[_0x53a4d1(0x170)](_0x53a4d1(0x1e0)),'errors':_0x180c85[_0x53a4d1(0x170)](_0x53a4d1(0x1ec)),'role':_0x20da18,'profile':_0x556d62,'adjustment':_0x47ab75,'stock':_0x3f5818,'master_shop':_0x5b62d1,'warehouse_name':_0x16eec7,'unit':_0xc2dcf5,'language':_0x1db9a1,'rooms_data':_0x481990,'ed_fullDate':_0x288c75});}catch(_0x4d9cab){console[_0x53a4d1(0x22e)](_0x4d9cab),_0x45c865['status'](0xc8)[_0x53a4d1(0x196)]({'message':_0x4d9cab[_0x53a4d1(0x1b2)]});}}),router[a0_0x19210c(0x1ae)](a0_0x19210c(0x16d),auth,async(_0x4c8f11,_0x1703a6)=>{var _0x4ba22f=a0_0x19210c;try{const _0xaa2673=_0x4c8f11[_0x4ba22f(0x19b)]['id'],_0x4fcc7e=await adjustment_finished['findById']({'_id':_0xaa2673}),_0x2455f3=await warehouse[_0x4ba22f(0x16a)]({'name':_0x4fcc7e[_0x4ba22f(0x1df)],'room':_0x4fcc7e[_0x4ba22f(0x1a5)]}),{warehouse_name:_0x591a6c,date:_0x20c302,prod_name:_0x118d72,level:_0x1425f3,isle:_0xbb4913,pallet:_0x39cb51,stock:_0x216f9c,types:_0x2cec3b,adjust_qty:_0x51aabc,new_adjust_qty:_0x520cdf,note:_0x4d81c0,Room_name:_0x5dba37,invoice:_0x21ac74,JO_number:_0x42df21}=_0x4c8f11[_0x4ba22f(0x1d6)];if(typeof _0x118d72=='string')var _0x5e0215=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x173)]],_0x5ae8e9=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x1d2)]],_0x1a9498=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x17f)]],_0x4cd8e0=[_0x4c8f11['body'][_0x4ba22f(0x1ef)]],_0x4cfff1=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x215)]],_0x504d5d=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x20a)]],_0x29e95c=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x186)]],_0x107aa0=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x187)]],_0x220f0f=[_0x4c8f11['body'][_0x4ba22f(0x1fb)]],_0x5ebc79=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x16c)]],_0x2ee212=[_0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x1b3)]];else var _0x5e0215=[..._0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x173)]],_0x5ae8e9=[..._0x4c8f11['body'][_0x4ba22f(0x1d2)]],_0x1a9498=[..._0x4c8f11[_0x4ba22f(0x1d6)]['stock']],_0x4cd8e0=[..._0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x1ef)]],_0x4cfff1=[..._0x4c8f11[_0x4ba22f(0x1d6)]['adjust_qty']],_0x504d5d=[..._0x4c8f11['body']['new_adjust_qty']],_0x29e95c=[..._0x4c8f11['body'][_0x4ba22f(0x186)]],_0x107aa0=[..._0x4c8f11[_0x4ba22f(0x1d6)]['unit']],_0x220f0f=[..._0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x1fb)]],_0x5ebc79=[..._0x4c8f11['body']['batch_code']],_0x2ee212=[..._0x4c8f11[_0x4ba22f(0x1d6)][_0x4ba22f(0x1b3)]];const _0x285d76=_0x5e0215[_0x4ba22f(0x18a)](_0x3187fa=>{return _0x3187fa={'product_name':_0x3187fa};});_0x5ae8e9[_0x4ba22f(0x1bc)]((_0x2eb70c,_0x31334c)=>{var _0x4cc9bf=_0x4ba22f;_0x285d76[_0x31334c][_0x4cc9bf(0x21e)]=_0x2eb70c;}),_0x1a9498['forEach']((_0x290618,_0x2ce087)=>{var _0x42a33d=_0x4ba22f;_0x285d76[_0x2ce087][_0x42a33d(0x16e)]=_0x290618;}),_0x4cd8e0[_0x4ba22f(0x1bc)]((_0x1cebaf,_0x5c61d1)=>{_0x285d76[_0x5c61d1]['types']=_0x1cebaf;}),_0x4cfff1[_0x4ba22f(0x1bc)]((_0x3e78d2,_0x935931)=>{var _0x20a461=_0x4ba22f;_0x285d76[_0x935931][_0x20a461(0x215)]=_0x3e78d2;}),_0x504d5d[_0x4ba22f(0x1bc)]((_0xcd6337,_0x394c7e)=>{var _0x5553c5=_0x4ba22f;_0x285d76[_0x394c7e][_0x5553c5(0x20a)]=_0xcd6337;}),_0x107aa0[_0x4ba22f(0x1bc)]((_0x5510b7,_0x2e6803)=>{_0x285d76[_0x2e6803]['unit']=_0x5510b7;}),_0x220f0f[_0x4ba22f(0x1bc)]((_0x238356,_0x48b441)=>{var _0x4f8bcf=_0x4ba22f;_0x285d76[_0x48b441][_0x4f8bcf(0x21b)]=_0x238356;}),_0x29e95c[_0x4ba22f(0x1bc)]((_0x55bd2e,_0x5461af)=>{var _0x41d3e8=_0x4ba22f;_0x285d76[_0x5461af][_0x41d3e8(0x1bf)]=_0x55bd2e;}),_0x5ebc79['forEach']((_0x542871,_0x19f8c8)=>{var _0x148752=_0x4ba22f;_0x285d76[_0x19f8c8][_0x148752(0x16c)]=_0x542871;}),_0x2ee212['forEach']((_0x1b435a,_0x2cdc8a)=>{var _0x24f594=_0x4ba22f;_0x285d76[_0x2cdc8a][_0x24f594(0x1b3)]=_0x1b435a;});const _0x32760e=_0x285d76[_0x4ba22f(0x1f3)](_0x5c3e2b=>_0x5c3e2b['adjust_qty']!=='0'&&_0x5c3e2b[_0x4ba22f(0x215)]!=='');var _0x195a98=0x0;_0x32760e[_0x4ba22f(0x1bc)](_0x5d27b5=>{var _0x3e6339=_0x4ba22f;console[_0x3e6339(0x22e)](_0x3e6339(0x206),_0x5d27b5),parseInt(_0x5d27b5[_0x3e6339(0x215)])<=0x0&&_0x195a98++;});if(_0x195a98!=0x0)return _0x4c8f11[_0x4ba22f(0x170)]('errors','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x1703a6[_0x4ba22f(0x203)](_0x4ba22f(0x22c));_0x4fcc7e[_0x4ba22f(0x1df)]=_0x591a6c,_0x4fcc7e[_0x4ba22f(0x1aa)]=_0x20c302,_0x4fcc7e[_0x4ba22f(0x20d)]=_0x32760e,_0x4fcc7e[_0x4ba22f(0x175)]=_0x4d81c0,_0x4fcc7e[_0x4ba22f(0x1a5)]=_0x5dba37,_0x4fcc7e[_0x4ba22f(0x1de)]=_0x21ac74,_0x4fcc7e[_0x4ba22f(0x22b)]=_0x42df21;const _0x46d83a=await _0x4fcc7e[_0x4ba22f(0x1af)](),_0x46ff37=await warehouse[_0x4ba22f(0x16a)]({'name':_0x591a6c,'room':_0x5dba37});_0x46d83a['product']['forEach'](_0x500a52=>{var _0xea4b7b=_0x4ba22f;const _0x4251cc=_0x46ff37[_0xea4b7b(0x1d5)][_0xea4b7b(0x18a)](_0xf67fa8=>{var _0x52b729=_0xea4b7b;_0x500a52[_0x52b729(0x1ef)]=='minus'?_0xf67fa8[_0x52b729(0x1a9)]==_0x500a52['product_name']&&_0xf67fa8[_0x52b729(0x21e)]==_0x500a52[_0x52b729(0x21e)]&&(_0xf67fa8['product_stock']=parseInt(_0xf67fa8['product_stock'])-parseInt(_0x500a52[_0x52b729(0x215)])):_0xf67fa8[_0x52b729(0x1a9)]==_0x500a52[_0x52b729(0x1a9)]&&_0xf67fa8[_0x52b729(0x21e)]==_0x500a52[_0x52b729(0x21e)]&&(_0xf67fa8[_0x52b729(0x1c6)]=parseInt(_0xf67fa8[_0x52b729(0x1c6)])+parseInt(_0x500a52[_0x52b729(0x215)]));});}),await _0x46ff37[_0x4ba22f(0x1af)](),_0x4c8f11[_0x4ba22f(0x170)](_0x4ba22f(0x1e0),_0x4ba22f(0x214)),_0x1703a6['redirect'](_0x4ba22f(0x1bb));}catch(_0x295034){console[_0x4ba22f(0x22e)](_0x295034);}}),router[a0_0x19210c(0x1ae)]('/barcode_scanner',async(_0x4960a5,_0x2bbe14)=>{var _0x13d80e=a0_0x19210c;const {primary_code:_0x412715,warehouse_data:_0x56c983,rooms_data:_0x427e96,Roomslist:_0x5d409a}=_0x4960a5[_0x13d80e(0x1d6)],_0x20d778=_0x5d409a[_0x13d80e(0x1b1)](','),_0x1d6282=[];async function _0xd57a14(_0x9fa846){var _0x111144=_0x13d80e;const _0x412d99=await warehouse[_0x111144(0x1a4)]([{'$match':{'name':_0x56c983,'room':_0x9fa846}},{'$unwind':_0x111144(0x223)},{'$match':{'product_details.primary_code':_0x412715}},{'$group':{'_id':_0x111144(0x176),'name':{'$first':_0x111144(0x218)},'product_stock':{'$first':_0x111144(0x220)},'primary_code':{'$first':_0x111144(0x1e1)},'secondary_code':{'$first':_0x111144(0x19e)},'product_code':{'$first':'$product_details.product_code'},'level':{'$first':_0x111144(0x1a8)},'isle':{'$first':_0x111144(0x22a)},'type':{'$first':_0x111144(0x183)},'pallet':{'$first':_0x111144(0x194)},'unit':{'$first':_0x111144(0x1f5)},'secondary_unit':{'$first':_0x111144(0x1b6)},'storage':{'$first':_0x111144(0x18b)},'rack':{'$first':_0x111144(0x20b)},'expiry_date':{'$first':_0x111144(0x192)},'production_date':{'$first':_0x111144(0x1cf)},'batch_code':{'$first':'$product_details.batch_code'},'product_cat':{'$first':'P'},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'roomNamed':{'$first':_0x111144(0x1ca)},'invoice':{'$first':'$product_details.invoice'}}}]),_0x25e91d=await warehouse[_0x111144(0x1a4)]([{'$match':{'name':_0x56c983,'room':_0x9fa846}},{'$unwind':_0x111144(0x223)},{'$match':{'product_details.secondary_code':_0x412715}},{'$group':{'_id':'$product_details._id','name':{'$first':_0x111144(0x218)},'product_stock':{'$first':'$product_details.product_stock'},'primary_code':{'$first':_0x111144(0x1e1)},'secondary_code':{'$first':'$product_details.secondary_code'},'product_code':{'$first':_0x111144(0x1be)},'level':{'$first':'$product_details.bay'},'isle':{'$first':'$product_details.bin'},'type':{'$first':_0x111144(0x183)},'pallet':{'$first':'$product_details.floorlevel'},'unit':{'$first':_0x111144(0x1f5)},'secondary_unit':{'$first':_0x111144(0x1b6)},'storage':{'$first':_0x111144(0x18b)},'rack':{'$first':_0x111144(0x20b)},'expiry_date':{'$first':_0x111144(0x192)},'production_date':{'$first':_0x111144(0x1cf)},'batch_code':{'$first':_0x111144(0x1f8)},'product_cat':{'$first':'S'},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'roomNamed':{'$first':_0x111144(0x1ca)},'invoice':{'$first':_0x111144(0x22f)}}}]);if(_0x412d99[_0x111144(0x22d)]>0x0)_0x1d6282[_0x111144(0x189)](_0x412d99);else _0x25e91d[_0x111144(0x22d)]>0x0&&_0x1d6282[_0x111144(0x189)](_0x25e91d);}const _0x4c1cc2=_0x20d778[_0x13d80e(0x18a)](_0xbccdf4=>_0xd57a14(_0xbccdf4));await Promise[_0x13d80e(0x21f)](_0x4c1cc2),_0x2bbe14['json'](_0x1d6282);}),router[a0_0x19210c(0x1ae)](a0_0x19210c(0x227),async(_0x5bdbb3,_0x4d82f2)=>{var _0x1d82d9=a0_0x19210c;const {productCode:_0x5d50e9,bay:_0x657292,warehouses:_0x1c6a59,room:_0x41c3d3}=_0x5bdbb3[_0x1d82d9(0x1d6)];console[_0x1d82d9(0x22e)](_0x5bdbb3[_0x1d82d9(0x1d6)]);try{const _0x11cf60=await warehouse[_0x1d82d9(0x1a4)]([{'$match':{'name':_0x1c6a59,'room':_0x41c3d3}},{'$unwind':_0x1d82d9(0x223)},{'$match':{'product_details.bay':parseInt(_0x657292)}},{'$group':{'_id':'$product_details._id','name':{'$first':_0x1d82d9(0x218)},'product_stock':{'$first':_0x1d82d9(0x220)},'bay':{'$first':_0x1d82d9(0x1a8)},'maxProducts':{'$first':_0x1d82d9(0x1f2)}}}]);_0x4d82f2[_0x1d82d9(0x1e6)](0xc8)[_0x1d82d9(0x196)](_0x11cf60);}catch(_0x27f183){_0x4d82f2['status'](0x194)[_0x1d82d9(0x196)]({'message':_0x27f183[_0x1d82d9(0x1b2)]});}}),module['exports']=router;