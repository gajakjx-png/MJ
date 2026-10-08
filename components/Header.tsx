'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = language === 'ar' ? [
    { name: 'الرئيسية', href: '/' },
    { name: 'العظام', href: '/anatomy/skeletal' },
    { name: 'المفاصل', href: '/anatomy/joints' },
    { name: 'الأنسجة', href: '/anatomy/tissues' },
    { name: 'الأعضاء الداخلية', href: '/anatomy/organs' },
    { name: 'الأعضاء الخارجية', href: '/anatomy/external' },
    { name: 'الأوعية الدموية', href: '/anatomy/vessels' },
    { name: 'الأعصاب', href: '/anatomy/nervous' },
  ] : [
    { name: 'Home', href: '/' },
    { name: 'Bones', href: '/anatomy/skeletal' },
    { name: 'Joints', href: '/anatomy/joints' },
    { name: 'Tissues', href: '/anatomy/tissues' },
    { name: 'Internal Organs', href: '/anatomy/organs' },
    { name: 'External Anatomy', href: '/anatomy/external' },
    { name: 'Blood Vessels', href: '/anatomy/vessels' },
    { name: 'Nervous System', href: '/anatomy/nervous' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <nav className="container-main flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
            MJ
          </div>
          <div>
            <h1 className="text-xl font-bold">{language === 'ar' ? 'الطب البيطري' : 'Veterinary'}</h1>
            <p className="text-xs opacity-90">{language === 'ar' ? 'تشريح' : 'Anatomy'}</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-200 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            <Globe size={18} />
            {language === 'ar' ? 'EN' : 'العربية'}
          </button>

          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-500" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="container-main py-4 flex flex-col gap-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}