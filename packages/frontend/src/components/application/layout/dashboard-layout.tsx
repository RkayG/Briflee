import { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import {
    Home01,
    Briefcase01,
    Users01,
    MessageCircle01,
    Bell01,
    Settings01,
    SearchSm
} from "@untitledui/icons";
import { Avatar } from "@/components/base/avatar/avatar";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

interface DashboardLayoutProps {
    children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const location = useLocation();

    const navItems = [
        { name: "Overview", path: "/", icon: Home01 },
        { name: "Projects", path: "/projects", icon: Briefcase01 },
        { name: "Clients", path: "/clients", icon: Users01 },
        { name: "Messages", path: "/messages", icon: MessageCircle01, count: 3 },
    ];

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
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium ${
                                            isActive
                                                ? "bg-secondary text-primary"
                                                : "text-secondary hover:bg-secondary"
                                        }`}
                                    >
                                        <Icon className={`size-5 ${isActive ? "text-secondary" : ""}`} />
                                        {item.name}
                                        {item.count && (
                                            <span className="ml-auto bg-brand-solid text-white text-xs py-0.5 px-2 rounded-full">
                                                {item.count}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="px-3 mb-6">
                        <p className="px-3 mb-2 text-xs font-semibold text-tertiary uppercase tracking-wider">Manage</p>
                        <nav className="space-y-1">
                            <Link to="/settings" className="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-secondary rounded-md font-medium">
                                <Settings01 className="size-5" />
                                Settings
                            </Link>
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
                {/* Top Nav */}
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
                        <Link to="/notifications" className="p-2 text-secondary hover:bg-secondary rounded-full">
                            <Bell01 className="size-5" />
                        </Link>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};
