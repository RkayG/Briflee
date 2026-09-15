import { ArrowRight, CheckCircle2, ChevronRight, Layers, MessagesSquare, MousePointerClick } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] text-zinc-900 selection:bg-zinc-200 font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Briflee</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#features" className="hover:text-zinc-900 transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-zinc-900 transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Log in
          </Link>
          <Link href="/signup" className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
            Get early access
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-medium text-zinc-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            The client-facing layer for independent professionals
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 max-w-4xl mb-8 leading-[1.1]">
            Give your clients a clear view of their project’s progress.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-12 leading-relaxed">
            Stop managing client projects across WhatsApp, email, scattered files, and endless follow-ups. Briflee gives every client a professional place to see progress, review work, leave feedback, and approve deliverables.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/signup" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-transform hover:scale-105 active:scale-100">
              Get early access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#demo" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-medium border border-zinc-200 hover:bg-zinc-50 transition-colors">
              See how it works
            </Link>
          </div>
        </section>

        {/* Dashboard Preview / Mockup */}
        <section className="w-full max-w-6xl mx-auto px-6 pb-32">
          <div className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-2xl shadow-zinc-200/50">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-100 bg-zinc-50/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 bg-white border border-zinc-200 px-3 py-1 rounded-md text-xs text-zinc-500 font-medium">
                briflee.com/client/acme-corp
              </div>
            </div>
            
            {/* The Mockup content */}
            <div className="p-8 md:p-12 bg-zinc-50 flex flex-col md:flex-row gap-8 min-h-[400px]">
                <div className="w-full rounded-xl bg-white border border-zinc-200 shadow-sm flex flex-col">
                    <div className="border-b border-zinc-100 p-6 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold text-lg">Acme Website Redesign</h3>
                            <p className="text-sm text-zinc-500">72% complete</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">In Progress</div>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-4">
                        <div className="h-4 bg-zinc-100 rounded-full w-1/3"></div>
                        <div className="h-4 bg-zinc-100 rounded-full w-1/2"></div>
                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <div className="flex-1 h-32 bg-blue-50 border border-blue-100 rounded-lg p-4 flex flex-col justify-center">
                                <div className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4" />
                                  Needs Attention
                                </div>
                                <div className="h-4 bg-blue-200/50 rounded-full w-3/4 mb-2"></div>
                                <div className="h-4 bg-blue-200/50 rounded-full w-1/2"></div>
                            </div>
                            <div className="flex-1 h-32 bg-zinc-50 border border-zinc-100 rounded-lg p-4 flex flex-col justify-center">
                                <div className="h-4 bg-zinc-200 rounded-full w-3/4 mb-2"></div>
                                <div className="h-4 bg-zinc-200 rounded-full w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Problem Agitation */}
        <section className="w-full bg-white border-y border-zinc-200 py-32">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
                    The back-and-forth is killing your momentum.
                </h2>
                <p className="text-xl text-zinc-600 mb-12">
                    You use GitHub, Figma, and Linear to do the work. But your clients don't. They use WhatsApp, email threads, and phone calls to ask the same questions:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                    {[
                        "What's the status?",
                        "Did you see my feedback?",
                        "Which version should I review?",
                        "Is there anything I need to approve?"
                    ].map((q, i) => (
                        <div key={i} className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                            <MessagesSquare className="w-5 h-5 text-zinc-400" />
                            <span className="font-medium text-zinc-700">"{q}"</span>
                        </div>
                    ))}
                </div>
                
                <p className="mt-12 text-lg font-medium text-zinc-900">
                    You shouldn't have to be a full-time project manager just to keep your clients in the loop.
                </p>
            </div>
        </section>

        {/* Features / Benefits */}
        <section className="w-full max-w-6xl mx-auto px-6 py-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
                    Everything around the project,<br/>elegantly organized.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col items-start shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                        <MousePointerClick className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Invite with confidence</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        No training required. Invite your clients to a beautifully simple, branded workspace that feels like a private room for their project, not a complex developer tool.
                    </p>
                </div>
                <div className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col items-start shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Clear Approvals</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        Turn vague "looks good" messages into official sign-offs that protect your scope. Clients can review deliverables and approve work in one click.
                    </p>
                </div>
                <div className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col items-start shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-6">
                        <Layers className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Centralized Deliverables</h3>
                    <p className="text-zinc-600 leading-relaxed">
                        End the frantic search for "Homepage_v3_Final.pdf" in old chat threads. Keep all your designs, documents, and builds attached directly to the project.
                    </p>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-zinc-900 py-32 px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Upgrade your client experience.
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                You deliver premium work. It's time you presented it in a premium workspace. Join the waitlist to start offering your clients a better way to collaborate.
            </p>
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-100 transition-colors">
              Get early access <ArrowRight className="w-5 h-5" />
            </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-white" />
                <span className="font-semibold text-white">Briflee</span>
              </div>
              <p className="text-sm">The professional workspace between you and your client.</p>
              <div className="flex gap-6 text-sm">
                  <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                  <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                  <Link href="#" className="hover:text-white transition-colors">Terms</Link>
              </div>
          </div>
      </footer>
    </div>
  );
}
