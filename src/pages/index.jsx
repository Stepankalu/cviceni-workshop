import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch ('http://localhost:4000/api/workshops/0');
const json = await response.json();

console.log(json);

document.querySelector('#root').innerHTML = render(
  <div className="container">
      <h1>Název workshopu: {json.data.title}</h1>
      <p>Jméno instruktora: {json.data.instructor.name}</p>
      <p>Místo konání: {json.data.venue.city}</p>
  </div>
);
