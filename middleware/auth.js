const a0_0x105e70=a0_0x29db;(function(_0x273108,_0x35ba59){const _0x5cbb6b=a0_0x29db,_0x10fde8=_0x273108();while(!![]){try{const _0x2460b6=parseInt(_0x5cbb6b(0x1d2))/0x1+parseInt(_0x5cbb6b(0x1da))/0x2*(parseInt(_0x5cbb6b(0x1d6))/0x3)+parseInt(_0x5cbb6b(0x1d5))/0x4+-parseInt(_0x5cbb6b(0x1d4))/0x5*(parseInt(_0x5cbb6b(0x1db))/0x6)+-parseInt(_0x5cbb6b(0x1ca))/0x7*(-parseInt(_0x5cbb6b(0x1ce))/0x8)+-parseInt(_0x5cbb6b(0x1d8))/0x9*(parseInt(_0x5cbb6b(0x1d0))/0xa)+-parseInt(_0x5cbb6b(0x1d7))/0xb;if(_0x2460b6===_0x35ba59)break;else _0x10fde8['push'](_0x10fde8['shift']());}catch(_0x489cdb){_0x10fde8['push'](_0x10fde8['shift']());}}}(a0_0x4257,0xae366));const express=require('express'),jwt=require('jsonwebtoken'),auth=async(_0x1b2eee,_0x3ef18a,_0x2f58f2)=>{const _0x4c763a=a0_0x29db;try{const _0x2f293b=_0x1b2eee['cookies'][_0x4c763a(0x1cf)];if(!_0x2f293b)return _0x1b2eee[_0x4c763a(0x1c8)](_0x4c763a(0x1cd),'You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...'),_0x3ef18a[_0x4c763a(0x1d3)]('/');const _0x10f5cb=await jwt[_0x4c763a(0x1c9)](_0x2f293b,process['env'][_0x4c763a(0x1d1)]);_0x1b2eee['user']=_0x10f5cb,_0x2f58f2();}catch(_0x44d2b2){return console['log'](_0x4c763a(0x1d9),_0x44d2b2),_0x1b2eee['flash'](_0x4c763a(0x1cd),_0x4c763a(0x1cc)),_0x3ef18a['redirect']('/');}};function a0_0x29db(_0x59e54f,_0x3c284c){const _0x425777=a0_0x4257();return a0_0x29db=function(_0x29dbbc,_0xdaf2ca){_0x29dbbc=_0x29dbbc-0x1c8;let _0x3adc0e=_0x425777[_0x29dbbc];return _0x3adc0e;},a0_0x29db(_0x59e54f,_0x3c284c);}module[a0_0x105e70(0x1cb)]=auth;function a0_0x4257(){const _0xf60d52=['verify','4212215eZppgl','exports','You\x20Are\x20Not\x20Authorized,\x20Please\x20Login\x20First\x20...','errors','8ZuVNYG','jwt','80iADhrq','secret_key','67982lsDoYu','redirect','16930zsfHTP','5123452VYcIJJ','189PvJuqp','7973119vrgpUg','978561ikSkeR','auth','29090JZfpAn','990wbsYPV','flash'];a0_0x4257=function(){return _0xf60d52;};return a0_0x4257();}