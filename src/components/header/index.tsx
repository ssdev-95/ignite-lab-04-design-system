import { Heading } from '../heading'
import { Text } from '../text'

export function Header() {
  return (
	  <header
		  className="flex flex-col gap-3 items-center"
		>
		  <img
			  className="h-[100px] w-[100px]"
			  src="/dest.png"
				alt=""
			/>

			<Heading size="large">
			  Ignaito
				<span className="text-green-400">|</span>
				<strong className="font-bold">Lab</strong>
			</Heading>

			<Text asChild size="small">
  			<p className="-mt-3">
	  		  Log in and let's go codar
		  	</p>
			</Text>
		</header>
	)
}
