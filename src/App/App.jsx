import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from 'upcoming-events';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
}
