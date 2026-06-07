import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Database,
  Mic,
  Hand,
  Cpu,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignLanguage() {
  const stats = [
    {
      title: "Training Samples",
      value: "10,000+",
    },
    {
      title: "Accuracy",
      value: "85%+",
    },
    {
      title: "Framework",
      value: "PyTorch",
    },
    {
      title: "Stack",
      value: "Django",
    },
  ];

  const features = [
    "Sign → Text Conversion",
    "Text → Sign Visualization",
    "Voice Generation",
    "Deep Learning Classification",
    "Web-Based Interface",
    "Real-Time Prediction",
  ];

  const technologies = [
    "Python",
    "Django",
    "PyTorch",
    "HTML",
    "JavaScript",
    "Deep Learning",
    "JSON Tokenizer",
    "Computer Vision",
  ];

  const architecture = [
    {
      title: "Gesture Recognition",
      description:
        "Captures sign language gestures and prepares them for preprocessing.",
      icon: Hand,
    },
    {
      title: "Preprocessing",
      description:
        "Normalizes and transforms gesture data into model-ready inputs.",
      icon: Cpu,
    },
    {
      title: "Deep Learning Model",
      description:
        "PyTorch model classifies gestures into meaningful language outputs.",
      icon: Brain,
    },
    {
      title: "Text & Voice Output",
      description:
        "Converts predictions into readable text and generated speech.",
      icon: Mic,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
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
              AI Accessibility Project
            </span>

            <h1 className="text-5xl md:text-7xl font-bold">
              🤟 Sign Language Full Stack
            </h1>

            <p className="max-w-3xl text-xl text-muted-foreground">
              A Full Stack Deep Learning application designed to convert
              sign language gestures into readable text and voice output,
              helping bridge communication barriers using AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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
          <h2 className="mb-8 text-4xl font-bold">
            Project Overview
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <p className="leading-8 text-muted-foreground">
              Communication barriers remain a significant challenge for
              individuals who rely on sign language. Many conversations
              require interpreters or alternative communication methods,
              making interactions slower and less accessible.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              This project combines Deep Learning, Computer Vision,
              Django, and Voice Synthesis to create an end-to-end
              communication system capable of translating sign language
              gestures into text and speech.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              The objective was not only to achieve good classification
              accuracy but to deliver a complete real-world solution that
              users can interact with through a web interface.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-bold">
            The Problem
          </h2>

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <p className="text-lg leading-8 text-muted-foreground">
              Individuals using sign language often face communication
              challenges when interacting with people unfamiliar with
              sign language.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Human interpreters are not always available, creating
              barriers in education, workplaces, healthcare, and
              everyday communication.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Workflow */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-4xl font-bold">
            Application Workflow
          </h2>

          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
            <div className="space-y-4 text-center font-medium">
              <p>🤟 Hand Gesture</p>
              <p>↓</p>
              <p>⚙️ Preprocessing</p>
              <p>↓</p>
              <p>🧠 Deep Learning Model</p>
              <p>↓</p>
              <p>📝 Text Prediction</p>
              <p>↓</p>
              <p>🔊 Voice Output</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-4xl font-bold">
            System Architecture
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {architecture.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                >
                  <Icon className="mb-4 h-10 w-10 text-primary" />

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-4xl font-bold">
            Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dataset & Model */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-4xl font-bold">
            AI Model Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <Database className="mb-4 h-10 w-10 text-primary" />

              <h3 className="text-2xl font-semibold mb-4">
                Dataset
              </h3>

              <p className="text-muted-foreground">
                Trained using more than 10,000 gesture samples to
                improve recognition accuracy and generalization.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <Brain className="mb-4 h-10 w-10 text-primary" />

              <h3 className="text-2xl font-semibold mb-4">
                Deep Learning Model
              </h3>

              <p className="text-muted-foreground">
                PyTorch-based classification model stored as GT.pth
                and optimized for sign language prediction.
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
            {technologies.map((tech) => (
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

      {/* Impact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
            <Rocket className="h-12 w-12 text-primary mb-6" />

            <h2 className="mb-6 text-4xl font-bold">
              Impact & Results
            </h2>

            <p className="leading-8 text-muted-foreground">
              The project successfully demonstrates how Artificial
              Intelligence can be used to improve accessibility and
              communication through real-world applications.
            </p>

            <p className="mt-6 leading-8 text-muted-foreground">
              By integrating Deep Learning, Django, Text Generation,
              and Voice Synthesis into a unified platform, the system
              provides a practical communication bridge for users
              relying on sign language.
            </p>

            <div className="mt-8 space-y-3">
              <p>✅ 10,000+ Training Samples</p>
              <p>✅ 85%+ Classification Accuracy</p>
              <p>✅ Full Stack AI Integration</p>
              <p>✅ Voice & Text Output</p>
              <p>✅ Accessibility-Focused Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}