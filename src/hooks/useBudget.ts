import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"

export const useBudget=()=>{
   var context = useContext(BudgetContext)
   return context
}