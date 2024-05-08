import TrackMarker from "./TrackMarker.svelte"
import { tv, type VariantProps } from 'tailwind-variants';

const trackMarkerVariants = tv({
  base: 'dark:text-white text-foreground',
  variants: {
    variant: {
      default: 'dark:text-white text-slate-800'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

type Variant = VariantProps<typeof trackMarkerVariants>['variant'];

type Props = {
  variant?: Variant,
  state?: number
};

export {
  TrackMarker,
  type Props,
  trackMarkerVariants
}