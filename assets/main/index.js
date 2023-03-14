System.register("chunks:///_virtual/Bullet.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BulletManager.ts","./Sun.ts"],(function(t){"use strict";var e,n,o,i,r,s,a,l,u,c,h,p,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Collider,l=t.RigidBody,u=t.Vec3,c=t.director,h=t.Component},function(t){p=t.BulletManager},function(t){d=t.Sun}],execute:function(){var g,f,y,m,M;r._RF.push({},"c6fd1fg3OBKWZQIKuRrrv8j","Bullet",void 0);var b=s.ccclass,v=s.property;t("Bullet",b("Bullet")((y=e((f=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,o(e,"mass",y,i(e)),o(e,"sunM",m,i(e)),o(e,"G",M,i(e)),e}n(e,t);var r=e.prototype;return r.start=function(){this.node.getComponent(a).on("onCollisionEnter",this.onCollisionEnter,this)},r.update=function(t){for(var e=this.node.getPosition(),n=this.node.getComponent(l),o=new u(0,0,0),i=this.node.getParent().getComponent(p).getHavenlyBody().children,r=0;r<i.length;r++){var s=i[r],a=this.getForceByNode(e,s);o=o.add(a)}n.applyForce(o)},r.onCollisionEnter=function(t){null!==t.otherCollider.node.getComponent(d)?this.node.destroy():"target"===t.otherCollider.node.name&&(c.getScene().emit("shoot_success"),this.node.destroy())},r.getForce=function(t,e){var n=t.x-e.x,o=t.y-e.y,i=t.z-e.z,r=Math.pow(n,2)+Math.pow(o,2)+Math.pow(i,2),s=(n>0?-1:1)*Math.abs(n)*this.G*this.sunM*this.mass/r,a=(o>0?-1:1)*Math.abs(o)*this.G*this.sunM*this.mass/r,l=(i>0?-1:1)*Math.abs(i)*this.G*this.sunM*this.mass/r;return new u(s,a,l)},r.getForceByNode=function(t,e){var n=e.getPosition(),o=e.getComponent(d).M,i=t.x-n.x,r=t.y-n.y,s=t.z-n.z,a=Math.pow(i,2)+Math.pow(r,2)+Math.pow(s,2),l=(i>0?-1:1)*Math.abs(i)*this.G*o*this.mass/a,c=(r>0?-1:1)*Math.abs(r)*this.G*o*this.mass/a,h=(s>0?-1:1)*Math.abs(s)*this.G*o*this.mass/a;return new u(l,c,h)},r.setSpeed=function(t){this.node.getComponent(l).setLinearVelocity(t)},e}(h)).prototype,"mass",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),m=e(f.prototype,"sunM",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),M=e(f.prototype,"G",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 9.8}}),g=f))||g);r._RF.pop()}}}));

System.register("chunks:///_virtual/BulletManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Bullet.ts"],(function(e){"use strict";var t,n,i,l,r,a,u,o,s,c,d,p,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,l=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,u=e.EventTarget,o=e.Prefab,s=e.Node,c=e.director,d=e.instantiate,p=e.Vec3,f=e.Component},function(e){h=e.Bullet}],execute:function(){var y,b,g,B,m,_,v,S,w,z;r._RF.push({},"6dad8lZlHhD1Zlfie6sy895","BulletManager",void 0);var D=a.ccclass,E=a.property;new u,e("BulletManager",(y=D("BulletManager"),b=E(o),g=E(s),B=E(s),y((v=t((_=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,i(t,"bullet",v,l(t)),i(t,"player",S,l(t)),i(t,"bulletSpeed",w,l(t)),i(t,"havenlyBody",z,l(t)),t.timeStart=null,t.timeEnd=null,t}n(t,e);var r=t.prototype;return r.start=function(){c.getScene().on("send_bullet_start",this._sendBulletStart,this),c.getScene().on("send_bullet_finish",this._sendBulletEnd,this)},r.update=function(e){},r._sendBulletStart=function(){this.timeStart=new Date},r._sendBulletEnd=function(){this.timeEnd=new Date,this._sendBullet()},r._sendBullet=function(){var e=this.timeEnd.getTime()-this.timeStart.getTime(),t=this.player.getPosition(),n=d(this.bullet);n.setParent(this.node),n.setWorldPosition(t.x,t.y,t.z+8.444),n.getComponent(h).setSpeed(new p(0,0,-this.bulletSpeed*e*.01))},r.getHavenlyBody=function(){return this.havenlyBody},t}(f)).prototype,"bullet",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(_.prototype,"player",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(_.prototype,"bulletSpeed",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),z=t(_.prototype,"havenlyBody",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=_))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,r,a,i,s,o,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){i=e.cclegacy,s=e._decorator,o=e.Node,c=e.director,u=e.Component}],execute:function(){var l,p,m,f,g,h,v;i._RF.push({},"9c0e8tKOaxEGZECvB9BKs5t","GameManager",void 0);var d=s.ccclass,y=s.property;e("GameManager",(l=d("GameManager"),p=y(o),m=y(o),l((h=t((g=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,r(t,"successCollision",h,a(t)),r(t,"target",v,a(t)),t.maxNum=3,t}n(t,e);var i=t.prototype;return i.start=function(){c.getScene().on("shoot_success",this._success,this)},i.update=function(e){},i._success=function(){var e=this;this.successCollision.active=!0,this.target.active=!1,setTimeout((function(){return e.toAnotherScene()}),2e3)},i.toAnotherScene=function(){var e=c.getScene().name;if(e.startsWith("game")){var t=e.replace("game",""),n=Number(t);if(n>=this.maxNum)c.loadScene("gamePass");else{var r="";n<=8?r="00"+(n+1):n<=98&&(r="0"+(n+1)),c.loadScene("game"+r)}}else c.loadScene("main")},t}(u)).prototype,"successCollision",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(g.prototype,"target",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=g))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/Introduction01.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,r,c,e,i,u;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,c=t.input,e=t.Input,i=t.director,u=t.Component}],execute:function(){var s;o._RF.push({},"26d05nzvJhPvrT8phf7603x","Introduction01",void 0);var p=r.ccclass;r.property,t("Introduction01",p("Introduction01")(s=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var r=o.prototype;return r.start=function(){c.on(e.EventType.TOUCH_START,this._touchStart,this)},r.onDestroy=function(){c.off(e.EventType.TOUCH_START,this._touchStart,this)},r.update=function(t){},r._touchStart=function(t){i.loadScene("introduction02")},o}(u))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/Introduction02.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,r,c,e,i,u;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,c=t.input,e=t.Input,i=t.director,u=t.Component}],execute:function(){var s;o._RF.push({},"233d0QmFUVH557PTzmDA9GE","Introduction02",void 0);var p=r.ccclass;r.property,t("Introduction02",p("Introduction02")(s=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var r=o.prototype;return r.start=function(){c.on(e.EventType.TOUCH_START,this._touchStart,this)},r.onDestroy=function(){c.off(e.EventType.TOUCH_START,this._touchStart,this)},r.update=function(t){},r._touchStart=function(t){i.loadScene("introduction03")},o}(u))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/Introduction03.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var n,o,r,e,c,u,i;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,r=t._decorator,e=t.input,c=t.Input,u=t.director,i=t.Component}],execute:function(){var s;o._RF.push({},"9e723SEWWRLnobxX+Q/QIXp","Introduction03",void 0);var p=r.ccclass;r.property,t("Introduction03",p("Introduction03")(s=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var r=o.prototype;return r.start=function(){e.on(c.EventType.TOUCH_START,this._touchStart,this)},r.onDestroy=function(){e.off(c.EventType.TOUCH_START,this._touchStart,this)},r.update=function(t){},r._touchStart=function(t){u.loadScene("game001")},o}(i))||s);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bullet.ts","./BulletManager.ts","./GameManager.ts","./Introduction01.ts","./Introduction02.ts","./Introduction03.ts","./MainCanvas.ts","./PlayerController.ts","./Sun.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainCanvas.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,o,r,a,e;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,r=n._decorator,a=n.director,e=n.Component}],execute:function(){var i;o._RF.push({},"4396dzJnxlO/a0krVJYjtoJ","MainCanvas",void 0);var c=r.ccclass;r.property,n("MainCanvas",c("MainCanvas")(i=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var r=o.prototype;return r.start=function(){},r.update=function(n){},r.onStartBtnClick=function(){a.loadScene("introduction01")},r.returnMain=function(){a.loadScene("main")},o}(e))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var i,e,n,o,s,h,l,c,r,a,d,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,h=t._decorator,l=t.input,c=t.Input,r=t.director,a=t.Animation,d=t.KeyCode,y=t.Component}],execute:function(){var p,u,_;s._RF.push({},"5916e2k/8RNQ6pwgaZnZawx","PlayerController",void 0);var P=h.ccclass,g=h.property;t("PlayerController",P("PlayerController")((_=i((u=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),h=0;h<e;h++)s[h]=arguments[h];return i=t.call.apply(t,[this].concat(s))||this,n(i,"playerSpeed",_,o(i)),i.child=null,i.childPosition=null,i.childScale=null,i.anim=null,i.isPlaying=!1,i.touchStart=null,i.toucheEnd=null,i}e(i,t);var s=i.prototype;return s.start=function(){l.on(c.EventType.KEY_DOWN,this._keyDown,this),l.on(c.EventType.KEY_PRESSING,this._keyPressing,this),l.on(c.EventType.KEY_UP,this._keyUp,this),l.on(c.EventType.TOUCH_MOVE,this._touchMove,this),l.on(c.EventType.TOUCH_START,this._touchStart,this),l.on(c.EventType.TOUCH_END,this._touchEnd,this),this.child=this.node.getChildByName("Cylinder")},s.update=function(t){},s._touchStart=function(t){},s._touchEnd=function(t){this.isPlaying&&(r.getScene().emit("send_bullet_finish"),this.anim=this.child.getComponent(a),this.anim.stop(),this.child.setPosition(this.childPosition),this.child.setScale(this.childScale),this.isPlaying=!1)},s._touchMove=function(t){var i=this.node.getPosition(),e=t.getDelta();e.y<-2?this.isPlaying||(r.getScene().emit("send_bullet_start"),this.childPosition=this.child.getPosition(),this.childScale=this.child.getScale(),this.anim=this.child.getComponent(a),this.anim.play(),this.isPlaying=!0):this.node.setPosition(i.x+.02*e.x,i.y,i.z)},s._keyDown=function(t){var i=this.node.getPosition();t.keyCode==d.KEY_A?this.node.setPosition(i.x-this.playerSpeed,i.y,i.z):t.keyCode==d.KEY_D?this.node.setPosition(i.x+this.playerSpeed,i.y,i.z):t.keyCode==d.SPACE&&(r.getScene().emit("send_bullet_start"),this.childPosition=this.child.getPosition(),this.childScale=this.child.getScale(),this.anim=this.child.getComponent(a),this.anim.play())},s._keyPressing=function(t){var i=this.node.getPosition();t.keyCode==d.KEY_A?this.node.setPosition(i.x-this.playerSpeed,i.y,i.z):t.keyCode==d.KEY_D&&this.node.setPosition(i.x+this.playerSpeed,i.y,i.z)},s._keyUp=function(t){t.keyCode==d.SPACE&&(r.getScene().emit("send_bullet_finish"),this.anim=this.child.getComponent(a),this.anim.stop(),this.child.setPosition(this.childPosition),this.child.setScale(this.childScale))},s.onDestroy=function(){l.off(c.EventType.KEY_DOWN,this._keyDown,this)},i}(y)).prototype,"playerSpeed",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),p=u))||p);s._RF.pop()}}}));

System.register("chunks:///_virtual/Sun.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,r,n,i,o,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,c=t._decorator,u=t.Component}],execute:function(){var a,s,l;o._RF.push({},"9bd29eqI2lBT58sVVThNywZ","Sun",void 0);var p=c.ccclass,f=c.property;t("Sun",p("Sun")((l=e((s=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o))||this,n(e,"M",l,i(e)),e}r(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){},e}(u)).prototype,"M",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),a=s))||a);o._RF.pop()}}}));
