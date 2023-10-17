import './App.css';
import { Constructor } from './components/constructor';
import { ContactForm } from './components/contact-form';

function App() {
  return (
    <div className="app" data-theme="light">
      <ContactForm />
      <span className="divider divider-horizontal"></span>
      <Constructor />
    </div>
  );
}

export default App;

