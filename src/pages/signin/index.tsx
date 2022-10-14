import { useState } from 'react'
import axios from 'axios'

import { Form } from '../../components/form'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Text } from '../../components/text'

export type SigninProps = any

interface Data {
  email:string
	password:string
}

export function Signin(_props: SigninProps) {
		const [isUserSignedIn, setIsUserSignedIn] = useState(false)

		const handleSignIn = async (data:Data) => {
			await axios.post('/auth', data)

			setIsUserSignedIn(true)
		}

    return (
		  <main className="flex flex-col gap-10 w-[400px] max-w-[90vw]">
			  <Header />

				{isUserSignedIn && (
				  <Text>Login successfull!</Text>
				)}

        <Form
				  isUserSignedIn={isUserSignedIn}
					onSubmit={handleSignIn}
				/>
				<Footer />
			</main>
    )
}
