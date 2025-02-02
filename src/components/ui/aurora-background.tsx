// src/components/ui/aurora-background.tsx
"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_20%)],
              [--primary-gradient:repeating-linear-gradient(100deg,var(--primary)_0%,var(--primary)_7%,var(--transparent)_10%,var(--transparent)_20%)],
              [--secondary-gradient:repeating-linear-gradient(100deg,var(--secondary)_0%,var(--secondary)_7%,var(--transparent)_10%,var(--transparent)_20%)],
              [--accent-gradient:repeating-linear-gradient(100deg,var(--accent)_0%,var(--accent)_7%,var(--transparent)_10%,var(--transparent)_20%)],
              before:absolute before:inset-0 before:bg-[length:200%] before:bg-[var(--white-gradient),var(--primary-gradient),var(--secondary-gradient),var(--accent-gradient)] before:bg-blend-screen before:opacity-20 before:animate-aurora
              `,
              showRadialGradient &&
                "before:bg-[radial-gradient(ellipse_at_bottom_left,_var(--white,_#fff),_transparent),radial-gradient(ellipse_at_top_right,_var(--primary,_#000),_transparent),radial-gradient(ellipse_at_bottom_right,_var(--secondary,_#000),_transparent),radial-gradient(ellipse_at_top_left,_var(--accent,_#000),_transparent)]"
            )}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};
