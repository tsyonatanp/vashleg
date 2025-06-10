import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'maintenance',
    name: 'תחזוקה וניקיון',
    icon: 'WrenchScrewdriverIcon',
    services: [
      {
        id: 'cleaning',
        title: 'ניקיון שוטף',
        description: 'ניקוי חדר מדרגות, לובי ומעלית',
        icon: 'SparklesIcon',
        category: 'maintenance'
      },
      {
        id: 'pest-control',
        title: 'הדברת מזיקים',
        description: 'הדברה מקצועית לכל סוגי המזיקים',
        icon: 'BugAntIcon',
        category: 'maintenance'
      },
      {
        id: 'window-cleaning',
        title: 'שטיפת חלונות',
        description: 'שטיפת חלונות חיצוניים',
        icon: 'WindowIcon',
        category: 'maintenance'
      },
      {
        id: 'sewage',
        title: 'ניקוי בורות ביוב',
        description: 'פתיחת סתימות וניקוי בורות ביוב',
        icon: 'ArrowPathIcon',
        category: 'maintenance'
      }
    ]
  },
  {
    id: 'plumbing',
    name: 'אינסטלציה ומים',
    icon: 'WrenchIcon',
    services: [
      {
        id: 'leak',
        title: 'תיקון נזילות',
        description: 'איתור ותיקון נזילות מים',
        icon: 'ArrowPathIcon',
        category: 'plumbing'
      },
      {
        id: 'clog',
        title: 'פתיחת סתימות',
        description: 'פתיחת סתימות בצנרת',
        icon: 'ArrowPathIcon',
        category: 'plumbing'
      },
      {
        id: 'water-pressure',
        title: 'בדיקת לחץ מים',
        description: 'בדיקת לחץ מים ופתרון בעיות לחץ',
        icon: 'ArrowTrendingUpIcon',
        category: 'plumbing'
      },
      {
        id: 'thermal-leak',
        title: 'איתור נזילות תרמוגרפי',
        description: 'איתור נזילות באמצעות מצלמה תרמית',
        icon: 'CameraIcon',
        category: 'plumbing'
      }
    ]
  },
  {
    id: 'electrical',
    name: 'חשמל',
    icon: 'BoltIcon',
    services: [
      {
        id: 'electrical-repair',
        title: 'תיקוני חשמל',
        description: 'תיקונים והתקנות חשמל',
        icon: 'BoltIcon',
        category: 'electrical'
      },
      {
        id: 'elevator',
        title: 'תחזוקת מעליות',
        description: 'תחזוקה שוטפת ותיקון מעליות',
        icon: 'ArrowUpIcon',
        category: 'electrical'
      },
      {
        id: 'intercom',
        title: 'טכנאי אינטרקום',
        description: 'תיקון והתקנת מערכות אינטרקום',
        icon: 'PhoneIcon',
        category: 'electrical'
      },
      {
        id: 'security-cameras',
        title: 'מצלמות אבטחה',
        description: 'התקנה ותחזוקת מצלמות אבטחה',
        icon: 'VideoCameraIcon',
        category: 'electrical'
      },
      {
        id: 'ev-charging',
        title: 'התקנת עמדת טעינה לרכב חשמלי',
        description: 'התקנה מקצועית של עמדות טעינה לרכב חשמלי',
        icon: 'BoltIcon',
        category: 'electrical'
      }
    ]
  },
  {
    id: 'garden',
    name: 'גינון',
    icon: 'SparklesIcon',
    services: [
      {
        id: 'garden-maintenance',
        title: 'תחזוקת גינה',
        description: 'גיזום, דישון וטיפול בגינה',
        icon: 'SparklesIcon',
        category: 'garden'
      },
      {
        id: 'irrigation',
        title: 'מערכת השקיה',
        description: 'תחזוקה ותיקון מערכות השקיה',
        icon: 'ArrowPathIcon',
        category: 'garden'
      },
      {
        id: 'planting',
        title: 'שתילה וטיפוח',
        description: 'שתילת צמחים וטיפוח הגינה',
        icon: 'SparklesIcon',
        category: 'garden'
      }
    ]
  },
  {
    id: 'construction',
    name: 'שיפוצים ותחזוקת מבנה',
    icon: 'BuildingOfficeIcon',
    services: [
      {
        id: 'painting',
        title: 'צביעה וטיח',
        description: 'צביעת קירות ותיקוני טיח',
        icon: 'PaintBrushIcon',
        category: 'construction'
      },
      {
        id: 'water-damage',
        title: 'תיקון רטיבויות',
        description: 'טיפול ברטיבויות וסדקים',
        icon: 'ExclamationTriangleIcon',
        category: 'construction'
      },
      {
        id: 'lobby-renovation',
        title: 'שיפוץ לובי',
        description: 'שיפוץ וחידוש לובי הבניין',
        icon: 'HomeIcon',
        category: 'construction'
      },
      {
        id: 'engineer',
        title: 'מהנדס בניין',
        description: 'ייעוץ והנחיה מקצועית',
        icon: 'UserIcon',
        category: 'construction'
      }
    ]
  },
  {
    id: 'management',
    name: 'ניהול ופיננסים',
    icon: 'DocumentTextIcon',
    services: [
      {
        id: 'management-company',
        title: 'חברת ניהול',
        description: 'ניהול מקצועי של הבניין',
        icon: 'BuildingOfficeIcon',
        category: 'management'
      },
      {
        id: 'payments',
        title: 'גביית תשלומים',
        description: 'ניהול וגביית תשלומי ועד בית',
        icon: 'BanknotesIcon',
        category: 'management'
      },
      {
        id: 'accounting',
        title: 'רואה חשבון',
        description: 'ניהול חשבונות וועד בית',
        icon: 'CalculatorIcon',
        category: 'management'
      },
      {
        id: 'legal',
        title: 'ייעוץ משפטי',
        description: 'ייעוץ משפטי לוועד בית',
        icon: 'ScaleIcon',
        category: 'management'
      }
    ]
  },
  {
    id: 'security',
    name: 'ביטוחים ובטיחות',
    icon: 'ShieldCheckIcon',
    services: [
      {
        id: 'building-insurance',
        title: 'ביטוח מבנה',
        description: 'ביטוח מבנה משותף',
        icon: 'ShieldCheckIcon',
        category: 'security'
      },
      {
        id: 'liability-insurance',
        title: 'ביטוח צד ג\'',
        description: 'ביטוח אחריות צד ג\'',
        icon: 'UserGroupIcon',
        category: 'security'
      },
      {
        id: 'safety-check',
        title: 'בדיקות בטיחות',
        description: 'בדיקות בטיחות למעליות ומערכות',
        icon: 'ExclamationTriangleIcon',
        category: 'security'
      },
      {
        id: 'fire-safety',
        title: 'בטיחות אש',
        description: 'בדיקות ותחזוקת מערכות גילוי אש',
        icon: 'FireIcon',
        category: 'security'
      }
    ]
  }
]; 