import React from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black/60 backdrop-blur-sm border-t border-white/10 py-12 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">
              <span className="text-cyan-400">MED</span>
              <span className="text-pink-500">NEXUS'26</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Igniting Innovation,
              <br />
              Inspiring Future.
            </p>
            <a
              href="https://www.instagram.com/mednexus_2026?igsh=dmx6bWtwMWx0ZXhk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-cyan-400 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div>
            <h4 className="text-pink-500 mb-4">CONTACT US</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>VISTAS - Pallavaram</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a
                  href="mailto:mednexus26@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  mednexus26@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a
                  href="tel:+916374663588"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +91 6374663588
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
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