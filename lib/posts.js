//-- サーバサイドで実行されるAPIにfetchする為の関数 --//
import fetch from "node-fetch";

//-- JsonPlaceholderのpostsのendPoint --//
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

//-- endPointにfetchしてアクセスする関数 --//
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

//-- idの一覧を取得する --//
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//-- データベースからbuild時にデータを取得する --//
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();
  // return {
  //   post,
  // };
  return post;
}
