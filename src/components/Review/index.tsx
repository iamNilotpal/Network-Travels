import React, { useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  View,
  TouchableOpacity,
} from 'react-native';

import { COLORS, Icons } from '../../constants';
import PrimaryButton from '../common/Button/PrimaryButton';
import BodyRegular from '../common/Text/Body/BodyRegular';
import TextInput from '../common/TextInput';
import styles from './styles';

const RatingEmojis = [
  { Emoji: Icons.angryEmoji, value: 'AngryEmoji', color: 'red' },
  { Emoji: Icons.sadEmoji, value: 'SadEmoji', color: 'orange' },
  { Emoji: Icons.goodEmoji, value: 'GoodEmoji', color: 'yellow' },
  { Emoji: Icons.happyEmoji, value: 'HappyEmoji', color: 'lightgreen' },
  { Emoji: Icons.veryHappyEmoji, value: 'VeryHappyEmoji', color: 'skyblue' },
];

type Emoji = typeof RatingEmojis[0];
type Question = typeof RatingQuestions[0];
export type ReviewType = {
  question: { id: number; title: string };
  reaction: string;
};

const RatingQuestions = [
  { id: 1, question: 'Booking experience' },
  { id: 2, question: 'Bus quality' },
  { id: 3, question: 'Bus crew quality' },
  { id: 4, question: 'Rest-stop experience' },
];

type ReviewProps = {
  onReviewSubmit: (review: { reactions: ReviewType[]; review: string }) => void;
};

const Review: React.FC<ReviewProps> = ({ onReviewSubmit }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [review, setReview] = useState('');

  const handleReviewSelect = (emoji: Emoji, question: Question) => {
    const exist = reviews.find(review => review.question.id === question.id);

    if (!exist) {
      const newReview: ReviewType = {
        question: { id: question.id, title: question.question },
        reaction: emoji.value,
      };
      return setReviews(prevReviews => [...prevReviews, newReview]);
    }

    const filteredReviews = reviews.filter(r => r.question.id !== question.id);
    const modifiedReview: ReviewType = { ...exist, reaction: emoji.value };
    return setReviews([...filteredReviews, modifiedReview]);
  };

  return (
    <View style={styles.container}>
      {RatingQuestions.map(q => (
        <View
          key={q.id}
          style={[styles.commonStyles, styles.questionContainer]}>
          <BodyRegular text={q.question} />
          <View style={[styles.commonStyles, styles.emojiContainer]}>
            {RatingEmojis.map((e, i) => {
              const review = reviews.find(r => r.question.id === q.id);
              return (
                <TouchableOpacity
                  key={e.value}
                  onPress={() => handleReviewSelect(e, q)}
                  style={{
                    marginRight: i === RatingEmojis.length - 1 ? 0 : 10,
                  }}>
                  <Image
                    source={e.Emoji as ImageSourcePropType}
                    style={{
                      backgroundColor:
                        review?.reaction === e.value ? e.color : 'transparent',
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}
      <TextInput
        placeholder="Comment if any"
        inputStyles={{
          width: '101%',
          height: 140,
          backgroundColor: COLORS.lightGray2,
          paddingLeft: 8,
          marginTop: 10,
        }}
        value={review}
        onChangeText={text => setReview(text)}
      />
      <PrimaryButton
        text="SUBMIT"
        onPress={() => onReviewSubmit({ reactions: reviews, review })}
        btnStyles={{ marginTop: 25 }}
      />
    </View>
  );
};

export default Review;
