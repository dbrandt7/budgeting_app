defmodule BudgetingBeWeb.TransactionResolver do
  def create(args, _info) do
    %BudgetingBe.Transaction{}
    |> BudgetingBe.Transaction.changeset(args)
    |> BudgetingBe.Repo.insert
  end

  def update(%{id: id, transaction: transaction_params}, _info) do
    BudgetingBe.Repo.get!(BudgetingBe.Transaction, id)
    |> BudgetingBe.Transaction.changeset(transaction_params)
    |> BudgetingBe.Repo.update
  end

  def delete(%{id: id}, _info) do
    transaction = BudgetingBe.Repo.get!(BudgetingBe.Transaction, id)
    BudgetingBe.Repo.delete(transaction)
  end
end
