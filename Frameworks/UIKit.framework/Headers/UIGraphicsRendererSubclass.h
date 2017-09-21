//
//  UIGraphicsRendererSubclass.h
//  UIKit
//
//  Copyright (c) 2016 Apple Inc. All rights reserved.
//

#import <UIKit/UIGraphicsRenderer.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^UIGraphicsDrawingActions)(__kindof UIGraphicsRendererContext *rendererContext) NS_AVAILABLE_IOS(10_0);

/*
 To create a subclass of UIGraphicsRenderer, you must include this header in your implimentation and override at least the following methods:
    + (Class)rendererContextClass
    + (nullable CGContextRef)contextWithFormat:(UIGraphicsRendererFormat *)format
 */
@interface UIGraphicsRenderer (UIGraphicsRendererProtected)
// The Class of your UIGraphicsRendererContext subclass
+ (Class)rendererContextClass NS_AVAILABLE_IOS(10_0);

// Override this to create a context with a custom format
+ (nullable CGContextRef)contextWithFormat:(UIGraphicsRendererFormat *)format CF_RETURNS_RETAINED NS_AVAILABLE_IOS(10_0);

// Override this to provide a CGContext created by a renderer with a custom initial configuration
+ (void)prepareCGContext:(CGContextRef)context withRendererContext:(UIGraphicsRendererContext *)rendererContext NS_AVAILABLE_IOS(10_0);

// Invokes the drawingActions with a context generated by +contextWithFormat:, captured in an instance of +rendererContextClass, after prepreation by +prepareCGContext:withRendererContext:
// This method is not intended to be overridden.
- (BOOL)runDrawingActions:(NS_NOESCAPE UIGraphicsDrawingActions)drawingActions completionActions:(nullable NS_NOESCAPE UIGraphicsDrawingActions)completionActions error:(NSError **)error NS_AVAILABLE_IOS(10_0);
@end

NS_ASSUME_NONNULL_END
