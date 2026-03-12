import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Mail, Lock, User, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { signinUser, signupUser, selectAuth } from "../features/authSlice";

const AuthModal = ({ isOpen, onOpenChange, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { loading, error } = useSelector(selectAuth);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setShowPassword(false);
  };

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isLogin) {
        const response = await dispatch(signinUser({ email, password })).unwrap();
        if (response.status === 200) {
          toast({
            title: "Welcome back!",
            description: "You have successfully logged in.",
          });
          resetForm();
          onOpenChange(false);
          onSuccess?.();
        }
      } else {
        if (!fullName.trim()) {
          toast({
            title: "Name Required",
            description: "Please enter your full name.",
            variant: "destructive",
          });
          return;
        }

        await dispatch(signupUser({ email, password, fullName })).unwrap();
        toast({
          title: "Account Created!",
          description: "Welcome to CH Automobile. You can now view your appointments.",
        });
        resetForm();
        onOpenChange(false);
        onSuccess?.();
      }
    } catch (error) {
      let message = error || "An error occurred";
      if (typeof error === "string" && error.includes("already")) {
        message = "This email is already registered. Please login instead.";
      }
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  };

  const handleOpenChange = (open) => {
    if (!open) {
      resetForm();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="font-display text-2xl sm:text-3xl text-cyan-800 font-bold mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-600">
            {isLogin
              ? "Sign in to manage your service appointments"
              : "Join us to book your automotive service"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-5">
          {/* Full Name Field (Signup only) */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-600" />
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 bg-white border-2 border-cyan-700 focus:border-cyan-400 focus:ring-0 outline-none ring-offset-0"
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-600" />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white border-2 border-cyan-700 focus:border-cyan-400 focus:ring-0 outline-none ring-offset-0"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-600" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-12 bg-white border-2 border-cyan-700 focus:border-cyan-400 focus:ring-0 outline-none ring-offset-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-600 hover:text-cyan-800"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {password.length > 0 && password.length < 6
                ? "• Password must be at least 6 characters"
                : password.length >= 6
                ? "✓ Password is strong"
                : ""}
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-cyan-700 to-cyan-800 hover:from-cyan-800 hover:to-cyan-900 text-white font-semibold"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                {isLogin ? "Sign In" : "Create Account"}
                <CheckCircle2 className="w-5 h-5" />
              </span>
            )}
          </Button>
        </form>

        {/* Toggle Auth Mode */}
        <div className="text-center pt-2">
          <p className="text-gray-600 text-sm mb-2">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-cyan-700 hover:text-cyan-900 font-semibold text-sm hover:underline transition-all"
          >
            {isLogin ? "Sign up here" : "Sign in here"}
            <span className="ml-1">→</span>
          </button>
        </div>

        {/* Security Notice */}
        <div className="mt-4 p-3 rounded-lg bg-cyan-50/50 border border-cyan-200/50">
          <p className="text-xs text-gray-600 text-center">
            🔒 Your data is secure and encrypted.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
