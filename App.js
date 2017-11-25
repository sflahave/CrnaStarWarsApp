import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import People from './app/People'
import Home from './app/Home'

/*
When you register a component with a navigator, that component will then have a navigation prop added to it.
This navigation prop drives how we move between different screens.
Each screen in your app will receive a navigation prop which contains the following:
  navigate - (helper) link to other screens
  state - screen's current state/routes
  setParams - (helper) make changes to route's params
  goBack - (helper) close active screen and move back
  dispatch - send an action to router
See https://reactnavigation.org/docs/navigators/navigation-prop
*/
const Navigation = StackNavigator({
  Home: { screen: Home },
  People: { screen: People }
})

export default class App extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}
