
/**
 * Returns a hash code for a string.
 * (Compatible to Java's String.hashCode())
 *
 * The hash code for a string object is computed as
 *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
 * using number arithmetic, where s[i] is the i th character
 * of the given string, n is the length of the string,
 * and ^ indicates exponentiation.
 * (The hash value of the empty string is zero.)
 *
 * @param {string} A string value.
 * @return {number} A hash code value.
 */
const hashCode = (str: String): Number => {
	var h = 0, l = str.length, i = 0;
	if (l > 0)
		while (i < l)
			h = (h << 5) - h + str.charCodeAt(i++) | 0;
	return h;
};

/**
 * A domain object with identitifier.
 */
interface HasIdentifier<Identifier> {
	// Get the identifier. 
	identifier: Identifier;
}

/**
 * A domain object with Properties. 
 */
interface HasProperties<Properties extends object> {
	// Get the Properties. 
	properties: Properties;
}

/**
 * A common identifier type. 	
 */
export type UUID = string;

export interface IEntity<Identifier, Properties extends object> /*extends HasIdentifier<Identifier>, HasProperties<Properties>*/ { }

// Marker interface
interface Properties { }

/**
* A domain entity base class.
*/
export class Entity<Identifier, Properties extends object> implements IEntity<Identifier, Properties> {

	protected constructor(protected identifier: Identifier, protected properties: Properties) { }

	equals(other: Entity<Identifier, Properties>): Boolean {
		return this.identifier == other.identifier;
	}
}

export interface AuditableProperties extends Properties {
	created: number;
	updated: number | null;
}

export class AuditableEntity<Identifier, Properties extends AuditableProperties> extends Entity<Identifier, Properties> {

	protected constructor(identifier: Identifier, Properties: Properties) {
		super(identifier, Properties)
	}

	get created(): number {
		return this.properties.created;
	}

	get updated(): number | null {
		return this.properties.updated;
	}
}
