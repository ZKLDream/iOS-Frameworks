// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("neckermann.com-confirmation",function(e){return/^Bevestigingsmail/.test(e.subject)},function(e){if(/^Bevestigingsmail/.test(e.subject)){var t,n="nl_NL",o={};return o.confirmation=/Reserveringsnummer\s(.*)\n/,o.guestDetails=/Contactgegevens:/,o.guestName=/contactpersoon/,o.guestEmail=/E-mail/,o.bookingDetails=/Je hebt geboekt:/,o.hotelName=/Accommodatie/,o.hotelPhone=/Customer Contact Center\s(.*?)\s\(/,o.checkin=/Aankomst en vertrek/,o.dates=/($<checkin>.*)\s-\s($<checkout>.*)/,o.totalPrice=/Totaal*/,(t=loadHelper("neckermann.com-confirmation-skeleton.js"))(e,n,o)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/884/885","SGb04a4c42")]);
