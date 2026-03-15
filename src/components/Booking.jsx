// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Calendar } from "./ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
// import { CalendarIcon, CheckCircle } from "lucide-react";
// import { format } from "date-fns";
// import { cn } from "../lib/utils";
// import { toast } from "../hooks/use-toast";

// const Booking = () => {
//   const [date, setDate] = useState(null);
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [service, setService] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const services = [
//     "General Repairs",
//     "Engine Service",
//     "Transmission",
//     "Oil Change",
//     "Electrical",
//     "Body Work",
//     "Other",
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim() || !phone.trim() || !email.trim() || !service || !date) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all fields to complete your booking.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     toast({
//       title: "Booking Confirmed!",
//       description: `Your appointment is scheduled for ${format(date, "PPP")}. We'll contact you shortly.`,
//     });

//     // Reset form
//     setName("");
//     setPhone("");
//     setEmail("");
//     setService("");
//     setDate(undefined);
//     setIsSubmitting(false);
//   };

//   return (
//     <section id="booking" className="py-24 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             <span className="text-primary font-medium uppercase tracking-wider">Easy Booking</span>
//             <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
//               SCHEDULE YOUR
//               <br />
//               <span className="text-gradient">APPOINTMENT</span>
//             </h2>
//             <p className="text-muted-foreground text-lg mb-8">
//               Book your service appointment online in just a few clicks. Select your preferred date and service type, and our team will confirm your booking.
//             </p>

//             <div className="space-y-4">
//               {[
//                 "Quick online booking system",
//                 "Flexible scheduling options",
//                 "Instant confirmation",
//                 "Free estimates on all services",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
//                   <span className="text-foreground">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Booking Form */}
//           <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
//             <h3 className="font-display text-3xl text-foreground mb-6">BOOK NOW</h3>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-2">
//                   Full Name
//                 </label>
//                 <Input
//                   type="text"
//                   placeholder="John Doe"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="bg-input border-border focus:border-primary"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-muted-foreground mb-2">
//                     Phone Number
//                   </label>
//                   <Input
//                     type="tel"
//                     placeholder="+1 234 567 890"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="bg-input border-border focus:border-primary"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-muted-foreground mb-2">
//                     Email
//                   </label>
//                   <Input
//                     type="email"
//                     placeholder="john@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="bg-input border-border focus:border-primary"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-2">
//                   Service Type
//                 </label>
//                 <Select value={service} onValueChange={setService}>
//                   <SelectTrigger className="bg-input border-border">
//                     <SelectValue placeholder="Select a service" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {services.map((s) => (
//                       <SelectItem key={s} value={s}>
//                         {s}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-muted-foreground mb-2">
//                   Preferred Date
//                 </label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal bg-input border-border",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {date ? format(date, "PPP") : <span>Pick a date</span>}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="default"
//                       selected={date}
//                       onSelect={setDate}
//                       initialFocus
//                       disabled={(date) => date < new Date()}
//                       className={cn("p-3 pointer-events-auto")}
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               <Button
//                 type="submit"
//                 variant="hero"
//                 size="xl"
//                 className="w-full mt-6"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Booking..." : "Confirm Booking"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Booking;

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { CalendarIcon, CheckCircle, Car, Clock, Zap } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { toast } from "../hooks/use-toast";
import { useDispatch } from "react-redux";
import { createAppointment } from "../features/appointmentSlice";

const Booking = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vin, setVin] = useState("");
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "General Repairs",
    "Engine Service",
    "Transmission",
    "Oil Change",
    "Electrical",
    "Body Work",
    "Other",
  ];

  const vehicleTypes = [
    "Sedan",
    "SUV",
    "Truck",
    "Van",
    "Motorcycle",
    "Hatchback",
    "Coupe",
    "Convertible",
    "Commercial",
  ];

  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !service ||
      !date ||
      !time ||
      !vehicleMake ||
      !vehicleModel
    ) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in all required fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the appointment data according to backend requirements
      const appointmentData = {
        customerName: name,
        customerEmail: email,
        customerContactNumber: phone,
        appointmentDate: format(date, "yyyy-MM-dd"),
        appointmentTime: time,
        vehicleNumber: vehicleMake,
        vehicleModel: vehicleModel,
        serviceType: service,
        status: "pending",
        note: note,
      };

      // Send appointment data to backend
      dispatch(createAppointment(appointmentData))
        .unwrap()
        .then((data) => {
          console.log("Appointment created successfully:", data);
        })
        .catch((error) => {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
        });

      toast({
        title: "Booking Confirmed!",
        description: `Your appointment is scheduled for ${format(date, "PPP")} at ${time}. We'll contact you shortly.`,
      });

      // Reset form
      setCustomerId("");
      setName("");
      setPhone("");
      setEmail("");
      setService("");
      setDate(null);
      setTime("");
      setVehicleType("");
      setVehicleMake("");
      setVehicleModel("");
      setVehicleYear("");
      setVin("");
      setNote("");
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description:
          error.message || "Failed to create appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Advanced Animated Background Elements */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-300/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-cyan-700 uppercase tracking-widest">
                Easy Booking System
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">
                <span className="text-cyan-700 font-bold">SCHEDULE YOUR</span>
                <br />
                <span className="text-cyan-950 font-bold">APPOINTMENT</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              Book your service appointment online in just a few clicks. Select
              your preferred date, time, and provide your vehicle details. Our
              team will confirm your booking.
            </p>

            {/* Features List */}
            <div className="space-y-4"
            >
              {[
                { icon: Zap, text: "Quick online booking system" },
                { icon: Clock, text: "Flexible scheduling options" },
                { icon: CheckCircle, text: "Instant confirmation" },
                { icon: Car, text: "All vehicle types supported" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-cyan-50 to-yellow-50 border border-cyan-200/50 hover:border-cyan-300 transition-all group"
                >
                  <item.icon className="w-5 h-5 text-cyan-700 flex-shrink-0 group-hover:text-yellow-600 transition-colors" />
                  <span className="text-sm font-medium text-gray-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div
              className="sticky top-24 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border-2 border-cyan-200/50 shadow-2xl backdrop-blur-sm hover:shadow-cyan-500/10 transition-all duration-300"
              style={{
                boxShadow:
                  "0 20px 60px rgba(13, 148, 136, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
              }}
            >
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-cyan-900 font-bold">
                  BOOK NOW
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-cyan-400 rounded-full" />
                    <h4 className="font-semibold text-cyan-900 text-sm uppercase tracking-widest">
                      Personal Information
                    </h4>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border-cyan-600 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-white border-cyan-600 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white border-cyan-600 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle Details Section */}
                <div className="space-y-4 pt-4 border-t border-cyan-200/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-cyan-400 rounded-full" />
                    <h4 className="font-semibold text-cyan-900 text-sm uppercase tracking-widest">
                      Vehicle Details
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="CCA 4521"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        className="bg-white border-cyan-600 transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Vehicle Model <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="Camry, Aqua, Fit"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        className="bg-white border-cyan-600 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details Section */}
                <div className="space-y-4 pt-4 border-t border-cyan-200/30">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-cyan-400 rounded-full" />
                    <h4 className="font-semibold text-cyan-900 text-sm uppercase tracking-widest">
                      Service Details
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger className="bg-white border-cyan-600 focus:border-cyan-600 focus:border-none focus:ring-cyan-600">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <Select value={time} onValueChange={setTime}>
                        <SelectTrigger className="bg-white border-cyan-600 focus:border-cyan-600 focus:border-none focus:ring-cyan-600">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white border-cyan-600 hover:bg-white hover:text-cyan-800 transition-all text-cyan-900",
                            !date && "text-gray-500",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 text-cyan-600" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us about your vehicle issue or any special requirements..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="bg-white border-cyan-200 focus:border-cyan-500 focus:ring-cyan-800 transition-all resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-800 hover:to-cyan-900 text-white py-6 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  <span className="text-red-500">*</span> Required fields. We'll
                  contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>
          </div>
          </motion.div>
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

        @keyframes animate-fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes animate-fade-in {
          from {
            opacity: 0;
          }
          to {
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

        .animate-fade-in-left {
          animation: animate-fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: animate-fade-in-right 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Booking;
