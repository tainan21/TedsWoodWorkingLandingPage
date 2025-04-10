// app/api/track/stats/route.ts
import { NextResponse } from 'next/server';

// Em produção, esses dados viriam de um banco de dados ou serviço de analytics
const mockStats = {
  conversionRates: {
    landinga: 0.33, // 6.2% taxa de conversão
    landingb: 0.33, // 8.5% taxa de conversão
    landingc: 0.33  // 5.1% taxa de conversão
  },
  totalPageViews: {
    landinga: 1254,
    landingb: 1198,
    landingc: 1302
  },
  conversionsByType: {
    click: 357,
    signup: 254,
    purchase: 126
  }
};

export async function GET() {
  try {
    // Simular latência de rede
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Em produção, buscar dados reais do seu banco ou analytics
    return NextResponse.json(mockStats);
  } catch (error) {
    console.error('Error fetching tracking stats:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch tracking stats' },
      { status: 500 }
    );
  }
}