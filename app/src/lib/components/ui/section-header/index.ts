import SectionHeader from "./section-header.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const sectionHeaderVariants = tv({
  base: 'corner-cut uppercase overflow-hidden p-2 text-center h-min',
  variants: {
    variant: {
      default: 'bg-slate-800 text-destructive-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      success: 'bg-success text-success-foreground',
      info: 'bg-info text-info-foreground',
      warning: 'bg-warning text-warning-foreground',
      violet: 'bg-violet text-violet-foreground'
    }
  },
  defaultVariants: {
    variant: 'default'
  },
});

type Variant = VariantProps<typeof sectionHeaderVariants>['variant'];

type Props = {
  variant?: Variant,
  href?: string
};

export {
  SectionHeader,
  type Props,
  sectionHeaderVariants
}
