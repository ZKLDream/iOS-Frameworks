// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("rezidor.com",function(e){return/Your Reservation Confirmation|Your Adjusted Reservation/.test(e.subject)||/Your Reservation Cancellation/.test(e.subject)},function(e){var t="en_GB",r={};r.emailTitelConfirmation=/Your Reservation Confirmation|Your Adjusted Reservation/,r.reservationId=/.+\(([\d\w]+)\)/,r.checkInDate=/Arrival\:/,r.checkOutDate=/Departure\:/,r.checkInTime=/Check-In Time/,r.checkOutTime=/Check-Out Time/,r.guestFirstName=/First Name/,r.guestLastName=/Last Name/,r.guestEmail=/Your email address/,r.price=/for \d+ room/,r.hotelInfo=/Your booking/,r.hotelName=/Property Name/,r.hotelAddress=/Address/,r.hotelPhone=/Phone/,r.modifyUrl=/View\/Change Reservation/,r.emailTitelCancellation=/Your Reservation Cancellation/,r.cancelReservationId=/Reference Number\:/,r.cancelGuestName=/Guest Name\:/;var o=loadHelper("rezidor.com.js");return o(e,t,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/736/738","SGfff4f6c6")]);
