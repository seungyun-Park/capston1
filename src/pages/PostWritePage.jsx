//PostWritePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Header from "../components/Header"

const Wrapper = styled.div`
    background-color: #494949;
    padding: 16px;
    width: calc(100% - 32px);
    height: 87.7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;



function PostWritePage(props){
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <>
        <Header/>
        <Wrapper>
            <h1 style={{color: "white"}}>게시글 작성</h1>
            <Container>
                <TextInput
                    height = {20}
                    value = {title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    placeHolder = "제목"
                />

                <TextInput
                    height = {480}
                    value = {content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    placeHolder = "내용을 입력하세요"
                />


                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        title="글 작성하기"
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                </div>
            </Container>
        </Wrapper>
        </>
    );
}

export default PostWritePage;