import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";
import AuthModal from "../components/AuthModal";
import { Wrench, ArrowLeft } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(selectAuth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center px-4 relative overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse opacity-80" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animation-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animation-float" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3" />

      <div className="relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-3 group mb-8 hover:opacity-80 transition-opacity">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110 transition-all duration-300">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="font-display text-2xl text-cyan-700 font-bold tracking-wide">CH</p>
              <p className="font-display text-xs text-yellow-500 font-bold uppercase tracking-widest">Automobile</p>
            </div>
          </a>
        </div>

        {/* Auth Modal */}
        <AuthModal
          isOpen={true}
          onOpenChange={() => navigate("/")}
          onSuccess={() => navigate("/appointments")}
        />

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-700 font-semibold text-sm transition-all duration-300 group hover:gap-3"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </div>
      </div>


      <style>{`
        @keyframes animation-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes animation-pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .animation-float {
          animation: animation-float 3s ease-in-out infinite;
        }

        .animation-pulse-slow {
          animation: animation-pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Auth;
