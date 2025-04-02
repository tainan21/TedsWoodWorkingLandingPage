// app/api/track/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Caminho para o arquivo de dados
const DATA_FILE = path.join(process.cwd(), 'data', 'abtest-stats.json');

// Estrutura de dados
type TrackingData = {
  pageviews: Record<string, number>;
  conversions: Record<string, number>;
  conversionRates: Record<string, number>;
  lastUpdated: string;
};

// Inicializa arquivo se não existir
function ensureDataFile(): TrackingData {
  const dataDir = path.join(process.cwd(), 'data');
  
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  if (!fs.existsSync(DATA_FILE)) {
    const initialData: TrackingData = {
      pageviews: { landinga: 0, landingb: 0, landingc: 0 },
      conversions: { landinga: 0, landingb: 0, landingc: 0 },
      conversionRates: { landinga: 0, landingb: 0, landingc: 0 },
      lastUpdated: new Date().toISOString()
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
    return initialData;
  }
  
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

// Função para atualizar taxas de conversão
function updateConversionRates(stats: TrackingData): TrackingData {
  for (const variant of ['landinga', 'landingb', 'landingc']) {
    stats.conversionRates[variant] = stats.pageviews[variant] > 0
      ? stats.conversions[variant] / stats.pageviews[variant]
      : 0;
  }
  stats.lastUpdated = new Date().toISOString();
  return stats;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const stats = ensureDataFile();
    
    // Atualiza estatísticas
    if (data.type === 'pageview') {
      stats.pageviews[data.variant] = (stats.pageviews[data.variant] || 0) + 1;
    } else if (data.type === 'conversion') {
      stats.conversions[data.variant] = (stats.conversions[data.variant] || 0) + 1;
    }
    
    // Recalcula taxas de conversão
    updateConversionRates(stats);
    
    // Salva dados atualizados
    fs.writeFileSync(DATA_FILE, JSON.stringify(stats, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao processar tracking:', error);
    return NextResponse.json({ error: 'Falha ao processar dados' }, { status: 500 });
  }
}

// app/api/track/stats/route.ts
export async function GET() {
  try {
    const stats = ensureDataFile();
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return NextResponse.json({ error: 'Falha ao obter estatísticas' }, { status: 500 });
  }
}