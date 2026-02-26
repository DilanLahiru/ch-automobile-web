import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Wrench, Calendar, Clock, ArrowLeft, LogOut, Trash2 } from "lucide-react";
import { toast } from "../hooks/use-toast";
import { format } from "date-fns";
import { getAllAppointments, deleteAppointment, selectAppointment } from "../features/appointmentSlice";

const Appointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { appointments, loading, error } = useSelector(selectAppointment);
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (!token) {
      navigate("/auth");
      return;
    }
  }, [navigate]);

  // Fetch appointments when component loads
  useEffect(() => {
    if (user || localStorage.getItem("token")) {
      dispatch(getAllAppointments());
    }
  }, [dispatch, user]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteAppointment(id)).unwrap();
      toast({
        title: "Appointment Cancelled",
        description: "Your appointment has been cancelled.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error || "Failed to cancel appointment.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    //await supabase.auth.signOut();
    navigate("/");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-2xl text-foreground tracking-wide">CH</span>
                <span className="font-display text-2xl text-gradient tracking-wide"> AUTOMOBILE</span>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm hidden sm:block">
                {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="font-display text-5xl text-foreground">
            MY <span className="text-gradient">APPOINTMENTS</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            View and manage your service appointments
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground mt-4">Loading appointments...</p>
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-destructive/10 rounded-2xl border border-destructive/20">
            <Calendar className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="font-display text-2xl text-foreground mb-2">Error Loading Appointments</h2>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button variant="hero" onClick={() => dispatch(getAllAppointments())}>
              Try Again
            </Button>
          </div>
        ) : appointments?.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-border">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="font-display text-2xl text-foreground mb-2">No Appointments Yet</h2>
            <p className="text-muted-foreground mb-6">
              You haven't booked any service appointments.
            </p>
            <Button variant="hero" asChild>
              <a href="/#booking">Book Your First Appointment</a>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {appointments?.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  {/* Left Side - Appointment Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-xl text-foreground">
                        {appointment.serviceType || appointment.service}
                      </h3>
                      <Badge className={getStatusColor(appointment.status)}>
                        {appointment.status}
                      </Badge>
                    </div>

                    {/* Date and Time Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Date:</span>
                        <span className="text-foreground font-medium">
                          {format(new Date(appointment.appointmentDate || appointment.appointment_date), "PPP")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Time:</span>
                        <span className="text-foreground font-medium">
                          {appointment.appointmentTime || appointment.appointment_time || "Not specified"}
                        </span>
                      </div>
                    </div>

                    {/* Vehicle and Customer Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Vehicle</p>
                        <p className="text-foreground font-medium">
                          {appointment.vehicleModel || appointment.vehicle_model || "Not specified"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.vehicleNumber || appointment.vehicle_number || ""}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Customer</p>
                        <p className="text-foreground font-medium">
                          {appointment.customerName || appointment.customer_name || "N/A"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.customerContactNumber || appointment.customer_contact_number || ""}
                        </p>
                      </div>
                    </div>

                    {/* Notes */}
                    {(appointment.note || appointment.notes) && (
                      <div className="pt-2 border-t border-border/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Notes</p>
                        <p className="text-sm text-muted-foreground">
                          {appointment.note || appointment.notes}
                        </p>
                      </div>
                    )}

                    {/* Booking Date */}
                    <div className="text-xs text-muted-foreground pt-2">
                      Booked on
                      {/* Booked on {format(new Date(appointment.createdAt || appointment.created_at), "PPP")} */}
                    </div>
                  </div>

                  {/* Right Side - Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive hover:text-destructive-foreground self-start lg:self-auto"
                    onClick={() => handleDelete(appointment._id)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Cancel Appointment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Appointments;
