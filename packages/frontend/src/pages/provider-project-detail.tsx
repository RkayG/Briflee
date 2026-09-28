import { useState } from "react";
import { useNavigate } from "react-router";
import {
    Briefcase01,
    UploadCloud01,
    Plus,
    File02,
    CheckCircle,
    MessageCircle01,
    Calendar,
    XClose,
    Settings01,
    Trash01
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";
import { ModalOverlay, Modal, Dialog, DialogTrigger } from "@/components/application/modals/modal";
import { Input } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";

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
                        {/* Add Milestone Modal */}
                        <DialogTrigger>
                            <Button color="secondary" size="md" iconLeading={Plus}>
                                Add milestone
                            </Button>
                            <ModalOverlay>
                                <Modal className="flex justify-center items-center w-full">
                                    <Dialog className="bg-primary border border-secondary rounded-xl p-6 shadow-xl w-[90vw] max-w-md outline-hidden">
                                        {({ close }) => (
                                            <div className="w-full flex flex-col">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h2 className="text-lg font-semibold text-primary">Add New Milestone</h2>
                                                    <button onClick={close} className="text-tertiary hover:text-primary transition-colors"><XClose className="size-5" /></button>
                                                </div>
                                                <div className="space-y-4 mb-6">
                                                    <div>
                                                        <Label className="mb-1 block">Milestone Name</Label>
                                                        <Input placeholder="e.g., Final Polish" />
                                                    </div>
                                                    <div>
                                                        <Label className="mb-1 block">Target Date</Label>
                                                        <Input type="date" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-3">
                                                    <Button color="secondary" onClick={close}>Cancel</Button>
                                                    <Button color="primary" onClick={close}>Add Milestone</Button>
                                                </div>
                                            </div>
                                        )}
                                    </Dialog>
                                </Modal>
                            </ModalOverlay>
                        </DialogTrigger>

                        {/* Upload Deliverable Modal */}
                        <DialogTrigger>
                            <Button color="primary" size="md" iconLeading={UploadCloud01}>
                                Upload deliverable
                            </Button>
                            <ModalOverlay>
                                <Modal className="flex justify-center items-center w-full">
                                    <Dialog className="bg-primary border border-secondary rounded-xl p-6 shadow-xl w-[90vw] max-w-md outline-hidden">
                                        {({ close }) => (
                                            <div className="w-full flex flex-col">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h2 className="text-lg font-semibold text-primary">Upload Deliverable</h2>
                                                    <button onClick={close} className="text-tertiary hover:text-primary transition-colors"><XClose className="size-5" /></button>
                                                </div>
                                                <div className="space-y-4 mb-6">
                                                    <div>
                                                        <Label className="mb-1 block">Deliverable Name</Label>
                                                        <Input placeholder="e.g., Homepage Design v4" />
                                                    </div>
                                                    <div>
                                                        <Label className="mb-1 block">File Attachment</Label>
                                                        <div className="border-2 border-dashed border-secondary rounded-lg p-8 text-center bg-secondary/20">
                                                            <UploadCloud01 className="size-6 text-tertiary mx-auto mb-2" />
                                                            <p className="text-sm text-secondary">Drag and drop or <span className="text-brand-primary font-medium cursor-pointer">browse</span></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Label className="mb-1 block">Notes for Client (Optional)</Label>
                                                        <textarea className="w-full bg-primary border border-secondary rounded-lg p-3 text-sm text-primary focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary resize-none" rows={3} placeholder="Add any context here..."></textarea>
                                                    </div>
                                                </div>
                                                <div className="flex justify-end gap-3">
                                                    <Button color="secondary" onClick={close}>Cancel</Button>
                                                    <Button color="primary" onClick={close}>Upload & Submit</Button>
                                                </div>
                                            </div>
                                        )}
                                    </Dialog>
                                </Modal>
                            </ModalOverlay>
                        </DialogTrigger>
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
                                    <Button color="link-gray" size="sm" onClick={() => setActiveTab("Deliverables")}>View all</Button>
                                </div>
                                <div className="grid gap-4">
                                    <div 
                                        onClick={() => navigate('/deliverable/1')}
                                        className="bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center size-10 rounded-lg bg-utility-brand-50 text-utility-brand-600">
                                                <File02 className="size-5" />
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

                {/* Tab Content: Deliverables */}
                {activeTab === "Deliverables" && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-primary">All Deliverables</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { title: "Homepage Design v3", status: "Pending Review", color: "warning" },
                                { title: "Wireframes v2", status: "Approved", color: "success" },
                                { title: "Design System v1", status: "Changes Requested", color: "error" },
                            ].map((d, i) => (
                                <div key={i} onClick={() => navigate('/deliverable/1')} className="bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center justify-center size-10 rounded-lg bg-utility-brand-50 text-utility-brand-600">
                                            <File02 className="size-5" />
                                        </div>
                                        <Badge color={d.color as any} size="sm">{d.status}</Badge>
                                    </div>
                                    <h3 className="font-medium text-primary mb-1">{d.title}</h3>
                                    <p className="text-sm text-tertiary">Uploaded Sep {15 - i}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tab Content: Milestones */}
                {activeTab === "Milestones" && (
                    <div className="space-y-4">
                        <div className="bg-primary border border-secondary rounded-xl overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-secondary/30 border-b border-secondary text-tertiary">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Milestone Name</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium">Target Date</th>
                                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary text-secondary">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-primary">Discovery</td>
                                        <td className="px-6 py-4"><Badge color="success" size="sm">Done</Badge></td>
                                        <td className="px-6 py-4">Sep 1, 2026</td>
                                        <td className="px-6 py-4 text-right"><Button color="link-gray" size="sm">Edit</Button></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-primary">Design</td>
                                        <td className="px-6 py-4"><Badge color="success" size="sm">Done</Badge></td>
                                        <td className="px-6 py-4">Sep 15, 2026</td>
                                        <td className="px-6 py-4 text-right"><Button color="link-gray" size="sm">Edit</Button></td>
                                    </tr>
                                    <tr className="bg-brand-primary/5">
                                        <td className="px-6 py-4 font-medium text-primary">Development</td>
                                        <td className="px-6 py-4"><Badge color="brand" size="sm">Current</Badge></td>
                                        <td className="px-6 py-4">Oct 15, 2026</td>
                                        <td className="px-6 py-4 text-right"><Button color="link-gray" size="sm">Edit</Button></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-primary">Testing</td>
                                        <td className="px-6 py-4"><Badge color="gray" size="sm">Pending</Badge></td>
                                        <td className="px-6 py-4">Nov 1, 2026</td>
                                        <td className="px-6 py-4 text-right"><Button color="link-gray" size="sm">Edit</Button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Tab Content: Files */}
                {activeTab === "Files" && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-primary">Project Files</h2>
                        </div>
                        <div className="bg-primary border border-secondary rounded-xl p-8 text-center">
                            <File02 className="size-12 text-quaternary mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-primary mb-2">No files uploaded yet</h3>
                            <p className="text-tertiary mb-6">Deliverables and attachments will appear here.</p>
                        </div>
                    </div>
                )}

                {/* Tab Content: Settings */}
                {activeTab === "Settings" && (
                    <div className="max-w-3xl space-y-8">
                        <section className="bg-primary border border-secondary rounded-xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2"><Settings01 className="size-5"/> General Settings</h2>
                            <div className="space-y-4">
                                <div>
                                    <Label className="mb-1 block">Project Name</Label>
                                    <Input defaultValue="Acme Website Redesign" />
                                </div>
                                <div>
                                    <Label className="mb-1 block">Project Description</Label>
                                    <textarea className="w-full bg-primary border border-secondary rounded-lg p-3 text-sm text-primary focus:outline-hidden focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary resize-none" rows={4} defaultValue="A full revamp of the Acme Corp corporate website."></textarea>
                                </div>
                                <div className="pt-2">
                                    <Button color="primary">Save Changes</Button>
                                </div>
                            </div>
                        </section>
                        
                        <section className="bg-primary border border-error rounded-xl p-6 shadow-sm">
                            <h2 className="text-lg font-semibold text-error mb-2 flex items-center gap-2"><Trash01 className="size-5"/> Danger Zone</h2>
                            <p className="text-sm text-tertiary mb-4">Archiving this project will hide it from active views, but keep its data intact.</p>
                            <Button color="primary-destructive">Archive Project</Button>
                        </section>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};
