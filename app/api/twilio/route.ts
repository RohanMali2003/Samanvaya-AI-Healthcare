import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER!;

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
    try {
        const { to, message } = await req.json();

        const response = await client.messages.create({
            body: message,
            from: twilioNumber,
            to: to,
        });

        return NextResponse.json({ success: true, response });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
