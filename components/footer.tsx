"use client"

import { useEffect, useState } from "react";

export default function Footer() {

  const [time, setTime] = useState(0);

  useEffect(() => {
      setTime(new Date().getFullYear());
  }, []);
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© {time} Shreepad Avhad. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Designed and built with ❤️ using Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

