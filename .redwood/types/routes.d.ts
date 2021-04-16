import '@redwoodjs/router'

type ParamType<constraint> = constraint extends "Int" ? number : constraint extends "Boolean" ? boolean : constraint extends "Float" ? number : string;
type RouteParams<Route> = Route extends `${string}/{${infer Param}:${infer Constraint}}/${infer Rest}` ? { [Entry in Param]: ParamType<Constraint> } & RouteParams<`/${Rest}`> : Route extends `${string}/{${infer Param}:${infer Constraint}}` ? { [Entry in Param]: ParamType<Constraint> } : Route extends `${string}/{${infer Param}}/${infer Rest}` ? { [Entry in Param]: string } & RouteParams<`/${Rest}`> : {}
type QueryParams = Record<string | number, string | number | boolean>

declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    newUserExample: (params?: RouteParams<"/user-examples/new"> & QueryParams) => "/user-examples/new"
    editUserExample: (params?: RouteParams<"/user-examples/{id:Int}/edit"> & QueryParams) => "/user-examples/{id:Int}/edit"
    userExample: (params?: RouteParams<"/user-examples/{id:Int}"> & QueryParams) => "/user-examples/{id:Int}"
    userExamples: (params?: RouteParams<"/user-examples"> & QueryParams) => "/user-examples"
  }
}
