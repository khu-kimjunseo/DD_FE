import React from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
      } = useForm();
    const navigate = useNavigate();
    const onSubmit =(data) =>{
        console.log(data);
        // axios
        //   .post(`${}/api/auth/join`,{
        //     login_id : data.id,
        //     password : data.pw,
        //     email : data.email,
        //   })
        //   .then((res)=>{
        //     console.log(res);
        //     navigate('/authcomplete');
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })
    }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Draw Desktop</Title>
        <div>
          <label htmlFor='userid'>아이디</label>
          <Input
            id='id'
            type='text'
            placeholder='아이디'
            {...register("id",{
              required:"아이디는 필수 입력입니다.",
              minLength:{value:2, message:"2글자 이상 입력해주세요."},
              maxLength:{value:10, message:"최대 10글자 입력이 가능합니다."}
            })}/>
            {errors.id && <AlertMessage>{errors.id.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='userpw'>비밀번호</label>
          <Input
            id='password'
            type='password'
            placeholder='비밀번호'
            {...register('password',{
              required:"비밀번호는 필수 입력입니다.",
              pattern:{
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "비밀번호 형식이 맞지 않습니다.",
              }
            })}/>
            {errors.password && <AlertMessage>{errors.password.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='userpwck'>비밀번호 재확인</label>
          <Input
            id='passwordCheck'
            type='password'
            placeholder='비밀번호'
            {...register('passwordCheck',{
              required:"비밀번호는 필수 입력입니다.",
              validate:{
                check : val=>{
                    if(getValues("password") !== val){
                        return "비밀번호가 다릅니다."
                    }
                }
              }
            })}/>
            {errors.passwordCheck && <AlertMessage>{errors.passwordCheck.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='username'>이메일</label>
          <Input
            id='email'
            type='text'
            placeholder='drawdesktop@email.com'
            {...register("email",{
              required:"이메일은 필수 입력입니다.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "대소문자 구분하여 입력해주세요",
            },
            })}/>
            {errors.email && <AlertMessage>{errors.email.message}</AlertMessage>}
        </div>
        <div>
          <SubmitButton type='submit'>가입</SubmitButton>
        </div>
        </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  color: #2f2f2f;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 24px;
  text-align: center;
`;
const Input = styled.input`
  display: block;
  margin-top: 12px;
  margin-bottom: 17px;
  padding-left: 10px;
  width: 384px;
  height: 49px;
  border-radius: 7px;
  background-color: #f2f2f1;
  &::placeholder{
    padding-left: 3px;
  }
`;
const SubmitButton = styled.button`
  width: 384px;
  height: 42px;
  border-radius: 7px;
  margin-top: 51px;
  margin-bottom: 55px;
  background-color: #0F62FE;
  color: white;
`;
const AlertMessage = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #FF4646;
`;
export default Auth