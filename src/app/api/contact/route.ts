import { NextResponse } from "next/server";

// Lead intake endpoint (stub).
// TODO: wire delivery — email (Resend/SMTP), a Google Sheet, or Close CRM.
// For now it validates, logs server-side, and returns success so the form
// is fully functional end-to-end in the UI.

type Lead = {
  intent?: string;
  name?: string;
  email?: string;
  phone?: string;
  org?: string;
  adSize?: string;
  guests?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Lead;
  try {
    data = (await req.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  if (!data.name?.trim() || !data.email?.trim() || !EMAIL_RE.test(data.email)) {
    return NextResponse.json(
      { ok: false, error: "A name and valid email are required." },
      { status: 422 }
    );
  }

  // Placeholder delivery — replace with real transport.
  console.log("[venue-society] new lead:", {
    intent: data.intent,
    name: data.name,
    email: data.email,
    phone: data.phone,
    org: data.org,
    adSize: data.adSize,
    guests: data.guests,
    message: data.message?.slice(0, 500),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
