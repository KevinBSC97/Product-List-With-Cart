import { CardsContainer } from "./components/cards-container"
import { Cart } from "./components/cart"
import { CartConfirmation } from "./components/cart-confirmation"

function App() {
  return (
    <main className="flex justify-center">
      <section className="my-6">
        <h1 className="text-[2.5rem] font-bold mb-[30px]">Desserts</h1>
        <div className="desktop:flex desktop:gap-8 desktop:items-start">
          <CardsContainer />
          <Cart />
        </div>
      </section>
      <CartConfirmation />
    </main>
  )
}

export default App
