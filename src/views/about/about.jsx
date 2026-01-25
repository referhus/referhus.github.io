/* eslint-disable no-useless-concat */
import { useState } from 'react';
import cn from 'classnames';
import { about } from '../../components/modules/about/about'
import { Collapsible } from '../../components/shared/collapsible/component'
import { TgIcon } from '../../components/shared/icons/component'

import './style.sass'

export const About = () => {
    const [tabs]  = useState(about)
    const [active, setActive]  = useState(0)

    const changeActive = (a) => {
        setActive(a)
    }

    const tabsButtons = tabs.map((item, key) => 
        <div className={cn(
          "default-item nav-item",
          {active: key === active})}
             key={key} onClick={() => changeActive(key)}
        >
            <i className={cn("ri-folder-3-fill", item.name)}></i> {item.name}
        </div>
    )

    const tabsContent = tabs.map((item, key) => 
        <span key={key} dangerouslySetInnerHTML={{__html: item.content}}> 
        </span>
    )

    return (
        <main className="main-default about">
            <div className="main-default__title default-item">
              _about-me
            </div>
            <div className="container-grid cols-3">
              <aside className="aside">
                <Collapsible title="personal-info">
                  {tabsButtons}
                </Collapsible>
                <Collapsible title="contacts">
                  <a
                    href="mailto:kotfimn@mail.ru"
                    target="_blank"
                    className="default-item nav-item"
                    rel="noreferrer"
                  >
                    <i className="ri-mail-fill"></i>  kotfimn@mail.ru
                  </a>
                  <a
                    href="https://t.me/referhus"
                    target="_blank"
                    className="default-item nav-item"
                    rel="noreferrer"
                  >
                    <TgIcon /> t.me/referhus
                  </a>
                </Collapsible>
              </aside>
              <div className="content">
                  {tabsContent[active]}
              </div>
            </div>
        </main>
    )
}
