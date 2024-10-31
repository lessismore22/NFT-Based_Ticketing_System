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
  }
  
  @call({})
  mint_ticket(params) {
    const { tokenId } = params;
    const caller = near.signerAccountId();
    assert(
      this.eventDetails.ticketsSold < this.eventDetails.totalTickets,
      'All tickets have been sold'
    );
    
    assert(!this.ticketOwners.get(tokenId), 'Token ID already exists');
    
    const deposit = near.attachedDeposit();
    assert(
      deposit >= BigInt(this.eventDetails.basePrice),
      'Attached deposit must be greater than or equal to ticket price'
    );
}}