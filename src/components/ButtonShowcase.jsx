import React, { useState } from "react";
import ProfessionalButton from "./ProfessionalButton";
import { Calendar, LogOut, Check, AlertCircle } from "lucide-react";

const ButtonShowcase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const variants = [
    { name: "primary", label: "Primary" },
    { name: "secondary", label: "Secondary" },
    { name: "outline", label: "Outline" },
    { name: "ghost", label: "Ghost" },
    { name: "success", label: "Success" },
    { name: "danger", label: "Danger" },
  ];

  const sizes = ["sm", "md", "lg", "xl"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Professional Button System
          </h1>
          <p className="text-lg text-gray-600">
            Industry-standard minimalist design with smooth interactions
          </p>
        </div>

        {/* All Variants */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {variants.map((variant) => (
              <ProfessionalButton
                key={variant.name}
                variant={variant.name}
                size="md"
              >
                {variant.label}
              </ProfessionalButton>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            {sizes.map((size) => (
              <ProfessionalButton key={size} size={size}>
                {size.toUpperCase()}
              </ProfessionalButton>
            ))}
          </div>
        </div>

        {/* With Icons */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            With Icons
          </h2>
          <div className="flex flex-wrap gap-4">
            <ProfessionalButton
              variant="primary"
              Icon={Calendar}
              iconPosition="left"
            >
              Schedule Appointment
            </ProfessionalButton>
            <ProfessionalButton
              variant="danger"
              Icon={LogOut}
              iconPosition="right"
            >
              Logout
            </ProfessionalButton>
            <ProfessionalButton
              variant="success"
              Icon={Check}
              iconPosition="left"
            >
              Confirm
            </ProfessionalButton>
            <ProfessionalButton
              variant="outline"
              Icon={AlertCircle}
              iconPosition="left"
            >
              Warning
            </ProfessionalButton>
          </div>
        </div>

        {/* Loading State */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Loading State
          </h2>
          <div className="flex flex-wrap gap-4">
            <ProfessionalButton
              variant="primary"
              isLoading={isLoading}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }}
            >
              {isLoading ? "Processing" : "Click to Load"}
            </ProfessionalButton>
            <ProfessionalButton
              variant="secondary"
              isLoading={true}
              disabled
            >
              Loading...
            </ProfessionalButton>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Usage Examples
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded font-mono text-sm overflow-x-auto">
              {`// Basic Button
<ProfessionalButton>Click Me</ProfessionalButton>

// With Variant
<ProfessionalButton variant="secondary">Secondary</ProfessionalButton>

// Different Sizes
<ProfessionalButton size="sm">Small</ProfessionalButton>
<ProfessionalButton size="lg">Large</ProfessionalButton>

// With Icon
<ProfessionalButton Icon={Calendar} iconPosition="left">
  Schedule
</ProfessionalButton>

// Loading State
<ProfessionalButton isLoading={isLoading}>
  Save
</ProfessionalButton>

// Full Width
<ProfessionalButton fullWidth>Submit</ProfessionalButton>

// Link Button
<ProfessionalButton href="/appointments">
  View Appointments
</ProfessionalButton>`}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Props:</strong> variant, size, icon, iconPosition, isLoading, disabled, fullWidth, href, className
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
