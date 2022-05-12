import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';


export default function FeedbackOptions (props){
    const {options,onClickFeedback}=props;

    return options.map((option,index)=>{
        return (
            <FeedbackButton key={index} type="button" 
            onClick={()=>onClickFeedback(option)}>
                {option}
            </FeedbackButton>
        );
    });

}

FeedbackOptions.PropTypes={
    options:PropTypes.arrayOf(PropTypes.string.isRequired),
    onClickFeedback:PropTypes.func.isRequired,
};
