import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseList() {
  const { state } = useBudget();

  const isEmpty = useMemo(
    () => state.expenseList.length === 0,
    [state.expenseList]
  );

  return (
    <div className="mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No Hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            {" "}
            Listado de Gastos.
          </p>
          {state.expenseList.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense}></ExpenseDetail>
          ))}
        </>
      )}
    </div>
  );
}

export default ExpenseList;
