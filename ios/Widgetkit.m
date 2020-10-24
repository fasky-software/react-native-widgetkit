#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Widgetkit, NSObject)

RCT_EXTERN_METHOD(reloadAllTimelines)
RCT_EXTERN_METHOD(reloadTimelines:(NSString *)ofKind)

@end
