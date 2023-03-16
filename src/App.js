import Moods from "./components/Moods/Moods";

const App = () => {
  const moods = [
    {
      id: '1',
      date : new Date(),
      mood: '😎'
    },
    {
      id: '2',
      date : new Date(),
      mood: '🥱'
    },
    {
      id: '3',
      date : new Date(),
      mood: '🛹➕🚙🟰💥😵‍💫🏃🏽🏠🫣😬'
    },
    {
      id: '4',
      date : new Date(),
      mood: '🥱🧋🎂🧘🏽‍♂️'
    },
    {
      id: '5',
      date : new Date(),
      mood: '🍖🥗🍪🍊🍞🥣➕🧋➡️🏫'
    },
    {
      id: '6',
      date : new Date(),
      mood: '😋4🥗🍗🥤🍦'
    },
    {
      id: '7',
      date : new Date(),
      mood: '🥱🥱🥱🥱'
    },
    {
      id: '8',
      date : new Date(),
      mood: '🕐4️⃣🍽'
    },
    {
      id: '9',
      date : new Date(),
      mood: '🔙②👨🏽‍💻🧐'
    }
    
  ]
  return (
    <Moods items={moods}/>
  );
}

export default App;
