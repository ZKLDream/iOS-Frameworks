// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lastminute.com-flight-etickets-en",function(e){return/^Order Reference.+ Your tickets have been issued!/.test(e.subject)},function(e){var r,t="en_US",i={};return/^Order Reference.+ Your tickets have been issued!/.test(e.subject)?(i.passengerDetailsHeader="PASSENGER DETAILS:",i.firstNamePrefix="First Name",i.lastNamePrefix="Last Name",i.ticketPrefix="Ticket No.",i.itineraryDetailsHeader="ITINERARY:",i.itineraryPrefix="ITINERARY:",i.itineraryPostfix="BAGGAGE DETAILS:",i.departureairportPrefix="FROM",i.arrivalairportPrefix="TO",i.departuredatePrefix="DEPT DATE",i.arrivaldatePrefix="ARRV DATE",i.airlinePrefix="CARRIER",i.ticketPrefix="AIRL BOOKING REF",i.departuretimePrefix="DEPT TIME",i.arrivaltimePrefix="ARRV TIME",i.pricePrefix="Total charged",(r=loadHelper("lastminute.com-flight-eticket-skeleton.js"))(e,t,i)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1150","SG4d1cbf8f")]);
