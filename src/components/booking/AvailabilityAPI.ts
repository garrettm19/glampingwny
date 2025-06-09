// Mock API for availability management
// In production, this would connect to your backend database

export interface AvailabilitySlot {
  id: string;
  date: string;
  totalTents: number;
  bookedTents: number;
  availableThemes: string[];
  pricing: {
    basePrice: number;
    weekendSurcharge?: number;
    holidaySurcharge?: number;
  };
}

export interface BookingRequest {
  date: string;
  theme: string;
  guests: number;
  duration: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    childName: string;
    childAge: number;
    specialRequests?: string;
  };
}

export interface BookingConfirmation {
  bookingId: string;
  confirmationNumber: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  totalPrice: number;
  setupTime: string;
  pickupTime: string;
}

class AvailabilityAPI {
  private baseUrl = '/api'; // Your backend API base URL

  async getAvailability(startDate: string, endDate: string): Promise<AvailabilitySlot[]> {
    try {
      const response = await fetch(`${this.baseUrl}/availability?start=${startDate}&end=${endDate}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch availability:', error);
      // Return mock data for development
      return this.getMockAvailability(startDate, endDate);
    }
  }

  async createBooking(booking: BookingRequest): Promise<BookingConfirmation> {
    try {
      const response = await fetch(`${this.baseUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });
      
      if (!response.ok) {
        throw new Error('Booking failed');
      }
      
      const confirmation = await response.json();
      
      // Send confirmation email
      await this.sendConfirmationEmail(confirmation);
      
      return confirmation;
    } catch (error) {
      console.error('Failed to create booking:', error);
      // Return mock confirmation for development
      return this.getMockConfirmation(booking);
    }
  }

  async sendConfirmationEmail(confirmation: BookingConfirmation): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/emails/confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(confirmation),
      });
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
    }
  }

  async updateAvailability(date: string, tentCount: number): Promise<void> {
    try {
      await fetch(`${this.baseUrl}/availability/${date}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookedTents: tentCount }),
      });
    } catch (error) {
      console.error('Failed to update availability:', error);
    }
  }

  // Mock data methods for development
  private getMockAvailability(startDate: string, endDate: string): AvailabilitySlot[] {
    const slots: AvailabilitySlot[] = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      
      slots.push({
        id: `slot-${dateStr}`,
        date: dateStr,
        totalTents: 4,
        bookedTents: Math.floor(Math.random() * 2),
        availableThemes: ['princess', 'superhero', 'unicorn', 'dinosaur', 'space', 'mermaid'],
        pricing: {
          basePrice: 299,
          weekendSurcharge: isWeekend ? 50 : undefined,
        }
      });
    }
    
    return slots;
  }

  private getMockConfirmation(booking: BookingRequest): BookingConfirmation {
    return {
      bookingId: `booking-${Date.now()}`,
      confirmationNumber: `GWN${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      status: 'confirmed',
      totalPrice: 299,
      setupTime: '4:00 PM',
      pickupTime: '10:00 AM (next day)'
    };
  }
}

export const availabilityAPI = new AvailabilityAPI();