import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';

export default function Agenda() {
  return (
    <SafeAreaView style={styles.container}>
     
      <CalendarList
      onVisibleMonthsChange={months => {
        console.log("now these months are visible", months);
      }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        markedDates={{
        '2023-10-24': {selected: true, marked: true, dotColor: 'red'},
        }}
    style={styles.calendar}
    />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  calendar: {
    width: '100%', // Ocupa toda a largura da tela
    height: 400, // Defina a altura do calendário
  },
});