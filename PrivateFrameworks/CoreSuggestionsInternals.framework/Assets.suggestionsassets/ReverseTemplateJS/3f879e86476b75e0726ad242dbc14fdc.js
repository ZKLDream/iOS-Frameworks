// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("doyouspain-confirmation-en",function(e){return/^Your Rental Voucher/.test(e.subject)},function(e){if(/^Your Rental Voucher/.test(e.subject)){var r="en_US",i={};i.reservationId_prefix=/Reference:/,i.pickupTime_prefix=/Pick Up Date:/,i.dropoffTime_prefix=/Return Date:/,i.pickupName_prefix=/Pick Up City:/,i.dropoffName_prefix=/Return City:/,i.brand_prefix=/Group:/,i.modifyReservationUrl_prefix=/Modify my booking/,i.cancelReservationUrl_prefix=/Cancel my booking/;var o=loadHelper("doyouspain-confirmation-skeleton.js");return o(e,r,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/94/95","SG0cd543bb"),new ReverseTemplate("doyouspain-confirmation-es",function(e){return/^Su recibo de alquiler/.test(e.subject)},function(e){if(/^Su recibo de alquiler/.test(e.subject)){var r="es_ES",i={};i.reservationId_prefix=/Referencia:/,i.pickupTime_prefix=/Fecha recogida:/,i.dropoffTime_prefix=/Fecha devoluci\xf3n:/,i.pickupName_prefix=/Ciudad de Recogida:/,i.dropoffName_prefix=/Ciudad de Devoluci\xf3n:/,i.brand_prefix=/Grupo:/,i.modifyReservationUrl_prefix=/Modificar mi reserva/,i.cancelReservationUrl_prefix=/Cancelar mi reserva/;var o=loadHelper("doyouspain-confirmation-skeleton.js");return o(e,r,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/94/96","SGcdc5c7a1")]);
