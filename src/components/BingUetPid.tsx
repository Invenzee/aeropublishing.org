import Script from "next/script";

const BING_UET_PID = `
window.uetq = window.uetq || [];
window.uetq.push('set', { 'pid': {
  'em': 'info@aeropublishing.org',
  'ph': '+14242823304'
} });
`;

export default function BingUetPid() {
  return (
    <Script id="bing-uet-pid" strategy="beforeInteractive">
      {BING_UET_PID}
    </Script>
  );
}
