import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { EMPTY_MAP } from '../../common/constants';
import styles from './BookCarousel.module.scss';
import capitalize from '../../helpers/common';
import CarouselBookCard from '../Loader/CarouselBookCard/CarouselBookCard';
import Title from '../TextElements/Title';

const titleHelper = (title) => {
  const lowerTitle = title.toLowerCase();
  return capitalize(lowerTitle);
};

/**
 * Componet responsible for renderiong the
 * carousellwith all the best seller books
 * @param bestSellerBooks
 * @returns {*}
 * @constructor
 */
// eslint-disable-next-line react/prefer-stateless-function,no-unused-vars,react/prop-types
const BookSlider = ({ bestSellerBooks }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { books } = bestSellerBooks;

  return (
    <div>
      <div className={styles.TitlePadding}>
        <Title title="New York Times best seller books" tag="h3" align="center" />
      </div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {
          books && books.map((book) => {
            const {
              title, book_image, author, buy_links,
            } = book;
            return (
              <CarouselBookCard
                style={styles.ElementSpacing}
                title={titleHelper(title)}
                image={book_image}
                authors={author}
                buyLinks={buy_links}
              />
            );
          })
        }
      </Slider>
    </div>
  );
};

BookSlider.defaultProps = {
  bestSellerBooks: EMPTY_MAP,
};
BookSlider.propTypes = {
  bestSellerBooks: PropTypes.shape(),
};

export default BookSlider;
