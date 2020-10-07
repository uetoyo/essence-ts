
/**
 * The unit-of-work pattern.
 */
interface ITransaction {
    commit(): Promise<void>;
    revert(): Promise<void>;
}

/**
 * The transaction also known as unit-of-work pattern.
 * This class should be used in service aka use-case not in controller!
 */
export default abstract class Transaction implements ITransaction {

    constructor(private readonly context: any /*DatabaseContext*/) { }

    abstract async commit(): Promise<void>;

    abstract async revert(): Promise<void>;
}