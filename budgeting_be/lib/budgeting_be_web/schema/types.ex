defmodule BudgetingBeWeb.Schema.Types do
  use Absinthe.Schema.Notation
  use Absinthe.Ecto, repo: BudgetingBe.Repo

  object :user do
    field :id, :id
    field :email, :string
    field :name, :string
    field :password, :string
    field :transactions, list_of(:transaction), resolve: assoc(:transactions)
  end

  object :transaction do
    field :id, :id
    field :amount, :decimal
    field :date, :datetime
    field :details, :string
    field :transaction_type_id, :id
    field :transaction_type, :transaction_type, resolve: assoc(:transaction_type)
  end

  object :transaction_type do
    field :name, :string
  end
end
