import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Rocket,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Aiwebsite() {
  const stats = [
    {
      title: "Development Time Saved",
      value: "70%",
    },
    {
      title: "Lines of Code",
      value: "2,132+",
    },
    {
      title: "Pipeline Stages",
      value: "4",
    },
    {
      title: "Manual Fixes",
      value: "2-3",
    },
  ];

  const codeStats = [
    ["Python", "1,594"],
    ["CSS", "295"],
    ["JSON", "137"],
    ["SVG", "27"],
    ["TypeScript", "26"],
    ["JavaScript", "21"],
    ["TSX", "19"],
    ["HTML", "13"],
  ];

  const stages = [
    {
      title: "Planning",
      description:
        "Transforms natural language prompts into structured architecture blueprints.",
    },
    {
      title: "Execution",
      description:
        "Converts architecture plans into component generation tasks.",
    },
    {
      title: "Assignment",
      description:
        "Safely writes generated files into the project structure without race conditions.",
    },
    {
      title: "Validation & Healing",
      description:
        "Detects errors, validates builds, and applies automated fixes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
              AI Engineering Project
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              AI Website Builder
            </h1>

            <p className="max-w-3xl text-xl text-muted-foreground">
              A multi-agent AI system capable of generating complete websites
              from natural language prompts while automatically validating,
              debugging, and improving generated code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">Project Overview</h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="leading-8 text-muted-foreground">
              Traditional web development involves a significant amount of
              repetitive setup work before developers can focus on solving real
              business problems. Creating folder structures, configuring
              dependencies, designing layouts, implementing routing, fixing
              imports, and debugging build issues consume a large portion of
              development time.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              The AI Website Builder was created to reduce this overhead. By
              combining multiple AI agents with a structured generation
              pipeline, the system can transform a simple natural language
              prompt into a production-ready website scaffold.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              Instead of spending hours building project foundations manually,
              developers can start with a fully generated baseline and focus on
              product logic, design refinement, and feature development.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">The Problem</h2>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Idea → Project Setup</p>
              <p>Project Setup → Dependencies</p>
              <p>Dependencies → Components</p>
              <p>Components → Styling</p>
              <p>Styling → Routing</p>
              <p>Routing → Debugging</p>
              <p>Debugging → Working Website</p>
            </div>
          </div>

          <p className="mt-8 text-muted-foreground leading-8">
            Most developers repeatedly solve the same setup problems. The goal
            of this project is not to replace engineers but to automate these
            repetitive engineering tasks.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">The Solution</h2>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
            <p className="text-lg leading-8">
              Input:
            </p>

            <div className="mt-4 rounded-xl border border-primary/20 bg-background/50 p-4 font-mono">
              Create a modern cryptocurrency dashboard with responsive design
              and dark mode support.
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Architecture Planning",
                "Component Generation",
                "Routing Setup",
                "Tailwind Styling",
                "Validation Checks",
                "Runtime Error Detection",
                "Automated Fixes",
                "Production Ready Structure",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-primary/10 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-4xl font-bold">
            Multi-Agent Pipeline
          </h2>

          <div className="space-y-6">
            {stages.map((stage, index) => (
              <div
                key={stage.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold">
                      {stage.title}
                    </h3>

                    <p className="text-muted-foreground mt-2">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">
            Agentic Memory System
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-primary/10 bg-white/5 backdrop-blur-xl p-8">
              <Brain className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                Short-Term Memory
              </h3>

              <p className="text-muted-foreground leading-7">
                Tracks generated files, debugging sessions, fixes, and active
                execution state during a pipeline run.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-white/5 backdrop-blur-xl p-8">
              <Database className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                Long-Term Memory
              </h3>

              <p className="text-muted-foreground leading-7">
                Learns recurring dependency issues and stores permanent rules
                that improve future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "React",
              "TypeScript",
              "TailwindCSS",
              "LangChain",
              "Selenium",
              "AI Agents",
              "Wouter",
              "Radix UI",
              "Shadcn/UI",
              "OKLCH",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Code Stats */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">
            Code Statistics
          </h2>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-right">Lines</th>
                </tr>
              </thead>

              <tbody>
                {codeStats.map(([lang, count]) => (
                  <tr
                    key={lang}
                    className="border-t border-white/10"
                  >
                    <td className="p-4">{lang}</td>
                    <td className="p-4 text-right">{count}</td>
                  </tr>
                ))}

                <tr className="border-t border-primary/20 font-bold">
                  <td className="p-4">Total</td>
                  <td className="p-4 text-right">2,132</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
            <Rocket className="h-12 w-12 text-primary mb-6" />

            <h2 className="text-4xl font-bold mb-6">
              Impact & Results
            </h2>

            <p className="leading-8 text-muted-foreground">
              This project successfully reduced website development overhead by
              more than 70% by automating planning, generation, validation, and
              debugging workflows.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              In many cases, generated websites require only 2–3 manual fixes
              before becoming production-ready. When paired with
              programming-focused models, complete working websites can often be
              generated in a single attempt.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              The purpose of this project is not to replace developers but to
              eliminate repetitive engineering work and accelerate the journey
              from idea to working product.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}