//获取贴子
export interface Topic {
  tid: number;
}

export interface User {
  uid: number;
  uname: string;
}

export interface GetPosts {
  pcontent: string;
  pid: number;
  pcreate: number;
  pname: string;
  postReply: number;
  praise: number;
  topic: Topic;
  user: User;
}


//发帖
export interface PostPosts {
  pname: string,
  pcontent: string
}

