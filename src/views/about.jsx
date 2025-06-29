/* eslint-disable no-useless-concat */
import { useState } from 'react';
import cn from 'classnames';

export const About = () => {
    const initalTabs = [
        {
            name: 'bio',
            content: `Профильного технического образования у меня нет :( <br>
                    Но это не мешает мне хорошо реализовываться в любимой профессии. <br>
                    4 года работаю фронтенд-разработчиком, есть опыт работы с легаси-кодом. <br/>
                    Актуальный стек Vue3/Nuxt3/TS. <br/>
                    Год была ментором по направлению Frontend-разработка на стеке vuejs в Asap Education. <br/>
                    Параллельно изучаю React, Node.js (Nest) для бэкенд-разработки. <br/>
                    Стремлюсь к постоянному саморазвитию в сфере веб-разработки и написанию чистого, качественного и понятного кода.`
        },        
        {
            name: 'interests',
            content: `Обожаю котиков.<br/>
                    Обожаю спамить в чаты котиками. <br/>
                    Главное хобби - кодить и изучать что-то новое.<br/>
                    В свободное время люблю готовить, заниматься фитнесом, играть в настольные игры с друзьями, путешествовать. <br/>`
        },        
        {
            name: 'education',
            content: `В 2021 году закончила Юридический институт Томского Государственного университета, получила диплом бакалавра. <br/>
                    Получила диплом доп.образования - ФИЯ ТГУ, Переводчик в сфере профессиональной коммуникации (немецкий). <br/>
                    Прошла стажировку в Smart Академии от IT-компании Smart World в должности Frontend-разработчика, где совместно с командой реализовала проект - менеджер паролей с шифрованием данных на клиенте.`
        },
    ]
    const [tabs]  = useState(initalTabs)
    const [active, setActive]  = useState(0)

    const changeActive = (a) => {
        setActive(a)
    }

    // const text = useRef()
    // useEffect(() => {
    //     console.log(addClientRectsOverlay(text.current))
    // }, [])

    const tabsButtons = tabs.map((item, key) => 
        <div className={cn("default-item nav-item", {active: key === active})} key={key} onClick={() => changeActive(key)}> 
            <i className={cn("ri-folder-3-fill", item.name)}></i> {item.name}
        </div>
    )

    const tabsContent = tabs.map((item, key) => 
        <span key={key} dangerouslySetInnerHTML={{__html: item.content}}> 
        </span>
    )

    return (
        <main className="main-default about">
            <div className="container-grid">
                <aside className="aside">
                    <div className="default-item aside-head">
                        <i className="ri-arrow-down-s-fill"></i>
                        personal-info
                    </div>
                    <div className="default-item-content">
                        {tabsButtons}
                    </div>
                    <div className="default-item aside-head">
                        <i className="ri-arrow-down-s-fill"></i>
                        contacts
                    </div>
                    <div className="default-item-content">
                        <a href="mailto:kotfimn@mail.ru" target="_blank" className="default-item nav-item" rel="noreferrer">
                            <i className="ri-mail-fill"></i>  kotfimn@mail.ru
                        </a>
                    </div>
                </aside>
                <div className="content">
                    {tabsContent[active]}
                </div>

                <div className="content"></div>
            </div>
        </main>
    )
}
