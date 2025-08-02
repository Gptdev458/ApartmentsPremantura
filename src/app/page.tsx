'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Auto-detect browser language and redirect
    const lang = navigator.language || navigator.languages?.[0] || 'en';
    
    if (window.location.pathname === "/") {
      if (lang.startsWith("hr")) {
        window.location.href = "/hr/";
      } else if (lang.startsWith("de")) {
        window.location.href = "/de/";
      } else if (lang.startsWith("ru")) {
        window.location.href = "/ru/";
      } else {
        window.location.href = "/en/";
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </main>
  );
}