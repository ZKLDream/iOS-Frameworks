// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,r,t){if(!e||!r||!t)return CONTINUE;var a=Scanner.fromMessage(e);a.setLocale(r);var i,n,o,l,s,p,d,m,g,h,u,c,v,T,f,C,A,y,b,x=a.getSpan(),F=[],I={};for(n=x.withInterval(x.nextText(t.reservationId).getEnd(),x.nextText(t.reservationIdPostFix).getStart()).trim(),s=x.nextText(t.passengerDetails).parentTag("table3").allInnerTagsFiltered("td3"),s.shift(),y=0;s.length>y;y++)l=""+s[y],I[""+l]={name:l};for(0===s.length&&(l=" ",I[""+l]={name:l}),p=s=x.nextText(t.flightDetails).parentTag("table3").allInnerTagsFiltered("tr3"),p.shift(),p.shift(),y=0;p.length>y;y++){var N=p[y].allInnerTagsFiltered("td3");d=N[0],m=N[1],h=N[2],c=N[3],f=N[4],u=N[5],T=p[y].lastInnerDate(),u=combineDateAndTime(h,u),T=combineDateAndTime(h,T),ASSERT(d,u,T)&&F.push({airlineCode:g,flightNumber:d,departureTime:u,departureCode:v,departureAirport:c.trim(),arrivalTime:T,arrivalCode:C,arrivalAirport:f.trim(),passengers:I})}var S=[];for(y=0;F.length>y;y++){var k=F[y],z=Object.keys(k.passengers);for(b=0;z.length>b;b++){A=k.passengers[z[b]];var D={"@context":"http://schema.org","@type":"http://schema.org/FlightReservation",reservationFor:{"@type":"http://apple.com/FuzzyFlight",airlineName:"Copa Airlines",airlineCode:"CM",flightNumber:k.flightNumber,departureAirportFuzzy:k.departureAirport,departureAirportCode:k.departureCode,departureTime:k.departureTime,arrivalAirportFuzzy:k.arrivalAirport,arrivalAirportCode:k.arrivalCode,arrivalTime:k.arrivalTime},underName:{"@type":"http://schema.org/Person",name:A.name},checkinUrl:o,reservationId:n,reservationStatus:"http://schema.org/ReservationConfirmed",totalPrice:"",priceCurrency:"",reservedTicket:{"@type":"http://schema.org/Ticket",ticketNumber:i,ticketedSeat:{"@type":"http://schema.org/Seat",seatNumber:"",seatingType:""}}};S.push(D)}}return S.length?S:void 0}}).call();
