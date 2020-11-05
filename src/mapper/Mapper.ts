/**
 * The mapper from domain object to data transfer object and vice versa.
 */
export default interface Mapper<Entity, Target> {
    /**
     *  Decode from target (e.g DTO) to entity.
     */
    decode(target: Target): Entity;

    /** 
     * Encode from entity to target (e.g DTO).
     */
    encode(entity: Entity): Target;
}
