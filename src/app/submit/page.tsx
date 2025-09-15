"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Hexagon, AlertCircle, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Tool name must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  url: z.string().url({ message: "Please enter a valid URL" }),
  category: z
    .string()
    .min(1, { message: "Please select at least one category" }),
  tags: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function SubmitToolPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      category: "",
      tags: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form data submitted:", data);

      // Success
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "There was an error submitting your tool. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="h-8 w-8 text-royalBlue" />
              <Hexagon className="h-8 w-8 text-royalBlue" />
            </div>
            <h1 className="font-urbanist text-4xl font-bold gradient-text mb-4">
              Submit a Tool
            </h1>
            <p className="font-urbanist text-silver text-lg max-w-xl">
              Share your favorite developer tools with the community. Help
              others discover resources that can improve their workflow.
            </p>
          </div>

          <div className="bg-card-bg border border-border rounded-lg p-6 shadow-lg">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-royalBlue/10 border border-royalBlue/30 rounded-md flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-royalBlue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-snow">
                    Submission Successful!
                  </h3>
                  <p className="text-silver text-sm mt-1">
                    Thank you for contributing to the DevTools Directory. Your
                    submission will be reviewed shortly.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/10 border border-red-500/30 rounded-md flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-snow">Submission Failed</h3>
                  <p className="text-silver text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-snow">
                  Tool Name <span className="text-royalBlue">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="e.g., Visual Studio Code"
                  className="bg-background border-border text-snow"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-snow">
                  Description <span className="text-royalBlue">*</span>
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief description of the tool and its key features..."
                  className="bg-background border-border text-snow min-h-[120px]"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="url" className="text-snow">
                  Website URL <span className="text-royalBlue">*</span>
                </Label>
                <Input
                  id="url"
                  placeholder="https://example.com"
                  className="bg-background border-border text-snow font-source-code-pro text-sm"
                  {...register("url")}
                />
                {errors.url && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.url.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-snow">
                  Category <span className="text-royalBlue">*</span>
                </Label>
                <select
                  id="category"
                  className="font-urbanist w-full bg-background border border-border rounded-md p-2 text-snow"
                  {...register("category")}
                >
                  <option value="">Select a category</option>
                  <option value="editor">Code Editor</option>
                  <option value="framework">Framework</option>
                  <option value="library">Library</option>
                  <option value="productivity">Productivity</option>
                  <option value="design">Design</option>
                  <option value="testing">Testing</option>
                  <option value="api">API</option>
                  <option value="devops">DevOps</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-snow">
                  Tags{" "}
                  <span className="text-silver text-sm">(comma separated)</span>
                </Label>
                <Input
                  id="tags"
                  placeholder="e.g., javascript, typescript, react"
                  className="bg-background border-border text-snow font-source-code-pro text-sm"
                  {...register("tags")}
                />
                <p className="font-urbanist text-silver text-sm">
                  Add relevant tags to help users find this tool more easily
                </p>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="font-urbanist w-full bg-royalBlue hover:bg-royalBlue/90 text-snow font-medium py-2.5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Tool"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
