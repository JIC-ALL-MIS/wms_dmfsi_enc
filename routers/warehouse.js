const a0_0x222003=a0_0x56aa;(function(_0x5cba0a,_0x13a641){const _0x54ee5a=a0_0x56aa,_0x2f5506=_0x5cba0a();while(!![]){try{const _0x14001c=-parseInt(_0x54ee5a(0xe8))/0x1*(parseInt(_0x54ee5a(0xf0))/0x2)+-parseInt(_0x54ee5a(0x104))/0x3+parseInt(_0x54ee5a(0x105))/0x4*(parseInt(_0x54ee5a(0x103))/0x5)+-parseInt(_0x54ee5a(0xe3))/0x6*(-parseInt(_0x54ee5a(0xf3))/0x7)+parseInt(_0x54ee5a(0xd7))/0x8+-parseInt(_0x54ee5a(0x101))/0x9+-parseInt(_0x54ee5a(0xff))/0xa*(parseInt(_0x54ee5a(0xe1))/0xb);if(_0x14001c===_0x13a641)break;else _0x2f5506['push'](_0x2f5506['shift']());}catch(_0x363263){_0x2f5506['push'](_0x2f5506['shift']());}}}(a0_0xfdb4,0xadd0d));const express=require('express'),app=express(),router=express[a0_0x222003(0xd8)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require('../models/all_models'),auth=require(a0_0x222003(0xfd)),users=require(a0_0x222003(0xe9));function a0_0x56aa(_0x4b6c88,_0x36cc3a){const _0xfdb442=a0_0xfdb4();return a0_0x56aa=function(_0x56aa20,_0x33a84d){_0x56aa20=_0x56aa20-0xcc;let _0x5b147f=_0xfdb442[_0x56aa20];return _0x5b147f;},a0_0x56aa(_0x4b6c88,_0x36cc3a);}router[a0_0x222003(0xdb)]('/view',auth,async(_0x4dde9c,_0x9f32ec)=>{const _0x31059d=a0_0x222003;try{const {username:_0x44bc91,email:_0x5b0ff6,role:_0x5b3d26}=_0x4dde9c[_0x31059d(0xf5)],_0x36229a=_0x4dde9c['user'],_0x3a6df5=await profile['findOne']({'email':_0x36229a[_0x31059d(0xdf)]}),_0xcf8564=await master_shop[_0x31059d(0xfb)]();console[_0x31059d(0xda)](_0x31059d(0xef),_0xcf8564);const _0x4947c7=await warehouse[_0x31059d(0xfb)]();var _0xd622ef=['Rack\x201',_0x31059d(0xe5),'Rack\x20A',_0x31059d(0x107),_0x31059d(0xe7),'Rack\x20D',_0x31059d(0x109),_0x31059d(0xf4),_0x31059d(0xe4),'Shelves'],_0x3edf93=[_0x31059d(0xfe),_0x31059d(0xf6)],_0x49bae2=['ALL','Packaging',_0x31059d(0xeb)];if(_0xcf8564[0x0][_0x31059d(0x102)]=='English\x20(US)'){var _0x472f0f=users['English'];console[_0x31059d(0xda)](_0x472f0f);}else{if(_0xcf8564[0x0][_0x31059d(0x102)]==_0x31059d(0xd3))var _0x472f0f=users[_0x31059d(0xd3)];else{if(_0xcf8564[0x0][_0x31059d(0x102)]==_0x31059d(0xed))var _0x472f0f=users[_0x31059d(0xed)];else{if(_0xcf8564[0x0][_0x31059d(0x102)]==_0x31059d(0xf8))var _0x472f0f=users[_0x31059d(0xf8)];else{if(_0xcf8564[0x0]['language']==_0x31059d(0xee))var _0x472f0f=users['French'];else{if(_0xcf8564[0x0][_0x31059d(0x102)]=='Portuguese\x20(BR)')var _0x472f0f=users[_0x31059d(0xde)];else{if(_0xcf8564[0x0][_0x31059d(0x102)]==_0x31059d(0xf1))var _0x472f0f=users[_0x31059d(0xf1)];else{if(_0xcf8564[0x0][_0x31059d(0x102)]==_0x31059d(0xf7))var _0x472f0f=users['Arabic'];}}}}}}}_0x9f32ec[_0x31059d(0xd0)](_0x31059d(0xdd),{'success':_0x4dde9c[_0x31059d(0xd6)](_0x31059d(0xea)),'errors':_0x4dde9c[_0x31059d(0xd6)](_0x31059d(0xcf)),'user':_0x4947c7,'profile':_0x3a6df5,'master_shop':_0xcf8564,'role':_0x36229a,'language':_0x472f0f,'rooms_data':_0xd622ef,'rawfinished_data':_0x3edf93,'vategory_data':_0x49bae2});}catch(_0x54a0b8){console['log'](_0x54a0b8);}}),router[a0_0x222003(0xd5)]('/view',auth,async(_0x2ce050,_0x182292)=>{const _0x39df61=a0_0x222003;try{const {name:_0x2206e6,address:_0x9df100,status:_0x14bd2c,Room_name:_0x165e4c,rawfinished:_0x435a5f,category_name:_0x123071}=_0x2ce050[_0x39df61(0xce)],_0x56c060=new warehouse({'name':_0x2206e6,'address':_0x9df100,'status':_0x14bd2c,'room':_0x165e4c,'warehouse_category':_0x435a5f,'category':_0x123071}),_0x3f4962=await warehouse[_0x39df61(0xf2)]({'name':_0x2206e6,'room':_0x165e4c});_0x3f4962?_0x2ce050[_0x39df61(0xd6)](_0x39df61(0xcf),_0x2206e6+_0x39df61(0xd9)):_0x2ce050[_0x39df61(0xd6)](_0x39df61(0xea),_0x2206e6+_0x39df61(0xfc));const _0x5938f4=await _0x56c060[_0x39df61(0xcd)]();_0x182292[_0x39df61(0xd2)]('/warehouse/view');}catch(_0x5c5116){console[_0x39df61(0xda)](_0x5c5116);}}),router[a0_0x222003(0xdb)](a0_0x222003(0xdc),auth,async(_0x1a1fa5,_0x11c13c)=>{const _0x59ee70=a0_0x222003;try{const _0x2f6096=_0x1a1fa5[_0x59ee70(0xd1)]['id'],_0x1de79a=await master_shop['find']();console[_0x59ee70(0xda)](_0x59ee70(0xef),_0x1de79a);const _0x5d1462=await warehouse['findById'](_0x2f6096);if(_0x1de79a[0x0][_0x59ee70(0x102)]=='English\x20(US)'){var _0x710f81=users[_0x59ee70(0xfa)];console[_0x59ee70(0xda)](_0x710f81);}else{if(_0x1de79a[0x0]['language']=='Hindi')var _0x710f81=users[_0x59ee70(0xd3)];else{if(_0x1de79a[0x0][_0x59ee70(0x102)]==_0x59ee70(0xed))var _0x710f81=users[_0x59ee70(0xed)];else{if(_0x1de79a[0x0][_0x59ee70(0x102)]=='Spanish')var _0x710f81=users['Spanish'];else{if(_0x1de79a[0x0][_0x59ee70(0x102)]==_0x59ee70(0xee))var _0x710f81=users[_0x59ee70(0xee)];else{if(_0x1de79a[0x0][_0x59ee70(0x102)]==_0x59ee70(0x106))var _0x710f81=users['Portuguese'];else{if(_0x1de79a[0x0]['language']=='Chinese')var _0x710f81=users[_0x59ee70(0xf1)];else{if(_0x1de79a[0x0][_0x59ee70(0x102)]==_0x59ee70(0xf7))var _0x710f81=users[_0x59ee70(0x108)];}}}}}}}_0x11c13c[_0x59ee70(0xd0)]('warehouse',{'success':_0x1a1fa5[_0x59ee70(0xd6)]('success'),'errors':_0x1a1fa5[_0x59ee70(0xd6)](_0x59ee70(0xcf)),'master_shop':_0x1de79a,'user':_0x5d1462,'language':_0x710f81});}catch(_0x5f3b44){console['log'](_0x5f3b44);}}),router[a0_0x222003(0xd5)]('/view/:id',auth,async(_0xbf6471,_0x244d2c)=>{const _0x364f36=a0_0x222003;try{const _0x8b9ae7=_0xbf6471[_0x364f36(0xd1)]['id'],_0x35f07f=await warehouse[_0x364f36(0xe0)](_0x8b9ae7);console[_0x364f36(0xda)](_0x364f36(0xd4),_0x35f07f['name']);const {name:_0x150ddc,address:_0xd5a0db,status:_0x98f3fc,Room_name:_0x5168c0}=_0xbf6471['body'],_0x4dab6d=await warehouse['findById'](_0x8b9ae7);console[_0x364f36(0xda)]('edit\x20warehouse\x20warehouse_data',_0x4dab6d);const _0x2bd659=await purchases['find']({'warehouse_name':_0x35f07f[_0x364f36(0xf9)],'room':_0x5168c0});console[_0x364f36(0xda)](_0x364f36(0xe6),_0x2bd659),_0x35f07f[_0x364f36(0xf9)]=_0x150ddc,_0x35f07f['address']=_0xd5a0db,_0x35f07f['status']=_0x98f3fc,_0x35f07f[_0x364f36(0xcc)]=_0x5168c0;const _0x1536aa=await _0x35f07f[_0x364f36(0xcd)]();_0xbf6471[_0x364f36(0xd6)](_0x364f36(0xea),_0x364f36(0xec)),_0x244d2c[_0x364f36(0xd2)](_0x364f36(0x100));}catch(_0x388804){console['log'](_0x388804);}}),module[a0_0x222003(0xe2)]=router;function a0_0xfdb4(){const _0x462c98=['Rack\x202','edit\x20warehouse\x20purchases_data','Rack\x20C','4938JCrmKx','../public/language/languages.json','success','Ingredients','warehouse\x20data\x20update\x20successfully','German','French','master','230UwMuCy','Chinese','findOne','8342278nryqGp','Rack\x20F','user','Finished\x20Goods','Arabic\x20(ae)','Spanish','name','English','find','\x20warehouse\x20is\x20add\x20successfully','../middleware/auth','Raw\x20Materials','1057970HSYKHp','/warehouse/view','1996056zYOncM','language','100355vdPXMV','1820529wDQUgu','172eqqeyE','Portuguese\x20(BR)','Rack\x20B','Arabic','Rack\x20E','room','save','body','errors','render','params','redirect','Hindi','edit\x20warehouse\x20data','post','flash','7200120HUHrWs','Router','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','log','get','/view/:id','warehouse','Portuguese','email','findById','88fEToFA','exports','6CHqUcN','Receiving\x20Area'];a0_0xfdb4=function(){return _0x462c98;};return a0_0xfdb4();}