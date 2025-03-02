import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const CLIENT_ID = process.env.GOOGLE_FIT_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_FIT_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_FIT_REDIRECT_URI!;
const REFRESH_TOKEN = process.env.GOOGLE_FIT_REFRESH_TOKEN!;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function GET() {
    try {
        const fitness = google.fitness({ version: "v1", auth: oauth2Client });

        const dataSources = await fitness.users.dataSources.list({ userId: "me" });

        return NextResponse.json({ success: true, dataSources });
    } catch (error) {
        return NextResponse.json({ success: false, error });
    }
}
