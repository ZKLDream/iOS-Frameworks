// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,a){var n=Scanner.fromMessage(e);n.setLocale(t);var r,s,c,o,i,p,g,m,l,h,u,T="Confirmed",x=[],f=[];return r=n.getSpan().innerCapture(RegExp("(?:"+a.personUnderNamePrefix+")\\.?\\s(.*)"),1),n.getSpan().nextText(a.ticketsBlockPrefix).parentTag("table3").allInnerTags("tr3").slice(1,-5).forEach(function(e,t){var a={},n=e.allInnerTags("td3");a.name=n[1].tagContents().innerCapture(/(.*?)\s</,1),a.url=n[1].tagContents().innerLink(),a.startDateTime=n[2].tagContents().innerDate(),a.locationName=(""+n[2].tagContents()).replace(/\n/g," ").replace(/\s+/g," ").replace(RegExp(a.startDateTime),"").trim(),x.push(a)}),[,u,h]=n.getSpan().nextText(a.priceBlockPrefix).nextText(a.pricePrefix).nextTag("td3").tagContents().innerCapture(/(\D)\s?([\d,.]+)/),x.forEach(function(e){ASSERT(e.name,e.startDateTime)&&f.push({"@context":"http://schema.org","@type":"http://schema.org/EventReservation",name:r,totalPrice:h,priceCurrency:u,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:i,ticketToken:p,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:g,seatSection:m,seatRow:l}},reservationFor:{"@type":"http://schema.org/Event",eventStatus:"http://schema.org/Event"+T,name:e.name,url:e.url,startDate:e.startDateTime,endDate:s,location:{"@type":"http://schema.org/Place",name:e.locationName,telephone:o,address:c}}})}),f.length>0?f:CONTINUE}}).call();
