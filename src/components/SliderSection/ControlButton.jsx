import * as S from './style';

function ControlButton({ direction, onClick }) {
    return (
        <S.ControlButton onClick={onClick}>
            {direction === 'left' ? (
                <svg width="57" height="18" viewBox="0 0 57 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.808 17L2 9M2 9L10.808 0.999996M2 9L56 9" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            ) : direction === 'right' ? (
                <svg width="57" height="18" viewBox="0 0 57 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.192 0.999992L55 8.99999M55 8.99999L46.192 17M55 8.99999L1 9" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
            ) : null}
        </S.ControlButton>
    )
}

export default ControlButton;