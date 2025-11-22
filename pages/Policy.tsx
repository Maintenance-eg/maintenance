import React from 'react';

export const Policy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-black mb-4">سياسة الخصوصية وشروط الخدمة</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 text-gray-700 leading-relaxed">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-brand-blue mb-4">مقدمة</h2>
              <p>
                نحن في "مركز الخدمة والصيانة" نلتزم بحماية خصوصية عملائنا. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا أو طلب خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-blue mb-4">جمع المعلومات</h2>
              <p className="mb-2">قد نقوم بجمع المعلومات التالية عند طلبك لخدمة الصيانة:</p>
              <ul className="list-disc list-inside pr-4 space-y-1">
                <li>الاسم بالكامل.</li>
                <li>رقم الهاتف للتواصل.</li>
                <li>العنوان التفصيلي للزيارة المنزلية.</li>
                <li>نوع الجهاز ووصف العطل.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-blue mb-4">استخدام المعلومات</h2>
              <p>نستخدم المعلومات التي نجمعها حصرياً لـ:</p>
              <ul className="list-disc list-inside pr-4 space-y-1">
                <li>تنسيق مواعيد الصيانة وإرسال الفنيين.</li>
                <li>التواصل معك بشأن حالة الطلب.</li>
                <li>تحسين جودة خدماتنا.</li>
              </ul>
              <p className="mt-2 font-bold">نحن لا نشارك بياناتك مع أي طرف ثالث لأغراض تسويقية.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-blue mb-4">الضمان</h2>
              <p>
                جميع خدمات الصيانة وقطع الغيار مشمولة بضمان معتمد. تختلف فترة الضمان حسب نوع القطعة المستبدلة ونوع الإصلاح، ويتم توضيح ذلك في الفاتورة المقدمة من الفني. يسقط الضمان في حالة سوء الاستخدام أو العبث بالجهاز من قبل أشخاص غير معتمدين من قبلنا.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-blue mb-4">اتصل بنا</h2>
              <p>
                إذا كان لديك أي استفسارات حول سياسة الخصوصية، يرجى الاتصال بنا على الرقم المختصر: <span className="font-bold dir-ltr">17294</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};