import WidgetKit

@objc(Widgetkit)
class Widgetkit: NSObject {
    
    @objc(reloadAllTimelines)
    func reloadAllTimelines() -> Void {
        if #available(iOS 14.0, *) {
            #if arch(arm64) || arch(i386) || arch(x86_64)
                WidgetCenter.shared.reloadAllTimelines()
            #endif
        }
    }

    @objc(reloadTimelines:)
    func reloadTimelines(ofKind: String) -> Void {
        if #available(iOS 14.0, *) {
            #if arch(arm64) || arch(i386) || arch(x86_64)
                WidgetCenter.shared.reloadTimelines(ofKind: ofKind)
            #endif
        }
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
