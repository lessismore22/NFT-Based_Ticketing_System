// src/components/WalletConnection.js
import React from 'react';
import { Button } from '@/components/ui/button';

export default function WalletConnection({ wallet }) {
  return (
    <div className="mb-4">
      {!wallet?.isSignedIn() ? (
        <Button onClick={() => wallet.requestSignIn()} className="mb-4">
          Connect NEAR Wallet
        </Button>
      ) : (
        <>
          Connected as: {wallet.getAccountId()}
          <Button
            variant="outline"
            onClick={() => wallet.signOut()}
            className="ml-4"
          >
            Disconnect
          </Button>
        </>
      )}
    </div>
  );
}