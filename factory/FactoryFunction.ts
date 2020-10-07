

/**
 * The factory function interface.
 * 
 * The factory function is esponsible for creation of an entity.
 * For more informations see the *Factory Pattern*.
 * 
 * Examples:
 *      
 *   interface PersonFactory extends FactoryFucntion<Person> { }
 *   
 *   const createPerson : PersonFactory = (id: int, name: string) => 
 *      new Person(id, name, Date.now())
 * 
 *   const createPerson : PersonFactory = async (id: int, name: string  =>  
 *      new Person(...)  
 * 
 */
export default interface FactoryFunction<Entity> {
    (...properties: []): Entity
}