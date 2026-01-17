const FeatureWrapper = ({ children, isActive }) => {
  return (
    <div
      className={`
        w-[400px] flex-shrink-0 transition-all duration-500
        ${isActive
          ? "scale-100 opacity-100 pointer-events-auto"
          : "scale-90 opacity-30 pointer-events-none"}
      `}
    >
      {children}
    </div>
  );
};

export default FeatureWrapper;
