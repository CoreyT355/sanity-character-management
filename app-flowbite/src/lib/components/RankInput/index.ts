import RankInput from "./RankInput.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const rankInputVariants = tv({
  base: 'dark:text-white text-foreground',
  variants: {
    variant: {
      default: 'dark:text-white text-slate-800',
      destructive: 'dark: text-destructive text-destructive',
      secondary: 'dark:text-secondary text-secondary',
      success: 'dark:text-success text-success',
      info: 'dark:text-info text-info',
      warning: 'dark:text-warning text-warning',
      violet: 'dark:text-violet text-violet'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof rankInputVariants>['variant'];

type Props = {
  variant?: Variant;
  maxRanks: number;
  currentRank: number;
};

export {
  RankInput,
  type Props,
  rankInputVariants
}