
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X, Wrench, MapPin, Clock, ShieldCheck, AlertTriangle } from 'lucide-react';
import { NAV_ITEMS, SERVICES, CONTACT_NUMBER, COMPANY_NAME } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-2 md:mb-0 flex items-center gap-2">
            <MapPin size={14} className="text-brand-orange" />
            نخدم جميع محافظات مصر
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-brand-orange" />
              خدمة 24 ساعة
            </span>
            <a href={`tel:${CONTACT_NUMBER}`} className="flex items-center gap-2 font-bold hover:text-brand-orange transition-colors">
              <PhoneCall size={14} />
              {CONTACT_NUMBER}
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-blue text-white p-2 rounded-lg group-hover:bg-brand-orange transition-colors">
                <Wrench size={28} />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black text-brand-blue leading-none">{COMPANY_NAME}</h1>
                <span className="text-xs text-gray-500 font-semibold">الخط الساخن: {CONTACT_NUMBER}</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-brand-blue font-semibold transition-colors">الرئيسية</Link>
              
              {/* Dropdown for Services */}
              <div className="relative group h-20 flex items-center">
                <button className="text-gray-700 hover:text-brand-blue font-semibold transition-colors flex items-center gap-1">
                  خدماتنا
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-20 right-0 w-64 bg-white shadow-xl rounded-b-lg border-t-4 border-brand-orange opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {SERVICES.map(service => (
                      <Link 
                        key={service.id} 
                        to={`/service/${service.slug}`}
                        className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors border-b last:border-0 border-gray-100 text-sm"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {NAV_ITEMS.filter(item => item.path !== '/').map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-gray-700 hover:text-brand-blue font-semibold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href={`tel:${CONTACT_NUMBER}`} 
                className="bg-brand-orange text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 animate-pulse"
              >
                <PhoneCall size={18} />
                اتصل الآن {CONTACT_NUMBER}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-brand-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-gray-700 font-medium py-2 border-b border-gray-100">الرئيسية</Link>
              
              {/* Mobile Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full text-gray-700 font-medium py-2"
                >
                  <span>خدمات الصيانة</span>
                  <svg className={`w-4 h-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isServicesOpen && (
                  <div className="bg-gray-50 rounded-lg p-2 mt-2 flex flex-col gap-2">
                     {SERVICES.map(service => (
                      <Link 
                        key={service.id} 
                        to={`/service/${service.slug}`}
                        className="text-gray-600 hover:text-brand-blue text-sm py-1 px-2"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {NAV_ITEMS.filter(item => item.path !== '/').map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-gray-700 font-medium py-2 border-b border-gray-100"
                >
                  {item.label}
                </Link>
              ))}
              
              <a 
                href={`tel:${CONTACT_NUMBER}`} 
                className="bg-brand-orange text-white text-center py-3 rounded-lg font-bold mt-4 flex justify-center items-center gap-2"
              >
                <PhoneCall size={18} />
                اتصل بنا {CONTACT_NUMBER}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Action Button (Visible on all screens) */}
      <a 
        href={`tel:${CONTACT_NUMBER}`} 
        className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-brand-orange text-white px-5 py-3 rounded-full shadow-2xl hover:bg-red-600 transition-all hover:scale-105 border-4 border-white group"
        aria-label={`Call ${CONTACT_NUMBER}`}
      >
        <div className="bg-white text-brand-orange rounded-full p-1 animate-pulse">
            <PhoneCall size={20} fill="currentColor" />
        </div>
        <span className="font-black text-xl tracking-wider">{CONTACT_NUMBER}</span>
      </a>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <Wrench className="text-brand-orange" size={24} />
                <span className="text-xl font-bold">{COMPANY_NAME}</span>
              </div>
              <p className="mb-6 leading-relaxed text-sm">
                نحن مركز صيانة خاص ومتخصص في صيانة الأجهزة المنزلية. نلتزم بأعلى معايير الجودة والكفاءة لضمان راحة عملائنا.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-gray-700 rounded hover:bg-brand-blue transition-colors cursor-pointer flex items-center justify-center text-white font-bold">f</div>
                <div className="w-8 h-8 bg-gray-700 rounded hover:bg-brand-orange transition-colors cursor-pointer flex items-center justify-center text-white font-bold">in</div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-r-4 border-brand-orange pr-3">روابط سريعة</h3>
              <ul className="space-y-3 text-sm">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-brand-orange transition-colors flex items-center gap-2">
                      <span className="text-brand-orange">←</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-r-4 border-brand-orange pr-3">خدماتنا</h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.slice(0, 5).map(service => (
                  <li key={service.id}>
                    <Link to={`/service/${service.slug}`} className="hover:text-brand-orange transition-colors flex items-center gap-2">
                       <span className="text-brand-orange">←</span> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-r-4 border-brand-orange pr-3">تواصل معنا</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-orange mt-1 flex-shrink-0" size={18} />
                  <span>القاهرة، الجيزة، الإسكندرية، وجميع محافظات مصر</span>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneCall className="text-brand-orange flex-shrink-0" size={18} />
                  <a href={`tel:${CONTACT_NUMBER}`} className="text-2xl font-bold text-white hover:text-brand-orange">{CONTACT_NUMBER}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-brand-orange flex-shrink-0" size={18} />
                  <span>نعمل طوال أيام الأسبوع 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="text-brand-orange flex-shrink-0" size={18} />
                  <span>ضمان شامل من المركز</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="border-t border-gray-700 pt-8 pb-4">
             <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-start gap-3">
                    <AlertTriangle className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <span className="text-brand-orange font-bold block mb-1 md:inline md:mb-0 md:ml-2">تنويه هام:</span>
                      نحن مركز صيانة خاص ومستقل، ولسنا وكلاء معتمدين ولا نتبع الشركة المصنعة للأجهزة. جميع خدمات الصيانة والإصلاح المقدمة في هذا الموقع تتم تحت مسؤولية وإشراف مركزنا الخاص. العلامات التجارية المذكورة في الموقع هي ملك لأصحابها وتستخدم فقط لغرض توضيح أنواع الأجهزة التي نقوم بصيانتها.
                    </p>
                </div>
             </div>
          </div>
          
          <div className="text-center mt-4 flex flex-col items-center gap-1">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {COMPANY_NAME}. جميع الحقوق محفوظة.</p>
            <p dir="ltr" className="text-xs text-gray-600 font-mono opacity-70 hover:opacity-100 transition-opacity">Designed and Developed by AK</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
