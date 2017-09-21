// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){function a(){f||ASSERT(u,l,c,h,d,v)&&(g=""+u=="American"?"AA":null,T.push({airlineName:u,airlineCode:g,flightNumber:l,departureAirport:c,departureTime:h,arrivalAirport:d,arrivalTime:v,passengers:N}),u=g=l=c=h=d=v=b=null,N={}),f=!1}if(!e||!r||!t)return CONTINUE;var i=Scanner.fromMessage(e);i.setLocale(r);var n,p,m,o,s,u,g,l,c,h,d,v,b,C,T=[],N={};n=i.getSpan().nextText(t.reservationIdPrefix).parentTag("td4").tagContents().innerCapture(regExpFormatted(/\b\1: (.*)/,t.reservationIdPrefix),1);var y=i.getSpan().nextTag("table5").allInnerTagsFiltered("td5"),f=!0;for(m=0;y.length>m;m++)y[m].innerCapture(t.dateRegex)&&y[m+1]?(a(),s=y[m+1].innerDate()):y[m].innerCapture(t.flightRegex)&&y[m+2]?(u=y[m+1],l=y[m+2]):y[m].innerCapture(t.departureRegex)&&y[m+2]?(c=y[m+1],h=combineDateAndTime(s,y[m+2].innerDate())):y[m].innerCapture(t.arrivalRegex)&&y[m+2]?(d=y[m+1],v=combineDateAndTime(s,y[m+2])):y[m].innerCapture(t.seatRegex)&&y[m+1]?(o=""+y[m-1],C=y[m+3]&&y[m+3].innerCapture(/^FF#:\s+($<number>\w+)/,1),N[o]={name:o,seat:y[m].innerCapture(concatRegExp(t.seatRegex,/\s+(.*)/),1),seatingType:y[m+1],programName:"Frequent Flyer",membershipNumber:C}):y[m].innerCapture(t.nameRegex)&&y[m+2]&&(o=y[m+1],N[o]||(N[o]={name:o,seatingType:y[m+2]}));a();var x=[];for(m=0;T.length>m;m++)for(var A=T[m],F=Object.keys(A.passengers),R=0;F.length>R;R++){var S=A.passengers[F[R]],k={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:A.airlineName,airlineCode:A.airlineCode,flightNumber:A.flightNumber,departureAirportFuzzy:A.departureAirport,departureAirportCode:A.departureCode,departureTime:A.departureTime,arrivalAirportFuzzy:A.arrivalAirport,arrivalAirportCode:A.arrivalCode,arrivalTime:A.arrivalTime},underName:{"@type":"http://schema.org/Person",name:S.name},checkinUrl:p,reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:S.totalPrice,priceCurrency:S.priceCurrency,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:S.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatingType:S.seatingType,seatNumber:S.seat}}};valid(S.membershipNumber)&&(k.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:S.membershipNumber,programName:S.programName}),x.push(k)}return x.length?x:void 0}}).call();
