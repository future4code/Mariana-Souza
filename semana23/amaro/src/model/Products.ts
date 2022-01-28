export interface ProductsInputDTO {
    name: string,
    tags: string[]
}

export interface ProductsInsertDTO extends ProductsInputDTO {
    id:string;
}