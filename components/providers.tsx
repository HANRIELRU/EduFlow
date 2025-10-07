'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers = ({
    children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
    return <SessionProvider><NextThemesProvider {...props}>{children}</NextThemesProvider></SessionProvider>
}

export default Providers