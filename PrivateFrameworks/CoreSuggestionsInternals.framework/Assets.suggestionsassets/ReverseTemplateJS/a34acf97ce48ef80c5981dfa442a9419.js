// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jinair.com-confirmation-ko",function(e){return/JIN AIR \uad6c\ub9e4\ud655\uc778\uc99d/.test(e.subject)},function(e){if(/JIN AIR \uad6c\ub9e4\ud655\uc778\uc99d/.test(e.subject)){var t="ko_KR",r={};r.reservationId_prefix="\uc608\uc57d\ubc88\ud638",r.passenger="\uc2b9\uac1d\uc774\ub984",r.flightSummary="\uc5ec\uc815",r.flightExit=/.*\uc5ec\uc815/,r.flightCurrency=/\ucd1d \uc9c0\ubd88 \uae08\uc561/,r.oneFlight=/(.*)\s+(\d+\/\d+)\(.*\)\s*(\d+\:\d+).*/;var i=loadHelper("jinair.com-confirmation-skeleton.js");return i(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/484/485","SG9aacd4ec")]);
