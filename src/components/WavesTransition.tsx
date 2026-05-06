interface WavesTransitionProps {
  color: string;
}

export function WavesTransition({ color }: WavesTransitionProps) {
  return (
    <div className="hero-waves">
      <div className="wave wave-1">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C320,100 480,-20 800,40 C1120,100 1280,0 1440,40 L1440,100 L0,100 Z" fill={color} fillOpacity="0.3" />
        </svg>
      </div>
      <div className="wave wave-2">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z" fill={color} fillOpacity="0.5" />
        </svg>
      </div>
      <div className="wave wave-3">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,60 C320,110 560,10 880,60 C1200,110 1320,40 1440,60 L1440,100 L0,100 Z" fill={color} />
        </svg>
      </div>
    </div>
  );
}
