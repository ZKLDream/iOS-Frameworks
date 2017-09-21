// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){return function(e,t,n){var r=Scanner.fromMessage(e);r.setLocale(t);var a,i,o=r.getSpan().nextText(n.modifyReservationUrlPrefix).parentTag("td3").innerLink(),g=r.getSpan().nextText(n.hotelInformationHeader).nextTag("table3"),x=g.nextTag("td3").tagContents().innerCapture(/($<name>.*)<($<url>.*)>($<address>[^]*)/),s=x.$name.trim(),d=x.$url.trim(),c=r.getDetachedSpan((""+x.$address).replace(/\|/g,"").replace(/\s+/g," ").trim()),m=d.nextText(n.phoneNumberAndFaxPrefix).nextTag("td3").nextTag("td3").firstPhoneNumber(),T=m.nextText(n.checkInTimePrefix).nextTag("td3").nextTag("td3").tagContents(),p=g.nextText(n.bookingInformationHeader).nextTag("table4").nextTag("table4"),l=p.nextText(n.bookingNumberPrefix).nextTag("td4").nextTag("td4").tagContents().trim(),h=p.nextText(n.guestNamePrefix).nextTag("td4").nextTag("td4").tagContents().trim(),u=p.nextText(n.stayIntervalPrefix).nextTag("td4").nextTag("td4").innerDate(),f=r.getDateDD(u);valid(f)&&(i=r.getDetachedSpan(f.endIso8601),a=r.getDetachedSpan(f.iso8601+" "+T).innerDate());var P=u.nextTag("table5").nextText(n.totalPricePrefix).parentTag("td5").tagContents().innerCapture(regExpFormatted(/\1:\s($<price>[\d\.,]+)\s($<currency>\w+)/,n.totalPricePrefix)),v=P.$price.trim(),S=P.$currency.trim();return ASSERT(s,h,a,i)?[{"@context":"http://schema.org","@type":"http://schema.org/LodgingReservation",underName:{"@type":"http://schema.org/Person",name:h},totalPrice:v,priceCurrency:S,checkinTime:a,checkoutTime:i,modifyReservationUrl:o,cancelReservationUrl:o,reservationStatus:"http://schema.org/ReservationConfirmed",reservationId:l,reservationFor:{"@type":"http://schema.org/LodgingBusiness",name:s,url:d,telephone:m,address:c}}]:STOP}}).call();
