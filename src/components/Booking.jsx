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
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { CalendarIcon, CheckCircle, Car } from "lucide-react";
import { format } from "date-fns";
import { cn } from "../lib/utils";
import { toast } from "../hooks/use-toast";
import {useDispatch} from 'react-redux';
import {  
  createAppointment,
} from '../features/appointmentSlice';

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
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !email.trim() || !service || !date || !time || !vehicleMake || !vehicleModel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your booking.",
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
        vehicleNumber: vehicleMake, // Using vehicleMake as vehicleNumber (license plate or similar)
        vehicleModel: vehicleModel,
        serviceType: service,
        status: "pending", // New appointments start as pending
        note: note,
      };

      // Send appointment data to backend
      dispatch(createAppointment(appointmentData))
        .unwrap()
        .then((data) => {
          console.log('Appointment created successfully:', data);
        })
        .catch((error) => {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
        })
      
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
        description: error.message || "Failed to create appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider">Easy Booking</span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 mb-6">
              SCHEDULE YOUR
              <br />
              <span className="text-gradient">APPOINTMENT</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book your service appointment online in just a few clicks. Select your preferred date, time, and provide your vehicle details. Our team will confirm your booking.
            </p>

            <div className="space-y-4">
              {[
                "Quick online booking system",
                "Flexible scheduling options",
                "Instant confirmation",
                "Free estimates on all services",
                "Expert technicians for all vehicle types",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="font-display text-3xl text-foreground mb-6">BOOK NOW</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-input border-border focus:border-primary"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-primary" />
                  <h4 className="font-display text-xl text-foreground">Vehicle Details</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Vehicle Type *
                    </label>
                    <Select value={vehicleType} onValueChange={setVehicleType}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                  
                  {/* <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Vehicle Year *
                    </label>
                    <Select value={vehicleYear} onValueChange={setVehicleYear}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Vehicle  Number*
                    </label>
                    <Input
                      type="text"
                      placeholder="Toyota, Ford, BMW, etc."
                      value={vehicleMake}
                      onChange={(e) => setVehicleMake(e.target.value)}
                      className="bg-input border-border focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Vehicle Model *
                    </label>
                    <Input
                      type="text"
                      placeholder="Camry, F-150, X5, etc."
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      className="bg-input border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {/* <div className="mt-4">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    VIN (Optional)
                  </label>
                  <Input
                    type="text"
                    placeholder="1HGCM82633A123456"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                  />
                </div> */}
              </div>

              {/* Service Details */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <h4 className="font-display text-xl text-foreground">Service Details</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Service Type *
                    </label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-input border-border">
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
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Preferred Time *
                    </label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="bg-input border-border">
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

                <div className="mt-4">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Preferred Date *
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-input border-border",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
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

                <div className="mt-4">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Additional Notes (Optional)
                  </label>
                  <Textarea
                    placeholder="Tell us about your vehicle issue or any special requirements..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="bg-input border-border focus:border-primary"
                    rows={4}
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                * Required fields. We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;