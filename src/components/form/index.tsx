import { useState, FormEvent, ChangeEvent } from 'react'
import { Envelope, Eye, EyeClosed } from 'phosphor-react'

import { TextInput } from '../../components/text-input'
import { Text } from '../../components/text'
import { Checkbox } from '../../components/checkbox'
import { Button } from '../../components/button'

export type FormProps = {
  onSubmit: (data:{ email:string, password:string}) => Promise<void>
	isUserSignedIn: boolean
}

export function Form({ onSubmit }: FormProps) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
		
		const [data, setData] = useState({
		  email: '', password: ''
		})

    const togglePasswordVisible = () => {
        setIsPasswordVisible((state) => !state)
    }

		const handleSubmit = (ev:FormEvent<HTMLFormElement>) => {
		  ev.preventDefault()
			onSubmit({ email:'lol', password:'salame'})
		}

		const handleChange = (ev:ChangeEvent<HTMLInputElement>) => {
		  const { name, value } = ev.target
			setData(state => ({
			   ...state,
				 [name]: value
			}))
		}

    return (
		  <form
				className="w-full flex flex-col gap-3"
				onSubmit={handleSubmit}
			>
            <div className="w-full">
                <Text size="large">Email</Text>

                <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope className="text-gray-400" />
                    </TextInput.Icon>
                    <TextInput.Input
										  placeholder="Type your email"
											type="email"
											name="email"
											defaultValue={data.email}
											onChange={handleChange}
										/>
                </TextInput.Root>
            </div>

            <div className="w-full">
                <Text size="large">Email</Text>

                <TextInput.Root>
                    <TextInput.Icon>
                        {isPasswordVisible ? (
                            <Eye className="text-gray-100" onClick={togglePasswordVisible} />
                        ) : (
                            <EyeClosed
                                className="text-gray-400"
                                onClick={togglePasswordVisible}
                            />
                        )}
                    </TextInput.Icon>

                    <TextInput.Input
                        placeholder="Type your password"
                        type={isPasswordVisible ? 'text' : 'password'}
												name="password"
												defaultValue={data.password}
												onChange={handleChange}
                    />
                </TextInput.Root>
            </div>

            <Checkbox>Keep me in for 7 days</Checkbox>

            <Button>Log in</Button>
    </form>
  )
}
