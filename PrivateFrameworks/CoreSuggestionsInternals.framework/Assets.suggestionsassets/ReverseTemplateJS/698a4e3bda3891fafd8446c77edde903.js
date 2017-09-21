// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("lastminute.com-flight-confirmation-en",function(e){return/^Your flight booking to .+ Airport is confirmed \(Order/.test(e.subject)},function(e){var r,t="en_US",a={};return/^Your flight booking to .+ Airport is confirmed \(Order/.test(e.subject)?(a.reservationIdPrefix="Reservation number -",a.passengerDetailsHeader="Flight and payment details",a.passengerNamePrefix="Passengers",a.terminal="Departure terminal:",a.pricePrefix="Total charged",(r=loadHelper("lastminute.com-flight-confirmation-skeleton.js"))(e,t,a)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1147","SGfb19b659"),new ReverseTemplate("lastminute.com-flight-confirmation-es",function(e){return/^Tu vuelo a .+ est\xe1 confirmado \(N\xfamero/.test(e.subject)},function(e){var r,t="es_ES",a={};return/^Tu vuelo a .+ est\xe1 confirmado \(N\xfamero/.test(e.subject)?(a.reservationIdPrefix="N\xfamero de reserva -",a.passengerDetailsHeader="Detalles de vuelo y pago",a.passengerNamePrefix="Pasajeros",a.terminal="Terminal de salida:",a.pricePrefix="Total cobrado",(r=loadHelper("lastminute.com-flight-confirmation-skeleton.js"))(e,t,a)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1148","SGb04efe57"),new ReverseTemplate("lastminute.com-hotel-confirmation-en",function(e){return/^Your .+ hotel is confirmed/.test(e.subject)},function(e){if(!/^Your .+ hotel is confirmed/.test(e.subject))return CONTINUE;var r="en_US",t={};t.reservationIdPrefix="Booking number:",t.orderDetailsHeader="Order Details",t.viewMapSuffix="View Map",t.phoneNumberPrefix="tel:",t.checkInHeader="Check-in Details",t.checkInPrefix="Check in",t.checkOutPrefix="Check out",t.guestNamePrefix="Room 1",t.pricePrefix="Total charged";var a=loadHelper("lastminute.com-hotel-confirmation-skeleton.js");return a(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1153","SG7723020d"),new ReverseTemplate("lastminute.com-hotel-confirmation-es",function(e){return/^Tu reserva de hotel est\xe1 confirmada/.test(e.subject)||/^Tu reserva de vuelo m\xe1s hotel est\xe1 confirmada/.test(e.subject)},function(e){if(!/^Tu reserva de hotel est\xe1 confirmada/.test(e.subject)&&!/^Tu reserva de vuelo m\xe1s hotel est\xe1 confirmada/.test(e.subject))return CONTINUE;var r="es_ES",t={};t.reservationIdPrefix=/[N|n]\xfamero de reserva\:/,t.orderDetailsHeader="Detalles de la reserva",t.viewMapSuffix="Ver mapa",t.phoneNumberPrefix="tel:",t.checkInHeader="Estancia",t.checkInPrefix="Fecha de entrada:",t.checkInPrefix_2="Fecha de llegada:",t.checkOutPrefix="Fecha de salida:",t.guestNamePrefix="Habitaci\xf3n 1",t.guestNamePrefix_2="Nombre cliente:",t.pricePrefix="Total cobrado",t.pricePrefix_2="Total cargado a tu cuenta:",t.address="Direcci\xf3n:";var a=loadHelper("lastminute.com-hotel-confirmation-skeleton.js");return a(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1155","SGdecba2eb"),new ReverseTemplate("lastminute.com-hotel-confirmation-fr",function(e){return/^Confirmation de votre r\xe9servation/.test(e.subject)},function(e){if(!/^Confirmation de votre r\xe9servation d'h\xf4tel/.test(e.subject))return CONTINUE;var r="fr_FR",t={};t.reservationIdPrefix="Num\xe9ro de commande:",t.orderDetailsHeader="D\xe9tails de la commande",t.viewMapSuffix="Voir la carte",t.phoneNumberPrefix="tel:",t.checkInHeader="D\xe9tails du s\xe9jour",t.checkInPrefix="Arriv\xe9e",t.checkOutPrefix="D\xe9part",t.guestNamePrefix="Chambre 1",t.pricePrefix="Total";var a=loadHelper("lastminute.com-hotel-confirmation-skeleton.js");return a(e,r,t)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1141/1156","SG12a81360")]);
