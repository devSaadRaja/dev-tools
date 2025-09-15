import { Code, Users, GitBranch, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-[#FFFAFA] font-urbanist">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[#708090]/20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-10 w-10 text-[#4169E1]">
              <Code className="h-10 w-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mx-2">
              About DevTools Directory
            </h1>
            <div className="h-10 w-10 text-[#4169E1]">
              <Code className="h-10 w-10" />
            </div>
          </div>
          <p className="text-lg text-[#C0C0C0] max-w-3xl mx-auto">
            Our mission is to curate and maintain the most comprehensive
            collection of developer tools and resources for the modern web.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 border-b border-[#708090]/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-[#C0C0C0] mb-4">
                DevTools Directory was born out of a simple frustration: the
                overwhelming number of developer tools available today with no
                centralized way to discover, compare, and evaluate them.
              </p>
              <p className="text-[#C0C0C0] mb-4">
                As developers ourselves, we found that we were spending too much
                time searching for the right tools rather than building great
                software. We created this directory to solve three key problems:
              </p>
              <ul className="space-y-3 text-[#C0C0C0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <span>
                    Tool discovery fragmentation across blogs, social media, and
                    word-of-mouth
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <span>
                    Lack of unbiased, community-driven ratings and reviews
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <span>
                    Difficulty finding alternatives when a tool doesn't meet
                    specific needs
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1A1A2E] p-8 rounded-lg border border-[#708090]/20">
              <h3 className="text-xl font-bold mb-4 text-[#4169E1]">
                Our Goals
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#4169E1]/10 p-3 rounded-md text-[#4169E1]">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Accelerate Development</h4>
                    <p className="text-[#C0C0C0] text-sm">
                      Help developers find the right tools faster to speed up
                      their workflow
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#4169E1]/10 p-3 rounded-md text-[#4169E1]">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Community-Driven</h4>
                    <p className="text-[#C0C0C0] text-sm">
                      Build a platform where developers can share their
                      experiences and insights
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#4169E1]/10 p-3 rounded-md text-[#4169E1]">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Quality Assurance</h4>
                    <p className="text-[#C0C0C0] text-sm">
                      Ensure all listed tools meet our standards for quality and
                      usefulness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How We Maintain Our Directory
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#1A1A2E] p-8 rounded-lg border border-[#708090]/20">
              <h3 className="text-xl font-bold mb-6 text-[#4169E1]">
                Maintenance Strategy
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#4169E1]/10 p-3 rounded-md text-[#4169E1]">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Regular Updates</h4>
                    <p className="text-[#C0C0C0]">
                      Our team reviews and updates tool information on a
                      bi-weekly basis to ensure accuracy and relevance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-[#4169E1]/10 p-3 rounded-md text-[#4169E1]">
                    <GitBranch className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Version Control</h4>
                    <p className="text-[#C0C0C0]">
                      We use Git for version control, allowing us to track
                      changes, revert when necessary, and maintain a history of
                      updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Maintenance Team</h3>
              <p className="text-[#C0C0C0] mb-4">
                Our dedicated team of developers and content curators works
                tirelessly to maintain the quality and accuracy of our
                directory:
              </p>
              <ul className="space-y-4 text-[#C0C0C0]">
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <div>
                    <span className="font-bold">Core Development Team</span>
                    <p className="text-sm">
                      Responsible for platform features, bug fixes, and
                      performance optimizations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <div>
                    <span className="font-bold">Content Curators</span>
                    <p className="text-sm">
                      Research and verify new tools, update existing entries,
                      and ensure data accuracy
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4169E1] mt-1">•</span>
                  <div>
                    <span className="font-bold">Community Moderators</span>
                    <p className="text-sm">
                      Review user submissions and feedback to maintain quality
                      standards
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1A1A2E] p-8 rounded-lg border border-[#708090]/20">
            <h3 className="text-xl font-bold mb-6 text-center text-[#4169E1]">
              Our Technology Stack
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-3">Development</h4>
                <ul className="space-y-2 text-[#C0C0C0]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Next.js for frontend and API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>TypeScript for type safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Tailwind CSS for styling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Testing & QA</h4>
                <ul className="space-y-2 text-[#C0C0C0]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Jest for unit testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Cypress for E2E testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>GitHub Actions for CI/CD</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Deployment</h4>
                <ul className="space-y-2 text-[#C0C0C0]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Vercel for hosting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Automated preview deployments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4169E1]">•</span>
                    <span>Continuous deployment workflow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1A1A2E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-[#C0C0C0] max-w-2xl mx-auto mb-8">
            Help us build the most comprehensive developer tools directory by
            submitting tools, rating existing ones, or joining our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit"
              className="bg-[#4169E1] text-[#FFFAFA] px-6 py-3 rounded-md hover:bg-[#4169E1]/90 transition-colors"
            >
              Submit a Tool
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-[#708090] text-[#FFFAFA] px-6 py-3 rounded-md hover:bg-[#708090]/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
