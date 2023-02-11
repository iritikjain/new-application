import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';

const CourseList = () => {
  const {products} = useCoursesContext();

  return (
    <ProductsListWrapper>
      <div className='container'>
        <Tabs products = {products} />
      </div>
    </ProductsListWrapper>
  )
}

const ProductsListWrapper = styled.div`
  padding: 100px 0 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList