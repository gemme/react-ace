import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import AceEditor from 'react-ace';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style={{
        backgroundColor: 'red',
        height: 500
      }}>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="monokai"
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
              console.log("i've loaded");
            }`}
            setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
            }}
            minLines={5}
            maxLines={6}
        />
          
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
