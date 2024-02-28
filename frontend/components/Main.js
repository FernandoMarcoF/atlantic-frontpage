import React from 'react'
import Card from './Card'

export default function Main({
    mainArticles,
    secondaryArticles,
    asideArticles,
}) {
    console.log(mainArticles, secondaryArticles, asideArticles)
    return (
        <div className='main'>
            <div className='main-up'>
                <div className='main-up-left'>izquierda</div>
                <div className='main-up-center'>articulon</div>
                <div className='main-up-right'>articulitos</div>
            </div>
            <div className='main-down'>
                {secondaryArticles.map(article => {
                    return (<Card article={article} key={article.title}></Card>)
                })}
            </div>
        </div>
    )
}
