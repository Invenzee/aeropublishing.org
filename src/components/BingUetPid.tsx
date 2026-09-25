import Script from "next/script";
import { PHONE_TEL } from "@/lib/site-contact";

const BING_UET_PID = `
window.uetq = window.uetq || [];
window.uetq.push('set', { 'pid': {
  'em': 'info@aeropublishing.org',
  'ph': '${PHONE_TEL}'
} });
`;

export default function BingUetPid() {
  return (
    <Script id="bing-uet-pid" strategy="beforeInteractive">
      {BING_UET_PID}
    </Script>
  );
}
