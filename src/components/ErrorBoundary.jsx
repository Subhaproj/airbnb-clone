import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error("Error Information:", errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-4">
              ⚠️
            </div>

            <h1 className="text-2xl font-bold mb-3">
              Something went wrong
            </h1>

            <p className="text-gray-500 mb-6">
              We couldn't load this page correctly.
              Please try again.
            </p>

            <button
              type="button"
              onClick={this.handleReload}
              className="
                w-full
                bg-red-500
                hover:bg-red-600
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Try again
            </button>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;