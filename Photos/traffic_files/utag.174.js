//tealium universal tag - utag.174 ut4.0.201909180812, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'www.here.com':'7ff43c620d6e04b95af8505c4f502a06'},{'360.here.com':'49820bbeae0b888621f04773275cc4bf'},{'acsitefactory.com':'7ff43c620d6e04b95af8505c4f502a06'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['insight_site_id']=c[e][f];m=true};};if(m)break};if(!m)b['insight_site_id']='';}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
function initInsights(){if(!window._contently){var _contently={siteId:b['insight_site_id']}
_contently.insights=new ContentlyInsights({site_id:_contently.siteId});window._contently=_contently
console.log('Selected side_id : '+b['insight_site_id']);}}
var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('async','async');s.setAttribute('src','//assets.contently.com/insights/insights.js')
s.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){initInsights();}};s.onload=initInsights;document.body.appendChild(s);}};utag.o[loader].loader.LOAD(id);})("174","here.herecomcorporate");}catch(error){utag.DB(error);}