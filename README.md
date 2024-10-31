# NFT-based Ticketing System

## Project Overview
This project aims to revolutionize the ticketing industry by leveraging **blockchain technology** and **NFTs (Non-Fungible Tokens)** to create a secure, transparent, and accessible ticketing system. Built on the **NEAR Protocol**, this ticketing application enables users to buy, store, and verify event tickets as NFTs, thus eliminating fraud and improving event management capabilities. 

## Core Technologies
- **Blockchain Platform**: [NEAR Protocol](https://near.org/)
- **Frontend Framework**: React
- **Backend Framework**: Express.js
- **Database**: PostgreSQL

## Key Features

### 1. **Event Management**
   - Organizers can list events, set ticket prices, and manage ticket quantities.
   - Detailed event pages display event information, ticket availability, and pricing in an intuitive UI.

### 2. **NFT Ticketing System**
   - Each ticket purchase is minted as an NFT on the NEAR blockchain.
   - NFT tickets are stored securely in the user's NEAR wallet, which integrates seamlessly with the app.
   - Users can transfer tickets, ensuring complete ownership and flexibility.

### 3. **Secure, Transparent Transactions**
   - All ticket purchases and transfers are recorded on the blockchain, enhancing transparency.
   - Fraud prevention through NFT validation ensures that tickets cannot be forged or double-sold.

### 4. **Integrated NEAR Wallet Authentication**
   - Wallet integration enables secure authentication for both organizers and ticket buyers.
   - Users can easily access their tickets, view event histories, and manage their NFT assets directly from the app.

### 5. **Backend API for Event and Ticket Management**
   - Built with **Express.js**, the backend manages event data, handles ticket transactions, and communicates with the NEAR blockchain.
   - RESTful API endpoints support CRUD operations for events and ticket handling.

### 6. **PostgreSQL Database**
   - A robust PostgreSQL database stores all non-blockchain data, such as event details, user profiles, and purchase histories.
   - Optimized for efficient query handling and data retrieval.

## Project Setup and Deployment

### Initial Setup
1. **Backend Setup**: Install dependencies and set up the **Express.js** API server to handle ticket purchases and user interactions.
2. **Database Configuration**: Initialize and configure the PostgreSQL database with necessary tables for event and ticket data.
3. **Frontend Setup**: Develop a **React.js** frontend that connects with the NEAR wallet and backend API.
4. **Blockchain Configuration**: Integrate the NEAR Protocol, setting up smart contracts for minting, transferring, and managing NFT tickets.

### Frontend Features
- **User Dashboard**: Users can view purchased tickets, upcoming events, and transaction history.
- **Ticket Verification**: Each NFT ticket has a QR code, allowing event organizers to scan and verify ownership at the venue.
- **Event Browsing**: Users can explore upcoming events, with filters for category, date, and location.

### Backend and Database
- **Express API**: The backend includes endpoints for:
  - **User Authentication**: Token-based authentication with NEAR wallet integration.
  - **Event Management**: APIs for creating, updating, and deleting events.
  - **Ticket Handling**: Smart contract calls to handle ticket minting, transfers, and cancellations.
- **PostgreSQL Database**:
  - **Events Table**: Stores all event details, including organizer information and event metadata.
  - **Tickets Table**: Tracks ticket status, ownership, and transaction history.
  - **User Table**: Maintains user profiles and wallet associations.

### Blockchain and Smart Contracts
- **Smart Contract Functionality**: Smart contracts on NEAR Protocol manage the lifecycle of each NFT ticket.
  - **Minting**: Tickets are minted upon purchase.
  - **Transfer**: Tickets can be transferred between wallets, enabling resales within the app.
  - **Verification**: Tickets are validated on the blockchain, ensuring that only legitimate holders gain entry.

## Future Enhancements
1. **Dynamic Pricing**: Implement demand-based ticket pricing.
2. **In-App Secondary Marketplace**: Enable secure, on-platform resale of tickets, with fee structures for event organizers.
3. **Analytics Dashboard**: Offer insights for event organizers on ticket sales, attendance forecasts, and audience demographics.
4. **Enhanced Security**: Add multi-signature support for large transactions and high-profile event tickets.

## Conclusion
The NFT-based ticketing system bridges the gap between traditional ticketing and modern blockchain capabilities, offering an innovative solution for both event organizers and attendees. By storing tickets as NFTs on the NEAR blockchain, this application ensures ticket authenticity, reduces fraud, and empowers users with complete control over their tickets.
