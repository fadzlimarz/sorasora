'use client'

import classes from '@/components/Settings.module.css'
import {useWeatherContext} from '@/components/WeatherProvider'
import {
  ActionIcon,
  Flex,
  Modal,
  Stack,
  Switch,
  useMantineColorScheme
} from '@mantine/core'
import {useDisclosure, useHotkeys} from '@mantine/hooks'
import {IconSettings} from '@tabler/icons-react'
import {useState} from 'react'

/**
 * Settings component.
 */
export default function Settings() {
  const [opened, {open, close}] = useDisclosure(false)
  const {colorScheme, toggleColorScheme} = useMantineColorScheme()
  const {tempUnit, setTempUnit} = useWeatherContext()
  const [checked, setChecked] = useState(tempUnit === 'f' ? true : false)

  function toggleTempUnit() {
    setChecked(!checked)
    setTempUnit(checked ? 'c' : 'f')
  }

  useHotkeys([['mod+u', () => toggleTempUnit()]])

  return (
    <>
      <ActionIcon
        aria-label="open settings"
        className={classes.settings}
        onClick={open}
        size="lg"
        variant="transparent"
      >
        <IconSettings size={48} />
      </ActionIcon>
      <Modal
        closeButtonProps={{'aria-label': 'close settings'}}
        onClose={close}
        opened={opened}
        padding="xl"
        title="Settings"
      >
        <Stack justify="space-between">
          <Switch
            aria-label="Toggle between light and theme."
            label="Dark Theme (⌘+J)"
            checked={colorScheme === 'dark'}
            offLabel="OFF"
            onChange={() => toggleColorScheme()}
            onLabel="ON"
            size="lg"
          />
          <Switch
            aria-label="Toggle between Fahrenheit and Celsius"
            label="Fahrenheit (⌘+U)"
            checked={checked}
            offLabel="OFF"
            onChange={() => toggleTempUnit()}
            onLabel="ON"
            size="lg"
          />
          <Flex
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          ></Flex>
        </Stack>
      </Modal>
    </>
  )
}
