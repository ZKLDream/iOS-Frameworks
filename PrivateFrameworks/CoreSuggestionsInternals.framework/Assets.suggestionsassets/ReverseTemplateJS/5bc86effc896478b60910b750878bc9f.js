// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("nh-hotels-de",function(e){return/Ihre Reservierung f\xfcr|Reservierung ge\xe4ndert|Reservierung storniert/.test(e.subject)},function(e){if(/Ihre Reservierung f\xfcr|Reservierung ge\xe4ndert|Reservierung storniert/.test(e.subject)){var r="de_DE",t={};t.emailTitelConfirmation=/Ihre Reservierung f\xfcr|Reservierung ge\xe4ndert/,t.guestName="Bucher",t.guestEmail=/E-[mM]ail\:\s(.+)\s/,t.reservationId=/Buchungsnummer\: (.+)/,t.totalPrice="Endpreis",t.checkIn="Anreise:",t.hotelPhone=/Telefon/,t.emailTitelCancellation=/Reservierung storniert/,t.cancelGuestName=/Sehr geehrte\/r Frau \/ Herr (.+)\,/,t.cancelHotelName=/Ihre Buchung bei (.+) wurde storniert/;var n=loadHelper("emailToJsonLd_skeleton.js");return n(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/886/887","SG12d27aa7"),new ReverseTemplate("nh-hotels-fr",function(e){return/Votre r\xe9servation/.test(e.subject)||/Modification de la r\xe9servation/.test(e.subject)||/Annulation de la r\xe9servation/.test(e.subject)},function(e){if(/Votre r\xe9servation|Modification de la r\xe9servation|Annulation de la r\xe9servation/.test(e.subject)){var r="fr_FR",t={};t.emailTitelConfirmation=/Votre r\xe9servation|Modification de la r\xe9servation/,t.guestName="Titulaire de la r\xe9servation",t.guestEmail=/E-[mM]ail\:\s(.+)\s/,t.reservationId=/Num\xe9ro de r\xe9servation \: (.+)/,t.totalPrice="Prix total",t.checkIn="Arriv\xe9e:",t.hotelPhone=/T\xe9l\xe9phone/,t.emailTitelCancellation=/Annulation de la r\xe9servation/,t.cancelGuestName=/Cher\/e Mr \/ (.+)\,/,t.cancelHotelName=/Votre r\xe9servation chez (.+) a \xe9t\xe9 annul\xe9e/;var n=loadHelper("emailToJsonLd_skeleton.js");return n(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/886/888","SG7f6732e5")]);
