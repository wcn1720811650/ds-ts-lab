import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

// console.log(older(friends[0]))

function allOlder(f: Friend[]): string[]  {
    return friends.map(f => `${f.name} is now ${f.age + 1}`);
}
// console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
// console.log(highestExtension(colleagues.current));

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
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  

  function findFriends(fs: Friend[],condition:(f:Friend) => boolean): string[] {
    return fs.filter(condition).map(f => f.name )
  }
// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));

  function addInterest(f:Friend, interest:string):string[] {
    if (!f.interests) {
        f.interests = []
    }
    f.interests.push(interest)
    return f.interests

  }
console.log(addInterest(friends[0], 'Politics'))
