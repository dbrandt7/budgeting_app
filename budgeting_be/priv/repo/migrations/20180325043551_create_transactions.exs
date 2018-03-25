defmodule BudgetingBe.Repo.Migrations.CreateTransactions do
  use Ecto.Migration

  def change do
    create table(:transactions) do
      add :details, :string
      add :date, :utc_datetime
      add :amount, :decimal
      add :user_id, references(:users, on_delete: :nothing)
      add :transaction_type_id, references(:transaction_types, on_delete: :nothing)

      timestamps()
    end

    create index(:transactions, [:user_id])
    create index(:transactions, [:transaction_type_id])
  end
end
