
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PhoneCall, ShieldCheck, Wrench, Settings } from 'lucide-react';
import { SERVICES, CONTACT_NUMBER } from '../constants';

export const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-brand-blue/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-white/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
            <Icon size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{service.title}</h1>
          <div className="text-gray-300 text-sm flex justify-center gap-2">
            <Link to="/" className="hover:text-brand-orange">الرئيسية</Link>
            <span>/</span>
            <span>خدماتنا</span>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-dark mb-4 border-r-4 border-brand-orange pr-4">
                وصف الخدمة
              </h2>
              <p className="text-gray-600 leading-loose mb-8 text-lg">
                {service.longDescription}
              </p>
              
              <h3 className="text-xl font-bold text-brand-dark mb-6">
                أعطال شائعة نقوم بإصلاحها:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <div className="bg-brand-blue text-white p-1 rounded-full">
                        <Wrench size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-dark rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">هل تواجه مشكلة في {service.title}؟</h3>
              <p className="mb-8 text-blue-100">لا تترك العطل يتفاقم. اتصل بنا الآن للحصول على صيانة فورية بضمان شامل.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href={`tel:${CONTACT_NUMBER}`} 
                  className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-orange transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall size={20} />
                  اتصل: {CONTACT_NUMBER}
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Why Us Box */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border-t-4 border-brand-orange">
                <h3 className="text-xl font-bold text-brand-dark mb-6">مميزاتنا</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-600">
                        <ShieldCheck className="text-green-500" size={20} />
                        <span>ضمان حقيقي على الصيانة</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                        <Settings className="text-brand-blue" size={20} />
                        <span>قطع غيار أصلية بالعلبة</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-600">
                        <PhoneCall className="text-brand-orange" size={20} />
                        <span>خدمة عملاء 24 ساعة</span>
                    </li>
                </ul>
            </div>

            {/* Other Services */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-6">خدمات أخرى</h3>
                <div className="flex flex-col gap-2">
                    {SERVICES.filter(s => s.slug !== slug).map(s => (
                        <Link 
                            key={s.id} 
                            to={`/service/${s.slug}`} 
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                            <span className="text-gray-400 group-hover:text-brand-orange transition-colors">←</span>
                            <span className="text-gray-600 font-medium group-hover:text-brand-blue">{s.title}</span>
                        </Link>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
