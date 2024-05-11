import SectionHeader from "./SectionHeader.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const sectionHeaderVariants = tv({
  base: 'corner-cut uppercase overflow-hidden p-2 text-center h-min dark:text-white text-slate-900',
  variants: {
    variant: {
      default: 'bg-slate-500 border-r border-slate-500',
      destructive: 'bg-red-500 border-r border-red-500',
      primary: 'bg-primary-500 border-r border-primary-500',
      secondary: 'bg-secondary border-r border-secondary',
      success: 'bg-green-500 border-r border-green-500',
      info: 'bg-blue-500 border-r border-blue-500',
      warning: 'bg-amber-500 border-r border-amber-500',
      violet: 'bg-violet-500 border-r border-violet-500'
    }
  },
  defaultVariants: {
    variant: 'default'
  },
});

type Variant = VariantProps<typeof sectionHeaderVariants>['variant'];

type Props = {
  variant?: Variant;
  href?: string;
};

export {
  SectionHeader,
  type Props,
  sectionHeaderVariants
}
