import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events';

export function App() {
  return (
    <div className="App">
      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
    </div>
  );
}
