// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("rentalcars.com-confirmation-en",function(e){return/Your rentalcars\.com Voucher/i.test(e.subject)||/Your rentalcars\.com Itinerary/i.test(e.subject)||/Your Voucher/i.test(e.subject)||/Important information regarding your Rentalcars\.com booking/i.test(e.subject)},function(e){if(/Your rentalcars\.com Voucher/i.test(e.subject)||/Your rentalcars\.com Itinerary/i.test(e.subject)||/Your Voucher/i.test(e.subject)||/Important information regarding your Rentalcars\.com booking/i.test(e.subject)){var r=loadHelper("rentalcars.com-microdata-parser.js"),o=r(e);if(o)return o;var t="en_US",a={};a.reservationId=/(\d{5,})/,a.guestName=/Dear\s(.+)\,/,a.brand=/Car (?:Type|Group)\: (.+)/,a.pickupTime=/Pick-up/,a.dropoffTime=/Drop-[oO]ff/,a.pickupAddress=/Pick-up([\s\S]+)Location\: (.*)([\s\S]+)Drop-[oO]ff/,a.dropoffAddress=/Drop-[oO]ff([\s\S]+)Location\: (.*)/,a.price=/(?:Amount Due at Pick-up|Total Cost)\: (.+)/,a.modifyUrl=/Manage My Booking/,a.supplier=/(?:Supplier|Rental Partner):\s+(.*)/,a.cancellationSubject=/Cancellation of your Rental Cars.com/;var n=loadHelper("rentalcars.com-skeleton.js");return n(e,t,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/185/200","SGb7e80f61")]);
