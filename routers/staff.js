const a0_0x410549=a0_0x2b62;(function(_0x5e1e0d,_0x728a8a){const _0x5946f8=a0_0x2b62,_0x46d72c=_0x5e1e0d();while(!![]){try{const _0x5d2f2e=parseInt(_0x5946f8(0x140))/0x1*(-parseInt(_0x5946f8(0x150))/0x2)+-parseInt(_0x5946f8(0x15f))/0x3+parseInt(_0x5946f8(0x136))/0x4*(parseInt(_0x5946f8(0x13e))/0x5)+-parseInt(_0x5946f8(0x157))/0x6+-parseInt(_0x5946f8(0x145))/0x7*(-parseInt(_0x5946f8(0x15e))/0x8)+parseInt(_0x5946f8(0x12a))/0x9*(-parseInt(_0x5946f8(0x15c))/0xa)+parseInt(_0x5946f8(0x160))/0xb;if(_0x5d2f2e===_0x728a8a)break;else _0x46d72c['push'](_0x46d72c['shift']());}catch(_0x2b7aea){_0x46d72c['push'](_0x46d72c['shift']());}}}(a0_0x1e65,0x5c54c));const express=require(a0_0x410549(0x14d)),app=express(),router=express['Router'](),bcrypt=require('bcryptjs'),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x410549(0x131)),auth=require(a0_0x410549(0x12c)),users=require(a0_0x410549(0x13d));function a0_0x2b62(_0x31afda,_0x5c3844){const _0x1e6549=a0_0x1e65();return a0_0x2b62=function(_0x2b6262,_0x3b45c1){_0x2b6262=_0x2b6262-0x122;let _0x1736e5=_0x1e6549[_0x2b6262];return _0x1736e5;},a0_0x2b62(_0x31afda,_0x5c3844);}router[a0_0x410549(0x12d)](a0_0x410549(0x13b),auth,async(_0x295aad,_0x4f01bc)=>{const _0x5d16cf=a0_0x410549;try{const {username:_0x21d3bd,email:_0x8831aa,role:_0x2056d3}=_0x295aad[_0x5d16cf(0x158)],_0x4b8eeb=_0x295aad[_0x5d16cf(0x158)],_0x5f5b4e=await profile[_0x5d16cf(0x14f)]({'email':_0x4b8eeb[_0x5d16cf(0x154)]}),_0x58c6cd=await master_shop[_0x5d16cf(0x15a)]();console[_0x5d16cf(0x149)](_0x5d16cf(0x153),_0x58c6cd),warehouse_data=await warehouse[_0x5d16cf(0x15b)]([{'$match':{'status':_0x5d16cf(0x132)}},{'$group':{'_id':_0x5d16cf(0x127),'name':{'$first':_0x5d16cf(0x127)}}}]);const _0x5a8f03=await staff[_0x5d16cf(0x15a)]();console[_0x5d16cf(0x149)](_0x5a8f03);if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x128)){var _0x43b7ce=users[_0x5d16cf(0x12b)];console['log'](_0x43b7ce);}else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x15d))var _0x43b7ce=users[_0x5d16cf(0x15d)];else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]=='German')var _0x43b7ce=users[_0x5d16cf(0x12f)];else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x13a))var _0x43b7ce=users[_0x5d16cf(0x13a)];else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x159))var _0x43b7ce=users['French'];else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x14c))var _0x43b7ce=users[_0x5d16cf(0x135)];else{if(_0x58c6cd[0x0]['language']==_0x5d16cf(0x134))var _0x43b7ce=users[_0x5d16cf(0x134)];else{if(_0x58c6cd[0x0][_0x5d16cf(0x14e)]==_0x5d16cf(0x139))var _0x43b7ce=users['Arabic'];}}}}}}}let _0x37da66=['Raw\x20Materials',_0x5d16cf(0x129)];_0x4f01bc[_0x5d16cf(0x137)](_0x5d16cf(0x126),{'success':_0x295aad[_0x5d16cf(0x14b)](_0x5d16cf(0x13f)),'errors':_0x295aad[_0x5d16cf(0x14b)](_0x5d16cf(0x143)),'role':_0x4b8eeb,'profile':_0x5f5b4e,'master_shop':_0x58c6cd,'user':_0x5a8f03,'language':_0x43b7ce,'warehouse':warehouse_data,'warehouse_cat':_0x37da66});}catch(_0x222bcd){console[_0x5d16cf(0x149)](_0x222bcd);}}),router['post'](a0_0x410549(0x13b),auth,async(_0x3c2639,_0x3c7754)=>{const _0x2481fd=a0_0x410549;try{const {name:_0x2df0f2,email:_0x5f2c74,mobile:_0x4889df,password:_0x525841,status:_0x34fcea,warehouse:_0x26f245,position:_0x70c956,warehouse_cat:_0x3c9234}=_0x3c2639[_0x2481fd(0x122)],_0x417fc2=await bcrypt[_0x2481fd(0x148)](_0x525841,0xa),_0x5992a9=new staff({'name':_0x2df0f2,'email':_0x5f2c74,'mobile':_0x4889df,'status':_0x34fcea,'warehouse':_0x26f245,'position':_0x70c956,'warehouse_category':_0x3c9234}),_0x3c3b4a=await staff[_0x2481fd(0x14f)]({'email':_0x5f2c74});console[_0x2481fd(0x149)](_0x3c3b4a);if(_0x3c3b4a)return _0x3c2639[_0x2481fd(0x14b)](_0x2481fd(0x143),_0x2481fd(0x13c)+_0x5f2c74+'\x20is\x20alredy\x20added.\x20please\x20choose\x20another'),_0x3c7754['redirect']('back'),![];const _0x39ed8b=await _0x5992a9['save'](),_0x18121c=new sing_up({'name':_0x2df0f2,'email':_0x5f2c74,'password':_0x417fc2,'role':_0x2481fd(0x126)}),_0x150a38=await _0x18121c[_0x2481fd(0x155)](),_0x697a44=new profile({'firstname':_0x2df0f2,'email':_0x5f2c74}),_0x4b2ce6=await _0x697a44[_0x2481fd(0x155)]();_0x3c2639[_0x2481fd(0x14b)](_0x2481fd(0x13f),_0x2df0f2+_0x2481fd(0x123)),_0x3c7754['redirect'](_0x2481fd(0x142));}catch(_0x511317){console['log'](_0x511317);}}),router['get'](a0_0x410549(0x151),auth,async(_0x35205d,_0x1c1964)=>{const _0x1f85f0=a0_0x410549;try{const _0x3d26c7=_0x35205d[_0x1f85f0(0x14a)]['id'],_0x5ae6a3=await master_shop['find'](),_0x301d4e=await staff['findById'](_0x3d26c7);if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x128)){var _0x3c7b35=users[_0x1f85f0(0x12b)];console['log'](_0x3c7b35);}else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x15d))var _0x3c7b35=users[_0x1f85f0(0x15d)];else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]=='German')var _0x3c7b35=users['German'];else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x13a))var _0x3c7b35=users['Spanish'];else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x159))var _0x3c7b35=users[_0x1f85f0(0x159)];else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x14c))var _0x3c7b35=users['Portuguese'];else{if(_0x5ae6a3[0x0]['language']==_0x1f85f0(0x134))var _0x3c7b35=users[_0x1f85f0(0x134)];else{if(_0x5ae6a3[0x0][_0x1f85f0(0x14e)]==_0x1f85f0(0x139))var _0x3c7b35=users[_0x1f85f0(0x138)];}}}}}}}let _0x22fbfa=[_0x1f85f0(0x133),_0x1f85f0(0x129)];_0x1c1964[_0x1f85f0(0x137)](_0x1f85f0(0x126),{'success':_0x35205d['flash']('success'),'errors':_0x35205d[_0x1f85f0(0x14b)](_0x1f85f0(0x143)),'master_shop':_0x5ae6a3,'user':_0x301d4e,'language':_0x3c7b35,'warehouse_cat':_0x22fbfa});}catch(_0x10f2ae){console[_0x1f85f0(0x149)](_0x10f2ae);}}),router[a0_0x410549(0x124)]('/view/:id',auth,async(_0x19e3e0,_0x1d300d)=>{const _0x1fa464=a0_0x410549;try{const _0x1149ef=_0x19e3e0['params']['id'],_0x469a46=await staff[_0x1fa464(0x130)](_0x1149ef),{name:_0x4b8ac6,email:_0x3f1e92,mobile:_0x57e1b6,password:_0x887122,status:_0x1b1f9c,warehouse:_0xbca43d,position:_0x1d5b93,warehouse_cat:_0x75fc1e}=_0x19e3e0['body'];_0x469a46['name']=_0x4b8ac6,_0x469a46[_0x1fa464(0x154)]=_0x3f1e92,_0x469a46['mobile']=_0x57e1b6,_0x469a46[_0x1fa464(0x12e)]=_0x887122,_0x469a46[_0x1fa464(0x141)]=_0x1b1f9c,_0x469a46['warehouse']=_0xbca43d,_0x469a46[_0x1fa464(0x152)]=_0x1d5b93,_0x469a46[_0x1fa464(0x144)]=_0x75fc1e;const _0x132d69=await _0x469a46['save'](),_0x2390ea=await profile[_0x1fa464(0x14f)]({'email':_0x3f1e92});_0x2390ea['firstname']=_0x4b8ac6,_0x2390ea[_0x1fa464(0x154)]=_0x3f1e92,await _0x2390ea[_0x1fa464(0x155)](),_0x19e3e0[_0x1fa464(0x14b)]('success',_0x1fa464(0x146)),_0x1d300d[_0x1fa464(0x147)]('/staff/view');}catch(_0x49b010){console[_0x1fa464(0x149)](_0x49b010),_0x1d300d[_0x1fa464(0x141)](0xc8)[_0x1fa464(0x156)](_0x49b010);}}),module[a0_0x410549(0x125)]=router;function a0_0x1e65(){const _0x474245=['Portuguese','8VPGjPL','render','Arabic','Arabic\x20(ae)','Spanish','/view','Email\x20','../public/language/languages.json','847810NyJksV','success','2659LWhpui','status','/staff/view','errors','warehouse_category','7XnoZsm','staff\x20data\x20update\x20successfully','redirect','hash','log','params','flash','Portuguese\x20(BR)','express','language','findOne','410QHTYiF','/view/:id','position','master','email','save','json','1544244apSOLs','user','French','find','aggregate','355710gAvlSH','Hindi','510392SjaPXY','1488885MEVpme','20666096ghfhIz','body','\x20is\x20add\x20successfully','post','exports','staff','$name','English\x20(US)','Finished\x20Goods','153kZCLoA','English','../middleware/auth','get','password','German','findById','../models/all_models','Enabled','Raw\x20Materials','Chinese'];a0_0x1e65=function(){return _0x474245;};return a0_0x1e65();}