export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-slate-950 text-slate-400 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">
            wizia<span className="text-wizia-cyan">.</span>
          </span>
          <p>© 2026 Wizia Inc. Tous droits réservés.</p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
