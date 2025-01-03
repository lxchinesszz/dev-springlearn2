/**
 * 判断设备
 */
export function isMobile() {
    const regExpMatchArray = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    if (regExpMatchArray) {
        return true;
    }
    return false;
}
export class Device {
    constructor(mobile, clientWidth, clientHeight) {
        this.mobile = mobile;
        this.clientWidth = clientWidth;
        this.clientHeight = clientHeight;
    }
}
/**
 * 返回设备信息
 */
export function device() {
    return new Device(isMobile(), document.body.clientWidth, document.body.clientHeight);
}
//# sourceMappingURL=device.js.map