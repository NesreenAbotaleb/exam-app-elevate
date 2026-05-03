const Background = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-sky-100 via-blue-50 to-white">

      {/* Top-right blue orb */}
      <div className="absolute -top-32 -right-32 w-105 h-105 rounded-full bg-blue-400/30 blur-[100px] pointer-events-none" />

      {/* Bottom-left blue orb */}
      <div className="absolute -bottom-32 -left-32 w-105 h-105 rounded-full bg-blue-400/30 blur-[100px] pointer-events-none" />


    </div>
  );
};

export default Background;