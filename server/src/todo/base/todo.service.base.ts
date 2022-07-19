/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Todo } from "@prisma/client";

export class TodoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TodoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>
  ): Promise<number> {
    return this.prisma.todo.count(args);
  }

  async findMany<T extends Prisma.TodoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindManyArgs>
  ): Promise<Todo[]> {
    return this.prisma.todo.findMany(args);
  }
  async findOne<T extends Prisma.TodoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoFindUniqueArgs>
  ): Promise<Todo | null> {
    return this.prisma.todo.findUnique(args);
  }
  async create<T extends Prisma.TodoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoCreateArgs>
  ): Promise<Todo> {
    return this.prisma.todo.create<T>(args);
  }
  async update<T extends Prisma.TodoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoUpdateArgs>
  ): Promise<Todo> {
    return this.prisma.todo.update<T>(args);
  }
  async delete<T extends Prisma.TodoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TodoDeleteArgs>
  ): Promise<Todo> {
    return this.prisma.todo.delete(args);
  }
}