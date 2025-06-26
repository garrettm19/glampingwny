import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Track error in analytics
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-8">
              We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={this.handleRefresh}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need immediate help? Call us at{' '}
                <a href="tel:+17162007692" className="text-blue-600 hover:underline">
                  (716) 200-7692
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;