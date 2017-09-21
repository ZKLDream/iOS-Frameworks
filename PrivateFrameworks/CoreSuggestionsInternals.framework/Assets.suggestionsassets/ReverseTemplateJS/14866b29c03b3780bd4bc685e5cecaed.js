// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("hotwire.com-itinerary-confirmation-en",function(e){return/^Your Hotwire Trip/.test(e.subject)||/Hotwire Reservation Confirmation/.test(e.subject)},function(e){if(/^Your\s+Hotwire\s+Trip/.test(e.subject)||/Hotwire Reservation Confirmation/.test(e.subject)){var t,i="en_US",r={};return/Your car/.test(e.html)?(r.reservationIdPrefix="Hotwire itinerary",r.providerNameRegExp=/You do not need to reconfirm with (.*) or Hotwire\./,r.underPersonNameSuffix=/(?:, you got a great deal|, Your trip is coming up)/,r.pickUpTimePrefix="Pick up",r.dropOffTimePrefix="Drop off",r.sameDropOffLocation="Pick-up/drop-off must be the same location.",r.totalPriceRegExp=/(Trip total|Estimated trip total)/,t=loadHelper("hotwire.com-itinerary-car-confirmation-skeleton-S24.js")):/Your hotel/.test(e.html)&&(r.confirmation_id="Hotwire itinerary",r.underPersonName_suffix=", Your trip is coming up!",r.hotelName_prefix="Your hotel",r.hotelPhone_prefix="See ratings guide",r.checkInDateTime_prefix=/Check in/i,r.checkOutDateTime_prefix=/Check out/i,t=loadHelper("hotwire.com-itinerary-hotel-confirmation-skeleton-S24.js")),t(e,i,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1120/1125","SG291bc37b")]);
