// Copyright 2014 Apple Inc.  All Rights Reserved.
new ReverseTemplateList([new ReverseTemplate("agoda.com-cancellation-zh-cn",function(e){return/\u5df2\u88ab\u53d6\u6d88/.test(e.subject)},function(e){if(!/\u5df2\u88ab\u53d6\u6d88/.test(e.subject))return CONTINUE;var t="en_US",a={firstName:"\u5ba2\u4eba\u540d\u5b57",lastName:"\u5ba2\u4eba\u59d3\u6c0f",reservationId:"\u9884\u8ba2\u7f16\u7801",hotelName:"\u9152\u5e97\u4f4f\u5bbf\u540d\u79f0",checkInDate:"\u62b5\u8fbe\u65e5\u671f",checkOutDate:"\u79bb\u5e97\u65e5\u671f",originalBookingDetails:"\u539f\u8ba2\u5355\u8be6\u60c5",cancellationDetails:"\u53d6\u6d88\u8be6\u60c5",lastNameFirst:!0};return loadHelper("agoda.com-cancellation-skeleton.js")(e,t,a)},"0/1/2/3/4/5/6/5/7/7/7/7/4/8/9/662/673/679","SG294fbddd")]);
