import { Request, Response } from "express";

export default abstract class BasicController {

    constructor(protected readonly service: any) {

    }

    abstract async findAll(request: Request, response: Response): Promise<any>;

    abstract async findOne(request: Request, response: Response): Promise<any>;

    abstract async create(request: Request, response: Response): Promise<any>;

    abstract async update(request: Request, response: Response): Promise<any>;

    abstract async delete(request: Request, response: Response): Promise<any>;
}