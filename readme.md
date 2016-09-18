Background
----------

this is the force_feed.js file from qwerjk

* http://qwerjk.com/force-feed/force_feed.js
* http://qwerjk.com/force-feed

I think this belongs to https://github.com/m5

reproduced here without license or permission

Are you m5? Please... take control of this codebase/repo

Installing
----------

Drag this [force_feed](https://localhost) bookmarklet to your browser toolbar, then edit the location to be:

```javascript
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.4.2",function($,L){window.speedReaderJQuery = $;var script=document.createElement("script");script.setAttribute("type","text/javascript");script.setAttribute("src", "https://qwerjk.com/force-feed/force_feed.js");document.getElementsByTagName("head")[0].appendChild(script);script = document.createElement("link");script.setAttribute("rel", "stylesheet");script.setAttribute("type", "text/css");script.setAttribute("href", "https://qwerjk.com/force-feed/force_feed.css");document.getElementsByTagName("head")[0].appendChild(script); window.speedReaderConfig={"maxWords":4,"speed":800,"weighted":true,"flickerText":true,"autoscroll":false,"maxLetters":15};});
```

(github markdown won't let this page embed the correct location due to [css concerns](http://stackoverflow.com/questions/203171/bookmarklet-link-in-markdown-document))


Keyboard Shortcuts
------------------

J/K : skip ahead / skip backwards

H/L : speed up / slow down

P : pause / resume


Keywords
-------
forcefeed force-feed bookmarklet speedread speed read qwerjk
