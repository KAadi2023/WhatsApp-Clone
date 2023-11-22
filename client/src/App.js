import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';


function App() {

  const clientId = '1022422142894-tu109jh12ohhvt57ofn9fujb6dt7rnd8.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
