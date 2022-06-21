import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
          <img src={aboutImg} alt="img" />
          <article>
            <div className="title">
              <h2>Our story</h2>
              <div className="underline"></div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus neque quasi facere soluta mollitia vero voluptas delectus! Quasi harum pariatur perferendis ut, doloremque doloribus est, eligendi cum maxime laboriosam porro dolores aliquid numquam sunt corrupti. Quia tempora sint at molestias deserunt! Similique illo iusto molestias temporibus culpa explicabo a doloremque.
            </p>
          </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
