'use client'

import { useState } from "react";
import { Button } from "./Button";

export const HeaderMobile = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   return (
      <div className="md:hiddlen">
         <button type="button" className="md:hidden block text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>x</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>x</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Overlay Mobile */}
          {isMenuOpen && (
            <div className="md:hidden block absolute top-20 left-0 w-full bg-bg-header z-50 p-8">
              <nav className="flex flex-col gap-6 text-white">
                <li className="list-none text-xl">Product</li>
                <li className="list-none text-xl">Company</li>
                <li className="list-none text-xl">Connect</li>
                
                <div className="flex flex-col gap-4 mt-6">
                  <Button 
                    title="Login" 
                    buttonStyle="transparent" 
                  />
                  <Button 
                    title="Sign Up" 
                    buttonStyle="color" 
                  />
                </div>
              </nav>
            </div>
          )}
      </div>
   );
}