import React, {useState} from 'react';
import './RegistrationPage.css';
import {Button, Header, Input} from "../../component";

const RegistrationPage = () => {

    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const array = [
        {
            id: 1,
            htmlFor: 'email',
            placeholder: 'Enter Email',
            type: 'text',
            classStyle: 'form-control',
            label: 'Email',
            labelColor: 'primary',
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
        },
        {
            id: 3,
            iconName: 'apple',
            required: '*',
            labelColor: 'primary',
            labelSize: 'width: 8rem;',
            htmlFor: 'repeatPassword',
            placeholder: 'Repeat Password',
            type: 'password',
            classStyle: 'form-control',
            label: 'Repeat Password',
            name: 'repeatPassword',
            value: repeatPassword,
            change: setRepeatPassword
        },

    ];

    const inputArr = array.map(i => {

        return (
            <Input
                key={i.id}
                marginBottom={'3'}
                iconColor={i.iconColor}
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
        <div className="sign-up">
            <Header
                color="primary"
                opacity="75"
                size="1"
                transform="uppercase"
                name="Registration"
            />
            {inputArr}
            <Button
                disabled={false}
                type="outline"
                color="secondary"
                size="lg"
                name="Register"
                navLink="/sign-in"
            />
        </div>
    );
};

export default RegistrationPage;
