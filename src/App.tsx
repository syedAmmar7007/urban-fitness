/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { generateLogoImage } from './services/logoGenerator';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Membership } from './components/Membership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// --- Main App ---

export default function App() {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const src = await generateLogoImage();
        setLogoSrc(src);
      } catch (error) {
        console.error("Failed to generate logo:", error);
      }
    };
    fetchLogo();
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black">
      <Navbar logoSrc={logoSrc} />
      <Hero />
      <Features />
      <Services />
      <Membership />
      <Contact />
      <Footer logoSrc={logoSrc} />
      <WhatsAppButton />
    </div>
  );
}
