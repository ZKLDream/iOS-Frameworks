// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("t-way_air-cancellation-2016-ko",function(e){return/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5 \uc608\uc57d\ucde8\uc18c\]?/.test(e.subject)},function(e){if(/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5 \uc608\uc57d\ucde8\uc18c\]?/.test(e.subject)){var t="ko_KR",r={};r.reservationIdRegExp=/\uc608\uc57d\ubc88\ud638\s*:\s*(\w+)/,r.underNamePrefix="\uc2b9\uac1d\uba85",r.pricePrefix="\uacb0\uc81c\uae08\uc561";var a=loadHelper("twayair.com-cancellation-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/583/584","SGf82ee394"),new ReverseTemplate("t-way_air-confirmation-2016-ko",function(e){return/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5 \uc608\uc57d(\uc815\ubcf4|\ubcc0\uacbd)\]?/.test(e.subject)},function(e){if(/^\[\ud2f0\uc6e8\uc774\ud56d\uacf5 \uc608\uc57d(\uc815\ubcf4|\ubcc0\uacbd)\]?/.test(e.subject)){var t="ko_KR",r={};r.reservationId="\uc608\uc57d\ubc88\ud638",r.nameSummary="\ud0d1\uc2b9\uc790\uc815\ubcf4",r.flightSummary="\uc5ec\uc815\uc815\ubcf4",r.airportsRegExp=/(.+)\((\w+)\)\s*-\s*(.+)\((\w+)\)/,r.timesRegExp=/(\d+:\d+)\s*-\s*(\d+:\d+)/,r.flightRegExp=/([A-Z]+)(\d+)/,r.pricePrefix="\ucd5c\uc885\uacb0\uc81c \ucd1d\uc561\uc6b4\uc784",r.seatType="\uc88c\uc11d\ub4f1\uae09",r.subjectConfirm=/\uc608\uc57d\uc815\ubcf4/,r.subjectChange=/\uc608\uc57d\ubcc0\uacbd/;var a=loadHelper("twayair.com-confirmation-2016-skeleton.js");return a(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/583/586","SG1e424d18")]);
