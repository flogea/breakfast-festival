import { useState } from "react";
import style from './App.module.scss'

import { restorans } from './restorans'
import { Button, Card, Line } from "./components";

export type Menu = {
  name: string,
  price: number,
}

export type CardProps = {
  name?: string;
  img?: string;
  isEmpty?: boolean;
  menu?: Menu[];
}

function App() {
  const [choosen, setChoosen] = useState<CardProps | null>(null)
  const [сhosen, setChosen] = useState('')

  const chooseRandomRestaurant = () => {
    const rest = JSON.parse(localStorage.getItem('rest') || '""')
    if (rest) {
      return rest[Math.floor(Math.random() * rest.length)]
    } else {
      return restorans[Math.floor(Math.random() * restorans.length)]
    }
  }

  const chooseThePlace = () => {
    let restaurant = chooseRandomRestaurant()

    if (choosen) {
      while (restaurant.name === choosen.name) {
        restaurant = chooseRandomRestaurant();
      }
      setChoosen(restaurant);
    }
    setChoosen(restaurant);
  }

  const goToPlace = () => {
    const rest: CardProps[] = JSON.parse(localStorage.getItem('rest') || '""')
    if (rest) {
      localStorage.setItem('rest', JSON.stringify(rest.filter((place) => place.name !== choosen?.name)))
    } else {
      localStorage.setItem('rest', JSON.stringify(restorans.filter((place) => place.name !== choosen?.name)))
    }
    setChosen('Отлично! Вы выбрали ресторан')
    setTimeout(() => [
      setChosen('')
    ], 3000)
    setChoosen(null)
  }


  return (
    <div className={style.wrapper}>
      <Line />
      <div className={style.app}>
        {сhosen && <span>{сhosen}</span>}
        {!choosen && <Card isEmpty />}
        {choosen && <Card name={choosen.name} menu={choosen.menu} img={choosen.img} />}
        <div className={style.buttons}>
          {choosen && <Button text='Выбрать другой' style="outline" onClick={chooseThePlace} />}
          {choosen && <Button text='Пойду' style="primary" onClick={goToPlace} />}
          {!choosen && <Button text='Выбрать ресторан' style="primary" onClick={chooseThePlace} />}
        </div>
      </div>
    </div>
  );
}

export default App;
