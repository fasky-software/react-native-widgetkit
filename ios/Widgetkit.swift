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

    @objc(getItem:withAppGroup:withResolver:withRejecter:)
    func getItem(key: String, appGroup: String, resolve: RCTPromiseResolveBlock,reject: RCTPromiseRejectBlock) -> Void {
        var sharedDefaults: UserDefaults? = nil;
        
        if(appGroup != "") {
            sharedDefaults = UserDefaults.init(suiteName: appGroup)
        }
        
        if(sharedDefaults == nil) {
            resolve(nil)
            return
        }
        
        let value = sharedDefaults?.value(forKey: key)
        resolve(value);
    }

    @objc(setItem:withValue:withAppGroup:withResolver:withRejecter:)
    func setItem(key: String, value: String, appGroup: String, resolve: RCTPromiseResolveBlock,reject: RCTPromiseRejectBlock) -> Void {
        var sharedDefaults: UserDefaults? = nil;
        
        if(appGroup != "") {
            sharedDefaults = UserDefaults.init(suiteName: appGroup)
        }
        
        if(sharedDefaults == nil) {
            resolve(nil)
            return
        }
        
        sharedDefaults?.setValue(value, forKey: key)
        resolve(nil)
    }


    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
