import { Button } from 'antd'
import React from 'react'
import { ErrorBoundaryContext } from 'react-error-boundary'


const ErrorBoundary = ({error, resetErrorBoundary}) => {

    return (
    <div role="alert" style={{ padding: 20, border: '1px solid red'}}>
        <h3>Something Wen Wrong</h3>
        <pre>{error.message}</pre>
        <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  )
}

export default ErrorBoundary