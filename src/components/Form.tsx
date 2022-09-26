import React from 'react'
import styled from 'styled-components'
//import { useFormik  } from 'formik'

const StyledContainer = styled.div`
   height:400px;
   width:500px;
   border: 1px solid;
   padding: 25px 12px 18px;
   background:linear-gradient(rgba(250,0,0,0.5),transparent);
   background-color:pink;
`

const Form = styled.form`
    width: 100%;
    height: 100%;
    background-color: pink;
`
const Pan = styled.input`
    width: 100px;
    height: 40px;
    background-color: magenta;
    justify-content: space-around;
`
 const Button = styled.button`
    width: 100px;
    border: none;
    color: green;
`
//const formik = useFormik({
  //initialValues: {
    //numberCard:""
  //},
  //validation,
  //onSubmit:() => {
    //console.log('i am working')
  //}
//})

export default function FormToShow() {
  return (
    <StyledContainer>
    <Form>
        <Pan/>
        <Button>Submit Button</Button>
    </Form>
    </StyledContainer>
  )
}
