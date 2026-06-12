function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div
        className="
          w-12
          h-12
          border-4
          border-teal-600
          border-t-transparent
          rounded-full
          animate-spin
        "
      />

      <p className="mt-4 text-slate-200">
        Loading...
      </p>
    </div>
  );
}

export default Loader;