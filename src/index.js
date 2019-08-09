import React from 'react';
import ReactDOM from 'react-dom';
import { LoremIpsum } from "lorem-ipsum";


const EasyList = ({data, tag: Elem = 'li'}) => {
  return data.map( (item, idx) => <Elem key={idx}>{item}</Elem>)
}

function Root() {
  console.log(`${NAME} ${VERSION}`);
  !!ENV && console.log(`ENV ${JSON.stringify(ENV)}`);
  const liParagraphs = (new LoremIpsum().generateParagraphs(3)).split('\n');
  const TestTag = 'p';
  return (
    <div className={'container'}>
      <h1>React Root</h1>
      <EasyList data={liParagraphs} tag="p"/>
      <TestTag>Test</TestTag>
    </div>
  );
}

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);