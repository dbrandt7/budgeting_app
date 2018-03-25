defmodule BudgetingBeWeb.Schema do
  use Absinthe.Schema
  import_types BudgetingBeWeb.Schema.Types
  import_types Absinthe.Type.Custom

  query do
    field :users, list_of(:user) do
      resolve fn _params, _info ->
        {:ok, BudgetingBe.Repo.all(BudgetingBe.User)}
      end
    end
  end
end
