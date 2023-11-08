import { RouterProvider } from 'react-router-dom';
import './App.css';
// import { Constructor } from './components/constructor';
// import { ContactForm } from './components/contact-form';
import { router } from './router/router';

/* <div className="app" data-theme="light"> */
/* <ContactForm />
      <span className="divider divider-horizontal"></span>
      <Constructor /> */
/* </div> */

function App() {
  return <RouterProvider router={router} />;
}

export default App;

