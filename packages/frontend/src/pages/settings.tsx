import { useState } from "react";
import {
    User01,
    Building02,
    CreditCard01,
    Bell01,
    UploadCloud01,
    CheckCircle
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const TABS = [
    { id: "profile", label: "My Profile", icon: User01 },
    { id: "workspace", label: "Workspace", icon: Building02 },
    { id: "billing", label: "Billing", icon: CreditCard01 },
    { id: "notifications", label: "Notifications", icon: Bell01 },
];

export const Settings = () => {
    const [activeTab, setActiveTab] = useState("workspace");

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-display-sm font-semibold text-primary mb-2">Settings</h1>
                    <p className="text-tertiary">Manage your workspace, profile, and preferences.</p>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Settings Sidebar Navigation */}
                    <nav className="w-full md:w-64 shrink-0 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible">
                        {TABS.map(tab => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                                        isActive 
                                        ? "bg-secondary text-primary" 
                                        : "text-tertiary hover:bg-secondary/50 hover:text-secondary"
                                    }`}
                                >
                                    <Icon className={`size-5 ${isActive ? "text-brand-primary" : "text-quaternary"}`} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Settings Content Area */}
                    <div className="flex-1">
                        {activeTab === "workspace" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-lg font-semibold text-primary mb-1">Workspace details</h2>
                                    <p className="text-sm text-tertiary mb-6">This information will be displayed to your clients in their portal.</p>
                                    
                                    <div className="bg-primary border border-secondary rounded-xl shadow-sm">
                                        <div className="p-6 space-y-6">
                                            {/* Logo Upload */}
                                            <div>
                                                <label className="block text-sm font-medium text-secondary mb-3">Workspace Logo</label>
                                                <div className="flex items-center gap-6">
                                                    <div className="size-16 rounded-xl bg-secondary flex items-center justify-center border border-secondary shrink-0 overflow-hidden">
                                                        <span className="text-xl font-bold text-quaternary">A</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <Button color="secondary" size="sm" iconLeading={UploadCloud01}>Upload new</Button>
                                                            <Button color="link-gray" size="sm">Remove</Button>
                                                        </div>
                                                        <p className="text-xs text-tertiary">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-px bg-secondary w-full"></div>

                                            {/* Workspace Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-secondary mb-1.5">Workspace Name</label>
                                                <input 
                                                    type="text" 
                                                    defaultValue="Acme Studio"
                                                    className="w-full md:max-w-md px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                />
                                            </div>

                                            {/* Workspace URL */}
                                            <div>
                                                <label className="block text-sm font-medium text-secondary mb-1.5">Client Portal URL</label>
                                                <div className="flex items-center w-full md:max-w-md">
                                                    <span className="px-3 py-2 border border-r-0 border-secondary rounded-l-lg bg-secondary text-tertiary text-sm">
                                                        briflee.com/
                                                    </span>
                                                    <input 
                                                        type="text" 
                                                        defaultValue="acme-studio"
                                                        className="flex-1 px-3 py-2 border border-secondary rounded-r-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-secondary/30 border-t border-secondary p-4 flex justify-end gap-3 rounded-b-xl">
                                            <Button color="secondary" size="sm">Cancel</Button>
                                            <Button color="primary" size="sm">Save changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "profile" && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-lg font-semibold text-primary mb-1">Personal profile</h2>
                                    <p className="text-sm text-tertiary mb-6">Update your personal details and contact information.</p>
                                    
                                    <div className="bg-primary border border-secondary rounded-xl shadow-sm overflow-hidden">
                                        <div className="p-6 space-y-6">
                                            {/* Avatar Upload */}
                                            <div>
                                                <label className="block text-sm font-medium text-secondary mb-3">Avatar</label>
                                                <div className="flex items-center gap-6">
                                                    <Avatar src="https://i.pravatar.cc/150?u=rufus" size="xl" />
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <Button color="secondary" size="sm" iconLeading={UploadCloud01}>Upload new</Button>
                                                        </div>
                                                        <p className="text-xs text-tertiary">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-px bg-secondary w-full"></div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary mb-1.5">First name</label>
                                                    <input type="text" defaultValue="Rufus" className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-secondary mb-1.5">Last name</label>
                                                    <input type="text" defaultValue="Smith" className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
                                                </div>
                                                <div className="sm:col-span-2">
                                                    <label className="block text-sm font-medium text-secondary mb-1.5">Email address</label>
                                                    <input type="email" defaultValue="rufus@acmestudio.com" className="w-full md:max-w-md px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-secondary/30 border-t border-secondary p-4 flex justify-end gap-3 rounded-b-xl">
                                            <Button color="primary" size="sm">Save changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Placeholder for Billing and Notifications */}
                        {(activeTab === "billing" || activeTab === "notifications") && (
                            <div className="bg-primary border border-secondary rounded-xl p-12 shadow-sm flex flex-col items-center justify-center text-center">
                                <div className="size-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                    <CheckCircle className="size-6 text-quaternary" />
                                </div>
                                <h3 className="text-lg font-medium text-primary mb-1">Coming soon</h3>
                                <p className="text-sm text-tertiary">This settings panel will be available once the backend integration is complete.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
