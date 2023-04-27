import { Text, Header, StyledButton } from '../assets/styles/SharedStyledComponents';
import profileImage from '../assets/images/image-jeremy.png';
import '../assets/styles/Summary.css';
import { TimeframeText } from '../assets/data/timeframes';


type SummaryProps = {
    activeTimeframe: string,
    handleTimeframeUpdate: (timeframe: string) => void;
}

export default function Summary({handleTimeframeUpdate, activeTimeframe}: SummaryProps) {
    return (
        <div className='summary-card'>
            <div className='card-profile'>
                <img src={profileImage} alt="jeremy-image"/>
                <div className='card-profile-text'>
                    <Text>Report for</Text>
                    <Header>Jeremy Robson</Header>
                </div>
            </div>
            <div className='card-filters'>
                {Object.keys(TimeframeText).map(timeframe => {
                    return <StyledButton key={timeframe} active={activeTimeframe === timeframe} onClick={() => handleTimeframeUpdate(timeframe)}>{timeframe}</StyledButton>
                })}
            </div>
        </div>

    )
}
