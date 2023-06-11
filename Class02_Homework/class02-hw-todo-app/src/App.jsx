import "./App.css";
import TodoPage from "./Pages/TodoPage/TodoPage";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";

function App() {
  const appTitle = "Todo App";

  return (
    <div className="TodoApp">
      <Header appTitle={appTitle} />
      <main>
        <TodoPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
