import { SearchSm, FilterLines, Plus, DotsVertical, Briefcase01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Badge } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const DUMMY_PROJECTS = [
    {
        id: 1,
        name: "Acme Website Redesign",
        client: { name: "Acme Ltd", avatar: "https://i.pravatar.cc/150?u=acme" },
        status: "In progress",
        progress: 72,
        milestone: "Development",
        lastActivity: "2 hours ago",
        date: "Sep 13, 2026",
    },
    {
        id: 2,
        name: "Mobile App UI",
        client: { name: "Sarah Mitchell", avatar: "https://i.pravatar.cc/150?u=sarah" },
        status: "Review",
        progress: 14,
        milestone: "Discovery",
        lastActivity: "1 day ago",
        date: "Sep 12, 2026",
    },
    {
        id: 3,
        name: "Brand Guidelines",
        client: { name: "TechCorp", avatar: "https://i.pravatar.cc/150?u=techcorp" },
        status: "Completed",
        progress: 100,
        milestone: "Launch",
        lastActivity: "1 week ago",
        date: "Sep 5, 2026",
    },
];

const getStatusBadgeColor = (status: string) => {
    switch (status) {
        case "In progress": return "brand";
        case "Review": return "warning";
        case "Completed": return "success";
        case "Planning": return "gray";
        case "Waiting on client": return "warning";
        default: return "gray";
    }
};

export const Projects = () => {
    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-display-sm font-semibold text-primary mb-1">Projects</h1>
                        <p className="text-tertiary">Manage your active work and client workspaces.</p>
                    </div>
                    <Button color="primary" size="md" iconLeading={Plus}>
                        Create project
                    </Button>
                </div>

                {/* Filters & Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <SearchSm className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-quaternary" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full pl-10 pr-4 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Button color="secondary" iconLeading={FilterLines}>
                            Filters
                        </Button>
                    </div>
                </div>

                {/* Project List */}
                <div className="border border-secondary rounded-xl bg-primary shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary bg-secondary">
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Project</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Client</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider hidden md:table-cell">Milestone</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider hidden lg:table-cell">Last Activity</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {DUMMY_PROJECTS.map((project) => (
                                    <tr key={project.id} className="hover:bg-secondary/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-lg bg-secondary flex flex-shrink-0 items-center justify-center border border-secondary">
                                                    <Briefcase01 className="size-5 text-quaternary group-hover:text-tertiary transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{project.name}</p>
                                                    <p className="text-xs text-tertiary hidden sm:block">Created {project.date}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Avatar src={project.client.avatar} alt={project.client.name} size="xs" />
                                                <span className="text-sm text-secondary">{project.client.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge color={getStatusBadgeColor(project.status) as any} size="sm">
                                                {project.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <div className="flex items-center gap-3 max-w-[140px]">
                                                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-brand-solid rounded-full" 
                                                        style={{ width: `${project.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-xs font-medium text-tertiary">{project.progress}%</span>
                                            </div>
                                            <p className="text-xs text-tertiary mt-1 truncate">{project.milestone}</p>
                                        </td>
                                        <td className="px-6 py-4 hidden lg:table-cell">
                                            <span className="text-sm text-tertiary">{project.lastActivity}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 text-quaternary hover:text-secondary rounded-lg hover:bg-secondary opacity-0 group-hover:opacity-100 transition-all focus:opacity-100">
                                                <DotsVertical className="size-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};
