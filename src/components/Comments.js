import styled from "styled-components";
const CommentsContainer = styled.div`
  max-width: 630px;
  margin-top: 20px;
`;
const CommentContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
const CommentCount = styled.span`
  display: block;
  opacity: 0.7;
  font-weight: 600;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const CommentAuthor = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
const CommentAuthorImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 5px;
`;
const CommentContent = styled.span``;

function Comments({ user, caption, comments, reviewsNum }) {
  return (
    <CommentsContainer>
      <CommentContainer>
        <CommentAuthor>{user}</CommentAuthor>
        <CommentContent>{caption}</CommentContent>
      </CommentContainer>
      <CommentCount>댓글 {reviewsNum}개 모두 보기</CommentCount>

      {comments?.map((comment) => (
        <CommentContainer>
          <CommentAuthorImg src={comment.user.profileImg} />
          <CommentAuthor>{comment.user.username}</CommentAuthor>
          <CommentContent>{comment.caption}</CommentContent>
        </CommentContainer>
      ))}
    </CommentsContainer>
  );
}

export default Comments;
