// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("squaremeal.co.uk-cancellation-en-2015",function(e){},function(e){if(/^Booking cancellation/.test(e.subject)){var n={};n.underName=/Dear (.*?),/,n.data=/dining at ($<restaurant>.*?) on ($<date>.*?). Your booking ($<reservationId>.*?) has/;var a="en_GB",r=loadHelper("squaremeal.co.uk-cancellation-skeleton-2015.js");return r(e,a,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1219/1321/1323","SGe95723cb"),new ReverseTemplate("squaremeal.co.uk-confirmation-en-2015",function(e){return!0},function(e){if(/^Your booking confirmation/.test(e.subject)){var n={};n.person=/for (\d+) people/,n.number=/Reference number\: (.*?)\n/,n.restaurant=/Restaurant\: (.*?)\s</,n.date="Date",n.underName=/Diner's name\: (.*?)\n/,n.cancel="or cancel";var a="en_GB",r=loadHelper("squaremeal.co.uk-confirmation-skeleton-2015.js");return r(e,a,n)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1219/1321/1325","SG5e2eb36c")]);
