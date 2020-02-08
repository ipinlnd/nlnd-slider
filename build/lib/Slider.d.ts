import React from "react";
interface Props {
    children: React.ReactNode[];
}
interface State {
    index: number;
}
declare class Slider extends React.Component<Props, State> {
    constructor(props: any);
    handleScroll: (event: Event) => void;
    handleKeyDown: (event: Event) => void;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    componentDidUpdate: () => void;
    render: () => JSX.Element;
}
export { Slider };
