// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hertz.com-cancellation-de",function(e){return/^Stornierung Ihrer Hertz Reservierung/.test(e.subject)},function(e){if(/^Stornierung Ihrer Hertz Reservierung/.test(e.subject)){var r="de_DE",t={};t.customerNamePrefix=/Thanks for Traveling at the Speed of Hertz/,t.reservationIdPrefix=/(?:Ihre Reservierungsnummer lautet:|Nummer Ihrer Stornierung|Reservierungsnummer:)/,t.modifyReservationUrlPrefix=/Reservierung \xe4ndern \/ stornieren/,t.viewModifyReservationUrlPrefix="View/Modify/Cancel",t.beginCheckInUrlPrefix="Begin Check-In",t.onlineCheckInUrlPrefix=/\u201eOnline Check-In\u201c/,t.pickupTimePrefix="Anmietung",t.returnTimePrefix="R\xfcckgabe",t.pickupAndReturnLocationPrefix=/(?:Anmietstation & R\xfcckgabestation|Ort der Anmietung und Ort der R\xfcckgabe)/,t.pickupLocationPrefix=/Anmietstation/,t.returnLocationPrefix="R\xfcckgabestation",t.addressPrefix="Adresse",t.yourVehiclePrefix="Ihr Fahrzeug",t.totalApproximateChargePrefix=/Voraussichtliche Kosten/,t.priceGuarantee=/Der Preis ist garantiert/,t.locationTypePrefix="Anmietstation::",t.discountsPrefix="Zugeh\xf6rigkeit",t.phoneNumberPrefix="Telefonnummer::",t.approximateChargePrefix=/Voraussichtliche Kosten/,t.isCancelled=/^Stornierung Ihrer Hertz Reservierung/.test(e.subject);var i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/140","SG3a14ea66"),new ReverseTemplate("hertz.com-cancellation-en",function(e){return/^Hertz Reservation Cancellation/.test(e.subject)},function(e){if(/^Hertz Reservation Cancellation/.test(e.subject)){var r="en_US",t={};t.customerNamePrefix=/Thanks for Travell?ing at the [Ss]peed of Hertz/,t.reservationIdPrefix=/(?:[Cc]onfirmation|[Cc]ancellation) [Nn]umber(?:\sis:|:)?/,t.modifyReservationUrlPrefix=/Modify\/(?:\s)?Cancel Reservation/,t.viewModifyReservationUrlPrefix="View/Modify/Cancel",t.beginCheckInUrlPrefix="Begin Check-In",t.onlineCheckInUrlPrefix=/On-?line Check-In/,t.pickupTimePrefix="Pickup Time",t.alternatePickupTimePrefix="Pick Up time",t.pickupAndReturnLocationPrefix=/Pick\s?[Uu]p(?:\sLocation)? (?:and|&) Return Location\.?/,t.pickupLocationPrefix=/Pick\s?[Uu]p Location/,t.returnLocationPrefix="Return Location",t.addressPrefix="Address",t.yourVehiclePrefix="Your Vehicle",t.totalApproximateChargePrefix=/Total (?:Approximate|Estimated\*) Charge/,t.price=/(\]\s+Total\s+\[|Total Approximate Charge)/,t.locationTypePrefix="Location Type",t.discountsPrefix="Discounts",t.phoneNumberPrefix="Phone Number",t.approximateChargePrefix=/(?:Approximate|Estimated\*) Charge/,t.isCancelled=/^Hertz Reservation Cancellation/.test(e.subject);var i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/141","SG8349729f"),new ReverseTemplate("hertz.com-cancellation-es",function(e){return/^Cancelaci\xf3n de (:?la\s)?Reserva (:?de\s)?Hertz/.test(e.subject)},function(e){if(/^Cancelaci\xf3n de (:?la\s)?Reserva (:?de\s)?Hertz/.test(e.subject)){var r=loadHelper("hertz.com-microdata-parser.js"),t=r(e);if(t)return t}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/142","SG9cff4a5b"),new ReverseTemplate("hertz.com-cancellation-it",function(e){return/^Cancellazione della prenotazione Hertz/.test(e.subject)},function(e){if(/^Cancellazione della prenotazione Hertz/.test(e.subject)){var r=loadHelper("hertz.com-microdata-parser.js"),t=r(e);if(t)return t}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/143","SG1a194bdf"),new ReverseTemplate("hertz.com-cancellation-nl",function(e){return/^Hertz Annulering Reservering/.test(e.subject)},function(e){if(/^Hertz Annulering Reservering/.test(e.subject)){var r=loadHelper("hertz.com-microdata-parser.js"),t=r(e);if(t)return t}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/144","SGb13f83b6"),new ReverseTemplate("hertz.com-confirmation-de",function(e){return/^Meine Hertz Reservierung/.test(e.subject)},function(e){if(/^Meine Hertz Reservierung/.test(e.subject)){var r="de_DE",t={};t.customerNamePrefix=/Thanks for Traveling at the Speed of Hertz/,t.reservationIdPrefix=/(?:Ihre Reservierungsnummer lautet:|Nummer Ihrer Stornierung|Reservierungsnummer:)/,t.modifyReservationUrlPrefix=/Reservierung \xe4ndern \/ stornieren/,t.viewModifyReservationUrlPrefix="View/Modify/Cancel",t.beginCheckInUrlPrefix="Begin Check-In",t.onlineCheckInUrlPrefix=/\u201eOnline Check-In\u201c/,t.pickupTimePrefix="Anmietung",t.returnTimePrefix="R\xfcckgabe",t.pickupAndReturnLocationPrefix=/(?:Anmietstation & R\xfcckgabestation|Ort der Anmietung und Ort der R\xfcckgabe)/,t.pickupLocationPrefix=/Anmietstation/,t.returnLocationPrefix="R\xfcckgabestation",t.addressPrefix="Adresse",t.yourVehiclePrefix="Ihr Fahrzeug",t.totalApproximateChargePrefix=/Voraussichtliche Kosten/,t.priceGuarantee=/Der Preis ist garantiert/,t.locationTypePrefix="Anmietstation::",t.discountsPrefix="Zugeh\xf6rigkeit",t.phoneNumberPrefix="Telefonnummer::",t.approximateChargePrefix=/Voraussichtliche Kosten/,t.isCancelled=/^Stornierung Ihrer Hertz Reservierung/.test(e.subject);var i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/146","SG6e1a10d2"),new ReverseTemplate("hertz.com-confirmation-en",function(e){return/^My Hertz Reservation/.test(e.subject)||/^Your Hertz Reservation/.test(e.subject)},function(e){if(/^My Hertz Reservation/.test(e.subject)||/^Your Hertz Reservation/.test(e.subject)){var r="en_US",t={};t.customerNamePrefix=/Thanks for Travell?ing at the [Ss]peed of Hertz/,t.reservationIdPrefix=/(?:[Cc]onfirmation|[Cc]ancellation) [Nn]umber(?:\sis:|:)?/,t.modifyReservationUrlPrefix=/Modify\/(?:\s)?Cancel Reservation/,t.viewModifyReservationUrlPrefix="View/Modify/Cancel",t.beginCheckInUrlPrefix="Begin Check-In",t.onlineCheckInUrlPrefix=/On-?line Check-In/,t.pickupTimePrefix="Pickup Time",t.alternatePickupTimePrefix="Pick Up time",t.pickupAndReturnLocationPrefix=/Pick\s?[Uu]p(?:\sLocation)? (?:and|&) Return Location\.?/,t.pickupLocationPrefix=/Pick\s?[Uu]p Location/,t.returnLocationPrefix="Return Location",t.addressPrefix="Address",t.yourVehiclePrefix="Your Vehicle",t.totalApproximateChargePrefix=/Total (?:Approximate|Estimated\*) Charge/,t.price=/(\]\s+Total\s+\[|Total Approximate Charge)/,t.locationTypePrefix="Location Type",t.discountsPrefix="Discounts",t.phoneNumberPrefix="Phone Number",t.approximateChargePrefix=/(?:Approximate|Estimated\*) Charge/,t.isCancelled=/^Hertz Reservation Cancellation/.test(e.subject);var i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/147","SG6b7cb682"),new ReverseTemplate("hertz.com-confirmation-es",function(e){return/^Mi Reserva (:?de\s)?Hertz/.test(e.subject)},function(e){if(/^Mi Reserva (:?de\s)?Hertz/.test(e.subject)){var r="es_ES",t={},i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/148","SG69a140d1"),new ReverseTemplate("hertz.com-confirmation-fr",function(e){return/^Ma r\xe9servation Hertz/.test(e.subject)||/^Annulation de la r\xe9servation Hertz/.test(e.subject)},function(e){if(/^Ma r\xe9servation Hertz/.test(e.subject)||/^Annulation de la r\xe9servation Hertz/.test(e.subject)){var r="fr_FR",t={};t.customerNamePrefix=/Merci d'avoir choisi Hertz/,t.reservationIdPrefix=/[Nn]um\xe9ro (?:de confirmation est:|d'annulation \[reservation ID\]|de r\xe9servation :)/,t.modifyReservationUrlPrefix=/Modifier\/Annuler une r\xe9servation/,t.viewModifyReservationUrlPrefix="Voir/ Modifier/ Annuler",t.beginCheckInUrlPrefix="Begin Check-In",t.onlineCheckInUrlPrefix=/Online Check-In/,t.pickupTimePrefix="Date de d\xe9part :",t.returnTimePrefix="Date de retour :",t.pickupAndReturnLocationPrefix=/(?:Lieu de d\xe9part : & Lieu de restitution :|Location de prise en charge et de restitution)/,t.pickupLocationPrefix=/Lieu de d\xe9part :/,t.returnLocationPrefix="Lieu de restitution :",t.addressPrefix="Adresse",t.yourVehiclePrefix="Votre v\xe9hicule",t.totalApproximateChargePrefix=/Montant total/,t.priceGuarantee=/Ce tarif est garanti/,t.locationTypePrefix="Type d'agence",t.discountsPrefix="Discount:",t.phoneNumberPrefix="T\xe9l\xe9phone",t.approximateChargePrefix=/Montant total/,t.isCancelled=/^Annulation de la r\xe9servation Hertz/.test(e.subject);var i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/149","SG1b5b88bb"),new ReverseTemplate("hertz.com-confirmation-it",function(e){return/^La mia prenotazione Hertz/.test(e.subject)},function(e){if(/^La mia prenotazione Hertz/.test(e.subject)){var r="it_IT",t={};t.reservationId="Numero di Conferma:",t.price="Totale",t.pickupTime="Ritiro:",t.dropoffTime="Consegna:",t.timeSeparator="a",t.pickupAndDropoffAddress="Agenzia di Ritiro e Consegna:",t.pickupAddress="Pick-up:",t.dropoffAddress="Riconsegna:",t.officeType="Tipo di ufficio di noleggio::",t.phoneNumber="Numero di telefono:";var i=loadHelper("hertz.com-confirmation-alt-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/150","SGb8e8222e"),new ReverseTemplate("hertz.com-confirmation-nl",function(e){return/^Mijn Hertz Reservering/.test(e.subject)},function(e){if(/^Mijn Hertz Reservering/.test(e.subject)){var r="nl_NL",t={},i=loadHelper("hertz.com-confirmation-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/153","SG1553063e"),new ReverseTemplate("hertz.com-reminder-en",function(e){return/^Important Information About Your Upcoming Trip/.test(e.subject)},function(e){if(/^Important Information About Your Upcoming Trip/.test(e.subject)){var r="en_US",t={confirmationNumberPrefix:"Your Confirmation Number:",namePrefix:"Hello",pickupLocationPrefix:"Pick-up Location:",pickupDatePrefix:"Pick-up Date",modifyReservationUrlPrefix:"Modify / Cancel My Reservation"},i=loadHelper("hertz.com-reminder-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/154","SGa168a579"),new ReverseTemplate("hertz.com-reminder-fr",function(e){return/^Information importante sur votre location/.test(e.subject)},function(e){if(/^Information importante sur votre location/.test(e.subject)){var r="fr_FR",t={confirmationNumberPrefix:"Votre num\xe9ro de confirmation:",namePrefix:"Bonjour",pickupLocationPrefix:"Agence de d\xe9part :",pickupDatePrefix:"Date de d\xe9part :",modifyReservationUrlPrefix:"Modifier / Annuler ma r\xe9servation"},i=loadHelper("hertz.com-reminder-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/139/155","SGcc907e25")]);
