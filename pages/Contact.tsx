
import React from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { CONTACT_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="bg-brand-dark text-white py-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-black mb-4">اتصل بنا</h1>
                <p className="text-gray-300 max-w-xl mx-auto">نحن هنا لمساعدتك. تواصل معنا في أي وقت للاستفسار عن خدماتنا أو طلب الصيانة.</p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-12 -mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Contact Info Cards */}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-brand-orange hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-orange">
                        <PhoneCall size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
                    <p className="text-gray-500 mb-4">متاحون 24/7 لاستقبال مكالماتكم</p>
                    <a href={`tel:${CONTACT_NUMBER}`} className="text-2xl font-bold text-brand-blue dir-ltr inline-block hover:text-brand-orange transition-colors">{CONTACT_NUMBER}</a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-brand-blue hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-500 mb-4">أرسل لنا استفسارك وسنرد قريباً</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="font-bold text-gray-700 hover:text-brand-blue transition-colors">{EMAIL_ADDRESS}</a>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg text-center border-b-4 border-brand-orange hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">العنوان</h3>
                    <p className="text-gray-500 mb-4">نغطي جميع المحافظات</p>
                    <p className="font-bold text-gray-700">القاهرة، مصر</p>
                </div>

            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold text-brand-dark mb-6 text-center">نطاق التغطية</h2>
                {/* Map Placeholder */}
                <div className="h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm relative border border-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                       <div className="text-center p-6">
                           <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                           <p className="text-gray-500 font-bold text-lg">خريطة التغطية</p>
                           <p className="text-gray-400 text-sm">نحن نغطي القاهرة الكبرى، الجيزة، الإسكندرية، الدلتا، والصعيد.</p>
                       </div>
                    </div>
                    {/* Actual iframe would go here */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.12345!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1600000000000!5m2!1sen!2seg" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, opacity: 0.6 }} 
                        allowFullScreen 
                        loading="lazy"
                        title="Egypt Map"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  );
};
