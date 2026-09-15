import { useNavigate } from "react-router";
import {
    CheckCircle,
    MessageCircle01,
    File02,
    Settings01,
    ArrowRight
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";

const NOTIFICATIONS = [
    {
        id: 1,
        type: "approval",
        user: { name: "Sarah Mitchell", avatar: "https://i.pravatar.cc/150?u=sarah" },
        project: "Acme Website Redesign",
        item: "Homepage v3",
        text: "approved",
        time: "10 mins ago",
        read: false,
        icon: CheckCircle,
        iconColor: "text-green-600",
        iconBg: "bg-green-100 border-white",
        link: "/deliverable/1"
    },
    {
        id: 2,
        type: "feedback",
        user: { name: "David Chen", avatar: "https://i.pravatar.cc/150?u=david" },
        project: "Mobile App UI",
        item: "Checkout Flow",
        text: "requested changes on",
        time: "2 hours ago",
        read: false,
        icon: MessageCircle01,
        iconColor: "text-utility-brand-600",
        iconBg: "bg-utility-brand-100 border-white",
        link: "/deliverable/2"
    },
    {
        id: 3,
        type: "message",
        user: { name: "Sarah Mitchell", avatar: "https://i.pravatar.cc/150?u=sarah" },
        project: "Acme Website Redesign",
        item: null,
        text: "sent you a new message",
        time: "Yesterday",
        read: true,
        icon: MessageCircle01,
        iconColor: "text-quaternary",
        iconBg: "bg-primary border-secondary",
        link: "/projects/1"
    }
];

export const Notifications = () => {
    const navigate = useNavigate();

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto p-4 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-display-sm font-semibold text-primary mb-2">Notifications</h1>
                        <p className="text-tertiary">Catch up on recent activity across your workspaces.</p>
                    </div>
                    <Button color="secondary" size="md" iconLeading={Settings01} onClick={() => navigate('/settings')}>
                        Preferences
                    </Button>
                </div>

                {/* Notifications List */}
                <div className="bg-primary border border-secondary rounded-xl shadow-sm overflow-hidden">
                    <div className="border-b border-secondary px-6 py-4 flex items-center justify-between bg-secondary/30">
                        <span className="text-sm font-medium text-secondary">Today</span>
                        <Button color="link-gray" size="sm">Mark all as read</Button>
                    </div>
                    
                    <div className="divide-y divide-secondary">
                        {NOTIFICATIONS.map(notification => {
                            const Icon = notification.icon;
                            return (
                                <div 
                                    key={notification.id}
                                    onClick={() => navigate(notification.link)}
                                    className={`p-6 flex items-start gap-4 transition-colors cursor-pointer group ${
                                        !notification.read ? 'bg-utility-brand-50/30' : 'hover:bg-secondary/50'
                                    }`}
                                >
                                    <div className="relative shrink-0">
                                        <Avatar src={notification.user.avatar} size="lg" />
                                        <div className={`absolute -bottom-1 -right-1 size-6 rounded-full border-2 flex items-center justify-center shadow-sm ${notification.iconBg}`}>
                                            <Icon className={`size-3 ${notification.iconColor}`} />
                                        </div>
                                    </div>
                                    
                                    <div className="flex-1">
                                        <p className="text-sm text-secondary mb-1">
                                            <span className="font-semibold text-primary">{notification.user.name}</span>
                                            {" "}{notification.text}{" "}
                                            {notification.item && <span className="font-semibold text-primary">{notification.item}</span>}
                                        </p>
                                        <p className="text-xs text-tertiary">{notification.project} • {notification.time}</p>
                                    </div>
                                    
                                    <div className="shrink-0 flex items-center gap-3">
                                        {!notification.read && (
                                            <div className="size-2.5 bg-utility-brand-500 rounded-full" title="Unread"></div>
                                        )}
                                        <div className="p-2 text-quaternary opacity-0 group-hover:opacity-100 transition-opacity bg-primary group-hover:bg-secondary border border-transparent group-hover:border-secondary rounded-lg">
                                            <ArrowRight className="size-4" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
