export type { ToastStore } from './store';

export interface ToastSettings {
  /** Provide the toast message. Supports HTML. */
  message: string;
  /** Enables auto-hide after the timeout duration. */
  autohide?: boolean;
  /** Set the auto-hide timeout duration. */
  timeout?: number;
  /** Hide dismiss button */
  hideDismiss?: boolean;
  /** Remain visible on Hover */
  hoverable?: boolean;
  /** Provide arbitrary CSS classes to style the toast. */
  classes?: string;

  color?: string;

  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
}

export interface Toast extends ToastSettings {
  /** A UUID will be auto-assigned on `.trigger()`. */
  id: string;
  /** The id of the `setTimeout` if `autohide` is enabled  */
  timeoutId?: ReturnType<typeof setTimeout>;
}
