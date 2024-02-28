import React from "react";
export const foo = 7
export const bar = 8

//los datos se pasan como un objeto unico con tantos atributos como queramos
//los arrays son renderizables directamente los objetos no
export default function Header({ datos, foo, bar }) {
    console.log('Props foo bar ---> ', foo, bar)
    console.log('Header props ---> ', datos)
    const { menu, logo, userOptions } = datos
    return (
        <div className='header'>
            <div className='izquierda'>
                <ul>
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M15.85 15.15l-5.27-5.28a6 6 0 10-.71.71l5.28 5.27a.48.48 0 00.7 0 .48.48 0 000-.7zM1 6a5 5 0 115 5 5 5 0 01-5-5z"></path>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <a>{menu[0]}</a>
                    </li>
                    <li>
                        <a>{menu[1]}</a>
                    </li>
                    <li>
                        <a>{menu[2]}</a>
                    </li>
                </ul>
            </div>
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.83 134">
                    <path d="M24.48 95.13c-.56 0-.74-.37-.74-.93l13.08-55.88c.19-.94.93-.94 1.12 0L50.09 94.2c0 .56-.19.93-.75.93zM48.22.19a22.54 22.54 0 01-7.66 5.05c-.75.19-.94.37-1.13 1.12l-26.72 112.5c-2 9-4.67 10.66-11.77 11.22a.88.88 0 00-.94.93v2.06a.88.88 0 00.92.93h25.6a.88.88 0 00.93-.93V131a.88.88 0 00-.93-.93c-9.53 0-10.47-2.81-8.6-10.66l4.49-19.25a1.18 1.18 0 011.12-.93h26.74a1.19 1.19 0 011.13.93l5 23.18c1.12 5-.75 6.17-7.1 6.73a.88.88 0 00-.93.93v2.06a.88.88 0 00.93.93h37.62a.88.88 0 00.94-.93V131a.88.88 0 00-.94-.93c-5.79-.56-8.22-1.5-9.34-6.73L49.34.57c-.19-.56-.75-.75-1.12-.38">
                    </path>
                </svg>
                {logo}
            </div>
            <div className='derecha'>
                <button>{userOptions[0]}</button>
                <button>{userOptions[1]}</button>
            </div>
        </div>
    )
}