import {Component} from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       hasError: false,
       }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }
  componentDidCatch(error) {
    console.log("logging", error)
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary