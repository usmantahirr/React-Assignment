import "./_errorLayout.scss";

const ErrorLayout = ({ message, children }) => (
  <div className="error_message">
    <h1>Something went wrong</h1>
    <h2>{message}</h2>
    {children}
  </div>
);

export default ErrorLayout;
