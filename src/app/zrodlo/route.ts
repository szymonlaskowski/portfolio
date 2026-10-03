import { renderDocument } from "@/document";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderDocument(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
