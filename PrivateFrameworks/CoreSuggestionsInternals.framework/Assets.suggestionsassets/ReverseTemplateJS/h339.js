// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var a=Scanner.fromMessage(e);a.setLocale(t);var r,g,o,s,i,p,c,d,x,m,u;r=a.getSpan().nextText(n.name).nextTag("td5").tagContents(),o=a.getSpan().nextText(n.total).nextTag("td5").tagContents(),s=o.innerCapture(/([\d,\.]+)/,1),i=o.innerCapture(/[\d,\.]+ (.)/,1),p=getFuzzyDate(a.getSpan().nextText(n.checkIn).nextTag("td5")),c=getFuzzyDate(a.getSpan().nextText(n.checkOut).nextTag("td5")),d=a.getSpan().nextTag("table4").nextTag("td4").nextTag("td4").tagContents().innerCapture(/(\d+)/,1);var T=a.getSpan().nextTag("tr5");return"es_ES"===t&&(T=T.nextTag("tr5")),x=T.lastInnerTag("td5").tagContents().innerCapture(/(.*)\-/,1).trim(),m=T.tagContents().innerCapture(regExpFormatted(/\1([\d\(\)-\+\s]+)/,n.phone),1).trim(),u=T.tagContents().innerCapture(regExpFormatted(/\1.*\n([\s\S]*) - \2/,n.viewOnMelia_Com,n.viewOnGoogleMaps),1),ASSERT(r,p,d,u)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:r,email:g},totalPrice:s,priceCurrency:i,checkinTime:p,checkoutTime:c,reservationStatus:"http://schema.org/ReservationCancelled",reservationId:d,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:x,telephone:m,address:u}}]:void 0}}).call();
