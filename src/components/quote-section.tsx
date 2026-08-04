import React from "react";
import { cn } from "@/lib/utils";

export function QuoteSection() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto px-5 sm:px-6 py-3 sm:py-4 rounded-lg border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-16 -left-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Large quotation mark */}
        <div className="mb-1.5">
          <svg
            className="w-7 h-7 text-muted-foreground/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>

        {/* Quote text */}
        <blockquote className="space-y-1.5">
          <p className="text-sm sm:text-base font-light text-foreground/90 leading-relaxed italic">
            You have the right to work, but never to the fruit of work. You should never engage in action for the sake of reward, nor should you long for inaction.
          </p>
          
          {/* Author attribution */}
          <footer className="flex items-center justify-end pt-0.5">
            <div className="flex items-center gap-1.5">
              <div className="h-px w-5 bg-gradient-to-r from-transparent to-foreground/30"></div>
              <cite className="text-xs font-medium text-foreground not-italic">
                Bhagavad Gita 2:47
              </cite>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
