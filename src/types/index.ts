export type Expense = {
    id: string,
    expenseName: string,
    ammount: number,
    category: string,
    date: Value
}

export type DraftExpense = Omit<Expense, 'id'>


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];