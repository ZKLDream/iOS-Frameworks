// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("car.orix.co.jp",function(e){return/\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u5b8c\u4e86\u30e1\u30fc\u30eb/.test(e.subject)||/\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u5909\u66f4\u30e1\u30fc\u30eb/.test(e.subject)||/\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u53d6\u6d88\u3057\u30e1\u30fc\u30eb/.test(e.subject)},function(e){var t="ja_JP",c={};if(c.confirmSubject=/\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u5b8c\u4e86\u30e1\u30fc\u30eb|\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u5909\u66f4\u30e1\u30fc\u30eb/,c.reservationId=/\u4e88\u7d04\u756a\u53f7\uff1a(.+)/,c.guestName=/(.+)/,c.dates=/\u5229\u7528\u65e5\u7a0b\uff1a($<pickupTime>.+)\s+.\s+($<dropoffTime>.+)/,c.pickup=/\u51fa\u767a\u5e97\u8217\uff1a(.+)/,c.dropoff=/\u8fd4\u5374\u5e97\u8217\uff1a(.+)/,c.car=/\u8eca\u306e\u30af\u30e9\u30b9\uff1a(.+)/,c.price=/\u3054\u5229\u7528\u6599\u91d1 \uff1a(.+)/,c.cancellationSubject=/\u30aa\u30ea\u30c3\u30af\u30b9\u30ec\u30f3\u30bf\u30ab\u30fc\uff1a\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04\u53d6\u6d88\u3057\u30e1\u30fc\u30eb/,!c.confirmSubject.test(e.subject)&&!c.cancellationSubject.test(e.subject))return CONTINUE;var r=loadHelper("car.orix.co.jp-skeleton.js");return r(e,t,c)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/180/181","SG8cd43a67")]);
