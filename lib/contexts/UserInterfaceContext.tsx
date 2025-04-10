// // Em /lib/contexts/UserInterfaceContext.tsx
// import React, { createContext, useContext, useState, useEffect } from 'react'
// // import { getCookie, setCookie } from 'cookies-next'

// type ThemeColors = {
//   primary: string
//   secondary: string
//   accent: string
//   background: string
//   text: string
// }

// type UserPreferences = {
//   theme: string
//   colors: ThemeColors
//   fontSize: 'small' | 'medium' | 'large'
// }

// const defaultPreferences: UserPreferences = {
//   theme: 'light',
//   colors: {
//     primary: '#3b82f6',
//     secondary: '#10b981',
//     accent: '#f59e0b',
//     background: '#ffffff',
//     text: '#1f2937'
//   },
//   fontSize: 'medium'
// }

// const UserInterfaceContext = createContext<{
//   preferences: UserPreferences
//   updatePreferences: (newPrefs: Partial<UserPreferences>) => void
// }>({
//   preferences: defaultPreferences,
//   updatePreferences: () => {}
// })

// export const UserInterfaceProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
//   const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences)
  
//   // Carregar preferências dos cookies na inicialização
//   useEffect(() => {
//     const savedPrefs = getCookie('user_preferences')
//     if (savedPrefs) {
//       try {
//         setPreferences(JSON.parse(savedPrefs as string))
//       } catch (e) {
//         console.error('Failed to parse preferences', e)
//       }
//     }
//   }, [])
  
//   // Função para atualizar preferências
//   const updatePreferences = (newPrefs: Partial<UserPreferences>) => {
//     const updatedPrefs = { ...preferences, ...newPrefs }
//     setPreferences(updatedPrefs)
//     setCookie('user_preferences', JSON.stringify(updatedPrefs), { maxAge: 60 * 60 * 24 * 30 })
//   }
  
//   return (
//     <UserInterfaceContext.Provider value={{ preferences, updatePreferences }}>
//       {children}
//     </UserInterfaceContext.Provider>
//   )
// }

// export const useUserInterface = () => useContext(UserInterfaceContext)