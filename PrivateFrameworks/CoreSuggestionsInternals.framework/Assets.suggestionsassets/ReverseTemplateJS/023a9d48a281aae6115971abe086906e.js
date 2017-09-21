// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("ryanair.com-checkin-baggage-de",function(e){return/^Vermeiden Sie Unnotige Zusatzgebuhren - Ryanair Reservierungen/.test(e.subject)||/^Informationen zu den neuen Bestimmungen von Handgep\xe4ck/.test(e.subject)||/^Erinnerung an den Online-Check-in/.test(e.subject)},function(e){if(/^Vermeiden Sie Unnotige Zusatzgebuhren - Ryanair Reservierungen/.test(e.subject)||/^Informationen zu den neuen Bestimmungen von Handgep\xe4ck/.test(e.subject)||/^Erinnerung an den Online-Check-in/.test(e.subject)){var n="de_DE",r={};r.reservationId="Reservierungs-Nummer",r.goingOut=/(?:Hinflug|HINFLUG)/,r.comingBack=/(?:R\xdcckflug )/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/535","SGebdbc477"),new ReverseTemplate("ryanair.com-checkin-baggage-en",function(e){return/^Avoid Additional Fees - Ryanair Reservation/.test(e.subject)||/^New Cabin Bag Allowance Information/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)},function(e){if(/^Avoid Additional Fees - Ryanair Reservation/.test(e.subject)||/^New Cabin Bag Allowance Information/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)){var n="en_GB",r={};r.reservationId="Reservation No.",r.goingOut=/(?:Going Out|GOING OUT)/,r.comingBack=/(?:Coming Back|COMING BACK)/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/536","SGccaf4c5f"),new ReverseTemplate("ryanair.com-checkin-baggage-es",function(e){return/^Recordatorio de check-in\/facturaci\xf3n online/.test(e.subject)||/^Evite Cargos Adicionales/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)},function(e){if(/^Recordatorio de check-in\/facturaci\xf3n online/.test(e.subject)||/^Evite Cargos Adicionales/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)){var n="es_ES",r={};r.reservationId="N\xfamero de Reserva",r.goingOut=/(?:Ida)/,r.comingBack=/(?:Vuelta)/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/537","SG6fc5d7b3"),new ReverseTemplate("ryanair.com-checkin-baggage-fr",function(e){return/^Evitez Les Frais Additionnels - Reservation Ryanair/.test(e.subject)||/^Information sur les Nouvelles Allocations de Bagage en Cabine/.test(e.subject)},function(e){if(/^Evitez Les Frais Additionnels - Reservation Ryanair/.test(e.subject)||/^Information sur les Nouvelles Allocations de Bagage en Cabine/.test(e.subject)){var n="fr_FR",r={};r.reservationId="No. de Reservation",/^Evitez Les Frais Additionnels - Reservation Ryanair/.test(e.subject)&&(r.reservationId="No. de Confirmation"),r.goingOut=/(?:Aller|ALLER)/,r.comingBack=/(?:Retour|RETOUR)/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/538","SG57bc7701"),new ReverseTemplate("ryanair.com-checkin-baggage-it",function(e){return/^Promemoria check in online volo/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)},function(e){if(/^Promemoria check in online volo/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)){var n="it_IT",r={};r.reservationId="Numero di Prenotazione",r.goingOut=/(?:andata|ANDATA)/,r.comingBack=/(?:ritorno|RITORNO)/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/539","SG2035c6b0"),new ReverseTemplate("ryanair.com-checkin-baggage-nl",function(e){return/^Online check-in herinnering/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)},function(e){if(/^Online check-in herinnering/.test(e.subject)||/^Online check in reminder email for flight departing/.test(e.subject)){var n="nl_NL",r={};r.reservationId="Reserveringsnummer",r.goingOut=/Vertrek/,r.comingBack=/Retourvlucht/;var t=loadHelper("ryanair.com-checkin-baggage-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/540","SGce947398"),new ReverseTemplate("ryanair.com-checkin-now-de",function(e){return/^Zeit zum Online-Check-in\./.test(e.subject)},function(e){if(/^Zeit zum Online-Check-in\./.test(e.subject)){var n="de_DE",r={};r.reservationId="Reservierung:",r.flightDetails="Abflug:",r.checkinUrl="JETZT EINCHECKEN";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/541","SG71bf0f71"),new ReverseTemplate("ryanair.com-checkin-now-en",function(e){return/^Time to check in\./.test(e.subject)},function(e){if(/^Time to check in\./.test(e.subject)){var n="en_GB",r={};r.reservationId="Reservation:",r.flightDetails="Depart:",r.checkinUrl="CHECK IN NOW";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/542","SG7cf8b699"),new ReverseTemplate("ryanair.com-checkin-now-es",function(e){return/^Hora de realizar la facturaci\xf3n\./.test(e.subject)},function(e){if(/^Hora de realizar la facturaci\xf3n\./.test(e.subject)){var n="es_ES",r={};r.reservationId="N\xfamero de reserva:",r.flightDetails="Salida:",r.checkinUrl="FACTURAR AHORA";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/543","SG41194a79"),new ReverseTemplate("ryanair.com-checkin-now-fr",function(e){return/^Heure d\u2019enregistrement\./.test(e.subject)},function(e){if(/^Heure d\u2019enregistrement\./.test(e.subject)){var n="fr_FR",r={};r.reservationId="R\xe9servation:",r.flightDetails=/D\xe9part\s:/,r.checkinUrl="S\u2019ENREGISTRER MAINTENANT";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/544","SG9d85a918"),new ReverseTemplate("ryanair.com-checkin-now-it",function(e){return/^\xc8 il momento di fare il check-in\./.test(e.subject)},function(e){if(/^\xc8 il momento di fare il check-in\./.test(e.subject)){var n="it_IT",r={};r.reservationId="Prenotazione:",r.flightDetails="Partenza:",r.checkinUrl="FAI IL CHECK-IN ADESSO";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/545","SG537a7418"),new ReverseTemplate("ryanair.com-checkin-now-nl",function(e){return/^Tijd om in te checken\./.test(e.subject)},function(e){if(/^Tijd om in te checken\./.test(e.subject)){var n="nl_NL",r={};r.reservationId="Reserveringsnummer:",r.flightDetails="Vertrek:",r.checkinUrl="NU INCHECKEN";var t=loadHelper("ryanair.com-checkin-now-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/546","SGb7d41ef1"),new ReverseTemplate("ryanair.com-receipt-de",function(e){return/^Ryanair Receipt \(Ryanair Quittung\)/.test(e.subject)},function(e){if(/^Ryanair Receipt \(Ryanair Quittung\)/.test(e.subject)){var n="de_DE",r={};r.reservationId="Booking Ref (Buchungsnummer):",r.price="Total Price (Gesamtpreis)",r.name=/Co\.Reg\.No .+\n+(.+)/,r.flightSection=/Date of Issue.*([\s\S]+)Ticket \/ Stevern/,r.flightLegInfo=RegExp(/($<airlineCode>[\D]{2})($<flightNumber>[\d]{3,4})\s+/.source+/($<departureAirport>.*)\s+to\s+($<arrivalAirport>.*)\s+/.source+/($<flightDate>[\d]{2}[\w]{3}[\d]{4})\s+/.source+/($<departureHour>[\d]{2})($<departureMinute>[\d]{2})\s+/.source+/($<arrivalHour>[\d]{2})($<arrivalMinute>[\d]{2})/.source);var t=loadHelper("ryanair.com-receipt-skeleton.js");return t(e,n,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/553","SG3fc9c321"),new ReverseTemplate("ryanair.com-reminder-de",function(e){return/^Wichtige Information bez\xfcglich Ihres Fluges/.test(e.subject)||/^Neuer Sitzplatzzuweisungsdienst von/.test(e.subject)||/^Marokkanische Reisehinweise/.test(e.subject)},function(e){var n,r="de_DE",t={};return/^Wichtige Information bez\xfcglich Ihres Fluges/.test(e.subject)||/^Neuer Sitzplatzzuweisungsdienst von/.test(e.subject)?(t.reservationId=/IHRE BUCHUNGSNUMMER LAUTET:/,t.passengers=/PASSAGIERE/,t.goingOut=/Ausgehend/,t.comingBack=/Zur\xfcckkommend/,(n=loadHelper("ryanair.com-info-skeleton.js"))(e,r,t)):/^Marokkanische Reisehinweise/.test(e.subject)?(t.reservationId=/YOUR CONFIRMATION NUMBER IS:/,t.passengers=/PASSENGERS/,t.goingOut=/GOING OUT/,t.comingBack=/COMING BACK/,(n=loadHelper("ryanair.com-info-skeleton.js"))(e,r,t)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/555","SG6036a85e"),new ReverseTemplate("ryanair.com-reminder-es",function(e){return/^Consejos para viajar a/.test(e.subject)||/^\d. Notificaci\xf3n de [Cc]ambio de horario/.test(e.subject)},function(e){var n,r="es_ES",t={};return/^Consejos para viajar a/.test(e.subject)?(t.reservationId=/YOUR CONFIRMATION NUMBER IS:/,t.passengers=/PASSENGERS/,t.goingOut=/GOING OUT/,t.comingBack=/COMING BACK/,(n=loadHelper("ryanair.com-info-skeleton.js"))(e,r,t)):/^\d. Notificaci\xf3n de [Cc]ambio de horario/.test(e.subject)?(t.reservationId=/SU N\xdaMERO DE CONFIRMACI\xd3N ES:/,t.passengers=/PASAJEROS/,t.goingOut=/SALIDA/,t.comingBack=/LLEGADA/,(n=loadHelper("ryanair.com-info-skeleton.js"))(e,r,t)):void 0},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/244/534/556","SG1dad6348")]);
