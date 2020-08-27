import { v4 as uuidv4 } from 'uuid'

export default function createTestStore() {
  return {
    people: [
      {
        id: `5b944e68-cf21-4404-a175-23883f0888a5`,
        name: `Jane`,
        number: 25,
      },
      {
        id: `3035a646-026e-40c5-974a-75f0c25e2a36`,
        name: `John`,
        number: 20,
      },
    ],
    addPerson(person) {
      this.people.push({
        id: uuidv4(),
        name: person.name,
        number: person.number,
      })
    },
    removePerson(uuid) {
      this.people = this.people.filter((person) => person.id !== uuid)
    },
  }
}
