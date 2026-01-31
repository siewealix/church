const Footer = () => (
  <footer className="border-t border-slate-800 bg-slate-950">
    <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-400">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">TFMI</h3>
          <p>Triumphant Faith Ministries International</p>
          <p>Ensemble vers la victoire en Christ</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p>contact@tfmi.org</p>
          <p>+237 XXX XXX XXX</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Suivez-nous</h3>
          <div className="flex gap-3">
            <a href="#" className="hover:text-secondary" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="hover:text-secondary" aria-label="YouTube">
              YouTube
            </a>
            <a href="#" className="hover:text-secondary" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-4 text-xs">
        © 2024 TFMI. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
