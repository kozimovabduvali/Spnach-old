export function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (/chrome|crios/i.test(userAgent) && !/edge|edg|opr|opera/i.test(userAgent)) {
        return 'Chrome';
    } else if (/safari/i.test(userAgent) && !/chrome|crios|chromium/i.test(userAgent)) {
        return 'Safari';
    } else if (/firefox|fxios/i.test(userAgent)) {
        return 'Firefox';
    } else if (/edg/i.test(userAgent)) {
        return 'Edge';
    } else if (/opr|opera/i.test(userAgent)) {
        return 'Opera';
    } else {
        return 'Unknown';
    }
}
