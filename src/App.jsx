import './App.css'
import ColorRenderer from './01-color-renderer/ColorRenderer'
import DarkMode from './02-dark-mode/DarkMode'
import FormValidator from './03-form-validator/FormValidator'
import DadJokes from './04-dog-pics/DogPics'
import ScoreKeeper from './05-scope-keeper/ScoreKeeper'
import ToggleWindowEvent from './06-add-window-event/ToggleWindowEvent'
import ColorPicker from './07-color-picker/ColorPicker'
import PixelArt from './08-pixel-art/PixelArt'
import SimpleCalculator from './09-simple-calculator/SimpleCalculator'
import FocusInput from './10-focus-input/FocusInput'
import ShoppingCart from './11-shopping-cart/ShoppingCart'
import ObjProps from './12-hooks/01-Desestruturacao'
import UseState from './12-hooks/02-UseState'
import CheckBox from './12-hooks/03-CheckBox'
import Componente from './12-hooks/04-ComponentTrees'

function App() {
  return (
    <div className="App">
      <FocusInput />
      <ToggleWindowEvent />
      <DadJokes />
      <ColorRenderer />
      <DarkMode />
      <FormValidator />
      <ScoreKeeper />
      <ColorPicker />
      <PixelArt />
      <SimpleCalculator />
      <ShoppingCart />
      <ObjProps name='Fábio' />
      <UseState />
      <CheckBox />
      <Componente />
    </div>
  )
}

export default App
