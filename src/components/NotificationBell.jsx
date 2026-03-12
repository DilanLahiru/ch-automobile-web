import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bell, AlertCircle } from "lucide-react";
import { getAllNotifications } from "../features/notificationSlice";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

/**
 * NotificationBell Component
 * Displays a bell icon with badge showing unread notification count
 * Should be placed in the header/navigation bar
 */
const NotificationBell = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { unreadCount, notifications } = useSelector((state) => state.notification);

  useEffect(() => {
    // Fetch notifications on component mount
    dispatch(getAllNotifications());

    // Optional: Set up polling for updates
    const interval = setInterval(() => {
      dispatch(getAllNotifications());
    }, 60000); // Poll every minute

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Link to="/notifications">
      <Button
        variant="outline"
        size="icon"
        className={`relative border-cyan-600 border-2 group ${className}`}
        title="View notifications"
      >
        <div className="relative inline-block">
          <Bell className="w-5 h-5 text-cyan-700 group-hover:text-cyan-900 transition-colors" />

          {/* Unread Badge */}
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1">
              <Badge
                variant="destructive"
                className="h-5 w-5 p-0 flex items-center justify-center text-xs font-bold rounded-full"
              >
                {unreadCount > 9 ? "9+" : unreadCount}
              </Badge>
            </div>
          )}

          {/* Pulse animation for notifications */}
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full animate-pulse opacity-50"></div>
          )}
        </div>

        {/* Tooltip */}
        <span className="sr-only">
          {unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications"}
        </span>
      </Button>
    </Link>
  );
};

export default NotificationBell;
