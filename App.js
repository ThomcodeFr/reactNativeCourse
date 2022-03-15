import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <view>
        <Search />
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
