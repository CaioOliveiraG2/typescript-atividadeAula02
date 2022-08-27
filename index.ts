import { Person } from './person.ts';

let person = new Person('Caio', 'Oliveira', 'Silva', 18);

const app: HTMLElement = document.getElementById('app');
app.innerHTML = `
<h1>Persona</h1>
<h2>Me chamo ${person.getFullName()}</h2>
<h2>Nasci em ${person.getBirthdayYear()}</h2>
<h3>${person.emails[0]}</h3>
<h3>${person.emails[1]}</h3>
<h3>${person.emails[2]}</h3>`;
