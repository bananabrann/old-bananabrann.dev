export interface Tweet {
  id: string;
  text: string;
}

// The response when calling
// https://api.twitter.com/2/users/${bananabrannId}/tweets
// Notice that 'data' is nested twice, and accessed by `response.data.data`
export interface TwitterApiUserTweetResponse {
  data: Tweet[];
  meta: {
    result_count: number;
    newest_id: string;
    oldest_id: string;
    next_token: string;
  }
}
