!function(){"use strict";var a=function(a){var b={};return b.u=a.url,b.t=a.type||"POST",b.onerror=a.error,b.fn=a.success,b.p=a.data,b.ep=a.extraParamObj,b};Backbone.ajax=function(b){return zmAjq.XHR(a(b))},Backbone.sync=function(a,b,c){c=c||{},c.type=c.type||"POST",c.url=_.result(b,"url"),c.data=b.serialized(a,c);var d=c.xhr=Backbone.ajax(c);return b.trigger("request",b,d,c),d}}();