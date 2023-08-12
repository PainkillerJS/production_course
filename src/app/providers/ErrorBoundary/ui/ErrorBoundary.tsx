import { Component, type PropsWithChildren, type ErrorInfo, type ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: JSX.Element;
  suspenseFallback?: JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

type ErrorStaticFunctionType = Record<keyof Pick<ErrorBoundaryState, 'hasError'>, true>;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorStaticFunctionType {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      const { fallback, suspenseFallback } = this.props;

      return <Suspense fallback={suspenseFallback}>{fallback}</Suspense>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
