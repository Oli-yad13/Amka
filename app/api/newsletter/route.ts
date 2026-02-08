import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json(
                { error: "A valid email address is required." },
                { status: 400 }
            );
        }

        // Log the subscription (visible in server console / deployment logs)
        console.log(`--- New Newsletter Subscription: ${email} ---`);

        // TODO: Connect to your email list provider (e.g. Mailchimp, ConvertKit, Resend)
        // Example:
        // await mailchimp.lists.addListMember(listId, { email_address: email, status: "subscribed" });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
