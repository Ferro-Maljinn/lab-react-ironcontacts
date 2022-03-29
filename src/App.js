import { useState } from 'react';
import './App.css';
import allContacts from './contacts.json'
/* import contacto from './contacts.json' */

function App() {
  const firstFive = allContacts.slice(0,5)
  const [celebs, setCelebs] = useState(firstFive)
  return (
    <div className="App">
      <h1>Iron Contact</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
