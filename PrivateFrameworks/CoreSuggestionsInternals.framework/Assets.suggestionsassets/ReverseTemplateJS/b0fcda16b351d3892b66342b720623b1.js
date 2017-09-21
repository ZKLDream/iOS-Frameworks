// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("toyota.jp",function(e){return/\u30c8\u30e8\u30bf\u30ec\u30f3\u30bf\u30ea\u30fc\u30b9\u672d\u5e4c\u3078\u3054\u4e88\u7d04\u9802\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002/.test(e.subject)||/\u30c8\u30e8\u30bf\u30ec\u30f3\u30bf\u30ab\u30fc\u3078\u3054\u4e88\u7d04\u9802\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059/.test(e.subject)||/[\u30c8\u30e8\u30bf\u30ec\u30f3\u30bf\u30ab\u30fc]\u3000\u3054\u4e88\u7d04\u306e\u5909\u66f4\u3092\u627f\u308a\u307e\u3057\u305f\u3002/.test(e.subject)||/\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88\u7d04/.test(e.subject)||/\u3054\u4e88\u7d04\u306e\u53d6\u6d88\u3092\u627f\u308a\u307e\u3057\u305f\u3002/.test(e.subject)||/\u3054\u4e88\u7d04\u306e\u5909\u66f4\u3092\u627f\u308a\u307e\u3057\u305f/.test(e.subject)||/\u3054\u51fa\u767a\u306e\u4e8b\u524d\u6848\u5185/.test(e.subject)},function(e){var t="ja_JP",s={};if(s.confirmSubject=/(?:\u30c8\u30e8\u30bf\u30ec\u30f3\u30bf\u30ea\u30fc\u30b9\u672d\u5e4c\u3078\u3054\u4e88\u7d04\u9802\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002|\u30c8\u30e8\u30bf\u30ec\u30f3\u30bf\u30ab\u30fc\u3078\u3054\u4e88\u7d04\u9802\u304d\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059|\u3054\u4e88\u7d04\u306e\u5909\u66f4\u3092\u627f\u308a\u307e\u3057\u305f|\u30ec\u30f3\u30bf\u30ab\u30fc\u3054\u4e88|\u3054\u51fa\u767a\u306e\u4e8b\u524d\u6848\u5185)/,s.reservationId=/\u4e88\u7d04\u756a\u53f7\s+(.+)/,s.guestName=/\u304a\u540d\u524d\s+(.+)/,s.guestEmail=/e-mail\u30a2\u30c9\u30ec\u30b9\s+(.+)/,s.pickupName=/\u51fa\u767a\u5e97\u8217\s+(.+)/,s.pickupNameAndPhone=/\u51fa\u767a\u5e97\u8217\s+(.+)\s\((?:TEL:)?(.+)\)/,s.dropoffName=/\u8fd4\u5374\u5e97\u8217\s+(.+)/,s.pickupTime=/\u51fa\u767a\u65e5\u6642\s+(.+)/,s.dropoffTime=/\u8fd4\u5374\u65e5\u6642\s+(.+)/,s.car=/\u3054\u5e0c\u671b\u30af\u30e9\u30b9\s+(.+)/,s.price=/\u3054\u5229\u7528\u7dcf\u984d\uff08\u7a0e\u8fbc\uff09:\s+(.+)/,s.priceAlt=/\u3054\u5229\u7528\u7dcf\u984d\uff08\u7a0e\u8fbc\uff09\uff1a\s+(.+)/,s.reminderSubject=/\u3054\u51fa\u767a\u306e\u4e8b\u524d\u6848\u5185/,s.cancellationSubject=/\u3054\u4e88\u7d04\u306e\u53d6\u6d88\u3092\u627f\u308a\u307e\u3057\u305f\u3002/,!s.confirmSubject.test(e.subject)&&!s.cancellationSubject.test(e.subject)||/\u4e0b\u8a18\u306e\u7406\u7531\u306b\u3088\u308a\u3001\u4eca\u56de\u306e\u3054\u4e88\u7d04\u306f\u304a\u53d7\u3051\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002/.test(e.plain))return CONTINUE;var c=loadHelper("toyota-jp.js");return c(e,t,s)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/231/232","SG8cc7345c"),new ReverseTemplate("toyota.zh",function(e){return/\u7528\u4e0d\u71b1\u719f\u9810\u7d04\u3002|\u611f\u8b1d\u60a8\u9810\u7d04Toyota Rent a Lease\u672d\u5e4c\u3002/.test(e.subject)},function(e){var t="zh_Hans_CN",s={};if(s.confirmSubject=/\u7528\u4e0d\u71b1\u719f\u9810\u7d04\u3002|\u611f\u8b1d\u60a8\u9810\u7d04Toyota Rent a Lease\u672d\u5e4c\u3002/,s.reservationId=/\u9810\u7d04\u865f\u78bc\s+(.+)/,s.guestName=/\u59d3\u540d\s+(.+)/,s.guestEmail=/Email\u4fe1\u7bb1\s+(.+)/,s.pickupName=/\u51fa\u767c\u71df\u696d\u8655\s+(.+)/,s.pickupNameAndPhone=/\u51fa\u767a\u5e97\u8217\s+(.+)\s\((.+)\)/,s.dropoffName=/\u9084\u8eca\u71df\u696d\u8655\s+(.+)/,s.pickupTime=/\u51fa\u767c\u65e5\u671f\u6642\u9593\s+(.+)/,s.dropoffTime=/\u9084\u8eca\u65e5\u671f\u6642\u9593\s+(.+)/,s.car=/\u9700\u6c42\u7b49\u7d1a\s+(.+)/,s.price=/Basic rate\uff1a\s+(.+)/,s.priceAlt=/\u3054\u5229\u7528\u7dcf\u984d\uff08\u7a0e\u8fbc\uff09\uff1a\s+(.+)/,s.reminderSubject=/\u3054\u51fa\u767a\u306e\u4e8b\u524d\u6848\u5185/,s.cancellationSubject=/\u3054\u4e88\u7d04\u306e\u53d6\u6d88\u3092\u627f\u308a\u307e\u3057\u305f\u3002/,!s.confirmSubject.test(e.subject)&&!s.cancellationSubject.test(e.subject))return CONTINUE;var c=loadHelper("toyota-jp.js");return c(e,t,s)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/10/231/233","SG7a85cf1e")]);
