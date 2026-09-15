import {
    Bell01,
    Briefcase01,
    CheckCircle,
    MessageCircle01,
    ArrowRight
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { useNavigate } from "react-router";

const DUMMY_CLIENT_PROJECTS = [
    {
        id: 1,
        name: "Acme Website Redesign",
        provider: { name: "Rufus", avatar: "https://i.pravatar.cc/150?u=rufus" },
        status: "In progress",
        progress: 72,
        milestone: "Development",
        actionRequired: "1 approval waiting",
    }
];

export const ClientPortal = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-secondary font-body flex flex-col">
            {/* Top Navigation */}
            <header className="h-16 border-b border-secondary bg-primary flex items-center justify-between px-4 sm:px-8 flex-shrink-0 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <UntitledLogoMinimal className="size-8 text-brand-laser-blue" />
                    <span className="font-semibold text-primary text-lg">Briflee</span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 text-secondary hover:bg-secondary rounded-full relative">
                        <Bell01 className="size-5" />
                        <span className="absolute top-1 right-1 size-2.5 bg-utility-brand-500 rounded-full border-2 border-primary"></span>
                    </button>
                    <Avatar
                        src="https://i.pravatar.cc/150?u=john"
                        alt="John Doe"
                        size="sm"
                    />
                </div>
            </header>

            <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 pt-8 sm:pt-12">
                <h1 className="text-display-sm sm:text-display-md font-semibold text-primary mb-8">
                    Good morning, John
                </h1>

                {/* Needs Attention Alert (If any) */}
                <div className="bg-utility-brand-50 border border-utility-brand-200 rounded-xl p-4 sm:p-6 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <CheckCircle className="size-5 text-utility-brand-600" />
                            <span className="text-sm font-semibold text-utility-brand-700">Needs Attention</span>
                        </div>
                        <p className="text-utility-brand-700 text-sm">
                            Rufus has requested your approval on <strong>Homepage Design v3</strong> for the Acme Website Redesign project.
                        </p>
                    </div>
                    <Button color="primary" className="w-full sm:w-auto shrink-0 bg-utility-brand-600 hover:bg-utility-brand-700 text-white border-transparent">
                        Review now
                    </Button>
                </div>

                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-primary">Your active projects</h2>
                </div>

                {/* Projects List */}
                <div className="grid gap-4">
                    {DUMMY_CLIENT_PROJECTS.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => navigate('/client-portal/project')}
                            className="group bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row sm:items-center gap-6"
                        >
                            
                            {/* Project Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="size-10 rounded-lg bg-secondary flex items-center justify-center border border-secondary">
                                        <Briefcase01 className="size-5 text-quaternary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary text-lg">{project.name}</h3>
                                        <p className="text-sm text-tertiary">with {project.provider.name}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Status & Progress */}
                            <div className="flex-1 min-w-[200px]">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm font-medium text-secondary">Phase: {project.milestone}</span>
                                    <span className="text-sm font-bold text-primary">{project.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-brand-solid rounded-full" 
                                        style={{ width: `${project.progress}%` }}
                                    />
                                </div>
                            </div>

                            {/* Action & Navigate */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 mt-4 sm:mt-0 sm:ml-4">
                                {project.actionRequired && (
                                    <Badge color="warning" size="md" className="sm:hidden lg:flex">
                                        {project.actionRequired}
                                    </Badge>
                                )}
                                <div className="p-2 bg-secondary group-hover:bg-brand-primary group-hover:text-white text-secondary rounded-full transition-colors ml-auto">
                                    <ArrowRight className="size-5" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Recent Activity / Communications */}
                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-primary">Recent messages</h2>
                        <Button color="link-gray" size="sm">View all</Button>
                    </div>
                    <div className="bg-primary border border-secondary rounded-xl p-4 sm:p-6 shadow-sm">
                        <div className="flex gap-4">
                            <Avatar src="https://i.pravatar.cc/150?u=rufus" size="md" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-semibold text-sm text-primary">Rufus</span>
                                    <span className="text-xs text-tertiary">2 hours ago</span>
                                </div>
                                <p className="text-sm text-secondary bg-secondary p-3 rounded-r-xl rounded-bl-xl inline-block">
                                    Hey John, I've just uploaded the latest version of the homepage based on our call. Let me know if the CTA button size looks better now!
                                </p>
                                <div className="mt-3">
                                    <Button color="secondary" size="sm" iconLeading={MessageCircle01}>
                                        Reply
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};
