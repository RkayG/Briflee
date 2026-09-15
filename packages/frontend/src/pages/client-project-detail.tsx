import {
    CheckCircle,
    ArrowRight,
    MessageCircle01,
    File02,
    ChevronRight,
    ArrowLeft,
    Clock
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { useNavigate } from "react-router";

const MILESTONES = [
    { name: "Discovery", status: "completed" },
    { name: "Design", status: "completed" },
    { name: "Development", status: "current" },
    { name: "Testing", status: "pending" },
    { name: "Launch", status: "pending" },
];

export const ClientProjectDetail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-secondary font-body flex flex-col">
            {/* Top Navigation */}
            <header className="h-16 border-b border-secondary bg-primary flex items-center justify-between px-4 sm:px-8 flex-shrink-0 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/client-portal')} className="p-2 text-secondary hover:bg-secondary rounded-full transition-colors flex items-center gap-2 text-sm font-medium">
                        <ArrowLeft className="size-4" />
                        Back to projects
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar
                        src="https://i.pravatar.cc/150?u=john"
                        alt="John Doe"
                        size="sm"
                    />
                </div>
            </header>

            <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8 pt-8 sm:pt-12">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-display-md sm:text-display-lg font-bold text-primary mb-3">Acme Website Redesign</h1>
                    <p className="text-lg text-secondary">Building a completely new website and brand identity for Acme Corp.</p>
                </div>

                {/* Progress / Milestones */}
                <div className="bg-primary border border-secondary rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h3 className="text-xl font-semibold text-primary">72% complete</h3>
                            <p className="text-sm text-tertiary mt-1">We're currently working on the development phase.</p>
                        </div>
                        <Badge color="brand" size="lg">In Progress</Badge>
                    </div>

                    {/* Stepper */}
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -translate-y-1/2 rounded-full hidden sm:block"></div>
                        <div 
                            className="absolute top-1/2 left-0 h-1 bg-utility-brand-500 -translate-y-1/2 rounded-full hidden sm:block transition-all"
                            style={{ width: '50%' }}
                        ></div>
                        <div className="relative flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                            {MILESTONES.map((milestone, i) => (
                                <div key={i} className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-primary relative z-10 sm:px-2">
                                    <div className={`
                                        size-8 rounded-full flex items-center justify-center border-2
                                        ${milestone.status === 'completed' ? 'bg-utility-brand-50 border-utility-brand-500 text-utility-brand-600' : 
                                          milestone.status === 'current' ? 'bg-utility-brand-500 border-utility-brand-500 text-white shadow-sm ring-4 ring-utility-brand-100' : 
                                          'bg-primary border-secondary text-quaternary'}
                                    `}>
                                        {milestone.status === 'completed' && <CheckCircle className="size-5" />}
                                        {milestone.status === 'current' && <ArrowRight className="size-5" />}
                                        {milestone.status === 'pending' && <span className="size-2.5 rounded-full bg-quaternary"></span>}
                                    </div>
                                    <span className={`text-sm font-medium ${milestone.status === 'pending' ? 'text-tertiary' : 'text-primary'}`}>
                                        {milestone.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Needs Attention / Next Action */}
                <div className="bg-[#f5abce]/10 border border-[#f5abce]/30 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row sm:items-center gap-6 shadow-sm">
                    <div className="size-12 rounded-full bg-[#f5abce]/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="size-6 text-[#d84b90]" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-1">Your next action</h3>
                        <p className="text-secondary">Rufus has uploaded <strong>Homepage Design v3</strong> and it is ready for your review.</p>
                    </div>
                    <Button color="primary" className="w-full sm:w-auto shrink-0 bg-primary hover:bg-secondary text-primary border border-secondary shadow-sm">
                        Review Deliverable
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Activity & Messages */}
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-xl font-semibold text-primary mb-4">Recent Activity</h2>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
                                
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-utility-brand-100 text-utility-brand-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <File02 className="size-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary border border-secondary p-4 rounded-xl shadow-sm">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-semibold text-primary text-sm">Rufus uploaded v3</span>
                                            <span className="text-xs text-tertiary">2 hrs ago</span>
                                        </div>
                                        <p className="text-sm text-secondary">Added the new homepage designs based on last week's feedback.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-quaternary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <MessageCircle01 className="size-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary border border-secondary p-4 rounded-xl shadow-sm">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-semibold text-primary text-sm">You left feedback</span>
                                            <span className="text-xs text-tertiary">Yesterday</span>
                                        </div>
                                        <p className="text-sm text-secondary">"Can we make the CTA slightly larger?"</p>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-100 text-green-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <CheckCircle className="size-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary border border-secondary p-4 rounded-xl shadow-sm">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-semibold text-primary text-sm">You approved v2</span>
                                            <span className="text-xs text-tertiary">Sep 12</span>
                                        </div>
                                        <p className="text-sm text-secondary">Wireframes approved.</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    {/* Right Column: Project Files & Details */}
                    <div className="space-y-6">
                        <section className="bg-primary border border-secondary rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                                <File02 className="size-5 text-quaternary" />
                                Project Files
                            </h2>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary border border-transparent hover:border-secondary transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 bg-red-100 text-red-600 rounded flex items-center justify-center font-bold text-xs">PDF</div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Brand_Guidelines.pdf</p>
                                            <p className="text-xs text-tertiary">2.4 MB</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="size-4 text-quaternary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary border border-transparent hover:border-secondary transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold text-xs">FIG</div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Wireframes_Final.fig</p>
                                            <p className="text-xs text-tertiary">14.1 MB</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="size-4 text-quaternary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </section>

                        <section className="bg-primary border border-secondary rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-primary mb-4">Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Service Provider</p>
                                    <div className="flex items-center gap-2">
                                        <Avatar src="https://i.pravatar.cc/150?u=rufus" size="sm" />
                                        <span className="text-sm text-primary">Rufus</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-secondary mb-1">Target Completion</p>
                                    <div className="flex items-center gap-2 text-primary text-sm">
                                        <Clock className="size-4 text-quaternary" />
                                        Nov 1, 2026
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </main>
        </div>
    );
};
