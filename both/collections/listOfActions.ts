import { MongoObservable } from 'meteor-rxjs';
import { Actions } from '../models';
export const ListOfActions = new MongoObservable.Collection<Actions>('list_of_actions');
