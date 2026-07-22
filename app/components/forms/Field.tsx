"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, type ReactNode } from "react";

interface BaseFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  helperText?: ReactNode;
}

type InputFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
type SelectFieldProps = BaseFieldProps & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode };

const inputClasses = "block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-slate-500 backdrop-blur-sm focus:border-teal focus:ring-2 focus:ring-teal/30 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed transition-colors";

export const Input = forwardRef<HTMLInputElement, InputFieldProps>(
  function Input({ label, error, required, helperText, ...props }, ref) {
    const id = props.id || props.name || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-slate-200">
          {label}
          {required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
        </label>
        <input ref={ref} id={id} {...props} className={`${inputClasses} ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""} ${props.className || ""}`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined} />
        {helperText && <p id={`${id}-helper`} className="text-xs text-slate-300">{helperText}</p>}
        {error && <p id={`${id}-error`} className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  function Textarea({ label, error, required, helperText, ...props }, ref) {
    const id = props.id || props.name || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-slate-200">
          {label}
          {required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
        </label>
        <textarea ref={ref} id={id} {...props} className={`${inputClasses} min-h-[120px] resize-y ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""} ${props.className || ""}`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined} />
        {helperText && <p id={`${id}-helper`} className="text-xs text-slate-300">{helperText}</p>}
        {error && <p id={`${id}-error`} className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

export const Select = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function Select({ label, error, required, helperText, children, ...props }, ref) {
    const id = props.id || props.name || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-slate-200">
          {label}
          {required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
        </label>
        <select ref={ref} id={id} {...props} className={`${inputClasses} ${error ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : ""} ${props.className || ""}`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}>
          {children}
        </select>
        {helperText && <p id={`${id}-helper`} className="text-xs text-slate-300">{helperText}</p>}
        {error && <p id={`${id}-error`} className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

export function Checkbox({ id, label, error, required, helperText, ...props }: BaseFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          {...props}
          className={`mt-1 h-4 w-4 rounded border-white/10 text-teal focus:ring-teal/20 ${props.className || ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        />
        <label htmlFor={id} className="text-sm text-slate-200 leading-relaxed">
          {label}
          {required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
        </label>
      </div>
      {helperText && <p id={`${id}-helper`} className="text-xs text-slate-300 ml-7">{helperText}</p>}
      {error && <p id={`${id}-error`} className="text-xs text-red-400 ml-7">{error}</p>}
    </div>
  );
}
