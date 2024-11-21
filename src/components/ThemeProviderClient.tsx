// components/ThemeProviderClient.js
'use client' // Marks this component as a Client Component
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { ReactNode } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#096b85'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize' // Apply proper case to all buttons
        }
      }
    }
  }
})

export default function ThemeProviderClient({
  children
}: {
  children: ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
