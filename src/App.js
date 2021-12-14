import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height="100vh"
            projectID="5e0369ec-c2b3-4d37-87eb-d7bb3636462d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    )
}

export default App;