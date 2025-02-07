"use client";

import { profile } from "@/lib/data/profile";
import { SocialContact } from "../ui/SocialContact";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-[0_-2px_6px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: {profile.contactInfo.email}</li>
              <li>Phone: {profile.contactInfo.phone}</li>
              <li>Location: {profile.contactInfo.location}</li>
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
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
