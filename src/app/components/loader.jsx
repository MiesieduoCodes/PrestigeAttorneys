// components/Loader.jsx
export default function Loader() {
    return (
      <div className="loader-container">
        <div className="loader">
          <span className="text-white black bg-clip-text animate-loading">
            Loading...
          </span>
        </div>
        <div className="curtain"></div>
      </div>
    );
  }