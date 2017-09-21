// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var r=Scanner.fromMessage(e);r.setLocale(t);var a,i,o,s,g,d,p,x,c,l,m,h,u=r.getSpan(),f=n.isCancellation?"Cancelled":"Confirmed";p=u.innerCapture(regExpFormatted(/\1\s(\d+)/,n.reservationIdPrefix),1),a=u.nextText(n.underPersonNamePrefix).parentAnyTag("td").tagContents().innerCapture(regExpFormatted(/\1\s(.+)/,n.underPersonNamePrefix),1);var T=(""+u.nextText(n.hotelNamePrefix).nextTag("table5").nextAnyTag("td").nextAnyTag("td").nextAnyTag("td").tagContents()).replace(/\n/gm," ").replace(/\s+/gm," ").match(/(.+)\s<(.+?)>\s(.+)/);if(T&&4===T.length){[,o,g,d]=T;var P=r.getDetachedSpan(d).innerAddress();(""+P).length&&(d=P)}s=u.nextText(n.hotelPhonePrefix).parentAnyTag("td").tagContents().innerCapture(regExpFormatted(/\1\s(.+)/,n.hotelPhonePrefix),1),x=u.nextText(n.modifyReservationUrlPrefix).nextLink();var C=u.nextText(n.dateTimesPrefix).parentAnyTag("table").allInnerTags("td6").filter(function(e,t){return(""+e.tagContents()).length>0}).map(function(e){return e.tagContents()});c=r.getDetachedSpan(C[2]+" "+C[5]).innerDate(),l=r.getDetachedSpan(C[4]+" "+C[6]).innerDate();var v=u.nextText(n.pricePrefix).nextAnyTag("td").tagContents().innerCapture(/(\D)([\d\,\.]+)/);return v&&v!==r.getNullSpan()?[,h,m]=v:(v=u.innerCapture(regExpFormatted(/\1\s(\D)\s?([\d\,\.]+)/,n.pricePrefix)),v&&3===v.length?[,h,m]=v:(v=u.innerCapture(regExpFormatted(/\1\s?([\d\,\.]+)\s(\D)/,n.pricePrefix)),v&&3===v.length&&([,h,m]=v))),ASSERT(a,o,c)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:a,email:i},totalPrice:m,priceCurrency:h,checkinTime:c,checkoutTime:l,modifyReservationUrl:x,reservationStatus:"http://schema.org/Reservation"+f,reservationId:p,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:o,url:g,telephone:s,address:d}}]:void 0}}).call();
