'use client'

import classes from '@/Page.module.css'
import Alerts from '@/components/Alerts'
import BackToTop from '@/components/BackTopTop'
import CurrentConditions from '@/components/CurrentConditions'
import Footer from '@/components/Footer'
import Forecast from '@/components/Forecast'
import Header from '@/components/Header'
import Search from '@/components/Search'
import {useWeatherContext} from '@/components/WeatherProvider'
import {LoadingOverlay} from '@mantine/core'

/**
 * Home page component.
 */
export default function HomePage() {
  const {isLoading} = useWeatherContext()

  return (
    <>
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{radius: 'sm', blur: 1}}
      />
      <div className={classes.container}>
        <Header />
        <main className={classes.main}>
          {!isLoading && (
            <>
              <div className={classes.search}>
                <Search />
              </div>
              <CurrentConditions />
              <Forecast />
              <Alerts />
            </>
          )}
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
