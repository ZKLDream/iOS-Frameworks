// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("agoda.com-cancellation-ko",function(e){return/^\uc608\uc57d .+ \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4/.test(e.subject)},function(e){if(!/^\uc608\uc57d .+ \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4/.test(e.subject))return CONTINUE;var t="ko_KR",a={firstName:"\ud22c\uc219\uac1d \uc774\ub984",lastName:"\ud22c\uc219\uac1d \uc131",reservationId:"\uc608\uc57d \uc544\uc774\ub514(ID)",hotelName:"\ud638\ud154\uba85",checkInDate:"\uccb4\ud06c\uc778",checkOutDate:"\uccb4\ud06c\uc544\uc6c3",originalBookingDetails:"\uc608\uc57d \uc138\ubd80\uc0ac\ud56d",cancellationDetails:"\ucde8\uc18c \uc138\ubd80\uc0ac\ud56d"};return loadHelper("agoda.com-cancellation-skeleton.js")(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/673/678","SG7496c745")]);
