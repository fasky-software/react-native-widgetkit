import WidgetKit

@objc(Widgetkit)
class Widgetkit: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*a*b)
    }
    
    @objc(reloadAllTimelines)
    func reloadAllTimelines() -> Void {
        if #available(iOS 14.0, *) {
            WidgetCenter.shared.reloadAllTimelines()
        }
    }
}
