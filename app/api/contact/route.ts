import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, facility, role, size, message } = body;

        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: "First name, email, and message are required." },
                { status: 400 }
            );
        }

        // Log the submission (visible in server console / deployment logs)
        console.log("--- New Contact Form Submission ---");
        console.log(`Name: ${firstName} ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Facility: ${facility}`);
        console.log(`Role: ${role}`);
        console.log(`Size: ${size}`);
        console.log(`Message: ${message}`);
        console.log("----------------------------------");

        // TODO: Connect to your email service (e.g. Resend, SendGrid, Nodemailer)
        // Example with Resend:
        // await resend.emails.send({
        //     from: "AMKA Website <noreply@amkasystems.com>",
        //     to: "sales@amkasystems.com",
        //     subject: `New inquiry from ${firstName} ${lastName}`,
        //     text: `...`,
        // });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
