const a0_0x109420=a0_0x544b;(function(_0x6c71b9,_0x2dd233){const _0x125ece=a0_0x544b,_0x185a69=_0x6c71b9();while(!![]){try{const _0x2d21cb=parseInt(_0x125ece(0x108))/0x1+-parseInt(_0x125ece(0xeb))/0x2*(-parseInt(_0x125ece(0xe4))/0x3)+-parseInt(_0x125ece(0xe1))/0x4*(parseInt(_0x125ece(0x113))/0x5)+parseInt(_0x125ece(0xdc))/0x6*(parseInt(_0x125ece(0x10b))/0x7)+-parseInt(_0x125ece(0x107))/0x8+parseInt(_0x125ece(0xf1))/0x9+parseInt(_0x125ece(0x11a))/0xa;if(_0x2d21cb===_0x2dd233)break;else _0x185a69['push'](_0x185a69['shift']());}catch(_0xa49e66){_0x185a69['push'](_0x185a69['shift']());}}}(a0_0x3855,0x544f8));const express=require(a0_0x109420(0xe7)),app=express(),router=express[a0_0x109420(0xe9)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require(a0_0x109420(0x104)),auth=require(a0_0x109420(0x110)),users=require(a0_0x109420(0xff));function a0_0x544b(_0x24d4b5,_0x2b0f5e){const _0x385546=a0_0x3855();return a0_0x544b=function(_0x544b90,_0x544d7a){_0x544b90=_0x544b90-0xd9;let _0x27d116=_0x385546[_0x544b90];return _0x27d116;},a0_0x544b(_0x24d4b5,_0x2b0f5e);}router[a0_0x109420(0xe2)](a0_0x109420(0xde),auth,async(_0x148049,_0xd81221)=>{const _0x248da6=a0_0x109420;try{const {username:_0x76aefd,email:_0x4c9eb7,role:_0x35411b}=_0x148049[_0x248da6(0x10e)],_0x2a640b=_0x148049[_0x248da6(0x10e)],_0xb5d6d0=await profile['findOne']({'email':_0x2a640b['email']}),_0x59fe04=await master_shop['find']();console['log']('master',_0x59fe04);const _0x1dd0d2=await warehouse['find']();var _0x332932=[_0x248da6(0xec),'Rack\x202','Rack\x20A',_0x248da6(0x114),'Rack\x20C',_0x248da6(0x102),'Rack\x20E',_0x248da6(0xf7),_0x248da6(0x101),_0x248da6(0xf0)],_0x3e78ed=[_0x248da6(0xf2),'Finished\x20Goods'],_0x5a7500=[_0x248da6(0xf5),_0x248da6(0x116),_0x248da6(0xe0)];if(_0x59fe04[0x0]['language']==_0x248da6(0x117)){var _0x54d676=users['English'];console[_0x248da6(0xf4)](_0x54d676);}else{if(_0x59fe04[0x0]['language']==_0x248da6(0x115))var _0x54d676=users['Hindi'];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0xdf))var _0x54d676=users[_0x248da6(0xdf)];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0xd9))var _0x54d676=users['Spanish'];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0xfe))var _0x54d676=users['French'];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0x103))var _0x54d676=users[_0x248da6(0x10a)];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0x109))var _0x54d676=users[_0x248da6(0x109)];else{if(_0x59fe04[0x0][_0x248da6(0xe8)]==_0x248da6(0xfa))var _0x54d676=users[_0x248da6(0xf8)];}}}}}}}_0xd81221[_0x248da6(0xed)]('warehouse',{'success':_0x148049[_0x248da6(0xfb)](_0x248da6(0xef)),'errors':_0x148049[_0x248da6(0xfb)](_0x248da6(0x10d)),'user':_0x1dd0d2,'profile':_0xb5d6d0,'master_shop':_0x59fe04,'role':_0x2a640b,'language':_0x54d676,'rooms_data':_0x332932,'rawfinished_data':_0x3e78ed,'vategory_data':_0x5a7500});}catch(_0x2d26d2){console[_0x248da6(0xf4)](_0x2d26d2);}}),router[a0_0x109420(0x10f)]('/view',auth,async(_0x4481b7,_0x473bfa)=>{const _0x2cd600=a0_0x109420;try{const {name:_0x59f94b,address:_0x1ab00a,status:_0x31d6ac,Room_name:_0x538726,rawfinished:_0x22f2b7,category_name:_0x53e579}=_0x4481b7[_0x2cd600(0xea)],_0x38d418=new warehouse({'name':_0x59f94b,'address':_0x1ab00a,'status':_0x31d6ac,'room':_0x538726,'main_category':_0x22f2b7,'category':_0x53e579}),_0x3ac4da=await warehouse[_0x2cd600(0xe3)]({'name':_0x59f94b,'room':_0x538726});_0x3ac4da?_0x4481b7[_0x2cd600(0xfb)]('errors',_0x59f94b+_0x2cd600(0x112)):_0x4481b7['flash'](_0x2cd600(0xef),_0x59f94b+_0x2cd600(0xf9));const _0x345d75=await _0x38d418[_0x2cd600(0xdb)]();_0x473bfa[_0x2cd600(0xf3)](_0x2cd600(0x10c));}catch(_0x57d37d){console[_0x2cd600(0xf4)](_0x57d37d);}}),router[a0_0x109420(0xe2)](a0_0x109420(0x118),auth,async(_0x2986b0,_0x42f33e)=>{const _0x27685c=a0_0x109420;try{const _0x2ea31e=_0x2986b0[_0x27685c(0x105)]['id'],_0x5d6d08=await master_shop[_0x27685c(0xee)]();console[_0x27685c(0xf4)]('master',_0x5d6d08);const _0x499617=await warehouse[_0x27685c(0xfd)](_0x2ea31e);if(_0x5d6d08[0x0]['language']==_0x27685c(0x117)){var _0x5d728b=users[_0x27685c(0xdd)];console[_0x27685c(0xf4)](_0x5d728b);}else{if(_0x5d6d08[0x0]['language']==_0x27685c(0x115))var _0x5d728b=users[_0x27685c(0x115)];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]==_0x27685c(0xdf))var _0x5d728b=users[_0x27685c(0xdf)];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]==_0x27685c(0xd9))var _0x5d728b=users['Spanish'];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]==_0x27685c(0xfe))var _0x5d728b=users[_0x27685c(0xfe)];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]=='Portuguese\x20(BR)')var _0x5d728b=users[_0x27685c(0x10a)];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]==_0x27685c(0x109))var _0x5d728b=users['Chinese'];else{if(_0x5d6d08[0x0][_0x27685c(0xe8)]==_0x27685c(0xfa))var _0x5d728b=users['Arabic'];}}}}}}}_0x42f33e[_0x27685c(0xed)](_0x27685c(0xfc),{'success':_0x2986b0[_0x27685c(0xfb)]('success'),'errors':_0x2986b0[_0x27685c(0xfb)](_0x27685c(0x10d)),'master_shop':_0x5d6d08,'user':_0x499617,'language':_0x5d728b});}catch(_0x4e77e9){console['log'](_0x4e77e9);}}),router[a0_0x109420(0x10f)](a0_0x109420(0x118),auth,async(_0x280e6d,_0x932c6d)=>{const _0x616f4a=a0_0x109420;try{const _0x3713ea=_0x280e6d[_0x616f4a(0x105)]['id'],_0x4d2c78=await warehouse[_0x616f4a(0xfd)](_0x3713ea);console['log'](_0x616f4a(0x106),_0x4d2c78[_0x616f4a(0x111)]);const {name:_0x24a728,address:_0x3c0cbd,status:_0x5a8431,Room_name:_0x83723c}=_0x280e6d['body'],_0xdd6ff=await warehouse[_0x616f4a(0xfd)](_0x3713ea);console['log'](_0x616f4a(0x119),_0xdd6ff);const _0x38f700=await purchases[_0x616f4a(0xee)]({'warehouse_name':_0x4d2c78[_0x616f4a(0x111)],'room':_0x83723c});console[_0x616f4a(0xf4)](_0x616f4a(0xf6),_0x38f700),_0x4d2c78[_0x616f4a(0x111)]=_0x24a728,_0x4d2c78['address']=_0x3c0cbd,_0x4d2c78[_0x616f4a(0xe5)]=_0x5a8431,_0x4d2c78[_0x616f4a(0x100)]=_0x83723c;const _0x447997=await _0x4d2c78['save']();_0x280e6d[_0x616f4a(0xfb)](_0x616f4a(0xef),_0x616f4a(0xe6)),_0x932c6d['redirect']('/warehouse/view');}catch(_0x17ac8c){console[_0x616f4a(0xf4)](_0x17ac8c);}}),module[a0_0x109420(0xda)]=router;function a0_0x3855(){const _0x44148d=['edit\x20warehouse\x20purchases_data','Rack\x20F','Arabic','\x20warehouse\x20is\x20add\x20successfully','Arabic\x20(ae)','flash','warehouse','findById','French','../public/language/languages.json','room','Receiving\x20Area','Rack\x20D','Portuguese\x20(BR)','../models/all_models','params','edit\x20warehouse\x20data','1048808GKKMFE','284768JfusVv','Chinese','Portuguese','9247IPkFLU','/warehouse/view','errors','user','post','../middleware/auth','name','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','5jJBgHz','Rack\x20B','Hindi','Packaging','English\x20(US)','/view/:id','edit\x20warehouse\x20warehouse_data','259490zVFKPo','Spanish','exports','save','840SwxmpD','English','/view','German','Ingredients','1106812hhObzf','get','findOne','11292GduJRh','status','warehouse\x20data\x20update\x20successfully','express','language','Router','body','56CoOHpm','Rack\x201','render','find','success','Shelves','1368819gNIyrL','Raw\x20Materials','redirect','log','ALL'];a0_0x3855=function(){return _0x44148d;};return a0_0x3855();}