// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("alamo.it.cancellation-it",function(e){},function(e){},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/15/20","SG1f3cefef"),new ReverseTemplate("alamo.it.confirmation-it",function(e){return/^Codice di riferimento Alamo/.test(e.subject)||/Alamo.it - Modifica di prenotazione/.test(e.subject)},function(e){if(/^Codice di riferimento Alamo/.test(e.subject)||/Alamo.it - Modifica di prenotazione/.test(e.subject)){var i="it_IT",o={};o.reservationId=/Numero di prenotazione. (\d+)\s+/,o.name="Utilizzatore",o.email="E-mail:",o.telephone="Telefono fisso:",o.pickup="Totale spese:",o.pickup_inner=/Ritiro/,o.pickup_name=/Ritiro.\s\s+(.*?)\s\s+/,o.dropoff="Totale spese:",o.dropoff_inner="Rilascio",o.dropoff_name=/Rilascio.\s\s+(.*?)\s\s+/,o.brand=/CAR (.*?) o\s/,o.totalPrice=/preventivate da pagarsi in loco:./,o.modifyReservationUrl="Per modificare o cancellare la tua prenotazione clicca",o.cancelReservationUrl="Per modificare o cancellare la tua prenotazione clicca";var a=loadHelper("alamo.com-skeleton.js");return a(e,i,o)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/15/21","SG7ea90c6f")]);
