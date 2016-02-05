'use strict';

var React = require('react-native');
var {
  Text,
  View
  } = React;

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class SimpleApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a simple application.</Text>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);

// React-Native Module Example

var CalendarManager = require('react-native').NativeModules.CalendarManager;
var date = new Date();
//CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
//CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', date.getTime()); // passing date as number of seconds since Unix epoch
//CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey', date.toISOString()); // passing date as ISO-8601 string

CalendarManager.addEvent('Birthday Party', {
  location: '4 Privet Drive, Surrey',
  time: date.getTime(),
  description: '...'
})

//CalendarManager.findEvents((error, events) => {
//  if (error) {
//    console.error(error);
//  } else {
//    console.log(events);
//  }
//})

async function updateEvents() {
  try {
    var events = await CalendarManager.findEvents();
    console.log(events);
  } catch (e) {
    console.error(e);
  }
}

updateEvents();

CalendarManager.doSomethingExpensive("input param", (error, results) => {
  console.log("error:" + error + " result:" + results);
});

console.log(CalendarManager.firstDayOfTheWeek);