import { View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import OtherHeader from '../../components/Header/OtherHeader';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import { Images } from '../../constants';
import styles from './styles';
import BodyRegular from '../../components/common/Text/Body/BodyRegular';
import Review, { ReviewType } from '../../components/Review';

const RateAndReviewScreen = () => {
  const handleReviewSubmit = (review: {
    reactions: ReviewType[];
    review: string;
  }) => {
    console.log(review);
  };

  return (
    <>
      <OtherHeader text="Rate & review">
        <ArrowLeft />
      </OtherHeader>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={Images.rating as ImageSourcePropType}
            style={{ width: '100%', height: '100%' }}
          />
          <BodyRegular
            text="We would like to know how was your experience"
            textStyles={{
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 17,
              textAlign: 'center',
              marginTop: 15,
            }}
          />
        </View>
        <Review onReviewSubmit={handleReviewSubmit} />
      </View>
    </>
  );
};

export default RateAndReviewScreen;
