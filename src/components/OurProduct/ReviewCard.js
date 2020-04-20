import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../device';
import { Flex, P } from '../../styles';

const ReviewCard = (props) => {
    return (
        <SectionContainer className="col-xs-12 col-md-6">
            <Stars>
                <Star icon='star' />
                <Star icon='star' />
                <Star icon='star' />
                <Star icon='star' />
            </Stars>
            <ReviewText>“{props.customerReview}”</ReviewText>
            <ReviewName>- {props.customerName}</ReviewName>
        </SectionContainer>

    );
};

// Styles
const SectionContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 0px;
    text-align: center;
    @media ${device.tablet} {
        padding-top: 50px;
    }
`;

const Stars = styled(Flex)`
    max-width: 200px;
    margin: 0 auto;
    padding-bottom: 10px;
`;

const Star = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #FDC16E;
`;

const ReviewText = styled(P)`
    color: #0C1527;
    font-size: 20px;
    line-height: 140%;
    padding: 20px 20px 0px 20px;
    @media ${device.tablet} {
        padding-top: 10px;
        font-size: 16px;
        line-height: 26px;
    }
`

const ReviewName = styled(P)`
    color: #004669;
    font-size: 20px;;
    line-height: 140%;
    font-family: Calistoga;
    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
    }
`

export default ReviewCard;
