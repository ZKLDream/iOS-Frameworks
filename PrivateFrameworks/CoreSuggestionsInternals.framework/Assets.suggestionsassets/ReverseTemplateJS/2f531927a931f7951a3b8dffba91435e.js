// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("tmr3",function(e){return/Reservation Confirmation/.test(e.subject)},function(e){var t="en_US",s={};if(s.confirmSubject=/Reservation Confirmation/,s.reservationId=/\-no\s([\w\d]+)/,s.guestName=/Driver\s(.+)\sIssue/,s.pickupAddress=/Rental Start (.+) Rental Return/,s.car=/Vehicle\sgroup\s(.+)/,s.price=/Rental\sEstimate\s(.+)\s\(/,s.dates=/Date ($<pickupDate>.*?)\s($<dropoffDate>.*?) Time ($<pickupTime>.*?)\s($<dropoffTime>.*?)\sTravel/,s.locations=/Rental\sStart\s($<pickupLocation>.+)\sAP.*Rental\sReturn\s($<dropoffLocation>.+)\sAP.*Location/,s.cancellationSubject=/Reservation Cancellation/,s.cancelGuestName=/Issue\sDate\s[\d,.]+\s(\w+\s\w+)/,s.cancelReservationId=/no\. (.+)/,!s.confirmSubject.test(e.subject))return CONTINUE;var n=loadHelper("tmr3.js");return n(e,t,s)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/124/131","SG10cdcce0")]);
