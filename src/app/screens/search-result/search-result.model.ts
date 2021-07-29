export class UserSearchResultDto {
  // tslint:disable-next-line: variable-name
  total_count: number;
  // tslint:disable-next-line: variable-name
  incomplete_results: boolean;
  items: UserDto[];
}

export class UserDto {
  login: string;
  id: number;
  // tslint:disable-next-line: variable-name
  node_id: string;
  // tslint:disable-next-line: variable-name
  avatar_url: string;
  // tslint:disable-next-line: variable-name
  gravatar_id: string;
  url: string;
  // tslint:disable-next-line: variable-name
  html_url: string;
  // tslint:disable-next-line: variable-name
  followers_url: string;
  // tslint:disable-next-line: variable-name
  following_url: string;
  // tslint:disable-next-line: variable-name
  gists_url: string;
  // tslint:disable-next-line: variable-name
  starred_url: string;
  // tslint:disable-next-line: variable-name
  subscriptions_url: string;
  // tslint:disable-next-line: variable-name
  organizations_url: string;
  // tslint:disable-next-line: variable-name
  repos_url: string;
  // tslint:disable-next-line: variable-name
  events_url: string;
  // tslint:disable-next-line: variable-name
  received_events_url: string;
  type: string;
  // tslint:disable-next-line: variable-name
  site_admin: boolean;
  score: number;
}
