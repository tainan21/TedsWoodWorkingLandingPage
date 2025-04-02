// // components/common/ReturningUserBanner.tsx
// 'use client'

// import { useABTest } from '@/lib/abtest/ABTestContext'

// export default function ReturningUserBanner() {
//   const { isReturningUser, showNewVariant } = useABTest()
  
//   if (!isReturningUser) return null
  
//   return (
//     <div className="bg-amber-100 border border-amber-300 p-4 rounded-lg shadow-sm my-4">
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="font-medium text-amber-800">Bem-vindo de volta!</h3>
//           <p className="text-amber-700 text-sm">
//             Temos novos planos de marcenaria disponíveis para você.
//           </p>
//         </div>
//         <button 
//           onClick={showNewVariant}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
//         >
//           Ver novas ofertas
//         </button>
//       </div>
//     </div>
//   )
// }