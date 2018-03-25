defmodule BudgetingBe.Transaction do
  use Ecto.Schema
  import Ecto.Changeset


  schema "transactions" do
    belongs_to :transaction_type, BudgetingBe.TransactionType
    field :amount, :decimal
    field :date, :utc_datetime
    field :details, :string
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(transaction, attrs) do
    transaction
    |> cast(attrs, [:details, :date, :amount])
    |> validate_required([:details, :date, :amount])
  end
end
