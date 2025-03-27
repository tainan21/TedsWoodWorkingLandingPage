'use client';

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error Boundary:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 text-center">
      <h2 className="text-2xl font-bold text-destructive">
        Oops! Algo deu errado
      </h2>
      <Button
        onClick={() => reset()}
        variant="outline"
        className="mt-4"
      >
        Tentar Novamente
      </Button>
    </div>
  );
}