import { useNavigate } from "react-router";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { Button } from "@/components/base/buttons/button";

export const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/'); // Navigate to dashboard
    };

    return (
        <div className="min-h-screen bg-secondary flex flex-col justify-center items-center p-4 font-body">
            <div className="w-full max-w-md bg-primary border border-secondary rounded-2xl shadow-xl p-8 sm:p-10 my-8">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="size-12 bg-primary border border-secondary rounded-xl flex items-center justify-center mb-6 shadow-sm">
                        <UntitledLogoMinimal className="size-8 text-brand-primary" />
                    </div>
                    <h1 className="text-display-xs font-semibold text-primary mb-2">Create an account</h1>
                    <p className="text-sm text-tertiary">Start giving your clients a premium experience.</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1.5">First Name</label>
                            <input 
                                type="text" 
                                placeholder="Jane"
                                required
                                className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-1.5">Last Name</label>
                            <input 
                                type="text" 
                                placeholder="Doe"
                                required
                                className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            required
                            className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">Password</label>
                        <input 
                            type="password" 
                            placeholder="Create a password"
                            required
                            className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                        />
                        <p className="text-xs text-tertiary mt-2">Must be at least 8 characters.</p>
                    </div>

                    <Button type="submit" color="primary" className="w-full justify-center py-2.5 mt-2">
                        Get started
                    </Button>
                    
                    <Button type="button" color="secondary" className="w-full justify-center py-2.5 flex items-center gap-2">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="size-5" />
                        Sign up with Google
                    </Button>
                </form>

                <p className="text-center text-sm text-tertiary mt-8">
                    Already have an account? <button onClick={() => navigate('/login')} className="font-medium text-brand-primary hover:text-brand-secondary transition-colors">Log in</button>
                </p>
            </div>
        </div>
    );
};
