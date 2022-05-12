import styled from '@emotion/styled'

export const FeedbackButton=styled.button`
padding: 0 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  :not(:last-child) {
    margin-right: 15px;
  }
  :hover {
    border: 3px solid pink;
    font-weight: 700;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`