import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center max-w-md">
        <FileQuestion className="h-12 w-12 text-[#4169E1] mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-[#FFFAFA] mb-4 font-urbanist">
          Page not found
        </h2>
        <p className="text-[#C0C0C0] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-[#4169E1] hover:bg-[#4169E1]/80">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
