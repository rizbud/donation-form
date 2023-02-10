import { forwardRef } from "react";

import { clsx } from "~/libs";

import type { ComponentPropsWithoutRef } from "react";
import type { SVG } from "~/types";

export interface BaseInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  containerClassName?: string;
  action?: {
    icon: SVG;
    onClick: () => void;
  };
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const { label, error, containerClassName, action, type, ...restProps } =
      props;

    return (
      <div
        className={clsx(
          restProps.hidden && "hidden",
          "mb-4",
          containerClassName,
        )}
      >
        {label && (
          <label
            htmlFor={restProps.id}
            className="block text-base font-semibold text-slate-800 mb-2"
          >
            {label}
            {restProps.required && (
              <span className="text-red-500 text-sm font-normal">*</span>
            )}
          </label>
        )}

        <div className={`relative ${type === "hidden" && "hidden"}`}>
          <input
            {...restProps}
            aria-label={label}
            required={false}
            type={type ?? "text"}
            ref={ref}
            className={`placeholder:text-gray-400 text-black border-gray-300 block w-full rounded border p-4 text-base leading-6 enabled:focus:outline-none enabled:focus:ring-1
              ${
                error
                  ? "enabled:border-red-500 enabled:focus:ring-red-500"
                  : "enabled:focus:border-primary enabled:focus:ring-primary"
              }
              ${action && "pr-10"}
              ${restProps.className}`}
            aria-invalid={!!error}
          />
          {action ? (
            <button
              type={"button"}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={action.onClick}
            >
              <action.icon
                className="text-gray-600 h-6 w-6"
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
