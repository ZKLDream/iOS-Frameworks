// Copyright 2014 Apple Inc.  All Rights Reserved.
(function(){var e=loadHelper("en_us.js")();return e.subject=[/Prenotazione online/,/Conferma Prenotazione/,/^Cancellazione della prenotazione/,/(.*)ha cancellato la prenotazione/,/^Conferma della prenotazione presso/,/^Ho prenotato un ristorante/,/annullamento della prenotazione - MyTable/,/annullamento della prenotazione - MyTable/,/.*stata (?:confermata|modificata) - MyTable$/,/La tua prenotazione/i,/La prenotazione \xe8 stata annullata/i,/cancellato/,/^(?:I tuoi biglietti|Notifica dell'ordine) per/,/^Sei invitato/,/^Promemoria per/,/Ticketworld\.it - Vendita Biglietti:/,/Conferma di Acquisto\s+?ticketone\.it - ID Ordine/,/WEBTIC - RIEPILOGO/,/^verifica dell'ordine viagogo/,/^L\'ordine per la transazione/,/^Scarica e-tickets - Ordinazione/,/dettagli\s+del\s+tuo\s+viaggio$/,/^I tuoi biglietti sono stati spediti - transazione/,/^Il vostro ordine \xe8 respinta/,/^Conferma dell\'ordine/],e.cancel=[/cancel/i,/annul/i,/annullata/i],e.nameInSubject=[/^La tua prenotazione - (.*)/i,/^(?:La\s+tua|Conferma)\s+prenotazione\s+presso\s+(.{2,}?)\s+in/],e.nameInBody=[/Ristorante: (.*)/i,/(?:Dati nuova prenotazione|Dettagli della prenotazione|Di seguito ti riportiamo i dati relativi):\s+(.*)/i,/Ci dispiace non poterti accogliere il .*? alle .*? da (.*)\./],e.partySize=[/(\d{1,2}) (?:persona|persone)/i],e.reservationId=[/Numero di Riferimento:[\s\S]+?(\d{3,})\s+\[\/.{3,8}\]/],e}).call();
