// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale("en_US");var r,o,i,g,s,p,c,d,h,m,x,T,u,y,l;m=a.getSpan().nextText("Showtime & Theater Details").nextAnyTag("table"),p=m.innerRegExp(/Movie ?:/).nextAnyTag("td").tagContents(),d=m.innerRegExp(/Date ?:/).nextAnyTag("td").innerDate(),h=m.innerRegExp(/Time ?:/).nextAnyTag("td").innerDate(),T=combineDateAndTime(d,h),s=m.innerText("Quantity:").nextAnyTag("td").tagContents(),x=a.getDetachedSpan(""+m.innerText("Where:").nextAnyTag("td").tagContents()),l=getFuzzyAddress(x),y=x.nextPhoneNumber(),m=a.getSpan().innerText("Where:").nextAnyTag("td").tagContents().innerCapture(/\b($<place>.*)\s($<address>[^]+)\nPhone/);var S=m?m.$place:null;return l=m&&not(l)?m.$address.trim():l,i=a.getSpan().nextText("Confirmation Number").nextAnyTag("td").tagContents(),g=a.getSpan().innerCapture(/\bView your ticket confirmation page:(?:.*)<(.*)>/,1),r=a.getSpan().nextText("Total Order Amount").nextAnyTag("td").tagContents().innerCapture(/([\d,.]+)/,1),ASSERT(T,p)?[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",totalPrice:r,priceCurrency:o,reservedTicket:{"@type":"http://schema.org/Ticket",ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:s},ticketToken:g,ticketNumber:i},reservationFor:{"@type":"http://schema.org/MovieShowing",eventStatus:"http://schema.org/EventConfirmed",url:c,startDate:T,endDate:u,movie:{"@type":"http://schema.org/Movie",name:p},location:{"@type":"http://schema.org/Place",name:S,telephone:y,address:l}}}]:void 0}}).call();
