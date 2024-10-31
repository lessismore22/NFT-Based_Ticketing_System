// src/components/ErrorAlert.js
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function ErrorAlert({ error }) {
  return (
    <Alert variant="destructive" className="max-w-md mx-auto mt-4">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
}
