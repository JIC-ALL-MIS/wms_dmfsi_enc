const a0_0x31d6d9=a0_0x559a;function a0_0x8d4c(){const _0x2b1d13=['Hindi','Rack\x201','$status','Portuguese','Arabic','success','room','5SQoxuR','French','Portuguese\x20(BR)','Rack\x20E','redirect','2778948XsCIKO','$address','Chinese','7812277OWDmoV','../models/all_models','save','exports','Rack\x20F','../middleware/auth','30EvdGio','log','$name','language','findById','10zfboPv','SPMX','findOne','warehouse','warehouse\x20data\x20update\x20successfully','\x20warehouse\x20is\x20add\x20successfully','Rack\x20D','address','1431892TYfFbL','592pfmNiB','519186RNtwOK','ALL','/view/:id','English\x20(US)','post','Rack\x20B','aggregate','body','2247ABOzKi','German','/warehouse/view','flash','Rack\x202','name','errors','Arabic\x20(ae)','Spanish','Receiving\x20Area','params','Shelves','get','express','/view','Ingredients','Router','68486oGkslY','English','render','status','$room','Raw\x20Materials','195414EbYthe'];a0_0x8d4c=function(){return _0x2b1d13;};return a0_0x8d4c();}(function(_0x62ab7a,_0x25fcf1){const _0x100d94=a0_0x559a,_0x392d6b=_0x62ab7a();while(!![]){try{const _0x10f853=-parseInt(_0x100d94(0x198))/0x1+parseInt(_0x100d94(0x192))/0x2*(parseInt(_0x100d94(0x16a))/0x3)+parseInt(_0x100d94(0x177))/0x4+parseInt(_0x100d94(0x15c))/0x5*(parseInt(_0x100d94(0x179))/0x6)+-parseInt(_0x100d94(0x181))/0x7*(-parseInt(_0x100d94(0x178))/0x8)+parseInt(_0x100d94(0x161))/0x9+parseInt(_0x100d94(0x16f))/0xa*(-parseInt(_0x100d94(0x164))/0xb);if(_0x10f853===_0x25fcf1)break;else _0x392d6b['push'](_0x392d6b['shift']());}catch(_0x39a50e){_0x392d6b['push'](_0x392d6b['shift']());}}}(a0_0x8d4c,0x3434f));const express=require(a0_0x31d6d9(0x18e)),app=express(),router=express[a0_0x31d6d9(0x191)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require(a0_0x31d6d9(0x165)),auth=require(a0_0x31d6d9(0x169)),users=require('../public/language/languages.json');function a0_0x559a(_0x14c38a,_0x18d681){const _0x8d4c24=a0_0x8d4c();return a0_0x559a=function(_0x559a5d,_0x580786){_0x559a5d=_0x559a5d-0x157;let _0x1992a4=_0x8d4c24[_0x559a5d];return _0x1992a4;},a0_0x559a(_0x14c38a,_0x18d681);}router[a0_0x31d6d9(0x18d)]('/view',auth,async(_0x487265,_0x37e60d)=>{const _0x13ea1b=a0_0x31d6d9;try{const {username:_0x49c61f,email:_0x5a3144,role:_0x13f5ee}=_0x487265['user'],_0x17c0dd=_0x487265['user'],_0x1ece2c=await profile['findOne']({'email':_0x17c0dd['email']}),_0x4ca79=await master_shop['find']();var _0xd117c8=[_0x13ea1b(0x19a),_0x13ea1b(0x185),'Rack\x20A',_0x13ea1b(0x17e),'Rack\x20C',_0x13ea1b(0x175),_0x13ea1b(0x15f),_0x13ea1b(0x168),_0x13ea1b(0x18a),_0x13ea1b(0x18c)],_0x179604=[_0x13ea1b(0x197),'Finished\x20Goods',_0x13ea1b(0x170)],_0x2b1847=[_0x13ea1b(0x17a),'Packaging',_0x13ea1b(0x190)];const _0x485afe=await warehouse[_0x13ea1b(0x17f)]([{'$group':{'_id':'$_id','name':{'$first':_0x13ea1b(0x16c)},'room':{'$first':_0x13ea1b(0x196)},'address':{'$first':_0x13ea1b(0x162)},'status':{'$first':_0x13ea1b(0x157)},'warehouse_category':{'$first':'$warehouse_category'}}}]);console[_0x13ea1b(0x16b)](_0x485afe);if(_0x4ca79[0x0]['language']==_0x13ea1b(0x17c))var _0x117fd6=users[_0x13ea1b(0x193)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]==_0x13ea1b(0x199))var _0x117fd6=users[_0x13ea1b(0x199)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]=='German')var _0x117fd6=users[_0x13ea1b(0x182)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]==_0x13ea1b(0x189))var _0x117fd6=users[_0x13ea1b(0x189)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]=='French')var _0x117fd6=users[_0x13ea1b(0x15d)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]==_0x13ea1b(0x15e))var _0x117fd6=users[_0x13ea1b(0x158)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]==_0x13ea1b(0x163))var _0x117fd6=users[_0x13ea1b(0x163)];else{if(_0x4ca79[0x0][_0x13ea1b(0x16d)]==_0x13ea1b(0x188))var _0x117fd6=users[_0x13ea1b(0x159)];}}}}}}}_0x37e60d[_0x13ea1b(0x194)]('warehouse',{'success':_0x487265[_0x13ea1b(0x184)]('success'),'errors':_0x487265[_0x13ea1b(0x184)](_0x13ea1b(0x187)),'user':_0x485afe,'profile':_0x1ece2c,'master_shop':_0x4ca79,'role':_0x17c0dd,'language':_0x117fd6,'rooms_data':_0xd117c8,'rawfinished_data':_0x179604,'vategory_data':_0x2b1847});}catch(_0x5a649d){console[_0x13ea1b(0x16b)](_0x5a649d);}}),router[a0_0x31d6d9(0x17d)](a0_0x31d6d9(0x18f),auth,async(_0x376495,_0x43d5c8)=>{const _0x164180=a0_0x31d6d9;try{const {name:_0x350cef,address:_0x47fda5,status:_0x1df8ca,Room_name:_0x4e78d4,rawfinished:_0x3328ee,category_name:_0x28eccf}=_0x376495['body'],_0x3e35e1=new warehouse({'name':_0x350cef,'address':_0x47fda5,'status':_0x1df8ca,'room':_0x4e78d4,'warehouse_category':_0x3328ee,'category':_0x28eccf}),_0x4360b9=await warehouse[_0x164180(0x171)]({'name':_0x350cef,'room':_0x4e78d4});_0x4360b9?_0x376495['flash'](_0x164180(0x187),_0x350cef+'\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another'):_0x376495[_0x164180(0x184)]('success',_0x350cef+_0x164180(0x174));const _0x3740b5=await _0x3e35e1['save']();_0x43d5c8[_0x164180(0x160)](_0x164180(0x183));}catch(_0x253baf){console[_0x164180(0x16b)](_0x253baf);}}),router[a0_0x31d6d9(0x18d)](a0_0x31d6d9(0x17b),auth,async(_0x28df69,_0x5ee3c6)=>{const _0xb6aca7=a0_0x31d6d9;try{const _0x1d79ca=_0x28df69[_0xb6aca7(0x18b)]['id'],_0x37561f=await master_shop['find']();console[_0xb6aca7(0x16b)]('master',_0x37561f);const _0x57161e=await warehouse[_0xb6aca7(0x16e)](_0x1d79ca);if(_0x37561f[0x0]['language']==_0xb6aca7(0x17c)){var _0x1b7d26=users[_0xb6aca7(0x193)];console[_0xb6aca7(0x16b)](_0x1b7d26);}else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x199))var _0x1b7d26=users['Hindi'];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x182))var _0x1b7d26=users[_0xb6aca7(0x182)];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x189))var _0x1b7d26=users['Spanish'];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x15d))var _0x1b7d26=users['French'];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x15e))var _0x1b7d26=users[_0xb6aca7(0x158)];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x163))var _0x1b7d26=users[_0xb6aca7(0x163)];else{if(_0x37561f[0x0][_0xb6aca7(0x16d)]==_0xb6aca7(0x188))var _0x1b7d26=users[_0xb6aca7(0x159)];}}}}}}}_0x5ee3c6['render'](_0xb6aca7(0x172),{'success':_0x28df69[_0xb6aca7(0x184)]('success'),'errors':_0x28df69['flash'](_0xb6aca7(0x187)),'master_shop':_0x37561f,'user':_0x57161e,'language':_0x1b7d26});}catch(_0xdb48c7){console[_0xb6aca7(0x16b)](_0xdb48c7);}}),router[a0_0x31d6d9(0x17d)](a0_0x31d6d9(0x17b),auth,async(_0xbe8810,_0x132ae1)=>{const _0x4abe31=a0_0x31d6d9;try{const _0x4202bb=_0xbe8810[_0x4abe31(0x18b)]['id'],_0x12be60=await warehouse[_0x4abe31(0x16e)](_0x4202bb);console['log']('edit\x20warehouse\x20data',_0x12be60[_0x4abe31(0x186)]);const {name:_0x11f7fb,address:_0x285e8f,status:_0x3d12b3,Room_name:_0x174aa5}=_0xbe8810[_0x4abe31(0x180)],_0x2b8086=await warehouse['findById'](_0x4202bb);console[_0x4abe31(0x16b)]('edit\x20warehouse\x20warehouse_data',_0x2b8086);const _0x28c96a=await purchases['find']({'warehouse_name':_0x12be60['name'],'room':_0x174aa5});console[_0x4abe31(0x16b)]('edit\x20warehouse\x20purchases_data',_0x28c96a),_0x12be60[_0x4abe31(0x186)]=_0x11f7fb,_0x12be60[_0x4abe31(0x176)]=_0x285e8f,_0x12be60[_0x4abe31(0x195)]=_0x3d12b3,_0x12be60[_0x4abe31(0x15b)]=_0x174aa5;const _0x198c03=await _0x12be60[_0x4abe31(0x166)]();_0xbe8810[_0x4abe31(0x184)](_0x4abe31(0x15a),_0x4abe31(0x173)),_0x132ae1[_0x4abe31(0x160)](_0x4abe31(0x183));}catch(_0x2d4ca6){console[_0x4abe31(0x16b)](_0x2d4ca6);}}),module[a0_0x31d6d9(0x167)]=router;