import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Users from "./pages/Users";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://127.0.0.1:3000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <h1>Task Manager</h1>

      <Users />
    </ApolloProvider>
  );
}

export default App;
