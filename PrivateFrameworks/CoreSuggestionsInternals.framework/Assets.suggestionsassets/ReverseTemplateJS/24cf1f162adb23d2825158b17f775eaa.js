// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("uci_cinemas-confirmation-it",function(e){return/WEBTIC - RIEPILOGO/.test(e.subject)},function(e){if(/WEBTIC - RIEPILOGO/.test(e.subject)){var t="it_IT",a={};a.reservationUnderName_prefix="Ciao",a.eventName_prefix=/(Spettacolo:|Film:)/,a.startDate_prefix="Data, Orario, Sala:",a.placeName_prefix="Presso:";var i=loadHelper("uci_cinemas-confirmation-skeleton.js");return i(e,t,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1340/1449/1450","SGe13e69cd")]);
