// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("choicehotels.com",function(e){return/Reservation Confirmation/.test(e.subject)||/Reservation Cancellation/.test(e.subject)},function(e){var o="en_US",n={};n.com=/choicehotels\.com/,n.ca=/choicehotels\.ca/,n.au=/choicehotels\.com\.au/,n.ie=/choicehotels\.ie/,n.emailTitelConfirmation=/Reservation Confirmation/,n.reservationId="Reservation Number",n.guestName="Name:",n.dateText="Your Reservation number is",n.checkinTime="Check-In time:",n.checkoutTime="Check-Out time:",n.price="Estimated Total:",n.modifyUrl="To update or cancel your reservation",n.comReservationId="Confirmation Number:",n.comCheckinDate="Check In:",n.comCheckoutDate="Check Out:",n.comCheckinTime="Check In Time:",n.comCheckoutTime="Check Out Time:",n.comModifyUrl="From our View/Change/Cancel Reservation",n.comHotelInfo="Phone:",n.com2016=/We're pleased to confirm your upcoming stay/,n.com2016GuestName=/Name: (.+)/,n.com2016ReservationId=/Confirmation Number: (\d+)/,n.com2016CheckinDateTime=/Check In: (?:[^ ]+, )?(.+) \((.+)\)/,n.com2016CheckoutDateTime=/Check Out: (?:[^ ]+, )?(.+) \((.+)\)/,n.com2016ModifyUrl="From our View/Change/Cancel Reservation",n.com2016HotelInfo=/\+\d[\d\(\) \-\.]+\d/,n.emailTitelCancelConfirmation=/Reservation Cancellation/,n.cancelReservationId=/(?:for confirmation number|Reservation Confirmation Number\:) (\d+)/,n.cancelGuestName=/Dear (.+)/,n.cancelDates=/We(?: a|')re sorry that you will not be staying with us (?:from|on) ([^\.]+) to ([^\.]+)/,n.cancelComReservationId=/(?:for confirmation number|Reservation Confirmation Number\:) (\d+)/,n.cancelComGuestName=/Dear (.+)\,/,n.cancelComDates=/We(?: a|')re sorry that you will not be staying with us (?:from|on) ([^\.]+) to ([^\.]+)/;var t=loadHelper("choicehotels.com.js");return t(e,o,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/740/741","SG4b15eef1"),new ReverseTemplate("choicehotels.com-fr",function(e){return/Confirmation de r\xe9servation/.test(e.subject)||/Annulation de r\xe9servation|Annulation de la reservation /.test(e.subject)},function(e){var o="fr_FR",n={};n.fr=/choicehotels.fr/,n.emailTitelConfirmation=/Confirmation de r\xe9servation/,n.reservationId="Num\xe9ro de r\xe9servation",n.guestName="Nom :",n.dateText="Votre num\xe9ro de r\xe9servation est",n.checkinTime="Heure d'arriv\xe9e :",n.checkoutTime="Heure de d\xe9part :",n.price="Total",n.modifyUrl="Pour modifier ou anuler votre r\xe9servation",n.comReservationId="Confirmation Number:",n.comCheckinDate="Check In:",n.comCheckoutDate="Check Out:",n.comCheckinTime="Check In Time:",n.comCheckoutTime="Check Out Time:",n.comModifyUrl="From our View/Change/Cancel Reservation",n.comHotelInfo="Phone:",n.emailTitelCancelConfirmation=/Annulation de la reservation|Annulation de r\xe9servation/,n.cancelReservationId=/pour votre num\xe9ro de confirmation (.+)/,n.cancelGuestName=/Cher\(e\) (.+)/,n.cancelDates=/s\xe9journiez pas chez nous pour la p\xe9riode (.+) \xe0 (?:mer|ven)\. (.+)/,n.cancelComReservationId=/num\xe9ro de confirmation (.+)\./,n.cancelComGuestName=/Dear (.+)\,/,n.cancelComDates=/Nous sommes d\xe9sol\xe9 que vous ne s\xe9journiez pas chez nous .+\, (.+) au (.+)/;var t=loadHelper("choicehotels-skeleton.js");return t(e,o,n)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/740/742","SG51568b26")]);
