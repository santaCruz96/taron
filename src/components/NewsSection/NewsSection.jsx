import img from '../../img/news.jpg';
import * as S from './style';

function NewsSection() {
    return (
        <S.NewsSection>
            <S.NewsHeader>
                News & Facts
            </S.NewsHeader>
            <S.NewsPhotoWrapper>
                <S.NewsPhotoContainer>
                    <S.NewsPhotoImage src={img} alt="News Photo"/>
                    <S.NewsPhotoContent>
                        <S.NewsPhotoTitle>
                            Don’t miss Harvest
                            <br />
                            Month in Napa Valley!
                        </S.NewsPhotoTitle>
                    </S.NewsPhotoContent>
                </S.NewsPhotoContainer>
            </S.NewsPhotoWrapper>
            <S.NewsText>
                There’s no better time to visit Napa & Sonoma Valley than the fall harvest season when grapes are ripe, temperatures are comfortable and autumnal foliage is the most colorful. The region is abuzz with grape-picking activity for crush and winemaking. Don't miss it!
            </S.NewsText>
        </S.NewsSection>
    )
}

export default NewsSection;