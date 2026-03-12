import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotifications, markNotificationAsRead, clearAllNotifications } from "../features/notificationSlice";
import { Bell, Clock, CheckCircle, AlertCircle, XCircle, Filter, Trash2, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useToast } from "../hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

const getStatusConfig = (status) => {
  const configs = {
    pending: {
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
      icon: Clock,
      label: "Pending",
      bgColor: "bg-yellow-50",
    },
    confirmed: {
      color: "bg-blue-100 text-blue-800 border-blue-300",
      icon: CheckCircle,
      label: "Confirmed",
      bgColor: "bg-blue-50",
    },
    completed: {
      color: "bg-green-100 text-green-800 border-green-300",
      icon: CheckCircle,
      label: "Completed",
      bgColor: "bg-green-50",
    },
    cancelled: {
      color: "bg-red-100 text-red-800 border-red-300",
      icon: XCircle,
      label: "Cancelled",
      bgColor: "bg-red-50",
    },
    rescheduled: {
      color: "bg-purple-100 text-purple-800 border-purple-300",
      icon: RotateCcw,
      label: "Rescheduled",
      bgColor: "bg-purple-50",
    },
  };
  return configs[status] || configs.pending;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return `Today at ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday at ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};

const NotificationCard = ({ notification, onMarkAsRead }) => {
  const statusConfig = getStatusConfig(notification.status || "pending");
  const StatusIcon = statusConfig.icon;

  return (
    <div
      className={`border-l-4 border-l-transparent p-4 ${statusConfig.bgColor} rounded-lg transition-all duration-300 hover:shadow-md`}
      style={{
        borderLeftColor: statusConfig.color.includes("yellow")
          ? "#EAB308"
          : statusConfig.color.includes("blue")
            ? "#3B82F6"
            : statusConfig.color.includes("green")
              ? "#10B981"
              : statusConfig.color.includes("red")
                ? "#EF4444"
                : "#A855F7",
      }}
    >
      <div className="flex items-start gap-4">
        <div className="pt-1">
          <StatusIcon className="w-6 h-6" style={{
            color: statusConfig.color.includes("yellow")
              ? "#CA8A04"
              : statusConfig.color.includes("blue")
                ? "#1D4ED8"
                : statusConfig.color.includes("green")
                  ? "#047857"
                  : statusConfig.color.includes("red")
                    ? "#DC2626"
                    : "#7E22CE",
          }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
            <div>
              <h4 className="font-semibold text-gray-900">
                Appointment {statusConfig.label}
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                {notification.customerName || "Customer"} • {notification.vehicleModel || "Vehicle"}
              </p>
            </div>
            <Badge className={statusConfig.color}>{statusConfig.label}</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 my-3">
            <div>
              <span className="font-medium">Appointment Date:</span> {notification.appointmentDate}
            </div>
            <div>
              <span className="font-medium">Service:</span> {notification.serviceType || "General Service"}
            </div>
            <div>
              <span className="font-medium">Vehicle:</span> {notification.vehicleNumber || "N/A"}
            </div>
            <div>
              <span className="font-medium">Time:</span> {notification.appointmentTime || "TBD"}
            </div>
          </div>

          {notification.note && (
            <p className="text-sm text-gray-600 bg-white bg-opacity-50 p-2 rounded mt-2">
              <span className="font-medium">Note:</span> {notification.note}
            </p>
          )}

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-opacity-20">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatDate(notification.createdAt || notification.updatedAt || new Date())}
            </span>
            {!notification.read && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onMarkAsRead(notification.id || notification._id)}
                className="text-xs h-auto py-1 px-2"
              >
                Mark as read
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { notifications, unreadCount, loading } = useSelector((state) => state.notification);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    dispatch(getAllNotifications());
  }, [dispatch]);

  const handleMarkAsRead = (notificationId) => {
    dispatch(markNotificationAsRead(notificationId)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        toast({
          title: "Success",
          description: "Notification marked as read",
        });
      }
    });
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      dispatch(clearAllNotifications()).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          toast({
            title: "Success",
            description: "All notifications cleared",
          });
        }
      });
    }
  };

  const filteredNotifications =
    activeFilter === "all"
      ? notifications
      : activeFilter === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => n.status === activeFilter);

  const statuses = ["pending", "confirmed", "completed", "cancelled", "rescheduled"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600">Stay updated on your appointment status</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <div className="mt-2 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">
                You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {notifications.length > 0 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={() => dispatch(getAllNotifications())}
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleClearAll}
              disabled={loading}
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          </div>
        )}

        {/* Filter Tabs */}
        {notifications.length > 0 && (
          <Card className="mb-6 border-0 shadow-sm">
            <CardContent className="pt-6">
              <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
                <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 bg-gray-100">
                  <TabsTrigger value="all" className="text-xs sm:text-sm">
                    All ({notifications.length})
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-xs sm:text-sm">
                    Unread ({unreadCount})
                  </TabsTrigger>
                  {statuses.map((status) => (
                    <TabsTrigger key={status} value={status} className="text-xs sm:text-sm capitalize">
                      {status}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>
        )}

        {/* Notifications List */}
        <div className="space-y-4">
          {loading && !notifications.length && (
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8">
                <div className="text-center space-y-2">
                  <div className="inline-block p-3 bg-gray-100 rounded-full animate-pulse">
                    <Bell className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-600">Loading notifications...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {!loading && notifications.length === 0 ? (
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8">
                <div className="text-center space-y-2">
                  <div className="inline-block p-3 bg-gray-100 rounded-full">
                    <Bell className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-600">No notifications yet</p>
                  <p className="text-sm text-gray-500">Your appointment updates will appear here</p>
                </div>
              </CardContent>
            </Card>
          ) : filteredNotifications.length === 0 ? (
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8">
                <div className="text-center space-y-2">
                  <Filter className="w-6 h-6 text-gray-400 mx-auto" />
                  <p className="text-gray-600">No notifications in this category</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification, index) => (
                <NotificationCard
                  key={index}
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;
