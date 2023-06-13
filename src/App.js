import "preline";
import Banner from "./stories/Banner";

export default function App() {
  return (
    <div className="flex flex-wrap">
      <Banner />
    </div>
  );
}

/*

import { Editor, Frame, Element, useNode } from "@craftjs/core";


const Container = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(dom) => connect(drag(dom))}>{children}</div>;
};

export default function App() {
  return (
    <Editor resolvers={{ Container }}>
      <Frame>
        <Element is={Container} canvas>
          <Container>
            <h2>Hi</h2>
          </Container>
          <Element is={Container} canvas>
            <h2>Hi</h2>
          </Element>
        </Element>
      </Frame>
    </Editor>
  );
}

*/
