import { useState, FormHTMLAttributes } from 'react'
import { Envelope, Eye, EyeClosed } from 'phosphor-react'

import { TextInput } from '../text-input'
import { Text } from '../text'
import { Checkbox } from '../checkbox'
import { Button } from '../button'

export type FormProps = FormHTMLAttributes<HTMLFormElement>

export function Form(props: FormProps) {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisible = () => {
        setShowPassword((state) => !state)
    }

    return (
        <form className="w-[400px] max-w-[90vw] flex flex-col gap-3" {...props}>
            <div className="w-full">
                <Text size="large">Email</Text>

                <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope className="text-gray-400" />
                    </TextInput.Icon>
                    <TextInput.Input placeholder="salompas_senpai@lab.dev" type="email" />
                </TextInput.Root>
            </div>

            <div className="w-full">
                <Text size="large">Email</Text>

                <TextInput.Root>
                    <TextInput.Icon>
                        {showPassword ? (
                            <Eye className="text-gray-100" onClick={togglePasswordVisible} />
                        ) : (
                            <EyeClosed
                                className="text-gray-400"
                                onClick={togglePasswordVisible}
                            />
                        )}
                    </TextInput.Icon>

                    <TextInput.Input
                        placeholder="*********"
                        type={showPassword ? 'text' : 'password'}
                    />
                </TextInput.Root>
            </div>

            <Checkbox>Keep me in for 7 days</Checkbox>

            <Button>Log in</Button>
        </form>
    )
}
