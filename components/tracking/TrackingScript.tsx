// Em /components/tracking/TrackingScript.tsx
'use client';

import { useEffect } from 'react';

type TrackingScriptProps = {
  sessionId: string;
  slug: string;
};

export default function TrackingScript({ sessionId, slug }: TrackingScriptProps) {
  useEffect(() => {
    // Inicializar heatmap (exemplo com Hotjar)
    const initHeatmap = () => {
      if (typeof window !== 'undefined' && window.hj) {
        window.hj('identify', sessionId, {
          slug: slug,
          landingPage: true,
        });
      } else {
        console.warn('Hotjar is not initialized');
      }
    };

    // Registrar eventos de clique para análise
    const trackClicks = () => {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        // Capturar interações com elementos importantes
        if (target.closest('button') || target.closest('a') || target.closest('[data-track]')) {
          const elementType = target.tagName;
          const elementId = target.id || '';
          const elementText = target.textContent || '';
          const trackData = target.closest('[data-track]')?.getAttribute('data-track') || '';

          // Enviar para API de tracking
          trackEvent({
            sessionId,
            eventType: 'click',
            element: {
              type: elementType,
              id: elementId,
              text: elementText.substring(0, 50),
              trackData,
            },
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
          });
        }
      };

      document.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        document.removeEventListener('click', handleClick);
      };
    };

    // Função para enviar eventos para sua API
    const trackEvent = async (eventData: {
      sessionId: string;
      eventType: string;
      element?: {
        type: string;
        id: string;
        text: string;
        trackData: string;
      };
      timestamp: string;
      page: string;
      referrer?: string;
    }) => {
      try {
        // Em produção, isso enviaria para sua API
        console.log('Tracking event:', eventData);

        // Exemplo de implementação de envio para API
        /*
        await fetch('/api/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventData),
        });
        */
      } catch (e) {
        console.error('Failed to track event', e);
      }
    };

    // Inicializar tracking
    initHeatmap();
    const cleanupClicks = trackClicks();

    // Registrar visualização de página
    trackEvent({
      sessionId,
      eventType: 'pageview',
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
      referrer: document.referrer,
    });

    // Cleanup
    return () => {
      cleanupClicks();
    };
  }, [sessionId, slug]);

  return null;
}