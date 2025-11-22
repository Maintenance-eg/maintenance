import { 
  Refrigerator, 
  WashingMachine, 
  ThermometerSun, 
  Tv, 
  Waves, 
  Droplets, 
  Snowflake 
} from 'lucide-react';
import { ServiceData, NavItem } from './types';

export const CONTACT_NUMBER = "17294";
export const COMPANY_NAME = "مركز الخدمة والصيانة";
export const EMAIL_ADDRESS = "service@maintenance-egypt.com";

export const NAV_ITEMS: NavItem[] = [
  { label: "الرئيسية", path: "/" },
  { label: "من نحن", path: "/about" },
  { label: "اتصل بنا", path: "/contact" },
  { label: "سياسة الخصوصية", path: "/policy" },
];

export const SERVICES: ServiceData[] = [
  {
    id: "1",
    title: "صيانة ثلاجات",
    slug: "refrigerators",
    description: "إصلاح فوري لجميع أنواع الثلاجات المنزلية مع ضمان قطع الغيار الأصلية.",
    longDescription: "نقدم خدمات صيانة متكاملة للثلاجات بجميع ماركاتها. نعالج مشاكل التبريد، تسريب المياه، أعطال الموتور، وتوقف الثلاجة عن العمل. مهندسون متخصصون جاهزون لخدمتكم في جميع المحافظات.",
    icon: Refrigerator,
    image: "https://picsum.photos/800/600?random=1",
    features: ["شحن فريون أصلي", "إصلاح عيوب الثرموستات", "تغيير الكاوتش", "صيانة الدوائر الكهربائية"]
  },
  {
    id: "2",
    title: "صيانة غسالات",
    slug: "washing-machines",
    description: "صيانة غسالات الملابس الأتوماتيك والفوق أتوماتيك بمهارة عالية.",
    longDescription: "خبراء في صيانة الغسالات الأتوماتيك والفوق أتوماتيك. نقوم بإصلاح أعطال الصرف، عدم العصر، الأصوات العالية، وأعطال الكارتات الإلكترونية بأحدث أجهزة الفحص.",
    icon: WashingMachine,
    image: "https://picsum.photos/800/600?random=2",
    features: ["إصلاح طلمبات الطرد", "تغيير رولمان بلي", "صيانة الكارت الإلكتروني", "معالجة البارومة"]
  },
  {
    id: "3",
    title: "ديب فريزر",
    slug: "deep-freezer",
    description: "خدمة صيانة الديب فريزر الرأسي والأفقي للحفاظ على أطعمتكم.",
    longDescription: "لا تدع الطعام يفسد، اتصل بنا لصيانة الديب فريزر الخاص بك. نتعامل مع جميع الأعطال مثل عدم التجميد، اللمبة الحمراء، وتراكم الثلج المفرط.",
    icon: Snowflake,
    image: "https://picsum.photos/800/600?random=3",
    features: ["علاج ضعف التبريد", "تغيير الحساسات", "شحن الفريون", "صيانة المروحة"]
  },
  {
    id: "4",
    title: "صيانة تكييفات",
    slug: "ac", // Added generic AC for completeness based on standard requests, usually grouped with cooling
    description: "صيانة وتنظيف التكييفات لضمان أفضل أداء في الصيف والشتاء.",
    longDescription: "خدمات صيانة التكييفات الاسبليت والشباك والمركزي. غسيل كيميائي، شحن فريون، وإصلاح جميع الأعطال لضمان هواء نقي وبارد.",
    icon: Snowflake,
    image: "https://picsum.photos/800/600?random=4",
    features: ["تنظيف الفلاتر", "شحن فريون", "علاج تسريب المياه", "صيانة الكباس"]
  },
  {
    id: "5",
    title: "غسالات أطباق",
    slug: "dishwashers",
    description: "وداعاً لأعطال غسالات الصحون، خدمة سريعة وموثوقة.",
    longDescription: "صيانة غسالات الأطباق لجميع الموديلات. نعالج مشاكل عدم سحب المياه، عدم التصريف، وتوقف البرامج. نضمن لك نظافة مثالية لأطباقك.",
    icon: Droplets,
    image: "https://picsum.photos/800/600?random=5",
    features: ["إصلاح رشاشات المياه", "صيانة السخان", "علاج انسداد الصرف", "برمجة الكارتة"]
  },
  {
    id: "6",
    title: "ميكروويف",
    slug: "microwaves",
    description: "صيانة أفران الميكروويف وإصلاح أعطال التسخين والكهرباء.",
    longDescription: "خدمة متخصصة في صيانة الميكروويف. إصلاح أعطال التسخين، الشرارة الداخلية، توقف الطبق عن الدوران، وأعطال لوحة المفاتيح (التاتش).",
    icon: Waves,
    image: "https://picsum.photos/800/600?random=6",
    features: ["تغيير الماجنترون", "إصلاح لوحة التحكم", "تغيير الطبق والموتور", "علاج الصدأ الداخلي"]
  },
  {
    id: "7",
    title: "شاشات",
    slug: "screens",
    description: "صيانة شاشات LED و LCD و Smart TV بأحدث التقنيات.",
    longDescription: "مركز متخصص لصيانة الشاشات. إصلاح أعطال الباور، الصورة، الصوت، وتغيير الليدات (Backlight). نعيد لشاشتك وضوحها الأصلي.",
    icon: Tv,
    image: "https://picsum.photos/800/600?random=7",
    features: ["تغيير طقم ليدات أصلي", "إصلاح بوردة الباور", "صيانة بوردة الكونترول", "تحديث السوفت وير"]
  },
  {
    id: "8",
    title: "سخانات",
    slug: "heaters",
    description: "صيانة السخانات الكهرباء والغاز لضمان الأمان والراحة.",
    longDescription: "صيانة آمنة للسخانات. نعالج مشاكل عدم التسخين، تسريب المياه، انطفاء الشعلة، وضعف ضغط المياه. نضمن لك مياهاً ساخنة بأمان تام.",
    icon: ThermometerSun,
    image: "https://picsum.photos/800/600?random=8",
    features: ["تغيير جلدة الرداخ", "صيانة الهيتر والترموستات", "علاج تسريب الغاز", "تنظيف الخزان"]
  }
];