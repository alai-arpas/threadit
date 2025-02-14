defmodule ThreaditWeb.MainController do
  use ThreaditWeb, :controller

  def main(conn, _params) do
    conn
    |> render_inertia("Main")
  end
end
