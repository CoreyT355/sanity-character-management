import SectionHeader from "./section-header.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const sectionHeaderVariants = tv({
  base: 'corner-cut uppercase overflow-hidden p-2 text-center h-min',
  variants: {
    variant: {
      default: 'bg-slate-800 text-destructive-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      success: 'bg-success text-success-foreground',
      info: 'bg-info text-info-foreground',
      warning: 'bg-warning text-warning-foreground',
      violet: 'bg-violet text-violet-foreground'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof sectionHeaderVariants>['variant'];

type Props = {
  variant?: Variant
};

export {
  SectionHeader,
  type Props,
  sectionHeaderVariants
}
