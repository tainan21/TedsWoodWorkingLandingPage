// app/api/export-session/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = await cookies();
  
  // Coletar todos os cookies relevantes
  const sessionData = {
    sessionId: cookieStore.get('session_id')?.value,
    landingVariant: cookieStore.get('teds_landing_variant')?.value,
    userHistory: cookieStore.get('user_history')?.value ? 
      JSON.parse(cookieStore.get('user_history')?.value || '[]') : [],
    trackingParams: cookieStore.get('tracking_params')?.value ? 
      JSON.parse(cookieStore.get('tracking_params')?.value || '{}') : {},
    firstVisit: cookieStore.get('first_visit')?.value,
    exportTimestamp: new Date().toISOString()
  };
  
  return NextResponse.json(sessionData);
}