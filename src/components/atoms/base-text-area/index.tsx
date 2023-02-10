import { forwardRef } from "react";

import { clsx } from "~/libs";

import type { ComponentPropsWithoutRef } from "react";

export interface BaseTextAreaProps
  extends ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
  (props, ref) => {
    const { label, error, containerClassName, ...restProps } = props;

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

        <div className="relative">
          <textarea
            {...restProps}
            aria-label={label}
            required={false}
            ref={ref}
            className={clsx(
              "placeholder:text-gray-400 text-black border-gray-300 block w-full rounded border p-4 text-base leading-6 enabled:focus:outline-none enabled:focus:ring-1",
              error
                ? "enabled:border-red-500 enabled:focus:ring-red-500"
                : "enabled:focus:border-primary enabled:focus:ring-primary",
              restProps.className,
            )}
            aria-invalid={!!error}
          />
        </div>

        {error ? (
          <span className={"text-sm mt-1 text-red-500"}>{error}</span>
        ) : null}
      </div>
    );
  },
);
