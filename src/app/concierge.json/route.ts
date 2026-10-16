import { buildCatalog } from "@/lib/concierge-catalog";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildCatalog());
}
