(function(g){var window=this;'use strict';var Qhb=function(a,b){g.V.call(this,{I:"button",Ka:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],Y:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},X:[{I:"svg",Y:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},X:[{I:"g",Y:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},X:[{I:"g",Y:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
X:[{I:"path",Y:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.G=a;this.Sa("click",this.onClick,this);this.updateValue("title",g.KS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ob(this,g.ES(b.Ec(),this.element))},Rhb=function(a){g.V.call(this,{I:"div",
S:"ytp-miniplayer-ui"});this.hg=!1;this.player=a;this.T(a,"minimized",this.Wh);this.T(a,"onStateChange",this.qP)},Shb=function(a){g.uT.call(this,a);
this.u=new g.lI(this);this.j=new Rhb(this.player);this.j.hide();g.sS(this.player,this.j.element,4);a.Rf()&&(this.load(),g.bq(a.getRootNode(),"ytp-player-minimized",!0))};
g.x(Qhb,g.V);Qhb.prototype.onClick=function(){this.G.Pa("onExpandMiniplayer")};g.x(Rhb,g.V);g.k=Rhb.prototype;
g.k.pM=function(){this.tooltip=new g.RV(this.player,this);g.J(this,this.tooltip);g.sS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Sc=new g.XT(this.player);g.J(this,this.Sc);this.Vj=new g.V({I:"div",S:"ytp-miniplayer-scrim"});g.J(this,this.Vj);this.Vj.Ha(this.element);this.T(this.Vj.element,"click",this.ZG);var a=new g.V({I:"button",Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.CQ()]});g.J(this,a);a.Ha(this.Vj.element);this.T(a.element,"click",this.gp);
a=new Qhb(this.player,this);g.J(this,a);a.Ha(this.Vj.element);this.Ku=new g.V({I:"div",S:"ytp-miniplayer-controls"});g.J(this,this.Ku);this.Ku.Ha(this.Vj.element);this.T(this.Ku.element,"click",this.ZG);var b=new g.V({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,b);b.Ha(this.Ku.element);a=new g.V({I:"div",S:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ha(this.Ku.element);var c=new g.V({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,c);c.Ha(this.Ku.element);this.TW=new g.cV(this.player,
this,!1);g.J(this,this.TW);this.TW.Ha(b.element);b=new g.bV(this.player,this);g.J(this,b);b.Ha(a.element);this.nextButton=new g.cV(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ha(c.element);this.sj=new g.KV(this.player,this);g.J(this,this.sj);this.sj.Ha(this.Vj.element);this.Lc=new g.hV(this.player,this);g.J(this,this.Lc);g.sS(this.player,this.Lc.element,4);this.MG=new g.V({I:"div",S:"ytp-miniplayer-buttons"});g.J(this,this.MG);g.sS(this.player,this.MG.element,4);a=new g.V({I:"button",
Ka:["ytp-miniplayer-close-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.CQ()]});g.J(this,a);a.Ha(this.MG.element);this.T(a.element,"click",this.gp);a=new g.V({I:"button",Ka:["ytp-miniplayer-replay-button","ytp-button"],Y:{"aria-label":"Close"},X:[g.tDa()]});g.J(this,a);a.Ha(this.MG.element);this.T(a.element,"click",this.Q6);this.T(this.player,"presentingplayerstatechange",this.Dd);this.T(this.player,"appresize",this.Gb);this.T(this.player,"fullscreentoggled",this.Gb);this.Gb()};
g.k.show=function(){this.sf=new g.Op(this.Hv,null,this);this.sf.start();this.hg||(this.pM(),this.hg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.sf&&(this.sf.dispose(),this.sf=void 0);g.V.prototype.hide.call(this);this.player.Rf()||(this.hg&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.sf&&(this.sf.dispose(),this.sf=void 0);g.V.prototype.ra.call(this)};
g.k.gp=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.Q6=function(){this.player.playVideo()};
g.k.ZG=function(a){if(a.target===this.Vj.element||a.target===this.Ku.element)g.xP(this.player.Ib())?this.player.pauseVideo():this.player.playVideo()};
g.k.Wh=function(){g.bq(this.player.getRootNode(),"ytp-player-minimized",this.player.Rf())};
g.k.Te=function(){this.Lc.zc();this.sj.zc()};
g.k.Hv=function(){this.Te();this.sf&&this.sf.start()};
g.k.Dd=function(a){g.BO(a.state,32)&&this.tooltip.hide()};
g.k.Gb=function(){g.tV(this.Lc,0,this.player.kb().getPlayerSize().width,!1);g.iV(this.Lc)};
g.k.qP=function(a){this.player.Rf()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Bg=function(){return!1};
g.k.ah=function(){return!1};
g.k.Yb=function(){return!1};
g.k.Vl=function(){return!1};
g.k.UH=function(){};
g.k.Rp=function(){};
g.k.oy=function(){};
g.k.Qm=function(){return null};
g.k.GF=function(){return null};
g.k.HL=function(){return new g.we(0,0)};
g.k.Bk=function(){return new g.Xm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Sv=function(a,b,c,d,e){var f=0,h=d=0,l=g.ln(a);if(b){c=g.Xp(b,"ytp-prev-button")||g.Xp(b,"ytp-next-button");var m=g.Xp(b,"ytp-play-button"),n=g.Xp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.jn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Xp(b,"ytp-miniplayer-button-top-left"),f=g.jn(b,this.element),b=g.ln(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.kb().getPlayerSize().width;e=f+(e||0);l=g.oe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.wp=function(){};
g.k.Ml=function(){return!1};
g.k.LD=function(){};
g.k.Nz=function(){};
g.k.Zq=function(){};
g.k.Yq=function(){};
g.k.QA=function(){};
g.k.hs=function(){};
g.k.vD=function(){};g.x(Shb,g.uT);g.k=Shb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.bq(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.uT.prototype.create.call(this);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Yk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.tT("miniplayer",Shb);})(_yt_player);
