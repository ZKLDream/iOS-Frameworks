// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tingo.com-confirmation-en",function(e){return/Reservation Confirmation\s+.+\s+Itinerary/.test(e.subject)},function(e){if(/Reservation Confirmation\s+.+\s+Itinerary/.test(e.subject)){var t="en_US",n={};n.reservationId=/Hotel Confirmation \#\:\s+(.+)\s+?</,n.guestName=/Guest1\s+(.+)/,n.checkIn="Check-in:",n.totalPrice="Total:";var o=loadHelper("tingo.com-confirmation-skeleton.js");return o(e,t,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/930/932","SGba08ea18")]);
