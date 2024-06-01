
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "./components/shared/Navbar";
import "../styles/global.scss";

export const metadata = {
  title: "Give me Task",
  description:
    "The minimalistic  web app in which tasks are given to individuals who wants to learn software development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2164548049159520"
          crossorigin="anonymous"
        ></script>
      
      </head> */}
      <body>
        <Navbar />
        <SpeedInsights/>
        <Analytics/>
        

        {children}
      </body>
    </html>
  );
}

