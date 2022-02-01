import * as React from "react";

export interface ExampleProps {
    foo?: "bar";
}

export const Example: React.FC<ExampleProps> = ({ foo }) => {
    return (
        <>
            <h1>Example</h1>
            <p>lorem ipsum - {foo ? "foo" : "bar"}</p>
        </>
    );
};
