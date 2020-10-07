import { IFactory } from '.'

/**
 * Aggregate factory function interface.
 */
export default abstract class Factory<Entity> implements IFactory<Entity> {
    //abstract create(properties: any): Entity
}