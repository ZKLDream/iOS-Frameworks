// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("jet2.com-confirmation-en",function(e){return/Booking Confirmation: .+/.test(e.subject)},function(e){if(!/Booking Confirmation: .+/.test(e.subject))return CONTINUE;var r="en_US",t={};t.reservationIdRegExp=/Your booking reference is: ([0-9A-Z]+)/,t.flightNumberPrefix="Flight:",t.departureTimePrefix="Departs:",t.arrivalTimePrefix="Arrives:",t.passengersPrefix="Passengers",t.airportsRegExp=/(.+?)\sto\s(.+)/;var a=Scanner.fromMessage(e);a.setLocale(r);var n,i,o,s,p,u,l,g,m,c,f=a.getSpan(),h=[],T=[],d=[];if(i=f.innerCapture(t.reservationIdRegExp,1),n=f.nextText(t.flightNumberPrefix).parentAnyTag("tr").allInnerTags("td2").map(function(e){return e.tagContents()}).filter(function(e){return(""+e).length>0}),n&&4===n.length){var v,x,C;[v,s,x,C]=n,[,o,s]=s.innerCapture(/([0-9A-Z]{2})(\d{3,4})/),u=a.getDetachedSpan(v+" "+(""+x).replace(t.departureTimePrefix,"")),g=a.getDetachedSpan(v+" "+(""+C).replace(t.arrivalTimePrefix,""))}return n=f.nextText(t.flightNumberPrefix).parentAnyTag("tr").previousAnyTag("tr").allInnerTags("td2").map(function(e){return e.tagContents()}).filter(function(e){return(""+e).length>0}),n&&n.length>0&&(n=n[0].innerCapture(t.airportsRegExp)),n&&3===n.length&&([,p,l]=n),T.push({airlineCode:o,flightNumber:s,departureAirport:p,departureDateTime:u,arrivalAirport:l,arrivalDateTime:g}),f.nextText(t.passengersPrefix).parentAnyTag("table").allInnerTags("tr2").slice(1).map(function(e){return e.allInnerTags("td2")}).forEach(function(e){h.push({name:e[1].tagContents(),seat:e[2].tagContents()})}),ASSERT(o,s,p,u),0===h.length&&h.push({name:null,seat:null}),T.forEach(function(e){h.forEach(function(r){d.push({"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineCode:e.airlineCode,flightNumber:e.flightNumber,departureAirportFuzzy:e.departureAirport,departureTime:e.departureDateTime,arrivalAirportFuzzy:e.arrivalAirport,arrivalTime:e.arrivalDateTime},underName:{"@type":"http://schema.org/Person",name:r.name},reservationId:i,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:m,priceCurrency:c,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:null,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:r.seat,seatingType:null}}})})}),d},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/477/478","SGaf9eb7ed")]);
