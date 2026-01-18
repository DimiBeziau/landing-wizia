"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/50 backdrop-blur-xl border-b border-white/10" : ""
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold tracking-tighter cursor-pointer">
          <Image
            src="/icon-white.png"
            alt="Wizia Logo"
            width={50}
            height={50}
            className="w-20 h-20 mr-2"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">
            Tarifs
          </Link>
          <button className="px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white backdrop-blur-sm cursor-pointer">
            Connexion
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="#features"
                className="text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                href="#pricing"
                className="text-slate-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <button className="w-full py-2 bg-white/10 border border-white/10 rounded-lg text-white">
                Connexion
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  );
}
