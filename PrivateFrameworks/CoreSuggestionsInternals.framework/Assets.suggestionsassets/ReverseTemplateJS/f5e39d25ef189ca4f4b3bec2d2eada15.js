// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("toptable.co.uk-cancellation-en",function(e){return/booking cancellation$/.test(e.subject)},function(e){if(/booking cancellation$/.test(e.subject)){var t={};t.restaurant="Restaurant";var n="en_US",o=loadHelper("toptable.co.uk-cancellation-skeleton.js");return o(e,n,t)}return CONTINUE},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1219/1334/1335","SG9db85877"),new ReverseTemplate("toptable.co.uk-confirmation-en",function(e){return/^Booking confirmation for/.test(e.subject)||/^Your .*? booking amendment$/.test(e.subject)},function(e){if(/^Booking confirmation for/.test(e.subject)||/^Your .*? booking amendment$/.test(e.subject)){var t={};t.restaurant="Restaurant:",t.cancel="cancel this booking <",t.modify="Change this booking <";var n="en_GB",o=loadHelper("toptable.co.uk-confirmation-skeleton.js");return o(e,n,t)}},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/1219/1334/1336","SG3f914579")]);
