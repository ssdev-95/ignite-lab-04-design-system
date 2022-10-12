export function Headings() {
  return (
	  <header className="flex flex-col gap-3 items-center">
		  <img
			  className="h-[100px] w-[100px]"
			  src="/dest.png"
				alt=""
			/>

			<h1
			  className="text-gray-100 text-xl font-regular flex items-center gap-2"
			>
			  Ignaito
				<span className="text-green-400">|</span>
				<strong className="font-bold">Lab</strong>
			</h1>

			<p className="text-gray-400 text-md -mt-3">
			  Log in and let's go codar
			</p>
		</header>
	)
}
