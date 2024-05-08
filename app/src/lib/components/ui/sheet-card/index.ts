import SheetCard from './sheet-card.svelte';
import { tv, type VariantProps } from 'tailwind-variants';

const sheetCardVariants = tv({
  base: 'dark:bg-slate-900 bg-slate-300 border rounded-b-md -mt-6 pt-10 pb-4 px-4 dark:text-white text-foreground',
  variants: {
    variant: {
      default: 'border-slate-800',
      destructive: 'border-destructive text-destructive-foreground',
      secondary: 'border-secondary',
      success: 'border-success',
      info: 'border-info',
      warning: 'border-warning',
      violet: 'border-violet'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof sheetCardVariants>['variant'];

type Props = {
  variant?: Variant;
  isEditable?: boolean;
};

export { SheetCard, type Props, sheetCardVariants };
