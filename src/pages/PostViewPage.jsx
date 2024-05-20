import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../components/CommentList"; 
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import data from "../data.json";
import Header from "../components/Header";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #494949;
`;

const Container = styled.div`
    width: 100%;
    max-width: 900px;

    & > * {
        :not(:last-child){
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    color: white;

`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
    color: white;
`;

const AuthorText = styled.p`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 400;
    color: white;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: white;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`

function PostViewPage(props){
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");


    return (
        <>
        <Header />
        <Wrapper>
            <Container>
                <Button
                    title="글 목록"
                    onClick={() => {
                        navigate("/complain");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <AuthorText>
                        {post.author}
                    </AuthorText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={30}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />

                <Button
                    title="댓글 작성"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
        </>
    );
}

export default PostViewPage;