defmodule BudgetingBeWeb.Router do
  use BudgetingBeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BudgetingBeWeb do
    pipe_through :api
  end

  forward "/api", Absinthe.Plug,
  schema: BudgetingBeWeb.Schema

  forward "/graphiql",
  Absinthe.Plug.GraphiQL,
  schema: BudgetingBeWeb.Schema

end
