import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div>
          <Logo />
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Support</h3>
          <ul className="space-y-4 text-slate-700">
            <li>
              <a href="#" className="hover:text-white">
                Submit ticket
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guides
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Company</h3>
          <ul className="space-y-4 text-slate-700">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Legal</h3>
          <ul className="space-y-4 text-slate-700">
            <li>
              <a href="#" className="hover:text-white">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
