"use client";

export default function ErrorBoundary({error, reset} : {error: Error; reset: () => void;}){
    return <div>
        {error.message} - Error in review ID - from Error.tsx
        <button onClick={reset} >Try Again</button>
    </div>;
}