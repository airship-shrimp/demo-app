import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { PetList } from "./pet/PetList";
import { PetCreate } from "./pet/PetCreate";
import { PetEdit } from "./pet/PetEdit";
import { PetShow } from "./pet/PetShow";
import { TodoList } from "./todo/TodoList";
import { TodoCreate } from "./todo/TodoCreate";
import { TodoEdit } from "./todo/TodoEdit";
import { TodoShow } from "./todo/TodoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="Pet"
          list={PetList}
          edit={PetEdit}
          create={PetCreate}
          show={PetShow}
        />
        <Resource
          name="Todo"
          list={TodoList}
          edit={TodoEdit}
          create={TodoCreate}
          show={TodoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
