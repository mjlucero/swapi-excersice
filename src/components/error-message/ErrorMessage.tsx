import "./errorMessage.scss";

export const ErrorMessage = () => {
  const handleReload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.reload();
  };

  return (
    <div className="error-message-container">
      <span>
        There are no items to show. Please try again later or{" "}
        <a href="#" onClick={handleReload}>
          refresh the page
        </a>
      </span>
    </div>
  );
};
