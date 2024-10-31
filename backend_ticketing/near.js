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

    const metadata = {
      tokenId,
      owner: caller,
      eventName: this.eventDetails.eventName,
      date: this.eventDetails.date,
      venue: this.eventDetails.venue,
      isValid: true
    };

    this.ticketMetadata.set(tokenId, metadata);
    this.ticketOwners.set(tokenId, caller);
    this.eventDetails.ticketsSold++;
  }

  @call({})
  transfer_ticket(params) {
    const { tokenId, newOwner } = params;
    const caller = near.signerAccountId();
    assert(this.ticketOwners.get(tokenId) === caller, 'Only ticket owner can transfer');
    
    const metadata = this.ticketMetadata.get(tokenId);
    assert(metadata.isValid, 'Ticket is no longer valid');

    metadata.owner = newOwner;
    this.ticketMetadata.set(tokenId, metadata);
    this.ticketOwners.set(tokenId, newOwner);
  }

  @call({})
  validate_ticket(params) {
    const { tokenId } = params;
    assert(near.signerAccountId() === this.eventOrganizer, 'Only organizer can validate tickets');
    
    const metadata = this.ticketMetadata.get(tokenId);
    assert(metadata.isValid, 'Ticket is already used or invalid');
    
    metadata.isValid = false;
    this.ticketMetadata.set(tokenId, metadata);
  }

  @view({})
  get_ticket_info(params) {
    const { tokenId } = params;
    return this.ticketMetadata.get(tokenId);
  }

  @view({})
  get_event_details() {
    return this.eventDetails;
  }
}