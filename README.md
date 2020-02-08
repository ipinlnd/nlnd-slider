## NLND SLider

This is a React component that provides a nice looking scrolling view. On scrolling, it will smooth scroll to the next component as such:

<img src="nlnd-slider.gif" width="300" />

## Installation

just do

```
npm install nlnd-slider
```

or

```
yarn add nlnd-slider
```

## Example

This example is the one used in the demo above:

```js
import React from "react";
import { Slider, Slide } from "nlnd-slider";
import { SlideA, SlideB, SlideC } from "./Components/SlideA";

const App = () => (
  <div>
    <Slider>
      <Slide>
        <SlideA />
      </Slide>
      <Slide>
        <SlideB />
      </Slide>
      <Slide>
        <SlideC />
      </Slide>
    </Slider>
  </div>
);
```

Each of the child components (SlideA, SlideB and SlideC) are simply a component to be shown in the slide. Here's how SlideA looks for example:

```js
const SlideComponent = styled.div`
  background-color: ${(props: SlideProps) => props.background};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const SlideA = () => {
  return (
    <SlideComponent background="#4784e6">
      <Contents style={{ fontSize: "3vw" }}>Hello</Contents>
    </SlideComponent>
  );
};
```

## Authors

Ali Rezaee (ipinlnd): <nlndipi@hotmail.com>
