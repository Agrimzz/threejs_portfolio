import "./globals.css"

export const metadata = {
  title: "Agrim Pradhananga - Web Developer",
  description:
    "Web developer portfolio showcasing my latest projects and skills.",
  keywords:
    "Agrim Pradhananga, Web Developer, Portfolio, Software Engineer, JavaScript, React",
  author: "Agrim Pradhananga",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",

  // Open Graph Meta Tags
  "og:title": "Agrim Pradhananga - Web Developer",
  "og:description": "Check out my portfolio and latest projects.",
  "og:type": "website",
  "og:url": "https://www.agrimpradhananga.com.np",
  "og:image": "/assets/aplogo.png",

  // Favicon and theme color
  // "theme-color": "#000000",

  // Robots
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="src\app\icon.ico" />

        <link
          rel="icon"
          href="/assets/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/assets/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href="/assets/apple-touch-icon.png"
          sizes="180x180"
        />

        <link
          rel="icon"
          href="/assets/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/assets/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />

        <link rel="manifest" href="/assets/site.webmanifest" />

        <meta name="theme-color" content="#000000" />
        <meta property="og:image" content="/assets/favicon-32x32.png" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>{children}</body>
    </html>
  )
}
