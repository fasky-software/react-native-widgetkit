import WidgetKit

@objc(Widgetkit)
class Widgetkit: NSObject {
    
    @objc(reloadAllTimelines)
    func reloadAllTimelines() -> Void {
        if #available(iOS 14.0, *) {
            WidgetCenter.shared.reloadAllTimelines()
        }
    }

    @objc(reloadTimelines:)
    func reloadTimelines(ofKind: String) -> Void {
        if #available(iOS 14.0, *) {
            WidgetCenter.shared.reloadTimelines(ofKind: ofKind)
        }
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
