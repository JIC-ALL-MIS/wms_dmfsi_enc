const a0_0x4c122b=a0_0x4a4d;(function(_0x576b07,_0x24bcd0){const _0x473178=a0_0x4a4d,_0x4cbe70=_0x576b07();while(!![]){try{const _0x4b104b=-parseInt(_0x473178(0x16a))/0x1*(-parseInt(_0x473178(0x191))/0x2)+-parseInt(_0x473178(0x175))/0x3+parseInt(_0x473178(0x16d))/0x4+parseInt(_0x473178(0x16b))/0x5*(-parseInt(_0x473178(0x18a))/0x6)+-parseInt(_0x473178(0x18e))/0x7*(-parseInt(_0x473178(0x19c))/0x8)+parseInt(_0x473178(0x190))/0x9*(parseInt(_0x473178(0x193))/0xa)+-parseInt(_0x473178(0x199))/0xb*(parseInt(_0x473178(0x181))/0xc);if(_0x4b104b===_0x24bcd0)break;else _0x4cbe70['push'](_0x4cbe70['shift']());}catch(_0x37a230){_0x4cbe70['push'](_0x4cbe70['shift']());}}}(a0_0x1f21,0xcdf9b));function a0_0x1f21(){const _0x2dc34c=['errors','login','Router','jwt','flash','express','role','login\x20successfully','body','60kEZGwG','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','warehouse_category','clearCookie','success','compare','name','staff','/validate','1610874eOPcDh','email','secret_key','username','1099LpImQs','Disabled','697869cwbfKE','49608FcvpFM','validate','210uHuDIb','/index','find','render','findOne','/staff/view','3559391kPPcSs','get','/login','65864RPHrZw','redirect','16SzWqKI','25cEGONC','log','5019712whFhMD','bcryptjs','password','findById','exports','status','sign','cookie','2306277TbqXRh','your\x20password\x20is\x20wrong','/staff/:id'];a0_0x1f21=function(){return _0x2dc34c;};return a0_0x1f21();}const express=require(a0_0x4c122b(0x17d)),app=express(),router=express[a0_0x4c122b(0x17a)](),{sing_up,staff,profile,master_shop}=require('../models/all_models'),bcrypt=require(a0_0x4c122b(0x16e)),jwt=require('jsonwebtoken'),auth=require('../middleware/auth');function a0_0x4a4d(_0x1cda07,_0x3ca8f1){const _0x1f2149=a0_0x1f21();return a0_0x4a4d=function(_0x4a4df9,_0x5df523){_0x4a4df9=_0x4a4df9-0x16a;let _0x40a03e=_0x1f2149[_0x4a4df9];return _0x40a03e;},a0_0x4a4d(_0x1cda07,_0x3ca8f1);}router[a0_0x4c122b(0x19a)]('/',async(_0x462522,_0x154436)=>{const _0x3fb56f=a0_0x4c122b;try{const _0x4887b0=await master_shop[_0x3fb56f(0x195)]();_0x154436[_0x3fb56f(0x196)](_0x3fb56f(0x179),{'success':_0x462522[_0x3fb56f(0x17c)]('success'),'errors':_0x462522['flash']('errors'),'master_shop':_0x4887b0});}catch(_0x2f6977){console[_0x3fb56f(0x16c)](_0x2f6977);}}),router['get'](a0_0x4c122b(0x189),async(_0xe3e7ea,_0x32a5c8)=>{const _0x250935=a0_0x4c122b;try{const _0x2401e8=await master_shop[_0x250935(0x195)]();_0x32a5c8[_0x250935(0x196)](_0x250935(0x192),{'success':_0xe3e7ea[_0x250935(0x17c)](_0x250935(0x185)),'errors':_0xe3e7ea[_0x250935(0x17c)](_0x250935(0x178)),'master_shop':_0x2401e8});}catch(_0x39e206){console['log'](_0x39e206);}}),router[a0_0x4c122b(0x19a)]('/login',async(_0x40f95a,_0x40d233)=>{const _0x55d90d=a0_0x4c122b;try{const _0x30ec1d=await master_shop[_0x55d90d(0x195)]();console['log']('login\x20master',_0x30ec1d),_0x40d233[_0x55d90d(0x196)](_0x55d90d(0x179),{'success':_0x40f95a[_0x55d90d(0x17c)](_0x55d90d(0x185)),'errors':_0x40f95a[_0x55d90d(0x17c)]('errors'),'master_shop':_0x30ec1d});}catch(_0x1d2bf5){console[_0x55d90d(0x16c)](_0x1d2bf5);}}),router['post'](a0_0x4c122b(0x19b),async(_0x342d92,_0x426418)=>{const _0xa701a0=a0_0x4c122b;try{const _0x1e8429=_0x342d92[_0xa701a0(0x180)][_0xa701a0(0x18b)],_0x49d59e=await sing_up['findOne']({'email':_0x1e8429});if(!_0x49d59e)return _0x342d92[_0xa701a0(0x17c)](_0xa701a0(0x178),'your\x20email\x20is\x20not\x20register'),_0x426418[_0xa701a0(0x19d)](_0xa701a0(0x19b));const _0x1de0f6=await staff[_0xa701a0(0x197)]({'email':_0x49d59e[_0xa701a0(0x18b)]});var _0x29cf6b=_0x1de0f6[_0xa701a0(0x183)];if(_0x49d59e[_0xa701a0(0x17e)]==_0xa701a0(0x188)){const _0x36f497=await staff[_0xa701a0(0x197)]({'email':_0x49d59e['email']});if(_0x36f497['status']==_0xa701a0(0x18f))return _0x342d92[_0xa701a0(0x17c)](_0xa701a0(0x178),'Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.'),_0x426418[_0xa701a0(0x19d)]('/login');_0x29cf6b=_0x36f497[_0xa701a0(0x183)];}const _0x44aabf=_0x342d92['body']['password'],_0x182479=await bcrypt[_0xa701a0(0x186)](_0x44aabf,_0x49d59e[_0xa701a0(0x16f)]);if(_0x182479==![])return _0x342d92[_0xa701a0(0x17c)](_0xa701a0(0x178),_0xa701a0(0x176)),_0x426418[_0xa701a0(0x19d)](_0xa701a0(0x19b));const _0x1287dd=jwt[_0xa701a0(0x173)]({'username':_0x49d59e[_0xa701a0(0x18d)],'email':_0x49d59e[_0xa701a0(0x18b)],'role':_0x49d59e[_0xa701a0(0x17e)],'warehouse_category':_0x29cf6b},process['env']['secret_key']);_0x426418[_0xa701a0(0x174)]('jwt',_0x1287dd,{'expires':new Date(0xe677d213a700)}),_0x342d92[_0xa701a0(0x17c)](_0xa701a0(0x185),_0xa701a0(0x17f)),_0x426418['redirect'](_0xa701a0(0x194));}catch(_0x4ec718){console[_0xa701a0(0x16c)](_0x4ec718);}}),router['get'](a0_0x4c122b(0x177),async(_0x3ae233,_0x193b75)=>{const _0x11eeb6=a0_0x4c122b;try{const _0x2b959e=_0x3ae233['params']['id'],_0x4e5350=await staff[_0x11eeb6(0x170)]({'_id':_0x2b959e});_0x4e5350[_0x11eeb6(0x172)]==_0x11eeb6(0x18f)&&(_0x3ae233['flash'](_0x11eeb6(0x178),_0x11eeb6(0x182)),_0x193b75[_0x11eeb6(0x19d)](_0x11eeb6(0x198)));const _0x478065=await sing_up['findOne']({'email':_0x4e5350[_0x11eeb6(0x18b)]});var _0x5afaef=_0x4e5350[_0x11eeb6(0x183)];if(_0x478065[_0x11eeb6(0x17e)]==_0x11eeb6(0x188)){const _0x5f2e0a=await staff['findOne']({'name':_0x478065[_0x11eeb6(0x187)]});_0x5afaef=_0x5f2e0a[_0x11eeb6(0x183)];}const _0x2e83fa=jwt['sign']({'username':_0x478065[_0x11eeb6(0x18d)],'email':_0x478065[_0x11eeb6(0x18b)],'role':_0x478065[_0x11eeb6(0x17e)],'warehouse_category':_0x5afaef},process['env'][_0x11eeb6(0x18c)]);_0x193b75[_0x11eeb6(0x174)](_0x11eeb6(0x17b),_0x2e83fa,{'expires':new Date(0xe677d213a700)}),_0x3ae233[_0x11eeb6(0x17c)](_0x11eeb6(0x185),'login\x20successfully'),_0x193b75[_0x11eeb6(0x19d)](_0x11eeb6(0x194));}catch(_0x274831){console[_0x11eeb6(0x16c)](_0x274831);}}),router[a0_0x4c122b(0x19a)]('/logout',(_0x11b9fc,_0x5e1763)=>{const _0x22d746=a0_0x4c122b;_0x5e1763[_0x22d746(0x184)](_0x22d746(0x17b)),_0x5e1763[_0x22d746(0x19d)](_0x22d746(0x19b));}),module[a0_0x4c122b(0x171)]=router;