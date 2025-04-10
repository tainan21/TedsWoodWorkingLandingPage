// // Em /components/layout/DynamicLayout.tsx
// import { useUserInterface } from '@/lib/contexts/UserInterfaceContext'
// import { useEffect, useState } from 'react'

// type ContentBlock = {
//   id: string
//   type: 'testimonial' | 'product' | 'cta' | 'hero' | 'features'
//   data: any
// }

// type DynamicLayoutProps = {
//   initialBlocks?: ContentBlock[]
//   sessionId: string
// }

// export default function DynamicLayout({ initialBlocks = [], sessionId }: DynamicLayoutProps) {
//   const { preferences } = useUserInterface()
//   const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>(initialBlocks)
  
//   // Carregamento condicional de blocos com base no histórico do usuário
//   useEffect(() => {
//     async function loadUserSpecificContent() {
//       try {
//         // Em produção, isso seria uma chamada API
//         const userHistory = JSON.parse(document.cookie
//           .split('; ')
//           .find(row => row.startsWith('user_history='))
//           ?.split('=')[1] || '[]')
        
//         // Simulando decisão baseada em histórico
//         let blocks = [...initialBlocks]
        
//         // Se usuário já visitou a página de produtos, mostrar CTAs específicos
//         if (userHistory.includes('/products')) {
//           blocks.push({
//             id: 'returning-visitor-cta',
//             type: 'cta',
//             data: { title: 'Bem-vindo de volta!', discount: '15%' }
//           })
//         }
        
//         setContentBlocks(blocks)
//       } catch (e) {
//         console.error('Failed to load dynamic content', e)
//       }
//     }
    
//     loadUserSpecificContent()
//   }, [initialBlocks, sessionId])
  
//   // Aplicar estilo dinâmico baseado nas preferências
//   const layoutStyle = {
//     '--primary-color': preferences.colors.primary,
//     '--secondary-color': preferences.colors.secondary,
//     '--accent-color': preferences.colors.accent,
//     '--background-color': preferences.colors.background,
//     '--text-color': preferences.colors.text,
//     '--font-size-base': preferences.fontSize === 'small' ? '14px' : 
//                          preferences.fontSize === 'large' ? '18px' : '16px',
//   } as React.CSSProperties
  
//   return (
//     <div className="dynamic-layout" style={layoutStyle}>
//       {contentBlocks.map(block => (
//         <DynamicBlock key={block.id} block={block} />
//       ))}
//     </div>
//   )
// }

// // Renderizador de blocos dinâmicos
// function DynamicBlock({ block }: { block: ContentBlock }) {
//   switch (block.type) {
//     case 'testimonial':
//       return <TestimonialBlock data={block.data} />
//     case 'product':
//       return <ProductBlock data={block.data} />
//     case 'cta':
//       return <CTABlock data={block.data} />
//     case 'hero':
//       return <HeroBlock data={block.data} />
//     case 'features':
//       return <FeaturesBlock data={block.data} />
//     default:
//       return null
//   }
// }