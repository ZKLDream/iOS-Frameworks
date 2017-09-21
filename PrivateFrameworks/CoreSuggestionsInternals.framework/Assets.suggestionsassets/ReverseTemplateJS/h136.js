// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){var a=Scanner.fromMessage(e);a.setLocale(r);var n,i,o,p,l,s=[],m=[];for(n=a.getSpan().next(t.reservationId).nextAnyTag("td").nextAnyTag("td").tagContents(),o=a.getSpan().next(t.passengers).parentAnyTag("table").allInnerTags("tr3"),i=1;o.length>i;i++){l={};var g=o[i].allInnerTags("td3");!t.passengers.test(g[0])&&(""+g[0].tagContents()).length>2&&(l.name=g[0].tagContents(),l.ticketNumber=g[1].tagContents(),s.push(l))}for(p=a.getSpan().next(t.departure).parentAnyTag("table").allInnerTags("tr3"),i=1;p.length>i;i++){var u={},h=p[i].allInnerTags("td3");if(!t.departure.test(h[2])&&(""+h[2].tagContents).length>2){u.seatingType=h[0].tagContents();var d=h[1].tagContents().innerCapture(/($<code>\w{2})\s?($<number>\d{2,})/);u.airlineCode=d.$code,u.flightNumber=d.$number,u.departureAirport=h[2].tagContents(),u.departureTime=h[3].innerDate(),u.arrivalAirport=h[4].tagContents(),u.arrivalTime=h[5].innerDate(),ASSERT(u.airlineCode,u.flightNumber,u.departureAirport,u.arrivalAirport,u.departureTime,u.arrivalTime)&&m.push(u)}}var c=[];for(i=0;m.length>i;i++)for(var v=m[i],T=0;s.length>T;T++){l=s[T];var b={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:v.airlineName,airlineCode:v.airlineCode,flightNumber:v.flightNumber,departureAirportFuzzy:v.departureAirport,departureAirportCode:v.departureCode,departureTime:v.departureTime,arrivalAirportFuzzy:v.arrivalAirport,arrivalAirportCode:v.arrivalCode,arrivalTime:v.arrivalTime},underName:{"@type":"http://schema.org/Person",name:l.name},checkinUrl:null,reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:null,priceCurrency:null,reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:l.ticketNumber,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:null,seatingType:v.seatingType}}};valid(o.membershipNumber,o.programName)&&(b.programMembershipUsed={"@type":"http://schema.org/ProgramMembership",membershipNumber:o.membershipNumber,programName:o.programName}),c.push(b)}return c.length?c:void 0}}).call();
