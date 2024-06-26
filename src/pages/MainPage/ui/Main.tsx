import { Counter } from 'entities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const {t} = useTranslation('main')
  return (
    <div>
      {t('Главная страница')}
      <Counter />
    </div>
  )
}

export default Main
