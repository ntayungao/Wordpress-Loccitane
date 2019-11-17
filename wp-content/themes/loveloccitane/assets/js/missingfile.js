// Decide whether to suppress missing file error or not based on preference setting
var suppressMissingFileError = false

window.Muse.assets.check=function(c){if(!window.Muse.assets.checked){window.Muse.assets.checked=!0;var b={},d=function(a,b){if(window.getComputedStyle){var c=window.getComputedStyle(a,null);return c&&c.getPropertyValue(b)||c&&c[b]||""}if(document.documentElement.currentStyle)return(c=a.currentStyle)&&c[b]||a.style&&a.style[b]||"";return""},a=function(a){if(a.match(/^rgb/))return a=a.replace(/\s+/g,"").match(/([\d\,]+)/gi)[0].split(","),(parseInt(a[0])<<16)+(parseInt(a[1])<<8)+parseInt(a[2]);if(a.match(/^\#/))return parseInt(a.substr(1),
16);return 0},f=function(f){for(var g=document.getElementsByTagName("link"),j=0;j<g.length;j++)if("text/css"==g[j].type){var l=(g[j].href||"").match(/\/?css\/([\w\-]+\.css)\?crc=(\d+)/);if(!l||!l[1]||!l[2])break;b[l[1]]=l[2]}g=document.createElement("div");g.className="version";g.style.cssText="display:none; width:1px; height:1px;";document.getElementsByTagName("body")[0].appendChild(g);for(j=0;j<Muse.assets.required.length;){var l=Muse.assets.required[j],k=l.match(/([\w\-\.]+)\.(\w+)$/),i=k&&k[1]?
k[1]:null,k=k&&k[2]?k[2]:null;switch(k.toLowerCase()){case "css":i=i.replace(/\W/gi,"_").replace(/^([^a-z])/gi,"_$1");g.className+=" "+i;i=a(d(g,"color"));k=a(d(g,"backgroundColor"));i!=0||k!=0?(Muse.assets.required.splice(j,1),"undefined"!=typeof b[l]&&(i!=b[l]>>>24||k!=(b[l]&16777215))&&Muse.assets.outOfDate.push(l)):j++;g.className="version";break;case "js":j++;break;default:throw Error("Unsupported file type: "+k);}}c?c().jquery!="1.8.3"&&Muse.assets.outOfDate.push("jquery-1.8.3.min.js"):Muse.assets.required.push("jquery-1.8.3.min.js");
g.parentNode.removeChild(g);if(Muse.assets.outOfDate.length||Muse.assets.required.length)g="Some files on the server may be missing or incorrect. Clear browser cache and try again. If the problem persists please contact website author.",f&&Muse.assets.outOfDate.length&&(g+="\nOut of date: "+Muse.assets.outOfDate.join(",")),f&&Muse.assets.required.length&&(g+="\nMissing: "+Muse.assets.required.join(",")),suppressMissingFileError?(g+="\nUse SuppressMissingFileError key in AppPrefs.xml to show missing file error pop up.",console.log(g)):alert(g)};location&&location.search&&location.search.match&&location.search.match(/muse_debug/gi)?
setTimeout(function(){f(!0)},5E3):f()}};
var muse_init=function(){require.config({baseUrl:""});require(["jquery","museutils","whatinput","jquery.watch","jquery.musepolyfill.bgsize","webpro","jquery.scrolleffects"],function(c){var $ = c;$(document).ready(function(){try{
window.Muse.assets.check($);/* body */
Muse.Utils.transformMarkupToFixBrowserProblemsPreInit();/* body */
Muse.Utils.prepHyperlinks(true);/* body */
Muse.Utils.resizeHeight('.browser_width');/* resize height */
Muse.Utils.requestAnimationFrame(function() { $('body').addClass('initialized'); });/* mark body as initialized */
Muse.Utils.makeButtonsVisibleAfterSettingMinWidth();/* body */
Muse.Utils.initWidget('#widgetu468', ['#bp_infinity'], function(elem) { return new WebPro.Widget.Form(elem, {validationEvent:'submit',errorStateSensitivity:'high',fieldWrapperClass:'fld-grp',formSubmittedClass:'frm-sub-st',formErrorClass:'frm-subm-err-st',formDeliveredClass:'frm-subm-ok-st',notEmptyClass:'non-empty-st',focusClass:'focus-st',invalidClass:'fld-err-st',requiredClass:'fld-err-st',ajaxSubmit:true}); });/* #widgetu468 */
Muse.Utils.fullPage('#page');/* 100% height page */
$('#u265').registerOpacityScrollEffect([{"fade":104,"in":[-Infinity,700],"opacity":0},{"opacity":100,"in":[700,700]},{"fade":92,"in":[700,Infinity],"opacity":0}]);/* scroll effect */
$('#u241-6').registerPositionScrollEffect([{"speed":[0,0],"in":[-Infinity,0]},{"speed":[0,-1],"in":[0,Infinity]}]);/* scroll effect */
$('#u248-4').registerPositionScrollEffect([{"speed":[0,0],"in":[-Infinity,0]},{"speed":[0,-1],"in":[0,Infinity]}]);/* scroll effect */
$('#u245-4').registerPositionScrollEffect([{"speed":[0,0],"in":[-Infinity,0]},{"speed":[0,-1],"in":[0,Infinity]}]);/* scroll effect */
$('#u285').registerPositionScrollEffect([{"speed":[0,1],"in":[-Infinity,558]},{"speed":[-1,2],"in":[558,Infinity]}]);/* scroll effect */
$('#u254').registerPositionScrollEffect([{"speed":[0,1],"in":[-Infinity,729.4]},{"speed":[0,-1],"in":[729.4,Infinity]}]);/* scroll effect */
$('#u295-14').registerPositionScrollEffect([{"speed":[0,1],"in":[-Infinity,750]},{"speed":[0,2],"in":[750,Infinity]}]);/* scroll effect */
$('#u299-4').registerPositionScrollEffect([{"speed":[0,1],"in":[-Infinity,750]},{"speed":[0,2],"in":[750,Infinity]}]);/* scroll effect */
$('#u316-10').registerPositionScrollEffect([{"speed":[0,1],"in":[-Infinity,1404.45]},{"speed":[0,-1],"in":[1404.45,Infinity]}]);/* scroll effect */
$('#u1463').registerPositionScrollEffect([{"speed":[-4,0],"in":[-Infinity,1879.65]},{"speed":[-5,1],"in":[1879.65,Infinity]}]);/* scroll effect */
$('#u1466').registerPositionScrollEffect([{"speed":[0,-1],"in":[-Infinity,1911]},{"speed":[10,-5],"in":[1911,Infinity]}]);/* scroll effect */
$('#u1466').registerOpacityScrollEffect([{"fade":8,"in":[-Infinity,1911],"opacity":0},{"opacity":100,"in":[1911,1911]},{"fade":12,"in":[1911,Infinity],"opacity":100}]);/* scroll effect */
$('#u400-4').registerPositionScrollEffect([{"speed":[8,0],"in":[-Infinity,2633.6]},{"speed":[0,1],"in":[2633.6,Infinity]}]);/* scroll effect */
$('#u400-4').registerOpacityScrollEffect([{"fade":19.75,"in":[-Infinity,2633.6],"opacity":0},{"opacity":100,"in":[2633.6,2633.6]},{"fade":50,"in":[2633.6,Infinity],"opacity":100}]);/* scroll effect */
Muse.Utils.showWidgetsWhenReady();/* body */
Muse.Utils.transformMarkupToFixBrowserProblems();/* body */
}catch(b){if(b&&"function"==typeof b.notify?b.notify():Muse.Assert.fail("Error calling selector function: "+b),false)throw b;}})})};
