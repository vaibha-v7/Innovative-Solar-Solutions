import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-auto" style={{ backgroundColor: '#2F3131', color: '#fff' }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-xl max-w-7xl mx-auto w-full">
        <div className="space-y-md">
          <div className="text-headline-md font-headline-md font-bold text-white flex items-center gap-xs">
            <span className="material-symbols-outlined text-primary text-[28px]">bolt</span>
            Innovative Solar Solutions
          </div>
          <p className="text-body-md font-body-md opacity-70">
            Helping you switch to clean solar energy with expert service and modern technology.
          </p>
        </div>
        
        <div className="space-y-md">
          <h4 className="text-white font-label-bold text-label-bold uppercase tracking-widest">SOLUTIONS</h4>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link to="/residential" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Residential Solar
              </Link>
            </li>
            <li>
              <Link to="/commercial" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Commercial Solar
              </Link>
            </li>
            <li>
              <Link to="/agricultural" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Agricultural Solar
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-md">
          <h4 className="text-white font-label-bold text-label-bold uppercase tracking-widest">TECHNOLOGY</h4>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link to="/on-grid" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                On-grid Systems
              </Link>
            </li>
            <li>
              <Link to="/off-grid" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Off-grid Systems
              </Link>
            </li>
            <li>
              <Link to="/hybrid" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Hybrid Systems
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-md">
          <h4 className="text-white font-label-bold text-label-bold uppercase tracking-widest">COMPANY</h4>
          <ul className="flex flex-col gap-sm">
            <li>
              <Link to="/services" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Services & FAQ
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Savings Calculator
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-surface-variant hover:text-primary transition-all duration-200 text-body-md">
                Blog Articles
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-margin-desktop py-md max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="text-caption font-caption text-white">
          © 2026 Innovative Solar Solutions. All rights reserved.
        </p>
        <div className="flex gap-lg">
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors" title="Website">
            public
          </span>
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors" title="Share">
            share
          </span>
          <a href="mailto:adityakaushal2@gmail.com" className="material-symbols-outlined text-white cursor-pointer hover:text-primary transition-colors" title="Contact Email">
            mail
          </a>
        </div>
      </div>
    </footer>
  );
}
