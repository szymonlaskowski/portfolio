import { renderDocument } from "@/document";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderDocument(), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
