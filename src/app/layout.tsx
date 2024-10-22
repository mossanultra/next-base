"use client";
import localFont from "next/font/local";
import "./globals.css";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d87274",
      light: "#ffa2a3",
      dark: "#a34449",
    },
  },
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const uzura = localFont({
  src: "./fonts/uzurafont100/uzura.ttf",
  variable: "--font-uzura",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>もずくううううう</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#a8a6a3" />
      </head>
      <ThemeProvider theme={theme}>
      <body className={`${uzura.variable}`}>
          {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
