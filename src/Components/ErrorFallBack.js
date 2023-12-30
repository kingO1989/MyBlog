const ErrorFallback = ({ error, resetErrorBoundary }) => {
    //  <pre>{error.message}</pre>
    return (
        <div className="error">
            <p>Something went wrong:</p>

            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}
export default ErrorFallback