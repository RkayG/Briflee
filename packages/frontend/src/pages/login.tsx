import { useNavigate } from "react-router";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { Button } from "@/components/base/buttons/button";

export const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/'); // Navigate to dashboard
    };

    return (
        <div className="min-h-screen bg-secondary flex flex-col justify-center items-center p-4 font-body">
            <div className="w-full max-w-md bg-primary border border-secondary rounded-2xl shadow-xl p-8 sm:p-10">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="size-12 bg-primary border border-secondary rounded-xl flex items-center justify-center mb-6 shadow-sm">
                        <UntitledLogoMinimal className="size-8 text-brand-primary" />
                    </div>
                    <h1 className="text-display-xs font-semibold text-primary mb-2">Welcome back</h1>
                    <p className="text-sm text-tertiary">Please enter your details to sign in.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
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
                        <div className="flex justify-between items-center mb-1.5">
                            <label className="block text-sm font-medium text-secondary">Password</label>
                            <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors">
                                Forgot password?
                            </button>
                        </div>
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            required
                            className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                        />
                    </div>

                    <div className="flex items-center gap-2 pb-2">
                        <input type="checkbox" id="remember" className="rounded border-secondary text-brand-primary focus:ring-brand-primary size-4" />
                        <label htmlFor="remember" className="text-sm text-secondary cursor-pointer">Remember for 30 days</label>
                    </div>

                    <Button type="submit" color="primary" className="w-full justify-center py-2.5">
                        Sign in
                    </Button>
                    
                    <Button type="button" color="secondary" className="w-full justify-center py-2.5 flex items-center gap-2">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="size-5" />
                        Sign in with Google
                    </Button>
                </form>

                <p className="text-center text-sm text-tertiary mt-8">
                    Don't have an account? <button onClick={() => navigate('/signup')} className="font-medium text-brand-primary hover:text-brand-secondary transition-colors">Sign up</button>
                </p>
            </div>
        </div>
    );
};
