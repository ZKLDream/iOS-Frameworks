// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("budget.fr",function(e){return/^Confirmation de R\xe9servation/.test(e.subject)||/^Confirmation d'Annulation/.test(e.subject)||/(logo|Budget)/.test(e.subject)},function(e){var t="fr_FR",o={};if(o.confirm=/(^Confirmation de R\xe9servation|^logo)/,o.reservationId=/Votre num.+ro de r.+servation est le : (.*)\./,o.guestName=/Cher\(e\)\s(.+)\,/,o.car=/Cat.+gorie de v.+hicule\: (.+)/,o.totalPrice=/Montant \: (.+)/,o.pickUpLoc=/Agence de d.+part\:\s(.+)/,o.dropOffLoc=/Agence de retour\:\s+(.+)/,o.pickUpTime=/part \:.*?, ($<pickupDateTime>.*?\s\d{2}\:\d{2})/,o.pickUpTimeAlt=/location: du.*?, ($<pickupDateTime>.*?\s\d{2}\:\d{2})/,o.dropoffTime=/retour \:.*?, ($<dropoffDateTime>.*?\s\d{2}\:\d{2})/,o.dropoffTimeAlt=/au.*?, ($<dropoffDateTime>.*?\s\d{2}\:\d{2})/,o.cancel=/(^Confirmation d'Annulation|^Budget)/,o.cancellationId=/votre r.+servation (.+) a bien/,o.guestNameCancel=/Cher\(e\)\s(.+)\,/,o.pickUpDateCancel=/Date du d.+part \: (.+)/,o.dropOffDateCancel=/Date du retour \: (.+)/,o.pickUpLocCancel=/Agence de d.+part\: (.+)/,o.dropOffLocCancel=/Agence de retour\: (.+)/,!o.confirm.test(e.subject)&&!o.cancel.test(e.subject))return CONTINUE;var r=loadHelper("budget.com-plain-confirmation-skeleton-europe.js");return r(e,t,o)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/69/77","SGf6e889b1")]);
