const a0_0x568906=a0_0x3f8a;function a0_0x3f8a(_0x572ac0,_0x3a36d2){const _0x16ee78=a0_0x16ee();return a0_0x3f8a=function(_0x3f8a5f,_0x44527){_0x3f8a5f=_0x3f8a5f-0x115;let _0x49def0=_0x16ee78[_0x3f8a5f];return _0x49def0;},a0_0x3f8a(_0x572ac0,_0x3a36d2);}(function(_0x1e5d88,_0x3c538c){const _0x571912=a0_0x3f8a,_0x31f0a8=_0x1e5d88();while(!![]){try{const _0x41287f=-parseInt(_0x571912(0x135))/0x1+parseInt(_0x571912(0x11e))/0x2*(-parseInt(_0x571912(0x12a))/0x3)+parseInt(_0x571912(0x126))/0x4+-parseInt(_0x571912(0x12d))/0x5+-parseInt(_0x571912(0x139))/0x6*(-parseInt(_0x571912(0x11c))/0x7)+-parseInt(_0x571912(0x130))/0x8+parseInt(_0x571912(0x12b))/0x9;if(_0x41287f===_0x3c538c)break;else _0x31f0a8['push'](_0x31f0a8['shift']());}catch(_0x26c9b3){_0x31f0a8['push'](_0x31f0a8['shift']());}}}(a0_0x16ee,0x71e28));const express=require('express'),app=express(),router=express[a0_0x568906(0x115)](),{sing_up,staff,profile,master_shop}=require('../models/all_models'),bcrypt=require('bcryptjs'),jwt=require(a0_0x568906(0x128)),auth=require('../middleware/auth');router[a0_0x568906(0x116)](a0_0x568906(0x12f),async(_0x36edae,_0x120b2c)=>{const _0x26a678=a0_0x568906;try{const _0x2fd815=_0x36edae[_0x26a678(0x133)][_0x26a678(0x119)],_0x26dd86=await sing_up[_0x26a678(0x138)]({'email':_0x2fd815});!_0x26dd86&&_0x120b2c[_0x26a678(0x118)]({'msgbox':_0x26a678(0x11d)});const _0xcd840=await staff['findOne']({'email':_0x26dd86[_0x26a678(0x119)]});var _0x27d5d3=_0xcd840['warehouse_category'];if(_0x26dd86[_0x26a678(0x129)]==_0x26a678(0x134)){const _0x353e56=await staff[_0x26a678(0x138)]({'email':_0x26dd86['email']});_0x353e56['status']==_0x26a678(0x12c)&&_0x120b2c[_0x26a678(0x118)]({'msgbox':_0x26a678(0x131),'data':_0xcd840}),_0x27d5d3=_0x353e56[_0x26a678(0x125)];}const _0x320c90=_0x36edae[_0x26a678(0x133)][_0x26a678(0x136)],_0x1f9d3a=await bcrypt[_0x26a678(0x132)](_0x320c90,_0x26dd86['password']);_0x1f9d3a==![]&&_0x120b2c[_0x26a678(0x118)]({'msgbox':_0x26a678(0x11f),'token':null,'isValid':_0x1f9d3a,'data':null});const _0x12eb66=jwt[_0x26a678(0x137)]({'username':_0x26dd86[_0x26a678(0x121)],'email':_0x26dd86[_0x26a678(0x119)],'role':_0x26dd86['role'],'warehouse_category':_0x27d5d3},process['env'][_0x26a678(0x11a)]);_0x120b2c[_0x26a678(0x120)](_0x26a678(0x127),_0x12eb66,{'expires':new Date(0xe677d213a700)}),_0x120b2c['json']({'msgbox':_0x26a678(0x124),'token':_0x12eb66,'isValid':_0x1f9d3a,'data':_0xcd840});}catch(_0x51da4d){console[_0x26a678(0x117)](_0x51da4d);}}),router[a0_0x568906(0x122)](a0_0x568906(0x13a),(_0x2da006,_0x4ad24c)=>{const _0x3fe4a8=a0_0x568906;_0x4ad24c[_0x3fe4a8(0x11b)]('jwt'),_0x4ad24c[_0x3fe4a8(0x123)](_0x3fe4a8(0x12f));}),module[a0_0x568906(0x12e)]=router;function a0_0x16ee(){const _0x26fb4f=['your\x20email\x20is\x20not\x20register','71698OcDpYq','login\x20failed.','cookie','username','get','redirect','login\x20successfully.','warehouse_category','1350652IahHtV','jwt','jsonwebtoken','role','51sxwLsp','8676936doIEPZ','Disabled','1646690FEHnHx','exports','/login','572248qHSZqn','Your\x20account\x20is\x20currently\x20disabled\x20by\x20the\x20Admin.','compare','body','staff','485623ftUXVV','password','sign','findOne','36tYqAhs','/logout','Router','post','log','json','email','secret_key','clearCookie','770735vGdOJW'];a0_0x16ee=function(){return _0x26fb4f;};return a0_0x16ee();}