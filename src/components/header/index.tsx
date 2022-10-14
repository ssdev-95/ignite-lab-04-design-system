import { Heading } from '../heading'
import { Text } from '../text'

import DestImg from '../../assets/dest.png'

export type HeaderProps = any

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-col gap-3 items-center" {...props}>
      <img className="h-[100px] w-[100px]" src={DestImg} alt="" />

      <Heading size="large">
        Ignaito
        <span className="text-green-400">|</span>
        <strong className="font-bold">Lab</strong>
      </Heading>

      <Text asChild size="medium">
        <p className="-mt-3">Log in and let's go codar</p>
      </Text>
    </header>
  )
}
