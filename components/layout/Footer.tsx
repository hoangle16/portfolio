"use client";

import { SocialContact } from "../ui/SocialContact";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: hoangl.dev@gmail.com</li>
              <li>Phone: +84 369 874 979</li>
              <li>Location: Da Nang, Vietnam</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <SocialContact />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Hoang Le. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
