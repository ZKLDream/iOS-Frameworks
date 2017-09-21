// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n,i,o,p,s,g,l,u,m,h,c,d,C,v,f,D,T,y,b,x,S,A,E,F,N=[],R=[],k="5";for(n=a.getSpan(),r.subjectConfirm.test(e.subject)?k="5":r.subjectChange.test(e.subject)&&(k="4"),b=n.innerCapture(regExpFormatted(/\1\s*:\s*(\w+)/,r.reservationId),1),x=n.innerCapture(regExpFormatted(/\1\s*([\d,.]+)/,r.pricePrefix),1),x&&(S="KRW"),T=n.innerCapture(regExpFormatted(/\1\s*:\s*(\w+)/,r.seatType),1),E=n.next(r.nameSummary).nextTag("table"+k).allInnerTags("tr"+k),A=1;E.length>A;A++)F=E[A].allInnerTags("td"+k),8===F.length&&(i=F[0].tagContents(),y=F[1].tagContents(),i.getLength()&&(i=(""+i).replace(/\n/,""),R.push({name:i,ticketNumber:y})));for(E=n.next(r.flightSummary).nextTag("table"+k).allInnerTags("tr"+k),A=1;E.length>A;A++)F=E[A].allInnerTags("td"+k),6===F.length&&(m=""+F[0].innerDate(),g=F[1].tagContents().innerCapture(r.airportsRegExp),l=F[2].tagContents().innerCapture(r.timesRegExp),o=F[3].tagContents().innerCapture(r.flightRegExp),g&&5===g.length&&([,c,d,f,D]=g),l&&3===l.length&&([,h,v]=l,u=a.getDetachedSpan(m+" "+h).innerDate(),C=a.getDetachedSpan(m+" "+v).innerDate(),Date.parse(a.getDateDD(C).iso8601)<Date.parse(a.getDateDD(u).iso8601)&&(C=modifyDate(C,1))),o&&3===o.length&&([,s,p]=o),ASSERT(s,p,u)&&N.push({departureAirport:c,departureCode:d,arrivalAirport:f,arrivalCode:D,departureDateTime:u,arrivalDateTime:C,airlineCode:s,flightNumber:p}));var z=[];return N.forEach(function(e){R.forEach(function(t){var r={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:e.airlineName,airlineCode:e.airlineCode,flightNumber:e.flightNumber,departureAirportFuzzy:e.departureAirport,departureAirportCode:e.departureCode,departureTime:e.departureDateTime,arrivalAirportFuzzy:e.arrivalAirport,arrivalAirportCode:e.arrivalCode,arrivalTime:e.arrivalDateTime},underName:{"@type":"http://schema.org/Person",name:t.name},reservationId:b,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:x,priceCurrency:S,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:t.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatingType:T}}};z.push(r)})}),z.length?z:void 0}}).call();
