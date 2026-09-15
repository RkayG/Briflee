import { useState } from "react";
import { useNavigate } from "react-router";
import {
    XClose,
    CheckCircle,
    MessageCircle01,
    DownloadCloud01,
    ArrowLeft,
    Send01,
    AlertCircle
} from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { Badge } from "@/components/base/badges/badges";

export const DeliverableReview = () => {
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [isApproved, setIsApproved] = useState(false);

    return (
        <div className="h-screen bg-secondary flex flex-col font-body overflow-hidden">
            {/* Header */}
            <header className="h-16 border-b border-secondary bg-primary flex items-center justify-between px-4 sm:px-6 shrink-0">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-secondary hover:bg-secondary rounded-lg transition-colors">
                        <ArrowLeft className="size-5" />
                    </button>
                    <div>
                        <h1 className="text-sm font-semibold text-primary">Homepage Design v3</h1>
                        <p className="text-xs text-tertiary">Acme Website Redesign</p>
                    </div>
                    {isApproved ? (
                        <Badge color="success" size="sm" iconLeading={CheckCircle}>Approved</Badge>
                    ) : (
                        <Badge color="warning" size="sm">Pending Review</Badge>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <Button color="secondary" size="sm" iconLeading={DownloadCloud01}>
                        Download
                    </Button>
                    {!isApproved && (
                        <Button color="primary" size="sm" iconLeading={CheckCircle} onClick={() => setIsApproved(true)}>
                            Approve work
                        </Button>
                    )}
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* File Viewer (Center) */}
                <main className="flex-1 bg-secondary/50 flex flex-col items-center justify-center p-8 overflow-auto relative">
                    <div className="w-full max-w-4xl bg-primary shadow-lg rounded-xl overflow-hidden border border-secondary aspect-[16/9] flex items-center justify-center">
                        <div className="text-center">
                            <div className="size-16 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <File02 className="size-8" />
                            </div>
                            <p className="text-sm font-medium text-primary">homepage_v3_final.fig</p>
                            <p className="text-xs text-tertiary mt-1">14.2 MB</p>
                            <Button color="secondary" size="sm" className="mt-4">Preview not available for this file type</Button>
                        </div>
                    </div>
                </main>

                {/* Feedback Sidebar */}
                <aside className="w-96 bg-primary border-l border-secondary flex flex-col shrink-0 relative z-10">
                    <div className="p-4 border-b border-secondary">
                        <h2 className="font-semibold text-primary">Feedback & Comments</h2>
                    </div>

                    {/* Comments List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {/* Status Message */}
                        {isApproved && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3 text-sm">
                                <CheckCircle className="size-5 text-green-600 shrink-0" />
                                <div>
                                    <p className="font-semibold text-green-800">Approved by Sarah Mitchell</p>
                                    <p className="text-green-700 mt-1">This deliverable has been officially signed off.</p>
                                </div>
                            </div>
                        )}

                        <div className="flex gap-3">
                            <Avatar src="https://i.pravatar.cc/150?u=rufus" size="sm" />
                            <div>
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-semibold text-sm text-primary">Rufus</span>
                                    <span className="text-xs text-tertiary">2 hours ago</span>
                                </div>
                                <p className="text-sm text-secondary bg-secondary/50 p-3 rounded-r-lg rounded-bl-lg">
                                    Hey Sarah! Here is v3. I've increased the CTA size and adjusted the hero padding as requested. Let me know what you think!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Comment Input */}
                    <div className="p-4 border-t border-secondary bg-primary">
                        {!isApproved ? (
                            <div className="relative">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Add a comment or request changes..."
                                    className="w-full px-3 py-2 pr-10 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none min-h-[80px]"
                                />
                                <button className={`absolute bottom-3 right-3 p-1.5 rounded-md transition-colors ${comment.trim() ? 'bg-brand-primary text-white' : 'bg-secondary text-quaternary'}`}>
                                    <Send01 className="size-4" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center p-4 text-sm text-tertiary border border-secondary rounded-lg bg-secondary/30">
                                This deliverable is approved and locked for comments.
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};

// Mock File02 Icon inline to avoid import errors since it was missed at the top
const File02 = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
        <polyline points="13 2 13 9 20 9"></polyline>
    </svg>
);
