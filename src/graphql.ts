
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface NumbersInput {
    a?: Nullable<number>;
    b?: Nullable<number>;
}

export interface IQuery {
    hello(): string | Promise<string>;
}

export interface IMutation {
    add(input?: Nullable<NumbersInput>): Nullable<number> | Promise<Nullable<number>>;
}

type Nullable<T> = T | null;
