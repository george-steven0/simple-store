interface sliceState{
    loading: boolean,
    error? : { message : string } | null | undefined
}

export type product = {
    id : string,
    title : string,
    price : number,
    image : string,
    description : string,
    category : string,
    rating : {rate:number,count:number},
    qty : number
}
export interface productStateType extends sliceState {
    products : product[] | [],
    singleProduct : product | null
    category : []
}

export type cartInitState = {
    cartItems: product[],
    total: number
}