import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const setup = (count = 0) => {
  const props = {
    onIncrement: jest.fn(),
    onDecrement: jest.fn(),
    count
  };

  const app = mount(<App {...props} />);

  return {
    app,
    props
  };
};

describe('App component', () => {
  it('should render without crashing', () => {
    const { app } = setup();

    expect(app).toHaveLength(1);
  });

  it('should render ShowCount and Buttons without crashing', () => {
    const { app, props } = setup();
    expect(app.find('ConnectedCounter')).toHaveLength(1);
  });

  // describe('ConnectedCounter', () => {
  //   it('should render without crashing', () => {
  //     const { showcount } = setup();

  //     expect(showcount).toHaveLength(1);
  //   });

  //   it('should display count from props', () => {
  //     const { showcount, props } = setup(7);

  //     expect(showcount.find('h1').text()).toMatch('Count: ' + props.count);
  //   });
  // });

  // describe('Buttons', () => {
  //   it('should render without crashing', () => {
  //     const { buttons } = setup();

  //     expect(buttons).toHaveLength(1);
  //   });

  //   it('first button (+) should call onIncrement', () => {
  //     const { buttons, props } = setup();
  //     buttons
  //       .find('button')
  //       .at(0)
  //       .simulate('click');
  //     expect(
  //       buttons
  //         .find('button')
  //         .at(0)
  //         .text()
  //     ).toMatch('+');

  //     expect(props.onIncrement.mock.calls.length).toEqual(1);
  //   });

  //   it('second button (-) should call onDecrement', () => {
  //     const { buttons, props } = setup();
  //     buttons
  //       .find('button')
  //       .at(1)
  //       .simulate('click');
  //     expect(
  //       buttons
  //         .find('button')
  //         .at(1)
  //         .text()
  //     ).toMatch('-');

  //     expect(props.onDecrement.mock.calls.length).toEqual(1);
  //   });
  // });
});
