// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("expediamail.com-flight-itinerary-en",function(e){return/\(?Itin(?:erary)?(?:\s*)?#(?:\s*)?\d+\)?$/.test(e.subject)||/^Expedia\s+travel\s+confirmation/.test(e.subject)},function(e){if(/(?:Travell?er Information|Traveler\(s\))/i.test(e.plain)&&/Airline Rules (?:& Regulations|\+ restrictions)/i.test(e.plain)){var t,r="en_US",i={};return/Thanks!/.test(e.plain)?(i.date=/(Departure|Return)/,i.cabin=/(Cabin:)/,i.passengers=/Traveler\(s\)/,i.passengerEnd="Special requests",i.reservationId="Itinerary #",t=loadHelper("expediamail.com-flight-itinerary-skeleton-2.js")):(i.travellers=/Travell?er Information/,i.priceSummary="Price Summary",i.priceCurrency="All prices quoted in",i.totalPrice="Total:",i.reservationId="Itinerary #",i.cancelled=/This reservation has been fully cancell?ed/,i.noProgramName="No frequent flyer details provided",i.ticketNumber="Ticket #",i.totalTravelTime="Total travel time",i.seat="Seat",t=loadHelper("expediamail.com-flight-itinerary-skeleton.js")),t(e,r,i)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1068/1084","SGbc43224e"),new ReverseTemplate("expediamail.com-flight-itinerary-jp",function(e){return/\(Itin(?:erary)?# \d+\)$/.test(e.subject)},function(e){if(/\u65c5\u884c\u8005\u60c5\u5831/.test(e.plain)&&/\u822a\u7a7a\u4f1a\u793e\u306e\u898f\u5247\u3068\u5236\u9650\u4e8b\u9805/.test(e.plain)){var t="ja_JP",r={};r.travellers=/\u65c5\u884c\u8005\u60c5\u5831/,r.priceSummary="\u6599\u91d1\u306e\u6982\u8981",r.totalPrice="\u5408\u8a08 :",r.priceCurrency=/\u6599\u91d1\u306e\u901a\u8ca8\u5358\u4f4d\u306f\u3059\u3079\u3066(.*?)\u3068\u306a\u308a\u307e\u3059\u3002/,r.reservationId="\u65c5\u7a0b #",r.cancelled=/\u3053\u306e\u4e88\u7d04\u306f\u5b8c\u5168\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f/,r.noProgramName="\u30d5\u30ea\u30fc\u30af\u30a8\u30f3\u30c8\u30d5\u30e9\u30a4\u30e4\u30fc \u30d7\u30ed\u30b0\u30e9\u30e0\u306e\u8a73\u7d30\u306f\u63d0\u4f9b\u3055\u308c\u3066\u3044\u307e\u305b\u3093",r.ticketNumber="\u30c1\u30b1\u30c3\u30c8\u756a\u53f7",r.totalTravelTime="\u5408\u8a08\u6240\u8981\u6642\u9593",r.seat="\u5ea7\u5e2d";var i=loadHelper("expediamail.com-flight-itinerary-skeleton.js");return i(e,t,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1068/1089","SG43169d43"),new ReverseTemplate("expediamail.com-hotel-itinerary-en",function(e){return/^Expedia Itinerary #:/.test(e.subject)||/^Expedia travel confirmation/.test(e.subject)||/\(Itin(?:erary)?\s?#/.test(e.subject)},function(e){if(/View hotel/.test(e.plain)){var t,r={},i="en_US";return r.reservationId="Itinerary #",r.reservedFor="Reserved for",r.totalPrice="Total",/Thanks!/.test(e.plain)?(r.hotelDetails="Hotel overview",r.reservationDetails="Reservation dates",r.checkInTime="Check-in time",r.checkOutTime="Check-out time",r.hotelUrl="View hotel",t=loadHelper("expediamail.com-hotel-itinerary-skeleton-alternative.js")):(r.hotelDetails="View hotel details <",r.telephone="Tel:",r.checkin=/(?:Checking in|Check-in)/,r.checkinTime="Check-in time starts",r.priceSummary="Price Summary",r.priceCurrency="All prices quoted in",r.cancelled=/CANCELLED/,t=loadHelper("expediamail.com-hotel-itinerary-skeleton.js")),t(e,i,r)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1068/1098","SG3115dc7f"),new ReverseTemplate("expediamail.com-travel-itinerary-en",function(e){return/^Your Trip Details/.test(e.subject)||/^Final Details For Your Trip/.test(e.subject)},function(e){if(/^Your Trip Details/.test(e.subject)||/^Final Details For Your Trip/.test(e.subject)){var t={flight:{},car:{},hotel:{}};t.emailHeader=["My Itineraries","My Account","Customer Support","Feedback"],t.mainContact="Main contact:",t.emailAddress="Email address:",t.confirmationCode="Confirmation Code:",t.flight.verify="Airline rules and regulations",t.flight.travelers=/Travell?er's name\(s\):/,t.flight.checkinUrl=/Online(?: Flight)? Check-in/,t.flight.details="Flight Details",t.flight.depart="Depart",t.flight.arrive="Arrive",t.flight.flightNumber="Flight Number:",t.flight.seatUnassigned="Seat Unassigned",t.car.verify="Car rules and regulations",t.car.pickup="Pick-up",t.car.dropoff="Drop-off",t.car.address="Address:",t.car.modify="Change/ Cancel <",t.hotel.verify="Hotel rules and regulations",t.hotel.checkin="Check-in",t.hotel.checkout="Check-out",t.hotel.modify="Change/Cancel",t.hotel.address="Address:",t.hotel.telephone="Telephone:";var r="en_US",i=loadHelper("expediamail.com-travel-itinerary-skeleton.js");return i(e,r,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1014/1068/1114","SG5268ee0b")]);
