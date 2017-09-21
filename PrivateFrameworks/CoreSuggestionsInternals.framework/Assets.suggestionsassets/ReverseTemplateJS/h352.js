// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,n,t){function a(e){return e=e.replace(/[^\d\sa-zA-z:\u6642]+/g," ").replace(/\s+/g," ").replace(/^(\d+)\s(\d+)\s/,"$1/$2/"),e=getFuzzyDate(r.getDetachedSpan(e))}var r=Scanner.fromMessage(e);r.setLocale(n);var i,c,p,u,o,s,l,C,g,m,h,S,d,f,T,v,k,I;if(!t.emailTitelConfirmation.test(e.subject)&&!t.emailTitelCancelConfirmation.test(e.subject))return CONTINUE;o=r.getSpan().innerCapture(t.reservationId,1),i=r.getSpan().innerCapture(t.guestName,1),c=r.getSpan().innerCapture(t.guestEmail,1),C=r.getSpan().innerCapture(t.checkInDate,1),l=r.getSpan().innerCapture(t.checkInTime,1),g=C+" "+l,g=a(g),h=r.getSpan().innerCapture(t.checkOutDate,1),m=r.getSpan().innerCapture(t.checkOutTime,1),S=h+" "+m,S=a(S);var N=r.getSpan().innerCapture(t.price,1);if(p=N.innerCapture(/([\d,.]+)/,1),f=r.getSpan().innerCapture(t.hotelName,1),T=r.getSpan().innerCapture(t.hotelPhone,1),v=""+r.getSpan().innerCapture(t.hotelAddress,1),t.emailTitelConfirmation.test(e.subject)){if(!ASSERT(i,o,g,S,v))return CONTINUE;s="Confirmed"}if(t.emailTitelCancelConfirmation.test(e.subject)){if(o=r.getSpan().innerCapture(t.cancelReservationId,1),i=r.getSpan().innerCapture(t.cancelGuestName,1),c=r.getSpan().innerCapture(t.cancelGuestEmail,1),C=r.getSpan().innerCapture(t.cancelCheckInDate,1),l=r.getSpan().innerCapture(t.cancelCheckInTime,1),g=C+" "+l,g=a(g),h=r.getSpan().innerCapture(t.cancelCheckOutDate,1),m=r.getSpan().innerCapture(t.cancelCheckOutTime,1),S=h+" "+m,S=a(S),!ASSERT(i,o,g,S,v))return CONTINUE;s="Cancelled"}return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:i,email:c},totalPrice:p,priceCurrency:u,checkinTime:g,checkoutTime:S,modifyReservationUrl:k,cancelReservationUrl:I,reservationStatus:"http://schema.org/Reservation"+(s||"Confirmed"),reservationId:o,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:f,url:d,telephone:T,address:v}}]}}).call();
