var a0_0x2b1d41=a0_0x53d6;(function(_0x5d4cad,_0x4e1bc7){var _0x4ade7e=a0_0x53d6,_0x5739b2=_0x5d4cad();while(!![]){try{var _0xb8a90e=-parseInt(_0x4ade7e(0x109))/0x1*(-parseInt(_0x4ade7e(0x15b))/0x2)+-parseInt(_0x4ade7e(0x137))/0x3*(parseInt(_0x4ade7e(0x13c))/0x4)+-parseInt(_0x4ade7e(0xc9))/0x5*(-parseInt(_0x4ade7e(0xbb))/0x6)+-parseInt(_0x4ade7e(0x139))/0x7*(parseInt(_0x4ade7e(0xc1))/0x8)+-parseInt(_0x4ade7e(0x135))/0x9+parseInt(_0x4ade7e(0xe4))/0xa+parseInt(_0x4ade7e(0x12d))/0xb*(parseInt(_0x4ade7e(0x14d))/0xc);if(_0xb8a90e===_0x4e1bc7)break;else _0x5739b2['push'](_0x5739b2['shift']());}catch(_0x5ee694){_0x5739b2['push'](_0x5739b2['shift']());}}}(a0_0x2ee5,0x3be4a));function a0_0x2ee5(){var _0x38d260=['email','$product_details','then','find','minus','$invoice','level','maxPerUnit','$product_details._id','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Warehouse</th>','$date','/adjustment/view','Ambient','142197fPxvql','push','$product_details.product_stock','get','\x20Order\x20Date\x20:\x20','prod_invoice','$product','secondary_unit','2181060ftliBN','getDate','3AJHRop','expiry_date','7Idtgre','$product_details.product_name','note','851824gZpYRg','<h2>\x20','Error\x20Occurs','$product_details.production_date','Hindi','user','$product_details.primary_code','Secondary_units','length','English','$product_details.bay','adjustment_finished','$product_details.rack','$product_details.unit','aggregate','English\x20(US)','Finished\x20Goods','180OhfwGa','There\x27s\x20a\x20error\x20in\x20this\x20transaction','product','New_Qty_Converted_adj','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','random','</h5>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room</th>','post','Arabic','</body></html>','warehouse_name','success','42954DXSltD','Chinese','adjust_qty','$product_details.storage','Adjustment\x20Mail','password','purchases_data','production_date','all','/upload/','findOne','<h5>','$product_details.expiry_date','nodemailer','prod_code','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','</table>','_id','foreach\x20newproduct','$product_details.maxPerUnit','render','getFullYear','params','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>','/preview/:id','flash','error','<hr\x20class=\x22my-3\x22>','/view','</td>','prod_name','date','Primary_Units','<table\x20style=\x22width:\x20100%\x20!important;\x22>','room','adjustment\x20data\x20update\x20successfully','body','forEach','<tr>','812796ePkenF','$product_details.product_code','Portuguese','<!DOCTYPE\x20html>','back','</thead>','2529576FFYRRm','$product_details.batch_code','QA\x20Warehouse','<strong>\x20Regards\x20</strong>','$product_details.secondary_code','$name','Logo.png','status','15BdUnGR','French','$product_details.floorlevel','</tbody>','padStart','\x20Order\x20Number\x20:\x20','/adjustment_finished/preview/','</span>','True','language','add_adjustment_finished','$product.product_name','types','DRY\x20GOODS','errors','image','$product_details.type','room_names','$product.room_names','catch','Return\x20Rooms','bay','new_adjust_qty','stockBefore','unit','batch_code','product_details','514030NNLlXA','</tr>','Email\x20sent\x20successfully','/../public','$finalize','<div>','Enclosed','staff','FGSEmail','site_title','string','warehouse','/CheckingWarehouse','Portuguese\x20(BR)','prod_cat','Arabic\x20(ae)','</div>','slice','$product_details.secondary_unit','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','<span\x20style=\x22float:\x20right;\x22>','An\x20error\x20occurred\x20while\x20saving\x20data.','$product_details.invoice','stock','message','Spanish','$room','log','New_Qty_Converted','/view/add_adjustment','master','Enabled','logo','<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>','German','\x20</h2>','/adjustment_finished/view','17mGaarR','redirect','product_name','filter','findById','Rooms','role','map','toString','ADJF-','finalize','save','/view/:id','product_stock','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','add','product_code','getMonth','invoice','<html><head><title></title>','port','/barcode_scanner','json'];a0_0x2ee5=function(){return _0x38d260;};return a0_0x2ee5();}const express=require('express'),app=express(),router=express['Router'](),auth=require('../middleware/auth'),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,adjustment_finished,email_settings,supervisor_settings}=require('../models/all_models'),users=require('../public/language/languages.json'),nodemailer=require(a0_0x2b1d41(0x168));function a0_0x53d6(_0x181bc8,_0x4a761d){var _0x2ee518=a0_0x2ee5();return a0_0x53d6=function(_0x53d6b8,_0x2ac689){_0x53d6b8=_0x53d6b8-0xb4;var _0x5b9805=_0x2ee518[_0x53d6b8];return _0x5b9805;},a0_0x53d6(_0x181bc8,_0x4a761d);}router['get'](a0_0x2b1d41(0x177),auth,async(_0x21cab7,_0x37fada)=>{var _0x12f9c4=a0_0x2b1d41;try{const {username:_0x5001fd,email:_0x22c2fe,role:_0x33204b}=_0x21cab7[_0x12f9c4(0x141)],_0x133dfb=_0x21cab7['user'],_0x21a9a3=await profile[_0x12f9c4(0x165)]({'email':_0x133dfb[_0x12f9c4(0x120)]}),_0x1b7d6e=await master_shop[_0x12f9c4(0x123)]();let _0x10b0a2;if(_0x133dfb['role']==_0x12f9c4(0xeb)){const _0x4f5108=await staff[_0x12f9c4(0x165)]({'email':_0x133dfb[_0x12f9c4(0x120)]});_0x10b0a2=await warehouse[_0x12f9c4(0x123)]({'status':_0x12f9c4(0x103),'name':_0x4f5108[_0x12f9c4(0xef)]});}else _0x10b0a2=await warehouse[_0x12f9c4(0x123)]({'status':'Enabled'});const _0x3336b5=await product['find']();let _0x1c1b82;if(_0x133dfb[_0x12f9c4(0x10f)]==_0x12f9c4(0xeb)){const _0x57434e=await staff[_0x12f9c4(0x165)]({'email':_0x133dfb['email']});_0x1c1b82=await adjustment_finished['find']({'warehouse_name':_0x57434e[_0x12f9c4(0xef)]});}else _0x1c1b82=await adjustment_finished['aggregate']([{'$unwind':_0x12f9c4(0x133)},{'$group':{'_id':'$_id','invoice':{'$first':_0x12f9c4(0x125)},'date':{'$first':_0x12f9c4(0x12a)},'warehouse_name':{'$first':'$warehouse_name'},'room':{'$addToSet':_0x12f9c4(0xdb)},'finalize':{'$first':_0x12f9c4(0xe8)}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1}}]);if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0x14b)){var _0x2c8d74=users['English'];console[_0x12f9c4(0xff)](_0x2c8d74);}else{if(_0x1b7d6e[0x0]['language']==_0x12f9c4(0x140))var _0x2c8d74=users['Hindi'];else{if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0x106))var _0x2c8d74=users[_0x12f9c4(0x106)];else{if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0xfd))var _0x2c8d74=users['Spanish'];else{if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0xca))var _0x2c8d74=users['French'];else{if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0xf1))var _0x2c8d74=users[_0x12f9c4(0xbd)];else{if(_0x1b7d6e[0x0][_0x12f9c4(0xd2)]==_0x12f9c4(0x15c))var _0x2c8d74=users[_0x12f9c4(0x15c)];else{if(_0x1b7d6e[0x0]['language']=='Arabic\x20(ae)')var _0x2c8d74=users[_0x12f9c4(0x157)];}}}}}}}_0x37fada[_0x12f9c4(0x16f)](_0x12f9c4(0x147),{'success':_0x21cab7[_0x12f9c4(0x174)](_0x12f9c4(0x15a)),'errors':_0x21cab7[_0x12f9c4(0x174)]('errors'),'role':_0x133dfb,'profile':_0x21a9a3,'warehouse':_0x10b0a2,'product':_0x3336b5,'adjustment':_0x1c1b82,'master_shop':_0x1b7d6e,'language':_0x2c8d74});}catch(_0x4e6047){console[_0x12f9c4(0xff)](_0x4e6047);}});async function getRandom8DigitNumber(){var _0x3f9dcc=a0_0x2b1d41;const _0x36a268=0x989680,_0x35c6f=0x5f5e0ff,_0x29faa2=Math['floor'](Math[_0x3f9dcc(0x153)]()*(_0x35c6f-_0x36a268+0x1))+_0x36a268;var _0x3734ca;const _0xab1cac=await adjustment_finished[_0x3f9dcc(0x165)]({'invoice':_0x3f9dcc(0x112)+_0x29faa2});return _0xab1cac&&_0xab1cac[_0x3f9dcc(0x144)]>0x0?_0x3734ca=_0x3f9dcc(0x112)+_0x29faa2:_0x3734ca=_0x3f9dcc(0x112)+_0x29faa2,_0x3734ca;}router[a0_0x2b1d41(0x130)]('/view/add_adjustment',auth,async(_0xa6a333,_0x23bf76)=>{var _0x23c1e3=a0_0x2b1d41;try{const {username:_0x122f03,email:_0x43ffea,role:_0x442010}=_0xa6a333['user'],_0x3754c6=_0xa6a333[_0x23c1e3(0x141)],_0x584ded=await profile['findOne']({'email':_0x3754c6[_0x23c1e3(0x120)]}),_0x1fc038=await master_shop[_0x23c1e3(0x123)]();let _0x160660;if(_0x3754c6['role']==_0x23c1e3(0xeb)){const _0xf658b2=await staff[_0x23c1e3(0x165)]({'email':_0x3754c6[_0x23c1e3(0x120)]});_0x160660=await warehouse[_0x23c1e3(0x14a)]([{'$match':{'status':_0x23c1e3(0x103),'name':_0xf658b2[_0x23c1e3(0xef)],'warehouse_category':_0x23c1e3(0x14c),'name':{'$ne':_0x23c1e3(0xc3)}}},{'$group':{'_id':'$name','name':{'$first':'$name'}}}]);}else _0x160660=await warehouse[_0x23c1e3(0x14a)]([{'$match':{'status':'Enabled','warehouse_category':_0x23c1e3(0x14c),'name':{'$ne':_0x23c1e3(0xc3)}}},{'$group':{'_id':_0x23c1e3(0xc6),'name':{'$first':_0x23c1e3(0xc6)}}}]);const _0xe26358=await product['find']({}),_0x482f33=await adjustment_finished[_0x23c1e3(0x123)]({}),_0x50a5b0=_0x482f33[_0x23c1e3(0x144)]+0x1,_0x1e3646=_0x23c1e3(0x112)+_0x50a5b0[_0x23c1e3(0x111)]()[_0x23c1e3(0xcd)](0x5,'0');var _0x24bad7=[_0x23c1e3(0x12c),_0x23c1e3(0xea),_0x23c1e3(0xdd)];if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0x14b))var _0x1d8245=users[_0x23c1e3(0x145)];else{if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0x140))var _0x1d8245=users['Hindi'];else{if(_0x1fc038[0x0]['language']==_0x23c1e3(0x106))var _0x1d8245=users['German'];else{if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0xfd))var _0x1d8245=users[_0x23c1e3(0xfd)];else{if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0xca))var _0x1d8245=users['French'];else{if(_0x1fc038[0x0]['language']=='Portuguese\x20(BR)')var _0x1d8245=users[_0x23c1e3(0xbd)];else{if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0x15c))var _0x1d8245=users['Chinese'];else{if(_0x1fc038[0x0][_0x23c1e3(0xd2)]==_0x23c1e3(0xf3))var _0x1d8245=users['Arabic'];}}}}}}}const _0xdb5746=getRandom8DigitNumber();_0xdb5746[_0x23c1e3(0x122)](_0x5c28ab=>{var _0x49466e=_0x23c1e3;_0x23bf76['render'](_0x49466e(0xd3),{'success':_0xa6a333['flash'](_0x49466e(0x15a)),'errors':_0xa6a333[_0x49466e(0x174)](_0x49466e(0xd7)),'role':_0x3754c6,'profile':_0x584ded,'warehouse':_0x160660,'product':_0xe26358,'master_shop':_0x1fc038,'language':_0x1d8245,'rooms_data':_0x24bad7,'invoice_no':_0x5c28ab});})[_0x23c1e3(0xdc)](_0x181d4e=>{var _0x13a3c3=_0x23c1e3;_0xa6a333[_0x13a3c3(0x174)](_0x13a3c3(0xd7),_0x13a3c3(0x14e)),_0x23bf76[_0x13a3c3(0x10a)](_0x13a3c3(0x12b));});}catch(_0x14ce2e){console['log'](_0x14ce2e);}}),router[a0_0x2b1d41(0x156)](a0_0x2b1d41(0x101),auth,async(_0x3e6ac1,_0x1fe582)=>{var _0x4a7311=a0_0x2b1d41;try{const {warehouse_name:_0x276b6a,date:_0x3f7874,prod_name:_0x547637,level:_0x5b7274,isle:_0x576535,pallet:_0x5961a1,stock:_0x5e92d2,types:_0x2f49b4,adjust_qty:_0x3566db,new_adjust_qty:_0x9673cc,note:_0x45516d,Room_name:_0x44bbdd,invoice:_0x15439d,JO_number:_0x13b2f4,expiry_date:_0x41f5ea}=_0x3e6ac1['body'];if(typeof _0x547637==_0x4a7311(0xee))var _0x1f7657=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x179)]],_0x66dcc=[_0x3e6ac1[_0x4a7311(0xb8)]['level']],_0x386e6b=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xfb)]],_0x4935b8=[_0x3e6ac1[_0x4a7311(0xb8)]['types']],_0x159c13=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x150)]],_0x59f5fb=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x100)]],_0x3c8fa6=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xb4)]],_0x47329a=[_0x3e6ac1[_0x4a7311(0xb8)]['Secondary_units']],_0x3e4c92=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x169)]],_0x51e6c2=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xe2)]],_0x1705ec=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x138)]],_0xe5585d=[_0x3e6ac1[_0x4a7311(0xb8)]['product_date']],_0x5cff36=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xf2)]],_0x508640=[_0x3e6ac1['body']['Rooms']],_0x6aa5e4=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x127)]],_0x3b21af=[_0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x132)]];else var _0x1f7657=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x179)]],_0x66dcc=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x126)]],_0x386e6b=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xfb)]],_0x4935b8=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xd5)]],_0x159c13=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x150)]],_0x59f5fb=[..._0x3e6ac1['body']['New_Qty_Converted']],_0x3c8fa6=[..._0x3e6ac1['body']['Primary_Units']],_0x47329a=[..._0x3e6ac1[_0x4a7311(0xb8)]['Secondary_units']],_0x3e4c92=[..._0x3e6ac1['body']['prod_code']],_0x51e6c2=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0xe2)]],_0x1705ec=[..._0x3e6ac1[_0x4a7311(0xb8)]['expiry_date']],_0xe5585d=[..._0x3e6ac1[_0x4a7311(0xb8)]['product_date']],_0x5cff36=[..._0x3e6ac1[_0x4a7311(0xb8)]['prod_cat']],_0x508640=[..._0x3e6ac1['body'][_0x4a7311(0x10e)]],_0x6aa5e4=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x127)]],_0x3b21af=[..._0x3e6ac1[_0x4a7311(0xb8)][_0x4a7311(0x132)]];const _0x373249=_0x1f7657[_0x4a7311(0x110)](_0x4a8461=>{return _0x4a8461={'product_name':_0x4a8461};});_0x66dcc['forEach']((_0x3ae28b,_0x5d76ae)=>{var _0x46f085=_0x4a7311;_0x373249[_0x5d76ae][_0x46f085(0xde)]=_0x3ae28b;}),_0x386e6b[_0x4a7311(0xb9)]((_0x457f12,_0x39ded5)=>{var _0x2a4ef3=_0x4a7311;_0x373249[_0x39ded5][_0x2a4ef3(0xe0)]=_0x457f12;}),_0x4935b8[_0x4a7311(0xb9)]((_0x5e1931,_0x2f3c9a)=>{var _0x143322=_0x4a7311;_0x373249[_0x2f3c9a][_0x143322(0xd5)]=_0x5e1931;}),_0x159c13[_0x4a7311(0xb9)]((_0x4fb678,_0x22d056)=>{_0x373249[_0x22d056]['adjust_qty']=_0x4fb678;}),_0x59f5fb[_0x4a7311(0xb9)]((_0x4873aa,_0x585a93)=>{var _0x529975=_0x4a7311;_0x373249[_0x585a93][_0x529975(0xdf)]=_0x4873aa;}),_0x3c8fa6[_0x4a7311(0xb9)]((_0x375db3,_0x3b26d1)=>{var _0x318565=_0x4a7311;_0x373249[_0x3b26d1][_0x318565(0xe1)]=_0x375db3;}),_0x47329a[_0x4a7311(0xb9)]((_0x25b81b,_0x25237a)=>{var _0x66d48c=_0x4a7311;_0x373249[_0x25237a][_0x66d48c(0x134)]=_0x25b81b;}),_0x3e4c92[_0x4a7311(0xb9)]((_0x3d5e2c,_0x41e0b9)=>{var _0x4ad54e=_0x4a7311;_0x373249[_0x41e0b9][_0x4ad54e(0x119)]=_0x3d5e2c;}),_0x51e6c2['forEach']((_0x2300e9,_0x4bfedf)=>{var _0xf9af1e=_0x4a7311;_0x373249[_0x4bfedf][_0xf9af1e(0xe2)]=_0x2300e9;}),_0x1705ec[_0x4a7311(0xb9)]((_0x4f1a62,_0x1d325d)=>{var _0x4257d8=_0x4a7311;_0x373249[_0x1d325d][_0x4257d8(0x138)]=_0x4f1a62;}),_0xe5585d['forEach']((_0x333327,_0x2d8748)=>{var _0x3813eb=_0x4a7311;_0x373249[_0x2d8748][_0x3813eb(0x162)]=_0x333327;}),_0x5cff36[_0x4a7311(0xb9)]((_0x284ff3,_0x377c69)=>{_0x373249[_0x377c69]['prod_cat']=_0x284ff3;}),_0x508640[_0x4a7311(0xb9)]((_0x32265d,_0x4b5c89)=>{var _0x365355=_0x4a7311;_0x373249[_0x4b5c89][_0x365355(0xda)]=_0x32265d;}),_0x6aa5e4[_0x4a7311(0xb9)]((_0x3337a7,_0x364526)=>{var _0x1795d2=_0x4a7311;_0x373249[_0x364526][_0x1795d2(0x127)]=_0x3337a7;}),_0x3b21af[_0x4a7311(0xb9)]((_0xedc212,_0x55bfdf)=>{var _0x38fd26=_0x4a7311;_0x373249[_0x55bfdf][_0x38fd26(0x11b)]=_0xedc212;});const _0x54dd9b=_0x373249[_0x4a7311(0x10c)](_0x5c04ef=>_0x5c04ef[_0x4a7311(0x15d)]!=='0'&&_0x5c04ef[_0x4a7311(0x15d)]!=='');var _0x2dc84f=0x0;_0x54dd9b[_0x4a7311(0xb9)](_0x37311a=>{var _0x3ecf8e=_0x4a7311;console[_0x3ecf8e(0xff)](_0x3ecf8e(0x16d),_0x37311a),parseInt(_0x37311a[_0x3ecf8e(0x15d)])<=0x0&&_0x2dc84f++;});if(_0x2dc84f!=0x0)return _0x3e6ac1['flash']('errors',_0x4a7311(0x151)),_0x1fe582[_0x4a7311(0x10a)](_0x4a7311(0xbf));const _0x34c1c7=new adjustment_finished({'warehouse_name':_0x276b6a,'date':_0x3f7874,'product':_0x54dd9b,'note':_0x45516d,'room':_0x44bbdd,'invoice':_0x15439d,'JO_number':_0x13b2f4,'expiry_date':_0x41f5ea}),_0x22db31=await _0x34c1c7['save']();_0x3e6ac1[_0x4a7311(0x174)](_0x4a7311(0x15a),'adjustment\x20add\x20successfull'),_0x1fe582['redirect'](_0x4a7311(0xcf)+_0x22db31[_0x4a7311(0x16c)]);}catch(_0x9d5b52){console[_0x4a7311(0xff)](_0x9d5b52),_0x1fe582[_0x4a7311(0xc8)](0xc8)[_0x4a7311(0x11f)]({'message':_0x9d5b52[_0x4a7311(0xfc)]});}}),router[a0_0x2b1d41(0x130)](a0_0x2b1d41(0x173),auth,async(_0x5bf879,_0x3cd3f8)=>{var _0x331c17=a0_0x2b1d41;try{const {username:_0x2ff9a5,email:_0x2a65e2,role:_0xaf3074}=_0x5bf879['user'],_0x459163=_0x5bf879['user'],_0x3ff90b=await profile['findOne']({'email':_0x459163[_0x331c17(0x120)]}),_0x5a72dd=await master_shop['find'](),_0x500146=_0x5bf879['params']['id'],_0xdba809=await adjustment_finished[_0x331c17(0x10d)]({'_id':_0x500146}),_0x447e95=await purchases['aggregate']([{'$match':{'warehouse_name':_0xdba809[_0x331c17(0x159)]}},{'$unwind':_0x331c17(0x133)},{'$group':{'_id':_0x331c17(0xd4)}}]);console[_0x331c17(0xff)]('purchases_data',_0x447e95);const _0x4265c4=await product['find']({}),_0x55f67d=await warehouse[_0x331c17(0x14a)]([{'$match':{'name':_0xdba809['warehouse_name'],'warehouse_category':_0x331c17(0x14c)}},{'$unwind':_0x331c17(0x121)},{'$group':{'_id':'$product_details._id','name':{'$first':_0x331c17(0x13a)},'product_stock':{'$first':_0x331c17(0x12f)},'bay':{'$first':_0x331c17(0x146)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x331c17(0xd9)},'floorlevel':{'$first':_0x331c17(0xcb)},'primary_code':{'$first':_0x331c17(0x142)},'secondary_code':{'$first':_0x331c17(0xc5)},'product_code':{'$first':_0x331c17(0xbc)},'storage':{'$first':_0x331c17(0x15e)},'rack':{'$first':'$product_details.rack'},'expiry_date':{'$first':_0x331c17(0x167)},'production_date':{'$first':'$product_details.production_date'},'batch_code':{'$first':'$product_details.batch_code'},'maxPerUnit':{'$first':_0x331c17(0x16e)},'room':{'$first':_0x331c17(0xfe)}}}]);if(_0x5a72dd[0x0][_0x331c17(0xd2)]==_0x331c17(0x14b)){var _0x11f167=users['English'];console[_0x331c17(0xff)](_0x11f167);}else{if(_0x5a72dd[0x0][_0x331c17(0xd2)]==_0x331c17(0x140))var _0x11f167=users[_0x331c17(0x140)];else{if(_0x5a72dd[0x0][_0x331c17(0xd2)]==_0x331c17(0x106))var _0x11f167=users[_0x331c17(0x106)];else{if(_0x5a72dd[0x0][_0x331c17(0xd2)]==_0x331c17(0xfd))var _0x11f167=users['Spanish'];else{if(_0x5a72dd[0x0]['language']==_0x331c17(0xca))var _0x11f167=users[_0x331c17(0xca)];else{if(_0x5a72dd[0x0][_0x331c17(0xd2)]=='Portuguese\x20(BR)')var _0x11f167=users[_0x331c17(0xbd)];else{if(_0x5a72dd[0x0]['language']==_0x331c17(0x15c))var _0x11f167=users[_0x331c17(0x15c)];else{if(_0x5a72dd[0x0][_0x331c17(0xd2)]=='Arabic\x20(ae)')var _0x11f167=users['Arabic'];}}}}}}}_0x3cd3f8['render']('edit_adjustment_finished_view',{'success':_0x5bf879[_0x331c17(0x174)]('success'),'errors':_0x5bf879[_0x331c17(0x174)]('errors'),'role':_0x459163,'profile':_0x3ff90b,'adjustment':_0xdba809,'stock':_0x55f67d,'master_shop':_0x5a72dd,'warehouse_name':_0x447e95,'unit':_0x4265c4,'language':_0x11f167});}catch(_0x292d0e){console['log'](_0x292d0e),_0x3cd3f8[_0x331c17(0xc8)](0xc8)[_0x331c17(0x11f)]({'message':_0x292d0e[_0x331c17(0xfc)]});}}),router[a0_0x2b1d41(0x156)]('/preview/:id',auth,async(_0x3adf54,_0x596e44)=>{var _0xe4f838=a0_0x2b1d41;try{const {invoice:_0x458efa,warehouse_name:_0x2e2cfa,Room_name:_0x405090}=_0x3adf54[_0xe4f838(0xb8)],_0x58ba77=_0x3adf54[_0xe4f838(0x171)]['id'],_0xe1d057=await adjustment_finished[_0xe4f838(0x10d)]({'_id':_0x58ba77});var _0x118a2f;const _0x3308f2=_0xe1d057[_0xe4f838(0x14f)][_0xe4f838(0x110)](async _0x21d1b5=>{var _0x416fa3=_0xe4f838;if(_0x21d1b5[_0x416fa3(0x15d)]>0x0){_0x118a2f=await warehouse['findOne']({'name':_0x2e2cfa,'room':_0x21d1b5[_0x416fa3(0xda)],'warehouse_category':_0x416fa3(0x14c)});const _0x581f99=_0x118a2f[_0x416fa3(0xe3)][_0x416fa3(0x110)](_0xbd69b4=>{var _0x257d88=_0x416fa3;console[_0x257d88(0xff)](_0x21d1b5['types']);if(_0x21d1b5['types']==_0x257d88(0x124))_0xbd69b4[_0x257d88(0x10b)]==_0x21d1b5[_0x257d88(0x10b)]&&_0xbd69b4[_0x257d88(0xde)]==_0x21d1b5[_0x257d88(0xde)]&&_0xbd69b4[_0x257d88(0x138)]==_0x21d1b5[_0x257d88(0x138)]&&_0xbd69b4[_0x257d88(0x162)]==_0x21d1b5['production_date']&&_0xbd69b4[_0x257d88(0xe2)]==_0x21d1b5[_0x257d88(0xe2)]&&_0xbd69b4[_0x257d88(0x11b)]==_0x21d1b5[_0x257d88(0x11b)]&&(_0xbd69b4[_0x257d88(0x116)]=_0xbd69b4[_0x257d88(0x116)]-_0x21d1b5[_0x257d88(0x15d)]);else _0x21d1b5[_0x257d88(0xd5)]==_0x257d88(0x118)&&(_0xbd69b4[_0x257d88(0x10b)]==_0x21d1b5['product_name']&&_0xbd69b4[_0x257d88(0xde)]==_0x21d1b5[_0x257d88(0xde)]&&_0xbd69b4['expiry_date']==_0x21d1b5[_0x257d88(0x138)]&&_0xbd69b4[_0x257d88(0x162)]==_0x21d1b5['production_date']&&_0xbd69b4['batch_code']==_0x21d1b5[_0x257d88(0xe2)]&&_0xbd69b4[_0x257d88(0x11b)]==_0x21d1b5['invoice']&&(_0xbd69b4[_0x257d88(0x116)]=_0xbd69b4[_0x257d88(0x116)]+_0x21d1b5[_0x257d88(0x15d)]));});}return _0x118a2f;});Promise[_0xe4f838(0x163)](_0x3308f2)[_0xe4f838(0x122)](async _0x2b05c3=>{var _0x2520af=_0xe4f838;try{for(const _0x2ac8f5 of _0x2b05c3){await _0x2ac8f5[_0x2520af(0x114)]();}_0xe1d057[_0x2520af(0x113)]=_0x2520af(0xd1);const _0x6939af=await _0xe1d057[_0x2520af(0x114)](),_0x3403c6=await master_shop[_0x2520af(0x123)](),_0x1e591a=await email_settings[_0x2520af(0x165)](),_0x3b70f8=await supervisor_settings[_0x2520af(0x123)]();var _0x231298=_0xe1d057['product'],_0x2ded50='',_0x5716e7;for(_0x5716e7 in _0x231298){var _0x32fc2d='FG';_0xe1d057[_0x2520af(0x159)]==_0x2520af(0xd6)&&(_0x32fc2d='DG'),_0x2ded50+=_0x2520af(0xba)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x231298[_0x5716e7]['product_name']+'</td>'+_0x2520af(0x117)+_0x231298[_0x5716e7][_0x2520af(0x119)]+_0x2520af(0x178)+_0x2520af(0x117)+_0x231298[_0x5716e7][_0x2520af(0x15d)]+'</td>'+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x231298[_0x5716e7]['unit']+'</td>'+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x231298[_0x5716e7][_0x2520af(0x134)]+_0x2520af(0x178)+_0x2520af(0x117)+_0xe1d057[_0x2520af(0x159)]+'</td>'+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x231298[_0x5716e7]['room_names']+_0x2520af(0x178)+_0x2520af(0x117)+_0x32fc2d+_0x231298[_0x5716e7][_0x2520af(0xde)]+_0x2520af(0x178)+_0x2520af(0xe5);}let _0x1386d6=nodemailer['createTransport']({'host':_0x1e591a['host'],'port':Number(_0x1e591a[_0x2520af(0x11d)]),'secure':![],'auth':{'user':_0x1e591a[_0x2520af(0x120)],'pass':_0x1e591a[_0x2520af(0x160)]}}),_0xe5a0a5={'from':_0x1e591a['email'],'to':_0x3b70f8[0x0][_0x2520af(0xec)],'subject':_0x2520af(0x15f),'attachments':[{'filename':_0x2520af(0xc7),'path':__dirname+_0x2520af(0xe7)+_0x2520af(0x164)+_0x3403c6[0x0][_0x2520af(0xd8)],'cid':_0x2520af(0x104)}],'html':_0x2520af(0xbe)+_0x2520af(0x11c)+'</head><body>'+'<div>'+_0x2520af(0x152)+'<div>'+_0x2520af(0x105)+_0x2520af(0xf4)+_0x2520af(0xe9)+_0x2520af(0x13d)+_0x3403c6[0x0]['site_title']+_0x2520af(0x107)+_0x2520af(0xf4)+_0x2520af(0xf4)+_0x2520af(0x176)+_0x2520af(0xe9)+'<h5\x20style=\x22text-align:\x20left;\x22>'+_0x2520af(0xce)+_0xe1d057[_0x2520af(0x11b)]+'\x20'+_0x2520af(0xf8)+_0x2520af(0x131)+_0xe1d057[_0x2520af(0x17a)]+'\x20'+_0x2520af(0xd0)+_0x2520af(0x154)+_0x2520af(0xf4)+_0x2520af(0xb5)+'<thead\x20style=\x22width:\x20100%\x20!important;\x22>'+'<tr>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+_0x2520af(0xf7)+_0x2520af(0x16a)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Secondary\x20Unit\x20</th>'+_0x2520af(0x129)+_0x2520af(0x155)+_0x2520af(0x172)+'</tr>'+_0x2520af(0xc0)+'<tbody\x20style=\x22text-align:\x20center;\x22>'+'\x20'+_0x2ded50+'\x20'+_0x2520af(0xcc)+_0x2520af(0x16b)+_0x2520af(0xe9)+_0x2520af(0xc4)+_0x2520af(0x166)+_0x3403c6[0x0][_0x2520af(0xed)]+_0x2520af(0x154)+_0x2520af(0xf4)+_0x2520af(0xf4)+_0x2520af(0x158)};_0x1386d6['sendMail'](_0xe5a0a5,function(_0x416d73,_0x37b085){var _0x508ba9=_0x2520af;_0x416d73?(console[_0x508ba9(0xff)](_0x416d73),console[_0x508ba9(0xff)](_0x508ba9(0x13e))):console[_0x508ba9(0xff)](_0x508ba9(0xe6));}),_0x3adf54['flash']('success','Adjustment\x20Finalize\x20Successfully'),_0x596e44[_0x2520af(0x10a)]('/picking_list/PDF_adjustment/'+_0x6939af['_id']);}catch(_0x2f1be2){console[_0x2520af(0x175)](_0x2f1be2),_0x596e44[_0x2520af(0xc8)](0x1f4)[_0x2520af(0x11f)]({'error':_0x2520af(0xf9)});}})['catch'](_0x54ef27=>{var _0x1f39f6=_0xe4f838;console[_0x1f39f6(0x175)](_0x54ef27),_0x596e44['status'](0x1f4)[_0x1f39f6(0x11f)]({'error':'An\x20error\x20occurred.'});});}catch(_0x2177ea){_0x596e44[_0xe4f838(0x11f)]({'message':_0x2177ea[_0xe4f838(0xfc)]});}}),router['get'](a0_0x2b1d41(0x115),auth,async(_0x14bc8f,_0x453b70)=>{var _0x3da2e2=a0_0x2b1d41;try{const {username:_0x35848c,email:_0x509b1c,role:_0x49bd0e}=_0x14bc8f['user'],_0x3e7438=_0x14bc8f[_0x3da2e2(0x141)],_0x309f4f=await profile[_0x3da2e2(0x165)]({'email':_0x3e7438[_0x3da2e2(0x120)]}),_0x55da34=await master_shop[_0x3da2e2(0x123)]();console['log'](_0x3da2e2(0x102),_0x55da34);const _0x3f3ece=_0x14bc8f[_0x3da2e2(0x171)]['id'],_0x337aaf=await adjustment_finished[_0x3da2e2(0x10d)]({'_id':_0x3f3ece});let _0x1da152=new Date(_0x337aaf['expiry_date']),_0x2dd412=('0'+_0x1da152[_0x3da2e2(0x136)]())[_0x3da2e2(0xf5)](-0x2),_0x5976df=('0'+(_0x1da152[_0x3da2e2(0x11a)]()+0x1))['slice'](-0x2),_0x54bcac=_0x1da152[_0x3da2e2(0x170)](),_0x1d6b0e=_0x54bcac+'-'+_0x5976df+'-'+_0x2dd412;var _0x2ffb2d=['Ambient',_0x3da2e2(0xea),_0x3da2e2(0xdd)];const _0x34725f=await purchases[_0x3da2e2(0x14a)]([{'$match':{'warehouse_name':_0x337aaf['warehouse_name']}},{'$unwind':_0x3da2e2(0x133)},{'$group':{'_id':_0x3da2e2(0xd4)}}]);console[_0x3da2e2(0xff)](_0x3da2e2(0x161),_0x34725f);const _0xea16c=await product[_0x3da2e2(0x123)]({}),_0x3902a0=await warehouse[_0x3da2e2(0x14a)]([{'$match':{'name':_0x337aaf['warehouse_name'],'room':_0x337aaf[_0x3da2e2(0xb6)]}},{'$unwind':'$product_details'},{'$group':{'_id':_0x3da2e2(0x128),'name':{'$first':_0x3da2e2(0x13a)},'product_stock':{'$first':_0x3da2e2(0x12f)},'bay':{'$first':_0x3da2e2(0x146)},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x3da2e2(0xd9)},'floorlevel':{'$first':_0x3da2e2(0xcb)},'primary_code':{'$first':_0x3da2e2(0x142)},'secondary_code':{'$first':_0x3da2e2(0xc5)},'product_code':{'$first':_0x3da2e2(0xbc)},'storage':{'$first':_0x3da2e2(0x15e)},'rack':{'$first':_0x3da2e2(0x148)}}}]);if(_0x55da34[0x0][_0x3da2e2(0xd2)]==_0x3da2e2(0x14b)){var _0x4adb33=users[_0x3da2e2(0x145)];console[_0x3da2e2(0xff)](_0x4adb33);}else{if(_0x55da34[0x0][_0x3da2e2(0xd2)]==_0x3da2e2(0x140))var _0x4adb33=users[_0x3da2e2(0x140)];else{if(_0x55da34[0x0]['language']==_0x3da2e2(0x106))var _0x4adb33=users[_0x3da2e2(0x106)];else{if(_0x55da34[0x0][_0x3da2e2(0xd2)]==_0x3da2e2(0xfd))var _0x4adb33=users[_0x3da2e2(0xfd)];else{if(_0x55da34[0x0][_0x3da2e2(0xd2)]==_0x3da2e2(0xca))var _0x4adb33=users[_0x3da2e2(0xca)];else{if(_0x55da34[0x0][_0x3da2e2(0xd2)]==_0x3da2e2(0xf1))var _0x4adb33=users[_0x3da2e2(0xbd)];else{if(_0x55da34[0x0]['language']==_0x3da2e2(0x15c))var _0x4adb33=users[_0x3da2e2(0x15c)];else{if(_0x55da34[0x0]['language']==_0x3da2e2(0xf3))var _0x4adb33=users['Arabic'];}}}}}}}_0x453b70[_0x3da2e2(0x16f)]('edit_adjustment_finished',{'success':_0x14bc8f[_0x3da2e2(0x174)](_0x3da2e2(0x15a)),'errors':_0x14bc8f[_0x3da2e2(0x174)](_0x3da2e2(0xd7)),'role':_0x3e7438,'profile':_0x309f4f,'adjustment':_0x337aaf,'stock':_0x3902a0,'master_shop':_0x55da34,'warehouse_name':_0x34725f,'unit':_0xea16c,'language':_0x4adb33,'rooms_data':_0x2ffb2d,'ed_fullDate':_0x1d6b0e});}catch(_0x5a299b){console['log'](_0x5a299b),_0x453b70[_0x3da2e2(0xc8)](0xc8)[_0x3da2e2(0x11f)]({'message':_0x5a299b[_0x3da2e2(0xfc)]});}}),router[a0_0x2b1d41(0x156)](a0_0x2b1d41(0x115),auth,async(_0xa118c7,_0x2f85f9)=>{var _0x12272a=a0_0x2b1d41;try{const _0x47682a=_0xa118c7[_0x12272a(0x171)]['id'],_0x1942e5=await adjustment_finished[_0x12272a(0x10d)]({'_id':_0x47682a}),_0x55b8a3=await warehouse[_0x12272a(0x165)]({'name':_0x1942e5[_0x12272a(0x159)],'room':_0x1942e5[_0x12272a(0xb6)]}),{warehouse_name:_0x160889,date:_0x4bb675,prod_name:_0x5abe5a,level:_0x4723a0,isle:_0x2bc832,pallet:_0x2cd2e1,stock:_0x2e38dc,types:_0x5e3774,adjust_qty:_0x242395,new_adjust_qty:_0x21b375,note:_0x33eb07,Room_name:_0x558791,invoice:_0x3d1e58,JO_number:_0x274bbe}=_0xa118c7['body'];if(typeof _0x5abe5a==_0x12272a(0xee))var _0xc79736=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x179)]],_0xbc7d37=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x126)]],_0x4939b5=[_0xa118c7['body'][_0x12272a(0xfb)]],_0x414746=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0xd5)]],_0x252f27=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x15d)]],_0x1aa43c=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0xdf)]],_0x68c71e=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x169)]],_0x4426ce=[_0xa118c7['body'][_0x12272a(0xe1)]],_0x2f6602=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x143)]],_0x1ced1e=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0xe2)]],_0x4bbfb3=[_0xa118c7[_0x12272a(0xb8)][_0x12272a(0x138)]];else var _0xc79736=[..._0xa118c7[_0x12272a(0xb8)][_0x12272a(0x179)]],_0xbc7d37=[..._0xa118c7[_0x12272a(0xb8)][_0x12272a(0x126)]],_0x4939b5=[..._0xa118c7['body'][_0x12272a(0xfb)]],_0x414746=[..._0xa118c7[_0x12272a(0xb8)][_0x12272a(0xd5)]],_0x252f27=[..._0xa118c7['body'][_0x12272a(0x15d)]],_0x1aa43c=[..._0xa118c7[_0x12272a(0xb8)][_0x12272a(0xdf)]],_0x68c71e=[..._0xa118c7['body'][_0x12272a(0x169)]],_0x4426ce=[..._0xa118c7['body'][_0x12272a(0xe1)]],_0x2f6602=[..._0xa118c7[_0x12272a(0xb8)][_0x12272a(0x143)]],_0x1ced1e=[..._0xa118c7['body'][_0x12272a(0xe2)]],_0x4bbfb3=[..._0xa118c7['body'][_0x12272a(0x138)]];const _0x10fc91=_0xc79736['map'](_0x506966=>{return _0x506966={'product_name':_0x506966};});_0xbc7d37[_0x12272a(0xb9)]((_0x51944b,_0x33c1cc)=>{var _0x24afcc=_0x12272a;_0x10fc91[_0x33c1cc][_0x24afcc(0xde)]=_0x51944b;}),_0x4939b5[_0x12272a(0xb9)]((_0xc5dd3a,_0x562ca8)=>{_0x10fc91[_0x562ca8]['stockBefore']=_0xc5dd3a;}),_0x414746[_0x12272a(0xb9)]((_0x3e505d,_0x1d8eea)=>{var _0x23eb3d=_0x12272a;_0x10fc91[_0x1d8eea][_0x23eb3d(0xd5)]=_0x3e505d;}),_0x252f27[_0x12272a(0xb9)]((_0x4f396b,_0x14f76)=>{_0x10fc91[_0x14f76]['adjust_qty']=_0x4f396b;}),_0x1aa43c[_0x12272a(0xb9)]((_0x13365c,_0x57e7be)=>{var _0x5689c4=_0x12272a;_0x10fc91[_0x57e7be][_0x5689c4(0xdf)]=_0x13365c;}),_0x4426ce[_0x12272a(0xb9)]((_0xc6f03e,_0xd6d546)=>{_0x10fc91[_0xd6d546]['unit']=_0xc6f03e;}),_0x2f6602['forEach']((_0x44e261,_0x3f1f24)=>{var _0x277da8=_0x12272a;_0x10fc91[_0x3f1f24][_0x277da8(0x134)]=_0x44e261;}),_0x68c71e[_0x12272a(0xb9)]((_0x359f52,_0x434326)=>{var _0x1493bd=_0x12272a;_0x10fc91[_0x434326][_0x1493bd(0x119)]=_0x359f52;}),_0x1ced1e['forEach']((_0x3e8a56,_0x1a91a4)=>{var _0xdfaf9a=_0x12272a;_0x10fc91[_0x1a91a4][_0xdfaf9a(0xe2)]=_0x3e8a56;}),_0x4bbfb3[_0x12272a(0xb9)]((_0x596242,_0x2c0b02)=>{_0x10fc91[_0x2c0b02]['expiry_date']=_0x596242;});const _0x5e2fda=_0x10fc91['filter'](_0x5e9c5c=>_0x5e9c5c[_0x12272a(0x15d)]!=='0'&&_0x5e9c5c[_0x12272a(0x15d)]!=='');var _0x31a4a5=0x0;_0x5e2fda[_0x12272a(0xb9)](_0x5dd50a=>{var _0x2003b9=_0x12272a;console[_0x2003b9(0xff)]('foreach\x20newproduct',_0x5dd50a),parseInt(_0x5dd50a['adjust_qty'])<=0x0&&_0x31a4a5++;});if(_0x31a4a5!=0x0)return _0xa118c7['flash'](_0x12272a(0xd7),'You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x2f85f9[_0x12272a(0x10a)](_0x12272a(0xbf));_0x1942e5[_0x12272a(0x159)]=_0x160889,_0x1942e5[_0x12272a(0x17a)]=_0x4bb675,_0x1942e5['product']=_0x5e2fda,_0x1942e5[_0x12272a(0x13b)]=_0x33eb07,_0x1942e5[_0x12272a(0xb6)]=_0x558791,_0x1942e5[_0x12272a(0x11b)]=_0x3d1e58,_0x1942e5['JO_number']=_0x274bbe;const _0x259ff2=await _0x1942e5[_0x12272a(0x114)](),_0x3e00af=await warehouse[_0x12272a(0x165)]({'name':_0x160889,'room':_0x558791});_0x259ff2[_0x12272a(0x14f)][_0x12272a(0xb9)](_0x2f6527=>{var _0x11a0cb=_0x12272a;const _0x48abb2=_0x3e00af[_0x11a0cb(0xe3)][_0x11a0cb(0x110)](_0x58e298=>{var _0x2f9e72=_0x11a0cb;_0x2f6527[_0x2f9e72(0xd5)]=='minus'?_0x58e298['product_name']==_0x2f6527[_0x2f9e72(0x10b)]&&_0x58e298[_0x2f9e72(0xde)]==_0x2f6527['bay']&&(_0x58e298[_0x2f9e72(0x116)]=parseInt(_0x58e298[_0x2f9e72(0x116)])-parseInt(_0x2f6527[_0x2f9e72(0x15d)])):_0x58e298[_0x2f9e72(0x10b)]==_0x2f6527[_0x2f9e72(0x10b)]&&_0x58e298[_0x2f9e72(0xde)]==_0x2f6527['bay']&&(_0x58e298['product_stock']=parseInt(_0x58e298[_0x2f9e72(0x116)])+parseInt(_0x2f6527[_0x2f9e72(0x15d)]));});}),await _0x3e00af[_0x12272a(0x114)](),_0xa118c7[_0x12272a(0x174)](_0x12272a(0x15a),_0x12272a(0xb7)),_0x2f85f9[_0x12272a(0x10a)](_0x12272a(0x108));}catch(_0x2b2cdb){console[_0x12272a(0xff)](_0x2b2cdb);}}),router[a0_0x2b1d41(0x156)](a0_0x2b1d41(0x11e),async(_0x32e747,_0x3cd1ad)=>{var _0x4a2e48=a0_0x2b1d41;const {primary_code:_0x33f3ce,warehouse_data:_0x26fd31,rooms_data:_0x1c3609,Roomslist:_0x15f660}=_0x32e747['body'],_0x1f26f5=_0x15f660['split'](','),_0x101b01=[];async function _0x56556d(_0x26f6e2){var _0x2154c1=a0_0x53d6;const _0x567ef5=await warehouse[_0x2154c1(0x14a)]([{'$match':{'name':_0x26fd31,'room':_0x26f6e2}},{'$unwind':_0x2154c1(0x121)},{'$match':{'product_details.primary_code':_0x33f3ce}},{'$group':{'_id':'$product_details._id','name':{'$first':_0x2154c1(0x13a)},'product_stock':{'$first':'$product_details.product_stock'},'primary_code':{'$first':_0x2154c1(0x142)},'secondary_code':{'$first':_0x2154c1(0xc5)},'product_code':{'$first':_0x2154c1(0xbc)},'level':{'$first':_0x2154c1(0x146)},'isle':{'$first':'$product_details.bin'},'type':{'$first':_0x2154c1(0xd9)},'pallet':{'$first':_0x2154c1(0xcb)},'unit':{'$first':_0x2154c1(0x149)},'secondary_unit':{'$first':'$product_details.secondary_unit'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':'$product_details.rack'},'expiry_date':{'$first':_0x2154c1(0x167)},'production_date':{'$first':_0x2154c1(0x13f)},'batch_code':{'$first':_0x2154c1(0xc2)},'product_cat':{'$first':'P'},'maxPerUnit':{'$first':_0x2154c1(0x16e)},'roomNamed':{'$first':_0x2154c1(0xfe)},'invoice':{'$first':_0x2154c1(0xfa)}}}]),_0x154b87=await warehouse[_0x2154c1(0x14a)]([{'$match':{'name':_0x26fd31,'room':_0x26f6e2}},{'$unwind':'$product_details'},{'$match':{'product_details.secondary_code':_0x33f3ce}},{'$group':{'_id':'$product_details._id','name':{'$first':_0x2154c1(0x13a)},'product_stock':{'$first':_0x2154c1(0x12f)},'primary_code':{'$first':_0x2154c1(0x142)},'secondary_code':{'$first':_0x2154c1(0xc5)},'product_code':{'$first':_0x2154c1(0xbc)},'level':{'$first':_0x2154c1(0x146)},'isle':{'$first':'$product_details.bin'},'type':{'$first':_0x2154c1(0xd9)},'pallet':{'$first':_0x2154c1(0xcb)},'unit':{'$first':_0x2154c1(0x149)},'secondary_unit':{'$first':_0x2154c1(0xf6)},'storage':{'$first':_0x2154c1(0x15e)},'rack':{'$first':_0x2154c1(0x148)},'expiry_date':{'$first':'$product_details.expiry_date'},'production_date':{'$first':_0x2154c1(0x13f)},'batch_code':{'$first':_0x2154c1(0xc2)},'product_cat':{'$first':'S'},'maxPerUnit':{'$first':'$product_details.maxPerUnit'},'roomNamed':{'$first':_0x2154c1(0xfe)},'invoice':{'$first':_0x2154c1(0xfa)}}}]);if(_0x567ef5[_0x2154c1(0x144)]>0x0)_0x101b01[_0x2154c1(0x12e)](_0x567ef5);else _0x154b87[_0x2154c1(0x144)]>0x0&&_0x101b01[_0x2154c1(0x12e)](_0x154b87);}const _0x11fcf7=_0x1f26f5[_0x4a2e48(0x110)](_0x580327=>_0x56556d(_0x580327));await Promise['all'](_0x11fcf7),_0x3cd1ad[_0x4a2e48(0x11f)](_0x101b01);}),router[a0_0x2b1d41(0x156)](a0_0x2b1d41(0xf0),async(_0x2ac472,_0xceae9f)=>{var _0x53b611=a0_0x2b1d41;const {productCode:_0x565020,bay:_0x48eb0a,warehouses:_0xf8924,room:_0x47233f}=_0x2ac472['body'];console['log'](_0x2ac472[_0x53b611(0xb8)]);try{const _0x43a28e=await warehouse[_0x53b611(0x14a)]([{'$match':{'name':_0xf8924,'room':_0x47233f}},{'$unwind':_0x53b611(0x121)},{'$match':{'product_details.bay':parseInt(_0x48eb0a)}},{'$group':{'_id':_0x53b611(0x128),'name':{'$first':_0x53b611(0x13a)},'product_stock':{'$first':'$product_details.product_stock'},'bay':{'$first':_0x53b611(0x146)},'maxProducts':{'$first':'$product_details.maxProducts'}}}]);_0xceae9f[_0x53b611(0xc8)](0xc8)['json'](_0x43a28e);}catch(_0x2dc8d4){_0xceae9f[_0x53b611(0xc8)](0x194)[_0x53b611(0x11f)]({'message':_0x2dc8d4[_0x53b611(0xfc)]});}}),module['exports']=router;