defmodule BudgetingBe.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    has_many :transactions, BudgetingBe.Transaction
    field :email, :string
    field :name, :string
    field :password, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:name, :email, :password])
  end
end
