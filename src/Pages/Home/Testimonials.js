import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more.',
            name: "Assaduzzaman",
            country: "Bangladesh"
        },
        {
            id: 2,
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            name: "Amelia",
            country: "Canada"

        },
        {
            id: 3,
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content.',
            name: "Sophia",
            country: "California"
        }
    ]
    return (
        <section className='my-28 px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary text-bold">Testimonials</h4>
                    <h4 className="text-3xl">What our Patient say</h4>
                </div>

                <div>
                    <img className='lg:w-24 w-16 ' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-10 flex justify-center'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;