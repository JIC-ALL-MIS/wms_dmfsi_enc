const a0_0x48205b=a0_0x418e;(function(_0x40b139,_0x5002b2){const _0x1a90c1=a0_0x418e,_0x419738=_0x40b139();while(!![]){try{const _0x32ab3c=parseInt(_0x1a90c1(0x126))/0x1*(parseInt(_0x1a90c1(0x11e))/0x2)+-parseInt(_0x1a90c1(0x125))/0x3+parseInt(_0x1a90c1(0x106))/0x4+parseInt(_0x1a90c1(0x111))/0x5+parseInt(_0x1a90c1(0x132))/0x6*(parseInt(_0x1a90c1(0x113))/0x7)+parseInt(_0x1a90c1(0x107))/0x8+-parseInt(_0x1a90c1(0x12f))/0x9*(parseInt(_0x1a90c1(0x11b))/0xa);if(_0x32ab3c===_0x5002b2)break;else _0x419738['push'](_0x419738['shift']());}catch(_0x4b02a0){_0x419738['push'](_0x419738['shift']());}}}(a0_0x2d5f,0x273f7));const express=require(a0_0x48205b(0x110)),app=express(),router=express['Router'](),{sing_up,staff,profile,master_shop}=require(a0_0x48205b(0x12c)),bcrypt=require(a0_0x48205b(0x122)),jwt=require(a0_0x48205b(0x134)),auth=require('../middleware/auth');function a0_0x418e(_0x23afa7,_0x23c12d){const _0x2d5fee=a0_0x2d5f();return a0_0x418e=function(_0x418e6c,_0x2ea005){_0x418e6c=_0x418e6c-0x103;let _0x49854e=_0x2d5fee[_0x418e6c];return _0x49854e;},a0_0x418e(_0x23afa7,_0x23c12d);}router[a0_0x48205b(0x104)]('/',async(_0x320b93,_0x36098d)=>{const _0x256bc1=a0_0x48205b;try{const _0x57f376=await master_shop[_0x256bc1(0x128)]();_0x36098d[_0x256bc1(0x12b)](_0x256bc1(0x12e),{'success':_0x320b93[_0x256bc1(0x116)](_0x256bc1(0x127)),'errors':_0x320b93[_0x256bc1(0x116)](_0x256bc1(0x114)),'master_shop':_0x57f376});}catch(_0xdf5609){console[_0x256bc1(0x135)](_0xdf5609);}}),router[a0_0x48205b(0x104)]('/validate',async(_0x2b968f,_0x552af8)=>{const _0x18fa75=a0_0x48205b;try{const _0x3b2630=await master_shop[_0x18fa75(0x128)]();_0x552af8[_0x18fa75(0x12b)](_0x18fa75(0x103),{'success':_0x2b968f[_0x18fa75(0x116)](_0x18fa75(0x127)),'errors':_0x2b968f[_0x18fa75(0x116)](_0x18fa75(0x114)),'master_shop':_0x3b2630});}catch(_0x146104){console[_0x18fa75(0x135)](_0x146104);}}),router['get'](a0_0x48205b(0x105),async(_0x52b0be,_0x20c43a)=>{const _0x4290e7=a0_0x48205b;try{const _0x48b669=await master_shop[_0x4290e7(0x128)]();console['log'](_0x4290e7(0x11c),_0x48b669),_0x20c43a[_0x4290e7(0x12b)]('login',{'success':_0x52b0be[_0x4290e7(0x116)](_0x4290e7(0x127)),'errors':_0x52b0be[_0x4290e7(0x116)](_0x4290e7(0x114)),'master_shop':_0x48b669});}catch(_0xb3e59c){console[_0x4290e7(0x135)](_0xb3e59c);}}),router['post']('/login',async(_0x4f829d,_0x32370c)=>{const _0x5c4833=a0_0x48205b;try{const _0x826ba2=_0x4f829d[_0x5c4833(0x115)][_0x5c4833(0x121)],_0x3556db=await sing_up['findOne']({'email':_0x826ba2});if(!_0x3556db)return _0x4f829d['flash']('errors',_0x5c4833(0x10e)),_0x32370c[_0x5c4833(0x118)](_0x5c4833(0x105));const _0xb90d89=await staff[_0x5c4833(0x10c)]({'email':_0x3556db[_0x5c4833(0x121)]});var _0x3039f2=_0xb90d89[_0x5c4833(0x10b)];if(_0x3556db[_0x5c4833(0x119)]==_0x5c4833(0x10d)){const _0x7af17b=await staff['findOne']({'email':_0x3556db[_0x5c4833(0x121)]});if(_0x7af17b['status']==_0x5c4833(0x12d))return _0x4f829d[_0x5c4833(0x116)](_0x5c4833(0x114),_0x5c4833(0x109)),_0x32370c[_0x5c4833(0x118)](_0x5c4833(0x105));_0x3039f2=_0x7af17b[_0x5c4833(0x10b)];}const _0x78ab54=_0x4f829d[_0x5c4833(0x115)][_0x5c4833(0x11d)],_0x47b280=await bcrypt['compare'](_0x78ab54,_0x3556db['password']);if(_0x47b280==![])return _0x4f829d['flash'](_0x5c4833(0x114),_0x5c4833(0x130)),_0x32370c[_0x5c4833(0x118)](_0x5c4833(0x105));const _0x5baf78=jwt[_0x5c4833(0x11f)]({'username':_0x3556db[_0x5c4833(0x129)],'email':_0x3556db[_0x5c4833(0x121)],'role':_0x3556db[_0x5c4833(0x119)],'warehouse_category':_0x3039f2},process[_0x5c4833(0x117)][_0x5c4833(0x108)]);_0x32370c[_0x5c4833(0x11a)](_0x5c4833(0x133),_0x5baf78,{'expires':new Date(0xe677d213a700)}),_0x4f829d[_0x5c4833(0x116)](_0x5c4833(0x127),_0x5c4833(0x10f)),_0x32370c[_0x5c4833(0x118)](_0x5c4833(0x12a));}catch(_0x5173c6){console[_0x5c4833(0x135)](_0x5173c6);}}),router[a0_0x48205b(0x104)](a0_0x48205b(0x112),async(_0x530485,_0x14cff3)=>{const _0x1eb414=a0_0x48205b;try{const _0x346d26=_0x530485[_0x1eb414(0x131)]['id'],_0x50acec=await staff[_0x1eb414(0x123)]({'_id':_0x346d26});_0x50acec[_0x1eb414(0x120)]==_0x1eb414(0x12d)&&(_0x530485[_0x1eb414(0x116)]('errors','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.'),_0x14cff3[_0x1eb414(0x118)]('/staff/view'));const _0x1508cc=await sing_up[_0x1eb414(0x10c)]({'email':_0x50acec[_0x1eb414(0x121)]});var _0x4387b7=_0x50acec['warehouse_category'];if(_0x1508cc['role']==_0x1eb414(0x10d)){const _0x155b3e=await staff[_0x1eb414(0x10c)]({'name':_0x1508cc[_0x1eb414(0x124)]});_0x4387b7=_0x155b3e[_0x1eb414(0x10b)];}const _0x2ba47f=jwt['sign']({'username':_0x1508cc['username'],'email':_0x1508cc['email'],'role':_0x1508cc['role'],'warehouse_category':_0x4387b7},process[_0x1eb414(0x117)][_0x1eb414(0x108)]);_0x14cff3[_0x1eb414(0x11a)](_0x1eb414(0x133),_0x2ba47f,{'expires':new Date(0xe677d213a700)}),_0x530485['flash'](_0x1eb414(0x127),_0x1eb414(0x10f)),_0x14cff3[_0x1eb414(0x118)](_0x1eb414(0x12a));}catch(_0x49feb2){console[_0x1eb414(0x135)](_0x49feb2);}}),router[a0_0x48205b(0x104)]('/logout',(_0x191e46,_0xdf8ce3)=>{const _0x477eaa=a0_0x48205b;_0xdf8ce3['clearCookie'](_0x477eaa(0x133)),_0xdf8ce3[_0x477eaa(0x118)](_0x477eaa(0x105));}),module[a0_0x48205b(0x10a)]=router;function a0_0x2d5f(){const _0x434c23=['warehouse_category','findOne','staff','your\x20email\x20is\x20not\x20register','login\x20successfully','express','178585EAVogb','/staff/:id','180593iDBqNk','errors','body','flash','env','redirect','role','cookie','1870mDspwr','login\x20master','password','79826nWKpOg','sign','status','email','bcryptjs','findById','name','865083rezypa','8yFXFTz','success','find','username','/index','render','../models/all_models','Disabled','login','18972qDnwfB','your\x20password\x20is\x20wrong','params','30cMVRxr','jwt','jsonwebtoken','log','validate','get','/login','891700jnqGaJ','1091000svxeIK','secret_key','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','exports'];a0_0x2d5f=function(){return _0x434c23;};return a0_0x2d5f();}