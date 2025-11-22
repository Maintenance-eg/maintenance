
import React from 'react';
import { Users, Award, Calendar, Wrench, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4">من نحن</h1>
          <p className="text-gray-300">تعرف على تاريخنا وقيمنا في خدمة عملائنا في مصر</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">مركز الخدمة والصيانة (مركز خاص)</h2>
            
            <div className="mb-8 bg-yellow-50 p-6 rounded-xl border-r-4 border-brand-orange flex items-start gap-4">
              <AlertTriangle className="text-brand-orange flex-shrink-0 mt-1" size={24} />
              <div>
                <strong className="block text-gray-900 mb-2">تنويه قانوني هام:</strong>
                <p className="text-gray-700 text-sm m-0">
                  نحن مركز صيانة خاص ومستقل، ولسنا وكلاء معتمدين ولا نتبع الشركة المصنعة. نحن نقدم خدمات الصيانة والإصلاح بضمان مركزنا الخاص.
                </p>
              </div>
            </div>

            <p className="mb-6">
              نحن مؤسسة خاصة رائدة في مجال صيانة وإصلاح الأجهزة المنزلية في جمهورية مصر العربية. تأسسنا برؤية واضحة تهدف إلى تقديم خدمات صيانة احترافية ترتقي لتوقعات عملائنا الكرام، معتمدين في ذلك على أحدث التقنيات وفريق عمل من المهندسين والفنيين ذوي الخبرة العالية.
            </p>
            <p className="mb-6">
              على مدار السنوات، نجحنا في كسب ثقة الآلاف من العملاء بفضل التزامنا بالجودة، السرعة، والمصداقية. نحن نؤمن بأن الصيانة ليست مجرد إصلاح عطل، بل هي إعادة الحياة لجهازك المنزلي ليعمل بكفاءته القصوى.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-blue-100 p-4 rounded-full text-brand-blue mb-4">
                  <Users size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">فريق محترف</h3>
                <p className="text-sm">مهندسون وفنيون مدربون على أعلى مستوى من الكفاءة.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-orange-100 p-4 rounded-full text-brand-orange mb-4">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">ضمان المركز</h3>
                <p className="text-sm">نقدم شهادة ضمان معتمدة من مركزنا على جميع قطع الغيار المستبدلة.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
                  <Wrench size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">قطع غيار أصلية</h3>
                <p className="text-sm">نستخدم فقط قطع الغيار الأصلية لضمان سلامة جهازك.</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl">
                <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
                  <Calendar size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">التزام بالمواعيد</h3>
                <p className="text-sm">نصلك في الوقت المحدد لأننا نقدر قيمة وقتك.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-dark mb-4">رسالتنا</h3>
            <p className="mb-6">
              تقديم تجربة صيانة خالية من المتاعب، توفر الراحة والأمان لكل بيت مصري، من خلال خدمة سريعة، وأسعار عادلة، وجودة لا تقبل المنافسة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
