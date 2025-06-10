// <![CDATA[
var text=Array("cats", "bunnies", "deer", "wolves", "guys"); // replace this with an array of your own text
var delay=5; // seconds between each new text item
var speed=20; // speed of the scroll

/***************************\
*    Rolling Text Effect    *
* (c)2014+ mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
\***************************/
var diddly=new Array();
var rolltop;
var referee=0;
delay*=1000;

if (typeof('addRVLoadEvent')!='function') function addRVLoadEvent(funky) {
  var oldonload=window.onload;
  if (typeof(oldonload)!='function') window.onload=funky;
  else window.onload=function() {
    if (oldonload) oldonload();
    funky();
  }
}

addRVLoadEvent(prepare_to_go);

function prepare_to_go() {
  var i, r;
  var r=document.getElementById("rolling");
  rolltop=r.clientHeight;
  while (r.childNodes.length) r.removeChild(r.childNodes[0]);
  r.style.position="relative";
  r.style.overflow="hidden";
  r.appendChild(document.createTextNode(String.fromCharCode(160)));
  for (i=0; i<text.length; i++) {
    diddly[i]=document.createElement("div");
	diddly[i].style.position="absolute";
	diddly[i].style.top=rolltop+"px";
	diddly[i].style.left="0px";
	if (text[i].indexOf("www")!=-1) slinkit(diddly[i], text[i]);
	else diddly[i].appendChild(document.createTextNode(text[i]));
	r.appendChild(diddly[i]);
  }
  rolling_in_the_hay();
}

function rolling_in_the_hay() {
  var i, j;
  j=referee%text.length;
  for (i=rolltop; i>=0; i--) setTimeout("diddly["+j+"].style.top='"+i+"px'", speed*(rolltop-i));
  for (i=-1; i>-rolltop; i--) setTimeout("diddly["+j+"].style.top='"+i+"px'", delay-speed*i);
  ++referee;
  setTimeout('rolling_in_the_hay()', delay);
}

function slinkit(r, t) {
  var a, s, e;
  s=t.indexOf("www");
  e=t.indexOf(" ", s);
  if (e==-1) e=t.length;
  r.appendChild(document.createTextNode(t.substring(0, s)));
  a=document.createElement("a");
  a.href="http://"+t.substring(s, e);
  a.appendChild(document.createTextNode(t.substring(s, e)));
  r.appendChild(a);
  r.appendChild(document.createTextNode(t.substring(e)));
}
// ]]>