const a0_0x1ecf79=a0_0x3bbd;(function(_0x1b0d89,_0x4aace9){const _0x199ee6=a0_0x3bbd,_0x2e73df=_0x1b0d89();while(!![]){try{const _0x194d4a=-parseInt(_0x199ee6(0xb4))/0x1*(-parseInt(_0x199ee6(0xed))/0x2)+parseInt(_0x199ee6(0xb5))/0x3+-parseInt(_0x199ee6(0xee))/0x4*(parseInt(_0x199ee6(0xc9))/0x5)+-parseInt(_0x199ee6(0xc4))/0x6+-parseInt(_0x199ee6(0xba))/0x7*(-parseInt(_0x199ee6(0xc6))/0x8)+parseInt(_0x199ee6(0xaf))/0x9*(-parseInt(_0x199ee6(0xc0))/0xa)+parseInt(_0x199ee6(0xb2))/0xb*(-parseInt(_0x199ee6(0xe2))/0xc);if(_0x194d4a===_0x4aace9)break;else _0x2e73df['push'](_0x2e73df['shift']());}catch(_0x25b11c){_0x2e73df['push'](_0x2e73df['shift']());}}}(a0_0x5ee5,0x3d4e0));const express=require(a0_0x1ecf79(0xd9)),app=express(),router=express[a0_0x1ecf79(0xbc)](),bcrypt=require('bcryptjs'),{profile,master_shop,sing_up,categories,brands,units,product,warehouse,staff}=require(a0_0x1ecf79(0xde)),auth=require('../middleware/auth'),users=require(a0_0x1ecf79(0xb0));function a0_0x5ee5(){const _0x15b718=['/view','status','965442FRbuom','save','176PcXayA','log','email','5rBfECg','post','French','Arabic\x20(ae)','Email\x20','mobile','Chinese','German','errors','flash','exports','Enabled','position','redirect','staff\x20data\x20update\x20successfully','hash','express','findOne','Raw\x20Materials','Finished\x20Goods','get','../models/all_models','staff','warehouse_category','password','2267292AwbZAe','params','findById','Portuguese\x20(BR)','warehouse','language','master','English\x20(US)','Portuguese','English','find','1332YQZYZE','1939556vElHhn','aggregate','render','$name','18CAjKmz','../public/language/languages.json','\x20is\x20add\x20successfully','11pSuGud','firstname','586vGjcus','1449693FoMpAB','Hindi','success','Arabic','Spanish','158207kDRtxL','body','Router','json','\x20is\x20alredy\x20added.\x20please\x20choose\x20another','/view/:id','1424440tboPhp','/staff/view'];a0_0x5ee5=function(){return _0x15b718;};return a0_0x5ee5();}function a0_0x3bbd(_0x1367dc,_0x3d1d89){const _0x5ee5bf=a0_0x5ee5();return a0_0x3bbd=function(_0x3bbd06,_0x2baca1){_0x3bbd06=_0x3bbd06-0xaf;let _0x514f2b=_0x5ee5bf[_0x3bbd06];return _0x514f2b;},a0_0x3bbd(_0x1367dc,_0x3d1d89);}router[a0_0x1ecf79(0xdd)](a0_0x1ecf79(0xc2),auth,async(_0x86c50f,_0x4b6bd2)=>{const _0x15a44f=a0_0x1ecf79;try{const {username:_0x580406,email:_0x4a5a2e,role:_0x4b3515}=_0x86c50f['user'],_0x2a37e2=_0x86c50f['user'],_0x31dfaa=await profile[_0x15a44f(0xda)]({'email':_0x2a37e2[_0x15a44f(0xc8)]}),_0x4736cc=await master_shop['find']();console['log'](_0x15a44f(0xe8),_0x4736cc),warehouse_data=await warehouse[_0x15a44f(0xef)]([{'$match':{'status':_0x15a44f(0xd4)}},{'$group':{'_id':_0x15a44f(0xf1),'name':{'$first':_0x15a44f(0xf1)}}}]);const _0x581d14=await staff['find']();console['log'](_0x581d14);if(_0x4736cc[0x0][_0x15a44f(0xe7)]==_0x15a44f(0xe9)){var _0x396034=users[_0x15a44f(0xeb)];console['log'](_0x396034);}else{if(_0x4736cc[0x0][_0x15a44f(0xe7)]=='Hindi')var _0x396034=users['Hindi'];else{if(_0x4736cc[0x0][_0x15a44f(0xe7)]==_0x15a44f(0xd0))var _0x396034=users[_0x15a44f(0xd0)];else{if(_0x4736cc[0x0][_0x15a44f(0xe7)]==_0x15a44f(0xb9))var _0x396034=users[_0x15a44f(0xb9)];else{if(_0x4736cc[0x0][_0x15a44f(0xe7)]==_0x15a44f(0xcb))var _0x396034=users[_0x15a44f(0xcb)];else{if(_0x4736cc[0x0][_0x15a44f(0xe7)]==_0x15a44f(0xe5))var _0x396034=users['Portuguese'];else{if(_0x4736cc[0x0]['language']==_0x15a44f(0xcf))var _0x396034=users['Chinese'];else{if(_0x4736cc[0x0]['language']=='Arabic\x20(ae)')var _0x396034=users[_0x15a44f(0xb8)];}}}}}}}let _0x3c5957=[_0x15a44f(0xdb),_0x15a44f(0xdc)];_0x4b6bd2[_0x15a44f(0xf0)](_0x15a44f(0xdf),{'success':_0x86c50f[_0x15a44f(0xd2)](_0x15a44f(0xb7)),'errors':_0x86c50f['flash']('errors'),'role':_0x2a37e2,'profile':_0x31dfaa,'master_shop':_0x4736cc,'user':_0x581d14,'language':_0x396034,'warehouse':warehouse_data,'warehouse_cat':_0x3c5957});}catch(_0x33802c){console[_0x15a44f(0xc7)](_0x33802c);}}),router[a0_0x1ecf79(0xca)](a0_0x1ecf79(0xc2),auth,async(_0x2ce856,_0x215e44)=>{const _0x4af0e3=a0_0x1ecf79;try{const {name:_0x46f66a,email:_0x44964d,mobile:_0x59e0b4,password:_0x59e85e,status:_0x30d40e,warehouse:_0x2da342,position:_0x556042,warehouse_cat:_0x3eec1b}=_0x2ce856[_0x4af0e3(0xbb)],_0x48c422=await bcrypt[_0x4af0e3(0xd8)](_0x59e85e,0xa),_0x2b33b1=new staff({'name':_0x46f66a,'email':_0x44964d,'mobile':_0x59e0b4,'status':_0x30d40e,'warehouse':_0x2da342,'position':_0x556042,'warehouse_category':_0x3eec1b}),_0x557944=await staff['findOne']({'email':_0x44964d});console[_0x4af0e3(0xc7)](_0x557944);if(_0x557944)return _0x2ce856['flash']('errors',_0x4af0e3(0xcd)+_0x44964d+_0x4af0e3(0xbe)),_0x215e44['redirect']('back'),![];const _0x57bc28=await _0x2b33b1[_0x4af0e3(0xc5)](),_0x5beca5=new sing_up({'name':_0x46f66a,'email':_0x44964d,'password':_0x48c422,'role':_0x4af0e3(0xdf)}),_0x249240=await _0x5beca5['save'](),_0x4a97dc=new profile({'firstname':_0x46f66a,'email':_0x44964d}),_0x2c188e=await _0x4a97dc[_0x4af0e3(0xc5)]();_0x2ce856['flash'](_0x4af0e3(0xb7),_0x46f66a+_0x4af0e3(0xb1)),_0x215e44[_0x4af0e3(0xd6)](_0x4af0e3(0xc1));}catch(_0x22f397){console[_0x4af0e3(0xc7)](_0x22f397);}}),router[a0_0x1ecf79(0xdd)]('/view/:id',auth,async(_0x2a5a02,_0x9d753e)=>{const _0x35852=a0_0x1ecf79;try{const _0x5540ec=_0x2a5a02['params']['id'],_0x49fe5b=await master_shop[_0x35852(0xec)](),_0x518091=await staff[_0x35852(0xe4)](_0x5540ec);if(_0x49fe5b[0x0][_0x35852(0xe7)]=='English\x20(US)'){var _0x5a57a8=users[_0x35852(0xeb)];console['log'](_0x5a57a8);}else{if(_0x49fe5b[0x0]['language']==_0x35852(0xb6))var _0x5a57a8=users['Hindi'];else{if(_0x49fe5b[0x0][_0x35852(0xe7)]==_0x35852(0xd0))var _0x5a57a8=users[_0x35852(0xd0)];else{if(_0x49fe5b[0x0][_0x35852(0xe7)]=='Spanish')var _0x5a57a8=users[_0x35852(0xb9)];else{if(_0x49fe5b[0x0][_0x35852(0xe7)]==_0x35852(0xcb))var _0x5a57a8=users[_0x35852(0xcb)];else{if(_0x49fe5b[0x0][_0x35852(0xe7)]==_0x35852(0xe5))var _0x5a57a8=users[_0x35852(0xea)];else{if(_0x49fe5b[0x0][_0x35852(0xe7)]==_0x35852(0xcf))var _0x5a57a8=users[_0x35852(0xcf)];else{if(_0x49fe5b[0x0]['language']==_0x35852(0xcc))var _0x5a57a8=users[_0x35852(0xb8)];}}}}}}}let _0x1bc4a0=['Raw\x20Materials',_0x35852(0xdc)];_0x9d753e['render'](_0x35852(0xdf),{'success':_0x2a5a02['flash']('success'),'errors':_0x2a5a02[_0x35852(0xd2)](_0x35852(0xd1)),'master_shop':_0x49fe5b,'user':_0x518091,'language':_0x5a57a8,'warehouse_cat':_0x1bc4a0});}catch(_0xccce3f){console['log'](_0xccce3f);}}),router[a0_0x1ecf79(0xca)](a0_0x1ecf79(0xbf),auth,async(_0x3493fd,_0x27210e)=>{const _0x26a516=a0_0x1ecf79;try{const _0x58743c=_0x3493fd[_0x26a516(0xe3)]['id'],_0x181744=await staff[_0x26a516(0xe4)](_0x58743c),{name:_0x37c0b1,email:_0xdecb1a,mobile:_0x5c1479,password:_0x4887b0,status:_0x3d3dd5,warehouse:_0x1be056,position:_0x2dbaea,warehouse_cat:_0x29f6ea}=_0x3493fd[_0x26a516(0xbb)];_0x181744['name']=_0x37c0b1,_0x181744['email']=_0xdecb1a,_0x181744[_0x26a516(0xce)]=_0x5c1479,_0x181744[_0x26a516(0xe1)]=_0x4887b0,_0x181744[_0x26a516(0xc3)]=_0x3d3dd5,_0x181744[_0x26a516(0xe6)]=_0x1be056,_0x181744[_0x26a516(0xd5)]=_0x2dbaea,_0x181744[_0x26a516(0xe0)]=_0x29f6ea;const _0x37b056=await _0x181744[_0x26a516(0xc5)](),_0x3e8dc0=await profile[_0x26a516(0xda)]({'email':_0xdecb1a});_0x3e8dc0[_0x26a516(0xb3)]=_0x37c0b1,_0x3e8dc0[_0x26a516(0xc8)]=_0xdecb1a,await _0x3e8dc0[_0x26a516(0xc5)](),_0x3493fd[_0x26a516(0xd2)](_0x26a516(0xb7),_0x26a516(0xd7)),_0x27210e['redirect'](_0x26a516(0xc1));}catch(_0x46d9a8){console[_0x26a516(0xc7)](_0x46d9a8),_0x27210e['status'](0xc8)[_0x26a516(0xbd)](_0x46d9a8);}}),module[a0_0x1ecf79(0xd3)]=router;