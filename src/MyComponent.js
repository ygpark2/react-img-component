/**
 * Copyright (c) Your Company. All rights reserved.
 */

import React from 'react'; // eslint-disable-line no-unused-vars
import Draggable from 'react-draggable'; 
import Resizable from 'react-resizable';

import './MyComponent.less';

class MyComponent {

  handleStart(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleDrag(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleStop(event, ui) {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleResizeStart(event, ui) {
    console.log('Resize Event: ', event);
    console.log('Resize Position: ', ui.position);
  }

  handleResize(event, ui) {
    console.log('Resize Event: ', event);
    console.log('Resize Position: ', ui.position);
  }

  handleResizeStop(event, ui) {
    console.log('Resize Event: ', event);
    console.log('Resize Position: ', ui.position);
  }
    render() {
        return (
          <div className="box" style={{height: '700px', width: '800px', position: 'relative'}}>
            <Draggable bounds="parent"
              handle=".handle"
              zIndex={100}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop} >
              <div className="handle box">
            <Resizable.ResizableBox className="box"
          width={300}
          height={300}
          draggableOpts={{grid: [25, 25]}}
          onResizeStop={this.handleResizeStart}
          onResizeStart={this.handleResizeStop}
          onResize={this.handleResize}>
                  <img src="img.jpg"/>
                </Resizable.ResizableBox>
              </div>
            </Draggable>
          </div>
        );
    }

}

export default MyComponent;
