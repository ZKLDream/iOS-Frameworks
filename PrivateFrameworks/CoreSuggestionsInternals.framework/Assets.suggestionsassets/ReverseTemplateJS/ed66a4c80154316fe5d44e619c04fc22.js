// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ba.com-confirmation-en",function(e){return/^(?:BA|Your)\s+e-ticket receipt/.test(e.subject)||/^BA travel reservation/.test(e.subject)},function(e){if(/^(?:BA|Your)\s+e-ticket receipt/.test(e.subject)||/^BA hold booking confirmation/.test(e.subject)||/^BA travel reservation/.test(e.subject)){var r,t="en_US",i={};return i.ticketNumberPrefix="Ticket Number(s)",i.pricePrefix="Payment Total",i.yourItinerary="Your Itinerary",/^BA e-ticket/.test(e.subject)?(i.bookingReferencePrefix="British Airways booking reference:",i.passengersPrefix="Passenger(s)",i.flightNumberPrefix="Flight number",i.departureAirportPrefix="From",i.arrivalAirportPrefix="To",i.terminal="Terminal",i.departureDatePrefix="Depart",i.arrivalDatePrefix="Arrive",i.cabinPrefix="Cabin",i.airlineNamePrefix="Operated by",r=loadHelper("ba.com-confirmation-skeleton.js")):(i.reservationId="Booking reference:",i.manageBooking="Manage my booking",i.passengerPostFix="Card Type",i.nameCapture=/Dear (.*)\,/,i.itineraryEnd="Passenger",r=loadHelper("ba.com-confirmation-skeleton-2015.js")),r(e,t,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/367/376","SGcfa1b7a9")]);
