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

    field :transaction_types, list_of(:transaction_type) do
      resolve fn _params, _info ->
        {:ok, BudgetingBe.Repo.all(BudgetingBe.TransactionType)}
      end
    end
  end

  input_object :update_transaction_params do
    field :details, non_null(:string)
    field :date, non_null(:datetime)
    field :amount, non_null(:decimal)
    field :transaction_type_id, :id
  end

  mutation do
    field :create_transaction, type: :transaction do
      arg :details, non_null(:string)
      arg :date, non_null(:datetime)
      arg :amount, non_null(:decimal)
      arg :user_id, non_null(:id)
      arg :transaction_type_id, :id

      resolve &BudgetingBeWeb.TransactionResolver.create/2
    end

    field :update_transaction, type: :transaction do
      arg :id, non_null(:id)
      arg :transaction, :update_transaction_params

      resolve &BudgetingBeWeb.TransactionResolver.update/2
    end

    field :delete_transaction, type: :transaction do
      arg :id, non_null(:id)

      resolve &BudgetingBeWeb.TransactionResolver.delete/2
    end
  end

end
