export default interface IRepository<Identifier, Entity> {

    findOne(identifier: Identifier): Promise<Entity | null>;

    findAll(/*properties*/): Promise<Entity[]>;

    create(entity: Entity): Promise<void>;

    update(entity: Entity): Promise<void>;

    delete(id: Identifier): Promise<void>;
}