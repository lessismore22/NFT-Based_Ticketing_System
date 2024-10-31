// src/components/EventCard.js
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function EventCard({ event, wallet, mintTicket }) {
  return (
    <Card key={event.id} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{event.event_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="mb-2"><strong>Venue:</strong> {event.venue}</p>
        <p className="mb-2">
          <strong>Available:</strong> {event.total_tickets - event.tickets_sold} of {event.total_tickets}
        </p>
        <p className="mb-4"><strong>Price:</strong> {event.base_price} NEAR</p>

        <Button
          onClick={() => mintTicket(event.id)}
          disabled={!wallet?.isSignedIn() || event.tickets_sold >= event.total_tickets}
          className="w-full"
        >
          {event.tickets_sold >= event.total_tickets ? 'Sold Out' : 'Buy Ticket'}
        </Button>
      </CardContent>
    </Card>
  );
}
