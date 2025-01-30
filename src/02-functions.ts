import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f: Friend[]): string[]  {
    return friends.map(f => `${f.name} is now ${f.age + 1}`);
}
console.log(allOlder(friends))

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

function addColleague(ca: Colleague[], name:string, department:string, email:string) {
    const highestColleague = highestExtension(ca)
    const extention = highestColleague.contact.extension + 1
    const newColleague : Colleague = {
        name:name,
        department:department,
        contact:{
            email:email,
            extension:extention
        }
    }
    ca.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
