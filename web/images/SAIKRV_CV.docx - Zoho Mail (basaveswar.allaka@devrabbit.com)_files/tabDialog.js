window.zmsDialog=function(a){"use strict";return a.templates=a.templates||{},$.extend(a.templates,{tabsDialogTemplate:function(a){return['<div class="SC_Pop SC_cent wht" id="'+a+'_tabPopupDialog">','<div class="SC_pe SC_PopTop">','<div class="SC_PU">','<div class="SC_PUtt">','<div class="SC_flt">','<ul id="'+a+'_tabContainer" class="SCS_tab"></ul>',"</div>",'<div id="'+a+'_tabIconCont" class="SC_frt"></div>','<div class="SCmb">','<div id="'+a+'_closeIcon" class="SC_frt">',"<ul>","<li>","<b>",'<div class="SC_hd"></div>','<span class="SC_ttip ttr" data-tooltip="Close">','<i class="msi-close"></i>',"</span>","</b>","</li>","</ul>","</div>","</div>","</div>",'<div class="SC_PUcen" style="overflow:auto"></div>',"</div>","</div>","</div>"].join("")},listingBox:["<div></div>"].join(""),buttonTemplate:['<span class="sel"></span>'].join(""),headerTemplate:["<li></li>"].join(""),iconTemplate:["<li><b><span><i></i></span></b></li>"].join(""),tabTextBox:["<span></span>"].join(""),iconContainer:['<div class="SCmb SC_flt"><ul></ul></div>'].join(""),buttonContainer:['<div class="SC_PUbtm"></div>'].join(""),succErrMsgBox:['<div style="display:none" class="SC_msg SC_emsg"><span>','<font></font><i class="msi-close"></i></span></div>'].join(""),dialogTitle:"<h3 style='padding-bottom: 20px'>"},!0),a}(window.zmsDialog||{}),window.zmsDialog=function(a){"use strict";function b(a){var b;s=zmComponent.keybindings.getScope(),b={allowDefaultScope:!1,shortcuts:[{uid:"close",keyStr:"esc",actions:[function(){a.close()}]}],scope:"tabDialog"},zmComponent.keybindings.registerAll(b),zmComponent.keybindings.setScope("tabDialog")}function c(a){return $(v.tabsDialogTemplate(a))}function d(a){var b=$("body"),c=b.height(),d=b.width();c=65*c/100,d=75*d/100,a.$el.find("."+a.contentClass).css({"max-height":c+"px","max-width":d+"px",width:60*d/100+"px"}),a.$el.find("."+a.contentWrapperClass).css({"max-width":d+"px"}),a.$el.find("."+a.positionWrapperClass).css({top:10*c/100+"px"})}function e(a,b){a.addClass(b)}function f(a,b){a.css(b)}function g(a,b){a.attr(b)}function h(a){a.hide()}function i(a,b,c){var d=$(v.headerTemplate);return b.id&&(d[0].id=b.id),b.text&&d.text(b.text),d.on("click",function(){var a,e=Number(d.attr("tabid"));e!==c.selectedTabId&&(a=c.tabsInfo[e],d.addClass("stSel"),c.hideTab(c.selectedTabId,!0),c.showTab(e),!b.onClk||a.dataLoaded&&!b.forceCall||(b.hideButtons&&!a.dataLoaded&&c.getButtonContainer().addClass("SC_vh"),b.onClk(c,e,a.dataLoaded)),a.dataLoaded=!0)}),b.selected&&(e(d,"stSel"),c.selectedTab=d),b.classes&&e(d,b.classes),b.styles&&f(d,b.styles),b.attr&&g(d,b.attr),b.hide&&h(d),d}function j(a){var b=$(v.listingBox);return a.id&&(b[0].id=a.id),a.ele&&b.html(a.ele),a.classes&&e(b,a.classes),a.styles&&f(b,a.styles),a.attr&&g(b,a.attr),a.parEle&&a.parEle.append&&(a.parEle.append(b),b=a.parEle),a.hide&&h(b),b}function k(a,b,c){var d=$(v.buttonTemplate);return a.id&&(d[0].id=a.id,c.id=a.id),a.text&&d.text(a.text),a.onClk&&(c.onClk=function(){a.onClk(b)},d.on("click",c.onClk)),a.classes&&e(d,a.classes),a.styles&&f(d,a.styles),a.attr&&g(d,a.attr),a.hide&&d.attr("style","display:none !important"),d}function l(a,b,c){var d,e=$(v.iconTemplate);return a.id&&(e[0].id=a.id,c.id=a.id),a.onClk&&(c.onClk=function(){e.find("b").addClass("SC_sel"),a.onClk(b)},e.on("click",c.onClk)),a.iconClass&&e.find("i").addClass(a.iconClass),a.selected&&e.find("b").addClass("SC_sel"),a.text&&(e.addClass("SCtxt"),d=$(v.tabTextBox),d.text(a.text),e.find("span").append(d)),a.attr&&g(e,a.attr),a.hide&&h(e),e}function m(){var a=this.tabsInfo[this.selectedTabId];this.configOption.tabs[this.selectedTabId].hideButtons&&this.getButtonContainer().addClass("SC_vh"),a.onClick&&a.onClick(this),a.dataLoaded=!0}function n(a){this.configOption=a,this.id=a.id||"def_tab_dialog",this.selectedTabId=void 0,this.tabsInfo=[],this.tabNameMap={},this.$el=void 0,this.maskWrapperClass="SC_Pop",this.positionWrapperClass="SC_pe",this.contentWrapperClass="SC_PU",this.headerClass="SC_PUtt",this.contentClass="SC_PUcen",this.ignoreMouseDown=a.ignoreMouseDown,this.onMouseDown=a.onMouseDown}function o(a,b){this.$tabEle=a,this.$buttons=void 0,this.$icons=void 0,this.$centerElem=void 0,this.$errBand=void 0,this.isSelected=b,this.onCancel=void 0,this.onClick=void 0,this.removeloadingband=function(){},this.dataLoaded=!1,this.tabId=void 0,this.iconsInfo=[],this.buttonsInfo=[]}function p(a,b){this.id=void 0,this.$iconEle=a,this.isSelected=b,this.onClk=function(){}}function q(a,b){this.id=void 0,this.$buttonEle=a,this.isSelected=b,this.onClk=function(){}}function r(a){var b=new n(a);return b.create(),b}var s,t=zmText.get("dialog"),u=a||{},v=a.templates;return n.prototype={customizeDialog:function(){var a=this.configOption,b=this,c=this.id,d=this,e=this.$el.find("#"+c+"_closeIcon");if(a.classes&&this.$el.addClass(a.classes),a.hideCloseIcon?e.hide():e.on("click",function(){b.close(b)}),this.ignoreMouseDown||this.$el.on("mousedown mouseup",function(a){zmUtil.stopEvents(a,!0),"function"==typeof d.onMouseDown&&d.onMouseDown(a,d)}),a.title){var f=$(v.dialogTitle),g=this.$el.find(".SC_PUtt .SC_flt");f.text(a.title),g.prepend(f),this.$el.find(".SC_PUtt .SC_frt").eq(0).after(g.find(" .SCS_tab").css("clear","both"))}},close:function(){this.$el.remove(),s&&zmComponent.keybindings.setScope(s),zmComponent.keybindings.dropScope("tabDialog"),this.configOption.onClose&&this.configOption.onClose()},create:function(){var a,e=c(this.id),f=this.configOption,g=$("body");g.append(e),this.$el=e,d(this),a=f.tabs,b(this),this.createTabs(a),this.customizeDialog(),m.call(this),f.dialogDidMount&&f.dialogDidMount(this)},createTabs:function(a,b){for(var c,d,e,f,g,h,j=a.length,k=0;k<j;k++)c=a[k],d=b||k,c.attr?c.attr.tabid=d:c.attr={tabid:d},this.tabNameMap[c.tabName]=d,e=i(this.id,c,this),f=new o(e,(!1)),this.$el.find("#"+this.id+"_tabContainer").append(e),c.selected&&(f.isSelected=!0,this.selectedTabId=k),g=c.icons?this.createIcons(c.icons,d,c.selected):null,f.$icons=null!==g&&g.$iconCont?g.$iconCont:null,f.iconsInfo=null!==g&&g.iconsInfo?g.iconsInfo:[],h=c.buttons?this.createButtons(c.buttons,d,c.selected):null,f.$buttons=null!==h&&h.$buttonCont?h.$buttonCont:null,f.buttonsInfo=null!==h&&h.buttonsInfo?h.buttonsInfo:[],c.listingArea||(c.listingArea={}),f.$centerElem=c.listingArea?this.createListingArea(c.listingArea,d,c.selected):null,f.$errBand=this.createErrBand(),f.onClick=c.onClk,f.name=c.tabName,c.hideCloseButton||this.createCloseButton(d,f),this.tabsInfo.push(f)},createErrBand:function(){var a=$(v.succErrMsgBox),b=this;return a.find("i").off("click").on("click",function(){b.hideSuccErrMsg()}),this.$el.find(".SC_pe").append(a),a},createIcons:function(a,b,c){var d,e,f,g=a.length,h=this.$el.find("#"+b+"_tabIcons"),i=[];h.length||(h=$(v.iconContainer),h.attr("id",b+"_tabIcons"),this.$el.find("#"+this.id+"_tabIconCont").append(h)),c||h.hide();for(var j=0;j<g;j++)d=a[j],e=new p((void 0),(!1)),f=l(d,this,e),e.$iconEle=f,h.find("ul").append(f),i.push(e);return{$iconCont:h,iconsInfo:i}},createButtons:function(a,b,c){var d,e,f,g,h=this.$el.find("#"+b+"_tabPopupButton"),i=[];h.length||(h=$(v.buttonContainer),h.attr("id",b+"_tabPopupButton"),this.$el.find(".SC_PU").append(h)),c||h.hide(),d=a.length;for(var j=0;j<d;j++)e=a[j],f=new q((void 0),(!1)),g=k(e,this,f),f.$buttonEle=g,this.$el.find("#"+b+"_tabPopupButton").append(g),i.push(f);return{$buttonCont:h,buttonsInfo:i}},createListingArea:function(a,b,c){var d;return c||(a.hide=!0),d=j(a),this.$el.find("."+this.contentClass).append(d),d},replaceButtons:function(a,b){var c=b?this.getTabNumberByTabName(b):this.selectedTabId,d={},e=c===this.selectedTabId,f=this.tabsInfo[c];f.$buttons&&f.$buttons.html(""),d=this.createButtons(a,c,e),f.$buttons=d&&d.$buttonCont?d.$buttonCont:null,f.buttonsInfo=d&&d.buttonsInfo?d.buttonsInfo:[]},replaceIcons:function(a,b){var c,d=b?this.getTabNumberByTabName(b):this.selectedTabId,e={},f=d===this.selectedTabId;c=this.tabsInfo[d],c.$icons&&c.icons.html(""),e=this.createIcons(a,d,f),c.$icons=e&&e.$iconCont?e.$iconCont:null,c.iconsInfo=e&&e.iconsInfo?e.iconsInfo:[]},replaceCenterArea:function(a,b){var c=b?this.getTabNumberByTabName(b):this.selectedTabId;this.tabsInfo[c].$centerElem.html(a)},createCloseButton:function(a,b){var c,d=a||this.selectedTabId,e=[],f={},g=this,h=b||this.tabsInfo[d],i=Boolean(h.isSelected);f.text=t.cancel,f.attr={"data-val":"Cancel"},f.onClk=function(){g.close(g),g.tabsInfo[d]&&g.tabsInfo[d].onCancel&&g.tabsInfo[d].onCancel()},e.push(f),c=this.createButtons(e,d,i),h.$buttons=c&&c.$buttonCont?c.$buttonCont:null,h.buttonsInfo.concat(c&&c.buttonsInfo?c.buttonsInfo:[])},createNewTab:function(a){var b=[],c=this.tabsInfo.length;b.push(a),this.createTabs(b,c)},createNewButton:function(a,b){var c,d=b?this.getTabNumberByTabName(b):this.selectedTabId,e=[],f=this.tabsInfo[d];e.push(a),c=this.createButtons(e,d,f.isSelected),f.$buttons=c&&c.$buttonCont?c.$buttonCont:null,f.buttonsInfo.concat(c&&c.buttonsInfo?c.buttonsInfo:[])},createNewIcon:function(a,b){var c=b?this.getTabNumberByTabName(b):this.selectedTabId,d=[],e={},f=this.tabsInfo[c];d.push(a),e=this.createIcons(d,c,f.isSelected),f.$icons=e&&e.$iconCont?e.$iconCont:null,f.iconsInfo.concat(e&&e.iconsInfo?e.iconsInfo:[])},getAllIconsInfo:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;return this.tabsInfo[b].iconsInfo},getAllButtonsInfo:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;return this.tabsInfo[b].buttonsInfo},getSelectedTab:function(){return this.tabsInfo[this.selectedTabId].$tabEle},getCenterElem:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;return this.tabsInfo[b].$centerElem},getIconContainer:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;return this.tabsInfo[b].$icons},getButtonContainer:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;return this.tabsInfo[b].$buttons},getSelectedTabId:function(){return Number(this.tabsInfo[this.selectedTabId].$tabEle.attr("tabid"))},getTabNumberByID:function(a){return Number(this.$el.find("#"+a).attr("tabid"))},getTabNumberByTabName:function(a){return this.tabNameMap[a]},currentTab:function(){return this.tabsInfo[this.selectedTabId].name},showTab:function(a){var b=this.tabsInfo[a],c=b.$errBand;b.$tabEle.show().addClass("stSel"),b.$icons&&b.$icons.show(),b.$buttons&&b.$buttons.show(),b.$centerElem&&b.$centerElem.show(),c.attr("visibilityInUI")&&c.show(),this.selectedTabId=a,b.isSelected=!0},hideTab:function(a,b){var c=this.tabsInfo[a];b||c.$tabEle.hide(),c.$tabEle.removeClass("stSel"),c.$icons&&c.$icons.hide(),c.$buttons&&c.$buttons.hide(),c.$centerElem&&c.$centerElem.hide(),c.$errBand.hide(),c.isSelected=!1},showLoadingBand:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];c.removeloadingband=zmComponent.loadingBand({container:c.$centerElem[0],type:"pagination"})},removeLoadingBand:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];c.removeloadingband&&(c.removeloadingband(),c.removeloadingband=void 0)},setDataLoaded:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];c.dataLoaded=!0,this.removeLoadingBand(b)},unsetDataLoaded:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];c.dataLoaded=!1},getDataLoaded:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];return c.dataLoaded},hideSuccErrMsg:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b];c.$errBand.hide().removeAttr("visibilityInUI")},showSuccErrMsg:function(a,b,c,d){var e=c?this.getTabNumberByTabName(c):this.selectedTabId,f=this.tabsInfo[e],g=f.$errBand,h=this;void 0!==b&&(a=a||"e",a="w"===a?"i":a,g.find("font").text(b),g.show().attr({visibilityInUI:"true","class":"SC_msg SC_"+a+"msg"}),d&&window.setTimeout(function(){h.hideSuccErrMsg()},d))},showButtons:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b].$buttons;c&&c.removeClass("SC_vh")},hideButtons:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId,c=this.tabsInfo[b].$buttons;c&&c.addClass("SC_vh")},showIcons:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;this.tabsInfo[b].$icons.show()},hideIcons:function(a){var b=a?this.getTabNumberByTabName(a):this.selectedTabId;this.tabsInfo[b].$icons.hide()},setDialogDimension:function(a,b){var c=this.$el.find("."+this.contentClass);a&&c.css("height",a),b&&c.css("width",b)},setDialogPosition:function(a){var b=this.$el.find("."+this.positionWrapperClass);a&&(a.style&&b.css(a.style),a.classes&&b.addClass(a.classes))}},u.createTabPopupDialog=r,u}(window.zmsDialog);