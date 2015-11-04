(function($, config){
var jQuery = $;

(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);
sbHtml = '<div id="sb-opts-pane"><ul class="sb-menu">  <li><label for="sb-autoscroll">    <input type="checkbox" name="autoscroll" id="sb-autoscroll"/> Scroll automatically</label>  </li>  <li><label for="sb-flicker-text">    <input type="checkbox" name="flickerText" id="sb-flicker-text"/> Flicker text</label>  </li>  <li><label for="sb-variable-speed">    <input type="checkbox" name="weighted" id="sb-variable-speed"/> Variable Speed</label>  </li>  <li>    <label for="sb-chunk-words">Maximum chunk size (words)    <input type="text" name="maxWords" size="4" id="sb-chunk-words"/></label>  </li>  <li>    <label for="sb-chunk-letters">Maximum chunk size (letters)    <input class="numeric" type="text" name="maxLetters" size="4" id="sb-chunk-letters"/></label>  </li>  <li>    <label for="sb-speed-wpm"> Speed (WPM)    <input class="numeric" type="text" name="speed" size="4" id="sb-speed-wpm"/></label>  </li>  <li>    <label id="sb-save-settings">Save settings</label>  </li></ul></div><div id="sb-save-pane">  <div class="sb-center-wrap">    <div class="sb-center-mid">      <div id="sb-save-content">        <h1>Save your settings</h1>        <div id="sb-save-close">x</div>        <hr/>        <p>Replace your bookmarklette with the one below to save your settings</p>        <p><a id="sb-bookmarklette" href="#">ForceFeed</a></p>      </div>    </div>  </div></div>';
sbBookmarkletteJS = 'javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.4.2",function($,L){window.speedReaderJQuery = $;var script=document.createElement("script");script.setAttribute("type","text/javascript");script.setAttribute("src", "http://qwerjk.com/force-feed/force_feed.js");document.getElementsByTagName("head")[0].appendChild(script);script = document.createElement("link");script.setAttribute("rel", "stylesheet");script.setAttribute("type", "text/css");script.setAttribute("href", "https://raw.githubusercontent.com/neuroradiology/force_feed/master/force_feed.css");document.getElementsByTagName("head")[0].appendChild(script); window.speedReaderConfig=__REPLACE_WITH_CONFIG__;});';
commonWordsPattern = /^(the|of|and|a|to|in|is|be|that|was|he|for|it|with|as|his|i|on|have|at|by|not|they|this|had|are|but|from|or|she|an|which|you|one|we|all|were|her|would|there|their|will|when|who|him|been|has|more|if|no|out|do|so|can|what|up|said|about|other|into|than|its|time|only|could|new|them|man|some|these|then|two|first|may|any|like|now|my|such|make|over|our|even|most|me|state|after|also|made|many|did|must|before|back|see|through|way|where|get|much|go|well|your|know|should|down|work|year|because|come|people|just|say|each|those|take|day|good|how|long|mr|own|too|little|use|us|very|great|still|men|here|life|both|between|old|under|last|never|place|same|another|think|house|while|high|right|might|came|off|find|states|since|used|give|against|three|himself|look|few|general|hand|school|part|small|american|home|during|number|again|mrs|around|thought|went|without|however|govern|dont|does|got|public|united|point|end|become|head|once|course|fact|upon|need|system|set|every|war|put|form|water|took|program|present|government|thing|told|possible|group|large|until|always|city|didnt|order|away|called|want|eyes|something|unite|going|face|far|asked|interest|later|show|knew|though|less|night|early|almost|let|open|enough|side|case|days|yet|better|nothing|tell|problem|toward|given|why|national|room|young|social|light|business|president|help|power|country|next|things|word|looked|real|john|line|second|church|seem|certain|big|four|felt|several|children|service|feel|important|rather|name|per|among|often|turn|development|keep|family|seemed|white|company|mind|members|others|within|done|along|turned|god|sense|week|best|change|kind|began|child|ever|law|matter|least|means|question|act|close|mean|leave|itself|force|study|york|action|its|door|experience|human|result|times|run|different|car|example|hands|whole|center|although|call|five|inform|gave|plan|woman|boy|feet|provide|taken|thus|body|play|seen|today|having|cost|perhaps|field|local|really|am|increase|reason|themselves|clear|im|information|figure|late|above|history|love|girl|held|special|move|person|whether|college|sure|probably|either|seems|cannot|art|free|across|death|quite|street|value|anything|making|past|brought|moment|control|office|heard|problems|became|full|near|half|nature|hold|live|available|known|board|effect|already|economic|money|position|believe|age|together|shall|true|political|court|report|level|rate|air|pay|community|complete|music|necessary|society|behind|type|read|idea|wanted|land|party|class|organize|return|department|education|following|mother|sound|ago|nation|voice|six|bring|wife|common|south|strong|town|book|students|hear|hope|able|industry|stand|tax|west|meet|particular|cut|short|stood|university|spirit|start|total|future|front|low|century|washington|usually|care|recent|evidence|further|million|simple|road|sometimes|support|view|fire|says|hard|morning|table|left|situation|try|outside|lines|surface|ask|modern|top|peace|personal|member|minutes|lead|schools|talk|consider|gone|soon|father|ground|living|months|therefore|america|started|longer|dr|dark|various|finally|hour|north|third|fall|greater|pressure|stage|expected|secretary|needed|thats|kept|eye|values|union|private|alone|black|required|space|subject|english|month|understand|ill|nor|answer|moved|amount|conditions|direct|red|student|rest|nations|heart|costs|record|picture|taking|couldnt|hours|deal|forces|everything|write|coming|effort|market|island|wall|purpose|basis|east|lost|st|except|letter|looking|property|miles|difference|entire|else|color|followed|feeling|son|makes|friend|basic|cold|including|single|attention|note|cause|hundred|step|paper|developed|tried|simply|cant|story|committee|inside|reached|easy|appear|include|accord|actually|remember|beyond|dead|shown|fine|religious|continue|ten|defense|getting|central|beginning|instead|river|received|doing|employ|trade|terms|trying|friends|sort|administration|higher|cent|expect|food|building|religion|meeting|ready|walked|follow|earth|speak|passed|foreign|natural|medical|training|county|list|floor|piece|especially|indeed|stop|wasnt|england|difficult|likely|suddenly|moral|plant|bad|club|needs|international|working|countries|develop|drive|reach|police|sat|charge|farm|fear|test|determine|hair|results|stock|trouble|happened|growth|square|william|cases|effective|serve|miss|involved|doctor|earlier|increased|being|blue|hall|particularly|boys|paid|sent|production|district|using|thinking|concern|christian|press|girls|wide|usual|direction|feed|trial|walk|begin|weeks|points|respect|certainly|ideas|industrial|methods|operation|addition|association|combine|knowledge|decided|temperature|statement|yes|below|game|nearly|science|directly|horse|influence|size|showed|build|throughout|questions|character|foot|kennedy|firm|reading|husband|doubt|services|according|lay|stay|programs|anyone|average|french|spring|former|summer|bill|lot|chance|due|comes|army|actual|southern|neither|relate|rise|evening|normal|wish|visit|population|remain|measure|merely|arrange|condition|decision|account|opportunity|pass|demand|strength|window|active|deep|degree|ran|western|e|sales|continued|fight|heavy|arm|standard|generally|carry|hot|provided|serious|led|wait|hotel|opened|performance|maybe|station|changes|literature|marry|claim|works|bed|wrong|main|unit|george|hit|planning|supply|systems|add|chief|officer|soviet|pattern|stopped|price|success|lack|myself|truth|freedom|manner|quality|gun|manufacture|clearly|share|movement|length|ways|burn|forms|organization|break|somewhat|efforts|cover|meaning|progress|treatment|beautiful|placed|happy|attack|apparently|blood|groups|carried|sign|radio|dance|ive|regard|mans|train|herself|numbers|corner|reaction|immediately|language|running|recently|shake|larger|lower|machine|attempt|learn|couple|race|audience|oh|middle|brown|date|health|persons|understanding|arms|daily|suppose|additional|hospital|pool|technical|served|declare|described|current|poor|steps|reported|sun|based|produce|determined|receive|park|staff|faith|responsibility|europe|latter|british|season|equal|learned|practice|green|writing|ones|choice|fiscal|term|watch|scene|activity|product|types|ball|heat|clothe|lived|distance|parent|letters|returned|forward|obtained|offer|specific|straight|fix|division|slowly|shot|poet|seven|moving|mass|plane|proper|propose|drink|obviously|plans|whatever|afternoon|figures|parts|approve|saying|born|immediate|fame|gives|extent|justice|cars|mark|pretty|opinion|ahead|glass|refuse|enter|completely|send|desire|judge|none|waiting|popular|democratic|film|mouth|corps|importance|touch|director|ship|theres|council|effects|event|worth|existence|designed|hardly|indicated|analysis|established|products|growing|patient|rule|bridge|pain|base|check|cities|elements|leaders|discussion|limited|sit|thomas|agreement|gas|factors|marriage|easily|closed|excite|accept|applied|allow|bit|married|oil|rhode|shape|interested|strange|compose|professional|remained|news|despite|beauty|responsible|wonder|spent|tear|unless|eight|permit|covered|negro|played|id|vote|balance|charles|loss|commission|original|fair|reasons|studies|exactly|built|behavior|enemy|teeth|bank|die|james|relations|weight|prepared|related|sea|bar|warn|post|trees|official|separate|clay|sunday|raised|events|thin|dropped|cattle|invite|playing|prevent|detail|standing|grow|places|someone|bright|talking|meant|print|capital|happen|sides|everyone|facilities|filled|lip|essential|techniques|june|knows|stain|hadnt|dinner|dog|dollars|caught|shout|buy|divide|entered|chicago|speed|jazz|appoint|governor|institutions|fit|materials|sight|store|dependence|explain|gain|hed|leadership|quiet|realize|parents|communist|neighbor|round|included|kitchen|thousand|christ|isnt|radiation|broad|failure|retire|election|primary|king|books|command|edge|march|sitting|conference|bottom|lady|advise|churches|model|battle|giving|sport|address|considerable|spread|funds|trip|youth|construction|rock|regular|changed|boat|memory|successful|captain|hell|brother|murder|quick|moreover|highly|difficulty|inch|saw|clean|collect|camp|experiment|shows|authority|older|lord|variety|material|frame|distinguish|scientific|introduce|principal|jack|kill|collection|fell|entertain|pieces|management|otherwise|security|danger|entirely|civil|frequently|advertise|records|secret|title|impossible|yesterday|fast|mike|produced|favor|noted|caused|lose|purposes|solid|song|corporation|lie|winter|dress|electric|key|dry|reduce|fresh|goes|hill|names|slow|quickly|telephone|threaten|oppose|deliver|officers|expression|published|famous|pray|adopt|london|clothes|laws|citizens|announced|minute|master|sharp|advantage|greatest|relation|mary|leaving|gray|manager|animal|object|bottle|draw|honor|recognize|drop|intend|relationship|opposite|sources|poetry|ability|assistance|operating|bear|join|climb|companies|exist|fixed|gradual|possibility|hunt|spoke|satisfy|units|neck|sleep|doesnt|finished|carefully|facts|nice|practical|save|takes|allowed|wine|remind|rich|financial|dream|knife|stations|civilize|rose|cool|died|thick|imagine|literary|bind|inches|earn|familiar|seeing|distribution|marked|coffee|rules|slip|apply|page|beside|daughter|relatively|classes|explore|stated|german|musical|smile|significant|block|mix|reports|proposed|shelter|presence|affairs|named|ordinary|circumstances|mile|sweep|remains|admire|catholic|dust|operations|rain|tree|nobody|henry|robert|village|advance|offered|agree|mechanic|upper|occasion|requirements|capacity|appears|travel|article|houses|valley|beat|opening|box|evil|succeed|surround|application|slightly|remembered|interests|warm|subjects|search|presented|shoe|sweet|interesting|membership|suggest|notice|connection|extreme|exchange|flow|spend|everybody|poems|campaign|win|forced|freeze|nine|eat|newspaper|please|escape|lives|swim|file|wind|provides|shop|apartment|fashion|reasonable|created|germany|watched|cells|session|somehow|fully|whose|teacher|raise|recognized|unity|providence|reference|explained|twenty|russian|features|shoulder|sir|forest|studied|sam|signal|chair|reduced|procedure|forth|limit|disturb|universe|mentioned|pick|reality|differences|soft|traditional|mission|flat|looks|picked|weather|smaller|leg|chairman|ancient|narrow|fellow|twist|belief|excellent|rights|vocational|laid|politics|fill|response|struggle|disappear|prove|duty|follows|editor|welcome|anode|possess|hearing|buildings|ideal|scientist|formed|watching|circle|ought|garden|library|accuse|message|slight|junior|knock|empty|protection|treated|birth|expressed|planned|choose|confuse|virginia|killed|frighten|stayed|worry|surprise|aside|photograph|removed|turning|jr|pull|personnel|agency|pointed|speech|listen|november|sample|louis|motor|selected|berlin|claims|spot|strike|increasing|exercise|handle|hole|leader|baby|ride|avoid|cross|twice|commercial|failed|prompt|fat|fourth|visitor|interior|jewish|wing|desk|faculty|forget|operate|stair|besides|relief|standards|france|perfect|pour|nevertheless|brief|jones|kick|attend|plus|solution|wage|individuals|powers|minister|taste|discovered|pulled|hire|writer|verb|preach|friendly|observed|fan|connect|fig|count|egg|items|mention|texas|calculate|platform|drag|mere|tomorrow|faces|pure|fighting|resources|increases|assumed|broke|coast|strict|whom|russia|qualify|morgan|victory|fields|pleasure|contain|fold|review|april|teach|richard|whisper|chosen|metal|principles|competition|railroad|safe|proved|carrying|horses|kiss|mercer|wheel|sail|wants|compared|relieve|approximately|wood|historical|persuade|smiled|crowd|motion|shore|suit|calls|seat|deserve|san|snow|double|educational|neighborhood|relative|teachers|independent|puzzle|nose|dogs|waited|naturally|stone|origin|rome|wild|scale|tremble|drawn|guess|communism|absence|roof|sections|sky|walls|aircraft|complain|independence|busy|elect|revolution|roar|willing|league|mine|nurse|liberal|completed|poem|dollar|ordered|levels|ton|settled|allowance|bitter|realized|lets|moon|sensitive|servant|hunger|china|sale|appearance|lips|policies|actions|strengthen|monday|onto|directed|leading|machinery|theater|paris|frank|somewhere|statements|mill|projects|starting|hat|ruin|depend|stands|signs|families|stir|khrushchev|largely|punish|drew|breathe|amuse|characteristic|electronic|pale|pictures|destroy|expense|somebody|completion|disappoint|fifty|found|soil|flame|enjoy|bless|emotional|promise|shed|wave|commerce|jury|bay|tempt|correct|asking|content|estimated|conscious|shine|teaching|catch|dish|saturday|greet|background|flood|insect|worse|yellow|occurred|afraid|ceremony|decrease|trust|yourself|legs|youve|communication|describe|sincere|decide|leaf|encourage|rub|declared|cry|bite|july|lung|significance|helped|gross|apart|disease|issues|scratch|dictionary|risk|broadcast|drum|representative|uncle|cutting|jesus|neglect|depth|substantial|gets|adventure|beg|entrance|plays|throw|ends|arts|alive|confidence|intellectual|cheer|properties|experiments|nut|plenty|beneath|closely|description|melt|swear|tall|loose|area|bury|measured|request|ourselves|stream|wipe|band|fingers|creature|hanover|attorney|load|passing|billion|earnest|discussed|translate|achievement|headquarters|inquiry|rapidly|express|hesitate|guard|jobs|borrow|owe|phil|california|ambition|supposed|lake|theyre|slope|typical|spite|wore|dear|employees|map|pair|spin|ones|praise|imagination|hung|instrument|plow|holding|objects|straighten|dominant|scarce|ring|matters|creep|plain|resolution|credit|period|improve|maintenance|seize|laos|well|dozen|located|dig|towards|curse|major|breath|weigh|comfort|federal|guests|priest|sell|bodies|female|primarily|cousin|grew|spiritual|dine|engine|politician|custom|educate|individual|job|tom|cook|grass|mail|salesman|nail|tap|wet|bedroom|sufficient|chest|dramatic|silence|behave|breakfast|sudden|passage|scatter|objection|unusual|argument|policy|powerful|throat|formal|rapid|parker|wrap|luck|grind|rifle|highest|loan|represent|skill|spell|broken|arch|angle|sick|swell|blind|contemporary|engineer|military|boundary|location|homes|boil|officials|operator|senate|lend)$/
function KeyBindings($root, reader, hoverBox){
  var obj = this;
  obj.init = function(config){
    var bindings = { 75 : "prev", 74 : "next", 80 : "togglePause"
                   , 76 : "slowDown", 72: "speedUp", 27: "close"};
    $(document).keyup(function(e){
      var method = bindings[e.keyCode];
      if(typeof(reader[method]) == "function"){
        reader[method]();
        hoverBox.updateSettings();
      }
      if(typeof(hoverBox[method]) == "function"){
        hoverBox[method]();
      }
    }); 
  }
}
function SpeedReader($root, sentenceClass, emit, config){
  var obj = this;
  var sentences;
  var pos;
  var nodeReader;
  var sentenceStartedAt = 0;
  var paused = true;

  function init(){
    sentences = $("."+sentenceClass);
    pos = 0;
    nodeReader = new NodeReader(config, emit, obj.next);
  }

  obj.read = function(start){
    pos = sentences.index(start)
    paused = false;
    sentenceStartedAt = new Date().getTime();
    nodeReader.ramp(config.speed * .5, 500);
    nodeReader.read($(start), true);
  };

  obj.togglePause = function(){
    obj[paused ? "resume" : "pause"]();
  }

  obj.speedUp = function(){
    config.speed += 50;
  }

  obj.slowDown = function(){
    config.speed -= 50;
  }

  obj.pause = function(){
    paused = true;
    nodeReader.pause();
  };

  obj.resume = function(){
    paused = false;
    nodeReader.resume();
  };

  obj.stop = function(){
    paused = true;
    nodeReader.stop();
  };

  obj.next = function(){
    pos++;
    var next = sentences.eq(pos);
    sentenceStartedAt = new Date().getTime();
    if(next.size() > 0){
      nodeReader.ramp(config.speed * .5, 500)
      nodeReader.read(next);
    }
  };

  obj.prev = function(){
    var now = new Date().getTime();
    if(now - sentenceStartedAt < 800){
      pos--;
    }
    sentenceStartedAt = now;
    var prev = sentences.eq(pos);
    if(prev.size() > 0){
      nodeReader.ramp(config.speed * .5, 500)
      nodeReader.read(prev);
    }
  };
  init();
}

function NodeReader(config, emit, done){
  var obj = this;
  var mul;
  var text, $node, pos;
  var loopTimer;
  var paused = true;
  var rampInterval;
  var rampWPMInitial;
  var rampStartedAt;
  var nodeWeight = 0;

  function delay(weight){
    var currentSpeed = config.speed;
    if(rampInterval && rampStartedAt && rampWPMInitial){
      var now = new Date().getTime();
      var completion = Math.min(1, (now - rampStartedAt) / rampInterval);
       currentSpeed = config.speed * completion + rampWPMInitial * (1-completion);
    }
    var delay;
    if(config.weighted){
      delay = weight * 3800.0 / currentSpeed;
    }else{
      delay = 60000 / currentSpeed;
    }
    return delay;
  }

  function calculateNodeWeight($node){
    $heading = $node.closest("h1,h2,h3,h4,h5,h6");
    if($heading.size() > 0){
      var level = parseInt($heading[0].nodeName[1])||5;
      return 18 - level * 2 
    }else{
      return 0;
    }
  }

  obj.ramp = function(fromWPM, interval){
    rampStartedAt = new Date().getTime();
    rampInterval = interval;
    rampWPMInitial = fromWPM;
  }
  
  obj.read = function($newNode, unpause){
    clear();
    clearTimeout(loopTimer);
    if(unpause){
      paused = false;
    }

    $node = $newNode; 
    nodeWeight = calculateNodeWeight($node);
    text = $node.html().match(/(^\s+)?\S+(\s+|$)/g);
    if(!text){
      done();
      return;
    }
    pos = 0;

    loop();
  };

  obj.pause = function(){
    paused = true;
    clearTimeout(loopTimer);
  }

  obj.resume = function(){
    paused = false;
    clearTimeout(loopTimer);
    loop();
  }

  obj.stop = function(){
    obj.pause();
    clear();
  }

  function clear(){
    if($node && text){
      $node.html(text.join(""));    
    }
  }

  function countWords(chunk){
    var matches = chunk.match(/[\w'".]+(\W+|$)/g)
    return matches ? matches.length : 1;
  }

  function calculateWeight(word, text, pos){
    var weight = 7 * countWords(word);
    weight += nodeWeight;
    weight += 3 * countSyllables(word);
    if(!isCommonWord(word)){
      weight += 8;
    }
    if(!startOfSentence(text,pos)){
      if(word.match(/^[A-Z]/)){
        weight += 4;
      } 
    }
    return weight;
  }


  function loop(){
    if(paused){
      return;
    }
    if(pos >= text.length){
      clear();
      done();
      return;
    }

    var oldPos = pos;
    var chunk = "";
    var weight = 0;
    var numWords = 0;
    for(pos; pos < text.length; pos++){
      var word = text[pos];
      if(chunk.length > 0){
        if(chunk.length + word.length > config.maxLetters || numWords + 1 > config.maxWords){
          break;
        }
        if(word.match(/^\s*[A-Z]/) && !chunk.match(/^\s*[A-Z]/)){
          break;
        }
        if(!chunk.match(/\w\s*$/)){
          break;
        }
      }
      numWords += 1; 
      chunk += word;
      weight += calculateWeight(word, text, pos);
    } 


    var newText = text.slice(0,oldPos).join("") 
                + "<span id='speed-highlight' style='color:#ff0000'>" + chunk + "</span>" 
                + text.slice(pos).join("");
    $node.html(newText);
    var $highlight = $("#speed-highlight");
    var windowPos = $highlight.position().top - $(window).scrollTop(); 
    if(config.autoscroll && windowPos > $(window).height() * .9){
      window.scrollTo($(window).scrollLeft(), $("#speed-highlight").position().top - 50 - $(window).height() / 8);
    }

    var t = delay(weight)
    emit(chunk, t, nodeWeight);
    loopTimer = setTimeout(loop,t);
  }

  var startOfSentence = function(words,i){
    if(i==0){
      return true;
    }else{
      return words[i-1].match(/[.?!]$/) != null;
    }
  }
  
  var isCommonWord = function(word){
    word = word.toLowerCase();
    word = word.replace(/[^a-z]/,'');
    return word.match(commonWordsPattern) != null;
  }
  
  var countSyllables = function(){
    var sylMods = [[-1, /cial|tia|cius|cious|giu|.ion|iou|sia$|.ely$/g]
                  ,[ 1, /ia|riet|dien|iu|io|ii|[aeiouym]bl$|[aeiou]{3}|^mc|ism$|([^aeiouy])\1$|[^l]lien|^coa[dglx].|[^gq]ua[^auieo]|dnt$/g]
                  ,[ 2, /[\[\]\d$]/g]
                  ,[ 4, /[.?!;:]/g]
                  ,[ 2, /[,"()]/g]
                  ];
    return function(word){
      var syl = 0;
      word = word.toLowerCase();
      word = word.replace("'",'');
      word = word.replace(/e$/,'');
      var scrugg  = word.split(/[^-aeiouy]/);
      for(var i=0; i<scrugg.length; i++){
        if(scrugg[i].length > 0){
          syl++;
        }
      }
      for(var x=0; x<sylMods.length; x++){
        var mod = sylMods[x];
        matches = word.match(mod[1]);
        syl += mod[0] * (matches == null ? 0 : matches.length)
      }
  
      
      return syl;
    }
  }();
  init();
}
function WordIterator($root){
  var $domIterator = new DomIterator($root, function(){
    this.nodeType == 3;
  });

  var wordPos = 0; 
  var words = [];

  this.next() = function(){
    wordPos += 1;
    while(words.length <= wordPos){
      var node = $domIterator.prev();
      if(!node){
        return null;
      }else{
        words = node.text().split(" ");
        wordPos = 0;
      }
    }
    return words[wordPos]
  }

  this.prev() = function(){
    wordPos -= 1;
    while(words.length <= 0 || wordPos < 0){
      var node = $domIterator.prev();
      if(!node){
        return null;
      }else{
        words = $domIterator.prev().text().split(" ");
        wordPos = 0;
      }
    }
    return words[wordPos]
  } 
}
function HoverBox(config){
  var $box = $( "<div class='speed-box'><div class='sb-content'>"
              + "<div class='sb-opts-col'><div id='sb-opts'></div></div>"
              + "<div class='sb-word-col'><div id='sb-words'>(click anywhere to begin)</div></div>"
              + "</div></div>");
  var $words = $box.find("#sb-words");
  //var $wpm = $box.find("#sb-wpm");
  var wpmCalculator = new WPMCalculator(500);
  var flashTimer;
  $box.prependTo(document.body)
  $(document.body).css("padding-top", "50px");
  var optsPane = new OptionsPane($(".sb-opts-col"), config);

  this.text = function(word, delay, nodeWeight){
    //$wpm.html(Math.floor(wpmCalculator.read(word)));
    $words.html(nodeWeight ? "<em>"+word+"</em>" : word);
    clearTimeout(flashTimer);
    if(config.flickerText){
      flashTimer = setTimeout(function(){
        $words.html("");
      }, delay * .8);
    }
  };

  this.updateSettings = function(){
    optsPane.updateSettings();
  };

  this.close = function(){
    console.log("closing");
    optsPane.hide();
    $("#sb-save-pane").hide();
  };
}

function OptionsPane($trigger, config){
  var obj = this;
  var $pane = $("#sb-opts-pane");
  $pane.hide();
  var hidden = true;
  var hideTimer;

  $trigger.click(function(event){
    hidden ? obj.show() : obj.hide();
    event.stopPropagation();
  });

  $(document.body).click(function(){
    obj.hide();
  });

  $pane.click(function(event){
    event.stopPropagation();
  });

  $pane.hover(hoverIn, hoverOut);
  $trigger.hover(hoverIn, hoverOut);

  function hoverIn(){
    clearTimeout(hideTimer);
  }
  function hoverOut(){
    hideTimer = setTimeout(function(){
      obj.hide();
    }, 300);
  }

  $pane.find("input[type='text']").each(function(idx, el){
    $el = $(el);
    var name = $el.attr('name');
    if(name in config){
      $el.attr('value', config[name]);
    }
  }).change(function(){
    var val = parseInt($(this).val());
    if(val){
      config[$(this).attr('name')] = val;
    }
  });

  $pane.find("input[type='checkbox']").change(function(){
    config[$(this).attr('name')] = $(this).is(":checked");
  });

  $pane.find("#sb-save-settings").click(function(){
    $savePane = $("#sb-save-pane");
    $savePane.show();
    $("#sb-save-close").click(function(){
      console.log("clicked");
      $savePane.hide();
    });
    var script = sbBookmarkletteJS.replace("__REPLACE_WITH_CONFIG__", $.toJSON(config)); 
    console.log(script);
    $("#sb-bookmarklette").attr("href", script);
    obj.hide();
  });

  obj.updateSettings = function updateSettings(){
    $pane.find("input[type='text']").each(function(idx, el){
      $el = $(el);
      var name = $el.attr('name');
      if(name in config){
        $el.attr('value', config[name]);
      }
    });

    $pane.find("input[type='checkbox']").each(function(idx, el){
      $el = $(el);
      var name = $el.attr('name');
      if(name in config){
        $el.attr('checked', config[name]);
      }
    });
  };

  obj.hide = function hide(){
    hidden = true;
    $pane.hide();
  }
  obj.show = function show(){
    obj.updateSettings();
    hidden = false;
    $pane.show();
  }
}

function WPMCalculator(historySize){
  var obj = this;
  var recentWordCounts = [];
  var recentIntervals = [];
  var totalWordCount = 0;
  var totalTime = 0;
  var lastTimestamp = 0;

  obj.read = function(words){
    var now = new Date().getTime();
    var match = words.match(/\w+(\W+|$)/g);
    var wordCount = match ? match.length : 0;
    recentWordCounts.unshift(wordCount);
    totalWordCount += wordCount;
    if(lastTimestamp){
      var interval = Math.min(1000, now - lastTimestamp);
      recentIntervals.unshift(interval);
      totalTime += interval;
    }
    lastTimestamp = now;

    if(recentIntervals.length > historySize){
      totalTime -= recentIntervals.pop();
    } 
    if(recentWordCounts.length > historySize){
      totalWordCount -= recentWordCounts.pop();
    } 
    if(totalTime > 0){
      return totalWordCount / (totalTime / 60 / 1000);
    }else{
      return 0;
    }
  }
}

function DocPreparer($root){
  this.sentenceClass = function(className){
    wrapSentences($root, "<span class='" + className + "'>", "</span>");
  };

  function escapeHTML(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function wrapSentences($root, before, after){
    iterTree($(document.body), function($el){
      replaceTextNodes($el, function($textNode){
        var sentences = $textNode.text().match(/[^.!?]+([.!?]["â€]?\s*|$)/g);
        if(sentences != null){
          return $.map(sentences, function(sentence){
            if(sentence.match(/\S+/)){
              return before + escapeHTML(sentence) + after;
            }else{
              return sentence;
            }
          }).join("");
        }else{
          return $textNode.text();
        }
      });
    });
  }
  
  function iterTree($root,f){
    var $children = $root.children();
    f($root);
    $children.each(function(idx, el){
      iterTree($(el),f);
    });
  }
  
  function replaceTextNodes($el,f){
    if($el[0] == undefined || $el[0].childNodes == undefined){
      return;
    }
    var children = Array.prototype.slice.call($el[0].childNodes);
    $.map(children, function(node,idx){
      if(node && node.nodeType == 3){
        $(node).replaceWith(f($(node)));
      }
    });
  }
}
function init(config){
  return function(){
    var sentenceClass = "speed-sentence";
    new DocPreparer($root).sentenceClass(sentenceClass);
    $(document.body).append(sbHtml);
    var $root = $(document.body);
    config = config || {};
    var defaults = { "speed": 400
                   , "weighted": true
                   , "flickerText": true
                   , "autoscroll": true
                   , "maxLetters": 20
                   , "maxWords": 1
                   };
    for(key in defaults){
      if(defaults.hasOwnProperty(key) && !config.hasOwnProperty(key)){
        config[key] = defaults[key];
      }
    }
    var hoverBox = new HoverBox(config);
    var reader = new SpeedReader($root, sentenceClass, hoverBox.text, config);
    var keybindings = new KeyBindings($root, reader, hoverBox);
    keybindings.init({});
    $(".speed-sentence").click(function(){
      reader.read(this);
    });
  }
}
$(document).ready(init(config));
})(window.speedReaderJQuery, window.speedReaderConfig);
var mpq=[];mpq.push(["init","ad678e5944a591b975e9b890593c4789"]);(function(){var b,a,e,d,c;b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=(document.location.protocol==="https:"?"https:":"http:")+"//api.mixpanel.com/site_media/js/api/mixpanel.js";a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a);e=function(f){return function(){mpq.push([f].concat(Array.prototype.slice.call(arguments,0)))}};d=["init","track","track_links","track_forms","register","register_once","identify","name_tag","set_config"];for(c=0;c<d.length;c++){mpq[d[c]]=e(d[c])}})();
mpq.track("ff-loaded");

