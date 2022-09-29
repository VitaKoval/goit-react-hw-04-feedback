// import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import FeedbackForm from "../components/FeedbackForm/FeedbackFormHook";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <FeedbackForm />
    </div>
  );
};
