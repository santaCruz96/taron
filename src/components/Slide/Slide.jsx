import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

function Slide({
    imageSrc,
    title,
    tags,
    description,
    second,
    third
}) {
    const [isHovered, setIsHovered] = useState(false)
    const hasTags = tags && tags.length > 0

    return (
        <S.SlideItemWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <S.SlideItemContainer isHovered={isHovered} third={third}>
                <S.SlideImage src={imageSrc} alt="Slide" isHovered={isHovered} />
                <S.SlideContent isHovered={isHovered} hasTags={hasTags}>
                    <S.SlideTitle second={second} third={third}>
                        {Array.isArray(title)
                        ? title.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                            ))
                        : title}
                    </S.SlideTitle>
                    {hasTags && (
                    <S.Tags isHovered={isHovered}>
                        {tags.map((tag, index) => (
                        <S.Tag key={index}>{tag}</S.Tag>
                        ))}
                    </S.Tags>
                    )}
                </S.SlideContent>
            </S.SlideItemContainer>
            <S.Description third={third} isHovered={isHovered}>{description}</S.Description>
        </S.SlideItemWrapper>
    );
}

Slide.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.arrayOf(PropTypes.string).isRequired, 
    description: PropTypes.string.isRequired, 
    tags: PropTypes.array,
    third: PropTypes.bool
};

export default Slide;