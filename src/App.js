import { GearIcon } from "./components/GearIcon"
import { Header } from "./components/Header"
import { GlobalStyles } from "./styles/GlobalStyles"

export const App = () => {
  return(
    <>
      <GlobalStyles />
        <Header>
          <GearIcon />
        </Header>
        <GearIcon />
    </>
  )
}