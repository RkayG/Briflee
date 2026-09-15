import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Briefcase01,
    UploadCloud01,
    Plus,
    File02,
    CheckCircle,
    MessageCircle01,
    DotsVertical,
    Calendar,
    Users01,
    ArrowLeft
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const TABS = ["Overview", "Deliverables", "Milestones", "Files", "Settings"];

export const ProviderProjectDetail = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-medium text-tertiary mb-3">
                            <button onClick={() => navigate('/projects')} className="hover:text-secondary transition-colors">Projects</button>
                            <span>/</span>
                            <span className="text-primary">Acme Website Redesign</span>
                        </div>
                        <h1 className="text-display-sm font-semibold text-primary mb-2 flex items-center gap-3">
                            Acme Website Redesign
                            <Badge color="brand" size="md">In Progress</Badge>
                        </h1>
                        <p className="text-tertiary flex items-center gap-2">
                            <Briefcase01 className="size-4" />
                            Client: <span className="font-medium text-secondary">Acme Corp</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button color="secondary" size="md" iconLeading={Plus}>
                            Add milestone
                        </Button>
                        <Button color="primary" size="md" iconLeading={UploadCloud01}>
                            Upload deliverable
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-secondary mb-8 overflow-x-auto">
                    <nav className="flex gap-6 min-w-max">
                        {TABS.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
                                    activeTab === tab 
                                    ? "border-brand-primary text-brand-primary" 
                                    : "border-transparent text-tertiary hover:text-secondary hover:border-secondary"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content: Overview */}
                {activeTab === "Overview" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            {/* Current Deliverables */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-lg font-semibold text-primary">Active Deliverables</h2>
                                    <Button variant="link" color="link-gray" size="sm">View all</Button>
                                </div>
                                <div className="grid gap-4">
                                    <div 
                                        onClick={() => navigate('/deliverable/1')}
                                        className="bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-utility-brand-50 border border-utility-brand-100 flex items-center justify-center text-utility-brand-600">
                                                <File02 className="size-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-primary mb-1 group-hover:text-brand-primary transition-colors">Homepage Design v3</h3>
                                                <p className="text-sm text-tertiary">Waiting for client approval</p>
                                            </div>
                                        </div>
                                        <Badge color="warning" size="md">Pending Review</Badge>
                                    </div>
                                </div>
                            </section>

                            {/* Activity Timeline */}
                            <section>
                                <h2 className="text-lg font-semibold text-primary mb-4">Recent Activity</h2>
                                <div className="bg-primary border border-secondary rounded-xl p-6 shadow-sm">
                                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-secondary">
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex items-center justify-center size-10 rounded-full border border-white bg-utility-brand-100 text-utility-brand-600 shadow-sm shrink-0 z-10 mt-1">
                                                <UploadCloud01 className="size-5" />
                                            </div>
                                            <div className="flex-1 pb-6">
                                                <p className="text-sm font-medium text-primary">You uploaded <span className="font-semibold text-brand-primary">Homepage Design v3</span></p>
                                                <p className="text-xs text-tertiary mt-1">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex items-center justify-center size-10 rounded-full border border-white bg-primary text-quaternary border-secondary shadow-sm shrink-0 z-10 mt-1">
                                                <MessageCircle01 className="size-5" />
                                            </div>
                                            <div className="flex-1 pb-6">
                                                <p className="text-sm font-medium text-primary">Sarah Mitchell left a comment on <span className="font-semibold text-brand-primary">Homepage Design v2</span></p>
                                                <div className="mt-2 bg-secondary/50 rounded-lg p-3 text-sm text-secondary italic">
                                                    "Can we make the CTA slightly larger?"
                                                </div>
                                                <p className="text-xs text-tertiary mt-2">Yesterday</p>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start gap-4">
                                            <div className="flex items-center justify-center size-10 rounded-full border border-white bg-green-100 text-green-600 shadow-sm shrink-0 z-10 mt-1">
                                                <CheckCircle className="size-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-primary">Sarah Mitchell approved <span className="font-semibold text-brand-primary">Wireframes v2</span></p>
                                                <p className="text-xs text-tertiary mt-1">Sep 12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Sidebar */}
                        <div className="space-y-6">
                            <section className="bg-primary border border-secondary rounded-xl p-6 shadow-sm">
                                <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider text-tertiary">Project Details</h2>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-tertiary mb-1">Client Contact</p>
                                        <div className="flex items-center gap-2">
                                            <Avatar src="https://i.pravatar.cc/150?u=sarah" size="sm" />
                                            <span className="text-sm font-medium text-primary">Sarah Mitchell</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-tertiary mb-1">Target Date</p>
                                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                            <Calendar className="size-4 text-quaternary" />
                                            Nov 1, 2026
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-primary border border-secondary rounded-xl p-6 shadow-sm">
                                <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider text-tertiary">Milestones</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-secondary flex items-center gap-2"><CheckCircle className="size-4 text-green-500"/> Discovery</span>
                                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Done</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-secondary flex items-center gap-2"><CheckCircle className="size-4 text-green-500"/> Design</span>
                                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Done</span>
                                    </div>
                                    <div className="flex items-center justify-between font-medium">
                                        <span className="text-sm text-primary flex items-center gap-2"><div className="size-2 bg-utility-brand-500 rounded-full ml-1 mr-1"></div> Development</span>
                                        <span className="text-xs font-medium text-utility-brand-700 bg-utility-brand-50 px-2 py-0.5 rounded-full">Current</span>
                                    </div>
                                    <div className="flex items-center justify-between opacity-50">
                                        <span className="text-sm text-secondary flex items-center gap-2"><div className="size-1.5 bg-quaternary rounded-full ml-1.5 mr-1.5"></div> Testing</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};
