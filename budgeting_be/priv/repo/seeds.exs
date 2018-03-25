# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     BudgetingBe.Repo.insert!(%BudgetingBe.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

BudgetingBe.Repo.delete_all(BudgetingBe.User);
BudgetingBe.Repo.delete_all(BudgetingBe.TransactionType);
BudgetingBe.Repo.delete_all(BudgetingBe.Transaction);

# Users
dave = BudgetingBe.Repo.insert!(%BudgetingBe.User {
  name: "Dave Brandt",
  email: "test@test.com",
  password: "password"
})

mike = BudgetingBe.Repo.insert!(%BudgetingBe.User {
  name: "Mike Sanchez",
  email: "tester@test.com",
  password: "test"
})

#Transaction Types
food = BudgetingBe.Repo.insert!(%BudgetingBe.TransactionType {
  name: "Food"
})

travel = BudgetingBe.Repo.insert!(%BudgetingBe.TransactionType {
  name: "Travel"
})

bills = BudgetingBe.Repo.insert!(%BudgetingBe.TransactionType {
  name: "Bills"
})

entertainment = BudgetingBe.Repo.insert!(%BudgetingBe.TransactionType {
  name: "Entertainment"
})

#Transactions
BudgetingBe.Repo.insert!(%BudgetingBe.Transaction {
  user_id: dave.id,
  transaction_type_id: food.id,
  details: "Kneaders",
  date: Ecto.DateTime.cast!("2018-03-22T18:00:00.000Z"),
  amount: 15.00
})

BudgetingBe.Repo.insert!(%BudgetingBe.Transaction {
  user_id: dave.id,
  transaction_type_id: bills.id,
  details: "Energy Bill",
  date: Ecto.DateTime.cast!("2018-03-23T14:30:00.000Z"),
  amount: 37.50
})

BudgetingBe.Repo.insert!(%BudgetingBe.Transaction {
  user_id: mike.id,
  transaction_type_id: travel.id,
  details: "Utah Trip",
  date: Ecto.DateTime.cast!("2018-03-24T23:30:00.000Z"),
  amount: 100.00
})

BudgetingBe.Repo.insert!(%BudgetingBe.Transaction {
  user_id: mike.id,
  transaction_type_id: entertainment.id,
  details: "What About Bob? Blue-ray",
  date: Ecto.DateTime.cast!("2018-03-19T11:45:00.000Z"),
  amount: 20.00
})
