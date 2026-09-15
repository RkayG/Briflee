import { SearchSm, Plus, DotsVertical, Users01, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const DUMMY_CLIENTS = [
    {
        id: 1,
        name: "Sarah Mitchell",
        company: "Acme Corp",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        email: "sarah@acmecorp.com",
        activeProjects: 2,
        lastActivity: "2 hours ago",
    },
    {
        id: 2,
        name: "David Chen",
        company: "TechFlow",
        avatar: "https://i.pravatar.cc/150?u=david",
        email: "david@techflow.io",
        activeProjects: 1,
        lastActivity: "Yesterday",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        company: "Studio 54",
        avatar: "https://i.pravatar.cc/150?u=elena",
        email: "elena@studio54.design",
        activeProjects: 0,
        lastActivity: "Sep 5, 2026",
    }
];

export const Clients = () => {
    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-display-sm font-semibold text-primary mb-1">Clients</h1>
                        <p className="text-tertiary">Manage your client relationships and access.</p>
                    </div>
                    <Button color="primary" size="md" iconLeading={Plus}>
                        Add client
                    </Button>
                </div>

                {/* Filters & Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1 max-w-sm">
                        <SearchSm className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-quaternary" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-10 pr-4 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                </div>

                {/* Clients Table */}
                <div className="border border-secondary rounded-xl bg-primary shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-secondary bg-secondary">
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Client</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider">Active Projects</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider hidden md:table-cell">Last Activity</th>
                                    <th className="px-6 py-3 text-xs font-medium text-tertiary uppercase tracking-wider text-right"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {DUMMY_CLIENTS.map((client) => (
                                    <tr key={client.id} className="hover:bg-secondary/50 transition-colors cursor-pointer group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar src={client.avatar} alt={client.name} size="md" />
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{client.name}</p>
                                                    <p className="text-xs text-tertiary">{client.company}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 text-sm text-secondary">
                                                <Mail01 className="size-4 text-quaternary" />
                                                {client.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-secondary font-medium">{client.activeProjects}</span>
                                                {client.activeProjects > 0 && (
                                                    <span className="inline-flex size-2 bg-utility-brand-500 rounded-full"></span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 hidden md:table-cell">
                                            <span className="text-sm text-tertiary">{client.lastActivity}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 text-quaternary hover:text-secondary rounded-lg hover:bg-secondary opacity-0 group-hover:opacity-100 transition-all focus:opacity-100">
                                                <DotsVertical className="size-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {DUMMY_CLIENTS.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <div className="size-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                                    <Users01 className="size-6 text-quaternary" />
                                                </div>
                                                <h3 className="text-sm font-medium text-primary mb-1">No clients found</h3>
                                                <p className="text-sm text-tertiary mb-4">Your clients will appear here once you create a project or add one directly.</p>
                                                <Button color="secondary" size="sm" iconLeading={Plus}>
                                                    Add client
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};
