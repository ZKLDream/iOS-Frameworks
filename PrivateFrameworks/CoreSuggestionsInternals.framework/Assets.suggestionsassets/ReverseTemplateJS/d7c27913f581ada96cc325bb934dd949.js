// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("waikikiparc.com",function(e){return/Your Reservation Confirmation/.test(e.subject)||/Reservation Cancellation/.test(e.subject)},function(e){var t="en_US",a={};a.emailTitelConfirmation=/Your Reservation Confirmation/,a.reservationId=/Confirmation Number/,a.checkInDate=/Arrival Date/,a.checkInTime=/Check-in time/,a.checkOutTime=/Check-out time/,a.checkOutDate=/Departure Date/,a.guestName=/Guest Name/,a.price=/Total Cost/,a.hotelUrl=/Hotel Website/,a.hotelName=/Thank you for your reservation at (.+)\./,a.hotelPhone=/Main Number/,a.emailTitelCancelConfirmation=/Reservation Cancellation/,a.cancelReservationId=/Confirmation Number\: (.+)/,a.cancelGuestName=/Guest Information/;var i=loadHelper("waikikiparc.com.js");return i(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/960/960","SGf5c1d298")]);
