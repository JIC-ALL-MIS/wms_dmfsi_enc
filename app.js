const a0_0x51bb11=a0_0x5910;(function(_0x17eff0,_0x175647){const _0x52a267=a0_0x5910,_0x523d8a=_0x17eff0();while(!![]){try{const _0x127f94=parseInt(_0x52a267(0x171))/0x1+-parseInt(_0x52a267(0x18b))/0x2*(-parseInt(_0x52a267(0x198))/0x3)+parseInt(_0x52a267(0x188))/0x4*(-parseInt(_0x52a267(0x197))/0x5)+-parseInt(_0x52a267(0x14a))/0x6*(-parseInt(_0x52a267(0x182))/0x7)+-parseInt(_0x52a267(0x194))/0x8*(parseInt(_0x52a267(0x17e))/0x9)+parseInt(_0x52a267(0x189))/0xa*(-parseInt(_0x52a267(0x18d))/0xb)+parseInt(_0x52a267(0x167))/0xc;if(_0x127f94===_0x175647)break;else _0x523d8a['push'](_0x523d8a['shift']());}catch(_0x5b9ec7){_0x523d8a['push'](_0x523d8a['shift']());}}}(a0_0x279e,0xbf84f),require(a0_0x51bb11(0x150))[a0_0x51bb11(0x169)]());const express=require(a0_0x51bb11(0x166)),app=express(),bodyParser=require(a0_0x51bb11(0x163)),path=require(a0_0x51bb11(0x15e)),ejs=require('ejs'),port=process[a0_0x51bb11(0x19d)][a0_0x51bb11(0x1a0)]||0x1388,mongoose=require('mongoose'),flash=require(a0_0x51bb11(0x17f));var session=require(a0_0x51bb11(0x17b));const mongoDbsession=require(a0_0x51bb11(0x193))(session),cookieParser=require('cookie-parser');function a0_0x5910(_0x185ce6,_0x273197){const _0x279ef1=a0_0x279e();return a0_0x5910=function(_0x59105,_0x5c2ac7){_0x59105=_0x59105-0x141;let _0x4236e0=_0x279ef1[_0x59105];return _0x4236e0;},a0_0x5910(_0x185ce6,_0x273197);}let databaseString,sessionString,sessionCollection;if(process[a0_0x51bb11(0x19d)][a0_0x51bb11(0x19a)]=='production')databaseString=process[a0_0x51bb11(0x19d)]['DATABASE_STRING'],sessionString=process['env'][a0_0x51bb11(0x19e)],sessionCollection=process[a0_0x51bb11(0x19d)][a0_0x51bb11(0x145)];else process['env']['NODE_ENV']==a0_0x51bb11(0x177)&&(databaseString=process[a0_0x51bb11(0x19d)][a0_0x51bb11(0x148)],sessionString=process[a0_0x51bb11(0x19d)][a0_0x51bb11(0x180)],sessionCollection=process[a0_0x51bb11(0x19d)]['SESSION_COLLECTION_TEST']);mongoose[a0_0x51bb11(0x18c)](databaseString,{'useNewUrlParser':!![],'useUnifiedTopology':!![]})[a0_0x51bb11(0x15b)](()=>{const _0x126546=a0_0x51bb11;console[_0x126546(0x146)](_0x126546(0x155));})[a0_0x51bb11(0x183)](_0x36dcc9=>{const _0x4ac801=a0_0x51bb11;console[_0x4ac801(0x146)](_0x36dcc9);});const store=new mongoDbsession({'uri':sessionString,'collection':sessionCollection});function a0_0x279e(){const _0x498835=['DATABASE_STRING_TEST','/mobile_rw_inc','30YUkmpC','/supplier','./routers/warehousemap_outgoing','urlencoded','./routers/all_purchases','this\x20is\x20my\x20secretkey','dotenv','/transfer_finished','./routers/edit_approval','/sales_return_finished','listen','db\x20connected\x20!!!!!','/all_sales','./routers/all_sales_finsished','./routers/products','/warehousemap_Income','./routers/test/removeNegative','then','./routers/report','/staff','path','views','./mobile_routers/login','./routers/transfer_finished','/all_expenses','body-parser','server\x20running\x20on\x20port\x20','/transfer','express','20253924BMFCSy','./routers/adjustment_finished','config','./routers/pickinglist','set','./routers/purchase_return_finished','./routers/purchases_return','/edit_approval','/adjustment_finished','./routers/expenses','862796atSqqm','join','public','static','/master_shop','/report','dev','/payment_report','/stock_report','/all_sales_finished','express-session','./routers/index','./routers/sales_return','2583zeuWOs','connect-flash','SESSION_STRING_TEST','./routers/password_reset','1254386BmNNFo','catch','/all_purchases_finished','ejs','/sales_return','/purchases_return','5494344ZonHIc','10OINAHz','use','2uNVZWu','connect','1350349ToEnkk','/picking_list','/purchases_return_finished','./routers/sing_up','/adjustment','./routers/login','connect-mongodb-session','40712iHvGCI','/profile','/customer','5hgMqNZ','884214SKAQza','view\x20engine','NODE_ENV','/warehouse','/transaction_reports','env','SESSION_STRING','/TEST','PORT','./routers/all_purchases_finished','./routers/supplier','./routers/customer','./routers/master_settings','/forgotPassword','SESSION_COLLECTION','log','./routers/staff'];a0_0x279e=function(){return _0x498835;};return a0_0x279e();}app['use'](session({'secret':a0_0x51bb11(0x14f),'resave':![],'cookie':{'maxAge':0x3e8*0x3c},'saveUninitialized':!![],'store':store})),app[a0_0x51bb11(0x18a)](flash()),app['use'](bodyParser[a0_0x51bb11(0x14d)]({'extended':![]})),app[a0_0x51bb11(0x18a)](cookieParser()),app['use'](bodyParser['json']()),app[a0_0x51bb11(0x18a)](express['json']()),app['set'](a0_0x51bb11(0x199),a0_0x51bb11(0x185)),app[a0_0x51bb11(0x16b)](a0_0x51bb11(0x15f),path['join'](__dirname,a0_0x51bb11(0x15f))),app[a0_0x51bb11(0x18a)](express[a0_0x51bb11(0x174)](path[a0_0x51bb11(0x172)](__dirname,a0_0x51bb11(0x173))));const index_router=require(a0_0x51bb11(0x17c)),products_router=require(a0_0x51bb11(0x158)),warehouse_router=require('./routers/warehouse'),staff_router=require(a0_0x51bb11(0x147)),customer_router=require(a0_0x51bb11(0x142)),supplier_router=require(a0_0x51bb11(0x141)),all_purchases_router=require(a0_0x51bb11(0x14e)),purchases_return_router=require(a0_0x51bb11(0x16d)),all_sales_router=require('./routers/all_sales'),sales_return_router=require(a0_0x51bb11(0x17d)),adjustment_router=require('./routers/adjustment'),transfer_router=require('./routers/transfer'),all_expenses_router=require(a0_0x51bb11(0x170)),stock_report_router=require('./routers/stock_report'),payment_report=require('./routers/payment_report'),all_report=require(a0_0x51bb11(0x15c)),master_shop=require(a0_0x51bb11(0x143)),warehousemap_incoming=require('./routers/warehousemap_income'),warehousemap_outgoing=require(a0_0x51bb11(0x14c)),transaction_reports_finished=require('./routers/transaction_reports_finished'),profile_router=require('./routers/profile'),sing_up_router=require(a0_0x51bb11(0x190)),login_router=require(a0_0x51bb11(0x192)),all_purchases_router_finished=require(a0_0x51bb11(0x1a1)),all_sales_router_finished=require(a0_0x51bb11(0x157)),adjustment_router_finished=require(a0_0x51bb11(0x168)),transfer_router_finished=require(a0_0x51bb11(0x161)),purchases_return_finished=require(a0_0x51bb11(0x16c)),sales_return_finished=require('./routers/sales_return_finished'),pdfOutReport=require(a0_0x51bb11(0x16a)),edit_approver_router=require(a0_0x51bb11(0x152)),passwordChanger=require(a0_0x51bb11(0x181)),Tester=require(a0_0x51bb11(0x15a));app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x19f),Tester),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x144),passwordChanger),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x16e),edit_approver_router),app[a0_0x51bb11(0x18a)]('/',index_router),app['use']('/products',products_router),app['use'](a0_0x51bb11(0x19b),warehouse_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x15d),staff_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x196),customer_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x14b),supplier_router),app[a0_0x51bb11(0x18a)]('/all_purchases',all_purchases_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x187),purchases_return_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x156),all_sales_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x186),sales_return_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x191),adjustment_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x165),transfer_router),app['use'](a0_0x51bb11(0x162),all_expenses_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x179),stock_report_router),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x178),payment_report),app['use'](a0_0x51bb11(0x176),all_report),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x175),master_shop),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x159),warehousemap_incoming),app[a0_0x51bb11(0x18a)]('/warehousemap_Outcome',warehousemap_outgoing),app['use'](a0_0x51bb11(0x184),all_purchases_router_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x17a),all_sales_router_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x18f),purchases_return_finished),app['use'](a0_0x51bb11(0x153),sales_return_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x18e),pdfOutReport),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x16f),adjustment_router_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x151),transfer_router_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x19c),transaction_reports_finished),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x195),profile_router),app['use']('/',sing_up_router),app[a0_0x51bb11(0x18a)]('/',login_router);const mobile_login=require(a0_0x51bb11(0x160)),mobile_rw_inc=require('./mobile_routers/rw_inc');app[a0_0x51bb11(0x18a)]('/mobile_login',mobile_login),app[a0_0x51bb11(0x18a)](a0_0x51bb11(0x149),mobile_rw_inc),app[a0_0x51bb11(0x154)](port,()=>{const _0x4dfd2c=a0_0x51bb11;console[_0x4dfd2c(0x146)](_0x4dfd2c(0x164)+port);});