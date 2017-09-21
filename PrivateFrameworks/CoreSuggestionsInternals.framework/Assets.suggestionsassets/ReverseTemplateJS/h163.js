// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,r){var a=Scanner.fromMessage(e);a.setLocale(t);var n,i,o,g,p,m,l,d,s,u,h,c,T,C,v,x,N=[],b=[],f=[];n=a.getSpan().next(r.reservationId).parentAnyTag("td").tagContents().innerCapture(regExpFormatted(/\1\s*(.*)/i,r.reservationId),1),l=a.getSpan().next(r.pricePrefix).nextAnyTag("td").tagContents(),d=l.innerCapture(/([\d,.]+)/,1),s=l.innerCapture(/([^\d,.]+)/,1).trim();var S=a.getSpan().next(r.manageBooking).next(r.itinerary);for(u=S.withEnd(S.next(r.itineraryEnd).getStart()).allInnerTagsFiltered("td5"),h=0;u.length>h;h++)T=u[h],c={},i=T.innerCapture(/^($<airlineCode>\D+)($<flightNumber>\d+)/),c.airlineCode=i.$airlineCode,c.flightNumber=i.$flightNumber,C=T.innerCapture(/^.*\n($<airlineName>.*)\|\s+($<status>.*)/),c.airlineName=C.$airlineName.trim(),c.airlineStatus=C.$status,o=c.airlineName.nextTag("td8").tagContents(),p=o.nextTag("td8").tagContents(),c.departureTime=combineDateAndTime(o,p),c.departureAirport=p.nextTag("td8").nextTag("td8").tagContents(),g=c.departureAirport.nextTag("table8").nextTag("td8").tagContents(),m=g.nextTag("td8").tagContents(),c.arrivalTime=combineDateAndTime(g,m),c.arrivalAirport=m.nextTag("td8").nextTag("td8").tagContents(),ASSERT(c.airlineName,c.airlineCode,c.flightNumber,c.departureTime,c.departureAirport,c.arrivalTime,c.arrivalAirport)&&N.push(c);for(v=a.getSpan().next(r.ticketNumberPrefix).collapseToEnd().withEnd(a.getSpan().next(r.passengerPostFix).getStart()).allInnerTagsFiltered("td5"),h=0;v.length>h;h++)x=v[h].tagContents().innerCapture(/($<ticketNumber>.*)\s+\(($<name>.*)\)/),f.push({name:x.$name,ticketNumber:x.$ticketNumber});for(0===f.length&&f.push({name:a.getSpan().innerCapture(r.nameCapture,1)}),h=0;N.length>h;h++){c=N[h];for(var A=0;f.length>A;A++){x=f[A];var y={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:c.airlineName,airlineCode:c.airlineCode,flightNumber:c.flightNumber,departureAirportFuzzy:c.departureAirport,departureTime:c.departureTime,arrivalAirportFuzzy:c.arrivalAirport,arrivalTime:c.arrivalTime},underName:{"@type":"http://schema.org/Person",name:x.name},reservationId:n,reservationStatus:"http://schema.org/ReservationPending",totalPrice:d,priceCurrency:s,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:x.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat"}}};b.push(y)}}return b.length?b:void 0}}).call();
