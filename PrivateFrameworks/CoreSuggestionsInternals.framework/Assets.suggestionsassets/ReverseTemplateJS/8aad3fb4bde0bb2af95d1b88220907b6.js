// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("travelzoo.com-booking-cancellation-en",function(e){return/Travelzoo Cancellation Confirmation/i.test(e.subject)},function(e){if(!/Travelzoo Cancellation Confirmation/i.test(e.subject))return CONTINUE;var o="en_US",r={};return r.bookingDetailBlockPrefix="Your original booking details",r.underPersonNamePrefix="Guest:",r.reservationIdPrefix="Travelzoo reference:",r.reservationModificationUrlPrefix="To cancel your reservation, visit",r.hotelPhoneNumberPrefix="tel:",r.hotelUrlPrefix="Hotel Website",r.pricePrefix="Total (paid|price)",loadHelper("travelzoo.com-booking-cancellation-skeleton.js")(e,o,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1206/1207","SG85ad69d9"),new ReverseTemplate("travelzoo.com-booking-confirmation-en",function(e){return/Travelzoo Booking Confirmation/i.test(e.subject)},function(e){if(!/Travelzoo Booking Confirmation/i.test(e.subject))return CONTINUE;var o="en_US",r={};return r.bookingDetailBlockPrefix="Your booking details",r.underPersonNamePrefix="Guest:",r.reservationIdPrefix="Travelzoo reference:",r.reservationModificationUrlPrefix="To cancel your reservation, visit",r.hotelPhoneNumberPrefix="tel:",r.hotelUrlPrefix="Hotel Website",r.pricePrefix="Total (paid|price)",loadHelper("travelzoo.com-booking-confirmation-skeleton.js")(e,o,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1206/1208","SG99cc7bd3")]);
