var a0_0x5243d4=a0_0x3ce6;(function(_0x7b9c64,_0x424489){var _0x2fa68a=a0_0x3ce6,_0x41ee14=_0x7b9c64();while(!![]){try{var _0x556cfd=-parseInt(_0x2fa68a(0x180))/0x1*(parseInt(_0x2fa68a(0x159))/0x2)+-parseInt(_0x2fa68a(0x129))/0x3+-parseInt(_0x2fa68a(0xf6))/0x4*(-parseInt(_0x2fa68a(0x122))/0x5)+-parseInt(_0x2fa68a(0xe0))/0x6+parseInt(_0x2fa68a(0x108))/0x7+parseInt(_0x2fa68a(0xec))/0x8+-parseInt(_0x2fa68a(0x157))/0x9;if(_0x556cfd===_0x424489)break;else _0x41ee14['push'](_0x41ee14['shift']());}catch(_0x128228){_0x41ee14['push'](_0x41ee14['shift']());}}}(a0_0x38ff,0x6613f));const express=require(a0_0x5243d4(0x13b)),app=express(),router=express[a0_0x5243d4(0x133)](),auth=require('../middleware/auth'),{profile,master_shop,categories,brands,units,product,warehouse,staff,customer,suppliers,purchases,suppliers_payment,expenses_type,all_expenses,adjustment,adjustment_finished,email_settings,supervisor_settings}=require(a0_0x5243d4(0x173)),users=require('../public/language/languages.json'),nodemailer=require(a0_0x5243d4(0xde));router['get'](a0_0x5243d4(0x16b),auth,async(_0x4bd9af,_0x2f57d6)=>{var _0x1c5d1a=a0_0x5243d4;try{const {username:_0x35a42a,email:_0x41242e,role:_0x21e4c7}=_0x4bd9af[_0x1c5d1a(0x118)],_0x3d989a=_0x4bd9af[_0x1c5d1a(0x118)],_0xa07ad7=await profile['findOne']({'email':_0x3d989a[_0x1c5d1a(0x106)]}),_0x3c12c3=await master_shop[_0x1c5d1a(0x19b)]();let _0x524ba6;if(_0x3d989a[_0x1c5d1a(0x18b)]==_0x1c5d1a(0x14e)){const _0x4ce950=await staff[_0x1c5d1a(0x18a)]({'email':_0x3d989a[_0x1c5d1a(0x106)]});_0x524ba6=await warehouse[_0x1c5d1a(0x19b)]({'status':_0x1c5d1a(0x10f),'name':_0x4ce950['warehouse']});}else _0x524ba6=await warehouse[_0x1c5d1a(0x19b)]({'status':_0x1c5d1a(0x10f)});const _0x5214f3=await product['find']();let _0x195373;if(_0x3d989a[_0x1c5d1a(0x18b)]==_0x1c5d1a(0x14e)){const _0x15860c=await staff[_0x1c5d1a(0x18a)]({'email':_0x3d989a[_0x1c5d1a(0x106)]});_0x195373=await adjustment_finished[_0x1c5d1a(0x19b)]({'warehouse_name':_0x15860c['warehouse']});}else _0x195373=await adjustment_finished[_0x1c5d1a(0x121)]([{'$unwind':_0x1c5d1a(0x14b)},{'$group':{'_id':'$_id','invoice':{'$first':_0x1c5d1a(0x15e)},'date':{'$first':_0x1c5d1a(0x10e)},'warehouse_name':{'$first':'$warehouse_name'},'room':{'$addToSet':_0x1c5d1a(0x15c)},'finalize':{'$first':_0x1c5d1a(0x143)}}},{'$project':{'_id':0x1,'invoice':0x1,'suppliers':0x1,'date':0x1,'warehouse_name':0x1,'room':0x1,'finalize':0x1}}]);if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0x146)){var _0x4b5009=users[_0x1c5d1a(0x199)];console[_0x1c5d1a(0x12f)](_0x4b5009);}else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]=='Hindi')var _0x4b5009=users[_0x1c5d1a(0x16a)];else{if(_0x3c12c3[0x0]['language']==_0x1c5d1a(0x130))var _0x4b5009=users[_0x1c5d1a(0x130)];else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0xfc))var _0x4b5009=users['Spanish'];else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0x17c))var _0x4b5009=users[_0x1c5d1a(0x17c)];else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0x14c))var _0x4b5009=users[_0x1c5d1a(0x126)];else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0xf4))var _0x4b5009=users['Chinese'];else{if(_0x3c12c3[0x0][_0x1c5d1a(0xe1)]==_0x1c5d1a(0x196))var _0x4b5009=users[_0x1c5d1a(0x17e)];}}}}}}}_0x2f57d6[_0x1c5d1a(0x13e)](_0x1c5d1a(0xe5),{'success':_0x4bd9af[_0x1c5d1a(0x16d)](_0x1c5d1a(0x153)),'errors':_0x4bd9af[_0x1c5d1a(0x16d)](_0x1c5d1a(0x166)),'role':_0x3d989a,'profile':_0xa07ad7,'warehouse':_0x524ba6,'product':_0x5214f3,'adjustment':_0x195373,'master_shop':_0x3c12c3,'language':_0x4b5009});}catch(_0x47d95b){console[_0x1c5d1a(0x12f)](_0x47d95b);}});async function getRandom8DigitNumber(){var _0x3625ab=a0_0x5243d4;const _0x2d3179=0x989680,_0x3d74cc=0x5f5e0ff,_0x470eb9=Math[_0x3625ab(0x13c)](Math[_0x3625ab(0x19c)]()*(_0x3d74cc-_0x2d3179+0x1))+_0x2d3179;var _0x327c88;const _0x3db939=await adjustment_finished[_0x3625ab(0x18a)]({'invoice':'ADJF-'+_0x470eb9});return _0x3db939&&_0x3db939[_0x3625ab(0x189)]>0x0?_0x327c88=_0x3625ab(0x11f)+_0x470eb9:_0x327c88=_0x3625ab(0x11f)+_0x470eb9,_0x327c88;}router[a0_0x5243d4(0xf7)](a0_0x5243d4(0xed),auth,async(_0xbedcc5,_0x164210)=>{var _0x4c53a9=a0_0x5243d4;try{const {username:_0x53b986,email:_0x13bb72,role:_0x55f952}=_0xbedcc5['user'],_0x217f2e=_0xbedcc5[_0x4c53a9(0x118)],_0x337367=await profile['findOne']({'email':_0x217f2e[_0x4c53a9(0x106)]}),_0x54dde2=await master_shop[_0x4c53a9(0x19b)]();let _0x15f7a4;if(_0x217f2e['role']==_0x4c53a9(0x14e)){const _0x582b0d=await staff[_0x4c53a9(0x18a)]({'email':_0x217f2e['email']});_0x15f7a4=await warehouse[_0x4c53a9(0x121)]([{'$match':{'status':_0x4c53a9(0x10f),'name':_0x582b0d[_0x4c53a9(0x104)],'warehouse_category':_0x4c53a9(0x150),'name':{'$ne':'QA\x20Warehouse'}}},{'$group':{'_id':_0x4c53a9(0xf2),'name':{'$first':_0x4c53a9(0xf2)}}}]);}else _0x15f7a4=await warehouse['aggregate']([{'$match':{'status':_0x4c53a9(0x10f),'warehouse_category':_0x4c53a9(0x150),'name':{'$ne':_0x4c53a9(0x154)}}},{'$group':{'_id':_0x4c53a9(0xf2),'name':{'$first':_0x4c53a9(0xf2)}}}]);const _0x69eadb=await product[_0x4c53a9(0x19b)]({}),_0x451702=await adjustment_finished['find']({}),_0x457874=_0x451702['length']+0x1,_0x1186ab=_0x4c53a9(0x11f)+_0x457874[_0x4c53a9(0x165)]()[_0x4c53a9(0xff)](0x5,'0');var _0x2efb87=[_0x4c53a9(0x190),'Enclosed',_0x4c53a9(0x187)];if(_0x54dde2[0x0]['language']==_0x4c53a9(0x146))var _0x2d925f=users[_0x4c53a9(0x199)];else{if(_0x54dde2[0x0]['language']==_0x4c53a9(0x16a))var _0x2d925f=users['Hindi'];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0x130))var _0x2d925f=users['German'];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0xfc))var _0x2d925f=users[_0x4c53a9(0xfc)];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0x17c))var _0x2d925f=users[_0x4c53a9(0x17c)];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0x14c))var _0x2d925f=users[_0x4c53a9(0x126)];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0xf4))var _0x2d925f=users[_0x4c53a9(0xf4)];else{if(_0x54dde2[0x0][_0x4c53a9(0xe1)]==_0x4c53a9(0x196))var _0x2d925f=users[_0x4c53a9(0x17e)];}}}}}}}const _0x2c2433=getRandom8DigitNumber();_0x2c2433['then'](_0x57d368=>{var _0xcd3ea7=_0x4c53a9;_0x164210[_0xcd3ea7(0x13e)](_0xcd3ea7(0x184),{'success':_0xbedcc5[_0xcd3ea7(0x16d)](_0xcd3ea7(0x153)),'errors':_0xbedcc5['flash']('errors'),'role':_0x217f2e,'profile':_0x337367,'warehouse':_0x15f7a4,'product':_0x69eadb,'master_shop':_0x54dde2,'language':_0x2d925f,'rooms_data':_0x2efb87,'invoice_no':_0x57d368});})[_0x4c53a9(0x163)](_0x6bba0d=>{var _0x332887=_0x4c53a9;_0xbedcc5[_0x332887(0x16d)](_0x332887(0x166),_0x332887(0x192)),_0x164210[_0x332887(0xf5)](_0x332887(0x170));});}catch(_0x693666){console['log'](_0x693666);}}),router[a0_0x5243d4(0xea)](a0_0x5243d4(0xed),auth,async(_0xd929c4,_0x1e94e8)=>{var _0x302ef0=a0_0x5243d4;try{const {warehouse_name:_0xe898af,date:_0x28cdf4,prod_name:_0x36fdfb,level:_0x4ca771,isle:_0x271c98,pallet:_0x496ea8,stock:_0x2e3ffc,types:_0x238a82,adjust_qty:_0x80bb42,new_adjust_qty:_0x491812,note:_0x67c9ae,Room_name:_0x5b15fe,invoice:_0x358758,JO_number:_0x494751,expiry_date:_0x2c84c5}=_0xd929c4[_0x302ef0(0x114)];if(typeof _0x36fdfb=='string')var _0xadd90a=[_0xd929c4[_0x302ef0(0x114)]['prod_name']],_0x27b582=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x145)]],_0x2eba61=[_0xd929c4['body'][_0x302ef0(0x12b)]],_0x47fa88=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x139)]],_0x5c90e2=[_0xd929c4['body'][_0x302ef0(0x107)]],_0x268bf1=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x17a)]],_0x2fedae=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0xe6)]],_0x23e197=[_0xd929c4[_0x302ef0(0x114)]['Secondary_units']],_0x365f0b=[_0xd929c4['body'][_0x302ef0(0x138)]],_0x3b5969=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x119)]],_0x46d321=[_0xd929c4['body'][_0x302ef0(0x132)]],_0x5c5e95=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x105)]],_0x259e82=[_0xd929c4[_0x302ef0(0x114)]['prod_cat']],_0x468b6a=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x11a)]],_0xa7ed8c=[_0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x18f)]],_0x31da34=[_0xd929c4['body'][_0x302ef0(0x142)]];else var _0xadd90a=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x13a)]],_0x27b582=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x145)]],_0x2eba61=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x12b)]],_0x47fa88=[..._0xd929c4['body'][_0x302ef0(0x139)]],_0x5c90e2=[..._0xd929c4[_0x302ef0(0x114)]['New_Qty_Converted_adj']],_0x268bf1=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x17a)]],_0x2fedae=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0xe6)]],_0x23e197=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x185)]],_0x365f0b=[..._0xd929c4[_0x302ef0(0x114)]['prod_code']],_0x3b5969=[..._0xd929c4[_0x302ef0(0x114)]['batch_code']],_0x46d321=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x132)]],_0x5c5e95=[..._0xd929c4['body'][_0x302ef0(0x105)]],_0x259e82=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x137)]],_0x468b6a=[..._0xd929c4[_0x302ef0(0x114)][_0x302ef0(0x11a)]],_0xa7ed8c=[..._0xd929c4[_0x302ef0(0x114)]['maxPerUnit']],_0x31da34=[..._0xd929c4['body']['prod_invoice']];const _0x54f328=_0xadd90a[_0x302ef0(0xe2)](_0x1d672e=>{return _0x1d672e={'product_name':_0x1d672e};});_0x27b582[_0x302ef0(0x103)]((_0x3ae1e3,_0x19e6cf)=>{var _0x51977e=_0x302ef0;_0x54f328[_0x19e6cf][_0x51977e(0xe8)]=_0x3ae1e3;}),_0x2eba61[_0x302ef0(0x103)]((_0x255fbe,_0x3ea47e)=>{var _0x3edff8=_0x302ef0;_0x54f328[_0x3ea47e][_0x3edff8(0xfd)]=_0x255fbe;}),_0x47fa88[_0x302ef0(0x103)]((_0x2f6e39,_0xb7b5f)=>{_0x54f328[_0xb7b5f]['types']=_0x2f6e39;}),_0x5c90e2[_0x302ef0(0x103)]((_0x203ec3,_0x3948fc)=>{var _0x214ace=_0x302ef0;_0x54f328[_0x3948fc][_0x214ace(0x125)]=_0x203ec3;}),_0x268bf1[_0x302ef0(0x103)]((_0x1600d0,_0x2c3c93)=>{var _0x4cdc57=_0x302ef0;_0x54f328[_0x2c3c93][_0x4cdc57(0x10d)]=_0x1600d0;}),_0x2fedae[_0x302ef0(0x103)]((_0x2908de,_0x83ee21)=>{var _0x5dc232=_0x302ef0;_0x54f328[_0x83ee21][_0x5dc232(0x123)]=_0x2908de;}),_0x23e197[_0x302ef0(0x103)]((_0x3aac14,_0x8d2557)=>{var _0x5675bc=_0x302ef0;_0x54f328[_0x8d2557][_0x5675bc(0x12d)]=_0x3aac14;}),_0x365f0b[_0x302ef0(0x103)]((_0xb5fa94,_0x2d9364)=>{var _0x5c5879=_0x302ef0;_0x54f328[_0x2d9364][_0x5c5879(0x19a)]=_0xb5fa94;}),_0x3b5969[_0x302ef0(0x103)]((_0x3b351f,_0x122b9e)=>{var _0x3bf605=_0x302ef0;_0x54f328[_0x122b9e][_0x3bf605(0x119)]=_0x3b351f;}),_0x46d321[_0x302ef0(0x103)]((_0x12f818,_0x32a04e)=>{_0x54f328[_0x32a04e]['expiry_date']=_0x12f818;}),_0x5c5e95['forEach']((_0x56adcc,_0x723064)=>{var _0xf5ad38=_0x302ef0;_0x54f328[_0x723064][_0xf5ad38(0x15f)]=_0x56adcc;}),_0x259e82[_0x302ef0(0x103)]((_0x4e7220,_0x2a98f8)=>{var _0x1d34b7=_0x302ef0;_0x54f328[_0x2a98f8][_0x1d34b7(0x137)]=_0x4e7220;}),_0x468b6a[_0x302ef0(0x103)]((_0x5be13a,_0x8fc929)=>{_0x54f328[_0x8fc929]['room_names']=_0x5be13a;}),_0xa7ed8c[_0x302ef0(0x103)]((_0x2b2656,_0x54572b)=>{var _0xcf685d=_0x302ef0;_0x54f328[_0x54572b][_0xcf685d(0x18f)]=_0x2b2656;}),_0x31da34[_0x302ef0(0x103)]((_0x9b0547,_0x461b6b)=>{var _0x257358=_0x302ef0;_0x54f328[_0x461b6b][_0x257358(0x160)]=_0x9b0547;});const _0x6d7ddf=_0x54f328[_0x302ef0(0x115)](_0x243860=>_0x243860['adjust_qty']!=='0'&&_0x243860[_0x302ef0(0x125)]!=='');var _0x54fecc=0x0;_0x6d7ddf[_0x302ef0(0x103)](_0x308757=>{var _0xdf26a8=_0x302ef0;console[_0xdf26a8(0x12f)](_0xdf26a8(0x16e),_0x308757),parseInt(_0x308757[_0xdf26a8(0x125)])<=0x0&&_0x54fecc++;});if(_0x54fecc!=0x0)return _0xd929c4[_0x302ef0(0x16d)](_0x302ef0(0x166),_0x302ef0(0x131)),_0x1e94e8[_0x302ef0(0xf5)](_0x302ef0(0xf8));const _0x40bbb1=new adjustment_finished({'warehouse_name':_0xe898af,'date':_0x28cdf4,'product':_0x6d7ddf,'note':_0x67c9ae,'room':_0x5b15fe,'invoice':_0x358758,'JO_number':_0x494751,'expiry_date':_0x2c84c5}),_0x31def0=await _0x40bbb1['save']();_0xd929c4[_0x302ef0(0x16d)](_0x302ef0(0x153),_0x302ef0(0x179)),_0x1e94e8['redirect']('/adjustment_finished/preview/'+_0x31def0[_0x302ef0(0x188)]);}catch(_0x26e0b9){console[_0x302ef0(0x12f)](_0x26e0b9),_0x1e94e8[_0x302ef0(0x11c)](0xc8)['json']({'message':_0x26e0b9[_0x302ef0(0xfe)]});}}),router[a0_0x5243d4(0xf7)]('/preview/:id',auth,async(_0x1f74ec,_0x1c4e1b)=>{var _0x4e4d5e=a0_0x5243d4;try{const {username:_0x5925b5,email:_0x16382e,role:_0x533191}=_0x1f74ec['user'],_0x42eaaf=_0x1f74ec[_0x4e4d5e(0x118)],_0x89eb3a=await profile[_0x4e4d5e(0x18a)]({'email':_0x42eaaf[_0x4e4d5e(0x106)]}),_0x3966c7=await master_shop[_0x4e4d5e(0x19b)](),_0x57f334=_0x1f74ec[_0x4e4d5e(0x14a)]['id'],_0x859375=await adjustment_finished[_0x4e4d5e(0x149)]({'_id':_0x57f334}),_0x2ddcf6=await purchases[_0x4e4d5e(0x121)]([{'$match':{'warehouse_name':_0x859375[_0x4e4d5e(0x135)]}},{'$unwind':_0x4e4d5e(0x14b)},{'$group':{'_id':'$product.product_name'}}]);console[_0x4e4d5e(0x12f)](_0x4e4d5e(0xfb),_0x2ddcf6);const _0x233f30=await product[_0x4e4d5e(0x19b)]({}),_0x565bb5=await warehouse[_0x4e4d5e(0x121)]([{'$match':{'name':_0x859375['warehouse_name'],'warehouse_category':_0x4e4d5e(0x150)}},{'$unwind':'$product_details'},{'$group':{'_id':_0x4e4d5e(0x171),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x4e4d5e(0x10b)},'bay':{'$first':'$product_details.bay'},'bin':{'$first':'$product_details.bin'},'type':{'$first':_0x4e4d5e(0x110)},'floorlevel':{'$first':_0x4e4d5e(0x175)},'primary_code':{'$first':_0x4e4d5e(0x116)},'secondary_code':{'$first':_0x4e4d5e(0x197)},'product_code':{'$first':'$product_details.product_code'},'storage':{'$first':_0x4e4d5e(0x100)},'rack':{'$first':_0x4e4d5e(0x141)},'expiry_date':{'$first':'$product_details.expiry_date'},'production_date':{'$first':'$product_details.production_date'},'batch_code':{'$first':_0x4e4d5e(0x194)},'maxPerUnit':{'$first':_0x4e4d5e(0x161)},'room':{'$first':_0x4e4d5e(0x11d)}}}]);if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]=='English\x20(US)'){var _0x6221f6=users[_0x4e4d5e(0x199)];console['log'](_0x6221f6);}else{if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]==_0x4e4d5e(0x16a))var _0x6221f6=users[_0x4e4d5e(0x16a)];else{if(_0x3966c7[0x0]['language']==_0x4e4d5e(0x130))var _0x6221f6=users[_0x4e4d5e(0x130)];else{if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]==_0x4e4d5e(0xfc))var _0x6221f6=users['Spanish'];else{if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]==_0x4e4d5e(0x17c))var _0x6221f6=users[_0x4e4d5e(0x17c)];else{if(_0x3966c7[0x0]['language']==_0x4e4d5e(0x14c))var _0x6221f6=users[_0x4e4d5e(0x126)];else{if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]==_0x4e4d5e(0xf4))var _0x6221f6=users[_0x4e4d5e(0xf4)];else{if(_0x3966c7[0x0][_0x4e4d5e(0xe1)]==_0x4e4d5e(0x196))var _0x6221f6=users['Arabic'];}}}}}}}_0x1c4e1b[_0x4e4d5e(0x13e)](_0x4e4d5e(0x136),{'success':_0x1f74ec[_0x4e4d5e(0x16d)](_0x4e4d5e(0x153)),'errors':_0x1f74ec['flash'](_0x4e4d5e(0x166)),'role':_0x42eaaf,'profile':_0x89eb3a,'adjustment':_0x859375,'stock':_0x565bb5,'master_shop':_0x3966c7,'warehouse_name':_0x2ddcf6,'unit':_0x233f30,'language':_0x6221f6});}catch(_0x53cf64){console[_0x4e4d5e(0x12f)](_0x53cf64),_0x1c4e1b[_0x4e4d5e(0x11c)](0xc8)['json']({'message':_0x53cf64[_0x4e4d5e(0xfe)]});}}),router[a0_0x5243d4(0xea)](a0_0x5243d4(0x147),auth,async(_0x2645b5,_0x8e9708)=>{var _0x40ba90=a0_0x5243d4;try{const {invoice:_0x3d2fb1,warehouse_name:_0x59ddf8,Room_name:_0xa2d9eb}=_0x2645b5['body'],_0x4d6c04=_0x2645b5[_0x40ba90(0x14a)]['id'],_0x253307=await adjustment_finished['findById']({'_id':_0x4d6c04});var _0x49c9a0;const _0x4082a7=_0x253307[_0x40ba90(0x177)][_0x40ba90(0xe2)](async _0x1d9ba6=>{var _0x21c096=_0x40ba90;if(_0x1d9ba6[_0x21c096(0x125)]>0x0){_0x49c9a0=await warehouse[_0x21c096(0x18a)]({'name':_0x59ddf8,'room':_0x1d9ba6['room_names'],'warehouse_category':_0x21c096(0x150)});const _0x2ac35d=_0x49c9a0[_0x21c096(0x112)][_0x21c096(0xe2)](_0x4c809e=>{var _0x4ede54=_0x21c096;console['log'](_0x1d9ba6[_0x4ede54(0x139)]);if(_0x1d9ba6[_0x4ede54(0x139)]==_0x4ede54(0x176))_0x4c809e[_0x4ede54(0x156)]==_0x1d9ba6['product_name']&&_0x4c809e[_0x4ede54(0xe8)]==_0x1d9ba6['bay']&&_0x4c809e[_0x4ede54(0x132)]==_0x1d9ba6[_0x4ede54(0x132)]&&_0x4c809e[_0x4ede54(0x15f)]==_0x1d9ba6[_0x4ede54(0x15f)]&&_0x4c809e[_0x4ede54(0x119)]==_0x1d9ba6[_0x4ede54(0x119)]&&_0x4c809e['invoice']==_0x1d9ba6['invoice']&&(_0x4c809e[_0x4ede54(0x183)]=_0x4c809e[_0x4ede54(0x183)]-_0x1d9ba6[_0x4ede54(0x125)]);else _0x1d9ba6[_0x4ede54(0x139)]==_0x4ede54(0xf3)&&(_0x4c809e[_0x4ede54(0x156)]==_0x1d9ba6['product_name']&&_0x4c809e['bay']==_0x1d9ba6[_0x4ede54(0xe8)]&&_0x4c809e[_0x4ede54(0x132)]==_0x1d9ba6[_0x4ede54(0x132)]&&_0x4c809e['production_date']==_0x1d9ba6[_0x4ede54(0x15f)]&&_0x4c809e[_0x4ede54(0x119)]==_0x1d9ba6[_0x4ede54(0x119)]&&_0x4c809e[_0x4ede54(0x160)]==_0x1d9ba6[_0x4ede54(0x160)]&&(_0x4c809e[_0x4ede54(0x183)]=_0x4c809e[_0x4ede54(0x183)]+_0x1d9ba6[_0x4ede54(0x125)]));});}return _0x49c9a0;});Promise[_0x40ba90(0x15a)](_0x4082a7)[_0x40ba90(0x172)](async _0xe0a153=>{var _0x47446c=_0x40ba90;try{for(const _0x4f1592 of _0xe0a153){await _0x4f1592[_0x47446c(0xf9)]();}_0x253307['finalize']=_0x47446c(0x19d);const _0x51006e=await _0x253307[_0x47446c(0xf9)](),_0x54bca7=await master_shop[_0x47446c(0x19b)](),_0x477fae=await email_settings[_0x47446c(0x18a)](),_0x2f1648=await supervisor_settings['find']();var _0x56be29=_0x253307['product'],_0x2e4209='',_0x52c7ed;for(_0x52c7ed in _0x56be29){var _0x2a806c='FG';_0x253307[_0x47446c(0x135)]==_0x47446c(0x162)&&(_0x2a806c='DG'),_0x2e4209+=_0x47446c(0x134)+_0x47446c(0x15d)+_0x56be29[_0x52c7ed][_0x47446c(0x156)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x56be29[_0x52c7ed][_0x47446c(0x19a)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x56be29[_0x52c7ed][_0x47446c(0x125)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x56be29[_0x52c7ed][_0x47446c(0x123)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x56be29[_0x52c7ed][_0x47446c(0x12d)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x253307[_0x47446c(0x135)]+_0x47446c(0x144)+'<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>'+_0x56be29[_0x52c7ed][_0x47446c(0x11b)]+_0x47446c(0x144)+_0x47446c(0x15d)+_0x2a806c+_0x56be29[_0x52c7ed][_0x47446c(0xe8)]+_0x47446c(0x144)+_0x47446c(0x140);}let _0x30d8b2=nodemailer[_0x47446c(0x124)]({'host':_0x477fae['host'],'port':Number(_0x477fae['port']),'secure':![],'auth':{'user':_0x477fae[_0x47446c(0x106)],'pass':_0x477fae['password']}}),_0x530f2d={'from':_0x477fae[_0x47446c(0x106)],'to':_0x2f1648[0x0]['FGSEmail'],'subject':_0x47446c(0x128),'attachments':[{'filename':_0x47446c(0x10a),'path':__dirname+'/../public'+_0x47446c(0x158)+_0x54bca7[0x0][_0x47446c(0x17f)],'cid':'logo'}],'html':_0x47446c(0x101)+_0x47446c(0x13d)+_0x47446c(0x191)+_0x47446c(0xe9)+_0x47446c(0x14f)+_0x47446c(0xe9)+'<img\x20src=\x22cid:logo\x22\x20class=\x22rounded\x22\x20width=\x2266.5px\x22\x20height=\x2266.5px\x22></img>'+_0x47446c(0xee)+_0x47446c(0xe9)+_0x47446c(0xe7)+_0x54bca7[0x0][_0x47446c(0x155)]+_0x47446c(0x198)+_0x47446c(0xee)+_0x47446c(0xee)+_0x47446c(0x12a)+_0x47446c(0xe9)+_0x47446c(0x169)+'\x20Order\x20Number\x20:\x20'+_0x253307[_0x47446c(0x160)]+'\x20'+_0x47446c(0x174)+_0x47446c(0x18c)+_0x253307[_0x47446c(0x113)]+'\x20'+_0x47446c(0x120)+_0x47446c(0x117)+'</div>'+_0x47446c(0xe3)+'<thead\x20style=\x22width:\x20100%\x20!important;\x22>'+_0x47446c(0x134)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Name\x20</th>'+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Code\x20</th>'+_0x47446c(0x12c)+_0x47446c(0x102)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Secondary\x20Unit\x20</th>'+_0x47446c(0xdf)+_0x47446c(0xef)+'<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Location\x20</th>'+_0x47446c(0x140)+_0x47446c(0x127)+'<tbody\x20style=\x22text-align:\x20center;\x22>'+'\x20'+_0x2e4209+'\x20'+_0x47446c(0x15b)+_0x47446c(0x16f)+_0x47446c(0xe9)+_0x47446c(0x178)+_0x47446c(0x111)+_0x54bca7[0x0][_0x47446c(0x155)]+'</h5>'+_0x47446c(0xee)+_0x47446c(0xee)+'</body></html>'};_0x30d8b2[_0x47446c(0xdd)](_0x530f2d,function(_0x5c2286,_0x3da149){var _0x2e2375=_0x47446c;_0x5c2286?(console[_0x2e2375(0x12f)](_0x5c2286),console[_0x2e2375(0x12f)]('Error\x20Occurs')):console['log']('Email\x20sent\x20successfully');}),_0x2645b5[_0x47446c(0x16d)](_0x47446c(0x153),_0x47446c(0x148)),_0x8e9708[_0x47446c(0xf5)]('/picking_list/PDF_adjustment/'+_0x51006e[_0x47446c(0x188)]);}catch(_0x3686bd){console[_0x47446c(0x17b)](_0x3686bd),_0x8e9708['status'](0x1f4)[_0x47446c(0x10c)]({'error':_0x47446c(0x16c)});}})[_0x40ba90(0x163)](_0x25d4d6=>{var _0x3ef50b=_0x40ba90;console['error'](_0x25d4d6),_0x8e9708[_0x3ef50b(0x11c)](0x1f4)[_0x3ef50b(0x10c)]({'error':'An\x20error\x20occurred.'});});}catch(_0x3433b0){_0x8e9708[_0x40ba90(0x10c)]({'message':_0x3433b0[_0x40ba90(0xfe)]});}}),router[a0_0x5243d4(0xf7)](a0_0x5243d4(0xe4),auth,async(_0x3f8674,_0x499176)=>{var _0x4dd5b2=a0_0x5243d4;try{const {username:_0x18eea4,email:_0x2c73d8,role:_0x34e8d7}=_0x3f8674['user'],_0x3eeb60=_0x3f8674[_0x4dd5b2(0x118)],_0x325900=await profile['findOne']({'email':_0x3eeb60[_0x4dd5b2(0x106)]}),_0x3b203e=await master_shop[_0x4dd5b2(0x19b)]();console[_0x4dd5b2(0x12f)](_0x4dd5b2(0x193),_0x3b203e);const _0x27a4e4=_0x3f8674[_0x4dd5b2(0x14a)]['id'],_0x5afca3=await adjustment_finished['findById']({'_id':_0x27a4e4});let _0x2f797e=new Date(_0x5afca3[_0x4dd5b2(0x132)]),_0x2bb5d9=('0'+_0x2f797e[_0x4dd5b2(0xf0)]())[_0x4dd5b2(0x14d)](-0x2),_0x448040=('0'+(_0x2f797e['getMonth']()+0x1))[_0x4dd5b2(0x14d)](-0x2),_0x47a053=_0x2f797e['getFullYear'](),_0x22885d=_0x47a053+'-'+_0x448040+'-'+_0x2bb5d9;var _0x5ed347=[_0x4dd5b2(0x190),'Enclosed','Return\x20Rooms'];const _0x3ac333=await purchases[_0x4dd5b2(0x121)]([{'$match':{'warehouse_name':_0x5afca3['warehouse_name']}},{'$unwind':_0x4dd5b2(0x14b)},{'$group':{'_id':_0x4dd5b2(0xeb)}}]);console[_0x4dd5b2(0x12f)](_0x4dd5b2(0xfb),_0x3ac333);const _0x5ea7cd=await product[_0x4dd5b2(0x19b)]({}),_0x404789=await warehouse[_0x4dd5b2(0x121)]([{'$match':{'name':_0x5afca3['warehouse_name'],'room':_0x5afca3['room']}},{'$unwind':_0x4dd5b2(0x167)},{'$group':{'_id':_0x4dd5b2(0x171),'name':{'$first':'$product_details.product_name'},'product_stock':{'$first':_0x4dd5b2(0x10b)},'bay':{'$first':_0x4dd5b2(0x182)},'bin':{'$first':_0x4dd5b2(0x168)},'type':{'$first':_0x4dd5b2(0x110)},'floorlevel':{'$first':_0x4dd5b2(0x175)},'primary_code':{'$first':_0x4dd5b2(0x116)},'secondary_code':{'$first':_0x4dd5b2(0x197)},'product_code':{'$first':_0x4dd5b2(0x12e)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x4dd5b2(0x141)}}}]);if(_0x3b203e[0x0][_0x4dd5b2(0xe1)]==_0x4dd5b2(0x146)){var _0x159ba0=users['English'];console[_0x4dd5b2(0x12f)](_0x159ba0);}else{if(_0x3b203e[0x0]['language']==_0x4dd5b2(0x16a))var _0x159ba0=users[_0x4dd5b2(0x16a)];else{if(_0x3b203e[0x0][_0x4dd5b2(0xe1)]==_0x4dd5b2(0x130))var _0x159ba0=users[_0x4dd5b2(0x130)];else{if(_0x3b203e[0x0][_0x4dd5b2(0xe1)]=='Spanish')var _0x159ba0=users[_0x4dd5b2(0xfc)];else{if(_0x3b203e[0x0]['language']==_0x4dd5b2(0x17c))var _0x159ba0=users[_0x4dd5b2(0x17c)];else{if(_0x3b203e[0x0][_0x4dd5b2(0xe1)]==_0x4dd5b2(0x14c))var _0x159ba0=users[_0x4dd5b2(0x126)];else{if(_0x3b203e[0x0]['language']==_0x4dd5b2(0xf4))var _0x159ba0=users['Chinese'];else{if(_0x3b203e[0x0][_0x4dd5b2(0xe1)]==_0x4dd5b2(0x196))var _0x159ba0=users[_0x4dd5b2(0x17e)];}}}}}}}_0x499176['render'](_0x4dd5b2(0xf1),{'success':_0x3f8674['flash'](_0x4dd5b2(0x153)),'errors':_0x3f8674[_0x4dd5b2(0x16d)](_0x4dd5b2(0x166)),'role':_0x3eeb60,'profile':_0x325900,'adjustment':_0x5afca3,'stock':_0x404789,'master_shop':_0x3b203e,'warehouse_name':_0x3ac333,'unit':_0x5ea7cd,'language':_0x159ba0,'rooms_data':_0x5ed347,'ed_fullDate':_0x22885d});}catch(_0x1a4172){console[_0x4dd5b2(0x12f)](_0x1a4172),_0x499176[_0x4dd5b2(0x11c)](0xc8)[_0x4dd5b2(0x10c)]({'message':_0x1a4172[_0x4dd5b2(0xfe)]});}}),router['post'](a0_0x5243d4(0xe4),auth,async(_0x538603,_0x520f3c)=>{var _0x5ba997=a0_0x5243d4;try{const _0xc7ff87=_0x538603['params']['id'],_0x423abe=await adjustment_finished[_0x5ba997(0x149)]({'_id':_0xc7ff87}),_0x19afb8=await warehouse[_0x5ba997(0x18a)]({'name':_0x423abe[_0x5ba997(0x135)],'room':_0x423abe[_0x5ba997(0x151)]}),{warehouse_name:_0xb9d308,date:_0x5e6daa,prod_name:_0x434bca,level:_0x46098b,isle:_0x3fb0a0,pallet:_0x1a9c99,stock:_0x7dd8d6,types:_0x5e2d4e,adjust_qty:_0x2c5930,new_adjust_qty:_0x1992e0,note:_0x107fde,Room_name:_0x12562f,invoice:_0x38df1e,JO_number:_0x4c44ec}=_0x538603[_0x5ba997(0x114)];if(typeof _0x434bca=='string')var _0x239fb4=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x13a)]],_0x79e168=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x145)]],_0x19f346=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x12b)]],_0x1b1855=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x139)]],_0x58251a=[_0x538603['body']['adjust_qty']],_0xc060d7=[_0x538603[_0x5ba997(0x114)]['new_adjust_qty']],_0x392a91=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x138)]],_0x500aff=[_0x538603[_0x5ba997(0x114)][_0x5ba997(0x123)]],_0x2204a0=[_0x538603[_0x5ba997(0x114)]['Secondary_units']],_0x32caa3=[_0x538603[_0x5ba997(0x114)]['batch_code']],_0x393bbe=[_0x538603['body']['expiry_date']];else var _0x239fb4=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x13a)]],_0x79e168=[..._0x538603[_0x5ba997(0x114)]['level']],_0x19f346=[..._0x538603['body'][_0x5ba997(0x12b)]],_0x1b1855=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x139)]],_0x58251a=[..._0x538603['body'][_0x5ba997(0x125)]],_0xc060d7=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x10d)]],_0x392a91=[..._0x538603['body'][_0x5ba997(0x138)]],_0x500aff=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x123)]],_0x2204a0=[..._0x538603['body'][_0x5ba997(0x185)]],_0x32caa3=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x119)]],_0x393bbe=[..._0x538603[_0x5ba997(0x114)][_0x5ba997(0x132)]];const _0x3b68e9=_0x239fb4['map'](_0xc7a681=>{return _0xc7a681={'product_name':_0xc7a681};});_0x79e168['forEach']((_0x3e7873,_0x2e5d40)=>{var _0x1daf9d=_0x5ba997;_0x3b68e9[_0x2e5d40][_0x1daf9d(0xe8)]=_0x3e7873;}),_0x19f346[_0x5ba997(0x103)]((_0x2d2bcd,_0x39a713)=>{_0x3b68e9[_0x39a713]['stockBefore']=_0x2d2bcd;}),_0x1b1855['forEach']((_0x24895e,_0x4537b8)=>{var _0x1632cd=_0x5ba997;_0x3b68e9[_0x4537b8][_0x1632cd(0x139)]=_0x24895e;}),_0x58251a[_0x5ba997(0x103)]((_0x423445,_0x4841e1)=>{var _0x309fb4=_0x5ba997;_0x3b68e9[_0x4841e1][_0x309fb4(0x125)]=_0x423445;}),_0xc060d7['forEach']((_0x6fd208,_0x26bcab)=>{var _0x2c3e36=_0x5ba997;_0x3b68e9[_0x26bcab][_0x2c3e36(0x10d)]=_0x6fd208;}),_0x500aff[_0x5ba997(0x103)]((_0x3dcf77,_0x28e08d)=>{var _0x573a56=_0x5ba997;_0x3b68e9[_0x28e08d][_0x573a56(0x123)]=_0x3dcf77;}),_0x2204a0[_0x5ba997(0x103)]((_0xcd9163,_0x80d7f3)=>{_0x3b68e9[_0x80d7f3]['secondary_unit']=_0xcd9163;}),_0x392a91[_0x5ba997(0x103)]((_0x8cf927,_0x5c6c7c)=>{var _0x56ae54=_0x5ba997;_0x3b68e9[_0x5c6c7c][_0x56ae54(0x19a)]=_0x8cf927;}),_0x32caa3['forEach']((_0x4652c7,_0x12854e)=>{var _0x4b8883=_0x5ba997;_0x3b68e9[_0x12854e][_0x4b8883(0x119)]=_0x4652c7;}),_0x393bbe['forEach']((_0x2e8d85,_0x263779)=>{var _0x143988=_0x5ba997;_0x3b68e9[_0x263779][_0x143988(0x132)]=_0x2e8d85;});const _0x5117aa=_0x3b68e9[_0x5ba997(0x115)](_0x283321=>_0x283321[_0x5ba997(0x125)]!=='0'&&_0x283321['adjust_qty']!=='');var _0x1bd671=0x0;_0x5117aa[_0x5ba997(0x103)](_0x45075e=>{var _0x55cf95=_0x5ba997;console[_0x55cf95(0x12f)]('foreach\x20newproduct',_0x45075e),parseInt(_0x45075e['adjust_qty'])<=0x0&&_0x1bd671++;});if(_0x1bd671!=0x0)return _0x538603[_0x5ba997(0x16d)]('errors','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200'),_0x520f3c['redirect']('back');_0x423abe[_0x5ba997(0x135)]=_0xb9d308,_0x423abe[_0x5ba997(0x113)]=_0x5e6daa,_0x423abe[_0x5ba997(0x177)]=_0x5117aa,_0x423abe[_0x5ba997(0x195)]=_0x107fde,_0x423abe[_0x5ba997(0x151)]=_0x12562f,_0x423abe[_0x5ba997(0x160)]=_0x38df1e,_0x423abe[_0x5ba997(0x164)]=_0x4c44ec;const _0xd866a5=await _0x423abe['save'](),_0x28e0d0=await warehouse[_0x5ba997(0x18a)]({'name':_0xb9d308,'room':_0x12562f});_0xd866a5[_0x5ba997(0x177)][_0x5ba997(0x103)](_0x51114a=>{var _0x4596c4=_0x5ba997;const _0x10c052=_0x28e0d0[_0x4596c4(0x112)][_0x4596c4(0xe2)](_0x4d7760=>{var _0x5ced89=_0x4596c4;_0x51114a[_0x5ced89(0x139)]==_0x5ced89(0x176)?_0x4d7760[_0x5ced89(0x156)]==_0x51114a['product_name']&&_0x4d7760['bay']==_0x51114a[_0x5ced89(0xe8)]&&(_0x4d7760[_0x5ced89(0x183)]=parseInt(_0x4d7760['product_stock'])-parseInt(_0x51114a[_0x5ced89(0x125)])):_0x4d7760[_0x5ced89(0x156)]==_0x51114a[_0x5ced89(0x156)]&&_0x4d7760[_0x5ced89(0xe8)]==_0x51114a['bay']&&(_0x4d7760['product_stock']=parseInt(_0x4d7760[_0x5ced89(0x183)])+parseInt(_0x51114a[_0x5ced89(0x125)]));});}),await _0x28e0d0[_0x5ba997(0xf9)](),_0x538603['flash'](_0x5ba997(0x153),'adjustment\x20data\x20update\x20successfully'),_0x520f3c[_0x5ba997(0xf5)](_0x5ba997(0x17d));}catch(_0x3faaec){console[_0x5ba997(0x12f)](_0x3faaec);}}),router[a0_0x5243d4(0xea)]('/barcode_scanner',async(_0x1ebe08,_0x372367)=>{var _0x361c9c=a0_0x5243d4;const {primary_code:_0x21bf31,warehouse_data:_0x463de6,rooms_data:_0x528db1,Roomslist:_0x59339c}=_0x1ebe08[_0x361c9c(0x114)],_0x5da96f=_0x59339c[_0x361c9c(0x152)](','),_0x3554f0=[];async function _0x4387cc(_0x1bfce4){var _0x11c330=_0x361c9c;const _0x3c090e=await warehouse[_0x11c330(0x121)]([{'$match':{'name':_0x463de6,'room':_0x1bfce4}},{'$unwind':'$product_details'},{'$match':{'product_details.primary_code':_0x21bf31}},{'$group':{'_id':_0x11c330(0x171),'name':{'$first':_0x11c330(0x181)},'product_stock':{'$first':_0x11c330(0x10b)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x11c330(0x197)},'product_code':{'$first':'$product_details.product_code'},'level':{'$first':_0x11c330(0x182)},'isle':{'$first':_0x11c330(0x168)},'type':{'$first':_0x11c330(0x110)},'pallet':{'$first':_0x11c330(0x175)},'unit':{'$first':'$product_details.unit'},'secondary_unit':{'$first':_0x11c330(0xfa)},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x11c330(0x141)},'expiry_date':{'$first':_0x11c330(0x11e)},'production_date':{'$first':'$product_details.production_date'},'batch_code':{'$first':_0x11c330(0x194)},'product_cat':{'$first':'P'},'maxPerUnit':{'$first':_0x11c330(0x161)},'roomNamed':{'$first':_0x11c330(0x11d)},'invoice':{'$first':_0x11c330(0x18d)}}}]),_0x3bf47f=await warehouse[_0x11c330(0x121)]([{'$match':{'name':_0x463de6,'room':_0x1bfce4}},{'$unwind':_0x11c330(0x167)},{'$match':{'product_details.secondary_code':_0x21bf31}},{'$group':{'_id':_0x11c330(0x171),'name':{'$first':_0x11c330(0x181)},'product_stock':{'$first':_0x11c330(0x10b)},'primary_code':{'$first':'$product_details.primary_code'},'secondary_code':{'$first':_0x11c330(0x197)},'product_code':{'$first':_0x11c330(0x12e)},'level':{'$first':'$product_details.bay'},'isle':{'$first':_0x11c330(0x168)},'type':{'$first':_0x11c330(0x110)},'pallet':{'$first':_0x11c330(0x175)},'unit':{'$first':_0x11c330(0x109)},'secondary_unit':{'$first':'$product_details.secondary_unit'},'storage':{'$first':'$product_details.storage'},'rack':{'$first':_0x11c330(0x141)},'expiry_date':{'$first':_0x11c330(0x11e)},'production_date':{'$first':_0x11c330(0x13f)},'batch_code':{'$first':_0x11c330(0x194)},'product_cat':{'$first':'S'},'maxPerUnit':{'$first':_0x11c330(0x161)},'roomNamed':{'$first':'$room'},'invoice':{'$first':_0x11c330(0x18d)}}}]);if(_0x3c090e['length']>0x0)_0x3554f0[_0x11c330(0x186)](_0x3c090e);else _0x3bf47f[_0x11c330(0x189)]>0x0&&_0x3554f0[_0x11c330(0x186)](_0x3bf47f);}const _0x4057e1=_0x5da96f[_0x361c9c(0xe2)](_0x35bde2=>_0x4387cc(_0x35bde2));await Promise[_0x361c9c(0x15a)](_0x4057e1),_0x372367[_0x361c9c(0x10c)](_0x3554f0);}),router[a0_0x5243d4(0xea)]('/CheckingWarehouse',async(_0x3feda6,_0x58cf0e)=>{var _0x4d106e=a0_0x5243d4;const {productCode:_0x11db01,bay:_0x34ed76,warehouses:_0x20c18b,room:_0x1e9134}=_0x3feda6[_0x4d106e(0x114)];console['log'](_0x3feda6[_0x4d106e(0x114)]);try{const _0x303626=await warehouse['aggregate']([{'$match':{'name':_0x20c18b,'room':_0x1e9134}},{'$unwind':'$product_details'},{'$match':{'product_details.bay':parseInt(_0x34ed76)}},{'$group':{'_id':_0x4d106e(0x171),'name':{'$first':_0x4d106e(0x181)},'product_stock':{'$first':_0x4d106e(0x10b)},'bay':{'$first':_0x4d106e(0x182)},'maxProducts':{'$first':'$product_details.maxProducts'}}}]);_0x58cf0e[_0x4d106e(0x11c)](0xc8)['json'](_0x303626);}catch(_0x45102e){_0x58cf0e['status'](0x194)[_0x4d106e(0x10c)]({'message':_0x45102e[_0x4d106e(0xfe)]});}}),module[a0_0x5243d4(0x18e)]=router;function a0_0x3ce6(_0x150285,_0x1095f8){var _0x38ffb8=a0_0x38ff();return a0_0x3ce6=function(_0x3ce6f1,_0x59adf2){_0x3ce6f1=_0x3ce6f1-0xdd;var _0x4a1f17=_0x38ffb8[_0x3ce6f1];return _0x4a1f17;},a0_0x3ce6(_0x150285,_0x1095f8);}function a0_0x38ff(){var _0x3377e5=['\x20Order\x20Date\x20:\x20','$product_details.invoice','exports','maxPerUnit','Ambient','</head><body>','There\x27s\x20a\x20error\x20in\x20this\x20transaction','master','$product_details.batch_code','note','Arabic\x20(ae)','$product_details.secondary_code','\x20</h2>','English','product_code','find','random','True','sendMail','nodemailer','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Warehouse</th>','3384630gFyzPO','language','map','<table\x20style=\x22width:\x20100%\x20!important;\x22>','/view/:id','adjustment_finished','Primary_Units','<h2>\x20','bay','<div>','post','$product.product_name','5918624WNlWmq','/view/add_adjustment','</div>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Room</th>','getDate','edit_adjustment_finished','$name','add','Chinese','redirect','4jpLrog','get','back','save','$product_details.secondary_unit','purchases_data','Spanish','stockBefore','message','padStart','$product_details.storage','<!DOCTYPE\x20html>','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Unit\x20</th>','forEach','warehouse','product_date','email','New_Qty_Converted_adj','5770303umqXGe','$product_details.unit','Logo.png','$product_details.product_stock','json','new_adjust_qty','$date','Enabled','$product_details.type','<h5>','product_details','date','body','filter','$product_details.primary_code','</h5>','user','batch_code','Rooms','room_names','status','$room','$product_details.expiry_date','ADJF-','</span>','aggregate','3243845udUkUc','unit','createTransport','adjust_qty','Portuguese','</thead>','Adjustment\x20Mail','2035671oIAqpS','<hr\x20class=\x22my-3\x22>','stock','<th\x20style=\x22border:\x201px\x20solid\x20black;\x22>\x20Product\x20Quantity\x20</th>','secondary_unit','$product_details.product_code','log','German','You\x20can\x27t\x20subtract,\x20the\x20current\x20stock\x20is\x200','expiry_date','Router','<tr>','warehouse_name','edit_adjustment_finished_view','prod_cat','prod_code','types','prod_name','express','floor','<html><head><title></title>','render','$product_details.production_date','</tr>','$product_details.rack','prod_invoice','$finalize','</td>','level','English\x20(US)','/preview/:id','Adjustment\x20Finalize\x20Successfully','findById','params','$product','Portuguese\x20(BR)','slice','staff','<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20justify-content:\x20center;\x22>','Finished\x20Goods','room','split','success','QA\x20Warehouse','site_title','product_name','3610854glBruZ','/upload/','2zXcbzl','all','</tbody>','$product.room_names','<td\x20style=\x22border:\x201px\x20solid\x20black;\x22>','$invoice','production_date','invoice','$product_details.maxPerUnit','DRY\x20GOODS','catch','JO_number','toString','errors','$product_details','$product_details.bin','<h5\x20style=\x22text-align:\x20left;\x22>','Hindi','/view','An\x20error\x20occurred\x20while\x20saving\x20data.','flash','foreach\x20newproduct','</table>','/adjustment/view','$product_details._id','then','../models/all_models','<span\x20style=\x22float:\x20right;\x22>','$product_details.floorlevel','minus','product','<strong>\x20Regards\x20</strong>','adjustment\x20add\x20successfull','New_Qty_Converted','error','French','/adjustment_finished/view','Arabic','image','150947Gdvavb','$product_details.product_name','$product_details.bay','product_stock','add_adjustment_finished','Secondary_units','push','Return\x20Rooms','_id','length','findOne','role'];a0_0x38ff=function(){return _0x3377e5;};return a0_0x38ff();}