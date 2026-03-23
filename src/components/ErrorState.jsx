function ErrorState({ error, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        {error?.message || "We couldn't load the data. Please try again."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-[color:var(--color-primary)] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
