import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, MapPin, Trash2, Edit, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  room: string;
  date: string;
  time: string;
  duration: string;
}

const BookingSimulator = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    room: "",
    date: "",
    time: "",
    duration: "1 hour",
  });

  const rooms = ["Room 01", "Room 02", "Room 03", "Room 04"];
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];
  const durations = ["30 minutes", "1 hour", "1.5 hours", "2 hours"];

  useEffect(() => {
    const savedBookings = localStorage.getItem("ecobreak-bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const saveToLocalStorage = (newBookings: Booking[]) => {
    localStorage.setItem("ecobreak-bookings", JSON.stringify(newBookings));
  };

  const handleSubmit = () => {
    if (!formData.room || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (editingId) {
      const updatedBookings = bookings.map((b) =>
        b.id === editingId ? { ...formData, id: editingId } : b
      );
      setBookings(updatedBookings);
      saveToLocalStorage(updatedBookings);
      toast({
        title: "Booking Updated",
        description: `${formData.room} booking has been updated successfully!`,
      });
    } else {
      const newBooking: Booking = {
        ...formData,
        id: Date.now().toString(),
      };
      const updatedBookings = [...bookings, newBooking];
      setBookings(updatedBookings);
      saveToLocalStorage(updatedBookings);
      setShowSuccessModal(true);
    }

    setShowBookingModal(false);
    setFormData({ room: "", date: "", time: "", duration: "1 hour" });
    setEditingId(null);
  };

  const handleEdit = (booking: Booking) => {
    setFormData({
      room: booking.room,
      date: booking.date,
      time: booking.time,
      duration: booking.duration,
    });
    setEditingId(booking.id);
    setShowBookingModal(true);
  };

  const handleDelete = (id: string) => {
    const booking = bookings.find((b) => b.id === id);
    const updatedBookings = bookings.filter((b) => b.id !== id);
    setBookings(updatedBookings);
    saveToLocalStorage(updatedBookings);
    toast({
      title: "Booking Cancelled",
      description: `${booking?.room} booking has been cancelled`,
    });
  };

  const openNewBooking = () => {
    setFormData({ room: "", date: "", time: "", duration: "1 hour" });
    setEditingId(null);
    setShowBookingModal(true);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-eco-mint/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Try the Booking Simulator
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience how easy it is to book your library seat
            </p>
            <Button
              size="lg"
              onClick={openNewBooking}
              className="rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book a Seat Now
            </Button>
          </div>

          {bookings.length > 0 && (
            <div className="mt-12 animate-scale-in">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Bookings
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {bookings.map((booking) => (
                  <Card
                    key={booking.id}
                    className="p-6 hover:shadow-lg transition-all border-2 border-border hover:border-primary/20"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">
                            {booking.room}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {booking.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(booking)}
                          className="hover:bg-primary/10"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(booking.id)}
                          className="hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        {booking.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {booking.time}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {editingId ? "Edit Booking" : "Book Your Seat"}
            </DialogTitle>
            <DialogDescription>
              Select your preferred room, date, and time
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="room">Room</Label>
              <Select value={formData.room} onValueChange={(v) => setFormData({ ...formData, room: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms.map((room) => (
                    <SelectItem key={room} value={room}>
                      {room}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Select value={formData.time} onValueChange={(v) => setFormData({ ...formData, time: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration</Label>
              <Select value={formData.duration} onValueChange={(v) => setFormData({ ...formData, duration: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration} value={duration}>
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full rounded-full py-6 text-base"
              size="lg"
            >
              {editingId ? "Update Booking" : "Confirm Booking"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center py-6">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-4 animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-success" />
            </div>
            <DialogTitle className="text-2xl mb-2">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-base">
              Seat {formData.room} booked successfully for {formData.date} at {formData.time}
            </DialogDescription>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 rounded-full px-8"
              size="lg"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BookingSimulator;
