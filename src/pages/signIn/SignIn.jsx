import React, {useState} from 'react';
import {Button, Header, Input} from "../../component";

const SignIn = () => {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    const arr = [
        {
            id: 1,
            htmlFor: 'email',
            placeholder: 'Enter Email',
            type: 'text',
            classStyle: 'form-control',
            label: 'Email',
            iconName: 'apple',
            labelColor: 'primary',
            labelSize: 'width: 8rem;',
            name: 'email',
            required: '*',
            value,
            change: setValue,
        },
        {
            id: 2,
            iconName: 'apple',
            labelColor: 'primary',
            labelSize: 'width: 8rem;',
            htmlFor: 'password',
            placeholder: 'Enter Password',
            type: 'password',
            required: '*',
            classStyle: 'form-control',
            label: 'Password',
            name: 'password',
            value: password,
            change: setPassword
        }
    ];

    const inputArr = arr.map(i => {

        return (
            <Input
                key={i.id}
                iconColor={i.iconColor}
                marginBottom={'3'}
                labelColor={i.labelColor}
                labelSize={i.labelSize}
                htmlFor={i.htmlFor}
                placeholder={i.placeholder}
                id={i.id}
                iconName={i.iconName}
                value={i.value}
                change={i.change}
                type={i.type}
                classStyle={i.classStyle}
                name={i.name}
                label={i.label}
                required={i.required}
                icon={i.icon}
            />
        );
    });

    return (
        <>
            <Header
                color="primary"
                pacity="75"
                transform="uppercase"
                name="Sign In"
            />
            {inputArr}
            <Button disabled={false}
                    type="outline"
                    color="secondary"
                    size="lg"
                    name="Sign In"
                    navLink="/table"
            />
        </>
    );
};

export default SignIn;