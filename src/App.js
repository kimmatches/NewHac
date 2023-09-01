import './App.css';
import MyCalendar from "./MyCalender";

function App() {

    const events = [
        { title: '재관 만나기', date: '2023-09-01' },
        { title: '민석 만나기', date: '2023-09-22' }
    ];
  return (
      <>
          <nav className="sidebar">
        <ul className="navbar">
          <li>
            <a href={1}>Chat</a>
          </li>
          <li>
            <a href={2}>Calendar</a>
          </li>
        </ul>
      </nav>

    <div className="App">
      <MyCalendar events={events}/>
        {/*<MyCalendar />*/}
    </div>
    </>
  );
}

export default App;
