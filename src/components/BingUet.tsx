import Script from "next/script";
import { BING_UET_PID_KEY } from "@/lib/bing-uet";

const BING_UET_TAG = `
(function(w, d, t, u, o) {
    w[u] = w[u] || [], o.ts = (new Date).getTime();
    var n = d.createElement(t);
    n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),
    n.async = 1, n.onload = n.onreadystatechange = function() {
        var s = this.readyState;
        s && "loaded" !== s && "complete" !== s ||
        (o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),
        n.onload = n.onreadystatechange = null)
    };
    var i = d.getElementsByTagName(t)[0];
    i.parentNode.insertBefore(n, i);
})(window, document, "script", "uetq", {
    ti: "187276239",
    enableAutoSpaTracking: true
});
window.uetq = window.uetq || [];
window.uetq.push('consent', 'default', {
    'ad_storage': 'denied'
});
window.uetq = window.uetq || [];
window.uetq.push('consent', 'update', {
    'ad_storage': 'granted'
});
try {
    var bingPath = (location.pathname || "/").replace(/\/+$/, "") || "/";
    if (bingPath === "/thank-you") {
        var bingPidRaw = sessionStorage.getItem(${JSON.stringify(BING_UET_PID_KEY)});
        if (bingPidRaw) {
            var bingPid = JSON.parse(bingPidRaw);
            window.uetq = window.uetq || [];
            window.uetq.push('set', { 'pid': bingPid });
            sessionStorage.removeItem(${JSON.stringify(BING_UET_PID_KEY)});
        }
    }
} catch (e) {}
`;

export default function BingUet() {
  return (
    <Script id="bing-uet" strategy="beforeInteractive">
      {BING_UET_TAG}
    </Script>
  );
}
