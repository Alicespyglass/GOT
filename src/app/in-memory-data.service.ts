import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Sansa Stark' },
      { id: 12, name: 'Arya Stark' },
      { id: 13, name: 'Daenerys Targaryen' },
      { id: 14, name: 'Brandon Stark' },
      { id: 15, name: 'Brienne of Tarth' },
      { id: 16, name: 'Cersei Lannister' },
      { id: 17, name: 'Tyrion Lannister' },
      { id: 18, name: 'Jaime Lannister' },
      { id: 19, name: 'Sandor Clegane' },
      { id: 20, name: 'Grey Worm' }
    ];
    return {heroes};
  }
}
