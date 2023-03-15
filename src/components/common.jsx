import styled from "styled-components";

export const MainContainer = styled.div`
// overflow-y: scroll;
// width: 100%;
// overflow-x: hidden;
// left: 0;
// right: 0;
// top: 0;
// bottom: 0;
// position: absolute;
// z-index: 1;
// overflow-x: hidden;
// will-change: scroll-position;
// contain: content style layout;
// overflow-y:scroll;

// margin-left: 15%;
// margin-right: 15%;
`;

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  color: #000;
`;

export const BoldLink = styled.a`
  font-size: 17px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;
export const BoldLinkError = styled.a`
  font-size: 16px;
  color: rgb(255, 0, 0);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  background-color: rgba(200, 200, 200, 0.3);

  // background-color: #000;
  color:#000;
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0 10px;
  margin-top:20px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 18px;
  &::placeholder {
    color: #000;
    font-size: 16px;
  }
  
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  &:last-of-type {
    // margin:10px 0 20px;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
`;