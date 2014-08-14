(function(){var e;e=require("underscore"),module.exports=function(t){var n;return n=function(){function n(e,n,i){var r,u;this.engine=e,this.HB=n,this.execution_listener=i,u=function(e){return function(t){return e.send(t)}}(this),this.execution_listener.push(u),this.applied_operations=[],r=function(e){return function(t){return e.applied_operations.push(t)}}(this),this.execution_listener.push(r),0!==(null!=t?t.length:void 0)&&this.engine.applyOps(t[0].getHistoryBuffer()._encode()),this.unexecuted={}}return n.prototype.getOpsInExecutionOrder=function(){return this.applied_operations},n.prototype.send=function(e){var n,i,r,u;if(e.uid.creator===this.HB.getUserId()&&"string"!=typeof e.uid.op_number){for(u=[],i=0,r=t.length;r>i;i++)n=t[i],u.push(n.getUserId()!==this.HB.getUserId()?n.getConnector().receive(e):void 0);return u}},n.prototype.receive=function(e){var t,n;return null==(t=this.unexecuted)[n=e.uid.creator]&&(t[n]=[]),this.unexecuted[e.uid.creator].push(e)},n.prototype.flushOne=function(e){var t;return(null!=(t=this.unexecuted[e])?t.length:void 0)>0?this.engine.applyOp(this.unexecuted[e].shift()):void 0},n.prototype.flushOneRandom=function(){return this.flushOne(e.random(0,t.length-1))},n.prototype.flushAll=function(){var e,t,n;n=this.unexecuted;for(e in n)t=n[e],this.engine.applyOps(t);return this.unexecuted={}},n}()}}).call(this);
//# sourceMappingURL=../Connectors/TestConnector.js.map