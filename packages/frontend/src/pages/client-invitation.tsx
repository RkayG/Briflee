import { useNavigate } from "react-router";
import { Briefcase01, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Avatar } from "@/components/base/avatar/avatar";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";

export const ClientInvitation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-secondary flex flex-col font-body">
            {/* Minimal Header */}
            <header className="p-6">
                <div className="flex items-center gap-2">
                    <UntitledLogoMinimal className="size-6 text-brand-primary" />
                    <span className="font-semibold text-primary text-lg">Briflee</span>
                </div>
            </header>

            <main className="flex-1 flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-lg">
                    <div className="bg-primary border border-secondary rounded-2xl shadow-xl overflow-hidden text-center relative">
                        {/* Decorative background header */}
                        <div className="h-32 bg-gradient-to-br from-brand-100 to-brand-50 w-full absolute top-0 left-0"></div>
                        
                        <div className="relative pt-24 px-8 pb-10">
                            {/* Provider Avatar overlapping the header */}
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 p-1.5 bg-primary rounded-full shadow-sm">
                                <Avatar src="https://i.pravatar.cc/150?u=rufus" size="xl" />
                            </div>
                            
                            <h1 className="text-display-xs font-semibold text-primary mt-4 mb-2">Rufus invited you to collaborate</h1>
                            <p className="text-secondary mb-8">Join the private workspace to track progress, review deliverables, and collaborate seamlessly.</p>
                            
                            {/* Project Card summary */}
                            <div className="bg-secondary/30 border border-secondary rounded-xl p-5 mb-8 text-left flex items-start gap-4">
                                <div className="size-10 rounded-lg bg-primary border border-secondary flex items-center justify-center shrink-0 shadow-sm mt-1">
                                    <Briefcase01 className="size-5 text-quaternary" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-primary mb-1">Acme Website Redesign</h3>
                                    <p className="text-sm text-tertiary">Target completion: Nov 1, 2026</p>
                                </div>
                            </div>

                            <Button 
                                color="primary" 
                                size="lg" 
                                className="w-full justify-center py-3 text-base shadow-sm"
                                iconTrailing={ArrowRight}
                                onClick={() => navigate('/client-portal')}
                            >
                                Enter Workspace
                            </Button>
                            
                            <p className="text-xs text-tertiary mt-6">
                                Powered by Briflee. By joining, you agree to our Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
