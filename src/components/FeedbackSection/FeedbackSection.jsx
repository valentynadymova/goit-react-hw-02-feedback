import PropTypes from 'prop-types';
import { SectionStyle, Title } from './FeedbackSection.styled';

export default function FeedbackSection (props){
    const {title,children}=props;
    return (
        <SectionStyle>
            <Title>{title}</Title>
            {children}
        </SectionStyle>

    )
}

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};