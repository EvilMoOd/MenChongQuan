//发帖
export interface SubmitComment {
  rcontent: string
  pid: number
}
//获取贴子信息
export interface Floor {
  rcontent: string;
  rid: number;
  rtime: number;
  uid: number;
  uname: string;
}

export interface PostDetail {
  pname: string;
  pid: number;
  floor: Floor[];
}
