/**
 * Settings Page Component
 * Manages user settings including appointments, password reset, and repair history
 *
 * @component
 * @returns {React.ReactElement} The Settings page with tabs for different settings sections
 */

import React, { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Settings as SettingsIcon,
  Calendar,
  Lock,
  History,
  Eye,
  EyeOff,
  Loader,
  Trash2,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Wrench,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Footer from "../components/Footer";
import Logo from "../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";

// Import custom hooks and utilities
import {
  useAppointments,
  usePasswordReset,
  useRepairHistory,
} from "./settings/hooks";
import {
  getAppointmentStatusColor,
  canCancelAppointment,
  getAppointmentId,
  getUserName,
  getUserEmail,
} from "./settings/utils";

// ============================================================================
// Empty State Component
// ============================================================================

/**
 * EmptyState Component
 * Reusable component for empty states across different tabs
 */
const EmptyState = memo(({ icon: Icon, title, description, action }) => (
  <Card className="border-2 border-dashed border-gray-300 bg-white">
    <CardContent className="pt-12 text-center">
      <Icon className="w-10 h-10 mx-auto text-gray-400 mb-4" />
      <p className="text-gray-600 text-base">{title}</p>
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </CardContent>
  </Card>
));

EmptyState.displayName = "EmptyState";

// ============================================================================
// Loading State Component
// ============================================================================

/**
 * LoadingState Component
 * Reusable loading indicator
 */
const LoadingState = memo(({ message }) => (
  <div className="flex items-center justify-center py-12">
    <Loader className="w-6 h-6 animate-spin text-gray-700" />
    <span className="ml-2 text-gray-600">{message}</span>
  </div>
));

LoadingState.displayName = "LoadingState";

// ============================================================================
// Appointment Item Component
// ============================================================================

/**
 * AppointmentItem Component
 * Displays a single appointment card
 */
const AppointmentItem = memo(({ appointment, onCancel, isLoading }) => {
  const appointmentId = getAppointmentId(appointment);
  const statusColor = getAppointmentStatusColor(appointment.status);
  const canCancel = canCancelAppointment(appointment.status);

  return (
    <Card className="border border-gray-300">
      <CardContent className="pt-6">
        {/* Appointment Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DetailField label="Customer Name" value={appointment.customerName} />
          <DetailField label="Service Type" value={appointment.serviceType} />
          <DetailField
            label="Vehicle"
            value={`${appointment.vehicleModel} (${appointment.vehicleNumber})`}
          />
          <div>
            <p className="text-xs text-gray-600">Status</p>
            <Badge className={statusColor}>{appointment.status}</Badge>
          </div>
          <DetailField label="Appointment Date" value={moment(appointment.appointmentDate).format("DD/MM/YYYY")} />
          <DetailField label="Time" value={appointment.appointmentTime} />
        </div>

        {/* Appointment Note */}
        {appointment.note && (
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-3 mb-4">
            <p className="text-xs text-gray-700">
              <span className="font-semibold">Note:</span> {appointment.note}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 justify-end">
          {canCancel && (
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onCancel(appointmentId)}
              disabled={isLoading}
              className="gap-2"
              aria-label="Cancel appointment"
            >
              {isLoading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <Trash2 className="w-4 h-4" />
              )}
              Cancel
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
});

AppointmentItem.displayName = "AppointmentItem";

// ============================================================================
// Detail Field Component
// ============================================================================

/**
 * DetailField Component
 * Reusable component for displaying detail fields
 */
const DetailField = memo(({ label, value }) => (
  <div>
    <p className="text-xs text-gray-600">{label}</p>
    <p className="font-semibold text-gray-900 text-xs">{value || "N/A"}</p>
  </div>
));

DetailField.displayName = "DetailField";

// ============================================================================
// Password Input Component
// ============================================================================

/**
 * PasswordInput Component
 * Reusable password input field with visibility toggle
 */
const PasswordInput = memo(({
  label,
  name,
  value,
  onChange,
  onToggleVisibility,
  isVisible,
  placeholder,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={isVisible ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        aria-label={label}
        className={`w-full px-4 py-2 pr-10 border text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-colors ${
          error ? "border-red-300 bg-red-50" : "border-gray-300"
        }`}
      />
      <button
        type="button"
        onClick={onToggleVisibility}
        className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle password visibility"
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>
    </div>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
));

PasswordInput.displayName = "PasswordInput";

// ============================================================================
// Manage Appointments Tab
// ============================================================================

/**
 * ManageAppointmentsTab Component
 * Displays and manages user appointments
 */
const ManageAppointmentsTab = memo(() => {
  const { appointments, loading, cancellingId, handleCancelAppointment } =
    useAppointments();

  if (loading) {
    return <LoadingState message="Loading appointments..." />;
  }

  if (appointments.length === 0) {
    return (
      <EmptyState
        icon={Calendar}
        title="No appointments found"
        description="Book your first appointment today"
        // action={
        //   <Button className="mt-4" variant="outline">
        //     Book Appointment
        //   </Button>
        // }
      />
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <AppointmentItem
          key={getAppointmentId(appointment)}
          appointment={appointment}
          onCancel={handleCancelAppointment}
          isLoading={cancellingId === getAppointmentId(appointment)}
        />
      ))}
    </div>
  );
});

ManageAppointmentsTab.displayName = "ManageAppointmentsTab";

/**
 * PasswordSecurityTips Component
 * Displays password security best practices
 */
const PasswordSecurityTips = memo(() => (
  <Card className="mt-6 bg-gray-50 border border-gray-300">
    <CardContent className="pt-6">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-800">
          <p className="font-semibold mb-1">Password Security Tips:</p>
          <ul className="space-y-1 text-xs">
            <li>✓ Use at least 8 characters</li>
            <li>✓ Mix uppercase and lowercase letters</li>
            <li>✓ Include numbers and symbols</li>
            <li>✓ Don't use personal information</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
));

PasswordSecurityTips.displayName = "PasswordSecurityTips";

/**
 * ResetPasswordTab Component
 * Provides secure password reset functionality
 */
const ResetPasswordTab = memo(() => {
  const {
    formData,
    showPasswords,
    loading,
    fieldErrors,
    handleChange,
    togglePasswordVisibility,
    handleSubmit,
  } = usePasswordReset();

  const passwordLength = formData.newPassword.length;
  const passwordStrength = passwordLength === 0 ? 0 : passwordLength < 8 ? 25 : passwordLength < 12 ? 50 : passwordLength < 16 ? 75 : 100;

  return (
    <div className="w-full">
      <Card className="border border-gray-300 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-300 py-4 px-6">
          <CardTitle className="text-lg font-bold text-gray-900">
            Update Your Password
          </CardTitle>
          <CardDescription className="text-gray-600 text-sm mt-1">
            Enter your current password and choose a new password to keep your account secure
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Email & Current Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-gray-600 text-sm cursor-not-allowed font-medium"
                />
              </div>

              {/* Current Password */}
              <div>
                <PasswordInput
                  label="Current Password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  isVisible={showPasswords.current}
                  onToggleVisibility={() => togglePasswordVisibility("current")}
                  placeholder="Enter your current password"
                  error={fieldErrors.currentPassword}
                />
              </div>
            </div>

            {/* Row 2: New Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* New Password */}
              <div>
                <PasswordInput
                  label="New Password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  isVisible={showPasswords.new}
                  onToggleVisibility={() => togglePasswordVisibility("new")}
                  placeholder="Create a new password"
                  error={fieldErrors.newPassword}
                />

                {/* Password Strength Bar */}
                {formData.newPassword && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">Strength</span>
                      <span className={`text-xs font-semibold ${
                        passwordStrength < 25 ? 'text-red-600' :
                        passwordStrength < 50 ? 'text-yellow-600' :
                        passwordStrength < 75 ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        {passwordStrength < 25 ? 'Weak' : passwordStrength < 50 ? 'Fair' : passwordStrength < 75 ? 'Good' : 'Strong'}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          passwordStrength < 25 ? 'bg-red-500' :
                          passwordStrength < 50 ? 'bg-yellow-500' :
                          passwordStrength < 75 ? 'bg-blue-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <PasswordInput
                  label="Confirm New Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isVisible={showPasswords.confirm}
                  onToggleVisibility={() => togglePasswordVisibility("confirm")}
                  placeholder="Confirm your new password"
                  error={fieldErrors.confirmPassword}
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-auto gap-2 py-2.5 bg-cyan-700 hover:bg-cyan-900 text-white text-xs font-normal rounded-lg mt-4"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Update Password
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
});

ResetPasswordTab.displayName = "ResetPasswordTab";

/**
 * RepairHistoryItem Component
 * Displays individual repair/service record with clean, corporate design
 */
const RepairHistoryItem = memo(({ repair, index }) => {
  if (!repair) return null;

  const partsSubtotal = repair.parts?.reduce(
    (sum, part) => sum + (part.price * part.quantity || 0),
    0
  ) || 0;

  return (
    <Card className="border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="bg-cyan-900 px-6 py-4 border-b border-gray-300 flex items-center justify-between rounded-t-md">
          <div>
            <p className="text-xs text-white mb-1">Vehicle Number</p>
            <p className="text-sm font-sans font-semibold text-white">{repair.vehicleNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-white mb-1">Completed Date</p>
            <p className="text-sm font-sans font-semibold text-white">
              {moment(repair.date).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>

        {/* Technician & Information Row */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 mb-1">Technician</p>
            <p className="text-xs font-sans font-medium text-gray-700">
              {repair.employee?.name || "N/A"}
            </p>
          </div>
          <span className="px-3 py-1 bg-lime-600 text-white text-xs font-sans font-medium rounded">
            Completed
          </span>
        </div>

        {/* Parts Table */}
        {repair.parts && repair.parts.length > 0 && (
          <div className="px-6 py-4 border-b border-gray-200">
            <p className="text-xs font-sans font-semibold text-gray-600 mb-4">
              Parts Used ({repair.partsCount || repair.parts.length})
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300 bg-gray-50 text-xs">
                    <th className="text-left py-3 px-3 font-sans font-semibold text-gray-700">
                      Part Name
                    </th>
                    <th className="text-center py-3 px-3 font-sans font-semibold text-gray-700 w-20">
                      Qty
                    </th>
                    <th className="text-right py-3 px-3 font-sans font-semibold text-gray-700 w-24">
                      Price
                    </th>
                    <th className="text-right py-3 px-3 font-sans font-semibold text-gray-700 w-28">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {repair.parts.map((part, idx) => (
                    <tr
                      key={part._id || idx}
                      className="border-b border-gray-200 text-xs font-medium"
                    >
                      <td className="py-3 px-3 text-gray-900">
                        {part.name}
                      </td>
                      <td className="text-center py-3 px-3 text-gray-700">
                        {part.quantity}
                      </td>
                      <td className="text-right py-3 px-3 text-gray-700">
                        Rs. {part.price?.toLocaleString() || "0"}
                      </td>
                      <td className="text-right py-3 px-3 text-gray-900 font-sans font-medium">
                        Rs. {(part.price * part.quantity)?.toLocaleString() || "0"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Cost Summary */}
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-b-md">
          <p className="text-xs font-sans font-semibold text-gray-700 mb-3 uppercase">Cost Summary</p>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Parts Subtotal</p>
              <p className="text-sm font-sans font-semibold text-gray-900">
                Rs. {partsSubtotal?.toLocaleString() || "0"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-600 mb-1">Labor Cost</p>
              <p className="text-sm font-sans font-semibold text-gray-900">
                Rs. {repair.laborCost?.toLocaleString() || "0"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-600 mb-1">Total Amount</p>
              <p className="text-sm font-sans font-semibold text-gray-900">
                Rs. {repair.totalAmount?.toLocaleString() || "0"}
              </p>
            </div>
          </div>
        </div>

        {/* Service Notes */}
        {repair.description && (
          <div className="px-6 py-4 bg-white rounded-b-md">
            <p className="text-xs font-sans font-semibold text-gray-700 mb-2 uppercase">Service Notes</p>
            <p className="text-xs font-medium font-sans text-gray-700">
              {repair.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

RepairHistoryItem.displayName = "RepairHistoryItem";

/**
 * RepairHistoryTab Component
 * Displays user repair history and completed services
 */
const RepairHistoryTab = memo(() => {
  const { repairHistory, loading } = useRepairHistory();

  if (loading) {
    return <LoadingState message="Loading repair history..." />;
  }

  if (repairHistory.length === 0) {
    return (
      <EmptyState
        icon={History}
        title="No repair history found"
        description="Your completed repairs will appear here"
      />
    );
  }

  return (
    <div className="space-y-4">
      {repairHistory.map((repair, index) => (
        <RepairHistoryItem key={index} repair={repair} index={index} />
      ))}
    </div>
  );
});

RepairHistoryTab.displayName = "RepairHistoryTab";

// ============================================================================
// Settings Page Header Components
// ============================================================================

/**
 * SettingsPageHeader Component
 * Main header with title and description
 */
const SettingsPageHeader = memo(() => (
  <div className="mb-8">
    {/* Page Title Section */}
    <div className="flex items-end justify-between">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-cyan-800 rounded-lg">
            <SettingsIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-cyan-900">Settings & Profile</h1>
            <p className="text-gray-600 mt-1 text-xs">Manage your account, appointments, and preferences</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="mt-4 h-px bg-gray-300"></div>
  </div>
));

SettingsPageHeader.displayName = "SettingsPageHeader";

/**
 * UserInfoCard Component
 * Displays current user information with modern sleek design
 */
const UserInfoCard = memo(({ user }) => (
  <Card className="mb-8 border-0 bg-cyan-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardContent className="p-8">
      <div className="flex items-center justify-between gap-8">
        {/* Avatar & Name Section */}
        <div className="flex items-center gap-5 min-w-0">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-800 flex items-center justify-center shadow-lg flex-shrink-0">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-white font-semibold uppercase tracking-wide mb-1">Full Name</p>
            <p className="text-lg font-bold text-white truncate">
              {getUserName(user)}
            </p>
            <p className="text-sm text-gray-200 mt-1 truncate">
              {getUserEmail(user)}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

        {/* Status Info */}
        <div className="flex items-center gap-6 ml-auto flex-shrink-0">
          <div className="text-right">
            <p className="text-xs text-white font-semibold uppercase tracking-wide mb-2">Account Status</p>
            <Badge className="bg-lime-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md hover:shadow-lg transition-all">
              <CheckCircle className="w-3 h-3 mr-2" />
              Active
            </Badge>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
));

UserInfoCard.displayName = "UserInfoCard";

/**
 * SettingsTabsContainer Component
 * Main tabs container with professional sidebar-style navigation
 */
const SettingsTabsContainer = memo(() => {
  const [activeTab, setActiveTab] = React.useState("appointments");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-2">
          <div className="flex items-center gap-2 px-4 py-2 mb-4">
            <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Menu</span>
          </div>

          <button
            onClick={() => setActiveTab("appointments")}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
              activeTab === "appointments"
                ? "bg-gray-100 border-gray-400 shadow-sm"
                : "bg-white border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Appointments</p>
                <p className="text-xs text-gray-500">View & manage</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("password")}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
              activeTab === "password"
                ? "bg-gray-100 border-gray-400 shadow-sm"
                : "bg-white border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Security</p>
                <p className="text-xs text-gray-500">Change password</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
              activeTab === "history"
                ? "bg-gray-100 border-gray-400 shadow-sm"
                : "bg-white border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <History className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">History</p>
                <p className="text-xs text-gray-500">Service records</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Mobile Tab List */}
        <div className="grid grid-cols-3 gap-2 mb-6 lg:hidden">
          <button
            onClick={() => setActiveTab("appointments")}
            className={`p-3 rounded-lg border font-medium text-sm transition-all ${
              activeTab === "appointments"
                ? "bg-gray-100 border-gray-400"
                : "bg-white border-gray-300"
            }`}
          >
            <Calendar className="w-4 h-4 mx-auto" />
          </button>
          <button
            onClick={() => setActiveTab("password")}
            className={`p-3 rounded-lg border font-medium text-sm transition-all ${
              activeTab === "password"
                ? "bg-gray-100 border-gray-400"
                : "bg-white border-gray-300"
            }`}
          >
            <Lock className="w-4 h-4 mx-auto" />
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`p-3 rounded-lg border font-medium text-sm transition-all ${
              activeTab === "history"
                ? "bg-gray-100 border-gray-400"
                : "bg-white border-gray-300"
            }`}
          >
            <History className="w-4 h-4 mx-auto" />
          </button>
        </div>

        {/* Tab Content with Card Wrapper */}
        <div className="space-y-6">
          {activeTab === "appointments" && (
            <Card className="border border-gray-300">
              <CardHeader className="bg-gray-50 border-b border-gray-300 pb-4 rounded-t-md">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-gray-700" />
                  Manage Appointments
                </CardTitle>
                <CardDescription>View and manage all your service appointments</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 bg-white rounded-b-md">
                <ManageAppointmentsTab />
              </CardContent>
            </Card>
          )}

          {activeTab === "password" && (
            <Card className="border border-gray-300">
              <CardHeader className="bg-gray-50 border-b border-gray-300 pb-4 rounded-t-md">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lock className="w-5 h-5 text-gray-700" />
                  Security Settings
                </CardTitle>
                <CardDescription>Update your password and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 bg-white rounded-b-md">
                <ResetPasswordTab />
              </CardContent>
            </Card>
          )}

          {activeTab === "history" && (
            <Card className="border border-gray-300">
              <CardHeader className="bg-gray-50 border-b border-gray-300 pb-4 rounded-t-md">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <History className="w-5 h-5 text-gray-700" />
                  Service History
                </CardTitle>
                <CardDescription>View your complete service and repair records</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 bg-white rounded-b-md">
                <RepairHistoryTab />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
});

SettingsTabsContainer.displayName = "SettingsTabsContainer";

// ============================================================================
// Main Settings Component
// ============================================================================

/**
 * Settings Component
 * Main page component for user account settings and management
 * Handles authentication, user data loading, and provides access to:
 * - Appointment management
 * - Password reset
 * - Repair history viewing
 */
const Settings = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: reduxUser, isAuthenticated } = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  const loggingUser = localStorage.getItem("user");
  const [user, setUser] = useState(loggingUser ? JSON.parse(loggingUser) : null);

  useEffect(() => {
    if (!token || !isAuthenticated) {
      navigate("/auth");
      return;
    }


    // First try to get user from Redux
    if (reduxUser) {
      setUser(reduxUser);
    } else {
      // Fallback to localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          try {
            setUser(storedUser);
          } catch (e) {
            // If all fails, create minimal user object
            setUser({ name: "User" });
          }
        }
      } else {
        // Use minimal user object as fallback
        setUser({ name: "User" });
      }
    }
  }, [navigate, token, isAuthenticated, reduxUser]);


  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Professional Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between h-14">
            <img src={Logo} alt="CH Automobile Logo" className="w-48 rounded-lg" />
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <SettingsPageHeader />
        <UserInfoCard user={user} />
        <SettingsTabsContainer />
      </div>

      <Footer />
    </div>
  );
});

Settings.displayName = "Settings";

export default Settings;
