import Feed from "../components/Feed";
import { useQuery } from "@tanstack/react-query";
import { getAllFeeds } from "../api";

function Home() {
  const { data } = useQuery(["feeds"], getAllFeeds);
  console.log(data);
  // const data = [
  //   // feed 여러개니까 [] list에 담아줌
  //   {
  //     id: 1,
  //     file: "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     caption: "내용",
  //     user: {
  //       username: "흰둥이",
  //       profileImg:
  //         "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     },
  //     likes: 100,
  //     commentNumber: 33,
  //     isLiked: true,
  //     comments: [
  //       // comments 여러개니까 [] list로 만들고 여러명이 다니까 {} 객체
  //       {
  //         id: 1,
  //         payload: "첫번째 댓글",
  //         user: {
  //           username: "짱구",
  //           profileImg:
  //             "https://item.kakaocdn.net/do/c620e34ce78db64b44ff1e422a35e2787154249a3890514a43687a85e6b6cc82",
  //         },
  //       },
  //       {
  //         id: 2,
  //         payload: "첫번째 댓글",
  //         user: {
  //           username: "훈이",
  //           profileImg:
  //             "https://static.miraheze.org/bigforestwiki/2/20/%EC%A2%86%EC%9D%B4.png",
  //         },
  //       },
  //       {
  //         id: 3,
  //         payload: "첫번째 댓글",
  //         user: {
  //           username: "짱아",
  //           profileImg:
  //             "https://item.kakaocdn.net/do/cf29150096df7023563020fa9aafb3ab8f324a0b9c48f77dbce3a43bd11ce785",
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     file: "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     caption: "내용",
  //     user: {
  //       username: "흰둥이",
  //       profileImg:
  //         "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     },
  //     likes: 1000,
  //     commentNumber: 20,
  //     isLiked: true,
  //   },
  //   {
  //     id: 3,
  //     file: "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     caption: "내용",
  //     user: {
  //       username: "흰둥이",
  //       profileImg:
  //         "https://i.pinimg.com/564x/39/18/dd/3918ddfed723f149733957d5bff24359.jpg",
  //     },
  //     likes: 500,
  //     commentNumber: 13,
  //     isLiked: true,
  //   },
  // ];
  return (
    <div>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </div>
  );
}

export default Home;
