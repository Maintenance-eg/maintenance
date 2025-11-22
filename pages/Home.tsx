
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, CheckCircle, Truck, PenTool, Clock } from 'lucide-react';
import { SERVICES, CONTACT_NUMBER } from '../constants';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1600/900?grayscale')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-dark/80"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-orange px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fadeIn">
              مركز صيانة خاص - خدمة فورية
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              أفضل خدمة لصيانة <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-orange to-yellow-400">
                الأجهزة المنزلية
              </span> في مصر
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-2xl">
              نحن مركز صيانة خاص ومستقل نقدم حلول صيانة فورية وشاملة لجميع أجهزتكم المنزلية بأيدي مهندسين متخصصين.
            </p>
             <p className="text-sm text-gray-400 mb-10 italic">
              * تنويه: نحن لسنا وكلاء معتمدين ولا نتبع الشركة المصنعة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${CONTACT_NUMBER}`} 
                className="bg-brand-orange text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-orange/50"
              >
                <PhoneCall size={24} />
                اتصل بنا {CONTACT_NUMBER}
              </a>
              <Link 
                to="/about" 
                className="bg-transparent border-2 border-white text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-blue transition-colors text-center"
              >
                تعرف علينا أكثر
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white/10 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
              <div>
                <div className="text-3xl font-bold text-brand-orange">+15</div>
                <div className="text-sm text-gray-300">سنة خبرة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">+50k</div>
                <div className="text-sm text-gray-300">عميل سعيد</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">24/7</div>
                <div className="text-sm text-gray-300">دعم فني</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-orange">100%</div>
                <div className="text-sm text-gray-300">ضمان المركز</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">خدمات الصيانة المتكاملة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر الخدمة التي تحتاجها ودع الباقي على خبرائنا. نغطي كافة أنواع الأجهزة المنزلية بأعلى جودة.
            </p>
            <div className="w-24 h-1 bg-brand-orange mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.id} 
                  to={`/service/${service.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-brand-light text-brand-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{service.description}</p>
                  <span className="text-brand-blue font-bold text-sm mt-auto flex items-center gap-1">
                    التفاصيل
                    <span className="text-lg">←</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/800/600?random=tech" 
                alt="Maintenance Technician" 
                className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
                لماذا نحن الخيار الأول <br/> للصيانة في مصر؟
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                نحن نفهم أهمية الأجهزة المنزلية في حياتكم اليومية، ولذلك نسعى لتقديم خدمة لا تضاهى تجمع بين السرعة والدقة والتكلفة المناسبة.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-md text-brand-orange">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">قطع غيار أصلية</h4>
                    <p className="text-sm text-gray-500">نضمن لك قطع غيار أصلية 100% لضمان عمر أطول لجهازك.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-md text-brand-orange">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">أسطول سيارات متنقل</h4>
                    <p className="text-sm text-gray-500">نصلك أينما كنت وفي أسرع وقت بفضل أسطولنا المجهز.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-md text-brand-orange">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">مهندسون محترفون</h4>
                    <p className="text-sm text-gray-500">فريق مدرب على أعلى مستوى للتعامل مع أعقد الأعطال.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-md text-brand-orange">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">التزام بالمواعيد</h4>
                    <p className="text-sm text-gray-500">نقدر وقتك الثمين، ونلتزم بمواعيد الزيارة بدقة متناهية.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-brand-blue py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل جهازك يحتاج إلى صيانة؟</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">لا تتردد في الاتصال بنا. فريق الدعم الفني جاهز لاستقبال بلاغاتكم وتحديد موعد الصيانة فوراً.</p>
          <a 
            href={`tel:${CONTACT_NUMBER}`} 
            className="inline-block bg-brand-orange text-white text-xl px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-orange transition-all shadow-lg transform hover:scale-105"
          >
            اتصل بنا الآن: {CONTACT_NUMBER}
          </a>
        </div>
      </section>
    </div>
  );
};
