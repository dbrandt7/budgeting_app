defmodule BudgetingBeWeb.UserResolver do
  def find(%{id: id}, _info) do
    case BudgetingBe.Repo.get(BudgetingBe.User, id) do
      nil -> {:error, "User id #{id} not found"}
      user -> {:ok, user}
    end
  end
end
