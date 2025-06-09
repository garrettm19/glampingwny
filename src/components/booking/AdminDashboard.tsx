import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Clock, Phone, Mail, FileText, Download, Edit, Trash2, Check, X } from 'lucide-react';

interface AdminBooking {
  id: string;
  confirmationNumber: string;
  date: string;
  theme: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  childName: string;
  childAge: number;
  guests: number;
  duration: number;
  specialRequests: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
  createdAt: string;
  setupAddress?: string;
  notes?: string;
}

// Utility function to format dates
const formatDate = (dateStr: string, format: string = 'MMM d, yyyy'): string => {
  const date = new Date(dateStr);
  
  if (format === 'MMM d, yyyy') {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } else if (format === 'EEEE, MMMM d, yyyy') {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }
  
  return date.toLocaleDateString('en-US');
};

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<AdminBooking[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [editingBooking, setEditingBooking] = useState<AdminBooking | null>(null);

  // Mock data - in production, fetch from your backend
  useEffect(() => {
    const mockBookings: AdminBooking[] = [
      {
        id: '1',
        confirmationNumber: 'GWN12345',
        date: '2024-03-15',
        theme: 'princess',
        customerName: 'Sarah Johnson',
        customerEmail: 'sarah@email.com',
        customerPhone: '(716) 555-0123',
        childName: 'Emma',
        childAge: 7,
        guests: 6,
        duration: 1,
        specialRequests: 'Gluten-free snacks please',
        status: 'confirmed',
        totalPrice: 299,
        createdAt: '2024-03-01T10:00:00Z',
        setupAddress: '123 Main St, Buffalo, NY 14221',
        notes: 'Customer prefers 4 PM setup'
      },
      {
        id: '2',
        confirmationNumber: 'GWN12346',
        date: '2024-03-16',
        theme: 'superhero',
        customerName: 'Mike Rodriguez',
        customerEmail: 'mike@email.com',
        customerPhone: '(716) 555-0124',
        childName: 'Alex',
        childAge: 8,
        guests: 8,
        duration: 1,
        specialRequests: 'Need extra decorations',
        status: 'confirmed',
        totalPrice: 349,
        createdAt: '2024-03-02T14:30:00Z',
        setupAddress: '456 Oak Ave, Amherst, NY 14226'
      }
    ];
    
    setBookings(mockBookings);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    const dateMatch = !selectedDate || booking.date === selectedDate;
    const statusMatch = filterStatus === 'all' || booking.status === filterStatus;
    return dateMatch && statusMatch;
  });

  const updateBookingStatus = (bookingId: string, newStatus: AdminBooking['status']) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: newStatus }
        : booking
    ));
  };

  const exportBookings = () => {
    const csvContent = [
      ['Date', 'Confirmation', 'Customer', 'Child', 'Theme', 'Guests', 'Status', 'Total'],
      ...filteredBookings.map(booking => [
        booking.date,
        booking.confirmationNumber,
        booking.customerName,
        booking.childName,
        booking.theme,
        booking.guests.toString(),
        booking.status,
        `$${booking.totalPrice}`
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getThemeEmoji = (theme: string) => {
    const themeMap: { [key: string]: string } = {
      princess: '👑',
      superhero: '🦸',
      unicorn: '🦄',
      dinosaur: '🦕',
      space: '🚀',
      mermaid: '🧜‍♀️',
      pirate: '🏴‍☠️',
      fairy: '🧚‍♀️'
    };
    return themeMap[theme] || '🎪';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 mb-4">
          Booking Dashboard
        </h1>
        
        {/* Filters and Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            />
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <button
            onClick={exportBookings}
            className="btn btn-outline flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Bookings', value: bookings.length, color: 'bg-blue-500' },
          { label: 'This Month', value: bookings.filter(b => b.date.startsWith('2024-03')).length, color: 'bg-green-500' },
          { label: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, color: 'bg-purple-500' },
          { label: 'Revenue', value: `$${bookings.reduce((sum, b) => sum + b.totalPrice, 0)}`, color: 'bg-orange-500' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Bookings ({filteredBookings.length})
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Theme
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Child & Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <motion.tr
                  key={booking.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {formatDate(booking.date)}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <span>{getThemeEmoji(booking.theme)}</span>
                        <span className="capitalize">{booking.theme}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {booking.confirmationNumber}
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {booking.customerName}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {booking.customerEmail}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {booking.customerPhone}
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {booking.childName} (age {booking.childAge})
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {booking.guests} guests
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {booking.duration} night{booking.duration > 1 ? 's' : ''}
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${booking.totalPrice}
                  </td>
                  
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                            className="text-green-600 hover:text-green-900"
                            title="Confirm booking"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                            className="text-red-600 hover:text-red-900"
                            title="Cancel booking"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      
                      <button
                        onClick={() => setEditingBooking(booking)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Edit booking"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this booking?')) {
                            setBookings(prev => prev.filter(b => b.id !== booking.id));
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                        title="Delete booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Details Modal */}
      {editingBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Booking Details - {editingBooking.confirmationNumber}
                </h3>
                <button
                  onClick={() => setEditingBooking(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Event Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{formatDate(editingBooking.date, 'EEEE, MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{getThemeEmoji(editingBooking.theme)}</span>
                        <span className="capitalize">{editingBooking.theme} Theme</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span>{editingBooking.guests} guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{editingBooking.duration} night{editingBooking.duration > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Customer Info</h4>
                    <div className="space-y-2 text-sm">
                      <div>{editingBooking.customerName}</div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{editingBooking.customerEmail}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{editingBooking.customerPhone}</span>
                      </div>
                      <div>Child: {editingBooking.childName} (age {editingBooking.childAge})</div>
                    </div>
                  </div>
                </div>
                
                {editingBooking.setupAddress && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Setup Address</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{editingBooking.setupAddress}</span>
                    </div>
                  </div>
                )}
                
                {editingBooking.specialRequests && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Special Requests</h4>
                    <div className="bg-gray-50 rounded-lg p-3 text-sm">
                      {editingBooking.specialRequests}
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Internal Notes</h4>
                  <textarea
                    value={editingBooking.notes || ''}
                    onChange={(e) => setEditingBooking({
                      ...editingBooking,
                      notes: e.target.value
                    })}
                    placeholder="Add internal notes..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-lg font-bold">
                    Total: ${editingBooking.totalPrice}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingBooking(null)}
                      className="btn btn-outline"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        // Save changes
                        setBookings(prev => prev.map(b => 
                          b.id === editingBooking.id ? editingBooking : b
                        ));
                        setEditingBooking(null);
                      }}
                      className="btn btn-primary"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;