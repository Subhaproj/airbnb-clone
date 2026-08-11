
function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Custom animated symbol */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animated-logo"
      >
        {/* Outer abstract shape */}
        <path
          d="M20 4
             C11 4 5 11 5 20
             C5 29 11 36 20 36
             C29 36 35 29 35 20
             C35 11 29 4 20 4Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="95"
          strokeDashoffset="95"
          className="logo-draw"
        />

        {/* Inner house/travel shape */}
        <path
          d="M12 21
             L20 13
             L28 21
             M15 20
             V28
             H25
             V20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="45"
          strokeDashoffset="45"
          
          className="logo-draw logo-draw-delay"
        />
      </svg>

      {/* Logo name */}
      <span className="logo-text text-xl font-bold tracking-tight text-red-500">
        Airbnb
      </span>
    </div>
  );
}

export default AnimatedLogo;

