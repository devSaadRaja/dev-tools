"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";

interface UserRatingProps {
  toolId: string;
  currentRating?: number;
}

export default function UserRating({ toolId, currentRating }: UserRatingProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleRatingSubmit = async () => {
    if (rating === 0) {
      toast.error("Please select a rating before submitting");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send the rating to your API
    // await submitRating(toolId, rating, feedback)

    toast.success("Thank you for your feedback!");

    setIsSubmitting(false);
    setFeedback("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none p-1"
              aria-label={`Rate ${star} stars out of 5`}
            >
              <Star
                className={`h-8 w-8 transition-all ${
                  (hoveredRating || rating) >= star
                    ? "fill-[#4169E1] text-[#4169E1]"
                    : "text-[#C0C0C0]/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-sm">
        {rating > 0 ? (
          <div className="bg-[#0f172a] py-2 px-4 rounded-md inline-block">
            <span className="text-[#C0C0C0]">
              You selected{" "}
              <span className="text-[#4169E1] font-medium">
                {rating} star{rating !== 1 ? "s" : ""}
              </span>
            </span>
          </div>
        ) : (
          <span className="text-[#C0C0C0]">Click to rate</span>
        )}
      </div>

      {rating > 0 && (
        <div className="space-y-4">
          <Textarea
            placeholder="Share your experience with this tool (optional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="bg-[#0f172a] border-[#2d3748] focus:border-[#4169E1] text-[#FFFAFA] placeholder:text-[#C0C0C0]/70 resize-none h-24"
          />

          <Button
            onClick={handleRatingSubmit}
            disabled={isSubmitting}
            className="w-full bg-[#4169E1] hover:bg-[#4169E1]/80 text-[#FFFAFA]"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-[#FFFAFA] border-t-transparent rounded-full"></div>
                <span>Submitting...</span>
              </div>
            ) : (
              "Submit Rating"
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
