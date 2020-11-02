#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Widgetkit, NSObject)

RCT_EXTERN_METHOD(reloadAllTimelines)
RCT_EXTERN_METHOD(reloadTimelines:(NSString *)ofKind)
RCT_EXTERN_METHOD(getItem:(NSString *)key withAppGroup:(NSString *)appGroup withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(setItem:(NSString *)key withValue:(NSString *)value withAppGroup:(NSString *)appGroup withResolver:(RCTPromiseResolveBlock)resolve withRejecter:(RCTPromiseRejectBlock)reject)

@end
