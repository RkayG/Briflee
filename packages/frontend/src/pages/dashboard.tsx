import {
    Home01,
    Briefcase01,
    Users01,
    MessageCircle01,
    Bell01,
    Settings01,
    SearchSm,
    ChevronDown,
    Plus,
    LinkExternal01,
    CheckCircle,
    Activity,
    UploadCloud01
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

export const Dashboard = () => {
    return (
        <div className="flex h-screen w-full bg-white text-secondary font-body">
            {/* Left Sidebar */}
            <aside className="w-64 flex-shrink-0 border-r border-secondary bg-primary flex flex-col hidden md:flex">
                <div className="p-4 flex items-center gap-2">
                    <UntitledLogoMinimal className="size-8 text-brand-laser-blue" />
                    <span className="font-semibold text-primary text-lg">Briflee</span>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                    <div className="px-3 mb-6">
                        <p className="px-3 mb-2 text-xs font-semibold text-tertiary uppercase tracking-wider">Workspace</p>
                        <nav className="space-y-1">
                            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-secondary rounded-md text-primary font-medium">
                                <Home01 className="size-5 text-secondary" />
                                Overview
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-secondary rounded-md font-medium">
                                <Briefcase01 className="size-5" />
                                Projects
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-secondary rounded-md font-medium">
                                <Users01 className="size-5" />
                                Clients
                            </a>
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-secondary rounded-md font-medium">
                                <MessageCircle01 className="size-5" />
                                Messages
                                <span className="ml-auto bg-brand-solid text-white text-xs py-0.5 px-2 rounded-full">3</span>
                            </a>
                        </nav>
                    </div>

                    <div className="px-3 mb-6">
                        <p className="px-3 mb-2 text-xs font-semibold text-tertiary uppercase tracking-wider">Manage</p>
                        <nav className="space-y-1">
                            <a href="#" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-secondary rounded-md font-medium">
                                <Settings01 className="size-5" />
                                Settings
                            </a>
                        </nav>
                    </div>
                </div>

                <div className="p-4 border-t border-secondary mt-auto">
                    <div className="flex items-center gap-3">
                        <Avatar
                            src="https://i.pravatar.cc/150?u=rufus"
                            alt="Rufus"
                            size="md"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-primary truncate">Rufus</p>
                            <p className="text-xs text-tertiary truncate">Freelance Developer</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-primary">
                {/* Top Nav (optional based on reference, but good for search & global actions) */}
                <header className="h-16 border-b border-secondary flex items-center justify-between px-8 bg-primary flex-shrink-0">
                    <div className="flex-1 max-w-md relative hidden sm:block">
                        <SearchSm className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-quaternary" />
                        <input
                            type="text"
                            placeholder="Search projects, clients..."
                            className="w-full pl-10 pr-4 py-2 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div className="flex items-center gap-4 ml-auto">
                        <button className="p-2 text-secondary hover:bg-secondary rounded-full">
                            <Bell01 className="size-5" />
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-5xl mx-auto p-8">
                        {/* Page Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-display-xs font-semibold text-primary">Overview</h1>
                            <Button variant="link" color="link-color" iconTrailing={LinkExternal01} className="font-medium">
                                Preview client portal
                            </Button>
                        </div>

                        {/* Hero / Needs Attention Card (Mimicking "Get started" from ref) */}
                        <div className="bg-brand-secondary rounded-xl p-6 mb-8 border border-brand-secondary flex flex-col md:flex-row items-center gap-6 shadow-sm">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-4">
                                    <FeaturedIcon icon={CheckCircle} color="brand" theme="light" size="sm" />
                                    <span className="text-sm font-semibold text-brand-primary">Needs Attention</span>
                                </div>
                                <h2 className="text-xl font-bold text-primary mb-2">Homepage Design v3 is ready</h2>
                                <p className="text-tertiary mb-6 max-w-lg">
                                    Your client Sarah has requested changes on the latest homepage design. Review the feedback and upload a new version to keep the project moving.
                                </p>
                                <Button color="primary" size="lg" iconTrailing={ChevronDown}>
                                    Review feedback
                                </Button>
                            </div>
                            <div className="hidden md:flex w-64 h-40 bg-white rounded-lg shadow-sm border border-secondary items-center justify-center relative overflow-hidden">
                                {/* Abstract UI Illustration */}
                                <div className="absolute top-4 left-4 right-4 h-4 bg-secondary rounded-sm" />
                                <div className="absolute top-10 left-4 w-1/2 h-20 bg-brand-primary opacity-10 rounded-sm" />
                                <div className="absolute top-10 right-4 w-1/3 h-8 bg-secondary rounded-sm" />
                                <div className="absolute top-22 right-4 w-1/3 h-8 bg-secondary rounded-sm" />
                                <Avatar size="sm" className="absolute bottom-4 right-4" src="https://i.pravatar.cc/150?u=sarah" />
                            </div>
                        </div>

                        {/* Two Column Grid (Active Projects & Recent Activity) */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            
                            {/* Active Projects (Mimicking "Org chart" card) */}
                            <div className="border border-secondary rounded-xl bg-primary p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Briefcase01 className="size-5 text-secondary" />
                                        <h3 className="font-semibold text-primary">Active projects</h3>
                                    </div>
                                    <Button color="secondary" size="sm">View all</Button>
                                </div>
                                
                                <div className="mb-4">
                                    <p className="text-display-xs font-semibold text-primary">3 projects</p>
                                </div>

                                <Button color="secondary" className="w-full mb-6 justify-start text-tertiary" iconLeading={Plus}>
                                    Create new project
                                </Button>

                                <div>
                                    <p className="text-xs font-medium text-tertiary mb-3 uppercase tracking-wide">Recently active</p>
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                                            AW
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Acme Website Redesign</p>
                                            <p className="text-xs text-tertiary">Development · 72% complete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity (Mimicking "Jobs" card) */}
                            <div className="border border-secondary rounded-xl bg-primary p-6 shadow-sm flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Activity className="size-5 text-secondary" />
                                        <h3 className="font-semibold text-primary">Recent activity</h3>
                                    </div>
                                    <Button color="secondary" size="sm">View all</Button>
                                </div>
                                
                                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                                    <div className="flex gap-2 mb-4">
                                        <FeaturedIcon icon={CheckCircle} color="success" theme="light" size="md" />
                                        <FeaturedIcon icon={MessageCircle01} color="brand" theme="light" size="md" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-primary mb-1">Stay on top of updates</h4>
                                    <p className="text-sm text-tertiary mb-6 max-w-xs">
                                        Client approvals, comments, and project milestones will appear here.
                                    </p>
                                    <Button color="primary" size="md">
                                        Invite a client
                                    </Button>
                                </div>
                            </div>

                        </div>

                        {/* Bottom Card (Mimicking "Share" tabbed card) */}
                        <div className="border border-secondary rounded-xl bg-primary p-6 shadow-sm mb-12">
                            <div className="flex items-center gap-2 mb-6 border-b border-secondary pb-4">
                                <Users01 className="size-5 text-secondary" />
                                <h3 className="font-semibold text-primary">Client Portal Access</h3>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-primary mb-2">Share your workspace link</h4>
                                    <p className="text-sm text-tertiary mb-6">
                                        Clients want to know exactly where their project stands. Share your Briflee portal link with them so they can track progress without asking for updates.
                                    </p>
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            readOnly
                                            value="https://briflee.com/portal/rufus-dev"
                                            className="flex-1 px-3 py-2 border border-secondary rounded-lg bg-secondary text-sm text-primary focus:outline-none"
                                        />
                                        <Button color="primary">Copy link</Button>
                                    </div>
                                </div>
                                <div className="hidden md:block w-72 h-32 bg-secondary rounded-lg border border-secondary p-4 relative overflow-hidden">
                                    <div className="text-xs text-tertiary mb-1">Article</div>
                                    <div className="text-sm font-semibold text-primary">How to onboard clients to Briflee</div>
                                    <LinkExternal01 className="absolute top-4 right-4 size-4 text-quaternary" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};
