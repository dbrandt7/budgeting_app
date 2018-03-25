defmodule BudgetingBeWeb.Router do
  use BudgetingBeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BudgetingBeWeb do
    pipe_through :api
  end

  forward "/graphiql",
  Absinthe.Plug.GraphiQL,
  schema: BudgetingBeWeb.Schema

end
