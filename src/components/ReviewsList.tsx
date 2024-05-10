import Review from './Review';

type ReviewData = {
    name: string;
    content: string;
};

type ReviewsListProps = {
    reviews: ReviewData[];
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
    return (
        <ul className='reviews-list'>
            {reviews.map((review, index) => (
                <Review
                    key={index}
                    name={review.name}
                    content={review.content}
                />
            ))}
        </ul>
    );
};
export default ReviewsList;
