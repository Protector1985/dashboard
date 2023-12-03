import React from 'react';
import { FaChartPie } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import css from './styles/withmenu.module.css'

function withMenu(WrappedComponent:React.FC) {
    const WithAuthComponent:React.FC = (props) => {

        return (
            <div className={css.wrapper}>
                <div className={css.sideBar}>
                    <div className={css.sidebarHeader}>

                    </div>
                    <div className={css.sidebarBody}>
                        <div className={css.mainHoldingContainer}>
                            <div className={css.linkContainer}>
                                <FaChartPie className={css.linkIcon} />
                                <a className={css.aTag} href="/">Overview</a>
                            </div>

                            <div className={css.linkContainer}>
                                <FaMessage className={css.linkIcon} />
                                <a className={css.aTag} href="/conversation_history">History</a>
                            </div>
                            
                        </div>
           
                    </div>

                    <div className={css.sidebarFooter}>

                    </div>
                    

                </div>
                <WrappedComponent {...props} />
            </div>
        )
    }

    return WithAuthComponent
}

export default withMenu;