import { NearBindgen, near, call, view, initialize, LookupMap } from 'near-sdk-js';

@NearBindgen({})
class NFTTicket {
  constructor() {
    this.ticketMetadata = new LookupMap('tm');
    this.ticketOwners = new LookupMap('to');
    this.eventOrganizer = '';
    this.eventDetails = {
      eventName: '',
      date: '',
      venue: '',
      totalTickets: 0,
      ticketsSold: 0,
      basePrice: '0'
    };
  }
  @initialize({})
  init(params) {
    const { eventName, date, venue, totalTickets, basePrice, organizer } = params;
    this.eventDetails = {
      eventName,
      date,
      venue,
      totalTickets,
      ticketsSold: 0,
      basePrice
    };
    this.eventOrganizer = organizer;
  }}