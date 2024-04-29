import { Expense } from "../types"

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'hide-modal' } |
    { type: 'reset-budget' }

export type BudgetState = {
    budget: number,
    modal: boolean
    expenseList:Expense[]
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    expenseList:[]
}

export const BudgetReducer = (state: BudgetState = initialState, actions: BudgetActions) => {

    if (actions.type == 'add-budget') {
        return {
            ...state,
            budget: actions.payload.budget
        }
    }

    if (actions.type === 'reset-budget') {
        return {
            ...state,
            budget: 0
        }
    }

    if (actions.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (actions.type === 'hide-modal') {
        return {
            ...state,
            modal: false
        }
    }

    return state
}