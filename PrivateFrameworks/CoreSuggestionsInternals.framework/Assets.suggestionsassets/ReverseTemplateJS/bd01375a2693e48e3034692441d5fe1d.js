// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotels.com-cancellation-nl",function(e){return/Uw boeking is geannuleerd - bevestigingsnr:/.test(e.subject)||/^Uw annulering op/.test(e.subject)},function(e){if(/Uw boeking is geannuleerd - bevestigingsnr:/.test(e.subject)||/^Uw annulering op/.test(e.subject)){var n=loadHelper("hotels.com-microdata-parser.js"),t=n(e);if(t)return t;var a="nl_NL",i={};/Uw boeking is geannuleerd - bevestigingsnr:/.test(e.subject)?(i.version=1,i.bookingName=/De boeking is op naam van (.+)\n/,i.checkInDate=/Incheckdatum:/,i.checkOutDate=/Uitcheckdatum:/,i.confirmationNumber=/Bevestigingsnummer van Hotels.com::?\s+(\d+)/,i.cancellationConfirmed="Je annulering is nu bevestigd.",i.cancellationTotalPrice=/Je ontvangt een restitutie voor (.+)/,i.cancellationPhone=/Gratis annuleren kan tot/):(i.version=2,i.reservationId="Bevestigingsnummer:",i.hotel="Geannuleerd hotel:",i.email="Dit e-mailbericht is verzonden naar:",i.checkInDate="Incheckdatum",i.checkOutDate="Uitcheckdatum");var s=loadHelper("hotels.com-cancellation-skeleton.js");return s(e,a,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/786/793","SGa0389eb0")]);
