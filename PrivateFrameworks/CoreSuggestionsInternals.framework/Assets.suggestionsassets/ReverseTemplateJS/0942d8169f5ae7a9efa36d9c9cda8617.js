// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("atahotels.it-cancellation-it",function(e){return/CANCELLAZIONE PRENOTAZIONE/.test(e.subject)},function(e){if(/CANCELLAZIONE PRENOTAZIONE/.test(e.subject)){var t="Cancelled",r={};r.reservationFor_prefix="Booking Dept",r.reservationId_prefix="Numero Prenotazione:",r.underName_name_prefix="Cognome:",r.reservationFor_telephone_prefix="T:",r.checkinTime_prefix="Data Arrivo:",r.checkoutTime_prefix="Data Partenza:",r.totalPrice_prefix="Totale Soggiorno:";var o="it_IT",i=loadHelper("atahotels.it-skeleton.js");return i(e,o,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/704/705","SG4eacf194"),new ReverseTemplate("atahotels.it-confirmation-it",function(e){return/CONFERMA PRENOTAZIONE/.test(e.subject)},function(e){if(/CONFERMA PRENOTAZIONE/.test(e.subject)){var t="Confirmed",r={};r.reservationFor_prefix="Booking Dept",r.reservationId_prefix="Numero Prenotazione:",r.underName_name_prefix="Cognome:",r.reservationFor_telephone_prefix="T:",r.checkinTime_prefix="Data Arrivo:",r.checkoutTime_prefix="Data Partenza:",r.totalPrice_prefix="Totale Soggiorno:";var o="it_IT",i=loadHelper("atahotels.it-skeleton.js");return i(e,o,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/704/706","SGf13f530e")]);
