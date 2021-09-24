/* eslint-disable */ 

import slick from 'slick-carousel';
import $ from 'jquery';

const teamMembersConfig = {
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const reviewsConfig = {
  arrows: true,
  prevArrow: $('.reviews-controls__prev'),
  nextArrow: $('.reviews-controls__next'),
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
};

const sponsorsConfig = {
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        prevArrow: $('.sponsors-prev'),
        nextArrow: $('.sponsors-next'),
        slidesToShow: 4,
      },
    },
  ],
};

$('.team-members-slider').slick(teamMembersConfig);
$('.reviews-slider').slick(reviewsConfig);
$('.sponsors-slider').slick(sponsorsConfig);
