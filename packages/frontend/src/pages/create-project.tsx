import { useState } from "react";
import { Plus, XClose, ChevronRight, Briefcase01, Users01, Calendar } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

export const CreateProject = () => {
    const [milestones, setMilestones] = useState([
        { id: 1, name: "Discovery & Requirements", date: "" },
        { id: 2, name: "Design & Prototyping", date: "" },
    ]);

    const addMilestone = () => {
        setMilestones([...milestones, { id: Date.now(), name: "", date: "" }]);
    };

    const removeMilestone = (id: number) => {
        setMilestones(milestones.filter(m => m.id !== id));
    };

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto p-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm font-medium text-tertiary mb-6">
                    <a href="/projects" className="hover:text-secondary transition-colors">Projects</a>
                    <ChevronRight className="size-4" />
                    <span className="text-primary">Create new project</span>
                </nav>

                <div className="mb-8">
                    <h1 className="text-display-sm font-semibold text-primary mb-2">Create new project</h1>
                    <p className="text-tertiary">Set up a new client workspace and define the initial milestones.</p>
                </div>

                <div className="space-y-8">
                    {/* Section 1: Project Details */}
                    <section className="bg-primary border border-secondary rounded-xl overflow-hidden shadow-sm">
                        <div className="border-b border-secondary p-6 bg-secondary/30">
                            <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
                                <Briefcase01 className="size-5 text-quaternary" />
                                Project Details
                            </h2>
                            <p className="text-sm text-tertiary mt-1">Basic information about the project.</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-secondary mb-1.5">Project Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Acme Website Redesign" 
                                        className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-secondary mb-1.5 flex justify-between">
                                        Client
                                        <a href="/clients/new" className="text-brand-primary hover:text-brand-secondary transition-colors">
                                            + Add new client
                                        </a>
                                    </label>
                                    <select className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-secondary">
                                        <option value="">Select a client...</option>
                                        <option value="1">Sarah Mitchell (Acme Corp)</option>
                                        <option value="2">David Chen (TechFlow)</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-secondary mb-1.5">Description (Optional)</label>
                                    <textarea 
                                        rows={3}
                                        placeholder="Brief overview of the project goals..." 
                                        className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Timeline */}
                    <section className="bg-primary border border-secondary rounded-xl overflow-hidden shadow-sm">
                        <div className="border-b border-secondary p-6 bg-secondary/30">
                            <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
                                <Calendar className="size-5 text-quaternary" />
                                Timeline & Status
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-1.5">Start Date</label>
                                    <input 
                                        type="date" 
                                        className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-secondary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-secondary mb-1.5">Target Completion</label>
                                    <input 
                                        type="date" 
                                        className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-secondary"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Milestones */}
                    <section className="bg-primary border border-secondary rounded-xl overflow-hidden shadow-sm">
                        <div className="border-b border-secondary p-6 bg-secondary/30 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
                                    <Users01 className="size-5 text-quaternary" />
                                    Project Milestones
                                </h2>
                                <p className="text-sm text-tertiary mt-1">Break the project down into phases for the client to track.</p>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.id} className="flex gap-4 items-start">
                                    <div className="flex-1">
                                        <input 
                                            type="text" 
                                            defaultValue={milestone.name}
                                            placeholder="Milestone name (e.g. Discovery)" 
                                            className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </div>
                                    <div className="w-48">
                                        <input 
                                            type="date" 
                                            className="w-full px-3 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-secondary"
                                        />
                                    </div>
                                    <button 
                                        onClick={() => removeMilestone(milestone.id)}
                                        className="p-2 mt-0.5 text-quaternary hover:text-secondary hover:bg-secondary rounded-lg transition-colors"
                                        title="Remove milestone"
                                    >
                                        <XClose className="size-5" />
                                    </button>
                                </div>
                            ))}
                            
                            <Button 
                                color="link-gray" 
                                iconLeading={Plus} 
                                className="mt-2"
                                onClick={addMilestone}
                            >
                                Add another milestone
                            </Button>
                        </div>
                    </section>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-secondary mt-8">
                        <Button color="secondary" size="md">
                            Cancel
                        </Button>
                        <Button color="primary" size="md">
                            Create project & Invite client
                        </Button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
