// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,a){var n=Scanner.fromMessage(e);n.setLocale(t);var r,o,i,c,s,p,g,h,x,d,m,l,T,f,u,v,y,C,P,S,z=n.getSpan();return o=z.nextText(a.reservationIdPrefix).nextTag("td4").tagContents(),C=z.nextText(a.pickupPrefix).nextTag("td4").tagContents(),x=z.nextText(a.brandPrefix).nextTag("td4").tagContents(),[,S,v]=z.nextText(a.rentalTimePrefix).nextTag("td4").tagContents().innerCapture(/(.+)~(.+)\(/),S=getFuzzyDate(n.getDetachedSpan(""+S)),v=getFuzzyDate(n.getDetachedSpan(""+v)),g=z.nextText().nextText(a.totalCostPrefix).nextTag("td4").tagContents(),ASSERT(C,S)?[{"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",totalPrice:g,priceCurrency:h,reservationId:o,reservationStatus:"http://schema.org/Reservation"+(i||"Confirmed"),checkinUrl:c,modifyReservationUrl:s,cancelReservationUrl:p,underName:{"@type":"http://schema.org/Person",name:r},provider:{"@type":"http://schema.org/Organization",name:l},reservationFor:{"@type":"http://schema.org/Car",brand:{"@type":"http://schema.org/Organization",name:x},license:d,color:m},pickupTime:S,pickupLocation:{"@type":"http://schema.org/Place",name:y,telephone:P,address:C},dropoffTime:v,dropoffLocation:{"@type":"http://schema.org/Place",name:T,telephone:u,address:f||C}}]:void 0}}).call();
