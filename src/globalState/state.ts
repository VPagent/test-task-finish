import { createGlobalState } from 'react-hooks-global-state';

export type Item={
    id: string ,
    name:string,
    title: string,
    pictures: [string, string, string],
    address: string | number,
    createdAt:  Date, //string | number
    description: string ,
    benefits: [string],
    email: string,
    employment_type: [string],
    location: {lat: number, long: number},
    phone: string,
    salary:  string,
    updatedAt: string
}
type InitState = {
    singleItem: Item | null
    added: string[] | null
    items: Item[] | null
}

const initialState: InitState = {
    singleItem : null,
    added: null,
    items: null
}

const { useGlobalState } = createGlobalState(initialState);
const store = {useGlobalState}

export default store