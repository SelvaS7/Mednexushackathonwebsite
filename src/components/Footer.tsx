import React from "react";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black/60 backdrop-blur-sm border-t border-white/10 py-8 md:py-12 px-4 md:px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-xl md:text-2xl mb-3 md:mb-4">
              <span className="text-cyan-400">MED</span>
              <span className="text-pink-500">NEXUS'26</span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
              Igniting Innovation,
              <br />
              Inspiring Future.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs md:text-sm">Follow us on</span>
              <a
                href="https://www.instagram.com/mednexus_2026?igsh=dmx6bWtwMWx0ZXhk&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-pink-500 mb-3 md:mb-4 text-base md:text-lg">CONTACT US</h4>
            <div className="space-y-2.5 md:space-y-3 text-gray-300 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/yCQW1NGAJkU1xLBa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  VISTAS - Pallavaram
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                <a
                  href="mailto:mednexus26@gmail.com"
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  mednexus26@gmail.com
                </a>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm gap-2 md:gap-0">
          <div>© 2026 MedNexus. All Rights Reserved.</div>
          <div>
            Designed by{" "}
            <span className="text-pink-500">Team MedNexus</span>
          </div>
        </div>
      </div>
    </footer>
  );
}