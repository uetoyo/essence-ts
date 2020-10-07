// Service aka USE_CASE.

import { IRepository } from './';


// Marker interface
// interface UseCase { }

function Usecase(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


/** 
 * The service which operates on single aggregate.
 */
export default class SingleAggregateService<Identifier, Entity>  {
    constructor(protected readonly repository: IRepository<Identifier, Entity>) { }
}

// The service which operates on multiple aggregates.
export interface IMultipleAggregateService { }