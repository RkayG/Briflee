import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Briefcase01,
    Mail01,
    Phone,
    MarkerPin01,
    ArrowLeft,
    DotsVertical,
    Activity,
    File02,
    MessageCircle01
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const TABS = ["Overview", "Projects", "Activity", "Files"];

export const ClientProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm font-medium text-tertiary mb-6">
                        <button onClick={() => navigate('/clients')} className="hover:text-secondary transition-colors">Clients</button>
                        <span>/</span>
                        <span className="text-primary">Sarah Mitchell</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-primary border border-secondary rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-5">
                            <Avatar src="https://i.pravatar.cc/150?u=sarah" size="xl" />
                            <div>
                                <h1 className="text-display-xs font-semibold text-primary mb-1">Sarah Mitchell</h1>
                                <p className="text-sm text-secondary">Acme Corp</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button color="secondary" size="md">Edit profile</Button>
                            <Button color="primary" size="md">New project</Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Client Meta */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-primary border border-secondary rounded-xl p-5 shadow-sm">
                            <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider text-tertiary">Contact Info</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail01 className="size-5 text-quaternary shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-primary">Email</p>
                                        <a href="mailto:sarah@acmecorp.com" className="text-sm text-brand-primary hover:underline">sarah@acmecorp.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="size-5 text-quaternary shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-primary">Phone</p>
                                        <a href="tel:+15551234567" className="text-sm text-brand-primary hover:underline">+1 (555) 123-4567</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MarkerPin01 className="size-5 text-quaternary shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium text-primary">Location</p>
                                        <p className="text-sm text-secondary">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary border border-secondary rounded-xl p-5 shadow-sm">
                            <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider text-tertiary">Notes</h2>
                            <p className="text-sm text-secondary leading-relaxed">
                                Prefers communication on Tuesday mornings. Main decision maker for all branding initiatives. Approvals usually take 24-48 hours.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Content Tabs */}
                    <div className="lg:col-span-2">
                        <div className="border-b border-secondary mb-6 overflow-x-auto">
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

                        {activeTab === "Overview" && (
                            <div className="space-y-8">
                                {/* Active Projects */}
                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-4">Active Projects</h3>
                                    <div className="grid gap-4">
                                        <div onClick={() => navigate('/projects/1')} className="bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-lg bg-secondary flex items-center justify-center">
                                                    <Briefcase01 className="size-5 text-quaternary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-primary mb-1">Acme Website Redesign</h4>
                                                    <p className="text-sm text-tertiary">Development Phase</p>
                                                </div>
                                            </div>
                                            <Badge color="brand" size="md">In Progress</Badge>
                                        </div>
                                    </div>
                                </section>

                                {/* Recent Activity */}
                                <section>
                                    <h3 className="text-lg font-semibold text-primary mb-4">Recent Activity</h3>
                                    <div className="bg-primary border border-secondary rounded-xl p-6 shadow-sm">
                                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-secondary">
                                            <div className="relative flex items-start gap-4">
                                                <div className="flex items-center justify-center size-10 rounded-full border border-white bg-green-100 text-green-600 shadow-sm shrink-0 z-10 mt-1">
                                                    <Activity className="size-5" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-primary">Sarah logged in</p>
                                                    <p className="text-xs text-tertiary mt-1">2 hours ago</p>
                                                </div>
                                            </div>
                                            <div className="relative flex items-start gap-4">
                                                <div className="flex items-center justify-center size-10 rounded-full border border-white bg-primary text-quaternary border-secondary shadow-sm shrink-0 z-10 mt-1">
                                                    <MessageCircle01 className="size-5" />
                                                </div>
                                                <div className="flex-1 pb-2">
                                                    <p className="text-sm font-medium text-primary">Left feedback on Homepage Design</p>
                                                    <p className="text-xs text-tertiary mt-1">Yesterday</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
