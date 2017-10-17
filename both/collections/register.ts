import { MongoObservable } from 'meteor-rxjs';
import { Register } from '../models';

export const Registers = new MongoObservable.Collection<Register>('registers');
