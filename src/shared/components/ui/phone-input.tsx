"use client";

import * as React from "react";
import PhoneInput, { type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/shared/lib/utils/tailwind-cn";

interface PhoneNumberInputProps {
    value: Value | undefined;
    onChange: (value: Value | undefined) => void;
    id?: string;
    disabled?: boolean;
    className?: string;
    "aria-invalid"?: boolean;
    placeholder?: string;
}

const PhoneNumberInput = React.forwardRef<HTMLInputElement, PhoneNumberInputProps>(
    ({ value, onChange, id, disabled, className, "aria-invalid": ariaInvalid, placeholder = "1012345678" }, ref) => {
        return (
            <PhoneInput
                international
                defaultCountry="EG"
                value={value}
                onChange={onChange}
                disabled={disabled}
                id={id}
                inputRef={ref}
                aria-invalid={ariaInvalid}
                autoComplete="tel"
                placeholder={placeholder}
                smartCaret={false}
                className={cn(
                    // ── layout & base ──
                    "flex items-center h-11.5 w-full min-w-0 bg-transparent",
                    // ── border ──
                    "border border-gray-200 rounded-none outline-none",
                    // ── focus ──
                    "focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600/20",
                    // ── error ──
                    ariaInvalid && "border-red-500 ring-1 ring-red-500/20",
                    // ── disabled ──
                    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                    // ── transitions ──
                    "transition-colors",

                    // ── country selector wrapper ──
                    "[&_.PhoneInputCountry]:flex [&_.PhoneInputCountry]:items-center",
                    "[&_.PhoneInputCountry]:gap-1.5",
                    "[&_.PhoneInputCountry]:px-3.5",         // left padding inside selector
                    "[&_.PhoneInputCountry]:self-stretch",   // full height
                    // ✅ vertical divider via right border
                    "[&_.PhoneInputCountry]:border-r [&_.PhoneInputCountry]:border-gray-200",
                    "[&_.PhoneInputCountry]:mr-0",           // no gap — divider handles spacing

                    // ── flag icon ──
                    "[&_.PhoneInputCountryIcon]:w-5 [&_.PhoneInputCountryIcon]:h-auto [&_.PhoneInputCountryIcon]:shrink-0",
                    "[&_.PhoneInputCountryIcon--border]:shadow-none [&_.PhoneInputCountryIcon--border]:bg-transparent",

                    // ── country <select> ──
                    "[&_.PhoneInputCountrySelect]:appearance-none [&_.PhoneInputCountrySelect]:bg-transparent",
                    "[&_.PhoneInputCountrySelect]:border-none [&_.PhoneInputCountrySelect]:outline-none",
                    "[&_.PhoneInputCountrySelect]:text-xs [&_.PhoneInputCountrySelect]:cursor-pointer",
                    "[&_.PhoneInputCountrySelect]:absolute [&_.PhoneInputCountrySelect]:inset-0 [&_.PhoneInputCountrySelect]:opacity-0", // hidden but clickable

                    // ── dropdown arrow ──
                    "[&_.PhoneInputCountrySelectArrow]:ml-0.5 [&_.PhoneInputCountrySelectArrow]:opacity-50 [&_.PhoneInputCountrySelectArrow]:w-3 [&_.PhoneInputCountrySelectArrow]:h-3",

                    // ── number <input> ──
                    "[&_.PhoneInputInput]:flex-1 [&_.PhoneInputInput]:bg-transparent",
                    "[&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:outline-none",
                    "[&_.PhoneInputInput]:text-xs",
                    "[&_.PhoneInputInput]:px-3.5",           // padding left of number field
                    "[&_.PhoneInputInput]:placeholder:text-muted-foreground [&_.PhoneInputInput]:placeholder:opacity-100",
                    "[&_.PhoneInputInput]:h-full",

                    className
                )}
            />
        );
    }
);

PhoneNumberInput.displayName = "PhoneNumberInput";
export { PhoneNumberInput };