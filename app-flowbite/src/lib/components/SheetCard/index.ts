import SheetCard from './SheetCard.svelte';
import { tv, type VariantProps } from 'tailwind-variants';

const sheetCardVariants = tv({
  base: 'dark:bg-slate-900 bg-slate-300 border-2 rounded-b-md -mt-6 pt-10 pb-4 px-4 dark:text-white text-slate-900',
  variants: {
    variant: {
      default: 'border-slate-500',
      destructive: 'border-red-500',
      primary: 'border-primary-500',
      success: 'border-green-500',
      info: 'border-blue-500',
      warning: 'border-amber-500',
      violet: 'border-violet-500'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof sheetCardVariants>['variant'];

type Props = {
  variant?: Variant;
};

export { SheetCard, type Props, sheetCardVariants };
