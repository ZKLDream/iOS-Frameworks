// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotels.com-cancellation-en",function(e){return/^Confirm Cancellation Hotels\.com Confirmation/.test(e.subject)||/^Your cancellation of/.test(e.subject)||/^Your (reservation|booking) has been cancell?ed/.test(e.subject)},function(e){if(/^Confirm Cancellation Hotels\.com Confirmation/.test(e.subject)||/^Your cancellation of/.test(e.subject)||/^Your (reservation|booking) has been cancell?ed/.test(e.subject)){var t=loadHelper("hotels.com-microdata-parser.js"),c=t(e);if(c)return c;var n="en_US",a={};/^Your cancellation of/.test(e.subject)?(a.version=2,a.reservationId="Confirmation Number",a.hotel="Your Cancellation:",a.email="This email was sent to:",a.checkInDate="Check-In Date",a.checkOutDate="Check-Out Date"):(a.version=1,a.bookingName=/The booking is in the name of (.+)\n/,a.checkInDate=/Check in date\s*:/,a.checkOutDate=/Check out date\s*:/,a.confirmationNumber=/Confirmation Number:\s(\d+)/,a.cancellationConfirmed="Your cancellation is now confirmed.",a.cancellationTotalPrice=/The nightly price you agreed to pay for this hotel was (.+)/,a.cancellationPhone=/or call us on/);var o=loadHelper("hotels.com-cancellation-skeleton.js");return o(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/786/788","SGfefa2eb2"),new ReverseTemplate("hotels.com-cancellation-es",function(e){return/Confirmaci\xf3n de cancelaci\xf3n N\xfamero de confirmaci\xf3n de Hotele?s\.com/.test(e.subject)||/^Confirmar cancelaci\xf3n/.test(e.subject)||/^Tu cancelaci\xf3n del/.test(e.subject)||/^Se ha cancelado tu reserva/.test(e.subject)},function(e){if(/Confirmaci\xf3n de cancelaci\xf3n N\xfamero de confirmaci\xf3n de Hotele?s\.com/.test(e.subject)||/^Confirmar cancelaci\xf3n/.test(e.subject)||/^Tu cancelaci\xf3n del/.test(e.subject)||/^Se ha cancelado tu reserva/.test(e.subject)){var t=loadHelper("hotels.com-microdata-parser.js"),c=t(e);if(c)return c;var n="es_ES",a={};a.version=2,a.reservationId="N\xfamero de confirmaci\xf3n",a.hotel="Tu cancelaci\xf3n:",a.email="Este correo electr\xf3nico se le envi\xf3 a:",a.checkInDate="Fecha de check-in",a.checkOutDate="Fecha de check-out";var o=loadHelper("hotels.com-cancellation-skeleton.js");return o(e,n,a)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/786/789","SGa6d8ff8d")]);
