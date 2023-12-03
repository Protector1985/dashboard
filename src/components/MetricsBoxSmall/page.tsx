import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import css from './styles/metricsbox.module.css'
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

interface MetricsInput {
    name: string,
    Logo: IconType,
    bg: number,
    percentage: number,
    metric: number,
}


const MetricsBoxSmall:React.FC<MetricsInput> = ({name, Logo, bg, percentage, metric})=> {
    const [logoBackground, setLogoBackground] = React.useState<string>();
    const [trendVelocity, setTrendVelocity] = React.useState<string>("UP")

    useEffect(() => {

        switch(bg) {
            case 1:
                //red
                setLogoBackground(() => "rgb(240, 68, 56)")
                break;
            case 2: 
                //green
                setLogoBackground(() => "rgb(16, 185, 129)")
                break;
            case 3:
                //orange
                setLogoBackground(() => "rgb(247, 144, 9)")
                break;
            case 4:
                //purple
                setLogoBackground(() => "rgb(99, 102, 241)")
                
        }

    }, [bg])


    return (
        <div className={css.wrapper}>
            <p className={css.headline}>{name}</p>
            <div style={{backgroundColor: logoBackground}} className={css.logoContainer}>
                <Logo />
            </div>
            <h1 className={css.metric}>{metric}</h1>
            <div className={css.trendContainer}>
                <p style={trendVelocity === "UP" ? {color: "rgb(16, 185, 129)"} : {color: "rgb(240, 68, 56)"}} className={css.trendPercent}>{percentage}</p>
                {trendVelocity === "UP" ? <IoIosArrowRoundUp className={css.arrow} color="rgb(16, 185, 129)" /> : <IoIosArrowRoundDown className={css.arrow} color="rgb(240, 68, 56)" />}
                <p className={css.lastMonthParagraph}>Since last month</p>
            </div>
        </div>
    )
}

export default MetricsBoxSmall