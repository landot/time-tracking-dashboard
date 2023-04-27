import { Text, CategoryHeader, HourHeader } from '../assets/styles/SharedStyledComponents';
import { TimeframeText } from '../assets/data/timeframes';
import { categories, Categories } from '../assets/data/categories';
import '../assets/styles/Category.css';

export interface ICategory {
    category: string;
    timeframe: string;
    currentTime: number;
    lastTime: number; 
  }

export default function Category(props: ICategory) {
    return (
        <div className='category-summary'>
            <div className='details-overlay' style={{
                backgroundColor: categories[Categories[props.category as keyof typeof Categories]].backgroundColor
            }}>
                <img className='category-icon' src={categories[Categories[props.category as keyof typeof Categories]].svgIcon} alt={`${props.category} icon`}/>
            </div>
            <div className='details-card'>
                <CategoryHeader>{props.category}</CategoryHeader>
                <div className='details-previous'>
                    <HourHeader>{props.currentTime}hrs</HourHeader>
                    <Text>{TimeframeText[props.timeframe as keyof typeof TimeframeText]} - {props.lastTime}hrs</Text>
                </div>
            </div>
        </div>
    )
}
