import Link from 'next/link';

const categories = [
  {
    name: 'العظام',
    nameEn: 'Skeletal System',
    description: 'دراسة الهيكل العظمي بالتفصيل الدقيق',
    href: '/anatomy/skeletal',
    color: 'from-blue-400 to-blue-600',
    icon: '🦴',
  },
  {
    name: 'المفاصل',
    nameEn: 'Joints',
    description: 'أنواع المفاصل والحركات بين العظام',
    href: '/anatomy/joints',
    color: 'from-green-400 to-green-600',
    icon: '🔗',
  },
  {
    name: 'الأنسجة',
    nameEn: 'Tissues',
    description: 'النسيج العظمي والعضلي والضام والعصبي',
    href: '/anatomy/tissues',
    color: 'from-purple-400 to-purple-600',
    icon: '🧬',
  },
  {
    name: 'الأعضاء الداخلية',
    nameEn: 'Internal Organs',
    description: 'الكبد والقلب والرئة والمعدة والكليتان',
    href: '/anatomy/organs',
    color: 'from-red-400 to-red-600',
    icon: '❤️',
  },
  {
    name: 'الأعضاء الخارجية',
    nameEn: 'External Anatomy',
    description: 'الجلد والفرو والأطراف والرأس',
    href: '/anatomy/external',
    color: 'from-orange-400 to-orange-600',
    icon: '👁️',
  },
  {
    name: 'الأوعية الدموية',
    nameEn: 'Blood Vessels',
    description: 'الشرايين والأوردة والشعيرات الدموية',
    href: '/anatomy/vessels',
    color: 'from-red-400 to-pink-600',
    icon: '🩸',
  },
  {
    name: 'الأعصاب',
    nameEn: 'Nervous System',
    description: 'الدماغ والحبل الشوكي والأعصاب الطرفية',
    href: '/anatomy/nervous',
    color: 'from-yellow-400 to-yellow-600',
    icon: '⚡',
  },
  {
    name: 'نماذج 3D',
    nameEn: '3D Models',
    description: 'عرض تفاعلي ثلاثي الأبعاد للعظام والأعضاء',
    href: '/models',
    color: 'from-indigo-400 to-indigo-600',
    icon: '📦',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container-main py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div dir="rtl">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎓 منصة تعليمية متخصصة
            </div>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              تطبيق دراسة الطب البيطري والتشريح
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              منصة تعليمية شاملة لدراسة تشريح الحيوانات بالتفصيل الدقيق، تتضمن العظام والمفاصل والأنسجة والأعضاء والأوعية الدموية والأعصاب مع محتوى عربي وإنجليزي ونماذج ثلاثية الأبعاد تفاعلية.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/anatomy/skeletal">
                <button className="btn-primary text-lg">
                  ابدأ التعلم الآن
                </button>
              </Link>
              <button className="btn-secondary text-lg">
                استعرض جميع الأقسام
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">206</div>
                <div className="text-sm text-slate-600 mt-1">عظمة</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">40+</div>
                <div className="text-sm text-slate-600 mt-1">مفصل</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">8</div>
                <div className="text-sm text-slate-600 mt-1">أقسام</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">🦴</div>
                  <div className="text-sm font-semibold">العظام</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">🔗</div>
                  <div className="text-sm font-semibold">المفاصل</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">❤️</div>
                  <div className="text-sm font-semibold">الأعضاء</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">الأعصاب</div>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-6xl mb-2">📚</div>
                <div className="text-lg font-bold">محتوى تعليمي شامل</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-main py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          الأقسام التعليمية الرئيسية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="card p-6 h-full hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className={`bg-gradient-to-br ${category.color} rounded-lg p-4 text-white mb-4 text-4xl text-center`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {category.nameEn}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container-main py-20 bg-white rounded-3xl shadow-lg my-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          مميزات التطبيق
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              📖
            </div>
            <h3 className="text-2xl font-bold mb-2">محتوى دقيق</h3>
            <p className="text-slate-600">
              تفاصيل تشريحية دقيقة جداً لكل عظم وعضو وعصب وشريان
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🌐
            </div>
            <h3 className="text-2xl font-bold mb-2">ثنائي اللغة</h3>
            <p className="text-slate-600">
              محتوى كامل بالعربية والإنجليزية مع ترجمات دقيقة
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              📦
            </div>
            <h3 className="text-2xl font-bold mb-2">نماذج 3D</h3>
            <p className="text-slate-600">
              عروض ثلاثية الأبعاد تفاعلية للعظام والأعضاء
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}