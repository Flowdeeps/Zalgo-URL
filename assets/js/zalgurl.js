var zalgurl = function(){

  var win = window,
      loc = window.location,
      his = window.history,
      doc = document,
      originurl = loc.pathname,
      prot = loc.protocol,
      server = loc.hostname,
      port = loc.port,
      urllength = originurl.length,
      topChars = new Array(),
      midChars = new Array(),
      botChars = new Array(),
      j = 0;

  topChars = [
    "̍",
    "̎",
    "̄",
    "̅",
    "̿",
    "̑",
    "̆",
    "̐",
    "͒",
    "͗",
    "͑",
    "̇",
    "̈",
    "̊",
    "͂",
    "̓",
    "̈́",
    "͊",
    "͋",
    "͌",
    "̃",
    "̂",
    "̌",
    "͐",
    "̀",
    "́",
    "̋",
    "̏",
    "̒",
    "̓",
    "̔",
    "̽",
    "̉",
    "ͣ",
    "ͤ",
    "ͥ",
    "ͦ",
    "ͧ",
    "ͨ",
    "ͩ",
    "ͪ",
    "ͫ",
    "ͬ",
    "ͭ",
    "ͮ",
    "ͯ",
    "̾",
    "͛",
    "͆",
    "̚"
  ];

  midChars = [
    "̕",
    "̛",
    "̀",
    "́",
    "͘",
    "̡",
    "̢",
    "̧",
    "̨",
    "̴",
    "̵",
    "̶",
    "͜",
    "͝",
    "͞",
    "͟",
    "͠",
    "͢",
    "̸",
    "̷",
    "͡",
    "҉"
  ];

  botChars = [
    "̖",
    "̗",
    "̘",
    "̙",
    "̜",
    "̝",
    "̞",
    "̟",
    "̠",
    "̤",
    "̥",
    "̦",
    "̩",
    "̪",
    "̫",
    "̬",
    "̭",
    "̮",
    "̯",
    "̰",
    "̱",
    "̲",
    "̳",
    "̹",
    "̺",
    "̻",
    "̼",
    "ͅ",
    "͇",
    "͈",
    "͉",
    "͍",
    "͎",
    "͓",
    "͔",
    "͕",
    "͖",
    "͙",
    "͚",
    "̣"
  ];

  function randomise() {
    var value = Math.floor( Math.random( 1 ) * 1000 );
    if ( value < 999 ) {
      value = 0;
    } else {
      value = 1;
    }
    return value;
  }

  function addDiacritics( arrName ) {
    arrName = arrName;
    var diacritic = "",
        randVal = 0;
    for ( var i = 0; i < arrName.length; i = i + 1 ) {
      randVal = randomise();
      if ( randVal != 0 ) {
        diacritic = diacritic + arrName[ i ];
      }
    }
    return diacritic;
  }

  var changeURL = function() {
    var urlstring = "";
    for ( var i = 0; i < urllength; i = i + 1 ) {
      var extraChars = "";
      extraChars = extraChars + addDiacritics( topChars );
      extraChars = extraChars + addDiacritics( midChars );
      extraChars = extraChars + addDiacritics( botChars );
      urlstring = urlstring + originurl[ i ] + extraChars;
    }
    if ( urlstring != "" ) {
      his.replaceState( '', '', urlstring );
    }
    j = j + 1;
  }

  setInterval( function() {
    changeURL();
  }, 100 );

  // here we have to revert the history state to our initial value so that refresh and close work properly
  win.addEventListener( "beforeunload", function ( event ) {
    his.replaceState( '', '', originurl );
  });
  win.addEventListener( 'popstate', function( event ) {
    his.replaceState( '', '', originurl );
  });
}
