const a0_0x519cf2=a0_0x24e6;(function(_0x20f660,_0xbd2a83){const _0x297c68=a0_0x24e6,_0x25590b=_0x20f660();while(!![]){try{const _0x5e4f1c=-parseInt(_0x297c68(0x212))/0x1+-parseInt(_0x297c68(0x206))/0x2+parseInt(_0x297c68(0x1e7))/0x3*(-parseInt(_0x297c68(0x1f9))/0x4)+-parseInt(_0x297c68(0x20b))/0x5+parseInt(_0x297c68(0x1e9))/0x6*(-parseInt(_0x297c68(0x1fe))/0x7)+parseInt(_0x297c68(0x1ed))/0x8+-parseInt(_0x297c68(0x20c))/0x9*(-parseInt(_0x297c68(0x1fd))/0xa);if(_0x5e4f1c===_0xbd2a83)break;else _0x25590b['push'](_0x25590b['shift']());}catch(_0x168e5a){_0x25590b['push'](_0x25590b['shift']());}}}(a0_0x3824,0x36e6d));const express=require(a0_0x519cf2(0x1f0)),app=express(),router=express[a0_0x519cf2(0x200)](),{profile,master_shop,categories,brands,units,product,warehouse,purchases}=require('../models/all_models'),auth=require(a0_0x519cf2(0x1df)),users=require('../public/language/languages.json');function a0_0x24e6(_0x193f63,_0x153cf0){const _0x382450=a0_0x3824();return a0_0x24e6=function(_0x24e630,_0x4b7ead){_0x24e630=_0x24e630-0x1db;let _0x51ef33=_0x382450[_0x24e630];return _0x51ef33;},a0_0x24e6(_0x193f63,_0x153cf0);}router[a0_0x519cf2(0x1db)]('/view',auth,async(_0x5ba943,_0x47a09f)=>{const _0x329726=a0_0x519cf2;try{const {username:_0x50a67b,email:_0x779661,role:_0x18bba5}=_0x5ba943[_0x329726(0x20d)],_0x411bfb=_0x5ba943['user'],_0x3fee93=await profile[_0x329726(0x218)]({'email':_0x411bfb[_0x329726(0x208)]}),_0x41cc49=await master_shop[_0x329726(0x1ea)]();console[_0x329726(0x20e)](_0x329726(0x1ff),_0x41cc49);const _0x27b25d=await warehouse[_0x329726(0x1ea)]();var _0x402214=[_0x329726(0x1fb),'Rack\x202',_0x329726(0x1f2),_0x329726(0x21b),_0x329726(0x1e0),'Rack\x20D','Rack\x20E',_0x329726(0x1fa),_0x329726(0x1f5),_0x329726(0x1fc)],_0x2e5fd1=[_0x329726(0x1f6),'Finished\x20Goods'],_0xe052df=[_0x329726(0x202),_0x329726(0x204),_0x329726(0x20a)];if(_0x41cc49[0x0]['language']==_0x329726(0x20f)){var _0x3b55ef=users[_0x329726(0x210)];console['log'](_0x3b55ef);}else{if(_0x41cc49[0x0]['language']==_0x329726(0x1f1))var _0x3b55ef=users['Hindi'];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]=='German')var _0x3b55ef=users['German'];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]=='Spanish')var _0x3b55ef=users[_0x329726(0x1ec)];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]==_0x329726(0x1e6))var _0x3b55ef=users[_0x329726(0x1e6)];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]==_0x329726(0x209))var _0x3b55ef=users[_0x329726(0x1dc)];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]=='Chinese')var _0x3b55ef=users[_0x329726(0x215)];else{if(_0x41cc49[0x0][_0x329726(0x1f3)]==_0x329726(0x1ee))var _0x3b55ef=users[_0x329726(0x1dd)];}}}}}}}_0x47a09f[_0x329726(0x219)](_0x329726(0x216),{'success':_0x5ba943[_0x329726(0x1e4)](_0x329726(0x211)),'errors':_0x5ba943[_0x329726(0x1e4)](_0x329726(0x1e8)),'user':_0x27b25d,'profile':_0x3fee93,'master_shop':_0x41cc49,'role':_0x411bfb,'language':_0x3b55ef,'rooms_data':_0x402214,'rawfinished_data':_0x2e5fd1,'vategory_data':_0xe052df});}catch(_0x28e836){console[_0x329726(0x20e)](_0x28e836);}}),router[a0_0x519cf2(0x1e1)](a0_0x519cf2(0x217),auth,async(_0x588406,_0x2007aa)=>{const _0xbcf220=a0_0x519cf2;try{const {name:_0x75e1e6,address:_0x3e12b6,status:_0x2abf86,Room_name:_0x323eb9,rawfinished:_0xe9ea7c,category_name:_0x46edbe}=_0x588406[_0xbcf220(0x201)],_0x5a518c=new warehouse({'name':_0x75e1e6,'address':_0x3e12b6,'status':_0x2abf86,'room':_0x323eb9,'warehouse_category':_0xe9ea7c,'category':_0x46edbe}),_0x206611=await warehouse[_0xbcf220(0x218)]({'name':_0x75e1e6,'room':_0x323eb9});_0x206611?_0x588406[_0xbcf220(0x1e4)]('errors',_0x75e1e6+_0xbcf220(0x1ef)):_0x588406[_0xbcf220(0x1e4)](_0xbcf220(0x211),_0x75e1e6+'\x20warehouse\x20is\x20add\x20successfully');const _0x247775=await _0x5a518c[_0xbcf220(0x205)]();_0x2007aa['redirect'](_0xbcf220(0x1e3));}catch(_0x28ad8d){console['log'](_0x28ad8d);}}),router[a0_0x519cf2(0x1db)](a0_0x519cf2(0x1f4),auth,async(_0x2c9346,_0x3708cc)=>{const _0x595e5b=a0_0x519cf2;try{const _0x390dd6=_0x2c9346[_0x595e5b(0x1eb)]['id'],_0xd9649=await master_shop[_0x595e5b(0x1ea)]();console[_0x595e5b(0x20e)]('master',_0xd9649);const _0x162716=await warehouse[_0x595e5b(0x1e2)](_0x390dd6);if(_0xd9649[0x0][_0x595e5b(0x1f3)]=='English\x20(US)'){var _0x484cec=users[_0x595e5b(0x210)];console[_0x595e5b(0x20e)](_0x484cec);}else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]==_0x595e5b(0x1f1))var _0x484cec=users['Hindi'];else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]=='German')var _0x484cec=users[_0x595e5b(0x213)];else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]==_0x595e5b(0x1ec))var _0x484cec=users['Spanish'];else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]=='French')var _0x484cec=users['French'];else{if(_0xd9649[0x0]['language']==_0x595e5b(0x209))var _0x484cec=users[_0x595e5b(0x1dc)];else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]==_0x595e5b(0x215))var _0x484cec=users['Chinese'];else{if(_0xd9649[0x0][_0x595e5b(0x1f3)]==_0x595e5b(0x1ee))var _0x484cec=users[_0x595e5b(0x1dd)];}}}}}}}_0x3708cc[_0x595e5b(0x219)](_0x595e5b(0x216),{'success':_0x2c9346[_0x595e5b(0x1e4)](_0x595e5b(0x211)),'errors':_0x2c9346['flash'](_0x595e5b(0x1e8)),'master_shop':_0xd9649,'user':_0x162716,'language':_0x484cec});}catch(_0xf5c66c){console[_0x595e5b(0x20e)](_0xf5c66c);}}),router[a0_0x519cf2(0x1e1)](a0_0x519cf2(0x1f4),auth,async(_0x5ef55b,_0x506c66)=>{const _0x1948e9=a0_0x519cf2;try{const _0x58a738=_0x5ef55b['params']['id'],_0x97b1d8=await warehouse[_0x1948e9(0x1e2)](_0x58a738);console[_0x1948e9(0x20e)](_0x1948e9(0x207),_0x97b1d8[_0x1948e9(0x203)]);const {name:_0x31b447,address:_0x5253aa,status:_0x4c5538,Room_name:_0x359e84}=_0x5ef55b[_0x1948e9(0x201)],_0x3328ce=await warehouse[_0x1948e9(0x1e2)](_0x58a738);console[_0x1948e9(0x20e)](_0x1948e9(0x1e5),_0x3328ce);const _0x391855=await purchases['find']({'warehouse_name':_0x97b1d8[_0x1948e9(0x203)],'room':_0x359e84});console[_0x1948e9(0x20e)](_0x1948e9(0x1de),_0x391855),_0x97b1d8[_0x1948e9(0x203)]=_0x31b447,_0x97b1d8['address']=_0x5253aa,_0x97b1d8['status']=_0x4c5538,_0x97b1d8[_0x1948e9(0x21a)]=_0x359e84;const _0x4f9951=await _0x97b1d8[_0x1948e9(0x205)]();_0x5ef55b[_0x1948e9(0x1e4)](_0x1948e9(0x211),_0x1948e9(0x1f8)),_0x506c66[_0x1948e9(0x1f7)]('/warehouse/view');}catch(_0xc69cb9){console[_0x1948e9(0x20e)](_0xc69cb9);}}),module[a0_0x519cf2(0x214)]=router;function a0_0x3824(){const _0x5a4f21=['/view/:id','Receiving\x20Area','Raw\x20Materials','redirect','warehouse\x20data\x20update\x20successfully','20eBjsxx','Rack\x20F','Rack\x201','Shelves','8362540SInrnn','209447cUPZIt','master','Router','body','ALL','name','Packaging','save','730642ooENNA','edit\x20warehouse\x20data','email','Portuguese\x20(BR)','Ingredients','1400710uFHBLC','18aUPNWG','user','log','English\x20(US)','English','success','179543TaiaDB','German','exports','Chinese','warehouse','/view','findOne','render','room','Rack\x20B','get','Portuguese','Arabic','edit\x20warehouse\x20purchases_data','../middleware/auth','Rack\x20C','post','findById','/warehouse/view','flash','edit\x20warehouse\x20warehouse_data','French','232257kQEzlH','errors','60qizSyh','find','params','Spanish','509440UoWELw','Arabic\x20(ae)','\x20warehouse\x20is\x20alredy\x20added.\x20please\x20choose\x20another','express','Hindi','Rack\x20A','language'];a0_0x3824=function(){return _0x5a4f21;};return a0_0x3824();}