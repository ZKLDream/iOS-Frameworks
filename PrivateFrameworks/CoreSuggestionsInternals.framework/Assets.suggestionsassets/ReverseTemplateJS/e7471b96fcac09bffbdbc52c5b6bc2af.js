// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("carrefourspectacles.fr-confirmation-fr",function(e){return/^Votre commande /.test(e.subject)},function(e){if(/^Votre commande /.test(e.subject)){var t,o="fr_FR",r={};return int(e.epoch)>=1435622400?(r.ticketNumber_prefix=/Votre commande \: /,r.underName_prefix=/Bonjour /,r.eventDetails_prefix=/D\xe9tail de votre commande/,r.totalPrice_prefix=/Total/,t=loadHelper("carrefourspectacles-confirmation-skeleton-S20.js")):(r.hello="Bonjour",r.amount="Montant total",r.detail="D\xe9tails de vos places",r.category="en cat\xe9gorie",r.number="Votre num\xe9ro de commande",r.part="Votre commande se d\xe9compose de la fa\xe7on suivante",t=loadHelper("carrefourspectacles-confirmation-skeleton.js")),t(e,o,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1340/1347/1348","SGce2567f8"),new ReverseTemplate("ticketonline.de-noevent-de",function(e){},function(e){},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1340/1437/1440","SGcfdd8081")]);
