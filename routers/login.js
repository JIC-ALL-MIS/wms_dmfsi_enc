const a0_0xc6d46d=a0_0x1fc3;function a0_0x1fc3(_0x10def3,_0x304640){const _0x531d10=a0_0x531d();return a0_0x1fc3=function(_0x1fc391,_0x3476ed){_0x1fc391=_0x1fc391-0x105;let _0x563bf9=_0x531d10[_0x1fc391];return _0x563bf9;},a0_0x1fc3(_0x10def3,_0x304640);}(function(_0xd52e55,_0x5e23b2){const _0x4ee318=a0_0x1fc3,_0x2b5c65=_0xd52e55();while(!![]){try{const _0x3976c5=-parseInt(_0x4ee318(0x130))/0x1*(parseInt(_0x4ee318(0x108))/0x2)+-parseInt(_0x4ee318(0x10e))/0x3*(parseInt(_0x4ee318(0x12c))/0x4)+-parseInt(_0x4ee318(0x11b))/0x5*(-parseInt(_0x4ee318(0x118))/0x6)+-parseInt(_0x4ee318(0x120))/0x7+-parseInt(_0x4ee318(0x11d))/0x8+parseInt(_0x4ee318(0x12f))/0x9*(parseInt(_0x4ee318(0x10a))/0xa)+-parseInt(_0x4ee318(0x12e))/0xb*(-parseInt(_0x4ee318(0x131))/0xc);if(_0x3976c5===_0x5e23b2)break;else _0x2b5c65['push'](_0x2b5c65['shift']());}catch(_0xa685c4){_0x2b5c65['push'](_0x2b5c65['shift']());}}}(a0_0x531d,0x6148b));const express=require('express'),app=express(),router=express[a0_0xc6d46d(0x128)](),{sing_up,staff,profile,master_shop}=require(a0_0xc6d46d(0x121)),bcrypt=require('bcryptjs'),jwt=require(a0_0xc6d46d(0x110)),auth=require(a0_0xc6d46d(0x10c));router[a0_0xc6d46d(0x12b)]('/',async(_0x4b4266,_0x3435bd)=>{const _0xaf6eaa=a0_0xc6d46d;try{const _0x2a0609=await master_shop['find']();_0x3435bd[_0xaf6eaa(0x135)]('login',{'success':_0x4b4266[_0xaf6eaa(0x124)](_0xaf6eaa(0x119)),'errors':_0x4b4266['flash'](_0xaf6eaa(0x115)),'master_shop':_0x2a0609});}catch(_0x5e2643){console[_0xaf6eaa(0x11c)](_0x5e2643);}}),router[a0_0xc6d46d(0x12b)](a0_0xc6d46d(0x127),async(_0x18faa9,_0x54c030)=>{const _0x1c2a07=a0_0xc6d46d;try{const _0x1f3f33=await master_shop[_0x1c2a07(0x10b)]();_0x54c030[_0x1c2a07(0x135)]('validate',{'success':_0x18faa9[_0x1c2a07(0x124)](_0x1c2a07(0x119)),'errors':_0x18faa9[_0x1c2a07(0x124)](_0x1c2a07(0x115)),'master_shop':_0x1f3f33});}catch(_0x5174bb){console[_0x1c2a07(0x11c)](_0x5174bb);}}),router[a0_0xc6d46d(0x12b)](a0_0xc6d46d(0x134),async(_0x1f58aa,_0x1be8f3)=>{const _0x6ec4d8=a0_0xc6d46d;try{const _0x265ee6=await master_shop[_0x6ec4d8(0x10b)]();console[_0x6ec4d8(0x11c)](_0x6ec4d8(0x11f),_0x265ee6),_0x1be8f3[_0x6ec4d8(0x135)](_0x6ec4d8(0x123),{'success':_0x1f58aa['flash'](_0x6ec4d8(0x119)),'errors':_0x1f58aa[_0x6ec4d8(0x124)](_0x6ec4d8(0x115)),'master_shop':_0x265ee6});}catch(_0x50963c){console[_0x6ec4d8(0x11c)](_0x50963c);}}),router['post'](a0_0xc6d46d(0x134),async(_0x31857d,_0x1eed70)=>{const _0x512eeb=a0_0xc6d46d;try{const _0x33bd9f=_0x31857d[_0x512eeb(0x109)]['email'],_0x284081=await sing_up[_0x512eeb(0x113)]({'email':_0x33bd9f});if(!_0x284081)return _0x31857d[_0x512eeb(0x124)](_0x512eeb(0x115),'your\x20email\x20is\x20not\x20register'),_0x1eed70[_0x512eeb(0x136)](_0x512eeb(0x134));const _0x21ed92=await staff[_0x512eeb(0x113)]({'email':_0x284081['email']});var _0x29a15a=_0x21ed92[_0x512eeb(0x133)];if(_0x284081[_0x512eeb(0x11a)]==_0x512eeb(0x11e)){const _0x37fd36=await staff[_0x512eeb(0x113)]({'email':_0x284081[_0x512eeb(0x12a)]});if(_0x37fd36[_0x512eeb(0x117)]==_0x512eeb(0x116))return _0x31857d[_0x512eeb(0x124)](_0x512eeb(0x115),_0x512eeb(0x107)),_0x1eed70[_0x512eeb(0x136)](_0x512eeb(0x134));_0x29a15a=_0x37fd36['warehouse_category'];}const _0x5de705=_0x31857d[_0x512eeb(0x109)][_0x512eeb(0x132)],_0x183c4d=await bcrypt[_0x512eeb(0x13a)](_0x5de705,_0x284081[_0x512eeb(0x132)]);if(_0x183c4d==![])return _0x31857d[_0x512eeb(0x124)](_0x512eeb(0x115),_0x512eeb(0x125)),_0x1eed70[_0x512eeb(0x136)](_0x512eeb(0x134));const _0x3c8f7d=jwt[_0x512eeb(0x10f)]({'username':_0x284081[_0x512eeb(0x137)],'email':_0x284081[_0x512eeb(0x12a)],'role':_0x284081[_0x512eeb(0x11a)],'warehouse_category':_0x29a15a},process['env'][_0x512eeb(0x12d)]);_0x1eed70['cookie'](_0x512eeb(0x105),_0x3c8f7d,{'expires':new Date(0xe677d213a700)}),_0x31857d[_0x512eeb(0x124)]('success','login\x20successfully'),_0x1eed70[_0x512eeb(0x136)](_0x512eeb(0x111));}catch(_0x5b87ed){console['log'](_0x5b87ed);}}),router[a0_0xc6d46d(0x12b)](a0_0xc6d46d(0x112),async(_0x479c2f,_0x341557)=>{const _0x486281=a0_0xc6d46d;try{const _0x2e424a=_0x479c2f[_0x486281(0x106)]['id'],_0x475892=await staff[_0x486281(0x114)]({'_id':_0x2e424a});_0x475892[_0x486281(0x117)]==_0x486281(0x116)&&(_0x479c2f[_0x486281(0x124)](_0x486281(0x115),_0x486281(0x107)),_0x341557[_0x486281(0x136)](_0x486281(0x122)));const _0x3b8f22=await sing_up['findOne']({'email':_0x475892[_0x486281(0x12a)]});var _0x4b5f5b=_0x475892[_0x486281(0x133)];if(_0x3b8f22[_0x486281(0x11a)]==_0x486281(0x11e)){const _0x3a0100=await staff[_0x486281(0x113)]({'name':_0x3b8f22[_0x486281(0x129)]});_0x4b5f5b=_0x3a0100[_0x486281(0x133)];}const _0x308391=jwt[_0x486281(0x10f)]({'username':_0x3b8f22[_0x486281(0x137)],'email':_0x3b8f22[_0x486281(0x12a)],'role':_0x3b8f22['role'],'warehouse_category':_0x4b5f5b},process[_0x486281(0x139)][_0x486281(0x12d)]);_0x341557[_0x486281(0x10d)](_0x486281(0x105),_0x308391,{'expires':new Date(0xe677d213a700)}),_0x479c2f[_0x486281(0x124)](_0x486281(0x119),'login\x20successfully'),_0x341557['redirect']('/index');}catch(_0x325c8b){console['log'](_0x325c8b);}}),router[a0_0xc6d46d(0x12b)]('/logout',(_0x53cac7,_0x120b43)=>{const _0xd44888=a0_0xc6d46d;_0x120b43[_0xd44888(0x126)](_0xd44888(0x105)),_0x120b43['redirect']('/login');}),module[a0_0xc6d46d(0x138)]=router;function a0_0x531d(){const _0x1fad2e=['24uDxNIg','secret_key','1067PoanHd','1013040IccZXp','169JDkUjT','124548IeEEhq','password','warehouse_category','/login','render','redirect','username','exports','env','compare','jwt','params','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','5974QHClXc','body','20DPvcwF','find','../middleware/auth','cookie','50457ivLiXo','sign','jsonwebtoken','/index','/staff/:id','findOne','findById','errors','Disabled','status','1528560deHSgP','success','role','10bYccuy','log','5505568sxDfqn','staff','login\x20master','343105RJElqc','../models/all_models','/staff/view','login','flash','your\x20password\x20is\x20wrong','clearCookie','/validate','Router','name','email','get'];a0_0x531d=function(){return _0x1fad2e;};return a0_0x531d();}