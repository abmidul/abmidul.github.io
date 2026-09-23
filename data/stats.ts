/**
 * ============================================================================
 * STATS CONFIGURATION (কাউন্টার কার্ডের ডাটা ও সংখ্যা)
 * ============================================================================
 * যে কোনো সময় সংখ্যা বা টেক্সট পরিবর্তন করতে নিচের `value`, `suffix`, বা `label` এডিট করুন।
 */

export interface StatItem {
  id: string;
  value: number;       // লক্ষ্য সংখ্যা (যেকোনো সময় এই সংখ্যা পরিবর্তন করতে পারেন)
  suffix: string;      // সংখ্যার সাথে থাকা চিহ্ন (যেমন: '+')
  prefix?: string;     // সংখ্যার আগের চিহ্ন (ঐচ্ছিক)
  label: string;       // নিচে প্রদর্শিত শিরোনাম
  padDigits?: number;  // ২ ডিজিটের জন্য (যেমন: '03+' এর জন্য padDigits: 2)
}

export const STATS_DATA: StatItem[] = [
  {
    id: 'projects-completed',
    value: 3,           // ১ম কার্ডের সংখ্যা (03+)
    suffix: '+',        // এনিমেশন দেখাবে: 00+, 01+, 02+, 03+
    padDigits: 2,       // 03+ ফরম্যাট
    label: 'Projects Completed',
  },
  {
    id: 'research-areas',
    value: 5,           // ২য় কার্ডের সংখ্যা (উদাহরণ: 5, 10, ইত্যাদি)
    suffix: '+',        // এনিমেশন দেখাবে: 0+, 1+, 2+, 3+ ... 5+
    label: 'Research Areas',
  },
  {
    id: 'passion-percentage',
    value: 100,         // ৩য় কার্ডের সংখ্যা (উদাহরণ: 100)
    suffix: '',         // এনিমেশন দেখাবে: 0, 1, 2, 3 ... 100
    label: '% Passion',
  },
];
