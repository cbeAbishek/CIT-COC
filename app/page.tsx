"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function Page() {
  const features = [
    {
      title: "Fast to build",
      desc: "Prebuilt UI primitives and concise patterns so you can prototype quickly.",
    },
    {
      title: "Accessible",
      desc: "Focus on accessibility and consistent behavior across browsers.",
    },
    {
      title: "Composable",
      desc: "Small composable components you can combine to create interfaces.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur sticky top-0 z-20">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold">YourBrand</div>
            <nav className="hidden md:flex gap-4 text-sm text-slate-600">
              <a className="hover:text-slate-900" href="#features">Features</a>
              <a className="hover:text-slate-900" href="#pricing">Pricing</a>
              <a className="hover:text-slate-900" href="#contact">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="#signin" className="text-sm">Sign in</a>
            </Button>
            <Button>
              Get started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Build beautiful interfaces faster with shadcn-ui
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            A minimal, accessible set of UI primitives built with Tailwind CSS — perfect for
            prototyping and production apps alike.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Get started</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-lg p-6">
              <pre className="rounded-md bg-slate-900 text-slate-50 p-4 text-sm overflow-auto">
{`// Example

<Button>Click me</Button>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">What you get</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-12 bg-white">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} YourBrand. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#privacy">Privacy</a>
            <a className="text-sm text-slate-600 hover:text-slate-900" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}