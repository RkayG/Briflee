import { useState } from "react";
import { 
    SearchSm, 
    DotsVertical, 
    Send01, 
    Paperclip,
    Image01
} from "@untitledui/icons";
import { DashboardLayout } from "@/components/application/layout/dashboard-layout";
import { Avatar } from "@/components/base/avatar/avatar";
import { Input } from "@/components/base/input/input";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

const CONVERSATIONS = [
    {
        id: 1,
        name: "Acme Website Redesign",
        client: "Sarah Mitchell",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        lastMessage: "Sounds great, let's proceed with the second option.",
        time: "10:42 AM",
        unread: 2,
        active: true
    },
    {
        id: 2,
        name: "Mobile App Wireframes",
        client: "David Chen",
        avatar: "https://i.pravatar.cc/150?u=david",
        lastMessage: "I left a few comments on the latest Figma file.",
        time: "Yesterday",
        unread: 0,
        active: false
    },
    {
        id: 3,
        name: "Brand Guidelines",
        client: "Emily Wong",
        avatar: "https://i.pravatar.cc/150?u=emily",
        lastMessage: "Thanks for sending over the assets!",
        time: "Tuesday",
        unread: 0,
        active: false
    }
];

const MESSAGES = [
    {
        id: 1,
        sender: "Sarah Mitchell",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        isMe: false,
        text: "Hi there! I was wondering if we could adjust the color palette slightly on the homepage? It feels a bit too dark.",
        time: "10:30 AM"
    },
    {
        id: 2,
        sender: "Me",
        avatar: "https://i.pravatar.cc/150?u=me",
        isMe: true,
        text: "Absolutely! We can definitely lighten it up. Did you have specific shades in mind, or would you like me to present a few options?",
        time: "10:35 AM"
    },
    {
        id: 3,
        sender: "Sarah Mitchell",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        isMe: false,
        text: "I really liked the lighter blue we discussed in our kickoff call.",
        time: "10:40 AM"
    },
    {
        id: 4,
        sender: "Sarah Mitchell",
        avatar: "https://i.pravatar.cc/150?u=sarah",
        isMe: false,
        text: "Sounds great, let's proceed with the second option.",
        time: "10:42 AM"
    }
];

export const Messages = () => {
    const [messageInput, setMessageInput] = useState("");

    return (
        <DashboardLayout>
            <div className="flex h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] overflow-hidden">
                {/* Left Sidebar: Conversations */}
                <div className="w-full max-w-sm border-r border-secondary bg-primary flex flex-col h-full hidden md:flex">
                    <div className="p-4 border-b border-secondary relative">
                        <h1 className="text-xl font-semibold text-primary mb-4">Messages</h1>
                        <div className="relative">
                            <SearchSm className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-tertiary" />
                            <Input 
                                placeholder="Search messages..." 
                                className="pl-9"
                            />
                        </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto">
                        {CONVERSATIONS.map((conv) => (
                            <div 
                                key={conv.id} 
                                className={cx(
                                    "p-4 border-b border-secondary cursor-pointer transition-colors hover:bg-secondary/50",
                                    conv.active && "bg-brand-primary/5 border-l-2 border-l-brand-primary"
                                )}
                            >
                                <div className="flex gap-3">
                                    <Avatar src={conv.avatar} size="md" />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-sm font-semibold text-primary truncate">{conv.name}</h3>
                                            <span className="text-xs text-tertiary whitespace-nowrap ml-2">{conv.time}</span>
                                        </div>
                                        <p className="text-xs text-tertiary mb-1">{conv.client}</p>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className={cx("text-sm truncate", conv.unread > 0 ? "font-medium text-primary" : "text-tertiary")}>
                                                {conv.lastMessage}
                                            </p>
                                            {conv.unread > 0 && (
                                                <span className="flex items-center justify-center size-5 rounded-full bg-brand-primary text-white text-[10px] font-bold shrink-0">
                                                    {conv.unread}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-secondary/10 h-full">
                    {/* Chat Header */}
                    <div className="px-6 py-4 bg-primary border-b border-secondary flex justify-between items-center shrink-0">
                        <div className="flex items-center gap-3">
                            <Avatar src="https://i.pravatar.cc/150?u=sarah" size="md" />
                            <div>
                                <h2 className="text-lg font-semibold text-primary">Acme Website Redesign</h2>
                                <p className="text-sm text-tertiary">Sarah Mitchell</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button color="link-gray" iconLeading={SearchSm}></Button>
                            <Button color="link-gray" iconLeading={DotsVertical}></Button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="text-center">
                            <span className="text-xs font-medium text-tertiary bg-secondary/50 px-3 py-1 rounded-full">Today</span>
                        </div>
                        
                        {MESSAGES.map((msg) => (
                            <div key={msg.id} className={cx("flex max-w-[80%]", msg.isMe ? "ml-auto flex-row-reverse" : "")}>
                                <Avatar src={msg.avatar} size="sm" className="shrink-0 mt-auto mb-1 mx-2" />
                                <div className={cx(
                                    "px-4 py-3 rounded-2xl shadow-sm text-sm",
                                    msg.isMe 
                                        ? "bg-brand-primary text-white rounded-br-none" 
                                        : "bg-primary border border-secondary text-primary rounded-bl-none"
                                )}>
                                    <p>{msg.text}</p>
                                </div>
                                <span className="text-xs text-tertiary self-end mx-2 mb-1">{msg.time}</span>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 bg-primary border-t border-secondary shrink-0">
                        <div className="flex items-end gap-2 bg-secondary/30 border border-secondary rounded-xl p-2 focus-within:ring-2 focus-within:ring-brand-primary/20 focus-within:border-brand-primary transition-all">
                            <div className="flex gap-1 shrink-0 pb-1 px-1">
                                <button className="p-2 text-tertiary hover:text-primary transition-colors rounded-lg hover:bg-secondary"><Paperclip className="size-5" /></button>
                                <button className="p-2 text-tertiary hover:text-primary transition-colors rounded-lg hover:bg-secondary"><Image01 className="size-5" /></button>
                            </div>
                            <textarea 
                                className="flex-1 bg-transparent border-none p-2 text-sm text-primary resize-none outline-hidden max-h-32 min-h-[44px]"
                                placeholder="Type a message..."
                                rows={1}
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <div className="flex gap-2 shrink-0 pb-1 pr-1">
                                <Button color="primary" size="md" iconLeading={Send01}>Send</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};
