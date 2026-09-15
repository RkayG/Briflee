import { useNavigate } from "react-router";
import { Key01, ArrowLeft } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

export const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        // Would normally show success state here, just navigating back to login for now
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-secondary flex flex-col justify-center items-center p-4 font-body">
            <div className="w-full max-w-md bg-primary border border-secondary rounded-2xl shadow-xl p-8 sm:p-10">
                <div className="flex flex-col items-center text-center mb-8">
                    <div className="size-12 bg-primary border border-secondary rounded-xl flex items-center justify-center mb-6 shadow-sm">
                        <Key01 className="size-6 text-brand-primary" />
                    </div>
                    <h1 className="text-display-xs font-semibold text-primary mb-2">Forgot password?</h1>
                    <p className="text-sm text-tertiary">No worries, we'll send you reset instructions.</p>
                </div>

                <form onSubmit={handleReset} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-secondary mb-1.5">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            required
                            className="w-full px-3 py-2.5 border border-secondary rounded-lg bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow"
                        />
                    </div>

                    <Button type="submit" color="primary" className="w-full justify-center py-2.5">
                        Reset password
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <button 
                        onClick={() => navigate('/login')} 
                        className="inline-flex items-center gap-2 text-sm font-medium text-tertiary hover:text-secondary transition-colors"
                    >
                        <ArrowLeft className="size-4" />
                        Back to log in
                    </button>
                </div>
            </div>
        </div>
    );
};
