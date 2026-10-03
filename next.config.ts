import type { NextConfig } from "next";
import { styleHash } from "./src/document";

/* The site is fully static: no API routes, no server actions, no middleware,
   no user input, no third-party embeds. The only outside origin is our own
   Umami instance (script + beacon), so the policy can be closed down to
   almost nothing. */
const umamiOrigin = "https://umami.szymonlaskowski.pl";

const konsolaLeadGen = "https://leadgen-web-u7f37a-ef810e-57-128-254-163.sslip.io";
const podgladMakiety = "/podglad/m/:token";
const wszystkoPozaPodgladem = "/((?!podglad/).*)";

const csp = [
  "default-src 'self'",
  `script-src 'self' ${umamiOrigin}`,
  `style-src 'sha256-${styleHash}'`,
  "img-src 'self'",
  "font-src 'none'",
  `connect-src 'self' ${umamiOrigin}`,
  "form-action 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async rewrites() {
    return [{ source: podgladMakiety, destination: `${konsolaLeadGen}/m/:token` }];
  },
  async headers() {
    return [{ source: wszystkoPozaPodgladem, headers: securityHeaders }];
  },
};

export default nextConfig;
