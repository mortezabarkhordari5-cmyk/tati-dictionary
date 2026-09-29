// ========================================================
// بانک جامع اطلاعات و روستاهای الموت شرقی و غربی (۱۵۸ روستا)
// ========================================================

const villages = [
  // ==========================================
  // بخش رودبار الموت شرقی (مرکزیت: معلم‌کلایه)
  // ==========================================
  {
    id: "atan",
    name: "آتان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای تاریخی و ماسوله‌ای آتان در الموت شرقی؛ دارای معماری پلکانی صخره‌ای، باغات گردو و گیلاس و بافت سنتی ارزشمند.",
    status: "تکمیل اولیه"
  },
  {
    id: "azad-rud",
    name: "آزاد رود",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "aftabdar-sharghi",
    name: "آفتابدر",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "aghagir",
    name: "آقاگیر",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "ayin",
    name: "آیین",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "esfaran",
    name: "اسفاران",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "akbarabad",
    name: "اکبرآباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "amshek",
    name: "امشک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "andaj",
    name: "اندج",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای توریستی اندج؛ مشهور به صخره‌های عظیم شگفت‌انگیز، دره سرسبز اندج‌رود، باغات فندق و اقلیم کوهستانی چشم‌نواز.",
    status: "تکمیل اولیه"
  },
  {
    id: "ovan",
    name: "اوان (دریاچه اوان)",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "نگین گردشگری الموت؛ روستای مجاور دریاچه طبیعی اوان با چشمه‌های جوشان زیرزمینی و طبیعت بی‌نظیر.",
    status: "تکمیل اولیه"
  },
  {
    id: "avanak",
    name: "اوانک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "aveh",
    name: "اوه (آوه)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "ilan",
    name: "ایلان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bagh-dasht",
    name: "باغ‌دشت",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bagh-kalayeh",
    name: "باغ‌کلایه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bala-ruch",
    name: "بالاروچ",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "از روستاهای مرتفع و کهن الموت شرقی، هم‌جوار دره‌های الموت‌رود و باغات میوه.",
    status: "تکمیل اولیه"
  },
  {
    id: "bukan",
    name: "بوکان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bideli",
    name: "بیدلی",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "paeen-ruch",
    name: "پایین‌روچ",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "pich-bon",
    name: "پیج‌بن",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "مرتفع‌ترین روستای مرزی الموت و مازندران، مشهور به کاروانسرای تاریخی پیچ‌بن و دشت‌های چمن‌زار سرسبز کوهستانی.",
    status: "تکمیل اولیه"
  },
  {
    id: "torkan",
    name: "ترکان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "tavan",
    name: "توان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "tudaran",
    name: "توداران",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "jutan",
    name: "جوتان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "juladak",
    name: "جولادک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "chaleh",
    name: "چاله",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "hasanabad-sharghi",
    name: "حسن‌آباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "khoshkchal",
    name: "خشکچال",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی سرسبز با باغات فندق و گردو و مراتع زیبا در دامنه البرز شرقی.",
    status: "تکمیل اولیه"
  },
  {
    id: "khuban",
    name: "خوبان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "dehak",
    name: "دهک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "dikin",
    name: "دیکین",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای دیکین در جوار دریاچه اوان با مزارع کشاورزی و باغداری فعال.",
    status: "تکمیل اولیه"
  },
  {
    id: "dinehkooh",
    name: "دینه‌کوه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "معروف به روستای نمونه هدف گردشگری و پاک، دارای سنت‌های کهن و بافت بازسازی‌شده تمیز.",
    status: "تکمیل اولیه"
  },
  {
    id: "dinerood",
    name: "دینه‌رود",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "zarabad",
    name: "زرآباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای مذهبی و تاریخی الموت؛ مشهور به درخت خون‌بار زرآباد و بارگاه امامزاده علی‌اصغر (ع).",
    status: "تکمیل اولیه"
  },
  {
    id: "zardchin",
    name: "زردچین",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "zavardasht",
    name: "زواردشت",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی در مجاورت دریاچه اوان با مزارع و مراتع سرسبز.",
    status: "تکمیل اولیه"
  },
  {
    id: "zavarak",
    name: "زوارک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "sorkhkooleh",
    name: "سرخ‌کوله",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "sorkhehdazak",
    name: "سرخه دزک",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "soleymanabad",
    name: "سلیمان‌آباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "sharifabad",
    name: "شریف‌آباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "shamskalayeh",
    name: "شمس‌کلایه",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی باستانی در مجاورت شهر معلم‌کلایه با برج‌ها و محوطه‌های تاریخی کهن.",
    status: "تکمیل اولیه"
  },
  {
    id: "shahrak",
    name: "شهرک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "مرکز تجاری و مواصلاتی بخش الموت بالا، در مسیر دسترسی به دره سه هزار و قلعه حسن صباح.",
    status: "تکمیل اولیه"
  },
  {
    id: "shurastan-bala",
    name: "شورستان بالا (علیا)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "shurastan-paeen",
    name: "شورستان پایین (سفلی)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "shirkooh",
    name: "شیرکوه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "saeenkalayeh",
    name: "صائین‌کلایه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "aliabad-sharghi",
    name: "علی‌آباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "fishan",
    name: "فیشان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "ghazimahalleh",
    name: "قاضی‌محله",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "gazorkhan",
    name: "گازرخان",
    section: "رودبار الموت شرقی",
    tag: "دژ حسن صباح و دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "میزبان دژ تاریخی و نامدار قلعه حسن صباح (قلعه الموت)، مهد تمدن اسماعیلیان با باغات آلبالو، گیلاس و گردو.",
    status: "تکمیل اولیه"
  },
  {
    id: "kalayeh-sharghi",
    name: "کلایه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی تاریخی با بافت کهن و کوهستانی در الموت شرقی.",
    status: "تکمیل اولیه"
  },
  {
    id: "kolangsar",
    name: "کلنگ‌سر",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "kandansar",
    name: "کندان‌سر",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "kushk",
    name: "کوشک",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای کوشک؛ دارای دره‌ها و صخره‌های زیبا و مزارع باصفا در نزدیکی معلم‌کلایه.",
    status: "تکمیل اولیه"
  },
  {
    id: "kuchnan",
    name: "کوچنان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "kueejan",
    name: "کویی‌جان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "garmarud-bala",
    name: "گرمارود بالا (علیا)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستای گردشگری و بن‌بست دره الموت با آبشار باشکوه گرمارود و صخره‌های سر به فلک کشیده.",
    status: "تکمیل اولیه"
  },
  {
    id: "garmarud-paeen",
    name: "گرمارود پایین (سفلی)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "madan",
    name: "مدان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "mahmudabad",
    name: "محمودآباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "mardanchal",
    name: "مردان‌چال",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "masoudabad",
    name: "مسعودآباد",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "moallem-kalayeh",
    name: "معلم‌کلایه",
    section: "رودبار الموت شرقی",
    tag: "مرکز بخش رودبار الموت شرقی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "شهر تاریخی و مرکز اداری و اقتصادی بخش رودبار الموت شرقی، با سابقه کهن و امکانات رفاهی و گردشگری.",
    status: "تکمیل اولیه"
  },
  {
    id: "mollakalayeh",
    name: "ملاکلایه",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "mehran",
    name: "مهران",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "mianan",
    name: "میانان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "miankhani",
    name: "میانخانی",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "minudasht",
    name: "مینودشت (شترخان)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "nesa-bala",
    name: "نسا بالا (علیا)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "nesa-paeen",
    name: "نسا پایین (سفلی)",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "nezambagh",
    name: "نظام‌باغ",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "varbon",
    name: "وربن",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "vartavan",
    name: "ورتوان",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "vark",
    name: "ورک",
    section: "رودبار الموت شرقی",
    tag: "دهستان معلم‌کلایه",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "vanash-bala",
    name: "وناش بالا",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی بکر در انتهای دره الموت با مراتع کوهپایه‌ای و گویش اصیل تاتی.",
    status: "تکمیل اولیه"
  },
  {
    id: "vanash-paeen",
    name: "وناش پایین",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "vikan",
    name: "ویکان",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "haranak",
    name: "هرانک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی با صفا در نزدیکی معلم‌کلایه با مردمانی خونگرم و گویشوران اصیل زبان تاتی.",
    status: "تکمیل اولیه"
  },
  {
    id: "honiz",
    name: "هنیز",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت پایین",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "مبداء اصلی صعود به قله باشکوه سیالان (بام الموت)، با چشم‌انداز بی‌نظیر طبیعی و چشمه‌های خنک.",
    status: "تکمیل اولیه"
  },
  {
    id: "yerek",
    name: "یرک",
    section: "رودبار الموت شرقی",
    tag: "دهستان الموت بالا",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },

  // ==========================================
  // بخش رودبار الموت غربی (مرکزیت: شهر رازمیان)
  // ==========================================
  {
    id: "aftabdar-gharbi",
    name: "آفتابدر غربی",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار شهرستان",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "azganin-bala",
    name: "ازگنین بالا (علیا)",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی کوهپایه‌ای با چشمه‌های طبیعی و باغداری پربار در حوزه محمدزمانی.",
    status: "تکمیل اولیه"
  },
  {
    id: "azganin-paeen",
    name: "ازگنین پایین (سفلی)",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی خوش آب و هوا در الموت غربی، دارای باغات فندق، گردو و زغال‌اخته.",
    status: "تکمیل اولیه"
  },
  {
    id: "aminabad",
    name: "امین‌آباد",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "oviyarak",
    name: "اویرک",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "baghestan",
    name: "باغستان",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bala-ruch-gharbi",
    name: "بالاروچ غربی",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار شهرستان",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bayer-rood",
    name: "بایررود",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "bahramabad",
    name: "بهرام‌آباد",
    section: "رودبار الموت غربی",
    tag: "دهستان دستجرد",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی در دهستان دستجرد با اقلیمی گرم‌تر و باغات برنج، انار و زیتون در حاشیه شاهرود.",
    status: "تکمیل اولیه"
  },
  {
    id: "paeen-ruch-gharbi",
    name: "پایین‌روچ غربی",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار شهرستان",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "parandlat",
    name: "پرندلات",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "parachan",
    name: "پراچان",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "palangeh",
    name: "پلنگه",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار شهرستان",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "telater",
    name: "تلاتر",
    section: "رودبار الموت غربی",
    tag: "دهستان دستجرد",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "روستایی کهن و بااصالت، دارای درخت چنار کهنسال تاریخی و مزارع سرسبز.",
    status: "تکمیل اولیه"
  },
  {
    id: "tanooreh",
    name: "تنوره",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "juving",
    name: "جوینگ",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "chosar",
    name: "چوسر",
    section: "رودبار الموت غربی",
    tag: "دهستان دستجرد",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "hasanabad-rudbar",
    name: "حسن‌آباد رودبار",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار شهرستان",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "khanjarbolagh",
    name: "خنجربلاغ",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "khoshkrud",
    name: "خشکرود",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "darak",
    name: "درک",
    section: "رودبار الموت غربی",
    tag: "دهستان رودبار محمدزمانی",
    photos: { cover: "images/villages/placeholder.jpg", gallery: [] },
    desc: "اطلاعات تکمیلی این روستا در دست تکمیل است.",
    status: "در دست تکمیل"
  },
  {
    id: "dastjerd-bala",
    name: "دستجرد بالا (علیا)",
    section: "رودبار الموت غربی",
