
import * as React from 'react';

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
      <body>
        
      <Navbar/>
   
        {children}
        
        
        </body>
    </html>
  );
}
