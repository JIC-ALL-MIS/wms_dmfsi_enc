function a0_0x12a5(_0x4c5be8,_0x2d81c8){const _0x121edb=a0_0x121e();return a0_0x12a5=function(_0x12a5e6,_0x3bd9fe){_0x12a5e6=_0x12a5e6-0x1ae;let _0x5b3316=_0x121edb[_0x12a5e6];return _0x5b3316;},a0_0x12a5(_0x4c5be8,_0x2d81c8);}const a0_0x508e42=a0_0x12a5;function a0_0x121e(){const _0x5eecc9=['save','English\x20(US)','Enabled','Router','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','Portuguese\x20(BR)','931TlxBQB','name','Hindi','params','Chinese','2368536RCwufY','/view','\x20is\x20add\x20successfully','../public/language/languages.json','find','French','user','3161091aLtFxX','express','/view/:id','German','hash','3956380HnIqGm','flash','7111926iiVRlA','Arabic\x20(ae)','body','Spanish','4ICmhhU','warehouse_category','redirect','../middleware/auth','Email\x20','14808560MYzjhK','1wXFSio','email','password','errors','Finished\x20Goods','status','Raw\x20Materials','$name','English','mobile','154AHeqlq','success','get','findById','bcryptjs','110008gNQaPM','Arabic','12TZmaLS','aggregate','Portuguese','staff\x20data\x20update\x20successfully','staff','post','render','80056sYTEYr','json','language','log','findOne','../models/all_models'];a0_0x121e=function(){return _0x5eecc9;};return a0_0x121e();}(function(_0x9ef426,_0x3901c9){const _0x4724ca=a0_0x12a5,_0x571ac7=_0x9ef426();while(!![]){try{const _0x4db8b4=parseInt(_0x4724ca(0x1c8))/0x1*(parseInt(_0x4724ca(0x1d7))/0x2)+parseInt(_0x4724ca(0x1b7))/0x3*(-parseInt(_0x4724ca(0x1c2))/0x4)+parseInt(_0x4724ca(0x1bc))/0x5*(-parseInt(_0x4724ca(0x1d9))/0x6)+parseInt(_0x4724ca(0x1ec))/0x7*(parseInt(_0x4724ca(0x1e0))/0x8)+parseInt(_0x4724ca(0x1be))/0x9+-parseInt(_0x4724ca(0x1c7))/0xa+-parseInt(_0x4724ca(0x1d2))/0xb*(-parseInt(_0x4724ca(0x1b0))/0xc);if(_0x4db8b4===_0x3901c9)break;else _0x571ac7['push'](_0x571ac7['shift']());}catch(_0x13c23a){_0x571ac7['push'](_0x571ac7['shift']());}}}(a0_0x121e,0xc8c40));const express=require(a0_0x508e42(0x1b8)),app=express(),router=express[a0_0x508e42(0x1e9)](),bcrypt=require(a0_0x508e42(0x1d6)),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x508e42(0x1e5)),auth=require(a0_0x508e42(0x1c5)),users=require(a0_0x508e42(0x1b3));router[a0_0x508e42(0x1d4)](a0_0x508e42(0x1b1),auth,async(_0x11dcab,_0x1a2648)=>{const _0x6596df=a0_0x508e42;try{const {username:_0x15fc7b,email:_0x47b3b9,role:_0x56e54e}=_0x11dcab[_0x6596df(0x1b6)],_0x50eda0=_0x11dcab[_0x6596df(0x1b6)],_0x3a905b=await profile['findOne']({'email':_0x50eda0[_0x6596df(0x1c9)]}),_0x1a33a3=await master_shop[_0x6596df(0x1b4)]();console['log']('master',_0x1a33a3),warehouse_data=await warehouse[_0x6596df(0x1da)]([{'$match':{'status':_0x6596df(0x1e8)}},{'$group':{'_id':_0x6596df(0x1cf),'name':{'$first':_0x6596df(0x1cf)}}}]);const _0x3fcb6b=await staff['find']();console[_0x6596df(0x1e3)](_0x3fcb6b);if(_0x1a33a3[0x0][_0x6596df(0x1e2)]==_0x6596df(0x1e7)){var _0x1c8d7e=users['English'];console[_0x6596df(0x1e3)](_0x1c8d7e);}else{if(_0x1a33a3[0x0]['language']==_0x6596df(0x1ee))var _0x1c8d7e=users['Hindi'];else{if(_0x1a33a3[0x0]['language']==_0x6596df(0x1ba))var _0x1c8d7e=users[_0x6596df(0x1ba)];else{if(_0x1a33a3[0x0][_0x6596df(0x1e2)]=='Spanish')var _0x1c8d7e=users[_0x6596df(0x1c1)];else{if(_0x1a33a3[0x0]['language']==_0x6596df(0x1b5))var _0x1c8d7e=users[_0x6596df(0x1b5)];else{if(_0x1a33a3[0x0]['language']==_0x6596df(0x1eb))var _0x1c8d7e=users[_0x6596df(0x1db)];else{if(_0x1a33a3[0x0][_0x6596df(0x1e2)]==_0x6596df(0x1af))var _0x1c8d7e=users['Chinese'];else{if(_0x1a33a3[0x0][_0x6596df(0x1e2)]==_0x6596df(0x1bf))var _0x1c8d7e=users[_0x6596df(0x1d8)];}}}}}}}let _0x48e67b=[_0x6596df(0x1ce),_0x6596df(0x1cc)];_0x1a2648[_0x6596df(0x1df)](_0x6596df(0x1dd),{'success':_0x11dcab[_0x6596df(0x1bd)](_0x6596df(0x1d3)),'errors':_0x11dcab[_0x6596df(0x1bd)](_0x6596df(0x1cb)),'role':_0x50eda0,'profile':_0x3a905b,'master_shop':_0x1a33a3,'user':_0x3fcb6b,'language':_0x1c8d7e,'warehouse':warehouse_data,'warehouse_cat':_0x48e67b});}catch(_0x2cca0d){console[_0x6596df(0x1e3)](_0x2cca0d);}}),router[a0_0x508e42(0x1de)](a0_0x508e42(0x1b1),auth,async(_0x2b6270,_0x3689c9)=>{const _0x1adf6f=a0_0x508e42;try{const {name:_0x9f458f,email:_0x1a1798,mobile:_0x43a9fa,password:_0x53daf8,status:_0x1c9085,warehouse:_0x27b94c,position:_0x38e70b,warehouse_cat:_0x165fe5}=_0x2b6270[_0x1adf6f(0x1c0)],_0x3db2bd=await bcrypt[_0x1adf6f(0x1bb)](_0x53daf8,0xa),_0x75153c=new staff({'name':_0x9f458f,'email':_0x1a1798,'mobile':_0x43a9fa,'status':_0x1c9085,'warehouse':_0x27b94c,'position':_0x38e70b,'warehouse_category':_0x165fe5}),_0xd4fcbd=await staff[_0x1adf6f(0x1e4)]({'email':_0x1a1798});console[_0x1adf6f(0x1e3)](_0xd4fcbd);if(_0xd4fcbd)return _0x2b6270[_0x1adf6f(0x1bd)](_0x1adf6f(0x1cb),_0x1adf6f(0x1c6)+_0x1a1798+_0x1adf6f(0x1ea)),_0x3689c9['redirect']('back'),![];const _0x5e4ad2=await _0x75153c['save'](),_0x3ad951=new sing_up({'name':_0x9f458f,'email':_0x1a1798,'password':_0x3db2bd,'role':_0x1adf6f(0x1dd)}),_0x3f2020=await _0x3ad951[_0x1adf6f(0x1e6)](),_0x235f38=new profile({'firstname':_0x9f458f,'email':_0x1a1798}),_0x1ce2f3=await _0x235f38['save']();_0x2b6270[_0x1adf6f(0x1bd)](_0x1adf6f(0x1d3),_0x9f458f+_0x1adf6f(0x1b2)),_0x3689c9[_0x1adf6f(0x1c4)]('/staff/view');}catch(_0x22ce4e){console[_0x1adf6f(0x1e3)](_0x22ce4e);}}),router[a0_0x508e42(0x1d4)](a0_0x508e42(0x1b9),auth,async(_0x5b4e92,_0x215106)=>{const _0x46b96e=a0_0x508e42;try{const _0x388843=_0x5b4e92[_0x46b96e(0x1ae)]['id'],_0x4790c1=await master_shop[_0x46b96e(0x1b4)](),_0x5c3cfa=await staff[_0x46b96e(0x1d5)](_0x388843);if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1e7)){var _0x5cd0b5=users[_0x46b96e(0x1d0)];console[_0x46b96e(0x1e3)](_0x5cd0b5);}else{if(_0x4790c1[0x0]['language']==_0x46b96e(0x1ee))var _0x5cd0b5=users[_0x46b96e(0x1ee)];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1ba))var _0x5cd0b5=users['German'];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]=='Spanish')var _0x5cd0b5=users[_0x46b96e(0x1c1)];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1b5))var _0x5cd0b5=users[_0x46b96e(0x1b5)];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1eb))var _0x5cd0b5=users[_0x46b96e(0x1db)];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1af))var _0x5cd0b5=users[_0x46b96e(0x1af)];else{if(_0x4790c1[0x0][_0x46b96e(0x1e2)]==_0x46b96e(0x1bf))var _0x5cd0b5=users[_0x46b96e(0x1d8)];}}}}}}}let _0x83b44b=['Raw\x20Materials','Finished\x20Goods'];_0x215106[_0x46b96e(0x1df)](_0x46b96e(0x1dd),{'success':_0x5b4e92[_0x46b96e(0x1bd)](_0x46b96e(0x1d3)),'errors':_0x5b4e92[_0x46b96e(0x1bd)](_0x46b96e(0x1cb)),'master_shop':_0x4790c1,'user':_0x5c3cfa,'language':_0x5cd0b5,'warehouse_cat':_0x83b44b});}catch(_0x32e999){console[_0x46b96e(0x1e3)](_0x32e999);}}),router['post'](a0_0x508e42(0x1b9),auth,async(_0x518bde,_0x735e4b)=>{const _0x13b810=a0_0x508e42;try{const _0x3b8fe2=_0x518bde[_0x13b810(0x1ae)]['id'],_0x8398b6=await staff['findById'](_0x3b8fe2),{name:_0x38ffad,email:_0x2d622c,mobile:_0x1e6ae8,password:_0x257750,status:_0x44ef7a,warehouse:_0x26ff7f,position:_0x2a9c04,warehouse_cat:_0x5d6e41}=_0x518bde[_0x13b810(0x1c0)];_0x8398b6[_0x13b810(0x1ed)]=_0x38ffad,_0x8398b6[_0x13b810(0x1c9)]=_0x2d622c,_0x8398b6[_0x13b810(0x1d1)]=_0x1e6ae8,_0x8398b6[_0x13b810(0x1ca)]=_0x257750,_0x8398b6[_0x13b810(0x1cd)]=_0x44ef7a,_0x8398b6['warehouse']=_0x26ff7f,_0x8398b6['position']=_0x2a9c04,_0x8398b6[_0x13b810(0x1c3)]=_0x5d6e41;const _0x518686=await _0x8398b6['save'](),_0x27a602=await profile['findOne']({'email':_0x2d622c});_0x27a602['firstname']=_0x38ffad,_0x27a602[_0x13b810(0x1c9)]=_0x2d622c,await _0x27a602[_0x13b810(0x1e6)](),_0x518bde['flash']('success',_0x13b810(0x1dc)),_0x735e4b[_0x13b810(0x1c4)]('/staff/view');}catch(_0x452a61){console['log'](_0x452a61),_0x735e4b[_0x13b810(0x1cd)](0xc8)[_0x13b810(0x1e1)](_0x452a61);}}),module['exports']=router;