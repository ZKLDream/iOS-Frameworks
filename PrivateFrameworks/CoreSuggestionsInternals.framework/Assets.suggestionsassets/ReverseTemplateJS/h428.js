// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){if(!e||!r||!t)return CONTINUE;var a=Scanner.fromMessage(e);a.setLocale(r);var n,i,m,p,o,s,g,l,u,c,d,h,b,N,v,C,x,T=[],f={},y=a.getSpan().nextText(t.passenger);n=y.nextTag("td4").tagContents().innerCapture(regExpFormatted(/\1: (.*)/,t.traveler),1),g=y.nextTag("td4").nextTag("td4").tagContents().innerCapture(regExpFormatted(/\1: (\d+)/,t.ticketNo),1),p=y.nextTag("td3").tagContents().innerCapture(regExpFormatted(/\1: <.*> (\d+)/,t.reservationId),1),f[""+n]={name:n,totalPrice:i,priceCurrency:m,seats:{},seatingType:{},programName:l?l.$name:null,membershipNumber:l?l.$number:null,ticketNumber:g},s=a.getSpan().nextText(t.itineraryLabel),o=t.cancelled.test(e.plain)?"Cancelled":"Confirmed";var F=s.nextDate();for(s=s.nextText(t.confirmationLabel).parentTag("table3");s.nextText(t.confirmationLabel).exists();)u=s.nextTag("table4"),u=u.tagContents().innerCapture(regExpFormatted(/(?:\1:)?\s*($<airlineName>.*?) Flight ($<flightNumber>\d+)/,t.cancelledLabel)),c=u.$airlineName,d=u.$flightNumber,g=s.innerCapture(regExpFormatted(/\1: (\w+)/,t.confirmationLabel),1),h=s.nextDate(),N=h.nextTag("td4").tagContents().innerCapture(/- (\w+)/,1),v=h.nextDate(),x=v.nextTag("td4").tagContents().innerCapture(/- (\w+)/,1),b=a.getDetachedSpan(""+F+" "+h).innerDate(),C=a.getDetachedSpan(""+F+" "+v).innerDate(),ASSERT(c,d,N,b,x,C)&&T.push({airlineName:c,flightNumber:d,reservationId:p,reservationStatus:o,departureCode:N,departureTime:b,arrivalCode:x,arrivalTime:C,ticketNumber:g,passengers:f}),s=s.nextTag("table3");for(var k,S=[],A=0;T.length>A;A++){k=T[A];for(var D=Object.keys(k.passengers),E=0;D.length>E;E++){var z=k.passengers[D[E]],L={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:k.airlineName,airlineCode:k.airlineCode,flightNumber:k.flightNumber,departureAirportFuzzy:k.departureAirport,departureAirportCode:k.departureCode,departureTime:k.departureTime,arrivalAirportFuzzy:k.arrivalAirport,arrivalAirportCode:k.arrivalCode,arrivalTime:k.arrivalTime},underName:{"@type":"http://schema.org/Person",name:z.name},checkinUrl:k.checkinUrl,reservationId:k.reservationId,reservationStatus:"http://schema.org/Reservation"+o,totalPrice:z.totalPrice,priceCurrency:z.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:z.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:z.seats[k.flightNumber],seatingType:z.seatingType[k.flightNumber]}}};valid(z.membershipNumber,z.programName)&&(L.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:z.membershipNumber,programName:z.programName}),S.push(L)}}return S.length?S:void 0}}).call();
