import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './application-data/user.json';
import friendsDada from './application-data/friends.json';
import transactionsData from './application-data/transactions.json';
import statisticalDada from './application-data/statistical-data.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <Statistics title="Upload Stats" statisticalDada={statisticalDada} />
      <hr />
      <FriendsList friendsData={friendsDada} />
      <hr />
      <TransactionHistory transactions={transactionsData} />
    </div>
  );
}

export default App;
