
// import { Entity, IEntity } from "."

import { IRepository } from '.';

export default abstract class Repository<Identifier, Entity> implements IRepository<Identifier, Entity> {

    public constructor() { }

    abstract async findOne(identifier: Identifier): Promise<Entity | null>;

    abstract async findAll(/*properties*/): Promise<Entity[]>;

    abstract async create(entity: Entity): Promise<void>;

    abstract async update(entity: Entity): Promise<void>;

    abstract async delete(id: Identifier): Promise<void>;
}