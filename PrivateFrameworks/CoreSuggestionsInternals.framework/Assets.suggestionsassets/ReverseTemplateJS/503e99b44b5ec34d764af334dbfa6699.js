// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tap-check-in-en",function(e){return/^Check-in here - Booking Ref /.test(e.subject)},function(e){if(/^Check-in here - Booking Ref /.test(e.subject)){var r="en_GB",n={};n.name="Dear Mr./Mrs.",n.reservationId="Your booking reference",n.flightDetails=RegExp([/Check-in is now open for ($<airlineCode>\w{2})($<flightNumber>\d+), /,/departing from ($<departureAirport>.+) \(($<departureAirportCode>.+)\) /,/to ($<arrivalAirport>.+) \(($<arrivalAirportCode>.+)\), /,/on ($<departureTime>\d+\w+\d+ at \d+:\d+)\./].map(function(e){return e.source}).join("")),n.checkinUrl="Complete your Check-in";var t=loadHelper("tap-check-in-skeleton.js");return t(e,r,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/588/589","SG247b178f")]);
