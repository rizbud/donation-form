import { forwardRef } from "react";

import { clsx } from "~/libs";

import type { ComponentPropsWithoutRef } from "react";
import type { SVG } from "~/types";

export interface BaseInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  containerClassName?: string;
  hasPrefix?: boolean;
  action?: {
    icon: SVG;
    onClick: () => void;
  };
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const {
      label,
      error,
      containerClassName,
      action,
      type,
      hasPrefix,
      ...restProps
    } = props;

    return (
      <div
        className={clsx(
          restProps.hidden && "hidden",
          "mb-6",
          containerClassName,
        )}
      >
        {label && (
          <label
            htmlFor={restProps.id}
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            {label}
            {restProps.required && (
              <span className="text-red-500 text-xs font-normal">*</span>
            )}
          </label>
        )}

        <div
          className={clsx(
            "relative flex items-center",
            type === "hidden" && "hidden",
          )}
        >
          {hasPrefix && (
            <span
              className={clsx(
                "absolute inset-y-0 left-0 flex items-center pb-px",
                error && "text-red-500",
              )}
            >
              $
            </span>
          )}
          <input
            {...restProps}
            aria-label={label}
            required={false}
            type={type ?? "text"}
            ref={ref}
            className={clsx(
              "placeholder:text-secondary text-black border-secondary block w-full border-0 border-b px-0 py-1 text-base leading-6 enabled:focus:outline-none enabled:focus:ring-0",
              error
                ? "enabled:border-red-500 enabled:focus:ring-red-500"
                : "enabled:focus:border-primary enabled:focus:ring-primary",
              hasPrefix && "pl-4",
              action && "pr-10",
              restProps.className,
            )}
            aria-invalid={!!error}
          />
          {action ? (
            <button
              type={"button"}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={action.onClick}
            >
              <action.icon
                className="text-secondary h-6 w-6"
                aria-hidden="true"
              />
            </button>
          ) : null}
        </div>

        {error ? (
          <span className={"text-sm mt-1 text-red-500"}>{error}</span>
        ) : null}
      </div>
    );
  },
);
