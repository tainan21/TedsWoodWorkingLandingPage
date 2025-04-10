// Em /app/api/export-data/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = cookies()
  const sessionId = (await cookieStore).get('session_id')?.value
  const userHistory = (await cookieStore).get('user_history')?.value
  
  // Outros cookies relevantes
  const preferences = (await cookieStore).get('user_preferences')?.value
  
  // Montando o objeto de exportação
  const exportData = {
    sessionId,
    userHistory: userHistory ? JSON.parse(userHistory) : [],
    preferences: preferences ? JSON.parse(preferences) : {},
    exportTimestamp: new Date().toISOString()
  }
  
  return NextResponse.json(exportData)
}