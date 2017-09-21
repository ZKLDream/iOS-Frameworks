// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("pingg.com-invitation-en",function(e){return/^You are invited to .+/.test(e.subject)||/.+(?: ha(?:s|ve))? invited you to .+/.test(e.subject)||/.+( has)? updated your invitation to .+/.test(e.subject)},function(e){if(/^You are invited to .+/.test(e.subject)||/.+(?: ha(?:s|ve))? invited you to .+/.test(e.subject)||/.+( has)? updated your invitation to .+/.test(e.subject)){var t=Scanner.fromMessage(e);t.setLocale("en_US");var n,a,s,r,i,o,d,p,c=t.getSpan();if(p=c.nextTag("table3").innerCapture(/You (?:have been|are) invited(?: by ($<invitedBy>.*))? to ($<eventName>.*)[\.!]/),a=p?p.$eventName.trim():null,n=p?p.$invitedBy.trim():null,p=c.nextText("DATE"),p=p.parentTag("td4"),p=p.allInnerDates(),p&&2===p.length?(r=p[0].innerDate(),i=p[1].innerDate()):p&&1===p.length&&(r=p[0].innerDate()),d=c.nextText("Location:").nextTag("td3").tagContents(),not(d)&&c.nextRegExp(/\sLOCATION\s/).exists()&&(d=c.nextRegExp(/\sLOCATION\s/).parentAnyTag("td").tagContents().innerCapture(/LOCATION\s+([^]+)$/,1)),o=c.nextText("Address:").nextTag("td3"),o=o.innerAddress().exists()?o.innerAddress():o.tagContents(),not(o)&&c.nextRegExp(/\sADDRESS\s/).exists()&&(o=c.nextRegExp(/\sADDRESS\s/).parentAnyTag("td").tagContents().innerCapture(/ADDRESS\s+([^]+)$/,1)),s=c.innerCapture(/Event Web Page.? <(http.*)>/g,1).trim(),not(s)&&(s=c.innerCapture(/CLICK TO VIEW INVITATION <(.*)>/,1)),s&&s.innerText("rsvp_method").exists()&&(s=s.split("?")[0]),ASSERT(a,r))return[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",reservationStatus:"http://schema.org/ReservationPending",reservationFor:{url:s,"@type":"http://schema.org/SocialEvent",name:a,startDate:r,endDate:i,location:{"@type":"http://schema.org/Place",name:d,address:o}},appleInvitedBy:n}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/980/1002/1003","SGa3baaf61"),new ReverseTemplate("pingg.com-reminder-en",function(e){return/^Reminder from .*? about/.test(e.subject)},function(e){if(/^Reminder from .*? about/.test(e.subject)){scanner=Scanner.fromMessage(e),scanner.setLocale("en_US");var t,n,a,s,r,i,o,d,p,c;if(!scanner.getSpan().allDates().length)return CONTINUE;if(r=scanner.getSpan().innerCapture(/For complete event details, click here\. <(.*)>/,1),t=scanner.getSpan().nextTag("table2").lastInnerTag("td2").tagContents(),n=t.innerCapture(/Don't forget to ($<status>attend|RSVP for) ($<eventName>.*?)(?: hosted by ($<invitedBy>.*?))? on ($<dateTime>.*?)\./),not(n)&&(n=t.innerCapture(/\s($<invitedBy>.*?) invites you to\s+What: ($<eventName>.*)\sWhere: ($<address>.*)\sWhen: ($<dateTime>.*)\s/)),n&&(p=n.$status,p&&""+p=="attend"&&(c="Confirmed"),a=n.$eventName,s=n.$invitedBy,i=n.$dateTime,o=n.$address),i&&(i=(""+i).split("@"),i=scanner.getDetachedSpan(i[0]+" "+i[1])),ASSERT(a,i))return[{"@context":"http://schema.org","@type":"http://schema.org/EventReservation",reservationStatus:"http://schema.org/Reservation"+(c||"Pending"),reservationFor:{url:r,"@type":"http://schema.org/SocialEvent",name:a,startDate:i,location:{"@type":"http://schema.org/Place",name:d,address:o}},appleInvitedBy:s}]}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/980/1002/1004","SGf30257bf")]);
