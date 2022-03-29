import { useState } from 'react';
import './App.css';
import allContacts from './contacts.json'
/* import contacto from './contacts.json' */

function App() {
  const firstFive = allContacts.slice(0, 5)
  const [celebs, setCelebs] = useState(firstFive)
    const addContact = () => {
    const random = allContacts[Math.floor(Math.random() * allContacts.length)];
    if (celebs.find((celebs) => celebs.id === random.id)) {
      if (celebs.length < allContacts.length) {
        addContact();
      }
      return;
    }
    setCelebs((celebs) => [random, ...celebs]);
  };
  return (
    <div className="App">
      <h1>NICADO Contacts</h1>
      <button className='random-button' onClick={addContact}>Add a random celebrity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((elem, index) => {
            return (
              <tr key={elem.name + index}>
                <td>
                  <img
                    src={elem.pictureUrl}
                    alt="celeb pic"
                    style={{ height: "100px" }}
                  />
                </td>
                <td>
                  <h3>{elem.name}</h3>
                </td>
                <td>
                  <h3>{elem.popularity}</h3>
                </td>
                <td>
                  <h3>{elem.wonOscar ? <p>🏆</p> : <p>💩</p>}</h3>
                </td>
                <td>
                  <h3>{elem.wonEmmy ? <p>🏆</p> : <p>💩</p>}</h3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
