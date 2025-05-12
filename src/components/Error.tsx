"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center max-w-md">
        <AlertTriangle className="h-12 w-12 text-[#4169E1] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#FFFAFA] mb-4 font-urbanist">
          Something went wrong
        </h2>
        <p className="text-[#C0C0C0] mb-8">
          We encountered an error while trying to load the top rated tools.
          Please try again or explore other sections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            className="bg-[#4169E1] hover:bg-[#4169E1]/80"
          >
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#708090]/40 text-[#FFFAFA]"
          >
            <Link href="/">Return home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
