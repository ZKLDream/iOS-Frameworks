// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jejuair.net-confirmation-ko",function(e){return/\uc81c\uc8fc\ud56d\uacf5 \uc608\uc57d\/\ubc1c\uad8c \ud655\uc778\uc11c/.test(e.subject)},function(e){if(/\uc81c\uc8fc\ud56d\uacf5 \uc608\uc57d\/\ubc1c\uad8c \ud655\uc778\uc11c/.test(e.subject)){var r="ko_KR",t={};t.reservationId_prefix="\uc608\uc57d\ubc88\ud638",t.passenger="\ud0d1\uc2b9\uac1d \ubc0f \ud56d\uacf5\uad8c \uc815\ubcf4",t.passengerRegexp="/\ud0d1\uc2b9\uac1d \ubc0f \ud56d\uacf5\uad8c \uc815\ubcf4/",t.flightSummary="\ud56d\uacf5 \uc77c\uc815",t.flightExit=/\uacb0\uc81c\ub0b4\uc5ed/,t.flightNumber="\ud3b8\uba85",t.flightCurrency=/\uacb0\uc81c\ub0b4\uc5ed \(\ud1b5\ud654 : (.*)\)/,t.flightCurrency_alt=/\ud1b5\ud654 : ([A-z]{3})/,t.flight_prefix=/\uad6c\uac04/,t.totalPrice_prefix=/([,\d]+)/,t.firstFlight=/\uad6c\uac041/,t.oneFlight=/^\uad6c\uac04/;var i=loadHelper("jejuair.net-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/474/475","SG6f1b8214"),new ReverseTemplate("jejuair.net-receipt-ko",function(e){return/PASSENGER RESERVATION/.test(e.subject)},function(e){if(/PASSENGER RESERVATION/.test(e.subject)){var r="ko_KR",t={};t.underName_prefix=/Passenger Name/,t.reservationId_prefix=/Booking Reference/,t.ticketNumber_prefix=/Ticket Number/,t.itinerary_prefix=/Itinerary/;var i=loadHelper("jejuair.net-receipt-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/474/476","SG99956bd4")]);
