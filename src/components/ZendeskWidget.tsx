import Script from "next/script";
import ZendeskBehavior from "@/components/ZendeskBehavior";

const ZENDESK_SNIPPET_SRC =
  "https://static.zdassets.com/ekr/snippet.js?key=9184f3a7-2e69-42d3-9814-e3d7c0c33db4";

export default function ZendeskWidget() {
  return (
    <>
      {/* Start of brandwebsite-b Zendesk Widget script */}
      <Script id="ze-snippet" src={ZENDESK_SNIPPET_SRC} strategy="afterInteractive" />
      {/* End of brandwebsite-b Zendesk Widget script */}
      <ZendeskBehavior />
    </>
  );
}
