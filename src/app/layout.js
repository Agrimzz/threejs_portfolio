import "./globals.css"

// Move all metadata to the `metadata` export as per Next.js 13+ conventions
export const metadata = {
  title: "Agrim Pradhananga - Web Developer",
  description:
    "Web developer portfolio showcasing my latest projects and skills.",
  keywords:
    "Agrim Pradhananga, Web Developer, Portfolio, Software Engineer, JavaScript, React",
  author: "Agrim Pradhananga",

  // Viewport configuration moved to `viewport` export
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  // },

  charset: "UTF-8",

  // Open Graph Meta Tags
  openGraph: {
    title: "Agrim Pradhananga - Web Developer",
    description: "Check out my portfolio and latest projects.",
    type: "website",
    url: "https://www.agrimpradhananga.com.np",
    images: [
      {
        url: "/assets/aplogo.png",
        width: 1200,
        height: 630,
        alt: "Agrim Pradhananga - Web Developer",
      },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },

  // Theme color for mobile browsers
  // themeColor: "#000000",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
