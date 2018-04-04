import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import ons from 'onsenui';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import ReactDOM from "react-dom";
import ons from "onsenui/js/onsenui";
import { SimpleMap } from './simple-map';

class MyTab extends React.Component {
  render () {
    return (
        <Page>
          <section style={{margin: '16px'}}>
            <p>
              {this.props.content}.<br/>
              Good Day.
            </p>
          </section>
        </Page>
    )
  }
}

class MyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index : 0
    }
    this.renderToolbar = this.renderToolbar.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
    this.render = this.render.bind(this);

  }

  renderToolbar () {
    const titles = ['Home', 'Next', 'Settings'];
    return (
        <Toolbar>
          <div className='center'>{titles[this.state.index]}</div>
        </Toolbar>
    )
  }
  renderTabs () {
    return [
      {
        content: <MyTab content="Welcome home" />,
        tab: <Tab label='Home' icon='md-home' />
      },
      {
        content: <MyTab content="Next Page desu" />,
        tab: <Tab label='Next' icon='ion-android-pin' />
      },
      {
        content: <MyTab content="Change the settings" />,
        tab: <Tab label='Settings' icon='md-settings' />
      }
    ]
  }

  render () {
    return (
        <Page renderToolbar={this.renderToolbar}>

          <Tabbar
              swipeable={true}
              position='auto'
              index={this.state.index}
              onPreChange={(event) =>
              {
                if (event.index !== this.state.index) {
                  this.setState({index: event.index});
                }
              }
              }
              renderTabs={this.renderTabs}
          />
        </Page>
    )
  }
}

ons.ready(function() {
  ReactDOM.render(<MyPage />, document.getElementById('root'));
});