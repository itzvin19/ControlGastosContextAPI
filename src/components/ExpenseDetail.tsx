import { Expense } from "../types";
import { formatDate } from "../helpers";
import { AmountDisplay } from "./AmountDisplay";

type ExpenseProps = {
  expense: Expense;
};

function ExpenseDetail({ expense }: ExpenseProps) {
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
      <div></div>

      <div>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">
          {formatDate(expense.date!.toString())}
        </p>
      </div>

    <AmountDisplay label='' amount={expense.amount}></AmountDisplay>
    </div>
  );
}

export default ExpenseDetail;
