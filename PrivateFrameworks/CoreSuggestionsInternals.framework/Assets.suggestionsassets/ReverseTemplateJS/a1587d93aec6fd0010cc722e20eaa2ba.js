// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("travel.com.au-car-confirmation-en",function(e){return/^travel.com.au Booking Confirmation/.test(e.subject)},function(e){if(/^travel.com.au Booking Confirmation/.test(e.subject)){var t="en_AU",n={};n.reservationId="travel.com.au reference:",n.underName="Name",n.carDetails="Your car",n.pickup="Pick up",n.dropoff="Drop off",n.price="Total rental cost",n.supplier="Supplier",n.phone="Contact number";var a=Scanner.fromMessage(e);a.setLocale(t);var r,o,i,p,c,s,m,g,u,d,f,l,h,v,C,T,x,y,S,k,A;if(r=a.getSpan().next(n.reservationId).nextAnyTag("td").tagContents(),o=a.getSpan().next(n.carDetails).next(n.underName).nextAnyTag("td").tagContents(),p=a.getSpan().next(n.pickup).nextAnyTag("td").tagContents().innerCapture(/($<pickupTime>.*)\s+($<pickupLocation>.*)/),c=a.getSpan().next(n.dropoff).nextAnyTag("td").tagContents().innerCapture(/($<dropoffTime>.*)\s+($<dropoffLocation>.*)/),s=p.$pickupTime.innerDate(),g=p.$pickupLocation,m=c.$dropoffTime.innerDate(),u=c.$dropoffLocation,x=a.getSpan().next(n.supplier).nextAnyTag("td").tagContents(),y=a.getSpan().next(n.phone).nextAnyTag("td").tagContents(),d=a.getSpan().next(n.price).nextAnyTag("td").tagContents(),l=d.innerCapture(/([\d,.]+)/,1),f=d.innerCapture(/([^\d,.]+)/,1),ASSERT(o,r,g,s)){var L={"@context":"http://schema.org","@type":"http://schema.org/RentalCarReservation",totalPrice:l,priceCurrency:f,reservationId:r,reservationStatus:"http://schema.org/Reservation"+(h||"Confirmed"),checkinUrl:v,modifyReservationUrl:C,cancelReservationUrl:T,underName:{"@type":"http://schema.org/Person",name:o},provider:{"@type":"http://schema.org/Organization",name:x},pickupTime:s,pickupLocation:{"@type":"http://schema.org/Place",name:x,telephone:y,address:g.trim()}};return not(i)||(L.reservationFor={"@type":"http://schema.org/Car",brand:{"@type":"http://schema.org/Organization",name:i},license:S,color:k}),not(m)||not(u)||(L.dropoffTime=m,L.dropoffLocation={"@type":"http://schema.org/Place",name:A||x,telephone:y,address:u.trim()}),[L]}}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1187/1188","SG7236c722")]);
