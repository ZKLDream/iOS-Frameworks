// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,s,c,g,o,i,d,p,h,l,m,u,v,S,T,x;return r=a.getSpan().nextText(n.name).nextTag("td9").nextTag("td9").tagContents().innerCapture(/(.*)\s/,1).trim(),d=a.getSpan().nextTag("table6").nextTag("td6").tagContents().innerCapture(/($<checkIn>(.*)) - ($<checkOut>.*)/),d&&(l=a.getDetachedSpan((""+d.$checkIn).replace(/\//g," ")).innerDate(),m=a.getDetachedSpan((""+d.$checkOut).replace(/\//g," ")).innerDate()),c=a.getSpan().nextTag("table9").lastInnerTag("td9").tagContents(),u=c.innerCapture(/($<name>.*)\s+($<address>.*)/),S=u?u.$name:null,x=u?u.$address:null,(!x||c.innerAddress().getLength()>=x.getLength())&&(x=c.innerAddress()),i=a.getSpan().innerCapture(regExpFormatted(/\1\s+(\d+)/,n.reservationId),1),ASSERT(r,S,x,l,m)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:s},totalPrice:g,priceCurrency:o,checkinTime:l,checkoutTime:m,modifyReservationUrl:p,cancelReservationUrl:h,reservationStatus:"http://schema.org/ReservationCancelled",reservationId:i,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:S,url:v,telephone:T,address:x}}]:void 0}}).call();
