// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){function r(e){return e=e.replace(/[^\d\sa-zA-z:]+/g," ").replace(/\s+/g," ").replace(/^(\d+)\s(\d+)\s/,"$1/$2/"),e=getFuzzyDate(a.getDetachedSpan(e))}var a=Scanner.fromMessage(e);a.setLocale(t);var i,s,o,c,u,p,l,m,C,d,g,h,f,S;if(!n.emailTitelConfirmation.test(e.subject)&&!n.emailTitelCancelConfirmation.test(e.subject))return CONTINUE;u=a.getSpan().innerCapture(n.reservationId,1),i=a.getSpan().innerCapture(n.guestName,1);var v=a.getSpan().innerCapture(n.price,1);o=v.innerCapture(/([\d,.]+)/,1),c=v.innerCapture(/([^\d,.]+)/,1),""+c=="\\"&&(c=""),l=""+a.getSpan().innerCapture(n.checkInDate,1),l=r(l),m=""+a.getSpan().innerCapture(n.checkOutDate,1),m=r(m);var T=a.getSpan().innerCapture(n.hotelInfo,1);if(d=T.innerCapture(/(.+)/,1),C=T.innerLink(),g=T.innerPhoneNumber(),h=T.innerAddress(),h.exists()||(h=T.innerCapture(n.hotelAddress,1)),n.emailTitelConfirmation.test(e.subject)){if(!ASSERT(i,u,l,d))return CONTINUE;p="Confirmed"}if(n.emailTitelCancelConfirmation.test(e.subject)){if(!ASSERT(i,u,l,d))return CONTINUE;p="Cancelled"}return[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:i,email:s},totalPrice:o,priceCurrency:c,checkinTime:l,checkoutTime:m,modifyReservationUrl:f,cancelReservationUrl:S,reservationStatus:"http://schema.org/Reservation"+(p||"Confirmed"),reservationId:u,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:d,url:C,telephone:g,address:h}}]}}).call();
