function ErrorState({
  message = "Something went wrong",
}) {
  return (
    <div className="text-center py-20">

      <h2
        className="
        text-red-500
        text-2xl
        font-bold
        "
      >
        Error
      </h2>

      <p className="mt-4">
        {message}
      </p>

    </div>
  );
}

export default ErrorState;