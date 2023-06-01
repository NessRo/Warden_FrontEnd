import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledBottomNavBarButton = styled(Button)`
  background-color: transparent;
  color: white;
  border-color: white;
  font-size: 1rem;
  width: 150px;

 

  &:hover {
    background-color: white;
    border-color: white;
    color: black;
  }

  &:active {
    background-color: white;
    border-color: white;
  }

  
  &:focus {
    background-color: transparent;
    border-color: white;
    color: white;
    box-shadow: 0 0 0px 0px  white;
  }

  &:disabled {
    background-color: grey;
    color: lightgrey;
    border-color: grey;
    cursor: not-allowed;
  }
`;

export const StyledCalendar = styled.div`
  &.form-control {
    width: 150px !important; /* Adjust this value according to your desired width */
  }
`;