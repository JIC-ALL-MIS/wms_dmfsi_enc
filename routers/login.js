function a0_0x5cbf(){const _0x31b761=['2073724lMqHhU','/staff/:id','jsonwebtoken','7kXxwQb','params','4248639agKWin','express','315ijxbtv','32311410JfKzld','get','username','warehouse_category','status','/login','render','1568136VBbjex','body','clearCookie','redirect','log','post','findOne','password','validate','env','name','secret_key','find','success','email','login\x20master','sign','flash','jwt','compare','bcryptjs','login\x20successfully','10WLGuTQ','your\x20email\x20is\x20not\x20register','Router','staff','233848QjsuwH','134910rZOlmy','13145022wGTkcR','login','exports','cookie','role','your\x20password\x20is\x20wrong','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','Disabled','../models/all_models','errors','../middleware/auth'];a0_0x5cbf=function(){return _0x31b761;};return a0_0x5cbf();}function a0_0x1016(_0x3008a3,_0x173040){const _0x5cbf17=a0_0x5cbf();return a0_0x1016=function(_0x101690,_0x2cb1e5){_0x101690=_0x101690-0xeb;let _0x13121d=_0x5cbf17[_0x101690];return _0x13121d;},a0_0x1016(_0x3008a3,_0x173040);}const a0_0x472a95=a0_0x1016;(function(_0x5a8366,_0x49e220){const _0x2de92d=a0_0x1016,_0x402683=_0x5a8366();while(!![]){try{const _0x18e578=-parseInt(_0x2de92d(0x112))/0x1*(-parseInt(_0x2de92d(0x10e))/0x2)+-parseInt(_0x2de92d(0xee))/0x3+parseInt(_0x2de92d(0x11f))/0x4+parseInt(_0x2de92d(0xf0))/0x5*(-parseInt(_0x2de92d(0x113))/0x6)+parseInt(_0x2de92d(0xec))/0x7*(parseInt(_0x2de92d(0xf8))/0x8)+-parseInt(_0x2de92d(0x114))/0x9+parseInt(_0x2de92d(0xf1))/0xa;if(_0x18e578===_0x49e220)break;else _0x402683['push'](_0x402683['shift']());}catch(_0xb72834){_0x402683['push'](_0x402683['shift']());}}}(a0_0x5cbf,0xc88ff));const express=require(a0_0x472a95(0xef)),app=express(),router=express[a0_0x472a95(0x110)](),{sing_up,staff,profile,master_shop}=require(a0_0x472a95(0x11c)),bcrypt=require(a0_0x472a95(0x10c)),jwt=require(a0_0x472a95(0xeb)),auth=require(a0_0x472a95(0x11e));router[a0_0x472a95(0xf2)]('/',async(_0x331e32,_0x81c8c0)=>{const _0xfef5f0=a0_0x472a95;try{const _0x438a42=await master_shop[_0xfef5f0(0x104)]();_0x81c8c0[_0xfef5f0(0xf7)](_0xfef5f0(0x115),{'success':_0x331e32[_0xfef5f0(0x109)](_0xfef5f0(0x105)),'errors':_0x331e32[_0xfef5f0(0x109)](_0xfef5f0(0x11d)),'master_shop':_0x438a42});}catch(_0x72a66e){console[_0xfef5f0(0xfc)](_0x72a66e);}}),router[a0_0x472a95(0xf2)]('/validate',async(_0xdb17e9,_0x430d88)=>{const _0x33ad55=a0_0x472a95;try{const _0xa12dbc=await master_shop['find']();_0x430d88['render'](_0x33ad55(0x100),{'success':_0xdb17e9[_0x33ad55(0x109)](_0x33ad55(0x105)),'errors':_0xdb17e9[_0x33ad55(0x109)]('errors'),'master_shop':_0xa12dbc});}catch(_0x5f4d73){console[_0x33ad55(0xfc)](_0x5f4d73);}}),router[a0_0x472a95(0xf2)](a0_0x472a95(0xf6),async(_0x407cbd,_0x183a8b)=>{const _0x35887e=a0_0x472a95;try{const _0x34fe84=await master_shop[_0x35887e(0x104)]();console['log'](_0x35887e(0x107),_0x34fe84),_0x183a8b['render'](_0x35887e(0x115),{'success':_0x407cbd['flash'](_0x35887e(0x105)),'errors':_0x407cbd['flash']('errors'),'master_shop':_0x34fe84});}catch(_0xb5a9b){console[_0x35887e(0xfc)](_0xb5a9b);}}),router[a0_0x472a95(0xfd)](a0_0x472a95(0xf6),async(_0x325ced,_0x593b01)=>{const _0x53baa4=a0_0x472a95;try{const _0x4a111c=_0x325ced[_0x53baa4(0xf9)][_0x53baa4(0x106)],_0x26fc81=await sing_up[_0x53baa4(0xfe)]({'email':_0x4a111c});if(!_0x26fc81)return _0x325ced[_0x53baa4(0x109)](_0x53baa4(0x11d),_0x53baa4(0x10f)),_0x593b01['redirect']('/login');var _0x578376=staff_data[_0x53baa4(0xf4)];if(_0x26fc81[_0x53baa4(0x118)]=='staff'){const _0x5d3be9=await staff[_0x53baa4(0xfe)]({'name':_0x26fc81[_0x53baa4(0x102)]});if(_0x5d3be9[_0x53baa4(0xf5)]==_0x53baa4(0x11b))return _0x325ced[_0x53baa4(0x109)](_0x53baa4(0x11d),_0x53baa4(0x11a)),_0x593b01[_0x53baa4(0xfb)]('/login');_0x578376=_0x5d3be9[_0x53baa4(0xf4)];}const _0x54e834=_0x325ced[_0x53baa4(0xf9)][_0x53baa4(0xff)],_0x47dda2=await bcrypt[_0x53baa4(0x10b)](_0x54e834,_0x26fc81[_0x53baa4(0xff)]);if(_0x47dda2==![])return _0x325ced['flash'](_0x53baa4(0x11d),_0x53baa4(0x119)),_0x593b01[_0x53baa4(0xfb)](_0x53baa4(0xf6));const _0x386f8c=jwt[_0x53baa4(0x108)]({'username':_0x26fc81[_0x53baa4(0xf3)],'email':_0x26fc81[_0x53baa4(0x106)],'role':_0x26fc81[_0x53baa4(0x118)],'warehouse_category':_0x578376},process[_0x53baa4(0x101)][_0x53baa4(0x103)]);_0x593b01[_0x53baa4(0x117)](_0x53baa4(0x10a),_0x386f8c,{'expires':new Date(0xe677d213a700)}),_0x325ced[_0x53baa4(0x109)](_0x53baa4(0x105),_0x53baa4(0x10d)),_0x593b01['redirect']('/index');}catch(_0x13a1f5){console['log'](_0x13a1f5);}}),router[a0_0x472a95(0xf2)](a0_0x472a95(0x120),async(_0x1f4ccf,_0x13d677)=>{const _0x53eec8=a0_0x472a95;try{const _0x536b12=_0x1f4ccf[_0x53eec8(0xed)]['id'],_0x17b09c=await staff['findById']({'_id':_0x536b12});_0x17b09c['status']==_0x53eec8(0x11b)&&(_0x1f4ccf[_0x53eec8(0x109)]('errors',_0x53eec8(0x11a)),_0x13d677[_0x53eec8(0xfb)]('/staff/view'));const _0x172c1d=await sing_up[_0x53eec8(0xfe)]({'email':_0x17b09c[_0x53eec8(0x106)]});var _0x35f3d3=_0x17b09c[_0x53eec8(0xf4)];if(_0x172c1d[_0x53eec8(0x118)]==_0x53eec8(0x111)){const _0xe5ea87=await staff[_0x53eec8(0xfe)]({'name':_0x172c1d['name']});_0x35f3d3=_0xe5ea87[_0x53eec8(0xf4)];}const _0x31429a=jwt[_0x53eec8(0x108)]({'username':_0x172c1d['username'],'email':_0x172c1d[_0x53eec8(0x106)],'role':_0x172c1d[_0x53eec8(0x118)],'warehouse_category':_0x35f3d3},process[_0x53eec8(0x101)]['secret_key']);_0x13d677[_0x53eec8(0x117)]('jwt',_0x31429a,{'expires':new Date(0xe677d213a700)}),_0x1f4ccf[_0x53eec8(0x109)]('success',_0x53eec8(0x10d)),_0x13d677[_0x53eec8(0xfb)]('/index');}catch(_0x243e48){console['log'](_0x243e48);}}),router['get']('/logout',(_0x3f1125,_0x47ba47)=>{const _0x1766b6=a0_0x472a95;_0x47ba47[_0x1766b6(0xfa)](_0x1766b6(0x10a)),_0x47ba47['redirect']('/login');}),module[a0_0x472a95(0x116)]=router;