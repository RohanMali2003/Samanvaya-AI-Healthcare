import { google } from "googleapis";
import { NextResponse } from "next/server";

const CLIENT_ID = process.env.GOOGLE_FIT_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_FIT_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_FIT_REDIRECT_URI!;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

export async function GET() {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/fitness.activity.read"],
        redirect_uri: REDIRECT_URI, // Explicitly set this
    });

    return NextResponse.json({ success: true, authUrl });
}
