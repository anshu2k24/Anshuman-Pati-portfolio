"use client";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-200 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-2">Just Anshu 😎</p>
            <p className="text-gray-600">Building amazing things, one line of code at a time</p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-500 text-sm">© 2025 All rights reserved. Made with 💙 and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
}
