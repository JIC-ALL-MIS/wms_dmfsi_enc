function a0_0x1e4f(_0x22c14d,_0x4a89cc){const _0x27b545=a0_0x27b5();return a0_0x1e4f=function(_0x1e4f09,_0x230b5b){_0x1e4f09=_0x1e4f09-0x1d1;let _0x2363a8=_0x27b545[_0x1e4f09];return _0x2363a8;},a0_0x1e4f(_0x22c14d,_0x4a89cc);}const a0_0x1f8ec5=a0_0x1e4f;(function(_0x2f86cc,_0x7e806e){const _0x1262f5=a0_0x1e4f,_0x38074c=_0x2f86cc();while(!![]){try{const _0x3a4850=parseInt(_0x1262f5(0x1f7))/0x1*(-parseInt(_0x1262f5(0x1ec))/0x2)+-parseInt(_0x1262f5(0x22c))/0x3*(parseInt(_0x1262f5(0x1ef))/0x4)+-parseInt(_0x1262f5(0x1e0))/0x5*(-parseInt(_0x1262f5(0x218))/0x6)+parseInt(_0x1262f5(0x1ed))/0x7*(-parseInt(_0x1262f5(0x1e1))/0x8)+parseInt(_0x1262f5(0x1e3))/0x9+parseInt(_0x1262f5(0x22d))/0xa*(parseInt(_0x1262f5(0x1f4))/0xb)+parseInt(_0x1262f5(0x223))/0xc*(parseInt(_0x1262f5(0x204))/0xd);if(_0x3a4850===_0x7e806e)break;else _0x38074c['push'](_0x38074c['shift']());}catch(_0x26bb30){_0x38074c['push'](_0x38074c['shift']());}}}(a0_0x27b5,0x4aa72),require(a0_0x1f8ec5(0x21d))['config']());const express=require(a0_0x1f8ec5(0x1da)),app=express(),bodyParser=require(a0_0x1f8ec5(0x200)),path=require('path'),ejs=require(a0_0x1f8ec5(0x1dd)),port=process['env'][a0_0x1f8ec5(0x20e)]||0x1388,mongoose=require(a0_0x1f8ec5(0x1d7)),flash=require(a0_0x1f8ec5(0x216));var session=require('express-session');const mongoDbsession=require(a0_0x1f8ec5(0x1de))(session),cookieParser=require(a0_0x1f8ec5(0x215));let databaseString,sessionString,sessionCollection;if(process[a0_0x1f8ec5(0x229)][a0_0x1f8ec5(0x1fe)]==a0_0x1f8ec5(0x225))databaseString=process[a0_0x1f8ec5(0x229)]['DATABASE_STRING'],sessionString=process['env'][a0_0x1f8ec5(0x1d4)],sessionCollection=process['env'][a0_0x1f8ec5(0x226)];else process[a0_0x1f8ec5(0x229)][a0_0x1f8ec5(0x1fe)]=='test'&&(databaseString=process[a0_0x1f8ec5(0x229)][a0_0x1f8ec5(0x205)],sessionString=process[a0_0x1f8ec5(0x229)][a0_0x1f8ec5(0x1d6)],sessionCollection=process[a0_0x1f8ec5(0x229)][a0_0x1f8ec5(0x1db)]);mongoose[a0_0x1f8ec5(0x1fd)](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0x1f8ec5(0x1ee)](()=>{const _0x1d7736=a0_0x1f8ec5;console['log'](_0x1d7736(0x1dc));})[a0_0x1f8ec5(0x228)](_0x4caae0=>{const _0x79b127=a0_0x1f8ec5;console[_0x79b127(0x1eb)](_0x4caae0);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});function a0_0x27b5(){const _0x3dd364=['SESSION_STRING_TEST','mongoose','use','/all_sales_finished','express','SESSION_COLLECTION_TEST','db\x20connected\x20!!!!!','ejs','connect-mongodb-session','./routers/report','15pbigRD','424VMeBGr','/warehousemap_Income','2794455qYEqgY','public','./routers/all_sales','/warehousemap_Outcome','./routers/warehousemap_outgoing','/payment_report','/stock_report','/all_purchases','log','62dWzcix','74536xnkLPu','then','143392SKiRUC','urlencoded','./routers/profile','./routers/all_purchases_finished','./routers/sing_up','11kNSWbx','./routers/supplier','this\x20is\x20my\x20secretkey','7204FRGuIk','/picking_list','/all_expenses','view\x20engine','./routers/adjustment','static','connect','NODE_ENV','/transfer','body-parser','/purchases_return_finished','./routers/stock_report','./routers/purchase_return_finished','62179vskykL','DATABASE_STRING_TEST','views','/purchases_return','./routers/purchases_return','./routers/customer','/transfer_finished','./routers/all_purchases','./routers/password_reset','./routers/payment_report','PORT','/staff','./routers/edit_approval','/all_purchases_finished','./routers/adjustment_finished','/adjustment','./routers/pickinglist','cookie-parser','connect-flash','./routers/transfer','501234UGHVKb','json','./routers/transfer_finished','/supplier','./routers/warehousemap_income','dotenv','listen','/warehouse','/sales_return_finished','./routers/sales_return','./routers/staff','1884NOWUpp','/customer','production','SESSION_COLLECTION','/forgotPassword','catch','env','/report','/products','27CBdJmk','1040350gYPNOs','set','./routers/all_sales_finsished','./routers/sales_return_finished','SESSION_STRING','/adjustment_finished'];a0_0x27b5=function(){return _0x3dd364;};return a0_0x27b5();}app[a0_0x1f8ec5(0x1d8)](session({'secret':a0_0x1f8ec5(0x1f6),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0x1f8ec5(0x1d8)](flash()),app[a0_0x1f8ec5(0x1d8)](bodyParser[a0_0x1f8ec5(0x1f0)]({'extended':![]})),app[a0_0x1f8ec5(0x1d8)](cookieParser()),app[a0_0x1f8ec5(0x1d8)](bodyParser[a0_0x1f8ec5(0x219)]()),app[a0_0x1f8ec5(0x1d8)](express[a0_0x1f8ec5(0x219)]()),app['set'](a0_0x1f8ec5(0x1fa),a0_0x1f8ec5(0x1dd)),app[a0_0x1f8ec5(0x1d1)](a0_0x1f8ec5(0x206),path['join'](__dirname,'views')),app[a0_0x1f8ec5(0x1d8)](express[a0_0x1f8ec5(0x1fc)](path['join'](__dirname,a0_0x1f8ec5(0x1e4))));const index_router=require('./routers/index'),products_router=require('./routers/products'),warehouse_router=require('./routers/warehouse'),staff_router=require(a0_0x1f8ec5(0x222)),customer_router=require(a0_0x1f8ec5(0x209)),supplier_router=require(a0_0x1f8ec5(0x1f5)),all_purchases_router=require(a0_0x1f8ec5(0x20b)),purchases_return_router=require(a0_0x1f8ec5(0x208)),all_sales_router=require(a0_0x1f8ec5(0x1e5)),sales_return_router=require(a0_0x1f8ec5(0x221)),adjustment_router=require(a0_0x1f8ec5(0x1fb)),transfer_router=require(a0_0x1f8ec5(0x217)),all_expenses_router=require('./routers/expenses'),stock_report_router=require(a0_0x1f8ec5(0x202)),payment_report=require(a0_0x1f8ec5(0x20d)),all_report=require(a0_0x1f8ec5(0x1df)),master_shop=require('./routers/master_settings'),warehousemap_incoming=require(a0_0x1f8ec5(0x21c)),warehousemap_outgoing=require(a0_0x1f8ec5(0x1e7)),profile_router=require(a0_0x1f8ec5(0x1f1)),sing_up_router=require(a0_0x1f8ec5(0x1f3)),login_router=require('./routers/login'),all_purchases_router_finished=require(a0_0x1f8ec5(0x1f2)),all_sales_router_finished=require(a0_0x1f8ec5(0x1d2)),adjustment_router_finished=require(a0_0x1f8ec5(0x212)),transfer_router_finished=require(a0_0x1f8ec5(0x21a)),purchases_return_finished=require(a0_0x1f8ec5(0x203)),sales_return_finished=require(a0_0x1f8ec5(0x1d3)),pdfOutReport=require(a0_0x1f8ec5(0x214)),edit_approver_router=require(a0_0x1f8ec5(0x210)),passwordChanger=require(a0_0x1f8ec5(0x20c));app['use'](a0_0x1f8ec5(0x227),passwordChanger),app['use']('/edit_approval',edit_approver_router),app[a0_0x1f8ec5(0x1d8)]('/',index_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x22b),products_router),app['use'](a0_0x1f8ec5(0x21f),warehouse_router),app['use'](a0_0x1f8ec5(0x20f),staff_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x224),customer_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x21b),supplier_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1ea),all_purchases_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x207),purchases_return_router),app[a0_0x1f8ec5(0x1d8)]('/all_sales',all_sales_router),app[a0_0x1f8ec5(0x1d8)]('/sales_return',sales_return_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x213),adjustment_router),app['use'](a0_0x1f8ec5(0x1ff),transfer_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1f9),all_expenses_router),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1e9),stock_report_router),app['use'](a0_0x1f8ec5(0x1e8),payment_report),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x22a),all_report),app['use']('/master_shop',master_shop),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1e2),warehousemap_incoming),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1e6),warehousemap_outgoing),app['use'](a0_0x1f8ec5(0x211),all_purchases_router_finished),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x1d9),all_sales_router_finished),app['use'](a0_0x1f8ec5(0x201),purchases_return_finished),app['use'](a0_0x1f8ec5(0x220),sales_return_finished),app['use'](a0_0x1f8ec5(0x1f8),pdfOutReport),app['use'](a0_0x1f8ec5(0x1d5),adjustment_router_finished),app[a0_0x1f8ec5(0x1d8)](a0_0x1f8ec5(0x20a),transfer_router_finished),app[a0_0x1f8ec5(0x1d8)]('/profile',profile_router),app[a0_0x1f8ec5(0x1d8)]('/',sing_up_router),app[a0_0x1f8ec5(0x1d8)]('/',login_router),app[a0_0x1f8ec5(0x21e)](port,()=>{const _0x134ec0=a0_0x1f8ec5;console[_0x134ec0(0x1eb)]('server\x20running\x20on\x20port\x20'+port);});