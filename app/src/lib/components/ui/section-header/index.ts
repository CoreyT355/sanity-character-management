import SectionHeader from "./section-header.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const sectionHeaderVariants = tv({
  base: 'corner-cut uppercase overflow-hidden p-2 text-center h-min',
  variants: {
    variant: {
      default: 'bg-slate-800 text-destructive-foreground border-r border-slate-800',
      destructive: 'bg-destructive text-destructive-foreground border-r border-destructive',
      primary: 'bg-primary text-primary-foreground border-r border-primary',
      secondary: 'bg-secondary text-secondary-foreground border-r border-secondary',
      success: 'bg-success text-success-foreground border-r border-success',
      info: 'bg-info text-info-foreground border-r border-info',
      warning: 'bg-warning text-warning-foreground border-r border-warning',
      violet: 'bg-violet text-violet-foreground border-r border-violet'
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
  isEditable?: boolean;
};

export {
  SectionHeader,
  type Props,
  sectionHeaderVariants
}
