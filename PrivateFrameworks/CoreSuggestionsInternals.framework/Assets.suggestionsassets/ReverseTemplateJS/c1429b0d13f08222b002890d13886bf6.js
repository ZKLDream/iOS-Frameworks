// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("charta.it-confirmation-it",function(e){return/Advice of order/.test(e.subject)},function(e){if(!/Advice of order/.test(e.subject))return CONTINUE;var t="it_IT",r={};return r.personUnderNamePrefix="Buyer:",r.ticketNumberPrefix="Codice :",r.eventNamePrefix="Event title:",r.eventDateTimePrefix="Event date:",r.eventLocationNamePrefix="Location:",r.pricePrefix="Transaction price:",loadHelper("charta.it-confirmation-skeleton.js")(e,t,r)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1340/1454/1455","SG38b03823")]);
